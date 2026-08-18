// Auto-generates public/sitemap.xml from the real routes so it never drifts.
// Runs automatically before every build (see the "prebuild" npm script).
// Article slugs derive from src/data/articles/ (filename = slug);
// FAQ slugs derive from src/data/faq.ts.
//
// Due cose che valgono per il posizionamento e che una sitemap generica non fa:
//  - `lastmod` per URL è la data reale del contenuto, non quella della build.
//    Una sitemap in cui 73 pagine cambiano tutte insieme ogni volta è rumore,
//    e Google smette di fidarsi del segnale.
//  - le guide dichiarano le proprie immagini con l'estensione image-sitemap:
//    è il canale con cui le copertine entrano in Google Immagini.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const BASE = "https://www.edilizialegale.it";
const today = new Date().toISOString().slice(0, 10);

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// path, changefreq, priority
const staticPages = [
  ["/", "weekly", "1.0"],
  ["/imprese", "weekly", "0.9"],
  ["/privati", "weekly", "0.9"],
  ["/guide", "weekly", "0.8"],
  ["/domande-frequenti", "weekly", "0.8"],
  ["/studio", "monthly", "0.7"],
  ["/studio/conflitti-di-interesse", "yearly", "0.5"],
  ["/contatti", "monthly", "0.7"],
  ["/privacy", "yearly", "0.3"],
  ["/cookie", "yearly", "0.3"],
  ["/note-legali", "yearly", "0.3"],
];

const MESI = {
  gennaio: "01", febbraio: "02", marzo: "03", aprile: "04", maggio: "05", giugno: "06",
  luglio: "07", agosto: "08", settembre: "09", ottobre: "10", novembre: "11", dicembre: "12",
};

/** "Agosto 2026" -> "2026-08-01". Se non si riesce a leggere, si usa la data di build. */
const dataISO = (leggibile) => {
  const m = /^([A-Za-zì]+)\s+(\d{4})$/.exec(String(leggibile ?? "").trim());
  const mese = m && MESI[m[1].toLowerCase()];
  return mese ? `${m[2]}-${mese}-01` : today;
};

const articleDir = join(root, "src/data/articles");
const articleFiles = readdirSync(articleDir).filter((f) => f.endsWith(".ts")).sort();

const articoli = articleFiles.map((f) => {
  const slug = f.replace(/\.ts$/, "");
  const src = readFileSync(join(articleDir, f), "utf-8");
  const date = /date:\s*"([^"]+)"/.exec(src)?.[1];
  const title = /title:\s*"((?:[^"\\]|\\.)*)"/.exec(src)?.[1]?.replace(/\\"/g, '"');
  return { slug, lastmod: dataISO(date), title };
});

// Immagini realmente collegate, dal registro degli slot.
const immaginiFile = readFileSync(join(root, "src/data/articleImages.ts"), "utf-8");
// Solo il corpo di `articleImages`: il file contiene anche la mappa dei testi
// alternativi, che ha la stessa forma e finirebbe in sitemap come URL inventate.
const daQui = immaginiFile.indexOf("export const articleImages:");
const immaginiSrc = daQui === -1 ? "" : immaginiFile.slice(daQui, immaginiFile.indexOf("\n};", daQui));
// I testi alternativi, che descrivono la singola scena: come didascalia in
// sitemap valgono piu' del titolo dell'articolo ripetuto su tre immagini.
const daAlt = immaginiFile.indexOf("export const articleImageAlt:");
const altSrc = daAlt === -1 ? "" : immaginiFile.slice(daAlt, immaginiFile.indexOf("\n};", daAlt));
const altPerSlot = new Map();
for (const m of altSrc.matchAll(/"([a-z0-9-]+)":\s*"((?:[^"\\]|\\.)*)"/g)) {
  altPerSlot.set(m[1], m[2].replace(/\\"/g, '"'));
}

const immaginiPerSlug = new Map();
for (const m of immaginiSrc.matchAll(/"([a-z0-9-]+)":\s*"([^"]+)"/g)) {
  const [, slot, path] = m;
  const slug = slot.replace(/-(cover|\d+)$/, "");
  if (!immaginiPerSlug.has(slug)) immaginiPerSlug.set(slug, []);
  immaginiPerSlug.get(slug).push({ path, alt: altPerSlot.get(slot) });
}

// slug FAQ estratti dal data file (slug: "...")
const faqSource = readFileSync(join(root, "src/data/faq.ts"), "utf-8");
const faqSlugs = [...faqSource.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);

// La data dei contenuti più recente vale per gli hub che li elencano.
const lastmodContenuti = articoli.reduce((max, a) => (a.lastmod > max ? a.lastmod : max), "1970-01-01");
const lastmodHub = { "/": lastmodContenuti, "/guide": lastmodContenuti, "/imprese": lastmodContenuti, "/privati": lastmodContenuti, "/domande-frequenti": lastmodContenuti };

const urls = [
  ...staticPages.map(([path, changefreq, priority]) => ({
    loc: `${BASE}${path}`,
    lastmod: lastmodHub[path] ?? today,
    changefreq,
    priority,
  })),
  ...articoli.map((a) => ({
    loc: `${BASE}/guide/${a.slug}`,
    lastmod: a.lastmod,
    changefreq: "monthly",
    priority: "0.7",
    images: (immaginiPerSlug.get(a.slug) ?? []).map((i) => ({
      loc: `${BASE}${i.path}`,
      title: i.alt ?? a.title,
    })),
  })),
  ...faqSlugs.map((slug) => ({
    loc: `${BASE}/domande-frequenti/${slug}`,
    lastmod: lastmodContenuti,
    changefreq: "monthly",
    priority: "0.6",
  })),
];

const body = urls
  .map((u) => {
    const img = (u.images ?? [])
      .map(
        (i) =>
          `\n    <image:image>\n      <image:loc>${esc(i.loc)}</image:loc>` +
          (i.title ? `\n      <image:title>${esc(i.title)}</image:title>` : "") +
          `\n    </image:image>`,
      )
      .join("");
    return (
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>` +
      `\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>${img}\n  </url>`
    );
  })
  .join("\n");

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
  `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${body}\n</urlset>\n`;

writeFileSync(join(root, "public/sitemap.xml"), xml, "utf-8");

const nImg = urls.reduce((n, u) => n + (u.images?.length ?? 0), 0);
console.log(
  `[sitemap] ${urls.length} URL (${articoli.length} guide, ${faqSlugs.length} FAQ), ${nImg} immagini dichiarate`,
);
