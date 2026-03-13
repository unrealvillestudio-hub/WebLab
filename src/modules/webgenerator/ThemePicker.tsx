// ── ThemePicker.tsx ───────────────────────────────────────────────────────────
// WebLab v3.0 — Theme Picker
// 40 themes × 4 types: E-Commerce · Landing · Web · Blog
// v3.0: Real iframe card previews · Desktop/Mobile full preview · Blog tab
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, ShoppingCart, LayoutTemplate, Globe, Newspaper,
  ChevronRight, Zap, Check, ArrowLeft, Eye,
  Maximize2, Monitor, Smartphone,
} from 'lucide-react';
import {
  ThemeIdentity, ThemeType,
  getThemesByType,
} from '../../config/themeCatalog';
import {
  buildCardPreviewHTML,
  buildFullPreviewHTML,
} from '../../services/themePreviewHtml';
import { cn } from '../../ui/components';

// ── Types ─────────────────────────────────────────────────────────────────────
interface ThemePickerProps {
  currentThemeId: string | null;
  aggroMode: boolean;
  onSelect: (themeId: string) => void;
  onClose: () => void;
}

type ViewportMode = 'desktop' | 'mobile';

// ── Type tabs config ──────────────────────────────────────────────────────────
const TYPE_TABS: { id: ThemeType; label: string; icon: React.ElementType; accent: string }[] = [
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart,   accent: '#22C55E' },
  { id: 'landing',   label: 'Landing',    icon: LayoutTemplate,  accent: '#8B5CF6' },
  { id: 'web',       label: 'Web',        icon: Globe,           accent: '#3B82F6' },
  { id: 'blog',      label: 'Blog',       icon: Newspaper,       accent: '#F59E0B' },
];

