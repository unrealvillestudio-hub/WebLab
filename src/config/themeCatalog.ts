// ── themeCatalog.ts ───────────────────────────────────────────────────────────
// 30 Themes — WebLab v2.3
// E-Commerce (10) · Landing (10) · Web (10)
// Each theme has a full identity system: palette, typography, motion, layout DNA.
// AGGRO variant available on all themes — breaks rules with client-accepted risk.
// ─────────────────────────────────────────────────────────────────────────────

export type ThemeType = 'ecommerce' | 'landing' | 'web' | 'blog';
export type ThemeMood = 'luxury' | 'edge' | 'organic' | 'technical' | 'editorial' | 'brutalist' | 'maximalist' | 'minimal' | 'dark' | 'vibrant';

export interface ThemeIdentity {
  id: string;
  name: string;
  tagline: string;
  type: ThemeType;
  mood: ThemeMood[];
  palette: {
    bg: string;       // primary background
    surface: string;  // card/section surface
    text: string;     // primary text
    accent: string;   // primary accent
    accent2: string;  // secondary accent
    muted: string;    // muted/secondary text
    rule: string;     // borders/dividers
  };
  typography: {
    display: string;    // hero/heading font (Google Fonts name)
    body: string;       // body font
    displayWeight: string;
    style: string;      // 'serif' | 'sans' | 'mono' | 'display' | 'mixed'
    googleFontsUrl: string;
  };
  motion: string;       // motion personality description
  layoutDNA: string;    // layout signature description
  structure: {
    colorMode: 'dark' | 'light';
    headerStyle: 'hero-cinematic' | 'hero-editorial' | 'hero-split' | 'hero-fullbleed' | 'hero-minimal' | 'hero-text-only';
    cardLayout: 'grid-standard' | 'grid-masonry' | 'scroll-horizontal' | 'list-editorial' | 'cards-overlap' | 'magazine' | 'single-column';
    enhancers: string[];
  };
  aggro: {
    unlocked: boolean;
    description: string; // what changes in AGGRO mode
  };
  previewColors: string[];  // 4-5 colors for card preview swatch
  designerNote: string;     // brief design philosophy
}

