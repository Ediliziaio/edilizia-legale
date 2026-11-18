/** Percorsi editoriali: collegano questioni successive dello stesso caso. */
export const readingPaths = [
  {
    title: "Contratto e pagamenti del subappalto",
    description: "Dalle clausole prima della firma ai pagamenti e alle ritenute da controllare.",
    slugs: ["contratto-subappalto-clausole", "subappaltatore-non-pagato", "ritenuta-a-garanzia", "contratto-appalto-impresa"],
  },
  {
    title: "Cantiere fermo, varianti e contestazioni",
    description: "Metti in relazione verbali, modifiche alle lavorazioni e documenti di cantiere.",
    slugs: ["sospensione-illegittima-lavori", "iscrizione-riserve-appalto", "varianti-in-corso-opera", "ritardo-consegna-lavori"],
  },
  {
    title: "Valutare costi e percorso della controversia",
    description: "Confronta l'obiettivo, la documentazione tecnica, le fasi e le spese previste.",
    slugs: ["quanto-costa-causa-costruttore", "accertamento-tecnico-preventivo", "mediazione-obbligatoria-edilizia", "quanto-dura-causa-difetti"],
  },
] as const;
