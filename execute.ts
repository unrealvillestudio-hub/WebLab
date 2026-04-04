/**
 * WebLab — POST /api/execute
 * Endpoint para integración con Orchestrator UNRLVL.
 *
 * Acepta { brandId, stage, params, previousOutputs }
 * → Carga brand context + product blueprints desde Supabase
 * → Genera copy web (HTML semántico o Liquid para Shopify) con Claude
 * → Devuelve { output: string, status: 'ok' }
 *
 * Env vars: ANTHROPIC_API_KEY, VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
 */

declare const process: { env: Record<string, string | undefined> };

const CLAUDE_MODEL = 'claude-sonnet-4-20250514';
const SB_URL  = () => process.env.VITE_SUPABASE_URL ?? '';
const SB_KEY  = () => process.env.VITE_SUPABASE_ANON_KEY ?? '';
const ANT_KEY = () => process.env.ANTHROPIC_API_KEY ?? '';

// ── TYPES ─────────────────────────────────────────────────────────────────────

interface ExecuteRequest {
  brandId: string | null;
  stage: { labId: string; label: string; description: string; order: number };
  params: {
    section_type?: string;   // hero | landing | product | blog | about | email
    platform?: string;       // shopify | wordpress | html
    product_id?: string;     // SKU o ID de product_blueprints
    idioma?: string;
    extra_instructions?: string;
  };
  previousOutputs: Record<string, string>;
}

// ── SUPABASE HELPERS ───────────────────────────────────────────────────────────

async function sb<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${SB_URL()}/rest/v1/${path}`, {
      headers: { apikey: SB_KEY(), Authorization: `Bearer ${SB_KEY()}` },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? (data[0] ?? null) : data;
  } catch { return null; }
}

async function sbArray<T>(path: string): Promise<T[]> {
  try {
    const res = await fetch(`${SB_URL()}/rest/v1/${path}`, {
      headers: { apikey: SB_KEY(), Authorization: `Bearer ${SB_KEY()}` },
    });
    if (!res.ok) return [];
    return await res.json();
  } catch { return []; }
}

// ── BUILD WEB PROMPT ──────────────────────────────────────────────────────────

async function buildPrompt(req: ExecuteRequest): Promise<{ system: string; user: string }> {
  const brandId      = req.brandId ?? 'DEFAULT';
  const sectionType  = req.params.section_type ?? 'landing';
  const platform     = req.params.platform ?? 'shopify';
  const productId    = req.params.product_id;

  const [brand, humanize, compliance, product] = await Promise.all([
    sb<any>(`brands?id=eq.${brandId}&select=id,name,market,language_primary,status`),
    sb<any>(`humanize_profiles?brand_id=eq.${brandId}&select=*`),
    sb<any>(`compliance_rules?brand_id=eq.${brandId}&select=rules_text`),
    productId
      ? sb<any>(`product_blueprints?id=eq.${productId}&select=*`)
      : sb<any>(`product_blueprints?brand_id=eq.${brandId}&select=*&limit=1`),
  ]);

  const idioma    = req.params.idioma ?? brand?.language_primary ?? 'es-ES';
  const brandName = brand?.name ?? brandId;
  const market    = brand?.market ?? '';

  // Instrucciones por plataforma
  const platformInstructions: Record<string, string> = {
    shopify:   'Genera código Liquid válido para Shopify con variables {{ section.settings.* }}. Incluye el schema JSON al final.',
    wordpress: 'Genera HTML semántico limpio compatible con el editor de bloques de WordPress (Gutenberg). Usa clases CSS descriptivas.',
    html:      'Genera HTML semántico con clases BEM. CSS inline solo para valores de marca (colores). Sin frameworks.',
  };

  const sectionInstructions: Record<string, string> = {
    hero:      'Hero section: Headline principal + Subheadline + CTA primario + CTA secundario. Copy directo, sin rodeos.',
    landing:   'Landing page completa: Hero + Problema/Solución + 3 beneficios clave + Social proof placeholder + FAQ (3 preguntas) + CTA final.',
    product:   'Página de producto: Título SEO + Descripción corta (150 chars) + Descripción larga (300 chars) + Bullets de beneficios + CTA de compra.',
    blog:      'Artículo de blog: Título + Meta description + Intro (150 palabras) + 3 secciones H2 con contenido + Conclusión + CTA.',
    about:     'Página About/Nosotros: Historia de marca + Misión + Valores (3) + Equipo placeholder + CTA de contacto.',
    email:     'Email template HTML: Header con logo placeholder + Cuerpo (2-3 secciones) + CTA + Footer con unsubscribe.',
  };

  let productContext = '';
  if (product) {
    productContext = `
