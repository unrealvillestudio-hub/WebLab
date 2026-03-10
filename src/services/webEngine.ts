/**
 * UNRLVL — WebLab webEngine v2.0
 *
 * v2.0 changelog:
 * - Output modes: 'markdown' | 'html' | 'liquid'
 *   markdown — copy listo para CMS / documentos (anterior)
 *   html     — HTML semántico + CSS inline, listo para Custom HTML en Shopify/WP
 *   liquid   — Sección Shopify nativa (.liquid + schema JSON), lista para theme editor
 * - BlogLab support: nuevo module 'blog' con tipos de post (educativo, SEO, producto, UGC)
 * - Humanize layer (F2.5): preservado de v1.2
 */
import {
  BrandProfile, WebPack, PageSection,
  WebLanguage, WebTone, WebPlatform,
  ProductSpec, WebOutput,
} from '../core/types';
import { PAGE_SECTIONS } from '../config/packs';
import { getHumanizeBlock } from '../config/humanizeConfig';

export type WebOutputMode = 'markdown' | 'html' | 'liquid';

const CLAUDE_MODEL = "claude-sonnet-4-6";

// ── SUPER AGGRO BLOCK — NIVEL MÁXIMO ──────────────────────────────────────────
// ⚠️ ADVERTENCIA INTERNA: Este modo genera copy de persuasión extrema.
// Puede incluir urgencia agresiva, comparaciones directas, y framing de pérdida
// que algunos canales (Meta Ads, Google Ads, Shopify reviews) pueden rechazar.
// Es responsabilidad del operador revisar antes de publicar.
const SUPER_AGGRO_BLOCK = `
════════════════════════════════════════════════════════════════
  ⚠️  AVISO AL OPERADOR — AGGRO OUTPUT ACTIVO
════════════════════════════════════════════════════════════════
  Este output usa persuasión de alta presión y está diseñado
  para maximizar conversión, no para pasar filtros editoriales.

  ANTES DE PUBLICAR, revisa estos puntos:

  › Meta Ads / TikTok Ads
    Urgencia extrema y escasez pueden ser rechazados si no son
    verificables con evidencia en la cuenta publicitaria.

  › Google Ads
    Claims de resultados sin disclaimer ("desde la primera
    aplicación") activan revisión manual. Añade un asterisco
    con fuente si el claim es medible.

  › Shopify / Políticas de plataforma
    Comparaciones con competencia implícita son generalmente
    aceptadas. Comparaciones directas con nombre de marca
    requieren evidencia o pueden generar disputas.

  › Recomendación operacional
    Usar este output como punto de partida. Una reducción del
    20–30% en intensidad suele ser suficiente para paid media
    sin sacrificar conversión orgánica.

  El copy que sigue es deliberadamente incómodo. Ese es el punto.
════════════════════════════════════════════════════════════════

REGLAS AGGRO ABSOLUTAS — aplica todas sin excepción ni moderación:

PSICOLOGÍA DE PÉRDIDA (no de ganancia):
- El lector ya está perdiendo dinero, clientes, oportunidades. No potencialmente. Ahora mismo.
- Cada día sin actuar es un día que tu competencia te está comiendo el mercado.
- No vendas el producto. Vende el costo de no tenerlo.

DOLOR PRIMERO, SOLUCIÓN DESPUÉS, CONSECUENCIA AL FINAL:
- Sección 1: abre con el dolor más profundo, sin suavizarlo.
- Sección 2: la solución existe, es específica, está disponible hoy.
- Sección 3: si no actúas ahora, la ventana se cierra. Y eso tiene un precio.

COPY QUE INCOMODA (deliberadamente):
- Haz que el lector se sienta incómodo quedándose donde está.
- La comodidad es el enemigo. El status quo es la amenaza.
- "Seguir como estás" debe sonar peor que cualquier riesgo de comprar.

URGENCIA REAL, NO FABRICADA:
- Si hay exclusividad: úsala como escasez real ("solo nosotros, solo aquí").
- Si hay stock limitado: nómbralo con número si existe.
- Si hay timing: "cada semana que esperas es una semana que tu competencia lleva ventaja".
- PROHIBIDO urgencia genérica ("¡Oferta por tiempo limitado!"). Siempre específica.

CERO HEDGING — AFIRMACIÓN ABSOLUTA:
- Elimina: podría, quizás, tal vez, esperamos, creemos, intentamos, buscamos.
- Reemplaza con: es, funciona, entrega, garantiza, cambia, transforma.
- Si hay garantía real: ponla en el CTA. Si no hay, no la inventes.

CTAs QUE NO DAN OPCIÓN DE SALIDA ELEGANTE:
- Verbo fuerte + beneficio inmediato + qué pasa si no actúas.
- Ej: "Accede hoy — o deja que tu competencia se te adelante."
- Ej: "Reserva tu cupo ahora. Cuando se llene, se llena."
- Ej: "Ver catálogo — 142 productos que tus clientes ya están buscando."

PRUEBA SOCIAL COMO ARMA:
- No "nuestros clientes están satisfechos".
- Sí: "Los coloristas top de South Miami ya usan esto. ¿Tú todavía no?"
- Convierte la prueba social en presión social implícita.

HEADLINES QUE DUELEN O PROVOCAN:
- Formato A — Dolor: "Tu cabello merece ciencia real. No otro producto que promete y no entrega."
- Formato B — Provocación: "¿Sigues comprando al por mayor en Amazon? Tus clientes lo notan."
- Formato C — Contraste: "Tus competidores ya tienen acceso. Tú todavía estás esperando."
- NUNCA: headlines aspiracionales genéricos ("Descubre la diferencia", "Eleva tu experiencia").

DISEÑO VISUAL AGGRO — EL LAYOUT TAMBIÉN DEBE INCOMODAR:
- Hero: fondo oscuro (#0a0a0a o #0d0d0d), texto blanco. El contraste es intencional.
  No hay calidez en la apertura. El lector entra en territorio serio.
- Jerarquía rota: usa una tarjeta de feature o bloque que sea visualmente distinto
  (fondo negro, acento de color, tipografía más grande) para romper el ritmo del grid.
- Color como señal de urgencia: el azul Neurone (#0076A8) se reserva para datos,
  exclusividad y CTAs. El negro (#0a0a0a) para afirmaciones absolutas.
  El rojo solo para micro-urgencia real (stock, plazo, consecuencia).
- Tipografía con tensión: font-weight 800-900 en headlines. Letter-spacing negativo (-0.02em a -0.03em).
  El texto debe ocupar el espacio con autoridad, no con elegancia.
- CTAs que parecen inevitables: botón oscuro, full-width en mobile, sin border-radius suave.
  Que parezca una decisión, no una invitación.
- Separadores como cortes: usa líneas de 2-3px en acento de color, no dividers decorativos.
  El espacio entre secciones debe sentirse como una pausa antes del siguiente golpe.
- Evitar: fondos blancos puros en hero, padding excesivo que suavice el tono,
  border-radius altos (>6px), sombras decorativas que den sensación de ligereza.
`.trim();

