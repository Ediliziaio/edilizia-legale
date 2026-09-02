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

// Da `postbuild`: invia solo quando la build e' quella di produzione (mai dalle
// preview, che punterebbero comunque alle URL pubbliche) e non fa mai fallire
// il deploy per un errore di rete. In locale, senza il flag, resta manuale.
const soloProduzione = process.argv.includes("--if-production");
const argomenti = process.argv.slice(2).filter((a) => a !== "--if-production");
if (soloProduzione && process.env.VERCEL_ENV !== "production") {
  console.log("[indexnow] non in produzione: invio saltato");
  process.exit(0);
}

const key = readdirSync(join(root, "public"))
  .find((f) => /^[0-9a-f]{32}\.txt$/.test(f))
  ?.replace(/\.txt$/, "");
if (!key) {
  console.error("Chiave IndexNow non trovata in public/ (file <32 hex>.txt)");
  process.exit(1);
}

let urlList;
if (argomenti.length) {
  urlList = argomenti.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p}`));
} else {
  // sitemap.xml e' un indice: le URL delle pagine stanno nelle tre sezioni
  urlList = ["sitemap-pagine.xml", "sitemap-guide.xml", "sitemap-faq.xml"].flatMap((f) => {
    try {
      const xml = readFileSync(join(root, "public", f), "utf-8");
      return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => !u.includes("/images/"));
    } catch {
      return [];
    }
  });
}

try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList }),
  });
  console.log(`[indexnow] ${urlList.length} URL inviate — HTTP ${res.status} ${res.statusText}`);
  if (!res.ok) console.log(await res.text());
} catch (err) {
  console.log(`[indexnow] invio non riuscito (${err?.message ?? err}); la build prosegue`);
}
