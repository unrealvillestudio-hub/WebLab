import { create } from 'zustand';

interface ShopifyStore {
  shop: string;
  token: string;
  connected: boolean;
  setShop: (shop: string) => void;
  setToken: (token: string) => void;
  setConnected: (v: boolean) => void;
  clear: () => void;
}

export const useShopifyStore = create<ShopifyStore>((set) => ({
  shop: 'neurone-south-central-florida.myshopify.com',
  token: '',
  connected: false,
  setShop:      (shop)      => set({ shop, connected: false }),
  setToken:     (token)     => set({ token, connected: false }),
  setConnected: (connected) => set({ connected }),
  clear: () => set({ token: '', connected: false }),
}));
