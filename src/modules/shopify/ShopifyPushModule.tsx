import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag, CheckCircle2, XCircle, AlertCircle, Upload,
  RefreshCw, ExternalLink, ChevronDown, ChevronUp, Eye, EyeOff,
  Layers, Clock, Check, X, Zap,
} from 'lucide-react';
import { cn, Badge, Spinner } from '../../ui/components';
import { getCatalog } from '../../config/productCatalog';
import { useShopifyStore } from '../../store/useShopifyStore';
import type { CatalogProduct } from '../../config/productCatalog';

// ── TIPOS ──────────────────────────────────────────────────────────────────────

type PushStatus = 'idle' | 'pending' | 'success' | 'error' | 'skipped';

interface ProductPushState {
  product: CatalogProduct;
  status: PushStatus;
  shopifyId?: number;
  error?: string;
}

interface ShopifyConfig {
  shop: string;
  token: string;
}

// ── HELPERS ────────────────────────────────────────────────────────────────────

function delay(ms: number) {
  return new Promise(res => setTimeout(res, ms));
}

function buildShopifyProduct(p: CatalogProduct) {
  const isDraft = p.shopify_visibility === 'pending' || p.b2b_only;

  // Tags
  const tags: string[] = [
    p.collection_id,
    p.subcollection_id,
    ...p.hair_type,
    ...(p.b2b_only ? ['b2b', 'pro-salon'] : ['b2c']),
    ...(p.shopify_visibility === 'pending' ? ['compliance-pending'] : []),
  ].filter(Boolean);

  // Metafields
  const metafields = [
    { namespace: 'neurone', key: 'sku', value: p.sku || p.id, type: 'single_line_text_field' },
    { namespace: 'neurone', key: 'collection_id', value: p.collection_id, type: 'single_line_text_field' },
    { namespace: 'neurone', key: 'subcollection', value: p.subcollection, type: 'single_line_text_field' },
    { namespace: 'neurone', key: 'format', value: p.format, type: 'single_line_text_field' },
    { namespace: 'neurone', key: 'size', value: p.size, type: 'single_line_text_field' },
    { namespace: 'neurone', key: 'b2b_only', value: String(p.b2b_only), type: 'single_line_text_field' },
    { namespace: 'neurone', key: 'shopify_visibility', value: p.shopify_visibility, type: 'single_line_text_field' },
  ];

  if (p.benefit_claims?.length) {
    metafields.push({
      namespace: 'neurone',
      key: 'benefit_claims',
      value: p.benefit_claims.join(' | '),
      type: 'single_line_text_field',
    });
  }

  if (p.key_ingredients?.length) {
    metafields.push({
      namespace: 'neurone',
      key: 'key_ingredients',
      value: p.key_ingredients.join(', '),
      type: 'single_line_text_field',
    });
  }

  if (p.cross_sell?.length) {
    metafields.push({
      namespace: 'neurone',
      key: 'cross_sell',
      value: p.cross_sell.join(','),
      type: 'single_line_text_field',
    });
  }

  const product: Record<string, unknown> = {
    title: p.display_name,
    body_html: `<p>${p.description_enhanced || p.description}</p>`,
    vendor: 'Neurone Cosmética',
    product_type: p.collection,
    tags: tags.join(', '),
    status: isDraft ? 'draft' : 'active',
    variants: [
      {
        price: p.price === '10.00' ? '0.00' : p.price, // precio real pendiente
        sku: p.sku || p.id,
        inventory_management: 'shopify',
        inventory_policy: 'deny',
        fulfillment_service: 'manual',
        weight: 0,
        weight_unit: 'kg',
        requires_shipping: true,
      },
    ],
    metafields,
  };

  // Imagen desde CDN de Shopify si hay filename
  if (p.image_filename) {
    product.images = [
      {
        src: `https://cdn.shopify.com/s/files/placeholder/${p.image_filename}`,
        alt: p.display_name,
      },
    ];
  }

  return { product };
}

// ── API CALLS ──────────────────────────────────────────────────────────────────

