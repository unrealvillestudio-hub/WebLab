import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap, ChevronDown, ChevronUp, Check, ExternalLink,
  Mail, Clock, Rocket, BookOpen,
  AlertCircle, Copy, Download, X,
} from 'lucide-react';
import { cn } from '../../ui/components';
import type { BlogPostType } from '../../services/webEngine';

// ── TIPOS ──────────────────────────────────────────────────────────────────────

export type SalesContext = 'ecommerce' | 'landing' | 'blog';
export type FunnelStage = 'TOFU' | 'MOFU' | 'BOFU';

export type SalesPresetId =
  | 'grow-list'
  | 'convert-now'
  | 'recover-traffic'
  | 'launch-product'
  | 'tofu-authority'
  | 'custom';

export interface SalesTactic {
  id: string;
  label: string;
  description: string;
}

export interface SalesPreset {
  id: SalesPresetId;
  label: string;
  tagline: string;
  rationale: string;
  funnel: FunnelStage;
  funnelLabel: string;
  icon: React.ElementType;
  color: string;
  tactics: SalesTactic[];
  contexts: SalesContext[];
  blogTypes?: BlogPostType[]; // undefined = todos los tipos
  params: SalesParam[];
}

export interface SalesParam {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'url' | 'date' | 'textarea';
  required: boolean;
  hint?: string;
}

// ── PRESETS ────────────────────────────────────────────────────────────────────

