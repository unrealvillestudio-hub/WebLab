#!/usr/bin/env node
/**
 * scripts/generate_catalog.ts
 * 
 * Regenera src/config/productCatalog.ts leyendo los BP_PRODUCT actualizados
 * desde el repo BluePrints/products/ vía GitHub API.
 * 
 * Uso:
 *   GITHUB_TOKEN=ghp_xxx npx ts-node scripts/generate_catalog.ts
 *   npx ts-node scripts/generate_catalog.ts --token ghp_xxx
 * 
 * También se puede usar localmente si tienes los JSONs en disco:
 *   npx ts-node scripts/generate_catalog.ts --local ../BluePrints/products
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const REPO_OWNER = 'unrealvillestudio-hub';
const REPO_NAME  = 'BluePrints';
const BRANCH     = 'main';
const PRODUCTS_DIR = 'products';
const OUT_FILE   = path.join(__dirname, '..', 'src', 'config', 'productCatalog.ts');

// ── Arg parsing ───────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const tokenFlag = args.indexOf('--token');
const localFlag = args.indexOf('--local');
const token  = tokenFlag >= 0 ? args[tokenFlag + 1] : process.env.GITHUB_TOKEN ?? '';
const localDir = localFlag >= 0 ? args[localFlag + 1] : null;

// ── Types ─────────────────────────────────────────────────────────────────────
interface BPProduct {
  id: string;
  sku: string;
  display_name: string;
  category: string;
  line: string;
  collection: string;
  subcollection: string;
  description: string;
  description_enhanced: string | null;
  key_ingredients: string[];
  benefit_claims: string[];
  hair_type: string[];
  price: string;
  msrp: string;
  b2b_only: boolean;
  shopify_visibility: string;
  image_filename: string;
  format: string;
  size: string;
  cross_sell?: string[];
  imagelab?: Record<string, unknown>;
}

// ── Fetch from GitHub API ─────────────────────────────────────────────────────
async function fetchFromGitHub(): Promise<BPProduct[]> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  // List files in products/
  const listRes = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${PRODUCTS_DIR}?ref=${BRANCH}`,
    { headers }
  );
  if (!listRes.ok) throw new Error(`GitHub list failed: ${listRes.status} ${await listRes.text()}`);
  const files: { name: string; download_url: string }[] = await listRes.json();

  const jsonFiles = files.filter(f => f.name.startsWith('BP_PRODUCT_') && f.name.endsWith('.json'));
  console.log(`  Found ${jsonFiles.length} BP_PRODUCT files`);

  const products: BPProduct[] = [];
  for (const file of jsonFiles) {
    const res = await fetch(file.download_url, { headers });
    if (!res.ok) { console.warn(`  SKIP ${file.name} — ${res.status}`); continue; }
    const data = await res.json();
    products.push(data);
    process.stdout.write('.');
  }
  console.log('');
  return products;
}

// ── Load from local disk ──────────────────────────────────────────────────────
function fetchFromLocal(dir: string): BPProduct[] {
  const files = fs.readdirSync(dir).filter(f => f.startsWith('BP_PRODUCT_') && f.endsWith('.json'));
  console.log(`  Found ${files.length} BP_PRODUCT files locally`);
  return files.map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')));
}

// ── slugify ───────────────────────────────────────────────────────────────────
function slugify(s: string): string {
  return s.toLowerCase()
    .replace(/ \/ /g, '_').replace(/\//g, '_')
    .replace(/ /g, '_').replace(/-/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

// ── Generate TypeScript ───────────────────────────────────────────────────────
function generateTS(products: BPProduct[]): string {
  const esc = (s: string) =>
    String(s ?? '').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  const arr = (lst: string[]) =>
    lst?.length ? `[${lst.map(i => `"${esc(i)}"`).join(', ')}]` : '[]';

  const now = new Date().toISOString();
  const lines: string[] = [
    `// AUTO-GENERATED — DO NOT EDIT MANUALLY`,
    `// Regenerate: GITHUB_TOKEN=ghp_xxx npx ts-node scripts/generate_catalog.ts`,
    `// Last generated: ${now}`,
    ``,
    `import type { BrandId } from './brands';`,
    ``,
    `// ── INTERFACES ──────────────────────────────────────────────────────────────`,
    ``,
    `export interface CatalogProduct {`,
    `  id: string;`,
    `  sku: string;`,
    `  display_name: string;`,
    `  collection: string;`,
    `  collection_id: string;`,
    `  subcollection: string;`,
    `  subcollection_id: string;`,
    `  description: string;`,
    `  description_enhanced: string | null;`,
    `  key_ingredients: string[];`,
    `  benefit_claims: string[];`,
    `  hair_type: string[];`,
    `  price: string;`,
    `  msrp: string;`,
    `  b2b_only: boolean;`,
    `  shopify_visibility: string;`,
    `  image_filename: string;`,
    `  format: string;`,
    `  size: string;`,
    `  cross_sell?: string[];`,
    `  imagelab?: Record<string, unknown>;`,
    `}`,
    ``,
    `export interface CatalogSubcollection {`,
    `  id: string;`,
    `  label: string;`,
    `  products: CatalogProduct[];`,
    `}`,
    ``,
    `export interface CatalogCollection {`,
    `  id: string;`,
    `  label: string;`,
    `  subcollections: CatalogSubcollection[];`,
    `  products: CatalogProduct[];`,
    `}`,
    ``,
    `// ── NEURONE CATALOG ─────────────────────────────────────────────────────────`,
    ``,
    `const NEURONE_PRODUCTS: CatalogProduct[] = [`,
  ];

  for (const p of products) {
    const col = p.collection || p.category || '';
    const sub = p.subcollection || p.line || '';
    lines.push(`  {`);
    lines.push(`    id: "${esc(p.id)}",`);
    lines.push(`    sku: "${esc(p.sku)}",`);
    lines.push(`    display_name: "${esc(p.display_name)}",`);
    lines.push(`    collection: "${esc(col)}",`);
    lines.push(`    collection_id: "${slugify(col)}",`);
    lines.push(`    subcollection: "${esc(sub)}",`);
    lines.push(`    subcollection_id: "${slugify(sub)}",`);
    // description is {en, es} dict in BP schema — extract ES preferentially
    const rawDesc = p.description;
    const descText: string =
      typeof rawDesc === 'object' && rawDesc !== null
        ? (rawDesc as any).es ?? (rawDesc as any).en ?? ''
        : String(rawDesc ?? '');
    lines.push(`    description: "${esc(descText)}",`);
    lines.push(`    description_enhanced: ${JSON.stringify(p.description_enhanced ?? null)},`);
    lines.push(`    key_ingredients: ${arr(p.key_ingredients ?? [])},`);
    lines.push(`    benefit_claims: ${arr(p.benefit_claims ?? [])},`);
    lines.push(`    hair_type: ${arr(p.hair_type ?? [])},`);
    lines.push(`    price: "${p.price ?? '0.00'}",`);
    lines.push(`    msrp: "${p.msrp ?? '0.00'}",`);
    lines.push(`    b2b_only: ${!!p.b2b_only},`);
    lines.push(`    shopify_visibility: "${esc(p.shopify_visibility ?? '')}",`);
    lines.push(`    image_filename: "${esc(p.image_filename ?? '')}",`);
    lines.push(`    format: "${esc(p.format ?? '')}",`);
    lines.push(`    size: "${esc(p.size ?? '')}",`);
    // cross_sell
    if (p.cross_sell?.length) {
      lines.push(`    cross_sell: ${JSON.stringify(p.cross_sell)},`);
    }
    // imagelab — full object passthrough
    if (p.imagelab) {
      lines.push(`    imagelab: ${JSON.stringify(p.imagelab)},`);
    }
    lines.push(`  },`);
  }

  lines.push(`];`);
  lines.push(``);
  lines.push(`function buildCollections(products: CatalogProduct[]): CatalogCollection[] {`);
  lines.push(`  const colMap = new Map<string, CatalogCollection>();`);
  lines.push(`  for (const p of products) {`);
  lines.push(`    if (!colMap.has(p.collection_id)) {`);
  lines.push(`      colMap.set(p.collection_id, { id: p.collection_id, label: p.collection, subcollections: [], products: [] });`);
  lines.push(`    }`);
  lines.push(`    const col = colMap.get(p.collection_id)!;`);
  lines.push(`    col.products.push(p);`);
  lines.push(`    let sub = col.subcollections.find(s => s.id === p.subcollection_id);`);
  lines.push(`    if (!sub) {`);
  lines.push(`      sub = { id: p.subcollection_id, label: p.subcollection, products: [] };`);
  lines.push(`      col.subcollections.push(sub);`);
  lines.push(`    }`);
  lines.push(`    sub.products.push(p);`);
  lines.push(`  }`);
  lines.push(`  return Array.from(colMap.values()).sort((a, b) => a.label.localeCompare(b.label));`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`export const NEURONE_CATALOG: CatalogCollection[] = buildCollections(NEURONE_PRODUCTS);`);
  lines.push(``);
  lines.push(`export const CATALOG_BY_BRAND: Partial<Record<BrandId, CatalogCollection[]>> = {`);
  lines.push(`  neuroneCosmetics: NEURONE_CATALOG,`);
  lines.push(`};`);
  lines.push(``);
  lines.push(`export function getCatalog(brandId: string): CatalogCollection[] {`);
  lines.push(`  return CATALOG_BY_BRAND[brandId as BrandId] ?? [];`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`export function getProduct(brandId: string, productId: string): CatalogProduct | undefined {`);
  lines.push(`  const catalog = getCatalog(brandId);`);
  lines.push(`  return catalog.flatMap(c => c.products).find(p => p.id === productId);`);
  lines.push(`}`);
  lines.push(``);

  return lines.join('\n');
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🔄 generate_catalog.ts — UNRLVL WebLab');
  console.log(`   Source: ${localDir ? `local (${localDir})` : `GitHub (${REPO_OWNER}/${REPO_NAME})`}`);

  let products: BPProduct[];
  if (localDir) {
    products = fetchFromLocal(localDir);
  } else {
    if (!token) {
      console.error('❌ GITHUB_TOKEN requerido. Usa: GITHUB_TOKEN=ghp_xxx npx ts-node scripts/generate_catalog.ts');
      console.error('   O usa --local ../BluePrints/products para leer desde disco.');
      process.exit(1);
    }
    products = await fetchFromGitHub();
  }

  console.log(`  Procesando ${products.length} productos...`);
  const ts = generateTS(products);
  fs.writeFileSync(OUT_FILE, ts, 'utf-8');
  console.log(`✅ Generado: ${OUT_FILE}`);
  console.log(`   Productos: ${products.length}`);
  const enhanced = products.filter(p => p.description_enhanced).length;
  console.log(`   Con description_enhanced: ${enhanced}/${products.length}`);
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
