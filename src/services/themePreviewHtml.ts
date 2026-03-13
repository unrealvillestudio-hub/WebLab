// ── themePreviewHtml.ts ───────────────────────────────────────────────────────
// WebLab v3.0 — Theme Preview HTML Generators
// buildCardPreviewHTML → 800×600 iframe thumbnail (rendered at ~0.25× scale)
// buildFullPreviewHTML → full scrollable page, type-aware
//   ecommerce  → product-forward shop page
//   landing    → conversion-focused page
//   web        → institutional/brand page
//   blog       → content/article page
// ─────────────────────────────────────────────────────────────────────────────

import type { ThemeIdentity } from '../config/themeCatalog';

// ── Picsum helpers ────────────────────────────────────────────────────────────
const IMG = (seed: number | string, w = 400, h = 300) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// Themed seed groups for consistent visuals
const S = {
  prod:    [101,102,103,104,105,106,107,108,109,110,111,112],
  hero:    [201,202,203,204,205,206],
  article: [301,302,303,304,305,306],
  person:  [401,402,403,404],
  scene:   [501,502,503,504],
};

// ── Font helpers ──────────────────────────────────────────────────────────────
function ff(theme: ThemeIdentity) {
  const sans = ['sans','display','mono'].includes(theme.typography.style);
  return {
    d: `'${theme.typography.display}',${sans ? 'system-ui,sans-serif' : 'Georgia,serif'}`,
    b: `'${theme.typography.body}',system-ui,sans-serif`,
    w: theme.typography.displayWeight,
    url: theme.typography.googleFontsUrl,
  };
}

const op = (theme: ThemeIdentity) => theme.structure.colorMode === 'light' ? '0.72' : '0.62';

// ── Base CSS reset ────────────────────────────────────────────────────────────
const R = `*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}body{overflow-x:hidden;}img{display:block;max-width:100%;}a{text-decoration:none;color:inherit;}button{cursor:pointer;}.sr{opacity:0;transform:translateY(20px);transition:opacity .65s ease,transform .65s ease;}.sr-vis{opacity:1;transform:translateY(0);}`;
const SR = `document.addEventListener('DOMContentLoaded',()=>{const e=document.querySelectorAll('.sr'),o=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('sr-vis');o.unobserve(en.target);}});},{threshold:0.1});e.forEach(el=>o.observe(el));});`;

// ─────────────────────────────────────────────────────────────────────────────
// CARD PREVIEW HTML  (800 × 600  — shown at ~0.25× in thumbnails)
// ─────────────────────────────────────────────────────────────────────────────

export function buildCardPreviewHTML(theme: ThemeIdentity): string {
  const p   = theme.palette;
  const f   = ff(theme);
  const o   = op(theme);
  const h   = theme.structure.headerStyle;
  const cl  = theme.structure.cardLayout;
  let body  = '';

  if (theme.type === 'ecommerce') body = cardEcom(p, f, o, h, cl);
  else if (theme.type === 'landing') body = cardLanding(p, f, o, h);
  else if (theme.type === 'blog') body = cardBlog(p, f, o, cl);
  else body = cardWeb(p, f, o, h, cl);

  return `<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=800"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${f.url}" rel="stylesheet">
<style>${R}body{width:800px;background:${p.bg};color:${p.text};font-family:${f.b};}::-webkit-scrollbar{display:none;}</style>
</head><body>${body}</body></html>`;
}

// ── E-COMMERCE card (800×600) ─────────────────────────────────────────────────
function cardEcom(p: ThemeIdentity['palette'], f: ReturnType<typeof ff>, _o: string, h: string, cl: string): string {
  const isSplit = h === 'hero-split';
  const isText  = h === 'hero-text-only' || h === 'hero-minimal';

  const nav = `<nav style="height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:${p.surface};border-bottom:1px solid ${p.rule};">
    <span style="font-family:${f.d};font-size:1rem;font-weight:${f.w};color:${p.text};">STORE</span>
    <div style="display:flex;gap:22px;">${['Colecciones','Nuevo','Sale'].map(l=>`<a style="font-family:${f.b};font-size:0.72rem;color:${p.text};opacity:.65;">${l}</a>`).join('')}</div>
    <div style="display:flex;gap:14px;align-items:center;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${p.text}" stroke-width="2" opacity=".65"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <div style="position:relative;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${p.text}" stroke-width="2" opacity=".65"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg><div style="position:absolute;top:-5px;right:-6px;width:13px;height:13px;background:${p.accent};border-radius:50%;font-family:${f.b};font-size:8px;font-weight:700;color:${p.bg};display:flex;align-items:center;justify-content:center;">2</div></div>
    </div>
  </nav>`;

  let hero = '';
  if (isSplit) {
    hero = `<section style="display:grid;grid-template-columns:1fr 1fr;height:204px;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:0 36px;background:${p.bg};">
        <p style="font-family:${f.b};font-size:0.52rem;letter-spacing:.24em;text-transform:uppercase;color:${p.accent};margin-bottom:10px;">Nueva Colección</p>
        <h1 style="font-family:${f.d};font-size:2.1rem;font-weight:${f.w};line-height:1.05;color:${p.text};margin-bottom:12px;">Producto<br/><span style="color:${p.accent};">Destacado</span></h1>
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
          <span style="font-family:${f.d};font-size:1.5rem;font-weight:${f.w};color:${p.accent};">$89.99</span>
          <span style="font-family:${f.b};font-size:0.65rem;color:${p.muted};text-decoration:line-through;">$120.00</span>
        </div>
        <button style="background:${p.accent};color:${p.bg};border:none;padding:9px 22px;font-family:${f.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;width:fit-content;">Comprar Ahora →</button>
      </div>
      <div style="overflow:hidden;"><img src="${IMG(S.prod[0],400,204)}" style="width:100%;height:100%;object-fit:cover;" alt=""/></div>
    </section>`;
  } else if (isText) {
    hero = `<section style="height:204px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 60px;background:${p.bg};">
      <p style="font-family:${f.b};font-size:0.52rem;letter-spacing:.28em;text-transform:uppercase;color:${p.accent};margin-bottom:10px;">Colección Exclusiva</p>
      <h1 style="font-family:${f.d};font-size:2.8rem;font-weight:${f.w};line-height:1.0;color:${p.text};margin-bottom:14px;letter-spacing:-.03em;">Todo<br/><span style="color:${p.accent};">Comienza Aquí</span></h1>
      <div style="display:flex;gap:12px;">
        <button style="background:${p.accent};color:${p.bg};border:none;padding:9px 28px;font-family:${f.b};font-size:0.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Colección</button>
        <button style="background:transparent;color:${p.text};border:1px solid ${p.rule};padding:9px 20px;font-family:${f.b};font-size:0.65rem;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Buscar</button>
      </div>
    </section>`;
  } else {
    hero = `<section style="position:relative;height:204px;overflow:hidden;display:flex;align-items:center;padding:0 40px;">
      <img src="${IMG(S.hero[0],800,204)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" alt=""/>
      <div style="position:absolute;inset:0;background:linear-gradient(to right,${p.bg}F2,${p.bg}80 62%,transparent);"></div>
      <div style="position:relative;z-index:2;max-width:340px;">
        <p style="font-family:${f.b};font-size:0.52rem;letter-spacing:.24em;text-transform:uppercase;color:${p.accent};margin-bottom:10px;">Colección Verano</p>
        <h1 style="font-family:${f.d};font-size:2.2rem;font-weight:${f.w};line-height:1.05;color:${p.text};margin-bottom:14px;letter-spacing:-.02em;">Lo Mejor<br/><em style="color:${p.accent};font-style:normal;">Está Aquí.</em></h1>
        <button style="background:${p.accent};color:${p.bg};border:none;padding:9px 22px;font-family:${f.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Comprar Ahora</button>
      </div>
    </section>`;
  }

  // Product grid — varies by cardLayout
  const pc = (seed: number, name: string, price: string, badge?: string) => `
    <div style="background:${p.bg};border:1px solid ${p.rule};border-radius:8px;overflow:hidden;">
      <div style="position:relative;aspect-ratio:${cl==='grid-masonry'?'3/4':'4/3'};overflow:hidden;">
        <img src="${IMG(seed,300,225)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
        ${badge ? `<span style="position:absolute;top:7px;left:7px;background:${p.accent};color:${p.bg};font-family:${f.b};font-size:8px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;padding:2px 7px;border-radius:2px;">${badge}</span>` : ''}
      </div>
      <div style="padding:9px 11px;">
        <p style="font-family:${f.b};font-size:0.52rem;letter-spacing:.14em;text-transform:uppercase;color:${p.muted};margin-bottom:3px;">Colección</p>
        <p style="font-family:${f.b};font-size:0.72rem;font-weight:600;color:${p.text};margin-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-family:${f.d};font-size:0.9rem;font-weight:700;color:${p.accent};">${price}</span>
          <button style="background:${p.accent};color:${p.bg};border:none;padding:4px 9px;font-family:${f.b};font-size:8px;font-weight:700;letter-spacing:.05em;border-radius:3px;">+ Agregar</button>
        </div>
      </div>
    </div>`;

  const isHoriz = cl === 'scroll-horizontal';
  const isMasonry = cl === 'grid-masonry';

  const products = `<section style="padding:18px 32px;background:${p.surface};">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px;">
      <h2 style="font-family:${f.d};font-size:1.1rem;font-weight:${f.w};color:${p.text};">Nuevos Arrivals</h2>
      <a style="font-family:${f.b};font-size:0.62rem;letter-spacing:.1em;text-transform:uppercase;color:${p.accent};">Ver todos →</a>
    </div>
    <div style="${isHoriz ? `display:flex;gap:10px;overflow-x:auto;padding-bottom:4px;` : isMasonry ? `columns:4;gap:10px;` : `display:grid;grid-template-columns:repeat(4,1fr);gap:10px;`}">
      ${pc(S.prod[1],'Producto Signature','$89.99','Nuevo')}
      ${pc(S.prod[2],'Edición Limitada','$64.99')}
      ${pc(S.prod[3],'Essential Vol.2','$49.99','−30%')}
      ${pc(S.prod[4],'Colección Core','$74.99')}
    </div>
  </section>`;

  const promo = `<section style="padding:12px 32px;background:${p.accent};display:flex;align-items:center;justify-content:space-between;">
    <p style="font-family:${f.d};font-size:0.9rem;font-weight:${f.w};color:${p.bg};">✦ Envío Gratis en órdenes +$50 · Devolución 30 días</p>
    <a style="font-family:${f.b};font-size:0.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${p.bg};border:1px solid ${p.bg}70;padding:5px 14px;border-radius:3px;">Ver Ofertas</a>
  </section>`;

  return nav + hero + products + promo;
}

