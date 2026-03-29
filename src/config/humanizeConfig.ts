/**
 * UNRLVL - Humanize Layer v1.1 (F2.5)
 * Updated: 2026-03-28 - brandId references verified (camelCase = WebLab internal IDs)
 * NOTE: Full Supabase migration pending (requires webEngine.ts refactor)
 * Source: humanize_profiles table (currently empty - these are the source of truth)
 */

export type HumanizeMedium = 'copy' | 'image' | 'video' | 'voice' | 'web';

export interface HumanizeProfile {
  copy:  string;
  image: string;
  video: string;
  voice: string;
  web:   string;
}

export interface HumanizeBrandOverride {
  brandId: string;
  copy?:   string;
  image?:  string;
  video?:  string;
  voice?:  string;
  web?:    string;
}

// DEFAULTS - aplican a todas las marcas salvo override

export const HUMANIZE_DEFAULTS: HumanizeProfile = {

  copy: [
    '[HUMANIZE - COPY]',
    'AUTENTICIDAD DE VOZ:',
    '- Escribe como habla una persona real, no como un documento corporativo.',
    '- Usa contracciones y coloquialismos naturales del mercado objetivo.',
    '- Varia el ritmo: alterna frases cortas con frases mas largas.',
    '- Primera persona cuando sea posible.',
    'PROHIBIDO (tells de AI):',
    '- "En conclusion", "Es importante destacar", "Ciertamente", "Sin duda alguna"',
    '- Listas de exactamente 3 puntos con el mismo largo.',
    '- Adjetivos vacios: innovador, revolucionario, transformador, robusto.',
    '- Parrafos perfectamente simetricos en longitud.',
    'NATURALIDAD:',
    '- Si algo tiene una desventaja real, reconocela brevemente. Aumenta credibilidad.',
    '- El CTA puede ser indirecto: "Cuando estes listo, estamos aqui."',
  ].join('\n'),

  image: [
    '[HUMANIZE - IMAGE / AVATAR]',
    'PIEL Y RASGOS:',
    '- Piel con textura real: poros visibles, variacion tonal, sin areas uniformemente lisas.',
    '- Asimetria facial natural. Imperfecciones honestas.',
    'CABELLO:',
    '- Flyaways y mechones sueltos. Variacion de volumen.',
    'EXPRESION Y POSE:',
    '- Micro-expresiones naturales. Pose con peso real.',
    '- Contacto visual no siempre directo al lente.',
    'PROHIBIDO:',
    '- Piel de plastico. Simetria facial perfecta.',
    '- Poses de stock. Iluminacion sin sombras naturales.',
  ].join('\n'),

  video: [
    '[HUMANIZE - VIDEO / MOTION]',
    'MOVIMIENTO DE CAMARA:',
    '- Handheld implica micro-vibracion organica.',
    '- Dolly con aceleracion al inicio y desaceleracion al final.',
    'PERSONAJES EN FRAME:',
    '- Micro-movimientos entre tomas. Ritmo de parpadeo natural.',
    '- Gestos que acompanan la narrativa.',
    'PROHIBIDO:',
    '- Estabilizacion perfecta en contexto handheld/UGC.',
    '- Personajes inmoviles como maniquies entre lineas.',
  ].join('\n'),

  voice: [
    '[HUMANIZE - VOICE / AUDIO]',
    'RESPIRACION Y RITMO:',
    '- Pausas de respiracion naturales. Micro-hesitaciones controladas.',
    '- Velocidad variable: mas rapido en informacion secundaria, mas lento en mensaje clave.',
    'ENFASIS Y EMOCION:',
    '- Coloracion emocional genuina. Enfasis prosodico en palabras clave.',
    'PROHIBIDO:',
    '- Cadencia uniforme sin variacion. Pausas mecanicas identicas.',
    '- Velocidad constante de inicio a fin.',
  ].join('\n'),

  web: [
    '[HUMANIZE - WEB ASSETS]',
    'COPY EN WEB:',
    '- Headlines conversacionales, no declaraciones corporativas.',
    '- Parrafos cortos: maximo 3-4 lineas.',
    '- Segunda persona directa: "tu" o "usted" segun la marca.',
    'PROHIBIDO:',
    '- Fotos de stock de personas con sonrisa perfecta en entornos clinicamente limpios.',
    '- Copy corporativo en tercera persona impersonal.',
    '- UI microcopy generico ("Submit", "Learn More", "Click Here").',
  ].join('\n'),

};

