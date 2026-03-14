/**
 * UNRLVL — WebLab webEngine v2.0
 *
 * v2.0 changelog:
 * - Output modes: 'markdown' | 'html' | 'liquid'
 *   markdown — copy listo para CMS / documentos (anterior)
 *   html     — HTML semántico + CSS inline, listo para Custom HTML en Shopify/WP
 *   liquid   — Sección Shopify nativa (.liquid + schema JSON), lista para theme editor
 * - BlogLab support: nuevo module 'blog' con tipos de post (educativo, SEO, producto, UGC)
 * - Humanize layer (F2.5): preservado de v1.2
 */
import {
  BrandProfile, WebPack, PageSection,
  WebLanguage, WebTone, WebPlatform,
  ProductSpec, WebOutput,
} from '../core/types';
import { PAGE_SECTIONS } from '../config/packs';
import { getHumanizeBlock } from '../config/humanizeConfig';
import { getBrandBlueprintBlock } from '../config/brandBlueprints';
import { BRAND_CONTEXTS } from '../config/brandContexts';

export type WebOutputMode = 'html' | 'liquid';

const CLAUDE_MODEL = "claude-sonnet-4-6";

// ── SUPER AGGRO BLOCK — NIVEL MÁXIMO ──────────────────────────────────────────
// ⚠️ ADVERTENCIA INTERNA: Este modo genera copy de persuasión extrema.
// Puede incluir urgencia agresiva, comparaciones directas, y framing de pérdida
// que algunos canales (Meta Ads, Google Ads, Shopify reviews) pueden rechazar.
// Es responsabilidad del operador revisar antes de publicar.
const SUPER_AGGRO_BLOCK = `
════════════════════════════════════════════════════════════════
  ⚠️  AVISO AL OPERADOR — AGGRO OUTPUT ACTIVO
════════════════════════════════════════════════════════════════
  Este output usa persuasión de alta presión y está diseñado
  para maximizar conversión, no para pasar filtros editoriales.

  ANTES DE PUBLICAR, revisa estos puntos:

  › Meta Ads / TikTok Ads
    Urgencia extrema y escasez pueden ser rechazados si no son
    verificables con evidencia en la cuenta publicitaria.

  › Google Ads
    Claims de resultados sin disclaimer ("desde la primera
    aplicación") activan revisión manual. Añade un asterisco
    con fuente si el claim es medible.

  › Shopify / Políticas de plataforma
    Comparaciones con competencia implícita son generalmente
    aceptadas. Comparaciones directas con nombre de marca
    requieren evidencia o pueden generar disputas.

  › Recomendación operacional
    Usar este output como punto de partida. Una reducción del
    20–30% en intensidad suele ser suficiente para paid media
    sin sacrificar conversión orgánica.

  El copy que sigue es deliberadamente incómodo. Ese es el punto.
════════════════════════════════════════════════════════════════

REGLAS AGGRO ABSOLUTAS — aplica todas sin excepción ni moderación:

PSICOLOGÍA DE PÉRDIDA (no de ganancia):
- El lector ya está perdiendo dinero, clientes, oportunidades. No potencialmente. Ahora mismo.
- Cada día sin actuar es un día que tu competencia te está comiendo el mercado.
- No vendas el producto. Vende el costo de no tenerlo.

DOLOR PRIMERO, SOLUCIÓN DESPUÉS, CONSECUENCIA AL FINAL:
- Sección 1: abre con el dolor más profundo, sin suavizarlo.
- Sección 2: la solución existe, es específica, está disponible hoy.
- Sección 3: si no actúas ahora, la ventana se cierra. Y eso tiene un precio.

COPY QUE INCOMODA (deliberadamente):
- Haz que el lector se sienta incómodo quedándose donde está.
- La comodidad es el enemigo. El status quo es la amenaza.
- "Seguir como estás" debe sonar peor que cualquier riesgo de comprar.

URGENCIA REAL, NO FABRICADA:
- Si hay exclusividad: úsala como escasez real ("solo nosotros, solo aquí").
- Si hay stock limitado: nómbralo con número si existe.
- Si hay timing: "cada semana que esperas es una semana que tu competencia lleva ventaja".
- PROHIBIDO urgencia genérica ("¡Oferta por tiempo limitado!"). Siempre específica.

CERO HEDGING — AFIRMACIÓN ABSOLUTA:
- Elimina: podría, quizás, tal vez, esperamos, creemos, intentamos, buscamos.
- Reemplaza con: es, funciona, entrega, garantiza, cambia, transforma.
- Si hay garantía real: ponla en el CTA. Si no hay, no la inventes.

CTAs QUE NO DAN OPCIÓN DE SALIDA ELEGANTE:
- Verbo fuerte + beneficio inmediato + qué pasa si no actúas.
- Ej: "Accede hoy — o deja que tu competencia se te adelante."
- Ej: "Reserva tu cupo ahora. Cuando se llene, se llena."
- Ej: "Ver catálogo — 142 productos que tus clientes ya están buscando."

PRUEBA SOCIAL COMO ARMA:
- No "nuestros clientes están satisfechos".
- Sí: "Los coloristas top de South Miami ya usan esto. ¿Tú todavía no?"
- Convierte la prueba social en presión social implícita.

HEADLINES QUE DUELEN O PROVOCAN:
- Formato A — Dolor: "Tu cabello merece ciencia real. No otro producto que promete y no entrega."
- Formato B — Provocación: "¿Sigues comprando al por mayor en Amazon? Tus clientes lo notan."
- Formato C — Contraste: "Tus competidores ya tienen acceso. Tú todavía estás esperando."
- NUNCA: headlines aspiracionales genéricos ("Descubre la diferencia", "Eleva tu experiencia").

DISEÑO VISUAL AGGRO — EL LAYOUT TAMBIÉN DEBE INCOMODAR:
- Hero: fondo oscuro (#0a0a0a o #0d0d0d), texto blanco. El contraste es intencional.
  No hay calidez en la apertura. El lector entra en territorio serio.
- Jerarquía rota: usa una tarjeta de feature o bloque que sea visualmente distinto
  (fondo negro, acento de color, tipografía más grande) para romper el ritmo del grid.
- Color como señal de urgencia: el azul Neurone (#0076A8) se reserva para datos,
  exclusividad y CTAs. El negro (#0a0a0a) para afirmaciones absolutas.
  El rojo solo para micro-urgencia real (stock, plazo, consecuencia).
- Tipografía con tensión: font-weight 800-900 en headlines. Letter-spacing negativo (-0.02em a -0.03em).
  El texto debe ocupar el espacio con autoridad, no con elegancia.
- CTAs que parecen inevitables: botón oscuro, full-width en mobile, sin border-radius suave.
  Que parezca una decisión, no una invitación.
- Separadores como cortes: usa líneas de 2-3px en acento de color, no dividers decorativos.
  El espacio entre secciones debe sentirse como una pausa antes del siguiente golpe.
- Evitar: fondos blancos puros en hero, padding excesivo que suavice el tono,
  border-radius altos (>6px), sombras decorativas que den sensación de ligereza.
`.trim();

