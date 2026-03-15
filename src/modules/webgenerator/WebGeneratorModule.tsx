import React, { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe, LayoutTemplate, ShoppingCart, Play, Square,
  ChevronRight, Copy, Check, Download, Trash2, BookOpen,
  AlertCircle, CheckCircle2, FileText, RotateCcw, Zap,
  Database, RefreshCw, Code2, FileCode, PenLine, Rss, Layers, X,
  CloudUpload, Clock, Monitor, Smartphone, Eye, ShoppingBag,
} from 'lucide-react';
import { saveDraft, SaveDraftResult } from '../../services/draftService';
import { BRAND_LIST, getBrandById, BrandId } from '../../config/brands';
import { BRAND_CONTEXTS } from '../../config/brandContexts';
import { hasBrandBlueprint } from '../../config/brandBlueprints';
import { WEB_PACKS, PACKS_BY_MODULE, PAGE_SECTIONS } from '../../config/packs';
import {
  runWebPack, runBlogPost, estimateTotalWords,
  getFileExtension, getMimeType, buildExportFile, resolveImagePlaceholders, injectProductImages,
  WebOutputMode, BlogSpec, BlogPostType,
} from '../../services/webEngine';
import { useWebOutputStore } from '../../store/useWebOutputStore';
import { useShopifyStore } from '../../store/useShopifyStore';
import { WebModuleId, WebLanguage, WebTone, WebPlatform, WebOutput, EcomProductContext, BlueprintImageToggles } from '../../core/types';
import { cn, Badge, Spinner } from '../../ui/components';
import { BlueprintPanel } from '../../ui/BlueprintPanel';
import { useBlueprintStore } from '../../store/useBlueprintStore';
import { EcomProductSelector, BlueprintImageTogglesPanel, buildEcomPromptContext } from './EcomProductSelector';
import { getCatalog } from '../../config/productCatalog';
import { BLUEPRINTS_RAW_BASE } from '../../config/brandAssets';
import { ThemePicker } from './ThemePicker';
import { getThemeById, buildThemePromptBlock } from '../../config/themeCatalog';
import { SalesLayerPanel } from './SalesLayerPanel';
import type { SalesPreset } from './SalesLayerPanel';

// ── TABS ───────────────────────────────────────────────────────────────────────
type MainTab = 'generator' | 'blog';

// ── MODULE CONFIG ──────────────────────────────────────────────────────────────
const MODULES: { id: WebModuleId; label: string; icon: React.ElementType; color: string; description: string }[] = [
  { id: "web",       label: "Web Generator",        icon: Globe,          color: "#3B82F6", description: "Sitios corporativos y marcas personales en WordPress" },
  { id: "landing",   label: "Landing Generator",    icon: LayoutTemplate, color: "#8B5CF6", description: "Landings de conversión — leads, ventas, agendamiento" },
  { id: "ecommerce", label: "E-Commerce Generator", icon: ShoppingCart,   color: "#22C55E", description: "Contenido para tiendas Shopify — listings, colecciones, home" },
];

const LANGUAGES: { id: WebLanguage; label: string }[] = [
  { id: "ES",    label: "Español neutro" },
  { id: "ES-FL", label: "Español Miami / FL" },
  { id: "EN",    label: "English" },
  { id: "ES+EN", label: "ES + EN (ambas)" },
];

const TONES: { id: WebTone; label: string; emoji: string }[] = [
  { id: "professional",   label: "Profesional", emoji: "👔" },
  { id: "conversational", label: "Cercano",      emoji: "💬" },
  { id: "luxury",         label: "Luxury",       emoji: "✨" },
  { id: "energetic",      label: "Energético",   emoji: "⚡" },
  { id: "technical",      label: "Técnico",      emoji: "🔬" },
  { id: "warm",           label: "Cálido",       emoji: "🤍" },
];

const OUTPUT_MODES: { id: WebOutputMode; label: string; icon: React.ElementType; color: string; description: string }[] = [
  { id: "html",     label: "HTML",     icon: Code2,    color: "#F97316", description: "HTML entregable — landings, product pages, previews" },
  { id: "liquid",   label: "Liquid",   icon: FileCode, color: "#06B6D4", description: "Sección nativa Shopify" },
];

const BLOG_TYPES: { id: BlogPostType; label: string; emoji: string; description: string }[] = [
  { id: "educativo", label: "Educativo",   emoji: "📚", description: "Guías y tutoriales de autoridad" },
  { id: "seo",       label: "SEO",         emoji: "🔍", description: "Optimizado para búsqueda orgánica" },
  { id: "producto",  label: "Producto",    emoji: "🛍️", description: "Content marketing de producto" },
  { id: "ugc",       label: "UGC / Story", emoji: "👤", description: "Estilo testimonial auténtico" },
];

// ── COPY BUTTON ────────────────────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="p-1.5 rounded-md hover:bg-white/10 text-zinc-500 hover:text-zinc-300 transition-colors"
    >
      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
    </button>
  );
}

// ── OUTPUT MODE BADGE ──────────────────────────────────────────────────────────
function OutputModeBadge({ mode }: { mode: WebOutputMode }) {
  const m = OUTPUT_MODES.find(o => o.id === mode)!;
  if (!m) return null;
  return (
    <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded font-mono font-bold"
      style={{ background: m.color + '20', color: m.color }}>
      <m.icon size={9} />
      {m.label}
    </span>
  );
}

