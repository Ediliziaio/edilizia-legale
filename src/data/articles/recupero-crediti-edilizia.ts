import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "recupero-crediti-edilizia",
  title: "Come recuperare un credito da un cliente che non paga i lavori",
  excerpt:
    "Il committente non paga SAL, saldo o fatture? Diffida, decreto ingiuntivo con provvisoria esecutorietà, sequestro conservativo e privilegio dell'appaltatore: gli strumenti per farsi pagare i lavori edili, nell'ordine giusto.",
  category: "Imprese",
  date: "Agosto 2026",
  readTime: "16 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "recupero crediti edilizia",
    "impresa edile non pagata",
    "committente non paga i lavori",
    "decreto ingiuntivo lavori edili",
    "fatture insolute impresa edile",
  ],
  intro:
    "Un'impresa edile che non viene pagata può chiedere il decreto ingiuntivo se ha prova scritta del credito: contratto o preventivo accettato, SAL controfirmati, fatture e verbale di fine lavori. Con documenti di questo tipo il giudice concede di norma la provvisoria esecutorietà, che permette di agire subito senza attendere l'esito dell'eventuale opposizione.",
};

export const seo = {
  seoTitle: "Recupero Crediti Edilizia: Come Farsi Pagare i Lavori",
  metaDescription:
    "Il committente non paga SAL o fatture? Diffida, decreto ingiuntivo con provvisoria esecutorietà, sequestro conservativo. Gli strumenti che funzionano davvero.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: chi ha eseguito i lavori ha diritto al corrispettivo pattuito (art. 1657 c.c.). Il termine: gli interessi di mora commerciali decorrono automaticamente dalla scadenza (D.lgs. 231/2002). L'azione: con prova scritta del credito, il decreto ingiuntivo con provvisoria esecutorietà è lo strumento più rapido." },

    { type: "h2", text: "Perché nell'edilizia il credito si recupera in modo diverso", id: "perche-diverso" },
    { type: "p", text: "Il mancato pagamento nel settore edile non è quasi mai un semplice ritardo: è un problema di sopravvivenza finanziaria a catena. L'impresa che non incassa il saldo deve comunque pagare operai, fornitori e contributi, e ogni settimana di attesa aumenta l'esposizione. Al tempo stesso, il credito dell'appaltatore ha caratteristiche proprie che lo distinguono da una normale fattura commerciale: nasce da un contratto d'appalto, matura per stati di avanzamento, ed è esposto a un'obiezione ricorrente — la contestazione dei vizi — che il committente usa spesso come pretesto per rinviare l'esborso." },
    { type: "p", text: "Per questo il recupero del credito edile non si riduce a \"mandare un sollecito e poi il decreto\". Prima di scegliere lo strumento va analizzato il fascicolo: quali documenti esistono, se ci sono contestazioni scritte, se il committente è capiente. Da questa analisi dipende non solo la strategia, ma anche la probabilità di ottenere l'esecutorietà immediata del decreto ingiuntivo." },

    { type: "h2", text: "Prima di tutto: che prove hai in mano?", id: "prove" },
    { type: "p", text: "La forza della posizione dell'impresa dipende quasi interamente dai documenti. La tabella che segue è un'autodiagnosi: più righe della colonna di sinistra sono presenti nel fascicolo, più il recupero è rapido." },
    { type: "table", headers: ["Documento nel fascicolo", "Cosa dimostra", "Effetto sul recupero"], rows: [
      ["Contratto o preventivo firmato", "Esistenza e importo dell'accordo", "Base della prova scritta per il decreto"],
      ["SAL controfirmati dal committente o dal DL", "Avanzamento accettato dei lavori", "Rende molto difficile contestare le quantità"],
      ["Verbale di fine lavori senza riserve", "Accettazione dell'opera", "I vizi apparenti si considerano accettati"],
      ["Fatture emesse e non contestate", "Credito liquido ed esigibile", "Prova scritta idonea ex art. 634 c.p.c."],
      ["Nessuna contestazione scritta del committente", "Assenza di eccezioni documentate", "Aumenta la probabilità di provvisoria esecutorietà"],
      ["Solo accordi verbali e messaggi", "Rapporto esistente ma non formalizzato", "Recupero possibile ma più lungo: servono prove ulteriori"],
    ] },
    { type: "p", text: "Se il quadro documentale è debole — nessun contratto scritto, contabilità informale — il credito non è perso: l'esecuzione dei lavori si può provare con testimoni, foto, DDT, bonifici parziali ricevuti. Ma la strada del decreto ingiuntivo diventa meno lineare e in alcuni casi conviene il giudizio ordinario o, prima ancora, un accertamento tecnico preventivo che cristallizzi lo stato delle opere." },

    { type: "h2", text: "La diffida che funziona e quella che peggiora la situazione", id: "diffida" },
    { type: "p", text: "La diffida non è un rito: è il documento che fissa la posizione dell'impresa e fa decorrere formalmente gli interessi di mora. Una diffida efficace contiene quattro elementi: il conteggio analitico del credito (imponibile, IVA, interessi ex D.lgs. 231/2002), il riferimento ai documenti che lo provano, un termine chiaro — di norma quindici giorni — e l'avvertimento che alla scadenza si agirà in via monitoria senza ulteriore preavviso." },
    { type: "p", text: "La diffida sbagliata è quella scritta d'impulso: toni minacciosi, importi approssimativi, riferimenti a contestazioni mai formalizzate dal committente a cui si finisce per rispondere prima ancora che vengano sollevate. Ogni frase in più è materiale che la difesa avversaria potrà usare. La regola: la diffida afferma il credito e lo documenta, non discute." },

    { type: "h2", text: "Il decreto ingiuntivo: quando ottieni la provvisoria esecutorietà", id: "decreto-ingiuntivo" },
    { type: "p", text: "Il decreto ingiuntivo (artt. 633 e ss. c.p.c.) è lo strumento centrale del recupero crediti edile: con prova scritta del credito, il giudice ordina al committente di pagare entro quaranta giorni. Il punto che cambia davvero i tempi è la provvisoria esecutorietà ex art. 642 c.p.c.: se concessa, l'impresa può iscrivere ipoteca giudiziale e avviare l'esecuzione subito, senza attendere l'esito dell'eventuale opposizione." },
    { type: "p", text: "Nella pratica, la provvisoria esecutorietà viene concessa con buona probabilità quando il fascicolo contiene contratto firmato, SAL controfirmati e verbale di fine lavori senza riserve, e quando non esistono contestazioni scritte anteriori. È il motivo per cui la gestione documentale durante il cantiere vale quanto la causa: il decreto si vince prima, in cantiere, tenendo le carte in ordine." },
    { type: "h3", text: "I passi, nell'ordine giusto" },
    { type: "ol", items: [
      "Ricostruire il credito voce per voce: SAL, saldo, ritenute, interessi di mora dal giorno successivo a ciascuna scadenza",
      "Verificare l'assenza di contestazioni scritte del committente (email, PEC, verbali) e prepararsi a rispondere a quelle esistenti",
      "Inviare la diffida via PEC con termine di 15 giorni e conteggio degli interessi",
      "Alla scadenza, depositare ricorso per decreto ingiuntivo con istanza di provvisoria esecutorietà ex art. 642 c.p.c.",
      "Notificare il decreto: il committente ha 40 giorni per opporsi",
      "Se il decreto è provvisoriamente esecutivo, valutare subito ipoteca giudiziale e pignoramento",
    ] },

    { type: "h2", text: "Cosa succede se il cliente si oppone", id: "opposizione" },
    { type: "p", text: "L'opposizione apre un giudizio ordinario che può durare due o tre anni. È lo scenario che spaventa le imprese, ma va letto correttamente: se il decreto è provvisoriamente esecutivo, il tempo gioca per il creditore, perché ipoteca ed esecuzione procedono comunque. L'opposizione tipica del committente si fonda sull'eccezione di inadempimento: \"non pago perché i lavori hanno vizi\". Qui contano di nuovo i documenti: un verbale di consegna firmato senza riserve rende molto difficile eccepire vizi apparenti, e una contestazione generica e tardiva non giustifica il trattenimento dell'intero saldo." },
    { type: "p", text: "Se invece le contestazioni erano state messe per iscritto durante il cantiere, la strategia cambia già a monte: prima del decreto conviene spesso promuovere un accertamento tecnico preventivo, per consolidare la prova sullo stato delle opere ed evitare che il giudice dell'opposizione sospenda l'esecutorietà." },

    { type: "h2", text: "Gli strumenti che pochi usano: sequestro conservativo e privilegio", id: "strumenti-avanzati" },
    { type: "p", text: "Quando il debitore mostra segnali di difficoltà — protesti, cantieri fermi, fornitori in agitazione — il decreto ingiuntivo da solo rischia di arrivare a patrimonio ormai svuotato. Il sequestro conservativo (art. 671 c.p.c.) congela i beni o i crediti del debitore prima che si disperdano: si ottiene dimostrando il fumus del credito e il periculum, cioè il rischio concreto di perdere la garanzia patrimoniale." },
    { type: "p", text: "Il secondo strumento dimenticato è il privilegio del credito dell'appaltatore: in situazioni specifiche la legge assiste il credito con cause di prelazione che diventano decisive quando i creditori sono molti e il patrimonio è poco. Infine, per i subappaltatori esiste l'azione surrogatoria ex art. 2900 c.c. sul credito che l'appaltatore vanta verso il committente — uno strumento quasi sconosciuto che merita una guida dedicata." },

    { type: "h2", text: "Se il committente è insolvente o fallito", id: "insolvenza" },
    { type: "p", text: "Se il committente entra in liquidazione giudiziale o in concordato, il recupero individuale si ferma e si passa all'insinuazione al passivo. I tempi si allungano e le percentuali di soddisfazione dipendono dall'attivo, ma la tempestività resta decisiva: chi si insinua correttamente e per tempo, con il credito ben documentato e le eventuali cause di prelazione fatte valere, si trova in posizione migliore. Anche qui vale la regola della capienza: prima di avviare qualunque azione conviene una verifica patrimoniale del debitore — visure immobiliari, protesti, altri cantieri in corso da cui potrebbe incassare." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un'impresa di ristrutturazioni con sei dipendenti chiude un cantiere da 41.200 euro. Il committente versa 18.000 euro in due acconti, poi contesta a voce \"lavori non a regola d'arte\" e smette di rispondere. Restano aperti 23.200 euro. Nel fascicolo ci sono: preventivo firmato, due SAL controfirmati, verbale di fine lavori sottoscritto senza riserve, nessuna contestazione scritta. È la configurazione che regge meglio, perché un verbale firmato senza riserve rende difficile eccepire vizi apparenti." },
    { type: "p", text: "Il percorso scelto: diffida con termine di quindici giorni e conteggio degli interessi di mora commerciali; alla scadenza, ricorso per decreto ingiuntivo con istanza di provvisoria esecutorietà, che con prova scritta di questo tipo viene normalmente concessa. Il bivio: se il committente propone opposizione, il giudizio di merito dura mediamente due o tre anni — ma il decreto provvisoriamente esecutivo consente già di iscrivere ipoteca giudiziale e avviare l'esecuzione. Se invece le contestazioni fossero state messe per iscritto durante il cantiere, la strategia sarebbe cambiata: prima un accertamento tecnico preventivo per consolidare la prova." },
    { type: "note", text: "L'errore da non fare: continuare a lavorare in cantiere sperando che il committente paghi. Ogni SAL successivo non pagato aumenta l'esposizione e indebolisce la posizione negoziale. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende sempre dai documenti e dalle circostanze specifiche." },

    { type: "h2", text: "I termini da non far scadere", id: "termini" },
    { type: "table", headers: ["Termine", "Quanto dura", "Da quando decorre"], rows: [
      ["Interessi di mora commerciali", "Automatici", "Dal giorno successivo alla scadenza della fattura (D.lgs. 231/2002)"],
      ["Prescrizione del credito da appalto", "10 anni", "Dalla maturazione del credito (art. 2946 c.c.)"],
      ["Opposizione del debitore al decreto", "40 giorni", "Dalla notifica del decreto ingiuntivo"],
      ["Insinuazione tempestiva al passivo", "Termine fissato dal giudice", "Dalla sentenza di apertura della liquidazione giudiziale"],
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quanto tempo ci vuole per un decreto ingiuntivo?", a: "Dal deposito del ricorso all'emissione passano in media da poche settimane a un paio di mesi, a seconda del tribunale. Con la provvisoria esecutorietà, l'azione esecutiva può partire subito dopo la notifica, senza attendere i 40 giorni né l'esito dell'eventuale opposizione." },
      { q: "Posso agire senza un contratto scritto?", a: "Sì. Il contratto d'appalto non richiede la forma scritta: l'esecuzione dei lavori si prova con SAL, fatture, bonifici ricevuti, DDT, foto e testimoni. Senza prova scritta però il decreto ingiuntivo è meno accessibile e spesso conviene il giudizio ordinario, con tempi più lunghi." },
      { q: "Il cliente contesta i lavori: posso comunque procedere?", a: "Dipende da come e quando ha contestato. Una contestazione verbale, generica o successiva a un verbale di consegna firmato senza riserve ha poco peso. Una contestazione scritta e circostanziata durante il cantiere va invece gestita prima, spesso con un accertamento tecnico preventivo." },
      { q: "Cosa faccio se il debitore non ha beni?", a: "Prima di agire conviene sempre una verifica di capienza: visure immobiliari, protesti, mezzi, altri cantieri in corso. Se il patrimonio è vuoto, si valutano il sequestro conservativo sui crediti verso terzi, le garanzie contrattuali e — se il debitore è in procedura — l'insinuazione al passivo." },
      { q: "Conviene la mediazione?", a: "Per le controversie in materia di appalto la mediazione può essere un passaggio utile o dovuto prima della causa di merito, e in alcuni casi porta a transazioni rapide. Non è invece necessaria per chiedere il decreto ingiuntivo, che resta la via più diretta quando il credito è ben documentato." },
      { q: "Gli interessi di mora si applicano anche senza patto scritto?", a: "Sì. Tra imprese si applicano automaticamente gli interessi di mora commerciali del D.lgs. 231/2002, a un tasso molto superiore a quello legale, dal giorno successivo alla scadenza. Vanno conteggiati nella diffida e richiesti nel ricorso." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai SAL o fatture non pagati, il primo passo è una valutazione del fascicolo: quali documenti esistono, se il credito è ingiungibile e con quali probabilità di esecutorietà immediata. Contattaci dalla pagina contatti: analizziamo i documenti e ti diciamo quale strumento ha senso nel tuo caso. Prima di firmare il prossimo contratto, leggi anche la guida alle clausole del contratto d'appalto che proteggono l'impresa: la maggior parte dei crediti difficili nasce da contratti scritti male." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
