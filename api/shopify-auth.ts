import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

/**
 * GET /api/shopify-auth?shop=neurone-south-central-florida.myshopify.com
 * Inicia el flujo OAuth con Shopify — redirige al usuario a la pantalla de autorización.
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  const shop = (req.query.shop as string) ?? 'neurone-south-central-florida.myshopify.com';
  const clientId = process.env.SHOPIFY_CLIENT_ID;

  if (!clientId) {
    return res.status(500).json({ error: 'SHOPIFY_CLIENT_ID no configurado en Vercel' });
  }

  const cleanShop = shop.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const redirectUri = `https://web-lab-unrlvl.vercel.app/api/shopify-callback`;
  const scopes = [
    'read_products', 'write_products',
    'write_publications', 'read_publications',
    'read_content', 'write_content',
    'read_themes', 'write_themes', 'write_theme_code',
  ].join(',');

  // nonce para CSRF
  const state = crypto.randomBytes(16).toString('hex');

  const authUrl =
    `https://${cleanShop}/admin/oauth/authorize` +
    `?client_id=${clientId}` +
    `&scope=${scopes}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=${state}`;

  // Guardar state en cookie para verificar en callback
  res.setHeader('Set-Cookie', `shopify_oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Max-Age=300`);
  res.redirect(302, authUrl);
}