// ── LANDING card (800×600) ────────────────────────────────────────────────────
function cardLanding(p: ThemeIdentity['palette'], f: ReturnType<typeof ff>, o: string, h: string): string {
  const isCenter = h !== 'hero-split';

  const nav = `<nav style="height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:${p.surface};border-bottom:1px solid ${p.rule};">
    <span style="font-family:${f.d};font-size:1rem;font-weight:${f.w};color:${p.text};">BRAND</span>
    <button style="background:${p.accent};color:${p.bg};border:none;padding:7px 18px;font-family:${f.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Diagnóstico Gratuito →</button>
  </nav>`;

  const hero = isCenter
    ? `<section style="padding:44px 64px 36px;background:${p.bg};text-align:center;">
        <div style="display:inline-flex;align-items:center;gap:8px;background:${p.accent}18;border:1px solid ${p.accent}40;border-radius:100px;padding:4px 14px;margin-bottom:18px;">
          <span style="width:6px;height:6px;background:${p.accent};border-radius:50%;display:inline-block;"></span>
          <span style="font-family:${f.b};font-size:0.58rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${p.accent};">Exclusivo · Solo 20 lugares</span>
        </div>
        <h1 style="font-family:${f.d};font-size:2.9rem;font-weight:${f.w};line-height:1.02;color:${p.text};margin-bottom:14px;letter-spacing:-.03em;">Cada día sin esto,<br/><span style="color:${p.accent};">alguien paga el precio.</span></h1>
        <p style="font-family:${f.b};font-size:0.9rem;line-height:1.7;color:${p.text};opacity:${o};max-width:500px;margin:0 auto 22px;">El sistema que le falta a tu negocio existe. La pregunta no es si lo necesitas — es cuánto te ha costado no tenerlo.</p>
        <div style="display:flex;gap:12px;justify-content:center;">
          <button style="background:${p.accent};color:${p.bg};border:none;padding:12px 28px;font-family:${f.b};font-size:0.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Solicitar Diagnóstico →</button>
          <button style="background:transparent;color:${p.text};border:1px solid ${p.rule};padding:12px 20px;font-family:${f.b};font-size:0.72rem;letter-spacing:.06em;text-transform:uppercase;border-radius:4px;opacity:.75;">Ver casos →</button>
        </div>
      </section>`
    : `<section style="display:grid;grid-template-columns:1fr 1fr;height:220px;">
        <div style="display:flex;flex-direction:column;justify-content:center;padding:0 36px;background:${p.bg};">
          <p style="font-family:${f.b};font-size:0.5rem;letter-spacing:.28em;text-transform:uppercase;color:${p.accent};margin-bottom:10px;">Resultado Garantizado</p>
          <h1 style="font-family:${f.d};font-size:2rem;font-weight:${f.w};line-height:1.05;color:${p.text};margin-bottom:12px;">El sistema que tu negocio<br/><span style="color:${p.accent};">necesitaba ayer.</span></h1>
          <p style="font-family:${f.b};font-size:0.72rem;line-height:1.65;color:${p.text};opacity:${o};margin-bottom:16px;">Sin implementación. Sin excusas. En 72 horas.</p>
          <button style="background:${p.accent};color:${p.bg};border:none;padding:10px 24px;font-family:${f.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;width:fit-content;">Empezar Ahora →</button>
        </div>
        <div style="position:relative;overflow:hidden;background:${p.surface};">
          <img src="${IMG(S.scene[0],400,220)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
          <div style="position:absolute;inset:0;background:${p.bg}30;"></div>
        </div>
      </section>`;

  const stats = `<section style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;background:${p.surface};border-top:1px solid ${p.rule};border-bottom:1px solid ${p.rule};">
    ${[['98%','Satisfacción'],['3×','Más rápido'],['500+','Clientes'],['24h','Respuesta']].map(([n,l],i)=>`
      <div style="padding:16px;text-align:center;${i>0?`border-left:1px solid ${p.rule};`:''}">
        <div style="font-family:${f.d};font-size:1.8rem;font-weight:${f.w};color:${p.accent};line-height:1;">${n}</div>
        <div style="font-family:${f.b};font-size:0.58rem;letter-spacing:.12em;text-transform:uppercase;color:${p.muted};margin-top:4px;">${l}</div>
      </div>`).join('')}
  </section>`;

  const features = `<section style="padding:18px 32px;background:${p.bg};">
    <p style="font-family:${f.b};font-size:0.58rem;letter-spacing:.2em;text-transform:uppercase;color:${p.muted};margin-bottom:14px;text-align:center;">Lo que incluye</p>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      ${[['Diagnóstico Completo','Análisis de brechas en 48h con recomendaciones accionables.'],['Implementación Guiada','No te dejamos solo. Cada paso tiene un protocolo.'],['Resultados Medibles','KPIs definidos desde el día 1. Sin excusas sin datos.']].map(([title,desc])=>`
        <div style="padding:14px;background:${p.surface};border:1px solid ${p.rule};border-radius:8px;">
          <div style="width:28px;height:28px;background:${p.accent}22;border-radius:6px;display:flex;align-items:center;justify-content:center;margin-bottom:8px;">
            <div style="width:14px;height:14px;background:${p.accent};border-radius:2px;"></div>
          </div>
          <p style="font-family:${f.b};font-size:0.72rem;font-weight:700;color:${p.text};margin-bottom:4px;">${title}</p>
          <p style="font-family:${f.b};font-size:0.62rem;line-height:1.55;color:${p.text};opacity:${o};">${desc}</p>
        </div>`).join('')}
    </div>
  </section>`;

  return nav + hero + stats + features;
}

// ── WEB card (800×600) ────────────────────────────────────────────────────────
function cardWeb(p: ThemeIdentity['palette'], f: ReturnType<typeof ff>, o: string, h: string, cl: string): string {
  const nav = `<nav style="height:48px;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:${p.surface};border-bottom:1px solid ${p.rule};">
    <span style="font-family:${f.d};font-size:1.05rem;font-weight:${f.w};color:${p.text};">STUDIO</span>
    <div style="display:flex;gap:24px;">${['Servicios','Portfolio','Nosotros','Blog','Contacto'].map(l=>`<a style="font-family:${f.b};font-size:0.7rem;color:${p.text};opacity:.65;">${l}</a>`).join('')}</div>
    <button style="background:${p.accent};color:${p.bg};border:none;padding:7px 18px;font-family:${f.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Contactar →</button>
  </nav>`;

  let hero = '';
  if (h === 'hero-split') {
    hero = `<section style="display:grid;grid-template-columns:1fr 1fr;height:204px;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:0 32px;background:${p.bg};">
        <p style="font-family:${f.b};font-size:0.5rem;letter-spacing:.26em;text-transform:uppercase;color:${p.accent};margin-bottom:10px;">Agencia de Diseño</p>
        <h1 style="font-family:${f.d};font-size:2rem;font-weight:${f.w};line-height:1.05;color:${p.text};margin-bottom:12px;letter-spacing:-.02em;">Diseño que<br/><span style="color:${p.accent};">Habla.</span></h1>
        <p style="font-family:${f.b};font-size:0.7rem;line-height:1.65;color:${p.text};opacity:${o};margin-bottom:14px;">Identidades visuales para marcas que quieren diferenciarse de verdad.</p>
        <div style="display:flex;gap:10px;">
          <button style="background:${p.accent};color:${p.bg};border:none;padding:8px 18px;font-family:${f.b};font-size:0.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Ver Portfolio</button>
          <button style="background:transparent;color:${p.text};border:1px solid ${p.rule};padding:8px 14px;font-family:${f.b};font-size:0.62rem;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;opacity:.7;">Nosotros</button>
        </div>
      </div>
      <div style="overflow:hidden;"><img src="${IMG(S.scene[1],400,204)}" style="width:100%;height:100%;object-fit:cover;" alt=""/></div>
    </section>`;
  } else if (h === 'hero-text-only' || h === 'hero-minimal') {
    hero = `<section style="height:204px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 80px;background:${p.bg};">
      <p style="font-family:${f.b};font-size:0.5rem;letter-spacing:.28em;text-transform:uppercase;color:${p.accent};margin-bottom:12px;">Identidad · Diseño · Estrategia</p>
      <h1 style="font-family:${f.d};font-size:3.2rem;font-weight:${f.w};line-height:0.96;color:${p.text};margin-bottom:16px;letter-spacing:-.04em;">Ideas que<br/><span style="color:${p.accent};">Escalan</span></h1>
      <p style="font-family:${f.b};font-size:0.78rem;line-height:1.7;color:${p.text};opacity:${o};margin-bottom:18px;">De startup a categoría.</p>
      <button style="background:${p.accent};color:${p.bg};border:none;padding:10px 28px;font-family:${f.b};font-size:0.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Portfolio</button>
    </section>`;
  } else {
    hero = `<section style="position:relative;height:204px;overflow:hidden;display:flex;align-items:center;padding:0 40px;">
      <img src="${IMG(S.hero[2],800,204)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" alt=""/>
      <div style="position:absolute;inset:0;background:linear-gradient(to right,${p.bg}F4,${p.bg}80 62%,transparent);"></div>
      <div style="position:relative;z-index:2;max-width:380px;">
        <p style="font-family:${f.b};font-size:0.5rem;letter-spacing:.26em;text-transform:uppercase;color:${p.accent};margin-bottom:10px;">Agencia Full-Service</p>
        <h1 style="font-family:${f.d};font-size:2.3rem;font-weight:${f.w};line-height:1.04;color:${p.text};margin-bottom:14px;letter-spacing:-.02em;">Tu Marca.<br/><span style="color:${p.accent};">Sin Límites.</span></h1>
        <button style="background:${p.accent};color:${p.bg};border:none;padding:9px 22px;font-family:${f.b};font-size:0.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Portfolio</button>
      </div>
    </section>`;
  }

  // Services section varies by cardLayout
  const isList = cl === 'list-editorial';
  const services = isList
    ? `<section style="padding:18px 32px;background:${p.surface};">
        ${['Identidad Visual','Diseño Web','Estrategia de Marca','Campañas Digitales'].map((s,i)=>`
          <div style="display:flex;gap:20px;align-items:flex-start;padding:10px 0;${i>0?`border-top:1px solid ${p.rule};`:''}">
            <span style="font-family:${f.b};font-size:0.6rem;color:${p.muted};opacity:.5;padding-top:5px;">0${i+1}</span>
            <div style="flex:1;">
              <p style="font-family:${f.d};font-size:1rem;font-weight:${f.w};color:${p.text};margin-bottom:3px;">${s}</p>
              <p style="font-family:${f.b};font-size:0.65rem;line-height:1.55;color:${p.text};opacity:${o};">Soluciones diseñadas para tu industria con resultados medibles.</p>
            </div>
            <span style="color:${p.accent};font-size:1.1rem;margin-top:2px;">→</span>
          </div>`).join('')}
      </section>`
    : `<section style="padding:18px 32px;background:${p.surface};">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px;">
          <h2 style="font-family:${f.d};font-size:1.1rem;font-weight:${f.w};color:${p.text};">Servicios</h2>
          <a style="font-family:${f.b};font-size:0.6rem;letter-spacing:.1em;text-transform:uppercase;color:${p.accent};">Ver todos →</a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          ${[['Identidad Visual','Sistemas de marca completos.'],['Diseño Web','Experiencias digitales.'],['Estrategia','Posicionamiento y contenido.']].map(([title,desc])=>`
            <div style="padding:14px;background:${p.bg};border:1px solid ${p.rule};border-radius:8px;">
              <div style="width:24px;height:24px;background:${p.accent}22;border-radius:5px;margin-bottom:8px;"></div>
              <p style="font-family:${f.b};font-size:0.72rem;font-weight:700;color:${p.text};margin-bottom:4px;">${title}</p>
              <p style="font-family:${f.b};font-size:0.62rem;line-height:1.5;color:${p.text};opacity:${o};">${desc}</p>
            </div>`).join('')}
        </div>
      </section>`;

  const stats = `<section style="display:grid;grid-template-columns:repeat(4,1fr);background:${p.bg};border-top:1px solid ${p.rule};">
    ${[['120+','Proyectos'],['8','Años'],['98%','Satisfacción'],['40+','Marcas']].map(([n,l],i)=>`
      <div style="padding:14px;text-align:center;${i>0?`border-left:1px solid ${p.rule};`:''}">
        <div style="font-family:${f.d};font-size:1.7rem;font-weight:${f.w};color:${p.accent};line-height:1;">${n}</div>
        <div style="font-family:${f.b};font-size:0.55rem;letter-spacing:.12em;text-transform:uppercase;color:${p.muted};margin-top:3px;">${l}</div>
      </div>`).join('')}
  </section>`;

  return nav + hero + services + stats;
}

