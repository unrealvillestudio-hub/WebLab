// ============================================================
// UNRLVL WebLab — lib/supabaseClient.ts
// Configuración Supabase · fetch nativo (sin SDK)
// Mismo patrón que CopyLab — no instalar @supabase/supabase-js
// ============================================================

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('[WebLab] VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY no definidas')
}

export const SB_HEADERS = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
}

export async function sbFetch<T>(path: string): Promise<T[]> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, { headers: SB_HEADERS })
  if (!res.ok) {
    const msg = await res.text()
    throw new Error(`[sbFetch] ${path} → ${res.status}: ${msg}`)
  }
  return res.json() as Promise<T[]>
}
