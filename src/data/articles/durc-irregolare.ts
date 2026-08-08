import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "durc-irregolare",
  title: "DURC irregolare: come sbloccare pagamenti e gare prima che sia tardi",
  excerpt:
    "Hai ricevuto il preavviso di accertamento negativo? Hai quindici giorni per pagare, rateizzare o contestare. Cosa blocca davvero un DURC irregolare e come si regolarizza in tempo.",
  category: "Imprese",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "durc irregolare cosa fare",
    "durc negativo blocco pagamenti appalto",
    "preavviso di accertamento negativo durc 15 giorni",
    "regolarizzare durc rateizzazione",
    "durc di congruità manodopera",
  ],
  intro:
    "Prima di emettere un DURC irregolare gli enti devono inviare un invito a regolarizzare, con un termine di quindici giorni. In quel periodo l'impresa può pagare, ottenere una rateizzazione o contestare l'addebito. Superato il termine senza intervento, il DURC diventa negativo e blocca pagamenti degli appalti e partecipazione alle gare.",
};

export const seo = {
  seoTitle: "DURC Irregolare: Cosa Fare nei 15 Giorni del Preavviso",
  metaDescription:
    "Preavviso di accertamento negativo DURC? Hai 15 giorni per pagare, rateizzare o contestare. Cosa si blocca davvero e come regolarizzare in tempo.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: prima di emettere un DURC negativo, INPS, INAIL e Casse Edili devono inviare l'invito a regolarizzare previsto dall'art. 4 del D.M. 30 gennaio 2015. Il termine: quindici giorni dalla ricezione del preavviso via PEC. L'azione: entro quel termine puoi pagare, ottenere una rateizzazione o contestare l'addebito documenti alla mano." },

    { type: "h2", text: "Che cosa blocca davvero un DURC irregolare?", id: "cosa-blocca" },
    { type: "p", text: "Il DURC — Documento Unico di Regolarità Contributiva — attesta che l'impresa è in regola con i versamenti verso INPS, INAIL e, per il settore edile, la Cassa Edile. Ha una validità di 120 giorni dalla data della verifica e viene richiesto in via telematica tramite il servizio Durc On Line, disciplinato dal D.M. 30 gennaio 2015. Finché è regolare nessuno lo nota; quando smette di esserlo, si accorge di quanto pesa tutta l'impresa insieme." },
    { type: "p", text: "L'irregolarità non produce una multa: produce un blocco. I pagamenti degli appalti pubblici si fermano, la partecipazione alle gare diventa una causa di esclusione, i benefici contributivi vengono meno. Per un'impresa edile che lavora con stazioni appaltanti o con general contractor, il DURC irregolare è — insieme al committente che non paga — l'emergenza più seria che possa capitare." },
    { type: "table", headers: ["Ambito", "Effetto del DURC irregolare", "Riferimento"], rows: [
      ["Pagamenti di SAL in appalti pubblici", "La stazione appaltante attiva l'intervento sostitutivo: trattiene l'importo del debito contributivo dal certificato di pagamento e lo versa direttamente agli enti", "D.M. 30 gennaio 2015; D.lgs. 36/2023"],
      ["Partecipazione a gare pubbliche", "Esclusione per violazioni gravi in materia contributiva e previdenziale definitivamente accertate", "art. 94, comma 6, D.lgs. 36/2023"],
      ["Benefici normativi e contributivi", "Perdita delle agevolazioni per il periodo di irregolarità", "art. 1, comma 1175, L. 296/2006"],
      ["Subappalti pubblici", "Il subappaltatore con DURC irregolare non può essere autorizzato né pagato", "art. 119 D.lgs. 36/2023"],
    ] },
    { type: "p", text: "Un correttivo esiste: l'art. 3, comma 3, del D.M. 30 gennaio 2015 stabilisce che uno scostamento non grave — pari o inferiore a 150 euro, comprensivo di sanzioni e interessi — non impedisce il rilascio del DURC regolare. Sopra quella soglia, però, l'importo del debito non conta più: 9.800 euro bloccano esattamente quanto 98.000." },

    { type: "h2", text: "Il preavviso di accertamento negativo: quanto tempo hai davvero?", id: "preavviso-15-giorni" },
    { type: "p", text: "Il sistema non passa dal regolare al negativo senza avvisare. L'art. 4 del D.M. 30 gennaio 2015 impone all'ente che rileva l'irregolarità di inviare all'impresa — o al suo intermediario delegato — un invito a regolarizzare tramite PEC, assegnando un termine di quindici giorni. Solo se il termine scade senza esito il DURC viene emesso con esito negativo." },
    { type: "p", text: "Il problema è che quindici giorni di calendario si riducono in fretta. La PEC spesso viene letta con qualche giorno di ritardo; la verifica di ciò che è davvero dovuto richiede l'estratto conto e le denunce; il pagamento va eseguito con le causali corrette; la rateizzazione, se serve, ha un'istruttoria che non si chiude in un pomeriggio. Il tempo utile per decidere, in pratica, è la prima settimana." },
    { type: "p", text: "Se il termine scade senza intervento, l'esito negativo viene registrato e resta visibile a chiunque interroghi la posizione nei 120 giorni di validità. Per tornare regolari occorre comunque sanare o contestare con successo — ma nel frattempo i SAL restano fermi e le gare in corso sono compromesse. È la ragione per cui il preavviso va trattato come un'urgenza dello stesso giorno, non come una pratica da mettere in coda." },

    { type: "h2", text: "Quali sono le tre strade per regolarizzare?", id: "tre-strade" },
    { type: "h3", text: "Contestare, se l'addebito è sbagliato" },
    { type: "p", text: "La prima verifica non è \"come pago\" ma \"è dovuto davvero?\". In un numero non trascurabile di casi l'irregolarità nasce da un disallineamento tra denunce mensili e versamenti, da un F24 imputato a una matricola errata, da un conguaglio Cassa Edile non registrato. Se è così, la strada è la contestazione documentale entro i quindici giorni: estratti conto, deleghe di pagamento, denunce trasmesse, tutto allegato alla risposta all'ente." },
    { type: "h3", text: "Pagare, se l'importo è dovuto e sostenibile" },
    { type: "p", text: "Quando il debito è reale e la cassa lo consente, pagare è quasi sempre la scelta economicamente razionale: si confronta l'importo dovuto con il valore di ciò che il DURC negativo blocca — SAL in liquidazione, gare in aggiudicazione, benefici contributivi. Il versamento va eseguito con le causali corrette e comunicato subito all'ente che ha inviato il preavviso, senza aspettare che se ne accorga da solo." },
    { type: "h3", text: "Rateizzare, se la cassa non regge" },
    { type: "p", text: "L'art. 3, comma 2, del D.M. 30 gennaio 2015 considera regolare l'impresa che ha ottenuto una rateizzazione ed è in regola con i pagamenti delle rate. Due avvertenze pesano più della regola. La prima: conta la rateizzazione concessa, non quella semplicemente richiesta — per questo la domanda va presentata nei primissimi giorni, non al quattordicesimo. La seconda: il mancato versamento di una rata fa venire meno il beneficio, e l'irregolarità riemerge con tutto il suo carico." },
    { type: "ol", items: [
      "Giorno 0: ricezione del preavviso via PEC — annota la data di consegna, da lì decorrono i 15 giorni",
      "Entro 2 giorni: verifica del dovuto con il consulente del lavoro — estratto conto, denunce, deleghe F24",
      "Entro 5 giorni: scelta della strada — contestazione, pagamento o rateizzazione",
      "Entro 10 giorni: esecuzione — versamento con causali corrette oppure domanda di rateizzazione all'ente competente",
      "Entro 15 giorni: comunicazione formale all'ente con la prova del pagamento, del provvedimento di rateizzazione o della contestazione documentata",
      "Dopo la scadenza: verifica dell'esito su Durc On Line e conservazione del documento regolare",
    ] },

    { type: "h2", text: "E se l'irregolarità dipende da un errore dell'ente?", id: "errore-ente" },
    { type: "p", text: "Succede più spesso di quanto si creda: versamenti correttamente eseguiti ma abbinati male, denunce Uniemens non acquisite, posizioni aperte su più Casse Edili territoriali con compensazioni non registrate. In questi casi pagare \"per chiudere in fretta\" è un errore doppio: si esce di cassa per un debito inesistente e si lascia in piedi l'anomalia, che si ripresenterà alla prossima verifica." },
    { type: "p", text: "La contestazione va presentata entro i quindici giorni del preavviso, per iscritto e con i documenti che dimostrano il versamento o la denuncia. Se l'ente non corregge, si passa all'istanza di riesame della posizione e, quando il blocco produce un danno grave e imminente — un SAL fermo, una gara in scadenza — si può valutare la tutela d'urgenza ex art. 700 c.p.c. per ottenere un provvedimento che ordini la verifica corretta. È un rimedio da maneggiare con un legale, ma esiste e nei casi giusti funziona." },

    { type: "h2", text: "Il DURC di congruità della manodopera: perché è un problema diverso", id: "durc-congruita" },
    { type: "p", text: "Dal DURC contributivo va tenuto distinto il DURC di congruità, introdotto dal D.M. 143 del 25 giugno 2021: non verifica se hai versato i contributi, ma se l'incidenza del costo della manodopera denunciata sul valore dell'opera raggiunge le percentuali minime previste per ciascuna categoria di lavori. Il cantiere viene censito su CNCE EdilConnect e, a fine lavori, la Cassa Edile rilascia — o nega — l'attestazione di congruità." },
    { type: "p", text: "Se l'incidenza risulta inferiore alla soglia, l'impresa riceve un invito a regolarizzare entro quindici giorni. L'incongruenza però non si sana solo pagando: si può giustificare documentando le ragioni tecniche dello scostamento — lavorazioni ad alta incidenza di materiali o di mezzi, ricorso legittimo a noli a caldo, subappalti regolarmente denunciati con la relativa manodopera. La documentazione va prodotta nei termini: un'incongruenza che si consolida sfocia in un'irregolarità che si riflette sulle verifiche successive e sui rapporti con la committenza." },

    { type: "h2", text: "Cosa succede se l'irregolarità arriva a gara in corso?", id: "gara-in-corso" },
    { type: "p", text: "Negli appalti pubblici la regolarità contributiva deve esistere al momento della presentazione della domanda e conservarsi per tutta la durata della procedura: la giurisprudenza amministrativa — a partire dalle pronunce dell'Adunanza Plenaria del Consiglio di Stato nn. 5 e 6 del 2016 — esclude che una regolarizzazione successiva possa sanare retroattivamente la posizione in gara. Tradotto: se al momento della domanda il DURC era negativo, pagare dopo non salva quella gara." },
    { type: "p", text: "Il preavviso di quindici giorni, però, vale anche qui, ed è decisivo per la nozione di violazione \"definitivamente accertata\" richiesta dall'art. 94, comma 6, del D.lgs. 36/2023: finché il termine per regolarizzare è pendente, l'accertamento non è definitivo. Le violazioni non definitivamente accertate ricadono invece nell'art. 95, comma 2, con margini di valutazione diversi. La conseguenza operativa è una sola: prima di ogni domanda di partecipazione, l'impresa dovrebbe verificare la propria posizione contributiva, perché scoprire l'anomalia dal provvedimento di esclusione significa scoprirla troppo tardi." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un'impresa edile con ventidue dipendenti riceve il preavviso di accertamento negativo per 9.800 euro di contributi Cassa Edile, riferiti a due mensilità di due anni prima. Nello stesso momento ha un SAL da 96.000 euro in liquidazione presso una stazione appaltante e una gara in corso di aggiudicazione da 1,4 milioni. La sproporzione è il punto: un debito di 9.800 euro sta tenendo in ostaggio quasi un milione e mezzo di valore." },
    { type: "p", text: "La verifica fatta nei primi due giorni cambia il quadro: 3.700 euro derivano da un bonifico imputato a un periodo sbagliato — versato, ma non abbinato — mentre 6.100 euro sono effettivamente dovuti. La strategia diventa doppia: contestazione documentale per la parte errata, con le contabili allegate, e pagamento della parte dovuta entro il decimo giorno, con comunicazione formale alla Cassa Edile prima della scadenza. Il DURC resta regolare, il SAL viene liquidato, la posizione in gara non viene toccata." },
    { type: "p", text: "Il bivio sta tutto nella prima settimana. Se l'impresa avesse pagato l'intero importo \"per chiudere\", avrebbe versato 3.700 euro non dovuti lasciando in piedi il disallineamento; se avesse lasciato scadere i quindici giorni confidando in una rateizzazione richiesta ma non ancora concessa, il DURC sarebbe diventato negativo: SAL fermo con intervento sostitutivo e violazione in via di consolidamento proprio durante l'aggiudicazione." },
    { type: "note", text: "L'errore da non fare: trattare la PEC del preavviso come una pratica ordinaria e affidarsi alla sola domanda di rateizzazione presentata a ridosso della scadenza. La rateizzazione rende regolari solo quando è concessa e in corso di regolare pagamento. Lo scenario descritto è illustrativo: l'esito concreto dipende sempre dai documenti e dalle circostanze specifiche." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quanto tempo ho per regolarizzare il DURC?", a: "Quindici giorni dalla ricezione dell'invito a regolarizzare previsto dall'art. 4 del D.M. 30 gennaio 2015, notificato via PEC all'impresa o al suo intermediario. Entro quel termine puoi pagare, ottenere la rateizzazione o contestare l'addebito. Scaduto il termine senza esito, il DURC viene emesso negativo." },
      { q: "La domanda di rateizzazione basta a rendere regolare il DURC?", a: "No. L'art. 3 del D.M. 30 gennaio 2015 considera regolare l'impresa con rateizzazione concessa e con le rate in regolare pagamento: la semplice domanda non produce effetti. Per questo va presentata nei primi giorni del preavviso, calcolando i tempi dell'istruttoria dell'ente. Il mancato pagamento di una rata fa riemergere l'irregolarità." },
      { q: "Possono escludermi da una gara per un debito di poche centinaia di euro?", a: "Sotto i 150 euro no: è lo scostamento non grave dell'art. 3, comma 3, D.M. 30 gennaio 2015, che non impedisce il DURC regolare. Sopra quella soglia l'esclusione scatta per violazioni gravi definitivamente accertate ex art. 94, comma 6, D.lgs. 36/2023 — e l'accertamento diventa definitivo solo dopo la scadenza dei quindici giorni per regolarizzare." },
      { q: "Cosa faccio se l'irregolarità è un errore dell'ente?", a: "Contesta entro i quindici giorni con i documenti: contabili dei versamenti, deleghe F24, denunce trasmesse. Se l'ente non corregge, si presenta istanza di riesame e, quando il blocco produce un danno grave e imminente, si può valutare un ricorso d'urgenza ex art. 700 c.p.c. Pagare un importo non dovuto per fare prima lascia comunque l'anomalia nel sistema." },
      { q: "Il DURC di congruità è la stessa cosa del DURC contributivo?", a: "No. Il DURC contributivo verifica i versamenti a INPS, INAIL e Cassa Edile; il DURC di congruità, previsto dal D.M. 143/2021, verifica che il costo della manodopera denunciata raggiunga l'incidenza minima prevista per la categoria di lavori. Un'incongruenza si giustifica documentando lavorazioni ad alta incidenza di materiali, noli a caldo o subappalti regolari, entro i termini dell'invito." },
      { q: "Se il DURC diventa negativo perdo i soldi del SAL?", a: "Non li perdi, ma non li incassi tu: con l'intervento sostitutivo la stazione appaltante trattiene dal certificato di pagamento l'importo del debito contributivo e lo versa direttamente agli enti, girando all'impresa solo l'eventuale eccedenza. Il credito quindi si trasforma d'ufficio in pagamento dei contributi, con tempi che non controlli." },
      { q: "Quanto dura un DURC regolare?", a: "120 giorni dalla data della richiesta di verifica, ai sensi del D.M. 30 gennaio 2015. Entro quel periodo il documento può essere utilizzato per tutte le finalità previste senza nuove interrogazioni. Alla scadenza la verifica riparte da zero: un debito sorto nel frattempo emerge alla richiesta successiva, con un nuovo preavviso e nuovi quindici giorni." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Sul DURC il tempo è tutto: dal preavviso hai due settimane, e la parte utile è la prima. Contattaci dalla pagina contatti lo stesso giorno in cui ricevi la PEC: verifichiamo se l'importo è dovuto, scegliamo la strada tra contestazione, pagamento e rateizzazione e prepariamo la risposta all'ente nei termini. Se il blocco riguarda un appalto pubblico in corso, leggi anche la guida alla congruità della manodopera e quella sul recupero dei crediti dell'impresa: i tre problemi viaggiano spesso insieme." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