// ── BLOG card (800×600) ───────────────────────────────────────────────────────
function cardBlog(p: ThemeIdentity['palette'], f: ReturnType<typeof ff>, _o: string, cl: string): string {
  const isMagazine = cl === 'magazine';
  const nav = `<nav style="height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:${p.surface};border-bottom:1px solid ${p.rule};">
    <span style="font-family:${f.d};font-size:1rem;font-weight:${f.w};color:${p.text};">THE JOURNAL</span>
    <div style="display:flex;gap:16px;">${['Estrategia','Diseño','Tecnología','Cultura'].map(l=>`<a style="font-family:${f.b};font-size:0.7rem;color:${p.text};opacity:.62;">${l}</a>`).join('')}</div>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${p.text}" stroke-width="2" opacity=".65"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  </nav>`;

  const featured = isMagazine
    ? `<section style="display:grid;grid-template-columns:2fr 1fr;height:200px;background:${p.surface};">
        <div style="position:relative;overflow:hidden;">
          <img src="${IMG(S.article[0],533,200)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
          <div style="position:absolute;inset:0;background:linear-gradient(to top,${p.bg}E8,transparent 50%);"></div>
          <div style="position:absolute;bottom:14px;left:14px;right:14px;">
            <span style="display:inline-block;background:${p.accent};color:${p.bg};font-family:${f.b};font-size:0.5rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:2px 8px;border-radius:2px;margin-bottom:6px;">Estrategia</span>
            <h2 style="font-family:${f.d};font-size:1.2rem;font-weight:${f.w};line-height:1.2;color:#fff;">Cómo construir un sistema de contenidos que sobreviva al equipo</h2>
          </div>
        </div>
        <div style="padding:14px;display:flex;flex-direction:column;gap:10px;background:${p.bg};">
          ${S.article.slice(1,4).map((s,i)=>`
            <div style="display:flex;gap:8px;align-items:flex-start;">
              <img src="${IMG(s,72,72)}" style="width:52px;height:52px;border-radius:4px;object-fit:cover;flex-shrink:0;" alt=""/>
              <div>
                <span style="font-family:${f.b};font-size:0.48rem;letter-spacing:.1em;text-transform:uppercase;color:${p.accent};">Diseño</span>
                <p style="font-family:${f.b};font-size:0.65rem;font-weight:600;color:${p.text};line-height:1.3;margin-top:2px;">Artículo número ${i+1} sobre el tema</p>
              </div>
            </div>`).join('')}
        </div>
      </section>`
    : `<section style="position:relative;height:200px;overflow:hidden;">
        <img src="${IMG(S.article[0],800,200)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
        <div style="position:absolute;inset:0;background:linear-gradient(to top,${p.bg}F0,transparent 45%);"></div>
        <div style="position:absolute;top:12px;left:14px;"><span style="background:${p.accent};color:${p.bg};font-family:${f.b};font-size:0.5rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:2px 8px;border-radius:2px;">Destacado</span></div>
        <div style="position:absolute;bottom:14px;left:14px;right:14px;max-width:580px;">
          <h2 style="font-family:${f.d};font-size:1.5rem;font-weight:${f.w};line-height:1.15;color:#fff;margin-bottom:6px;">Cómo construir un sistema de contenidos que sobreviva al equipo</h2>
          <div style="display:flex;align-items:center;gap:10px;">
            <img src="${IMG(S.person[0],32,32)}" style="width:22px;height:22px;border-radius:50%;object-fit:cover;" alt=""/>
            <span style="font-family:${f.b};font-size:0.58rem;color:#ffffffaa;">María G. · 8 min · Estrategia</span>
          </div>
        </div>
      </section>`;

  const articles = `<section style="padding:14px 32px;background:${p.bg};">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;">
      <h3 style="font-family:${f.d};font-size:0.9rem;font-weight:${f.w};color:${p.text};">Lo Más Reciente</h3>
      <a style="font-family:${f.b};font-size:0.58rem;letter-spacing:.1em;text-transform:uppercase;color:${p.accent};">Ver todos →</a>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      ${S.article.slice(1,4).map((s,i)=>`
        <div style="background:${p.surface};border:1px solid ${p.rule};border-radius:8px;overflow:hidden;">
          <img src="${IMG(s,260,130)}" style="width:100%;height:88px;object-fit:cover;" alt=""/>
          <div style="padding:9px 11px;">
            <span style="font-family:${f.b};font-size:0.48rem;letter-spacing:.1em;text-transform:uppercase;color:${p.accent};">Diseño</span>
            <p style="font-family:${f.b};font-size:0.68rem;font-weight:600;color:${p.text};line-height:1.3;margin-top:3px;margin-bottom:4px;">Artículo ${i+1}: La guía definitiva</p>
            <p style="font-family:${f.b};font-size:0.55rem;color:${p.muted};">4 min · María G.</p>
          </div>
        </div>`).join('')}
    </div>
  </section>`;

  const tags = `<section style="padding:10px 32px;background:${p.surface};border-top:1px solid ${p.rule};display:flex;align-items:center;gap:8px;">
    <span style="font-family:${f.b};font-size:0.55rem;color:${p.muted};letter-spacing:.1em;text-transform:uppercase;">Categorías:</span>
    ${['Estrategia','Diseño','IA & Tech','Marketing','Cultura'].map(t=>`<span style="font-family:${f.b};font-size:0.58rem;font-weight:600;padding:3px 9px;background:${p.bg};border:1px solid ${p.rule};border-radius:100px;color:${p.text};">${t}</span>`).join('')}
  </section>`;

  return nav + featured + articles + tags;
}


// ─────────────────────────────────────────────────────────────────────────────
// FULL PREVIEW HTML  (complete scrollable page — used in dual device preview)
// ─────────────────────────────────────────────────────────────────────────────

export function buildFullPreviewHTML(theme: ThemeIdentity): string {
  if (theme.type === 'ecommerce') return fullEcom(theme);
  if (theme.type === 'landing')   return fullLanding(theme);
  if (theme.type === 'blog')      return fullBlog(theme);
  return fullWeb(theme);
}

// ── Shared scripts ────────────────────────────────────────────────────────────
function scripts(theme: ThemeIdentity) {
  const hasCarousel = theme.structure.enhancers.includes('image-carousel');
  const hasParallax = theme.structure.enhancers.includes('parallax');
  const hasSticky   = theme.structure.enhancers.includes('sticky-header');
  const hasFloat    = theme.structure.enhancers.includes('floating-cta');

  return `
    ${SR}
    ${hasCarousel ? `let _ci=0;const _sl=document.querySelectorAll('.cs');function _nx(){_sl[_ci].style.opacity='0';_ci=(_ci+1)%_sl.length;_sl[_ci].style.opacity='1';}if(_sl.length)setInterval(_nx,3800);` : ''}
    ${hasParallax ? `window.addEventListener('scroll',()=>{document.querySelectorAll('.pbg').forEach(el=>{el.style.transform='translateY('+(window.scrollY*.28)+'px)';});});` : ''}
    ${hasSticky ? `const _nav=document.getElementById('mnav');if(_nav)window.addEventListener('scroll',()=>{_nav.style.backdropFilter=window.scrollY>60?'blur(20px)':'none';_nav.style.boxShadow=window.scrollY>60?'0 2px 24px rgba(0,0,0,.18)':'none';});` : ''}
    ${hasFloat ? `const _fab=document.getElementById('fab');if(_fab)window.addEventListener('scroll',()=>{_fab.style.opacity=window.scrollY>window.innerHeight*.3?'1':'0';_fab.style.pointerEvents=window.scrollY>window.innerHeight*.3?'all':'none';});` : ''}
  `;
}

function htmlWrap(theme: ThemeIdentity, body: string) {
  const p = theme.palette;
  const f = ff(theme);
  const hasFloat = theme.structure.enhancers.includes('floating-cta');
  return `<!DOCTYPE html>
<html lang="es"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${theme.name} Preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${f.url}" rel="stylesheet">
<style>
${R}
body{background:${p.bg};color:${p.text};font-family:${f.b};}
::-webkit-scrollbar{width:6px;height:6px;}
::-webkit-scrollbar-track{background:${p.bg};}
::-webkit-scrollbar-thumb{background:${p.accent}50;border-radius:3px;}
</style></head><body>
${body}
${hasFloat ? `<button id="fab" style="position:fixed;bottom:1.8rem;right:1.8rem;z-index:999;background:${p.accent};color:${p.bg};border:none;padding:.8rem 1.8rem;font-family:${f.b};font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;border-radius:100px;box-shadow:0 8px 32px ${p.accent}60;opacity:0;transition:opacity .4s;pointer-events:none;">Solicitar ↑</button>` : ''}
<script>document.addEventListener('DOMContentLoaded',()=>{${scripts(theme)}});</script>
</body></html>`;
}