// BRAND OVERRIDES
// brandId usa camelCase (IDs internos de WebLab)
// Pendiente: poblar humanize_profiles en Supabase con estos datos

export const BRAND_HUMANIZE_OVERRIDES: HumanizeBrandOverride[] = [
  {
    brandId: 'neuroneCosmetics',
    copy: [
      HUMANIZE_DEFAULTS.copy,
      'NEURONE SCF ESPECIFICO:',
      '- Tono cientifico-accesible: terminologia tecnica real explicada en la siguiente frase.',
      '- Bilinguismo natural ES/EN en mercado Miami: Spanglish controlado, no forzado.',
      '- Compliance: nunca "cura", "trata", "elimina". Usar "ayuda a", "contribuye a".',
      '- B2C: emocional + tecnico. B2B: tecnico + ROI.',
    ].join('\n'),
  },
  {
    brandId: 'patriciaOsorioVizosSalon',
    copy: [
      HUMANIZE_DEFAULTS.copy,
      'VIZOS SALON ESPECIFICO:',
      '- Voz de autoridad calida: experta que tambien es tu amiga de confianza.',
      '- Spanglish natural Miami.',
      '- Referencias a experiencia real de salon.',
    ].join('\n'),
    image: [
      HUMANIZE_DEFAULTS.image,
      'VIZOS VISUAL ESPECIFICO:',
      '- Entorno de salon real con imperfecciones de trabajo.',
      '- Patricia con manos activas: siempre haciendo algo.',
    ].join('\n'),
  },
  {
    brandId: 'diamondDetails',
    copy: [
      HUMANIZE_DEFAULTS.copy,
      'DIAMOND DETAILS ESPECIFICO:',
      '- Lenguaje de taller premium: tecnico sin ser pedante.',
      '- El auto es la extension de la identidad del cliente.',
    ].join('\n'),
    image: [
      HUMANIZE_DEFAULTS.image,
      'DIAMOND DETAILS VISUAL:',
      '- Reflejos en carroceria mostrando entorno real del taller.',
      '- Angulos bajos que dan drama y escala al vehiculo.',
    ].join('\n'),
  },
  {
    brandId: 'd7Herbal',
    copy: [
      HUMANIZE_DEFAULTS.copy,
      'D7 HERBAL ESPECIFICO:',
      '- Proximidad botanica: ingredientes con nombre real y origen.',
      '- Compliance estricto: cero lenguaje medico.',
      '- Tono wellness: calido, natural, sin exageracion.',
    ].join('\n'),
  },
  {
    brandId: 'unrealilleStudio',
    copy: [
      HUMANIZE_DEFAULTS.copy,
      'UNREALVILLE STUDIO ESPECIFICO:',
      '- Tono tecnico-creativo: expertos que entienden tanto el negocio como la estetica.',
      '- Directo y sin adornos. Los resultados hablan.',
    ].join('\n'),
  },
];

// RESOLVER

export function getHumanizeBlock(
  medium: HumanizeMedium,
  brandId?: string,
  bpPersonOverride?: string,
): string {
  if (bpPersonOverride?.trim()) return bpPersonOverride.trim();

  if (brandId) {
    const brandOverride = BRAND_HUMANIZE_OVERRIDES.find(b => b.brandId === brandId);
    if (brandOverride?.[medium]?.trim()) return brandOverride[medium]!.trim();
  }

  return HUMANIZE_DEFAULTS[medium];
}

export function getHumanizeProfile(brandId?: string): HumanizeProfile {
  return {
    copy:  getHumanizeBlock('copy',  brandId),
    image: getHumanizeBlock('image', brandId),
    video: getHumanizeBlock('video', brandId),
    voice: getHumanizeBlock('voice', brandId),
    web:   getHumanizeBlock('web',   brandId),
  };
}
