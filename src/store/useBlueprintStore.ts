// ─── Blueprint Store — WebLab ─────────────────────────────────────────────────
import { create } from 'zustand';
import {
  dbGetAll, dbPut, dbDelete, dbClear,
  type BlueprintEntry, type BPType, type SlotId, type SlotMap,
} from '../lib/blueprintDB';

// ── Helpers ───────────────────────────────────────────────────────────────────

function inferType(data: Record<string, unknown>): BPType | null {
  const sv = (data.schema_version as string) || '';
  if (sv.startsWith('BP_PERSON')   || data.voicelab  || data.humanize)        return 'BP_PERSON';
  if (sv.startsWith('BP_LOCATION') || data.location  || data.scene)           return 'BP_LOCATION';
  if (sv.startsWith('BP_PRODUCT')  || data.compliance_flags || data.sku)      return 'BP_PRODUCT';
  if (data.schema === 'BP_PERSON'  || data.persona)                           return 'BP_PERSON';
  if (data.schema === 'BP_LOCATION')                                           return 'BP_LOCATION';
  if (data.schema === 'BP_PRODUCT' || data.imagelab)                          return 'BP_PRODUCT';
  return null;
}

function extractMeta(data: Record<string, unknown>) {
  const name =
    (data.displayName  as string)
    || (data.display_name  as string)
    || (data.location_name as string)
    || (data.name          as string)
    || (data.id            as string)
    || 'Sin nombre';
  const sv = (data.schema_version as string) || '';
  const versionFromSchema = sv.split('_').pop() || '';
  return {
    name,
    brandId: (data.brandId as string) || (data.brand_id as string) || 'unknown',
    version: (data.version as string) || versionFromSchema || '1.0',
  };
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface BPState {
  blueprints: BlueprintEntry[];
  slots: SlotMap;
  loading: boolean;
  filter: BPType | 'ALL';
  search: string;
}

interface BPActions {
  hydrate: () => Promise<void>;
  importJSON: (json: string) => Promise<{ ok: boolean; error?: string; entry?: BlueprintEntry }>;
  importFiles: (files: FileList) => Promise<{ imported: number; failed: number }>;
  deleteBlueprint: (id: string) => Promise<void>;
  clearAll: () => Promise<void>;
  assignSlot: (slotId: SlotId, bp: BlueprintEntry) => void;
  clearSlot: (slotId: SlotId) => void;
  clearAllSlots: () => void;
  setFilter: (f: BPType | 'ALL') => void;
  setSearch: (s: string) => void;
  getSlotContext: () => string;
  exportAll: () => void;
}

// ── Store ─────────────────────────────────────────────────────────────────────

export const useBlueprintStore = create<BPState & BPActions>((set, get) => ({
  blueprints: [],
  slots: {},
  loading: false,
  filter: 'ALL',
  search: '',

  hydrate: async () => {
    set({ loading: true });
    try {
      const all = await dbGetAll();
      set({ blueprints: all });
    } finally {
      set({ loading: false });
    }
  },

  importJSON: async (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      const type = inferType(data);
      if (!type) return { ok: false, error: 'Tipo no detectado. Verifica el campo schema_version.' };
      const meta = extractMeta(data);
      const entry: BlueprintEntry = {
        id: crypto.randomUUID(),
        type, brandId: meta.brandId, name: meta.name, version: meta.version,
        data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
      };
      await dbPut(entry);
      set(s => ({ blueprints: [...s.blueprints, entry] }));
      return { ok: true, entry };
    } catch {
      return { ok: false, error: 'JSON inválido.' };
    }
  },

  importFiles: async (files) => {
    let imported = 0, failed = 0;
    for (const file of Array.from(files)) {
      const text = await file.text();
      const result = await get().importJSON(text);
      if (result.ok) imported++; else failed++;
    }
    return { imported, failed };
  },

  deleteBlueprint: async (id) => {
    await dbDelete(id);
    set(s => ({
      blueprints: s.blueprints.filter(b => b.id !== id),
      slots: Object.fromEntries(
        Object.entries(s.slots).filter(([, v]) => v?.id !== id)
      ) as SlotMap,
    }));
  },

  clearAll: async () => { await dbClear(); set({ blueprints: [], slots: {} }); },

  assignSlot: (slotId, bp) => set(s => ({ slots: { ...s.slots, [slotId]: bp } })),
  clearSlot:  (slotId)     => set(s => { const n = { ...s.slots }; delete n[slotId]; return { slots: n }; }),
  clearAllSlots: ()        => set({ slots: {} }),

  setFilter: (f) => set({ filter: f }),
  setSearch: (s) => set({ search: s }),

  getSlotContext: () => {
    const { slots } = get();
    const entries = Object.entries(slots) as [SlotId, BlueprintEntry][];
    if (!entries.length) return '';
    const LABELS: Record<SlotId, string> = {
      A: 'PERSONA PRINCIPAL', B: 'PERSONA SECUNDARIA',
      C: 'PRODUCTO HÉROE',    D: 'PRODUCTO COMPLEMENTARIO',
      L: 'LOCACIÓN / ESCENA', R1: 'REF ESTILO 1', R2: 'REF ESTILO 2', R3: 'REF ESTILO 3',
    };
    const parts = entries.map(([slotId, bp]) =>
      `[${LABELS[slotId]} — ${bp.name} | ${bp.type} v${bp.version} | brand: ${bp.brandId}]\n${JSON.stringify(bp.data, null, 2)}`
    );
    return `\n\n=== BLUEPRINTS ACTIVOS ===\n${parts.join('\n\n---\n\n')}\n=== FIN BLUEPRINTS ===\n`;
  },

  exportAll: () => {
    const all = get().blueprints;
    const blob = new Blob([JSON.stringify(all.map(b => b.data), null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = Object.assign(document.createElement('a'), {
      href: url, download: `UNRLVL_BPs_${new Date().toISOString().slice(0,10)}.json`,
    });
    a.click(); URL.revokeObjectURL(url);
  },
}));
