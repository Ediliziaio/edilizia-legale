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

import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
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

/**
 * `lastmod` reale, non la data "di copertina" dell'articolo.
 *
 * Google usa lastmod solo se lo trova coerente nel tempo: una sitemap dove 49
 * guide dichiarano tutte la stessa data e' un segnale che viene ignorato. Le
 * guide prendono la data dell'ultimo commit del file, gia' calcolata in modo
 * shallow-safe dal generatore dell'indice; FAQ e pagine statiche la leggono
 * da git quando la storia c'e', altrimenti riusano il valore della sitemap
 * precedente (committata), cosi' un clone shallow non le fa "cambiare tutte".
 */
const updatedAtPerSlug = new Map();
try {
  const idx = readFileSync(join(root, "src/data/articlesMeta.ts"), "utf-8");
  for (const m of idx.matchAll(/"slug":\s*"([^"]+)"[\s\S]*?"updatedAt":\s*(?:"([^"]*)"|null)/g)) {
    if (m[2]) updatedAtPerSlug.set(m[1], m[2]);
  }
} catch { /* indice non ancora generato */ }

let storiaCompleta = false;
try {
  storiaCompleta =
    execFileSync("git", ["rev-parse", "--is-shallow-repository"], { encoding: "utf-8" }).trim() === "false";
} catch { /* nessun git */ }

const dataGit = (relPath) => {
  if (!storiaCompleta) return null;
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs", "--", relPath], { cwd: root, encoding: "utf-8" }).trim() || null;
  } catch { return null; }
};

/** loc -> lastmod della sitemap precedente, per i cloni shallow. */
const lastmodPrecedente = new Map();
for (const f of ["sitemap-pagine.xml", "sitemap-guide.xml", "sitemap-faq.xml", "sitemap.xml"]) {
  const fp = join(root, "public", f);
  if (!existsSync(fp)) continue;
  const xml = readFileSync(fp, "utf-8");
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) {
    if (!lastmodPrecedente.has(m[1])) lastmodPrecedente.set(m[1], m[2]);
  }
}

/** Data migliore disponibile per una URL, con la sua fonte sorgente su disco. */
const lastmodDi = (loc, relPath, fallback) =>
  dataGit(relPath) ?? lastmodPrecedente.get(loc) ?? fallback;

const articleDir = join(root, "src/data/articles");
const articleFiles = readdirSync(articleDir).filter((f) => f.endsWith(".ts")).sort();

const articoli = articleFiles.map((f) => {
  const slug = f.replace(/\.ts$/, "");
  const src = readFileSync(join(articleDir, f), "utf-8");
  const date = /date:\s*"([^"]+)"/.exec(src)?.[1];
  const title = /title:\s*"((?:[^"\\]|\\.)*)"/.exec(src)?.[1]?.replace(/\\"/g, '"');
  return { slug, lastmod: updatedAtPerSlug.get(slug) ?? dataISO(date), title };
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

/** File sorgente di ogni pagina statica, per leggerne la data reale. */
const sorgentePagina = {
  "/": "src/pages/Index.tsx",
  "/imprese": "src/pages/Imprese.tsx",
  "/privati": "src/pages/Privati.tsx",
  "/guide": "src/pages/Guide.tsx",
  "/domande-frequenti": "src/pages/DomandeFrequenti.tsx",
  "/studio": "src/pages/Studio.tsx",
  "/studio/conflitti-di-interesse": "src/pages/ConflittiInteresse.tsx",
  "/contatti": "src/pages/Contatti.tsx",
  "/privacy": "src/pages/Privacy.tsx",
  "/cookie": "src/pages/CookiePolicy.tsx",
  "/note-legali": "src/pages/NoteLegali.tsx",
};

const piuRecente = (...d) => d.filter(Boolean).sort().at(-1) ?? today;

const urlPagine = staticPages.map(([path, changefreq, priority]) => {
  const loc = `${BASE}${path}`;
  // gli hub elencano contenuti: cambiano quando cambia il contenuto piu' recente O la pagina stessa
  const propria = lastmodDi(loc, sorgentePagina[path], null);
  const lastmod = lastmodHub[path] ? piuRecente(lastmodHub[path], propria) : (propria ?? lastmodPrecedente.get(loc) ?? today);
  return { loc, lastmod, changefreq, priority };
});

const lastmodFaq = lastmodDi(`${BASE}/domande-frequenti`, "src/data/faq.ts", lastmodContenuti);

const urlGuide = articoli.map((a) => ({
  loc: `${BASE}/guide/${a.slug}`,
  lastmod: a.lastmod,
  changefreq: "monthly",
  priority: "0.7",
  images: (immaginiPerSlug.get(a.slug) ?? []).map((i) => ({
    loc: `${BASE}${i.path}`,
    title: i.alt ?? a.title,
  })),
}));

const urlFaq = faqSlugs.map((slug) => ({
  loc: `${BASE}/domande-frequenti/${slug}`,
  lastmod: lastmodFaq,
  changefreq: "monthly",
  priority: "0.6",
}));

const urls = [
  ...urlPagine,
  ...urlGuide,
  ...urlFaq,
];

const renderUrl = (u) => {
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
};

const urlset = (lista) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
  `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${lista.map(renderUrl).join("\n")}\n</urlset>\n`;

/**
 * Sitemap index con tre sezioni: Search Console riporta copertura ed errori
 * per file, quindi si vede subito se e' un problema delle guide, delle FAQ o
 * delle pagine istituzionali. Con un unico urlset i numeri si mescolano.
 */
const sezioni = [
  ["sitemap-pagine.xml", urlPagine],
  ["sitemap-guide.xml", urlGuide],
  ["sitemap-faq.xml", urlFaq],
];
for (const [nome, lista] of sezioni) writeFileSync(join(root, "public", nome), urlset(lista), "utf-8");

const indice =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sezioni
    .map(([nome, lista]) => {
      const lm = lista.map((u) => u.lastmod).sort().at(-1) ?? today;
      return `  <sitemap>\n    <loc>${BASE}/${nome}</loc>\n    <lastmod>${lm}</lastmod>\n  </sitemap>`;
    })
    .join("\n") +
  `\n</sitemapindex>\n`;
writeFileSync(join(root, "public/sitemap.xml"), indice, "utf-8");

const nImg = urls.reduce((n, u) => n + (u.images?.length ?? 0), 0);
const dateDistinte = new Set(urls.map((u) => u.lastmod)).size;
console.log(
  `[sitemap] index + 3 sezioni: ${urls.length} URL (${articoli.length} guide, ${faqSlugs.length} FAQ), ${nImg} immagini, ${dateDistinte} lastmod distinti`,
);