// ── FULL E-COMMERCE preview ───────────────────────────────────────────────────
function fullEcom(theme: ThemeIdentity): string {
  const p   = theme.palette;
  const f   = ff(theme);
  const o   = op(theme);
  const h   = theme.structure.headerStyle;
  const cl  = theme.structure.cardLayout;
  const hasSticky = theme.structure.enhancers.includes('sticky-header');

  const nav = `<nav id="mnav" style="position:${hasSticky?'sticky':'relative'};top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.1rem 6vw;background:${p.surface};border-bottom:1px solid ${p.rule};transition:backdrop-filter .3s,box-shadow .3s;">
    <div style="font-family:${f.d};font-size:1.2rem;font-weight:${f.w};color:${p.text};">STORE</div>
    <div style="display:flex;gap:2rem;">${['Inicio','Colecciones','Nuevo','Sale','Blog'].map(l=>`<a href="#" style="font-family:${f.b};font-size:.82rem;color:${p.text};opacity:.7;">${l}</a>`).join('')}</div>
    <div style="display:flex;gap:1.2rem;align-items:center;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${p.text}" stroke-width="2" opacity=".7"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <div style="position:relative;cursor:pointer;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${p.text}" stroke-width="2" opacity=".7"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <div style="position:absolute;top:-7px;right:-8px;width:16px;height:16px;background:${p.accent};border-radius:50%;font-family:${f.b};font-size:9px;font-weight:700;color:${p.bg};display:flex;align-items:center;justify-content:center;">2</div>
      </div>
    </div>
  </nav>`;

  // Promo bar
  const promo = `<div style="background:${p.accent};padding:.6rem;text-align:center;font-family:${f.b};font-size:.72rem;font-weight:600;letter-spacing:.06em;color:${p.bg};">✦ Envío Gratis en órdenes +$50 &nbsp;·&nbsp; Devolución 30 días &nbsp;·&nbsp; Pago seguro SSL</div>`;

  // Hero
  let hero = '';
  if (h === 'hero-split') {
    hero = `<section style="display:grid;grid-template-columns:1fr 1fr;min-height:90vh;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:8vw 5vw 8vw 6vw;background:${p.bg};">
        <p class="sr" style="font-family:${f.b};font-size:.65rem;letter-spacing:.28em;text-transform:uppercase;color:${p.accent};margin-bottom:1.4rem;">Nueva Colección · 2026</p>
        <h1 class="sr" style="font-family:${f.d};font-size:clamp(2.4rem,4.5vw,4.2rem);font-weight:${f.w};line-height:1.04;color:${p.text};margin-bottom:1.4rem;letter-spacing:-.02em;">El Producto<br/>que Define<br/><em style="color:${p.accent};font-style:normal;">Tu Estilo.</em></h1>
        <p class="sr" style="font-family:${f.b};font-size:1rem;line-height:1.75;color:${p.text};opacity:${o};margin-bottom:.8rem;">Formulado para los que exigen más. Sin compromisos en ingredientes, sin límites en resultados.</p>
        <div style="display:flex;align-items:center;gap:1.2rem;margin-bottom:2rem;">
          <span style="font-family:${f.d};font-size:2.2rem;font-weight:${f.w};color:${p.accent};">$89.99</span>
          <div>
            <del style="font-family:${f.b};font-size:.8rem;color:${p.muted};">$130.00</del>
            <span style="display:block;font-family:${f.b};font-size:.62rem;font-weight:700;color:${p.accent};text-transform:uppercase;letter-spacing:.08em;">Ahorras $40.01</span>
          </div>
        </div>
        <div class="sr" style="display:flex;gap:1rem;margin-bottom:2rem;">
          <button style="background:${p.accent};color:${p.bg};border:none;padding:1rem 2.4rem;font-family:${f.b};font-size:.85rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Comprar Ahora</button>
          <button style="background:transparent;color:${p.text};border:1px solid ${p.rule};padding:1rem 1.8rem;font-family:${f.b};font-size:.82rem;font-weight:500;letter-spacing:.06em;text-transform:uppercase;border-radius:4px;">Ver Colección</button>
        </div>
        <div style="display:flex;gap:2rem;">
          ${['Envío en 24h','Devolución 30d','Pago Seguro'].map(t=>`<div style="display:flex;align-items:center;gap:.5rem;"><div style="width:16px;height:16px;background:${p.accent}22;border-radius:50%;display:flex;align-items:center;justify-content:center;"><div style="width:6px;height:6px;background:${p.accent};border-radius:50%;"></div></div><span style="font-family:${f.b};font-size:.7rem;color:${p.text};opacity:${o};">${t}</span></div>`).join('')}
        </div>
      </div>
      <div style="position:relative;overflow:hidden;background:${p.surface};">
        <img src="${IMG(S.prod[0],600,800)}" style="width:100%;height:100%;object-fit:cover;" alt="Producto destacado"/>
        <div style="position:absolute;inset:0;background:${p.bg}15;"></div>
        <div class="sr" style="position:absolute;bottom:2rem;right:2rem;background:${p.bg};border:1px solid ${p.rule};border-radius:12px;padding:1rem;min-width:160px;">
          <div style="display:flex;gap:.3rem;margin-bottom:.4rem;">${[0,1,2,3,4].map(()=>`<div style="color:${p.accent};font-size:1rem;">★</div>`).join('')}</div>
          <p style="font-family:${f.b};font-size:.72rem;font-weight:700;color:${p.text};">4.9 / 5.0</p>
          <p style="font-family:${f.b};font-size:.62rem;color:${p.muted};">+2,847 reseñas</p>
        </div>
      </div>
    </section>`;
  } else {
    // cinematic / full-bleed
    hero = `<section style="position:relative;min-height:92vh;overflow:hidden;display:flex;align-items:center;padding:0 6vw;">
      <div class="pbg" style="position:absolute;inset:-20%;z-index:0;background:url('${IMG(S.hero[0],1400,900)}') center/cover no-repeat;"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to right,${p.bg}F4,${p.bg}C0 55%,${p.bg}40);"></div>
      <div style="position:relative;z-index:2;max-width:580px;">
        <p class="sr" style="font-family:${f.b};font-size:.65rem;letter-spacing:.28em;text-transform:uppercase;color:${p.accent};margin-bottom:1.5rem;">Colección Exclusiva</p>
        <h1 class="sr" style="font-family:${f.d};font-size:clamp(2.8rem,6vw,5.5rem);font-weight:${f.w};line-height:1.04;color:${p.text};margin-bottom:1.5rem;letter-spacing:-.02em;">Hecho Para<br/>Los Que<br/><em style="color:${p.accent};font-style:normal;">Saben.</em></h1>
        <p class="sr" style="font-family:${f.b};font-size:1.05rem;line-height:1.75;color:${p.text};opacity:${o};max-width:460px;margin-bottom:2.5rem;">No para todos. Para los que entienden la diferencia entre precio y valor.</p>
        <div class="sr" style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem;">
          <button style="background:${p.accent};color:${p.bg};border:none;padding:1rem 2.4rem;font-family:${f.b};font-size:.85rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Colección</button>
          <button style="background:transparent;color:${p.text};border:1px solid ${p.text}40;padding:1rem 2rem;font-family:${f.b};font-size:.82rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Más Vendidos</button>
        </div>
        <div class="sr" style="display:flex;gap:1.8rem;">
          ${['Envío en 24h','Devolución 30d','Pago Seguro'].map(t=>`<span style="font-family:${f.b};font-size:.72rem;color:${p.text};opacity:${o};">✓ ${t}</span>`).join('')}
        </div>
      </div>
    </section>`;
  }

  // Collection section with products
  const isHoriz = cl === 'scroll-horizontal';
  const pc = (seed: number, name: string, price: string, badge?: string) => `
    <div class="sr" style="background:${p.bg};border:1px solid ${p.rule};border-radius:10px;overflow:hidden;${isHoriz?'flex:0 0 280px;':''}" >
      <div style="position:relative;aspect-ratio:3/4;overflow:hidden;background:${p.surface};">
        <img src="${IMG(seed,280,373)}" style="width:100%;height:100%;object-fit:cover;transition:transform .5s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'" alt=""/>
        ${badge ? `<span style="position:absolute;top:10px;left:10px;background:${p.accent};color:${p.bg};font-family:${f.b};font-size:.6rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:3px;">${badge}</span>` : ''}
        <button style="position:absolute;bottom:10px;right:10px;background:${p.bg};color:${p.text};border:1px solid ${p.rule};width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1rem;transition:background .2s;" onmouseover="this.style.background='${p.accent}';this.style.color='${p.bg}'" onmouseout="this.style.background='${p.bg}';this.style.color='${p.text}'">♡</button>
      </div>
      <div style="padding:1rem 1.1rem;">
        <p style="font-family:${f.b};font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:${p.muted};margin-bottom:.3rem;">Colección 2026</p>
        <p style="font-family:${f.b};font-size:.9rem;font-weight:600;color:${p.text};margin-bottom:.6rem;">${name}</p>
        <div style="display:flex;gap:.3rem;margin-bottom:.6rem;">${[0,1,2,3,4].map(i=>`<div style="width:12px;height:12px;border-radius:50%;background:${i<4?p.accent:p.rule};"></div>`).join('')}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-family:${f.d};font-size:1.1rem;font-weight:${f.w};color:${p.accent};">${price}</span>
          <button style="background:${p.accent};color:${p.bg};border:none;padding:.5rem 1rem;font-family:${f.b};font-size:.72rem;font-weight:700;letter-spacing:.06em;border-radius:4px;transition:opacity .2s;" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">+ Agregar</button>
        </div>
      </div>
    </div>`;

  const collection = `<section id="collection" style="padding:6rem 6vw;background:${p.surface};">
    <div class="sr" style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3rem;">
      <div>
        <p style="font-family:${f.b};font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:${p.accent};margin-bottom:.5rem;">Recién Llegado</p>
        <h2 style="font-family:${f.d};font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:${f.w};color:${p.text};letter-spacing:-.02em;">Nueva Colección</h2>
      </div>
      <div style="display:flex;gap:.8rem;">
        ${['Todos','Nuevo','Sale','Kit'].map(t=>`<button style="background:transparent;border:1px solid ${p.rule};padding:.4rem 1rem;font-family:${f.b};font-size:.7rem;color:${p.muted};border-radius:100px;">${t}</button>`).join('')}
      </div>
    </div>
    <div style="${isHoriz ? `display:flex;gap:1.4rem;overflow-x:auto;padding-bottom:1rem;scroll-snap-type:x mandatory;cursor:grab;` : `display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.4rem;`}">
      ${pc(S.prod[1], 'Signature Collection', '$89.99', 'Nuevo')}
      ${pc(S.prod[2], 'Limited Edition Vol. 2', '$64.99', '−30%')}
      ${pc(S.prod[3], 'Essential Bundle', '$49.99')}
      ${pc(S.prod[4], 'Core Formula', '$74.99', 'Nuevo')}
      ${pc(S.prod[5], 'Premium Reserve', '$119.99')}
      ${pc(S.prod[6], 'Classic Edition', '$54.99')}
      ${pc(S.prod[7], 'Gift Set', '$99.99', 'Popular')}
      ${pc(S.prod[8], 'Trial Kit', '$29.99')}
    </div>
  </section>`;

  // Featured single product
  const featured = `<section id="product" style="display:grid;grid-template-columns:1fr 1fr;min-height:70vh;background:${p.bg};">
    <div style="overflow:hidden;position:relative;background:${p.surface};">
      <img src="${IMG(S.prod[9],600,700)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
    </div>
    <div style="display:flex;flex-direction:column;justify-content:center;padding:6rem 5vw;">
      <p class="sr" style="font-family:${f.b};font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;color:${p.accent};margin-bottom:1.2rem;">Producto del Mes</p>
      <h2 class="sr" style="font-family:${f.d};font-size:clamp(2rem,3.5vw,3rem);font-weight:${f.w};color:${p.text};margin-bottom:1rem;letter-spacing:-.02em;">Premium Reserve<br/>Formula 001</h2>
      <p class="sr" style="font-family:${f.b};font-size:.95rem;line-height:1.8;color:${p.text};opacity:${o};margin-bottom:2rem;">Formulado con 97% de ingredientes naturales activos. Resultados visibles en 14 días. El estándar al que todos aspiran pero pocos alcanzan.</p>
      <div class="sr" style="display:flex;gap:2rem;margin-bottom:2rem;">
        ${[['Ingredientes','97% Natural'],['Días','14 días'],['Reseñas','4.9★']].map(([l,v])=>`<div><p style="font-family:${f.b};font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:${p.muted};margin-bottom:.3rem;">${l}</p><p style="font-family:${f.d};font-size:1.2rem;font-weight:${f.w};color:${p.text};">${v}</p></div>`).join('')}
      </div>
      <div class="sr" style="display:flex;align-items:center;gap:2rem;margin-bottom:2rem;">
        <span style="font-family:${f.d};font-size:2.4rem;font-weight:${f.w};color:${p.accent};">$119.99</span>
        <del style="font-family:${f.b};font-size:.9rem;color:${p.muted};">$180.00</del>
      </div>
      <div class="sr" style="display:flex;gap:1rem;">
        <button style="flex:1;background:${p.accent};color:${p.bg};border:none;padding:1.1rem 2rem;font-family:${f.b};font-size:.85rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Agregar al Carrito</button>
        <button style="background:transparent;color:${p.text};border:1px solid ${p.rule};padding:1.1rem 1.4rem;font-family:${f.b};font-size:.82rem;border-radius:4px;">♡</button>
      </div>
    </div>
  </section>`;

  // Reviews
  const reviews = `<section style="padding:6rem 6vw;background:${p.surface};">
    <div class="sr" style="text-align:center;margin-bottom:3.5rem;">
      <p style="font-family:${f.b};font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:${p.accent};margin-bottom:.8rem;">Lo Que Dicen</p>
      <h2 style="font-family:${f.d};font-size:clamp(1.8rem,3vw,2.5rem);font-weight:${f.w};color:${p.text};letter-spacing:-.02em;">+2,847 Clientes Felices</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">
      ${[
        ['★★★★★','María G.','Increíble calidad. Lo uso todos los días desde hace 6 meses y nunca volvería a usar otro.'],
        ['★★★★★','Carlos R.','El mejor producto de su categoría. Resultados en 2 semanas, exactamente como prometían.'],
        ['★★★★★','Ana M.','Packaging impecable, envío rapidísimo. El producto supera todas las expectativas.'],
      ].map(([stars,author,quote])=>`
        <div class="sr" style="background:${p.bg};border:1px solid ${p.rule};border-radius:12px;padding:1.5rem;">
          <div style="font-size:1rem;color:${p.accent};margin-bottom:.8rem;">${stars}</div>
          <p style="font-family:${f.b};font-size:.88rem;line-height:1.75;color:${p.text};opacity:${o};margin-bottom:1rem;">"${quote}"</p>
          <div style="display:flex;align-items:center;gap:.6rem;">
            <div style="width:32px;height:32px;border-radius:50%;background:${p.accent}30;"></div>
            <span style="font-family:${f.b};font-size:.75rem;font-weight:700;color:${p.text};">${author}</span>
          </div>
        </div>`).join('')}
    </div>
  </section>`;

  // Newsletter
  const newsletter = `<section style="padding:5rem 6vw;background:${p.bg};text-align:center;border-top:1px solid ${p.rule};">
    <h2 class="sr" style="font-family:${f.d};font-size:clamp(1.5rem,2.5vw,2.2rem);font-weight:${f.w};color:${p.text};margin-bottom:1rem;">Acceso Anticipado a Nuevos Lanzamientos</h2>
    <p class="sr" style="font-family:${f.b};font-size:.9rem;color:${p.text};opacity:${o};margin-bottom:2rem;">Sé el primero. Descuentos exclusivos para suscriptores.</p>
    <div class="sr" style="display:flex;max-width:440px;margin:0 auto;gap:0;">
      <input type="email" placeholder="tu@email.com" style="flex:1;padding:.9rem 1.2rem;font-family:${f.b};font-size:.85rem;background:${p.surface};border:1px solid ${p.rule};border-right:none;border-radius:4px 0 0 4px;color:${p.text};outline:none;"/>
      <button style="background:${p.accent};color:${p.bg};border:none;padding:.9rem 1.6rem;font-family:${f.b};font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:0 4px 4px 0;">Unirme</button>
    </div>
  </section>`;

  const footer = `<footer style="background:${p.surface};border-top:1px solid ${p.rule};padding:3rem 6vw 2rem;">
    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:2rem;">
      <div style="font-family:${f.d};font-size:1.3rem;font-weight:${f.w};color:${p.text};">STORE</div>
      <div style="display:flex;gap:3rem;">
        ${[['Comprar',['Nuevo','Sale','Colecciones']],['Ayuda',['FAQ','Envíos','Devoluciones']],['Marca',['Historia','Blog','Contacto']]].map(([t,links])=>`
          <div>
            <p style="font-family:${f.b};font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${p.muted};margin-bottom:.8rem;">${t}</p>
            ${(links as string[]).map(l=>`<p style="font-family:${f.b};font-size:.78rem;color:${p.text};opacity:.6;margin-bottom:.4rem;">${l}</p>`).join('')}
          </div>`).join('')}
      </div>
    </div>
    <div style="border-top:1px solid ${p.rule};padding-top:1.2rem;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-family:${f.b};font-size:.7rem;color:${p.muted};">© ${new Date().getFullYear()} STORE — Todos los derechos reservados.</span>
      <div style="display:flex;gap:1rem;">
        <img src="${IMG(600,40,24)}" style="height:20px;opacity:.4;border-radius:3px;" alt="Visa"/>
        <img src="${IMG(601,40,24)}" style="height:20px;opacity:.4;border-radius:3px;" alt="MC"/>
      </div>
    </div>
  </footer>`;

  return htmlWrap(theme, promo + nav + hero + collection + featured + reviews + newsletter + footer);
}

