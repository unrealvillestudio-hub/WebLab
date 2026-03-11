// ── ThemePicker.tsx ───────────────────────────────────────────────────────────
// WebLab v2.3 — Theme Picker
// Full-screen theme selection experience.
// 30 themes × 3 types: E-Commerce · Landing · Web
// Each theme includes live palette preview + 3 layout views: Home / Collection / Product
// AGGRO mode indicator on every theme card.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, ShoppingCart, LayoutTemplate, Globe,
  ChevronRight, Zap, Check, ArrowLeft, Eye,
  Layers, Home, Grid, Package,
} from 'lucide-react';
import {
  THEME_CATALOG, ThemeIdentity, ThemeType,
  getThemesByType,
} from '../../config/themeCatalog';
import { cn } from '../../ui/components';

// ── Types ─────────────────────────────────────────────────────────────────────
type PreviewMode = 'home' | 'collection' | 'product';

interface ThemePickerProps {
  currentThemeId: string | null;
  aggroMode: boolean;
  onSelect: (themeId: string) => void;
  onClose: () => void;
}

// ── Type tabs config ──────────────────────────────────────────────────────────
const TYPE_TABS: { id: ThemeType; label: string; icon: React.ElementType; accent: string }[] = [
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart,   accent: '#22C55E' },
  { id: 'landing',   label: 'Landing',    icon: LayoutTemplate, accent: '#8B5CF6' },
  { id: 'web',       label: 'Web',        icon: Globe,          accent: '#3B82F6' },
];

// ── Mini Preview Renderer ─────────────────────────────────────────────────────
// Renders a live wireframe-style preview using actual theme palette
function ThemePreview({ theme, mode }: { theme: ThemeIdentity; mode: PreviewMode }) {
  const p = theme.palette;
  const isSans = theme.typography.style === 'sans' || theme.typography.style === 'display';

  // Font URL injection
  const fontFamily = `"${theme.typography.display}", ${isSans ? 'sans-serif' : 'serif'}`;

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: p.bg, fontFamily }}>
      {/* ── Link to load font (only in preview context, lightweight) */}
      {/* Navbar */}
      <div className="flex items-center justify-between px-3 py-2 border-b"
        style={{ borderColor: p.rule, background: p.surface }}>
        <div className="flex items-center gap-2">
          <div className="w-14 h-2 rounded-sm opacity-80" style={{ background: p.accent }} />
        </div>
        <div className="flex gap-2">
          {['', '', ''].map((_, i) => (
            <div key={i} className="w-8 h-1.5 rounded-sm opacity-40" style={{ background: p.text }} />
          ))}
        </div>
        <div className="w-10 h-4 rounded-sm" style={{ background: p.accent }} />
      </div>

      {mode === 'home' && <HomePreviewContent theme={theme} />}
      {mode === 'collection' && <CollectionPreviewContent theme={theme} />}
      {mode === 'product' && <ProductPreviewContent theme={theme} />}
    </div>
  );
}

