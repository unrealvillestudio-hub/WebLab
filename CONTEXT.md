# WebLab — CONTEXT.md
**Repositorio:** `unrealvillestudio-hub/WebLab`
**Última actualización:** 2026-03-13
**Deploy:** Vercel (conectado a `unrealvillestudio-hub/WebLab`, rama `main`)

---

## Estado general

WebLab es el módulo generador de copy web del ecosistema UNRLVL AgentLab. Produce outputs HTML y Liquid listos para publicar en WordPress o Shopify según el módulo activo. Vive en un repositorio independiente (`WebLab`) separado del repo principal `AgentLab`.

---

## Reglas de output por módulo — DEFINITIVAS

| Módulo | Platform | Output modes | Preview |
|--------|----------|--------------|---------|
| **Web Corporativa** | WordPress only | HTML only | ✅ iframe directo |
| **Landing** | WordPress / Shopify | HTML + Liquid | ✅ iframe HTML |
| **E-Commerce** | Shopify | HTML + Liquid | ✅ iframe HTML |
| **Blog** | WordPress | HTML only | ✅ iframe directo |

**Razón:** Liquid es sintaxis de servidor Shopify (`{% schema %}`, `{{ section.settings.X }}`). WordPress no lo procesa. El preview client-side de Liquid→HTML era estructuralmente inviable por la complejidad del motor Shopify (filtros, contexto `shop`, blocks, herencia de temas).

**Implementación:**
- `handleModuleChange()`: fuerza `outputMode='html'` al cambiar a módulo `web`
- Selector Output Mode en `web`: filtra `OUTPUT_MODES` mostrando solo `html`
- Selector Output Mode en `blog`: filtra `OUTPUT_MODES` mostrando solo `html`
- Landing y E-Commerce: mantienen HTML + Liquid intactos (ya pasaron testing)

---

## Arquitectura de archivos clave

```
src/
├── modules/webgenerator/
│   ├── WebGeneratorModule.tsx   ← componente principal, toda la UI + lógica
│   ├── EcomProductSelector.tsx
│   └── ThemePicker.tsx
├── services/
│   └── webEngine.ts             ← engine de generación, prompts, llamada a Claude API
├── config/
│   ├── packs.ts                 ← definición de WEB_PACKS, PACKS_BY_MODULE, PAGE_SECTIONS
│   ├── brands.ts                ← BRAND_LIST
│   ├── brandContexts.tsx        ← BRAND_CONTEXTS, buildNeuroneProductContext
│   ├── brandBlueprints.ts
│   ├── themeCatalog.ts          ← ThemePicker paletas
│   └── humanizeConfig.ts
├── store/
│   └── useWebOutputStore.ts
└── core/
    └── types.ts                 ← WebModuleId, WebOutputMode, WebOutput, etc.
```

**`WebModuleId`** (definido en `types.ts`): `"web" | "landing" | "ecommerce"` — Blog se maneja con estado independiente (`blogSpec`, `blogOutputMode`, etc.), no es un `WebModuleId`.

---

## Sesión 2026-03-12 — Fixes HTML responsive (sesión anterior)

### Root causes diagnosticados en ForumPHs
Análisis via extracción de frames con `ffmpeg`. Dos bugs estructurales:

**Bug 1 — Truncación de tokens:** `max_tokens: 4000` cortaba la generación a mitad de secciones largas. El card `testimonial-featured` quedaba con HTML roto (atributos sin valor, tags sin cerrar).
- **Fix:** `max_tokens: 4000 → 6000` en `callClaude()` de `webEngine.ts`

**Bug 2 — Grid inline fuera del sistema `.rg-*`:** El `testimonial-featured` usaba `grid-template-columns: 1fr auto` como inline style. El media query `@860px` no lo alcanzaba → overflow en mobile (360px).
- **Fix:** instrucción explícita en `getFormatInstructions()` HTML mode: prohibición absoluta de `grid-template-columns` multi-columna como inline style, obligatorio usar `.rg-2`, `.rg-3`, `.rg-auto`, `.rg-contact`, `.rg-contact-aggro`

