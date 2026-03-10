// ─── BRAND AUTO-CONTEXT — UNRLVL WebLab ─────────────────────────────────────
// v1.0 — Datos extraídos de DB_VARIABLES_v6_3 (CONTEXTOS + CTAs + PersonBlueprints)
// Archivo: src/config/brandContexts.ts
// Uso: auto-fill de campos de contexto en WebLab al seleccionar marca

import { BrandId } from './brands';

export interface BrandAutoContext {
  extraContext: string;
  productAudience?: string;
  productCompliance?: string;
  complianceBlock?: string;         // compliance extendido — hard-guardarraíl inyectado ANTES del AGGRO
  productCatalogContext?: string;   // resumen catálogo en texto — contexto de prompt para copy de producto
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

    complianceBlock:
      '── COMPLIANCE NEURONE — GUARDARRAÍL OBLIGATORIO FDA/FTC ──────────────────────\n' +
      'CLASIFICACIÓN: Cosméticos capilares registrados (21 CFR 701). NO son medicamentos.\n' +
      'JURISDICCIÓN: Florida / US — estándares FTC (verdad en publicidad) + FDA (claims cosméticos).\n\n' +
      'VERBOS APROBADOS (únicos permitidos para describir beneficios):\n' +
      '  ayuda a • favorece • contribuye a • potencia • optimiza • nutre • fortalece\n' +
      '  hidrata • suaviza • mejora la apariencia de • aporta brillo a • protege\n\n' +
      'PROHIBIDO ABSOLUTO — activa rechazo de plataforma y riesgo legal:\n' +
      '  ✗ "trata" • "cura" • "elimina" enfermedades o condiciones médicas capilares\n' +
      '  ✗ Claims sobre alopecia, psoriasis, dermatitis seborreica, caspa patológica\n' +
      '  ✗ "regenera el folículo piloso" o cualquier claim de acción biológica interna\n' +
      '  ✗ Antes/después con claims de crecimiento capilar sin estudio clínico\n' +
      '  ✗ "aprobado por la FDA" o "clínicamente probado" sin documentación válida\n\n' +
      'PRODUCTOS DE RIESGO CRÍTICO — NO GENERAR COPY DE VENTA:\n' +
      '  ✗ Capissen Shampoo — posible drug claim (anticaída clínico)\n' +
      '  ✗ Capissen Lotion — posible drug claim\n' +
      '  ✗ Derma Roller — posible medical device (FDA)\n' +
      '  → shopify_visibility: pending — NO activar hasta attorney review\n\n' +
      'PRODUCTOS DE RIESGO ALTO — copy con precaución extra:\n' +
      '  Depura Shampoo ("detox"), Pro Salon line (Fanzi Mix, Plattina White, Total Violet Ink,\n' +
      '  Neuroxide, Density Proff, Neurone Color, Pro Filus)\n' +
      '  → B2B only. Evitar claims de resultado sin soporte técnico verificable.\n\n' +
      'TESTIMONIOS Y PRUEBA SOCIAL:\n' +
      '  • Solo testimonios reales y verificables. No fabricar resultados específicos.\n' +
      '  • Si se usan resultados ("mi cabello creció X cm"), requieren disclaimer: "Resultados individuales pueden variar."\n\n' +
      'DISCLAIMER FDA — incluir en landing pages y product pages cuando aplique:\n' +
      '  "Este producto no ha sido evaluado por la FDA. No está destinado a diagnosticar,\n' +
      '  tratar, curar o prevenir ninguna enfermedad o condición médica."\n' +
      '────────────────────────────────────────────────────────────────────────────────',

