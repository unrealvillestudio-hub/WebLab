// ─── BRAND BLUEPRINTS — UNRLVL WebLab ────────────────────────────────────────
// Resumen embebido de los BP_BRAND del repo BluePrints.
// Se inyectan automáticamente al seleccionar una marca.
// Fuente: github.com/unrealvillestudio-hub/BluePrints/brands/
// Sincronizar manualmente cuando se actualice un BP_BRAND en el repo.
//
// Badge en UI: "Brand context — injected by default" (azul)

import { BrandId } from './brands';

export interface BrandBlueprintSummary {
  schemaVersion: string;
  displayName: string;
  tagline: string;
  // Identidad visual clave
  palettePrompt: string;       // String listo para inyectar en prompt
  typographyPrompt: string;
  // Voz editorial
  voiceB2C: string;
  voiceB2B?: string;
  // Reglas de marca
  rulesInherited: string[];    // Reglas de Neurone global (o marca madre)
  rulesOwned: string[];        // Reglas propias del distribuidor / operador
  // Meta
  status: 'active' | 'draft' | 'pending';
  sourceFile: string;
}

export const BRAND_BLUEPRINTS: Partial<Record<BrandId, BrandBlueprintSummary>> = {

  neuroneCosmetics: {
    schemaVersion: 'BP_BRAND_1.1',
    displayName: 'Neurone South & Central Florida',
    tagline: 'La ciencia capilar que Miami necesitaba.',
    palettePrompt:
      'Paleta Neurone: Negro obsidian #000000 (dominante), Azul Pantone 7546 #0076A8 (acento técnico / CTA), ' +
      'Blanco #FAFAFA (espacio / respiro). ' +
      'Líneas de producto: Restore #C27D5B terracota, Scalp #FAFAFA, Moisture #0076A8, ' +
      'Styling #3F3E3F, Pro Salon #003A70 navy profundo, Color Rescue #41273B burdeos.',
    typographyPrompt:
      'Tipografías Neurone: PT Sans Narrow (cuerpo, tablas, datos técnicos) + Montserrat (headlines, CTAs, labels). ' +
      'Headlines: weight 800, letter-spacing -0.02em. Body: weight 400-500, line-height 1.65.',
    voiceB2C:
      'Voz B2C Neurone SCF: Autoridad técnica accesible. Spanglish Miami natural — inglés para términos técnicos, ' +
      'español para cercanía emocional. Tono directo, específico, sin hedging. ' +
      'Educativa pero nunca condescendiente. "La ciencia trabaja para ti — te explicamos cómo."',
    voiceB2B:
      'Voz B2B Portal Pro: Colega de negocio, no vendedor. Respeta la experiencia del profesional. ' +
      'Datos primero: márgenes, exclusividad territorial, soporte técnico. ' +
      '"Esto es lo que te da ventaja en la silla. Los números lo respaldan."',
    rulesInherited: [
      'Logotipo Neurone — tipografía, casing y proporción exacta del logo global',
      'Claims de producto aprobados por Neurone global (neurocosmética, nano tribología)',
      'Nomenclatura oficial de líneas: Restore, Moisture, Styling, Scalp, Color Rescue, Pro Salon',
      'Paleta de colores primaria: negro + #0076A8 + blanco',
    ],
    rulesOwned: [
      'Voz editorial local — tono, Spanglish Miami, calidez de PO como distribuidora',
      'Slogan territorial: "La ciencia capilar que Miami necesitaba."',
      'Énfasis en distribución exclusiva South & Central Miami como diferenciador',
      'Arquitectura dual B2C / Portal Pro — entrada "Soy profesional" siempre visible',
      'Fotografía: editorial warm Miami, mujeres latinas reales, cabello con textura auténtica',
    ],
    status: 'active',
    sourceFile: 'BluePrints/brands/BP_BRAND_NeuroneSCF_v1.0.json',
  },

};

// ── Helper: genera bloque de texto para inyectar en prompt ────────────────────
export function getBrandBlueprintBlock(brandId: BrandId): string {
  const bp = BRAND_BLUEPRINTS[brandId];
  if (!bp) return '';

  const lines = [
    `── BP_BRAND: ${bp.displayName} (${bp.schemaVersion}) ──`,
    `Tagline: "${bp.tagline}"`,
    ``,
    `PALETA Y TIPOGRAFÍA:`,
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
    lines.push(``, `REGLAS HEREDADAS (marca global — no modificar):`);
    bp.rulesInherited.forEach(r => lines.push(`  • ${r}`));
  }

  if (bp.rulesOwned.length) {
    lines.push(``, `REGLAS PROPIAS (distribuidor / operador):`);
    bp.rulesOwned.forEach(r => lines.push(`  • ${r}`));
  }

  lines.push(`── FIN BP_BRAND ──`);
  return lines.join('\n');
}

export function hasBrandBlueprint(brandId: BrandId): boolean {
  return brandId in BRAND_BLUEPRINTS;
}
