import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "quanto-costa-causa-costruttore",
  title: "Quanto costa davvero fare causa a un costruttore",
  excerpt:
    "Compenso dell'avvocato, contributo unificato, CTU, consulente di parte e mediazione: tutte le voci di spesa di una causa per difetti costruttivi, chi le anticipa e chi le paga alla fine.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "17 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "quanto costa fare causa al costruttore",
    "costi causa difetti costruttivi",
    "contributo unificato cause civili",
    "spese CTU chi paga",
    "compenso avvocato causa edilizia",
    "recupero spese legali",
  ],
  intro:
    "Una causa per difetti costruttivi comporta il compenso dell'avvocato secondo i parametri forensi, il contributo unificato per scaglione di valore, le anticipazioni forfettarie, il consulente tecnico di parte e il fondo spese del consulente d'ufficio. Chi perde è di regola condannato a rimborsare le spese, ma l'anticipo resta a carico di chi agisce.",
};

export const seo = {
  seoTitle: "Quanto Costa Fare Causa al Costruttore: le Voci",
  metaDescription:
    "Compenso legale, contributo unificato, CTU, CTP e mediazione: tutte le voci di spesa di una causa per difetti costruttivi e chi le paga alla fine.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: chi perde la causa è di regola condannato a rimborsare le spese processuali alla parte vittoriosa (art. 91 c.p.c.). Il termine: le spese si anticipano man mano, dal deposito dell'atto fino al deposito della consulenza tecnica. L'azione: prima di agire, l'avvocato è tenuto a comunicarti per iscritto il prevedibile costo della prestazione." },

    { type: "h2", text: "Perché nessuno ti dice quanto costa", id: "perche-nessuno" },
    { type: "p", text: "Se hai provato a informarti, avrai notato che la domanda «quanto costa?» riceve quasi sempre la stessa risposta: dipende. Non è una scusa, ma non è nemmeno una risposta utile. Il costo di una causa per difetti costruttivi si può scomporre in voci precise, e ciascuna di quelle voci si può stimare con un margine ragionevole già al primo incontro." },
    { type: "p", text: "La ragione per cui il totale varia è che due elementi non sono noti all'inizio: quanto durerà la causa e quanto costerà il consulente tecnico d'ufficio. Tutto il resto — contributo unificato, anticipazioni, compenso del difensore, tecnico di parte — si può quantificare con buona approssimazione appena si conosce il valore della controversia." },
    { type: "p", text: "Questa pagina mette le voci in fila, indica chi le anticipa e chi le sopporta alla fine, e ti dà i criteri per decidere se agire abbia senso nel tuo caso. Non troverai promesse sull'esito: quello dipende dai fatti e dalle prove, e nessuno può garantirlo in anticipo." },
    { type: "p", text: "Vale la pena ricordare un diritto che spesso non viene esercitato. La legge professionale forense impone all'avvocato di comunicare in forma scritta, su richiesta e comunque all'atto del conferimento dell'incarico, il prevedibile costo della prestazione. Chiedere un preventivo scritto e dettagliato per fasi non è una diffidenza: è la prassi corretta." },

    { type: "figure", slot: "quanto-costa-causa-costruttore-1", alt: "Scrivania con un preventivo legale dettagliato per fasi, una calcolatrice e il fascicolo di una perizia tecnica", caption: "Il preventivo scritto per fasi è il documento che rende confrontabili due proposte professionali." },

    { type: "h2", text: "Le voci di spesa, una per una", id: "voci-di-spesa" },
    { type: "p", text: "Una causa civile per difetti costruttivi genera spese di tre tipi: quelle che paghi allo Stato, quelle che paghi ai professionisti e quelle che paghi per le verifiche tecniche. La tabella che segue le elenca tutte, comprese quelle che nei preventivi approssimativi tendono a sparire." },
    { type: "table", headers: ["Voce di spesa", "A chi si paga", "Quando si paga", "Note"], rows: [
      ["Contributo unificato", "Erario", "Al deposito dell'atto introduttivo", "Importo per scaglione di valore della causa; ridotto nei procedimenti speciali"],
      ["Anticipazioni forfettarie", "Erario", "Insieme al contributo unificato", "Importo fisso di modesta entità in luogo delle vecchie marche"],
      ["Compenso dell'avvocato", "Il tuo difensore", "Di norma per acconti legati alle fasi", "Determinato secondo i parametri forensi o per accordo scritto"],
      ["Spese generali e oneri", "Il tuo difensore", "Con il compenso", "Rimborso forfetario, cassa previdenziale e IVA si sommano all'imponibile"],
      ["Consulente tecnico di parte", "Il tuo tecnico", "All'incarico e a fine operazioni", "Ingegnere, architetto o geometra che ti assiste durante la perizia"],
      ["Fondo spese e compenso del CTU", "Il consulente d'ufficio", "Su ordine del giudice, in corso di causa", "Di regola anticipato da chi ha chiesto la consulenza"],
      ["Saggi, scavi e prove di laboratorio", "Imprese e laboratori", "Durante le operazioni peritali", "Voce eventuale ma spesso rilevante nei difetti occulti"],
      ["Indennità di mediazione", "Organismo di mediazione", "All'avvio e al proseguimento", "Prevista una spesa di avvio e un'indennità per scaglione di valore"],
      ["Notifiche e copie", "Ufficiale giudiziario, cancelleria", "In corso di causa", "Voce minore ma da mettere in conto"],
      ["Registrazione della sentenza", "Erario", "Dopo la decisione", "Imposta dovuta in solido tra le parti nei casi previsti"],
    ] },
    { type: "p", text: "Due avvertenze oneste. La prima: il compenso dell'avvocato indicato nei preventivi è quasi sempre l'imponibile, a cui si aggiungono il rimborso forfetario per spese generali, il contributo integrativo alla cassa previdenziale e l'IVA. La seconda: il fondo spese del consulente d'ufficio arriva a causa già iniziata, quando hai già sostenuto le altre voci, ed è il momento in cui molti si trovano impreparati." },

    { type: "h2", text: "Il compenso dell'avvocato: come si calcola?", id: "compenso-avvocato" },
    { type: "p", text: "Il compenso si determina in base ai parametri forensi fissati con decreto ministeriale, che individuano un valore medio per ciascuna fase del giudizio all'interno di scaglioni legati al valore della causa. Le fasi sono quattro: studio della controversia, introduttiva, istruttoria e decisionale. Il giudice, quando liquida le spese, ragiona per fasi effettivamente svolte." },
    { type: "p", text: "Questo ha una conseguenza pratica utile. Se la causa si chiude presto — per esempio con una transazione dopo la consulenza tecnica — le fasi svolte sono meno, e il compenso liquidabile è inferiore a quello di un giudizio arrivato a sentenza. Un preventivo costruito per fasi ti permette di sapere in anticipo dove si ferma la spesa se la vicenda si definisce prima." },
    { type: "p", text: "La pattuizione tra te e il tuo avvocato è comunque libera e può essere diversa dai parametri: a tempo, forfetaria, per singole fasi, o a percentuale sul valore dell'affare. Deve però essere scritta e chiara. I parametri restano il riferimento per la liquidazione giudiziale, cioè per quanto la controparte potrà essere condannata a rimborsarti." },
    { type: "p", text: "È qui che nasce un equivoco frequente. Il compenso che pattuisci con il tuo difensore e quello che il giudice pone a carico della controparte non coincidono quasi mai. Se hai concordato un compenso superiore ai parametri, la differenza resta a tuo carico anche vincendo. Chiedere che il preventivo indichi entrambi i valori è ragionevole." },

    { type: "h2", text: "Il contributo unificato: quanto paghi per iscrivere la causa", id: "contributo-unificato" },
    { type: "p", text: "Il contributo unificato è la somma dovuta allo Stato per l'iscrizione a ruolo e dipende dal valore della controversia, cioè dall'importo che chiedi. Si versa al deposito dell'atto e non è recuperabile in quel momento: rientra tra le spese che il giudice potrà porre a carico del soccombente alla fine. Gli importi sono fissati per scaglioni." },
    { type: "table", headers: ["Valore della causa", "Contributo unificato per il primo grado", "Osservazioni"], rows: [
      ["Fino a 1.100 euro", "43 euro", "Scaglione minimo"],
      ["Da 1.100 a 5.200 euro", "98 euro", "Tipico delle contestazioni su singole lavorazioni"],
      ["Da 5.200 a 26.000 euro", "237 euro", "Scaglione in cui rientrano molte cause per difetti circoscritti"],
      ["Da 26.000 a 52.000 euro", "518 euro", "Ripristini di media entità su un'unità immobiliare"],
      ["Da 52.000 a 260.000 euro", "759 euro", "Interventi strutturali o difetti su parti comuni"],
      ["Da 260.000 a 520.000 euro", "1.214 euro", "Contenziosi condominiali di ampia portata"],
      ["Oltre 520.000 euro", "1.686 euro", "Scaglione massimo per il primo grado"],
      ["Valore indeterminabile", "518 euro", "Quando la domanda non è quantificabile in denaro"],
    ] },
    { type: "p", text: "Tre precisazioni che incidono sul conto finale. Il contributo aumenta nei gradi di impugnazione, secondo le maggiorazioni previste dalla legge. È invece ridotto per i procedimenti speciali, categoria in cui rientrano l'accertamento tecnico preventivo e il procedimento d'ingiunzione. Infine, la mancata indicazione dei dati richiesti nell'atto comporta un aumento: è un errore evitabile che costa denaro." },
    { type: "p", text: "Gli importi indicati sono quelli previsti dalla normativa sulle spese di giustizia e vanno comunque verificati al momento del deposito, perché sono soggetti ad aggiornamento. Alle somme in tabella si aggiungono le anticipazioni forfettarie dovute per ciascun procedimento." },

    { type: "h2", text: "Chi anticipa e chi paga alla fine?", id: "chi-anticipa" },
    { type: "p", text: "Le due domande hanno risposte diverse, ed è proprio questa distinzione che va capita prima di iniziare. Durante la causa vale il principio dell'anticipazione: ogni parte paga le spese degli atti che compie e anticipa quelle degli atti che chiede. Se sei tu a chiedere la consulenza tecnica, di regola sarai tu ad anticipare il fondo spese ordinato dal giudice." },
    { type: "p", text: "Alla fine vale invece il principio di soccombenza: il giudice, con la sentenza che chiude il processo davanti a lui, condanna la parte soccombente al rimborso delle spese a favore dell'altra e ne liquida l'ammontare. Se vinci, la controparte dovrà rimborsarti contributo unificato, compenso liquidato secondo i parametri e spese di consulenza poste a suo carico." },
    { type: "p", text: "Fra i due principi c'è però uno scarto di tempo e uno scarto di importo. Lo scarto di tempo è la durata del processo: anticipi oggi e recuperi, se recuperi, dopo anni. Lo scarto di importo è la differenza tra ciò che hai pattuito con il tuo difensore e ciò che il giudice liquida. Ragionare come se le spese fossero comunque a carico dell'altro è il modo più diretto per restare senza liquidità a metà causa." },
    { type: "p", text: "Va poi considerata la capienza della controparte. Una condanna alle spese vale quanto il patrimonio di chi deve pagarla: se il costruttore è una società inattiva o già cancellata, il titolo esiste ma potrebbe non tradursi in incasso. La verifica sulla solvibilità della controparte va fatta prima di agire, non dopo la sentenza." },

    { type: "h2", text: "Quando il giudice compensa le spese", id: "compensazione" },
    { type: "p", text: "La compensazione è l'ipotesi in cui il giudice non pone le spese a carico di nessuno, o le divide, lasciando che ciascuna parte sopporti le proprie. È l'eventualità che i preventivi ottimistici tendono a non menzionare, e invece va messa in conto perché nelle controversie tecniche non è rara." },
    { type: "p", text: "Il codice la consente in caso di soccombenza reciproca, cioè quando ciascuna parte vince su alcuni punti e perde su altri, oppure in presenza di ragioni di particolare rilievo espressamente indicate in motivazione, come l'assoluta novità della questione o un mutamento della giurisprudenza sulle questioni dirimenti. Nelle cause edilizie la soccombenza reciproca ricorre spesso, perché il consulente riconosce alcuni difetti e ne esclude altri." },
    { type: "p", text: "L'effetto pratico è concreto: puoi ottenere ragione sul merito e trovarti comunque a sopportare le tue spese. È una delle ragioni per cui una domanda calibrata sul quantificato dal tecnico è preferibile a una domanda gonfiata. Chiedere molto più del dovuto aumenta il contributo unificato e prepara il terreno a una compensazione parziale." },

    { type: "h2", text: "ATP, mediazione o causa: il confronto economico", id: "confronto" },
    { type: "p", text: "Non tutte le strade costano uguale e non tutte producono lo stesso risultato. La tabella confronta i tre percorsi tipici sotto il profilo del costo, del tempo e di ciò che ottieni concretamente alla fine." },
    { type: "table", headers: ["Percorso", "Costo relativo", "Tempo indicativo", "Che cosa ottieni"], rows: [
      ["Mediazione", "Il più contenuto: spesa di avvio e indennità per scaglione, oltre al compenso del difensore", "Settimane o pochi mesi", "Un accordo che, sottoscritto dagli avvocati, può costituire titolo esecutivo"],
      ["Accertamento tecnico preventivo", "Intermedio: contributo ridotto ma compenso del CTU pieno", "Da alcuni mesi a poco più di un anno", "Una relazione formata in contraddittorio e, nel 696-bis, un possibile verbale di conciliazione"],
      ["Causa ordinaria di merito", "Il più alto: tutte le voci, per l'intera durata e per fasi", "Diversi anni, variabili per tribunale", "Una sentenza che accerta responsabilità e condanna al pagamento"],
      ["ATP seguito da causa", "Somma dei due, con risparmio sull'istruttoria del merito", "Più lungo in assoluto, ma con la prova già formata", "Prova tecnica consolidata più sentenza"],
    ] },
    { type: "p", text: "Il confronto va letto insieme a un dato spesso trascurato: la mediazione gode di agevolazioni fiscali previste dalla normativa di settore, sotto forma di credito d'imposta entro limiti determinati per l'indennità dovuta all'organismo e, nei casi previsti, per il compenso del difensore. È un elemento che riduce il costo effettivo del tentativo bonario e vale la pena verificarlo con il proprio consulente." },

    { type: "h2", text: "Conviene davvero agire?", id: "conviene-agire" },
    { type: "p", text: "La domanda non ha una risposta di principio, ma ha un metodo. Si mette da un lato il danno quantificato da un tecnico, dall'altro il costo prevedibile del percorso, e si valuta il rapporto tenendo conto del rischio e del tempo. Quando il costo prevedibile supera un terzo del danno quantificato, la via giudiziale va soppesata con particolare attenzione." },
    { type: "p", text: "Vanno però messi nel conto anche elementi che non sono spese. Il primo è il valore dell'immobile: un difetto strutturale non riparato pesa sulla vendita ben oltre il costo del ripristino. Il secondo è il decorso dei termini: rinunciare oggi perché la spesa spaventa può significare trovarsi fuori termine tra un anno, quando il difetto sarà peggiorato." },
    { type: "p", text: "Il terzo elemento è la presenza di un assicuratore. Se esiste una polizza decennale postuma o una polizza di responsabilità civile del costruttore o del progettista, la controparte economica cambia e cambia anche la probabilità che una definizione bonaria sia praticabile. È una verifica da fare all'inizio, sul rogito e sulla documentazione contrattuale." },
    { type: "ol", items: [
      "Entro 15 giorni: fai quantificare il danno da un tecnico con un computo metrico analitico — senza un numero non è possibile alcuna valutazione economica",
      "Entro 20 giorni: verifica su rogito e capitolato l'esistenza di polizze e la solidità patrimoniale delle possibili controparti",
      "Entro 30 giorni: chiedi al tuo avvocato un preventivo scritto per fasi, che distingua compenso pattuito e importo liquidabile a carico della controparte",
      "Entro 45 giorni: invia una richiesta scritta e documentata alla controparte, allegando il computo, con termine di 30 giorni per rispondere",
      "Entro 90 giorni: se la risposta manca o è generica, scegli tra mediazione, accertamento tecnico preventivo e causa in base al confronto costo-beneficio",
      "Prima di ogni scadenza di decadenza o prescrizione: compi comunque un atto interruttivo, indipendentemente dal percorso scelto",
    ] },

    { type: "h2", text: "Il patto di quota lite e i suoi limiti", id: "quota-lite" },
    { type: "p", text: "Molti chiedono se sia possibile pagare l'avvocato solo in caso di vittoria. La risposta richiede una distinzione. La legge professionale consente di pattuire il compenso a percentuale sul valore dell'affare o su quanto si prevede che il cliente possa trarne, purché l'accordo sia scritto e proporzionato all'attività da svolgere." },
    { type: "p", text: "È invece vietato il patto con cui l'avvocato riceva come compenso, in tutto o in parte, una quota del bene oggetto della prestazione o della ragione litigiosa. La differenza è sottile ma reale: si può parametrare il compenso al risultato economico, non trasformare il difensore in cointeressato al bene conteso." },
    { type: "p", text: "Nella pratica, la formula più diffusa e trasparente resta il preventivo per fasi, eventualmente con una componente variabile legata al risultato concordata per iscritto all'inizio. Diffida delle proposte che promettono di non farti anticipare nulla senza spiegare come vengono coperti contributo unificato e fondo spese del consulente: quelle voci esistono comunque e qualcuno deve versarle." },
    { type: "p", text: "Va infine ricordato il patrocinio a spese dello Stato, che copre difensore e spese processuali per chi ha un reddito imponibile annuo entro il limite fissato dalla legge e aggiornato periodicamente con decreto, incrementato per ciascun familiare convivente. Se ritieni di rientrarvi, chiedilo prima di conferire l'incarico: l'ammissione va richiesta al consiglio dell'ordine competente." },

    { type: "figure", slot: "quanto-costa-causa-costruttore-2", alt: "Computo metrico stampato con le voci di ripristino di una copertura, evidenziate con marcatore", caption: "Il computo metrico analitico è il documento che trasforma un difetto in un numero: senza, nessuna valutazione economica è possibile." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Hai un appartamento in una palazzina di sei unità consegnata cinque anni fa. Infiltrazioni dal terrazzo di copertura hanno danneggiato il soffitto di due stanze. Il tuo tecnico quantifica il ripristino della guaina in 27.400 euro, di competenza condominiale, e i danni interni alla tua unità in 6.850 euro. La tua domanda individuale vale quindi 6.850 euro, non 34.250." },
    { type: "p", text: "Su quello scaglione il contributo unificato per il primo grado è di 237 euro, cui si aggiungono le anticipazioni forfettarie. Il compenso del tuo tecnico di parte, per due sopralluoghi, computo e osservazioni alla perizia, ti viene preventivato in 2.300 euro oltre oneri. Il fondo spese del consulente d'ufficio, in una causa con saggi sulla copertura, è la voce meno prevedibile e va ipotizzata in modo prudenziale." },
    { type: "p", text: "Sommando compenso del difensore per le fasi previste, contributo, tecnico di parte e quota del consulente d'ufficio, il costo prevedibile del percorso giudiziale si avvicina in modo significativo al valore della tua domanda individuale. È il segnale che la causa individuale, presa da sola, va soppesata con attenzione." },
    { type: "p", text: "Qui si apre il bivio, e non è quello che sembra. La prima strada è agire da solo per i 6.850 euro, con un rapporto costo-beneficio sfavorevole. La seconda è sollecitare il condominio ad attivarsi per il difetto della parte comune, condividendo l'accertamento tecnico e i suoi costi tra sei unità, e coltivare la tua domanda interna in aggiunta. Nel secondo caso il costo pro capite dell'accertamento cambia scala, e cambia anche il peso negoziale verso il costruttore." },
    { type: "note", text: "L'errore da non fare: gonfiare la domanda per «avere margine di trattativa». Una domanda sovrastimata aumenta il contributo unificato, espone alla soccombenza parziale e favorisce la compensazione delle spese. Lo scenario descritto è illustrativo: importi, tempi ed esiti dipendono dal caso concreto e dal tribunale competente." },

    { type: "timeline", title: "Quando arriva ciascuna spesa", steps: [
      { when: "Prima del deposito", label: "Perizia di parte e computo metrico", detail: "È la spesa che precede tutte le altre e senza la quale non si può valutare se agire." },
      { when: "Al deposito dell'atto", label: "Contributo unificato e anticipazioni forfettarie", detail: "Si versano all'iscrizione a ruolo, in base allo scaglione di valore della domanda." },
      { when: "In corso di causa", label: "Fondo spese del consulente d'ufficio", detail: "Ordinato dal giudice al momento del conferimento dell'incarico, di regola a carico di chi ha chiesto la consulenza." },
      { when: "Per fasi del giudizio", label: "Acconti sul compenso del difensore", detail: "Studio, fase introduttiva, istruttoria e decisionale: se la causa si chiude prima, le fasi svolte sono meno." },
      { when: "Con la sentenza", label: "Liquidazione delle spese e soccombenza", detail: "Il giudice pone le spese a carico del soccombente o le compensa, in tutto o in parte, motivando." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Se vinco, recupero tutto quello che ho speso?", a: "Non necessariamente. Il giudice liquida le spese secondo i parametri forensi, che possono essere inferiori al compenso pattuito con il tuo difensore. La differenza resta a tuo carico. Inoltre il recupero effettivo dipende dalla capienza patrimoniale della controparte, che va verificata prima di agire." },
      { q: "Posso chiedere un preventivo scritto prima di iniziare?", a: "Sì, ed è un tuo diritto. La legge professionale forense impone all'avvocato di comunicare in forma scritta il prevedibile costo della prestazione. Chiedi che il preventivo sia articolato per fasi e che distingua l'imponibile dagli oneri accessori, così da poter confrontare proposte diverse su basi omogenee." },
      { q: "Chi paga il consulente tecnico d'ufficio?", a: "Il giudice ordina un fondo spese, di regola a carico della parte che ha chiesto la consulenza, e liquida il compenso a fine operazioni. La decisione definitiva sul carico avviene con la sentenza: il costo può essere posto a carico del soccombente o ripartito tra le parti." },
      { q: "La mediazione costa molto meno di una causa?", a: "Di regola sì, perché prevede una spesa di avvio e un'indennità commisurata al valore, senza consulenza d'ufficio né fasi processuali. La normativa prevede inoltre agevolazioni fiscali entro limiti determinati. Resta però un percorso che si chiude solo se entrambe le parti trovano un accordo." },
      { q: "Che cosa succede se il giudice compensa le spese?", a: "Ciascuna parte sopporta le proprie, quindi non ottieni il rimborso di contributo unificato, compenso del difensore e consulenze. Accade tipicamente in caso di soccombenza reciproca, quando alcune domande sono accolte e altre respinte, oppure per ragioni di particolare rilievo indicate in motivazione." },
      { q: "Posso accedere al patrocinio a spese dello Stato?", a: "È possibile se il reddito imponibile annuo rientra nel limite fissato dalla legge e aggiornato periodicamente con decreto ministeriale, incrementato per ciascun familiare convivente. La domanda va presentata al consiglio dell'ordine competente, preferibilmente prima di conferire l'incarico difensivo. L'ammissione copre il compenso del difensore e le spese processuali nei limiti stabiliti dalla legge." },
      { q: "L'ATP costa meno di una causa ordinaria?", a: "Il contributo unificato è ridotto trattandosi di procedimento speciale, ma il compenso del consulente d'ufficio è pieno e resta la voce principale. Il vantaggio economico dell'accertamento preventivo non sta tanto nel costo assoluto quanto nel fatto di ottenere presto un numero su cui decidere." },
      { q: "Conviene agire se il danno è di poche migliaia di euro?", a: "Va valutato caso per caso confrontando il danno quantificato con il costo prevedibile del percorso. Quando gli importi sono vicini, spesso ha più senso una richiesta stragiudiziale documentata o una mediazione, oppure verificare se il difetto riguardi parti comuni e possa essere gestito in forma condominiale." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se stai valutando se agire, il primo passo non è scegliere l'avvocato: è avere un numero. Fai quantificare il difetto da un tecnico con un computo analitico, poi chiedi un preventivo scritto per fasi e confronta le due cifre. Contattaci dalla pagina contatti: sulla base dei documenti che hai, indichiamo quale percorso è proporzionato al tuo caso e quali spese comporta." },
    { type: "p", text: "Se non hai ancora fatto accertare i difetti, leggi anche [la guida all'accertamento tecnico preventivo](/guide/accertamento-tecnico-preventivo): è il passaggio che, nella maggior parte delle situazioni, consente di decidere con cognizione di causa prima di impegnarsi in un giudizio." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
