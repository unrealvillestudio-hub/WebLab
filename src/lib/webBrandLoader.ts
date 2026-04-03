// ============================================================
// UNRLVL WebLab — lib/webBrandLoader.ts
// Carga brand context desde Supabase para webEngine.ts.
// Reemplaza funcionalmente los 3 archivos hardcoded:
//   · brandContexts.tsx    → complianceBlock, catalogContext, defaultPlatform
//   · humanizeConfig.ts    → humanizeWeb, humanizeCopy
//   · brandBlueprints.ts   → blueprintBlock
// Fallback automático a los archivos estáticos si Supabase falla.
// 2026-04-03
// ============================================================
import { sbFetch } from './supabaseClient'
import { getHumanizeBlock } from '../config/humanizeConfig'
import { getBrandBlueprintBlock } from '../config/brandBlueprints'
import { BRAND_CONTEXTS } from '../config/brandContexts'
import type { BrandId } from '../config/brands'

// ── Mapa de IDs WebLab (camelCase) → IDs canónicos Supabase ──
// WebLab usa camelCase internamente. Supabase usa PascalCase.
const CANONICAL_MAP: Record<string, string> = {
  neuroneCosmetics:            'NeuroneSCF',
  patriciaOsorioVizosSalon:    'PatriciaOsorioVizosSalon',
  patriciaOsorioPersonal:      'PatriciaOsorioPersonal',
  patriciaOsorioComunidad:     'PatriciaOsorioComunidad',
  d7Herbal:                    'D7Herbal',
  diamondDetails:              'DiamondDetails',
  vivoseMask:                  'VivoseMask',
  vizosCosmetics:              'VizosCosmetics',
  forumPhs:                    'ForumPHs',
  unrealilleStudio:            'UnrealvilleStudio',
  unrealilleStores:            'UnrealvilleStores',
}

export interface WebBrandContextResult {
  /** Humanize block para secciones web (medium='web') */
  humanizeWeb: string
  /** Humanize block para blog posts (medium='copy') */
  humanizeCopy: string
  /** Bloque de blueprint: tagline, paleta, tipografía, voice */
  blueprintBlock: string
  /** Bloque de compliance formateado como string para el prompt */
  complianceBlock: string
  /** Contexto de catálogo de productos (usado por ProductPage/Collection) */
  catalogContext: string
  /** Plataforma target por defecto para esta marca */
  defaultPlatform: 'shopify' | 'wordpress'
}

// ── Cache en memoria por sesión ───────────────────────────────
const _cache = new Map<string, WebBrandContextResult>()

/**
 * Carga el brand context de WebLab desde Supabase.
 * Acepta el ID de WebLab (camelCase) — lo traduce internamente al ID canónico.
 * Resultado cacheado en memoria para la sesión (un fetch por marca por sesión).
 */
