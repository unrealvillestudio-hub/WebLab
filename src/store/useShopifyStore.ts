import { create } from 'zustand';

interface ShopifyStore {
  shop: string;
  token: string;
  connected: boolean;
  // Mapa nombre producto → URL imagen en CDN de Shopify
  cdnImageMap: Record<string, string>;
  setShop: (shop: string) => void;
  setToken: (token: string) => void;
  setConnected: (v: boolean) => void;
  setCdnImageMap: (map: Record<string, string>) => void;
  clear: () => void;
}

export const useShopifyStore = create<ShopifyStore>((set) => ({
  shop: 'neurone-south-central-florida.myshopify.com',
  token: '',
  connected: false,
  cdnImageMap: {},
  setShop:         (shop)      => set({ shop, connected: false }),
  setToken:        (token)     => set({ token, connected: false }),
  setConnected:    (connected) => set({ connected }),
  setCdnImageMap:  (cdnImageMap) => set({ cdnImageMap }),
  clear: () => set({ token: '', connected: false, cdnImageMap: {} }),
}));
