# UNRLVL-OPS — CONTEXT.md
**Repositorio destino:** `unrealvillestudio-hub/WebLab` (provisional hasta que CoreProject exista)
**Creado:** 2026-03-18
**Estado:** PENDIENTE — iniciar sábado/domingo 21-22 mar, o lunes 23 mar si hay trabajo pendiente esta semana

---

## Qué es UNRLVL-OPS

Servicio interno de operaciones de Unreal>ille Studio. Un backend real (Node.js + Supabase) con dos módulos iniciales que comparten infraestructura:

1. **claude-tracker** — Monitor de uso de Claude AI (tiempo, tokens, proyectos, plataforma)
2. **cost-monitor** — Monitor de costos operativos del ecosistema (hosting, dominios, servicios, gastos)

Este servicio es también el punto de partida para la **DB central del ecosistema** — Supabase reemplaza DB_VARIABLES.xlsx y sirve a WebLab, AgentLab, Orchestrator, SignalLab y el resto.

---

## Por qué ahora

El tracker de Claude comenzó como artifact con `window.storage`. Durante la sesión del 2026-03-18 se identificó que para tener:
- Auto-inicio sin interacción manual
- Email automático diario y mensual
- Sincronización real entre web, móvil y Chrome
- Historial persistente fuera del artifact

...se necesita un backend real con scheduler. El artifact pasa a ser solo la UI, el servicio hace el trabajo pesado.

---

## Stack decidido

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| Runtime | Node.js + Express + TypeScript | Consistencia con el resto del ecosistema |
| Scheduler | `node-cron` | Cron jobs nativos, sin dependencias externas |
| DB | Supabase (PostgreSQL) | Free tier para empezar, Pro cuando escale; DB central del ecosistema |
| Email | Gmail API (OAuth) | Ya conectado, $0 |
| Deploy | Railway | $5/mes fijos, procesos persistentes, deploy desde GitHub |
| Frontend | Artifact React (tracker UI) → luego módulo en Orchestrator | Migración cuando el backend esté estable |

**Por qué Railway y no Vercel para esto:** Vercel es serverless (max 60s, sin estado). Un cron que dispara emails a las 11pm necesita proceso persistente. Vercel sigue siendo correcto para los frontends.

**Costo total: $5/mes** (Railway Hobby). Supabase free tier suficiente para este volumen. Gmail API $0.

---

## Arquitectura del servicio

```
unrlvl-ops-service/
├── src/
│   ├── db/
│   │   ├── supabase.ts          ← client
│   │   └── schema.sql           ← tablas: sessions, costs, projects
│   ├── cron/
│   │   ├── dailyReport.ts       ← 11pm Miami time
│   │   └── monthlyReport.ts     ← día 1 de cada mes
│   ├── email/
│   │   ├── gmailClient.ts       ← OAuth2 Gmail API
│   │   └── templates.ts         ← HTML templates diario/mensual
│   ├── api/
│   │   ├── sessions.ts          ← POST /sessions, GET /sessions
│   │   ├── costs.ts             ← POST /costs, GET /costs
│   │   └── reports.ts           ← GET /report/daily, GET /report/monthly
│   └── index.ts                 ← Express server, middlewares
├── .env                         ← SUPABASE_URL, SUPABASE_KEY, GMAIL_*, PORT
├── package.json
└── railway.toml                 ← config deploy
```

---

## Módulo 1: claude-tracker

### Qué trackea por sesión
- Tema / descripción
- Duración (timer automático al abrir el artifact)
- Tokens consumidos (manual — copiado de claude.ai Settings → Usage; limitación permanente de la plataforma, no hay API pública de consumo para usuarios finales)
- Proyecto (de lista configurable)
- Plataforma: Web (claude.ai) / App móvil / Chrome Extension / API / Otro
- Notas opcionales
- Timestamp