export async function loadWebBrandContext(
  webLabBrandId: string
): Promise<WebBrandContextResult> {
  if (_cache.has(webLabBrandId)) return _cache.get(webLabBrandId)!

  const canonicalId = CANONICAL_MAP[webLabBrandId] ?? webLabBrandId
  const enc = encodeURIComponent

  try {
    const [
      humanizeDefaultRes,
      humanizeBrandRes,
      complianceDefaultRes,
      complianceBrandRes,
      brandRes,
      paletteRes,
      typographyRes,
    ] = await Promise.all([
      sbFetch<any>(`humanize_profiles?brand_id=eq.DEFAULT&select=*`),
      sbFetch<any>(`humanize_profiles?brand_id=eq.${enc(canonicalId)}&select=*`),
      sbFetch<any>(`compliance_rules?brand_id=eq.DEFAULT&active=eq.true&select=*`),
      sbFetch<any>(`compliance_rules?brand_id=eq.${enc(canonicalId)}&active=eq.true&select=*`),
      sbFetch<any>(
        `brands?id=eq.${enc(canonicalId)}&select=id,tagline,brand_context,icp,web_default_platform&limit=1`
      ),
      sbFetch<any>(`brand_palette?brand_id=eq.${enc(canonicalId)}&select=*`),
      sbFetch<any>(`brand_typography?brand_id=eq.${enc(canonicalId)}&select=*`),
    ])

    const brand = brandRes[0] ?? null

    // ── Humanize resolver ──────────────────────────────────────
    const resolveHumanize = (medium: string): string => {
      const brandRow    = humanizeBrandRes.find((h: any) => h.medium === medium)
      const defaultRow  = humanizeDefaultRes.find((h: any) => h.medium === medium)
      const row = brandRow ?? defaultRow

      if (!row) return getHumanizeBlock(medium as any, webLabBrandId)

      // raw_config puede tener { value: "texto completo del humanize" }
      if (row.raw_config?.value) return row.raw_config.value

      // Reconstruir desde campos individuales si no hay raw_config.value
      if (row.tone || row.personality || row.authenticity_rules) {
        const lines = [
          `[HUMANIZE ${medium.toUpperCase()} · ${canonicalId}]`,
          row.tone             ? row.tone                             : null,
          row.personality      ? `Personalidad: ${row.personality}`   : null,
          row.sentence_style   ? `Estilo: ${row.sentence_style}`      : null,
          row.authenticity_rules ? row.authenticity_rules             : null,
        ].filter(Boolean)
        return lines.join('\n')
      }

      // Fallback final: hardcoded
      return getHumanizeBlock(medium as any, webLabBrandId)
    }

    // ── Compliance block ───────────────────────────────────────
    const allCompliance = [...complianceDefaultRes, ...complianceBrandRes]
    const complianceBlock = allCompliance.length > 0
      ? [
          `COMPLIANCE — REGLAS OBLIGATORIAS`,
          ...allCompliance
            .filter((r: any) => r.severity === 'hard')
            .map((r: any, i: number) => `${i + 1}. ${r.rule_text}`),
          ...allCompliance
            .filter((r: any) => r.severity !== 'hard')
            .map((r: any, i: number) => `${i + 1}. ${r.rule_text}`),
        ].join('\n')
      : (BRAND_CONTEXTS[webLabBrandId as keyof typeof BRAND_CONTEXTS]?.complianceBlock ?? '')

    // ── Blueprint block ────────────────────────────────────────
    let blueprintBlock = ''
    if (brand) {
      const paletteStr = paletteRes.length > 0
        ? paletteRes
            .map((p: any) => `${p.role}: ${p.name ? p.name + ' ' : ''}${p.hex}`)
            .join(' · ')
        : null

      const typographyStr = typographyRes.length > 0
        ? typographyRes
            .map((t: any) => `${t.role}: ${t.font_family}`)
            .join(' · ')
        : null

      const lines = [
        `BP_BRAND: ${canonicalId}`,
        brand.tagline      ? `Tagline: "${brand.tagline}"`    : null,
        paletteStr         ? `\nPALETA: ${paletteStr}`        : null,
        typographyStr      ? `TIPOGRAFÍA: ${typographyStr}`   : null,
        brand.brand_context ? `\nCONTEXTO:\n${brand.brand_context}` : null,
        brand.icp          ? `\nICP:\n${brand.icp}`           : null,
        `FIN BP_BRAND`,
      ].filter(Boolean)

      blueprintBlock = lines.join('\n')
    } else {
      // Fallback a hardcoded si la marca no tiene datos en Supabase
      blueprintBlock = getBrandBlueprintBlock(webLabBrandId as BrandId)
    }

    // ── defaultPlatform ────────────────────────────────────────
    const defaultPlatform = (
      brand?.web_default_platform as 'shopify' | 'wordpress' | undefined
    ) ?? BRAND_CONTEXTS[webLabBrandId as keyof typeof BRAND_CONTEXTS]?.defaultPlatform
       ?? 'shopify'

    const result: WebBrandContextResult = {
      humanizeWeb:     resolveHumanize('web'),
      humanizeCopy:    resolveHumanize('copy'),
      blueprintBlock,
      complianceBlock,
      catalogContext:
        BRAND_CONTEXTS[webLabBrandId as keyof typeof BRAND_CONTEXTS]?.productCatalogContext ?? '',
      defaultPlatform,
    }

    _cache.set(webLabBrandId, result)
    return result

  } catch (err) {
    console.error('[webBrandLoader] Supabase failed — using hardcoded fallback:', err)

    // Fallback completo a los 3 archivos estáticos
    const brandCtx = BRAND_CONTEXTS[webLabBrandId as keyof typeof BRAND_CONTEXTS]
    return {
      humanizeWeb:     getHumanizeBlock('web',  webLabBrandId),
      humanizeCopy:    getHumanizeBlock('copy', webLabBrandId),
      blueprintBlock:  getBrandBlueprintBlock(webLabBrandId as BrandId),
      complianceBlock: brandCtx?.complianceBlock       ?? '',
      catalogContext:  brandCtx?.productCatalogContext ?? '',
      defaultPlatform: brandCtx?.defaultPlatform       ?? 'shopify',
    }
  }
}

/** Invalida el cache para forzar recarga desde Supabase */
export function invalidateWebBrandCache(webLabBrandId?: string): void {
  if (webLabBrandId) {
    _cache.delete(webLabBrandId)
  } else {
    _cache.clear()
  }
}
