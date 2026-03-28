// ============================================================
// UNRLVL WebLab — lib/useCatalog.ts
// Hook que reemplaza getCatalog() de productCatalog.ts
// Lee product_blueprints desde Supabase y devuelve CatalogCollection[]
// — misma interfaz que getCatalog() para compatibilidad total
// Updated: 2026-03-28 — migración DB_VARIABLES → Supabase
// ============================================================

import { useState, useEffect } from 'react'
import { sbFetch } from './supabaseClient'
import type { CatalogProduct, CatalogCollection, CatalogSubcollection } from '../config/productCatalog'

// ─── Brand ID map: WebLab camelCase → Supabase canonical ID ──
// WebLab usa camelCase internamente; Supabase usa el ID canónico del ecosystem
export const WEBLAB_TO_SUPABASE_BRAND_ID: Record<string, string> = {
  neuroneCosmetics:         'NeuroneSCF',
  patriciaOsorioVizosSalon: 'PatriciaOsorioVizosSalon',
  patriciaOsorioPersonal:   'PatriciaOsorioPersonal',
  patriciaOsorioComunidad:  'PatriciaOsorioComunidad',
  diamondDetails:           'DiamondDetails',
  d7Herbal:                 'D7Herbal',
  vivoseMask:               'VivoseMask',
  vizosCosmetics:           'VizosCosmetics',
  forumPhs:                 'ForumPHs',
  unrealilleStudio:         'UnrealilleStudio',
}

// ─── Supabase product_blueprints row (columnas usadas) ───────
interface ProductBlueprintRow {
  id: string
  brand_id: string
  sku: string | null
  name: string
  linea: string | null
  line_family: string | null
  subcategory: string | null
  size: string | null
  packaging_style: string | null
  b2b_only: boolean
  shopify_visibility: string
  description_es: string | null
  description_en: string | null
  benefit_claims: string[] | null
  hair_type: string[] | null
  image_filename: string | null
  price: string | null
  msrp: string | null
  cross_sell: string[] | null
  active: boolean
}

// ─── Adapter: ProductBlueprintRow → CatalogProduct ───────────
// Mantiene la misma forma que productCatalog.ts para compatibilidad
// con ShopifyPushModule y cualquier otro consumidor
function adaptToCatalogProduct(row: ProductBlueprintRow): CatalogProduct {
  // linea: "Color_Rescue" → collection: "Color Rescue", collection_id: "color_rescue"
  const linea = row.linea ?? 'General'
  const collection = linea.replace(/_/g, ' ')
  const collection_id = linea.toLowerCase().replace(/_/g, '_')

  // line_family: "DY Fazza" → subcollection_id: "dy_fazza"
  const subcollection = row.line_family ?? row.subcategory ?? linea
  const subcollection_id = subcollection.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')

  return {
    id: row.id,
    sku: row.sku ?? '',
    display_name: row.name,
    collection,
    collection_id,
    subcollection,
    subcollection_id,
    description: row.description_es ?? row.description_en ?? '',
    description_enhanced: null,
    key_ingredients: [],                          // no en Supabase — mantener vacío
    benefit_claims: row.benefit_claims ?? [],
    hair_type: row.hair_type ?? [],
    price: row.price ?? '0.00',
    msrp: row.msrp ?? '0.00',
    b2b_only: row.b2b_only,
    shopify_visibility: row.shopify_visibility,
    image_filename: row.image_filename ?? '',
    format: row.packaging_style ?? '',            // packaging_style → format
    size: row.size ?? '',
    cross_sell: row.cross_sell ?? [],
    imagelab: undefined,
  }
}

// ─── Build CatalogCollection[] from flat product list ────────
// Mismo algoritmo que buildCollections() en productCatalog.ts
function buildCollections(products: CatalogProduct[]): CatalogCollection[] {
  const colMap = new Map<string, CatalogCollection>()

  for (const p of products) {
    if (!colMap.has(p.collection_id)) {
      colMap.set(p.collection_id, {
        id: p.collection_id,
        label: p.collection,
        subcollections: [],
        products: [],
      })
    }
    const col = colMap.get(p.collection_id)!
    col.products.push(p)

    let sub = col.subcollections.find(s => s.id === p.subcollection_id)
    if (!sub) {
      sub = { id: p.subcollection_id, label: p.subcollection, products: [] } as CatalogSubcollection
      col.subcollections.push(sub)
    }
    sub.products.push(p)
  }

  return Array.from(colMap.values()).sort((a, b) => a.label.localeCompare(b.label))
}

// ─── Hook principal ───────────────────────────────────────────
/**
 * Reemplaza getCatalog(brandId) de productCatalog.ts.
 * Devuelve CatalogCollection[] desde Supabase product_blueprints.
 *
 * @param weblabBrandId — ID interno de WebLab (ej. "neuroneCosmetics")
 *
 * @example
 * const { catalog, loading, error } = useCatalog('neuroneCosmetics')
 * // catalog tiene la misma forma que getCatalog('neuroneCosmetics')
 */
export function useCatalog(weblabBrandId: string) {
  const [catalog, setCatalog] = useState<CatalogCollection[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    if (!weblabBrandId) {
      setLoading(false)
      return
    }

    const supabaseBrandId = WEBLAB_TO_SUPABASE_BRAND_ID[weblabBrandId] ?? weblabBrandId
    const enc = encodeURIComponent

    const path =
      `product_blueprints` +
      `?brand_id=eq.${enc(supabaseBrandId)}` +
      `&is_variant=eq.false` +
      `&active=eq.true` +
      `&order=linea.asc,name.asc` +
      `&select=id,brand_id,sku,name,linea,line_family,subcategory,size,` +
      `packaging_style,b2b_only,shopify_visibility,description_es,description_en,` +
      `benefit_claims,hair_type,image_filename,price,msrp,cross_sell,active`

    setLoading(true)
    setError(null)

    sbFetch<ProductBlueprintRow>(path)
      .then(rows => {
        const products = rows.map(r => adaptToCatalogProduct(r))
        setCatalog(buildCollections(products))
      })
      .catch(err => {
        console.error('[useCatalog]', err)
        setError(err.message ?? 'Error cargando catálogo')
      })
      .finally(() => setLoading(false))
  }, [weblabBrandId])

  return { catalog, loading, error }
}

// ─── Sync helper (para scripts y serverless) ─────────────────
/**
 * Versión async directa — para scripts o server-side.
 * No es un hook — se puede llamar fuera de componentes React.
 */
export async function fetchCatalog(weblabBrandId: string): Promise<CatalogCollection[]> {
  const supabaseBrandId = WEBLAB_TO_SUPABASE_BRAND_ID[weblabBrandId] ?? weblabBrandId
  const enc = encodeURIComponent

  const path =
    `product_blueprints` +
    `?brand_id=eq.${enc(supabaseBrandId)}` +
    `&is_variant=eq.false` +
    `&active=eq.true` +
    `&order=linea.asc,name.asc` +
    `&select=id,brand_id,sku,name,linea,line_family,subcategory,size,` +
    `packaging_style,b2b_only,shopify_visibility,description_es,description_en,` +
    `benefit_claims,hair_type,image_filename,price,msrp,cross_sell,active`

  const rows = await sbFetch<ProductBlueprintRow>(path)
  const products = rows.map(r => adaptToCatalogProduct(r))
  return buildCollections(products)
}