### Reportes automáticos
- **Diario:** 11pm hora Miami — resumen del día (sesiones, tiempo, tokens, por proyecto)
- **Mensual:** día 1 de cada mes — resumen del mes anterior completo

### Artifact actual (v2)
Ya construido con `window.storage` — funciona pero sin persistencia real entre dispositivos. Pendiente de reconectar a los endpoints del servicio cuando este esté deployed.

Archivos generados en esta sesión:
- `claude-tracker.jsx` — v1 básica
- `claude-tracker-v2.jsx` — v2 con proyectos, plataformas, reportes diario/mensual, export .txt

---

## Módulo 2: cost-monitor

### Qué trackea
Gastos operativos recurrentes y únicos del ecosistema UNRLVL:
- Hosting (Railway, Vercel)
- Dominios (vizoscosmetics.com, neuronescmiami.com, etc.)
- SaaS (Shopify, Supabase Pro cuando aplique, herramientas)
- Servicios de marketing / ads
- 3PL / logística
- Cualquier gasto operativo categorizable

### Vistas
- Dashboard mensual con totales por categoría
- Alertas cuando un servicio supere umbral definido
- Reporte mensual por email (mismo cron que claude-tracker)
- Histórico para detectar tendencias

---

## La gran pieza: DB_VARIABLES → Supabase

DB_VARIABLES.xlsx es la fuente de verdad provisional del ecosistema. Antes de construir el servicio, hay que hacer un **audit completo** del xlsx para:
1. Identificar qué datos existen actualmente
2. Detectar inconsistencias y duplicados acumulados
3. Diseñar el schema relacional correcto (no solo migrar 1:1)
4. Crear las tablas en Supabase que sirvan a todos los labs

El xlsx está en el repo (pendiente confirmar cuál). Este audit es el primer paso del sábado/lunes.

### Tablas esperadas (draft — sujeto a audit)
- `brands` — Vizos Cosmetics, D7 Herbal, Vivosé, Neurone, Vizos Salón
- `products` — 39+ productos Neurone + owned brands
- `personas` — BP_PERSON (PO y otros)
- `locations` — BP_LOCATION (Vizos Salón, Miami Streets, Miami Beach)
- `variables` — DB_VARIABLES genéricas de copy/configuración
- `sessions` — claude-tracker
- `costs` — cost-monitor
- `projects` — proyectos del tracker

---

## Repositorio

Pendiente crear: `unrealvillestudio-hub/UNRLVL-OPS`

No existe aún. Se crea al iniciar la sesión del sábado/lunes.

---

## Orden de trabajo para la sesión de inicio

1. **Audit DB_VARIABLES.xlsx** — leer el archivo del repo, mapear estructura actual, identificar inconsistencias
2. **Diseñar schema Supabase** — tablas, relaciones, tipos
3. **Crear proyecto en Supabase** — free tier, obtener URL y anon key
4. **Crear repo UNRLVL-OPS** en GitHub org
5. **Scaffolding del servicio** — estructura de archivos, dependencias
6. **Implementar módulo claude-tracker** — endpoints + cron + email
7. **Implementar módulo cost-monitor** — endpoints + UI de entrada de datos
8. **Deploy en Railway** — conectar repo, env vars, verificar crons
9. **Reconectar artifact** — apuntar tracker UI a los endpoints reales
10. **Migrar DB_VARIABLES** — poblar Supabase con datos existentes

---

## Notas de decisión importantes

- **Railway sobre Vercel** para servicios con estado y cron jobs (Vercel es serverless, no sirve para procesos persistentes)
- **Supabase sobre PlanetScale/Neon** — mejor free tier, auth incluido, realtime, dashboard amigable
- **Un solo servicio** (no dos repos separados) para tracker y cost-monitor — misma DB, mismo deploy
- **CoreProject no existe** en el repo — este CONTEXT.md vive en WebLab hasta que se cree
- **Tokens de Claude siempre manuales** — Anthropic no expone API de consumo para usuarios claude.ai; se copia desde Settings → Usage
