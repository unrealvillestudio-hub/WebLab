import { useState, useCallback, useRef } from 'react';
import {
  Upload, CheckCircle2, XCircle, AlertCircle, RefreshCw,
  ExternalLink, ChevronDown, ChevronUp, Layers, Zap, Eye,
  FileCode2, Globe, RotateCcw, Package,
} from 'lucide-react';
import { cn, Badge, Spinner } from '../../ui/components';
import { useShopifyStore } from '../../store/useShopifyStore';
import { NEURONE_THEME_FILES, THEME_NAME, THEME_FILE_COUNT, type ThemeFile } from './themeFiles';

// ── TIPOS ─────────────────────────────────────────────────────────────────────

type FileStatus = 'idle' | 'pending' | 'success' | 'error' | 'skipped';

interface FileDeployState {
  file: ThemeFile;
  status: FileStatus;
  error?: string;
}

interface ShopifyTheme {
  id: number;
  name: string;
  role: 'main' | 'unpublished' | 'demo';
  created_at: string;
  updated_at: string;
  previewable: boolean;
}

type DeployPhase =
  | 'idle'
  | 'fetching_themes'
  | 'creating_theme'
  | 'deploying'
  | 'done'
  | 'error';

function delay(ms: number) {
  return new Promise(res => setTimeout(res, ms));
}

// ── SHOPIFY API HELPERS ───────────────────────────────────────────────────────

