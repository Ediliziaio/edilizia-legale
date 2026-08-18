import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "superbonus-recupero-agenzia-privato",
  title: "Superbonus: l'Agenzia chiede i soldi a me, che sono solo il proprietario",
  excerpt:
    "L'Agenzia notifica l'atto di recupero al beneficiario, non all'impresa. Perché accade, quando risponde davvero il privato, cosa lo tutela e come si costruisce la rivalsa verso chi ha sbagliato.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "17 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "agenzia entrate chiede restituzione superbonus privato",
    "recupero detrazione superbonus beneficiario",
    "responsabilità solidale cessionario",
    "sconto in fattura contestato",
    "dolo o colpa grave superbonus",
  ],
  intro:
    "L'Agenzia delle Entrate recupera la detrazione non spettante presso il beneficiario, cioè il proprietario che ha commissionato i lavori: è lui il titolare del diritto contestato. L'impresa e il cessionario del credito rispondono in solido soltanto se hanno concorso alla violazione, e nei limiti del dolo o della colpa grave previsti dall'art. 121 del D.L. 34/2020.",
};

export const seo = {
  seoTitle: "Superbonus: Agenzia Chiede la Restituzione al Privato",
  metaDescription:
    "L'Agenzia recupera la detrazione dal beneficiario, non dall'impresa. Quando il privato risponde davvero, cosa lo tutela e come esercitare la rivalsa.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: la detrazione appartiene al beneficiario, quindi è a lui che l'Agenzia chiede la restituzione se il requisito manca (art. 121, comma 6, D.L. 34/2020). Il termine: 60 giorni dalla notifica dell'atto per proporre ricorso. L'azione: ricorso con istanza di sospensione ex art. 47 D.lgs. 546/1992, e in parallelo messa in mora di impresa, general contractor e tecnico asseveratore." },

    { type: "h2", text: "Perché l'atto arriva a te e non all'impresa", id: "perche-a-te" },
    { type: "p", text: "La detrazione fiscale è un diritto personale del contribuente che ha sostenuto la spesa. Quando scegli lo sconto in fattura o la cessione del credito non stai cedendo il tuo obbligo verso il fisco: stai trasformando la detrazione in un contributo anticipato dal fornitore, che poi lo recupera come credito d'imposta. Il presupposto — cioè il tuo diritto alla detrazione — resta appeso a te. Se quel presupposto viene meno, l'Agenzia si rivolge a chi ne era titolare." },
    { type: "p", text: "È il meccanismo scritto nell'art. 121, comma 6, del D.L. 34/2020, convertito nella L. 77/2020: in caso di mancata sussistenza dei requisiti, l'importo della detrazione non spettante viene recuperato nei confronti del beneficiario, maggiorato di interessi e sanzioni. Il fornitore e i cessionari rispondono solo per l'eventuale utilizzo irregolare del credito e nei casi di concorso nella violazione. Non è una scelta discrezionale dell'ufficio: è la struttura della norma." },
    { type: "p", text: "Questo spiega la sensazione di ingiustizia che quasi tutti provano aprendo la busta. Hai firmato un contratto chiavi in mano, hai visto arrivare i tecnici, non hai versato un euro grazie allo sconto in fattura, e adesso ti viene chiesto un importo che non hai mai maneggiato. La reazione istintiva — \"io non c'entro nulla, chiedetelo a loro\" — è comprensibile ma non è, da sola, una difesa. La difesa si costruisce su due binari paralleli: quello tributario contro l'atto e quello civile verso chi ha eseguito e asseverato." },

    { type: "figure", slot: "superbonus-recupero-agenzia-privato-1", alt: "Busta dell'Agenzia delle Entrate aperta sul tavolo di casa accanto al fascicolo dei lavori e alle asseverazioni", caption: "L'atto di recupero arriva al proprietario perché la detrazione era sua: la difesa parte dal fascicolo dei lavori." },

    { type: "h2", text: "Detrazione non spettante e credito contestato: due binari diversi", id: "due-binari" },
    { type: "p", text: "Nella pratica si confondono continuamente due contestazioni che hanno destinatari e regole differenti. La prima riguarda la detrazione in capo al beneficiario: l'Agenzia sostiene che il requisito non c'era — l'intervento non era agevolabile, il salto di classe non è stato raggiunto, l'immobile non era conforme, le spese non erano state effettivamente sostenute nel periodo dichiarato. Qui il destinatario naturale sei tu." },
    { type: "p", text: "La seconda riguarda il credito d'imposta in capo a chi lo ha acquistato o ricevuto come sconto e poi lo ha utilizzato in compensazione. Qui l'Agenzia contesta l'utilizzo del credito e si rivolge al fornitore o al cessionario. Le due contestazioni possono viaggiare insieme, ma restano distinte: il fatto che una banca si veda bloccare un credito non significa che tu sia stato accertato, e viceversa." },
    { type: "p", text: "La distinzione conta anche sul piano delle sanzioni e dei termini. Il recupero dei crediti d'imposta segue le regole dell'atto di recupero disciplinato dall'art. 38-bis del D.P.R. 600/1973, con termini di decadenza più lunghi quando il credito viene qualificato come inesistente anziché come non spettante. La qualificazione non è un dettaglio lessicale: cambia la finestra temporale entro cui l'ufficio può agire e il trattamento sanzionatorio applicabile." },

    { type: "table", headers: ["Soggetto", "Che cosa gli viene contestato", "Presupposto della responsabilità"], rows: [
      ["Beneficiario (proprietario, condomino, detentore)", "La detrazione non spettante, con interessi e sanzioni", "È sufficiente che il requisito manchi: la titolarità del diritto è sua"],
      ["Impresa che ha applicato lo sconto in fattura", "Il credito d'imposta utilizzato in compensazione", "Utilizzo irregolare del credito oppure concorso nella violazione"],
      ["Cessionario del credito (banca o altro acquirente)", "Il credito acquistato e compensato", "Concorso nella violazione, con il limite del dolo o della colpa grave dell'art. 121, comma 6-bis"],
      ["Tecnico asseveratore", "Nessun atto tributario: risponde in sede civile e penale", "Asseverazione infedele o verifiche omesse (art. 119, commi 13-bis e 14, D.L. 34/2020)"],
      ["General contractor", "Nessun atto tributario se non ha utilizzato il credito", "Risponde verso di te per inadempimento contrattuale (art. 1218 c.c.)"],
    ] },

    { type: "h2", text: "Fin dove arriva la responsabilità del privato?", id: "responsabilita-privato" },
    { type: "p", text: "Sul piano tributario la posizione del beneficiario è oggettiva: se il requisito non c'era, la detrazione non spettava, e questo prescinde dalla tua buona fede. Il punto su cui la buona fede pesa davvero è un altro, ed è il trattamento sanzionatorio e la qualificazione della condotta. Un conto è il proprietario che ha commissionato lavori realmente eseguiti affidandosi a professionisti abilitati; un altro è chi ha prestato il nome a un'operazione costruita a tavolino." },
    { type: "p", text: "Il dolo e la colpa grave, richiamati dall'art. 121, comma 6-bis, del D.L. 34/2020, sono il filtro che il legislatore ha introdotto per la responsabilità solidale di fornitori e cessionari che abbiano acquisito la documentazione elencata dalla norma. Non è una clausola che riguarda direttamente il beneficiario, ma la logica che esprime — chi ha svolto le verifiche esigibili non risponde della frode altrui — è la stessa che va argomentata nel ricorso quando l'ufficio contesta anche a te un atteggiamento consapevole." },
    { type: "p", text: "Attenzione a una confusione ricorrente. La responsabilità solidale non è un modo per spostare il debito sull'impresa a tua richiesta: è uno strumento dell'Agenzia per aggredire anche altri soggetti quando ricorrono i presupposti. Tu non puoi imporre all'ufficio di rivolgersi altrove. Puoi però documentare il concorso altrui, e quel materiale serve sia nel processo tributario sia, soprattutto, nella causa civile di rivalsa." },

    { type: "h2", text: "Cosa tutela chi ha fatto i controlli documentali?", id: "controlli-documentali" },
    { type: "p", text: "Il fascicolo che hai in casa vale più di qualsiasi argomento generico. Un beneficiario che conserva titolo edilizio, notifica preliminare, visura catastale, asseverazioni tecniche con relativi protocolli, attestati di prestazione energetica ante e post, computo metrico, fatture, bonifici e comunicazione dell'opzione all'Agenzia si presenta con una posizione documentata. Un beneficiario che ha solo un contratto chiavi in mano e nessun altro pezzo di carta parte in salita." },
    { type: "p", text: "Il primo movimento, quindi, non è scrivere all'Agenzia: è ricostruire il fascicolo. Impresa, general contractor e asseveratore hanno l'obbligo di consegnarti copia della documentazione che ti riguarda, e la richiesta va fatta per iscritto via PEC, con un termine breve. Se non rispondono, il silenzio diventa esso stesso un elemento da spendere nella rivalsa." },
    { type: "p", text: "C'è poi un secondo livello di verifica, che quasi nessuno fa in tempo utile. Le asseverazioni depositate all'ENEA e le comunicazioni delle opzioni trasmesse all'Agenzia hanno protocolli e date: confrontarle con le date delle fatture, dei bonifici e dei SAL fa emergere subito se la contestazione riguarda un vizio sostanziale o un disallineamento formale. È una verifica tecnica, non giuridica, e va affidata a un professionista indipendente da chi ha eseguito i lavori." },

    { type: "h2", text: "Lavori realmente eseguiti ma con vizi formali", id: "vizi-formali" },
    { type: "p", text: "È lo scenario più frequente e anche il più fastidioso, perché il cantiere c'è stato, l'immobile è stato davvero riqualificato, e la contestazione riguarda un adempimento. Errori tipici: comunicazione dell'opzione trasmessa oltre il termine, asseverazione depositata dopo la fine dei lavori, importo comunicato diverso da quello fatturato, dati catastali errati, mancanza della notifica preliminare all'organo di vigilanza quando era dovuta." },
    { type: "p", text: "Per una parte di questi vizi l'ordinamento prevede rimedi di regolarizzazione, dalla remissione in bonis alla dichiarazione integrativa, quando l'adempimento omesso ha natura formale e non incide sul presupposto sostanziale dell'agevolazione. Non tutti i vizi sono sanabili e i termini sono stretti: la valutazione va fatta subito, perché alcuni rimedi si chiudono con il decorso del periodo d'imposta o con la notifica dell'atto." },
    { type: "p", text: "Quando invece la regolarizzazione non è più possibile, la linea difensiva si sposta sulla prova sostanziale: dimostrare che l'intervento agevolabile è stato eseguito, che le spese sono state effettivamente sostenute e che i requisiti tecnici sono stati raggiunti. È una difesa che vive di documenti e di perizia tecnica, non di argomenti di equità." },

    { type: "table", headers: ["Situazione contestata", "Posizione tipica dell'ufficio", "Dove si gioca la difesa"], rows: [
      ["Comunicazione dell'opzione tardiva o errata", "Opzione inefficace, detrazione non spettante", "Natura formale del vizio e rimedi di regolarizzazione, se ancora praticabili"],
      ["Salto di classe energetica non raggiunto", "Requisito sostanziale mancante", "Verifica di APE ante e post e della metodologia di calcolo, con perizia tecnica"],
      ["Lavori non ultimati alla data della comunicazione", "Spese non ancora sostenute o SAL non raggiunto", "Documentazione di stato avanzamento, bonifici e verbali di cantiere"],
      ["Immobile non conforme o privo di titolo", "Presupposto edilizio mancante", "Tolleranze costruttive, sanabilità e responsabilità del tecnico che ha attestato"],
      ["Fatture per lavori mai eseguiti", "Credito qualificato come inesistente", "Estraneità del proprietario e denuncia verso chi ha costruito l'operazione"],
    ] },

    { type: "h2", text: "La rivalsa verso impresa, general contractor e asseveratore", id: "rivalsa" },
    { type: "p", text: "Il secondo binario è civile e va aperto subito, non dopo la sentenza tributaria. Il contratto che hai firmato — soprattutto se era un chiavi in mano con sconto integrale — quasi sempre contiene obblighi precisi a carico del fornitore: eseguire l'intervento a regola d'arte, ottenere le asseverazioni, curare gli adempimenti, garantire la spettanza del beneficio. L'inadempimento di quegli obblighi fonda la responsabilità contrattuale ex art. 1218 c.c. e l'obbligo di risarcire il danno ex art. 1223 c.c." },
    { type: "p", text: "Il tecnico asseveratore ha una posizione propria. L'art. 119, comma 14, del D.L. 34/2020 gli impone una polizza di responsabilità civile con massimale adeguato agli interventi asseverati, e proprio quella polizza è spesso la parte più solida della rivalsa quando l'impresa nel frattempo è sparita. Per attivarla servono la comunicazione tempestiva del sinistro e l'individuazione precisa dell'errore professionale contestato." },
    { type: "p", text: "Il danno risarcibile non coincide solo con l'imposta recuperata. Comprende interessi, sanzioni, spese di difesa tributaria e tecnica, e in molti casi il costo dei lavori di adeguamento necessari per raggiungere il requisito mancante. Va quantificato con un conteggio analitico fin dalla prima messa in mora, perché un importo generico indebolisce anche una posizione fondata." },
    { type: "p", text: "Un avvertimento pratico sui tempi. La prescrizione della tua azione verso impresa e professionisti corre per conto suo, indipendentemente dal processo tributario, e il giudizio tributario può durare anni. Per questo la messa in mora via PEC va inviata nelle prime settimane: interrompe la prescrizione, mette la compagnia assicurativa in condizione di aprire il sinistro e fissa la tua posizione prima che le controparti riorganizzino la propria." },

    { type: "h2", text: "Che cosa fare nei primi sessanta giorni", id: "sessanta-giorni" },
    { type: "p", text: "Il termine per impugnare è di sessanta giorni dalla notifica dell'atto, ai sensi dell'art. 21 del D.lgs. 546/1992. È un termine di decadenza: scaduto senza ricorso, l'atto diventa definitivo e la discussione sul merito si chiude, a prescindere da quanto fossero buoni gli argomenti. Ecco perché la sequenza dei primi due mesi va gestita con un calendario, non a sensazione." },
    { type: "ol", items: [
      "Entro 5 giorni: fotografare la relata di notifica e segnare in calendario la scadenza dei 60 giorni, che si calcola da quella data e non dalla data dell'atto",
      "Entro 10 giorni: richiedere per PEC a impresa, general contractor e asseveratore copia integrale del fascicolo, assegnando un termine di 15 giorni per la consegna",
      "Entro 20 giorni: far esaminare la contestazione da un tecnico indipendente, per capire se il requisito manca davvero o se il vizio è di natura formale",
      "Entro 25 giorni: inviare la messa in mora con conteggio analitico del danno a impresa, general contractor e asseveratore, chiedendo l'attivazione della polizza professionale",
      "Entro 40 giorni: valutare l'istanza di autotutela e, quando l'atto lo consente, l'istanza di accertamento con adesione, che sospende il termine di impugnazione per 90 giorni (art. 6 D.lgs. 218/1997)",
      "Entro 60 giorni: notificare il ricorso alla Corte di giustizia tributaria di primo grado, con istanza di sospensione dell'atto",
      "Entro 30 giorni dalla notifica del ricorso: costituirsi in giudizio depositando ricorso e documenti, a pena di inammissibilità",
    ] },
    { type: "p", text: "Due precisazioni ricorrenti. L'istanza di autotutela, da sola, non sospende nulla: se la presenti e resti in attesa della risposta rischi di lasciar scadere il ricorso. L'istanza di accertamento con adesione, invece, produce l'effetto sospensivo previsto dalla legge, ma va presentata quando l'atto la ammette e va gestita come un passaggio della strategia, non come un rinvio." },

    { type: "h2", text: "Si può sospendere la riscossione?", id: "sospensione" },
    { type: "p", text: "Sì, ed è spesso il punto più urgente. L'art. 47 del D.lgs. 546/1992 consente di chiedere al giudice tributario la sospensione dell'atto impugnato quando dall'esecuzione può derivare un danno grave e irreparabile e quando il ricorso presenta profili di fondatezza. La domanda si propone con il ricorso stesso o con atto separato, e viene trattata in una camera di consiglio dedicata." },
    { type: "p", text: "Il danno grave e irreparabile va documentato, non enunciato. Per una famiglia significa produrre la situazione reddituale e patrimoniale, l'esposizione già in essere, l'eventuale unicità dell'immobile e l'impatto concreto di un pagamento immediato. Un'istanza costruita su affermazioni generiche viene trattata come tale." },
    { type: "p", text: "Nei casi di eccezionale urgenza — per esempio quando la riscossione è già in movimento — l'ordinamento processuale prevede la possibilità di un provvedimento provvisorio del presidente prima della camera di consiglio. È uno strumento da usare quando l'urgenza è reale e dimostrabile, non come prassi." },

    { type: "figure", slot: "superbonus-recupero-agenzia-privato-2", alt: "Tabella comparativa stampata con le date delle asseverazioni, delle fatture e dei bonifici affiancate", caption: "Il confronto tra le date di asseverazioni, fatture e bonifici distingue il vizio formale dal requisito mancante." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Una coppia proprietaria di una villetta bifamiliare affida un intervento di isolamento a cappotto e sostituzione della caldaia a un general contractor, con contratto chiavi in mano e sconto in fattura integrale. L'importo dei lavori è di 96.400 euro e nessuno dei due versa somme all'impresa. Tre anni dopo arriva un atto di recupero per una detrazione ritenuta non spettante per 87.300 euro, con interessi e sanzioni. Il motivo indicato: il salto di due classi energetiche non risulterebbe raggiunto." },
    { type: "p", text: "La verifica tecnica indipendente porta a un risultato intermedio, che è la situazione più comune. Il salto di classe è documentato correttamente per l'unità principale, mentre per la seconda unità l'attestato post-intervento contiene un dato di trasmittanza non coerente con la scheda tecnica del materiale posato. Non è un intervento inesistente: è un errore di attestazione che riguarda una porzione dell'importo, quantificata dal tecnico in circa 31.700 euro di detrazione." },
    { type: "p", text: "Qui si apre il bivio. La prima strada è il ricorso pieno con istanza di sospensione, sostenendo che l'errore è circoscritto e che la contestazione dell'intero importo è sproporzionata rispetto al vizio riscontrato; è la via che difende la parte corretta dell'agevolazione, ma comporta tempi processuali lunghi. La seconda è tentare il confronto in adesione sulla porzione realmente viziata, riducendo il perimetro della contestazione e chiudendo prima, con la consapevolezza che sulla parte definita non si torna indietro. In entrambi i casi la messa in mora dell'asseveratore e l'attivazione della sua polizza vanno fatte subito, perché l'errore contestato è tecnico e documentale." },
    { type: "note", text: "L'errore da non fare: aspettare l'esito del giudizio tributario prima di scrivere all'impresa e all'asseveratore. La prescrizione della rivalsa civile corre in parallelo e le imprese di quel periodo cambiano assetto o cessano l'attività con frequenza. Lo scenario descritto è un caso illustrativo: l'esito dipende dai documenti, dalla motivazione dell'atto e dalle circostanze specifiche." },

    { type: "timeline", title: "I termini che decorrono dalla notifica", steps: [
      { when: "Giorno 0", label: "Notifica dell'atto di recupero", detail: "Tutti i termini decorrono da questa data, non da quella indicata sull'atto." },
      { when: "Entro 60 giorni", label: "Ricorso alla Corte di giustizia tributaria", detail: "Termine di decadenza ex art. 21 D.lgs. 546/1992, con istanza di sospensione ex art. 47." },
      { when: "+90 giorni", label: "Sospensione da accertamento con adesione", detail: "L'istanza ex D.lgs. 218/1997, quando ammessa, sospende il termine di impugnazione." },
      { when: "30 giorni dal ricorso", label: "Costituzione in giudizio", detail: "Deposito di ricorso e documenti: la mancata costituzione rende il ricorso inammissibile." },
      { when: "5 o 8 anni", label: "Decadenza dell'azione di recupero", detail: "Finestra più ampia quando il credito è qualificato inesistente anziché non spettante (art. 38-bis D.P.R. 600/1973)." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Perché l'Agenzia non chiede i soldi all'impresa che ha incassato il credito?", a: "Perché la detrazione era un tuo diritto: l'art. 121, comma 6, del D.L. 34/2020 prevede che l'importo non spettante venga recuperato presso il beneficiario. L'impresa e il cessionario rispondono per l'utilizzo irregolare del credito e nei casi di concorso nella violazione, ma sono contestazioni distinte con presupposti propri." },
      { q: "Ho fatto lo sconto in fattura e non ho pagato nulla: devo restituire soldi mai ricevuti?", a: "Il vantaggio economico lo hai ricevuto sotto forma di sconto sul corrispettivo, quindi il recupero riguarda un beneficio effettivamente goduto. Questo però non chiude il discorso: se il vizio dipende dall'impresa o dall'asseveratore, il costo va traslato su di loro con l'azione civile di rivalsa e con la polizza professionale." },
      { q: "La banca che ha comprato il credito risponde insieme a me?", a: "Solo se ricorrono i presupposti del concorso nella violazione. L'art. 121, comma 6-bis, del D.L. 34/2020 limita la responsabilità solidale del cessionario ai casi di dolo o colpa grave, quando abbia acquisito la documentazione richiesta dalla norma. È una valutazione che spetta all'ufficio e al giudice, non una tua facoltà di scelta." },
      { q: "Posso ancora sanare un errore nella comunicazione dell'opzione?", a: "Dipende dal tipo di vizio e da quanto tempo è passato. Per gli adempimenti di natura formale l'ordinamento prevede rimedi di regolarizzazione con termini precisi, che in genere si chiudono prima della notifica dell'atto o del controllo. La verifica va fatta subito, prima di impostare qualunque altra difesa." },
      { q: "Se ho scelto l'adesione, perdo la possibilità di fare ricorso?", a: "No, ma i tempi cambiano. L'istanza di accertamento con adesione sospende per novanta giorni il termine per impugnare, e se il confronto non porta a un accordo il ricorso resta proponibile nel termine risultante dalla sospensione. Se invece l'adesione si perfeziona, sulla parte definita non si torna indietro." },
      { q: "L'impresa è cessata: la rivalsa è persa?", a: "Non necessariamente. Restano percorribili la polizza del tecnico asseveratore prevista dall'art. 119, comma 14, del D.L. 34/2020, la posizione del general contractor se soggetto diverso dall'esecutore, e in alcuni casi la responsabilità personale di amministratori e professionisti coinvolti. Ogni strada richiede però una messa in mora tempestiva." },
      { q: "I lavori sono stati fatti davvero: questo basta a vincere?", a: "È un elemento decisivo ma non automatico. L'esecuzione effettiva contrasta la qualificazione di credito inesistente e sostiene la difesa sul merito, però l'agevolazione richiede anche requisiti tecnici e adempimenti specifici. La difesa efficace dimostra insieme l'esecuzione, la spesa sostenuta e il raggiungimento del requisito contestato." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai ricevuto una comunicazione o un atto di recupero, la prima cosa da stabilire è che cosa ti viene contestato davvero: un requisito tecnico mancante o un adempimento formale. Da quella distinzione dipende tutto il resto, compresa la possibilità di regolarizzare. Contattaci dalla pagina contatti con l'atto e il fascicolo dei lavori: esaminiamo la motivazione, verifichiamo i termini ancora aperti e ti indichiamo su quali fronti conviene muoversi." },
    { type: "p", text: "Se il problema è a monte — lo sconto in fattura promesso e mai applicato, oppure la cessione che non si è perfezionata — la guida dedicata a quel caso spiega quali rimedi contrattuali restano e come recuperare gli acconti versati." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