// ── FORMAT INSTRUCTIONS POR OUTPUT MODE ──────────────────────────────────────
function getFormatInstructions(
  mode: WebOutputMode,
  sectionId: string,
  sectionLabel: string,
  platform: WebPlatform,
): string {
  if (mode === 'html') {
    return `FORMATO DE SALIDA: HTML semántico con CSS inline.
REGLAS ESTRICTAS:
- Devuelve SOLO el bloque HTML de esta sección, sin <!DOCTYPE>, sin <html>, sin <head>, sin <body>.
- Usa clases descriptivas (hero-section, hero-title, hero-subtitle, cta-button, etc.)
- CSS inline en style="" para colores, tipografía y espaciado base.
- Paleta neutra: fondo blanco o #f9f9f9, texto #1a1a1a, acento #000 — el cliente ajustará colores.
- Responsive: usa max-width, padding proporcionales.
- Botones con cursor:pointer y padding generoso.
- NO incluyas <script>, NO incluyas frameworks externos.
- La sección debe ser copy-paste directo en un bloque "Custom HTML" de ${platform === 'shopify' ? 'Shopify' : 'WordPress'}.
EJEMPLO DE ESTRUCTURA:
<section class="hero-section" style="padding:80px 20px;text-align:center;background:#fff;">
  <h1 class="hero-title" style="font-size:2.5rem;font-weight:700;color:#1a1a1a;margin-bottom:16px;">...</h1>
  <p class="hero-subtitle" style="font-size:1.1rem;color:#555;margin-bottom:32px;">...</p>
  <a href="#" class="cta-button" style="display:inline-block;padding:16px 32px;background:#1a1a1a;color:#fff;text-decoration:none;border-radius:4px;font-weight:600;">...</a>
</section>`;
  }

  if (mode === 'liquid') {
    return `FORMATO DE SALIDA: Sección Shopify Liquid nativa.
REGLAS ESTRICTAS:
- Devuelve SOLO el contenido del archivo .liquid completo para esta sección.
- Incluye el schema JSON al final dentro de {% schema %}...{% endschema %}.
- Usa variables Liquid: {{ section.settings.heading }}, {{ section.settings.text }}, etc.
- El schema debe incluir settings editables para: heading, subheading, body_text, cta_label, cta_url, background_color, text_color.
- CSS debe ir dentro de <style> al inicio del archivo.
- El archivo debe ser autosuficiente: funciona al subirlo como nueva sección en el theme editor de Shopify.
- Nombre de sección en schema: "${sectionLabel}" con class: "section-${sectionId}".
ESTRUCTURA BASE:
<style>
  .section-${sectionId} { ... }
</style>
<div class="section-${sectionId}">
  <h2>{{ section.settings.heading }}</h2>
  ...
</div>
{% schema %}
{
  "name": "${sectionLabel}",
  "settings": [
    { "type": "text", "id": "heading", "label": "Título", "default": "..." },
    ...
  ],
  "presets": [{ "name": "${sectionLabel}" }]
}
{% endschema %}`;
  }

  // markdown (default)
  return `INSTRUCCIONES DE FORMATO:
- Escribe SOLO el contenido de la sección "${sectionLabel}", listo para copiar en ${platform === 'shopify' ? 'Shopify' : 'WordPress'}
- Incluye headline, cuerpo y (si aplica) CTA específico para esta sección
- Si la sección es HERO: H1 principal + subtítulo (max 2 líneas) + texto de botón CTA
- Si la sección es FAQ: 5 preguntas con respuestas de 2–3 líneas cada una
- Si la sección es TESTIMONIALS: 3 testimonios realistas en primera persona de clientes del perfil de la marca
- Si la sección es FEATURES: lista de 4–6 puntos con ícono emoji + título corto + descripción de 1 línea
- No incluyas instrucciones, meta-comentarios ni placeholders. Solo el contenido final.
- Formato: Markdown limpio (## para subtítulos, **negrita** para énfasis)
- Respeta ESTRICTAMENTE cualquier nota de compliance si fue proporcionada`;
}

