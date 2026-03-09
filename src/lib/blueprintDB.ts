// ─── Blueprint DB — IndexedDB wrapper para WebLab ─────────────────────────────
// Misma DB que AgentLab pero en el origen de WebLab (origin-scoped por browser)

export type BPType = 'BP_PERSON' | 'BP_LOCATION' | 'BP_PRODUCT';
export type SlotId = 'A' | 'B' | 'C' | 'D' | 'L' | 'R1' | 'R2' | 'R3';

export interface BlueprintEntry {
  id: string;
  type: BPType;
  brandId: string;
  name: string;
  version: string;
  data: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export type SlotMap = Partial<Record<SlotId, BlueprintEntry>>;

export const SLOT_META: Record<SlotId, { label: string; accepts: BPType[]; description: string }> = {
  A:  { label: 'Slot A', accepts: ['BP_PERSON'],   description: 'Persona / vocero principal' },
  B:  { label: 'Slot B', accepts: ['BP_PERSON'],   description: 'Persona / vocero secundario' },
  C:  { label: 'Slot C', accepts: ['BP_PRODUCT'],  description: 'Producto principal de la pieza' },
  D:  { label: 'Slot D', accepts: ['BP_PRODUCT'],  description: 'Producto de apoyo o upsell' },
  L:  { label: 'Slot L', accepts: ['BP_LOCATION'], description: 'Contexto de lugar / escena' },
  R1: { label: 'Slot R1', accepts: ['BP_PERSON', 'BP_LOCATION', 'BP_PRODUCT'], description: 'Referencia de estilo libre' },
  R2: { label: 'Slot R2', accepts: ['BP_PERSON', 'BP_LOCATION', 'BP_PRODUCT'], description: 'Referencia de estilo libre' },
  R3: { label: 'Slot R3', accepts: ['BP_PERSON', 'BP_LOCATION', 'BP_PRODUCT'], description: 'Referencia de estilo libre' },
};

const DB_NAME = 'unrlvl_blueprints';
const STORE   = 'blueprints';
const VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, VERSION);
    req.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'id' });
        store.createIndex('byType',         'type',    { unique: false });
        store.createIndex('byBrand',        'brandId', { unique: false });
        store.createIndex('byTypeAndBrand', ['type','brandId'], { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror   = () => reject(req.error);
  });
}

export async function dbGetAll(): Promise<BlueprintEntry[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx  = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => resolve(req.result as BlueprintEntry[]);
    req.onerror   = () => reject(req.error);
  });
}

export async function dbPut(entry: BlueprintEntry): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx  = db.transaction(STORE, 'readwrite');
    const req = tx.objectStore(STORE).put(entry);
    req.onsuccess = () => resolve();
    req.onerror   = () => reject(req.error);
  });
}

export async function dbDelete(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx  = db.transaction(STORE, 'readwrite');
    const req = tx.objectStore(STORE).delete(id);
    req.onsuccess = () => resolve();
    req.onerror   = () => reject(req.error);
  });
}

export async function dbClear(): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx  = db.transaction(STORE, 'readwrite');
    const req = tx.objectStore(STORE).clear();
    req.onsuccess = () => resolve();
    req.onerror   = () => reject(req.error);
  });
}