const PRESETS: SalesPreset[] = [
  {
    id: 'grow-list',
    label: 'Crecer Lista',
    tagline: 'Construye tu audiencia de cero',
    rationale: 'El form captura. La prueba social reduce fricción. El magnet filtra al curioso del prospecto real.',
    funnel: 'TOFU',
    funnelLabel: 'TOFU — Captación',
    icon: Mail,
    color: '#3B82F6',
    tactics: [
      { id: 'newsletter-form', label: 'Newsletter Form', description: 'Formulario above fold con CTA de suscripción' },
      { id: 'lead-magnet-gate', label: 'Lead Magnet Gate', description: 'Contenido premium desbloqueado por email' },
      { id: 'social-proof-feed', label: 'Social Proof Feed', description: 'Prueba social continua para reducir fricción' },
    ],
    contexts: ['ecommerce', 'landing', 'blog'],
    params: [
      { id: 'cta_text', label: 'Texto del CTA', placeholder: 'Quiero recibir ofertas exclusivas', type: 'text', required: true },
      { id: 'magnet_url', label: 'URL del Lead Magnet', placeholder: 'https://...', type: 'url', required: false, hint: '¿No tienes un Lead Magnet? Genera uno en CopyLab → Blog Article' },
      { id: 'social_proof', label: 'Prueba social', placeholder: '+2,400 profesionales ya suscritos', type: 'text', required: false },
    ],
  },
  {
    id: 'convert-now',
    label: 'Convertir Ahora',
    tagline: 'Urgencia real, decisión inmediata',
    rationale: 'Countdown real crea escasez. FOMO badge visibiliza el riesgo de esperar. Sticky CTA elimina el scroll como excusa.',
    funnel: 'BOFU',
    funnelLabel: 'BOFU — Conversión',
    icon: Clock,
    color: '#EF4444',
    tactics: [
      { id: 'urgency-bar', label: 'Urgency Bar', description: 'Barra superior con countdown o mensaje de escasez' },
      { id: 'fomo-badge', label: 'FOMO Badge', description: 'Badge visible de stock bajo o tiempo limitado' },
      { id: 'sticky-cta', label: 'Sticky CTA', description: 'CTA fijo en scroll que no desaparece' },
      { id: 'promo-banner', label: 'Promo Banner', description: 'Banner de oferta por tiempo limitado' },
    ],
    contexts: ['ecommerce', 'landing', 'blog'],
    blogTypes: ['producto', 'ugc'],
    params: [
      { id: 'offer_text', label: 'Texto de la oferta', placeholder: '20% OFF · Solo por hoy', type: 'text', required: true },
      { id: 'deadline', label: 'Fecha límite', placeholder: '', type: 'date', required: false, hint: 'Si no hay fecha, se usará urgencia de stock' },
      { id: 'cta_text', label: 'Texto del CTA', placeholder: 'Obtener descuento ahora', type: 'text', required: true },
    ],
  },
  {
    id: 'recover-traffic',
    label: 'Recuperar Tráfico',
    tagline: 'Captura antes de que se vaya',
    rationale: 'Exit intent intercepta la última oportunidad. El email hook segmenta por comportamiento. El pixel retargeting activa la segunda oportunidad en paid.',
    funnel: 'MOFU',
    funnelLabel: 'MOFU — Nurturing',
    icon: Rocket,
    color: '#F59E0B',
    tactics: [
      { id: 'exit-intent', label: 'Exit Intent Popup', description: 'Captura al visitante antes de salir' },
      { id: 'email-hook', label: 'Email Sequence Hook', description: 'Segmenta por comportamiento para nurturing' },
      { id: 'retargeting-helper', label: 'Retargeting Pixel Helper', description: 'Instrucciones y código de seguimiento' },
    ],
    contexts: ['ecommerce', 'landing', 'blog'],
    blogTypes: ['producto', 'ugc'],
    params: [
      { id: 'exit_headline', label: 'Headline del popup', placeholder: 'Espera — antes de irte...', type: 'text', required: true },
      { id: 'exit_offer', label: 'Oferta de retención', placeholder: '10% OFF si te quedas', type: 'text', required: false },
      { id: 'email_sequence', label: 'Nombre de la secuencia', placeholder: 'Bienvenida + nurturing 3 emails', type: 'text', required: false, hint: 'Genera la secuencia en CopyLab → Email Campaign' },
    ],
  },
  {
    id: 'launch-product',
    label: 'Lanzar Producto',
    tagline: 'Crea anticipación, lanza con lista calificada',
    rationale: 'Countdown pre-launch genera expectativa. La waitlist filtra interesados reales. La prueba social desde día 1 activa el efecto manada.',
    funnel: 'TOFU',
    funnelLabel: 'TOFU — Lanzamiento',
    icon: Rocket,
    color: '#8B5CF6',
    tactics: [
      { id: 'countdown-prelaunch', label: 'Countdown Pre-Launch', description: 'Timer de cuenta regresiva al lanzamiento' },
      { id: 'waitlist-form', label: 'Waitlist Form', description: 'Lista de espera con confirmación automática' },
      { id: 'social-proof-feed', label: 'Social Proof Feed', description: 'Prueba social desde día 1' },
    ],
    contexts: ['ecommerce', 'landing'],
    params: [
      { id: 'launch_date', label: 'Fecha de lanzamiento', placeholder: '', type: 'date', required: true },
      { id: 'product_name', label: 'Nombre del producto', placeholder: 'Nuevo serum hidratante', type: 'text', required: true },
      { id: 'waitlist_cta', label: 'CTA de la waitlist', placeholder: 'Quiero acceso anticipado', type: 'text', required: true },
    ],
  },
  {
    id: 'tofu-authority',
    label: 'Autoridad TOFU',
    tagline: 'Contenido de valor, contacto cualificado',
    rationale: 'El content upgrade da algo a cambio. El newsletter conecta en el tiempo. El quiz segmenta por intención antes de que el usuario lo sepa.',
    funnel: 'TOFU',
    funnelLabel: 'TOFU — Educativo',
    icon: BookOpen,
    color: '#10B981',
    tactics: [
      { id: 'content-upgrade-gate', label: 'Content Upgrade Gate', description: 'Recurso premium desbloqueado por email' },
      { id: 'newsletter-form', label: 'Newsletter Form', description: 'Captura para newsletter de autoridad' },
      { id: 'quiz-survey', label: 'Quiz / Survey', description: 'Segmenta por respuesta antes del CTA' },
    ],
    contexts: ['ecommerce', 'landing', 'blog'],
    params: [
      { id: 'upgrade_label', label: 'Nombre del recurso', placeholder: 'Guía completa de hidratación capilar', type: 'text', required: true },
      { id: 'upgrade_url', label: 'URL del recurso', placeholder: 'https://...', type: 'url', required: false, hint: '¿No tienes el recurso? Genera uno en CopyLab → Blog Article' },
      { id: 'quiz_topic', label: 'Tema del quiz (opcional)', placeholder: '¿Cuál es tu tipo de cabello?', type: 'text', required: false },
    ],
  },
];

// ── FUNNEL BADGE ───────────────────────────────────────────────────────────────

const FUNNEL_COLORS: Record<FunnelStage, string> = {
  TOFU: '#3B82F6',
  MOFU: '#F59E0B',
  BOFU: '#EF4444',
};