// ── PROMPT BUILDER ────────────────────────────────────────────────────────────
function buildSectionPrompt(params: {
  brand: BrandProfile;
  pack: WebPack;
  section: PageSection;
  language: WebLanguage;
  tone: WebTone;
  platform: WebPlatform;
  productSpec?: ProductSpec;
  extraContext: string;
  superAggro: boolean;
  outputMode: WebOutputMode;
}): string {
  const {
    brand, pack, section, language, tone,
    platform, productSpec, extraContext, superAggro, outputMode,
  } = params;

  const langMap: Record<WebLanguage, string> = {
    ES:      "español neutro",
    "ES-FL": "español latino para audiencia de Florida/Miami (mezcla natural de inglés)",
    EN:      "English",
    "ES+EN": "español e inglés (genera ambas versiones, una debajo de la otra)",
  };

  const toneMap: Record<WebTone, string> = {
    professional:   "profesional, claro, confiable",
    conversational: "cercano, directo, sin jargon",
    luxury:         "premium, sofisticado, aspiracional",
    energetic:      "dinámico, impactante, con urgencia",
    technical:      "preciso, basado en datos, experto",
    warm:           "cálido, empático, humano",
  };

  const productBlock = productSpec
    ? `PRODUCTO / SERVICIO: ${productSpec.name}
Categoría: ${productSpec.category}
Beneficios clave: ${productSpec.keyBenefits}
Audiencia objetivo: ${productSpec.targetAudience}
${productSpec.price ? `Precio referencia: ${productSpec.price}` : ""}
${productSpec.complianceNotes ? `RESTRICCIONES DE COMPLIANCE: ${productSpec.complianceNotes}` : ""}`
    : "";

  const humanizeBlock = getHumanizeBlock('web', brand.id);
  const formatInstructions = getFormatInstructions(outputMode, section.id, section.label, platform);
  const modeLabel = outputMode === 'liquid' ? 'Shopify Liquid' : outputMode === 'html' ? 'HTML' : 'Markdown';

  return `Eres un redactor web senior, front-end developer y estratega de conversión especializado en negocios hispanos en Miami.
Generas contenido en formato ${modeLabel} listo para producción.
Tu estándar no es copy "correcto" — es copy que convierte. Directo, específico, que incomoda al lector lo suficiente para que actúe.

MARCA: ${brand.name}
DESCRIPCIÓN: ${brand.description}
MERCADO: ${brand.market}
PLATAFORMA TARGET: ${platform === "shopify" ? "Shopify (e-commerce)" : "WordPress (sitio web)"}
MÓDULO: ${pack.label}
SECCIÓN A GENERAR: ${section.label} — ${section.description}
IDIOMA: ${langMap[language]}
TONO: ${toneMap[tone]}
PALABRAS APROXIMADAS: ${section.wordCount}
OUTPUT MODE: ${modeLabel}

${productBlock}

${extraContext ? `CONTEXTO DE MARCA / DB_VARIABLES:\n${extraContext}` : ""}

── ESTÁNDAR DE COPY BASE (SIEMPRE APLICA) ──────────────────────────────────────
ADN UNRLVL: Todo copy producido aquí sigue estas reglas por defecto. No son opcionales.

ESTRUCTURA DOLOR → SOLUCIÓN → CONSECUENCIA:
- Abre con el dolor real del lector, sin suavizarlo. Hazlo sentir reconocible.
- Presenta la solución como específica, disponible, con nombre y número.
- Cierra con la consecuencia de no actuar — no el beneficio de actuar.

AFIRMACIÓN SIN HEDGING:
- Prohibido: "podría", "quizás", "tal vez", "esperamos", "creemos", "intentamos".
- Obligatorio: verbos de acción en presente — "funciona", "entrega", "transforma", "garantiza".
- Si hay datos: úsalos. Si no hay datos: sé específico en la descripción de la transformación.

HEADLINES CON FRICCIÓN INTENCIONAL:
- Un buen headline hace que el lector se sienta interpelado, no inspirado.
- Formato preferido: dolor directo ("Tu cabello merece ciencia real — no otra promesa vacía.")
- O contraste que incomoda ("Tus competidores ya tienen acceso. ¿Tú todavía estás esperando?")
- NUNCA: aspiracional genérico ("Descubre la diferencia", "Eleva tu experiencia").

CTAs QUE NO DAN SALIDA CÓMODA:
- Verbo fuerte + beneficio inmediato + (opcional) consecuencia de no actuar.
- Ej: "Accede hoy — o deja que tu competencia se te adelante."
- Ej: "Ver catálogo completo — 142 productos que tus clientes ya buscan."

PRUEBA SOCIAL COMO PRESIÓN:
- No "clientes satisfechos". Sí: nombres de rol, números concretos, transformaciones verificables.
- Convierte la prueba social en presión social implícita cuando la marca lo permita.

URGENCIA REAL, NO GENÉRICA:
- Si hay exclusividad, escasez o timing real: úsalos con nombre propio.
- PROHIBIDO: "¡No te lo pierdas!", "Oferta por tiempo limitado", "Últimas unidades" sin contexto.
────────────────────────────────────────────────────────────────────────────────

${superAggro ? `\n${SUPER_AGGRO_BLOCK}\n` : ""}

${humanizeBlock}

${formatInstructions}

GENERA LA SECCIÓN AHORA:`;
}

