import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

/**
 * GET /api/shopify-callback?code=xxx&shop=xxx&state=xxx&hmac=xxx
 * Shopify redirige aquí después de que el usuario autoriza la app.
 * Intercambia el code por un access token y redirige al frontend con el token.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { code, shop, hmac, state } = req.query as Record<string, string>;
  const clientId     = process.env.SHOPIFY_CLIENT_ID;
  const clientSecret = process.env.SHOPIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).send('SHOPIFY_CLIENT_ID / SHOPIFY_CLIENT_SECRET no configurados en Vercel');
  }

  // ── Verificar HMAC ────────────────────────────────────────────────────────
  const params = { ...req.query } as Record<string, string>;
  delete params.hmac;
  delete params.signature;

  const message = Object.keys(params)
    .sort()
    .map(k => `${k}=${params[k]}`)
    .join('&');

  const digest = crypto
    .createHmac('sha256', clientSecret)
    .update(message)
    .digest('hex');

  if (digest !== hmac) {
    return res.status(403).send('HMAC inválido — solicitud rechazada');
  }

  // ── Intercambiar code por access token ───────────────────────────────────
  try {
    const cleanShop = shop.replace(/^https?:\/\//, '').replace(/\/$/, '');

    const tokenRes = await fetch(`https://${cleanShop}/admin/oauth/access_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    if (!tokenRes.ok) {
      const err = await tokenRes.text();
      return res.status(500).send(`Error al obtener token: ${err}`);
    }

    const { access_token } = await tokenRes.json() as { access_token: string };

    if (!access_token) {
      return res.status(500).send('No se recibió access_token de Shopify');
    }

    // ── Redirigir al frontend con el token en el fragment ─────────────────
    // El fragment (#) no se envía al servidor — solo lo lee el browser/JS
    const redirectUrl =
      `https://web-lab-unrlvl.vercel.app/#shopify_token=${access_token}&shop=${cleanShop}`;

    res.redirect(302, redirectUrl);

  } catch (err: any) {
    res.status(500).send(`Error en callback: ${err.message}`);
  }
}