async function themeApi(shop: string, token: string, action: string, payload: Record<string, unknown> = {}) {
  const res = await fetch('/api/shopify-theme', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ shop, token, action, payload }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

// ── COMPONENT ────────────────────────────────────────────────────────────────

export default function ThemeDeployModule() {
  const { shop, token, connected } = useShopifyStore();

  const [phase, setPhase] = useState<DeployPhase>('idle');
  const [themes, setThemes] = useState<ShopifyTheme[]>([]);
  const [selectedThemeId, setSelectedThemeId] = useState<number | null>(null);
  const [createNew, setCreateNew] = useState(true);
  const [themeName, setThemeName] = useState(THEME_NAME);
  const [fileStates, setFileStates] = useState<FileDeployState[]>(
    NEURONE_THEME_FILES.map(f => ({ file: f, status: 'idle' }))
  );
  const [deployed, setDeployed] = useState(0);
  const [errors, setErrors] = useState(0);
  const [themeUrl, setThemeUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [showFiles, setShowFiles] = useState(false);
  const [publishAfter, setPublishAfter] = useState(false);
  const [globalError, setGlobalError] = useState('');
  const [log, setLog] = useState<string[]>([]);

  const abortRef = useRef(false);

  // ── LOG ─────────────────────────────────────────────────────────────────────
  const addLog = useCallback((msg: string) => {
    setLog(prev => [...prev.slice(-99), `${new Date().toLocaleTimeString('es')} — ${msg}`]);
  }, []);

  const updateFileStatus = useCallback((key: string, status: FileStatus, error?: string) => {
    setFileStates(prev =>
      prev.map(f => f.file.key === key ? { ...f, status, error } : f)
    );
  }, []);

  // ── LOAD THEMES ─────────────────────────────────────────────────────────────
  const loadThemes = useCallback(async () => {
    if (!shop || !token) return;
    setPhase('fetching_themes');
    setGlobalError('');
    try {
      const data = await themeApi(shop, token, 'list_themes');
      const list: ShopifyTheme[] = data.themes ?? [];
      setThemes(list.sort((a, _b) => (a.role === 'main' ? -1 : 1)));
      addLog(`${list.length} themes encontrados en la tienda`);
      setPhase('idle');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error desconocido';
      setGlobalError(`Error cargando themes: ${msg}`);
      setPhase('error');
    }
  }, [shop, token, addLog]);

  // ── DEPLOY ──────────────────────────────────────────────────────────────────
  const runDeploy = useCallback(async () => {
    if (!shop || !token) return;
    abortRef.current = false;
    setGlobalError('');
    setDeployed(0);
    setErrors(0);
    setLog([]);
    setFileStates(NEURONE_THEME_FILES.map(f => ({ file: f, status: 'idle' })));

    let targetThemeId = selectedThemeId;

    // 1. Crear theme si aplica
    if (createNew || !targetThemeId) {
      setPhase('creating_theme');
      addLog(`Creando theme "${themeName}"...`);
      try {
        const data = await themeApi(shop, token, 'create_theme', { name: themeName });
        targetThemeId = data.theme?.id;
        if (!targetThemeId) throw new Error('Shopify no devolvió ID del theme');
        addLog(`Theme creado → ID: ${targetThemeId}`);
        // Shopify necesita unos segundos para procesar el theme nuevo
        addLog('Esperando que Shopify procese el theme...');
        await delay(3500);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Error desconocido';
        setGlobalError(`Error creando theme: ${msg}`);
        setPhase('error');
        return;
      }
    }

    // 2. Deploy archivos
    setPhase('deploying');
    addLog(`Deployando ${THEME_FILE_COUNT} archivos...`);
    let successCount = 0;
    let errorCount = 0;

    for (const fileState of fileStates) {
      if (abortRef.current) {
        addLog('Deploy cancelado por el usuario');
        break;
      }

      const { file } = fileState;
      updateFileStatus(file.key, 'pending');

      try {
        await themeApi(shop, token, 'put_asset', {
          theme_id: targetThemeId,
          key: file.key,
          value: file.value,
        });
        updateFileStatus(file.key, 'success');
        successCount++;
        setDeployed(successCount);
        addLog(`✓ ${file.key}`);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Error';
        updateFileStatus(file.key, 'error', msg);
        errorCount++;
        setErrors(errorCount);
        addLog(`✗ ${file.key} — ${msg}`);
      }

      // Rate limiting: Shopify API = 40 req/s leaky bucket; con 24 archivos no hay problema
      // pero añadimos un delay mínimo para no saturar
      await delay(180);
    }

    // 3. Publicar si aplica
    if (publishAfter && !abortRef.current && errorCount === 0) {
      addLog('Publicando theme como activo...');
      try {
        await themeApi(shop, token, 'publish_theme', { theme_id: targetThemeId });
        addLog('✓ Theme publicado como theme activo');
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Error';
        addLog(`✗ Error publicando: ${msg}`);
      }
    }

    // 4. URLs
    const cleanShop = shop.replace(/^https?:\/\//, '').replace(/\/$/, '');
    const storeBase = cleanShop.replace('.myshopify.com', '');
    setThemeUrl(`https://${storeBase}.myshopify.com/admin/themes/${targetThemeId}/editor`);
    setPreviewUrl(`https://${storeBase}.myshopify.com/?preview_theme_id=${targetThemeId}`);

    addLog(`Deploy completado: ${successCount} éxitos, ${errorCount} errores`);
    setPhase('done');
  }, [shop, token, createNew, selectedThemeId, themeName, fileStates, publishAfter, updateFileStatus, addLog]);

  // ── STATUS COUNTS ────────────────────────────────────────────────────────────
  const statusCounts = fileStates.reduce((acc, f) => {
    acc[f.status] = (acc[f.status] || 0) + 1;
    return acc;
  }, {} as Record<FileStatus, number>);

  const progress = THEME_FILE_COUNT > 0
    ? Math.round(((deployed + errors) / THEME_FILE_COUNT) * 100)
    : 0;

  // ── RESET ────────────────────────────────────────────────────────────────────
  const reset = () => {
    abortRef.current = true;
    setPhase('idle');
    setFileStates(NEURONE_THEME_FILES.map(f => ({ file: f, status: 'idle' })));
    setDeployed(0);
    setErrors(0);
    setGlobalError('');
    setLog([]);
  };

  // ── STATUS ICON ──────────────────────────────────────────────────────────────
  const StatusIcon = ({ status }: { status: FileStatus }) => {
    if (status === 'success') return <CheckCircle2 size={14} className="text-green-400" />;
    if (status === 'error')   return <XCircle size={14} className="text-red-400" />;
    if (status === 'pending') return <Spinner size={14} />;
    if (status === 'skipped') return <AlertCircle size={14} className="text-yellow-500" />;
    return <div className="w-3.5 h-3.5 rounded-full border border-white/10" />;
  };

  // ── RENDER ───────────────────────────────────────────────────────────────────
  if (!connected) {
    return (
      <div className="p-6 bg-zinc-900/50 rounded-xl border border-white/5 text-center">
        <Layers size={32} className="mx-auto mb-3 text-zinc-600" />
        <p className="text-sm text-zinc-400">
          Conecta la tienda Shopify en el módulo de configuración para deployar el theme.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">

      {/* ── HEADER ── */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers size={18} className="text-[#0076A8]" />
            <h2 className="text-sm font-bold tracking-widest uppercase text-white">Theme Deploy</h2>
            <Badge color="#0076A8">F9</Badge>
          </div>
          <p className="text-xs text-zinc-400">
            {THEME_FILE_COUNT} archivos · Neurone Custom Theme · Full-width, sin Dawn
          </p>
        </div>
        <div className="flex gap-2">
          {phase !== 'idle' && phase !== 'deploying' && (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <RotateCcw size={13} />
              Reset
            </button>
          )}
          {themes.length === 0 && phase === 'idle' && (
            <button
              onClick={loadThemes}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0076A8]/20 border border-[#0076A8]/30 text-xs text-[#5BB8E8] hover:bg-[#0076A8]/30 transition-colors"
            >
              <RefreshCw size={13} />
              Cargar Themes
            </button>
          )}
        </div>
      </div>

      {/* ── ERROR GLOBAL ── */}
      {globalError && (
        <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs">
          <XCircle size={16} className="flex-shrink-0 mt-0.5" />
          {globalError}
        </div>
      )}

      {/* ── CONFIGURACIÓN DE DEPLOY ── */}
      {(phase === 'idle' || phase === 'fetching_themes') && (
        <div className="flex flex-col gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Configuración</p>

          {/* Modo: nuevo vs existente */}
          <div className="flex gap-2">
            <button
              onClick={() => setCreateNew(true)}
              className={cn(
                'flex-1 py-2.5 rounded-lg border text-xs font-medium tracking-wide uppercase transition-all',
                createNew
                  ? 'bg-[#0076A8]/20 border-[#0076A8]/50 text-[#5BB8E8]'
                  : 'bg-transparent border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-300'
              )}
            >
              + Crear theme nuevo
            </button>
            <button
              onClick={() => { setCreateNew(false); if (themes.length === 0) loadThemes(); }}
              className={cn(
                'flex-1 py-2.5 rounded-lg border text-xs font-medium tracking-wide uppercase transition-all',
                !createNew
                  ? 'bg-[#0076A8]/20 border-[#0076A8]/50 text-[#5BB8E8]'
                  : 'bg-transparent border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-300'
              )}
            >
              Actualizar existente
            </button>
          </div>

          {/* Nombre si nuevo */}
          {createNew && (
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5">Nombre del theme</label>
              <input
                type="text"
                value={themeName}
                onChange={e => setThemeName(e.target.value)}
                className="w-full bg-zinc-800/80 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#0076A8]/60 transition-colors"
              />
            </div>
          )}

          {/* Selector de theme existente */}
          {!createNew && (
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5">
                Theme destino
                {phase === 'fetching_themes' && <Spinner size={12} />}
              </label>
              {themes.length > 0 ? (
                <select
                  value={selectedThemeId ?? ''}
                  onChange={e => setSelectedThemeId(Number(e.target.value))}
                  className="w-full bg-zinc-800/80 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#0076A8]/60 transition-colors"
                >
                  <option value="">— Seleccionar theme —</option>
                  {themes.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.name} {t.role === 'main' ? '(Activo)' : ''}
                    </option>
                  ))}
                </select>
              ) : (
                <button
                  onClick={loadThemes}
                  disabled={phase === 'fetching_themes'}
                  className="flex items-center gap-2 text-xs text-[#5BB8E8] hover:text-white transition-colors"
                >
                  {phase === 'fetching_themes' ? <Spinner size={12} /> : <RefreshCw size={12} />}
                  Cargar themes de la tienda
                </button>
              )}
            </div>
          )}

          {/* Publicar después */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <div
              onClick={() => setPublishAfter(!publishAfter)}
              className={cn(
                'w-8 h-4 rounded-full relative transition-colors cursor-pointer flex-shrink-0',
                publishAfter ? 'bg-[#0076A8]' : 'bg-zinc-700'
              )}
            >
              <div className={cn(
                'absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform',
                publishAfter ? 'translate-x-4' : 'translate-x-0.5'
              )} />
            </div>
            <div>
              <span className="text-xs text-zinc-300">Publicar al terminar</span>
              <p className="text-[10px] text-zinc-500">Reemplaza el theme activo. Solo si 0 errores.</p>
            </div>
          </label>

          {/* Advertencia publicar */}
          {publishAfter && (
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
              <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
              <span>Publicar reemplaza el theme activo en <strong>{shop}</strong>. Revisa siempre en preview primero.</span>
            </div>
          )}
        </div>
      )}

      {/* ── ARCHIVOS LIST (preview) ── */}
      {phase === 'idle' && (
        <button
          onClick={() => setShowFiles(!showFiles)}
          className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <FileCode2 size={13} />
          {THEME_FILE_COUNT} archivos incluidos
          {showFiles ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        </button>
      )}

      {showFiles && phase === 'idle' && (
        <div className="rounded-xl border border-white/5 overflow-hidden">
          {NEURONE_THEME_FILES.map((f, i) => (
            <div
              key={f.key}
              className={cn(
                'flex items-center justify-between px-3 py-2 text-xs',
                i % 2 === 0 ? 'bg-zinc-900/30' : 'bg-transparent',
                'border-b border-white/[0.03] last:border-0'
              )}
            >
              <span className="text-zinc-400 font-mono truncate">{f.key}</span>
              <span className="text-zinc-600 flex-shrink-0 ml-4">
                {(f.value.length / 1024).toFixed(1)}kb
              </span>
            </div>
          ))}
        </div>
      )}

      {/* ── BOTÓN DEPLOY ── */}
      {phase === 'idle' && (
        <button
          onClick={runDeploy}
          disabled={!createNew && !selectedThemeId}
          className={cn(
            'flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all',
            (!createNew && !selectedThemeId)
              ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
              : 'bg-[#0076A8] hover:bg-[#0095D4] text-white shadow-lg shadow-[#0076A8]/20 hover:shadow-[#0076A8]/40 hover:-translate-y-0.5'
          )}
        >
          <Upload size={16} />
          Deploy Theme Neurone
        </button>
      )}

      {/* ── PROGRESS ── */}
      {(phase === 'creating_theme' || phase === 'deploying') && (
        <div className="flex flex-col gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
          {/* Status header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Spinner size={16} />
              <span className="text-sm text-white font-medium">
                {phase === 'creating_theme' ? 'Creando theme...' : `Deployando archivos (${deployed}/${THEME_FILE_COUNT})`}
              </span>
            </div>
            <button
              onClick={() => { abortRef.current = true; }}
              className="text-xs text-zinc-500 hover:text-red-400 transition-colors"
            >
              Cancelar
            </button>
          </div>

          {/* Progress bar */}
          {phase === 'deploying' && (
            <div>
              <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0076A8] to-[#5BB8E8] rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-[10px] text-zinc-500">{progress}%</span>
                <span className="text-[10px] text-zinc-500">
                  {errors > 0 && <span className="text-red-400">{errors} error{errors > 1 ? 'es' : ''}</span>}
                </span>
              </div>
            </div>
          )}

          {/* File states */}
          <div className="max-h-56 overflow-y-auto flex flex-col gap-0.5 pr-1">
            {fileStates.map(fs => (
              <div
                key={fs.file.key}
                className={cn(
                  'flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors',
                  fs.status === 'pending' && 'bg-[#0076A8]/10',
                  fs.status === 'success' && 'text-green-300',
                  fs.status === 'error'   && 'text-red-300 bg-red-500/5',
                  fs.status === 'idle'    && 'text-zinc-600',
                )}
              >
                <StatusIcon status={fs.status} />
                <span className="font-mono truncate">{fs.file.key}</span>
                {fs.error && <span className="text-red-400 ml-auto text-[10px] flex-shrink-0 truncate max-w-[140px]">{fs.error}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── RESULTADO FINAL ── */}
      {phase === 'done' && (
        <div className="flex flex-col gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
          {/* Summary */}
          <div className="flex items-center gap-3">
            {errors === 0
              ? <CheckCircle2 size={22} className="text-green-400 flex-shrink-0" />
              : <AlertCircle size={22} className="text-amber-400 flex-shrink-0" />
            }
            <div>
              <p className="text-sm font-bold text-white">
                {errors === 0 ? 'Deploy completado ✓' : 'Deploy con errores'}
              </p>
              <p className="text-xs text-zinc-400">
                {deployed} archivo{deployed !== 1 ? 's' : ''} subido{deployed !== 1 ? 's' : ''}
                {errors > 0 && ` · ${errors} error${errors > 1 ? 'es' : ''}`}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2 rounded-lg bg-green-500/10 border border-green-500/20">
              <span className="block text-lg font-bold text-green-400">{statusCounts.success || 0}</span>
              <span className="text-[10px] uppercase tracking-wider text-green-600">Éxitos</span>
            </div>
            <div className="text-center p-2 rounded-lg bg-red-500/10 border border-red-500/20">
              <span className="block text-lg font-bold text-red-400">{statusCounts.error || 0}</span>
              <span className="text-[10px] uppercase tracking-wider text-red-600">Errores</span>
            </div>
            <div className="text-center p-2 rounded-lg bg-[#0076A8]/10 border border-[#0076A8]/20">
              <span className="block text-lg font-bold text-[#5BB8E8]">{THEME_FILE_COUNT}</span>
              <span className="text-[10px] uppercase tracking-wider text-[#0076A8]">Total</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2">
            {themeUrl && (
              <a
                href={themeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0076A8] hover:bg-[#0095D4] text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <Zap size={13} />
                Abrir Theme Editor
                <ExternalLink size={12} />
              </a>
            )}
            {previewUrl && (
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <Eye size={13} />
                Preview del Theme
                <ExternalLink size={12} />
              </a>
            )}
          </div>

          {/* Archivos con error */}
          {errors > 0 && (
            <div className="flex flex-col gap-1">
              <p className="text-[10px] uppercase tracking-widest text-red-400 font-bold">Archivos con error:</p>
              {fileStates.filter(fs => fs.status === 'error').map(fs => (
                <div key={fs.file.key} className="flex items-start gap-2 text-xs text-red-300 bg-red-500/5 rounded px-2 py-1.5">
                  <XCircle size={12} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono">{fs.file.key}</span>
                    {fs.error && <p className="text-[10px] text-red-400 mt-0.5">{fs.error}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 text-xs text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
          >
            <RotateCcw size={12} />
            Nuevo Deploy
          </button>
        </div>
      )}

      {/* ── LOG ── */}
      {log.length > 0 && (
        <div className="rounded-xl border border-white/5 overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 bg-zinc-900/60 border-b border-white/5">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Log</span>
            <span className="text-[10px] text-zinc-600">{log.length} entradas</span>
          </div>
          <div className="max-h-40 overflow-y-auto p-2 flex flex-col gap-0.5">
            {log.slice().reverse().map((entry, i) => (
              <p key={i} className={cn(
                'text-[10px] font-mono leading-relaxed',
                entry.includes('✓') ? 'text-green-500' :
                entry.includes('✗') ? 'text-red-400' :
                'text-zinc-500'
              )}>
                {entry}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* ── INFO FOOTER ── */}
      <div className="flex items-center gap-2 text-[10px] text-zinc-600 pt-1">
        <Globe size={11} />
        <span>Shop: <span className="text-zinc-500">{shop}</span></span>
        <span className="ml-auto flex items-center gap-1">
          <Package size={11} />
          {THEME_FILE_COUNT} archivos · Theme Custom v1.0
        </span>
      </div>
    </div>
  );
}
