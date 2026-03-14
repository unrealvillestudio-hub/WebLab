import { useState } from 'react';
import { useShopifyStore } from './store/useShopifyStore';
import { Bell, Globe, ShoppingBag } from 'lucide-react';
import WebGeneratorModule from './modules/webgenerator/WebGeneratorModule';
import ShopifyPushModule from './modules/shopify/ShopifyPushModule';
import { BUILD_TAG } from './config/buildTag';

type AppTab = 'weblab' | 'shopify';

const Logo = () => (
  <div className="flex items-center gap-2 font-bold tracking-tighter text-xl">
    <div className="w-6 h-6 bg-[#FFAB00] rounded-sm flex items-center justify-center text-black text-[10px] font-black">UV</div>
    <span>UNRLVL</span>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('weblab');
  const shopifyStore = useShopifyStore();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-200 selection:bg-[#FFAB00]/30">

      <header className="h-14 border-b border-zinc-800 px-6 flex items-center justify-between sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-6">
          <Logo />
          <div className="h-4 w-px bg-zinc-800" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#FFAB00]">UNRLVL — WebLab</span>
            <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-500">{BUILD_TAG}</span>
          </div>
          {/* Nav tabs */}
          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={() => setActiveTab('weblab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'weblab'
                  ? 'bg-zinc-800 text-zinc-200'
                  : 'text-zinc-600 hover:text-zinc-400'
              }`}
            >
              <Globe size={12} />
              WebLab
            </button>
            <button
              onClick={() => setActiveTab('shopify')}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'shopify'
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                  : shopifyStore.connected
                  ? 'text-emerald-400/70 hover:text-emerald-300'
                  : 'text-zinc-600 hover:text-zinc-400'
              }`}
            >
              <ShoppingBag size={12} />
              Shopify Push
              {/* Indicador de estado */}
              {!shopifyStore.connected && activeTab !== 'shopify' && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-pulse" title="Conecta Shopify para publicar" />
              )}
              {shopifyStore.connected && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400" title="Shopify conectado" />
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400/70 bg-emerald-500/5 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            CLAUDE CONNECTED
          </div>
          <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
            <Bell className="w-4 h-4 text-zinc-500" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 pb-20">
        {activeTab === 'weblab'  && <WebGeneratorModule />}
        {activeTab === 'shopify' && <ShopifyPushModule />}
      </main>

      <footer className="h-8 border-t border-zinc-800/50 px-6 flex items-center justify-between text-[10px] font-mono text-zinc-700 uppercase tracking-widest fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/80 backdrop-blur-sm z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            System Ready
          </div>
        </div>
        <span className="text-[#FFAB00]/30">UNRLVL WebLab {BUILD_TAG}</span>
        <span className="text-zinc-600 hidden md:block tracking-wide normal-case">Designed &amp; Developed by <span className="text-zinc-500">Unreal&gt;ille Studio</span> · Miami, FL</span>
      </footer>
    </div>
  );
}
