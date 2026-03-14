import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Proxy para Shopify Themes API — sin CORS desde browser.
 *
 * Operaciones soportadas:
 *   POST /api/shopify-theme
 *   Body: { shop, token, action, payload }
 *
 *   action: 'list_themes'    → GET /admin/api/2024-01/themes.json
 *   action: 'create_theme'   → POST /admin/api/2024-01/themes.json
 *   action: 'get_assets'     → GET /admin/api/2024-01/themes/{id}/assets.json
 *   action: 'put_asset'      → PUT /admin/api/2024-01/themes/{id}/assets.json  { theme_id, key, value }
 *   action: 'delete_asset'   → DELETE /admin/api/2024-01/themes/{id}/assets.json?asset[key]=...
 *   action: 'publish_theme'  → PUT /admin/api/2024-01/themes/{id}.json  { role: 'main' }
 */

const API_VERSION = '2024-01';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { shop, token, action, payload } = req.body ?? {};

  if (!shop || !token || !action) {
    return res.status(400).json({ error: 'shop, token y action son requeridos' });
  }

  const cleanShop = shop.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const base = `https://${cleanShop}/admin/api/${API_VERSION}`;

  const headers: Record<string, string> = {
    'X-Shopify-Access-Token': token,
    'Content-Type': 'application/json',
  };

  try {
    let url: string;
    let method: string;
    let body: string | undefined;

    switch (action) {

      case 'list_themes':
        url = `${base}/themes.json`;
        method = 'GET';
        break;

      case 'create_theme': {
        // payload: { name: string, src?: string }
        url = `${base}/themes.json`;
        method = 'POST';
        body = JSON.stringify({
          theme: {
            name: payload.name ?? 'Neurone Custom Theme',
            role: 'unpublished',
          }
        });
        break;
      }

      case 'get_assets': {
        // payload: { theme_id: number }
        url = `${base}/themes/${payload.theme_id}/assets.json`;
        method = 'GET';
        break;
      }

      case 'put_asset': {
        // payload: { theme_id, key, value }
        // value = string content (Liquid, CSS, JS) — puede venir como base64 si binary=true
        url = `${base}/themes/${payload.theme_id}/assets.json`;
        method = 'PUT';

        const assetBody: Record<string, string> = {
          key: payload.key,
        };

        if (payload.attachment) {
          // base64 para binarios (imágenes, fuentes)
          assetBody.attachment = payload.attachment;
        } else {
          assetBody.value = payload.value;
        }

        body = JSON.stringify({ asset: assetBody });
        break;
      }

      case 'delete_asset': {
        // payload: { theme_id, key }
        url = `${base}/themes/${payload.theme_id}/assets.json?asset[key]=${encodeURIComponent(payload.key)}`;
        method = 'DELETE';
        break;
      }

      case 'publish_theme': {
        // payload: { theme_id }
        url = `${base}/themes/${payload.theme_id}.json`;
        method = 'PUT';
        body = JSON.stringify({ theme: { id: payload.theme_id, role: 'main' } });
        break;
      }

      case 'get_theme': {
        // payload: { theme_id }
        url = `${base}/themes/${payload.theme_id}.json`;
        method = 'GET';
        break;
      }

      default:
        return res.status(400).json({ error: `Acción desconocida: ${action}` });
    }

    const shopifyRes = await fetch(url, {
      method,
      headers,
      ...(body ? { body } : {}),
    });

    // Rate limit headers útiles
    const rateLimit = shopifyRes.headers.get('x-shopify-shop-api-call-limit');
    if (rateLimit) res.setHeader('x-shopify-shop-api-call-limit', rateLimit);

    // Shopify puede devolver 202 en creates asíncronos
    const data = await shopifyRes.json().catch(() => ({}));

    return res.status(shopifyRes.status).json(data);

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error de red';
    return res.status(500).json({ error: message });
  }
}