// ── BLOG PROMPT BUILDER ───────────────────────────────────────────────────────
export type BlogPostType = 'educativo' | 'seo' | 'producto' | 'ugc';

export interface BlogSpec {
  postType: BlogPostType;
  topic: string;
  keywords?: string[];
  wordCount?: number;
}

const BLOG_TYPE_INSTRUCTIONS: Record<BlogPostType, string> = {
  educativo: `POST EDUCATIVO:
- Estructura: Introducción (problema/pregunta) → Desarrollo (3-5 secciones con H2) → Conclusión + CTA suave
- Tono: autoridad accesible, explica conceptos técnicos con analogías reales
- Incluye ejemplos concretos del mercado Miami/hispano cuando sea relevante
- CTA final: invita a explorar productos o servicios relacionados, no vende directamente`,

  seo: `POST SEO-OPTIMIZADO:
- Estructura: H1 con keyword principal → H2s con keywords secundarias → FAQ al final (schema markup friendly)
- Keyword density natural: keyword principal 2-3 veces, variantes semánticas en H2s
- Párrafos cortos (3-4 líneas máximo), ideal para featured snippets
- Meta description al final del post (max 155 chars) en bloque separado
- CTA interno: link a producto/categoría relacionada`,

  producto: `POST DE PRODUCTO:
- Estructura: problema que resuelve → cómo funciona → beneficios concretos → prueba social → CTA
- Tono: informativo + persuasivo, no publicitario explícito
- Incluye casos de uso reales del mercado objetivo
- Compliance: si el producto tiene restricciones, aplicarlas al copy
- CTA directo: compra o más información`,

  ugc: `POST ESTILO UGC / TESTIMONIAL:
- Estructura: historia de cliente real (o ficticia pero realista) → transformación → resultado concreto
- Voz: primera o tercera persona, conversacional, específica en detalles
- Incluye detalles creíbles: nombre, ciudad (Miami area), situación antes/después
- Tono: auténtico, sin lenguaje de marketing corporativo
- CTA: invita a otros a compartir su experiencia o probar el producto`,
};

