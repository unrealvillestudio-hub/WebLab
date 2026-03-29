// BRAND AUTO-CONTEXT - UNRLVL WebLab
// v1.1 - 2026-03-28: Unrealville Studio (sin chevron), referencias corregidas
// Uso: auto-fill de campos de contexto en WebLab al seleccionar marca
// NOTA: migración completa a Supabase pendiente en roadmap (requiere refactor webEngine.ts)

import { BrandId } from './brands';

export interface BrandAutoContext {
  extraContext: string;
  productAudience?: string;
  productCompliance?: string;
  complianceBlock?: string;
  productCatalogContext?: string;
  defaultPlatform: 'wordpress' | 'shopify';
}

export const BRAND_CONTEXTS: Partial<Record<BrandId, BrandAutoContext>> = {

  neuroneCosmetics: {
    defaultPlatform: 'shopify',
    extraContext:
      'Distribucion exclusiva South & Central Florida. Tecnologia Neurocosmetica y Nano Tribologia capilar. ' +
      'Catalogo de 39 SKUs activos: colorimetria, tratamientos, cuidado capilar profesional. ' +
      'Modelo comercial dual: tienda B2C para consumidor final + Portal Pro B2B exclusivo para profesionales. ' +
      'Unica distribuidora exclusiva en South & Central Florida. ' +
      'Paleta de marca: negro obsidian + navy #0076A8 + blanco. Tono: autoridad tecnica accesible, Spanglish Miami.',
    productAudience:
      'Mujeres latinas 30-55 anos Miami interesadas en colorimetria premium y cuidado capilar de alta gama. ' +
      'Canal B2B: coloristas independientes y propietarios de salones en South & Central Florida.',
    productCompliance:
      'Cosmetica capilar registrada. SIN claims medicos ni curativos. ' +
      'USAR: ayuda a, favorece, contribuye a, potencia, optimiza, nutre, fortalece. ' +
      'PROHIBIDO: trata, cura, elimina enfermedades o condiciones capilares medicas.',
    complianceBlock:
      'COMPLIANCE NEURONE - GUARDARRAIL FDA/FTC\n' +
      'CLASIFICACION: Cosmeticos capilares (21 CFR 701). NO son medicamentos.\n' +
      'JURISDICCION: Florida/US - FTC + FDA.\n\n' +
      'VERBOS APROBADOS: ayuda a, favorece, contribuye a, potencia, optimiza, nutre, fortalece, hidrata, suaviza, protege\n\n' +
      'PROHIBIDO ABSOLUTO:\n' +
      '  - "trata", "cura", "elimina" enfermedades capilares\n' +
      '  - Claims sobre alopecia, psoriasis, dermatitis, caspa patologica\n' +
      '  - "regenera el foliculo piloso"\n' +
      '  - "aprobado por la FDA" sin documentacion valida\n\n' +
      'PRODUCTOS CRITICOS - NO GENERAR COPY:\n' +
      '  - Capissen Shampoo, Capissen Lotion, Derma Roller (shopify_visibility: pending)\n\n' +
      'DISCLAIMER FDA (incluir en landing/product pages):\n' +
      '  "Este producto no ha sido evaluado por la FDA. No esta destinado a diagnosticar,\n' +
      '  tratar, curar o prevenir ninguna enfermedad o condicion medica."',
    productCatalogContext:
      'CATALOGO NEURONE SCF - 39 SKUs activos\n\n' +
      'B2C (publico): Moisture, Restore, Styling, Color Rescue, Scalp (productos seleccionados)\n' +
      'B2B Pro Salon: Fanzi Mix, Plattina White, Total Violet Ink, Neuroxide, Density Proff, Neurone Color, Pro Filus\n' +
      'CRITICOS sin copy: Capissen Shampoo, Capissen Lotion, Derma Roller\n' +
      'Imagenes standard (fondo blanco): todos los 39 productos\n' +
      'Imagenes dark/campaign: 8 productos disponibles',
  },

  patriciaOsorioVizosSalon: {
    defaultPlatform: 'wordpress',
    extraContext:
      'Vizos Salon - salon de belleza premium en South Miami (12955 South Dixie Hwy). ' +
      'Servicios: corte y color capilar, tratamientos (linea Neurone), maquillaje profesional, nail bar. ' +
      'Propietaria Patricia Osorio, especialista en colorimetria con mas de 20 anos. ' +
      'Ambiente intimo, profesional y acogedor. Clientela latina principalmente. ' +
      'Tono: experta local, cercana, practica.',
    productAudience:
      'Mujeres latinas 25-55 anos South Miami. Buscan servicios capilares y belleza premium.',
  },

  patriciaOsorioPersonal: {
    defaultPlatform: 'wordpress',
    extraContext:
      'Marca personal de Patricia Osorio - empresaria multimarca Miami. ' +
      'Distribuidora exclusiva Neurone South & Central Florida. Propietaria Vizos Salon. ' +
      'Mas de 20 anos de experiencia en belleza y negocios. ' +
      'Voz de liderazgo femenino latino en Miami.',
    productAudience:
      'Mujeres latinas emprendedoras 30-55 anos. Comunidad hispana Miami y Florida.',
  },

  patriciaOsorioComunidad: {
    defaultPlatform: 'wordpress',
    extraContext:
      'Comunidad de mujeres emprendedoras fundada por Patricia Osorio en Miami. ' +
      'Contenido: emprendimiento femenino, liderazgo, negocios, crecimiento personal desde experiencia real. ' +
      'Tono inspirador pero practico y honesto.',
    productAudience:
      'Mujeres latinas emprendedoras 25-55 anos. Comunidad hispana Miami y Florida.',
    productCompliance:
      'SIN promesas de ingresos garantizados. Testimonios reales y verificables.',
  },

  d7Herbal: {
    defaultPlatform: 'shopify',
    extraContext:
      'D7 Herbal - gel bebible natural premium. Ingredientes: Acai (antioxidante), Espirulina (proteinas), Fruto del Monje (edulcorante natural). ' +
      'Importado de Colombia. Suplemento de bienestar para latinos en Miami y Florida. ' +
      'Tono: natural, saludable, autentico latino.',
    productAudience:
      'Adultos latinos 25-55 anos interesados en bienestar natural. Miami y Florida.',
    productCompliance:
      'Suplemento alimenticio. SIN claims medicos. USAR: apoya, contribuye a, ayuda a mantener. ' +
      'INCLUIR disclaimer FDA en toda landing page.',
    complianceBlock:
      'COMPLIANCE D7 HERBAL - GUARDARRAIL FDA/FTC\n' +
      'CLASIFICACION: Dietary Supplement (DSHEA, 21 CFR 101.36).\n\n' +
      'VERBOS APROBADOS: apoya, contribuye a, ayuda a mantener, favorece, potencia, nutre\n\n' +
      'PROHIBIDO: claims de tratamiento/diagnostico/cura, mencionar diabetes/obesidad/cancer\n\n' +
      'DISCLAIMER FDA OBLIGATORIO:\n' +
      '  "Este producto no ha sido evaluado por la FDA. No esta destinado a diagnosticar,\n' +
      '  tratar, curar o prevenir ninguna enfermedad o condicion medica."',
  },

  diamondDetails: {
    defaultPlatform: 'wordpress',
    extraContext:
      'Diamond Details - detailing de autos premium en Alicante, Espana. ' +
      'Servicios: recubrimiento ceramico, PPF, detailing interior/exterior, correccion de pintura. ' +
      'Especialistas en vehiculos de lujo y deportivos. ' +
      'Tono: experto, tecnico, premium.',
    productAudience:
      'Propietarios de vehiculos premium 28-55 anos. Valoran calidad perfecta y cuidado a largo plazo.',
  },

  vivoseMask: {
    defaultPlatform: 'shopify',
    extraContext:
      'Vivose Mask - mascarillas y skincare natural para el mercado latinoamericano en Miami. ' +
      'Ingredientes naturales y botanicos. E-commerce Shopify. ' +
      'Tono: natural, consciente, femenino y moderno.',
    productAudience:
      'Mujeres latinas 20-45 anos interesadas en skincare natural y clean beauty.',
    productCompliance:
      'Cosmetica topica. SIN claims medicos. USAR: hidrata, nutre, suaviza, ilumina, revitaliza.',
    complianceBlock:
      'COMPLIANCE VIVOSE MASK - GUARDARRAIL FDA/FTC\n' +
      'CLASIFICACION: Cosmetico topico (21 CFR 700).\n\n' +
      'VERBOS APROBADOS: hidrata, nutre, suaviza, ilumina, revitaliza, protege\n\n' +
      'PROHIBIDO: "trata"/"cura" acne, rosacea, eczema, psoriasis, dermatitis\n' +
      '"Dermatologicamente probado" sin documentacion valida',
  },

  vizosCosmetics: {
    defaultPlatform: 'shopify',
    extraContext:
      'Vizos Cosmetics - cosmeticos y maquillaje color para el mercado latino Miami. ' +
      'Productos: labiales, sombras, bases, iluminadores. E-commerce Shopify. ' +
      'Tono: bold, glam, latina.',
    productAudience:
      'Mujeres latinas 18-45 anos Miami. Amantes del maquillaje y la expresion a traves de la belleza.',
  },

  forumPhs: {
    defaultPlatform: 'wordpress',
    extraContext:
      'ForumPHs (FPHs) - administracion de propiedad horizontal, Panama, fundada 2015. ' +
      'Portafolio: ~1.500 unidades, 7 propiedades. ' +
      'GM: Ivette Flores (Abogada). Web: forumphs.com. Marco legal: Ley 284 de 2022. ' +
      'POSICIONAMIENTO: gestion patrimonial sistemica, no administracion de edificios. ' +
      'Slogan: "Construiste tu patrimonio. Nosotros le construimos un sistema."',
    productAudience:
      'Juntas Directivas y propietarios de Propiedades Horizontales en Panama.',
    productCompliance:
      'Marco legal: Ley No. 284 de 2022. Territorio: Panama. ' +
      'Ivette Flores es la unica GM activa. Roberto Gonzalez ya no es representante.',
    complianceBlock:
      'REGLAS DE MARCA FORUMPHS\n' +
      'NOMBRE: Siempre "ForumPHs" - capital F, PH en caps, s minuscula.\n' +
      'SIGLA: FPHs.\n\n' +
      'SLOGAN INVARIABLE: "Construiste tu patrimonio. Nosotros le construimos un sistema."\n\n' +
      'PALETA AMATISTA CARBON:\n' +
      '  Amatista #5C3472, Terra #C4622D, Carbon #1C2233\n\n' +
      'PROHIBIDO: acortar el slogan, mencionar a Roberto Gonzalez como representante',
  },

  unrealilleStudio: {
    defaultPlatform: 'wordpress',
    extraContext:
      'Unrealville Studio - agencia inhouse de marketing, publicidad y estrategia digital del ecosistema UNRLVL. ' +
      'Especializada en marcas latinas en Miami. Operacion inhouse exclusiva. ' +
      'Servicios: marketing digital, estrategia de contenido, e-commerce, publicidad pagada, produccion creativa.',
    productAudience:
      'Ecosistema interno UNRLVL: marcas propias y marcas de familia/asociados.',
  },

};
