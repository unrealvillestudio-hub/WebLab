// ── EcomProductSelector.tsx ──────────────────────────────────────────────────
// Selector inteligente de productos/collections para packs de E-Commerce
// Muestra UI diferente según el pack activo.

import { useState, useCallback } from 'react';
import {
  Wand2, Check, Loader2, GitBranch, ChevronDown,
  Package, LayoutGrid, AlertCircle, User, MapPin,
} from 'lucide-react';
import { getCatalog, CatalogProduct, CatalogCollection } from '../../config/productCatalog';
import type { EcomProductContext, EcomListingMode, BlueprintImageToggles } from '../../core/types';
import { cn } from '../../ui/components';

// ── API enhance call ──────────────────────────────────────────────────────────
async function enhanceWithAI(text: string, context: string): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content:
          `Eres un experto en copywriting para e-commerce de belleza y cuidado capilar premium.\n` +
          `Contexto de marca: ${context}\n\n` +
          `Reescribe y mejora la siguiente descripción haciéndola más persuasiva, con beneficios claros, ` +
          `lenguaje sensorial, SEO-friendly y orientada a conversión. Mantén el tono profesional-luxury. ` +
          `Responde SOLO con la descripción mejorada, sin preámbulos ni explicaciones.\n\n` +
          `DESCRIPCIÓN ORIGINAL:\n${text}`,
      }],
    }),
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  return data.content?.[0]?.text ?? text;
}

// ── Description Editor ────────────────────────────────────────────────────────
interface DescriptionEditorProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  enhancedValue: string;
  onEnhancedChange: (v: string) => void;
  brandContext: string;
  onPushReady: (enhanced: string) => void; // signal to parent to push
  pushState?: 'idle' | 'pushing' | 'done' | 'error';
  pushMessage?: string;
  accent?: string;
}