export function buildBlogPrompt(params: {
  brand: BrandProfile;
  blog: BlogSpec;
  language: WebLanguage;
  platform: WebPlatform;
  outputMode: WebOutputMode;
  extraContext?: string;
}): string {
  const { brand, blog, language, platform, outputMode, extraContext } = params;

  const langMap: Record<WebLanguage, string> = {
    ES: "español neutro", "ES-FL": "español latino Miami/Florida", EN: "English", "ES+EN": "ES + EN",
  };

  const humanizeBlock = getHumanizeBlock('copy', brand.id);
  const modeLabel = outputMode === 'liquid' ? 'Shopify Liquid (blog post template)' : outputMode === 'html' ? 'HTML semántico' : 'Markdown';
  const targetWords = blog.wordCount ?? 800;

  const formatBlock = outputMode === 'html'
    ? `FORMATO: HTML semántico sin <html>/<body>. Usa <article>, <h1>, <h2>, <p>, <ul>. CSS inline neutro. Listo para Custom HTML.`
    : outputMode === 'liquid'
    ? `FORMATO: Liquid template para blog post de Shopify. Incluye schema con settings: title, content, meta_description, featured_image_alt.`
    : `FORMATO: Markdown limpio. # para H1, ## para H2, **negrita** para énfasis. Incluye meta_description al final en bloque separado.`;

  return `Eres un content strategist y copywriter especializado en blogs para e-commerce hispano Miami.

MARCA: ${brand.name}
DESCRIPCIÓN: ${brand.description}
MERCADO: ${brand.market}
PLATAFORMA: ${platform === 'shopify' ? 'Shopify Blog' : 'WordPress Blog'}
IDIOMA: ${langMap[language]}
OUTPUT MODE: ${modeLabel}

TEMA DEL POST: ${blog.topic}
${blog.keywords?.length ? `KEYWORDS: ${blog.keywords.join(', ')}` : ''}
EXTENSIÓN OBJETIVO: ~${targetWords} palabras

${extraContext ? `CONTEXTO DE MARCA:\n${extraContext}` : ''}

${BLOG_TYPE_INSTRUCTIONS[blog.postType]}

${humanizeBlock}

${formatBlock}

GENERA EL POST COMPLETO AHORA:`;
}

