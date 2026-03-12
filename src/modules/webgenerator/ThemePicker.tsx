// ── ThemePicker.tsx ───────────────────────────────────────────────────────────
// WebLab v2.5 — Theme Picker
// Full-screen theme selection experience.
// 30 themes × 3 types: E-Commerce · Landing · Web
// v2.5: Full-page realistic preview, Eye→Preview (bug fixed), structure-first architecture
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, ShoppingCart, LayoutTemplate, Globe,
  ChevronRight, Zap, Check, ArrowLeft, Eye,
  Home, Grid, Package, Maximize2,
} from 'lucide-react';
import {
  ThemeIdentity, ThemeType,
  getThemesByType,
} from '../../config/themeCatalog';
import { cn } from '../../ui/components';

// ── Types ─────────────────────────────────────────────────────────────────────

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

// ── Preview Modes by Type ────────────────────────────────────────────────────
// E-Commerce: Home | Collection | Product
// Web:        Home | About | Services
// Landing:    Hero | Proof | CTA

type EcommerceMode = 'home' | 'collection' | 'product';
type WebMode       = 'home' | 'about' | 'services';
type LandingMode   = 'hero' | 'proof' | 'cta';
type PreviewMode   = EcommerceMode | WebMode | LandingMode;

const VIEW_CONFIGS: Record<string, { id: PreviewMode; label: string; icon: React.ElementType }[]> = {
  ecommerce: [
    { id: 'home',       label: 'Home',       icon: Home    },
    { id: 'collection', label: 'Collection', icon: Grid    },
    { id: 'product',    label: 'Product',    icon: Package },
  ],
  web: [
    { id: 'home',     label: 'Home',     icon: Home         },
    { id: 'about',    label: 'About',    icon: Globe        },
    { id: 'services', label: 'Services', icon: LayoutTemplate },
  ],
  landing: [
    { id: 'hero',  label: 'Hero',  icon: Zap           },
    { id: 'proof', label: 'Proof', icon: Check         },
    { id: 'cta',   label: 'CTA',   icon: ChevronRight  },
  ],
};

