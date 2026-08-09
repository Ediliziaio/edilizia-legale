import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "committente-contesta-i-lavori",
  title: "Il cliente contesta i lavori per non pagare: come si smonta la contestazione pretestuosa",
  excerpt:
    "Il committente trattiene il saldo lamentando difetti? Proporzionalità della ritenuta, decadenza per i vizi apparenti, termini di denuncia già scaduti: come si valuta e si smonta una contestazione pretestuosa.",
  category: "Imprese",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "committente contesta i lavori per non pagare",
    "saldo lavori trattenuto per vizi",
    "cliente dice che i lavori sono fatti male",
    "eccezione di inadempimento appalto difesa",
    "vizi apparenti accettazione dell'opera",
    "verbale fine lavori senza riserve valore",
  ],
  intro:
    "Il committente non può trattenere l'intero saldo per un vizio di modesta entità: la ritenuta deve essere proporzionata al costo di eliminazione del difetto. Inoltre i vizi apparenti non contestati al momento della verifica si considerano accettati, e per i vizi occulti dell'appalto la denuncia va fatta entro sessanta giorni dalla scoperta.",
};

export const seo = {
  seoTitle: "Committente Contesta i Lavori per Non Pagare: le Difese",
  metaDescription:
    "Il cliente non può trattenere tutto il saldo per un vizio modesto: la ritenuta va proporzionata al difetto e i vizi apparenti non contestati sono accettati.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: la ritenuta del committente deve essere proporzionata al costo di eliminazione del vizio, non all'intero saldo (art. 1460, comma 2, c.c.). Il termine: i vizi occulti vanno denunciati entro 60 giorni dalla scoperta e l'azione si prescrive in 2 anni dalla consegna (art. 1667 c.c.). L'azione: verificare tardività e sproporzione della contestazione, offrire il ripristino senza riconoscimento di responsabilità, poi diffida e decreto ingiuntivo per il saldo." },

    { type: "h2", text: "Perché la contestazione arriva sempre insieme al saldo", id: "perche-arriva" },
    { type: "p", text: "Nella pratica dei cantieri privati la sequenza è quasi sempre la stessa: i lavori procedono senza rilievi, gli acconti vengono versati, poi al momento del saldo compaiono i difetti. Una porta che struscia, una fuga storta, una tinteggiatura \"non uniforme\". Non è un caso: la contestazione dei vizi è l'unico argomento giuridico che permette al committente di non pagare senza dichiararsi semplicemente insolvente." },
    { type: "p", text: "Lo strumento che il committente invoca — quasi mai citandolo — è l'eccezione di inadempimento dell'art. 1460 c.c.: \"non pago perché tu non hai adempiuto esattamente\". Ma quella norma ha un limite interno che i committenti dimenticano: il rifiuto di pagare non può essere contrario a buona fede, e la giurisprudenza lo traduce in un requisito di proporzionalità tra il difetto lamentato e la somma trattenuta. È da qui che si comincia a smontare la contestazione pretestuosa." },
    { type: "p", text: "Prima di rispondere d'impulso, la contestazione va classificata: è tardiva, è sproporzionata o è fondata? Le tre categorie portano a tre strategie diverse, e confonderle è l'errore più costoso che un'impresa possa fare in questa fase." },

    { type: "figure", slot: "committente-contesta-i-lavori-1", alt: "Dettaglio di una finitura contestata, con metro e livella appoggiati", caption: "La proporzionalità si misura: quanto costa davvero eliminare il difetto contestato." },

    { type: "h2", text: "Quali sono le contestazioni che si smontano quasi sempre?", id: "contestazioni-deboli" },
    { type: "p", text: "La prima è la contestazione generica: \"i lavori non sono a regola d'arte\", senza indicazione di quali opere, in quali punti, con quali difetti. Una denuncia di vizi, per produrre effetti, deve mettere l'appaltatore in condizione di verificare e di intervenire; una formula vuota non interrompe nulla e non giustifica il mancato pagamento. Alla generica si risponde chiedendo per iscritto la specificazione analitica dei difetti, con termine." },
    { type: "p", text: "La seconda è la contestazione tardiva sui vizi apparenti: difetti visibili a occhio nudo, lamentati mesi dopo una consegna avvenuta senza riserve. Come vedremo, l'art. 1665 c.c. la neutralizza in radice, perché l'accettazione dell'opera copre i vizi riconoscibili. La terza è la contestazione sproporzionata: un difetto reale ma modesto usato per trattenere un saldo dieci volte superiore al costo della riparazione. Qui il vizio esiste, ma non autorizza quella ritenuta." },

    { type: "h2", text: "Cosa vale il verbale di fine lavori firmato senza riserve?", id: "vizi-apparenti" },
    { type: "p", text: "L'art. 1665 c.c. disciplina la verifica e l'accettazione dell'opera: il committente ha diritto di verificare i lavori prima della consegna e, se li riceve senza riserve, l'opera si considera accettata anche se la verifica non è stata materialmente eseguita. L'effetto è drastico: con l'accettazione l'appaltatore è liberato dalla garanzia per i vizi apparenti, cioè per i difetti che erano riconoscibili con l'ordinaria diligenza al momento della consegna." },
    { type: "p", text: "Tradotto nella pratica: una porta che struscia, un battiscopa scheggiato, fughe non allineate sono difetti visibili. Se il committente ha firmato il verbale di fine lavori senza annotare riserve — o ha preso in consegna l'immobile e ha iniziato ad abitarlo senza contestazioni scritte — non può ripescare quei difetti otto mesi dopo per giustificare il mancato pagamento. Restano fuori dall'effetto liberatorio solo i vizi occulti, quelli non riconoscibili alla consegna, e i vizi taciuti in mala fede dall'appaltatore." },
    { type: "p", text: "Per questo il verbale di consegna è il documento più importante del fascicolo, più ancora del contratto. Un'impresa che chiude ogni cantiere con un verbale datato e sottoscritto dal committente si costruisce, cantiere dopo cantiere, la difesa migliore contro le contestazioni di comodo." },

    { type: "h2", text: "Entro quando doveva contestare? I termini già scaduti", id: "termini" },
    { type: "p", text: "Anche quando il vizio è occulto, il committente non ha tempo illimitato. L'art. 1667 c.c. impone la denuncia entro 60 giorni dalla scoperta, a pena di decadenza, e assoggetta l'azione di garanzia a prescrizione di 2 anni dalla consegna dell'opera. Per i gravi difetti che compromettono la stabilità o la funzionalità di edifici e immobili destinati a lunga durata vale invece l'art. 1669 c.c.: denuncia entro 1 anno dalla scoperta e azione entro 1 anno dalla denuncia, dentro la finestra di 10 anni dal compimento dell'opera." },
    { type: "table", headers: ["Tipo di vizio", "Termine di denuncia", "Prescrizione dell'azione", "Norma"], rows: [
      ["Vizi apparenti", "Al momento della verifica/consegna: se non contestati, opera accettata", "Garanzia esclusa dopo l'accettazione", "art. 1665 c.c."],
      ["Vizi occulti", "60 giorni dalla scoperta, a pena di decadenza", "2 anni dalla consegna dell'opera", "art. 1667 c.c."],
      ["Gravi difetti strutturali", "1 anno dalla scoperta", "1 anno dalla denuncia, entro 10 anni dal compimento", "art. 1669 c.c."],
      ["Difformità dal progetto", "Come i vizi: apparenti o occulti a seconda della riconoscibilità", "2 anni dalla consegna", "artt. 1667-1668 c.c."],
    ] },
    { type: "p", text: "La prima verifica su ogni contestazione è quindi un calcolo di date: quando è avvenuta la consegna, quando il committente dichiara di aver scoperto il difetto, quando ha contestato per iscritto. Una contestazione arrivata oltre i 60 giorni dalla scoperta di un vizio occulto, o due anni e un giorno dopo la consegna, è giuridicamente tardiva anche se il difetto fosse reale. E l'onere di provare la tempestività della denuncia grava sul committente." },

    { type: "h2", text: "Il committente può trattenere tutto il saldo per un vizio piccolo?", id: "proporzionalita" },
    { type: "p", text: "No, e questo è il punto che più spesso decide la partita. L'eccezione di inadempimento dell'art. 1460 c.c. incontra il limite della buona fede: il rifiuto di pagare deve essere proporzionato all'inadempimento lamentato. La giurisprudenza di legittimità è costante nel ritenere contraria a buona fede la sospensione dell'intero pagamento a fronte di vizi eliminabili con una spesa modesta rispetto al corrispettivo residuo." },
    { type: "p", text: "Il criterio operativo è il costo di eliminazione del difetto: se ripristinare costa 1.400 euro, il committente può legittimamente cautelarsi per una somma in quell'ordine di grandezza, non trattenere un saldo di 19.000 euro. Per questo conviene procurarsi subito un preventivo di ripristino redatto da un terzo: quantifica il vizio, fissa il perimetro della ritenuta ammissibile e trasforma una discussione emotiva in un confronto tra numeri." },
    { type: "p", text: "La conseguenza pratica è che, di fronte a una ritenuta sproporzionata, l'impresa può chiedere il decreto ingiuntivo per la differenza tra il saldo e il costo documentato del ripristino. Il committente che ha trattenuto dieci volte il valore del difetto si presenta davanti al giudice in una posizione difficile da sostenere." },

    { type: "h2", text: "Conviene offrire il ripristino? Sì, ma senza ammettere nulla", id: "offrire-ripristino" },
    { type: "p", text: "L'offerta di eliminare i difetti lamentati è quasi sempre la mossa più forte, anche quando la contestazione appare pretestuosa. Va però formulata correttamente: per iscritto, con l'indicazione espressa che l'intervento è offerto \"senza alcun riconoscimento di responsabilità e al solo fine di definire bonariamente il rapporto\", con un termine preciso di esecuzione e con la contestuale richiesta di pagamento del saldo al netto della sola somma proporzionata al difetto." },
    { type: "p", text: "L'effetto è doppio. Sul piano negoziale, mette il committente con le spalle al muro: se rifiuta l'intervento gratuito, rivela che il suo obiettivo non era la qualità dell'opera ma il risparmio sul saldo. Sul piano processuale, dimostra la buona fede dell'impresa e svuota l'eccezione di inadempimento: è difficile sostenere \"non pago perché ci sono vizi\" dopo aver rifiutato l'offerta di eliminarli. Il rifiuto va fatto constatare per iscritto, perché diventerà un documento centrale del fascicolo." },

    { type: "h2", text: "E se la contestazione è fondata?", id: "contestazione-fondata" },
    { type: "p", text: "Capita, e riconoscerlo per tempo è un vantaggio, non una resa. Se il difetto è reale, tempestivamente denunciato e non coperto dall'accettazione, l'art. 1668 c.c. dà al committente la scelta tra eliminazione dei vizi a spese dell'appaltatore e riduzione proporzionale del prezzo, oltre al risarcimento in caso di colpa; solo se le difformità rendono l'opera del tutto inadatta alla sua destinazione può chiedere la risoluzione del contratto." },
    { type: "p", text: "In questo scenario la strategia è contenere: eseguire il ripristino direttamente, che costa sempre meno che risarcire l'intervento di un'impresa terza, e chiudere con un accordo transattivo scritto che quantifichi la riduzione e liberi il saldo residuo. Se invece il confronto tecnico è aperto — il committente parla di danni strutturali, l'impresa di difetti estetici — conviene valutare l'accertamento tecnico preventivo ex art. 696-bis c.p.c., che cristallizza lo stato dei luoghi con una perizia super partes prima che i lavori di ripristino di terzi cancellino le prove." },

    { type: "h2", text: "I passi da fare quando arriva la contestazione", id: "passi" },
    { type: "ol", items: [
      "Entro 7 giorni: raccogliere il fascicolo — contratto, verbale di consegna, SAL, foto, messaggi — e fissare la cronologia di consegna e contestazione",
      "Verificare tempestività e forma della denuncia: 60 giorni dalla scoperta per i vizi occulti (art. 1667 c.c.), accettazione ex art. 1665 c.c. per quelli apparenti",
      "Se la contestazione è generica, chiedere per iscritto la specificazione analitica dei difetti con termine di 10 giorni",
      "Far quantificare il costo di eliminazione da un tecnico o con un preventivo terzo, per misurare la proporzionalità della ritenuta",
      "Inviare via PEC l'offerta di ripristino entro 15 giorni, senza riconoscimento di responsabilità, con diffida al pagamento del saldo al netto della somma proporzionata",
      "In caso di rifiuto o silenzio, depositare ricorso per decreto ingiuntivo per il saldo, documentando l'offerta rifiutata",
      "Se il confronto tecnico resta aperto su difetti rilevanti, valutare l'accertamento tecnico preventivo prima della causa di merito",
    ] },

    { type: "figure", slot: "committente-contesta-i-lavori-2", alt: "Verbale di consegna dei lavori firmato, in primo piano la riga delle riserve", caption: "I vizi apparenti non contestati al momento della verifica si considerano accettati." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un'impresa consegna la ristrutturazione completa di un appartamento per 63.000 euro. Il committente trattiene il saldo di 19.000 euro lamentando due difetti: una porta interna che struscia sul pavimento e alcune fughe del bagno non allineate. La prima verifica è economica: un preventivo di terzi quantifica l'eliminazione dei due difetti in circa 1.400 euro. Trattenere 19.000 euro per un difetto da 1.400 è sproporzionato e difficilmente regge in giudizio." },
    { type: "p", text: "La seconda verifica è temporale: si tratta di difetti visibili a occhio nudo, e il verbale di consegna è stato firmato senza riserve otto mesi prima. Per l'art. 1665 c.c. i vizi apparenti non contestati alla verifica si considerano accettati. La mossa scelta: una lettera che offre formalmente il ripristino dei due difetti entro quindici giorni, senza riconoscimento di responsabilità, e contestualmente diffida al pagamento del saldo detratta la sola somma di 1.400 euro accantonata a cautela. Questa combinazione toglie al committente l'argomento dell'eccezione di inadempimento e prepara il terreno al decreto ingiuntivo." },
    { type: "p", text: "Il bivio: se i difetti fossero occulti — per esempio un massetto che si sgretola sotto il pavimento — la partita si sposterebbe sulla perizia. In quel caso all'impresa converrebbe promuovere per prima l'accertamento tecnico preventivo, scegliendo il momento del confronto tecnico invece di subirlo dentro un'opposizione a decreto ingiuntivo." },
    { type: "note", text: "L'errore da non fare: rispondere alla contestazione con una lettera difensiva che discute ogni difetto punto per punto prima di aver verificato date e proporzioni. Si finisce per dare dignità a una contestazione tardiva e per fornire materiale alla controparte. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende sempre dai documenti e dalle circostanze specifiche." },

    { type: "timeline", title: "I termini che il committente lascia scadere", steps: [
      { when: "Alla consegna", label: "Verifica dell'opera", detail: "I vizi apparenti non contestati in questo momento si considerano accettati." },
      { when: "60 giorni dalla scoperta", label: "Denuncia dei vizi occulti", detail: "Art. 1667 c.c.: oltre il termine il committente decade dalla garanzia." },
      { when: "2 anni dalla consegna", label: "Azione per i vizi dell'appalto", detail: "Termine di prescrizione dell'azione ex art. 1667 c.c." },
      { when: "10 anni", label: "Solo per i gravi difetti", detail: "Art. 1669 c.c.: riguarda solidità, durata e godimento dell'immobile." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Il cliente può trattenere tutto il saldo per un vizio piccolo?", a: "No. L'eccezione di inadempimento dell'art. 1460 c.c. deve rispettare la buona fede: la ritenuta va proporzionata al costo di eliminazione del difetto. Trattenere un saldo molto superiore al valore del vizio è considerato contrario a buona fede e non giustifica il mancato pagamento della differenza." },
      { q: "Cosa vale il verbale di fine lavori firmato senza riserve?", a: "Moltissimo. Con l'accettazione dell'opera ex art. 1665 c.c. l'appaltatore è liberato dalla garanzia per i vizi apparenti, cioè riconoscibili alla consegna. Il committente che ha firmato senza riserve non può usare quei difetti, mesi dopo, per giustificare il mancato pagamento del saldo." },
      { q: "Entro quando il committente deve denunciare i vizi?", a: "Per i vizi occulti la denuncia va fatta entro 60 giorni dalla scoperta, a pena di decadenza, e l'azione si prescrive in 2 anni dalla consegna (art. 1667 c.c.). Per i gravi difetti strutturali vale l'art. 1669 c.c.: denuncia entro 1 anno dalla scoperta, nella finestra di 10 anni dal compimento." },
      { q: "Devo accettare di rifare i lavori contestati?", a: "Non sei obbligato, ma offrire il ripristino per iscritto, senza riconoscimento di responsabilità e con termine preciso, è quasi sempre la mossa più forte. Se il committente rifiuta l'intervento gratuito, dimostra che la contestazione serviva a non pagare, e la sua eccezione di inadempimento si svuota." },
      { q: "La contestazione fatta a voce o per telefono ha valore?", a: "Ha un peso molto ridotto. Una denuncia di vizi efficace deve essere specifica e documentabile: per iscritto, con l'indicazione dei difetti e delle opere interessate. Contestazioni verbali o generiche non mettono l'appaltatore in condizione di verificare e difficilmente giustificano il trattenimento del saldo." },
      { q: "Cosa faccio se il committente parla di danni gravi e io li ritengo estetici?", a: "Quando il confronto tecnico è aperto conviene valutare l'accertamento tecnico preventivo ex art. 696-bis c.p.c.: un perito nominato dal giudice fotografa lo stato dei luoghi e quantifica i difetti prima della causa. Spesso la perizia stessa porta a una conciliazione, e chi la promuove sceglie i tempi." },
      { q: "Posso chiedere il decreto ingiuntivo anche se c'è una contestazione?", a: "Sì, se la contestazione è tardiva, generica o sproporzionata e il credito risulta da prova scritta. Una contestazione scritta, tempestiva e circostanziata può però indurre il giudice a negare la provvisoria esecutorietà: in quel caso va gestita prima, spesso con perizia o offerta di ripristino documentata." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai ricevuto una contestazione e il saldo è bloccato, il primo passo è una diagnosi del documento: inviaci la contestazione ricevuta insieme al verbale di consegna e ti diciamo se è tardiva, sproporzionata o fondata, e quale delle tre strategie ha senso nel tuo caso. Per il recupero del saldo leggi anche la guida al recupero crediti nell'edilizia, e prima del prossimo cantiere la guida alle clausole del contratto d'appalto: un verbale di consegna ben scritto previene la maggior parte di queste situazioni." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
