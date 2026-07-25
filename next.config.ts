import type { NextConfig } from "next";

/**
 * Two shapes of build:
 *
 * - default: a Node server (`next start`), where the waitlist endpoint runs.
 * - `STATIC_EXPORT=true`: plain files in `out/` for any static host. A static
 *   host cannot answer a POST, so the endpoint is left out of this build and
 *   the form posts to `NEXT_PUBLIC_WAITLIST_ENDPOINT` instead.
 *
 * The endpoint lives in `route.node.ts`, so dropping that extension from
 * `pageExtensions` is what excludes it.
 */
const staticExport = process.env.STATIC_EXPORT === "true";

if (staticExport && !process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT) {
  console.warn(
    "\n  ⚠  STATIC_EXPORT without NEXT_PUBLIC_WAITLIST_ENDPOINT.\n" +
      "     The page will deploy, but the waitlist form has nowhere to post and\n" +
      "     will report an error to anyone who uses it. See README → Deploying.\n",
  );
}

const nextConfig: NextConfig = {
  pageExtensions: staticExport
    ? ["tsx", "ts", "jsx", "js"]
    : ["node.ts", "tsx", "ts", "jsx", "js"],
  ...(staticExport
    ? {
        output: "export",
        // Serving from a subdirectory, e.g. user.github.io/repo.
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
      }
    : {}),
};

export default nextConfig;
