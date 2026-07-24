import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const BASE = process.env.SHOOT_BASE ?? "http://localhost:3100";
const OUT = process.env.SHOOT_OUT ?? "/tmp/shots";

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 960 },
  { name: "mobile", width: 390, height: 844 },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const errors = [];

for (const viewport of VIEWPORTS) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 2,
  });
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`[${viewport.name}] ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`[${viewport.name}] ${error.message}`));

  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${OUT}/${viewport.name}-fold.png` });

  // Walk the page a viewport at a time so scroll-driven reveals settle.
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const screens = Math.ceil(height / viewport.height);
  for (let index = 1; index < screens; index += 1) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), index * viewport.height);
    await page.waitForTimeout(350);
    await page.screenshot({ path: `${OUT}/${viewport.name}-scroll-${index}.png` });
  }

  console.log(`${viewport.name}: page height ${height}px, ${screens} screens`);

  await page.close();
}

const page = await browser.newPage({ viewport: { width: 1440, height: 960 }, deviceScaleFactor: 2 });
await page.goto(BASE, { waitUntil: "networkidle" });

const section = page.locator("#waitlist");
await section.scrollIntoViewIfNeeded();
await section.getByRole("textbox").fill(`shoot-${Date.now()}@example.com`);
await section.getByRole("button", { name: /waitlist/i }).click();
await section.getByRole("status").waitFor({ timeout: 5000 });
await page.waitForTimeout(600);
await section.screenshot({ path: `${OUT}/waitlist-success.png` });
console.log(`waitlist success: ${(await section.getByRole("status").innerText()).replace(/\n/g, " ")}`);
await page.close();

await browser.close();

if (errors.length) {
  console.error("\nBROWSER ERRORS:\n" + errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("no browser errors");
}
