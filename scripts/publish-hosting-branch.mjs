#!/usr/bin/env node
/**
 * Force-push `.deploy-stage/` as an orphan commit onto a hosting branch.
 * OVH (and similar shared hosts) serve that branch with no npm.
 *
 * Usage: node scripts/publish-hosting-branch.mjs <branch-name> [label]
 */
import { execFileSync, execSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const branch = process.argv[2];
const label = process.argv[3] || branch;

if (!branch) {
  console.error("Usage: node scripts/publish-hosting-branch.mjs <branch> [label]");
  process.exit(1);
}

/** Embed Actions credentials so orphan-repo force-pushes can authenticate. */
function authenticatedRemote(url) {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) return url;

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return url;
    parsed.username = "x-access-token";
    parsed.password = token;
    return parsed.href;
  } catch {
    return url;
  }
}

const stage = join(process.cwd(), ".deploy-stage");
if (!existsSync(stage)) {
  console.error(".deploy-stage missing — run: npm run build:hosting");
  process.exit(1);
}

const remote = authenticatedRemote(
  execSync("git remote get-url origin", { encoding: "utf8" }).trim(),
);
const work = mkdtempSync(join(tmpdir(), "bask-hosting-"));

try {
  execFileSync("git", ["init", "-b", branch], { cwd: work, stdio: "inherit" });
  execFileSync("git", ["config", "user.email", "github-actions[bot]@users.noreply.github.com"], {
    cwd: work,
  });
  execFileSync("git", ["config", "user.name", "github-actions[bot]"], { cwd: work });
  // Avoid leaking the token in CI logs if git prints the remote URL.
  execFileSync("git", ["config", "remote.origin.prompt", "false"], { cwd: work });
  execFileSync("git", ["remote", "add", "origin", remote], { cwd: work });

  cpSync(stage, work, { recursive: true });

  writeFileSync(
    join(work, "README.md"),
    `# Bask — ${label}

This branch is the **built website** (HTML/CSS/JS only). No \`npm install\` or
\`npm run build\` is required — shared hosts like OVH can serve it as-is.

## OVH setup

1. Deploy / pull this branch: \`${branch}\`
2. Set the **document root** to the repository root **or** \`public_html/\`
3. Sync git, then hard-refresh the browser

You should see \`index.html\` / \`index.php\` at the document root — never
\`package.json\`, \`app/\`, or \`components/\`.
`,
  );

  execFileSync("git", ["add", "-A"], { cwd: work, stdio: "inherit" });
  execFileSync("git", ["commit", "-m", `Publish ${label} static site`], {
    cwd: work,
    stdio: "inherit",
  });
  execFileSync("git", ["push", "-f", "-u", "origin", branch], {
    cwd: work,
    stdio: "inherit",
  });

  console.log(`Published ${branch}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