function FunnelBadge({ stage, label }: { stage: FunnelStage; label: string }) {
  const color = FUNNEL_COLORS[stage];
  return (
    <span
      className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider"
      style={{ background: color + '18', color, border: `1px solid ${color}30` }}
    >
      {label}
    </span>
  );
}

// ── TACTIC CHIP ───────────────────────────────────────────────────────────────

function TacticChip({ tactic, active }: { tactic: SalesTactic; active: boolean }) {
  return (
    <div className={cn(
      'text-[10px] px-2 py-1 rounded-md border transition-colors',
      active
        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
        : 'bg-zinc-800/50 border-zinc-700 text-zinc-500'
    )}>
      {active && <span className="mr-1">✓</span>}
      {tactic.label}
    </div>
  );
}

// ── COPYLAB HINT ──────────────────────────────────────────────────────────────

function CopyLabHint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 mt-1.5 px-2.5 py-2 bg-blue-500/8 border border-blue-500/20 rounded-lg">
      <ExternalLink size={10} className="text-blue-400 mt-0.5 shrink-0" />
      <p className="text-[10px] text-blue-300/80 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

// ── PARAM FIELD ───────────────────────────────────────────────────────────────

function ParamField({
  param,
  value,
  onChange,
}: {
  param: SalesParam;
  value: string;
  onChange: (v: string) => void;
}) {
  const baseInput = "w-full bg-[#0d0d14] border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-blue-500/50 placeholder:text-zinc-600 transition-colors";

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1.5">
        <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
          {param.label}
        </label>
        {param.required && <span className="text-[9px] text-red-400">*</span>}
      </div>
      {param.type === 'textarea' ? (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={param.placeholder}
          rows={3}
          className={cn(baseInput, 'resize-none')}
        />
      ) : (
        <input
          type={param.type === 'date' ? 'date' : param.type === 'url' ? 'url' : 'text'}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={param.placeholder}
          className={baseInput}
        />
      )}
      {param.hint && <CopyLabHint text={param.hint} />}
    </div>
  );
}

// ── PRESET CARD ───────────────────────────────────────────────────────────────

