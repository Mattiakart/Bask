import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type WaitlistEntry = {
  email: string;
  createdAt: string;
};

export type AddResult = "added" | "duplicate";

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
export const EMAIL_MAX_LENGTH = 254;

const storePath = () =>
  process.env.WAITLIST_STORE ??
  path.join(/* turbopackIgnore: true */ process.cwd(), "data", "waitlist.json");

/**
 * Writes are serialised so two submissions landing together can't clobber
 * each other during the read-modify-write cycle.
 */
let tail: Promise<unknown> = Promise.resolve();

function serialize<T>(task: () => Promise<T>): Promise<T> {
  const run = tail.then(task, task);
  tail = run.catch(() => undefined);
  return run;
}

async function readEntries(): Promise<WaitlistEntry[]> {
  try {
    const parsed: unknown = JSON.parse(await readFile(storePath(), "utf8"));
    return Array.isArray(parsed) ? (parsed as WaitlistEntry[]) : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string): boolean {
  return email.length <= EMAIL_MAX_LENGTH && EMAIL_PATTERN.test(email);
}

export function addToWaitlist(email: string): Promise<AddResult> {
  const normalized = normalizeEmail(email);

  return serialize(async () => {
    const entries = await readEntries();
    if (entries.some((entry) => entry.email === normalized)) return "duplicate";

    entries.push({ email: normalized, createdAt: new Date().toISOString() });

    const file = storePath();
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, `${JSON.stringify(entries, null, 2)}\n`, "utf8");

    return "added";
  });
}
