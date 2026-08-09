# Edilizia Legale

Sito dello studio legale **Edilizia Legale** — diritto dell'edilizia e degli appalti, doppio target
(imprese edili / committenti privati) con due percorsi separati.

- Stack: Vite + React + TypeScript + Tailwind + shadcn/ui, **SSG con vite-react-ssg** (54 pagine prerenderizzate).
- Design: palette navy/gold, font Inter Tight (ereditati dal design system di partenza).
- Dominio previsto: `https://www.edilizialegale.it` (placeholder — un solo punto di modifica, vedi sotto).

## Comandi

```bash
npm ci            # installa le dipendenze
npm run dev       # dev server (vite-react-ssg dev)
npm run build     # prebuild (indice articoli + sitemap) + build SSG in dist/
npm run preview   # serve la build da dist/
```

## Architettura contenuti

- **Home a bivio** (`/`): due porte, "Sono un'impresa" / "Sono un privato".
- **Hub silo**: `/imprese` (10 aree, schema Service) e `/privati` (10 aree + verticali).
- **Guide** (`/guide`, `/guide/[slug]`): 24 articoli in `src/data/articles/*.ts` — formato a blocchi
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
3. `npm run build` — indice, sitemap e route statica si aggiornano da soli.

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