function PresetCard({
  preset,
  selected,
  onSelect,
}: {
  preset: SalesPreset;
  selected: boolean;
  onSelect: () => void;
}) {
  const Icon = preset.icon;
  return (
    <button
      onClick={onSelect}
      className={cn(
        'w-full text-left p-3 rounded-xl border transition-all',
        selected
          ? 'border-opacity-50 bg-opacity-10'
          : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900'
      )}
      style={selected ? {
        borderColor: preset.color + '60',
        background: preset.color + '0d',
      } : {}}
    >
      <div className="flex items-start gap-2.5">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: preset.color + '20' }}
        >
          <Icon size={13} style={{ color: preset.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-bold text-zinc-200">{preset.label}</span>
            <FunnelBadge stage={preset.funnel} label={preset.funnelLabel} />
          </div>
          <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">{preset.tagline}</p>
        </div>
        {selected && (
          <Check size={13} style={{ color: preset.color }} className="shrink-0 mt-1" />
        )}
      </div>
    </button>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

interface SalesLayerPanelProps {
  context: SalesContext;
  blogPostType?: BlogPostType;
  brandId: string;
  pulse?: boolean;
  onGenerate: (preset: SalesPreset, params: Record<string, string>, outputHtml: string) => void;
}

export function SalesLayerPanel({ context, blogPostType, brandId, pulse = false, onGenerate }: SalesLayerPanelProps) {
  const [open, setOpen]               = useState(false);
  const [selectedId, setSelectedId]   = useState<SalesPresetId | null>(null);
  const [params, setParams]           = useState<Record<string, string>>({});
  const [generating, setGenerating]   = useState(false);
  const [output, setOutput]           = useState<string | null>(null);
  const [error, setError]             = useState('');
  const [copied, setCopied]           = useState(false);

  // Filtrar presets según contexto y tipo de post de blog
  const availablePresets = PRESETS.filter(p => {
    if (!p.contexts.includes(context)) return false;
    if (context === 'blog' && blogPostType && p.blogTypes) {
      return p.blogTypes.includes(blogPostType);
    }
    return true;
  });

  const selectedPreset = availablePresets.find(p => p.id === selectedId) ?? null;

  function handleSelectPreset(id: SalesPresetId) {
    setSelectedId(id);
    setParams({});
    setOutput(null);
    setError('');
  }

  function setParam(id: string, value: string) {
    setParams(prev => ({ ...prev, [id]: value }));
  }

  function buildSalesPrompt(preset: SalesPreset, paramValues: Record<string, string>): string {
    const tacticsList = preset.tactics.map(t => `- ${t.label}: ${t.description}`).join('\n');
    const paramsList = preset.params
      .filter(p => paramValues[p.id])
      .map(p => `- ${p.label}: ${paramValues[p.id]}`)
      .join('\n');

    return `Eres un experto en conversión web y copywriting de alto rendimiento.

TAREA: Genera un bloque HTML de Sales Layer listo para insertar en una página web.

OBJETIVO ESTRATÉGICO: ${preset.label} — ${preset.tagline}
ETAPA DEL FUNNEL: ${preset.funnelLabel}
ESTRATEGIA: ${preset.rationale}

TÁCTICAS A IMPLEMENTAR:
${tacticsList}

PARÁMETROS DE MARCA / CAMPAÑA:
${paramsList || '(usar placeholders profesionales)'}

CONTEXTO: ${context === 'blog' ? `Blog post tipo "${blogPostType}"` : context === 'ecommerce' ? 'Tienda E-Commerce' : 'Landing Page'}
MARCA ID: ${brandId}

INSTRUCCIONES DE OUTPUT:
1. Genera HTML semántico completo con CSS inline y/o <style> embebido
2. El bloque debe ser funcional y visualmente profesional — dark theme (#0E1018 base)
3. Incluye cada táctica como sección o componente separado y bien estructurado
4. Usa JavaScript vanilla solo si es necesario (countdown, exit intent, animaciones simples)
5. El output debe poder insertarse directamente en cualquier página sin dependencias externas
6. Usa variables CSS para colores principales para que sea fácil de personalizar
7. Responsive: mobile-first
8. NO incluyas explicaciones, solo el bloque HTML

OUTPUT: Solo el HTML. Empieza con <!-- Sales Layer: ${preset.label} --> y termina con <!-- /Sales Layer -->`;
  }

  async function handleGenerate() {
    if (!selectedPreset) return;

    const missing = selectedPreset.params
      .filter(p => p.required && !params[p.id]?.trim());
    if (missing.length > 0) {
      setError(`Campos requeridos: ${missing.map(p => p.label).join(', ')}`);
      return;
    }

    setGenerating(true);
    setError('');
    setOutput(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: buildSalesPrompt(selectedPreset, params),
          max_tokens: 4000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(`Error ${response.status}: ${(err as any)?.error ?? response.statusText}`);
      }

      const data = await response.json();
      const rawHtml = (data.text ?? '').trim();
      // Strip markdown fences si Claude las añade
      const lines = rawHtml.split('\n');
      const html = lines.filter((l: string) => !l.startsWith('```')).join('\n').trim();

      if (!html) throw new Error('Sin output del modelo');

      setOutput(html);
      onGenerate(selectedPreset, params, html);
    } catch (e: any) {
      setError(e.message ?? 'Error generando Sales Layer');
    } finally {
      setGenerating(false);
    }
  }

  function handleCopy() {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownload() {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `sales-layer_${selectedPreset?.id}_${brandId}_${Date.now()}.html`;
    a.click();
  }

  // Sección vacía si no hay presets disponibles para este contexto
  if (availablePresets.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-4"
    >
      {/* ── HEADER / TOGGLE ── */}
      <motion.button
        onClick={() => { setOpen(o => !o); }}
        animate={pulse && !open ? {
          boxShadow: ['0 0 0px #22c55e00', '0 0 12px #22c55e60', '0 0 0px #22c55e00'],
        } : {}}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all',
          open
            ? 'bg-violet-500/10 border-violet-500/30 text-violet-300'
            : pulse
              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
              : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-300'
        )}
      >
        <div className="flex items-center gap-2.5">
          <div className={cn(
            'w-6 h-6 rounded-lg flex items-center justify-center transition-colors',
            open ? 'bg-violet-500/20' : pulse ? 'bg-emerald-500/20' : 'bg-zinc-800'
          )}>
            <Zap size={12} className={open ? 'text-violet-400' : pulse ? 'text-emerald-400' : 'text-zinc-500'} />
          </div>
          <div className="text-left">
            <span className="text-sm font-bold">Sales Layer</span>
            {pulse && !open ? (
              <span className="text-[10px] ml-2 text-emerald-400/80 font-medium animate-pulse">
                ¡Potencia este output!
              </span>
            ) : (
              <span className="text-[10px] ml-2 opacity-60">
                {availablePresets.length} presets disponibles
              </span>
            )}
          </div>
          {selectedPreset && !open && (
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-mono"
              style={{ background: selectedPreset.color + '20', color: selectedPreset.color }}
            >
              {selectedPreset.label}
            </span>
          )}
        </div>
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </motion.button>

      {/* ── BODY ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2 space-y-3 px-0.5">

              {/* Preset grid */}
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest px-1">
                  Objetivo estratégico
                </p>
                <div className="space-y-1.5">
                  {availablePresets.map(preset => (
                    <PresetCard
                      key={preset.id}
                      preset={preset}
                      selected={selectedId === preset.id}
                      onSelect={() => handleSelectPreset(preset.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Preset detail + params */}
              <AnimatePresence>
                {selectedPreset && (
                  <motion.div
                    key={selectedPreset.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="space-y-3"
                  >
                    {/* Tactics bundle */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-2">
                      <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">
                        Bundle táctico
                      </p>
                      <p className="text-[11px] text-zinc-400 italic leading-relaxed">
                        "{selectedPreset.rationale}"
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {selectedPreset.tactics.map(t => (
                          <TacticChip key={t.id} tactic={t} active={true} />
                        ))}
                      </div>
                    </div>

                    {/* Params */}
                    {selectedPreset.params.length > 0 && (
                      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-3">
                        <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">
                          Parámetros de campaña
                        </p>
                        {selectedPreset.params.map(param => (
                          <ParamField
                            key={param.id}
                            param={param}
                            value={params[param.id] ?? ''}
                            onChange={v => setParam(param.id, v)}
                          />
                        ))}
                      </div>
                    )}

                    {/* Error */}
                    {error && (
                      <div className="flex items-center gap-2 px-3 py-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-400">
                        <AlertCircle size={13} />
                        {error}
                      </div>
                    )}

                    {/* Generate button */}
                    {!output && (
                      <button
                        onClick={handleGenerate}
                        disabled={generating}
                        className={cn(
                          'w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all',
                          generating
                            ? 'opacity-50 cursor-not-allowed bg-zinc-800 text-zinc-500'
                            : 'text-white hover:opacity-90'
                        )}
                        style={!generating ? { background: selectedPreset.color } : {}}
                      >
                        {generating ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin" />
                            Generando Sales Layer...
                          </>
                        ) : (
                          <>
                            <Zap size={13} />
                            Generar Sales Layer — {selectedPreset.label}
                          </>
                        )}
                      </button>
                    )}

                    {/* Output */}
                    {output && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                      >
                        {/* Output toolbar */}
                        <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-t-xl border-b-0">
                          <div className="flex items-center gap-2">
                            <Check size={12} className="text-emerald-400" />
                            <span className="text-xs font-bold text-zinc-300">
                              Sales Layer generado · {selectedPreset.label}
                            </span>
                            <FunnelBadge stage={selectedPreset.funnel} label={selectedPreset.funnelLabel} />
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={handleCopy}
                              className="p-1.5 rounded-md hover:bg-zinc-700 text-zinc-500 hover:text-zinc-300 transition-colors"
                              title="Copiar HTML"
                            >
                              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                            </button>
                            <button
                              onClick={handleDownload}
                              className="p-1.5 rounded-md hover:bg-zinc-700 text-zinc-500 hover:text-zinc-300 transition-colors"
                              title="Descargar .html"
                            >
                              <Download size={12} />
                            </button>
                            <button
                              onClick={() => { setOutput(null); setSelectedId(null); }}
                              className="p-1.5 rounded-md hover:bg-zinc-700 text-zinc-500 hover:text-zinc-300 transition-colors"
                              title="Limpiar"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        </div>

                        {/* Preview */}
                        <div className="border border-zinc-800 rounded-b-xl overflow-hidden">
                          <div className="bg-white overflow-auto" style={{ maxHeight: '420px' }}>
                            <div dangerouslySetInnerHTML={{ __html: output }} />
                          </div>
                        </div>

                        {/* Regenerar */}
                        <button
                          onClick={handleGenerate}
                          disabled={generating}
                          className="w-full py-2 rounded-xl text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800/60 transition-all"
                        >
                          Regenerar con los mismos parámetros
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
