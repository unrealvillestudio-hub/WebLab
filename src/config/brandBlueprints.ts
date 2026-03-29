// BRAND BLUEPRINTS - UNRLVL WebLab
// v1.1 - 2026-03-28: Unrealville Studio (sin chevron), referencias corregidas
// NOTE: palette/typography para NeuroneSCF disponibles en Supabase brand_palette + brand_typography
// Full Supabase migration pendiente en roadmap (Onboarding App)

import { BrandId } from './brands';

export interface BrandBlueprintSummary {
  schemaVersion: string;
  displayName: string;
  tagline: string;
  palettePrompt: string;
  typographyPrompt: string;
  voiceB2C: string;
  voiceB2B?: string;
  rulesInherited: string[];
  rulesOwned: string[];
  status: 'active' | 'draft' | 'pending';
  sourceFile: string;
}

export const BRAND_BLUEPRINTS: Partial<Record<BrandId, BrandBlueprintSummary>> = {

  neuroneCosmetics: {
    schemaVersion: 'BP_BRAND_1.1',
    displayName: 'Neurone South & Central Florida',
    tagline: 'La ciencia capilar que Miami necesitaba.',
    palettePrompt:
      'Paleta Neurone: Negro obsidian #000000 (dominante), Azul #0076A8 (acento tecnico / CTA), ' +
      'Blanco #FAFAFA (espacio / respiro). ' +
      'Lineas: Restore #C27D5B terracota, Scalp #FAFAFA, Moisture #0076A8, ' +
      'Styling #3F3E3F, Pro Salon #003A70 navy, Color Rescue #41273B burdeos.',
    typographyPrompt:
      'Tipografias Neurone: PT Sans Narrow (cuerpo, tablas, datos tecnicos) + Montserrat (headlines, CTAs). ' +
      'Headlines: weight 800, letter-spacing -0.02em. Body: weight 400-500, line-height 1.65.',
    voiceB2C:
      'Autoridad tecnica accesible. Spanglish Miami natural. Directo, especifico, sin hedging. ' +
      '"La ciencia trabaja para ti - te explicamos como."',
    voiceB2B:
      'Colega de negocio, no vendedor. Datos primero: margenes, exclusividad territorial, soporte tecnico. ' +
      '"Esto es lo que te da ventaja en la silla. Los numeros lo respaldan."',
    rulesInherited: [
      'Logotipo Neurone - tipografia y proporcion exacta del logo global',
      'Claims de producto aprobados por Neurone global (neurocosmetica, nano tribologia)',
      'Nomenclatura oficial de lineas: Restore, Moisture, Styling, Scalp, Color Rescue, Pro Salon',
      'Paleta de colores primaria: negro + #0076A8 + blanco',
    ],
    rulesOwned: [
      'Voz editorial local - tono, Spanglish Miami, calidez de PO como distribuidora',
      'Slogan territorial: "La ciencia capilar que Miami necesitaba."',
      'Enfasis en distribucion exclusiva South & Central Florida',
      'Arquitectura dual B2C / Portal Pro',
      'Fotografia: editorial warm Miami, mujeres latinas reales',
    ],
    status: 'active',
    sourceFile: 'BluePrints/brands/BP_BRAND_NeuroneSCF_v1.0.json',
  },

  unrealilleStudio: {
    schemaVersion: 'BP_BRAND_1.0',
    displayName: 'Unrealville Studio',
    tagline: 'Not for everyone.',
    palettePrompt:
      'Paleta UNRLVL: Negro #0A0A0A (dominante), Cyan #00FFD1 (acento / chevron), ' +
      'Blanco #FAFAFA (texto / respiro). Studio: opacity 0.32 sobre negro.',
    typographyPrompt:
      'Tipografia UNRLVL: Geist Mono (codigo, labels, UI), Inter (cuerpo editorial). ' +
      'Headlines: weight 700-900 uppercase. Chevron siempre blinking (SMIL animate).',
    voiceB2C:
      'Tecnico-creativo. Directo sin adornos. Sin postureo, sin buzzwords. ' +
      '"Construimos sistemas. Los resultados hablan."',
    rulesInherited: [],
    rulesOwned: [
      'Chevron > SIEMPRE blinking en outputs HTML/SVG (SMIL animate)',
      'STUDIO en opacity 0.32 cuando aparece junto al logotipo',
      'Favicon obligatorio en todo HTML output',
      'ICR (Indice de Calidad de Respuesta) en todo output final',
      'Signature version A (web/HTML) y version B (docs internos)',
    ],
    status: 'active',
    sourceFile: 'BluePrints/brands/BP_BRAND_UnrealvilleStudio_v1.3.json',
  },

};

// Helper: genera bloque de texto para inyectar en prompt
export function getBrandBlueprintBlock(brandId: BrandId): string {
  const bp = BRAND_BLUEPRINTS[brandId];
  if (!bp) return '';

  const lines = [
    `BP_BRAND: ${bp.displayName} (${bp.schemaVersion})`,
    `Tagline: "${bp.tagline}"`,
    ``,
    `PALETA Y TIPOGRAFIA:`,
    bp.palettePrompt,
    bp.typographyPrompt,
    ``,
    `VOZ EDITORIAL B2C:`,
    bp.voiceB2C,
  ];

  if (bp.voiceB2B) {
    lines.push(``, `VOZ EDITORIAL B2B / PRO:`, bp.voiceB2B);
  }

  if (bp.rulesInherited.length) {
    lines.push(``, `REGLAS HEREDADAS (no modificar):`);
    bp.rulesInherited.forEach(r => lines.push(`  - ${r}`));
  }

  if (bp.rulesOwned.length) {
    lines.push(``, `REGLAS PROPIAS:`);
    bp.rulesOwned.forEach(r => lines.push(`  - ${r}`));
  }

  lines.push(`FIN BP_BRAND`);
  return lines.join('\n');
}

export function hasBrandBlueprint(brandId: BrandId): boolean {
  return brandId in BRAND_BLUEPRINTS;
}