PRODUCTO:
- Nombre: ${product.product_name ?? product.name ?? ''}
- SKU: ${product.sku ?? ''}
- Descripción: ${product.description ?? ''}
- Beneficios: ${product.benefits ?? ''}
- Precio: ${product.price ?? 'Ver tienda'}
- Categoría: ${product.category ?? ''}`;
  }

  let humanizeContext = '';
  if (humanize) {
    humanizeContext = `
VOZ DE MARCA:
Tono: ${humanize.tone ?? ''}
Personalidad: ${humanize.personality ?? ''}
Evitar: ${humanize.avoid_phrases ?? ''}`;
  }

  // Previous copy from CopyLab if available
  const copyLabOutput = req.previousOutputs?.copylab ?? req.previousOutputs?.CopyLab ?? '';
  const prevContext = copyLabOutput
    ? `\nCOPY DE REFERENCIA (CopyLab): Adapta este copy al formato web:\n${copyLabOutput.slice(0, 500)}`
    : '';

  const system = `Eres WebLab, el motor de copy web de UNRLVL Studio. Generas contenido web profesional listo para publicar.

MARCA: ${brandName} | MERCADO: ${market} | IDIOMA: ${idioma}
${humanizeContext}
${productContext}
${prevContext}
${compliance?.rules_text ? `\nCOMPLIANCE:\n${compliance.rules_text}` : ''}

PLATAFORMA: ${platform.toUpperCase()}
${platformInstructions[platform] ?? platformInstructions.html}

Reglas:
- Idioma: ${idioma}. Todo el copy en este idioma.
- Copy que convierte, no copy de relleno.
- Sin placeholder lorem ipsum.
- Incluye comentarios HTML solo donde sean útiles para el cliente.`;

  const extra = req.params.extra_instructions ?? req.stage.description;
  const user = `SECCIÓN SOLICITADA: ${sectionType}

${sectionInstructions[sectionType] ?? sectionInstructions.landing}

${extra ? `Instrucciones adicionales: ${extra}` : ''}

Genera el código ${platform} ahora. Solo el código, sin preámbulo.`;

  return { system, user };
}

// ── CLAUDE CALL ────────────────────────────────────────────────────────────────

async function callClaude(system: string, user: string): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANT_KEY(),
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 2000,
      temperature: 0.6,
      system,
      messages: [{ role: 'user', content: user }],
    }),
  });
  if (!res.ok) throw new Error(`Claude API error: ${res.status}`);
  const data = await res.json();
  return data.content?.[0]?.text ?? '';
}

// ── HANDLER ───────────────────────────────────────────────────────────────────

const CORS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'https://orchestrator.vercel.app',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
  if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed', status: 'error' }), { status: 405, headers: CORS });

  let body: ExecuteRequest;
  try { body = await req.json(); }
  catch { return new Response(JSON.stringify({ error: 'Invalid JSON', status: 'error' }), { status: 400, headers: CORS }); }

  if (!body.brandId) {
    return new Response(JSON.stringify({ error: 'brandId is required', status: 'error' }), { status: 400, headers: CORS });
  }

  try {
    const { system, user } = await buildPrompt(body);
    const output = await callClaude(system, user);
    return new Response(JSON.stringify({ output, status: 'ok' }), { status: 200, headers: CORS });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[WebLab /api/execute]', msg);
    return new Response(JSON.stringify({ error: msg, status: 'error' }), { status: 500, headers: CORS });
  }
}
