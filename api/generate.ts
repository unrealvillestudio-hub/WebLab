import type { VercelRequest, VercelResponse } from '@vercel/node';

// ── Guard de costo (2026-11-04) ─────────────────────────────────────────────
// RAÍZ: este endpoint reenviaba a Anthropic el `model` y `max_tokens` elegidos por
// quien llama (aceptaba claude-opus-5-5) con una key expuesta en el bundle (prefijo
// VITE_). Un proxy LLM público sin tope de modelo ni de tokens es una puerta abierta
// de gasto: alcanzó un pico de ~$29 en un día en Opus 5.5 el 2026-11-04.
// BARRERA (permanente, en el server, no en el cliente):
//   1. Modelo: allowlist como DATO — los `model_id` ACTIVOS de ops_lab_models, vía la EF
//      pública `modelos-permitidos` (cacheada 5 min). Un modelo nuevo se adopta con un
//      UPDATE en la DB, sin deploy; lo que no está activo no pasa (Opus por ausencia, no
//      por denylist). Si la EF no se puede leer → PISO seguro (fail-closed), nunca "cualquiera".
//   2. max_tokens: tope duro.
//   3. Key: SÓLO process.env.ANTHROPIC_API_KEY (nunca VITE_, que la mete en el bundle).
//   4. Secreto opcional: si PROXY_SHARED_SECRET está definido, se exige en el header.
const ALLOWED_MODELS_URL =
  process.env.ALLOWED_MODELS_URL ||
  'https://amlvyycfepwhiindxgzw.supabase.co/functions/v1/modelos-permitidos';
// Piso seguro: un modelo activo y barato. Único literal de modelo que queda (fail-closed).
const MODELO_PISO = 'claude-sonnet-5';
const TOPE_MAX_TOKENS = 4096;

let _cacheModelos: { set: Set<string> | null; exp: number } = { set: null, exp: 0 };

async function modelosPermitidos(): Promise<Set<string>> {
  const now = Date.now();
  if (_cacheModelos.set && now < _cacheModelos.exp) return _cacheModelos.set;
  try {
    const r = await fetch(ALLOWED_MODELS_URL, { signal: AbortSignal.timeout(2500) });
    const d = await r.json();
    const lista: string[] = Array.isArray(d?.anthropic) ? d.anthropic : [];
    if (lista.length) {
      _cacheModelos = { set: new Set(lista), exp: now + 5 * 60 * 1000 };
      return _cacheModelos.set;
    }
  } catch {
    // fail-closed abajo
  }
  return _cacheModelos.set ?? new Set([MODELO_PISO]);
}

async function modeloSeguro(m: unknown): Promise<string> {
  const permitidos = await modelosPermitidos();
  return typeof m === 'string' && permitidos.has(m) ? m : MODELO_PISO;
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

    const modeloFinal = await modeloSeguro(model);
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
