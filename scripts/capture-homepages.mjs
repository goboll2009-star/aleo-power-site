import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = process.env.BASE_URL || "http://127.0.0.1:3000";
const pages = [
  ["/", "weup-homepage-concept-1-pharma.png"],
  ["/concept-2", "weup-homepage-concept-2-natural.png"],
  ["/concept-3", "weup-homepage-concept-3-conversion.png"]
];

await mkdir("exports", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 2400 },
  deviceScaleFactor: 1
});

for (const [path, filename] of pages) {
  await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
  await page.addStyleTag({
    content: ".concept-links{display:none!important}"
  });
  await page.evaluate((showMegaMenu) => {
    document.documentElement.classList.add("poster-mode");
    if (showMegaMenu) {
      document.documentElement.classList.add("show-mega-menu");
    }
  }, process.env.SHOW_MEGA_MENU === "1");
  await page.waitForTimeout(400);
  await page.screenshot({
    path: `exports/${filename}`,
    clip: { x: 0, y: 0, width: 1440, height: 2400 }
  });
}

await browser.close();