// ── FORMAT INSTRUCTIONS POR OUTPUT MODE ──────────────────────────────────────
function getFormatInstructions(
  mode: WebOutputMode,
  sectionId: string,
  sectionLabel: string,
  platform: WebPlatform,
): string {
  if (mode === 'html') {
    return `FORMATO DE SALIDA: HTML semántico con CSS inline.
REGLAS ESTRICTAS:
- Devuelve SOLO el bloque HTML de esta sección, sin <!DOCTYPE>, sin <html>, sin <head>, sin <body>.
- Usa clases descriptivas (hero-section, hero-title, hero-subtitle, cta-button, etc.)
- CSS inline en style="" para colores, tipografía y espaciado base.
- PALETA: Si el contexto incluye "color dominante: #XXXXXX" de un producto, usa ese hex como color de acento (botones, bordes, highlights). Si no, usa paleta neutra: fondo blanco o #f9f9f9, texto #1a1a1a, acento #000.
- Responsive: el contenedor principal NO debe tener max-width menor a 1200px — Shopify ya gestiona el ancho del layout. Usa max-width en elementos internos (texto, cards) pero nunca en la sección raíz.
- Botones con cursor:pointer y padding generoso.
- CTAs tipo enlace de texto (no botón): NO uses white-space:nowrap. El sistema aplicará wrapping automático en mobile.
- CTAs tipo botón: usa display:block con width:100% en mobile (max-width:400px en desktop) para evitar overflow.
- Cuando haya DOS botones en fila (ej: "Ver catálogo" + "Soy profesional"): envuélvelos en un div con display:flex; flex-wrap:wrap; gap:12px. Cada botón con flex:1; min-width:140px. NUNCA uses width fijo ni white-space:nowrap en estos casos.
- Para grids de product cards en collection pages: USA display:flex; flex-wrap:wrap; gap:20px en el contenedor. Cada card con width:calc(33.33% - 14px); min-width:260px. Esto garantiza que las cards fluyen correctamente en mobile sin cortes. NO uses CSS grid con grid-template-columns inline.
- CRÍTICO: NUNCA uses grid-template-columns en style inline. NUNCA uses position:absolute con valores negativos. Ambos rompen el layout en mobile. Si necesitas múltiples columnas usa SIEMPRE flex-wrap.
- NO incluyas <script>, NO incluyas frameworks externos.
- La sección debe ser copy-paste directo en un bloque "Custom HTML" de ${platform === 'shopify' ? 'Shopify' : 'WordPress'}.
- ⛔ PROHIBIDO incluir después del HTML: notas de producción, tablas markdown, comentarios sobre decisiones de diseño, explicaciones, resúmenes ni ningún texto fuera del bloque HTML. El output termina con la etiqueta de cierre de la sección (</section> o </div>). NADA más.

SISTEMA DE GRIDS RESPONSIVE — OBLIGATORIO:
El documento final ya incluye este CSS base. DEBES usarlo en lugar de inline grid-template-columns:
  .rg-2       → 2 columnas iguales (1fr 1fr)
  .rg-3       → 3 columnas iguales (repeat(3, 1fr))
  .rg-auto    → columnas automáticas responsive (auto-fit, minmax 300px)
  .rg-contact → 2 columnas contacto (1fr 1fr)
  .rg-contact-aggro → 2 columnas asimétricas (1fr 1.6fr)
  A 860px o menos, TODAS colapsan a 1 columna automáticamente.

PROHIBICIONES ABSOLUTAS — violan el responsive del documento:
- ❌ NUNCA uses grid-template-columns con múltiples columnas como inline style. Usa las clases .rg-* siempre.
- ❌ NUNCA uses position: absolute con valores negativos (left: -Npx, right: -Npx, top: -Npx) en elementos decorativos.
- ❌ NUNCA uses width fijo > 100% o min-width > 100% en ningún elemento.
- ❌ NUNCA añadas elementos decorativos con dimensiones que excedan el viewport (ej: width: 400px en posición absoluta).
- ✅ SÍ puedes usar position: relative en contenedores y position: absolute SOLO para badges/labels internos con top/right positivos pequeños (max 30px desde el borde del contenedor padre).

IMÁGENES DE BLUEPRINT:
- Cuando el contexto incluya image_filename de un producto, úsalo como: <img src="{{ 'FILENAME' | asset_url }}" alt="NOMBRE_PRODUCTO" ...> (Shopify) o <img src="[IMAGE:FILENAME]" alt="..."> (WP).
- Para BP_PERSON: coloca el <img> en secciones hero/about con class="person-bp-img".
- Para BP_LOCATION: coloca el <img> en secciones gallery/hero como background o decorativo.
- Para BP_PRODUCT: coloca el <img> inmediatamente junto al nombre/descripción del producto.
- Si el precio del contexto es "0.00": escribe <span class="product-price">$10.00</span> — los precios con "0.00" son placeholders, muéstralos como $10.00 hasta confirmar precio real.
EJEMPLO DE ESTRUCTURA:
<section class="hero-section" style="padding:80px 20px;text-align:center;background:#fff;">
  <h1 class="hero-title" style="font-size:2.5rem;font-weight:700;color:#1a1a1a;margin-bottom:16px;">...</h1>
  <p class="hero-subtitle" style="font-size:1.1rem;color:#555;margin-bottom:32px;">...</p>
  <a href="#" class="cta-button" style="display:inline-block;padding:16px 32px;background:#1a1a1a;color:#fff;text-decoration:none;border-radius:4px;font-weight:600;">...</a>
</section>`;
  }

  if (mode === 'liquid') {
    return `FORMATO DE SALIDA: Sección Shopify Liquid nativa.
REGLAS ESTRICTAS:
- Devuelve SOLO el contenido del archivo .liquid completo para esta sección.
- Incluye el schema JSON al final dentro de {% schema %}...{% endschema %}.
- Usa variables Liquid: {{ section.settings.heading }}, {{ section.settings.text }}, etc.
- El schema debe incluir settings editables para: heading, subheading, body_text, cta_label, cta_url, background_color, text_color.
- CSS debe ir dentro de <style> al inicio del archivo.
- El archivo debe ser autosuficiente: funciona al subirlo como nueva sección en el theme editor de Shopify.
- Nombre de sección en schema: "${sectionLabel}" con class: "section-${sectionId}".
- ⛔ PROHIBIDO incluir después del {% endschema %}: notas, tablas markdown, explicaciones ni ningún texto adicional. El output termina con {% endschema %}. NADA más.

SISTEMA DE GRIDS RESPONSIVE — OBLIGATORIO EN LIQUID:
Define estas clases en el <style> de tu sección y úsalas en el HTML (no inline grid-template-columns):
  .s${sectionId}-rg-2       { display:grid; grid-template-columns:1fr 1fr; gap:40px 56px; }
  .s${sectionId}-rg-3       { display:grid; grid-template-columns:repeat(3,1fr); gap:0; }
  .s${sectionId}-rg-auto    { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr)); }
  .s${sectionId}-rg-contact { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; }
  @media(max-width:860px){
    .s${sectionId}-rg-2,.s${sectionId}-rg-3,.s${sectionId}-rg-auto,.s${sectionId}-rg-contact {
      grid-template-columns:1fr !important; gap:24px !important;
    }
  }
Incluye SIEMPRE este bloque de media query en el <style> de la sección.

PROHIBICIONES ABSOLUTAS — rompen responsive en Shopify mobile:
- ❌ NUNCA grid-template-columns con múltiples columnas como inline style. Usa las clases .s${sectionId}-rg-* siempre.
- ❌ NUNCA position:absolute con valores negativos (left:-Npx, right:-Npx) en decorativos.
- ❌ NUNCA width o min-width > 100vw en ningún elemento.
- ✅ SÍ: position:relative en contenedores, position:absolute SOLO para badges internos (top/right ≤ 30px del borde del padre).

IMÁGENES DE BLUEPRINT EN LIQUID:
- Para imágenes de producto (BP_PRODUCT image_filename): usa {{ section.settings.product_image | img_url: '800x' | img_tag }} y agrega al schema: { "type": "image_picker", "id": "product_image", "label": "Imagen producto" }.
- Para BP_PERSON: { "type": "image_picker", "id": "person_image", "label": "Imagen persona" }.
- Para BP_LOCATION: { "type": "image_picker", "id": "location_image", "label": "Imagen locación" }.
- Para precio: usa {{ section.settings.product_price }} con default "[PRECIO]" — NUNCA hardcodees $0.00.
- Para precio en schema: { "type": "text", "id": "product_price", "label": "Precio", "default": "" }.
ESTRUCTURA BASE:
<style>
  .section-${sectionId} { box-sizing: border-box; overflow-x: hidden; }
  .section-${sectionId} *, .section-${sectionId} *::before, .section-${sectionId} *::after { box-sizing: border-box; }
  /* grids responsive */
  .s${sectionId}-rg-2 { display:grid; grid-template-columns:1fr 1fr; gap:40px 56px; }
  .s${sectionId}-rg-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:0; }
  .s${sectionId}-rg-auto { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr)); }
  .s${sectionId}-rg-contact { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; }
  @media(max-width:860px){
    .s${sectionId}-rg-2,.s${sectionId}-rg-3,.s${sectionId}-rg-auto,.s${sectionId}-rg-contact {
      grid-template-columns:1fr !important; gap:24px !important;
    }
  }
</style>
<div class="section-${sectionId}">
  <h2>{{ section.settings.heading }}</h2>
  ...
</div>
{% schema %}
{
  "name": "${sectionLabel}",
  "settings": [
    { "type": "text", "id": "heading", "label": "Título", "default": "..." },
    ...
  ],
  "presets": [{ "name": "${sectionLabel}" }]
}
{% endschema %}`;
  }

  // markdown (default)
  return `INSTRUCCIONES DE FORMATO:
- Escribe SOLO el contenido de la sección "${sectionLabel}", listo para copiar en ${platform === 'shopify' ? 'Shopify' : 'WordPress'}
- Incluye headline, cuerpo y (si aplica) CTA específico para esta sección
- Si la sección es HERO: H1 principal + subtítulo (max 2 líneas) + texto de botón CTA
- Si la sección es FAQ: 5 preguntas con respuestas de 2–3 líneas cada una
- Si la sección es TESTIMONIALS: 3 testimonios realistas en primera persona de clientes del perfil de la marca
- Si la sección es FEATURES: lista de 4–6 puntos con ícono emoji + título corto + descripción de 1 línea
- IMÁGENES DE BLUEPRINT: cuando el contexto incluya image_filename de productos, insértalos como: ![NOMBRE_PRODUCTO](images/FILENAME) — colócalos estratégicamente junto al producto/sección relevante.
- Para BP_PERSON: insertar referencia ![Nombre](images/filename) en secciones hero/about.
- Para BP_LOCATION: insertar referencia al final de hero o en sección gallery.
- Si el precio del contexto es "0.00": escríbelo como **[PRECIO]** — NO pongas $0.00.
- No incluyas instrucciones, meta-comentarios ni placeholders ajenos al contenido. Solo el contenido final.
- Formato: Markdown limpio (## para subtítulos, **negrita** para énfasis)
- Respeta ESTRICTAMENTE cualquier nota de compliance si fue proporcionada`;
}

