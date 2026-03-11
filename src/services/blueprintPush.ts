// ── blueprintPush.ts ──────────────────────────────────────────────────────────
// Pushes description_enhanced back to BluePrints repo via GitHub API

const REPO_OWNER = 'unrealvillestudio-hub';
const REPO_NAME  = 'BluePrints';
const BRANCH     = 'main';

interface PushResult {
  ok: boolean;
  message: string;
  commitUrl?: string;
}

async function getFileSha(token: string, path: string): Promise<string | null> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`,
    { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.sha ?? null;
}

export async function pushEnhancedDescription(opts: {
  token: string;
  productId: string;      // e.g. "neurone_humit_shampoo"
  brandId: string;        // e.g. "neuroneCosmetics"
  enhancedText: string;
  existingJson: object;
  filePath: string;       // e.g. "products/BP_PRODUCT_Neurone_HUMIT-SHAMPOO_1.0.json"
}): Promise<PushResult> {
  const { token, filePath, enhancedText, existingJson } = opts;

  try {
    const sha = await getFileSha(token, filePath);
    if (!sha) {
      return { ok: false, message: `Archivo no encontrado en repo: ${filePath}` };
    }

    const updated = { ...existingJson, description_enhanced: enhancedText };
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(updated, null, 2))));

    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `feat(BP): description_enhanced → ${opts.productId}`,
          content,
          sha,
          branch: BRANCH,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      return { ok: false, message: err.message ?? `HTTP ${res.status}` };
    }

    const data = await res.json();
    return {
      ok: true,
      message: 'description_enhanced pusheado correctamente',
      commitUrl: data.commit?.html_url,
    };
  } catch (e: any) {
    return { ok: false, message: e.message ?? 'Error de red' };
  }
}

// Build the GitHub file path from product id + file naming convention
// e.g. neurone_humit_shampoo → products/BP_PRODUCT_Neurone_HUMIT-SHAMPOO_1.0.json
export function productIdToFilePath(productId: string): string {
  // Product ids follow pattern: neurone_<name_with_underscores>
  // File names: BP_PRODUCT_Neurone_<NAME-WITH-DASHES>_1.0.json
  const parts = productId.split('_'); // ['neurone', 'humit', 'shampoo']
  const brand = parts[0].charAt(0).toUpperCase() + parts[0].slice(1); // Neurone
  const rest  = parts.slice(1).join('-').toUpperCase(); // HUMIT-SHAMPOO
  return `products/BP_PRODUCT_${brand}_${rest}_1.0.json`;
}

export function collectionIdToFilePath(collectionId: string, brandId: string): string {
  // For future BP_COLLECTION files
  const brand = brandId.replace('Cosmetics', '').replace(/([A-Z])/g, (_, c) => c);
  return `collections/BP_COLLECTION_${brand}_${collectionId.toUpperCase()}_1.0.json`;
}