export const THEME_CATALOG: ThemeIdentity[] = [

  // ════════════════════════════════════════════════════════
  // E-COMMERCE THEMES (10)
  // ════════════════════════════════════════════════════════

  {
    id: 'onyx',
    name: 'ONYX',
    tagline: 'La ausencia de color como máxima declaración de lujo.',
    type: 'ecommerce',
    mood: ['luxury', 'minimal', 'dark'],
    palette: {
      bg:      '#0A0A0A',
      surface: '#141414',
      text:    '#F0EDE8',
      accent:  '#C9A96E',
      accent2: '#8A7455',
      muted:   '#5A5550',
      rule:    'rgba(201,169,110,0.15)',
    },
    typography: {
      display: 'Playfair Display',
      body: 'Jost',
      displayWeight: '300',
      style: 'serif',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap',
    },
    motion: 'Silencio cinético — apariciones en 800ms con easing cubic-bezier(0.16,1,0.3,1). Sin bounce. Sin flash. Todo emerge del negro como seda desplegándose.',
    layoutDNA: 'Grid de 12 columnas con márgenes generosos. Hero full-bleed con producto flotante. Sections alternantes imagen-texto. Producto como obra de arte, no como mercancía.',
    aggro: {
      unlocked: true,
      description: 'En AGGRO: tipografía display crece al 20vw. Precio en caracteres de 6rem. Imágenes cortadas al borde sin padding. Copy provocador sin eufemismos.',
    },
    previewColors: ['#0A0A0A', '#C9A96E', '#F0EDE8', '#141414'],
    designerNote: 'Menos es más solo cuando lo que queda es perfecto. ONYX no decora — edita.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-cinematic',
      cardLayout: 'grid-standard',
      enhancers: ['scroll-reveal', 'hover-reveal', 'sticky-header'],
    },
  },

  {
    id: 'precision',
    name: 'PRECISION',
    tagline: 'Donde la tecnología del producto habla por sí sola.',
    type: 'ecommerce',
    mood: ['technical', 'luxury', 'dark'],
    palette: {
      bg:      '#080C12',
      surface: '#0F1520',
      text:    '#E8EEF8',
      accent:  '#00AACC',
      accent2: '#5580A0',
      muted:   '#3A4A5C',
      rule:    'rgba(0,170,204,0.15)',
    },
    typography: {
      display: 'Syne',
      body: 'Barlow',
      displayWeight: '700',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap',
    },
    motion: 'Construcción precisa: líneas y elementos que aparecen de izquierda a derecha con 60ms de delay escalonado. Hover revela especificaciones del producto con fade-in limpio.',
    layoutDNA: 'Hero split 55/45 — producto a la izquierda, beneficios técnicos a la derecha como ficha de especificaciones. Stats numéricos prominentes. Credenciales y certificaciones visibles.',
    aggro: {
      unlocked: true,
      description: 'AGGRO PRECISION: claims técnicos al frente en tipo masivo. Stats de eficacia como titulares. Comparativa de ingredientes activos vs estándar de mercado. La ciencia sin rodeos.',
    },
    previewColors: ['#080C12', '#00AACC', '#E8EEF8', '#0F1520'],
    designerNote: 'PRECISION es para marcas cuyo diferenciador real es la formulación, la tecnología o el proceso. Cosmética avanzada, B2B industrial, equipamiento profesional.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-split',
      cardLayout: 'grid-standard',
      enhancers: ['scroll-reveal', 'sticky-header', 'parallax'],
    },
  },

  {
    id: 'terra',
    name: 'TERRA',
    tagline: 'La tierra no necesita justificarse. Tampoco tú.',
    type: 'ecommerce',
    mood: ['organic', 'luxury', 'minimal'],
    palette: {
      bg:      '#F5EFE6',
      surface: '#EDE4D8',
      text:    '#2C2018',
      accent:  '#7A5C3E',
      accent2: '#4A7C59',
      muted:   '#8A7A6A',
      rule:    'rgba(122,92,62,0.18)',
    },
    typography: {
      display: 'Lora',
      body: 'DM Sans',
      displayWeight: '400',
      style: 'serif',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap',
    },
    motion: 'Crecimiento orgánico — elementos emergen con transform: scale(0.97)→1 y opacity 0→1. Curvas de animación imitan el crecimiento de plantas. Nada es brusco.',
    layoutDNA: 'Formas orgánicas, ningún ángulo recto en decoración. Imágenes con border-radius asimétrico. Secciones divididas por formas de ola SVG. Ingredientes como botánica visual.',
    aggro: {
      unlocked: true,
      description: 'AGGRO TERRA: contraste radical — blanco puro vs negro absoluto. Claims en tipografía aggressive italic. La naturaleza como arma, no como decoración.',
    },
    previewColors: ['#F5EFE6', '#7A5C3E', '#2C2018', '#4A7C59'],
    designerNote: 'TERRA es lujo consciente. No grita — crece.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-editorial',
      cardLayout: 'grid-masonry',
      enhancers: ['scroll-reveal', 'hover-reveal'],
    },
  },

  {
    id: 'coral',
    name: 'CORAL',
    tagline: 'La energía de la tendencia convertida en decisión de compra.',
    type: 'ecommerce',
    mood: ['vibrant', 'edge', 'editorial'],
    palette: {
      bg:      '#FFF5F0',
      surface: '#FFEAE0',
      text:    '#1A0A06',
      accent:  '#FF4D2E',
      accent2: '#FF9E6D',
      muted:   '#C4724A',
      rule:    'rgba(255,77,46,0.15)',
    },
    typography: {
      display: 'Syne',
      body: 'DM Sans',
      displayWeight: '700',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap',
    },
    motion: 'Energía controlada: entradas con slide-up de 300ms y easing suave. Hover en productos activa un warm glow coral. Los CTAs tienen un pulse sutil que invita sin presionar.',
    layoutDNA: 'Grid moderno con acentos warm. Hero con producto en primer plano y fondo cálido degradado. Secciones alternando blanco roto y coral suave. Precio y CTA siempre visibles.',
    aggro: {
      unlocked: true,
      description: 'AGGRO CORAL: coral intenso pleno, sin suavizadores. Headlines de impacto sobre bloque de color puro. Copy directo orientado a urgencia real de tendencia.',
    },
    previewColors: ['#FFF5F0', '#FF4D2E', '#1A0A06', '#FF9E6D'],
    designerNote: 'CORAL convierte la tendencia en argumento de compra. Para beauty, cosmética, moda y lifestyle que quieren estar en el momento correcto.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-fullbleed',
      cardLayout: 'grid-standard',
      enhancers: ['scroll-reveal', 'floating-cta'],
    },
  },

  {
    id: 'velvet',
    name: 'VELVET',
    tagline: 'Decadencia calibrada. Lujo sin disculpas.',
    type: 'ecommerce',
    mood: ['luxury', 'dark', 'editorial'],
    palette: {
      bg:      '#1A0A12',
      surface: '#28101C',
      text:    '#F2E8DC',
      accent:  '#C4843C',
      accent2: '#8B1A3C',
      muted:   '#7A5A6A',
      rule:    'rgba(196,132,60,0.2)',
    },
    typography: {
      display: 'Cormorant Garamond',
      body: 'Jost',
      displayWeight: '300',
      style: 'serif',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@200;300;400;500&display=swap',
    },
    motion: 'Transiciones como tela que cae. Cubic-bezier(0.4,0,0.2,1) en todo. Hover en productos activa un glow interno cálido. Scroll parallax suave en hero.',
    layoutDNA: 'Asimetría controlada. Hero con texto a 2/3 del viewport. Secciones texturadas con gradientes radiales. Bordes gold como firma de calidad.',
    aggro: {
      unlocked: true,
      description: 'AGGRO VELVET: bordeaux intenso, tipo en rojo sangre. Claims como sentencias. Producto en primer plano máximo sin contexto. La oscuridad como manifesto.',
    },
    previewColors: ['#1A0A12', '#C4843C', '#F2E8DC', '#8B1A3C'],
    designerNote: 'VELVET es para marcas que saben que el cliente correcto no necesita convencerse.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-cinematic',
      cardLayout: 'cards-overlap',
      enhancers: ['parallax', 'hover-reveal', 'scroll-reveal'],
    },
  },

  {
    id: 'solar',
    name: 'SOLAR',
    tagline: 'Energía sin filtros. Optimismo radical como estrategia de marca.',
    type: 'ecommerce',
    mood: ['vibrant', 'edge', 'brutalist'],
    palette: {
      bg:      '#FFEE00',
      surface: '#FFF5AA',
      text:    '#0A0A00',
      accent:  '#0A0A00',
      accent2: '#FF3300',
      muted:   '#5A5500',
      rule:    'rgba(10,10,0,0.15)',
    },
    typography: {
      display: 'Bebas Neue',
      body: 'DM Sans',
      displayWeight: '400',
      style: 'display',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap',
    },
    motion: 'Entrada explosiva: elementos que caen desde arriba con rebote controlado. CTAs que palpitan. Hover en negro puro. La energía se mueve, no flota.',
    layoutDNA: 'Bloques de color planos y masivos. Tipografía Bebas como arquitectura visual. Sin sombras, sin gradientes — contraste puro. Precio como titular de periódico.',
    aggro: {
      unlocked: true,
      description: 'AGGRO SOLAR: amarillo neón vs rojo sangre. Copy de manifiesto, no de producto. Precio enorme con descuento tachado brutal. Sin márgenes.',
    },
    previewColors: ['#FFEE00', '#0A0A00', '#FF3300', '#FFF5AA'],
    designerNote: 'SOLAR es el grito de una marca que no tiene miedo de ser vista. Literalmente.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-text-only',
      cardLayout: 'scroll-horizontal',
      enhancers: ['scroll-reveal', 'floating-cta'],
    },
  },

  {
    id: 'phantom',
    name: 'PHANTOM',
    tagline: 'El lujo más caro no se anuncia. Se reconoce.',
    type: 'ecommerce',
    mood: ['luxury', 'minimal', 'dark'],
    palette: {
      bg:      '#0C0C14',
      surface: '#13131E',
      text:    '#DDD8F0',
      accent:  '#9B8EC4',
      accent2: '#5A4E8A',
      muted:   '#4A4660',
      rule:    'rgba(155,142,196,0.15)',
    },
    typography: {
      display: 'Cinzel',
      body: 'Outfit',
      displayWeight: '400',
      style: 'serif',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Outfit:wght@200;300;400;500&display=swap',
    },
    motion: 'Materialización: elementos emergen de opacity 0 con blur(8px)→blur(0). Todo en 700ms. El producto aparece como si siempre hubiera estado ahí.',
    layoutDNA: 'Espacios dramáticos vacíos. Producto centrado con márgenes imposibles. Texto pequeño y preciso como joyería tipográfica. Ningún elemento compite por atención.',
    aggro: {
      unlocked: true,
      description: 'AGGRO PHANTOM: violeta intenso vs negro. Claims en Cinzel uppercase a gran escala. Producto en contraste máximo. La exclusividad como provocación.',
    },
    previewColors: ['#0C0C14', '#9B8EC4', '#DDD8F0', '#5A4E8A'],
    designerNote: 'PHANTOM vende lo que no se puede tocar: el deseo de pertenecer a algo invisible.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-cinematic',
      cardLayout: 'grid-masonry',
      enhancers: ['parallax', 'scroll-reveal', 'image-carousel'],
    },
  },

  {
    id: 'concrete',
    name: 'CONCRETE',
    tagline: 'Crudo. Honesto. Implacable. Sin decoración innecesaria.',
    type: 'ecommerce',
    mood: ['brutalist', 'edge', 'technical'],
    palette: {
      bg:      '#1C1C1C',
      surface: '#2C2C2C',
      text:    '#E8E8E8',
      accent:  '#FF4400',
      accent2: '#FFFFFF',
      muted:   '#888888',
      rule:    'rgba(255,68,0,0.3)',
    },
    typography: {
      display: 'Barlow Condensed',
      body: 'Barlow',
      displayWeight: '700',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700;0,800;1,700&family=Barlow:wght@300;400;500;600&display=swap',
    },
    motion: 'Sin suavidad: transitions de 150ms con easing linear. Hover: color swap instantáneo. Scroll: elementos entran con translateX sin curva. La velocidad es honestidad.',
    layoutDNA: 'Grid desnudo visible. Líneas de separación en lugar de espacios. Tipografía condensada masiva. Precio prominente sin eufemismos. Boutons con texto uppercase mínimo.',
    aggro: {
      unlocked: true,
      description: 'AGGRO CONCRETE: naranja sangre puro. Copy sin cortesía. Precio en tipo de advertencia industrial. Sin márgenes — texto hasta el borde del viewport.',
    },
    previewColors: ['#1C1C1C', '#FF4400', '#E8E8E8', '#2C2C2C'],
    designerNote: 'CONCRETE es para marcas que entienden que la autenticidad es el lujo más escaso.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-split',
      cardLayout: 'grid-standard',
      enhancers: ['scroll-reveal', 'sticky-header'],
    },
  },

  {
    id: 'biolux',
    name: 'BIOLUX',
    tagline: 'Donde la ciencia se convierte en obsesión de compra.',
    type: 'ecommerce',
    mood: ['technical', 'luxury', 'dark'],
    palette: {
      bg:      '#030F18',
      surface: '#071A28',
      text:    '#D8F0FF',
      accent:  '#00E5CC',
      accent2: '#0076A8',
      muted:   '#2A5068',
      rule:    'rgba(0,229,204,0.15)',
    },
    typography: {
      display: 'Outfit',
      body: 'Crimson Text',
      displayWeight: '600',
      style: 'mixed',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap',
    },
    motion: 'Revelación científica: contadores animados, líneas que crecen como barras de progreso. Hover en ingredientes activa tooltip con descripción técnica. Data que respira.',
    layoutDNA: 'Cards de ingredientes como fichas de laboratorio. Stats numéricos prominentes. Hero con gráfico de fibra capilar como fondo decorativo. Credenciales visibles.',
    aggro: {
      unlocked: true,
      description: 'AGGRO BIOLUX: claims científicos como verdades absolutas en tipo masivo. Comparativa vs competencia directa. Ingredientes como superpoderes visualizados.',
    },
    previewColors: ['#030F18', '#00E5CC', '#D8F0FF', '#0076A8'],
    designerNote: 'BIOLUX convierte la química en deseo. El laboratorio como escaparate.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-split',
      cardLayout: 'grid-standard',
      enhancers: ['scroll-reveal', 'parallax', 'floating-cta'],
    },
  },

  {
    id: 'blueprint',
    name: 'BLUEPRINT',
    tagline: 'La precisión de la ingeniería aplicada al comercio de premium.',
    type: 'ecommerce',
    mood: ['technical', 'editorial', 'luxury'],
    palette: {
      bg:      '#F8F6F0',
      surface: '#EDEBE3',
      text:    '#1A1E2C',
      accent:  '#1A3A6C',
      accent2: '#C4A448',
      muted:   '#6A7288',
      rule:    'rgba(26,58,108,0.15)',
    },
    typography: {
      display: 'Playfair Display',
      body: 'IBM Plex Sans',
      displayWeight: '400',
      style: 'mixed',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap',
    },
    motion: 'Construcción arquitectónica: líneas que se dibujan, elementos que toman posición. Timing staggered exacto: 60ms entre cada child. Precisión como valor.',
    layoutDNA: 'Grid de 12 columnas con gutters definidos como especificaciones técnicas. Anotaciones y medidas como elementos decorativos. Producto como el objeto de un plano.',
    aggro: {
      unlocked: true,
      description: 'AGGRO BLUEPRINT: el plano técnico explota — líneas de construcción se convierten en composición caótica controlada. Claims como especificaciones militares.',
    },
    previewColors: ['#F8F6F0', '#1A3A6C', '#1A1E2C', '#C4A448'],
    designerNote: 'BLUEPRINT es para marcas que entienden que la confianza se construye con precisión, no con promesas.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-editorial',
      cardLayout: 'list-editorial',
      enhancers: ['scroll-reveal', 'hover-reveal'],
    },
  },

  // ════════════════════════════════════════════════════════
  // LANDING THEMES (10)
  // ════════════════════════════════════════════════════════

  {
    id: 'ignition',
    name: 'IGNITION',
    tagline: 'Una sola pantalla. Una sola decisión. Sin distracciones.',
    type: 'landing',
    mood: ['edge', 'minimal', 'dark'],
    palette: {
      bg:      '#000000',
      surface: '#0A0A0A',
      text:    '#FFFFFF',
      accent:  '#FF2200',
      accent2: '#FF6600',
      muted:   '#444444',
      rule:    'rgba(255,34,0,0.2)',
    },
    typography: {
      display: 'Bebas Neue',
      body: 'Mulish',
      displayWeight: '400',
      style: 'display',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Mulish:wght@300;400;600;700&display=swap',
    },
    motion: 'Un solo momento de impacto: headline que cae en 300ms con bounce final. CTA que palpita cada 3s. El fondo tiene partículas ascendentes subtiles. Una vez. Perfecto.',
    layoutDNA: 'Todo above the fold. Un headline enorme. Una propuesta de valor en 12 palabras máximo. Un CTA. Scroll revela social proof. Estructura de embudo puro.',
    aggro: {
      unlocked: true,
      description: 'AGGRO IGNITION: countdown timer. Copy de escasez extrema. CTA en rojo con texto "AHORA O NUNCA". Pop-up de exit intent con oferta final.',
    },
    previewColors: ['#000000', '#FF2200', '#FFFFFF', '#FF6600'],
    designerNote: 'IGNITION es la máquina de conversión más simple posible. Porque simple no significa fácil.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-fullbleed',
      cardLayout: 'grid-standard',
      enhancers: ['scroll-reveal', 'floating-cta', 'sticky-header'],
    },
  },

  {
    id: 'trust',
    name: 'TRUST',
    tagline: 'La confianza construida con evidencia. La conversión construida con verdad.',
    type: 'landing',
    mood: ['technical', 'minimal', 'editorial'],
    palette: {
      bg:      '#F8F9FC',
      surface: '#EEF1F8',
      text:    '#0F1628',
      accent:  '#1A4FD6',
      accent2: '#00A878',
      muted:   '#5A6A8A',
      rule:    'rgba(15,22,40,0.1)',
    },
    typography: {
      display: 'Mulish',
      body: 'Mulish',
      displayWeight: '800',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800;900&display=swap',
    },
    motion: 'Micro-confirmaciones: cada elemento de social proof aparece con un checkmark animado. Counters de clientes/ventas que incrementan al llegar al viewport. Confianza en movimiento.',
    layoutDNA: 'Estructura de conversión probada: hero con propuesta de valor clara → beneficios en 3 columnas → social proof masivo (logos, testimonios, números) → FAQ → CTA final. Sin desvíos.',
    aggro: {
      unlocked: true,
      description: 'AGGRO TRUST: números de ventas/clientes en tiempo real. Garantías con términos concretos. Testimonios con nombre completo y foto. La competencia no existe porque los números lo demuestran.',
    },
    previewColors: ['#F8F9FC', '#1A4FD6', '#0F1628', '#00A878'],
    designerNote: 'TRUST es para cualquier negocio real que tiene resultados verificables. El diseño que mejor convierte no se ve — se siente como una decisión obvia.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-split',
      cardLayout: 'grid-standard',
      enhancers: ['scroll-reveal', 'sticky-header'],
    },
  },

  {
    id: 'ivory',
    name: 'IVORY',
    tagline: 'Cuando ya no necesitas convencer, solo confirmar.',
    type: 'landing',
    mood: ['luxury', 'minimal', 'editorial'],
    palette: {
      bg:      '#FAFAF5',
      surface: '#F0EFE8',
      text:    '#1A1A14',
      accent:  '#1A1A14',
      accent2: '#C4A448',
      muted:   '#8A8A7A',
      rule:    'rgba(26,26,20,0.1)',
    },
    typography: {
      display: 'EB Garamond',
      body: 'Jost',
      displayWeight: '400',
      style: 'serif',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap',
    },
    motion: 'Antigital: sin transiciones de entrada — los elementos están ahí desde el inicio, como texto impreso. Scroll revela secciones sin animación. La quietud es la declaración.',
    layoutDNA: 'Documento elegante. Márgenes amplios como un libro de arte. Texto justificado. Testimonios como notas al pie de página. Sin CTAs agresivos — una invitación, no un grito.',
    aggro: {
      unlocked: true,
      description: 'AGGRO IVORY: el contraste extremo del paper vs black. Copy que confronta directamente al lector. La elegancia como provocación en un mundo ruidoso.',
    },
    previewColors: ['#FAFAF5', '#1A1A14', '#C4A448', '#F0EFE8'],
    designerNote: 'IVORY es para marcas que saben que su cliente ya decidió. Solo necesita el contexto correcto.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-editorial',
      cardLayout: 'list-editorial',
      enhancers: ['scroll-reveal', 'hover-reveal'],
    },
  },

  {
    id: 'kinetic',
    name: 'KINETIC',
    tagline: 'El movimiento como argumento de venta más persuasivo.',
    type: 'landing',
    mood: ['edge', 'vibrant', 'technical'],
    palette: {
      bg:      '#0A0A0A',
      surface: '#181818',
      text:    '#F5F5F5',
      accent:  '#E8FF00',
      accent2: '#FF3300',
      muted:   '#555555',
      rule:    'rgba(232,255,0,0.2)',
    },
    typography: {
      display: 'Oswald',
      body: 'Barlow',
      displayWeight: '600',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Barlow:ital,wght@0,300;0,400;0,500;1,400&display=swap',
    },
    motion: 'Todo en movimiento continuo: texto que sube como créditos, flechas que apuntan hacia el CTA, speed lines CSS en backgrounds. La energía es el mensaje.',
    layoutDNA: 'Composición diagonal. Líneas de velocidad como elementos estructurales. Secciones divididas en ángulo. El scroll activa nuevos estados de movimiento. Nunca estático.',
    aggro: {
      unlocked: true,
      description: 'AGGRO KINETIC: velocidad extrema — todo se mueve más rápido. Claims de performance como números parpadeantes. Timer de oferta. La energía como urgencia.',
    },
    previewColors: ['#0A0A0A', '#E8FF00', '#F5F5F5', '#FF3300'],
    designerNote: 'KINETIC convierte la energía de la marca en energía de conversión.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-text-only',
      cardLayout: 'scroll-horizontal',
      enhancers: ['scroll-reveal', 'floating-cta', 'sticky-header'],
    },
  },

  {
    id: 'deep-signal',
    name: 'DEEP SIGNAL',
    tagline: 'La confianza que construye la data. La conversión que construye el diseño.',
    type: 'landing',
    mood: ['technical', 'dark', 'edge'],
    palette: {
      bg:      '#020E18',
      surface: '#061828',
      text:    '#D0E8F8',
      accent:  '#FF6B00',
      accent2: '#00AAFF',
      muted:   '#2A4A60',
      rule:    'rgba(255,107,0,0.2)',
    },
    typography: {
      display: 'Syne',
      body: 'Source Sans 3',
      displayWeight: '700',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;1,300&display=swap',
    },
    motion: 'Transmisión de señal: elementos que aparecen píxel a píxel, barras de carga que no cargan — estética de terminal. Counters que incrementan en tiempo real.',
    layoutDNA: 'Data visualization como decoración. Stats como headlines. Progress bars y gráficos como elementos de confianza. El producto respaldado por números.',
    aggro: {
      unlocked: true,
      description: 'AGGRO DEEP SIGNAL: claims con porcentajes extremos. Comparativa directa vs competencia. Terminal mode — todo en monospace. La data como weapon.',
    },
    previewColors: ['#020E18', '#FF6B00', '#D0E8F8', '#00AAFF'],
    designerNote: 'DEEP SIGNAL convierte la evidencia en deseo.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-cinematic',
      cardLayout: 'grid-standard',
      enhancers: ['parallax', 'scroll-reveal', 'floating-cta'],
    },
  },

  {
    id: 'bloom-protocol',
    name: 'BLOOM PROTOCOL',
    tagline: 'La biociencia del bienestar. Donde la naturaleza tiene fórmulas.',
    type: 'landing',
    mood: ['organic', 'technical', 'luxury'],
    palette: {
      bg:      '#F8FAF5',
      surface: '#EEF5E8',
      text:    '#162010',
      accent:  '#2A6A30',
      accent2: '#8B5E3C',
      muted:   '#5A7050',
      rule:    'rgba(42,106,48,0.15)',
    },
    typography: {
      display: 'Cormorant Garamond',
      body: 'Source Sans 3',
      displayWeight: '300',
      style: 'mixed',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Source+Sans+3:wght@300;400;600&display=swap',
    },
    motion: 'Crecimiento celular: elementos que aparecen como organismos expandiéndose. Ilustraciones botánicas que se dibujan en SVG stroke. Naturaleza animada.',
    layoutDNA: 'Secciones alternando clínico-blanco y botanical-verde. Ingredientes con ilustración + ficha técnica. La ciencia y la naturaleza como dualidad visual.',
    aggro: {
      unlocked: true,
      description: 'AGGRO BLOOM: la naturaleza como advertencia. Claims de eficacia vs químicos. "Sin esto. Sin aquello. Solo lo que necesitas." Verde como agresión.',
    },
    previewColors: ['#F8FAF5', '#2A6A30', '#162010', '#8B5E3C'],
    designerNote: 'BLOOM PROTOCOL es para marcas que entienden que la salud es el nuevo lujo.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-editorial',
      cardLayout: 'grid-masonry',
      enhancers: ['scroll-reveal', 'hover-reveal'],
    },
  },

  {
    id: 'reserve',
    name: 'RESERVE',
    tagline: 'Para las marcas que no necesitan explicarse. Solo mostrarse.',
    type: 'landing',
    mood: ['luxury', 'minimal', 'dark'],
    palette: {
      bg:      '#08080A',
      surface: '#111116',
      text:    '#F0ECE4',
      accent:  '#C8B48A',
      accent2: '#7A6A50',
      muted:   '#3A3830',
      rule:    'rgba(200,180,138,0.12)',
    },
    typography: {
      display: 'Cinzel',
      body: 'Jost',
      displayWeight: '400',
      style: 'serif',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@300;400;500&family=Jost:wght@200;300;400;500&display=swap',
    },
    motion: 'Presencia silenciosa: los elementos se materializan en 900ms desde opacity 0 sin movimiento. El producto aparece como si hubiera estado ahí siempre. El tiempo que tarda en cargar es intencional.',
    layoutDNA: 'Espacio generoso con propósito. Un claim central, el producto en primer plano absoluto, un solo CTA de alta intención. Social proof discreto: nombres de clientes, no contadores. Calidad sobre cantidad.',
    aggro: {
      unlocked: true,
      description: 'AGGRO RESERVE: el lujo como declaración de superioridad sin adornos. Precio visible y sin disculpa. Un solo claim de 5 palabras. El producto llena el 70% del viewport.',
    },
    previewColors: ['#08080A', '#C8B48A', '#F0ECE4', '#111116'],
    designerNote: 'RESERVE es para joyería, relojes, cosmética ultra-premium, inmobiliaria exclusiva y servicios de alto valor. No convence — confirma.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-cinematic',
      cardLayout: 'list-editorial',
      enhancers: ['parallax', 'scroll-reveal', 'hover-reveal'],
    },
  },

  {
    id: 'launch',
    name: 'LAUNCH',
    tagline: 'El momento del lanzamiento tiene su propio diseño. Este es.',
    type: 'landing',
    mood: ['edge', 'vibrant', 'editorial'],
    palette: {
      bg:      '#0C0C14',
      surface: '#181826',
      text:    '#F0F0F8',
      accent:  '#FF5F1F',
      accent2: '#FFB800',
      muted:   '#4A4A6A',
      rule:    'rgba(255,95,31,0.2)',
    },
    typography: {
      display: 'Oswald',
      body: 'DM Sans',
      displayWeight: '600',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap',
    },
    motion: 'Cuenta regresiva que activa la narrativa: countdown timer al centro, seguido de reveal del producto en 400ms. Cada scroll desbloquea el siguiente beneficio como un evento.',
    layoutDNA: 'Hero de anuncio con producto revelado dramáticamente. Beneficios que aparecen como hitos de lanzamiento. Zona de precio/oferta de lanzamiento bien jerarquizada. Un solo CTA dominante.',
    aggro: {
      unlocked: true,
      description: 'AGGRO LAUNCH: oferta de lanzamiento con fecha límite real visible. Precio de lanzamiento vs precio regular con contraste extremo. Primeras unidades / plazas limitadas con número real.',
    },
    previewColors: ['#0C0C14', '#FF5F1F', '#F0F0F8', '#FFB800'],
    designerNote: 'LAUNCH es para nuevos productos, temporadas, servicios y colecciones. El lanzamiento es un evento — el diseño debe tratarlo como tal.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-fullbleed',
      cardLayout: 'grid-standard',
      enhancers: ['scroll-reveal', 'floating-cta', 'image-carousel'],
    },
  },

  {
    id: 'golden-age',
    name: 'GOLDEN AGE',
    tagline: 'El lujo tiene memoria. El tuyo empieza aquí.',
    type: 'landing',
    mood: ['luxury', 'editorial', 'dark'],
    palette: {
      bg:      '#0C0800',
      surface: '#18120A',
      text:    '#F5E8C8',
      accent:  '#D4AF37',
      accent2: '#8B7320',
      muted:   '#6A5A30',
      rule:    'rgba(212,175,55,0.2)',
    },
    typography: {
      display: 'Cinzel Decorative',
      body: 'Raleway',
      displayWeight: '400',
      style: 'serif',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Raleway:ital,wght@0,300;0,400;0,500;1,300&display=swap',
    },
    motion: 'Revelación teatral: una cortina dorada que se abre en SVG. Elementos que aparecen acompañados de una partícula gold. El scroll es una función de teatro.',
    layoutDNA: 'Marcos decorativos geométricos Art Deco. Ornamentos como separadores. Tipografía UPPERCASE con tracking extremo. El oro como arquitectura visual.',
    aggro: {
      unlocked: true,
      description: 'AGGRO GOLDEN AGE: el Art Deco explota — patrones geométricos que ocupan el fondo completo. Copy de grandeza sin límites. El precio como corona.',
    },
    previewColors: ['#0C0800', '#D4AF37', '#F5E8C8', '#8B7320'],
    designerNote: 'GOLDEN AGE es para marcas que entienden que el legado es el mejor argumento de venta.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-cinematic',
      cardLayout: 'list-editorial',
      enhancers: ['parallax', 'scroll-reveal', 'hover-reveal'],
    },
  },

  {
    id: 'authority',
    name: 'AUTHORITY',
    tagline: 'La credibilidad no se declara. Se demuestra. Sección a sección.',
    type: 'landing',
    mood: ['technical', 'editorial', 'luxury'],
    palette: {
      bg:      '#F4F2EC',
      surface: '#EAE7DC',
      text:    '#1C1C18',
      accent:  '#2A4A8A',
      accent2: '#8A6A2A',
      muted:   '#6A6A60',
      rule:    'rgba(28,28,24,0.12)',
    },
    typography: {
      display: 'Libre Baskerville',
      body: 'Source Sans 3',
      displayWeight: '700',
      style: 'mixed',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600&display=swap',
    },
    motion: 'Autoridad que se construye: secciones que aparecen con peso y presencia, no con agilidad. Cada testimonio de cliente o caso de éxito entra con un fade que comunica solidez.',
    layoutDNA: 'Estructura de propuesta de valor institucional: presentación del problema → solución → metodología → casos de éxito → equipo/credenciales → CTA. Diseño que comunica seriedad sin frialdad.',
    aggro: {
      unlocked: true,
      description: 'AGGRO AUTHORITY: propuesta directa sin preámbulos. Resultados de clientes en números concretos al frente. Garantía o metodología como primer elemento visible. Sin adornos — solo evidencia.',
    },
    previewColors: ['#F4F2EC', '#2A4A8A', '#1C1C18', '#8A6A2A'],
    designerNote: 'AUTHORITY es para consultoras, agencias, distribuidores B2B, servicios profesionales y cualquier negocio donde la confianza institucional determina la decisión de compra.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-split',
      cardLayout: 'list-editorial',
      enhancers: ['scroll-reveal', 'sticky-header'],
    },
  },

  // ════════════════════════════════════════════════════════
  // WEB THEMES (10)
  // ════════════════════════════════════════════════════════

  {
    id: 'editorial',
    name: 'EDITORIAL',
    tagline: 'La marca como publicación. Cada página, una historia.',
    type: 'web',
    mood: ['editorial', 'luxury', 'minimal'],
    palette: {
      bg:      '#FAFAF8',
      surface: '#F2F0EA',
      text:    '#1A1814',
      accent:  '#D4272A',
      accent2: '#1A1814',
      muted:   '#7A7060',
      rule:    'rgba(26,24,20,0.12)',
    },
    typography: {
      display: 'Playfair Display',
      body: 'DM Sans',
      displayWeight: '700',
      style: 'mixed',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap',
    },
    motion: 'Lento y deliberado: page transitions de 400ms. Hover en imágenes activa zoom suave. El editorial no corre — pasea.',
    layoutDNA: 'Grid tipo Vogue — columnas asimétricas (2-3-4). Imágenes cropped en formatos editoriales. Pull quotes en gran formato. Navegación como sumario de revista.',
    aggro: {
      unlocked: true,
      description: 'AGGRO EDITORIAL: el rojo editorial se convierte en rojo sangre. Headlines que transgreden el grid. Tipografía que sangra fuera del viewport. Punto de vista radical.',
    },
    previewColors: ['#FAFAF8', '#D4272A', '#1A1814', '#F2F0EA'],
    designerNote: 'EDITORIAL convierte la marca en un medio de comunicación con autoridad propia.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-editorial',
      cardLayout: 'list-editorial',
      enhancers: ['scroll-reveal', 'hover-reveal'],
    },
  },

  {
    id: 'studio',
    name: 'STUDIO',
    tagline: 'El espacio de trabajo visible. La creatividad como producto.',
    type: 'web',
    mood: ['minimal', 'editorial', 'technical'],
    palette: {
      bg:      '#F8F8F4',
      surface: '#EFEEEA',
      text:    '#202018',
      accent:  '#FF5F00',
      accent2: '#202018',
      muted:   '#888880',
      rule:    'rgba(32,32,24,0.1)',
    },
    typography: {
      display: 'Syne',
      body: 'Instrument Sans',
      displayWeight: '700',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap',
    },
    motion: 'Cursor personalizado. Transiciones de página con slide horizontal. Hover en proyectos revela thumbnail con motion fluido. El cursor como elemento de diseño.',
    layoutDNA: 'Portfolio grid con hover states. Números de proyecto. Case studies con antes/después. El proceso como producto visible. Navegación minimalista con mucho espacio.',
    aggro: {
      unlocked: true,
      description: 'AGGRO STUDIO: el proceso creativo desordenado visible. Obras sin terminar como statement. El making-of como el producto principal.',
    },
    previewColors: ['#F8F8F4', '#FF5F00', '#202018', '#EFEEEA'],
    designerNote: 'STUDIO muestra que el mejor portfolio es el que hace sentir al cliente que el trabajo ya está hecho.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-split',
      cardLayout: 'grid-masonry',
      enhancers: ['scroll-reveal', 'hover-reveal', 'parallax'],
    },
  },

  {
    id: 'founding-story',
    name: 'FOUNDING STORY',
    tagline: 'La historia detrás de la marca es el argumento más poderoso que tiene.',
    type: 'web',
    mood: ['editorial', 'luxury', 'dark'],
    palette: {
      bg:      '#0C0C0A',
      surface: '#161612',
      text:    '#F0EDE8',
      accent:  '#D4A84B',
      accent2: '#8A6A30',
      muted:   '#5A5850',
      rule:    'rgba(212,168,75,0.18)',
    },
    typography: {
      display: 'Libre Baskerville',
      body: 'Karla',
      displayWeight: '700',
      style: 'mixed',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Karla:ital,wght@0,300;0,400;0,500;1,300&display=swap',
    },
    motion: 'Narrativa en movimiento: el scroll lleva al visitante a través de la historia cronológicamente. Cada milestone aparece con peso y pausa. Las imágenes históricas se revelan con parallax suave.',
    layoutDNA: 'Una columna narrativa con momentos clave destacados. Fotos y fechas como anclajes de historia. Citas del fundador en gran formato. La visión de la empresa como conclusión natural, no como pitch.',
    aggro: {
      unlocked: true,
      description: 'AGGRO FOUNDING STORY: la historia como declaración de ventaja competitiva. Años de experiencia como dato duro al frente. "Nadie ha hecho esto más tiempo que nosotros" sin eufemismos.',
    },
    previewColors: ['#0C0C0A', '#D4A84B', '#F0EDE8', '#8A6A30'],
    designerNote: 'FOUNDING STORY es para empresas familiares, marcas con historia, distribuidores con trayectoria y cualquier negocio cuyo origen sea un diferenciador real de confianza.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-cinematic',
      cardLayout: 'list-editorial',
      enhancers: ['parallax', 'scroll-reveal'],
    },
  },

  {
    id: 'atlas',
    name: 'ATLAS',
    tagline: 'Marcas que piensan a escala global y actúan a escala humana.',
    type: 'web',
    mood: ['luxury', 'editorial', 'technical'],
    palette: {
      bg:      '#F2F0E8',
      surface: '#E8E4D8',
      text:    '#1C2030',
      accent:  '#C07830',
      accent2: '#1C2030',
      muted:   '#6A6A80',
      rule:    'rgba(28,32,48,0.12)',
    },
    typography: {
      display: 'Libre Baskerville',
      body: 'Source Sans 3',
      displayWeight: '700',
      style: 'mixed',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600&display=swap',
    },
    motion: 'Autoridad tranquila: transiciones de 350ms, no hay prisa. Mapas que aparecen en el fondo de algunas secciones con opacity 0.05. Global sin ser genérico.',
    layoutDNA: 'Grid periodístico. Contenido organizado por relevancia, no por categoría. Datos y contexto siempre presentes. La marca como fuente de información confiable.',
    aggro: {
      unlocked: true,
      description: 'AGGRO ATLAS: el tono de autoridad se vuelve reclamo de territorio. La marca como estándar global. Sin competencia mencionada — porque no existe.',
    },
    previewColors: ['#F2F0E8', '#C07830', '#1C2030', '#E8E4D8'],
    designerNote: 'ATLAS es para marcas que entienden que la confianza se construye a lo largo del tiempo, no de una landing.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-editorial',
      cardLayout: 'list-editorial',
      enhancers: ['scroll-reveal', 'hover-reveal'],
    },
  },

  {
    id: 'archive',
    name: 'ARCHIVE',
    tagline: 'El legado no se declara. Se documenta.',
    type: 'web',
    mood: ['editorial', 'luxury', 'minimal'],
    palette: {
      bg:      '#F0EDE4',
      surface: '#E4E0D4',
      text:    '#2A2420',
      accent:  '#8B3A1A',
      accent2: '#2A2420',
      muted:   '#8A8070',
      rule:    'rgba(42,36,32,0.15)',
    },
    typography: {
      display: 'Playfair Display',
      body: 'Lato',
      displayWeight: '400',
      style: 'serif',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,300;0,400;1,300&display=swap',
    },
    motion: 'Paper feels — page turns en CSS 3D para navegación. Sepia tone en imágenes que se desatura al hover. La historia como experiencia presente.',
    layoutDNA: 'Columnas de periódico. Drop caps. Footnotes como features. Timeline visual. La antigüedad como valor de diseño, no como limitación.',
    aggro: {
      unlocked: true,
      description: 'AGGRO ARCHIVE: el legado como weapon. Fechas de fundación prominentes. "Desde XXXX" como statement de superioridad. El tiempo como argumento.',
    },
    previewColors: ['#F0EDE4', '#8B3A1A', '#2A2420', '#E4E0D4'],
    designerNote: 'ARCHIVE convierte la historia de la marca en su argumento más moderno.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-editorial',
      cardLayout: 'list-editorial',
      enhancers: ['scroll-reveal', 'hover-reveal'],
    },
  },

  {
    id: 'signal',
    name: 'SIGNAL',
    tagline: 'La conversión como consecuencia del diseño. No al revés.',
    type: 'web',
    mood: ['technical', 'minimal', 'edge'],
    palette: {
      bg:      '#F5F7FA',
      surface: '#EBEEF5',
      text:    '#1A1E2C',
      accent:  '#0060FF',
      accent2: '#00CC88',
      muted:   '#6A7090',
      rule:    'rgba(26,30,44,0.1)',
    },
    typography: {
      display: 'Mulish',
      body: 'Mulish',
      displayWeight: '800',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,400&display=swap',
    },
    motion: 'Micro-interactions en todos los elementos interactivos. Toggle states con feedback inmediato. Pricing tables con highlight animado. CTA que "late" sutilmente.',
    layoutDNA: 'Feature grid. Pricing table. Social proof masivo. FAQ accordion. Todo optimizado para reducir friction. El diseño es invisible — solo existe la decisión del usuario.',
    aggro: {
      unlocked: true,
      description: 'AGGRO SIGNAL: social proof extremo. Comparativa directa vs competencia nombrada. Garantías agresivas. Urgencia sin fake-urgency. Conversión brutal y honesta.',
    },
    previewColors: ['#F5F7FA', '#0060FF', '#1A1E2C', '#00CC88'],
    designerNote: 'SIGNAL sabe que la mejor conversión es la que el usuario no recuerda haber hecho.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-split',
      cardLayout: 'grid-standard',
      enhancers: ['scroll-reveal', 'sticky-header', 'floating-cta'],
    },
  },

  {
    id: 'greenhouse',
    name: 'GREENHOUSE',
    tagline: 'El bienestar como estética. La salud como identidad visual.',
    type: 'web',
    mood: ['organic', 'luxury', 'minimal'],
    palette: {
      bg:      '#F2F8F0',
      surface: '#E8F2E4',
      text:    '#1A2C18',
      accent:  '#3A7A48',
      accent2: '#7A5C3E',
      muted:   '#5A7A58',
      rule:    'rgba(58,122,72,0.15)',
    },
    typography: {
      display: 'Lora',
      body: 'Nunito',
      displayWeight: '500',
      style: 'mixed',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Nunito:wght@300;400;500;600&display=swap',
    },
    motion: 'Crecimiento lento: elementos que se expanden como plantas. SVG ilustraciones que se dibujan. Colores que saturan gradualmente. La vida como animación.',
    layoutDNA: 'Ilustraciones botánicas como sistema decorativo. Ingredientes con representación visual. Testimonios con foto naturalista. El verde como arquitectura.',
    aggro: {
      unlocked: true,
      description: 'AGGRO GREENHOUSE: el "natural" como arma frente a la industria química. Claims de pureza extremos. La naturaleza como superioridad moral y científica.',
    },
    previewColors: ['#F2F8F0', '#3A7A48', '#1A2C18', '#7A5C3E'],
    designerNote: 'GREENHOUSE convierte el wellness en la identidad central de la marca.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-editorial',
      cardLayout: 'grid-masonry',
      enhancers: ['scroll-reveal', 'hover-reveal'],
    },
  },

  {
    id: 'obsidian',
    name: 'OBSIDIAN',
    tagline: 'Lujo oscuro. Sin concesiones. Sin audiencia masiva.',
    type: 'web',
    mood: ['luxury', 'dark', 'minimal'],
    palette: {
      bg:      '#080808',
      surface: '#111111',
      text:    '#EEE8DC',
      accent:  '#D4C4A8',
      accent2: '#6A6060',
      muted:   '#3A3A3A',
      rule:    'rgba(212,196,168,0.12)',
    },
    typography: {
      display: 'Cormorant Garamond',
      body: 'Cinzel',
      displayWeight: '300',
      style: 'serif',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@300;400;500&display=swap',
    },
    motion: 'Presencia gravitacional: elementos pesados que aparecen como bloques de obsidiana materializándose. Sin ligereza. Sin movimiento superfluo.',
    layoutDNA: 'Márgenes que pertenecen a la oscuridad. Texto que emerge de la nada. Imágenes en alto contraste como joyería en vitrina. La web como galería privada.',
    aggro: {
      unlocked: true,
      description: 'AGGRO OBSIDIAN: la oscuridad total sin alivio. Una sola frase en la hero. El producto visible solo con hover. La exclusividad como filtro de acceso.',
    },
    previewColors: ['#080808', '#D4C4A8', '#EEE8DC', '#111111'],
    designerNote: 'OBSIDIAN no es para todos. Eso es exactamente el punto.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-cinematic',
      cardLayout: 'list-editorial',
      enhancers: ['parallax', 'scroll-reveal', 'hover-reveal'],
    },
  },

  {
    id: 'performance',
    name: 'PERFORMANCE',
    tagline: 'Los resultados son el diseño. El diseño son los resultados.',
    type: 'web',
    mood: ['edge', 'technical', 'brutalist'],
    palette: {
      bg:      '#0A0A0A',
      surface: '#141414',
      text:    '#F5F5F5',
      accent:  '#E8380A',
      accent2: '#F5A623',
      muted:   '#404040',
      rule:    'rgba(232,56,10,0.2)',
    },
    typography: {
      display: 'Oswald',
      body: 'Barlow',
      displayWeight: '700',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Barlow:ital,wght@0,300;0,400;0,500;1,400&display=swap',
    },
    motion: 'Impacto directo: secciones que entran con slide limpio desde abajo en 250ms. Contadores animados para stats de rendimiento. Hover en productos activa highlight de beneficio clave.',
    layoutDNA: 'Diagonales estructurales que comunican dinamismo sin caos. Stats de rendimiento como titulares de sección. Antes/después con métricas reales. CTA con orientación a resultado, no a proceso.',
    aggro: {
      unlocked: true,
      description: 'AGGRO PERFORMANCE: métricas de resultado al frente sin contexto suavizador. Comparativa directa con estándar de la industria. El producto como herramienta de ventaja competitiva.',
    },
    previewColors: ['#0A0A0A', '#E8380A', '#F5F5F5', '#F5A623'],
    designerNote: 'PERFORMANCE es para marcas de fitness, equipamiento deportivo, automotive, suplementos y cualquier categoría donde el resultado medible es el argumento central de venta.',
    structure: {
      colorMode: 'dark',
      headerStyle: 'hero-fullbleed',
      cardLayout: 'grid-standard',
      enhancers: ['scroll-reveal', 'floating-cta', 'sticky-header'],
    },
  },

  {
    id: 'canvas',
    name: 'CANVAS',
    tagline: 'El espacio creativo como destino. La marca como obra abierta.',
    type: 'web',
    mood: ['minimal', 'editorial', 'organic'],
    palette: {
      bg:      '#FFFFFF',
      surface: '#F5F5F0',
      text:    '#1A1A1A',
      accent:  '#FF3366',
      accent2: '#3366FF',
      muted:   '#888888',
      rule:    'rgba(26,26,26,0.1)',
    },
    typography: {
      display: 'Libre Caslon Text',
      body: 'Work Sans',
      displayWeight: '700',
      style: 'mixed',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap',
    },
    motion: 'Pinceladas: elementos que aparecen como si se estuvieran pintando. Hover activa un splash de color del acento. La creatividad como interacción.',
    layoutDNA: 'Gallery grid con hover states que revelan información. Masonry flexible. Proyectos que se despliegan en full-screen. El blanco como lienzo activo.',
    aggro: {
      unlocked: true,
      description: 'AGGRO CANVAS: el lienzo en blanco se convierte en campo de batalla de color. Múltiples acentos simultáneos. La creatividad sin límites como provocación.',
    },
    previewColors: ['#FFFFFF', '#FF3366', '#1A1A1A', '#3366FF'],
    designerNote: 'CANVAS es para marcas que entienden que la creatividad es el único diferenciador real.',
    structure: {
      colorMode: 'light',
      headerStyle: 'hero-split',
      cardLayout: 'grid-masonry',
      enhancers: ['scroll-reveal', 'hover-reveal', 'floating-cta'],
    },
  },

  // ════════════════════════════════════════════════════════
  // BLOG THEMES (10)
  // ════════════════════════════════════════════════════════

  {
    id: 'chronicle', name: 'CHRONICLE', tagline: 'El blog como publicación. La marca como medio.',
    type: 'blog' as const, mood: ['editorial', 'luxury', 'minimal'] as const,
    palette: { bg: '#FAFAF6', surface: '#F0EDE4', text: '#1C1814', accent: '#C0282A', accent2: '#1C1814', muted: '#7A7060', rule: 'rgba(28,24,20,0.12)' },
    typography: { display: 'Playfair Display', body: 'Source Serif 4', displayWeight: '700', style: 'serif' as const, googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap' },
    motion: 'Deliberado y editorial: hover en artículos revela categoría con slide. Zoom muy sutil en imágenes al hover.',
    layoutDNA: 'Magazine grid: artículo featured 2/3 + sidebar editorial 1/3 arriba. Bajo: 3 columnas. Las imágenes lideran. Arquitectura periodística auténtica.',
    aggro: { unlocked: true, description: 'AGGRO CHRONICLE: el rojo editorial se convierte en rojo ruptura. Tipografía que rompe la columna. La portada como declaración sin matices.' },
    previewColors: ['#FAFAF6', '#C0282A', '#1C1814', '#F0EDE4'],
    designerNote: 'CHRONICLE trata el blog como lo que debería ser: un medio con autoridad propia.',
    structure: { colorMode: 'light' as const, headerStyle: 'hero-editorial' as const, cardLayout: 'magazine' as const, enhancers: ['reading-progress', 'category-pills', 'newsletter-cta', 'sticky-header'] },
  },
  {
    id: 'dispatch', name: 'DISPATCH', tagline: 'Un solo hilo. Una sola voz. Sin ruido.',
    type: 'blog' as const, mood: ['minimal', 'editorial', 'luxury'] as const,
    palette: { bg: '#FFFEF8', surface: '#F5F2E8', text: '#181614', accent: '#1A52A8', accent2: '#8A3A18', muted: '#6A6860', rule: 'rgba(24,22,20,0.1)' },
    typography: { display: 'EB Garamond', body: 'Lato', displayWeight: '500', style: 'serif' as const, googleFontsUrl: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lato:ital,wght@0,300;0,400;1,300&display=swap' },
    motion: 'Anti-digital: sin animaciones de entrada. El contenido simplemente está, como una carta recibida.',
    layoutDNA: 'Una columna central de 680px. Numeración de entregas tipo newsletter. Artículos como capítulos numerados. CTA de suscripción como párrafo final.',
    aggro: { unlocked: true, description: 'AGGRO DISPATCH: el tono íntimo se convierte en declaración. Un punto de vista sin concesiones. La columna de opinión sin filtro.' },
    previewColors: ['#FFFEF8', '#1A52A8', '#181614', '#F5F2E8'],
    designerNote: 'DISPATCH es para creadores que entienden que una audiencia comprometida vale más que alcance masivo.',
    structure: { colorMode: 'light' as const, headerStyle: 'hero-text-only' as const, cardLayout: 'single-column' as const, enhancers: ['newsletter-cta', 'author-bio', 'reading-progress'] },
  },
  {
    id: 'mural', name: 'MURAL', tagline: 'La imagen primero. El texto la contextualiza. Siempre.',
    type: 'blog' as const, mood: ['maximalist', 'editorial', 'dark'] as const,
    palette: { bg: '#0A0A0A', surface: '#141414', text: '#F5F5F0', accent: '#FF5500', accent2: '#FFD700', muted: '#555555', rule: 'rgba(255,85,0,0.2)' },
    typography: { display: 'Syne', body: 'DM Sans', displayWeight: '800', style: 'sans' as const, googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap' },
    motion: 'Hover: la imagen escala al 105% con overlay de título + categoría desde abajo. Masonry que respira.',
    layoutDNA: 'Foto full-bleed como hero. Masonry grid irregular de imágenes grandes. El texto contextualiza. Categorías como etiquetas flotantes sobre la foto.',
    aggro: { unlocked: true, description: 'AGGRO MURAL: imágenes que sangran fuera del viewport. Texto sobre imagen sin overlay. La fotografía como statement.' },
    previewColors: ['#0A0A0A', '#FF5500', '#F5F5F0', '#FFD700'],
    designerNote: 'MURAL es para fotógrafos, viajeros, chefs y cualquier creador cuya historia vive en la imagen.',
    structure: { colorMode: 'dark' as const, headerStyle: 'hero-fullbleed' as const, cardLayout: 'grid-masonry' as const, enhancers: ['hover-reveal', 'scroll-reveal', 'parallax'] },
  },
  {
    id: 'codex', name: 'CODEX', tagline: 'El pensamiento largo. La lectura profunda. El argumento completo.',
    type: 'blog' as const, mood: ['editorial', 'luxury', 'technical'] as const,
    palette: { bg: '#F8F4EC', surface: '#EDE8DC', text: '#1E1A12', accent: '#2A5C2A', accent2: '#8B3A1A', muted: '#7A7060', rule: 'rgba(30,26,18,0.12)' },
    typography: { display: 'Libre Baskerville', body: 'Crimson Text', displayWeight: '700', style: 'serif' as const, googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap' },
    motion: 'Prácticamente estático. Reading progress bar arriba. TOC lateral hace highlight de sección activa. Footnotes en hover.',
    layoutDNA: 'Dos columnas: contenido principal 70% + TOC sidebar fija 30%. Abstract y tiempo de lectura visibles. Drop caps. Blockquotes formales. Footnotes numeradas.',
    aggro: { unlocked: true, description: 'AGGRO CODEX: el argumento académico como manifiesto. La evidencia como arma. Sin concesiones al lector casual.' },
    previewColors: ['#F8F4EC', '#2A5C2A', '#1E1A12', '#EDE8DC'],
    designerNote: 'CODEX respeta la inteligencia de su audiencia lo suficiente como para no simplificarla.',
    structure: { colorMode: 'light' as const, headerStyle: 'hero-text-only' as const, cardLayout: 'list-editorial' as const, enhancers: ['toc-sidebar', 'reading-progress', 'scroll-reveal'] },
  },
  {
    id: 'datastream', name: 'DATASTREAM', tagline: 'Contenido técnico con el diseño que merece.',
    type: 'blog' as const, mood: ['technical', 'dark', 'edge'] as const,
    palette: { bg: '#020B14', surface: '#061828', text: '#C8E8FF', accent: '#00E5B4', accent2: '#FF6B6B', muted: '#2A4A6A', rule: 'rgba(0,229,180,0.15)' },
    typography: { display: 'Outfit', body: 'IBM Plex Mono', displayWeight: '600', style: 'mono' as const, googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap' },
    motion: 'Terminal estético: reading time como progress bar. Tags filtrables con fade instantáneo. Hover en cards: borde acento que crece desde abajo.',
    layoutDNA: 'Search prominente. Tag pills filtrables. Card grid oscuro con nivel (Básico/Intermedio/Avanzado) + tiempo de lectura + tags + avatar autor.',
    aggro: { unlocked: true, description: 'AGGRO DATASTREAM: terminal mode completo — monospace puro, negro absoluto, acento verde neón. La complejidad técnica como señal de calidad.' },
    previewColors: ['#020B14', '#00E5B4', '#C8E8FF', '#FF6B6B'],
    designerNote: 'DATASTREAM trata el contenido técnico con el rigor visual que sus lectores esperan y merecen.',
    structure: { colorMode: 'dark' as const, headerStyle: 'hero-split' as const, cardLayout: 'grid-standard' as const, enhancers: ['reading-progress', 'category-pills', 'newsletter-cta'] },
  },
  {
    id: 'memoir', name: 'MEMOIR', tagline: 'La voz de una persona. La historia de muchos.',
    type: 'blog' as const, mood: ['editorial', 'luxury', 'organic'] as const,
    palette: { bg: '#FAF7F2', surface: '#F0EAE0', text: '#2A1E18', accent: '#8B4A6A', accent2: '#C09040', muted: '#8A7A6A', rule: 'rgba(42,30,24,0.12)' },
    typography: { display: 'Cormorant Garamond', body: 'Lora', displayWeight: '300', style: 'serif' as const, googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap' },
    motion: 'Como pasar páginas de un diario: fade suave. Las fotos con leve grano de película simulado. Todo tiene textura.',
    layoutDNA: 'Intro personal del autor con foto grande. Artículos como entradas de diario: fecha prominente, título en cursiva, foto personal a ancho completo. Alternando imagen-texto.',
    aggro: { unlocked: false, description: 'MEMOIR no tiene AGGRO — la intimidad no escala con agresividad. Tiene un modo HONESTO: el copy más directo posible.' },
    previewColors: ['#FAF7F2', '#8B4A6A', '#2A1E18', '#C09040'],
    designerNote: 'MEMOIR entiende que la vulnerabilidad calculada es la forma más alta de autoridad personal.',
    structure: { colorMode: 'light' as const, headerStyle: 'hero-editorial' as const, cardLayout: 'list-editorial' as const, enhancers: ['author-bio', 'related-articles', 'scroll-reveal'] },
  },
  {
    id: 'broadcast', name: 'BROADCAST', tagline: 'Noticias de tu industria. Tu voz como medio de referencia.',
    type: 'blog' as const, mood: ['edge', 'technical', 'brutalist'] as const,
    palette: { bg: '#FFFFFF', surface: '#F4F4F4', text: '#0A0A0A', accent: '#CC1100', accent2: '#0A0A0A', muted: '#666666', rule: 'rgba(10,10,10,0.15)' },
    typography: { display: 'Barlow Condensed', body: 'Barlow', displayWeight: '700', style: 'sans' as const, googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;1,700&family=Barlow:wght@300;400;500;600&display=swap' },
    motion: 'Periódico vivo: breaking news banner se desliza horizontalmente. Cards en stagger rápido. La noticia no espera.',
    layoutDNA: 'Masthead de periódico con fecha + número de edición. Grid asimétrico: 1 lead (2/3 ancho) + 2 secundarios + 4 breves. Divisores tipográficos. Información densa, jerarquizada.',
    aggro: { unlocked: true, description: 'AGGRO BROADCAST: breaking news total. Todo el viewport para el titular en tipo enorme. El resto: texto pequeño y denso. La urgencia como diseño.' },
    previewColors: ['#FFFFFF', '#CC1100', '#0A0A0A', '#F4F4F4'],
    designerNote: 'BROADCAST convierte el blog corporativo en el medio de referencia de su categoría.',
    structure: { colorMode: 'light' as const, headerStyle: 'hero-fullbleed' as const, cardLayout: 'magazine' as const, enhancers: ['scroll-reveal', 'category-pills', 'sticky-header'] },
  },
  {
    id: 'field-notes', name: 'FIELD NOTES', tagline: 'Guías que se usan. Contenido que se guarda.',
    type: 'blog' as const, mood: ['technical', 'organic', 'minimal'] as const,
    palette: { bg: '#FBF8F0', surface: '#F0EBE0', text: '#2A2218', accent: '#D4820A', accent2: '#4A7A3A', muted: '#8A7A60', rule: 'rgba(42,34,24,0.12)' },
    typography: { display: 'IBM Plex Serif', body: 'IBM Plex Sans', displayWeight: '600', style: 'mixed' as const, googleFontsUrl: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap' },
    motion: 'Funcional: progress bar siempre visible. Steps marcables como completados. Hover en imágenes las expande. La UX al servicio del aprendizaje.',
    layoutDNA: 'Header con breadcrumb + progress bar. Guide featured con step preview. Card grid con nivel de dificultad + tiempo de lectura + categoría. TOC inline con anclas.',
    aggro: { unlocked: false, description: 'FIELD NOTES no tiene AGGRO — la utilidad no necesita agresividad. Solo claridad absoluta.' },
    previewColors: ['#FBF8F0', '#D4820A', '#2A2218', '#4A7A3A'],
    designerNote: 'FIELD NOTES entiende que enseñar es la mejor estrategia de ventas que existe.',
    structure: { colorMode: 'light' as const, headerStyle: 'hero-minimal' as const, cardLayout: 'grid-standard' as const, enhancers: ['reading-progress', 'toc-sidebar', 'related-articles'] },
  },
  {
    id: 'roundtable', name: 'ROUNDTABLE', tagline: 'La comunidad como contenido. La conversación como SEO.',
    type: 'blog' as const, mood: ['vibrant', 'technical', 'editorial'] as const,
    palette: { bg: '#F8FAFF', surface: '#EEF2FC', text: '#0E1828', accent: '#3A6AE0', accent2: '#E05A20', muted: '#6A7A9A', rule: 'rgba(14,24,40,0.1)' },
    typography: { display: 'Mulish', body: 'Mulish', displayWeight: '800', style: 'sans' as const, googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800;900&display=swap' },
    motion: 'Social: likes y comentarios con micro-animación al hover. Avatar clusters con stagger. La energía de la comunidad como diseño.',
    layoutDNA: 'Artículos con métricas de engagement (likes, comentarios, guardados). Author card con foto. Trending topics sidebar. El lector como participante activo.',
    aggro: { unlocked: true, description: 'AGGRO ROUNDTABLE: el debate como espectáculo. Dos puntos de vista opuestos. Métricas de engagement en prominencia máxima. La polémica como estrategia.' },
    previewColors: ['#F8FAFF', '#3A6AE0', '#0E1828', '#E05A20'],
    designerNote: 'ROUNDTABLE convierte la audiencia en la fuente de autoridad más creíble que la marca puede tener.',
    structure: { colorMode: 'light' as const, headerStyle: 'hero-split' as const, cardLayout: 'list-editorial' as const, enhancers: ['scroll-reveal', 'newsletter-cta', 'category-pills'] },
  },
  {
    id: 'manifesto', name: 'MANIFESTO', tagline: 'Un punto de vista. Sin ambigüedad. Sin disculpa.',
    type: 'blog' as const, mood: ['brutalist', 'minimal', 'edge'] as const,
    palette: { bg: '#F5F5F0', surface: '#E8E8E0', text: '#080808', accent: '#080808', accent2: '#FF1A1A', muted: '#5A5A50', rule: 'rgba(8,8,8,0.12)' },
    typography: { display: 'Oswald', body: 'Work Sans', displayWeight: '700', style: 'sans' as const, googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap' },
    motion: 'Una sola afirmación por scroll. Texto que aparece de golpe. Las imágenes son pocas y enérgicas. El espacio vacío es el diseño.',
    layoutDNA: 'Single column con una declaración por sección. Numeración de argumentos en grande. Pull quotes que ocupan ancho completo en tipografía enorme. Sin sidebar. Sin distracciones.',
    aggro: { unlocked: true, description: 'AGGRO MANIFESTO: rojo sangre. Una frase. Un botón. El argumento reducido a su forma más pura y provocadora. La controversia como elección de diseño.' },
    previewColors: ['#F5F5F0', '#080808', '#FF1A1A', '#E8E8E0'],
    designerNote: 'MANIFESTO entiende que el silencio también es una posición, y tomar una posición es la única forma de construir audiencia real.',
    structure: { colorMode: 'light' as const, headerStyle: 'hero-text-only' as const, cardLayout: 'single-column' as const, enhancers: ['reading-progress', 'scroll-reveal'] },
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

export function getThemesByType(type: ThemeType): ThemeIdentity[] {
  return THEME_CATALOG.filter(t => t.type === type);
}

export function getThemeById(id: string): ThemeIdentity | undefined {
  return THEME_CATALOG.find(t => t.id === id);
}

export function getAllThemeIds(): string[] {
  return THEME_CATALOG.map(t => t.id);
}

/** Build the theme prompt injection for the web engine */
export function buildThemePromptBlock(theme: ThemeIdentity, aggro: boolean): string {
  const mode = aggro ? 'AGGRO' : 'STANDARD';
  const enhancerList = theme.structure.enhancers.join(', ');
  return `── THEME: ${theme.name} [${mode}] ──
PRINCIPIO FUNDAMENTAL: La paleta de la MARCA (definida en el brandContext arriba) tiene PRIORIDAD ABSOLUTA.
Los colores del theme son referencia de ambiente — el output debe usar los tokens de color de la marca.
Si no hay brandContext con paleta definida, usa la paleta del theme como fallback.

ESTRUCTURA (esto es lo que el theme define — aplica siempre):
  Modo base: ${theme.structure.colorMode === 'dark' ? 'OSCURO — fondos profundos, alto contraste' : 'CLARO — fondos limpios, tipografía protagonista'}
  Header: ${theme.structure.headerStyle}
  Layout de cards/secciones: ${theme.structure.cardLayout}
  Enhancers activos: ${enhancerList}

ENHANCERS — instrucciones de implementación:
${theme.structure.enhancers.includes('scroll-reveal') ? '  • scroll-reveal: elementos aparecen con IntersectionObserver — opacity 0→1, translateY 20px→0, staggered 100ms entre items' : ''}
${theme.structure.enhancers.includes('hover-reveal') ? '  • hover-reveal: en cards, overlay de info aparece en hover con transition 200ms' : ''}
${theme.structure.enhancers.includes('parallax') ? '  • parallax: imágenes hero con translateY(calc(var(--scrollY) * 0.3)) via JS scroll listener' : ''}
${theme.structure.enhancers.includes('sticky-header') ? '  • sticky-header: navbar position:sticky top:0, añade backdrop-blur + shadow al hacer scroll' : ''}
${theme.structure.enhancers.includes('floating-cta') ? '  • floating-cta: botón CTA flotante en mobile (position:fixed bottom-6 right-6) que aparece después de 30% de scroll' : ''}
${theme.structure.enhancers.includes('image-carousel') ? '  • image-carousel: hero con slider automático — transición crossfade 4s, dots de navegación, touch swipe' : ''}
${theme.structure.enhancers.includes('scroll-horizontal') ? '  • scroll-horizontal: sección de cards con overflow-x:auto, scroll-snap, cursor grab' : ''}

LAYOUT DNA: ${theme.layoutDNA}
MOTION: ${theme.motion}

TIPOGRAFÍA DEL THEME (úsala si la marca no especifica tipografía propia, o como complemento):
  Display: ${theme.typography.display} (weight: ${theme.typography.displayWeight})
  Body: ${theme.typography.body}
  Google Fonts URL: ${theme.typography.googleFontsUrl}

PALETA DE REFERENCIA (fallback si no hay brandContext):
  bg: ${theme.palette.bg} | surface: ${theme.palette.surface}
  text: ${theme.palette.text} | accent: ${theme.palette.accent}
  accent2: ${theme.palette.accent2} | muted: ${theme.palette.muted}

Filosofía de diseño: ${theme.designerNote}
${aggro ? `\n⚡ MODO AGGRO ACTIVADO:\n${theme.aggro.description}\nPUSHA los límites. El cliente aceptó el riesgo. No te contengas.` : ''}`;
}