// ── PROMPT BUILDER ────────────────────────────────────────────────────────────
function buildSectionPrompt(params: {
  brand: BrandProfile;
  pack: WebPack;
  section: PageSection;
  language: WebLanguage;
  tone: WebTone;
  platform: WebPlatform;
  productSpec?: ProductSpec;
  extraContext: string;
  superAggro: boolean;
  outputMode: WebOutputMode;
}): string {
  const {
    brand, pack, section, language, tone,
    platform, productSpec, extraContext, superAggro, outputMode,
  } = params;

  const langMap: Record<WebLanguage, string> = {
    ES:      "español neutro",
    "ES-FL": "español latino para audiencia de Florida/Miami (mezcla natural de inglés)",
    EN:      "English",
    "ES+EN": "español e inglés (genera ambas versiones, una debajo de la otra)",
  };

  const toneMap: Record<WebTone, string> = {
    professional:   "profesional, claro, confiable",
    conversational: "cercano, directo, sin jargon",
    luxury:         "premium, sofisticado, aspiracional",
    energetic:      "dinámico, impactante, con urgencia",
    technical:      "preciso, basado en datos, experto",
    warm:           "cálido, empático, humano",
  };

  const productBlock = productSpec
    ? `PRODUCTO / SERVICIO: ${productSpec.name}
Categoría: ${productSpec.category}
Beneficios clave: ${productSpec.keyBenefits}
Audiencia objetivo: ${productSpec.targetAudience}
${productSpec.price ? `Precio referencia: ${productSpec.price}` : ""}
${productSpec.complianceNotes ? `RESTRICCIONES DE COMPLIANCE: ${productSpec.complianceNotes}` : ""}`
    : "";

  const humanizeBlock = getHumanizeBlock('web', brand.id);
  const formatInstructions = getFormatInstructions(outputMode, section.id, section.label, platform);
  const modeLabel = outputMode === 'liquid' ? 'Shopify Liquid' : outputMode === 'html' ? 'HTML' : 'Markdown';
  const brandBlueprintBlock = getBrandBlueprintBlock(brand.id as any);
  const brandCtx = BRAND_CONTEXTS[brand.id as keyof typeof BRAND_CONTEXTS];

  // productCatalogContext (texto estático legacy) se omite cuando el extraContext ya
  // contiene el bloque dinámico del EcomProductSelector (evita duplicación y datos stale)
  const hasEcomContext = extraContext.includes('── CONTEXTO E-COMMERCE');
  const catalogContextBlock =
    !hasEcomContext && brandCtx?.productCatalogContext
      ? `${brandCtx.productCatalogContext}\n\n`
      : '';

  // Instrucciones visuales específicas para Product Page y Collection Page
  const isProductPage   = pack.id === 'ecom_product_page';
  const isCollectionPage = pack.id === 'ecom_collection';
  const collectionPageOverride = isCollectionPage ? `
── INSTRUCCIONES CRÍTICAS PARA COLLECTION PAGE ───────────────────────────────
Esta sección es una PÁGINA DE COLECCIÓN de e-commerce. NO es una página corporativa.
Visual, impactante, que muestra productos reales con imágenes.

${section.id === 'hero' ? `
HERO DE COLECCIÓN:
- HEADLINE: 2-4 palabras máximo en H1. Tamaño gigante (clamp 3rem-6rem). Bold extremo. Que ocupe toda la línea.
  Ejemplos correctos: "HIDRATACIÓN SIN COMPROMISO" / "TU CUERO CABELLUDO PRIMERO" / "REPARA. RESTAURA. DOMINA."
  Ejemplos incorretos: "Descubre nuestra línea de productos Moisture" (demasiado largo, sin punch)
- SUBHEADLINE: 1 frase de 10-15 palabras máximo. Específica, con datos o diferenciador.
- DOS CTAs en flex-wrap: [Ver colección] (botón sólido color marca) + [Soy profesional → Portal Pro] (outline)
- Eyebrow label encima del H1: nombre de colección + "Distribución exclusiva South & Central Miami"
- Fondo: #0E1018 oscuro. Acento: #0076A8 navy Neurone.` 
: section.id === 'features' ? `
GRID DE PRODUCTOS — obligatorio mostrar imágenes:
- Título sección: corto y con punch (ej: "Los productos que lo hacen posible")
- Grid de product cards: mínimo 3 columnas desktop, 1 móvil
- Cada card DEBE incluir:
  · <img> del producto — usa el image_filename del contexto así: <img src="[IMAGE:FILENAME]" alt="NOMBRE" style="width:100%;height:200px;object-fit:cover;display:block;">
  · El sistema reemplazará [IMAGE:FILENAME] con la URL real automáticamente al exportar
  · Nombre del producto en bold
  · 1 benefit claim en 6 palabras máximo
  · Precio: <span class="product-price">$10.00</span>
  · Botón "Ver producto" o "Agregar"
- Si hay subcollections diferentes: agrúpalos con un label pequeño de subcollection
- Fondo alterno: #161923 para contrastar con el hero oscuro`
: `
CTA FINAL DE COLECCIÓN:
- Fondo de acento #0076A8 o gradiente oscuro
- 1 frase de cierre con urgencia o exclusividad
- Botón CTA grande full-width en mobile`}
` : '';

  const productPageOverride = isProductPage ? `
