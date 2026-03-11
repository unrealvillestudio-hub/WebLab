// ── themeCatalog.ts ───────────────────────────────────────────────────────────
// 30 Themes — WebLab v2.3
// E-Commerce (10) · Landing (10) · Web (10)
// Each theme has a full identity system: palette, typography, motion, layout DNA.
// AGGRO variant available on all themes — breaks rules with client-accepted risk.
// ─────────────────────────────────────────────────────────────────────────────

export type ThemeType = 'ecommerce' | 'landing' | 'web';
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
  },

  {
    id: 'chrome',
    name: 'CHROME',
    tagline: 'Futuro metálico. Precisión de ingeniería. Deseo de consumidor.',
    type: 'ecommerce',
    mood: ['edge', 'technical', 'dark'],
    palette: {
      bg:      '#080C12',
      surface: '#0F1520',
      text:    '#E8EEF8',
      accent:  '#00D4FF',
      accent2: '#7B8FA6',
      muted:   '#3A4A5C',
      rule:    'rgba(0,212,255,0.15)',
    },
    typography: {
      display: 'Syne',
      body: 'Barlow',
      displayWeight: '700',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap',
    },
    motion: 'Entrada de datos: líneas que se construyen de izquierda a derecha, 60ms delay por elemento. Hover en productos activa un scan-line overlay. Todo respira tecnología.',
    layoutDNA: 'Grid técnico con líneas de referencia visibles. Hero split 55/45 con specs técnicas del producto a la derecha. UI elements como interfaces de sistema.',
    aggro: {
      unlocked: true,
      description: 'AGGRO: CTA con borde animado eléctrico. Precio con prefix "ONLY" en rojo. Grid se rompe — elementos sobresalen de su contenedor. Efectos de glitch en hover.',
    },
    previewColors: ['#080C12', '#00D4FF', '#E8EEF8', '#0F1520'],
    designerNote: 'CHROME es la interfaz del futuro aplicada al comercio. El producto no se vende — se despliega.',
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
  },

  {
    id: 'acid',
    name: 'ACID',
    tagline: 'Demasiado para los que tienen miedo. Justo para los que no.',
    type: 'ecommerce',
    mood: ['vibrant', 'edge', 'maximalist'],
    palette: {
      bg:      '#0A000F',
      surface: '#12001A',
      text:    '#F0F0F0',
      accent:  '#FF0080',
      accent2: '#FFEE00',
      muted:   '#9A00FF',
      rule:    'rgba(255,0,128,0.2)',
    },
    typography: {
      display: 'Unbounded',
      body: 'Barlow',
      displayWeight: '700',
      style: 'display',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;900&family=Barlow:wght@300;400;500&display=swap',
    },
    motion: 'Todo en movimiento perpetuo: gradientes que rotan, colores que oscilan, texto que vibra en hover. Entrada con keyframes de distorsión. La quietud es el error.',
    layoutDNA: 'Anti-grid: elementos deliberadamente desalineados. Tipografía como elemento visual dominante. Colores en bloque masivo. El producto compite con el diseño — y gana.',
    aggro: {
      unlocked: true,
      description: 'AGGRO ACID: censura visual con barras negras. Precios en tipo de alerta roja. Elementos que vibran sin parar. Copy que insulta al conservadurismo directo.',
    },
    previewColors: ['#0A000F', '#FF0080', '#FFEE00', '#9A00FF'],
    designerNote: 'ACID no pide permiso. ACID es el permiso.',
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
  },

  {
    id: 'neon-gospel',
    name: 'NEON GOSPEL',
    tagline: 'Tu marca como culto. Tu cliente como converso.',
    type: 'landing',
    mood: ['vibrant', 'edge', 'maximalist'],
    palette: {
      bg:      '#050010',
      surface: '#0A0020',
      text:    '#F0E8FF',
      accent:  '#FF00AA',
      accent2: '#AA00FF',
      muted:   '#5A0080',
      rule:    'rgba(255,0,170,0.2)',
    },
    typography: {
      display: 'Unbounded',
      body: 'DM Sans',
      displayWeight: '800',
      style: 'display',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400&display=swap',
    },
    motion: 'Neon flicker en carga: texto que parpadea como neón al encenderse. Gradientes de fondo que rotan lentamente. Hover activa glow violeta. La oscuridad como escenario.',
    layoutDNA: 'Secciones stacked full-bleed con transición neon entre ellas. Testimonios como confesiones. CTA como altar. Todo converge hacia la conversión.',
    aggro: {
      unlocked: true,
      description: 'AGGRO NEON GOSPEL: copy de culto extremo. Testimonios anónimos. CTA con promesa absoluta. Countdown. La conversión como ritual de iniciación.',
    },
    previewColors: ['#050010', '#FF00AA', '#AA00FF', '#F0E8FF'],
    designerNote: 'Las marcas más poderosas no tienen clientes. Tienen fieles.',
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
  },

  {
    id: 'void',
    name: 'VOID',
    tagline: 'El vacío como declaración de supremacía estética.',
    type: 'landing',
    mood: ['luxury', 'minimal', 'dark'],
    palette: {
      bg:      '#000000',
      surface: '#080808',
      text:    '#FFFFFF',
      accent:  '#FFFFFF',
      accent2: '#555555',
      muted:   '#333333',
      rule:    'rgba(255,255,255,0.08)',
    },
    typography: {
      display: 'Cinzel',
      body: 'Jost',
      displayWeight: '300',
      style: 'serif',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@300;400&family=Jost:wght@200;300;400&display=swap',
    },
    motion: 'Materialización desde el vacío: opacity 0 → 1 en 1200ms sin movimiento. Como si el contenido siempre hubiera existido y solo ahora fuera visible. Majestuoso.',
    layoutDNA: 'Un objeto. Un texto. Un botón. El 80% de la pantalla está vacío intencionalmente. Cada elemento presente es irremplazable. Lujo por sustracción.',
    aggro: {
      unlocked: true,
      description: 'AGGRO VOID: el vacío se llena de una sola frase devastadora. CTA de una palabra. Precio. Nada más. La provocación del minimalismo extremo.',
    },
    previewColors: ['#000000', '#FFFFFF', '#333333', '#080808'],
    designerNote: 'VOID demuestra que la confianza absoluta no necesita argumentos.',
  },

  {
    id: 'riot',
    name: 'RIOT',
    tagline: 'El orden es para los que tienen miedo de la energía.',
    type: 'landing',
    mood: ['maximalist', 'vibrant', 'edge'],
    palette: {
      bg:      '#FFFFFF',
      surface: '#F5F5F5',
      text:    '#0A0A0A',
      accent:  '#FF0040',
      accent2: '#0040FF',
      muted:   '#888888',
      rule:    'rgba(255,0,64,0.2)',
    },
    typography: {
      display: 'Unbounded',
      body: 'Barlow',
      displayWeight: '900',
      style: 'display',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=Barlow:ital,wght@0,400;0,500;1,700&display=swap',
    },
    motion: 'Caos controlado: elementos que entran desde todos los ángulos simultáneamente. Overlapping de contenido. El scroll destroza el grid. La landing es un performance.',
    layoutDNA: 'Tipografía superpuesta. Bloques de color que cortan el layout. Múltiples pesos y tamaños en coexistencia. El caos como sistema. El CTAs múltiples en conflicto visual.',
    aggro: {
      unlocked: true,
      description: 'AGGRO RIOT: fuera de control total — tipografía rotada, colores saturados al máximo, copy que contradice la UI. La conversión como accidente calculado.',
    },
    previewColors: ['#FFFFFF', '#FF0040', '#0040FF', '#0A0A0A'],
    designerNote: 'RIOT es para marcas que entienden que la atención se roba, no se pide.',
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
  },

  {
    id: 'frequency',
    name: 'FREQUENCY',
    tagline: 'Tu marca en la frecuencia correcta para las personas correctas.',
    type: 'landing',
    mood: ['edge', 'technical', 'vibrant'],
    palette: {
      bg:      '#050508',
      surface: '#0A0A14',
      text:    '#E8F0E8',
      accent:  '#AAFF00',
      accent2: '#00FFAA',
      muted:   '#3A4A3A',
      rule:    'rgba(170,255,0,0.15)',
    },
    typography: {
      display: 'Barlow Condensed',
      body: 'Barlow',
      displayWeight: '700',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;800&family=Barlow:wght@300;400;500&display=swap',
    },
    motion: 'Oscilación de ondas: elementos de fondo que simulan waveforms CSS animadas. Headlines que "sintonizano" de ruido estático a texto claro. Frecuencia como narrativa.',
    layoutDNA: 'Waveforms SVG como decoración estructural. Secciones divididas por líneas de frecuencia. Testimonios como tracks de audio. El CTA es el "play".',
    aggro: {
      unlocked: true,
      description: 'AGGRO FREQUENCY: distorsión visual — texto que vibra, colores que pulsan al ritmo. Claims con decibelios. La conversión como el drop de un beat.',
    },
    previewColors: ['#050508', '#AAFF00', '#E8F0E8', '#00FFAA'],
    designerNote: 'FREQUENCY sintoniza la energía de la marca con la frecuencia exacta de su audiencia.',
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
  },

  {
    id: 'manifesto',
    name: 'MANIFESTO',
    tagline: 'Una marca que tiene algo que decir. Y lo dice sin disculparse.',
    type: 'web',
    mood: ['edge', 'editorial', 'brutalist'],
    palette: {
      bg:      '#0A0A08',
      surface: '#141410',
      text:    '#F0EDE8',
      accent:  '#F5C842',
      accent2: '#E83428',
      muted:   '#5A5850',
      rule:    'rgba(245,200,66,0.2)',
    },
    typography: {
      display: 'Freight Display',
      body: 'Karla',
      displayWeight: '300',
      style: 'mixed',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Karla:ital,wght@0,300;0,400;0,500;1,300&display=swap',
    },
    motion: 'Un scroll continuo que cuenta la historia de la marca. Cada sección es un párrafo del manifesto. Sin breaks — solo el texto y su peso.',
    layoutDNA: 'Una sola columna. Texto como arquitectura. Cada frase tiene su momento. Imágenes como puntuación, no como contenido. El mensaje es el diseño.',
    aggro: {
      unlocked: true,
      description: 'AGGRO MANIFESTO: el texto confronta directamente. El primer párrafo es una acusación a la industria. La marca como movimiento, no como empresa.',
    },
    previewColors: ['#0A0A08', '#F5C842', '#F0EDE8', '#E83428'],
    designerNote: 'MANIFESTO es para marcas que tienen convicción, no solo productos.',
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
  },

  {
    id: 'velocity',
    name: 'VELOCITY',
    tagline: 'Velocidad como valor. Rendimiento como estética.',
    type: 'web',
    mood: ['edge', 'vibrant', 'brutalist'],
    palette: {
      bg:      '#0A0A0A',
      surface: '#161616',
      text:    '#F8F8F8',
      accent:  '#FF0000',
      accent2: '#FFFFFF',
      muted:   '#444444',
      rule:    'rgba(255,0,0,0.25)',
    },
    typography: {
      display: 'Oswald',
      body: 'Barlow Condensed',
      displayWeight: '700',
      style: 'sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700;1,600&display=swap',
    },
    motion: 'Velocidad como animación: todo entra desde el borde del viewport a 60fps. Hover activa speed-lines CSS. El scroll acelera la narrativa. Nunca hay tiempo que perder.',
    layoutDNA: 'Cortes diagonales en cada sección. Tipografía que sangra fuera del viewport. Números grandes. Stats de rendimiento como headlines. La velocidad es el producto.',
    aggro: {
      unlocked: true,
      description: 'AGGRO VELOCITY: rojo sangre total. Performance claims extremos. Antes/después sin contexto — los números hablan solos. La web como campo de batalla.',
    },
    previewColors: ['#0A0A0A', '#FF0000', '#F8F8F8', '#161616'],
    designerNote: 'VELOCITY es para marcas que entienden que el rendimiento es el argumento más honesto.',
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
  return `── THEME: ${theme.name} [${mode}] ──
Tagline del tema: "${theme.tagline}"
Paleta:
  bg: ${theme.palette.bg} | surface: ${theme.palette.surface}
  text: ${theme.palette.text} | accent: ${theme.palette.accent}
  accent2: ${theme.palette.accent2} | muted: ${theme.palette.muted}
  rule (borders): ${theme.palette.rule}
Tipografía:
  Display: ${theme.typography.display} (weight: ${theme.typography.displayWeight})
  Body: ${theme.typography.body}
  Google Fonts: ${theme.typography.googleFontsUrl}
Motion: ${theme.motion}
Layout DNA: ${theme.layoutDNA}
Filosofía de diseño: ${theme.designerNote}
${aggro ? `\n⚡ MODO AGGRO ACTIVADO:\n${theme.aggro.description}\nPUSHA los límites. El cliente aceptó el riesgo. No te contengas.` : ''}`;
}