// ── FULL LANDING preview ──────────────────────────────────────────────────────
function fullLanding(theme: ThemeIdentity): string {
  const p   = theme.palette;
  const f   = ff(theme);
  const o   = op(theme);
  const h   = theme.structure.headerStyle;
  const isCenter = h !== 'hero-split';

  const nav = `<nav id="mnav" style="position:sticky;top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:.9rem 7vw;background:${p.surface};border-bottom:1px solid ${p.rule};">
    <div style="font-family:${f.d};font-size:1.1rem;font-weight:${f.w};color:${p.text};">BRAND</div>
    <div style="display:flex;gap:1.8rem;">${['Servicios','Casos','Precios','Blog'].map(l=>`<a href="#" style="font-family:${f.b};font-size:.8rem;color:${p.text};opacity:.65;">${l}</a>`).join('')}</div>
    <button style="background:${p.accent};color:${p.bg};border:none;padding:.7rem 1.6rem;font-family:${f.b};font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Diagnóstico Gratuito →</button>
  </nav>`;

  const hero = isCenter
    ? `<section style="padding:9vh 10vw 7vh;background:${p.bg};text-align:center;">
        <div class="sr" style="display:inline-flex;align-items:center;gap:.5rem;background:${p.accent}18;border:1px solid ${p.accent}40;border-radius:100px;padding:.3rem 1rem;margin-bottom:2rem;">
          <span style="width:6px;height:6px;background:${p.accent};border-radius:50%;display:inline-block;"></span>
          <span style="font-family:${f.b};font-size:.6rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${p.accent};">Solo 20 lugares · Cupos casi agotados</span>
        </div>
        <h1 class="sr" style="font-family:${f.d};font-size:clamp(2.6rem,6vw,5.5rem);font-weight:${f.w};line-height:1.0;color:${p.text};margin-bottom:1.6rem;letter-spacing:-.03em;">Cada día sin esto,<br/>alguien en tu empresa<br/><em style="color:${p.accent};font-style:normal;">está pagando el precio.</em></h1>
        <p class="sr" style="font-family:${f.b};font-size:1.05rem;line-height:1.8;color:${p.text};opacity:${o};max-width:560px;margin:0 auto 2.5rem;">El sistema que le falta a tu negocio existe. No tenerlo no es un problema de dinero — es una decisión no tomada.</p>
        <div class="sr" style="display:flex;gap:1.2rem;justify-content:center;flex-wrap:wrap;">
          <button style="background:${p.accent};color:${p.bg};border:none;padding:1.1rem 2.8rem;font-family:${f.b};font-size:.9rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;box-shadow:0 8px 32px ${p.accent}40;">Solicitar Diagnóstico Gratuito →</button>
          <button style="background:transparent;color:${p.text};border:1px solid ${p.rule};padding:1.1rem 2rem;font-family:${f.b};font-size:.85rem;font-weight:500;letter-spacing:.06em;text-transform:uppercase;border-radius:4px;opacity:.8;">Ver casos reales</button>
        </div>
        <div class="sr" style="display:flex;justify-content:center;gap:2.5rem;margin-top:3rem;">
          ${['Sin costo','Sin compromiso','Respuesta 24h'].map(t=>`<div style="display:flex;align-items:center;gap:.5rem;"><div style="width:14px;height:14px;background:${p.accent}22;border-radius:50%;display:flex;align-items:center;justify-content:center;"><div style="width:5px;height:5px;background:${p.accent};border-radius:50%;"></div></div><span style="font-family:${f.b};font-size:.75rem;color:${p.text};opacity:${o};">${t}</span></div>`).join('')}
        </div>
      </section>`
    : `<section style="display:grid;grid-template-columns:1fr 1fr;min-height:86vh;">
        <div style="display:flex;flex-direction:column;justify-content:center;padding:8vw 5vw 8vw 7vw;background:${p.bg};">
          <p class="sr" style="font-family:${f.b};font-size:.62rem;letter-spacing:.28em;text-transform:uppercase;color:${p.accent};margin-bottom:1.5rem;">Para líderes que deciden</p>
          <h1 class="sr" style="font-family:${f.d};font-size:clamp(2.2rem,4vw,3.8rem);font-weight:${f.w};line-height:1.05;color:${p.text};margin-bottom:1.4rem;letter-spacing:-.02em;">El sistema que<br/>tu negocio<br/><em style="color:${p.accent};font-style:normal;">necesitaba ayer.</em></h1>
          <p class="sr" style="font-family:${f.b};font-size:1rem;line-height:1.8;color:${p.text};opacity:${o};margin-bottom:2.5rem;">Sin implementación interminable. Sin excusas. Resultados medibles en 72 horas.</p>
          <button class="sr" style="background:${p.accent};color:${p.bg};border:none;padding:1.1rem 2.5rem;font-family:${f.b};font-size:.88rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;width:fit-content;">Empezar Ahora →</button>
        </div>
        <div style="position:relative;overflow:hidden;background:${p.surface};">
          <img src="${IMG(S.scene[0],600,800)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
          <div style="position:absolute;inset:0;background:${p.bg}20;"></div>
        </div>
      </section>`;

  const trust = `<section style="display:grid;grid-template-columns:repeat(4,1fr);background:${p.surface};border-top:1px solid ${p.rule};border-bottom:1px solid ${p.rule};">
    ${[['98%','Tasa de satisfacción'],['3×','Más rápido que el estándar'],['500+','Empresas activas'],['72h','Implementación inicial']].map(([n,l],i)=>`
      <div class="sr" style="padding:2.5rem;text-align:center;${i>0?`border-left:1px solid ${p.rule};`:''}">
        <div style="font-family:${f.d};font-size:2.8rem;font-weight:${f.w};color:${p.accent};line-height:1;">${n}</div>
        <div style="font-family:${f.b};font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:${p.muted};margin-top:.6rem;">${l}</div>
      </div>`).join('')}
  </section>`;

  const features = `<section style="padding:7rem 7vw;background:${p.bg};">
    <div class="sr" style="text-align:center;margin-bottom:4rem;">
      <p style="font-family:${f.b};font-size:.64rem;letter-spacing:.24em;text-transform:uppercase;color:${p.accent};margin-bottom:.8rem;">Lo Que Incluye</p>
      <h2 style="font-family:${f.d};font-size:clamp(1.8rem,3vw,2.6rem);font-weight:${f.w};color:${p.text};letter-spacing:-.02em;">Un Sistema. No Un Servicio Más.</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">
      ${[
        ['Diagnóstico Profundo','Análisis de brechas en 48h. No genérico. Específico para tu realidad.'],
        ['Implementación Guiada','Cada paso tiene un protocolo. No te dejamos solo ante la hoja en blanco.'],
        ['Resultados Medibles','KPIs definidos desde el día 1. Si no hay datos, no hay progreso.'],
        ['Soporte Continuo','SLAs claros. Urgente, Prioritario, Regular. Sin ambigüedad.'],
        ['Document Factory','Todos los documentos operativos listos para usar. Estandarizados.'],
        ['Reportes Mensuales','Rendición de cuentas real. Transparencia no es un discurso — es un documento.'],
      ].map(([title,desc])=>`
        <div class="sr" style="padding:2rem;background:${p.surface};border:1px solid ${p.rule};border-radius:12px;">
          <div style="width:40px;height:40px;background:${p.accent}20;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:1.2rem;">
            <div style="width:20px;height:20px;background:${p.accent};border-radius:4px;"></div>
          </div>
          <p style="font-family:${f.b};font-size:.9rem;font-weight:700;color:${p.text};margin-bottom:.6rem;">${title}</p>
          <p style="font-family:${f.b};font-size:.82rem;line-height:1.7;color:${p.text};opacity:${o};">${desc}</p>
        </div>`).join('')}
    </div>
  </section>`;

  const testimonials = `<section style="padding:7rem 7vw;background:${p.surface};">
    <div class="sr" style="text-align:center;margin-bottom:4rem;">
      <p style="font-family:${f.b};font-size:.64rem;letter-spacing:.24em;text-transform:uppercase;color:${p.accent};margin-bottom:.8rem;">Lo Que Dicen Las Juntas Directivas</p>
      <h2 style="font-family:${f.d};font-size:clamp(1.6rem,3vw,2.4rem);font-weight:${f.w};color:${p.text};letter-spacing:-.02em;">No lo decimos nosotros.</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;">
      ${[
        ['Ricardo O.','Propietario · Torre Residencial, Marbella','La transparencia no es un discurso — es un documento. Eso es exactamente lo que entregaron.'],
        ['Patricia M.','Presidenta JD · Edificio Ámbar, Panamá','Nunca creí que la administración de mi edificio podría ser tan predecible. Ahora lo es.'],
        ['Carlos V.','Inversionista · 3 Propiedades','El ROI es claro: menos conflictos, más tiempo, más dinero. Simple.'],
      ].map(([name,role,quote])=>`
        <div class="sr" style="background:${p.bg};border:1px solid ${p.rule};border-radius:12px;padding:2rem;">
          <div style="display:flex;gap:.3rem;margin-bottom:1rem;">${[0,1,2,3,4].map(()=>`<span style="color:${p.accent};">★</span>`).join('')}</div>
          <p style="font-family:${f.b};font-size:.88rem;line-height:1.8;color:${p.text};opacity:${o};margin-bottom:1.5rem;">"${quote}"</p>
          <div style="display:flex;align-items:center;gap:.8rem;border-top:1px solid ${p.rule};padding-top:1.2rem;">
            <div style="width:38px;height:38px;border-radius:50%;background:${p.accent}25;display:flex;align-items:center;justify-content:center;font-family:${f.d};font-size:.8rem;font-weight:${f.w};color:${p.accent};">${name[0]}</div>
            <div><p style="font-family:${f.b};font-size:.8rem;font-weight:700;color:${p.text};">${name}</p><p style="font-family:${f.b};font-size:.7rem;color:${p.muted};">${role}</p></div>
          </div>
        </div>`).join('')}
    </div>
  </section>`;

  const cta = `<section style="padding:9rem 7vw;background:${p.bg};text-align:center;">
    <p class="sr" style="font-family:${f.b};font-size:.64rem;letter-spacing:.24em;text-transform:uppercase;color:${p.accent};margin-bottom:1rem;">Sin costo. Sin compromiso. Sin excusas.</p>
    <h2 class="sr" style="font-family:${f.d};font-size:clamp(2rem,4vw,3.5rem);font-weight:${f.w};color:${p.text};margin-bottom:1.5rem;letter-spacing:-.03em;">Cada día que esperas,<br/>alguien en tu comunidad<br/><em style="color:${p.accent};font-style:normal;">está pagando el costo.</em></h2>
    <p class="sr" style="font-family:${f.b};font-size:1rem;line-height:1.8;color:${p.text};opacity:${o};max-width:480px;margin:0 auto 3rem;">Diagnóstico gratuito. 30 minutos. Sin compromiso de contratación.</p>
    <button class="sr" style="background:${p.accent};color:${p.bg};border:none;padding:1.2rem 3.2rem;font-family:${f.b};font-size:.95rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;box-shadow:0 8px 40px ${p.accent}50;">Solicitar Diagnóstico Gratuito →</button>
  </section>`;

  const footer = `<footer style="background:${p.surface};border-top:1px solid ${p.rule};padding:2.5rem 7vw;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-family:${f.d};font-size:1rem;font-weight:${f.w};color:${p.text};">BRAND</span>
    <span style="font-family:${f.b};font-size:.72rem;color:${p.muted};">© ${new Date().getFullYear()} · Todos los derechos reservados</span>
    <div style="display:flex;gap:1.4rem;">${['Privacidad','Términos','Contacto'].map(l=>`<a style="font-family:${f.b};font-size:.72rem;color:${p.muted};">${l}</a>`).join('')}</div>
  </footer>`;

  return htmlWrap(theme, nav + hero + trust + features + testimonials + cta + footer);
}