── INSTRUCCIONES CRÍTICAS PARA PRODUCT PAGE ─────────────────────────────────
Esta sección es una PÁGINA DE PRODUCTO de e-commerce. NO es una web corporativa.
El formato debe ser visual, orientado a conversión, con muy poco texto y mucho peso visual.

ESTRUCTURA OBLIGATORIA para la sección "${section.label}":
${section.id === 'hero' ? `
HERO DE PRODUCTO (layout split 50/50):
- COLUMNA IZQUIERDA: imagen de producto grande.
  · El contexto incluye "Imagen producto (standard/shopify): URL" — USA ESA URL COMPLETA en el src. Si no hay URL en el contexto, genera un div placeholder con fondo del color dominante del producto.
  · NUNCA dejes src="" ni src="#" ni src="placeholder".
  · Mínimo 400px de altura en desktop. Ocupa todo el ancho de la columna.
- COLUMNA DERECHA: ficha de compra.
  · Brand label pequeño (NEURONE COSMÉTICA)
  · Nombre del producto en H1 grande y bold
  · Rating visual (★★★★★ con número de reviews)
  · Precio destacado ($XX.XX) — si el precio es 0.00 usa $10.00 como placeholder
  · 3-4 bullets de beneficio clave (máx 8 palabras cada uno) con ícono ✓ o ●
  · Botón CTA primario full-width "Agregar al carrito" o "Comprar ahora"
  · Botón secundario opcional "Ver descripción completa"
  · Trust badges pequeños debajo: 🔒 Pago seguro · 🚚 Envío gratis +$50 · ↩ 30 días devolución
PROHIBIDO en el hero: párrafos de texto largos, múltiples CTAs de texto, fondos blancos sin imagen.` 
: section.id === 'features' ? `
FEATURES DEL PRODUCTO:
- Sección oscura de contraste (fondo #0E1018 o similar)
- Título corto: "Por qué [Nombre Producto]" o "Lo que lo hace diferente"
- Grid de 3 cards visuales: ícono grande + título corto + 1 frase de beneficio (máx 15 palabras)
- NO uses listas de texto corrido. Solo cards visuales.
- Incluye 1 bloque "Modo de uso" con pasos numerados simples (máx 4 pasos)`
: section.id === 'faq' ? `
FAQ COMPACTO:
- Máximo 4 preguntas. Solo las más frecuentes de compra.
- Acordeón CSS puro (no JS) con + / − toggle
- Respuestas de máx 2 líneas.`
: `
SECCIÓN CTA FINAL:
- Fondo de color de marca
- 1 frase de cierre + botón CTA principal`}
` : '';

  return `Eres un redactor web senior, front-end developer y estratega de conversión especializado en negocios hispanos en Miami.
