// ── draftService.ts ───────────────────────────────────────────────────────────
// Guardar borrador — push output generado al repo Drafts en GitHub.
// Repo: unrealvillestudio-hub/Drafts
// Estructura:
//   drafts/{brandId}/{YYYY-MM}/{timestamp}_{pack}_{mode}.{ext}
//   drafts/{brandId}/{YYYY-MM}/meta_{timestamp}.json  ← metadata + estado
//
// ESTADOS: pending_approval → approved → delivered → archived
// El cliente aprueba cambiando el estado en el meta JSON (o via AgentLab).
// ─────────────────────────────────────────────────────────────────────────────

const DRAFTS_REPO_OWNER = 'unrealvillestudio-hub';
const DRAFTS_REPO_NAME  = 'Drafts';
const DRAFTS_BRANCH     = 'main';

export type DraftStatus = 'pending_approval' | 'approved' | 'delivered' | 'archived';

export interface DraftMeta {
  draftId:    string;
  brandId:    string;
  brandName:  string;
  packId:     string;
  packLabel:  string;
  module:     string;      // 'ecommerce' | 'landing' | 'web'
  outputMode: string;      // 'html' | 'liquid'
  themeId:    string | null;
  aggro:      boolean;
  language:   string;
  platform:   string;
  status:     DraftStatus;
  createdAt:  string;      // ISO
  expiresAt:  string;      // ISO — 7 days from creation
  contentPath: string;     // path to content file in repo
  sections:   number;
  generatedBy: string;     // 'WebLab v2.3'
}

function getFileExtension(mode: string): string {
  if (mode === 'html')   return 'html';
  if (mode === 'liquid') return 'liquid';
  return 'txt';
}

function buildDraftId(): string {
  return `draft_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

function b64(str: string): string {
  // btoa with unicode support
  return btoa(unescape(encodeURIComponent(str)));
}

async function githubPut(
  token: string,
  path: string,
  content: string,
  message: string
): Promise<{ sha: string; html_url: string }> {
  const url = `https://api.github.com/repos/${DRAFTS_REPO_OWNER}/${DRAFTS_REPO_NAME}/contents/${path}`;

  // Check if file exists (to get sha for update)
  let sha: string | undefined;
  try {
    const existing = await fetch(url + `?ref=${DRAFTS_BRANCH}`, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
    });
    if (existing.ok) {
      const data = await existing.json();
      sha = data.sha;
    }
  } catch { /* new file */ }

  const body: Record<string, unknown> = {
    message,
    content: b64(content),
    branch: DRAFTS_BRANCH,
  };
  if (sha) body.sha = sha;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub PUT failed ${res.status}: ${err}`);
  }

  const data = await res.json();
  return {
    sha:      data.content.sha,
    html_url: data.content.html_url,
  };
}

// ── Main export ───────────────────────────────────────────────────────────────

export interface SaveDraftParams {
  token:      string;
  brandId:    string;
  brandName:  string;
  packId:     string;
  packLabel:  string;
  module:     string;
  outputMode: string;
  themeId:    string | null;
  aggro:      boolean;
  language:   string;
  platform:   string;
  content:    string;    // full generated HTML/Liquid
  sections:   number;
}

export interface SaveDraftResult {
  draftId:     string;
  contentUrl:  string;
  metaUrl:     string;
  expiresAt:   string;
}

export async function saveDraft(params: SaveDraftParams): Promise<SaveDraftResult> {
  const {
    token, brandId, brandName, packId, packLabel,
    module, outputMode, themeId, aggro, language, platform,
    content, sections,
  } = params;

  const draftId  = buildDraftId();
  const now      = new Date();
  const expires  = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const monthDir = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const ext      = getFileExtension(outputMode);
  const ts       = now.toISOString().replace(/[:.]/g, '-').slice(0, 19);

  const contentPath = `drafts/${brandId}/${monthDir}/${ts}_${packId}_${outputMode}.${ext}`;
  const metaPath    = `drafts/${brandId}/${monthDir}/meta_${ts}_${packId}.json`;

  // 1. Push content file
  const contentResult = await githubPut(
    token,
    contentPath,
    content,
    `draft(${brandId}): ${packLabel} [${outputMode}] — ${draftId}`
  );

  // 2. Push metadata
  const meta: DraftMeta = {
    draftId,
    brandId,
    brandName,
    packId,
    packLabel,
    module,
    outputMode,
    themeId,
    aggro,
    language,
    platform,
    status:      'pending_approval',
    createdAt:   now.toISOString(),
    expiresAt:   expires.toISOString(),
    contentPath,
    sections,
    generatedBy: 'WebLab v2.3',
  };

  const metaResult = await githubPut(
    token,
    metaPath,
    JSON.stringify(meta, null, 2),
    `meta(${brandId}): ${packLabel} — ${draftId}`
  );

  return {
    draftId,
    contentUrl:  contentResult.html_url,
    metaUrl:     metaResult.html_url,
    expiresAt:   expires.toISOString(),
  };
}

/**
 * Update draft status — call from approval flow.
 * Reads existing meta, patches status, pushes back.
 */
export async function updateDraftStatus(
  token:    string,
  metaPath: string,
  status:   DraftStatus
): Promise<void> {
  const url = `https://api.github.com/repos/${DRAFTS_REPO_OWNER}/${DRAFTS_REPO_NAME}/contents/${metaPath}?ref=${DRAFTS_BRANCH}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) throw new Error(`Cannot fetch meta: ${res.status}`);
  const data = await res.json();
  const meta: DraftMeta = JSON.parse(atob(data.content.replace(/\n/g, '')));
  meta.status = status;

  await githubPut(token, metaPath, JSON.stringify(meta, null, 2),
    `status(${meta.brandId}): ${meta.packLabel} → ${status}`);
}
