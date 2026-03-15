import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * POST /api/shopify-images
 * Sube una imagen a un producto de Shopify como base64.
 * Body: { shop, token, productId, filename, base64, alt }
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { shop, token, productId, filename, base64, alt } = req.body ?? {};

  if (!shop || !token || !productId || !base64) {
    return res.status(400).json({ error: 'shop, token, productId y base64 son requeridos' });
  }

  const cleanShop = shop.replace(/^https?:\/\//, '').replace(/\/$/, '');

  try {
    const shopifyRes = await fetch(
      `https://${cleanShop}/admin/api/2024-01/products/${productId}/images.json`,
      {
        method: 'POST',
        headers: {
          'X-Shopify-Access-Token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: {
            attachment: base64,
            filename: filename ?? 'product.webp',
            alt: alt ?? '',
          },
        }),
      }
    );

    const data = await shopifyRes.json();
    return res.status(shopifyRes.status).json(data);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