Generas contenido en formato ${modeLabel} listo para producción.
Tu estándar no es copy "correcto" — es copy que convierte. Directo, específico, que incomoda al lector lo suficiente para que actúe.

MARCA: ${brand.name}
DESCRIPCIÓN: ${brand.description}
MERCADO: ${brand.market}
PLATAFORMA TARGET: ${platform === "shopify" ? "Shopify (e-commerce)" : "WordPress (sitio web)"}
MÓDULO: ${pack.label}
SECCIÓN A GENERAR: ${section.label} — ${section.description}
IDIOMA: ${langMap[language]}
TONO: ${toneMap[tone]}
PALABRAS APROXIMADAS: ${section.wordCount}
OUTPUT MODE: ${modeLabel}

${productBlock}

${collectionPageOverride}${productPageOverride}${brandBlueprintBlock ? `${brandBlueprintBlock}\n\n` : ""}${brandCtx?.complianceBlock ? `${brandCtx.complianceBlock}\n\n` : ""}${catalogContextBlock}${extraContext ? `CONTEXTO DE MARCA / DB_VARIABLES:\n${extraContext}` : ""}

── ESTÁNDAR DE COPY BASE (SIEMPRE APLICA) ──────────────────────────────────────
ADN UNRLVL: Todo copy producido aquí sigue estas reglas por defecto. No son opcionales.