**Bug 3 — CSS base ausente en wrapper:** `buildExportFile()` no inyectaba `overflow-x: hidden` ni el sistema `.rg-*` en el wrapper HTML.
- **Fix:** bloque `<style>` con sistema grid completo inyectado en `buildExportFile()`

### Otros cambios sesión anterior
- `PlatformToggle` con prop `wordpressOnly`: cuando `true`, muestra solo WordPress
- `handleBlogRun()`: hardcodeado `platform: "wordpress"`
- `SectionCard` — botón "Preview" inline por sección (Liquid preview estático, deprecated en favor del Full Page Preview)
- Botón "CLEAN" en outputs AGGRO: exporta sin banner naranja de advertencia
- Anti-leak en prompts: instrucción `⛔` — output termina con tag de cierre, nada después
- Firma Unreal>ille: añadida a `buildExportFile()` (dirección: 1303 N 46th Ave, Hollywood, FL 33021)
- Commits de esa sesión: `618e54d`, `7043ef2`, `9645d22`

---

## Sesión 2026-03-13 — Full Page Preview Modal + reglas de output

### 1. Full Page Preview Modal — implementación

**Motivación:** el botón de Preview estaba por sección individual (inline en `SectionCard`). Se pidió un preview fullscreen que mostrara toda la página ensamblada, con toggle desktop/mobile.

**Componente:** `FullPagePreviewModal` en `WebGeneratorModule.tsx`

**Funcionamiento actual (definitivo):**
- Recibe `sections[]` (array de secciones generadas) + `onClose`
- Construye `srcdoc` ensamblando todas las secciones en un documento HTML completo
- Inyecta `PREVIEW_BASE_CSS` (sistema `.rg-*` + reset base) y `FIRMA_HTML`
- Renderiza en `<iframe srcdoc={...}>` con `sandbox="allow-same-origin allow-scripts"`
- Toggle Desktop (100% ancho, max 1440px) / Mobile (390px fijo, border-radius 16px, centrado)
- Solo `X` para cerrar — sin otras distracciones

**Botón Preview:** aparece en la barra de controles del pack summary, visible solo cuando `result` existe. Cyan para Liquid (Landing/Ecom), zinc para HTML (Web/Blog).

**Constantes compartidas:**
```typescript
const PREVIEW_BASE_CSS = `...` // sistema .rg-*, reset, box-sizing
const FIRMA_HTML = `<footer style="background:#1C2233;...">
  Designed & Developed by Unreal>ille Studio
  1303 N 46th Ave, Hollywood, FL 33021
</footer>`
```

### 2. Firma — especificación definitiva

- **Fondo:** `#1C2233` (carbón profundo) — SIEMPRE, independientemente del fondo de la última sección
- **Línea 1:** `Designed & Developed by` + `Unreal>ille Studio` (link, color `#a8a8b3`, bold)
- **Línea 2:** `1303 N 46th Ave, Hollywood, FL 33021` (10px, color `#52525b`)
- **Aplica en:** preview fullscreen + archivos exportados via `buildExportFile()`
- **NO aparece** en ningún elemento del UI de la app

### 3. Pack summary — layout reestructurado

**Problema:** el layout `flex items-center` (badges `flex-1` izq + botones `shrink-0` der) colapsaba visualmente cuando se añadió el botón Preview — los badges competían con los botones por el ancho.

**Fix:** cambiado a `flex-col` con 3 filas independientes:
- **Fila 1:** meta-badges (label pack, secciones, palabras, idioma, platform, output mode, SUPER AGGRO)
- **Fila 2:** section pills con progreso (verde = completada, zinc = pendiente)
- **Fila 3:** botones con `flex-wrap` — sin competir con ninguna f