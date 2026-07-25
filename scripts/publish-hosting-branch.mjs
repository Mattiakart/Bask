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

/** Match actions/checkout: auth via extraheader so the token never sits in the remote URL. */
function gitAuthEnv() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) return {};

  const basic = Buffer.from(`x-access-token:${token}`, "utf8").toString("base64");
  return {
    GIT_CONFIG_COUNT: "1",
    GIT_CONFIG_KEY_0: "http.https://github.com/.extraheader",
    GIT_CONFIG_VALUE_0: `AUTHORIZATION: basic ${basic}`,
  };
}

/** Strip embedded credentials; push auth comes from gitAuthEnv(). */
function cleanRemote(url) {
  try {
    const parsed = new URL(url);
    parsed.username = "";
    parsed.password = "";
    return parsed.href.replace(/\/$/, "");
  } catch {
    return url;
  }
}

const stage = join(process.cwd(), ".deploy-stage");
if (!existsSync(stage)) {
  console.error(".deploy-stage missing — run: npm run build:hosting");
  process.exit(1);
}

const remote = cleanRemote(execSync("git remote get-url origin", { encoding: "utf8" }).trim());
const work = mkdtempSync(join(tmpdir(), "bask-hosting-"));
const env = { ...process.env, ...gitAuthEnv() };

try {
  execFileSync("git", ["init", "-b", branch], { cwd: work, stdio: "inherit", env });
  execFileSync("git", ["config", "user.email", "github-actions[bot]@users.noreply.github.com"], {
    cwd: work,
    env,
  });
  execFileSync("git", ["config", "user.name", "github-actions[bot]"], { cwd: work, env });

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

  execFileSync("git", ["add", "-A"], { cwd: work, stdio: "inherit", env });
  execFileSync("git", ["commit", "-m", `Publish ${label} static site`], {
    cwd: work,
    stdio: "inherit",
    env,
  });
  // Push by URL (no `git remote add`) so runner git config can't collide with origin.
  execFileSync("git", ["push", "-f", remote, `HEAD:refs/heads/${branch}`], {
    cwd: work,
    stdio: "inherit",
    env,
  });

  console.log(`Published ${branch}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