ESTRUCTURA DOLOR → SOLUCIÓN → CONSECUENCIA:
- Abre con el dolor real del lector, sin suavizarlo. Hazlo sentir reconocible.
- Presenta la solución como específica, disponible, con nombre y número.
- Cierra con la consecuencia de no actuar — no el beneficio de actuar.

AFIRMACIÓN SIN HEDGING:
- Prohibido: "podría", "quizás", "tal vez", "esperamos", "creemos", "intentamos".
- Obligatorio: verbos de acción en presente — "funciona", "entrega", "transforma", "garantiza".
- Si hay datos: úsalos. Si no hay datos: sé específico en la descripción de la transformación.

HEADLINES CON FRICCIÓN INTENCIONAL:
- Un buen headline hace que el lector se sienta interpelado, no inspirado.
- Formato preferido: dolor directo ("Tu cabello merece ciencia real — no otra promesa vacía.")
- O contraste que incomoda ("Tus competidores ya tienen acceso. ¿Tú todavía estás esperando?")
- NUNCA: aspiracional genérico ("Descubre la diferencia", "Eleva tu experiencia").

CTAs QUE NO DAN SALIDA CÓMODA:
- Verbo fuerte + beneficio inmediato + (opcional) consecuencia de no actuar.
- Ej: "Accede hoy — o deja que tu competencia se te adelante."
- Ej: "Ver catálogo completo — 142 productos que tus clientes ya buscan."

PRUEBA SOCIAL COMO PRESIÓN:
- No "clientes satisfechos". Sí: nombres de rol, números concretos, transformaciones verificables.
- Convierte la prueba social en presión social implícita cuando la marca lo permita.

URGENCIA REAL, NO GENÉRICA:
- Si hay exclusividad, escasez o timing real: úsalos con nombre propio.
- PROHIBIDO: "¡No te lo pierdas!", "Oferta por tiempo limitado", "Últimas unidades" sin contexto.
────────────────────────────────────────────────────────────────────────────────

${superAggro ? `\n${SUPER_AGGRO_BLOCK}\n` : ""}

${humanizeBlock}

${formatInstructions}

GENERA LA SECCIÓN AHORA:`;
}

// ── BLOG PROMPT BUILDER ───────────────────────────────────────────────────────
export type BlogPostType = 'educativo' | 'seo' | 'producto' | 'ugc';

export interface BlogSpec {
  postType: BlogPostType;
  topic: string;
  keywords?: string[];
  wordCount?: number;
}

const BLOG_TYPE_INSTRUCTIONS: Record<BlogPostType, string> = {
  educativo: `POST EDUCATIVO:
- Estructura: Introducción (problema/pregunta) → Desarrollo (3-5 secciones con H2) → Conclusión + CTA suave
- Tono: autoridad accesible, explica conceptos técnicos con analogías reales
- Incluye ejemplos concretos del mercado Miami/hispano cuando sea relevante
- CTA final: invita a explorar productos o servicios relacionados, no vende directamente`,

  seo: `POST SEO-OPTIMIZADO:
- Estructura: H1 con keyword principal → H2s con keywords secundarias → FAQ al final (schema markup friendly)
- Keyword density natural: keyword principal 2-3 veces, variantes semánticas en H2s
- Párrafos cortos (3-4 líneas máximo), ideal para featured snippets
- Meta description al final del post (max 155 chars) en bloque separado
- CTA interno: link a producto/categoría relacionada`,

  producto: `POST DE PRODUCTO:
- Estructura: problema que resuelve → cómo funciona → beneficios concretos → prueba social → CTA
- Tono: informativo + persuasivo, no publicitario explícito
- Incluye casos de uso reales del mercado objetivo
- Compliance: si el producto tiene restricciones, aplicarlas al copy
- CTA directo: compra o más información`,

  ugc: `POST ESTILO UGC / TESTIMONIAL:
- Estructura: historia de cliente real (o ficticia pero realista) → transformación → resultado concreto
- Voz: primera o tercera persona, conversacional, específica en detalles
- Incluye detalles creíbles: nombre, ciudad (Miami area), situación antes/después
- Tono: auténtico, sin lenguaje de marketing corporativo
- CTA: invita a otros a compartir su experiencia o probar el producto`,
};

export function buildBlogPrompt(params: {
  brand: BrandProfile;
  blog: BlogSpec;
  language: WebLanguage;
  platform: WebPlatform;
  outputMode: WebOutputMode;
  extraContext?: string;
}): string {
  const { brand, blog, language, platform, outputMode, extraContext } = params;

  const langMap: Record<WebLanguage, string> = {
    ES: "español neutro", "ES-FL": "español latino Miami/Florida", EN: "English", "ES+EN": "ES + EN",
  };

  const humanizeBlock = getHumanizeBlock('copy', brand.id);
  const brandBlueprintBlock = getBrandBlueprintBlock(brand.id as any);
  const brandCtx = BRAND_CONTEXTS[brand.id as keyof typeof BRAND_CONTEXTS];
  const modeLabel = outputMode === 'liquid' ? 'Shopify Liquid (blog post template)' : outputMode === 'html' ? 'HTML semántico' : 'Markdown';
  const targetWords = blog.wordCount ?? 800;

  const formatBlock = outputMode === 'html'
    ? `FORMATO: HTML semántico sin <html>/<body>. Usa <article>, <h1>, <h2>, <p>, <ul>. CSS inline neutro. Listo para Custom HTML.`
    : outputMode === 'liquid'
    ? `FORMATO: Liquid template para blog post de Shopify. Incluye schema con settings: title, content, meta_description, featured_image_alt.`
    : `FORMATO: Markdown limpio. # para H1, ## para H2, **negrita** para énfasis. Incluye meta_description al final en bloque separado.`;

  return `Eres un content strategist y copywriter especializado en blogs para e-commerce hispano Miami.

MARCA: ${brand.name}
DESCRIPCIÓN: ${brand.description}
MERCADO: ${brand.market}
PLATAFORMA: ${platform === 'shopify' ? 'Shopify Blog' : 'WordPress Blog'}
IDIOMA: ${langMap[language]}
OUTPUT MODE: ${modeLabel}

TEMA DEL POST: ${blog.topic}
${blog.keywords?.length ? `KEYWORDS: ${blog.keywords.join(', ')}` : ''}
EXTENSIÓN OBJETIVO: ~${targetWords} palabras

${brandBlueprintBlock ? `${brandBlueprintBlock}\n\n` : ''}${brandCtx?.complianceBlock ? `${brandCtx.complianceBlock}\n\n` : ''}${extraContext ? `CONTEXTO ADICIONAL:\n${extraContext}` : ''}

${BLOG_TYPE_INSTRUCTIONS[blog.postType]}

${humanizeBlock}

${formatBlock}

GENERA EL POST COMPLETO AHORA:`;
}