    productCatalogContext:
      '── CATÁLOGO NEURONE S&C FLORIDA — 39 BP_PRODUCT activos ────────────────────────\n' +
      'Nota: catálogo completo en repo BluePrints/products/. Este es el resumen estructurado para copy.\n\n' +
      'CATEGORÍA 1 — CUIDADO Y TRATAMIENTO (B2C, riesgo compliance: low)\n' +
      '  • Humit Shampoo — hidratación profunda, control del frizz\n' +
      '  • Humit Mask — mascarilla nutrición intensa, cabello seco y poroso\n' +
      '  • Kerasin HB Shampoo — keratina hidrolizada, suavidad y brillo\n' +
      '  • Dyfensor SF Shampoo — fortalecimiento, cabello debilitado\n' +
      '  • Dyfensor Serum — sérum protector anti-daño\n' +
      '  • Velvety Control — control frizz y suavidad duradera\n\n' +
      'CATEGORÍA 2 — STYLING Y ACABADOS (B2C, riesgo: low)\n' +
      '  • Geometry Gel — fijación fuerte, definición de rizos\n' +
      '  • Geometry Cream — fijación media, acabado natural\n' +
      '  • Controller — crema de control y peinado\n' +
      '  • Molding Toner — tónico moldeador flexible\n' +
      '  • Resplander Shine — brillo intenso, acabado liso\n\n' +
      'CATEGORÍA 3 — COLORIMETRÍA CONSUMIDOR (B2C/B2B, riesgo: low)\n' +
      '  • DY Fazza — coloración permanente profesional\n' +
      '  • DY Fazza Color — gama ampliada de tonos\n\n' +
      'CATEGORÍA 4 — DETOX / LIMPIEZA PROFUNDA (B2C, riesgo: high — precaución en copy)\n' +
      '  • Depura Shampoo — limpieza profunda. EVITAR "detox capilar" — usar "limpieza profunda"\n\n' +
      'CATEGORÍA 5 — PRO SALON LINE (B2B exclusivo, riesgo: high, shopifyVisibility: pending)\n' +
      '  • Fanzi Mix — mezcla profesional para servicios de salón\n' +
      '  • Plattina White — decoloración profesional\n' +
      '  • Total Violet Ink — matizador violeta intenso\n' +
      '  • Neuroxide — oxidante profesional\n' +
      '  • Density Proff — tratamiento densidad profesional\n' +
      '  • Neurone Color — coloración profesional full-coverage\n' +
      '  • Pro Filus — alisado profesional\n' +
      '  → COPY: solo para Portal Pro B2B. No generar copy B2C para estos productos.\n\n' +
      'CATEGORÍA 6 — CRÍTICOS — SIN COPY ACTIVO (shopifyVisibility: pending / attorney)\n' +
      '  • Capissen Shampoo — NO generar copy\n' +
      '  • Capissen Lotion — NO generar copy\n' +
      '  • Derma Roller — NO generar copy\n\n' +
      'IMÁGENES DISPONIBLES:\n' +
      '  • standard (fondo blanco): todos los 39 productos — usar para tienda Shopify y Portal Pro\n' +
      '  • dark/campaign (fondo negro estudio): solo 8 productos disponibles:\n' +
      '    Kerasin HB Shampoo, Capissen Shampoo*, Dyfensor Serum, Humit Shampoo,\n' +
      '    DY Fazza, DY Fazza Color, Dyfensor SF Shampoo, Humit Mask\n' +
      '    (*Capissen: imagen dark disponible pero producto sin copy activo)\n' +
      '  ⚠️ Pendiente confirmar con PO si imágenes dark son uso libre para distribuidor.\n' +
      '────────────────────────────────────────────────────────────────────────────────',
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
    complianceBlock:
      '── COMPLIANCE D7 HERBAL — GUARDARRAÍL OBLIGATORIO FDA/FTC ──────────────────────\n' +
      'CLASIFICACIÓN: Suplemento alimenticio / Dietary Supplement (DSHEA, 21 CFR 101.36).\n' +
      'JURISDICCIÓN: Florida / US — estándares FTC (verdad en publicidad) + FDA (DSHEA).\n\n' +
      'VERBOS APROBADOS (únicos permitidos para describir beneficios):\n' +
      '  apoya • contribuye a • ayuda a mantener • favorece • potencia • nutre\n' +
      '  aporta energía a • promueve el bienestar • complementa\n\n' +
      'PROHIBIDO ABSOLUTO:\n' +
      '  ✗ Claims de tratamiento, diagnóstico, cura o prevención de enfermedades\n' +
      '  ✗ Mencionar diabetes, obesidad, presión arterial, colesterol, cáncer u otras condiciones médicas\n' +
      '  ✗ "Clínicamente probado", "aprobado por la FDA", "cura", "elimina", "trata"\n' +
      '  ✗ Resultados de pérdida de peso con cifras específicas sin estudio clínico registrado\n' +
      '  ✗ Testimonios que atribuyan curación de enfermedades al producto\n\n' +
      'DISCLAIMER FDA — OBLIGATORIO en toda landing page y product page:\n' +
      '  "Este producto no ha sido evaluado por la FDA. No está destinado a diagnosticar,\n' +
      '  tratar, curar o prevenir ninguna enfermedad o condición médica."\n' +
      '────────────────────────────────────────────────────────────────────────────────',
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
    complianceBlock:
      '── COMPLIANCE VIVOSE MASK — GUARDARRAÍL OBLIGATORIO FDA/FTC ─────────────────────\n' +
      'CLASIFICACIÓN: Cosmético tópico (21 CFR 700). NO es medicamento ni device.\n' +
      'JURISDICCIÓN: Florida / US — estándares FTC + FDA cosmetic claims.\n\n' +
      'VERBOS APROBADOS (únicos permitidos):\n' +
      '  hidrata • nutre • suaviza • ilumina • revitaliza • mejora la apariencia de\n' +
      '  aporta luminosidad • protege • limpia • equilibra\n\n' +
      'PROHIBIDO ABSOLUTO:\n' +
      '  ✗ "trata", "cura" o referencias a acné, rosácea, eczema, psoriasis, dermatitis\n' +
      '  ✗ Claims de acción biológica interna ("regenera células", "estimula colágeno" sin estudio)\n' +
      '  ✗ "Dermatológicamente probado" o "clínicamente testado" sin documentación válida\n' +
      '  ✗ Resultados de reducción de arrugas con % específico sin estudio\n' +
      '  ✗ Comparaciones con medicamentos o tratamientos médicos estéticos\n' +
      '────────────────────────────────────────────────────────────────────────────────',
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
    complianceBlock:
      '── COMPLIANCE PHAS — GUARDARRAÍL OBLIGATORIO FDA/FTC ───────────────────────────\n' +
      'CLASIFICACIÓN: Suplementos dietéticos / Productos wellness (DSHEA, 21 CFR 101).\n' +
      'CANALES: Amazon (políticas adicionales) + Shopify propio. Florida / US.\n\n' +
      'VERBOS APROBADOS:\n' +
      '  apoya • contribuye a • ayuda a mantener • favorece • potencia • promueve\n\n' +
      'PROHIBIDO ABSOLUTO:\n' +
      '  ✗ Disease claims: cualquier referencia a diagnóstico, tratamiento o cura de enfermedades\n' +
      '  ✗ "Clínicamente probado" o "aprobado por la FDA" sin documentación válida\n' +
      '  ✗ Cifras de resultados (pérdida de peso, ganancia muscular) sin estudio clínico registrado\n' +
      '  ✗ En Amazon: estructura/función claims sin notificación FTC previa\n\n' +
      'DISCLAIMER FDA — OBLIGATORIO en toda landing page, product page y listing Amazon:\n' +
      '  "Este producto no ha sido evaluado por la FDA. No está destinado a diagnosticar,\n' +
      '  tratar, curar o prevenir ninguna enfermedad o condición médica."\n' +
      '────────────────────────────────────────────────────────────────────────────────',
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