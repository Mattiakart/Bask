#!/usr/bin/env node
/**
 * Adapt a Next.js static export for shared/Apache hosting:
 * - rename `_next` → `next` (many hosts hide or block underscored folders)
 * - rewrite asset URLs in HTML/CSS/JS
 * - add Apache helpers (DirectoryIndex, index.php fallback)
 * - also copy into public_html/ for hosts whose docroot is that folder
 */
import {
  cpSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync,
  existsSync,
  statSync,
} from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const OUT = join(ROOT, "out");
const STAGE = join(ROOT, ".deploy-stage");

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, files);
    else files.push(path);
  }
  return files;
}

function rewrite(content) {
  return content
    .replaceAll("/_next/", "/next/")
    .replaceAll('"_next/', '"next/')
    .replaceAll("'_next/", "'next/");
}

rmSync(STAGE, { recursive: true, force: true });
if (!existsSync(OUT)) {
  console.error("out/ missing — run: npm run build:static");
  process.exit(1);
}
cpSync(OUT, STAGE, { recursive: true });

const nextDir = join(STAGE, "_next");
if (!existsSync(nextDir)) {
  console.error("out/_next missing — static export incomplete");
  process.exit(1);
}
renameSync(nextDir, join(STAGE, "next"));

for (const file of walk(STAGE)) {
  if (!/\.(html|js|css|json|txt|xml|map)$/.test(file)) continue;
  const before = readFileSync(file, "utf8");
  const after = rewrite(before);
  if (after !== before) writeFileSync(file, after);
}

for (const file of walk(STAGE)) {
  const name = relative(STAGE, file);
  if (name.endsWith(".txt") && name !== "robots.txt" && name !== "sitemap.xml") {
    rmSync(file);
  }
}
rmSync(join(STAGE, "_not-found"), { recursive: true, force: true });

writeFileSync(
  join(STAGE, ".htaccess"),
  `# Bask static site — Apache / LiteSpeed
DirectoryIndex index.php index.html
Options -Indexes
ErrorDocument 404 /404.html

<IfModule mod_mime.c>
  AddType text/css .css
  AddType application/javascript .js
  AddType image/png .png
  AddType font/woff2 .woff2
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(js|css|woff2|png)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
`,
);

writeFileSync(
  join(STAGE, "index.php"),
  `<?php
header('Content-Type: text/html; charset=utf-8');
readfile(__DIR__ . '/index.html');
`,
);

writeFileSync(join(STAGE, ".nojekyll"), "");

writeFileSync(
  join(STAGE, "README.md"),
  `# Bask — hosting build

This branch is the **built website**, not the Next.js source.

## If you still see “Index of /” or “Not Found”

1. In the hosting panel, deploy branch **\`cursor/deploy-site-2cf4\`**.
2. Set the **document root** to one of:
   - the repository root, **or**
   - the \`public_html/\` folder inside this branch  
     (use this if your host always points the domain at \`public_html\`).
3. Redeploy / sync git, then hard-refresh the browser.

You should see \`index.html\` (and \`index.php\`) at the document root — not \`app/\` or \`package.json\`.
`,
);

const pub = join(STAGE, "public_html");
mkdirSync(pub, { recursive: true });
for (const name of readdirSync(STAGE)) {
  if (name === "public_html" || name === "README.md") continue;
  const src = join(STAGE, name);
  cpSync(src, join(pub, name), { recursive: statSync(src).isDirectory() });
}

console.log("Staged for hosting in .deploy-stage/");
console.log(
  "Root:",
  readdirSync(STAGE)
    .sort()
    .join(", "),
);
