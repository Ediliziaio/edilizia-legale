import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "contratto-subappalto-clausole",
  title: "Contratto di subappalto: le clausole che salvano l'artigiano",
  excerpt:
    "Chi esegue il lavoro è l'ultimo a incassare e il primo a rischiare. Termini di pagamento certi, limiti al pay when paid, ritenute e penali speculari: le clausole da pretendere prima di firmare.",
  category: "Imprese",
  date: "Agosto 2026",
  readTime: "15 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "contratto subappalto edile cosa deve contenere",
    "clausole subappalto tutela subappaltatore",
    "pagamento subappaltatore",
    "responsabilità solidale subappalto",
    "autorizzazione al subappalto",
  ],
  intro:
    "Un contratto di subappalto edile deve indicare le lavorazioni, i prezzi, i tempi, le modalità di contabilizzazione e i termini di pagamento. Le clausole che proteggono davvero chi esegue sono altre: termini di pagamento non subordinati all'incasso dell'appaltatore, penali speculari, limiti alle ritenute e consenso preventivo alla cessione del credito.",
};

export const seo = {
  seoTitle: "Contratto di Subappalto Edile: Clausole da Pretendere",
  metaDescription:
    "Cosa deve contenere un contratto di subappalto e quali clausole proteggono chi esegue: termini di pagamento, pay when paid, ritenute, penali, solidarietà.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: il subappaltatore ha diritto al corrispettivo pattuito e, nel pubblico, in alcuni casi al pagamento diretto dalla stazione appaltante. Il termine: nei rapporti tra imprese il pagamento è dovuto entro 30 giorni, estensibili a 60 solo con patto espresso (D.lgs. 231/2002). L'azione: negoziare le clausole prima della firma, perché dopo si può solo subirle." },

    { type: "h2", text: "Perché il subappaltatore è la posizione più esposta della filiera", id: "posizione-esposta" },
    { type: "p", text: "Nella catena dell'appalto edile chi esegue materialmente le lavorazioni è l'ultimo anello a incassare e il primo a sostenere i costi. Il subappaltatore anticipa manodopera, materiali e noli, matura il credito quando la lavorazione è compiuta e viene pagato dopo che l'appaltatore ha contabilizzato, fatturato e incassato dal committente. Ogni passaggio aggiunge tempo e rischio." },
    { type: "p", text: "A questo squilibrio strutturale si aggiunge quello negoziale. Il contratto viene quasi sempre predisposto dall'appaltatore su un modello standard, presentato a lavori ormai imminenti e firmato in fretta perché la squadra deve entrare in cantiere lunedì. Le clausole peggiori si trovano in fondo, nelle pagine che nessuno legge, e riguardano proprio pagamenti, penali e ritenute." },
    { type: "p", text: "La conseguenza è che molti subappaltatori scoprono il contenuto del contratto solo quando il pagamento non arriva. A quel punto le opzioni si riducono: le clausole firmate valgono, e le poche protezioni residue sono quelle che la legge impone in modo inderogabile. Negoziare prima costa un'ora; subire dopo costa mesi di esposizione finanziaria." },
    { type: "p", text: "C'è però una buona notizia: le clausole che contano davvero sono poche e riconoscibili. Un artigiano che sa dove guardare può leggere un contratto di subappalto in venti minuti e capire se è accettabile, se va corretto in tre punti o se va rifiutato." },

    { type: "figure", slot: "contratto-subappalto-clausole-1", alt: "Artigiano con il contratto di subappalto in mano davanti a un cantiere con ponteggi montati", caption: "Il momento della firma è l'unico in cui il subappaltatore ha potere negoziale: dopo, le clausole si possono solo applicare." },

    { type: "h2", text: "Che cosa deve contenere il contratto per legge", id: "contenuto-obbligatorio" },
    { type: "p", text: "Il subappalto è il contratto con cui l'appaltatore affida a un terzo l'esecuzione di una parte delle opere che si è impegnato a realizzare. L'art. 1656 c.c. stabilisce che l'appaltatore non può darlo in subappalto senza autorizzazione del committente: è la regola base, valida anche nei rapporti privati e spesso dimenticata." },
    { type: "p", text: "Il nucleo minimo del contratto comprende l'individuazione precisa delle lavorazioni affidate, il corrispettivo con il criterio di determinazione — a corpo, a misura o misto — e l'elenco prezzi applicato, i tempi di esecuzione con eventuale cronoprogramma, le modalità di contabilizzazione e i termini di pagamento. Manca uno di questi elementi e il contenzioso diventa molto più probabile." },
    { type: "p", text: "Vanno poi disciplinati gli oneri della sicurezza, che non sono soggetti a ribasso, la fornitura di materiali e mezzi, l'accesso al cantiere, gli obblighi assicurativi e la gestione delle interferenze. Nei lavori pubblici il contratto deve inoltre rispettare i requisiti dell'art. 119 del D.lgs. 36/2023 e va comunicato alla stazione appaltante insieme alla documentazione richiesta." },
    { type: "p", text: "Un capitolo a parte merita la regolarità contributiva. Il subappaltatore deve essere in possesso di DURC regolare e, nei lavori edili, il cantiere è soggetto alla verifica di congruità della manodopera: un'incongruenza a fine lavori può bloccare i pagamenti a valle e va prevista contrattualmente su chi ricade." },

    { type: "h2", text: "Quando devi essere pagato e chi decide i termini?", id: "termini-pagamento" },
    { type: "p", text: "Nei rapporti tra imprese i termini di pagamento sono disciplinati dal D.lgs. 231/2002. Il termine ordinario è di trenta giorni dal ricevimento della fattura o dalla verifica della conformità della prestazione. Le parti possono pattuire un termine più lungo, fino a sessanta giorni, ma serve un accordo espresso e non basta la prassi." },
    { type: "p", text: "Oltre i sessanta giorni il patto è ammesso solo se espressamente concordato per iscritto e non gravemente iniquo per il creditore. È una valvola che esiste sulla carta ma che nella pratica viene usata poco, perché nessun subappaltatore vuole aprire un contenzioso sul termine mentre è ancora in cantiere sullo stesso appalto." },
    { type: "p", text: "Il punto pratico è un altro: i termini contrattuali di pagamento nel subappalto sono quasi sempre agganciati a eventi controllati dall'appaltatore. Il termine decorre dall'approvazione della contabilità, dalla verifica di conformità, dall'emissione del certificato di pagamento. Se quegli eventi non hanno una scadenza, il termine di pagamento non decorre mai." },
    { type: "p", text: "La clausola da pretendere è quindi doppia: un termine certo in giorni e un termine massimo entro il quale l'appaltatore deve verificare la contabilità, con la previsione che, decorso inutilmente, la contabilità si intende approvata. Senza questo secondo pezzo, il primo è decorativo." },

    { type: "h2", text: "La clausola pay when paid e i suoi limiti", id: "pay-when-paid" },
    { type: "p", text: "La clausola pay when paid subordina il pagamento del subappaltatore all'avvenuto incasso dell'appaltatore dal committente. Nella versione più aggressiva — pay if paid — il pagamento è dovuto solo se l'appaltatore incassa, trasferendo integralmente sul subappaltatore il rischio di insolvenza di un soggetto con cui non ha alcun rapporto contrattuale." },
    { type: "p", text: "Una clausola di questo tipo va guardata con molta attenzione, perché sposta un rischio che non appartiene a chi esegue. Il subappaltatore non ha scelto il committente, non ne ha valutato l'affidabilità e non può agire direttamente contro di lui per il proprio credito. Subordinare il suo diritto all'incasso altrui è, nella sostanza, chiedergli di finanziare l'intera operazione." },
    { type: "p", text: "Sul piano giuridico questa clausola presenta profili critici rilevanti nei rapporti tra imprese, sia in relazione ai limiti del D.lgs. 231/2002 sui termini di pagamento sia rispetto alla disciplina delle clausole gravemente inique. La valutazione dipende dal testo concreto e dall'assetto complessivo del contratto, e va fatta caso per caso." },
    { type: "p", text: "La strategia pratica resta la negoziazione preventiva. Se la controparte non accetta di eliminare la clausola, si possono ottenere correttivi: un termine massimo oltre il quale il pagamento è comunque dovuto, l'obbligo dell'appaltatore di comunicare gli incassi ricevuti e l'obbligo di agire tempestivamente verso il committente inadempiente." },

    { type: "h2", text: "Quali clausole proteggono davvero chi esegue?", id: "clausole-protettive" },
    { type: "p", text: "Al di là dei termini di pagamento, ci sono cinque clausole che cambiano concretamente la posizione del subappaltatore. Sono negoziabili, occupano poche righe e vengono quasi sempre concesse se richieste prima della firma." },
    { type: "p", text: "La prima è l'obbligo di comunicazione degli incassi: l'appaltatore si impegna a comunicare per iscritto, entro pochi giorni, ogni pagamento ricevuto dal committente riferito alle lavorazioni subappaltate. Senza questa informazione il subappaltatore non sa nemmeno se il presupposto della clausola pay when paid si è verificato." },
    { type: "p", text: "La seconda è il consenso preventivo alla cessione del credito. Molti contratti vietano la cessione senza consenso scritto dell'appaltatore, chiudendo di fatto l'accesso a factoring e anticipo fatture. Ottenere il consenso già nel contratto, o almeno l'impegno a non negarlo senza motivo, vale liquidità immediata." },
    { type: "p", text: "La terza è il limite alle ritenute: percentuale definita, importo massimo e soprattutto un termine certo di svincolo ancorato a un evento verificabile, come il collaudo o una data. Una ritenuta senza termine di svincolo è una somma che resta in sospeso per anni." },
    { type: "ul", items: [
      "Obbligo di comunicare per iscritto ogni incasso ricevuto per le lavorazioni subappaltate",
      "Consenso preventivo alla cessione del credito, o impegno a non negarlo senza giustificato motivo",
      "Ritenuta a garanzia con percentuale, tetto massimo e termine certo di svincolo",
      "Penali speculari: se il subappaltatore risponde del ritardo, anche l'appaltatore risponde del ritardato pagamento",
      "Diritto di sospendere le lavorazioni dopo un ritardo di pagamento superiore a un numero di giorni definito",
      "Obbligo di trasmettere i verbali e la contabilità dell'appalto principale che riguardano le lavorazioni affidate",
    ] },
    { type: "table", headers: ["Clausola", "Versione da rifiutare", "Versione da pretendere"], rows: [
      ["Termine di pagamento", "Al ricevimento del pagamento dal committente, senza limite", "Entro 30 o 60 giorni dalla fattura, con tetto massimo comunque dovuto"],
      ["Verifica della contabilità", "Nessun termine per l'approvazione dell'appaltatore", "Termine definito, decorso il quale la contabilità si intende approvata"],
      ["Ritenuta a garanzia", "Percentuale senza tetto e senza termine di svincolo", "Percentuale definita, importo massimo e svincolo a evento o data certa"],
      ["Penali", "Solo a carico del subappaltatore, senza tetto complessivo", "Speculari, con tetto complessivo e cause di esclusione documentate"],
      ["Cessione del credito", "Divieto assoluto di cessione senza consenso", "Consenso preventivo o impegno a non negarlo senza motivo"],
      ["Sospensione delle lavorazioni", "Divieto assoluto di sospendere per qualunque ragione", "Diritto di sospendere dopo un ritardo di pagamento oltre i giorni pattuiti"],
    ] },

    { type: "h2", text: "Responsabilità solidale: chi risponde di stipendi e contributi", id: "responsabilita-solidale" },
    { type: "p", text: "L'art. 29, comma 2, del D.lgs. 276/2003 stabilisce che in caso di appalto di opere o servizi il committente è obbligato in solido con l'appaltatore, e con ciascuno degli eventuali subappaltatori, entro il limite di due anni dalla cessazione dell'appalto, per il trattamento retributivo e per i contributi previdenziali e assicurativi dovuti ai lavoratori impiegati." },
    { type: "p", text: "La solidarietà copre retribuzioni, quote di trattamento di fine rapporto, contributi previdenziali e premi assicurativi, ma non si estende alle sanzioni civili, di cui risponde solo il soggetto inadempiente. È una tutela che opera a favore dei lavoratori e degli enti previdenziali, non del subappaltatore in quanto impresa." },
    { type: "p", text: "Accanto a questa disciplina opera l'art. 1676 c.c., che consente ai dipendenti dell'appaltatore di agire direttamente contro il committente per quanto è dovuto, nei limiti del debito che il committente ha verso l'appaltatore al momento della domanda. Sono strumenti diversi, con presupposti e limiti propri, che nella pratica si sommano." },
    { type: "p", text: "Per il subappaltatore la conseguenza operativa è duplice. Da un lato deve tenere in ordine la propria posizione contributiva, perché un DURC irregolare blocca i pagamenti e attiva le contestazioni a monte. Dall'altro deve pretendere clausole che regolino chiaramente chi risponde in caso di escussione della solidarietà e con quali diritti di rivalsa." },

    { type: "h2", text: "Il subappalto nei lavori pubblici: che cosa cambia?", id: "subappalto-pubblico" },
    { type: "p", text: "Nei lavori pubblici il subappalto è disciplinato dall'art. 119 del D.lgs. 36/2023. L'affidamento richiede l'indicazione delle lavorazioni e l'autorizzazione della stazione appaltante, subordinata alla verifica dei requisiti del subappaltatore e alla regolarità della documentazione trasmessa. Eseguire lavorazioni prima dell'autorizzazione espone a conseguenze pesanti entrambe le imprese." },
    { type: "p", text: "La protezione più significativa per chi esegue è il pagamento diretto. La stazione appaltante corrisponde direttamente al subappaltatore l'importo delle prestazioni eseguite in casi determinati, tra cui quando il subappaltatore è una microimpresa o una piccola impresa, quando ne fa richiesta e quando l'appaltatore è inadempiente. È una tutela che va attivata, non automatica in ogni caso." },
    { type: "p", text: "Il codice ammette inoltre, entro limiti e condizioni stabiliti, il subappalto delle prestazioni già affidate in subappalto, superando il divieto assoluto che vigeva in passato. La disciplina di dettaglio va verificata nel bando e nel contratto, perché la stazione appaltante può introdurre limitazioni motivate." },
    { type: "p", text: "Restano poi gli obblighi sulla parità di trattamento economico e normativo dei lavoratori del subappaltatore rispetto a quelli dell'appaltatore, e le verifiche su DURC, congruità della manodopera e sicurezza. Sono adempimenti che, se trascurati, bloccano i pagamenti anche quando il lavoro è stato eseguito correttamente." },
    { type: "table", headers: ["Aspetto", "Subappalto privato", "Subappalto in appalto pubblico"], rows: [
      ["Autorizzazione", "Del committente, salvo diverso accordo (art. 1656 c.c.)", "Della stazione appaltante, previa verifica dei requisiti (art. 119 D.lgs. 36/2023)"],
      ["Pagamento diretto di chi esegue", "Non previsto: si incassa solo dall'appaltatore", "Previsto in casi determinati, tra cui micro e piccole imprese e inadempimento dell'appaltatore"],
      ["Termini di pagamento", "30 giorni, fino a 60 con patto espresso (D.lgs. 231/2002)", "Termini di legge e di contratto, coordinati con la contabilità dell'appalto"],
      ["Trattamento dei lavoratori", "Contratto collettivo applicato dal subappaltatore", "Parità di trattamento economico e normativo rispetto ai dipendenti dell'appaltatore"],
      ["Controlli sul cantiere", "DURC e congruità della manodopera sopra soglia", "DURC, congruità, verifiche antimafia e sicurezza secondo bando e contratto"],
      ["Riserve sulla contabilità", "Nessun documento contabile tipizzato", "Le iscrive solo l'appaltatore: il subappaltatore agisce verso di lui"],
    ] },

    { type: "h3", text: "I passi prima e dopo la firma, con i termini" },
    { type: "ol", items: [
      "Prima della firma — Leggi solo le clausole su pagamenti, ritenute, penali e cessione del credito: sono il 90% del rischio contrattuale",
      "Entro 5 giorni dalla proposta — Invia per iscritto le modifiche richieste, con testo alternativo già pronto per ciascuna clausola",
      "Alla firma — Verifica che l'autorizzazione al subappalto sia stata rilasciata: nel pubblico, non entrare in cantiere prima",
      "Entro 30 giorni dalla fine di ogni lavorazione — Trasmetti la contabilità con il dettaglio delle quantità e chiedi conferma scritta dell'approvazione",
      "Entro 30 o 60 giorni dalla fattura — Se il pagamento non arriva, invia sollecito con conteggio degli interessi di mora del D.lgs. 231/2002",
      "Entro 15 giorni dal sollecito senza riscontro — Valuta diffida formale, richiesta di pagamento diretto nel pubblico e le altre azioni di recupero",
    ] },

    { type: "figure", slot: "contratto-subappalto-clausole-2", alt: "Pagina di contratto di subappalto con la clausola sui termini di pagamento evidenziata a pennarello", caption: "Le clausole che decidono l'incasso stanno in fondo al contratto: sono poche righe e vanno lette per prime." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un'impresa artigiana di cartongesso accetta un subappalto da 78.400 euro su un cantiere privato di ristrutturazione. Il contratto prevede pagamento a sessanta giorni dall'approvazione della contabilità da parte dell'appaltatore, senza alcun termine per l'approvazione stessa, ritenuta del 10% svincolabile a collaudo dell'opera principale e penale giornaliera a carico del solo subappaltatore." },
    { type: "p", text: "Le lavorazioni si chiudono in 47 giorni, con 3.900 euro di lavorazioni aggiuntive richieste a voce dal capocantiere. L'appaltatore non approva la contabilità e non risponde alle PEC. Il termine di pagamento non decorre perché il suo presupposto — l'approvazione — è interamente nelle mani della controparte. La ritenuta del 10%, pari a 7.840 euro, resta bloccata a data indefinita." },
    { type: "p", text: "Il bivio è tra due strade. La prima: proseguire sugli altri lotti dello stesso appaltatore per non compromettere il rapporto commerciale, accumulando altra esposizione. La seconda: fermarsi, contestare formalmente la mancata approvazione della contabilità, mettere in mora con gli interessi del D.lgs. 231/2002 e attivare il recupero sul credito già maturato." },
    { type: "p", text: "Tre clausole avrebbero cambiato l'esito, e sarebbero costate una riga ciascuna. Un termine di trenta giorni per l'approvazione della contabilità, decorso il quale si intende approvata. Un tetto e una data certa per lo svincolo della ritenuta. La conferma scritta obbligatoria per ogni lavorazione aggiuntiva, che avrebbe reso incontestabili i 3.900 euro chiesti a voce." },
    { type: "note", text: "L'errore da non fare: eseguire lavorazioni aggiuntive su richiesta verbale del capocantiere senza conferma scritta. Nel contenzioso quelle opere risultano non ordinate e il loro costo resta a carico di chi le ha eseguite. Lo scenario descritto è illustrativo: importi, tempi ed esiti dipendono dal testo del contratto e dalle circostanze concrete." },

    { type: "timeline", title: "I termini che scandiscono il rapporto di subappalto", steps: [
      { when: "Prima dell'ingresso in cantiere", label: "Autorizzazione al subappalto", detail: "Nel privato per l'art. 1656 c.c., nel pubblico secondo l'art. 119 D.lgs. 36/2023: senza, l'esecuzione è irregolare." },
      { when: "30 giorni dalla fattura", label: "Termine ordinario di pagamento", detail: "Art. 4 D.lgs. 231/2002 nei rapporti tra imprese, salvo patto espresso che lo estenda." },
      { when: "60 giorni", label: "Termine massimo con patto espresso", detail: "Oltre, l'accordo deve essere scritto e non gravemente iniquo per il creditore." },
      { when: "Dal giorno successivo alla scadenza", label: "Interessi di mora commerciali", detail: "Decorrono automaticamente, senza necessità di sollecito o costituzione in mora." },
      { when: "2 anni dalla cessazione dell'appalto", label: "Limite della responsabilità solidale", detail: "Art. 29, comma 2, D.lgs. 276/2003, per retribuzioni, TFR, contributi e premi assicurativi." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Serve sempre l'autorizzazione del committente per subappaltare?", a: "Nel privato l'art. 1656 c.c. vieta all'appaltatore di subappaltare senza autorizzazione del committente, salvo diverso accordo. Nei lavori pubblici l'autorizzazione della stazione appaltante è disciplinata dall'art. 119 D.lgs. 36/2023 e presuppone la verifica dei requisiti. Eseguire prima dell'autorizzazione espone entrambe le imprese a conseguenze rilevanti." },
      { q: "La clausola pay when paid è valida?", a: "Dipende dal testo e dal contesto. Nei rapporti tra imprese si confronta con i limiti del D.lgs. 231/2002 sui termini di pagamento e con la disciplina delle clausole gravemente inique, e presenta profili critici quando trasferisce integralmente sul subappaltatore il rischio di insolvenza del committente. La valutazione va fatta sul singolo contratto." },
      { q: "Posso sospendere i lavori se non mi pagano?", a: "Solo se il contratto lo prevede o se ricorrono i presupposti dell'eccezione di inadempimento dell'art. 1460 c.c., con un inadempimento della controparte grave e proporzionato. Sospendere senza base espone a penali e a contestazioni. La clausola che riconosce il diritto di sospendere dopo un ritardo definito va negoziata prima." },
      { q: "Posso chiedere il pagamento diretto alla stazione appaltante?", a: "Nei lavori pubblici l'art. 119 D.lgs. 36/2023 prevede il pagamento diretto al subappaltatore in casi determinati, tra cui quando si tratta di microimprese o piccole imprese, quando il subappaltatore ne fa richiesta e quando l'appaltatore è inadempiente. Va attivato formalmente e per tempo, non è automatico in ogni situazione." },
      { q: "Chi risponde se l'appaltatore non paga i contributi dei suoi operai?", a: "L'art. 29, comma 2, D.lgs. 276/2003 prevede la responsabilità solidale del committente con appaltatore e subappaltatori, entro due anni dalla cessazione dell'appalto, per retribuzioni, TFR, contributi e premi assicurativi. Le sanzioni civili restano a carico del solo soggetto inadempiente. I lavoratori dispongono anche dell'azione dell'art. 1676 c.c." },
      { q: "La ritenuta a garanzia si può rifiutare?", a: "È una previsione contrattuale, quindi negoziabile. Se non si riesce a eliminarla, vanno pretesi una percentuale ragionevole, un tetto in valore assoluto e soprattutto un termine certo di svincolo ancorato a un evento verificabile. Una ritenuta senza termine di svincolo è liquidità immobilizzata a tempo indeterminato." },
      { q: "Le lavorazioni extra chieste a voce si possono recuperare?", a: "Possono essere recuperate, ma la prova è a carico di chi le ha eseguite e diventa difficile a cantiere chiuso. Servono rapportini controfirmati, foto datate, messaggi che documentino l'ordine e la contabilità delle quantità. La regola operativa è semplice: nessuna lavorazione aggiuntiva senza conferma scritta preventiva." },
      { q: "Il subappaltatore può iscrivere riserve nei lavori pubblici?", a: "No, perché non è parte del contratto con la stazione appaltante e non sottoscrive i documenti contabili dell'appalto. Deve far valere le pretese verso l'appaltatore secondo il contratto di subappalto, e ha interesse a che l'appaltatore iscriva la riserva corrispondente. È un punto da disciplinare espressamente in contratto." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai un contratto di subappalto da firmare o un pagamento fermo su un cantiere già chiuso, il primo passo è leggere le clausole su pagamenti, ritenute e penali. Contattaci dalla pagina contatti: analizziamo il testo, indichiamo le modifiche da chiedere e valutiamo le azioni possibili sul credito già maturato. Se il problema riguarda la regolarità contributiva del cantiere, leggi anche la guida sulla congruità della manodopera." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