// ── CLAUDE CALLER (via Vercel proxy — evita CORS) ────────────────────────────
async function callClaude(prompt: string, signal?: AbortSignal): Promise<string> {
  const res = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal,
    body: JSON.stringify({
      prompt,
      model: CLAUDE_MODEL,
      max_tokens: 6000,
      temperature: 0.75,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`Claude API error ${res.status}: ${(err as any)?.error ?? (err as any)?.detail ?? res.statusText}`);
  }
    const data = await res.json();
  // Strip markdown code fences que Claude puede añadir
  const lines = (data.text ?? '').trim().split('\n');
  const clean = lines.filter((l: string) => !l.startsWith('```')).join('\n').trim();
  return clean;
}

// ── PUBLIC API: WEB PACK ──────────────────────────────────────────────────────
export async function runWebPack(params: {
  brand: BrandProfile;
  pack: WebPack;
  language: WebLanguage;
  tone: WebTone;
  platform: WebPlatform;
  productSpec?: ProductSpec;
  extraContext: string;
  dbPrompt?: string;
  superAggro?: boolean;
  outputMode?: WebOutputMode;
  signal?: AbortSignal;
  onSectionComplete?: (sectionId: string, content: string) => void;
}): Promise<WebOutput> {
  const sections: WebOutput["sections"] = [];
  let totalWords = 0;
  const prompts: string[] = [];

  const resolvedContext = params.dbPrompt?.trim() || params.extraContext;
  const superAggro  = params.superAggro  ?? false;
  const outputMode  = params.outputMode ?? 'html';

  for (const sectionId of params.pack.sections) {
    const section = PAGE_SECTIONS[sectionId as keyof typeof PAGE_SECTIONS];
    if (!section) continue;

    // Build accumulated prior-sections block for coherence
    const priorBlock = sections.length > 0
      ? `\n── SECCIONES YA GENERADAS (mantén coherencia — no repitas, continúa la narrativa) ──\n` +
        sections.map(s => `[${s.label}]\n${s.content.slice(0, 400)}${s.content.length > 400 ? '…' : ''}`).join('\n\n') +
        `\n────────────────────────────────────────────────────────────────────────────────\n`
      : '';

    const prompt = buildSectionPrompt({
      brand: params.brand,
      pack: params.pack,
      section,
      language: params.language,
      tone: params.tone,
      platform: params.platform,
      productSpec: params.productSpec,
      extraContext: resolvedContext + priorBlock,
      superAggro,
      outputMode,
    });

    prompts.push(prompt);
    const content = await callClaude(prompt, params.signal);
    totalWords += content.split(/\s+/).length;
    sections.push({ sectionId, label: section.label, content });
    params.onSectionComplete?.(sectionId, content);
  }

  return {
    id: `web_${Date.now()}`,
    packId: params.pack.id,
    brandId: params.brand.id,
    module: params.pack.module,
    language: params.language,
    platform: params.platform,
    superAggro,
    outputMode,
    sections,
    wordCount: totalWords,
    generatedAt: new Date().toISOString(),
    prompt: prompts[0] ?? "",
  };
}

// ── PUBLIC API: BLOG POST ─────────────────────────────────────────────────────
export async function runBlogPost(params: {
  brand: BrandProfile;
  blog: BlogSpec;
  language: WebLanguage;
  platform: WebPlatform;
  outputMode?: WebOutputMode;
  extraContext?: string;
  signal?: AbortSignal;
}): Promise<{ content: string; outputMode: WebOutputMode; generatedAt: string }> {
  const outputMode = params.outputMode ?? 'html';

  const prompt = buildBlogPrompt({
    brand: params.brand,
    blog: params.blog,
    language: params.language,
    platform: params.platform,
    outputMode,
    extraContext: params.extraContext,
  });

  const content = await callClaude(prompt, params.signal);

  return {
    content,
    outputMode,
    generatedAt: new Date().toISOString(),
  };
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
export function estimateTotalWords(packSections: string[]): number {
  return packSections.reduce((sum, id) => {
    return sum + (PAGE_SECTIONS[id as keyof typeof PAGE_SECTIONS]?.wordCount ?? 0);
  }, 0);
}

export function getFileExtension(mode: WebOutputMode): string {
  return mode === 'liquid' ? 'liquid' : mode === 'html' ? 'html' : 'md';
}

export function getMimeType(mode: WebOutputMode): string {
  return mode === 'liquid' ? 'text/plain' : mode === 'html' ? 'text/html' : 'text/markdown';
}

// Genera un archivo exportable con todas las secciones concatenadas
const BLUEPRINTS_IMAGE_BASE = 'https://raw.githubusercontent.com/unrealvillestudio-hub/BluePrints/main/assets/images/products/';

/**
 * Reemplaza placeholders [IMAGE:FILENAME] con URLs reales de BluePrints GitHub
 */
export function resolveImagePlaceholders(html: string): string {
  return html.replace(/\[IMAGE:([^\]]+)\]/g, (_, filename) =>
    `${BLUEPRINTS_IMAGE_BASE}${filename.trim()}`
  );
}

