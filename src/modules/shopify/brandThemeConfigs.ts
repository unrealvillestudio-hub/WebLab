// ── BRAND THEME CONFIGS ──────────────────────────────────────────────────────
// Fuente de verdad para tokens de diseño por marca.
// Cada marca define sus tokens — el sistema genera el CSS y el theme automáticamente.
// Unreal>ille Studio — principio multimarca

export type ThemeMode = 'dark' | 'light';

export interface BrandThemeTokens {
  brandId: string;
  brandName: string;          // Nombre completo en UI
  shopName: string;           // Nombre en el theme de Shopify
  mode: ThemeMode;

  // Backgrounds
  bg: string;
  bgCard: string;
  bgElevated: string;

  // Primary color (navy en Neurone)
  primary: string;
  primaryGlow: string;
  primaryDimAlpha: string;    // ej: "rgba(0, 118, 168, 0.15)"
  primaryBorderAlpha: string; // ej: "rgba(0, 118, 168, 0.30)"

  // Text
  white: string;              // Base text color inverse
  text: string;               // Main text (rgba)
  textMuted: string;          // Muted text (rgba)

  // Borders
  border: string;             // rgba
  borderMid: string;          // rgba

  // Accent (Terra en Neurone)
  accent: string;

  // Typography
  fontHead: string;
  fontBody: string;
  fontLabel: string;

  // Shadows
  shadowCard: string;
  shadowGlow: string;

  // Collections (para templates automáticos)
  collections: { handle: string; label: string }[];
}

// ── NEURONE COSMÉTICA — Dark (actual) ────────────────────────────────────────
export const NEURONE_DARK: BrandThemeTokens = {
  brandId: 'neuroneSCF',
  brandName: 'Neurone Cosmética',
  shopName: 'Neurone South & Central Florida — Dark v1.0',
  mode: 'dark',
  bg: '#0A0D14',
  bgCard: '#111520',
  bgElevated: '#161C2A',
  primary: '#0076A8',
  primaryGlow: '#0095D4',
  primaryDimAlpha: 'rgba(0, 118, 168, 0.15)',
  primaryBorderAlpha: 'rgba(0, 118, 168, 0.30)',
  white: '#F8FAFB',
  text: 'rgba(248, 250, 251, 0.72)',
  textMuted: 'rgba(248, 250, 251, 0.42)',
  border: 'rgba(255, 255, 255, 0.07)',
  borderMid: 'rgba(255, 255, 255, 0.12)',
  accent: '#C4622D',
  fontHead: "'Bebas Neue', 'Helvetica Neue', 'Arial Black', sans-serif",
  fontBody: "'PT Sans Narrow', 'Franklin Gothic Medium', Arial Narrow, sans-serif",
  fontLabel: "'Courier New', 'Courier', monospace",
  shadowCard: '0 4px 24px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,118,168,0.10)',
  shadowGlow: '0 0 30px rgba(0,118,168,0.25), 0 4px 24px rgba(0,0,0,0.6)',
  collections: [
    { handle: 'moisture',     label: 'Moisture' },
    { handle: 'restore',      label: 'Restore' },
    { handle: 'styling',      label: 'Styling' },
    { handle: 'color-rescue', label: 'Color Rescue' },
    { handle: 'scalp',        label: 'Scalp' },
  ],
};

// ── NEURONE COSMÉTICA — Light ─────────────────────────────────────────────────
export const NEURONE_LIGHT: BrandThemeTokens = {
  ...NEURONE_DARK,
  shopName: 'Neurone South & Central Florida — Light v1.0',
  mode: 'light',
  bg: '#F8FAFB',
  bgCard: '#FFFFFF',
  bgElevated: '#EEF1F5',
  white: '#0A0D14',
  text: 'rgba(10, 13, 20, 0.80)',
  textMuted: 'rgba(10, 13, 20, 0.50)',
  border: 'rgba(0, 0, 0, 0.08)',
  borderMid: 'rgba(0, 0, 0, 0.14)',
  shadowCard: '0 4px 24px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,118,168,0.12)',
  shadowGlow: '0 0 30px rgba(0,118,168,0.20), 0 4px 24px rgba(0,0,0,0.15)',
};

