# Edilizia Legale

Sito dello studio legale **Edilizia Legale** — diritto dell'edilizia e degli appalti, doppio target
(imprese edili / committenti privati) con due percorsi separati.

- Stack: Vite + React + TypeScript + Tailwind + shadcn/ui, **SSG con vite-react-ssg** (74 pagine prerenderizzate, 404 compresa).
- Design: palette navy/gold, font Inter Tight (ereditati dal design system di partenza).
- Dominio previsto: `https://www.edilizialegale.it` (placeholder — un solo punto di modifica, vedi sotto).

## Comandi

```bash
npm ci            # installa le dipendenze
npm run dev       # dev server (vite-react-ssg dev)
npm run build     # prebuild (indice articoli + llms.txt/feed + sitemap) + build SSG in dist/
npm run preview   # serve la build da dist/
```

## Architettura contenuti

- **Home a bivio** (`/`): due porte, "Sono un'impresa" / "Sono un privato".
- **Hub silo**: `/imprese` (10 aree, schema Service) e `/privati` (10 aree + verticali).
- **Guide** (`/guide`, `/guide/[slug]`): 43 articoli in `src/data/articles/*.ts` — formato a blocchi
  (risposta diretta come intro, riquadro "In sintesi", tabelle, passi numerati, esempio con bivio,
  FAQ visibili, CTA + disclaimer). Schema Article + FAQPage + BreadcrumbList.
- **Domande frequenti** (`/domande-frequenti`, una URL per domanda): 19 pagine da `src/data/faq.ts`,
  schema FAQPage (hub) e QAPage (singole) — motore AEO.
- **Studio**: `/studio`, `/studio/conflitti-di-interesse` (policy pubblica sui conflitti, segnale E-E-A-T).
- **Legali**: `/privacy`, `/cookie`, `/note-legali`.
- SEO tecnico: sitemap generata da `scripts/generate-sitemap.mjs`, `robots.txt` con allow espliciti per i
  crawler AI, `llms.txt`, canonical + OG per pagina via `src/components/SEO.tsx` (head prerenderizzato).

### File generati (non modificare a mano)

`src/data/articlesMeta.ts` e `src/data/articleSeo.ts` sono generati da
`scripts/generate-article-index.mjs` a partire dai moduli articolo (ogni articolo esporta
`meta`, `seo`, `article`). Girano automaticamente nel `prebuild`.

### Aggiungere una guida

1. Crea `src/data/articles/<slug>.ts` copiando il formato di `recupero-crediti-edilizia.ts`
   (slug = nome file; esporta `meta`, `seo`, `article`).
2. Aggiungi lo slug in `ORDER` dentro `scripts/generate-article-index.mjs` (ordine di listing).
3. `npm run build` — indice articoli, `llms.txt`, `feed.xml`, sitemap e route statiche si aggiornano da soli.

## Indicizzazione: canali di scoperta e verifiche

**Sitemap segmentata.** `/sitemap.xml` e' un indice che punta a `sitemap-pagine.xml`,
`sitemap-guide.xml` e `sitemap-faq.xml`. In Search Console si vede la copertura per
sezione. Il `lastmod` e' la data reale dell'ultima modifica del file sorgente (da git,
shallow-safe): non e' la data di build, altrimenti Google smetterebbe di fidarsene.

**IndexNow.** Dopo ogni build di produzione (`postbuild`, solo con `VERCEL_ENV=production`)
le URL delle tre sezioni vengono inviate a IndexNow: Bing, e da li' ChatGPT Search, Copilot
e DuckDuckGo, ricrawlano in ore. La chiave e' il file `public/<32 hex>.txt`. A mano:
`npm run indexnow` oppure `npm run indexnow -- /guide/slug`.

**Search Console e Bing Webmaster.** Il tag di verifica e' letto da due variabili d'ambiente
di build, da impostare su Vercel (Settings → Environment Variables, ambiente Production):

| Variabile | Tag emesso |
|---|---|
| `VITE_GSC_VERIFICATION` | `<meta name="google-site-verification">` |
| `VITE_BING_VERIFICATION` | `<meta name="msvalidate.01">` |

Poi, in entrambi gli strumenti, inviare `https://www.edilizialegale.it/sitemap.xml`.

**Fonti primarie.** I riferimenti normativi citati nelle guide sono link a Normattiva
(URN + URL nello schema `Legislation`, e link visibili nel box "Riferimenti normativi").
La mappa atto → data di emanazione e' in `src/data/normattiva.ts`: contiene solo atti con
data certa; un riferimento non in tabella resta testo, senza link. Per aggiungerne uno,
aggiungere la riga con la data esatta di emanazione.

**Entity linking.** Le guide dichiarano in `mentions` le entita' Wikipedia di cui parlano
(`src/data/entities.ts`): lista corta, solo voci con titolo certo.

