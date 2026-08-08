# WebLab — Unrealville Studio

Generador de copy web del ecosistema Unrealville Studio.
Produce outputs HTML y Liquid listos para publicar en WordPress o Shopify.

**Live:** Vercel — conectado a rama `main`
**Contexto completo del ecosistema:** [`CoreProject/CONTEXT.md`](https://github.com/unrealvillestudio-hub/CoreProject/blob/main/CONTEXT.md)

---

## Rol en el ecosistema

WebLab es el módulo de generación de interfaces web. Consume BPs de BluePrints (brand, product, person) y los transforma en HTML/Liquid publicable. Es el único Lab con deploy propio en Vercel.

```
BluePrints (assets) ──→ WebLab (genera HTML/Liquid) ──→ Deploy (Hostinger/Shopify)
CoreProject/sites/  ←── outputs aprobados se archivan aquí
```

---

## Stack

- React 18 + TypeScript + Vite + Tailwind
- AI: Gemini 2.0 Flash (Gemini API)
- State: Zustand
- Deploy: Vercel (`main` → auto-deploy)

---

## Módulos activos

| Módulo | Platform | Output | Estado |
|--------|----------|--------|--------|
| Web Corporativa | WordPress | HTML only | ✅ |
| Landing | WordPress / Shopify | HTML + Liquid | ✅ |
| E-Commerce | Shopify | HTML + Liquid | ✅ |
| Blog | WordPress | HTML only | ✅ |

**Regla crítica:** Blog y Web Corporativa → solo HTML. Liquid es exclusivo de módulos Shopify.

---

## Archivos clave

```
src/
├── modules/webgenerator/WebGeneratorModule.tsx  ← UI + lógica principal
├── services/webEngine.ts                        ← engine de generación + prompts
├── config/
│   ├── packs.ts          ← WEB_PACKS, PACKS_BY_MODULE, PAGE_SECTIONS
│   ├── brands.ts         ← BRAND_LIST
│   ├── brandContexts.tsx ← BRAND_CONTEXTS (buildNeuroneProductContext pendiente)
│   └── humanizeConfig.ts ← Humanize Layer
└── core/types.ts         ← WebModuleId, WebOutputMode, WebOutput
```

---

## Dependencias

| Consume | Provee |
|---------|--------|
| BluePrints (brand/product/person JSON) | HTML/Liquid para publicar |
| DB_VARIABLES_v6 (tokens de marca) | — |
| CoreProject/CONTEXT.md (big picture) | Archivos aprobados → CoreProject/sites/ |

---

## Pendiente

- `buildNeuroneProductContext` en `brandContexts.tsx`
- Brief layer pre-generación (3 preguntas antes de generar)

---

## Changelog

| Fecha | Cambio |
|---|---|
| 2026-03-20 | README actualizado con arquitectura de ecosistema |
| 2026-03-13 | Fixes HTML responsive · regla HTML-only para Web/Blog |
| 2026-03-xx | WebLab v2.6 — commit `131a2ac` |

---

## Desarrollo local

```bash
npm install
cp .env.example .env.local  # añade GEMINI_API_KEY
npm run dev
```
