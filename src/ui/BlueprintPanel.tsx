// ─── Blueprint Panel — WebLab ─────────────────────────────────────────────────
// Panel flotante accesible desde cualquier módulo de WebLab.
// Permite importar BPs, asignar slots e inyectar contexto en el generador.

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers, X, Upload, Trash2, ChevronDown, CheckCircle2,
  Download, ZapOff, Zap,
} from 'lucide-react';
import { useBlueprintStore } from '../store/useBlueprintStore';
import { SLOT_META, type SlotId, type BPType, type BlueprintEntry } from '../lib/blueprintDB';

// ── Paleta de tipos ────────────────────────────────────────────────────────────
const TYPE_COLORS: Record<BPType, { bg: string; text: string; border: string }> = {
  BP_PERSON:   { bg: 'bg-blue-500/10',   text: 'text-blue-400',   border: 'border-blue-500/30' },
  BP_LOCATION: { bg: 'bg-green-500/10',  text: 'text-green-400',  border: 'border-green-500/30' },
  BP_PRODUCT:  { bg: 'bg-amber-500/10',  text: 'text-amber-400',  border: 'border-amber-500/30' },
};

const TYPE_ICONS: Record<BPType, string> = {
  BP_PERSON: '👤', BP_LOCATION: '📍', BP_PRODUCT: '📦',
};

const SLOT_ORDER: SlotId[] = ['A', 'B', 'C', 'D', 'L', 'R1', 'R2', 'R3'];

// ── Mini BP Card ──────────────────────────────────────────────────────────────
function BPCard({ bp, onDelete }: { bp: BlueprintEntry; onDelete: () => void }) {
  const c = TYPE_COLORS[bp.type];
  return (
    <div className={`flex items-center gap-2 px-2 py-1.5 rounded-lg border ${c.bg} ${c.border} group`}>
      <span className="text-sm">{TYPE_ICONS[bp.type]}</span>
      <div className="flex-1 min-w-0">
        <p className={`text-xs font-medium truncate ${c.text}`}>{bp.name}</p>
        <p className="text-[10px] text-zinc-500">{bp.brandId} · v{bp.version}</p>
      </div>
      <button
        onClick={onDelete}
        className="opacity-0 group-hover:opacity-100 p-0.5 text-zinc-600 hover:text-red-400 transition-all"
      >
        <Trash2 size={11} />
      </button>
    </div>
  );
}

