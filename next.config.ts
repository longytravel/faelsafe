import type { NextConfig } from "next";

/**
 * Two deployment targets:
 *
 *  - Vercel (and `npm run dev`) — NEXT_PUBLIC_BASE_PATH is unset, so basePath is
 *    empty and the site serves from the domain root. Nothing special happens.
 *  - GitHub Pages — the workflow sets NEXT_PUBLIC_BASE_PATH=/faelsafe and
 *    STATIC_EXPORT=1, producing a static `out/` directory served from
 *    https://longytravel.github.io/faelsafe/.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "1"
    ? { output: "export" as const, trailingSlash: true }
    : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: { unoptimized: true },
};

export default nextConfig;