// ── SECTION CARD ───────────────────────────────────────────────────────────────
function SectionCard({ section, live, aggro, outputMode }: {
  section: { sectionId: string; label: string; content: string };
  live?: boolean;
  aggro?: boolean;
  outputMode?: WebOutputMode;
}) {
  const [expanded, setExpanded] = useState(true);
  const [preview, setPreview]   = useState(false);
  const mode = outputMode ?? 'html';

  return (
    <div className={cn(
      "bg-zinc-900 border rounded-xl overflow-hidden transition-colors",
      aggro ? "border-orange-500/30" : live ? "border-accent/30" : "border-zinc-800"
    )}>
      <div
        className="flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-zinc-800/50 transition-colors"
        onClick={() => setExpanded(e => !e)}
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-zinc-600 uppercase">{section.sectionId}</span>
          <span className="text-sm font-bold text-zinc-300">{section.label}</span>
          <OutputModeBadge mode={mode} />
          {live && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
          {aggro && !live && <span className="text-[9px] font-mono text-orange-400/70 uppercase tracking-widest">aggro</span>}
        </div>
        <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
          {mode === 'html' && (
            <button
              onClick={() => setPreview(p => !p)}
              className={cn(
                "p-1.5 rounded-md text-zinc-500 transition-colors text-[10px] px-2",
                preview ? "bg-orange-500/20 text-orange-400" : "hover:bg-white/10 hover:text-zinc-300"
              )}
            >
              {preview ? 'Código' : 'Preview'}
            </button>
          )}
          {mode === 'liquid' && (
            <button
              onClick={() => setPreview(p => !p)}
              className={cn(
                "p-1.5 rounded-md text-zinc-500 transition-colors text-[10px] px-2",
                preview ? "bg-cyan-500/20 text-cyan-400" : "hover:bg-white/10 hover:text-zinc-300"
              )}
            >
              {preview ? 'Liquid' : 'Preview'}
            </button>
          )}
          <CopyButton text={section.content} />
          <ChevronRight size={14} className={cn("text-zinc-600 transition-transform", expanded && "rotate-90")} />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 border-t border-zinc-800">
              {mode === 'html' && preview ? (
                <div
                  className="rounded-lg overflow-auto bg-white p-2"
                  style={{ maxHeight: '400px' }}
                  dangerouslySetInnerHTML={{ __html: resolveImagePlaceholders(section.content) }}
                />
              ) : mode === 'liquid' && preview ? (
                <div
                  className="rounded-lg overflow-auto bg-white p-2"
                  style={{ maxHeight: '400px' }}
                  dangerouslySetInnerHTML={{
                    __html: (() => {
                      // Strip Liquid tags para preview estático
                      const stripped = section.content
                        .replace(/{%-?\s*schema\s*-?%}[\s\S]*?{%-?\s*endschema\s*-?%}/gi, '')
                        .replace(/{%-?\s*style\s*-?%}([\s\S]*?){%-?\s*endstyle\s*-?%}/gi, '<style>$1</style>')
                        .replace(/{%-?.*?-?%}/g, '')
                        .replace(/\{\{-?\s*(section\.settings\.\w+)\s*-?\}\}/g, (_, k) => {
                          const key = k.replace('section.settings.', '');
                          const defaults: Record<string,string> = {
                            heading: '[Título]', subheading: '[Subtítulo]', body_text: '[Cuerpo de texto]',
                            cta_label: 'Solicitar información', cta_url: '#', background_color: '#ffffff',
                            text_color: '#1a1a1a', eyebrow: '[Eyebrow]', heading2: '[Título 2]',
                          };
                          return defaults[key] ?? `[${key}]`;
                        })
                        .replace(/\{\{.*?\}\}/g, '[…]');
                      return stripped;
                    })()
                  }}
                />
              ) : (
                <pre className={cn(
                  "text-sm whitespace-pre-wrap leading-relaxed overflow-auto",
                  "text-zinc-400 font-mono"
                )} style={{ maxHeight: '400px' }}>
                  {section.content}
                </pre>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── OUTPUT HISTORY CARD ────────────────────────────────────────────────────────
function OutputHistoryCard({ output, onLoad, onDelete }: {
  output: WebOutput;
  onLoad: (o: WebOutput) => void;
  onDelete: (id: string) => void;
}) {
  const brand = getBrandById(output.brandId);
  const pack  = WEB_PACKS[output.packId];
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center gap-3 hover:border-zinc-700 transition-colors group">
      <div className="w-1 self-stretch rounded-full" style={{ backgroundColor: brand?.color || '#666' }} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-bold text-zinc-300 truncate">{brand?.name} — {pack?.label}</p>
          {output.superAggro && (
            <span className="text-[9px] font-bold text-orange-400 bg-orange-500/10 px-1 rounded">AGGRO</span>
          )}
          {(output as any).outputMode && <OutputModeBadge mode={(output as any).outputMode as WebOutputMode} />}
        </div>
        <p className="text-[10px] text-zinc-600">
          {output.wordCount} palabras · {new Date(output.generatedAt).toLocaleDateString('es-ES')} · {output.language} · {output.platform}
        </p>
      </div>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={() => onLoad(output)} className="p-1.5 rounded-md hover:bg-zinc-700 text-zinc-500 hover:text-zinc-300 transition-colors" title="Cargar">
          <BookOpen size={13} />
        </button>
        <button onClick={() => onDelete(output.id)} className="p-1.5 rounded-md hover:bg-red-500/20 text-zinc-500 hover:text-red-400 transition-colors" title="Eliminar">
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );
}

// ── PLATFORM TOGGLE ────────────────────────────────────────────────────────────
// ── SHARED PREVIEW CSS ────────────────────────────────────────────────────────
const PREVIEW_BASE_CSS = `
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; overflow-x: hidden; width: 100%; }
  a { color: inherit; }
  .rg-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px 56px; }
  .rg-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
  .rg-auto { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px,100%), 1fr)); }
  .rg-contact { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
  .rg-contact-aggro { display: grid; grid-template-columns: 1fr 1.6fr; gap: 64px; align-items: start; }
  @media (max-width: 860px) {
    .rg-2, .rg-3, .rg-auto, .rg-contact, .rg-contact-aggro {
      grid-template-columns: 1fr !important; gap: 24px !important;
    }
  }
  a[class*="cta"], button[class*="cta"], .cta-button { display: inline-block; }
`;

const FIRMA_HTML = `<footer style="background:#0E1018;text-align:center;font-family:'DM Sans','Inter',system-ui,sans-serif;font-size:11px;letter-spacing:0.04em;color:#6B6460;padding:18px 24px 20px;margin-top:0;line-height:1.6;border-top:1px solid #1e1e2a;">Designed &amp; Developed by <a href="#" style="color:#C4622D;font-weight:600;text-decoration:none;">Unreal&gt;ille Studio</a><br><span style="font-size:10px;color:#6B6460;">1303 N 46th Ave, Hollywood, FL 33021</span></footer>`;

// ── FULL PAGE PREVIEW MODAL ────────────────────────────────────────────────────
function FullPagePreviewModal({
  sections,
  onClose,
}: {
  sections: { sectionId: string; label: string; content: string }[];
  onClose: () => void;
}) {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');

  const srcdoc = useMemo(() => {
    // Preview siempre en HTML — Liquid solo en Landing/Ecom que no pasan por este modal
    const body = sections.map(s => s.content).join('\n\n');
    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview — WebLab</title>
  <style>${PREVIEW_BASE_CSS}</style>
</head>
<body>
${body}
${FIRMA_HTML}
</body>
</html>`;
  }, [sections]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: 'rgba(0,0,0,0.93)' }}>
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-zinc-800 bg-zinc-950 shrink-0">
        {/* Left: label */}
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Preview</span>
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400">HTML</span>
        </div>

        {/* Center: viewport toggle */}
        <div className="flex items-center gap-0.5 bg-zinc-900 border border-zinc-700 rounded-lg p-0.5">
          {(['desktop', 'mobile'] as const).map(v => (
            <button
              key={v}
              onClick={() => setViewport(v)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all",
                viewport === v ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              {v === 'desktop' ? <Monitor size={12} /> : <Smartphone size={12} />}
              {v === 'desktop' ? 'Desktop' : 'Mobile'}
            </button>
          ))}
        </div>

        {/* Right: close */}
        <button
          onClick={onClose}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-800 hover:bg-red-500/20 hover:text-red-400 text-zinc-400 transition-colors"
          title="Cerrar preview"
        >
          <X size={14} />
        </button>
      </div>

      {/* ── Canvas ── */}
      <div
        className="flex-1 overflow-hidden flex items-stretch justify-center"
        style={{ background: viewport === 'mobile' ? '#18181b' : '#fff' }}
      >
        <div
          className="transition-all duration-300 shadow-2xl overflow-hidden bg-white"
          style={{
            width: viewport === 'mobile' ? '390px' : '100%',
            maxWidth: viewport === 'desktop' ? '1440px' : '390px',
            borderRadius: viewport === 'mobile' ? '16px' : '0',
            margin: viewport === 'mobile' ? '16px auto' : '0',
            flex: viewport === 'desktop' ? '1' : undefined,
          }}
        >
          <iframe
            key={viewport}
            srcDoc={srcdoc}
            title="WebLab Preview"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </div>
    </div>
  );
}

function PlatformToggle({ value, onChange, wordpressOnly }: {
  value: WebPlatform;
  onChange: (p: WebPlatform) => void;
  wordpressOnly?: boolean;
}) {
  if (wordpressOnly) {
    return (
      <div className="flex rounded-lg overflow-hidden border border-zinc-700 opacity-75">
        <div className="flex-1 py-1.5 text-xs font-bold text-center bg-blue-500/20 text-blue-400">
          ⚙️ WordPress
        </div>
      </div>
    );
  }
  return (
    <div className="flex rounded-lg overflow-hidden border border-zinc-700">
      {(['wordpress', 'shopify'] as WebPlatform[]).map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={cn(
            "flex-1 py-1.5 text-xs font-bold transition-colors",
            value === p
              ? p === 'shopify' ? "bg-emerald-500/20 text-emerald-400" : "bg-blue-500/20 text-blue-400"
              : "text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800"
          )}
        >
          {p === 'wordpress' ? '⚙️ WordPress' : '🛍️ Shopify'}
        </button>
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN MODULE
// ══════════════════════════════════════════════════════════════════════════════
export default function WebGeneratorModule() {
  const { outputs, addOutput, removeOutput } = useWebOutputStore();
  const shopifyStore = useShopifyStore();
  const [shopifyPushing, setShopifyPushing] = useState(false);
  const [shopifyPushResult, setShopifyPushResult] = useState<{url: string; title: string} | null>(null);

  // Auto-verificar conexión Shopify si hay token en store pero no está marcado connected
  useEffect(() => {
    if (shopifyStore.token && !shopifyStore.connected) {
      fetch('/api/shopify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shop: shopifyStore.shop,
          token: shopifyStore.token,
          endpoint: '/admin/api/2024-01/shop.json',
        }),
      })
        .then(r => r.ok ? r.json() : null)
        .then(data => { if (data?.shop) shopifyStore.setConnected(true); })
        .catch(() => {});
    }
  }, [shopifyStore.token]);
  const { getSlotContext, slots } = useBlueprintStore();

  // ── Main tab ──
  const [mainTab, setMainTab] = useState<MainTab>('generator');

  // ── Generator state ──
  const [activeModule, setActiveModule]           = useState<WebModuleId>("web");
  const [brandId, setBrandId]                     = useState(BRAND_LIST[0].id);
  const [packId, setPackId]                       = useState(PACKS_BY_MODULE.web[0].id);
  const [language, setLanguage]                   = useState<WebLanguage>("ES-FL");
  const [tone, setTone]                           = useState<WebTone>("professional");
  const [platform, setPlatform]                   = useState<WebPlatform>("wordpress");
  const [outputMode, setOutputMode]               = useState<WebOutputMode>("html");
  const [superAggro, setSuperAggro]               = useState(false);
  const [selectedThemeId, setSelectedThemeId]     = useState<string | null>(null);
  const [showThemePicker, setShowThemePicker]     = useState(false);
  const [showPreview, setShowPreview]             = useState(false);
  const [dbPromptMode, setDbPromptMode]           = useState(false);
  const [dbPromptText, setDbPromptText]           = useState('');
  const [autoFilled, setAutoFilled]               = useState(false);
  const [extraContext, setExtraContext]            = useState('');
  // Blueprint context se lee del store al generar — no se inyecta en el textarea
  const [productName, setProductName]             = useState('');
  const [productBenefits, setProductBenefits]     = useState('');
  const [productAudience, setProductAudience]     = useState('');
  const [productCompliance, setProductCompliance] = useState('');

  // ── Ecommerce product context (replaces generic productSpec for ecommerce) ──
  const [ecomCtx, setEcomCtx]                     = useState<EcomProductContext>({});
  const [githubToken, setGithubToken]             = useState('');
  // ── Blueprint image toggles ──
  const [bpToggles, setBpToggles]                 = useState<BlueprintImageToggles>({ usePersonBP: true, useLocationBP: true });
  const [isGenerating, setIsGenerating]           = useState(false);
  const [salesLayerReady, setSalesLayerReady]     = useState(false);
  const [salesLayerHtml, setSalesLayerHtml]       = useState<string | null>(null);
  const [salesLayerInserted, setSalesLayerInserted] = useState(false);
  const [blogSalesLayerReady, setBlogSalesLayerReady] = useState(false);
  const [draftSaving, setDraftSaving]             = useState(false);
  const [draftResult, setDraftResult]             = useState<SaveDraftResult | null>(null);
  const [draftError, setDraftError]               = useState("");
  const [liveSections, setLiveSections]           = useState<WebOutput["sections"]>([]);
  const [currentSection, setCurrentSection]       = useState('');
  const [result, setResult]                       = useState<WebOutput | null>(null);
  const [error, setError]                         = useState('');
  const [showHistory, setShowHistory]             = useState(false);

  // ── Blog state ──
  const [blogBrandId, setBlogBrandId]       = useState(BRAND_LIST[0].id);
  const [blogTopic, setBlogTopic]           = useState('');
  const [blogKeywords, setBlogKeywords]     = useState('');
  const [blogType, setBlogType]             = useState<BlogPostType>('educativo');
  const [blogLanguage, setBlogLanguage]     = useState<WebLanguage>("ES-FL");
  const [blogWordCount, setBlogWordCount]   = useState(800);
  const [blogOutputMode, setBlogOutputMode] = useState<WebOutputMode>("html");
  const [blogContext, setBlogContext]       = useState('');
  const [blogAutoFilled, setBlogAutoFilled]   = useState(false);
  const [blogDbPromptMode, setBlogDbPromptMode] = useState(false);
  const [blogDbPromptText, setBlogDbPromptText] = useState('');
  const [blogGenerating, setBlogGenerating] = useState(false);
  const [blogResult, setBlogResult]         = useState<string | null>(null);
  const [blogError, setBlogError]           = useState('');

  const abortRef = useRef<AbortController | null>(null);

  const brand        = useMemo(() => BRAND_LIST.find(b => b.id === brandId) ?? BRAND_LIST[0], [brandId]);
  const blogBrand    = useMemo(() => BRAND_LIST.find(b => b.id === blogBrandId) ?? BRAND_LIST[0], [blogBrandId]);
  const pack         = useMemo(() => WEB_PACKS[packId], [packId]);
  const estimatedWords = useMemo(() => pack ? estimateTotalWords(pack.sections) : 0, [pack]);
  const modulePacks  = useMemo(() => PACKS_BY_MODULE[activeModule], [activeModule]);

  // ── DB_VARIABLES auto-fill on brand change ────────────────────────────────
  useEffect(() => {
    const ctx = BRAND_CONTEXTS[brandId as BrandId];
    if (ctx) {
      setExtraContext(ctx.extraContext);
      if (ctx.productAudience)   setProductAudience(ctx.productAudience);
      if (ctx.productCompliance) setProductCompliance(ctx.productCompliance);
      setPlatform(ctx.defaultPlatform);
      setAutoFilled(true);
    } else {
      setAutoFilled(false);
    }
    setProductName('');
    setProductBenefits('');
  }, [brandId]);

  // ── DB_VARIABLES auto-fill on blog brand change ──────────────────────────
  useEffect(() => {
    const ctx = BRAND_CONTEXTS[blogBrandId as BrandId];
    if (ctx) {
      setBlogContext(ctx.extraContext);
      setBlogAutoFilled(true);
    } else {
      setBlogAutoFilled(false);
    }
  }, [blogBrandId]);

  // ── Handler: Shopify Push ────────────────────────────────────────────────
  async function handleShopifyPush() {
    if (!result || !shopifyStore.connected || shopifyPushing) return;
    setShopifyPushing(true);
    setShopifyPushResult(null);
    try {
      const resolvedMode = ((result as any).outputMode as WebOutputMode) ?? outputMode;
      // Mapa imagen: CDN Shopify (si sincronizado) → fallback BluePrints
      const _cdnMap = shopifyStore.cdnImageMap;
      const _catalog = getCatalog(brandId);
      const _imgMap: Record<string, string> = {};
      _catalog.flatMap(c => c.products).forEach(p => {
        if (p.image_filename) _imgMap[p.display_name] = `${BLUEPRINTS_RAW_BASE}/assets/images/products/${p.image_filename}`;
      });
      // CDN sobreescribe fallback cuando disponible
      Object.assign(_imgMap, _cdnMap);
      const baseHtml = injectProductImages(buildExportFile(result.sections, resolvedMode, result.superAggro ?? false), _imgMap);
      // Sales Layer: insertar ANTES del último </div> o </section> del output
      const html = salesLayerHtml && salesLayerInserted
        ? baseHtml + '\n\n<!-- ═══ SALES LAYER ═══ -->\n' + salesLayerHtml + '\n<!-- ═══ /SALES LAYER ═══ -->'
        : baseHtml;
      // Título: si es collection page usar "Línea X" con nombre de colección
      const collectionName = ecomCtx?.collectionId
        ? getCatalog(brandId).find(c => c.id === ecomCtx.collectionId)?.label ?? pack?.label
        : pack?.label;
      const pageTitle = pack?.id === 'ecom_collection'
        ? `Línea ${collectionName ?? 'Colección'}`
        : pack?.id === 'ecom_homepage'
        ? `${brand?.name ?? 'Neurone'} — Tienda`
        : `${brand?.name ?? 'Neurone'} — ${pack?.label ?? 'Página'}`;

      // ── Upsert: buscar página existente por título ──────────────────────
      const searchRes = await fetch('/api/shopify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shop: shopifyStore.shop,
          token: shopifyStore.token,
          endpoint: `/admin/api/2024-01/pages.json?title=${encodeURIComponent(pageTitle)}&fields=id,title`,
          method: 'GET',
        }),
      });
      const searchData = await searchRes.json();
      const existingPage = searchData.pages?.[0];

      let pageId: number;
      let pageData: any;

      if (existingPage?.id) {
        // UPDATE — página existe
        const putRes = await fetch('/api/shopify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            shop: shopifyStore.shop,
            token: shopifyStore.token,
            endpoint: `/admin/api/2024-01/pages/${existingPage.id}.json`,
            method: 'PUT',
            body: { page: { id: existingPage.id, title: pageTitle, body_html: html, published: true } },
          }),
        });
        pageData = await putRes.json();
        if (!putRes.ok) throw new Error(pageData?.errors ? JSON.stringify(pageData.errors) : `HTTP ${putRes.status}`);
        pageId = pageData.page?.id;
      } else {
        // CREATE — página nueva
        const postRes = await fetch('/api/shopify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            shop: shopifyStore.shop,
            token: shopifyStore.token,
            endpoint: '/admin/api/2024-01/pages.json',
            method: 'POST',
            body: { page: { title: pageTitle, body_html: html, published: true } },
          }),
        });
        pageData = await postRes.json();
        if (!postRes.ok) throw new Error(pageData?.errors ? JSON.stringify(pageData.errors) : `HTTP ${postRes.status}`);
        pageId = pageData.page?.id;
      }

      const shopDomain = shopifyStore.shop.replace('.myshopify.com', '');
      setShopifyPushResult({
        url: `https://admin.shopify.com/store/${shopDomain}/pages/${pageId}`,
        title: pageData.page?.title ?? pageTitle,
      });
    } catch (e: any) {
      alert(`Error push Shopify: ${e.message}`);
    } finally {
      setShopifyPushing(false);
    }
  }

  // ── Handlers: Generator ──────────────────────────────────────────────────
  const handleModuleChange = (mod: WebModuleId) => {
    setActiveModule(mod);
    setPackId(PACKS_BY_MODULE[mod][0].id);
    setLiveSections([]);
    setResult(null);
    setError('');
    setSalesLayerReady(false);
    setSalesLayerHtml(null);
    setSalesLayerInserted(false);
    // Web e-institutional/personal siempre en WordPress — Shopify no aplica
    if (mod === 'web') setPlatform('wordpress');
    // Web: solo HTML — Liquid no aplica en WordPress
    if (mod === 'web') setOutputMode('html');
  };

  const handleReloadDB = () => {
    const ctx = BRAND_CONTEXTS[brandId as BrandId];
    if (ctx) {
      setExtraContext(ctx.extraContext);
      if (ctx.productAudience)   setProductAudience(ctx.productAudience);
      if (ctx.productCompliance) setProductCompliance(ctx.productCompliance);
      setPlatform(ctx.defaultPlatform);
      setAutoFilled(true);
    }
  };

  const handleRun = async () => {
    if (!brand || !pack) return;
    setIsGenerating(true);
    setLiveSections([]);
    setResult(null);
    setError('');
    abortRef.current = new AbortController();

    const productSpec = (productName || productBenefits) ? {
      name: productName,
      category: brand.description,
      keyBenefits: productBenefits,
      targetAudience: productAudience,
      complianceNotes: productCompliance,
    } : undefined;

    // Combinar contexto de marca + blueprints activos (invisible para el usuario)
    // Filtrar BPs según toggles: si usePersonBP=false excluir BP_PERSON, idem Location
    const rawBpContext = getSlotContext();
    let filteredBpContext = rawBpContext || '';
    if (!bpToggles.usePersonBP) {
      // Strip BP_PERSON block — simple heuristic, works with current slot format
      filteredBpContext = filteredBpContext.replace(/BP_PERSON[^─]*──[^─]*/g, '');
    }
    if (!bpToggles.useLocationBP) {
      filteredBpContext = filteredBpContext.replace(/BP_LOCATION[^─]*──[^─]*/g, '');
    }

    // Product context injection — both ecommerce and landing use BP selector
    const ecomContext = (activeModule === 'ecommerce' || activeModule === 'landing')
      ? buildEcomPromptContext(ecomCtx, brandId)
      : '';

    // Theme context injection
    const themeContext = selectedThemeId
      ? '\n\n' + buildThemePromptBlock(getThemeById(selectedThemeId)!, superAggro)
      : '';

    const fullContext = extraContext + ecomContext + themeContext + (filteredBpContext || '');

    try {
      const output = await runWebPack({
        brand,
        pack,
        language,
        tone,
        platform,
        productSpec,
        extraContext: fullContext,
        dbPrompt: dbPromptMode && dbPromptText.trim() ? dbPromptText : undefined,
        superAggro,
        outputMode,
        signal: abortRef.current.signal,
        onSectionComplete: (sectionId, content) => {
          const section = PAGE_SECTIONS[sectionId as keyof typeof PAGE_SECTIONS];
          setLiveSections(prev => [...prev, { sectionId, label: section?.label ?? sectionId, content }]);
          setCurrentSection('');
        },
      });
      setResult(output);
      addOutput(output);
      if (activeModule === 'ecommerce' || activeModule === 'landing') setSalesLayerReady(true);
    } catch (e: any) {
      if (e.name !== 'AbortError') setError(e.message ?? 'Error desconocido');
    } finally {
      setIsGenerating(false);
      setCurrentSection('');
    }
  };

  const handleStop = () => { abortRef.current?.abort(); setIsGenerating(false); };

  const handleReset = () => {
    const ctx = BRAND_CONTEXTS[BRAND_LIST[0].id as BrandId];
    setBrandId(BRAND_LIST[0].id);
    setPackId(PACKS_BY_MODULE[activeModule][0].id);
    setLanguage("ES-FL");
    setTone("professional");
    setPlatform(ctx?.defaultPlatform ?? "wordpress");
    setOutputMode("html");
    setSuperAggro(false);
    setDbPromptMode(false);
    setDbPromptText('');
    setExtraContext(ctx?.extraContext ?? '');
    setProductName('');
    setProductBenefits('');
    setProductAudience(ctx?.productAudience ?? '');
    setProductCompliance(ctx?.productCompliance ?? '');
    setEcomCtx({});
    setBpToggles({ usePersonBP: true, useLocationBP: true });
    setAutoFilled(!!ctx);
    setResult(null);
    setError('');
    setLiveSections([]);
  };

  const handleExport = () => {
    if (!result) return;
    const resolvedMode = ((result as any).outputMode as WebOutputMode) ?? outputMode;
    const ext     = getFileExtension(resolvedMode);
    const mime    = getMimeType(resolvedMode);
    const content = buildExportFile(result.sections, resolvedMode, result.superAggro ?? false);
    const blob = new Blob([content], { type: mime });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `weblab_${brand.id}_${pack.id}_${result.superAggro ? 'AGGRO_' : ''}${Date.now()}.${ext}`;
    a.click();
  };

  const handleSaveDraft = async () => {
    if (!result || !githubToken.trim()) return;
    setDraftSaving(true);
    setDraftError('');
    setDraftResult(null);
    try {
      const resolvedMode = ((result as any).outputMode as WebOutputMode) ?? outputMode;
      const _cat2 = getCatalog(brandId);
      const _imap2: Record<string, string> = { ...shopifyStore.cdnImageMap };
      _cat2.flatMap(c => c.products).forEach(p => {
        if (p.image_filename && !_imap2[p.display_name])
          _imap2[p.display_name] = `${BLUEPRINTS_RAW_BASE}/assets/images/products/${p.image_filename}`;
      });
      const content = injectProductImages(buildExportFile(result.sections, resolvedMode, result.superAggro ?? false), _imap2);
      const saved = await saveDraft({
        token:      githubToken,
        brandId:    brand.id,
        brandName:  brand.name,
        packId:     pack.id,
        packLabel:  pack.label,
        module:     activeModule,
        outputMode: resolvedMode,
        themeId:    selectedThemeId,
        aggro:      !!result.superAggro,
        language:   result.language,
        platform:   result.platform,
        content,
        sections:   result.sections.length,
      });
      setDraftResult(saved);
    } catch (e: any) {
      setDraftError(e.message ?? 'Error al guardar borrador');
    } finally {
      setDraftSaving(false);
    }
  };

  // ── Handlers: Blog ──────────────────────────────────────────────────────
  const handleBlogRun = async () => {
    if (!blogTopic.trim()) return;
    setBlogGenerating(true);
    setBlogResult(null);
    setBlogError('');
    setBlogSalesLayerReady(false);
    abortRef.current = new AbortController();

    const blogSpec: BlogSpec = {
      postType: blogType,
      topic: blogTopic,
      keywords: blogKeywords ? blogKeywords.split(',').map(k => k.trim()).filter(Boolean) : [],
      wordCount: blogWordCount,
    };

    try {
      const res = await runBlogPost({
        brand: blogBrand,
        blog: blogSpec,
        language: blogLanguage,
        platform: "wordpress",
        outputMode: blogOutputMode,
        extraContext: (blogDbPromptMode && blogDbPromptText.trim()) ? blogDbPromptText : (blogContext || undefined),
        signal: abortRef.current.signal,
      });
      setBlogResult(res.content);
      setBlogSalesLayerReady(true);
    } catch (e: any) {
      if (e.name !== 'AbortError') setBlogError(e.message ?? 'Error desconocido');
    } finally {
      setBlogGenerating(false);
    }
  };

  const handleBlogExport = () => {
    if (!blogResult) return;
    const ext  = getFileExtension(blogOutputMode);
    const mime = getMimeType(blogOutputMode);
    const blob = new Blob([blogResult], { type: mime });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `bloglab_${blogBrand.id}_${Date.now()}.${ext}`;
    a.click();
  };

  const displaySections     = result ? result.sections : liveSections;
  const completedSectionIds = new Set(liveSections.map(s => s.sectionId));
  const activeOutputMode    = ((result as any)?.outputMode as WebOutputMode) ?? outputMode;

  return (
    <div className="space-y-4">
      {/* ── THEME PICKER OVERLAY ── */}
      <AnimatePresence>
        {showThemePicker && (
          <ThemePicker
            currentThemeId={selectedThemeId}
            aggroMode={superAggro}
            onSelect={(id) => setSelectedThemeId(id)}
            onClose={() => setShowThemePicker(false)}
          />
        )}
      </AnimatePresence>

      {/* ── FULL PAGE PREVIEW MODAL ── */}
      {showPreview && result && (
        <FullPagePreviewModal
          sections={result.sections}
          onClose={() => setShowPreview(false)}
        />
      )}

      {/* ── MAIN TABS ── */}
      <div className="flex gap-1 bg-zinc-900 border border-zinc-800 rounded-xl p-1 w-fit">
        <button
          onClick={() => setMainTab('generator')}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
            mainTab === 'generator' ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-300"
          )}
        >
          <Globe size={14} />
          Web Generator
        </button>
        <button
          onClick={() => setMainTab('blog')}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
            mainTab === 'blog' ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-300"
          )}
        >
          <Rss size={14} />
          BlogLab
        </button>
      </div>

      {/* ══════════════════════════════════════════════════════
          TAB: GENERATOR
      ══════════════════════════════════════════════════════ */}
      {mainTab === 'generator' && (
        <div className="flex gap-6">

          {/* ── LEFT PANEL ── */}
          <aside className="w-72 shrink-0 space-y-4">

            {/* Module selector */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-1.5">
              {MODULES.map(m => (
                <button
                  key={m.id}
                  onClick={() => handleModuleChange(m.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-left",
                    activeModule === m.id ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
                  )}
                >
                  <m.icon size={15} style={{ color: activeModule === m.id ? m.color : undefined }} />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-xs">{m.label}</p>
                    <p className="text-[10px] text-zinc-600 truncate">{m.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Brand */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Marca</p>
                {autoFilled && (
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-accent/70 font-mono">DB</span>
                    <button
                      onClick={handleReloadDB}
                      title="Recargar datos DB_VARIABLES"
                      className="p-0.5 rounded hover:bg-zinc-700 text-zinc-600 hover:text-accent transition-colors"
                    >
                      <RefreshCw size={10} />
                    </button>
                  </div>
                )}
              </div>
              <select
                value={brandId}
                onChange={e => setBrandId(e.target.value as BrandId)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-accent/50 transition-colors"
              >
                {BRAND_LIST.map(b => <option key={b.id} value={b.id}>{(b as any).emoji} {b.name}</option>)}
              </select>
              <div className="flex items-center gap-2 px-1">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.color }} />
                <span className="text-[10px] text-zinc-600">{brand.market} · {(brand as any).channels?.join(', ')}</span>
              </div>
              {hasBrandBlueprint(brandId) && (
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/25 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-[9px] font-semibold text-blue-400 tracking-wide uppercase">
                    Brand context — injected by default
                  </span>
                </div>
              )}
            </div>

            {/* Output Mode */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2">
              <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Output Mode</p>
              <div className="space-y-1">
                {OUTPUT_MODES
                  .filter(m => activeModule === 'web' ? m.id === 'html' : true)
                  .map(m => (
                  <button
                    key={m.id}
                    onClick={() => setOutputMode(m.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all text-left",
                      outputMode === m.id ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
                    )}
                  >
                    <m.icon size={13} style={{ color: outputMode === m.id ? m.color : undefined }} />
                    <div>
                      <p className="font-bold">{m.label}</p>
                      <p className="text-zinc-600 text-[10px]">{m.description}</p>
                    </div>
                    {outputMode === m.id && (
                      <span className="ml-auto text-[9px] font-mono opacity-50">.{getFileExtension(m.id)}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Pack */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2">
              <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Pack</p>
              <div className="space-y-1">
                {modulePacks.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPackId(p.id)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg text-xs transition-all",
                      packId === p.id ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
                    )}
                  >
                    <p className="font-bold">{p.label}</p>
                    <p className="text-zinc-600 text-[10px] mt-0.5">{p.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Language, Tone, Platform */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-3">
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Plataforma</p>
                <PlatformToggle value={platform} onChange={setPlatform} wordpressOnly={activeModule === 'web'} />
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Idioma</p>
                <select
                  value={language}
                  onChange={e => setLanguage(e.target.value as WebLanguage)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-accent/50"
                >
                  {LANGUAGES.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
                </select>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Tono</p>
                <div className="grid grid-cols-3 gap-1">
                  {TONES.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTone(t.id)}
                      className={cn(
                        "flex flex-col items-center gap-0.5 py-1.5 rounded-lg text-[10px] transition-all",
                        tone === t.id ? "bg-zinc-700 text-white" : "text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800"
                      )}
                    >
                      <span>{t.emoji}</span>
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* History toggle */}
            <button
              onClick={() => setShowHistory(v => !v)}
              className="w-full flex items-center justify-between px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-colors"
            >
              <span className="flex items-center gap-1.5"><FileText size={12} />Historial ({outputs.length})</span>
              <ChevronRight size={12} className={cn("transition-transform", showHistory && "rotate-90")} />
            </button>
          </aside>

          {/* ── MAIN PANEL ── */}
          <div className="flex-1 min-w-0 space-y-4">

            {/* History */}
            <AnimatePresence>
              {showHistory && outputs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2">
                    <p className="text-[10px] uppercase font-bold text-zinc-600 px-1">Generaciones anteriores</p>
                    {outputs.map(o => (
                      <OutputHistoryCard
                        key={o.id}
                        output={o}
                        onLoad={o => { setResult(o); setLiveSections([]); setOutputMode(((o as any).outputMode as WebOutputMode) ?? 'html'); }}
                        onDelete={removeOutput}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── PANEL CONTEXTO ── */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Contexto de marca</p>
                  {autoFilled && (
                    <span className="flex items-center gap-1 text-[9px] text-accent/60 font-mono">
                      <Database size={9} /> DB auto-fill
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setDbPromptMode(v => !v)}
                  className={cn(
                    "flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-md font-medium transition-colors border",
                    dbPromptMode
                      ? "bg-accent/15 border-accent/40 text-accent"
                      : "bg-zinc-800 border-zinc-700 text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  <Database size={10} />
                  {dbPromptMode ? 'DB Prompt activo' : 'DB Prompt'}
                </button>
              </div>

              <AnimatePresence>
                {dbPromptMode && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-1">
                      <p className="text-[10px] text-accent/60 font-mono px-0.5">
                        Pega el bloque de prompt/contexto de DB_VARIABLES — reemplaza el contexto estándar
                      </p>
                      <textarea
                        value={dbPromptText}
                        onChange={e => setDbPromptText(e.target.value)}
                        placeholder="Contexto completo desde DB_VARIABLES (CONTEXTOS sheet, PersonBlueprint, o prompt personalizado)..."
                        rows={6}
                        className="w-full bg-zinc-800 border border-accent/30 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/60 resize-y font-mono text-xs"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {(activeModule === "ecommerce" || activeModule === "landing") && (
                <div className="space-y-3">
                  {/* Both E-Commerce and Landing: smart BP product selector */}
                  {/* Landing uses product pack (single product focus) — same selector, same BP context */}
                  <EcomProductSelector
                    packId={packId}
                    brandId={brandId}
                    brandContext={extraContext}
                    value={ecomCtx}
                    onChange={setEcomCtx}
                    githubToken={githubToken}
                  />
                  {/* Landing: optional compliance/restriction field */}
                  {activeModule === "landing" && (
                    <input
                      value={productCompliance}
                      onChange={e => setProductCompliance(e.target.value)}
                      placeholder="Restricciones / compliance / objetivo de conversión (opcional)"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/50"
                    />
                  )}
                </div>
              )}

              <textarea
                value={extraContext}
                onChange={e => setExtraContext(e.target.value)}
                placeholder="Contexto de marca: propuesta única de valor, palabras clave SEO, tono específico, información especial..."
                rows={6}
                className={cn(
                  "w-full bg-zinc-800 border rounded-lg px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/50 resize-y transition-colors",
                  dbPromptMode ? "border-zinc-700 opacity-50" : "border-zinc-700"
                )}
                disabled={dbPromptMode && !!dbPromptText.trim()}
              />
              {dbPromptMode && dbPromptText.trim() && (
                <p className="text-[10px] text-zinc-600 -mt-1 px-0.5">
                  ↑ Contexto estándar ignorado — DB Prompt activo
                </p>
              )}
            </div>

            {/* ── PANEL BLUEPRINT IMAGE TOGGLES + TOKEN ── */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
              <BlueprintImageTogglesPanel value={bpToggles} onChange={setBpToggles} />
              {/* GitHub token — needed for Push Enhanced */}
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">GitHub Token (sesión)</p>
                <input
                  type="password"
                  value={githubToken}
                  onChange={e => setGithubToken(e.target.value)}
                  placeholder="ghp_... · Requerido para Push Enhanced Description"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-400 placeholder:text-zinc-700 outline-none focus:border-accent/50 font-mono"
                />
              </div>
            </div>

            {/* ── PANEL BLUEPRINTS ACTIVOS ── */}
            <div className={cn(
              "rounded-xl border p-4 space-y-3 transition-colors",
              Object.keys(slots).length > 0
                ? "bg-violet-950/20 border-violet-500/25"
                : "bg-zinc-900 border-zinc-800"
            )}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Blueprints</p>
                  {Object.keys(slots).length > 0 && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-400 font-bold">
                      {Object.keys(slots).length} activos — se inyectarán al generar
                    </span>
                  )}
                </div>
                <BlueprintPanel
                  injected={Object.keys(slots).length > 0}
                  onInject={() => {}}
                  onClearInjection={() => {}}
                />
              </div>

              {Object.keys(slots).length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {(Object.entries(slots) as [string, any][]).map(([slotId, bp]) => {
                    const colors: Record<string, string> = {
                      BP_PERSON:   'bg-blue-500/15 text-blue-300 border-blue-500/30',
                      BP_LOCATION: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
                      BP_PRODUCT:  'bg-amber-500/15 text-amber-300 border-amber-500/30',
                    };
                    const icons: Record<string, string> = { BP_PERSON: '👤', BP_LOCATION: '📍', BP_PRODUCT: '📦' };
                    return (
                      <div key={slotId} className={cn(
                        "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs",
                        colors[bp.type] || 'bg-zinc-800 text-zinc-300 border-zinc-700'
                      )}>
                        <span className="text-[10px] font-bold opacity-60">{slotId}</span>
                        <span>{icons[bp.type] || '🔹'}</span>
                        <span className="font-medium max-w-[120px] truncate">{bp.name}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xs text-zinc-600 italic">
                  Ningún blueprint asignado. Abre el panel BPs para importar y asignar slots.
                </p>
              )}
            </div>

            {/* Pack summary + controls */}
            <div className={cn(
              "border rounded-xl px-4 py-3 flex flex-col gap-2 transition-colors",
              superAggro ? "bg-orange-950/20 border-orange-500/30" : "bg-zinc-900 border-zinc-800"
            )}>
              {pack && (
                <>
                  {/* Fila 1: meta-badges */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-bold text-white mr-1">{pack.label}</span>
                    <Badge color={MODULES.find(m => m.id === activeModule)?.color}>{pack.sections.length} secciones</Badge>
                    <Badge color="#FFAB00">~{estimatedWords} palabras</Badge>
                    <Badge color="#6366F1">{language}</Badge>
                    <Badge color={platform === 'shopify' ? '#22C55E' : '#3B82F6'}>{platform}</Badge>
                    <OutputModeBadge mode={outputMode} />
                    {superAggro && <Badge color="#f97316">⚡ SUPER AGGRO</Badge>}
                  </div>
                  {/* Fila 2: section pills */}
                  <div className="flex gap-1 flex-wrap">
                    {pack.sections.map(sid => {
                      const s = PAGE_SECTIONS[sid as keyof typeof PAGE_SECTIONS];
                      const done = completedSectionIds.has(sid);
                      return (
                        <span key={sid} className={cn(
                          "text-[9px] px-1.5 py-0.5 rounded font-mono transition-colors",
                          done ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-600"
                        )}>
                          {s?.label ?? sid}
                        </span>
                      );
                    })}
                  </div>
                </>
              )}
              {/* Fila 3: botones — ancho completo, flex-wrap, sin competir con badges */}
              <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                {/* PICK THEME */}
                <button
                  onClick={() => setShowThemePicker(true)}
                  className={cn(
                    "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border",
                    selectedThemeId
                      ? "border-[var(--accent)]/50 text-[var(--accent)] bg-[var(--accent)]/10"
                      : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
                  )}
                  style={selectedThemeId ? { borderColor: getThemeById(selectedThemeId)?.palette.accent + '50', color: getThemeById(selectedThemeId)?.palette.accent, background: getThemeById(selectedThemeId)?.palette.accent + '15' } : {}}
                >
                  <Layers size={11} />
                  {selectedThemeId ? (
                    <span className="flex items-center gap-1">
                      {getThemeById(selectedThemeId)?.name}
                      <X size={9} className="opacity-60" onClick={e => { e.stopPropagation(); setSelectedThemeId(null); }} />
                    </span>
                  ) : 'Theme'}
                </button>
                {/* PREVIEW — visible solo cuando hay resultado */}
                {result && (
                  <button
                    onClick={() => setShowPreview(true)}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border",
                      activeOutputMode === 'liquid'
                        ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20"
                        : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:border-zinc-600"
                    )}
                    title="Preview completo — desktop y mobile"
                  >
                    <Eye size={11} /> Preview
                  </button>
                )}
                {/* SUPER AGGRO */}
                <button
                  onClick={() => setSuperAggro(v => !v)}
                  className={cn(
                    "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border",
                    superAggro
                      ? "bg-orange-500/20 border-orange-500/50 text-orange-400"
                      : "bg-zinc-800 border-zinc-700 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600"
                  )}
                >
                  <Zap size={11} className={superAggro ? "fill-orange-400" : ""} />
                  AGGRO
                </button>
                {/* Reset */}
                <button
                  onClick={handleReset}
                  disabled={isGenerating}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs font-medium transition-colors disabled:opacity-40"
                >
                  <RotateCcw size={11} />Reset
                </button>
                {/* Separador visual */}
                <div className="w-px h-5 bg-zinc-700 mx-0.5" />
                {/* Stop / Generate */}
                {isGenerating ? (
                  <button
                    onClick={handleStop}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium hover:bg-red-500/20"
                  >
                    <Square size={11} />Detener
                  </button>
                ) : (
                  <button
                    onClick={handleRun}
                    disabled={!pack}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all disabled:opacity-40",
                      superAggro ? "bg-orange-500 hover:bg-orange-400 text-black" : "bg-accent hover:bg-accent/90 text-black"
                    )}
                  >
                    <Play size={11} />
                    {superAggro ? '⚡ Generar AGGRO' : 'Generar'}
                  </button>
                )}
                {/* Separador visual */}
                {result && <div className="w-px h-5 bg-zinc-700 mx-0.5" />}
                {/* Export */}
                {result && (
                  <button
                    onClick={handleExport}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs transition-colors"
                    title={`Exportar .${getFileExtension(activeOutputMode)}`}
                  >
                    <Download size={11} />
                  </button>
                )}
                {/* Export Clean — sin banner AGGRO, listo para publicar */}
                {result && result.superAggro && (
                  <button
                    onClick={() => {
                      const resolvedMode = ((result as any).outputMode as WebOutputMode) ?? outputMode;
                      const ext  = getFileExtension(resolvedMode);
                      const mime = getMimeType(resolvedMode);
                      const content = buildExportFile(result.sections, resolvedMode, false);
                      const blob = new Blob([content], { type: mime });
                      const a = document.createElement('a');
                      a.href = URL.createObjectURL(blob);
                      a.download = `weblab_${brand?.id}_${pack?.id}_AGGRO_CLEAN_${Date.now()}.${ext}`;
                      a.click();
                    }}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-emerald-400 text-xs font-bold transition-colors"
                    title="Export sin advertencia AGGRO — listo para publicar"
                  >
                    <Download size={11} />
                    <span>CLEAN</span>
                  </button>
                )}
                {/* Save Draft */}
                {result && (
                  <button
                    onClick={handleSaveDraft}
                    disabled={draftSaving || !githubToken.trim()}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",
                      draftResult
                        ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
                        : draftSaving
                          ? "bg-zinc-800 text-zinc-500"
                          : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 disabled:opacity-40"
                    )}
                    title={!githubToken.trim() ? "Requiere GitHub Token" : "Guardar borrador en Drafts repo"}
                  >
                    {draftSaving
                      ? <><RefreshCw size={11} className="animate-spin" />Guardando...</>
                      : draftResult
                        ? <><Check size={11} />Guardado</>
                        : <><CloudUpload size={11} />Borrador</>
                    }
                  </button>
                )}
                {/* Insertar Sales Layer en output */}
                {salesLayerHtml && !salesLayerInserted && (
                  <button
                    onClick={() => setSalesLayerInserted(true)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-bold hover:bg-violet-500/25 transition-colors animate-pulse"
                  >
                    <Zap size={11} />+ Sales Layer
                  </button>
                )}
                {salesLayerInserted && (
                  <span className="flex items-center gap-1.5 text-[10px] text-violet-400 font-mono">
                    <Check size={10} />Sales Layer incluido
                  </span>
                )}
                {/* Push to Shopify — siempre visible, activo con result + connected */}
                <>
                  <div className="w-px h-5 bg-zinc-700 mx-0.5" />
                  {shopifyPushResult ? (
                    <a
                      href={shopifyPushResult.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-colors hover:bg-emerald-500/20"
                    >
                      <CheckCircle2 size={11} /> En Shopify ↗
                    </a>
                  ) : (
                    <button
                      onClick={handleShopifyPush}
                      disabled={shopifyPushing || !result || !shopifyStore.connected}
                      className={cn(
                        'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border',
                        result && shopifyStore.connected
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20'
                          : 'bg-zinc-800 border-zinc-700 text-zinc-600 cursor-not-allowed opacity-50',
                      )}
                      title={!shopifyStore.connected ? 'Conecta Shopify en el tab Shopify Push' : 'Push página a Shopify'}
                    >
                      {shopifyPushing
                        ? <RefreshCw size={11} className="animate-spin" />
                        : <ShoppingBag size={11} />}
                      {shopifyPushing ? 'Pushing...' : 'Shopify'}
                    </button>
                  )}
                </>
                {draftError && (
                  <span className="text-[10px] text-red-400 max-w-40 truncate" title={draftError}>
                    ⚠ {draftError}
                  </span>
                )}
                {draftResult && (
                  <a
                    href={draftResult.contentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors"
                    title="Ver en GitHub"
                  >
                    <Clock size={9} />
                    Expira {new Date(draftResult.expiresAt).toLocaleDateString('es-ES')}
                  </a>
                )}
              </div>
            </div>

            {/* Progress */}
            {isGenerating && (
              <div className={cn(
                "flex items-center gap-3 px-4 py-3 border rounded-xl text-sm",
                superAggro ? "bg-orange-500/5 border-orange-500/20 text-orange-400" : "bg-accent/5 border-accent/20 text-accent"
              )}>
                <Spinner size={14} />
                <span>
                  Generando sección {liveSections.length + 1} de {pack?.sections.length} · {outputMode}
                  {superAggro && " ⚡"}
                  {currentSection && ` — ${currentSection}`}
                </span>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
                <AlertCircle size={14} />{error}
              </div>
            )}

            {/* Output sections */}
            {displaySections.length > 0 && (
              <div className="space-y-3">
                {displaySections.map((s, i) => (
                  <SectionCard
                    key={s.sectionId + i}
                    section={s}
                    live={isGenerating && i === displaySections.length - 1}
                    aggro={result?.superAggro}
                    outputMode={activeOutputMode}
                  />
                ))}
                {/* ── POST-OUTPUT ACTIONS ── */}
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    {/* Banner generación completa */}
                    <div className={cn(
                      "flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm",
                      result.superAggro
                        ? "bg-orange-500/10 border-orange-500/20 text-orange-400"
                        : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    )}>
                      <CheckCircle2 size={14} />
                      Generación completa · {result.wordCount} palabras · {result.sections.length} secciones · {result.platform}
                      {result.superAggro && ' · ⚡ SUPER AGGRO'}
                      <span className="ml-auto text-[10px] font-mono opacity-50">
                        {new Date(result.generatedAt).toLocaleTimeString('es-ES')}
                      </span>
                    </div>

                    {/* ── FLUJO GUIADO POST-OUTPUT ── */}
                    {(activeModule === 'ecommerce' || activeModule === 'landing') && !salesLayerInserted && (
                      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
                        <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">¿Qué quieres hacer?</p>
                        <div className="flex gap-3 flex-wrap">
                          {/* Opción A: Push directo */}
                          <button
                            onClick={handleShopifyPush}
                            disabled={shopifyPushing || !shopifyStore.connected}
                            className={cn(
                              'flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold border transition-all',
                              shopifyStore.connected
                                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20'
                                : 'bg-zinc-800 border-zinc-700 text-zinc-600 cursor-not-allowed'
                            )}
                          >
                            {shopifyPushing ? <RefreshCw size={14} className="animate-spin" /> : <ShoppingBag size={14} />}
                            {shopifyPushing ? 'Pushing...' : shopifyStore.connected ? 'Push to Shopify' : 'Conecta Shopify primero'}
                          </button>
                          {/* Opción B: Sales Layer */}
                          <button
                            onClick={() => setSalesLayerReady(true)}
                            className="flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold border bg-violet-500/10 border-violet-500/40 text-violet-300 hover:bg-violet-500/20 transition-all"
                          >
                            <Zap size={14} />
                            Aplicar Sales Layer
                          </button>
                        </div>
                        {!shopifyStore.connected && (
                          <p className="text-[10px] text-zinc-600">
                            Para hacer push conecta Shopify en el tab correspondiente.
                          </p>
                        )}
                      </div>
                    )}

                    {/* Sales Layer enhanced — resultado final */}
                    {salesLayerInserted && salesLayerHtml && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-900 border border-violet-500/30 rounded-xl overflow-hidden"
                      >
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-violet-500/20">
                          <div className="flex items-center gap-2">
                            <Zap size={12} className="text-violet-400" />
                            <span className="text-xs font-bold text-violet-300">Sales Layer aplicado — output enhanced</span>
                          </div>
                          <button
                            onClick={() => { setSalesLayerHtml(null); setSalesLayerInserted(false); setSalesLayerReady(false); }}
                            className="text-zinc-600 hover:text-zinc-400 transition-colors"
                          >
                            <X size={12} />
                          </button>
                        </div>
                        <iframe
                          srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{margin:0;padding:0;background:#0E1018}</style></head><body>${salesLayerHtml}</body></html>`}
                          style={{ width: '100%', height: '400px', border: 'none', display: 'block' }}
                          sandbox="allow-scripts allow-same-origin"
                          title="Enhanced Output Preview"
                        />
                        {/* Push del enhanced output */}
                        <div className="px-4 py-3 border-t border-violet-500/20">
                          <button
                            onClick={handleShopifyPush}
                            disabled={shopifyPushing || !shopifyStore.connected}
                            className={cn(
                              'w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all',
                              shopifyStore.connected
                                ? 'bg-emerald-500 hover:bg-emerald-400 text-white'
                                : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                            )}
                          >
                            {shopifyPushing ? <RefreshCw size={13} className="animate-spin" /> : <ShoppingBag size={13} />}
                            {shopifyPushing ? 'Pushing...' : 'Push Enhanced to Shopify'}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* ── SALES LAYER PANEL (se activa al elegir la opción) ── */}
                {result && (activeModule === 'ecommerce' || activeModule === 'landing') && salesLayerReady && !salesLayerInserted && (
                  <SalesLayerPanel
                    context={activeModule}
                    brandId={brandId}
                    pulse={true}
                    outputMode={((result as any).outputMode as WebOutputMode) ?? outputMode}
                    baseHtml={(() => {
                      const resolvedMode = ((result as any).outputMode as WebOutputMode) ?? outputMode;
                      const _cat = getCatalog(brandId);
                      const _map: Record<string, string> = { ...shopifyStore.cdnImageMap };
                      _cat.flatMap(c => c.products).forEach(p => {
                        if (p.image_filename && !_map[p.display_name])
                          _map[p.display_name] = `${BLUEPRINTS_RAW_BASE}/assets/images/products/${p.image_filename}`;
                      });
                      return injectProductImages(buildExportFile(result.sections, resolvedMode, result.superAggro ?? false), _map);
                    })()}
                    onGenerate={(_preset: SalesPreset, _params, _html) => {
                      if (_html && _html.trim().length > 100) {
                        setSalesLayerHtml(_html);
                        setSalesLayerInserted(true);
                        setSalesLayerReady(false);
                      }
                    }}
                  />
                )}
              </div>
            )}

            {/* Empty state */}
            {!isGenerating && displaySections.length === 0 && !error && (
              <div className="flex flex-col items-center justify-center py-24 gap-3 text-zinc-700">
                <Globe size={40} strokeWidth={1} />
                <p className="text-sm">
                  Selecciona marca, pack, output mode e idioma y pulsa{' '}
                  <span className={cn("font-bold", superAggro ? "text-orange-400" : "text-accent")}>
                    {superAggro ? '⚡ Generar AGGRO' : 'Generar'}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          TAB: BLOGLAB
      ══════════════════════════════════════════════════════ */}
      {mainTab === 'blog' && (
        <div className="flex gap-6">

          {/* ── LEFT PANEL: Blog Config ── */}
          <aside className="w-72 shrink-0 space-y-4">

            {/* Brand */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2">
              <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Marca</p>
              <select value={blogBrandId} onChange={e => setBlogBrandId(e.target.value as BrandId)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-accent/50">
                {BRAND_LIST.map(b => <option key={b.id} value={b.id}>{(b as any).emoji} {b.name}</option>)}
              </select>
            </div>

            {/* Blog type */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2">
              <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Tipo de post</p>
              <div className="space-y-1">
                {BLOG_TYPES.map(t => (
                  <button key={t.id} onClick={() => setBlogType(t.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all text-left",
                      blogType === t.id ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
                    )}>
                    <span className="text-base">{t.emoji}</span>
                    <div>
                      <p className="font-bold">{t.label}</p>
                      <p className="text-zinc-600 text-[10px]">{t.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Output mode */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2">
              <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Output Mode</p>
              <div className="space-y-1">
                {OUTPUT_MODES.filter(m => m.id === 'html').map(m => (
                  <button key={m.id} onClick={() => setBlogOutputMode(m.id)}
                    className={cn(
                      "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all",
                      blogOutputMode === m.id ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
                    )}>
                    <m.icon size={12} style={{ color: blogOutputMode === m.id ? m.color : undefined }} />
                    <span className="font-bold">{m.label}</span>
                    <span className="text-zinc-600 text-[10px] ml-auto">.{getFileExtension(m.id)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Language + word count */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-3">
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Idioma</p>
                <select value={blogLanguage} onChange={e => setBlogLanguage(e.target.value as WebLanguage)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-accent/50">
                  {LANGUAGES.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
                </select>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Palabras objetivo</p>
                <select value={blogWordCount} onChange={e => setBlogWordCount(Number(e.target.value))}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-accent/50">
                  <option value={400}>~400 (corto)</option>
                  <option value={800}>~800 (estándar)</option>
                  <option value={1200}>~1200 (largo)</option>
                  <option value={1800}>~1800 (pillar)</option>
                </select>
              </div>
            </div>
          </aside>

          {/* ── MAIN PANEL: Blog ── */}
          <div className="flex-1 min-w-0 space-y-4">

            {/* Blog inputs */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
              <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Brief del post</p>
              <input value={blogTopic} onChange={e => setBlogTopic(e.target.value)}
                placeholder="Tema del post (ej: Cómo proteger el cabello en Miami durante el verano)"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/50"
              />
              <input value={blogKeywords} onChange={e => setBlogKeywords(e.target.value)}
                placeholder="Keywords SEO separadas por coma (opcional)"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/50"
              />
              {/* DB auto-fill label + DB Prompt toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Contexto de marca</p>
                  {blogAutoFilled && (
                    <span className="flex items-center gap-1 text-[9px] text-accent/60 font-mono">
                      <Database size={9} /> DB auto-fill
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setBlogDbPromptMode(v => !v)}
                  className={cn(
                    "flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-md font-medium transition-colors border",
                    blogDbPromptMode
                      ? "bg-accent/15 border-accent/40 text-accent"
                      : "bg-zinc-800 border-zinc-700 text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  <Database size={10} />
                  {blogDbPromptMode ? 'DB Prompt activo' : 'DB Prompt'}
                </button>
              </div>

              <AnimatePresence>
                {blogDbPromptMode && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-1">
                      <p className="text-[10px] text-accent/60 font-mono px-0.5">
                        Pega el bloque de prompt/contexto de DB_VARIABLES — reemplaza el contexto estándar
                      </p>
                      <textarea
                        value={blogDbPromptText}
                        onChange={e => setBlogDbPromptText(e.target.value)}
                        placeholder="Contexto completo desde DB_VARIABLES (CONTEXTOS sheet, PersonBlueprint, o prompt personalizado)..."
                        rows={6}
                        className="w-full bg-zinc-800 border border-accent/30 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/60 resize-y font-mono text-xs"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <textarea
                value={blogContext}
                onChange={e => setBlogContext(e.target.value)}
                placeholder="Contexto adicional de marca o producto (opcional)"
                rows={4}
                className={cn(
                  "w-full bg-zinc-800 border rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-accent/50 resize-y transition-colors",
                  blogDbPromptMode ? "border-zinc-700 opacity-50" : "border-zinc-700"
                )}
                disabled={blogDbPromptMode && !!blogDbPromptText.trim()}
              />
              {blogDbPromptMode && blogDbPromptText.trim() && (
                <p className="text-[10px] text-zinc-600 -mt-1 px-0.5">
                  ↑ Contexto estándar ignorado — DB Prompt activo
                </p>
              )}
            </div>

            {/* Blog controls */}
            <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-bold text-white">{blogBrand.name}</span>
                <Badge color="#FFAB00">{BLOG_TYPES.find(t => t.id === blogType)?.emoji} {BLOG_TYPES.find(t => t.id === blogType)?.label}</Badge>
                <Badge color="#6366F1">{blogLanguage}</Badge>
                <OutputModeBadge mode={blogOutputMode} />
              </div>
              <div className="flex gap-2">
                {blogGenerating ? (
                  <button onClick={() => { abortRef.current?.abort(); setBlogGenerating(false); }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/20">
                    <Square size={13} />Detener
                  </button>
                ) : (
                  <button onClick={handleBlogRun} disabled={!blogTopic.trim()}
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-accent hover:bg-accent/90 text-black text-sm font-bold transition-all disabled:opacity-40">
                    <PenLine size={13} />Generar post
                  </button>
                )}
                {blogResult && (
                  <button onClick={handleBlogExport}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm"
                    title={`Exportar .${getFileExtension(blogOutputMode)}`}>
                    <Download size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* Blog progress */}
            {blogGenerating && (
              <div className="flex items-center gap-3 px-4 py-3 bg-accent/5 border border-accent/20 rounded-xl text-sm text-accent">
                <Spinner size={14} />Generando post · {blogOutputMode} · ~{blogWordCount} palabras
              </div>
            )}

            {/* Blog error */}
            {blogError && (
              <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
                <AlertCircle size={14} />{blogError}
              </div>
            )}

            {/* Blog result */}
            {blogResult && !blogGenerating && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Rss size={13} className="text-accent" />
                    <span className="text-sm font-bold text-zinc-300">Post generado</span>
                    <OutputModeBadge mode={blogOutputMode} />
                  </div>
                  <CopyButton text={blogResult} />
                </div>
                <div className="p-4">
                  {blogOutputMode === 'html' ? (
                    <div className="rounded-lg bg-white p-4 overflow-auto" style={{ maxHeight: '600px' }}
                      dangerouslySetInnerHTML={{ __html: blogResult }} />
                  ) : (
                    <pre className="text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed font-mono overflow-auto"
                      style={{ maxHeight: '600px' }}>
                      {blogResult}
                    </pre>
                  )}
                </div>
              </div>
            )}

            {/* ── F7 SALES LAYER — BLOG ── */}
            {blogResult && !blogGenerating && (
              <SalesLayerPanel
                context="blog"
                blogPostType={blogType}
                brandId={blogBrandId}
                pulse={blogSalesLayerReady}
                onGenerate={(_preset: SalesPreset, _params, _html) => { setBlogSalesLayerReady(false); }}
              />
            )}

            {!blogGenerating && !blogResult && !blogError && (
              <div className="flex flex-col items-center justify-center py-24 gap-3 text-zinc-700">
                <Rss size={40} strokeWidth={1} />
                <p className="text-sm">Escribe el tema del post y pulsa <span className="text-accent font-bold">Generar post</span></p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}