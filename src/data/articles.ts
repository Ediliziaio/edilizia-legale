export type Category = "Privati" | "Imprese" | "Tributario" | "Verticali";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "note"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  /**
   * Immagine dell'articolo con slot sostituibile: finché in articleImages non
   * c'è un percorso, mostra un segnaposto che descrive la foto da produrre.
   * `alt` è anche il brief per chi la scatterà.
   */
  | { type: "figure"; slot: string; alt: string; caption?: string }
  /** Sequenza di termini/passi con le scadenze: blocco molto estratto dai motori AI. */
  | { type: "timeline"; title?: string; steps: { when: string; label: string; detail?: string }[] }
  /**
   * Giurisprudenza: principio di diritto con gli estremi della pronuncia.
   * ATTENZIONE: gli estremi vanno validati su banca dati prima di pubblicare.
   * Quando l'orientamento è consolidato ma il precedente puntuale non è
   * verificato, lasciare `ref` vuoto e descrivere l'indirizzo nel principio.
   */
  | {
      type: "caselaw";
      title?: string;
      items: {
        /** Es. "Cassazione civile, Sezioni Unite" oppure "Orientamento costante". */
        court: string;
        /** Es. "n. 7756 del 27 marzo 2017". Vuoto se si cita solo l'indirizzo. */
        ref?: string;
        /** Il principio di diritto, in linguaggio piano. */
        principle: string;
        /** Cosa cambia in concreto per chi legge. */
        impact?: string;
      }[];
    };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  author: string;
  cover: string;
  coverImage?: string;
  intro: string;
  content: Block[];
  keywords?: string[];
};

/** Article without the heavy `content` — used for listing, related cards, category counts. */
export type ArticleMeta = Omit<Article, "content">;

/**
 * Guide pilastro: aprono un cluster tematico e rispondono alla query madre.
 * Vanno messe in evidenza nel listing — sono le porte d'ingresso principali.
 */
export const PILLAR_SLUGS = [
  "recupero-crediti-edilizia",
  "difetti-costruttivi-casa-nuova",
  "annullare-contratto-impresa-edile",
  "accertamento-superbonus-imprese",
] as const;

export const isPillar = (slug: string): boolean =>
  (PILLAR_SLUGS as readonly string[]).includes(slug);

// Lightweight metadata for all articles (eager, tiny). Full `content` is NOT here.
import { articlesMeta } from "./articlesMeta";
export { articlesMeta };

// Lazy per-article loaders: each ./articles/<slug>.ts becomes its own chunk,
// loaded only when that article page is opened. Importing only the `article`
// export (never eagerly) keeps content out of the main bundle.
const articleLoaders = import.meta.glob("./articles/*.ts", {
  import: "article",
}) as Record<string, () => Promise<Article>>;

const loaderBySlug: Record<string, () => Promise<Article>> = {};
for (const [path, loader] of Object.entries(articleLoaders)) {
  const slug = path.slice("./articles/".length, -".ts".length);
  loaderBySlug[slug] = loader;
}

export const getArticleMeta = (slug: string): ArticleMeta | undefined =>
  articlesMeta.find((a) => a.slug === slug);

/** Load a full article (with content) on demand. Resolves undefined if the slug is unknown. */
export const getArticle = async (slug: string): Promise<Article | undefined> => {
  const loader = loaderBySlug[slug];
  if (!loader) return undefined;
  return loader();
};

/**
 * Guide correlate per affinita' reale, non per ordine di file.
 *
 * Prima si prendevano i primi della stessa categoria: su 43 guide voleva dire
 * proporre sempre le stesse tre. Ora pesa le parole chiave in comune — che e'
 * il segnale piu' vicino al "parla dello stesso problema" — e usa il silo solo
 * come spareggio. Cambiano i link interni di ogni guida, e cambia dove passa
 * l'autorita' dentro il sito.
 */
export const getRelated = (slug: string, limit = 3): ArticleMeta[] => {
  const current = articlesMeta.find((a) => a.slug === slug);
  const others = articlesMeta.filter((a) => a.slug !== slug);
  if (!current) return others.slice(0, limit);

  const parole = (a: ArticleMeta) =>
    new Set(
      (a.keywords ?? [])
        .join(" ")
        .toLowerCase()
        .split(/[^a-zà-ù0-9]+/)
        .filter((w) => w.length > 3),
    );

  const mie = parole(current);
  const punteggio = (a: ArticleMeta) => {
    let n = 0;
    for (const w of parole(a)) if (mie.has(w)) n++;
    return n * 2 + (a.category === current.category ? 1 : 0);
  };

  return [...others]
    .map((a) => ({ a, p: punteggio(a) }))
    .sort((x, y) => y.p - x.p || x.a.slug.localeCompare(y.a.slug))
    .slice(0, limit)
    .map((x) => x.a);
};

// Article `date` fields are human-readable Italian strings ("Maggio 2026").
// schema.org datePublished / OG article:published_time require ISO 8601, so
// convert to "YYYY-MM-01" for structured data. Returns undefined if unparseable.
const IT_MONTHS: Record<string, string> = {
  gennaio: "01",
  febbraio: "02",
  marzo: "03",
  aprile: "04",
  maggio: "05",
  giugno: "06",
  luglio: "07",
  agosto: "08",
  settembre: "09",
  ottobre: "10",
  novembre: "11",
  dicembre: "12",
};

export const toISODate = (display: string): string | undefined => {
  const m = display.trim().toLowerCase().match(/^([a-zà-ù]+)\s+(\d{4})$/);
  if (!m) return undefined;
  const mm = IT_MONTHS[m[1]];
  if (!mm) return undefined;
  return `${m[2]}-${mm}-01`;
};

/**
 * Data dell'aggiornamento più recente tra tutte le guide, in forma leggibile.
 * Le pagine che dichiarano "aggiornato a…" la leggono da qui invece di
 * scriverla a mano: una data falsa, su un sito legale, è una dichiarazione falsa.
 */
export const ultimoAggiornamentoContenuti = (): string => {
  let migliore = "";
  let iso = "";
  for (const a of articlesMeta) {
    const d = toISODate(a.date);
    if (d && d > iso) {
      iso = d;
      migliore = a.date;
    }
  }
  return migliore || articlesMeta[0]?.date || "";
};

/** "ad agosto 2026" / "a maggio 2026": la d eufonica davanti a vocale. */
export const aggiornamentoConPreposizione = (): string => {
  const d = ultimoAggiornamentoContenuti().toLowerCase();
  if (!d) return "";
  return `${/^[aeiou]/.test(d) ? "ad" : "a"} ${d}`;
};
