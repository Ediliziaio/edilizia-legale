import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "ritenuta-a-garanzia",
  title: "Ritenuta a garanzia non svincolata: come farsi restituire il 5% trattenuto",
  excerpt:
    "Il committente trattiene il 5% a garanzia e non lo restituisce mai? La ritenuta è esigibile alla scadenza della garanzia contrattuale: come chiedere lo svincolo, da quando decorrono gli interessi e quando conviene la fideiussione.",
  category: "Imprese",
  date: "Agosto 2026",
  readTime: "8 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "ritenuta a garanzia appalto svincolo",
    "quando va restituita la ritenuta a garanzia",
    "ritenuta 5% appalto non restituita",
    "svincolo ritenute a garanzia termini",
    "sostituire la ritenuta con fideiussione",
  ],
  intro:
    "La ritenuta a garanzia va restituita alla scadenza del periodo di garanzia contrattuale, salvo che il committente abbia contestato per tempo vizi specifici e quantificati. Una contestazione generica non giustifica il trattenimento. Il credito resta esigibile e produce interessi dalla richiesta formale di svincolo.",
};

export const seo = {
  seoTitle: "Ritenuta a Garanzia Non Svincolata: Come Recuperare il 5%",
  metaDescription:
    "La ritenuta del 5% va restituita a fine garanzia contrattuale: i vizi generici non bastano a trattenerla. Come chiedere svincolo e interessi di mora.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: la ritenuta a garanzia è parte del corrispettivo d'appalto (art. 1657 c.c.) e va restituita alla scadenza della garanzia contrattuale, salvo vizi specifici contestati per tempo. Il termine: il credito si prescrive in 10 anni (art. 2946 c.c.) e produce interessi di mora commerciali dalla richiesta formale di svincolo (D.lgs. 231/2002). L'azione: PEC riepilogativa cantiere per cantiere con termine di 30 giorni, poi decreto ingiuntivo." },

    { type: "h2", text: "Che cos'è la ritenuta a garanzia e perché quasi nessuno se la fa restituire", id: "cose-la-ritenuta" },
    { type: "p", text: "In quasi tutti i contratti d'appalto il committente trattiene una percentuale di ogni stato di avanzamento, di norma il 5%, a garanzia dell'esatto adempimento e dei vizi successivi alla consegna. Non è una decurtazione del prezzo: è corrispettivo dell'impresa (art. 1657 c.c.) il cui pagamento è solo differito. Alla scadenza del periodo di garanzia previsto dal contratto, quella somma va restituita per intero." },
    { type: "p", text: "Nella pratica accade raramente in modo spontaneo. L'impresa chiude il cantiere, apre il successivo, e la ritenuta resta nei conti del committente per anni: nessuno la richiede perché il rapporto prosegue o perché nessuno tiene un registro delle scadenze. Sommate su più commesse, queste voci diventano cifre importanti — e sono crediti già maturati, non da conquistare partendo da zero." },

    { type: "h2", text: "Quando matura il diritto allo svincolo?", id: "quando-matura" },
    { type: "p", text: "Il momento in cui la ritenuta diventa esigibile lo fissa il contratto: di solito coincide con la scadenza del periodo di garanzia (dodici o ventiquattro mesi dal collaudo o dalla consegna), talvolta con l'emissione del certificato di regolare esecuzione. Se il contratto non prevede nulla, il riferimento è la disciplina generale dell'appalto: con l'accettazione dell'opera senza riserve il committente perde la garanzia per i vizi apparenti, e la denuncia dei vizi occulti va fatta entro 60 giorni dalla scoperta (art. 1667 c.c.)." },
    { type: "p", text: "Il punto pratico: il diritto allo svincolo non si estingue perché il tempo passa. Il credito si prescrive in 10 anni (art. 2946 c.c.) dall'esigibilità. Le ritenute su cantieri chiusi cinque, sette, nove anni fa sono quindi quasi sempre ancora recuperabili — a condizione di ricostruirle documentalmente, SAL per SAL." },
    { type: "table", headers: ["Situazione", "La ritenuta è esigibile?", "Cosa fare"], rows: [
      ["Periodo di garanzia contrattuale scaduto, nessuna contestazione", "Sì, per intero", "Richiesta formale di svincolo via PEC"],
      ["Garanzia scaduta, contestazione generica (\"ci sono segnalazioni\")", "Sì: la contestazione generica non giustifica il trattenimento", "Chiedere la specificazione dei vizi con termine, poi procedere"],
      ["Vizi specifici e quantificati, denunciati nei termini dell'art. 1667 c.c.", "Solo per l'eventuale eccedenza rispetto al costo dei rimedi", "Verificare fondatezza e proporzione, trattare o far accertare"],
      ["Garanzia ancora in corso", "Non ancora", "Censire l'importo e la data di scadenza, mettere in agenda"],
      ["Cantiere chiuso da oltre 10 anni senza mai richiedere nulla", "A rischio prescrizione", "Verificare eventuali atti interruttivi; agire subito sul resto"],
    ] },

    { type: "h2", text: "Come si scrive la richiesta che fa partire gli interessi?", id: "richiesta-svincolo" },
    { type: "p", text: "La richiesta di svincolo è il passaggio che trasforma un credito dormiente in un credito che costa al debitore. Dal ricevimento della richiesta formale, infatti, decorrono gli interessi di mora commerciali del D.lgs. 231/2002, a un tasso molto superiore a quello legale. Una PEC ben costruita contiene: la tabella dei cantieri con contratto, importo trattenuto e data di scadenza della garanzia; il totale richiesto; un termine per il pagamento — di norma 30 giorni — e l'avvertimento che alla scadenza si agirà in via monitoria." },
    { type: "p", text: "Il lavoro vero, prima della lettera, è contabile: estrarre da ogni SAL l'importo effettivamente trattenuto e incrociarlo con le date di fine garanzia. Conviene farlo una volta sola, per tutti i cantieri insieme: una sola PEC riepilogativa pesa più di dieci solleciti sparsi e fissa una data unica di decorrenza degli interessi." },

    { type: "h2", text: "Il committente oppone vizi generici: può trattenere la ritenuta?", id: "vizi-generici" },
    { type: "p", text: "La risposta tipica alla richiesta di svincolo è una contestazione vaga: \"ci sono state segnalazioni\", \"alcuni lavori presentano difetti\", \"stiamo verificando con il committente finale\". Una contestazione di questo tipo non giustifica il trattenimento: perché la ritenuta resti bloccata servono vizi specifici, denunciati nei termini dell'art. 1667 c.c. e quantificati, e comunque il trattenimento deve essere proporzionato al costo dei rimedi — non può estendersi all'intera ritenuta di tutti i cantieri." },
    { type: "p", text: "La mossa corretta non è ribattere nel merito a contestazioni che non esistono ancora: è concedere per iscritto un termine breve per specificare difetti e importi, avvertendo che in mancanza si procederà per l'intero. Se la specificazione non arriva, la genericità della risposta diventa un argomento a favore dell'impresa, anche ai fini della provvisoria esecutorietà del decreto." },
    { type: "ol", items: [
      "Ricostruire cantiere per cantiere gli importi trattenuti e le date di scadenza della garanzia contrattuale",
      "Inviare una PEC riepilogativa unica con richiesta di svincolo e termine di 30 giorni: da qui decorrono gli interessi di mora",
      "Se arriva una contestazione generica, concedere 15 giorni per specificare vizi e importi",
      "In mancanza di specificazione, depositare ricorso per decreto ingiuntivo per l'intero importo",
      "Notificare il decreto: il committente ha 40 giorni per l'opposizione",
      "Verificare in parallelo la prescrizione: per i cantieri più vecchi, ogni mese conta",
    ] },

    { type: "h2", text: "Conviene sostituire la ritenuta con una fideiussione?", id: "fideiussione" },
    { type: "p", text: "Per i cantieri futuri esiste una soluzione che evita il problema alla radice: pattuire in contratto la sostituzione della ritenuta con una garanzia fideiussoria — bancaria o assicurativa — di pari importo. Il committente conserva la garanzia sui vizi, l'impresa incassa il 100% di ogni SAL e migliora il proprio flusso di cassa; il costo della polizza è quasi sempre inferiore al costo finanziario del denaro immobilizzato per uno o due anni." },
    { type: "p", text: "La clausola va scritta con attenzione: importo allineato alla ritenuta che sostituisce, durata coincidente con il periodo di garanzia, svincolo automatico alla scadenza. Con committenti strutturati la richiesta viene accettata più spesso di quanto le imprese immaginino — ma va negoziata prima della firma, non a lavori iniziati." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un'impresa impiantistica lavora da anni con lo stesso general contractor. Su undici cantieri chiusi tra il 2020 e il 2024 sono state trattenute ritenute del 5%, mai richieste indietro perché \"tanto poi si vede\". Ricostruendo i SAL, il totale è di 67.400 euro. Il primo passaggio non è legale ma contabile: estrarre da ogni SAL l'importo trattenuto e la data di fine garanzia contrattuale. Su undici cantieri, otto hanno la garanzia già scaduta da oltre un anno: quelle somme sono esigibili adesso." },
    { type: "p", text: "Il secondo passaggio è una sola PEC riepilogativa con tabella cantiere per cantiere — importo, data di scadenza della garanzia — e richiesta di svincolo entro 30 giorni: da quella data decorrono gli interessi di mora commerciali. La reazione tipica: il general contractor risponde che su due cantieri \"ci sono state segnalazioni del committente finale\". È una contestazione generica, senza indicazione del difetto né quantificazione, e non giustifica il trattenimento dell'intera ritenuta: si concede un termine per specificare e, in mancanza, si procede per l'intero." },
    { type: "p", text: "L'esito plausibile di un'operazione così impostata: una parte rientra in via bonaria, perché il rapporto commerciale prosegue; il resto va in decreto ingiuntivo con un fascicolo solido. In entrambi i casi è denaro che l'impresa aveva già dato per perso." },
    { type: "note", text: "L'errore da non fare: aspettare ancora. Per i cantieri più vecchi la prescrizione decennale corre, e ogni anno di inerzia trasforma crediti esigibili in crediti persi. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende sempre dai documenti e dalle circostanze specifiche." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Entro quando va restituita la ritenuta a garanzia?", a: "Alla scadenza prevista dal contratto, di norma la fine del periodo di garanzia — dodici o ventiquattro mesi dal collaudo o dalla consegna. Se il contratto tace, la ritenuta diventa esigibile quando il committente non ha più vizi da far valere nei termini dell'art. 1667 c.c." },
      { q: "La ritenuta si prescrive?", a: "Sì, nel termine ordinario di 10 anni dall'esigibilità (art. 2946 c.c.). Significa che le ritenute su cantieri chiusi anche molti anni fa restano spesso recuperabili, ma per quelle più vecchie ogni mese di inerzia conta: una PEC di richiesta interrompe la prescrizione e la fa ripartire." },
      { q: "Il committente può trattenere la ritenuta perché \"ci sono segnalazioni\"?", a: "No. Il trattenimento richiede vizi specifici, denunciati nei termini e quantificati, e deve essere proporzionato al costo dei rimedi. Una contestazione generica non basta: conviene concedere per iscritto un termine breve per specificare e, in mancanza, agire per l'intero importo." },
      { q: "Da quando decorrono gli interessi sulla ritenuta non svincolata?", a: "Dalla richiesta formale di svincolo, che costituisce in mora il committente: da lì si applicano gli interessi di mora commerciali del D.lgs. 231/2002, a tasso molto superiore a quello legale. È la ragione per cui la PEC riepilogativa conviene inviarla subito, anche se si punta a un accordo bonario." },
      { q: "Posso sostituire la ritenuta con una polizza fideiussoria?", a: "Sì, se il contratto lo prevede o il committente accetta: una fideiussione bancaria o assicurativa di pari importo garantisce i vizi e libera subito il 100% dei SAL. Il costo della polizza è quasi sempre inferiore al costo del denaro immobilizzato, ma la clausola va negoziata prima della firma." },
      { q: "Serve il decreto ingiuntivo o basta la trattativa?", a: "Dipende dalla risposta alla richiesta di svincolo. Se il committente paga o propone un piano credibile, la via bonaria è più rapida. Se oppone contestazioni generiche o silenzio, il decreto ingiuntivo su ritenute documentate da contratto e SAL è uno strumento solido, spesso con provvisoria esecutorietà." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Fai il conto delle ritenute mai svincolate degli ultimi cinque anni: nella maggior parte delle imprese è una cifra a cinque zeri dimenticata nei conti dei committenti. Contattaci dalla pagina contatti: ricostruiamo con te il quadro cantiere per cantiere e ti diciamo quali somme sono esigibili subito. Se il committente ha smesso di pagare anche SAL e saldi, leggi la guida al recupero crediti nell'edilizia; e prima del prossimo contratto, verifica le clausole su ritenute e garanzie: è lì che il problema si previene." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
