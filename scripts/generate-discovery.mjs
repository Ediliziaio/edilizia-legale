// Genera i due file con cui il sito si fa scoprire da chi non passa dalla
// navigazione: public/llms.txt (motori generativi) e public/feed.xml (RSS).
//
// Prima llms.txt era scritto a mano ed elencava 14 guide su 43: due terzi del
// patrimonio editoriale non erano dichiarati a nessun motore di risposta.
// Ora si rigenera a ogni build dai dati, quindi non può più restare indietro.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const BASE = "https://www.edilizialegale.it";

const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const MESI = {
  gennaio: 0, febbraio: 1, marzo: 2, aprile: 3, maggio: 4, giugno: 5,
  luglio: 6, agosto: 7, settembre: 8, ottobre: 9, novembre: 10, dicembre: 11,
};

const dataRFC = (leggibile) => {
  const m = /^([A-Za-zì]+)\s+(\d{4})$/.exec(String(leggibile ?? "").trim());
  const mese = m ? MESI[m[1].toLowerCase()] : undefined;
  const d = mese === undefined ? new Date() : new Date(Date.UTC(Number(m[2]), mese, 1));
  return d.toUTCString();
};

// --- lettura articoli -------------------------------------------------------
const dir = join(root, "src/data/articles");
const articoli = readdirSync(dir)
  .filter((f) => f.endsWith(".ts"))
  .map((f) => {
    const src = readFileSync(join(dir, f), "utf-8");
    const campo = (nome) =>
      new RegExp(`${nome}:\\s*"((?:[^"\\\\]|\\\\.)*)"`).exec(src)?.[1]?.replace(/\\"/g, '"');
    return {
      slug: f.replace(/\.ts$/, ""),
      title: campo("title"),
      excerpt: campo("excerpt"),
      category: campo("category"),
      date: campo("date"),
    };
  })
  .filter((a) => a.title);

const CATEGORIE = [
  ["Imprese", "Imprese edili, appaltatori e subappaltatori"],
  ["Privati", "Committenti, acquirenti e condòmini"],
  ["Tributario", "Fisco di cantiere e crediti d'imposta"],
  ["Verticali", "Contenziosi di settore"],
];

// --- FAQ --------------------------------------------------------------------
const faqSrc = readFileSync(join(root, "src/data/faq.ts"), "utf-8");
const faq = [];
{
  const slugs = [...faqSrc.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
  const domande = [...faqSrc.matchAll(/^\s*question:\s*"((?:[^"\\]|\\.)*)"/gm)].map((m) =>
    m[1].replace(/\\"/g, '"'),
  );
  for (let i = 0; i < slugs.length; i++) faq.push({ slug: slugs[i], question: domande[i] ?? slugs[i] });
}

// --- llms.txt ---------------------------------------------------------------
const righe = [
  "# Edilizia Legale",
  "",
  "> Studio legale italiano specializzato in diritto dell'edilizia. Assiste imprese",
  "> edili su appalti, subappalti, recupero crediti e contenzioso tributario, e",
  "> privati nei contenziosi con imprese di costruzione. Le due parti non vengono",
  "> mai assistite nella stessa vicenda.",
  "",
  "> Ogni guida indica i termini di decadenza e prescrizione applicabili, i",
  "> riferimenti al codice civile e alla normativa vigente, e i passi concreti.",
  "> I contenuti sono firmati da un avvocato e aggiornati alla data indicata in",
  "> ciascuna pagina.",
  "",
];

for (const [cat, descrizione] of CATEGORIE) {
  const gruppo = articoli.filter((a) => a.category === cat);
  if (!gruppo.length) continue;
  righe.push(`## ${cat} — ${descrizione}`);
  for (const a of gruppo) righe.push(`- [${a.title}](${BASE}/guide/${a.slug}): ${a.excerpt ?? ""}`);
  righe.push("");
}

righe.push("## Domande frequenti — una URL per domanda");
for (const f of faq) righe.push(`- [${f.question}](${BASE}/domande-frequenti/${f.slug})`);
righe.push("");
righe.push("## Riferimenti");
righe.push(`- [Indice di tutte le guide](${BASE}/guide)`);
righe.push(`- [Indice delle domande frequenti](${BASE}/domande-frequenti)`);
righe.push(`- [Area imprese](${BASE}/imprese): dieci aree di assistenza alle imprese edili`);
righe.push(`- [Area privati](${BASE}/privati): dieci aree di assistenza ai committenti`);
righe.push("");
righe.push("## Optional");
righe.push(`- [Lo studio](${BASE}/studio)`);
righe.push(`- [Conflitti di interesse](${BASE}/studio/conflitti-di-interesse)`);
righe.push(`- [Contatti](${BASE}/contatti)`);
righe.push("");

writeFileSync(join(root, "public/llms.txt"), righe.join("\n"), "utf-8");

// --- feed.xml ---------------------------------------------------------------
const items = articoli
  .map(
    (a) =>
      `    <item>\n      <title>${esc(a.title)}</title>\n      <link>${BASE}/guide/${a.slug}</link>\n` +
      `      <guid isPermaLink="true">${BASE}/guide/${a.slug}</guid>\n` +
      `      <description>${esc(a.excerpt)}</description>\n` +
      `      <category>${esc(a.category)}</category>\n` +
      `      <pubDate>${dataRFC(a.date)}</pubDate>\n    </item>`,
  )
  .join("\n");

const feed =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n` +
  `    <title>Edilizia Legale — Guide di diritto dell'edilizia</title>\n` +
  `    <link>${BASE}/guide</link>\n` +
  `    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />\n` +
  `    <description>Guide su appalti, difetti costruttivi, crediti di cantiere e fisco dell'edilizia, con termini e riferimenti normativi.</description>\n` +
  `    <language>it-IT</language>\n${items}\n  </channel>\n</rss>\n`;

writeFileSync(join(root, "public/feed.xml"), feed, "utf-8");

console.log(`[discovery] llms.txt con ${articoli.length} guide e ${faq.length} domande, feed.xml con ${articoli.length} voci`);
