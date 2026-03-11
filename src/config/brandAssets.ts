// ── brandAssets.ts ────────────────────────────────────────────────────────────
// Multi-brand asset URL resolver.
// Resolves image filenames → full raw GitHub URLs.
//
// ADDING A NEW BRAND:
//   1. Add an entry to BRAND_ASSETS_CONFIG with the brand's paths.
//   2. Upload images to BluePrints/assets/images/{brandFolder}/...
//   3. Zero changes needed elsewhere in the ecosystem.
// ─────────────────────────────────────────────────────────────────────────────

export const BLUEPRINTS_RAW_BASE =
  'https://raw.githubusercontent.com/unrealvillestudio-hub/BluePrints/main';

// ── Environment override ──────────────────────────────────────────────────────
// To switch to a CDN (Shopify, Cloudflare R2, etc.) set this env var
// in your deployment without touching any other file:
//
//   VITE_ASSETS_BASE_URL=https://cdn.shopify.com/s/files/1/xxxx/yyyy/files
//
// The resolver appends /{productsPath}/{filename} automatically.
// If not set, falls back to GitHub raw (works for HTML outputs + dev).
const ENV_ASSETS_BASE = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_ASSETS_BASE_URL)
  ?? (typeof process !== 'undefined' && process.env?.ASSETS_BASE_URL)
  ?? null;

export function getAssetsBase(): string {
  return ENV_ASSETS_BASE ?? BLUEPRINTS_RAW_BASE;
}

// ── Brand asset path configuration ───────────────────────────────────────────
interface BrandAssetsConfig {
  /** Path prefix inside the BluePrints repo for product images */
  productsPath: string;
  /** Path prefix for brand assets (logos, icons, aro, etc.) */
  brandPath: string;
  /** Display name for credits/attribution */
  displayName: string;
}

export const BRAND_ASSETS_CONFIG: Record<string, BrandAssetsConfig> = {
  // ── Neurone Cosmética (global) ────────────────────────────────────────────
  NeuroneCosmetics: {
    productsPath: 'assets/images/products',
    brandPath:    'assets/images/brand',
    displayName:  'Neurone Cosmética',
  },
  // ── Neurone South & Central Florida (distributor) ─────────────────────────
  NeuroneSCFlorida: {
    productsPath: 'assets/images/products',   // inherits global Neurone product images
    brandPath:    'assets/images/brand',
    displayName:  'Neurone SCF',
  },
  // ── Future brands — add here. Example:
  // AcmeCosméticos: {
  //   productsPath: 'assets/images/AcmeCosmeticos/products',
  //   brandPath:    'assets/images/AcmeCosmeticos/brand',
  //   displayName:  'Acme Cosméticos',
  // },
  // ── Forum PH's ────────────────────────────────────────────────────────────
  forumPhs: {
    productsPath: 'assets/images/ForumPHs/products',
    brandPath:    'assets/images/ForumPHs/brand',
    displayName:  'Forum PH\'s',
  },
};

// ── Canonical brand logo filenames ────────────────────────────────────────────
export const BRAND_LOGOS = {
  NeuroneCosmetics: {
    white: 'logo_neurone_white.png',   // for dark backgrounds
    blue:  'logo_neurone_blue.png',    // for light/neutral backgrounds
    dark:  'logo_neurone_dark.png',    // for very light backgrounds
    aro_degradado: 'aro_degradado.png',
    aro_curve:     'aro_curve.png',
  },
} as const;

// ── URL Resolvers ─────────────────────────────────────────────────────────────

/**
 * Resolve a product image filename → full raw URL.
 * Returns empty string if brand or filename not found (graceful fallback).
 */
export function resolveProductImageUrl(brandId: string, filename: string | null | undefined): string {
  if (!filename) return '';
  const config = BRAND_ASSETS_CONFIG[brandId] ?? BRAND_ASSETS_CONFIG['NeuroneCosmetics'];
  return `${getAssetsBase()}/${config.productsPath}/${filename}`;
}

/**
 * Resolve a brand asset filename → full raw URL.
 */
export function resolveBrandAssetUrl(brandId: string, filename: string): string {
  const config = BRAND_ASSETS_CONFIG[brandId] ?? BRAND_ASSETS_CONFIG['NeuroneCosmetics'];
  return `${getAssetsBase()}/${config.brandPath}/${filename}`;
}

/**
 * Get full logo URLs for a brand.
 */
export function getBrandLogoUrls(brandId: string): {
  white: string; blue: string; dark: string;
  aro_degradado: string; aro_curve: string;
} {
  const logos = BRAND_LOGOS[brandId as keyof typeof BRAND_LOGOS]
    ?? BRAND_LOGOS['NeuroneCosmetics'];

  return {
    white:         resolveBrandAssetUrl(brandId, logos.white),
    blue:          resolveBrandAssetUrl(brandId, logos.blue),
    dark:          resolveBrandAssetUrl(brandId, logos.dark),
    aro_degradado: resolveBrandAssetUrl(brandId, logos.aro_degradado),
    aro_curve:     resolveBrandAssetUrl(brandId, logos.aro_curve),
  };
}

/**
 * Get both standard (white bg) and campaign (dark bg) image URLs for a product.
 */
export function resolveProductImagePair(
  brandId: string,
  imageUsage: {
    standard?: { filename?: string };
    campaign?: { filename?: string };
    dark_available?: boolean;
  } | undefined,
  fallbackFilename?: string
): { standard: string; campaign: string; hasDark: boolean } {
  const standard = resolveProductImageUrl(
    brandId,
    imageUsage?.standard?.filename ?? fallbackFilename
  );
  const campaign = imageUsage?.dark_available
    ? resolveProductImageUrl(brandId, imageUsage?.campaign?.filename ?? fallbackFilename)
    : standard;

  return {
    standard,
    campaign,
    hasDark: !!imageUsage?.dark_available,
  };
}