// ── FULL BLOG preview ─────────────────────────────────────────────────────────
function fullBlog(theme: ThemeIdentity): string {
  const p   = theme.palette;
  const f   = ff(theme);
  const o   = op(theme);
  const cl  = theme.structure.cardLayout;
  const isMagazine = cl === 'magazine';

  const nav = `<nav id="mnav" style="position:sticky;top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1rem 6vw;background:${p.surface};border-bottom:1px solid ${p.rule};">
    <div style="font-family:${f.d};font-size:1.1rem;font-weight:${f.w};color:${p.text};">THE JOURNAL</div>
    <div style="display:flex;gap:1.8rem;">${['Estrategia','Diseño','Tecnología','Cultura','Opinión'].map(l=>`<a href="#" style="font-family:${f.b};font-size:.8rem;color:${p.text};opacity:.65;">${l}</a>`).join('')}</div>
    <div style="display:flex;align-items:center;gap:1rem;">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="${p.text}" stroke-width="2" opacity=".7"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <button style="background:${p.accent};color:${p.bg};border:none;padding:.55rem 1.2rem;font-family:${f.b};font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Suscribirse</button>
    </div>
  </nav>`;

  // Featured hero
  const featured = isMagazine
    ? `<section id="listing" style="display:grid;grid-template-columns:2fr 1fr;gap:0;background:${p.surface};border-bottom:1px solid ${p.rule};">
        <div style="position:relative;overflow:hidden;aspect-ratio:16/9;">
          <img src="${IMG(S.article[0],700,400)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
          <div style="position:absolute;inset:0;background:linear-gradient(to top,${p.bg}E8,transparent 50%);"></div>
          <div style="position:absolute;top:1.2rem;left:1.2rem;"><span style="background:${p.accent};color:${p.bg};font-family:${f.b};font-size:.58rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:3px 10px;border-radius:2px;">Portada</span></div>
          <div style="position:absolute;bottom:2rem;left:2rem;right:2rem;">
            <h1 style="font-family:${f.d};font-size:clamp(1.5rem,2.5vw,2.2rem);font-weight:${f.w};line-height:1.2;color:${theme.structure.colorMode==='dark'?p.text:'#fff'};margin-bottom:.8rem;">Cómo construir un sistema de contenidos que sobrevive al equipo que lo creó</h1>
            <div style="display:flex;align-items:center;gap:1rem;">
              <img src="${IMG(S.person[0],32,32)}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;" alt=""/>
              <span style="font-family:${f.b};font-size:.72rem;color:${theme.structure.colorMode==='dark'?p.text+'CC':'#ffffffCC'};">María García · 12 min · Estrategia</span>
            </div>
          </div>
        </div>
        <div style="padding:2rem;background:${p.bg};display:flex;flex-direction:column;gap:1.4rem;border-left:1px solid ${p.rule};">
          ${S.article.slice(1,5).map((s,i)=>`
            <a href="#" style="display:flex;gap:.8rem;align-items:start;padding-bottom:1.2rem;${i<3?`border-bottom:1px solid ${p.rule};`:''}" >
              <img src="${IMG(s,80,80)}" style="width:62px;height:62px;border-radius:6px;object-fit:cover;flex-shrink:0;" alt=""/>
              <div>
                <span style="font-family:${f.b};font-size:.55rem;letter-spacing:.12em;text-transform:uppercase;color:${p.accent};">Diseño</span>
                <p style="font-family:${f.b};font-size:.8rem;font-weight:600;color:${p.text};line-height:1.35;margin-top:.2rem;">La guía definitiva para escalar sin perder la esencia de marca</p>
                <span style="font-family:${f.b};font-size:.62rem;color:${p.muted};margin-top:.3rem;display:block;">5 min · Ana M.</span>
              </div>
            </a>`).join('')}
        </div>
      </section>`
    : `<section id="listing" style="position:relative;overflow:hidden;min-height:70vh;display:flex;align-items:flex-end;background:${p.bg};">
        <img src="${IMG(S.article[0],1200,700)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" alt=""/>
        <div style="position:absolute;inset:0;background:linear-gradient(to top,${p.bg}F4 30%,${p.bg}90 60%,transparent);"></div>
        <div style="position:relative;z-index:2;padding:5rem 7vw;max-width:780px;">
          <span class="sr" style="display:inline-block;background:${p.accent};color:${p.bg};font-family:${f.b};font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:4px 12px;border-radius:2px;margin-bottom:1.2rem;">Estrategia · Artículo Destacado</span>
          <h1 class="sr" style="font-family:${f.d};font-size:clamp(2rem,5vw,4rem);font-weight:${f.w};line-height:1.08;color:${p.text};margin-bottom:1.2rem;letter-spacing:-.02em;">Cómo construir un sistema de contenidos que sobrevive al equipo que lo creó</h1>
          <p class="sr" style="font-family:${f.b};font-size:.95rem;line-height:1.75;color:${p.text};opacity:${o};max-width:580px;margin-bottom:1.5rem;">El problema no es crear contenido — es crear un sistema que lo produzca de forma consistente, sin depender de una sola persona.</p>
          <div style="display:flex;align-items:center;gap:1.2rem;">
            <img src="${IMG(S.person[0],40,40)}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid ${p.accent};" alt=""/>
            <div>
              <p style="font-family:${f.b};font-size:.78rem;font-weight:600;color:${p.text};">María García</p>
              <p style="font-family:${f.b};font-size:.68rem;color:${p.muted};">12 min · Publicado hace 2 días</p>
            </div>
            <button style="margin-left:auto;background:${p.accent};color:${p.bg};border:none;padding:.65rem 1.6rem;font-family:${f.b};font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Leer Artículo →</button>
          </div>
        </div>
      </section>`;

  // Recent articles grid
  const ac = (seed: number, title: string, cat: string, time: string, author: string) => `
    <article class="sr" style="background:${p.bg};border:1px solid ${p.rule};border-radius:10px;overflow:hidden;">
      <div style="overflow:hidden;aspect-ratio:16/10;">
        <img src="${IMG(seed,400,250)}" style="width:100%;height:100%;object-fit:cover;transition:transform .4s;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'" alt=""/>
      </div>
      <div style="padding:1.3rem;">
        <span style="display:inline-block;font-family:${f.b};font-size:.58rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${p.accent};margin-bottom:.7rem;">${cat}</span>
        <h3 style="font-family:${f.d};font-size:1.05rem;font-weight:${f.w};line-height:1.3;color:${p.text};margin-bottom:.6rem;">${title}</h3>
        <p style="font-family:${f.b};font-size:.78rem;line-height:1.65;color:${p.text};opacity:${o};margin-bottom:1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estrategia aplicada.</p>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:.5rem;">
            <div style="width:24px;height:24px;border-radius:50%;background:${p.accent}30;"></div>
            <span style="font-family:${f.b};font-size:.68rem;color:${p.muted};">${author} · ${time}</span>
          </div>
          <a href="#" style="font-family:${f.b};font-size:.68rem;font-weight:700;color:${p.accent};">Leer →</a>
        </div>
      </div>
    </article>`;

  const recent = `<section style="padding:6rem 6vw;background:${p.surface};">
    <div class="sr" style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3rem;">
      <div>
        <p style="font-family:${f.b};font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:${p.accent};margin-bottom:.5rem;">Lo Más Reciente</p>
        <h2 style="font-family:${f.d};font-size:clamp(1.6rem,2.8vw,2.4rem);font-weight:${f.w};color:${p.text};letter-spacing:-.02em;">Últimas Publicaciones</h2>
      </div>
      <div style="display:flex;gap:.6rem;">
        ${['Todo','Estrategia','Diseño','IA & Tech','Marketing'].map(t=>`<button style="background:transparent;border:1px solid ${p.rule};padding:.35rem .9rem;font-family:${f.b};font-size:.68rem;color:${p.muted};border-radius:100px;">${t}</button>`).join('')}
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;">
      ${ac(S.article[1],'El diseño como ventaja competitiva en mercados saturados','Diseño','7 min','Ana M.')}
      ${ac(S.article[2],'IA generativa en marketing: qué funciona y qué no','IA & Tech','9 min','Pedro R.')}
      ${ac(S.article[3],'La trampa del crecimiento rápido: cómo escalar sin perder cultura','Estrategia','11 min','María G.')}
    </div>
  </section>`;

  const more = `<section style="padding:4rem 6vw 6rem;background:${p.bg};">
    <div class="sr" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2.5rem;">
      <h2 style="font-family:${f.d};font-size:1.6rem;font-weight:${f.w};color:${p.text};">También te puede interesar</h2>
      <a style="font-family:${f.b};font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:${p.accent};">Ver todos →</a>
    </div>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:1.4rem;">
      ${ac(S.article[4],'Cómo escribir contenido que convierte sin sonar comercial','Marketing','6 min','Luis C.')}
      ${ac(S.article[5],'El framework STAR para documentar procesos de empresa','Estrategia','8 min','María G.')}
    </div>
  </section>`;

  const newsletter = `<section style="padding:6rem 7vw;background:${p.surface};text-align:center;border-top:1px solid ${p.rule};">
    <h2 class="sr" style="font-family:${f.d};font-size:clamp(1.5rem,2.5vw,2.2rem);font-weight:${f.w};color:${p.text};margin-bottom:1rem;">Ideas sin ruido. Directo a tu inbox.</h2>
    <p class="sr" style="font-family:${f.b};font-size:.9rem;color:${p.text};opacity:${o};margin-bottom:2rem;">Un artículo semanal. Sin spam. Sin clickbait. Solo ideas que valen tu tiempo.</p>
    <div class="sr" style="display:flex;max-width:440px;margin:0 auto;">
      <input type="email" placeholder="tu@email.com" style="flex:1;padding:.9rem 1.2rem;font-family:${f.b};font-size:.85rem;background:${p.bg};border:1px solid ${p.rule};border-right:none;border-radius:4px 0 0 4px;color:${p.text};outline:none;"/>
      <button style="background:${p.accent};color:${p.bg};border:none;padding:.9rem 1.6rem;font-family:${f.b};font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:0 4px 4px 0;">Suscribirme</button>
    </div>
    <p style="font-family:${f.b};font-size:.65rem;color:${p.muted};margin-top:1rem;opacity:.7;">Sin spam. Cancela cuando quieras.</p>
  </section>`;

  const footer = `<footer style="background:${p.surface};border-top:1px solid ${p.rule};padding:2.5rem 6vw;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-family:${f.d};font-size:1rem;font-weight:${f.w};color:${p.text};">THE JOURNAL</span>
    <div style="display:flex;gap:1.8rem;">${['Estrategia','Diseño','Tecnología','Cultura'].map(l=>`<a style="font-family:${f.b};font-size:.75rem;color:${p.muted};">${l}</a>`).join('')}</div>
    <span style="font-family:${f.b};font-size:.7rem;color:${p.muted};">© ${new Date().getFullYear()}</span>
  </footer>`;

  return htmlWrap(theme, nav + featured + recent + more + newsletter + footer);
}

