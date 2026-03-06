import { create } from 'zustand';
import { WebOutput } from '../core/types';

interface WebOutputStore {
  outputs: WebOutput[];
  addOutput: (o: WebOutput) => void;
  removeOutput: (id: string) => void;
  clearAll: () => void;
}

export const useWebOutputStore = create<WebOutputStore>((set) => ({
  outputs: [],
  addOutput: (o) => set(s => ({ outputs: [o, ...s.outputs] })),
  removeOutput: (id) => set(s => ({ outputs: s.outputs.filter(o => o.id !== id) })),
  clearAll: () => set({ outputs: [] }),
}));
