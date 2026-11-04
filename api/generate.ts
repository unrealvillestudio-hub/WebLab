import type { VercelRequest, VercelResponse } from '@vercel/node';

// ── Guard de costo (2026-11-04) ─────────────────────────────────────────────
// RAÍZ: este endpoint reenviaba a Anthropic el `model` y `max_tokens` elegidos por
// quien llama (aceptaba claude-opus-5-5) con una key expuesta en el bundle (prefijo
// VITE_). Un proxy LLM público sin tope de modelo ni de tokens es una puerta abierta
// de gasto: alcanzó un pico de ~$29 en un día en Opus 5.5 el 2026-11-04.
// BARRERA (permanente, en el server, no en el cliente):
//   1. Modelo: allowlist de TOPE DE SEGURIDAD (nunca Opus). No es la decisión de
//      modelo de negocio —esa vive en ops_lab_models—; es un techo. Un modelo fuera
//      del allowlist se degrada al más barato en vez de ejecutarse.
//   2. max_tokens: tope duro.
//   3. Key: SÓLO process.env.ANTHROPIC_API_KEY (nunca VITE_, que la mete en el bundle).
//   4. Secreto opcional: si PROXY_SHARED_SECRET está definido, se exige en el header.
// El cliente legítimo (webEngine / EcomProductSelector) sigue mandando sonnet: no se rompe.
const MODELOS_PERMITIDOS = new Set([
  'claude-sonnet-4-20250514',
  'claude-sonnet-4-6',
  'claude-sonnet-5',
  'claude-haiku-4-5',
]);
const MODELO_POR_DEFECTO = 'claude-sonnet-4-6';
const TOPE_MAX_TOKENS = 4096;

function modeloSeguro(m: unknown): string {
  return typeof m === 'string' && MODELOS_PERMITIDOS.has(m) ? m : MODELO_POR_DEFECTO;
}
function topeTokens(n: unknown): number {
  const v = typeof n === 'number' && Number.isFinite(n) ? Math.floor(n) : TOPE_MAX_TOKENS;
  return Math.max(1, Math.min(v, TOPE_MAX_TOKENS));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Secreto opcional: si está definido, se exige. No rompe despliegues que aún no lo tienen.
  const secreto = process.env.PROXY_SHARED_SECRET;
  if (secreto && req.headers['x-proxy-secret'] !== secreto) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { prompt, model, max_tokens, temperature = 0.75 } = req.body ?? {};

    if (!prompt) {
      return res.status(400).json({ error: 'prompt is required' });
    }

    const modeloFinal = modeloSeguro(model);
    if (model && modeloFinal !== model) {
      console.warn(`[api/generate] modelo no permitido "${model}" → ${modeloFinal}`);
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: modeloFinal,
        max_tokens: topeTokens(max_tokens),
        temperature,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return res.status(response.status).json({
        error: `Anthropic API error ${response.status}`,
        detail: (err as any)?.error?.message ?? response.statusText
      });
    }

    const data = await response.json();
    const text = (data.content?.[0]?.text ?? '').trim();

    return res.status(200).json({ text });

  } catch (err: any) {
    return res.status(500).json({ error: err.message ?? 'Internal server error' });
  }
}
