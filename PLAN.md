# Edilizia Legale — Piano di lavoro (loop)

Sito: **Edilizia Legale** — studio legale diritto dell'edilizia, doppio target (imprese / privati).
Base tecnica: clone di debt-reclaim-guide (Vite + React + TS + Tailwind + vite-react-ssg). Design invariato (navy/gold, Inter Tight). Dominio placeholder: https://www.edilizialegale.it

## Task list (spuntare a ogni completamento)

### Fase 1 — Fondamenta
- [x] Copia repo → ~/edilizia-legale, git init
- [x] Pulizia asset Tutela Debito (logo, foto team, covers, città)
- [x] index.html nuovo (meta, Organization/LegalService schema, fonts)
- [x] SEO.tsx → SITE edilizialegale.it, brand Edilizia Legale
- [x] Tipi articoli (articles.ts): categorie Imprese/Privati/Verticali/Tributario
- [x] Header + Footer nuovi (due silo nel menu)
- [x] Home a bivio ("Sono un'impresa" / "Sono un privato") + H1 "Il diritto dell'edilizia, dai due lati del cantiere"

### Fase 2 — Pagine struttura
- [x] /imprese/ hub (10 aree servizio)
- [x] /privati/ hub (10 aree servizio)
- [x] /studio/ (chi siamo, metodo, conflitti-di-interesse)
- [x] /contatti/
- [x] /guide/ listing articoli (con filtri categoria)
- [x] /domande-frequenti/ hub + pagine singole domanda (QAPage schema)
- [x] Privacy / Cookie / Note legali (adattate)
- [x] NotFound
- [x] Rimozione route TD (quiz, pre-diagnosi, post-consulenza, città)

### Fase 3 — Articoli (24 brief, formato 12 blocchi: risposta diretta, in sintesi, esempio, passi, FAQ, CTA, disclaimer)
Silo Imprese:
- [x] B1 recupero-crediti-edilizia (pillar)
- [x] B2 contestazione-pretestuosa
- [x] B3 sal-non-pagato
- [x] B4 subappaltatore-non-pagato
- [x] B5 ritenuta-a-garanzia
- [x] B6 accertamento-superbonus-imprese (pillar)
- [x] B7 reverse-charge-edilizia
- [x] B8 durc-irregolare
- [x] B9 varianti-in-corso-opera
- [x] B10 contratto-appalto-impresa
Silo Privati:
- [x] C1 annullare-contratto-impresa-edile (pillar)
- [x] C2 impresa-sparita
- [x] C3 difetti-costruttivi-casa-nuova (pillar)
- [x] C4 infissi-montati-male
- [x] C5 fotovoltaico-non-produce
- [x] C6 recesso-contratto-fotovoltaico
- [x] C7 cappotto-termico-difettoso
- [x] C8 cucina-su-misura-difettosa
- [x] C9 preventivo-sforato
- [x] C10 ritardo-consegna
- [x] C11 piscina-difetti-costruttore
- [x] C12 terrazzo-infiltrazioni
- [x] C13 pompa-di-calore-non-scalda
- [x] C14 opposizione-decreto-ingiuntivo

### Fase 4 — SEO tecnico
- [x] articleSeo.ts (title ≤60, description ≤155 per ogni articolo)
- [x] robots.txt (crawler AI allow, da strategia)
- [x] llms.txt (da strategia)
- [x] generate-sitemap.mjs aggiornato (nuove route)
- [x] Schema: LegalService sitewide, Article+author, FAQPage visibile, BreadcrumbList, Service su hub
- [x] og-image / favicon neutri (rimuovere TD)

### Fase 5 — Verifica
- [x] `npm run build` passa (SSG tutte le route)
- [x] grep "Tutela Debito|tuteladebito|Armando Rossi" → zero risultati
- [x] Verifica visiva browser (home, hub, articolo, FAQ)
- [x] README aggiornato

## Note vincoli
- Art. 35 CDF: niente promesse di risultato, superlativi, comparazioni.
- Una pagina un intent; blocco risposta diretta 40-60 parole dopo H1; FAQ visibili.
- Avvocati: placeholder "Avv. [Nome Cognome] — Foro di [Città]" con [DA CONFERMARE].