// ── VIZOS SALÓN ───────────────────────────────────────────────────────────────
export const VIZOS_DARK: BrandThemeTokens = {
  brandId: 'vizosSalon',
  brandName: 'Vizos Salón',
  shopName: 'Vizos Salón — Dark v1.0',
  mode: 'dark',
  bg: '#0D0D0D',
  bgCard: '#161616',
  bgElevated: '#1E1E1E',
  primary: '#B45309',        // Cobre — color silla directora del salón
  primaryGlow: '#D97706',
  primaryDimAlpha: 'rgba(180, 83, 9, 0.15)',
  primaryBorderAlpha: 'rgba(180, 83, 9, 0.30)',
  white: '#FAFAFA',
  text: 'rgba(250, 250, 250, 0.75)',
  textMuted: 'rgba(250, 250, 250, 0.45)',
  border: 'rgba(255, 255, 255, 0.07)',
  borderMid: 'rgba(255, 255, 255, 0.12)',
  accent: '#1D4ED8',         // Azul butacas capitoné
  fontHead: "'Playfair Display', Georgia, serif",
  fontBody: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontLabel: "'Courier New', monospace",
  shadowCard: '0 4px 24px rgba(0,0,0,0.50), 0 0 0 1px rgba(180,83,9,0.10)',
  shadowGlow: '0 0 30px rgba(180,83,9,0.20), 0 4px 24px rgba(0,0,0,0.6)',
  collections: [
    { handle: 'hair-color',   label: 'Hair Color' },
    { handle: 'treatments',   label: 'Treatments' },
    { handle: 'styling',      label: 'Styling' },
  ],
};

// ── VIZOS SALÓN — Light ───────────────────────────────────────────────────────
export const VIZOS_LIGHT: BrandThemeTokens = {
  ...VIZOS_DARK,
  shopName: 'Vizos Salón — Light v1.0',
  mode: 'light',
  bg: '#FAF7F4',           // Marfil cálido — evoca el salón, no un consultorio
  bgCard: '#FFFFFF',
  bgElevated: '#F0EAE2',   // Arena suave
  white: '#1A0F08',        // Casi negro cálido para contraste
  text: 'rgba(26, 15, 8, 0.82)',
  textMuted: 'rgba(26, 15, 8, 0.50)',
  border: 'rgba(180, 83, 9, 0.10)',   // Cobre muy suave
  borderMid: 'rgba(180, 83, 9, 0.18)',
  shadowCard: '0 4px 24px rgba(180,83,9,0.08), 0 0 0 1px rgba(180,83,9,0.10)',
  shadowGlow: '0 0 30px rgba(180,83,9,0.15), 0 4px 16px rgba(0,0,0,0.08)',
};
export const FORUMPHS_DARK: BrandThemeTokens = {
  brandId: 'forumPHs',
  brandName: 'ForumPHs',
  shopName: 'Forum Property Holdings — Dark v1.0',
  mode: 'dark',
  bg: '#0E0E0F',
  bgCard: '#18181B',
  bgElevated: '#27272A',
  primary: '#7C3AED',        // Amatista
  primaryGlow: '#8B5CF6',
  primaryDimAlpha: 'rgba(124, 58, 237, 0.15)',
  primaryBorderAlpha: 'rgba(124, 58, 237, 0.30)',
  white: '#FAFAFA',
  text: 'rgba(250, 250, 250, 0.75)',
  textMuted: 'rgba(250, 250, 250, 0.45)',
  border: 'rgba(255, 255, 255, 0.07)',
  borderMid: 'rgba(255, 255, 255, 0.12)',
  accent: '#C4622D',         // Terra
  fontHead: "'DM Sans', 'Helvetica Neue', sans-serif",
  fontBody: "'EB Garamond', Georgia, serif",
  fontLabel: "'Cinzel', serif",
  shadowCard: '0 4px 24px rgba(0,0,0,0.45), 0 0 0 1px rgba(124,58,237,0.10)',
  shadowGlow: '0 0 30px rgba(124,58,237,0.20), 0 4px 24px rgba(0,0,0,0.6)',
  collections: [],
};