// ─────────────────────────────────────────────────────────────────────────────
// CARD IFRAME PREVIEW
// Renders the real theme HTML at 800x580, scaled to fit the card container.
// Lazy-loads via IntersectionObserver.
// ─────────────────────────────────────────────────────────────────────────────
function ThemeCardIframePreview({ theme }: { theme: ThemeIdentity }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef    = useRef<HTMLIFrameElement>(null);
  const [rendered,   setRendered]   = useState(false);
  const [scale,      setScale]      = useState(0.25);
  const p = theme.palette;

  // Compute scale from container width via ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / 800);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Lazy-load: write HTML only when card enters viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !rendered) {
          const doc = iframeRef.current?.contentDocument
            || iframeRef.current?.contentWindow?.document;
          if (doc) {
            doc.open();
            doc.write(buildCardPreviewHTML(theme));
            doc.close();
            setRendered(true);
          }
          obs.disconnect();
        }
      },
      { threshold: 0.01 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [theme.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const containerH = Math.round(580 * scale);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: `${containerH}px`,
        overflow: 'hidden',
        position: 'relative',
        background: p.bg,
      }}
    >
      <iframe
        ref={iframeRef}
        title={`card-${theme.id}`}
        style={{
          width: '800px',
          height: '580px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          border: 'none',
          pointerEvents: 'none',
          display: 'block',
        }}
        sandbox="allow-scripts allow-same-origin"
      />
      {/* Shimmer while loading */}
      {!rendered && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ background: `linear-gradient(135deg, ${p.surface}, ${p.bg})` }}
        >
          <div className="absolute top-0 left-0 right-0" style={{ height: '20px', background: p.surface, borderBottom: `1px solid ${p.rule}` }} />
          <div className="absolute rounded" style={{ top: '34px', left: '16px', width: '60%', height: '10px', background: p.text, opacity: 0.15 }} />
          <div className="absolute rounded" style={{ top: '52px', left: '16px', width: '40%', height: '8px', background: p.accent, opacity: 0.2 }} />
          <div className="absolute rounded" style={{ top: '70px', left: '16px', width: '80px', height: '22px', background: p.accent, opacity: 0.25 }} />
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// THEME CARD
// ─────────────────────────────────────────────────────────────────────────────
function ThemeCard({
  theme, isSelected, aggroMode,
  onSelect, onHover, onOpenPreview,
}: {
  theme: ThemeIdentity;
  isSelected: boolean;
  aggroMode: boolean;
  onSelect: () => void;
  onHover: () => void;
  onOpenPreview: () => void;
}) {
  const p = theme.palette;
  const moodTags = theme.mood.slice(0, 2).map(m => m.toUpperCase());

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={onHover}
      className={cn(
        'group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200 border',
        isSelected ? 'ring-2 scale-[1.01]' : 'hover:scale-[1.005] hover:shadow-2xl'
      )}
      style={{
        borderColor: isSelected ? p.accent : `${p.accent}30`,
        boxShadow: isSelected ? `0 0 0 2px ${p.accent}, 0 8px 32px ${p.accent}30` : undefined,
        background: p.bg,
      }}
    >
      {/* Real iframe card preview */}
      <div className="relative overflow-hidden" style={{ borderBottom: `1px solid ${p.rule}` }}>
        <ThemeCardIframePreview theme={theme} />

        {/* Hover overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: `${p.bg}CC` }}>
          <div className="absolute inset-0 flex items-center justify-center gap-3">
            <button
              onClick={(e) => { e.stopPropagation(); onOpenPreview(); }}
              className="flex flex-col items-center gap-1.5 hover:scale-110 transition-transform"
              title="Ver preview completo">
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: p.bg, border: `2px solid ${p.accent}` }}>
                <Maximize2 size={14} style={{ color: p.accent }} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: p.accent }}>Preview</span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onSelect(); }}
              className="flex flex-col items-center gap-1.5 hover:scale-110 transition-transform"
              title="Seleccionar theme">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: p.accent }}>
                {isSelected ? <Check size={14} style={{ color: p.bg }} /> : <ChevronRight size={14} style={{ color: p.bg }} />}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: p.accent }}>
                {isSelected ? 'Activo' : 'Elegir'}
              </span>
            </button>
          </div>
        </div>

        {/* Badges */}
        {isSelected && (
          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
            style={{ background: p.accent, color: p.bg }}>
            <Check size={8} /> EN USO
          </div>
        )}
        {theme.aggro.unlocked && (
          <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-bold"
            style={{ background: aggroMode ? '#FF4400' : '#FF440020', color: aggroMode ? '#FFFFFF' : '#FF4400', border: '1px solid #FF4400' }}>
            <Zap size={7} className={aggroMode ? 'fill-white' : ''} />
            AGGRO
          </div>
        )}
      </div>

      {/* Info strip */}
      <div className="p-3" style={{ background: p.surface }}>
        <h3 className="text-xs font-bold uppercase tracking-widest leading-tight truncate" style={{ color: p.text }}>
          {theme.name}
        </h3>
        <p className="text-[9px] leading-tight mt-0.5 opacity-60 line-clamp-1" style={{ color: p.text }}>
          {theme.tagline}
        </p>
        {/* Structure badges */}
        <div className="flex items-center gap-1 mt-1.5 flex-wrap">
          <span className="text-[8px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider"
            style={{ background: `${p.accent}20`, color: p.accent }}>
            {theme.structure.headerStyle.replace('hero-', '')}
          </span>
          <span className="text-[8px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider"
            style={{ background: `${p.text}10`, color: p.muted }}>
            {theme.structure.colorMode}
          </span>
        </div>
        {/* Palette swatch */}
        <div className="flex gap-1 mt-2">
          {theme.previewColors.map((c, i) => (
            <div key={i} className="flex-1 h-1.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        {/* Mood tags */}
        <div className="flex gap-1 mt-1.5 flex-wrap">
          {moodTags.map(tag => (
            <span key={tag} className="text-[8px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider"
              style={{ background: `${p.accent}15`, color: p.accent }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// THEME DETAIL PANEL (sidebar)
// Shows scaled full-page preview + theme metadata
// ─────────────────────────────────────────────────────────────────────────────
function ThemeDetailPanel({
  theme, aggroMode, onSelect, onOpenPreview, isSelected,
}: {
  theme: ThemeIdentity;
  aggroMode: boolean;
  onSelect: () => void;
  onOpenPreview: () => void;
  isSelected: boolean;
}) {
  const p = theme.palette;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) { doc.open(); doc.write(buildFullPreviewHTML(theme)); doc.close(); }
  }, [theme.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Panel is w-72 = 288px. Subtract padding = ~260px available.
  const PANEL_W  = 260;
  const IFRAME_W = 1200;
  const IFRAME_H = 1100;
  const scale    = PANEL_W / IFRAME_W;
  const panelH   = Math.round(IFRAME_H * scale);

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden"
      style={{ background: p.bg, border: `1px solid ${p.accent}30` }}>

      {/* Scaled full-page preview */}
      <div style={{ width: '100%', height: `${panelH}px`, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center px-2 gap-1.5"
          style={{ height: '20px', background: '#1A1A24', borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
          {['#FF5F57','#FFBD2E','#28C840'].map((c,i) => (
            <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, opacity: 0.8 }} />
          ))}
          <div style={{ flex: 1, height: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', margin: '0 8px' }} />
        </div>
        {/* Iframe area */}
        <div style={{ marginTop: '20px', overflow: 'hidden', height: `${panelH - 20}px` }}>
          <iframe
            ref={iframeRef}
            title={`panel-${theme.id}`}
            style={{
              width: `${IFRAME_W}px`,
              height: `${IFRAME_H}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              border: 'none',
              pointerEvents: 'none',
              display: 'block',
            }}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        {/* Full preview trigger */}
        <button
          onClick={onOpenPreview}
          className="absolute top-3 right-2 z-20 flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all hover:opacity-90"
          style={{ background: `${p.bg}EE`, color: p.accent, border: `1px solid ${p.accent}50` }}>
          <Maximize2 size={8} /> Full
        </button>
      </div>

      {/* Metadata */}
      <div className="flex-1 overflow-y-auto p-4" style={{ background: p.surface }}>
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-lg font-bold uppercase tracking-widest" style={{ color: p.text }}>{theme.name}</h2>
            <p className="text-xs opacity-60 mt-0.5 leading-snug" style={{ color: p.text }}>{theme.tagline}</p>
          </div>
          {theme.aggro.unlocked && (
            <div className="shrink-0 flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold"
              style={{ background: aggroMode ? '#FF4400' : '#FF440015', color: aggroMode ? '#fff' : '#FF4400', border: '1px solid #FF440040' }}>
              <Zap size={8} className={aggroMode ? 'fill-white' : ''} />
              {aggroMode ? 'AGGRO ON' : 'AGGRO'}
            </div>
          )}
        </div>

        {/* Structure */}
        <div className="mb-3 p-2.5 rounded-lg" style={{ background: `${p.accent}08`, border: `1px solid ${p.accent}20` }}>
          <p className="text-[9px] uppercase font-bold tracking-widest mb-2 opacity-40" style={{ color: p.text }}>Estructura</p>
          <div className="flex flex-wrap gap-1">
            {[theme.structure.headerStyle, theme.structure.cardLayout, theme.structure.colorMode].map(v => (
              <span key={v} className="text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider"
                style={{ background: `${p.accent}20`, color: p.accent }}>{v}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 mt-1.5">
            {theme.structure.enhancers.map(e => (
              <span key={e} className="text-[7px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider"
                style={{ background: `${p.accent}10`, color: p.accent, opacity: 0.7 }}>{e}</span>
            ))}
          </div>
        </div>

        {/* Palette */}
        <div className="mb-3">
          <p className="text-[9px] uppercase font-bold tracking-widest mb-1.5 opacity-40" style={{ color: p.text }}>Paleta</p>
          <div className="flex gap-1.5">
            {Object.entries(p).filter(([k]) => ['bg','surface','text','accent','accent2'].includes(k)).map(([key, hex]) => (
              <div key={key} className="flex flex-col items-center gap-1">
                <div className="w-7 h-7 rounded-md" style={{ background: hex, border: `1px solid ${p.rule}` }} />
                <span className="text-[7px] opacity-40 font-mono" style={{ color: p.text }}>{key}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-3">
          <p className="text-[9px] uppercase font-bold tracking-widest mb-1 opacity-40" style={{ color: p.text }}>Tipografía</p>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold" style={{ color: p.accent }}>{theme.typography.display}</span>
            <span className="text-[10px] opacity-40" style={{ color: p.text }}>+ {theme.typography.body}</span>
          </div>
        </div>

        {/* Motion */}
        <div className="mb-3">
          <p className="text-[9px] uppercase font-bold tracking-widest mb-1 opacity-40" style={{ color: p.text }}>Motion</p>
          <p className="text-[10px] leading-snug opacity-60" style={{ color: p.text }}>{theme.motion.slice(0, 110)}...</p>
        </div>

        {aggroMode && theme.aggro.unlocked && (
          <div className="mb-3 p-2 rounded-lg" style={{ background: '#FF440010', border: '1px solid #FF440030' }}>
            <p className="text-[9px] uppercase font-bold tracking-widest mb-1" style={{ color: '#FF4400' }}>⚡ Modo AGGRO</p>
            <p className="text-[10px] leading-snug" style={{ color: '#FF8866' }}>{theme.aggro.description}</p>
          </div>
        )}

        <div className="p-2.5 rounded-lg" style={{ background: `${p.accent}10`, border: `1px solid ${p.accent}20` }}>
          <p className="text-[9px] italic leading-snug" style={{ color: p.accent }}>"{theme.designerNote}"</p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-3 flex gap-2" style={{ background: p.surface, borderTop: `1px solid ${p.rule}` }}>
        <button onClick={onOpenPreview}
          className="flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 flex items-center justify-center gap-1.5"
          style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}30` }}>
          <Eye size={12} /> Preview
        </button>
        <button onClick={onSelect}
          className="flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-1.5"
          style={{ background: isSelected ? p.muted : p.accent, color: p.bg }}>
          {isSelected ? <><Check size={12} /> Activo</> : <>Usar <ChevronRight size={12} /></>}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// THEME FULL PREVIEW — Desktop + Mobile side by side or toggled
// ─────────────────────────────────────────────────────────────────────────────
function ThemeFullPreview({
  theme, isSelected, onSelect, onClose,
}: {
  theme: ThemeIdentity;
  isSelected: boolean;
  onSelect: () => void;
  onClose: () => void;
}) {
  const desktopRef = useRef<HTMLIFrameElement>(null);
  const mobileRef  = useRef<HTMLIFrameElement>(null);
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const p = theme.palette;

  useEffect(() => {
    const html = buildFullPreviewHTML(theme);
    [desktopRef, mobileRef].forEach(ref => {
      const doc = ref.current?.contentDocument || ref.current?.contentWindow?.document;
      if (doc) { doc.open(); doc.write(html); doc.close(); }
    });
  }, [theme.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ background: '#050508' }}
    >
      {/* ── Top bar ── */}
      <div className="shrink-0 flex items-center justify-between px-5 py-3 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#0A0A10' }}>

        {/* Left */}
        <div className="flex items-center gap-3 min-w-0">
          <button onClick={onClose}
            className="shrink-0 flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm">
            <ArrowLeft size={15} />
            <span className="font-medium">Volver</span>
          </button>
          <div className="w-px h-4 bg-zinc-800 shrink-0" />
          <div className="min-w-0">
            <span className="text-zinc-300 text-sm font-bold uppercase tracking-widest mr-2">{theme.name}</span>
            <span className="text-zinc-600 text-xs hidden lg:inline truncate">{theme.tagline}</span>
          </div>
        </div>

        {/* Center — Desktop/Mobile toggle */}
        <div className="shrink-0 flex items-center gap-1 p-1 rounded-xl"
          style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.08)' }}>
          {([
            { id: 'desktop' as ViewportMode, label: 'Desktop', icon: Monitor },
            { id: 'mobile'  as ViewportMode, label: 'Mobile',  icon: Smartphone },
          ] as const).map(v => (
            <button
              key={v.id}
              onClick={() => setViewport(v.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all"
              style={{
                background: viewport === v.id ? `${p.accent}22` : 'transparent',
                color: viewport === v.id ? p.accent : '#4A4A5A',
                border: `1px solid ${viewport === v.id ? p.accent + '40' : 'transparent'}`,
              }}>
              <v.icon size={12} />
              {v.label}
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="shrink-0 flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5">
            {theme.structure.enhancers.slice(0,3).map(e => (
              <span key={e} className="text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider"
                style={{ background: `${p.accent}15`, color: p.accent }}>
                {e.replace('-', ' ')}
              </span>
            ))}
          </div>
          <div className="w-px h-4 bg-zinc-800 hidden md:block" />
          <button
            onClick={() => { onSelect(); onClose(); }}
            className="flex items-center gap-2 px-5 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:opacity-90"
            style={{ background: isSelected ? '#444' : p.accent, color: p.bg }}>
            {isSelected ? <><Check size={14} /> Activo</> : <>Usar Theme <ChevronRight size={14} /></>}
          </button>
          <button onClick={onClose}
            className="p-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* ── Preview area ── */}
      <div className="flex-1 relative overflow-hidden"
        style={{ background: viewport === 'desktop' ? '#000' : '#111118' }}>

        {/* DESKTOP */}
        <div className={cn(
          'absolute inset-0 transition-opacity duration-300',
          viewport === 'desktop' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        )}>
          <iframe
            ref={desktopRef}
            title={`full-desktop-${theme.id}`}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* MOBILE — phone chrome */}
        <div className={cn(
          'absolute inset-0 flex items-center justify-center transition-opacity duration-300',
          viewport === 'mobile' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        )}>
          <div className="relative flex items-center justify-center h-full py-8">
            {/* Phone shell */}
            <div style={{
              position: 'relative',
              width: '414px',
              height: 'min(840px, calc(100vh - 140px))',
              background: '#1C1C1E',
              borderRadius: '52px',
              padding: '14px',
              boxShadow: `
                0 80px 160px rgba(0,0,0,0.85),
                0 0 0 2px #3A3A3C,
                inset 0 1px 0 rgba(255,255,255,0.07)
              `,
            }}>
              {/* Physical buttons */}
              <div style={{ position: 'absolute', left: '-3px', top: '88px',  width: '3px', height: '36px', background: '#3A3A3C', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', left: '-3px', top: '142px', width: '3px', height: '64px', background: '#3A3A3C', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', left: '-3px', top: '218px', width: '3px', height: '64px', background: '#3A3A3C', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', right: '-3px', top: '148px', width: '3px', height: '76px', background: '#3A3A3C', borderRadius: '0 2px 2px 0' }} />

              {/* Screen bezel */}
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '40px',
                overflow: 'hidden',
                background: p.bg,
                position: 'relative',
              }}>
                {/* Dynamic Island */}
                <div style={{
                  position: 'absolute', top: '11px',
                  left: '50%', transform: 'translateX(-50%)',
                  width: '122px', height: '35px',
                  background: '#0A0A0C',
                  borderRadius: '20px', zIndex: 30,
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.08)',
                }} />

                {/* Status bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '56px',
                  background: `${p.bg}F0`,
                  backdropFilter: 'blur(12px)',
                  zIndex: 20,
                  display: 'flex', alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  padding: '0 26px 8px',
                }}>
                  <span style={{ fontFamily: 'system-ui', fontSize: '12px', fontWeight: 700, color: p.text, letterSpacing: '-0.01em' }}>9:41</span>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    {/* Signal bars */}
                    <svg width="17" height="12" viewBox="0 0 17 12" fill={p.text} opacity=".9">
                      <rect x="0" y="8" width="3" height="4" rx="0.5"/>
                      <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5"/>
                      <rect x="9" y="3" width="3" height="9" rx="0.5"/>
                      <rect x="13.5" y="0" width="3" height="12" rx="0.5"/>
                    </svg>
                    {/* WiFi */}
                    <svg width="15" height="12" viewBox="0 0 15 12" fill={p.text} opacity=".9">
                      <path d="M7.5 3.5C9.8 3.5 11.9 4.6 13.3 6.3L14.4 5C12.6 2.8 10.2 1.5 7.5 1.5S2.4 2.8 0.6 5L1.7 6.3C3.1 4.6 5.2 3.5 7.5 3.5z"/>
                      <path d="M7.5 6.5C9 6.5 10.3 7.2 11.2 8.3L12.3 7C11 5.5 9.3 4.5 7.5 4.5S4 5.5 2.7 7L3.8 8.3C4.7 7.2 6 6.5 7.5 6.5z"/>
                      <circle cx="7.5" cy="10.5" r="1.5"/>
                    </svg>
                    {/* Battery */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <div style={{ width: '25px', height: '12px', border: `1.5px solid ${p.text}`, borderRadius: '3px', opacity: 0.9, position: 'relative', padding: '2px' }}>
                        <div style={{ width: '75%', height: '100%', background: p.text, borderRadius: '1px' }} />
                      </div>
                      <div style={{ width: '2px', height: '5px', background: p.text, borderRadius: '0 1px 1px 0', opacity: 0.6 }} />
                    </div>
                  </div>
                </div>

                {/* iframe — constrained to 390px width, responsive */}
                <div style={{
                  position: 'absolute', inset: 0,
                  paddingTop: '56px', paddingBottom: '36px',
                  overflow: 'hidden',
                }}>
                  <iframe
                    ref={mobileRef}
                    title={`full-mobile-${theme.id}`}
                    style={{ width: '390px', height: '100%', border: 'none', display: 'block' }}
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>

                {/* Home indicator */}
                <div style={{
                  position: 'absolute', bottom: '10px',
                  left: '50%', transform: 'translateX(-50%)',
                  width: '132px', height: '5px',
                  background: `${p.text}25`, borderRadius: '3px', zIndex: 20,
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Info bar ── */}
      <div className="shrink-0 flex items-center gap-6 px-5 py-2 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.05)', background: '#08080E' }}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ background: p.accent }} />
          <span className="text-[10px] text-zinc-500 font-mono">{p.accent}</span>
        </div>
        <span className="text-zinc-700">·</span>
        <span className="text-[10px] text-zinc-600 uppercase tracking-widest">{theme.typography.display} + {theme.typography.body}</span>
        <span className="text-zinc-700">·</span>
        <span className="text-[10px] text-zinc-600 uppercase tracking-widest">{theme.structure.colorMode} · {theme.structure.headerStyle}</span>
        <div className="ml-auto text-[10px] text-zinc-700 uppercase tracking-widest">ESC para cerrar</div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN THEME PICKER
// ─────────────────────────────────────────────────────────────────────────────
export function ThemePicker({ currentThemeId, aggroMode, onSelect, onClose }: ThemePickerProps) {
  const [activeType,       setActiveType]       = useState<ThemeType>('ecommerce');
  const [hoveredTheme,     setHoveredTheme]     = useState<ThemeIdentity | null>(null);
  const [detailTheme,      setDetailTheme]      = useState<ThemeIdentity | null>(null);
  const [fullPreviewTheme, setFullPreviewTheme] = useState<ThemeIdentity | null>(null);

  const themes     = getThemesByType(activeType);
  const panelTheme = detailTheme ?? hoveredTheme ?? themes[0];

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape' && !fullPreviewTheme) onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose, fullPreviewTheme]);

  const handleSelect = useCallback((themeId: string) => {
    onSelect(themeId);
    onClose();
  }, [onSelect, onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col"
        style={{ background: '#0A0A0F' }}
      >
        {/* ── Header ── */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-3">
            <button onClick={onClose}
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm">
              <ArrowLeft size={16} />
              <span className="font-medium">Volver al Generator</span>
            </button>
            <div className="w-px h-5 bg-zinc-800" />
            <div>
              <h1 className="text-white font-black text-lg uppercase tracking-widest leading-none">
                THEME PICKER
              </h1>
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest mt-0.5">
                40 identidades · Previews en tiempo real · Desktop + Mobile
              </p>
            </div>
          </div>

          {/* Type tabs */}
          <div className="flex items-center gap-2">
            {TYPE_TABS.map(tab => (
              <button key={tab.id}
                onClick={() => {
                  setActiveType(tab.id);
                  setHoveredTheme(null);
                  setDetailTheme(null);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all"
                style={{
                  background: activeType === tab.id ? `${tab.accent}20` : 'transparent',
                  color: activeType === tab.id ? tab.accent : '#4a4a5a',
                  border: `1px solid ${activeType === tab.id ? tab.accent + '40' : 'transparent'}`,
                }}>
                <tab.icon size={13} />
                {tab.label}
              </button>
            ))}
          </div>

          <button onClick={onClose}
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/50 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-1 overflow-hidden">
          {/* Theme grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-center gap-3 mb-5">
              {(() => {
                const tab = TYPE_TABS.find(t => t.id === activeType)!;
                return (
                  <>
                    <tab.icon size={18} style={{ color: tab.accent }} />
                    <span className="text-sm font-bold uppercase tracking-widest" style={{ color: tab.accent }}>
                      {tab.label} Themes
                    </span>
                    <span className="text-zinc-600 text-xs">
                      — {themes.length} identidades · hover para preview · <span style={{ color: tab.accent }}>⊞ Maximize</span> para Desktop/Mobile
                    </span>
                    {currentThemeId && themes.some(t => t.id === currentThemeId) && (
                      <div className="ml-auto flex items-center gap-1 text-[10px] text-zinc-500">
                        <Check size={10} className="text-emerald-400" />
                        Theme activo en esta categoría
                      </div>
                    )}
                  </>
                );
              })()}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeType}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="grid gap-3"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
              >
                {themes.map((theme) => (
                  <ThemeCard
                    key={theme.id}
                    theme={theme}
                    isSelected={currentThemeId === theme.id}
                    aggroMode={aggroMode}
                    onSelect={() => handleSelect(theme.id)}
                    onHover={() => setHoveredTheme(theme)}
                    onOpenPreview={() => setFullPreviewTheme(theme)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Detail panel ── */}
          <div className="w-72 shrink-0 p-4 border-l overflow-y-auto"
            style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#080810' }}>
            <AnimatePresence mode="wait">
              {panelTheme && (
                <motion.div
                  key={panelTheme.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="h-full"
                >
                  <ThemeDetailPanel
                    theme={panelTheme}
                    aggroMode={aggroMode}
                    isSelected={currentThemeId === panelTheme.id}
                    onSelect={() => handleSelect(panelTheme.id)}
                    onOpenPreview={() => setFullPreviewTheme(panelTheme)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="shrink-0 flex items-center justify-between px-6 py-2 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)', background: '#050508' }}>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest">
            <span style={{ color: '#22C55E50' }}>10 E-Commerce</span>
            <span className="text-zinc-800">·</span>
            <span style={{ color: '#8B5CF650' }}>10 Landing</span>
            <span className="text-zinc-800">·</span>
            <span style={{ color: '#3B82F650' }}>10 Web</span>
            <span className="text-zinc-800">·</span>
            <span style={{ color: '#F59E0B50' }}>10 Blog</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
            <span className="text-orange-600/60">⚡ AGGRO disponible</span>
            <span>·</span>
            <span>Preview real · Desktop + Mobile</span>
          </div>
          <div className="text-[10px] text-zinc-700 uppercase tracking-widest">
            WEBLAB v3.0 · UNRLVL STUDIO
          </div>
        </div>
      </motion.div>

      {/* ── Full Page Preview overlay ── */}
      <AnimatePresence>
        {fullPreviewTheme && (
          <ThemeFullPreview
            theme={fullPreviewTheme}
            isSelected={currentThemeId === fullPreviewTheme.id}
            onSelect={() => handleSelect(fullPreviewTheme.id)}
            onClose={() => setFullPreviewTheme(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