export function DescriptionEditor({
  label, value, onChange,
  enhancedValue, onEnhancedChange,
  brandContext, onPushReady,
  pushState = 'idle', pushMessage = '',
  accent: _accent = '#FFAB00',
}: DescriptionEditorProps) {
  const [enhancing, setEnhancing] = useState(false);
  const [enhanceError, setEnhanceError] = useState('');
  const [showEnhanced, setShowEnhanced] = useState(false);

  const handleEnhance = useCallback(async () => {
    const src = value.trim();
    if (!src) return;
    setEnhancing(true);
    setEnhanceError('');
    try {
      const result = await enhanceWithAI(src, brandContext);
      onEnhancedChange(result);
      setShowEnhanced(true);
    } catch (e: any) {
      setEnhanceError(e.message ?? 'Error al mejorar');
    } finally {
      setEnhancing(false);
    }
  }, [value, brandContext, onEnhancedChange]);

  return (
    <div className="space-y-2">
      {/* Base description */}
      <div className="flex items-center justify-between">
        <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">{label}</p>
        <div className="flex items-center gap-1.5">
          {enhancedValue && (
            <button
              onClick={() => setShowEnhanced(v => !v)}
              className={cn(
                "text-[9px] px-2 py-0.5 rounded font-bold border transition-colors",
                showEnhanced
                  ? "bg-amber-500/20 border-amber-500/40 text-amber-400"
                  : "bg-zinc-800 border-zinc-700 text-zinc-500 hover:text-zinc-300"
              )}
            >
              {showEnhanced ? '← Base' : '✨ Enhanced'}
            </button>
          )}
          <button
            onClick={handleEnhance}
            disabled={enhancing || !value.trim()}
            className={cn(
              "flex items-center gap-1 text-[9px] px-2 py-1 rounded font-bold border transition-all",
              enhancing
                ? "bg-zinc-800 border-zinc-700 text-zinc-600 cursor-wait"
                : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-amber-500/50 hover:text-amber-400 disabled:opacity-40"
            )}
            title="Mejorar descripción con IA"
          >
            {enhancing
              ? <><Loader2 size={9} className="animate-spin" /> Mejorando...</>
              : <><Wand2 size={9} /> Mejorar con IA</>
            }
          </button>
        </div>
      </div>

      {/* Textarea: base o enhanced */}
      {!showEnhanced ? (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={4}
          placeholder="Descripción desde blueprint. Puedes editar aquí antes de generar."
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-zinc-500 resize-y leading-relaxed"
        />
      ) : (
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <span className="text-[9px] font-bold text-amber-400">✨ ENHANCED</span>
            <span className="text-[9px] text-zinc-600 ml-auto">Editable antes de hacer push</span>
          </div>
          <textarea
            value={enhancedValue}
            onChange={e => onEnhancedChange(e.target.value)}
            rows={4}
            className="w-full bg-zinc-900 border border-amber-500/25 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-amber-500/50 resize-y leading-relaxed"
          />
          {/* Push to repo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPushReady(enhancedValue)}
              disabled={pushState === 'pushing' || pushState === 'done'}
              className={cn(
                "flex items-center gap-1.5 text-[9px] px-2.5 py-1.5 rounded font-bold border transition-all",
                pushState === 'done'
                  ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                  : pushState === 'pushing'
                    ? "bg-zinc-800 border-zinc-700 text-zinc-600 cursor-wait"
                    : pushState === 'error'
                      ? "bg-red-500/20 border-red-500/40 text-red-400"
                      : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-emerald-500/40 hover:text-emerald-400"
              )}
            >
              {pushState === 'pushing' && <Loader2 size={9} className="animate-spin" />}
              {pushState === 'done'    && <Check size={9} />}
              {pushState === 'error'   && <AlertCircle size={9} />}
              {(pushState === 'idle')  && <GitBranch size={9} />}
              {pushState === 'done' ? 'Pusheado' : pushState === 'pushing' ? 'Pusheando...' : 'Push → BluePrints'}
            </button>
            {pushMessage && (
              <span className={cn(
                "text-[9px]",
                pushState === 'done' ? "text-emerald-500" : "text-red-400"
              )}>{pushMessage}</span>
            )}
          </div>
        </div>
      )}

      {enhanceError && (
        <p className="text-[9px] text-red-400">{enhanceError}</p>
      )}
    </div>
  );
}

// ── Blueprint Image Toggles ───────────────────────────────────────────────────
interface BlueprintImageTogglesProps {
  value: BlueprintImageToggles;
  onChange: (v: BlueprintImageToggles) => void;
}

export function BlueprintImageTogglesPanel({ value, onChange }: BlueprintImageTogglesProps) {
  return (
    <div className="space-y-1.5">
      <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Blueprints en composición</p>
      <div className="flex gap-2">
        {/* Person BP toggle */}
        <button
          onClick={() => onChange({ ...value, usePersonBP: !value.usePersonBP })}
          className={cn(
            "flex items-center gap-1.5 flex-1 justify-center px-3 py-2 rounded-lg text-xs font-bold border transition-all",
            value.usePersonBP
              ? "bg-blue-500/20 border-blue-500/40 text-blue-300"
              : "bg-zinc-800 border-zinc-700 text-zinc-600 hover:text-zinc-400"
          )}
        >
          <User size={11} />
          Person BP
          {value.usePersonBP
            ? <span className="ml-auto text-[9px] text-blue-400/70">ON</span>
            : <span className="ml-auto text-[9px] text-zinc-700">OFF</span>}
        </button>
        {/* Location BP toggle */}
        <button
          onClick={() => onChange({ ...value, useLocationBP: !value.useLocationBP })}
          className={cn(
            "flex items-center gap-1.5 flex-1 justify-center px-3 py-2 rounded-lg text-xs font-bold border transition-all",
            value.useLocationBP
              ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
              : "bg-zinc-800 border-zinc-700 text-zinc-600 hover:text-zinc-400"
          )}
        >
          <MapPin size={11} />
          Location BP
          {value.useLocationBP
            ? <span className="ml-auto text-[9px] text-emerald-400/70">ON</span>
            : <span className="ml-auto text-[9px] text-zinc-700">OFF</span>}
        </button>
      </div>
      <p className="text-[9px] text-zinc-700 px-0.5">
        Controla si el contexto de Person/Location BPs se inyecta en la composición generada
      </p>
    </div>
  );
}

// ── Main EcomProductSelector ──────────────────────────────────────────────────
interface EcomProductSelectorProps {
  packId: string;
  brandId: string;
  brandContext: string;
  value: EcomProductContext;
  onChange: (v: EcomProductContext) => void;
  githubToken: string;
}

export function EcomProductSelector({
  packId, brandId, brandContext, value, onChange, githubToken,
}: EcomProductSelectorProps) {
  const catalog = getCatalog(brandId);
  const [pushStates, setPushStates] = useState<Record<string, 'idle' | 'pushing' | 'done' | 'error'>>({});
  const [pushMessages, setPushMessages] = useState<Record<string, string>>({});

  const setPush = (key: string, state: 'idle' | 'pushing' | 'done' | 'error', msg = '') => {
    setPushStates(p => ({ ...p, [key]: state }));
    setPushMessages(p => ({ ...p, [key]: msg }));
  };

  // Get selected collection
  const selectedCol: CatalogCollection | undefined =
    value.collectionId
      ? catalog.find(c => c.id === value.collectionId)
      : undefined;

  // Products for listing (filtered by collection if set)
  const availableProducts: CatalogProduct[] =
    value.collectionId
      ? (selectedCol?.products ?? [])
      : catalog.flatMap(c => c.products);

  // ── Push handlers ────────────────────────────────────────────────────────
  const handlePushProduct = useCallback(async (product: CatalogProduct, enhanced: string) => {
    if (!githubToken) {
      setPush('product', 'error', 'Token GitHub requerido');
      return;
    }
    const { pushEnhancedDescription, productIdToFilePath } = await import('../../services/blueprintPush');
    setPush('product', 'pushing');
    const result = await pushEnhancedDescription({
      token: githubToken,
      productId: product.id,
      brandId,
      enhancedText: enhanced,
      existingJson: product as unknown as object,
      filePath: productIdToFilePath(product.id),
    });
    setPush('product', result.ok ? 'done' : 'error', result.message);
  }, [githubToken, brandId]);

  const handlePushCollection = useCallback(async (colId: string, _enhanced: string) => {
    if (!githubToken) {
      setPush(`col_${colId}`, 'error', 'Token GitHub requerido');
      return;
    }
    // Collection descriptions will be stored in a new BP_COLLECTION schema (future)
    // For now, just signal success after storing in context
    setPush(`col_${colId}`, 'done', 'Descripción guardada en sesión (BP_COLLECTION en próxima iteración)');
  }, [githubToken]);

  if (catalog.length === 0) {
    return (
      <div className="flex items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-600">
        <Package size={13} />
        <span>Sin catálogo para esta marca</span>
      </div>
    );
  }

  // ── COLLECTION PAGE ──────────────────────────────────────────────────────
  if (packId === 'ecom_collection') {
    const col = selectedCol;
  
    return (
      <div className="space-y-3">
        <div className="space-y-1.5">
          <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Collection</p>
          <select
            value={value.collectionId ?? ''}
            onChange={e => {
              const newCol = catalog.find(c => c.id === e.target.value);
              onChange({
                ...value,
                collectionId: e.target.value || undefined,
                collectionLabel: newCol?.label,
                collectionDescription: value.collectionDescription ?? '',
              });
            }}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-500"
          >
            <option value="">— Todas las Collections —</option>
            {catalog.map(c => (
              <option key={c.id} value={c.id}>
                {c.label} ({c.products.length} productos)
              </option>
            ))}
          </select>
        </div>

        {/* Products in collection */}
        {col && (
          <div className="space-y-1">
            <p className="text-[9px] text-zinc-600 font-mono">
              {col.subcollections.length} líneas · {col.products.length} productos
            </p>
            <div className="flex flex-wrap gap-1">
              {col.subcollections.map(sub => (
                <span key={sub.id} className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-500 border border-zinc-700">
                  {sub.label} ({sub.products.length})
                </span>
              ))}
            </div>
          </div>
        )}

        <DescriptionEditor
          label="Descripción de Collection"
          value={value.collectionDescription ?? ''}
          onChange={v => onChange({ ...value, collectionDescription: v })}
          enhancedValue={value.collectionDescriptionEnhanced ?? ''}
          onEnhancedChange={v => onChange({ ...value, collectionDescriptionEnhanced: v })}
          brandContext={brandContext}
          onPushReady={enhanced => handlePushCollection(value.collectionId ?? 'all', enhanced)}
          pushState={pushStates[`col_${value.collectionId ?? 'all'}`] ?? 'idle'}
          pushMessage={pushMessages[`col_${value.collectionId ?? 'all'}`]}
        />
      </div>
    );
  }

  // ── PRODUCT LISTING ──────────────────────────────────────────────────────
  if (packId === 'ecom_product_listing') {
    const mode = value.listingMode ?? 'bulk';
    const selectedIds = value.selectedProductIds ?? [];
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {/* Collection filter */}
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Collection</p>
            <select
              value={value.collectionId ?? ''}
              onChange={e => {
                onChange({ ...value, collectionId: e.target.value || undefined, selectedProductIds: [] });
              }}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-zinc-500"
            >
              <option value="">Todas</option>
              {catalog.map(c => (
                <option key={c.id} value={c.id}>{c.label} ({c.products.length})</option>
              ))}
            </select>
          </div>

          {/* Mode */}
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Modo</p>
            <div className="flex rounded-lg overflow-hidden border border-zinc-700 h-[38px]">
              {(['bulk', 'select'] as EcomListingMode[]).map(m => (
                <button
                  key={m}
                  onClick={() => onChange({ ...value, listingMode: m, selectedProductIds: [] })}
                  className={cn(
                    "flex-1 text-xs font-bold transition-colors",
                    mode === m
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800"
                  )}
                >
                  {m === 'bulk' ? '⚡ Bulk' : '☑ Select'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product list for Select mode */}
        {mode === 'select' && (
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-[9px] text-zinc-500">
                {selectedIds.length > 0
                  ? `${selectedIds.length} seleccionado${selectedIds.length > 1 ? 's' : ''}`
                  : 'Selecciona productos'}
              </p>
              {selectedIds.length > 0 && (
                <button
                  onClick={() => onChange({ ...value, selectedProductIds: [] })}
                  className="text-[9px] text-zinc-600 hover:text-red-400 transition-colors"
                >
                  Limpiar
                </button>
              )}
            </div>
            <div className="max-h-48 overflow-y-auto space-y-0.5 rounded-lg border border-zinc-800 p-1.5">
              {/* Group by subcollection */}
              {(value.collectionId ? [selectedCol!] : catalog).filter(Boolean).map(col => (
                <div key={col!.id}>
                  <p className="text-[9px] font-bold text-zinc-600 px-1 py-0.5 uppercase tracking-wider sticky top-0 bg-zinc-950">
                    {col!.label}
                  </p>
                  {col!.subcollections.map(sub => (
                    <div key={sub.id}>
                      <p className="text-[9px] text-zinc-700 px-2 py-0.5 italic">{sub.label}</p>
                      {sub.products.map(prod => {
                        const sel = selectedIds.includes(prod.id);
                        return (
                          <button
                            key={prod.id}
                            onClick={() => {
                              const ids = sel
                                ? selectedIds.filter(id => id !== prod.id)
                                : [...selectedIds, prod.id];
                              onChange({ ...value, selectedProductIds: ids });
                            }}
                            className={cn(
                              "w-full text-left flex items-center gap-2 px-2 py-1.5 rounded text-xs transition-colors",
                              sel
                                ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/25"
                                : "text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
                            )}
                          >
                            <span className={cn(
                              "w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0",
                              sel ? "bg-emerald-500 border-emerald-500" : "border-zinc-700"
                            )}>
                              {sel && <Check size={8} className="text-black" />}
                            </span>
                            <span className="flex-1 truncate">{prod.display_name}</span>
                            {prod.b2b_only && (
                              <span className="text-[8px] px-1 rounded bg-violet-500/20 text-violet-400 shrink-0">B2B</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bulk info */}
        {mode === 'bulk' && (
          <div className="flex items-center gap-2 p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg">
            <LayoutGrid size={12} className="text-zinc-600 shrink-0" />
            <p className="text-[10px] text-zinc-600">
              Se generará el listing completo de{' '}
              <span className="text-zinc-400 font-bold">
                {value.collectionId ? selectedCol?.products.length ?? 0 : availableProducts.length} productos
              </span>
              {' '}— con filtros por collection, alfabético y línea
            </p>
          </div>
        )}
      </div>
    );
  }

  // ── PRODUCT PAGE ─────────────────────────────────────────────────────────
  if (packId === 'ecom_product_page') {
    const selectedProduct = value.productId
      ? availableProducts.find(p => p.id === value.productId)
      : undefined;

    return (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {/* Collection filter */}
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Collection</p>
            <select
              value={value.collectionId ?? ''}
              onChange={e => onChange({ ...value, collectionId: e.target.value || undefined, productId: undefined, productDescription: '' })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-zinc-500"
            >
              <option value="">Todas</option>
              {catalog.map(c => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Product select */}
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Producto</p>
            <div className="relative">
              <select
                value={value.productId ?? ''}
                onChange={e => {
                  const prod = availableProducts.find(p => p.id === e.target.value);
                  onChange({
                    ...value,
                    productId: e.target.value || undefined,
                    productDescription: prod?.description_enhanced ?? prod?.description ?? '',
                  });
                }}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-zinc-500 appearance-none pr-7"
              >
                <option value="">— Selecciona —</option>
                {(value.collectionId ? selectedCol?.subcollections ?? [] : catalog.flatMap(c => c.subcollections)).map(sub => (
                  <optgroup key={sub.id} label={sub.label}>
                    {sub.products.map(prod => (
                      <option key={prod.id} value={prod.id}>
                        {prod.display_name}{prod.b2b_only ? ' [B2B]' : ''}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product meta pill */}
        {selectedProduct && (
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-500">
              📦 {selectedProduct.subcollection}
            </span>
            {selectedProduct.price !== '0.00' && (
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-500">
                ${selectedProduct.price}
              </span>
            )}
            {selectedProduct.b2b_only && (
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-violet-500/20 border border-violet-500/30 text-violet-400">B2B only</span>
            )}
            {selectedProduct.hair_type.slice(0, 2).map(h => (
              <span key={h} className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-500">{h}</span>
            ))}
          </div>
        )}

        {/* Description editor */}
        {selectedProduct && (
          <DescriptionEditor
            label="Descripción del Producto"
            value={value.productDescription ?? selectedProduct.description}
            onChange={v => onChange({ ...value, productDescription: v })}
            enhancedValue={value.productDescriptionEnhanced ?? selectedProduct.description_enhanced ?? ''}
            onEnhancedChange={v => onChange({ ...value, productDescriptionEnhanced: v })}
            brandContext={brandContext}
            onPushReady={enhanced => handlePushProduct(selectedProduct, enhanced)}
            pushState={pushStates['product'] ?? 'idle'}
            pushMessage={pushMessages['product']}
          />
        )}
      </div>
    );
  }

  // Otros packs (homepage, about) — no product selector
  return null;
}

// ── buildEcomPromptContext ─────────────────────────────────────────────────────
// Serializa el EcomProductContext en texto para inyectar en el prompt
export function buildEcomPromptContext(ctx: EcomProductContext, brandId: string): string {
  const catalog = getCatalog(brandId);
  const parts: string[] = [];

  if (ctx.collectionId) {
    const col = catalog.find(c => c.id === ctx.collectionId);
    if (col) {
      parts.push(`── COLLECTION SELECCIONADA: ${col.label} ──`);
      parts.push(`Subcollections (líneas): ${col.subcollections.map(s => s.label).join(', ')}`);
      // Product list with image filenames
      const prodLines = col.products.map(p => {
        const b2b = (p as any).b2b_only ? ' [B2B]' : '';
        const img = p.image_filename ? ` | img: ${p.image_filename}` : '';
        const il = (p as any).imagelab;
        const color = il?.dominant_hex ? ` | color: ${il.dominant_hex}` : '';
        return `• ${p.display_name}${b2b}${img}${color}`;
      });
      parts.push(`Productos (${col.products.length}):\n${prodLines.join('\n')}`);
      if (ctx.collectionDescriptionEnhanced) {
        parts.push(`\nDESCRIPCIÓN COLLECTION (Enhanced):\n${ctx.collectionDescriptionEnhanced}`);
      } else if (ctx.collectionDescription) {
        parts.push(`\nDESCRIPCIÓN COLLECTION:\n${ctx.collectionDescription}`);
      }
    }
  } else if (ctx.selectedProductIds?.length) {
    const prods = catalog.flatMap(c => c.products).filter(p => ctx.selectedProductIds!.includes(p.id));
    parts.push(`── PRODUCTOS SELECCIONADOS (${prods.length}) ──`);
    prods.forEach(p => {
      const img = p.image_filename ? ` | img: ${p.image_filename}` : '';
      const il = (p as any).imagelab;
      const color = il?.dominant_hex ? ` | color: ${il.dominant_hex}` : '';
      parts.push(`• ${p.display_name} [${p.subcollection}]${img}${color} — ${p.description.slice(0, 100)}`);
    });
  }

  if (ctx.productId) {
    const allProds = catalog.flatMap(c => c.products);
    const prod = allProds.find(p => p.id === ctx.productId);
    if (prod) {
      parts.push(`── PRODUCTO: ${prod.display_name} ──`);
      parts.push(`Collection: ${prod.collection} > ${prod.subcollection}`);
      parts.push(`Formato: ${prod.format} — ${prod.size}`);
      if (prod.key_ingredients.length) {
        parts.push(`Ingredientes clave: ${prod.key_ingredients.join(', ')}`);
      } else {
        // Ingredientes no documentados aún — inferir desde descripción y claims
        parts.push(`Ingredientes clave: no documentados (inferir del nombre del producto y claims para el copy)`);
      }
      if (prod.benefit_claims.length) parts.push(`Benefit claims (usar textualmente en copy): ${prod.benefit_claims.join(' · ')}`);
      if (prod.hair_type.length) parts.push(`Hair type objetivo: ${prod.hair_type.join(', ')}`);

      // Image context — filename + imagelab palette/mood
      if (prod.image_filename) {
        parts.push(`Imagen del producto: ${prod.image_filename}`);
      }
      const il = (prod as any).imagelab;
      if (il) {
        const colorInfo = [
          il.dominant_hex ? `color dominante: ${il.dominant_hex}` : '',
          il.accent_hex   ? `acento: ${il.accent_hex}` : '',
          il.mood         ? `mood visual: ${il.mood}` : '',
          il.packaging_style ? `packaging: ${il.packaging_style}` : '',
        ].filter(Boolean).join(' · ');
        if (colorInfo) parts.push(`Visual: ${colorInfo}`);
        if (il.image_usage?.standard?.background) {
          parts.push(`Fondo imagen estándar: ${il.image_usage.standard.background}`);
        }
      }

      // Cross-sell context
      const crossSell = (prod as any).cross_sell as string[] | undefined;
      if (crossSell?.length) {
        const csNames = crossSell
          .map(id => allProds.find(p => p.id === id)?.display_name)
          .filter(Boolean);
        if (csNames.length) parts.push(`Cross-sell (mencionar si aplica): ${csNames.join(', ')}`);
      }

      // B2B audience tone override
      if ((prod as any).b2b_only) {
        parts.push(`\n⚠️ AUDIENCIA B2B — ESTILISTA PROFESIONAL:\nEste producto es exclusivo para profesionales. El copy debe:\n- Hablar al estilista, no al consumidor final.\n- Usar terminología técnica sin explicar lo básico (el estilista ya sabe).\n- Enfatizar resultados en servicio (rendimiento, consistencia, reputación con clientes).\n- Tone: par a par — no "tú puedes lograr", sino "los estilistas que trabajan con esto".\n- PROHIBIDO: lenguaje de self-care, rutina personal, "para ti y tu cabello".`);
      }

      if (ctx.productDescriptionEnhanced) {
        parts.push(`\nDESCRIPCIÓN (Enhanced):\n${ctx.productDescriptionEnhanced}`);
      } else if (ctx.productDescription) {
        parts.push(`\nDESCRIPCIÓN:\n${ctx.productDescription}`);
      }
    }
  }

  return parts.length ? '\n\n── CONTEXTO E-COMMERCE ─────────────────────────────\n' + parts.join('\n') : '';
}