// ── CLAUDE CALLER (via Vercel proxy — evita CORS) ────────────────────────────
async function callClaude(prompt: string, signal?: AbortSignal): Promise<string> {
  const res = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal,
    body: JSON.stringify({
      prompt,
      model: CLAUDE_MODEL,
      max_tokens: 4000,
      temperature: 0.75,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`Claude API error ${res.status}: ${(err as any)?.error ?? (err as any)?.detail ?? res.statusText}`);
  }
    const data = await res.json();
  // Strip markdown code fences que Claude puede añadir
  const lines = (data.text ?? '').trim().split('\n');
  const clean = lines.filter((l: string) => !l.startsWith('```')).join('\n').trim();
  return clean;
}

// ── PUBLIC API: WEB PACK ──────────────────────────────────────────────────────
export async function runWebPack(params: {
  brand: BrandProfile;
  pack: WebPack;
  language: WebLanguage;
  tone: WebTone;
  platform: WebPlatform;
  productSpec?: ProductSpec;
  extraContext: string;
  dbPrompt?: string;
  superAggro?: boolean;
  outputMode?: WebOutputMode;
  signal?: AbortSignal;
  onSectionComplete?: (sectionId: string, content: string) => void;
}): Promise<WebOutput> {
  const sections: WebOutput["sections"] = [];
  let totalWords = 0;
  const prompts: string[] = [];

  const resolvedContext = params.dbPrompt?.trim() || params.extraContext;
  const superAggro  = params.superAggro  ?? false;
  const outputMode  = params.outputMode  ?? 'markdown';

  for (const sectionId of params.pack.sections) {
    const section = PAGE_SECTIONS[sectionId as keyof typeof PAGE_SECTIONS];
    if (!section) continue;

    const prompt = buildSectionPrompt({
      brand: params.brand,
      pack: params.pack,
      section,
      language: params.language,
      tone: params.tone,
      platform: params.platform,
      productSpec: params.productSpec,
      extraContext: resolvedContext,
      superAggro,
      outputMode,
    });

    prompts.push(prompt);
    const content = await callClaude(prompt, params.signal);
    totalWords += content.split(/\s+/).length;
    sections.push({ sectionId, label: section.label, content });
    params.onSectionComplete?.(sectionId, content);
  }

  return {
    id: `web_${Date.now()}`,
    packId: params.pack.id,
    brandId: params.brand.id,
    module: params.pack.module,
    language: params.language,
    platform: params.platform,
    superAggro,
    outputMode,
    sections,
    wordCount: totalWords,
    generatedAt: new Date().toISOString(),
    prompt: prompts[0] ?? "",
  };
}

