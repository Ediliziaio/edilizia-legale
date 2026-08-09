// Genera src/data/articlesMeta.ts e src/data/articleSeo.ts a partire dai
// moduli in src/data/articles/*.ts (ognuno esporta meta, seo, article).
// Eseguito in prebuild, prima del sitemap.
import { build } from "esbuild";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "src/data/articles");

// Ordine editoriale: prima i pilastri, poi i cluster, poi i verticali.
const ORDER = [
  "recupero-crediti-edilizia",
  "difetti-costruttivi-casa-nuova",
  "annullare-contratto-impresa-edile",
  "accertamento-superbonus-imprese",
  "contratto-appalto-impresa",
  "impresa-sparita-cantiere-abbandonato",
  "sal-non-pagato",
  "subappaltatore-non-pagato",
  "committente-contesta-i-lavori",
  "durc-irregolare",
  "varianti-in-corso-opera",
  "ritenuta-a-garanzia",
  "reverse-charge-edilizia",
  "opposizione-decreto-ingiuntivo-impresa-edile",
  "preventivo-sforato",
  "ritardo-consegna-lavori",
  "infissi-montati-male",
  "fotovoltaico-non-produce",
  "recesso-contratto-fotovoltaico",
  "cappotto-termico-difettoso",
  "cucina-su-misura-difettosa",
  "terrazzo-infiltrazioni",
  "pompa-di-calore-non-scalda",
  "piscina-difetti-costruttore",
];

const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));
const entries = [];

for (const f of files) {
  const full = path.join(dir, f);
  const result = await build({
    entryPoints: [full],
    bundle: false,
    format: "esm",
    write: false,
    platform: "neutral",
  });
  const code = result.outputFiles[0].text;
  const mod = await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
  const slug = f.replace(/\.ts$/, "");
  if (!mod.meta || !mod.article) throw new Error(`${f}: export meta/article mancante`);
  if (mod.meta.slug !== slug) throw new Error(`${f}: slug "${mod.meta.slug}" != filename`);
  if (!mod.seo?.seoTitle || !mod.seo?.metaDescription) throw new Error(`${f}: export seo mancante`);
  const figures = (mod.article.content ?? [])
    .filter((b) => b?.type === "figure")
    .map((b) => ({ slot: b.slot, alt: b.alt }));
  entries.push({ slug, meta: mod.meta, seo: mod.seo, figures });
}

entries.sort((a, b) => {
  const ia = ORDER.indexOf(a.slug);
  const ib = ORDER.indexOf(b.slug);
  return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
});

const missing = entries.filter((e) => !ORDER.includes(e.slug)).map((e) => e.slug);
if (missing.length) console.warn("Slug non in ORDER (accodati):", missing.join(", "));

const metaOut = `// AUTO-GENERATO da scripts/generate-article-index.mjs — non modificare a mano.
// Metadata leggeri per listing/related/categorie. Il contenuto completo vive in
// ./articles/<slug>.ts ed è caricato in lazy.
import type { ArticleMeta } from "./articles";

export const articlesMeta: ArticleMeta[] = ${JSON.stringify(entries.map((e) => e.meta), null, 2)};
`;

const seoOut = `// AUTO-GENERATO da scripts/generate-article-index.mjs — non modificare a mano.
// Title SERP (≤60 char) e meta description (≤155) per ogni guida.
export type ArticleSeo = {
  seoTitle: string;
  metaDescription: string;
};

export const ARTICLE_SEO: Record<string, ArticleSeo> = ${JSON.stringify(
  Object.fromEntries(entries.map((e) => [e.slug, e.seo])),
  null,
  2,
)};

export const getArticleSeo = (slug: string): ArticleSeo | undefined => ARTICLE_SEO[slug];
`;

// --- Manifest delle immagini degli articoli -------------------------------
// Rigenerato a ogni build: i nuovi slot entrano a null, i percorsi già
// collegati a mano vengono preservati.
const imagesPath = path.join(root, "src/data/articleImages.ts");
const existing = {};
try {
  // Riga per riga, saltando i commenti: un esempio dentro un commento non
  // deve essere scambiato per un percorso realmente collegato.
  for (const line of readFileSync(imagesPath, "utf-8").split("\n")) {
    const code = line.trim();
    if (code.startsWith("//") || code.startsWith("*") || code.startsWith("/*")) continue;
    const m = code.match(/^"([^"]+)":\s*(?:"([^"]*)"|null),?$/);
    if (m) existing[m[1]] = m[2] ?? null;
  }
} catch {
  /* primo giro: il file non esiste ancora */
}

const figureLines = [];
let pending = 0;
for (const e of entries) {
  if (!e.figures.length) continue;
  figureLines.push(`\n  // ${e.slug}`);
  for (const fig of e.figures) {
    const val = existing[fig.slot] ?? null;
    if (val == null) pending++;
    figureLines.push(`  // ${fig.alt}`);
    figureLines.push(`  ${JSON.stringify(fig.slot)}: ${val == null ? "null" : JSON.stringify(val)},`);
  }
}

const imagesOut = `// AUTO-GENERATO da scripts/generate-article-index.mjs — i percorsi già
// scritti vengono preservati a ogni rigenerazione, quindi puoi editarli qui.
//
// LISTA DELLE IMMAGINI DA PRODURRE: ogni slot a \`null\` mostra in pagina un
// segnaposto con il brief (il commento qui sopra ciascuna riga).
//
// Per collegare una foto:
//   1. metti il file in  public/images/guide/
//   2. sostituisci null con il percorso, es. "/images/guide/<slot>.jpg"
//
// Formato consigliato: 16/9, larghezza minima 1200px, WebP o JPG sotto i 250 kB.
export const articleImages: Record<string, string | null> = {${figureLines.join("\n")}
};

export const getArticleImage = (slot: string): string | null => articleImages[slot] ?? null;
`;

writeFileSync(imagesPath, imagesOut);
writeFileSync(path.join(root, "src/data/articlesMeta.ts"), metaOut);
writeFileSync(path.join(root, "src/data/articleSeo.ts"), seoOut);
console.log(`OK: ${entries.length} articoli indicizzati.`);
const totalSlots = entries.reduce((n, e) => n + e.figures.length, 0);
console.log(`Immagini articoli: ${totalSlots} slot, ${totalSlots - pending} collegate, ${pending} da produrre.`);
for (const e of entries) {
  const t = e.seo.seoTitle.length;
  const d = e.seo.metaDescription.length;
  if (t > 62) console.warn(`  seoTitle lungo (${t}): ${e.slug}`);
  if (d > 158) console.warn(`  metaDescription lunga (${d}): ${e.slug}`);
}