async function shopifyCall(
  config: ShopifyConfig,
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: unknown,
) {
  const res = await fetch('/api/shopify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      shop: config.shop,
      token: config.token,
      endpoint,
      method,
      body,
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.errors ? JSON.stringify(data.errors) : `HTTP ${res.status}`);
  }
  return data;
}

async function testConnection(config: ShopifyConfig) {
  const data = await shopifyCall(config, '/admin/api/2024-01/shop.json');
  return data.shop as { name: string; email: string; domain: string };
}

async function getExistingProducts(config: ShopifyConfig): Promise<Record<string, number>> {
  const map: Record<string, number> = {};
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const data = await shopifyCall(
      config,
      `/admin/api/2024-01/products.json?limit=250&fields=id,title,tags&page=${page}`,
    );
    const products = data.products ?? [];
    for (const p of products) {
      // identificamos por tag de sku o título
      const skuTag = (p.tags ?? '').split(',').find((t: string) => t.trim().startsWith('sku:'));
      if (skuTag) map[skuTag.replace('sku:', '').trim()] = p.id;
      map[p.title] = p.id;
    }
    hasMore = products.length === 250;
    page++;
  }
  return map;
}

async function pushProduct(
  config: ShopifyConfig,
  p: CatalogProduct,
  existingMap: Record<string, number>,
): Promise<number> {
  const payload = buildShopifyProduct(p);
  const existingId = existingMap[p.display_name];

  if (existingId) {
    // Update
    const data = await shopifyCall(
      config,
      `/admin/api/2024-01/products/${existingId}.json`,
      'PUT',
      { product: { ...payload.product, id: existingId } },
    );
    return data.product.id;
  } else {
    // Create
    const data = await shopifyCall(
      config,
      '/admin/api/2024-01/products.json',
      'POST',
      payload,
    );
    return data.product.id;
  }
}

// ── STATUS BADGE ───────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: PushStatus }) {
  if (status === 'idle')    return <span className="text-[10px] text-zinc-600 font-mono">—</span>;
  if (status === 'pending') return <Spinner size={12} />;
  if (status === 'success') return <CheckCircle2 size={13} className="text-emerald-400" />;
  if (status === 'error')   return <XCircle size={13} className="text-red-400" />;
  if (status === 'skipped') return <Clock size={13} className="text-amber-400" />;
  return null;
}

function VisibilityBadge({ product }: { product: CatalogProduct }) {
  if (product.b2b_only) return <Badge color="#8B5CF6">B2B</Badge>;
  if (product.shopify_visibility === 'pending') return <Badge color="#F59E0B">Compliance</Badge>;
  return <Badge color="#22C55E">Public</Badge>;
}

// ── PRODUCT ROW ───────────────────────────────────────────────────────────────

function ProductRow({
  state,
  selected,
  onToggle,
}: {
  state: ProductPushState;
  selected: boolean;
  onToggle: () => void;
}) {
  const { product, status, shopifyId, error } = state;

  return (
    <div className={cn(
      'flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors',
      status === 'success' ? 'bg-emerald-500/5 border-emerald-500/20' :
      status === 'error'   ? 'bg-red-500/5 border-red-500/20' :
      status === 'pending' ? 'bg-accent/5 border-accent/20' :
      selected             ? 'bg-zinc-800 border-zinc-700' :
                             'bg-zinc-900 border-zinc-800 hover:border-zinc-700',
    )}>
      {/* Checkbox */}
      <button
        onClick={onToggle}
        disabled={status === 'pending' || status === 'success'}
        className={cn(
          'w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors',
          selected ? 'bg-accent border-accent' : 'border-zinc-600 hover:border-zinc-400',
          (status === 'pending' || status === 'success') && 'opacity-40 cursor-not-allowed',
        )}
      >
        {selected && <Check size={10} className="text-black" strokeWidth={3} />}
      </button>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-zinc-200">{product.display_name}</span>
          <VisibilityBadge product={product} />
          {product.sku && (
            <span className="text-[9px] font-mono text-zinc-600">{product.sku}</span>
          )}
        </div>
        <p className="text-[10px] text-zinc-600 mt-0.5">
          {product.collection} · {product.size} · {product.format}
        </p>
        {error && (
          <p className="text-[10px] text-red-400 mt-0.5 truncate">{error}</p>
        )}
        {shopifyId && status === 'success' && (
          <p className="text-[10px] text-emerald-400/70 mt-0.5">
            Shopify ID: {shopifyId}
          </p>
        )}
      </div>

      {/* Status */}
      <StatusBadge status={status} />
    </div>
  );
}

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────────

