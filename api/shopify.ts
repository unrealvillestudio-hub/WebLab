import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Proxy para Shopify Admin API — evita CORS desde el browser.
 * POST /api/shopify
 * Body: { shop, token, endpoint, method?, body? }
 *   shop     → "mi-tienda.myshopify.com"
 *   token    → Admin API access token
 *   endpoint → "/admin/api/2024-01/products.json"
 *   method   → GET | POST | PUT | DELETE (default: GET)
 *   body     → payload para POST/PUT
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { shop, token, endpoint, method = 'GET', body: payload } = req.body ?? {};

  if (!shop || !token || !endpoint) {
    return res.status(400).json({ error: 'shop, token y endpoint son requeridos' });
  }

  // Sanitizar shop URL
  const cleanShop = shop.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const url = `https://${cleanShop}${endpoint}`;

  try {
    const shopifyRes = await fetch(url, {
      method,
      headers: {
        'X-Shopify-Access-Token': token,
        'Content-Type': 'application/json',
      },
      ...(payload ? { body: JSON.stringify(payload) } : {}),
    });

    const data = await shopifyRes.json().catch(() => ({}));

    // Reenviar headers de rate limit útiles
    res.setHeader('x-shopify-shop-api-call-limit',
      shopifyRes.headers.get('x-shopify-shop-api-call-limit') ?? '');

    return res.status(shopifyRes.status).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: err.message ?? 'Error de red' });
  }
}