export function buildExportFile(
  sections: { sectionId: string; label: string; content: string }[],
  mode: WebOutputMode,
  superAggro = false,
): string {
  if (mode === 'liquid') {
    return sections.map(s =>
      `{% comment %} === SECTION: ${s.label.toUpperCase()} === {% endcomment %}\n\n${s.content}`
    ).join('\n\n{% comment %} ─────────────────────────────────────── {% endcomment %}\n\n');
  }

  if (mode === 'html') {
    const resolveForPreview = (html: string) => html
      .replace(/\{\{\s*section\.settings\.background_color\s*\}\}/g, '#0d0d0d')
      .replace(/\{\{\s*section\.settings\.text_color\s*\}\}/g, '#ffffff')
      .replace(/\{\{\s*section\.settings\.heading\s*\}\}/g, '')
      .replace(/\{\{\s*section\.settings\.subheading\s*\}\}/g, '')
      .replace(/\{\{\s*section\.settings\.eyebrow\s*\}\}/g, '')
      .replace(/\{\{[^}]+\}\}/g, '')
      .replace(/\{%-?\s*.*?-?%\}/g, '');

    const body = sections
      .map(s => `<!-- === ${s.label.toUpperCase()} === -->\n${resolveForPreview(resolveImagePlaceholders(s.content))}`)
      .join('\n\n');

    const aggroWarningHtml = superAggro ? `
<div style="
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background: #1a0a00;
  border-left: 5px solid #ff6b00;
  border-radius: 4px;
  padding: 20px 24px;
  margin: 0 0 0 0;
  position: relative;
">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
    <span style="font-size:1.3rem;">⚠️</span>
    <span style="
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #ff6b00;
    ">AGGRO OUTPUT — Revisar antes de publicar</span>
  </div>
  <p style="margin:0 0 10px;font-size:0.88rem;color:#ffd4a8;line-height:1.6;">
    Este output usa persuasión de alta presión. Antes de publicar, verifica:
  </p>
  <ul style="margin:0 0 14px;padding-left:18px;font-size:0.84rem;color:#ffb37a;line-height:1.8;">
    <li><strong style="color:#ff9040;">Meta / TikTok Ads</strong> — Urgencia extrema puede rechazarse si la escasez no es verificable en la cuenta.</li>
    <li><strong style="color:#ff9040;">Google Ads</strong> — Claims de resultado sin disclaimer activan revisión manual. Añade fuente si el claim es medible.</li>
    <li><strong style="color:#ff9040;">Shopify</strong> — Comparaciones implícitas OK. Comparaciones directas con nombre de marca requieren evidencia.</li>
  </ul>
  <p style="margin:0;font-size:0.8rem;color:#a07050;font-style:italic;">
    Reducir intensidad un 20–30% suele ser suficiente para paid media sin sacrificar conversión orgánica.
  </p>
</div>
` : '';

    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebLab Preview — ${superAggro ? '⚠️ AGGRO — ' : ''}${sections[0]?.label ?? 'Export'}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; overflow-x: hidden; width: 100%; }
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f0f0f0; }
    a { color: inherit; }
    /* ── Grid system responsive — usado por todas las secciones generadas ── */
    .rg-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px 56px; }
    .rg-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
    .rg-auto { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px,100%), 1fr)); }
    .rg-contact { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
    .rg-contact-aggro { display: grid; grid-template-columns: 1fr 1.6fr; gap: 64px; align-items: start; }
    @media (max-width: 860px) {
      .rg-2, .rg-3, .rg-auto, .rg-contact, .rg-contact-aggro {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
      }
    }
    /* CTA base — evita desplazamiento por herencia de margin/text-align */
    a[class*="cta"], button[class*="cta"], .cta-button { display: inline-block; }
    /* CTA mobile — wrapping obligatorio, sin overflow lateral */
    @media (max-width: 860px) {
      a[class*="cta"], button[class*="cta"], .cta-button {
        white-space: normal !important;
        word-break: break-word !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
      }
    }
  </style>
</head>
<body>
${aggroWarningHtml}
${body}
<footer style="font-family:'DM Sans','Helvetica Neue',Arial,sans-serif;font-size:0.75rem;color:#6B6460;text-align:center;padding:28px 24px;border-top:1px solid #1e1e2a;margin-top:0;background:#0E1018;line-height:1.7;">
  Designed &amp; Developed by <strong style="color:#C4622D;">Unreal&gt;ille Studio</strong><br>
  1303 N 46th Ave, Hollywood, FL 33021
</footer>
</body>
</html>`;
  }

  // markdown
  return sections.map(s => `## ${s.label}\n\n${s.content}`).join('\n\n---\n\n') +
    '\n\n---\n\n*Designed & Developed by Unreal>ille Studio · Miami, FL*';
}