// ── FULL WEB (institutional) preview ─────────────────────────────────────────
function fullWeb(theme: ThemeIdentity): string {
  const p   = theme.palette;
  const f   = ff(theme);
  const o   = op(theme);
  const h   = theme.structure.headerStyle;
  const cl  = theme.structure.cardLayout;
  const hasSticky   = theme.structure.enhancers.includes('sticky-header');
  const hasCarousel = theme.structure.enhancers.includes('image-carousel');

  const nav = `<nav id="mnav" style="position:${hasSticky?'sticky':'relative'};top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.2rem 7vw;background:${p.surface};border-bottom:1px solid ${p.rule};transition:backdrop-filter .3s,box-shadow .3s;">
    <div style="font-family:${f.d};font-size:1.2rem;font-weight:${f.w};color:${p.text};">${theme.name}</div>
    <div style="display:flex;gap:2rem;">${['Inicio','Servicios','Portfolio','Nosotros','Blog','Contacto'].map(l=>`<a href="#" style="font-family:${f.b};font-size:.82rem;color:${p.text};opacity:.68;">${l}</a>`).join('')}</div>
    <button style="background:${p.accent};color:${p.bg};border:none;padding:.65rem 1.5rem;font-family:${f.b};font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Agendar Llamada</button>
  </nav>`;

  // Hero — varies by headerStyle
  let heroSection = '';
  if (h === 'hero-cinematic' || h === 'hero-fullbleed') {
    heroSection = `<section style="position:relative;min-height:92vh;overflow:hidden;display:flex;align-items:center;padding:0 7vw;">
      ${hasCarousel
        ? `<div style="position:absolute;inset:0;">${[0,1,2].map((i)=>`<div class="cs" style="position:absolute;inset:0;background:url('${IMG(S.hero[i],1400,900)}') center/cover;opacity:${i===0?1:0};transition:opacity 1.2s ease;"></div>`).join('')}<div style="position:absolute;inset:0;background:linear-gradient(to right,${p.bg}E0,${p.bg}80 60%,transparent);"></div></div>`
        : `<div class="pbg" style="position:absolute;inset:-20%;z-index:0;background:url('${IMG(S.hero[0],1400,900)}') center/cover;"></div><div style="position:absolute;inset:0;background:linear-gradient(to right,${p.bg}F0,${p.bg}90 55%,${p.bg}30);"></div>`}
      <div style="position:relative;z-index:2;max-width:680px;">
        <p class="sr" style="font-family:${f.b};font-size:.65rem;letter-spacing:.28em;text-transform:uppercase;color:${p.accent};margin-bottom:1.5rem;">Agencia de Diseño & Estrategia</p>
        <h1 class="sr" style="font-family:${f.d};font-size:clamp(2.8rem,6vw,5.8rem);font-weight:${f.w};line-height:1.02;color:${p.text};margin-bottom:1.5rem;letter-spacing:-.025em;">Tu Marca.<br/>Sin Límites.<br/><em style="color:${p.accent};font-style:normal;">En Serio.</em></h1>
        <p class="sr" style="font-family:${f.b};font-size:1.05rem;line-height:1.8;color:${p.text};opacity:${o};max-width:500px;margin-bottom:2.5rem;">Sistemas de identidad visual que trabajan en todos los puntos de contacto. Estrategia que convierte.</p>
        <div class="sr" style="display:flex;gap:1.2rem;flex-wrap:wrap;">
          <button style="background:${p.accent};color:${p.bg};border:none;padding:1rem 2.5rem;font-family:${f.b};font-size:.88rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Portfolio</button>
          <button style="background:transparent;color:${p.text};border:1px solid ${p.text}40;padding:1rem 2rem;font-family:${f.b};font-size:.85rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;border-radius:4px;">Contactar →</button>
        </div>
      </div>
    </section>`;
  } else if (h === 'hero-split') {
    heroSection = `<section style="display:grid;grid-template-columns:1fr 1fr;min-height:86vh;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:8vw 5vw 8vw 7vw;background:${p.bg};">
        <p class="sr" style="font-family:${f.b};font-size:.64rem;letter-spacing:.26em;text-transform:uppercase;color:${p.accent};margin-bottom:1.5rem;">Agencia Full-Service</p>
        <h1 class="sr" style="font-family:${f.d};font-size:clamp(2.4rem,4.5vw,4rem);font-weight:${f.w};line-height:1.05;color:${p.text};margin-bottom:1.5rem;letter-spacing:-.02em;">Construido<br/>Para <em style="color:${p.accent};font-style:normal;">Crecer</em></h1>
        <p class="sr" style="font-family:${f.b};font-size:1rem;line-height:1.8;color:${p.text};opacity:${o};margin-bottom:2.5rem;">Sistemas de identidad que trabajan en todos los puntos de contacto. Diseño que convierte.</p>
        <div class="sr" style="display:flex;gap:1rem;">
          <button style="background:${p.accent};color:${p.bg};border:none;padding:1rem 2.2rem;font-family:${f.b};font-size:.86rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;border-radius:4px;">Ver Portfolio</button>
          <button style="background:transparent;color:${p.text};border:1px solid ${p.rule};padding:1rem 1.8rem;font-family:${f.b};font-size:.82rem;font-weight:500;letter-spacing:.06em;text-transform:uppercase;border-radius:4px;opacity:.75;">Nosotros</button>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;background:${p.surface};">
        <img src="${IMG(S.scene[1],600,800)}" style="width:100%;height:100%;object-fit:cover;" alt=""/>
        <div style="position:absolute;inset:0;background:${p.bg}18;"></div>
      </div>
    </section>`;
  } else if (h === 'hero-editorial') {
    heroSection = `<section style="padding:12vh 7vw 8vh;background:${p.bg};border-bottom:1px solid ${p.rule};">
      <p class="sr" style="font-family:${f.b};font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;color:${p.muted};margin-bottom:3rem;">Vol. 01 — Identidad Visual</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;">
        <h1 class="sr" style="font-family:${f.d};font-size:clamp(3rem,6vw,5.5rem);font-weight:${f.w};line-height:1.0;color:${p.text};letter-spacing:-.03em;">Diseño<br/>que<br/><span style="color:${p.accent};">Habla.</span></h1>
        <div>
          <p class="sr" style="font-family:${f.b};font-size:1.05rem;line-height:1.8;color:${p.text};opacity:${o};margin-bottom:2rem;">Una identidad visual no es un logo. Es el sistema completo que comunica quién eres antes de que digas una palabra.</p>
          <a href="#" style="font-family:${f.b};font-size:.8rem;letter-spacing:.15em;text-transform:uppercase;color:${p.accent};border-bottom:1px solid ${p.accent};padding-bottom:3px;">Leer más →</a>
        </div>
      </div>
      <img src="${IMG(S.scene[2],1200,500)}" class="sr" style="width:100%;height:45vh;object-fit:cover;margin-top:5rem;border-radius:2px;" alt=""/>
    </section>`;
  } else {
    // hero-text-only / hero-minimal
    heroSection = `<section style="padding:16vh 10vw 10vh;background:${p.bg};text-align:center;">
      <p class="sr" style="font-family:${f.b};font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:${p.muted};margin-bottom:2rem;">Soluciones de Marca</p>
      <h1 class="sr" style="font-family:${f.d};font-size:clamp(3.5rem,8vw,7rem);font-weight:${f.w};line-height:0.95;color:${p.text};letter-spacing:-.04em;max-width:900px;margin:0 auto 2.5rem;">Ideas que<br/><span style="color:${p.accent};">Escalan</span></h1>
      <p class="sr" style="font-family:${f.b};font-size:1.1rem;line-height:1.7;color:${p.text};opacity:${o};max-width:500px;margin:0 auto 3rem;">Creamos sistemas visuales que crecen con tu negocio. De startup a categoría.</p>
      <button class="sr" style="background:${p.accent};color:${p.bg};border:none;padding:1rem 2.5rem;font-family:${f.b};font-size:.88rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;">Explorar</button>
    </section>`;
  }

  // Stats
  const stats = `<section style="padding:4rem 7vw;background:${p.surface};display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;border-top:1px solid ${p.rule};border-bottom:1px solid ${p.rule};">
    ${[['120+','Proyectos'],['8','Años'],['98%','Satisfacción'],['40+','Marcas']].map(([n,l])=>`
      <div class="sr" style="text-align:center;">
        <div style="font-family:${f.d};font-size:3rem;font-weight:${f.w};color:${p.accent};line-height:1;">${n}</div>
        <div style="font-family:${f.b};font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:${p.muted};margin-top:.5rem;">${l}</div>
      </div>`).join('')}
  </section>`;

  // Services — varies by cardLayout
  let servicesSection = '';
  if (cl === 'list-editorial') {
    servicesSection = `<section style="padding:6rem 7vw;background:${p.surface};">
      <div style="display:grid;grid-template-columns:1fr 2fr;gap:5rem;align-items:start;">
        <div><h2 style="font-family:${f.d};font-size:2.5rem;font-weight:${f.w};color:${p.text};letter-spacing:-.02em;position:sticky;top:130px;">Qué<br/>Hacemos</h2></div>
        <div style="display:flex;flex-direction:column;gap:0;">
          ${['Identidad Visual','Diseño Web','Estrategia de Marca','Campañas Digitales'].map((s,i)=>`
            <div class="sr" style="display:flex;gap:2rem;align-items:flex-start;padding:2.5rem 0;border-bottom:1px solid ${p.rule};">
              <span style="font-family:${f.b};font-size:.62rem;color:${p.muted};opacity:.5;padding-top:6px;">0${i+1}</span>
              <div style="flex:1;">
                <h3 style="font-family:${f.d};font-size:1.5rem;font-weight:${f.w};color:${p.text};margin-bottom:.75rem;">${s}</h3>
                <p style="font-family:${f.b};font-size:.9rem;line-height:1.75;color:${p.text};opacity:${o};">Soluciones diseñadas para tu industria. Entregamos resultados medibles con un enfoque sistemático.</p>
              </div>
              <span style="color:${p.accent};font-size:1.2rem;margin-top:4px;">→</span>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  } else if (cl === 'scroll-horizontal') {
    servicesSection = `<section style="padding:6rem 0;background:${p.surface};overflow:hidden;">
      <h2 class="sr" style="font-family:${f.d};font-size:2rem;font-weight:${f.w};color:${p.text};margin:0 7vw 3rem;letter-spacing:-.02em;">Proyectos Recientes</h2>
      <div style="display:flex;gap:1.5rem;overflow-x:auto;padding:0 7vw 2rem;scroll-snap-type:x mandatory;cursor:grab;">
        ${S.scene.map((id,i)=>`
          <div class="sr" style="flex:0 0 360px;scroll-snap-align:start;border-radius:10px;overflow:hidden;background:${p.bg};border:1px solid ${p.rule};">
            <img src="${IMG(id,360,220)}" style="width:100%;height:220px;object-fit:cover;" alt=""/>
            <div style="padding:1.5rem;">
              <p style="font-family:${f.b};font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:${p.accent};margin-bottom:.5rem;">Proyecto 0${i+1}</p>
              <h3 style="font-family:${f.d};font-size:1.15rem;font-weight:600;color:${p.text};margin-bottom:.5rem;">Identidad de Marca</h3>
              <p style="font-family:${f.b};font-size:.85rem;line-height:1.6;color:${p.text};opacity:${o};">Sistema visual completo con todos los puntos de contacto.</p>
            </div>
          </div>`).join('')}
      </div>
    </section>`;
  } else {
    servicesSection = `<section style="padding:6rem 7vw;background:${p.surface};">
      <div class="sr" style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3.5rem;">
        <div>
          <p style="font-family:${f.b};font-size:.64rem;letter-spacing:.22em;text-transform:uppercase;color:${p.accent};margin-bottom:.5rem;">Nuestros Servicios</p>
          <h2 style="font-family:${f.d};font-size:clamp(1.8rem,3vw,2.6rem);font-weight:${f.w};color:${p.text};letter-spacing:-.02em;">Proyectos & Servicios</h2>
        </div>
        <a href="#" style="font-family:${f.b};font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:${p.accent};">Ver todos →</a>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">
        ${S.scene.slice(0,6).map((id,i)=>`
          <div class="sr" style="border-radius:10px;overflow:hidden;background:${p.bg};border:1px solid ${p.rule};">
            <div style="overflow:hidden;"><img src="${IMG(id,400,280)}" style="width:100%;height:220px;object-fit:cover;transition:transform .5s;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'" alt=""/></div>
            <div style="padding:1.4rem;">
              <p style="font-family:${f.b};font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:${p.accent};margin-bottom:.4rem;">Categoría</p>
              <h3 style="font-family:${f.d};font-size:1.05rem;font-weight:600;color:${p.text};margin-bottom:.5rem;">Identidad 0${i+1}</h3>
              <p style="font-family:${f.b};font-size:.82rem;line-height:1.6;color:${p.text};opacity:${o};">Sistema visual completo con todos los puntos de contacto de marca.</p>
            </div>
          </div>`).join('')}
      </div>
    </section>`;
  }

  const cta = `<section style="padding:8rem 7vw;background:${p.bg};text-align:center;">
    <h2 class="sr" style="font-family:${f.d};font-size:clamp(2rem,4vw,3.5rem);font-weight:${f.w};color:${p.text};margin-bottom:1.5rem;letter-spacing:-.02em;">¿Listo para<br/><span style="color:${p.accent};">empezar</span>?</h2>
    <p class="sr" style="font-family:${f.b};font-size:1rem;line-height:1.7;color:${p.text};opacity:${o};max-width:450px;margin:0 auto 2.5rem;">Hablemos de tu proyecto. Sin compromisos — solo una conversación estratégica.</p>
    <button class="sr" style="background:${p.accent};color:${p.bg};border:none;padding:1rem 2.5rem;font-family:${f.b};font-size:.88rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-radius:4px;">Agendar Llamada</button>
  </section>`;

  const footer = `<footer style="background:${p.surface};border-top:1px solid ${p.rule};padding:4rem 7vw;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;">
      <div style="font-family:${f.d};font-size:1.4rem;font-weight:${f.w};color:${p.text};">${theme.name}</div>
      <div style="display:flex;gap:2rem;">${['Inicio','Proyectos','Servicios','Contacto'].map(l=>`<a href="#" style="font-family:${f.b};font-size:.8rem;color:${p.muted};">${l}</a>`).join('')}</div>
    </div>
    <div style="border-top:1px solid ${p.rule};padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-family:${f.b};font-size:.7rem;color:${p.muted};">© ${new Date().getFullYear()} ${theme.name} — Studio · Miami, FL</span>
      <span style="font-family:${f.b};font-size:.7rem;color:${p.muted};">Diseñado con WEBLAB · UNRLVL Studio</span>
    </div>
  </footer>`;

  return htmlWrap(theme, nav + heroSection + stats + servicesSection + cta + footer);
}