// ── PUBLIC API: BLOG POST ─────────────────────────────────────────────────────
export async function runBlogPost(params: {
  brand: BrandProfile;
  blog: BlogSpec;
  language: WebLanguage;
  platform: WebPlatform;
  outputMode?: WebOutputMode;
  extraContext?: string;
  signal?: AbortSignal;
}): Promise<{ content: string; outputMode: WebOutputMode; generatedAt: string }> {
  const outputMode = params.outputMode ?? 'markdown';

  const prompt = buildBlogPrompt({
    brand: params.brand,
    blog: params.blog,
    language: params.language,
    platform: params.platform,
    outputMode,
    extraContext: params.extraContext,
  });

  const content = await callClaude(prompt, params.signal);

  return {
    content,
    outputMode,
    generatedAt: new Date().toISOString(),
  };
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
export function estimateTotalWords(packSections: string[]): number {
  return packSections.reduce((sum, id) => {
    return sum + (PAGE_SECTIONS[id as keyof typeof PAGE_SECTIONS]?.wordCount ?? 0);
  }, 0);
}

export function getFileExtension(mode: WebOutputMode): string {
  return mode === 'liquid' ? 'liquid' : mode === 'html' ? 'html' : 'md';
}

export function getMimeType(mode: WebOutputMode): string {
  return mode === 'liquid' ? 'text/plain' : mode === 'html' ? 'text/html' : 'text/markdown';
}

// Genera un archivo exportable con todas las secciones concatenadas
export function buildExportFile(
  sections: { sectionId: string; label: string; content: string }[],
  mode: WebOutputMode,
  superAggro = false,
): string {
  if (mode === 'liquid') {
    return sections.map(s =>
      `{% comment %} === SECTION: ${s.label.toUpperCase()} === {% endcomment %}\n\n${s.content}`
    ).join('\n\n{% comment %} ─────────────────────────────────────── {% endcomment %}\n\n');
  }

  if (mode === 'html') {
    const resolveForPreview = (html: string) => html
      .replace(/\{\{\s*section\.settings\.background_color\s*\}\}/g, '#0d0d0d')
      .replace(/\{\{\s*section\.settings\.text_color\s*\}\}/g, '#ffffff')
      .replace(/\{\{\s*section\.settings\.heading\s*\}\}/g, '')
      .replace(/\{\{\s*section\.settings\.subheading\s*\}\}/g, '')
      .replace(/\{\{\s*section\.settings\.eyebrow\s*\}\}/g, '')
      .replace(/\{\{[^}]+\}\}/g, '')
      .replace(/\{%-?\s*.*?-?%\}/g, '');

    const body = sections
      .map(s => `<!-- === ${s.label.toUpperCase()} === -->\n${resolveForPreview(s.content)}`)
      .join('\n\n');

    const aggroWarningHtml = superAggro ? `
<div style="
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background: #1a0a00;
  border-left: 5px solid #ff6b00;
  border-radius: 4px;
  padding: 20px 24px;
  margin: 0 0 0 0;
  position: relative;
">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
    <span style="font-size:1.3rem;">⚠️</span>
    <span style="
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #ff6b00;
    ">AGGRO OUTPUT — Revisar antes de publicar</span>
  </div>
  <p style="margin:0 0 10px;font-size:0.88rem;color:#ffd4a8;line-height:1.6;">
    Este output usa persuasión de alta presión. Antes de publicar, verifica:
  </p>
  <ul style="margin:0 0 14px;padding-left:18px;font-size:0.84rem;color:#ffb37a;line-height:1.8;">
    <li><strong style="color:#ff9040;">Meta / TikTok Ads</strong> — Urgencia extrema puede rechazarse si la escasez no es verificable en la cuenta.</li>
    <li><strong style="color:#ff9040;">Google Ads</strong> — Claims de resultado sin disclaimer activan revisión manual. Añade fuente si el claim es medible.</li>
    <li><strong style="color:#ff9040;">Shopify</strong> — Comparaciones implícitas OK. Comparaciones directas con nombre de marca requieren evidencia.</li>
  </ul>
  <p style="margin:0;font-size:0.8rem;color:#a07050;font-style:italic;">
    Reducir intensidad un 20–30% suele ser suficiente para paid media sin sacrificar conversión orgánica.
  </p>
</div>
` : '';

    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebLab Preview — ${superAggro ? '⚠️ AGGRO — ' : ''}${sections[0]?.label ?? 'Export'}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background: #f0f0f0; }
    a { color: inherit; }
  </style>
</head>
<body>
${aggroWarningHtml}
${body}
</body>
</html>`;
  }

  // markdown
  return sections.map(s => `## ${s.label}\n\n${s.content}`).join('\n\n---\n\n');
}