// ── FORUMPHS — Light ──────────────────────────────────────────────────────────
export const FORUMPHS_LIGHT: BrandThemeTokens = {
  ...FORUMPHS_DARK,
  shopName: 'Forum Property Holdings — Light v1.0',
  mode: 'light',
  bg: '#F9F8FF',           // Blanco con tinte amatista muy sutil
  bgCard: '#FFFFFF',
  bgElevated: '#F0EEF9',   // Lavanda muy suave
  white: '#1A1028',        // Casi negro con tinte púrpura
  text: 'rgba(26, 16, 40, 0.82)',
  textMuted: 'rgba(26, 16, 40, 0.50)',
  border: 'rgba(124, 58, 237, 0.10)',
  borderMid: 'rgba(124, 58, 237, 0.18)',
  shadowCard: '0 4px 24px rgba(124,58,237,0.08), 0 0 0 1px rgba(124,58,237,0.10)',
  shadowGlow: '0 0 30px rgba(124,58,237,0.15), 0 4px 16px rgba(0,0,0,0.06)',
};

// ── REGISTRO GLOBAL ───────────────────────────────────────────────────────────
export const BRAND_THEME_CONFIGS: BrandThemeTokens[] = [
  NEURONE_DARK,
  NEURONE_LIGHT,
  VIZOS_DARK,
  VIZOS_LIGHT,
  FORUMPHS_DARK,
  FORUMPHS_LIGHT,
];

// Genera el bloque :root de CSS desde los tokens
export function generateBrandCSS(tokens: BrandThemeTokens): string {
  return `:root {
  --nc-bg:           ${tokens.bg};
  --nc-bg-card:      ${tokens.bgCard};
  --nc-bg-elevated:  ${tokens.bgElevated};
  --nc-navy:         ${tokens.primary};
  --nc-navy-glow:    ${tokens.primaryGlow};
  --nc-navy-dim:     ${tokens.primaryDimAlpha};
  --nc-navy-border:  ${tokens.primaryBorderAlpha};
  --nc-white:        ${tokens.white};
  --nc-text:         ${tokens.text};
  --nc-text-muted:   ${tokens.textMuted};
  --nc-border:       ${tokens.border};
  --nc-border-mid:   ${tokens.borderMid};
  --nc-accent:       ${tokens.accent};
  --nc-font-head:    ${tokens.fontHead};
  --nc-font-body:    ${tokens.fontBody};
  --nc-font-label:   ${tokens.fontLabel};
  --nc-radius:       4px;
  --nc-radius-lg:    8px;
  --nc-radius-card:  6px;
  --nc-shadow-card:  ${tokens.shadowCard};
  --nc-shadow-glow:  ${tokens.shadowGlow};
  --nc-transition:   all 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --nc-transition-fast: all 0.14s ease;
  --nc-header-h:     68px;
  --nc-max:          1280px;
  --nc-gutter:       clamp(16px, 4vw, 48px);
}`;
}

// Genera los templates de colección para una marca
export function generateCollectionTemplates(tokens: BrandThemeTokens): Record<string, object> {
  const templates: Record<string, object> = {};
  for (const col of tokens.collections) {
    const prefix = `nc-page-${col.handle}`;
    templates[`templates/collection.${col.handle}.json`] = {
      layout: 'theme.liquid',
      sections: {
        'nc-collection': { type: 'nc-collection-page', settings: { products_per_page: 24 } },
        [`${prefix}-hero`]: { type: `${prefix}-hero`, settings: {} },
        [`${prefix}-caracteristicas`]: { type: `${prefix}-caracteristicas`, settings: {} },
        [`${prefix}-cta-final`]: { type: `${prefix}-cta-final`, settings: {} },
      },
      order: [`${prefix}-hero`, 'nc-collection', `${prefix}-caracteristicas`, `${prefix}-cta-final`],
    };
  }
  return templates;
}