export default function ShopifyPushModule() {
  // Config — sincronizado con store compartido
  const shopifyStore = useShopifyStore();
  const [shop, setShopLocal]   = useState(shopifyStore.shop);
  const [token, setTokenLocal] = useState(shopifyStore.token);
  const [showToken, setShowToken] = useState(false);

  function setShop(v: string)  { setShopLocal(v);  shopifyStore.setShop(v); }
  function setToken(v: string) { setTokenLocal(v); shopifyStore.setToken(v); }

  // Leer token del fragment URL tras OAuth callback (#shopify_token=xxx&shop=xxx)
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.includes('shopify_token=')) return;
    const params = new URLSearchParams(hash.replace('#', ''));
    const t = params.get('shopify_token');
    const s = params.get('shop');
    if (t) setToken(t);
    if (s) setShop(s);
    window.history.replaceState(null, '', window.location.pathname);
    // Auto-verificar conexión tras OAuth
    if (t) setTimeout(() => autoVerify(t, s ?? shop), 300);
  }, []);

  async function autoVerify(t: string, s: string) {
    try {
      const res = await fetch('/api/shopify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shop: s, token: t, endpoint: '/admin/api/2024-01/shop.json' }),
      });
      const data = await res.json();
      if (res.ok && data.shop) {
        setShopInfo(data.shop);
        setConnected(true);
        shopifyStore.setConnected(true);
        shopifyStore.setToken(t);
        shopifyStore.setShop(s);
      }
    } catch {}
  }

  // Connection
  const [testing, setTesting]     = useState(false);
  const [connected, setConnected] = useState(shopifyStore.connected);
  const [shopInfo, setShopInfo]   = useState<{ name: string; email: string; domain: string } | null>(null);
  const [connError, setConnError] = useState('');

  // Products
  const allProducts = getCatalog('neuroneCosmetics').flatMap(c =>
    c.subcollections.flatMap(s => s.products).concat(c.products)
  ).filter((p, i, arr) => arr.findIndex(x => x.id === p.id) === i);

  const [productStates, setProductStates] = useState<ProductPushState[]>(
    allProducts.map(p => ({ product: p, status: 'idle' as PushStatus }))
  );
  const [selected, setSelected] = useState<Set<string>>(
    new Set(allProducts.filter(p => p.shopify_visibility === 'public' && !p.b2b_only).map(p => p.id))
  );

  // Sync
  const [syncing, setSyncing]           = useState(false);
  const [syncDone, setSyncDone]         = useState(false);
  const [syncCount, setSyncCount]       = useState(0);
  const [syncStatus, setSyncStatus]     = useState('');

  // Image upload
  const [imgUploading, setImgUploading]   = useState(false);
  const [imgLog, setImgLog]               = useState<string[]>([]);
  const [imgDone, setImgDone]             = useState(false);
  const [imgStats, setImgStats]           = useState({ ok: 0, err: 0 });
  const [shopifyIdMap, setShopifyIdMap]   = useState<Record<string, number>>({});

  // Push
  const [pushing, setPushing]   = useState(false);
  const [pushDone, setPushDone] = useState(false);
  const [log, setLog]           = useState<string[]>([]);
  const abortRef                = useRef(false);

  // Filters
  const [filter, setFilter] = useState<'all' | 'public' | 'pending' | 'b2b'>('all');
  const [collapseMap, setCollapseMap] = useState<Record<string, boolean>>({});

  const config: ShopifyConfig = { shop, token };

  // ── CONNECT ──────────────────────────────────────────────────────────────────

  async function handleTest() {
    setTesting(true);
    setConnError('');
    setConnected(false);
    try {
      const info = await testConnection(config);
      setShopInfo(info);
      setConnected(true);
      shopifyStore.setConnected(true);
      shopifyStore.setToken(token);
      shopifyStore.setShop(shop);
      // Auto-sync tras conectar
      setTimeout(() => handleSync(true), 300);
    } catch (e: any) {
      setConnError(e.message ?? 'Error de conexión');
    } finally {
      setTesting(false);
    }
  }

  // ── SELECTION ─────────────────────────────────────────────────────────────────

  function toggleProduct(id: string) {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function selectAll(ids: string[]) {
    setSelected(prev => {
      const next = new Set(prev);
      ids.forEach(id => next.add(id));
      return next;
    });
  }

  function deselectAll(ids: string[]) {
    setSelected(prev => {
      const next = new Set(prev);
      ids.forEach(id => next.delete(id));
      return next;
    });
  }

  function updateState(id: string, patch: Partial<ProductPushState>) {
    setProductStates(prev =>
      prev.map(s => s.product.id === id ? { ...s, ...patch } : s)
    );
  }

  function addLog(msg: string) {
    setLog(prev => [...prev, `${new Date().toLocaleTimeString('es-ES')} — ${msg}`]);
  }

  // ── PUSH ──────────────────────────────────────────────────────────────────────

  async function handlePush() {
    if (!connected || pushing) return;
    setPushing(true);
    setPushDone(false);
    abortRef.current = false;
    setLog([]);

    const toUpload = productStates.filter(s => selected.has(s.product.id));

    addLog(`Iniciando push — ${toUpload.length} productos seleccionados`);

    // Obtener mapa de productos existentes
    let existingMap: Record<string, number> = {};
    try {
      addLog('Verificando productos existentes en Shopify...');
      existingMap = await getExistingProducts(config);
      const existing = Object.keys(existingMap).length;
      addLog(`${existing} productos encontrados en la tienda`);
    } catch (e: any) {
      addLog(`⚠️ No se pudo obtener productos existentes: ${e.message}`);
    }

    let ok = 0, errors = 0, skipped = 0;

    for (const state of toUpload) {
      if (abortRef.current) {
        addLog('Push cancelado por el usuario');
        break;
      }

      const p = state.product;
      updateState(p.id, { status: 'pending' });
      addLog(`Subiendo: ${p.display_name}...`);

      try {
        const shopifyId = await pushProduct(config, p, existingMap);
        updateState(p.id, { status: 'success', shopifyId });
        const isDraft = p.shopify_visibility === 'pending' || p.b2b_only;
        addLog(`✓ ${p.display_name} → ID ${shopifyId}${isDraft ? ' [borrador]' : ' [activo]'}`);
        ok++;
      } catch (e: any) {
        updateState(p.id, { status: 'error', error: e.message });
        addLog(`✗ ${p.display_name} — ${e.message}`);
        errors++;
      }

      // Rate limit: 2 req/seg
      await delay(550);
    }

    addLog(`─── Completado: ${ok} exitosos · ${errors} errores · ${skipped} omitidos`);
    // Guardar mapa nombre → Shopify ID para upload de imágenes
    const idMap: Record<string, number> = {};
    productStates.forEach(s => { if (s.shopifyId) idMap[s.product.display_name] = s.shopifyId; });
    setShopifyIdMap(idMap);
    setPushing(false);
    setPushDone(true);
  }

  // ── FILTERED PRODUCTS ─────────────────────────────────────────────────────────

  const filteredStates = productStates.filter(s => {
    if (filter === 'public')  return s.product.shopify_visibility === 'public' && !s.product.b2b_only;
    if (filter === 'pending') return s.product.shopify_visibility === 'pending' && !s.product.b2b_only;
    if (filter === 'b2b')     return s.product.b2b_only;
    return true;
  });

  // Group by collection
  const grouped = filteredStates.reduce<Record<string, ProductPushState[]>>((acc, s) => {
    const key = s.product.collection;
    if (!acc[key]) acc[key] = [];
    acc[key].push(s);
    return acc;
  }, {});

  const stats = {
    total: productStates.length,
    selected: selected.size,
    success: productStates.filter(s => s.status === 'success').length,
    errors: productStates.filter(s => s.status === 'error').length,
    public: productStates.filter(s => s.product.shopify_visibility === 'public' && !s.product.b2b_only).length,
    pending: productStates.filter(s => s.product.shopify_visibility === 'pending' && !s.product.b2b_only).length,
    b2b: productStates.filter(s => s.product.b2b_only).length,
  };

  async function handleSync(forceRun = false) {
    if ((!connected && !forceRun) || syncing) return;
    setSyncing(true);
    setSyncDone(false);
    setSyncStatus('Leyendo catálogo...');
    try {
      // Cursor-based pagination — Shopify 2024-01+
      const idMap: Record<string, number> = {};
      let url = `/admin/api/2024-01/products.json?limit=250&fields=id,title,status`;
      let hasNext = true;

      while (hasNext) {
        const data = await shopifyCall(config, url);
        const products = data.products ?? [];
        for (const p of products) idMap[p.title] = p.id;

        // Shopify devuelve Link header para paginación — el proxy lo reenvía
        // Si products < 250 no hay más páginas
        hasNext = products.length === 250;
        if (hasNext) {
          // Obtener cursor del último producto
          const lastId = products[products.length - 1]?.id;
          url = `/admin/api/2024-01/products.json?limit=250&fields=id,title,status&since_id=${lastId}`;
        }
      }

      setSyncStatus('Sincronizando imágenes CDN...');
      // Traer imágenes CDN de Shopify para cada producto
      const cdnMap: Record<string, string> = {};
      for (const [title, pid] of Object.entries(idMap)) {
        try {
          const imgData = await shopifyCall(
            config,
            `/admin/api/2024-01/products/${pid}/images.json?limit=1&fields=src,alt`
          );
          const firstImg = imgData.images?.[0];
          if (firstImg?.src) cdnMap[title] = firstImg.src;
        } catch {}
        await delay(200);
      }
      shopifyStore.setCdnImageMap(cdnMap);

      // Sincronizar con productStates
      setProductStates(prev => prev.map(s => {
        const shopifyId = idMap[s.product.display_name];
        return shopifyId ? { ...s, status: 'success' as PushStatus, shopifyId } : s;
      }));
      setShopifyIdMap(idMap);
      setSyncCount(Object.keys(idMap).length);
      setSyncStatus('');
      setSyncDone(true);
    } catch (e: any) {
      setConnError(`Error sync: ${e.message}`);
    } finally {
      setSyncing(false);
    }
  }

  function addImgLog(msg: string) {
    setImgLog(prev => [...prev, `${new Date().toLocaleTimeString('es-ES')} — ${msg}`]);
  }

  async function handleImageUpload() {
    if (!connected || imgUploading) return;
    setImgUploading(true);
    setImgDone(false);
    setImgLog([]);
    setImgStats({ ok: 0, err: 0 });

    const toUpload = productStates.filter(s =>
      s.shopifyId && s.product.image_filename
    );

    addImgLog(`Iniciando upload de imágenes — ${toUpload.length} productos`);

    let ok = 0, errors = 0;

    for (const state of toUpload) {
      const p = state.product;
      const shopifyId = state.shopifyId ?? shopifyIdMap[p.display_name];
      if (!shopifyId) {
        addImgLog(`⚠️ ${p.display_name} — sin Shopify ID, omitido`);
        continue;
      }

      addImgLog(`Subiendo imagen: ${p.display_name} (${p.image_filename})...`);

      try {
        // Leer imagen como base64 desde BluePrints via GitHub raw
        const imageUrl = `https://raw.githubusercontent.com/unrealvillestudio-hub/BluePrints/main/assets/images/products/${p.image_filename}`;
        const imgRes = await fetch(imageUrl);
        if (!imgRes.ok) throw new Error(`No se pudo obtener imagen: ${imgRes.status}`);

        const buffer = await imgRes.arrayBuffer();
        const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));

        // Upload via proxy
        const uploadRes = await fetch('/api/shopify-images', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            shop,
            token,
            productId: shopifyId,
            filename: p.image_filename,
            base64,
            alt: p.display_name,
          }),
        });

        const data = await uploadRes.json();
        if (!uploadRes.ok) throw new Error(data?.errors ? JSON.stringify(data.errors) : `HTTP ${uploadRes.status}`);

        addImgLog(`✓ ${p.display_name} — imagen subida`);
        ok++;
      } catch (e: any) {
        addImgLog(`✗ ${p.display_name} — ${e.message}`);
        errors++;
      }

      await new Promise(r => setTimeout(r, 600));
    }

    addImgLog(`─── Imágenes: ${ok} subidas · ${errors} errores`);
    setImgStats({ ok, err: errors });
    setImgUploading(false);
    setImgDone(true);
  }

  return (
    <div className="space-y-4 pb-12">

      {/* ── HEADER ── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <ShoppingBag size={15} className="text-emerald-400" />
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-100">Shopify Push</h2>
            <p className="text-[11px] text-zinc-500">Sube el catálogo de Neurone directamente a tu tienda</p>
          </div>
        </div>
        {connected && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-300 font-medium">{shopInfo?.name}</span>
          </div>
        )}
      </div>

      {/* ── CONNECTION CONFIG ── */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
        <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Conexión Shopify</p>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Shop URL</label>
            <input
              value={shop}
              onChange={e => { setShop(e.target.value); setConnected(false); }}
              placeholder="mi-tienda.myshopify.com"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 outline-none focus:border-emerald-500/50 font-mono text-xs"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Admin API Token</label>
            <div className="relative">
              <input
                value={token}
                onChange={e => { setToken(e.target.value); setConnected(false); }}
                type={showToken ? 'text' : 'password'}
                placeholder="shpss_..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 pr-9 text-sm text-zinc-200 outline-none focus:border-emerald-500/50 font-mono text-xs"
              />
              <button
                onClick={() => setShowToken(v => !v)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400"
              >
                {showToken ? <EyeOff size={13} /> : <Eye size={13} />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Botón OAuth — conectar via Shopify */}
          <a
            href={`/api/shopify-auth?shop=${encodeURIComponent(shop)}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all border bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-300"
          >
            <ShoppingBag size={13} />
            Conectar con Shopify
          </a>

          <span className="text-zinc-700 text-xs">o pega el token manualmente →</span>

          <button
            onClick={handleTest}
            disabled={testing || !shop || !token}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all border',
              connected
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-zinc-600',
              (testing || !shop || !token) && 'opacity-50 cursor-not-allowed',
            )}
          >
            {testing ? <Spinner size={13} /> : connected ? <CheckCircle2 size={13} /> : <RefreshCw size={13} />}
            {testing ? 'Verificando...' : connected ? 'Conectado' : 'Verificar conexión'}
          </button>

          {connected && shopInfo && (
            <a
              href={`https://${shopInfo.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <ExternalLink size={11} />
              {shopInfo.domain}
            </a>
          )}

          {connError && (
            <span className="text-xs text-red-400 flex items-center gap-1.5">
              <XCircle size={12} />
              {connError}
            </span>
          )}
        </div>
      </div>

      {/* ── SYNC OPERATIONS ── */}
      {connected && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest mb-1">Operaciones</p>
              <p className="text-[11px] text-zinc-500">
                {syncDone
                  ? `Sincronizado — ${syncCount} productos en tienda`
                  : 'Sincroniza el estado actual de la tienda antes de operar'}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Sync */}
              <button
                onClick={() => handleSync()}
                disabled={syncing}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold border transition-all',
                  syncDone
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-zinc-600',
                  syncing && 'opacity-50 cursor-not-allowed',
                )}
              >
                {syncing ? <Spinner size={12} /> : syncDone ? <CheckCircle2 size={12} /> : <RefreshCw size={12} />}
                {syncing ? (syncStatus || 'Sincronizando...') : syncDone ? `Sincronizado (${syncCount})` : 'Sincronizar tienda'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── STATS ── */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: 'Total', value: stats.total, color: '#6366F1' },
          { label: 'Seleccionados', value: stats.selected, color: '#3B82F6' },
          { label: 'Exitosos', value: stats.success, color: '#22C55E' },
          { label: 'Errores', value: stats.errors, color: '#EF4444' },
        ].map(s => (
          <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
            <p className="text-xl font-bold" style={{ color: s.color }}>{s.value}</p>
            <p className="text-[10px] text-zinc-600 uppercase tracking-wider mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── PRODUCT LIST ── */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">

        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
          <div className="flex items-center gap-1.5">
            {(['all', 'public', 'pending', 'b2b'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'text-[10px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider transition-colors',
                  filter === f
                    ? 'bg-zinc-700 text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-400'
                )}
              >
                {f === 'all' ? `Todo (${stats.total})` :
                 f === 'public' ? `Public (${stats.public})` :
                 f === 'pending' ? `Compliance (${stats.pending})` :
                 `B2B (${stats.b2b})`}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => selectAll(filteredStates.map(s => s.product.id))}
              className="text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Seleccionar todo
            </button>
            <span className="text-zinc-700">·</span>
            <button
              onClick={() => deselectAll(filteredStates.map(s => s.product.id))}
              className="text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Deseleccionar
            </button>
          </div>
        </div>

        {/* Products grouped by collection */}
        <div className="p-3 space-y-3 max-h-[480px] overflow-y-auto">
          {Object.entries(grouped).map(([collection, states]) => {
            const collapsed = collapseMap[collection];
            const collSelected = states.filter(s => selected.has(s.product.id)).length;
            return (
              <div key={collection}>
                <button
                  onClick={() => setCollapseMap(prev => ({ ...prev, [collection]: !prev[collection] }))}
                  className="w-full flex items-center gap-2 py-1.5 px-1 text-left hover:bg-zinc-800/50 rounded-lg transition-colors mb-1.5"
                >
                  {collapsed ? <ChevronDown size={12} className="text-zinc-600" /> : <ChevronUp size={12} className="text-zinc-600" />}
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">{collection}</span>
                  <span className="text-[10px] text-zinc-700 ml-auto">{collSelected}/{states.length} sel.</span>
                </button>
                {!collapsed && (
                  <div className="space-y-1.5">
                    {states.map(s => (
                      <ProductRow
                        key={s.product.id}
                        state={s}
                        selected={selected.has(s.product.id)}
                        onToggle={() => toggleProduct(s.product.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── PUSH CONTROLS ── */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">

        {/* Warnings */}
        <div className="space-y-2">
          {selected.size > 0 && (
            <>
              {[...selected].some(id => {
                const p = allProducts.find(x => x.id === id);
                return p?.shopify_visibility === 'pending' && !p?.b2b_only;
              }) && (
                <div className="flex items-start gap-2 px-3 py-2 bg-amber-500/8 border border-amber-500/20 rounded-lg">
                  <AlertCircle size={12} className="text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-amber-300/80">
                    Hay productos con compliance pendiente (Capissen, Derma Roller) — se subirán como <strong>borrador</strong>, invisibles en la tienda hasta revisión legal.
                  </p>
                </div>
              )}
              {[...selected].some(id => allProducts.find(x => x.id === id)?.b2b_only) && (
                <div className="flex items-start gap-2 px-3 py-2 bg-violet-500/8 border border-violet-500/20 rounded-lg">
                  <AlertCircle size={12} className="text-violet-400 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-violet-300/80">
                    Productos B2B Pro Salon seleccionados — se subirán como <strong>borrador</strong>, pendiente configuración Locksmith.
                  </p>
                </div>
              )}
              <div className="flex items-start gap-2 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg">
                <AlertCircle size={12} className="text-zinc-400 mt-0.5 shrink-0" />
                <p className="text-[11px] text-zinc-400">
                  Los precios se suben en <strong>$0.00</strong> (placeholder). Actualízalos en Shopify Admin una vez confirmados con PO.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePush}
            disabled={!connected || pushing || selected.size === 0}
            className={cn(
              'flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all',
              connected && !pushing && selected.size > 0
                ? 'bg-emerald-500 hover:bg-emerald-400 text-white'
                : 'bg-zinc-800 text-zinc-600 cursor-not-allowed',
            )}
          >
            {pushing ? (
              <><Spinner size={14} /> Subiendo {stats.success + stats.errors}/{selected.size}...</>
            ) : (
              <><Upload size={14} /> Push {selected.size} producto{selected.size !== 1 ? 's' : ''} a Shopify</>
            )}
          </button>

          {pushing && (
            <button
              onClick={() => { abortRef.current = true; }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-red-400 border border-red-500/20 hover:bg-red-500/10 transition-colors"
            >
              <X size={12} /> Cancelar
            </button>
          )}

          {pushDone && !pushing && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-sm text-emerald-400"
            >
              <Zap size={13} />
              {stats.success} subidos · {stats.errors} errores
            </motion.div>
          )}
        </div>
      </div>

      {/* ── LOG ── */}
      <AnimatePresence>
        {log.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden"
          >
            <div className="px-4 py-2.5 border-b border-zinc-800 flex items-center gap-2">
              <Layers size={11} className="text-zinc-500" />
              <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">Log de push</span>
            </div>
            <div className="p-3 max-h-48 overflow-y-auto space-y-0.5">
              {log.map((line, i) => (
                <p key={i} className={cn(
                  'text-[11px] font-mono leading-relaxed',
                  line.includes('✓') ? 'text-emerald-400' :
                  line.includes('✗') ? 'text-red-400' :
                  line.includes('⚠️') ? 'text-amber-400' :
                  line.includes('───') ? 'text-zinc-300 font-bold' :
                  'text-zinc-500'
                )}>
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── IMAGE UPLOAD ── */}
      {connected && (syncDone || pushDone) && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Upload size={12} className="text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-200">Upload de imágenes</p>
              <p className="text-[11px] text-zinc-500">39 imágenes disponibles en BluePrints → Shopify CDN</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleImageUpload}
              disabled={!connected || imgUploading}
              className={cn(
                'flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all',
                connected && !imgUploading
                  ? 'bg-blue-500 hover:bg-blue-400 text-white'
                  : 'bg-zinc-800 text-zinc-600 cursor-not-allowed',
              )}
            >
              {imgUploading ? (
                <><Spinner size={13} /> Subiendo imágenes {imgStats.ok}/{productStates.filter(s => s.product.image_filename).length}...</>
              ) : (
                <><Upload size={13} /> Subir imágenes a Shopify</>
              )}
            </button>

            {imgDone && !imgUploading && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm text-blue-300 flex items-center gap-2"
              >
                <Check size={13} />
                {imgStats.ok} imágenes subidas · {imgStats.err} errores
              </motion.span>
            )}
          </div>

          {/* Image log */}
          {imgLog.length > 0 && (
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="p-3 max-h-48 overflow-y-auto space-y-0.5">
                {imgLog.map((line, i) => (
                  <p key={i} className={cn(
                    'text-[11px] font-mono leading-relaxed',
                    line.includes('✓') ? 'text-blue-400' :
                    line.includes('✗') ? 'text-red-400' :
                    line.includes('⚠️') ? 'text-amber-400' :
                    line.includes('───') ? 'text-zinc-300 font-bold' :
                    'text-zinc-500'
                  )}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
