// ─── BRAND AUTO-CONTEXT — UNRLVL WebLab ─────────────────────────────────────
// v1.0 — Datos extraídos de DB_VARIABLES_v6_3 (CONTEXTOS + CTAs + PersonBlueprints)
// Archivo: src/config/brandContexts.ts
// Uso: auto-fill de campos de contexto en WebLab al seleccionar marca

import { BrandId } from './brands';

export interface BrandAutoContext {
  extraContext: string;
  productAudience?: string;
  productCompliance?: string;
  defaultPlatform: 'wordpress' | 'shopify';
}

export const BRAND_CONTEXTS: Partial<Record<BrandId, BrandAutoContext>> = {

  neuroneCosmetics: {
    defaultPlatform: 'shopify',
    extraContext:
      'Distribución exclusiva South & Central Miami. Tecnología Neurocosmética y Nano Tribología capilar. ' +
      'Catálogo de 142 SKUs: colorimetría, tratamientos, cuidado capilar profesional. ' +
      'Modelo comercial dual: tienda B2C para consumidor final + Portal Pro B2B exclusivo para profesionales (coloristas, propietarios de salones). ' +
      'Única distribuidora exclusiva en South & Central Miami — diferenciador clave frente a cualquier competidor. ' +
      'Paleta de marca: negro obsidian + navy #0076A8 + blanco. Tono: autoridad técnica accesible, Spanglish Miami.',
    productAudience:
      'Mujeres latinas 30–55 años Miami interesadas en colorimetría premium y cuidado capilar de alta gama. ' +
      'Canal B2B: coloristas independientes y propietarios de salones en South & Central Miami.',
    productCompliance:
      'Cosmética capilar registrada. SIN claims médicos ni curativos. ' +
      'USAR: ayuda a, favorece, contribuye a, potencia, optimiza, nutre, fortalece. ' +
      'PROHIBIDO: trata, cura, elimina enfermedades, patologías o condiciones capilares médicas.',
  },

  patriciaOsorioVizosSalon: {
    defaultPlatform: 'wordpress',
    extraContext:
      'Vizos Salón — salón de belleza premium en South Miami (local 12955 South Dixie Hwy). ' +
      'Servicios: corte y color capilar, tratamientos (línea Neurone Cosmética), maquillaje profesional, nail bar. ' +
      'Propietaria Patricia Osorio, especialista en colorimetría con más de 20 años. ' +
      'Instalaciones modernas: espejo Hollywood, zona lounge con butacas azul navy, barra de café. ' +
      'Ambiente íntimo, profesional y acogedor. Clientela latina principalmente. ' +
      'Tono: experta local, cercana, práctica — "Esto es lo que funciona en la silla".',
    productAudience:
      'Mujeres latinas 25–55 años South Miami. Buscan servicios capilares y de belleza premium ' +
      'en ambiente de confianza con profesionales experimentados.',
  },

  patriciaOsorioPersonal: {
    defaultPlatform: 'wordpress',
    extraContext:
      'Marca personal de Patricia Osorio — empresaria multimarca Miami. ' +
      'Distribuidora exclusiva Neurone Cosmética South & Central Miami. Propietaria Vizos Salón. Socia D7 Herbal España. ' +
      'Más de 20 años de experiencia independiente en belleza y negocios. ' +
      'Voz de liderazgo femenino latino en Miami. Conecta todas sus marcas desde perspectiva de fundadora auténtica. ' +
      'Tono: directa, sin postureo, desde el camino recorrido — "Lo construí. Aquí está."',
    productAudience:
      'Mujeres latinas emprendedoras y profesionales 30–55 años. Comunidad hispana Miami y Florida.',
  },

  patriciaOsorioComunidad: {
    defaultPlatform: 'wordpress',
    extraContext:
      'Comunidad de mujeres emprendedoras y líderes fundada por Patricia Osorio en Miami. ' +
      'Contenido: emprendimiento femenino, liderazgo, negocios, crecimiento personal desde experiencia real. ' +
      'Tono inspirador pero práctico y honesto — sin promesas vacías, desde camino recorrido. ' +
      '"Si yo pude, tú puedes — y te digo exactamente cómo."',
    productAudience:
      'Mujeres latinas emprendedoras y profesionales 25–55 años. Comunidad hispana Miami y Florida.',
    productCompliance:
      'SIN promesas de ingresos garantizados ni resultados económicos específicos. ' +
      'Testimonios deben ser reales y verificables. No usar claims de enriquecimiento rápido.',
  },

  d7Herbal: {
    defaultPlatform: 'shopify',
    extraContext:
      'D7 Herbal — gel bebible natural premium. Ingredientes: Asaí (antioxidante), Espirulina (proteínas + micronutrientes), Fruto del Monje (edulcorante natural sin azúcar). ' +
      'Importado de Colombia. Suplemento de bienestar dirigido a latinos en Miami y Florida. ' +
      'Fórmula 100% natural. Mercado wellness latinoamericano en crecimiento. ' +
      'Tono: natural, saludable, auténtico latino.',
    productAudience:
      'Adultos latinos 25–55 años interesados en bienestar natural, salud integral y suplementación sin artificiales. Miami y Florida.',
    productCompliance:
      'Suplemento alimenticio — SIN claims de tratamiento, diagnóstico o cura médica. ' +
      'USAR: apoya, contribuye a, ayuda a mantener, favorece, potencia el bienestar. ' +
      'INCLUIR disclaimer FDA: "Este producto no ha sido evaluado por la FDA. No está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad." ' +
      'No mencionar efectos sobre enfermedades específicas.',
  },

  diamondDetails: {
    defaultPlatform: 'wordpress',
    extraContext:
      'Diamond Details — detailing de autos premium en Miami. ' +
      'Servicios: recubrimiento cerámico, paint protection film (PPF), detailing interior/exterior de alta gama, corrección de pintura. ' +
      'Trabajo artesanal y perfeccionista. Especialistas en vehículos de lujo y deportivos. ' +
      'Tono: experto, técnico, premium — para clientes que saben la diferencia.',
    productAudience:
      'Hombres y mujeres 28–55 años Miami. Propietarios de vehículos premium/lujo (BMW, Mercedes, Porsche, Tesla, exóticos). ' +
      'Valoran la calidad perfecta y el cuidado a largo plazo de su inversión.',
  },

  vivoseMask: {
    defaultPlatform: 'shopify',
    extraContext:
      'Vivose Mask — mascarillas y skincare natural para el mercado latinoamericano en Miami. ' +
      'Productos de cuidado facial con ingredientes naturales y botánicos. E-commerce Shopify. ' +
      'Tono: natural, consciente, femenino y moderno.',
    productAudience:
      'Mujeres latinas 20–45 años interesadas en skincare natural, clean beauty y rutinas de cuidado facial.',
    productCompliance:
      'Cosmética tópica. SIN claims médicos o dermatológicos clínicos. ' +
      'USAR: hidrata, nutre, suaviza, ilumina, revitaliza, mejora la apariencia de. ' +
      'PROHIBIDO: trata, cura condiciones de piel como acné, rosacea, eczema.',
  },

  vizosCosmetics: {
    defaultPlatform: 'shopify',
    extraContext:
      'Vizos Cosmetics — línea de cosméticos y maquillaje color para el mercado latino Miami. ' +
      'Productos: labiales, sombras, bases, iluminadores. E-commerce Shopify. ' +
      'Tono: bold, glam, latina — celebra la belleza diversa.',
    productAudience:
      'Mujeres latinas 18–45 años Miami. Amantes del maquillaje, el color y la expresión a través de la belleza.',
  },

  phas: {
    defaultPlatform: 'shopify',
    extraContext:
      'PHAS — productos de salud y bienestar para el mercado latinoamericano. ' +
      'Distribución: Amazon + e-commerce propio Shopify. Miami, FL. ' +
      'Foco en suplementación y salud integral.',
    productAudience:
      'Adultos 25–55 años interesados en salud, bienestar y suplementación. Comunidad latina Miami y Florida.',
    productCompliance:
      'Productos de salud/wellness. SIN claims médicos sin respaldo científico. ' +
      'Cumplimiento FDA para suplementos dietéticos (DSHEA). ' +
      'INCLUIR disclaimer cuando aplique.',
  },

  unrealilleStudio: {
    defaultPlatform: 'wordpress',
    extraContext:
      'Unreal>ille Studio — agencia inhouse de marketing, publicidad y estrategia digital del ecosistema UNRLVL. ' +
      'Especializada en marcas latinas en Miami. No es agencia pública en esta fase — operación inhouse exclusiva. ' +
      'Servicios: marketing digital, estrategia de contenido, e-commerce, publicidad pagada, producción creativa.',
    productAudience:
      'Ecosistema interno UNRLVL: marcas propias y marcas de familia/asociados.',
  },

};