import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "ritardo-consegna-lavori",
  title: "Ritardo nella consegna: come si calcola la penale e cosa puoi chiedere in più",
  excerpt:
    "Il cantiere è in ritardo di mesi? Come si calcola la penale giornaliera, quali sospensioni l'impresa può scomputare, quando puoi chiedere l'affitto pagato nel frattempo e quando il ritardo permette di risolvere il contratto.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "ritardo consegna casa costruttore risarcimento",
    "penale ritardo consegna lavori come si calcola",
    "ritardo ristrutturazione cosa fare",
    "risoluzione contratto per ritardo termine essenziale",
    "risarcimento affitto doppio ritardo consegna",
  ],
  intro:
    "La penale per il ritardo si calcola moltiplicando l'importo giornaliero pattuito per i giorni di ritardo imputabili all'impresa, scomputando le sospensioni legittime documentate. Di regola la penale limita il risarcimento a quell'importo, salvo che il contratto preveda espressamente il maggior danno. Se la penale non c'è, si può chiedere il risarcimento integrale del danno provato.",
};

export const seo = {
  seoTitle: "Ritardo Consegna Lavori: Calcolo Penale e Risarcimento",
  metaDescription:
    "La penale si calcola sui giorni imputabili all'impresa, scomputate le sospensioni legittime. Senza penale, risarcimento integrale del danno documentato.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: l'impresa che consegna oltre il termine pattuito risponde dell'inadempimento (art. 1218 c.c.) e, se il contratto contiene una clausola penale, deve l'importo fissato per ogni giorno di ritardo senza che tu debba provare il danno (art. 1382 c.c.). Il termine: il diritto al risarcimento si prescrive in dieci anni (art. 2946 c.c.), ma i danni vanno documentati mentre maturano. L'azione: messa in mora scritta alla scadenza, calcolo dei giorni imputabili, poi richiesta della penale o diffida ad adempiere ex art. 1454 c.c." },

    { type: "h2", text: "Come funziona la penale contrattuale e come si calcola?", id: "penale-come-si-calcola" },
    { type: "p", text: "La clausola penale (art. 1382 c.c.) è una liquidazione anticipata del danno: le parti fissano in contratto quanto vale ogni giorno di ritardo, e alla scadenza quel valore è dovuto senza che il committente debba dimostrare di aver subito un pregiudizio. È il suo vantaggio principale: niente ricevute da esibire, niente perizie sul danno, solo un conteggio di giorni. Per questo è anche la prima cosa da cercare nel contratto quando la consegna slitta." },
    { type: "p", text: "Il calcolo, però, non è mai una semplice moltiplicazione. I giorni che contano sono i giorni di ritardo imputabili all'impresa: dal totale vanno scomputati i periodi di sospensione legittima, cioè i fermi cantiere causati dal committente stesso o da fattori che il contratto pone a suo carico. Una variante richiesta a lavori in corso, un'autorizzazione condominiale che spettava a te ottenere, un ritardo nel pagamento di un acconto che legittimava l'impresa a sospendere: tutto questo sposta in avanti la data di consegna dovuta." },
    { type: "p", text: "Restano invece a carico dell'impresa i ritardi dei suoi fornitori e subappaltatori: sono suoi ausiliari, e dei loro inadempimenti risponde lei (art. 1228 c.c.). Ultimo tassello: se la penale è manifestamente eccessiva rispetto all'interesse del committente, il giudice può ridurla d'ufficio secondo equità (art. 1384 c.c.). Funziona anche al contrario: una penale simbolica non si può gonfiare, e in quel caso il problema diventa il tetto al risarcimento, di cui parliamo tra poco." },

    { type: "figure", slot: "ritardo-consegna-lavori-1", alt: "Calendario di cantiere con la data di consegna pattuita superata", caption: "Il calcolo della penale parte dai giorni di ritardo, ma non finisce lì." },

    { type: "h2", text: "Se la penale non c'è: cosa puoi chiedere come risarcimento?", id: "senza-penale" },
    { type: "p", text: "L'assenza della penale non significa assenza di tutela. Il ritardo è un inadempimento contrattuale, e il committente ha diritto al risarcimento integrale del danno che riesce a provare (artt. 1218 e 1223 c.c.): le spese sostenute a causa del ritardo (danno emergente) e i guadagni persi (lucro cessante). L'affitto pagato per una sistemazione temporanea, il deposito dei mobili, le doppie utenze, il canone di una locazione sfumata perché l'immobile non era pronto." },
    { type: "p", text: "Qui sta il punto che la maggior parte degli articoli online ignora: la penale è una tutela, ma anche un tetto. Salvo che il contratto contenga la formula \"fatto salvo il risarcimento del maggior danno\", la penale limita il risarcimento all'importo pattuito (art. 1382, primo comma, c.c.). Con una penale bassa e danni reali alti, chi ha la clausola può paradossalmente recuperare meno di chi non ce l'ha. È il motivo per cui la penale va calibrata al momento della firma su una stima realistica del danno da ritardo, aggiungendo sempre quella formula: sono nove parole." },

    { type: "h2", text: "Quali danni puoi documentare (e quali non reggono)?", id: "danni-documentabili" },
    { type: "p", text: "Il risarcimento senza penale — o il maggior danno, dove la clausola lo consente — vive di documenti. Il danno va provato nella sua esistenza, nel suo ammontare e nel nesso causale con il ritardo: la spesa deve esistere perché la consegna è slittata, non per altre ragioni. La tabella che segue distingue le voci che nella pratica reggono da quelle che vengono regolarmente respinte." },
    { type: "table", headers: ["Voce di danno", "Come si prova", "Regge in giudizio?"], rows: [
      ["Affitto della sistemazione temporanea", "Contratto registrato + bonifici mensili", "Sì, se il periodo coincide con il ritardo imputabile"],
      ["Deposito e trasloco dei mobili", "Fatture del deposito e del trasporto", "Sì, con nesso causale documentato"],
      ["Doppie utenze e spese condominiali duplicate", "Bollette e riparti dei due immobili", "Sì, per la sola quota eccedente"],
      ["Canoni di locazione persi (immobile da affittare)", "Preliminare o proposta di locazione sfumata", "Sì, se l'occasione era concreta e documentata"],
      ["Rate del mutuo sull'immobile in ritardo", "Piano di ammortamento", "Di regola no: erano dovute comunque"],
      ["Stress e disagio della famiglia", "Dichiarazioni generiche", "Di regola no, salvo pregiudizi specifici e provati"],
    ] },
    { type: "p", text: "La regola operativa: i danni si documentano mentre maturano, non si ricostruiscono dopo. Contratti registrati, bonifici tracciati, fatture intestate. Un affitto pagato in contanti a un parente, senza contratto, è una voce persa in partenza." },

    { type: "h2", text: "Quali giustificazioni dell'impresa valgono davvero?", id: "giustificazioni-impresa" },
    { type: "p", text: "Quando chiedi la penale, la risposta dell'impresa è quasi sempre un elenco di cause di forza maggiore. Alcune sono fondate, molte no, e distinguere è decisivo perché ogni giorno riconosciuto come sospensione legittima esce dal conteggio. Valgono: le varianti richieste dal committente, con il tempo tecnico che comportano; le sospensioni ordinate dalla direzione lavori per fatti non imputabili all'impresa; le autorizzazioni amministrative o condominiali che il contratto poneva a carico del committente; gli eventi realmente eccezionali e imprevedibili." },
    { type: "p", text: "Non valgono, di regola: il maltempo ordinario della stagione, che un'impresa diligente considera nel cronoprogramma (e che spesso il contratto già computa nei giorni di andamento stagionale sfavorevole); i ritardi di fornitori e subappaltatori scelti dall'impresa, che sono suoi ausiliari ex art. 1228 c.c.; la carenza di manodopera; l'impegno su altri cantieri. La pretesa va sempre accompagnata dalla richiesta di documentare ogni sospensione invocata: date, causa, ordine di servizio o verbale. Un fermo non documentato per iscritto è un fermo difficile da opporre." },

    { type: "h2", text: "Quando il ritardo ti permette di risolvere il contratto?", id: "risoluzione" },
    { type: "p", text: "Se il cantiere è fermo e la fiducia è finita, la domanda cambia: non più quanto vale il ritardo, ma come uscire dal contratto. La via maestra è la diffida ad adempiere (art. 1454 c.c.): un'intimazione scritta a completare i lavori entro un termine congruo, non inferiore a quindici giorni, con l'avvertimento che decorso inutilmente il termine il contratto si intenderà risolto di diritto. Serve però che l'inadempimento sia di non scarsa importanza (art. 1455 c.c.): un ritardo di poche settimane su un cantiere complesso difficilmente basta, mesi di fermo ingiustificato sì." },
    { type: "p", text: "Caso diverso è il termine essenziale (art. 1457 c.c.): se il contratto qualifica espressamente la data di consegna come essenziale, o se l'essenzialità risulta dalla natura dell'affare, alla scadenza il contratto si risolve senza bisogno di diffida, salvo che tu comunichi entro tre giorni di volere comunque l'esecuzione. È un'ipotesi rara nei contratti di ristrutturazione, dove la clausola quasi mai c'è. Attenzione infine agli effetti pratici: risolvere con il cantiere a metà apre il tema del compenso per le opere già eseguite e della loro contabilizzazione, e conviene arrivarci con uno stato di consistenza fotografico e, nei casi contestati, con un accertamento tecnico preventivo." },

    { type: "h3", text: "I passi, nell'ordine giusto" },
    { type: "ol", items: [
      "Rileggi il contratto: termine di consegna, penale giornaliera, clausola sul maggior danno, proroghe firmate",
      "Alla scadenza del termine, metti in mora l'impresa per iscritto (PEC o raccomandata), riservando penale e danni",
      "Documenta i danni mentre maturano: contratti d'affitto registrati, bonifici, fatture del deposito mobili",
      "Chiedi all'impresa l'elenco scritto delle sospensioni che invoca, con date e documenti a supporto",
      "Calcola i giorni imputabili e quantifica la penale (o il danno, se la penale non c'è)",
      "Se vuoi uscire dal contratto, invia la diffida ad adempiere ex art. 1454 c.c. con termine non inferiore a 15 giorni",
      "Se l'impresa non paga né adempie, valuta mediazione o azione giudiziale: la prescrizione è di 10 anni, ma le prove invecchiano molto prima",
    ] },

    { type: "figure", slot: "ritardo-consegna-lavori-2", alt: "Cronoprogramma dei lavori con le sospensioni annotate", caption: "Le sospensioni non imputabili all'impresa si scomputano dai giorni di ritardo." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Contratto di ristrutturazione con consegna prevista al 30 aprile e penale di 80 euro al giorno. La consegna avviene il 15 novembre: 199 giorni di ritardo. Nel frattempo la famiglia ha pagato 7.600 euro di affitto per una sistemazione temporanea e 900 euro di deposito mobili. Il calcolo istintivo — 199 giorni per 80 euro, cioè 15.920 euro — è solo il punto di partenza, e non è detto che il numero finale sia questo." },
    { type: "p", text: "Le sospensioni legittime, prima di tutto. L'impresa documenta trentadue giorni di fermo per una variante richiesta dai committenti e quattordici giorni di attesa per un'autorizzazione condominiale mai sollecitata dai committenti stessi: quarantasei giorni non imputabili, che vanno scomputati. La penale scende a 12.240 euro. Restano invece a carico dell'impresa i venti giorni di ritardo del fornitore dei serramenti, perché il fornitore è un suo ausiliario ex art. 1228 c.c." },
    { type: "p", text: "Poi il maggior danno. Nel contratto la clausola \"fatto salvo il risarcimento del maggior danno\" non c'era: la penale fa quindi da tetto, e affitto e deposito non si sommano automaticamente ai 12.240 euro. Il bivio è qui, e va detto con chiarezza: senza alcuna penale in contratto, la posizione dei committenti sarebbe stata paradossalmente migliore, perché avrebbero potuto chiedere il risarcimento integrale del danno provato — 7.600 euro di affitto, 900 di deposito, più le altre voci documentate. La lezione per il prossimo contratto: penale calibrata sul danno realistico e clausola di maggior danno, sempre." },
    { type: "note", text: "L'errore da non fare: accettare proroghe verbali o firmare verbali di sospensione generici, senza causa e durata scritte. Ogni giorno di proroga concesso senza riserva esce dal conteggio della penale e non rientra più. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende sempre dal testo del contratto e dai documenti disponibili." },

    { type: "timeline", title: "Come si arriva alla cifra", steps: [
      { when: "Data pattuita", label: "Scade il termine di consegna", detail: "Da qui si contano i giorni di ritardo." },
      { when: "Giorni di ritardo", label: "Penale giornaliera prevista in contratto", detail: "Il conteggio grezzo è solo il punto di partenza." },
      { when: "Scomputo", label: "Sospensioni non imputabili all'impresa", detail: "Varianti richieste dal committente e autorizzazioni mai sollecitate." },
      { when: "Verifica finale", label: "Maggior danno oltre la penale", detail: "Risarcibile solo se espressamente pattuito: senza clausola, la penale è un tetto." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Se il contratto non prevede una penale posso chiedere qualcosa?", a: "Sì. Il ritardo resta un inadempimento contrattuale e dà diritto al risarcimento integrale del danno provato ex artt. 1218 e 1223 c.c.: affitto della sistemazione temporanea, deposito mobili, doppie utenze, locazioni sfumate. Serve però la prova documentale di ogni voce e del nesso con il ritardo, perché senza penale nulla è dovuto in automatico." },
      { q: "Posso chiedere l'affitto che pago nel frattempo?", a: "Sì, se il contratto non contiene una penale oppure la contiene con la clausola di risarcibilità del maggior danno. L'affitto va provato con contratto registrato e pagamenti tracciati, e copre solo il periodo di ritardo imputabile all'impresa. Se c'è una penale senza clausola di maggior danno, l'affitto non si somma: la penale fa da tetto." },
      { q: "Il maltempo giustifica il ritardo?", a: "Di regola no. Le condizioni meteorologiche ordinarie della stagione sono prevedibili e rientrano nella diligenza organizzativa dell'impresa; molti contratti computano già giorni di andamento stagionale sfavorevole nel termine. Giustificano il ritardo solo eventi realmente eccezionali e imprevedibili, che l'impresa deve documentare con precisione: date, durata ed effetto concreto sul cantiere." },
      { q: "I ritardi dei fornitori dell'impresa mi riguardano?", a: "No: restano a carico dell'impresa. Fornitori e subappaltatori sono ausiliari di cui l'appaltatore risponde ex art. 1228 c.c., quindi i loro ritardi non sono sospensioni legittime e non si scomputano dal conteggio della penale. È una delle giustificazioni più frequenti e al tempo stesso più deboli tra quelle che le imprese oppongono." },
      { q: "Quando posso risolvere il contratto per il ritardo?", a: "Con la diffida ad adempiere ex art. 1454 c.c.: intimazione scritta a completare entro un termine non inferiore a quindici giorni, decorso il quale il contratto si risolve di diritto, purché l'inadempimento sia di non scarsa importanza. Se invece il contratto qualifica la data come termine essenziale, la risoluzione ex art. 1457 c.c. opera senza diffida." },
      { q: "Il giudice può ridurre la penale pattuita?", a: "Sì. L'art. 1384 c.c. consente la riduzione equitativa della penale manifestamente eccessiva, anche d'ufficio, o quando l'obbligazione principale è stata in parte eseguita. È un correttivo che l'impresa invoca spesso nei ritardi lunghi: per questo conviene sempre affiancare al conteggio della penale la documentazione del danno reale, che ne sostiene la congruità." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Ogni mese di ritardo ha un costo documentabile: affitti, depositi, occasioni perse. Aiutiamo a quantificarlo prima che diventi irrecuperabile — e a leggere il contratto per capire se la penale è un'arma o un tetto. Contattaci dalla pagina contatti con il contratto e il cronoprogramma: ti diciamo quali giorni sono davvero imputabili e cosa puoi chiedere. Se il cantiere presenta anche difetti di esecuzione, leggi la guida ai difetti costruttivi e alle garanzie dell'appalto; se stai per comprare casa da un costruttore, la guida all'acquisto di immobili da costruire spiega le tutele specifiche del D.lgs. 122/2005." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
