import { WebPack, PageSection, PageSectionId } from '../core/types';

export const PAGE_SECTIONS: Record<PageSectionId, PageSection> = {
  hero: {
    id: "hero", label: "Hero", description: "Titular principal, subtítulo y CTA primario",
    wordCount: 60, required: true, platforms: ["both"],
  },
  about: {
    id: "about", label: "Sobre nosotros", description: "Historia, misión y propuesta de valor",
    wordCount: 200, required: false, platforms: ["both"],
  },
  services: {
    id: "services", label: "Servicios", description: "Lista de servicios con descripción breve",
    wordCount: 300, required: false, platforms: ["wordpress"],
  },
  features: {
    id: "features", label: "Características", description: "Puntos diferenciadores del producto o servicio",
    wordCount: 200, required: false, platforms: ["both"],
  },
  testimonials: {
    id: "testimonials", label: "Testimonios", description: "3–5 testimonios redactados en formato real",
    wordCount: 250, required: false, platforms: ["both"],
  },
  faq: {
    id: "faq", label: "FAQ", description: "5–8 preguntas frecuentes con respuestas",
    wordCount: 400, required: false, platforms: ["both"],
  },
  cta: {
    id: "cta", label: "CTA Final", description: "Sección de cierre con llamada a la acción",
    wordCount: 80, required: true, platforms: ["both"],
  },
  contact: {
    id: "contact", label: "Contacto", description: "Texto de sección de contacto y formulario",
    wordCount: 80, required: false, platforms: ["wordpress"],
  },
  pricing: {
    id: "pricing", label: "Precios", description: "Tabla o descripción de precios y planes",
    wordCount: 200, required: false, platforms: ["both"],
  },
  team: {
    id: "team", label: "Equipo", description: "Bios cortas del equipo o fundador",
    wordCount: 200, required: false, platforms: ["wordpress"],
  },
  gallery: {
    id: "gallery", label: "Galería / Portafolio", description: "Texto de contexto para galería de trabajos",
    wordCount: 100, required: false, platforms: ["both"],
  },
  blog_preview: {
    id: "blog_preview", label: "Blog Preview", description: "Intro a sección de blog o recursos",
    wordCount: 80, required: false, platforms: ["wordpress"],
  },
};

export const WEB_PACKS: Record<string, WebPack> = {

  // ── WEB PACKS ────────────────────────────────────────────────────────────
  web_corporate: {
    id: "web_corporate",
    label: "Web Corporativa",
    module: "web",
    description: "Sitio completo para marca o negocio. Hero + About + Services + CTA + Contact.",
    sections: ["hero", "about", "services", "testimonials", "faq", "cta", "contact"],
    estimatedWords: 1400,
    outputFormat: "markdown",
  },
  web_personal_brand: {
    id: "web_personal_brand",
    label: "Marca Personal",
    module: "web",
    description: "Web para marca personal. Hero + Bio + Oferta + Testimonios + Contacto.",
    sections: ["hero", "about", "services", "testimonials", "cta", "contact"],
    estimatedWords: 1100,
    outputFormat: "markdown",
  },
  web_salon_detailing: {
    id: "web_salon_detailing",
    label: "Salón / Detailing",
    module: "web",
    description: "Web para servicios locales. Hero + Servicios + Galería + Testimonios + CTA.",
    sections: ["hero", "services", "gallery", "testimonials", "faq", "cta", "contact"],
    estimatedWords: 1200,
    outputFormat: "markdown",
  },

  // ── LANDING PACKS ────────────────────────────────────────────────────────
  landing_lead: {
    id: "landing_lead",
    label: "Landing Lead Capture",
    module: "landing",
    description: "Landing page enfocada en captura de email o lead. Copy completo y CTA.",
    sections: ["hero", "features", "testimonials", "faq", "cta"],
    estimatedWords: 700,
    outputFormat: "markdown",
  },
  landing_product_sale: {
    id: "landing_product_sale",
    label: "Landing Venta de Producto",
    module: "landing",
    description: "Landing de conversión directa para un producto. Features + Prueba social + CTA fuerte.",
    sections: ["hero", "features", "pricing", "testimonials", "faq", "cta"],
    estimatedWords: 900,
    outputFormat: "markdown",
  },
  landing_appointment: {
    id: "landing_appointment",
    label: "Landing Agendamiento",
    module: "landing",
    description: "Landing para agendar cita o consulta. Salones, consultoras, servicios.",
    sections: ["hero", "services", "testimonials", "faq", "cta"],
    estimatedWords: 700,
    outputFormat: "markdown",
  },

  // ── ECOMMERCE PACKS ──────────────────────────────────────────────────────
  ecom_product_listing: {
    id: "ecom_product_listing",
    label: "Product Listing",
    module: "ecommerce",
    description: "Descripción completa de producto para Shopify. Título SEO + cuerpo + bullet benefits.",
    sections: ["features", "faq"],
    estimatedWords: 500,
    outputFormat: "structured",
  },
  ecom_collection: {
    id: "ecom_collection",
    label: "Collection Page",
    module: "ecommerce",
    description: "Copy de página de colección. Intro + beneficios + CTA.",
    sections: ["hero", "features", "cta"],
    estimatedWords: 350,
    outputFormat: "structured",
  },
  ecom_homepage: {
    id: "ecom_homepage",
    label: "Homepage Tienda",
    module: "ecommerce",
    description: "Homepage completa de tienda Shopify. Hero + Categorías + Propuesta + Testimonios.",
    sections: ["hero", "features", "testimonials", "cta"],
    estimatedWords: 650,
    outputFormat: "markdown",
  },
  ecom_product_page: {
    id: "ecom_product_page",
    label: "Product Page",
    module: "ecommerce",
    description: "Página de producto Shopify completa. Título SEO + descripción + beneficios + uso + FAQ.",
    sections: ["hero", "features", "faq", "cta"],
    estimatedWords: 700,
    outputFormat: "structured",
  },
  ecom_about: {
    id: "ecom_about",
    label: "About / Historia de Marca",
    module: "ecommerce",
    description: "Página Nuestra Historia para tienda. Origen, valores, diferenciadores.",
    sections: ["about", "team"],
    estimatedWords: 450,
    outputFormat: "markdown",
  },
};

export const PACKS_BY_MODULE = {
  web:       Object.values(WEB_PACKS).filter(p => p.module === "web"),
  landing:   Object.values(WEB_PACKS).filter(p => p.module === "landing"),
  ecommerce: Object.values(WEB_PACKS).filter(p => p.module === "ecommerce"),
};