## [DA VERIFICARE] citazioni giurisprudenziali

Il blocco `caselaw` mostra i principi di diritto con gli estremi della pronuncia: è il
segnale di autorevolezza più forte del sito, ma **solo se gli estremi sono corretti**.

Regola tenuta in redazione: si citano con numero e data **solo** le pronunce verificate.
Dove l'indirizzo è consolidato ma il precedente puntuale non è stato controllato su banca
dati, il campo `court` riporta "Orientamento costante di legittimità" e il campo `ref` è
omesso — nessun numero inventato.

**REGISTRO COMPLETO delle pronunce citate con estremi.** Sono cinque in tutto il sito e
vanno confermate su banca dati prima di promuovere i contenuti:

| Pronuncia | Dove | Principio riportato |
|---|---|---|
| Cass. civ., Sez. Un., n. 7756 del 27/03/2017 | contenzioso-ristrutturazione, contenzioso-serramenti, contenzioso-fotovoltaico | Art. 1669 c.c. applicabile anche agli interventi su edifici preesistenti, non solo alle nuove costruzioni |
| Cass. civ., Sez. Un., n. 9449/2016 | terrazzo-infiltrazioni | Lastrico solare a uso esclusivo: responsabilità del custode ex art. 2051 c.c. e riparto ex art. 1126 c.c. |
| Cass. civ., n. 12048/2003 e n. 24368/2017 | subappaltatore-non-pagato | L'azione diretta dell'art. 1676 c.c. spetta ai dipendenti dell'appaltatore, non all'impresa subappaltatrice |
| Cass., Sez. Un., n. 34419 e n. 34452 del 2023 | accertamento-superbonus-imprese | Distinzione tra credito inesistente e credito non spettante |

Livello di verifica: la 7756/2017 è stata usata come riferimento centrale ed è la più
consolidata; le altre sono state inserite in redazione e **non sono state verificate su
banca dati**. Se una non regge, si toglie il numero e resta il principio (il blocco
`caselaw` è progettato per funzionare anche senza `ref`).

Prossimo passo consigliato: sostituire gli "Orientamento costante di legittimità" senza
estremi con precedenti puntuali verificati — aumenta la citabilità sui motori di risposta.

Per trovarli tutti: `grep -rn '"caselaw"' src/data/articles/`

## [DA VERIFICARE] punti normativi mobili nelle guide

Dove la disciplina cambia spesso, le guide descrivono il **meccanismo** e rinviano alla
verifica sul caso concreto, invece di fissare numeri che invecchiano male. Prima di
promuovere questi contenuti, un professionista dovrebbe validare:

- **Congruità della manodopera**: in `congruita-manodopera-durc.ts` è citata solo la
  percentuale consolidata della nuova edilizia civile (14,28%) e una tabella di pesi
  relativi. Se hai la tabella ufficiale allegata al D.M. 143/2021 vigente, sostituisci
  con le aliquote puntuali per categoria.
- **Sanatoria e tolleranze**: art. 36 vs 36-bis D.P.R. 380/2001 (introdotto dal
  D.L. 69/2024) e percentuali dell'art. 34-bis, in `ordinanza-demolizione-cosa-fare.ts`.
- **Aliquote e sanzioni Superbonus** per annualità, e le misure post D.lgs. 87/2024,
  negli articoli su Superbonus e sconto in fattura.
- **Voci di danno da sospensione**: il d.P.R. 207/2010 art. 160 è citato come riferimento
  operativo previgente in `sospensione-illegittima-lavori.ts`.

## [DA CONFERMARE] prima del lancio

Tutti i placeholder sono centralizzati in **`src/data/site.ts`**:

- dominio definitivo (aggiorna anche `index.html`, `robots.txt`, `llms.txt`, `scripts/*.mjs`);
- telefono, email, PEC reali;
- **autore reale dei contenuti**: sostituire "Redazione Edilizia Legale" con un avvocato nominato
  (foro, anno di iscrizione, bio in `/studio`) — vale ~+60% di citazioni AI ed è essenziale per l'E-E-A-T;
- P.IVA, sede e dati d'albo in `/privacy`, `/note-legali`, schema `index.html`;
- endpoint reale del form contatti (`src/components/ELContactModal.tsx`, oggi simulato);
- verifica deontologica finale del copy (art. 35 CDF) da parte di un collega o del Consiglio dell'Ordine.

## Vincoli editoriali (art. 35 Codice Deontologico Forense)

Niente promesse di risultato, superlativi, percentuali di successo, confronti con altri studi,
nomi di clienti. Gli esempi nelle guide sono scenari illustrativi e lo dichiarano.
Una pagina = un intent di ricerca; i due silo non si linkano tra loro se non da home e footer.
