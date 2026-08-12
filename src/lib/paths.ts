/**
 * Base path helper.
 *
 * On Vercel (and locally) this is empty, so every path stays root-relative and
 * nothing changes. On GitHub Pages the site is served from /faelsafe/, so the
 * build sets NEXT_PUBLIC_BASE_PATH and every hand-written link and image src
 * gets prefixed.
 *
 * Next rewrites its own /_next/ assets via basePath/assetPrefix in
 * next.config.ts. It does NOT rewrite plain <a href> or <img src>, which is
 * what this is for.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix an absolute, root-relative path with the deployment base path. */
export const p = (path: string): string =>
  path.startsWith("/") ? `${BASE_PATH}${path}` : path;
