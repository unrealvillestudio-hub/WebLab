// ── THEME FILES MAP ─────────────────────────────────────────────────────────
// Sistema multimarca — los archivos de theme se generan desde brandThemeConfigs.ts
// Unreal>ille Studio — WL v2.3+

import { type BrandThemeTokens, generateBrandCSS, generateCollectionTemplates } from './brandThemeConfigs';

// ── STATIC ASSETS (iguales para todas las marcas) ─────────────────────────
import themeJs          from './theme/assets/theme.js?raw';
import baseCssTemplate  from './theme/assets/base.css?raw';
import themeLiquid      from './theme/layout/theme.liquid?raw';
import settingsSchema   from './theme/config/settings_schema.json?raw';
import settingsData     from './theme/config/settings_data.json?raw';
import localesEs        from './theme/locales/es.default.json?raw';

import ncHeader         from './theme/sections/nc-header.liquid?raw';
import ncFooter         from './theme/sections/nc-footer.liquid?raw';
import ncHero           from './theme/sections/nc-hero.liquid?raw';
import ncTrustStrip     from './theme/sections/nc-trust-strip.liquid?raw';
import ncCollectionGrid from './theme/sections/nc-collection-grid.liquid?raw';
import ncCollectionPage from './theme/sections/nc-collection-page.liquid?raw';
import ncFeaturedProducts from './theme/sections/nc-featured-products.liquid?raw';
import ncProductDetail  from './theme/sections/nc-product-detail.liquid?raw';
import ncPageContent    from './theme/sections/nc-page-content.liquid?raw';
import ncSalesLayer     from './theme/sections/nc-sales-layer.liquid?raw';
import ncScienceStrip   from './theme/sections/nc-science-strip.liquid?raw';
import ncProductCard    from './theme/snippets/nc-product-card.liquid?raw';

import tplIndex         from './theme/templates/index.json?raw';
import tplProduct       from './theme/templates/product.json?raw';
import tplCollection    from './theme/templates/collection.json?raw';
import tplPage          from './theme/templates/page.json?raw';
import tplPageSalesLayer from './theme/templates/page.sales-layer.json?raw';
import tplCart          from './theme/templates/cart.liquid?raw';

export interface ThemeFile {
  key: string;
  value: string;
  description: string;
}

// CSS base sin el bloque :root (todo lo que va después de las variables)
function extractCSSBody(baseCss: string): string {
  const rootEnd = baseCss.indexOf('}', baseCss.indexOf(':root {'));
  return baseCss.slice(rootEnd + 1);
}

// Genera el array de archivos del theme para una marca específica
export function buildThemeFiles(tokens: BrandThemeTokens): ThemeFile[] {
  // CSS: tokens de la marca + resto del base.css
  const brandCSS = generateBrandCSS(tokens) + '\n' + extractCSSBody(baseCssTemplate);

  // Layout: inyectar clase de modo en body
  const brandLayout = themeLiquid.replace(
    '<body class="nc-body"',
    `<body class="nc-body nc-${tokens.mode}"`
  );

  // Collection templates generados dinámicamente
  const collectionTemplates = generateCollectionTemplates(tokens);

  const files: ThemeFile[] = [
    // Assets
    { key: 'assets/base.css',             value: brandCSS,      description: `CSS base — ${tokens.brandName}` },
    { key: 'assets/theme.js',             value: themeJs,       description: 'JavaScript del theme' },
    // Layout
    { key: 'layout/theme.liquid',         value: brandLayout,   description: 'Layout principal' },
    // Config
    { key: 'config/settings_schema.json', value: settingsSchema, description: 'Schema de configuración' },
    { key: 'config/settings_data.json',   value: settingsData,  description: 'Datos de configuración' },
    // Locales
    { key: 'locales/es.default.json',     value: localesEs,     description: 'Textos en español' },
    // Sections
    { key: 'sections/nc-header.liquid',           value: ncHeader,          description: 'Header + Nav' },
    { key: 'sections/nc-footer.liquid',           value: ncFooter,          description: 'Footer' },
    { key: 'sections/nc-hero.liquid',             value: ncHero,            description: 'Hero homepage' },
    { key: 'sections/nc-trust-strip.liquid',      value: ncTrustStrip,      description: 'Trust strip' },
    { key: 'sections/nc-collection-grid.liquid',  value: ncCollectionGrid,  description: 'Grid de colecciones' },
    { key: 'sections/nc-collection-page.liquid',  value: ncCollectionPage,  description: 'Página de colección' },
    { key: 'sections/nc-featured-products.liquid',value: ncFeaturedProducts, description: 'Productos destacados' },
    { key: 'sections/nc-product-detail.liquid',   value: ncProductDetail,   description: 'Página de producto' },
    { key: 'sections/nc-page-content.liquid',     value: ncPageContent,     description: 'Contenido de páginas' },
    { key: 'sections/nc-sales-layer.liquid',      value: ncSalesLayer,      description: 'Sales Layer' },
    { key: 'sections/nc-science-strip.liquid',    value: ncScienceStrip,    description: 'Science strip' },
    // Snippets
    { key: 'snippets/nc-product-card.liquid',     value: ncProductCard,     description: 'Tarjeta de producto' },
    // Templates base
    { key: 'templates/index.json',                value: tplIndex,          description: 'Template: Homepage' },
    { key: 'templates/product.json',              value: tplProduct,        description: 'Template: Producto' },
    { key: 'templates/collection.json',           value: tplCollection,     description: 'Template: Colección (default)' },
    { key: 'templates/page.json',                 value: tplPage,           description: 'Template: Página' },
    { key: 'templates/page.sales-layer.json',     value: tplPageSalesLayer, description: 'Template: Sales Layer' },
    { key: 'templates/cart.liquid',               value: tplCart,           description: 'Carrito' },
  ];

  // Collection templates por colección de la marca
  for (const [key, value] of Object.entries(collectionTemplates)) {
    const handle = key.replace('templates/collection.', '').replace('.json', '');
    files.push({
      key,
      value: JSON.stringify(value, null, 2),
      description: `Template: Colección ${handle}`,
    });
  }

  return files;
}

export const THEME_FILE_COUNT_BASE = 24; // sin collection templates variables