// ── Slot Button ───────────────────────────────────────────────────────────────
function SlotButton({
  slotId, bp, blueprints, onAssign, onClear,
}: {
  slotId: SlotId;
  bp?: BlueprintEntry;
  blueprints: BlueprintEntry[];
  onAssign: (slotId: SlotId, bp: BlueprintEntry) => void;
  onClear: (slotId: SlotId) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const meta = SLOT_META[slotId];
  const compatible = blueprints.filter(b => meta.accepts.includes(b.type));

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg border text-left transition-all ${
          bp
            ? `${TYPE_COLORS[bp.type].bg} ${TYPE_COLORS[bp.type].border}`
            : 'bg-zinc-800/50 border-zinc-700/50 hover:border-zinc-600'
        }`}
      >
        <span className={`text-[10px] font-mono font-bold w-6 shrink-0 ${bp ? TYPE_COLORS[bp.type].text : 'text-zinc-500'}`}>
          {slotId}
        </span>
        <div className="flex-1 min-w-0">
          {bp ? (
            <>
              <p className={`text-xs font-medium truncate ${TYPE_COLORS[bp.type].text}`}>{bp.name}</p>
              <p className="text-[10px] text-zinc-500 truncate">{bp.type}</p>
            </>
          ) : (
            <p className="text-xs text-zinc-600 truncate">{meta.description}</p>
          )}
        </div>
        <ChevronDown size={11} className="text-zinc-500 shrink-0" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.12 }}
            className="absolute z-50 left-0 right-0 top-full mt-1 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden"
          >
            {compatible.length === 0 ? (
              <p className="text-xs text-zinc-500 px-3 py-2">
                No hay BPs compatibles. Importa un {meta.accepts.join(' o ')}.
              </p>
            ) : (
              <div className="max-h-48 overflow-y-auto">
                {compatible.map(b => {
                  const c = TYPE_COLORS[b.type];
                  return (
                    <button
                      key={b.id}
                      onClick={() => { onAssign(slotId, b); setOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 hover:bg-zinc-800 text-left transition-colors ${bp?.id === b.id ? 'bg-zinc-800' : ''}`}
                    >
                      <span>{TYPE_ICONS[b.type]}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-medium ${c.text}`}>{b.name}</p>
                        <p className="text-[10px] text-zinc-500">{b.brandId}</p>
                      </div>
                      {bp?.id === b.id && <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
            {bp && (
              <button
                onClick={() => { onClear(slotId); setOpen(false); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 border-t border-zinc-800 transition-colors"
              >
                <X size={11} /> Limpiar slot
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Import Panel ──────────────────────────────────────────────────────────────
function ImportSection() {
  const { importJSON, importFiles } = useBlueprintStore();
  const [pasteText, setPasteText] = useState('');
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handlePaste = async () => {
    if (!pasteText.trim()) return;
    const result = await importJSON(pasteText);
    setStatus(result.ok
      ? { ok: true, msg: `✅ Importado: ${result.entry?.name}` }
      : { ok: false, msg: `❌ ${result.error}` }
    );
    if (result.ok) setPasteText('');
    setTimeout(() => setStatus(null), 3000);
  };

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const result = await importFiles(e.target.files);
    setStatus({ ok: result.failed === 0, msg: `✅ ${result.imported} importados${result.failed ? ` · ❌ ${result.failed} fallidos` : ''}` });
    setTimeout(() => setStatus(null), 3000);
    e.target.value = '';
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button
          onClick={() => fileRef.current?.click()}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-xs text-zinc-300 transition-colors"
        >
          <Upload size={12} /> Archivos .json
        </button>
        <input ref={fileRef} type="file" accept=".json" multiple className="hidden" onChange={handleFiles} />
      </div>
      <textarea
        value={pasteText}
        onChange={e => setPasteText(e.target.value)}
        placeholder={'{ "schema_version": "BP_PERSON_1.0", ... }'}
        rows={3}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-2 py-1.5 text-xs text-zinc-300 placeholder:text-zinc-600 outline-none focus:border-zinc-500 resize-none font-mono"
      />
      <button
        onClick={handlePaste}
        disabled={!pasteText.trim()}
        className="w-full py-1.5 bg-zinc-700 hover:bg-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg text-xs text-zinc-200 transition-colors"
      >
        Importar JSON
      </button>
      <AnimatePresence>
        {status && (
          <motion.p
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className={`text-xs px-2 py-1.5 rounded-lg ${status.ok ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}
          >
            {status.msg}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Panel ────────────────────────────────────────────────────────────────
interface BlueprintPanelProps {
  onInject: (context: string) => void; // callback para inyectar en extraContext
  injected: boolean;                    // si el contexto ya está inyectado
  onClearInjection: () => void;
}

export function BlueprintPanel({ onInject, injected, onClearInjection }: BlueprintPanelProps) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<'slots' | 'library' | 'import'>('slots');

  const {
    blueprints, slots, filter, search,
    hydrate, assignSlot, clearSlot, clearAllSlots,
    deleteBlueprint, exportAll,
    setFilter, setSearch,
    getSlotContext,
  } = useBlueprintStore();

  // Cargar BPs al montar
  useEffect(() => { hydrate(); }, []);

  const activeSlots = Object.entries(slots).filter(([, v]) => !!v).length;
  const filtered = blueprints
    .filter(b => filter === 'ALL' || b.type === filter)
    .filter(b => !search || b.name.toLowerCase().includes(search.toLowerCase()) || b.brandId.toLowerCase().includes(search.toLowerCase()));

  const handleInject = () => {
    const ctx = getSlotContext();
    if (ctx) { onInject(ctx); setOpen(false); }
  };

  return (
    <>
      {/* ── Toggle Button ───────────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
          injected
            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20'
            : activeSlots > 0
              ? 'bg-violet-500/15 border-violet-500/40 text-violet-400 hover:bg-violet-500/20'
              : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-300'
        }`}
      >
        <Layers size={13} />
        <span>BPs</span>
        {activeSlots > 0 && (
          <span className={`text-[10px] px-1 rounded-full font-bold ${injected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-violet-500/20 text-violet-400'}`}>
            {activeSlots}
          </span>
        )}
        {injected && <Zap size={11} className="text-emerald-400" />}
      </button>

      {/* ── Panel ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 24, scale: 0.97 }}
              transition={{ type: 'spring', damping: 28, stiffness: 400 }}
              className="fixed right-4 top-4 bottom-4 z-50 w-80 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Layers size={15} className="text-violet-400" />
                  <span className="text-sm font-semibold text-zinc-100">Blueprint Library</span>
                  <span className="text-[10px] text-zinc-500 font-mono">{blueprints.length} BPs</span>
                </div>
                <button onClick={() => setOpen(false)} className="p-1 text-zinc-500 hover:text-zinc-300 rounded-md hover:bg-zinc-800">
                  <X size={14} />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-zinc-800">
                {([['slots','Slots'], ['library','Librería'], ['import','Importar']] as const).map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => setTab(id)}
                    className={`flex-1 py-2 text-xs font-medium transition-colors ${
                      tab === id
                        ? 'text-zinc-100 border-b-2 border-violet-400'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {label}
                    {id === 'slots' && activeSlots > 0 && (
                      <span className="ml-1 text-[9px] bg-violet-500/20 text-violet-400 px-1 rounded-full">{activeSlots}</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {/* ── SLOTS TAB ────────────────────────────────────────────── */}
                {tab === 'slots' && (
                  <div className="p-3 space-y-1.5">
                    <p className="text-[10px] text-zinc-600 px-1 mb-2">
                      Asigna BPs a slots para inyectar su contexto en el generador.
                    </p>
                    {SLOT_ORDER.map(slotId => (
                      <SlotButton
                        key={slotId}
                        slotId={slotId}
                        bp={slots[slotId]}
                        blueprints={blueprints}
                        onAssign={assignSlot}
                        onClear={clearSlot}
                      />
                    ))}
                    {activeSlots > 0 && (
                      <button
                        onClick={clearAllSlots}
                        className="w-full mt-2 py-1.5 text-xs text-zinc-500 hover:text-red-400 border border-zinc-800 hover:border-red-500/30 rounded-lg transition-colors"
                      >
                        Limpiar todos los slots
                      </button>
                    )}
                  </div>
                )}

                {/* ── LIBRARY TAB ──────────────────────────────────────────── */}
                {tab === 'library' && (
                  <div className="p-3 space-y-2">
                    {/* Filtros */}
                    <div className="flex gap-1.5">
                      {(['ALL', 'BP_PERSON', 'BP_LOCATION', 'BP_PRODUCT'] as const).map(f => (
                        <button
                          key={f}
                          onClick={() => setFilter(f)}
                          className={`px-2 py-1 rounded-lg text-[10px] font-medium transition-colors ${
                            filter === f
                              ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                              : 'bg-zinc-800 text-zinc-500 hover:text-zinc-300 border border-transparent'
                          }`}
                        >
                          {f === 'ALL' ? `Todos (${blueprints.length})` : f.replace('BP_', '')}
                        </button>
                      ))}
                    </div>
                    <input
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      placeholder="Buscar por nombre o marca..."
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-2 py-1.5 text-xs text-zinc-300 placeholder:text-zinc-600 outline-none focus:border-zinc-500"
                    />
                    {/* Lista */}
                    {filtered.length === 0 ? (
                      <p className="text-xs text-zinc-600 text-center py-6">
                        {blueprints.length === 0
                          ? 'No hay blueprints. Ve a Importar.'
                          : 'Sin resultados.'}
                      </p>
                    ) : (
                      <div className="space-y-1.5">
                        {filtered.map(bp => (
                          <BPCard
                            key={bp.id}
                            bp={bp}
                            onDelete={() => deleteBlueprint(bp.id)}
                          />
                        ))}
                      </div>
                    )}
                    {blueprints.length > 0 && (
                      <button
                        onClick={exportAll}
                        className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-800 rounded-lg transition-colors"
                      >
                        <Download size={11} /> Backup all
                      </button>
                    )}
                  </div>
                )}

                {/* ── IMPORT TAB ───────────────────────────────────────────── */}
                {tab === 'import' && (
                  <div className="p-3">
                    <ImportSection />
                  </div>
                )}
              </div>

              {/* ── Footer — Inject Button ───────────────────────────────────── */}
              <div className="p-3 border-t border-zinc-800 space-y-2">
                {injected ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <p className="text-xs text-emerald-400">Contexto BP inyectado en el generador</p>
                    </div>
                    <button
                      onClick={() => { onClearInjection(); }}
                      className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-zinc-500 hover:text-red-400 border border-zinc-800 hover:border-red-500/30 rounded-lg transition-colors"
                    >
                      <ZapOff size={12} /> Quitar inyección
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleInject}
                    disabled={activeSlots === 0}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-sm font-semibold text-white transition-colors"
                  >
                    <Zap size={14} />
                    Inyectar contexto al generador
                  </button>
                )}
                {activeSlots === 0 && !injected && (
                  <p className="text-[10px] text-zinc-600 text-center">
                    Asigna al menos un slot para inyectar
                  </p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
