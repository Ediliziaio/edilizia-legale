// Invia le URL del sito a IndexNow (Bing, e da lì ChatGPT Search, Copilot,
// DuckDuckGo, Yandex): l'indicizzazione parte in ore invece che in settimane.
//
// Uso:  node scripts/indexnow-submit.mjs            → tutte le URL della sitemap
//       node scripts/indexnow-submit.mjs /guide/x   → solo le URL indicate
//
// La chiave è il file public/<key>.txt servito alla radice del sito, come
// richiede il protocollo. Da rilanciare dopo ogni pubblicazione rilevante.
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "www.edilizialegale.it";

const key = readdirSync(join(root, "public"))
  .find((f) => /^[0-9a-f]{32}\.txt$/.test(f))
  ?.replace(/\.txt$/, "");
if (!key) {
  console.error("Chiave IndexNow non trovata in public/ (file <32 hex>.txt)");
  process.exit(1);
}

let urlList;
if (process.argv.length > 2) {
  urlList = process.argv.slice(2).map((p) => (p.startsWith("http") ? p : `https://${HOST}${p}`));
} else {
  const sitemap = readFileSync(join(root, "public/sitemap.xml"), "utf-8");
  urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList }),
});
console.log(`[indexnow] ${urlList.length} URL inviate — HTTP ${res.status} ${res.statusText}`);
if (!res.ok) console.log(await res.text());