function HomePreviewContent({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  return (
    <div className="flex flex-col h-full">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-3 relative overflow-hidden"
        style={{ background: p.bg }}>
        {/* BG accent blob */}
        <div className="absolute inset-0 opacity-10"
          style={{ background: `radial-gradient(ellipse at 60% 40%, ${p.accent}, transparent 60%)` }} />
        <div className="w-24 h-1.5 rounded mb-2 opacity-90" style={{ background: p.accent }} />
        <div className="w-32 h-4 rounded mb-1.5 opacity-80" style={{ background: p.text }} />
        <div className="w-24 h-4 rounded mb-3 opacity-60" style={{ background: p.text }} />
        <div className="w-16 h-1 rounded mb-3 opacity-40" style={{ background: p.muted }} />
        <div className="w-20 h-5 rounded-sm" style={{ background: p.accent }} />
      </div>
      {/* Features row */}
      <div className="flex gap-1.5 px-3 py-2" style={{ background: p.surface }}>
        {[p.accent, p.accent2, p.muted].map((c, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 py-1.5 rounded"
            style={{ background: p.bg + '88', border: `1px solid ${p.rule}` }}>
            <div className="w-4 h-4 rounded-full opacity-70" style={{ background: c }} />
            <div className="w-8 h-1 rounded opacity-50" style={{ background: p.text }} />
          </div>
        ))}
      </div>
      {/* Product strip */}
      <div className="flex gap-1.5 px-3 pb-2 pt-1">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className="flex-1 rounded overflow-hidden" style={{ border: `1px solid ${p.rule}` }}>
            <div className="h-8" style={{ background: p.surface }} />
            <div className="px-1 py-1">
              <div className="h-1 w-full rounded mb-0.5 opacity-60" style={{ background: p.text }} />
              <div className="h-1 w-8 rounded opacity-40" style={{ background: p.accent }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollectionPreviewContent({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  return (
    <div className="flex h-full">
      {/* Sidebar filters */}
      <div className="w-16 border-r flex flex-col gap-1.5 p-2" style={{ borderColor: p.rule, background: p.surface }}>
        <div className="h-1 w-full rounded opacity-50" style={{ background: p.text }} />
        <div className="h-px w-full opacity-20" style={{ background: p.text }} />
        {[80, 60, 70, 50, 65].map((w, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-sm border" style={{ borderColor: i === 1 ? p.accent : p.muted, background: i === 1 ? p.accent : 'transparent' }} />
            <div className="h-1 rounded opacity-40" style={{ background: p.text, width: `${w}%` }} />
          </div>
        ))}
      </div>
      {/* Grid */}
      <div className="flex-1 p-2">
        <div className="flex items-center justify-between mb-2">
          <div className="h-1.5 w-16 rounded opacity-60" style={{ background: p.text }} />
          <div className="h-1.5 w-10 rounded opacity-30" style={{ background: p.muted }} />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} className="rounded overflow-hidden" style={{ border: `1px solid ${p.rule}` }}>
              <div className="h-10 relative" style={{ background: p.surface }}>
                <div className="absolute bottom-1 right-1 w-4 h-1.5 rounded opacity-70" style={{ background: p.accent }} />
              </div>
              <div className="px-1.5 py-1">
                <div className="h-1 w-full rounded mb-0.5 opacity-60" style={{ background: p.text }} />
                <div className="h-1 w-6 rounded opacity-50" style={{ background: p.accent }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductPreviewContent({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  return (
    <div className="flex h-full">
      {/* Product image */}
      <div className="w-2/5 relative overflow-hidden" style={{ background: p.surface }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-20 rounded opacity-30" style={{ background: p.accent }} />
        </div>
        <div className="absolute inset-0 opacity-15"
          style={{ background: `radial-gradient(circle at 50% 60%, ${p.accent}, transparent 65%)` }} />
        {/* Thumbnail strip */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {[0, 1, 2].map(i => (
            <div key={i} className="w-4 h-4 rounded"
              style={{ background: p.bg, border: `1px solid ${i === 0 ? p.accent : p.rule}` }} />
          ))}
        </div>
      </div>
      {/* Product info */}
      <div className="flex-1 flex flex-col p-3 gap-1.5">
        <div className="h-1.5 w-20 rounded opacity-50" style={{ background: p.muted }} />
        <div className="h-3 w-full rounded opacity-80" style={{ background: p.text }} />
        <div className="h-2 w-3/4 rounded opacity-60" style={{ background: p.text }} />
        <div className="h-1 w-full rounded opacity-30" style={{ background: p.muted }} />
        <div className="h-1 w-4/5 rounded opacity-30" style={{ background: p.muted }} />
        <div className="h-1 w-3/5 rounded opacity-30" style={{ background: p.muted }} />
        <div className="h-3 w-12 rounded opacity-90 mt-1" style={{ background: p.accent }} />
        <div className="flex gap-1 mt-1">
          {[0, 1, 2].map(i => (
            <div key={i} className="w-5 h-5 rounded" style={{ background: p.surface, border: `1px solid ${p.rule}` }} />
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-1">
          <div className="h-5 w-full rounded" style={{ background: p.accent }} />
          <div className="h-4 w-full rounded" style={{ background: `${p.text}15`, border: `1px solid ${p.rule}` }} />
        </div>
      </div>
    </div>
  );
}

// ── Theme Card ────────────────────────────────────────────────────────────────
function ThemeCard({
  theme, isSelected, aggroMode, previewMode,
  onSelect, onHover,
}: {
  theme: ThemeIdentity;
  isSelected: boolean;
  aggroMode: boolean;
  previewMode: PreviewMode;
  onSelect: () => void;
  onHover: () => void;
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
        'group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200',
        'border',
        isSelected
          ? 'ring-2 scale-[1.01]'
          : 'hover:scale-[1.005] hover:shadow-2xl'
      )}
      style={{
        borderColor: isSelected ? p.accent : `${p.accent}30`,
        ringColor: p.accent,
        boxShadow: isSelected ? `0 0 0 2px ${p.accent}, 0 8px 32px ${p.accent}30` : undefined,
        background: p.bg,
      }}
      onClick={onSelect}
    >
      {/* Preview window */}
      <div className="h-36 relative overflow-hidden">
        <ThemePreview theme={theme} mode={previewMode} />
        {/* Overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
          style={{ background: `${p.bg}CC` }}>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: p.accent }}>
              {isSelected
                ? <Check size={16} style={{ color: p.bg }} />
                : <Eye size={16} style={{ color: p.bg }} />
              }
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: p.accent }}>
              {isSelected ? 'ACTIVO' : 'SELECCIONAR'}
            </span>
          </div>
        </div>
        {/* Selected badge */}
        {isSelected && (
          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
            style={{ background: p.accent, color: p.bg }}>
            <Check size={8} />
            EN USO
          </div>
        )}
        {/* AGGRO badge */}
        {theme.aggro.unlocked && (
          <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-bold"
            style={{ background: aggroMode ? '#FF4400' : '#FF440020', color: aggroMode ? '#FFFFFF' : '#FF4400', border: '1px solid #FF4400' }}>
            <Zap size={7} className={aggroMode ? 'fill-white' : ''} />
            AGGRO
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3" style={{ background: p.surface }}>
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest leading-tight" style={{ color: p.text }}>
              {theme.name}
            </h3>
            <p className="text-[9px] leading-tight mt-0.5 opacity-60 line-clamp-2" style={{ color: p.text }}>
              {theme.tagline}
            </p>
          </div>
        </div>
        {/* Palette swatch */}
        <div className="flex gap-1 mt-2">
          {theme.previewColors.map((c, i) => (
            <div key={i} className="flex-1 h-1.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        {/* Mood tags */}
        <div className="flex gap-1 mt-2 flex-wrap">
          {moodTags.map(tag => (
            <span key={tag} className="text-[8px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider"
              style={{ background: `${p.accent}15`, color: p.accent }}>
              {tag}
            </span>
          ))}
          <span className="text-[8px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider"
            style={{ background: `${p.text}10`, color: p.muted }}>
            {theme.typography.style}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Theme Detail Panel ────────────────────────────────────────────────────────
function ThemeDetailPanel({
  theme, aggroMode, previewMode, setPreviewMode, onSelect, isSelected,
}: {
  theme: ThemeIdentity;
  aggroMode: boolean;
  previewMode: PreviewMode;
  setPreviewMode: (m: PreviewMode) => void;
  onSelect: () => void;
  isSelected: boolean;
}) {
  const p = theme.palette;
  const views: { id: PreviewMode; label: string; icon: React.ElementType }[] = [
    { id: 'home',       label: 'Home',       icon: Home    },
    { id: 'collection', label: 'Collection', icon: Grid    },
    { id: 'product',    label: 'Product',    icon: Package },
  ];

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden"
      style={{ background: p.bg, border: `1px solid ${p.accent}30` }}>
      {/* Preview area */}
      <div className="relative" style={{ height: '260px' }}>
        <ThemePreview theme={theme} mode={previewMode} />
        {/* View selector */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1 rounded-full"
          style={{ background: `${p.bg}EE`, border: `1px solid ${p.rule}` }}>
          {views.map(v => (
            <button key={v.id}
              onClick={() => setPreviewMode(v.id)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all"
              style={{
                background: previewMode === v.id ? p.accent : 'transparent',
                color: previewMode === v.id ? p.bg : p.muted,
              }}>
              <v.icon size={9} />
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Theme info */}
      <div className="flex-1 overflow-y-auto p-4" style={{ background: p.surface }}>
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-lg font-bold uppercase tracking-widest" style={{ color: p.text }}>
              {theme.name}
            </h2>
            <p className="text-xs opacity-60 mt-0.5 leading-snug" style={{ color: p.text }}>
              {theme.tagline}
            </p>
          </div>
          {theme.aggro.unlocked && (
            <div className="shrink-0 flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold"
              style={{ background: aggroMode ? '#FF4400' : '#FF440015', color: aggroMode ? '#fff' : '#FF4400', border: '1px solid #FF440040' }}>
              <Zap size={8} className={aggroMode ? 'fill-white' : ''} />
              {aggroMode ? 'AGGRO UNLOCKED' : 'AGGRO AVAILABLE'}
            </div>
          )}
        </div>

        {/* Palette */}
        <div className="mb-3">
          <p className="text-[9px] uppercase font-bold tracking-widest mb-1.5 opacity-40" style={{ color: p.text }}>
            Paleta
          </p>
          <div className="flex gap-1.5">
            {Object.entries(p).filter(([k]) => ['bg','surface','text','accent','accent2'].includes(k)).map(([key, hex]) => (
              <div key={key} className="flex flex-col items-center gap-1">
                <div className="w-7 h-7 rounded-md shadow-sm"
                  style={{ background: hex, border: `1px solid ${p.rule}` }} />
                <span className="text-[7px] opacity-40 font-mono" style={{ color: p.text }}>{key}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-3">
          <p className="text-[9px] uppercase font-bold tracking-widest mb-1 opacity-40" style={{ color: p.text }}>
            Tipografía
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold" style={{ color: p.accent }}>
              {theme.typography.display}
            </span>
            <span className="text-[10px] opacity-40" style={{ color: p.text }}>
              + {theme.typography.body}
            </span>
          </div>
        </div>

        {/* Motion */}
        <div className="mb-3">
          <p className="text-[9px] uppercase font-bold tracking-widest mb-1 opacity-40" style={{ color: p.text }}>
            Motion
          </p>
          <p className="text-[10px] leading-snug opacity-60" style={{ color: p.text }}>
            {theme.motion.slice(0, 120)}...
          </p>
        </div>

        {/* Layout DNA */}
        <div className="mb-3">
          <p className="text-[9px] uppercase font-bold tracking-widest mb-1 opacity-40" style={{ color: p.text }}>
            Layout DNA
          </p>
          <p className="text-[10px] leading-snug opacity-60" style={{ color: p.text }}>
            {theme.layoutDNA.slice(0, 120)}...
          </p>
        </div>

        {/* AGGRO mode description */}
        {aggroMode && theme.aggro.unlocked && (
          <div className="mb-3 p-2 rounded-lg" style={{ background: '#FF440010', border: '1px solid #FF440030' }}>
            <p className="text-[9px] uppercase font-bold tracking-widest mb-1" style={{ color: '#FF4400' }}>
              ⚡ En modo AGGRO
            </p>
            <p className="text-[10px] leading-snug" style={{ color: '#FF8866' }}>
              {theme.aggro.description}
            </p>
          </div>
        )}

        {/* Designer note */}
        <div className="p-2.5 rounded-lg" style={{ background: `${p.accent}10`, border: `1px solid ${p.accent}20` }}>
          <p className="text-[9px] italic leading-snug" style={{ color: p.accent }}>
            "{theme.designerNote}"
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-3" style={{ background: p.surface, borderTop: `1px solid ${p.rule}` }}>
        <button
          onClick={onSelect}
          className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2"
          style={{ background: isSelected ? p.muted : p.accent, color: p.bg }}>
          {isSelected ? (
            <><Check size={14} /> THEME ACTIVO</>
          ) : (
            <>USAR {theme.name} <ChevronRight size={14} /></>
          )}
        </button>
      </div>
    </div>
  );
}

// ── Main ThemePicker Component ────────────────────────────────────────────────
export function ThemePicker({ currentThemeId, aggroMode, onSelect, onClose }: ThemePickerProps) {
  const [activeType, setActiveType]       = useState<ThemeType>('ecommerce');
  const [previewMode, setPreviewMode]     = useState<PreviewMode>('home');
  const [hoveredTheme, setHoveredTheme]   = useState<ThemeIdentity | null>(null);
  const [detailTheme, setDetailTheme]     = useState<ThemeIdentity | null>(null);

  const themes = getThemesByType(activeType);
  const panelTheme = detailTheme ?? hoveredTheme ?? themes[0];

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleSelect = useCallback((themeId: string) => {
    onSelect(themeId);
    onClose();
  }, [onSelect, onClose]);

  return (
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
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            <span className="font-medium">Volver al Generator</span>
          </button>
          <div className="w-px h-5 bg-zinc-800" />
          <div>
            <h1 className="text-white font-black text-lg uppercase tracking-widest leading-none">
              THEME PICKER
            </h1>
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest mt-0.5">
              30 identidades · WebLab v2.3
            </p>
          </div>
        </div>

        {/* Type tabs */}
        <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          {TYPE_TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveType(tab.id); setHoveredTheme(null); setDetailTheme(null); }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
              style={{
                background: activeType === tab.id ? tab.accent + '20' : 'transparent',
                color: activeType === tab.id ? tab.accent : '#555',
                border: activeType === tab.id ? `1px solid ${tab.accent}40` : '1px solid transparent',
              }}>
              <tab.icon size={12} />
              {tab.label}
              <span className="text-[9px] opacity-60">({getThemesByType(tab.id).length})</span>
            </button>
          ))}
        </div>

        {/* Aggro indicator */}
        <div className="flex items-center gap-3">
          {aggroMode && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ background: '#FF440015', color: '#FF4400', border: '1px solid #FF440030' }}>
              <Zap size={11} className="fill-orange-500" />
              MODO AGGRO ACTIVO
            </div>
          )}
          {/* Preview mode switcher */}
          <div className="flex items-center gap-1 p-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {([
              { id: 'home' as PreviewMode, icon: Home, label: 'Home' },
              { id: 'collection' as PreviewMode, icon: Grid, label: 'Collection' },
              { id: 'product' as PreviewMode, icon: Package, label: 'Product' },
            ]).map(v => (
              <button key={v.id}
                onClick={() => setPreviewMode(v.id)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all"
                style={{
                  background: previewMode === v.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: previewMode === v.id ? '#fff' : '#444',
                }}>
                <v.icon size={10} />
                {v.label}
              </button>
            ))}
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/50 transition-colors">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Theme grid */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-5">
            {(() => {
              const tab = TYPE_TABS.find(t => t.id === activeType)!;
              return (
                <>
                  <tab.icon size={18} style={{ color: tab.accent }} />
                  <span className="text-sm font-bold uppercase tracking-widest" style={{ color: tab.accent }}>
                    {tab.label} Themes
                  </span>
                  <span className="text-zinc-600 text-xs">— {themes.length} identidades disponibles</span>
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
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}
            >
              {themes.map((theme) => (
                <ThemeCard
                  key={theme.id}
                  theme={theme}
                  isSelected={currentThemeId === theme.id}
                  aggroMode={aggroMode}
                  previewMode={previewMode}
                  onSelect={() => handleSelect(theme.id)}
                  onHover={() => { setHoveredTheme(theme); }}
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
                  previewMode={previewMode}
                  setPreviewMode={setPreviewMode}
                  isSelected={currentThemeId === panelTheme.id}
                  onSelect={() => handleSelect(panelTheme.id)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Footer stat bar ── */}
      <div className="shrink-0 flex items-center justify-between px-6 py-2 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.05)', background: '#050508' }}>
        <div className="flex items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
          <span>10 E-Commerce</span>
          <span>·</span>
          <span>10 Landing</span>
          <span>·</span>
          <span>10 Web</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
          <span className="text-orange-600/60">⚡ Todos soportan modo AGGRO</span>
          <span>·</span>
          <span>E-Commerce &amp; Landing = Edge by default</span>
        </div>
        <div className="text-[10px] text-zinc-700 uppercase tracking-widest">
          WEBLAB v2.3 · UNRLVL STUDIO
        </div>
      </div>
    </motion.div>
  );
}