// ── Mini Preview Renderer (wireframe) ────────────────────────────────────────
// Each preview reflects actual theme structure (headerStyle, cardLayout, enhancers)
function ThemePreview({ theme, mode }: { theme: ThemeIdentity; mode: PreviewMode }) {
  const p = theme.palette;
  const header = theme.structure.headerStyle;

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col" style={{ background: p.bg }}>
      {/* Navbar — varies by header type */}
      <div className="flex items-center justify-between px-2.5 py-1.5 shrink-0"
        style={{ borderBottom: `1px solid ${p.rule}`, background: p.surface }}>
        <div className="w-10 h-1.5 rounded-sm" style={{ background: p.accent }} />
        {header === 'hero-editorial' ? (
          <div className="flex gap-1.5">
            {[0,1,2,3].map(i => <div key={i} className="w-6 h-1 rounded-sm opacity-40" style={{ background: p.text }} />)}
          </div>
        ) : (
          <div className="flex gap-1.5">
            {[0,1,2].map(i => <div key={i} className="w-7 h-1 rounded-sm opacity-40" style={{ background: p.text }} />)}
          </div>
        )}
        <div className="w-8 h-3.5 rounded-sm" style={{ background: p.accent }} />
      </div>

      {/* Content — dispatched by mode */}
      <div className="flex-1 overflow-hidden">
        {/* E-COMMERCE views */}
        {mode === 'home'       && theme.type === 'ecommerce' && <EcomHomePreview theme={theme} />}
        {mode === 'collection' && theme.type === 'ecommerce' && <EcomCollectionPreview theme={theme} />}
        {mode === 'product'    && theme.type === 'ecommerce' && <EcomProductPreview theme={theme} />}
        {/* WEB views */}
        {mode === 'home'       && theme.type === 'web' && <WebHomePreview theme={theme} />}
        {mode === 'about'      && theme.type === 'web' && <WebAboutPreview theme={theme} />}
        {mode === 'services'   && theme.type === 'web' && <WebServicesPreview theme={theme} />}
        {/* LANDING views */}
        {mode === 'hero'  && theme.type === 'landing' && <LandingHeroPreview theme={theme} />}
        {mode === 'proof' && theme.type === 'landing' && <LandingProofPreview theme={theme} />}
        {mode === 'cta'   && theme.type === 'landing' && <LandingCtaPreview theme={theme} />}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// E-COMMERCE WIREFRAMES
// ────────────────────────────────────────────────────────────────────
function EcomHomePreview({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  const h = theme.structure.headerStyle;
  const l = theme.structure.cardLayout;

  if (h === 'hero-cinematic' || h === 'hero-fullbleed') {
    return (
      <div className="flex flex-col h-full">
        {/* Full-bleed hero image block */}
        <div className="relative flex flex-col items-start justify-end px-3 pb-3"
          style={{ flex: '0 0 52%', background: `linear-gradient(135deg, ${p.surface}, ${p.bg})` }}>
          <div className="absolute inset-0 opacity-20"
            style={{ background: `linear-gradient(to bottom right, ${p.accent}, transparent 60%)` }} />
          <div className="w-4 h-0.5 rounded mb-1.5 relative z-10" style={{ background: p.accent }} />
          <div className="w-24 h-2.5 rounded mb-1 relative z-10" style={{ background: p.text }} />
          <div className="w-16 h-2 rounded mb-2 opacity-60 relative z-10" style={{ background: p.text }} />
          <div className="w-14 h-4 rounded-sm relative z-10" style={{ background: p.accent }} />
        </div>
        {/* Product row */}
        <div className="flex gap-1.5 px-2.5 py-2" style={{ flex: '0 0 26%', background: p.surface }}>
          {[0,1,2,3].map(i => (
            <div key={i} className="flex-1 rounded-sm overflow-hidden" style={{ border: `1px solid ${p.rule}` }}>
              <div className="h-7" style={{ background: l === 'cards-overlap' ? `${p.accent}22` : p.bg }} />
              <div className="px-1 pt-0.5">
                <div className="h-0.5 rounded w-full mb-0.5" style={{ background: p.text, opacity: 0.5 }} />
                <div className="h-0.5 rounded w-8" style={{ background: p.accent, opacity: 0.7 }} />
              </div>
            </div>
          ))}
        </div>
        {/* Bottom accent bar */}
        <div style={{ flex: '0 0 6%', background: p.bg, borderTop: `1px solid ${p.rule}` }} />
      </div>
    );
  }
  if (h === 'hero-split') {
    return (
      <div className="flex h-full">
        <div className="flex flex-col justify-center px-2.5 py-2" style={{ flex: '0 0 50%' }}>
          <div className="w-3 h-0.5 rounded mb-2" style={{ background: p.accent }} />
          <div className="w-20 h-2.5 rounded mb-1" style={{ background: p.text }} />
          <div className="w-14 h-2 rounded mb-1 opacity-60" style={{ background: p.text }} />
          <div className="w-10 h-1 rounded mb-2.5 opacity-30" style={{ background: p.muted }} />
          <div className="w-12 h-4 rounded-sm" style={{ background: p.accent }} />
        </div>
        <div className="flex-1 relative" style={{ background: p.surface }}>
          <div className="absolute inset-0 opacity-30"
            style={{ background: `radial-gradient(circle at 40% 40%, ${p.accent}, transparent 60%)` }} />
          {/* Product cards 2x2 */}
          <div className="absolute inset-2 grid grid-cols-2 gap-1">
            {[0,1,2,3].map(i => (
              <div key={i} className="rounded-sm" style={{ background: p.bg, border: `1px solid ${p.rule}` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (h === 'hero-text-only') {
    return (
      <div className="flex flex-col h-full">
        <div className="flex flex-col items-center justify-center px-3 py-3" style={{ flex: '0 0 44%' }}>
          <div className="w-28 h-3 rounded mb-1.5 opacity-90" style={{ background: p.text }} />
          <div className="w-20 h-3 rounded mb-2.5 opacity-60" style={{ background: p.accent }} />
          <div className="w-12 h-4 rounded-sm" style={{ background: p.accent }} />
        </div>
        {/* Horizontal scroll cards */}
        <div className="flex gap-1 px-2 pb-2" style={{ flex: '1', background: p.surface, alignItems: 'flex-start', paddingTop: '8px' }}>
          {[0,1,2,3,4].map(i => (
            <div key={i} className="rounded-sm shrink-0" style={{ width: '28%', border: `1px solid ${p.rule}`, background: p.bg }}>
              <div className="h-9" style={{ background: i === 0 ? `${p.accent}30` : `${p.surface}` }} />
              <div className="p-1"><div className="h-0.5 rounded w-full mb-0.5" style={{ background: p.text, opacity: 0.5 }} /></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // editorial
  return (
    <div className="flex flex-col h-full px-3 py-2">
      <div className="h-0.5 w-full mb-2 opacity-20" style={{ background: p.text }} />
      <div className="flex gap-3 mb-2" style={{ flex: '0 0 40%' }}>
        <div>
          <div className="w-20 h-3 rounded mb-1" style={{ background: p.text }} />
          <div className="w-14 h-3 rounded opacity-60" style={{ background: p.text }} />
        </div>
        <div className="flex-1">
          <div className="w-full h-1 rounded mb-1 opacity-30" style={{ background: p.muted }} />
          <div className="w-4/5 h-1 rounded opacity-30" style={{ background: p.muted }} />
          <div className="w-12 h-3.5 rounded-sm mt-2" style={{ background: p.accent }} />
        </div>
      </div>
      <div className="flex gap-1.5 flex-1">
        {[0,1,2,3].map(i => (
          <div key={i} className="flex-1 rounded-sm" style={{ background: p.surface, border: `1px solid ${p.rule}` }}>
            <div className="h-8 w-full" style={{ background: p.bg }} />
            <div className="p-1"><div className="h-0.5 rounded w-full mb-0.5" style={{ background: p.text, opacity: 0.5 }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcomCollectionPreview({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  const l = theme.structure.cardLayout;

  if (l === 'scroll-horizontal') {
    return (
      <div className="flex flex-col h-full">
        <div className="flex items-center px-2.5 pt-2 pb-1.5 gap-1 shrink-0">
          <div className="h-1 rounded-full flex-1" style={{ background: `${p.text}20` }} />
          {[0,1,2,3].map(i => <div key={i} className="w-8 h-3 rounded-full text-[6px] flex items-center justify-center" style={{ background: i===0 ? p.accent : `${p.text}15` }} />)}
        </div>
        <div className="flex gap-1.5 px-2 flex-1 items-stretch pb-2" style={{ overflow: 'hidden' }}>
          {[0,1,2,3].map(i => (
            <div key={i} className="rounded-sm shrink-0 flex flex-col" style={{ width: '36%', border: `1px solid ${p.rule}`, background: p.surface }}>
              <div className="flex-1" style={{ background: p.bg }} />
              <div className="p-1 shrink-0">
                <div className="h-0.5 rounded w-full mb-0.5" style={{ background: p.text, opacity: 0.5 }} />
                <div className="h-0.5 rounded w-8" style={{ background: p.accent, opacity: 0.7 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (l === 'grid-masonry') {
    return (
      <div className="flex h-full gap-1.5 p-2">
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="rounded-sm" style={{ height: '55%', background: p.surface, border: `1px solid ${p.rule}` }} />
          <div className="rounded-sm flex-1" style={{ background: p.surface, border: `1px solid ${p.rule}` }} />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="rounded-sm" style={{ height: '35%', background: p.surface, border: `1px solid ${p.rule}` }} />
          <div className="rounded-sm" style={{ height: '40%', background: p.surface, border: `1px solid ${p.rule}` }} />
          <div className="rounded-sm flex-1" style={{ background: p.surface, border: `1px solid ${p.rule}` }} />
        </div>
      </div>
    );
  }
  // default grid-standard + sidebar
  return (
    <div className="flex h-full">
      <div className="w-10 shrink-0 border-r p-1.5 flex flex-col gap-1" style={{ borderColor: p.rule, background: p.surface }}>
        <div className="h-1 w-full rounded opacity-50" style={{ background: p.text }} />
        <div className="h-px w-full opacity-20" style={{ background: p.text }} />
        {[0,1,2,3,4].map(i => (
          <div key={i} className="flex items-center gap-0.5">
            <div className="w-1.5 h-1.5 rounded-sm border" style={{ borderColor: i===1 ? p.accent : p.muted, background: i===1 ? p.accent : 'transparent' }} />
            <div className="h-0.5 rounded flex-1 opacity-40" style={{ background: p.text }} />
          </div>
        ))}
      </div>
      <div className="flex-1 p-1.5">
        <div className="grid grid-cols-3 gap-1 h-full content-start">
          {[0,1,2,3,4,5].map(i => (
            <div key={i} className="rounded-sm overflow-hidden" style={{ border: `1px solid ${p.rule}` }}>
              <div className="h-8" style={{ background: p.surface }} />
              <div className="p-1"><div className="h-0.5 rounded w-full mb-0.5" style={{ background: p.text, opacity: 0.5 }} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EcomProductPreview({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  return (
    <div className="flex h-full">
      <div className="relative overflow-hidden shrink-0" style={{ width: '42%', background: p.surface }}>
        <div className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(circle at 50% 55%, ${p.accent}, transparent 60%)` }} />
        <div className="absolute inset-3 rounded-sm" style={{ background: `${p.bg}80`, border: `1px solid ${p.rule}` }} />
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-0.5">
          {[0,1,2].map(i => <div key={i} className="w-3 h-3 rounded-sm" style={{ background: i===0 ? p.accent : p.bg, border: `1px solid ${p.rule}` }} />)}
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2 gap-1">
        <div className="h-1 w-16 rounded opacity-40" style={{ background: p.muted }} />
        <div className="h-2.5 w-full rounded opacity-80" style={{ background: p.text }} />
        <div className="h-2 w-3/4 rounded opacity-55" style={{ background: p.text }} />
        <div className="h-3 w-10 rounded mt-0.5" style={{ background: p.accent }} />
        <div className="flex gap-1 mt-1">
          {[0,1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-sm" style={{ background: p.surface, border: `1px solid ${p.rule}` }} />)}
        </div>
        <div className="mt-auto flex flex-col gap-1">
          <div className="h-5 w-full rounded-sm" style={{ background: p.accent }} />
          <div className="h-4 w-full rounded-sm" style={{ background: `${p.text}10`, border: `1px solid ${p.rule}` }} />
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// WEB WIREFRAMES
// ────────────────────────────────────────────────────────────────────
function WebHomePreview({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  const h = theme.structure.headerStyle;

  if (h === 'hero-cinematic' || h === 'hero-fullbleed') {
    return (
      <div className="flex flex-col h-full">
        <div className="relative flex-1 flex flex-col justify-end px-2.5 pb-2.5"
          style={{ background: `linear-gradient(160deg, ${p.surface}, ${p.bg})` }}>
          <div className="absolute top-2 right-2 flex gap-1">
            {[0,1].map(i => <div key={i} className="w-6 h-1 rounded-sm opacity-30" style={{ background: p.text }} />)}
          </div>
          <div className="absolute inset-0 opacity-15"
            style={{ background: `radial-gradient(ellipse at 30% 70%, ${p.accent}, transparent 55%)` }} />
          <div className="w-3 h-0.5 mb-1.5 relative z-10" style={{ background: p.accent }} />
          <div className="w-24 h-3 rounded mb-1 relative z-10" style={{ background: p.text }} />
          <div className="w-16 h-2.5 rounded mb-2 opacity-50 relative z-10" style={{ background: p.text }} />
          <div className="w-14 h-4 rounded-sm relative z-10" style={{ background: p.accent }} />
        </div>
        {/* Stats strip */}
        <div className="flex shrink-0 px-2 py-1.5 gap-2 justify-around" style={{ background: p.surface, borderTop: `1px solid ${p.rule}` }}>
          {[0,1,2].map(i => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="w-6 h-2 rounded" style={{ background: p.accent, opacity: 0.8 }} />
              <div className="w-8 h-1 rounded opacity-40" style={{ background: p.text }} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (h === 'hero-split') {
    return (
      <div className="flex h-full">
        <div className="flex flex-col justify-center px-2.5 py-2" style={{ flex: '0 0 52%' }}>
          <div className="w-3 h-0.5 rounded mb-2" style={{ background: p.accent }} />
          <div className="w-20 h-2.5 rounded mb-1" style={{ background: p.text }} />
          <div className="w-24 h-2.5 rounded mb-1 opacity-70" style={{ background: p.text }} />
          <div className="w-14 h-1 rounded mb-3 opacity-30" style={{ background: p.muted }} />
          <div className="w-12 h-4 rounded-sm" style={{ background: p.accent }} />
        </div>
        <div className="flex-1 relative overflow-hidden" style={{ background: p.surface }}>
          <div className="absolute inset-0 opacity-20"
            style={{ background: `radial-gradient(circle at 60% 40%, ${p.accent}, transparent 60%)` }} />
          <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: `linear-gradient(to top, ${p.bg}, transparent)` }} />
        </div>
      </div>
    );
  }
  // editorial
  return (
    <div className="flex flex-col h-full px-2.5 py-2">
      <div className="flex items-baseline gap-2 mb-1.5">
        <div className="w-6 h-1 rounded-sm opacity-30" style={{ background: p.muted }} />
        <div className="h-px flex-1 opacity-15" style={{ background: p.text }} />
      </div>
      <div className="flex gap-2 flex-1">
        <div style={{ flex: '0 0 45%' }}>
          <div className="w-full h-3 rounded mb-1" style={{ background: p.text }} />
          <div className="w-4/5 h-3 rounded opacity-60" style={{ background: p.accent }} />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="w-full h-1 rounded mb-0.5 opacity-30" style={{ background: p.muted }} />
            <div className="w-4/5 h-1 rounded opacity-30" style={{ background: p.muted }} />
          </div>
          <div className="w-12 h-3.5 rounded-sm" style={{ background: p.accent }} />
        </div>
      </div>
      <div className="h-12 mt-2 rounded-sm w-full" style={{ background: p.surface, border: `1px solid ${p.rule}` }} />
    </div>
  );
}

function WebAboutPreview({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  const l = theme.structure.cardLayout;
  return (
    <div className="flex flex-col h-full px-2.5 py-2 gap-1.5">
      {/* Eyebrow */}
      <div className="w-16 h-1 rounded" style={{ background: p.accent, opacity: 0.7 }} />
      {/* Two col text */}
      <div className="flex gap-2 flex-1">
        <div style={{ flex: l === 'list-editorial' ? '0 0 35%' : '1' }} className="flex flex-col gap-1">
          <div className="w-full h-2.5 rounded" style={{ background: p.text }} />
          <div className="w-4/5 h-2.5 rounded opacity-60" style={{ background: p.text }} />
          <div className="w-3/5 h-2 rounded opacity-60" style={{ background: p.text }} />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="w-full h-1 rounded opacity-30" style={{ background: p.muted }} />
          <div className="w-full h-1 rounded opacity-30" style={{ background: p.muted }} />
          <div className="w-4/5 h-1 rounded opacity-30" style={{ background: p.muted }} />
          <div className="w-full h-1 rounded opacity-25" style={{ background: p.muted }} />
          <div className="mt-auto flex items-center gap-1">
            <div className="w-5 h-5 rounded-full" style={{ background: p.surface, border: `1px solid ${p.rule}` }} />
            <div>
              <div className="w-12 h-1 rounded mb-0.5" style={{ background: p.text, opacity: 0.7 }} />
              <div className="w-8 h-0.5 rounded" style={{ background: p.muted, opacity: 0.5 }} />
            </div>
          </div>
        </div>
      </div>
      {/* Accent rule */}
      <div className="h-0.5 w-8 rounded" style={{ background: p.accent }} />
    </div>
  );
}

function WebServicesPreview({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  const l = theme.structure.cardLayout;

  if (l === 'list-editorial') {
    return (
      <div className="flex flex-col h-full px-2.5 py-2 gap-1">
        <div className="w-16 h-1 rounded mb-0.5" style={{ background: p.accent, opacity: 0.7 }} />
        {[0,1,2,3].map(i => (
          <div key={i} className="flex items-center gap-1.5 py-1" style={{ borderBottom: `1px solid ${p.rule}` }}>
            <div className="w-3 h-3 rounded-sm shrink-0 opacity-50" style={{ background: p.accent }} />
            <div className="flex-1">
              <div className="h-1.5 rounded w-4/5 mb-0.5" style={{ background: p.text, opacity: 0.7 }} />
              <div className="h-1 rounded w-full opacity-30" style={{ background: p.muted }} />
            </div>
            <div className="text-[8px]" style={{ color: p.accent, opacity: 0.6 }}>→</div>
          </div>
        ))}
      </div>
    );
  }
  if (l === 'grid-masonry') {
    return (
      <div className="flex h-full gap-1 p-2">
        {[0,1,2].map((_col, ci) => (
          <div key={ci} className="flex flex-col gap-1 flex-1">
            {[0, ci === 1 ? 1 : 0].map(i => (
              <div key={i} className="rounded-sm p-1.5 flex flex-col gap-0.5"
                style={{ flex: i === 0 ? '0 0 55%' : '1', background: p.surface, border: `1px solid ${p.rule}` }}>
                <div className="w-4 h-1 rounded" style={{ background: p.accent, opacity: 0.7 }} />
                <div className="h-1 rounded w-full opacity-50" style={{ background: p.text }} />
                <div className="h-0.5 rounded w-4/5 opacity-25" style={{ background: p.muted }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  // grid-standard
  return (
    <div className="flex flex-col h-full px-2.5 py-2">
      <div className="w-16 h-1 rounded mb-2" style={{ background: p.accent, opacity: 0.7 }} />
      <div className="grid grid-cols-2 gap-1.5 flex-1 content-start">
        {[0,1,2,3].map(i => (
          <div key={i} className="rounded-sm p-1.5" style={{ background: p.surface, border: `1px solid ${p.rule}` }}>
            <div className="w-3 h-3 rounded-sm mb-1" style={{ background: p.accent, opacity: 0.5 }} />
            <div className="h-1.5 rounded w-3/4 mb-0.5" style={{ background: p.text, opacity: 0.7 }} />
            <div className="h-1 rounded w-full opacity-25" style={{ background: p.muted }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// LANDING WIREFRAMES  (single-page conversion flow)
// ────────────────────────────────────────────────────────────────────
function LandingHeroPreview({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  const h = theme.structure.headerStyle;
  const hasFloat = theme.structure.enhancers.includes('floating-cta');

  return (
    <div className="relative flex flex-col h-full">
      {h === 'hero-fullbleed' || h === 'hero-cinematic' ? (
        // Full-bleed: copy left, image fill right (or overlay)
        <div className="flex-1 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${p.bg} 60%, ${p.surface})` }}>
          <div className="absolute inset-0 opacity-20"
            style={{ background: `radial-gradient(ellipse at 70% 30%, ${p.accent}, transparent 55%)` }} />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
            <div className="w-3 h-0.5 rounded" style={{ background: p.accent }} />
            <div className="w-24 h-3 rounded" style={{ background: p.text }} />
            <div className="w-20 h-2 rounded opacity-60" style={{ background: p.text }} />
            <div className="w-28 h-1 rounded opacity-40" style={{ background: p.muted }} />
            <div className="w-28 h-1 rounded opacity-40" style={{ background: p.muted }} />
            <div className="w-16 h-4 rounded-sm mt-1" style={{ background: p.accent }} />
          </div>
        </div>
      ) : h === 'hero-split' ? (
        <div className="flex flex-1">
          <div className="flex flex-col justify-center px-2.5" style={{ flex: '0 0 55%' }}>
            <div className="w-3 h-0.5 rounded mb-1.5" style={{ background: p.accent }} />
            <div className="w-22 h-3 rounded mb-1" style={{ background: p.text }} />
            <div className="w-16 h-2 rounded mb-2 opacity-60" style={{ background: p.text }} />
            <div className="w-12 h-4 rounded-sm" style={{ background: p.accent }} />
          </div>
          <div className="flex-1" style={{ background: p.surface }}>
            <div className="h-full w-full opacity-40"
              style={{ background: `linear-gradient(135deg, ${p.accent}40, transparent)` }} />
          </div>
        </div>
      ) : (
        // text-only / editorial
        <div className="flex flex-col items-center justify-center h-full px-3 py-2 text-center">
          <div className="w-3 h-0.5 rounded mb-2 mx-auto" style={{ background: p.accent }} />
          <div className="w-28 h-3.5 rounded mb-1" style={{ background: p.text }} />
          <div className="w-20 h-3 rounded mb-1 opacity-70" style={{ background: p.text }} />
          <div className="w-24 h-1 rounded mb-1 opacity-30" style={{ background: p.muted }} />
          <div className="w-16 h-4 rounded-sm mt-2" style={{ background: p.accent }} />
        </div>
      )}
      {/* Floating CTA badge */}
      {hasFloat && (
        <div className="absolute bottom-1.5 right-1.5 w-8 h-5 rounded-full"
          style={{ background: p.accent, boxShadow: `0 2px 8px ${p.accent}50` }} />
      )}
    </div>
  );
}

function LandingProofPreview({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  const l = theme.structure.cardLayout;
  return (
    <div className="flex flex-col h-full px-2.5 py-2 gap-1.5">
      {/* Social proof / testimonials */}
      <div className="w-12 h-1 rounded" style={{ background: p.accent, opacity: 0.7 }} />
      {l === 'grid-masonry' ? (
        <div className="flex gap-1.5 flex-1">
          {[0,1].map(ci => (
            <div key={ci} className="flex flex-col gap-1 flex-1">
              {[0, ci].map(i => (
                <div key={i} className="rounded-sm p-1.5" style={{ flex: i===0 ? '0 0 55%' : '1', background: p.surface, border: `1px solid ${p.rule}` }}>
                  <div className="flex gap-0.5 mb-1">{[0,1,2,3,4].map(s => <div key={s} className="w-1.5 h-1.5 rounded-sm" style={{ background: p.accent, opacity: 0.6 }} />)}</div>
                  <div className="h-0.5 rounded w-full mb-0.5 opacity-30" style={{ background: p.muted }} />
                  <div className="h-0.5 rounded w-4/5 opacity-30" style={{ background: p.muted }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-1.5 flex-1">
          {/* Stats row */}
          <div className="flex gap-2" style={{ flex: '0 0 35%' }}>
            {[0,1,2].map(i => (
              <div key={i} className="flex-1 rounded-sm flex flex-col items-center justify-center py-1" style={{ background: p.surface, border: `1px solid ${p.rule}` }}>
                <div className="w-8 h-2 rounded mb-0.5" style={{ background: p.accent, opacity: 0.8 }} />
                <div className="w-6 h-1 rounded opacity-30" style={{ background: p.text }} />
              </div>
            ))}
          </div>
          {/* Testimonial */}
          <div className="flex-1 rounded-sm p-1.5" style={{ background: p.surface, border: `1px solid ${p.rule}` }}>
            <div className="flex gap-0.5 mb-1">{[0,1,2,3,4].map(s => <div key={s} className="w-1.5 h-1.5 rounded-sm" style={{ background: p.accent, opacity: 0.6 }} />)}</div>
            <div className="h-0.5 rounded w-full mb-0.5 opacity-30" style={{ background: p.muted }} />
            <div className="h-0.5 rounded w-4/5 opacity-30" style={{ background: p.muted }} />
          </div>
        </div>
      )}
    </div>
  );
}

function LandingCtaPreview({ theme }: { theme: ThemeIdentity }) {
  const p = theme.palette;
  return (
    <div className="flex flex-col h-full">
      {/* Main CTA block */}
      <div className="flex-1 flex flex-col items-center justify-center px-3" style={{ background: p.bg }}>
        <div className="w-24 h-2.5 rounded mb-1" style={{ background: p.text }} />
        <div className="w-16 h-2 rounded mb-2 opacity-60" style={{ background: p.text }} />
        <div className="w-20 h-5 rounded-sm" style={{ background: p.accent }} />
      </div>
      {/* Form block */}
      <div className="shrink-0 px-3 py-2" style={{ background: p.surface, borderTop: `1px solid ${p.rule}` }}>
        <div className="w-full h-3 rounded mb-1" style={{ background: `${p.text}15`, border: `1px solid ${p.rule}` }} />
        <div className="w-full h-3 rounded mb-1" style={{ background: `${p.text}15`, border: `1px solid ${p.rule}` }} />
        <div className="w-full h-4 rounded-sm" style={{ background: p.accent }} />
      </div>
    </div>
  );
}

// ── Full-Page Realistic Preview ───────────────────────────────────────────────
function buildPreviewHTML(theme: ThemeIdentity): string {
  const p = theme.palette;
  const isLight = theme.structure.colorMode === 'light';
  const hasCarousel = theme.structure.enhancers.includes('image-carousel');
  const hasParallax = theme.structure.enhancers.includes('parallax');
  const hasSticky = theme.structure.enhancers.includes('sticky-header');
  const hasFloat = theme.structure.enhancers.includes('floating-cta');
  const header = theme.structure.headerStyle;

  const picIds = [10, 20, 30, 40, 50, 60, 70, 80];
  const img = (id: number, w = 800, h = 500) => `https://picsum.photos/seed/${id}/${w}/${h}`;

  const isSans = theme.typography.style === 'sans' || theme.typography.style === 'display';
  const fontStack = `'${theme.typography.display}', ${isSans ? 'sans-serif' : 'serif'}`;
  const bodyStack = `'${theme.typography.body}', sans-serif`;

  const navBg = isLight ? p.surface : p.surface;
  const textOpacity = isLight ? '0.75' : '0.6';

  const carouselScript = hasCarousel ? `
    let ci = 0;
    const slides = document.querySelectorAll('.cs');
    function nextSlide() {
      slides[ci].style.opacity = '0';
      ci = (ci + 1) % slides.length;
      slides[ci].style.opacity = '1';
    }
    setInterval(nextSlide, 3500);
  ` : '';

  const scrollRevealScript = `
    const els = document.querySelectorAll('.sr');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('sr-vis'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
  `;

  const parallaxScript = hasParallax ? `
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      document.querySelectorAll('.parallax-bg').forEach(el => {
        (el as HTMLElement).style.transform = 'translateY(' + (y * 0.28) + 'px)';
      });
    });
  ` : '';

  const stickyScript = hasSticky ? `
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) { nav.style.backdropFilter='blur(20px)'; nav.style.boxShadow='0 2px 24px rgba(0,0,0,0.18)'; }
      else { nav.style.backdropFilter='none'; nav.style.boxShadow='none'; }
    });
  ` : '';

  const floatScript = hasFloat ? `
    const fab = document.getElementById('fab');
    window.addEventListener('scroll', () => {
      fab.style.opacity = window.scrollY > window.innerHeight * 0.3 ? '1' : '0';
      fab.style.pointerEvents = window.scrollY > window.innerHeight * 0.3 ? 'all' : 'none';
    });
  ` : '';

  // Hero HTML based on headerStyle
  let heroSection = '';
  if (header === 'hero-cinematic' || header === 'hero-fullbleed') {
    heroSection = `
    <section class="hero-cinematic" style="position:relative;height:92vh;overflow:hidden;display:flex;align-items:center;justify-content:center;">
      <div class="parallax-bg" style="position:absolute;inset:-20%;background:url('${img(picIds[0],1400,900)}') center/cover no-repeat;transition:transform 0s linear;"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom right,${p.bg}E0,${p.bg}A0);"></div>
      ${hasCarousel ? `
        <div style="position:absolute;inset:0;">
          ${picIds.slice(0,3).map((id, i) => `<div class="cs" style="position:absolute;inset:0;background:url('${img(id,1400,900)}') center/cover;opacity:${i===0?1:0};transition:opacity 1.2s ease;"></div>`).join('')}
          <div style="position:absolute;inset:0;background:linear-gradient(to right,${p.bg}D0,${p.bg}60 60%,transparent);"></div>
        </div>` : ''}
      <div style="position:relative;z-index:2;text-align:left;padding:0 8vw;max-width:700px;">
        <p class="sr" style="font-family:${bodyStack};font-size:0.7rem;letter-spacing:0.25em;text-transform:uppercase;color:${p.accent};margin-bottom:1.5rem;opacity:0.9;">Identidad de Marca</p>
        <h1 class="sr" style="font-family:${fontStack};font-size:clamp(2.8rem,6vw,5rem);font-weight:${theme.typography.displayWeight};line-height:1.05;color:${p.text};margin-bottom:1.5rem;letter-spacing:-0.02em;">
          Tu Marca.<br/><em style="color:${p.accent};font-style:normal;">Sin Límites.</em>
        </h1>
        <p class="sr" style="font-family:${bodyStack};font-size:1.05rem;line-height:1.7;color:${p.text};opacity:${textOpacity};max-width:480px;margin-bottom:2.5rem;">
          Una propuesta visual construida sobre datos reales, estrategia y diseño de alto nivel. Cada píxel tiene un propósito.
        </p>
        <div class="sr" style="display:flex;gap:1rem;flex-wrap:wrap;">
          <button style="background:${p.accent};color:${p.bg};border:none;padding:0.9rem 2.2rem;font-family:${bodyStack};font-size:0.85rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;border-radius:4px;">Ver Portafolio</button>
          <button style="background:transparent;color:${p.text};border:1px solid ${p.text}40;padding:0.9rem 2.2rem;font-family:${bodyStack};font-size:0.85rem;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:4px;">Contactar</button>
        </div>
      </div>
    </section>`;
  } else if (header === 'hero-split') {
    heroSection = `
    <section style="display:grid;grid-template-columns:1fr 1fr;min-height:88vh;">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:8vw 5vw 8vw 8vw;background:${p.bg};">
        <p class="sr" style="font-family:${bodyStack};font-size:0.65rem;letter-spacing:0.25em;text-transform:uppercase;color:${p.accent};margin-bottom:1.5rem;">Enfoque Estratégico</p>
        <h1 class="sr" style="font-family:${fontStack};font-size:clamp(2.2rem,4.5vw,4rem);font-weight:${theme.typography.displayWeight};line-height:1.08;color:${p.text};margin-bottom:1.5rem;">
          Construido<br/>Para <em style="color:${p.accent};font-style:normal;">Crecer</em>
        </h1>
        <p class="sr" style="font-family:${bodyStack};font-size:1rem;line-height:1.75;color:${p.text};opacity:${textOpacity};margin-bottom:2.5rem;">
          Sistemas de identidad que trabajan en todos los puntos de contacto. Diseño que convierte.
        </p>
        <button class="sr" style="background:${p.accent};color:${p.bg};border:none;padding:0.85rem 2rem;font-family:${bodyStack};font-size:0.8rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;width:fit-content;border-radius:4px;">Comenzar Ahora</button>
      </div>
      <div style="position:relative;overflow:hidden;">
        <img src="${img(picIds[1],800,900)}" style="width:100%;height:100%;object-fit:cover;" alt="" />
        <div style="position:absolute;inset:0;background:${p.bg}30;"></div>
      </div>
    </section>`;
  } else if (header === 'hero-editorial') {
    heroSection = `
    <section style="padding:12vh 8vw 8vh;background:${p.bg};border-bottom:1px solid ${p.rule};">
      <p class="sr" style="font-family:${bodyStack};font-size:0.65rem;letter-spacing:0.3em;text-transform:uppercase;color:${p.muted};margin-bottom:3rem;">Vol. 01 — Identidad Visual</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;">
        <h1 class="sr" style="font-family:${fontStack};font-size:clamp(3rem,6vw,5.5rem);font-weight:${theme.typography.displayWeight};line-height:1.0;color:${p.text};letter-spacing:-0.03em;">
          Diseño<br/>que<br/><span style="color:${p.accent};">Habla.</span>
        </h1>
        <div>
          <p class="sr" style="font-family:${bodyStack};font-size:1.05rem;line-height:1.8;color:${p.text};opacity:${textOpacity};margin-bottom:2rem;">
            Una identidad visual no es un logo. Es el sistema completo que comunica quién eres antes de que digas una palabra.
          </p>
          <a href="#" style="font-family:${bodyStack};font-size:0.8rem;letter-spacing:0.15em;text-transform:uppercase;color:${p.accent};text-decoration:none;border-bottom:1px solid ${p.accent};padding-bottom:3px;">Leer más →</a>
        </div>
      </div>
      <img src="${img(picIds[2],1200,500)}" class="sr" style="width:100%;height:45vh;object-fit:cover;margin-top:5rem;border-radius:2px;" alt="" />
    </section>`;
  } else {
    // hero-text-only / hero-minimal
    heroSection = `
    <section style="padding:16vh 10vw 10vh;background:${p.bg};text-align:center;">
      <p class="sr" style="font-family:${bodyStack};font-size:0.65rem;letter-spacing:0.3em;text-transform:uppercase;color:${p.muted};margin-bottom:2rem;">Soluciones de Marca</p>
      <h1 class="sr" style="font-family:${fontStack};font-size:clamp(3.5rem,8vw,7rem);font-weight:${theme.typography.displayWeight};line-height:0.95;color:${p.text};letter-spacing:-0.04em;max-width:900px;margin:0 auto 2.5rem;">
        Ideas que<br/><span style="color:${p.accent};">Escalan</span>
      </h1>
      <p class="sr" style="font-family:${bodyStack};font-size:1.1rem;line-height:1.7;color:${p.text};opacity:${textOpacity};max-width:500px;margin:0 auto 3rem;">
        Creamos sistemas visuales que crecen con tu negocio. De startup a categoría.
      </p>
      <button class="sr" style="background:${p.accent};color:${p.bg};border:none;padding:1rem 2.5rem;font-family:${bodyStack};font-size:0.85rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;border-radius:4px;">Explorar</button>
    </section>`;
  }

  // Cards section
  const cardLayout = theme.structure.cardLayout;
  let cardsSection = '';
  if (cardLayout === 'scroll-horizontal') {
    cardsSection = `
    <section class="sr" style="padding:6rem 0;background:${p.surface};overflow:hidden;">
      <h2 style="font-family:${fontStack};font-size:1.8rem;font-weight:${theme.typography.displayWeight};color:${p.text};margin:0 8vw 3rem;letter-spacing:-0.02em;">Proyectos Recientes</h2>
      <div style="display:flex;gap:1.5rem;overflow-x:auto;padding:0 8vw 2rem;scroll-snap-type:x mandatory;scrollbar-width:none;cursor:grab;">
        ${picIds.map((id, i) => `
          <div style="flex:0 0 340px;scroll-snap-align:start;border-radius:8px;overflow:hidden;background:${p.bg};border:1px solid ${p.rule};">
            <img src="${img(id,340,220)}" style="width:100%;height:220px;object-fit:cover;" alt="" />
            <div style="padding:1.5rem;">
              <p style="font-family:${bodyStack};font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:${p.accent};margin-bottom:0.5rem;">Proyecto 0${i+1}</p>
              <h3 style="font-family:${fontStack};font-size:1.1rem;font-weight:600;color:${p.text};margin-bottom:0.5rem;">Identidad de Marca</h3>
              <p style="font-family:${bodyStack};font-size:0.85rem;line-height:1.6;color:${p.text};opacity:${textOpacity};">Sistema visual completo.</p>
            </div>
          </div>`).join('')}
      </div>
    </section>`;
  } else if (cardLayout === 'grid-masonry') {
    cardsSection = `
    <section class="sr" style="padding:6rem 8vw;background:${p.surface};">
      <h2 style="font-family:${fontStack};font-size:2rem;font-weight:${theme.typography.displayWeight};color:${p.text};margin-bottom:3rem;letter-spacing:-0.02em;">Servicios</h2>
      <div style="columns:3;gap:1.5rem;">
        ${picIds.slice(0,6).map((id, i) => `
          <div class="sr" style="break-inside:avoid;margin-bottom:1.5rem;border-radius:8px;overflow:hidden;background:${p.bg};border:1px solid ${p.rule};">
            <img src="${img(id, 400, i % 3 === 0 ? 300 : 220)}" style="width:100%;object-fit:cover;" alt="" />
            <div style="padding:1.25rem;">
              <p style="font-family:${bodyStack};font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:${p.accent};margin-bottom:0.4rem;">Servicio 0${i+1}</p>
              <h3 style="font-family:${fontStack};font-size:1rem;font-weight:600;color:${p.text};">Branding & Identidad</h3>
            </div>
          </div>`).join('')}
      </div>
    </section>`;
  } else if (cardLayout === 'list-editorial') {
    cardsSection = `
    <section class="sr" style="padding:6rem 8vw;background:${p.surface};">
      <div style="display:grid;grid-template-columns:1fr 2fr;gap:4rem;align-items:start;">
        <div>
          <h2 style="font-family:${fontStack};font-size:2rem;font-weight:${theme.typography.displayWeight};color:${p.text};letter-spacing:-0.02em;position:sticky;top:120px;">Qué<br/>Hacemos</h2>
        </div>
        <div style="display:flex;flex-direction:column;gap:0;">
          ${['Identidad Visual', 'Diseño Web', 'Estrategia de Marca', 'Campañas Digitales'].map((s, i) => `
            <div class="sr" style="display:flex;gap:2rem;align-items:flex-start;padding:2.5rem 0;border-bottom:1px solid ${p.rule};">
              <span style="font-family:${bodyStack};font-size:0.65rem;color:${p.muted};opacity:0.5;padding-top:6px;">0${i+1}</span>
              <div style="flex:1;">
                <h3 style="font-family:${fontStack};font-size:1.4rem;font-weight:${theme.typography.displayWeight};color:${p.text};margin-bottom:0.75rem;">${s}</h3>
                <p style="font-family:${bodyStack};font-size:0.9rem;line-height:1.75;color:${p.text};opacity:${textOpacity};">Soluciones diseñadas para tu industria. Entregamos resultados medibles con un enfoque sistemático.</p>
              </div>
              <span style="color:${p.accent};font-size:1.2rem;margin-top:4px;">→</span>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  } else if (cardLayout === 'cards-overlap') {
    cardsSection = `
    <section class="sr" style="padding:6rem 8vw;background:${p.surface};position:relative;overflow:hidden;">
      <h2 style="font-family:${fontStack};font-size:2rem;font-weight:${theme.typography.displayWeight};color:${p.text};margin-bottom:4rem;letter-spacing:-0.02em;">Portfolio</h2>
      <div style="position:relative;height:480px;">
        ${picIds.slice(0,3).map((id, i) => `
          <div style="position:absolute;top:${i*30}px;left:${i*60}px;width:360px;border-radius:8px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.3);z-index:${3-i};transform:rotate(${(i-1)*2}deg);">
            <img src="${img(id,360,240)}" style="width:100%;height:240px;object-fit:cover;" alt="" />
            <div style="padding:1.25rem;background:${p.bg};">
              <h3 style="font-family:${fontStack};font-size:1rem;color:${p.text};">Proyecto ${i+1}</h3>
            </div>
          </div>`).join('')}
      </div>
    </section>`;
  } else {
    // grid-standard
    cardsSection = `
    <section class="sr" style="padding:6rem 8vw;background:${p.surface};">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3rem;">
        <h2 style="font-family:${fontStack};font-size:2rem;font-weight:${theme.typography.displayWeight};color:${p.text};letter-spacing:-0.02em;">Proyectos</h2>
        <a href="#" style="font-family:${bodyStack};font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;color:${p.accent};text-decoration:none;">Ver todos →</a>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">
        ${picIds.slice(0,6).map((id, i) => `
          <div class="sr" style="border-radius:8px;overflow:hidden;background:${p.bg};border:1px solid ${p.rule};">
            <div style="position:relative;overflow:hidden;">
              <img src="${img(id,400,280)}" style="width:100%;height:220px;object-fit:cover;transition:transform 0.5s ease;" alt="" />
            </div>
            <div style="padding:1.25rem;">
              <p style="font-family:${bodyStack};font-size:0.6rem;letter-spacing:0.2em;text-transform:uppercase;color:${p.accent};margin-bottom:0.4rem;">Categoría</p>
              <h3 style="font-family:${fontStack};font-size:1rem;font-weight:600;color:${p.text};margin-bottom:0.5rem;">Identidad 0${i+1}</h3>
              <p style="font-family:${bodyStack};font-size:0.82rem;line-height:1.6;color:${p.text};opacity:${textOpacity};">Sistema visual completo con todos los puntos de contacto.</p>
            </div>
          </div>`).join('')}
      </div>
    </section>`;
  }

  const statsSection = `
  <section class="sr" style="padding:5rem 8vw;background:${p.bg};display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;border-top:1px solid ${p.rule};border-bottom:1px solid ${p.rule};">
    ${[['120+','Proyectos'],['8','Años'],['98%','Satisfacción'],['40+','Marcas']].map(([n,l]) => `
      <div style="text-align:center;">
        <div style="font-family:${fontStack};font-size:3rem;font-weight:${theme.typography.displayWeight};color:${p.accent};line-height:1;">${n}</div>
        <div style="font-family:${bodyStack};font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:${p.muted};margin-top:0.5rem;">${l}</div>
      </div>`).join('')}
  </section>`;

  const ctaSection = `
  <section class="sr" style="padding:8rem 8vw;background:${p.surface};text-align:center;">
    <h2 style="font-family:${fontStack};font-size:clamp(2rem,4vw,3.5rem);font-weight:${theme.typography.displayWeight};color:${p.text};margin-bottom:1.5rem;letter-spacing:-0.02em;">¿Listo para<br/><span style="color:${p.accent};">empezar</span>?</h2>
    <p style="font-family:${bodyStack};font-size:1rem;line-height:1.7;color:${p.text};opacity:${textOpacity};max-width:450px;margin:0 auto 2.5rem;">Hablemos de tu proyecto. Sin compromisos — solo una conversación estratégica.</p>
    <button style="background:${p.accent};color:${p.bg};border:none;padding:1rem 2.5rem;font-family:${bodyStack};font-size:0.85rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;border-radius:4px;">Agendar Llamada</button>
  </section>`;

  const footer = `
  <footer style="background:${isLight ? p.surface : p.bg};border-top:1px solid ${p.rule};padding:4rem 8vw;">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-family:${fontStack};font-size:1.4rem;font-weight:${theme.typography.displayWeight};color:${p.text};margin-bottom:0.5rem;">${theme.name}</div>
        <div style="font-family:${bodyStack};font-size:0.75rem;color:${p.muted};letter-spacing:0.1em;">STUDIO · ${new Date().getFullYear()}</div>
      </div>
      <div style="display:flex;gap:2rem;">
        ${['Inicio','Proyectos','Servicios','Contacto'].map(l => `<a href="#" style="font-family:${bodyStack};font-size:0.8rem;color:${p.muted};text-decoration:none;letter-spacing:0.05em;">${l}</a>`).join('')}
      </div>
    </div>
  </footer>`;

  const floatBtn = hasFloat ? `
  <button id="fab" style="position:fixed;bottom:2rem;right:2rem;z-index:999;background:${p.accent};color:${p.bg};border:none;padding:0.9rem 1.8rem;font-family:${bodyStack};font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;border-radius:100px;box-shadow:0 8px 32px ${p.accent}60;opacity:0;transition:opacity 0.4s;pointer-events:none;">
    Contactar ↑
  </button>` : '';

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${theme.name} — Preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${theme.typography.googleFontsUrl}" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{background:${p.bg};color:${p.text};font-family:${bodyStack};overflow-x:hidden;}
  .sr{opacity:0;transform:translateY(24px);transition:opacity 0.65s ease,transform 0.65s ease;}
  .sr-vis{opacity:1;transform:translateY(0);}
  img{display:block;max-width:100%;}
  ::-webkit-scrollbar{width:6px;height:6px;}
  ::-webkit-scrollbar-track{background:${p.bg};}
  ::-webkit-scrollbar-thumb{background:${p.accent}50;border-radius:3px;}
</style>
</head>
<body>
  <nav id="nav" style="position:${hasSticky ? 'sticky' : 'relative'};top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 8vw;background:${navBg};border-bottom:1px solid ${p.rule};transition:backdrop-filter 0.3s,box-shadow 0.3s;">
    <div style="font-family:${fontStack};font-size:1.25rem;font-weight:${theme.typography.displayWeight};color:${p.text};letter-spacing:-0.01em;">${theme.name}</div>
    <div style="display:flex;gap:2rem;">
      ${['Inicio','Servicios','Portfolio','Contacto'].map(l => `<a href="#" style="font-family:${bodyStack};font-size:0.82rem;color:${p.text};opacity:0.7;text-decoration:none;transition:opacity 0.2s;">${l}</a>`).join('')}
    </div>
    <button style="background:${p.accent};color:${p.bg};border:none;padding:0.6rem 1.4rem;font-family:${bodyStack};font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;border-radius:4px;">CTA</button>
  </nav>
  ${heroSection}
  ${statsSection}
  ${cardsSection}
  ${ctaSection}
  ${footer}
  ${floatBtn}
<script>
  document.addEventListener('DOMContentLoaded', () => {
    ${scrollRevealScript}
    ${carouselScript}
    ${parallaxScript}
    ${stickyScript}
    ${floatScript}
  });
</script>
</body>
</html>`;
}

function ThemeFullPreview({ theme, isSelected, onSelect, onClose }: {
  theme: ThemeIdentity;
  isSelected: boolean;
  onSelect: () => void;
  onClose: () => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const p = theme.palette;

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const html = buildPreviewHTML(theme);
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(html);
      doc.close();
    }
  }, [theme]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ background: '#050508' }}
    >
      {/* ── Top bar ── */}
      <div className="shrink-0 flex items-center justify-between px-5 py-3 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#0A0A10' }}>
        <div className="flex items-center gap-3">
          <button onClick={onClose}
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-200 transition-colors text-sm">
            <ArrowLeft size={15} />
            <span className="font-medium">Volver</span>
          </button>
          <div className="w-px h-4 bg-zinc-800" />
          <span className="text-zinc-300 text-sm font-bold uppercase tracking-widest">{theme.name}</span>
          <span className="text-zinc-600 text-xs">{theme.tagline}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Structure badges */}
          <div className="flex items-center gap-1.5">
            {theme.structure.enhancers.slice(0,3).map(e => (
              <span key={e} className="text-[9px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider"
                style={{ background: `${p.accent}15`, color: p.accent }}>
                {e.replace('-', ' ')}
              </span>
            ))}
          </div>
          <div className="w-px h-4 bg-zinc-800" />

          {/* Select button */}
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

      {/* ── iframe preview ── */}
      <div className="flex-1 relative overflow-hidden" style={{ background: '#000' }}>
        <iframe
          ref={iframeRef}
          title={`Preview ${theme.name}`}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </motion.div>
  );
}

// ── Theme Card ────────────────────────────────────────────────────────────────
function ThemeCard({
  theme, isSelected, aggroMode, previewMode,
  onSelect, onHover, onOpenPreview,
}: {
  theme: ThemeIdentity;
  isSelected: boolean;
  aggroMode: boolean;
  previewMode: PreviewMode;
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
        'group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200',
        'border',
        isSelected ? 'ring-2 scale-[1.01]' : 'hover:scale-[1.005] hover:shadow-2xl'
      )}
      style={{
        borderColor: isSelected ? p.accent : `${p.accent}30`,
        boxShadow: isSelected ? `0 0 0 2px ${p.accent}, 0 8px 32px ${p.accent}30` : undefined,
        background: p.bg,
      }}
    >
      {/* Preview window */}
      <div className="h-36 relative overflow-hidden">
        <ThemePreview theme={theme} mode={previewMode} />

        {/* Hover overlay — two separate actions */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: `${p.bg}CC` }}>
          <div className="absolute inset-0 flex items-center justify-center gap-3">
            {/* PREVIEW button */}
            <button
              onClick={(e) => { e.stopPropagation(); onOpenPreview(); }}
              className="flex flex-col items-center gap-1.5 hover:scale-110 transition-transform"
              title="Ver preview completo">
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: p.bg, border: `2px solid ${p.accent}` }}>
                <Maximize2 size={14} style={{ color: p.accent }} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: p.accent }}>
                Preview
              </span>
            </button>

            {/* SELECT button */}
            <button
              onClick={(e) => { e.stopPropagation(); onSelect(); }}
              className="flex flex-col items-center gap-1.5 hover:scale-110 transition-transform"
              title="Seleccionar theme">
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: p.accent }}>
                {isSelected
                  ? <Check size={14} style={{ color: p.bg }} />
                  : <ChevronRight size={14} style={{ color: p.bg }} />}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: p.accent }}>
                {isSelected ? 'Activo' : 'Elegir'}
              </span>
            </button>
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
        {/* Structure badge */}
        <div className="flex items-center gap-1 mb-2 mt-1">
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
        <div className="flex gap-1 mt-1">
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
  theme, aggroMode, previewMode, setPreviewMode, onSelect, onOpenPreview, isSelected,
}: {
  theme: ThemeIdentity;
  aggroMode: boolean;
  previewMode: PreviewMode;
  setPreviewMode: (m: PreviewMode) => void;
  onSelect: () => void;
  onOpenPreview: () => void;
  isSelected: boolean;
}) {
  const p = theme.palette;
  const views = VIEW_CONFIGS[theme.type] ?? VIEW_CONFIGS['ecommerce'];

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden"
      style={{ background: p.bg, border: `1px solid ${p.accent}30` }}>
      {/* Preview area */}
      <div className="relative" style={{ height: '240px' }}>
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
        {/* Full preview button */}
        <button
          onClick={onOpenPreview}
          className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all hover:opacity-90"
          style={{ background: `${p.bg}DD`, color: p.accent, border: `1px solid ${p.accent}40` }}>
          <Maximize2 size={9} />
          Full Preview
        </button>
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

        {/* Structure */}
        <div className="mb-3 p-2.5 rounded-lg" style={{ background: `${p.accent}08`, border: `1px solid ${p.accent}20` }}>
          <p className="text-[9px] uppercase font-bold tracking-widest mb-2 opacity-40" style={{ color: p.text }}>
            Estructura del Theme
          </p>
          <div className="flex flex-wrap gap-1">
            <span className="text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider" style={{ background: `${p.accent}25`, color: p.accent }}>
              {theme.structure.headerStyle}
            </span>
            <span className="text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider" style={{ background: `${p.text}10`, color: p.muted }}>
              {theme.structure.cardLayout}
            </span>
            <span className="text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider" style={{ background: `${p.text}10`, color: p.muted }}>
              {theme.structure.colorMode}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mt-1.5">
            {theme.structure.enhancers.map(e => (
              <span key={e} className="text-[7px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider" style={{ background: `${p.accent}10`, color: p.accent, opacity: 0.7 }}>
                {e}
              </span>
            ))}
          </div>
        </div>

        {/* Palette */}
        <div className="mb-3">
          <p className="text-[9px] uppercase font-bold tracking-widest mb-1.5 opacity-40" style={{ color: p.text }}>
            Paleta de referencia
          </p>
          <div className="flex gap-1.5">
            {Object.entries(p).filter(([k]) => ['bg','surface','text','accent','accent2'].includes(k)).map(([key, hex]) => (
              <div key={key} className="flex flex-col items-center gap-1">
                <div className="w-7 h-7 rounded-md shadow-sm" style={{ background: hex, border: `1px solid ${p.rule}` }} />
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

        <div className="p-2.5 rounded-lg" style={{ background: `${p.accent}10`, border: `1px solid ${p.accent}20` }}>
          <p className="text-[9px] italic leading-snug" style={{ color: p.accent }}>
            "{theme.designerNote}"
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-3 flex gap-2" style={{ background: p.surface, borderTop: `1px solid ${p.rule}` }}>
        <button
          onClick={onOpenPreview}
          className="flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 flex items-center justify-center gap-1.5"
          style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}30` }}>
          <Eye size={12} /> Full Preview
        </button>
        <button
          onClick={onSelect}
          className="flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-1.5"
          style={{ background: isSelected ? p.muted : p.accent, color: p.bg }}>
          {isSelected ? <><Check size={12} /> Activo</> : <>Usar <ChevronRight size={12} /></>}
        </button>
      </div>
    </div>
  );
}

// ── Main ThemePicker Component ────────────────────────────────────────────────
export function ThemePicker({ currentThemeId, aggroMode, onSelect, onClose }: ThemePickerProps) {
  const [activeType, setActiveType]           = useState<ThemeType>('ecommerce');
  const [previewMode, setPreviewMode]         = useState<PreviewMode>('home');
  const [hoveredTheme, setHoveredTheme]       = useState<ThemeIdentity | null>(null);
  const [detailTheme, setDetailTheme]         = useState<ThemeIdentity | null>(null);
  const [fullPreviewTheme, setFullPreviewTheme] = useState<ThemeIdentity | null>(null);

  const themes = getThemesByType(activeType);
  const panelTheme = detailTheme ?? hoveredTheme ?? themes[0];

  // Close on Escape (only if no full preview open — that handles its own Escape)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape' && !fullPreviewTheme) onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
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
            <button
              onClick={onClose}
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
                30 identidades · Paleta de marca tiene prioridad · Estructura define el output
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
                  const firstView = VIEW_CONFIGS[tab.id]?.[0]?.id ?? 'home';
                  setPreviewMode(firstView as PreviewMode);
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

          <button onClick={onClose} className="p-2 rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/50 transition-colors">
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
                    <span className="text-zinc-600 text-xs">— {themes.length} identidades · hover para preview rápido · <span style={{ color: tab.accent }}>Maximize</span> para full preview</span>
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
                    previewMode={previewMode}
                    setPreviewMode={setPreviewMode}
                    isSelected={currentThemeId === panelTheme.id}
                    onSelect={() => handleSelect(panelTheme.id)}
                    onOpenPreview={() => setFullPreviewTheme(panelTheme)}
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
            <span>Paleta de marca tiene prioridad sobre el theme</span>
          </div>
          <div className="text-[10px] text-zinc-700 uppercase tracking-widest">
            WEBLAB v2.5 · UNRLVL STUDIO
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