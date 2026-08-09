import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "accertamento-tecnico-preventivo",
  title: "Accertamento tecnico preventivo: perché conviene farlo per primi",
  excerpt:
    "Crepe o infiltrazioni da far accertare prima che qualcuno metta mano ai luoghi? Come funziona l'ATP ex art. 696 e 696-bis c.p.c., i quesiti da porre, costi, tempi e quando non conviene.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "17 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "accertamento tecnico preventivo difetti casa",
    "ATP come funziona",
    "ATP costi tempi",
    "art 696 bis cpc",
    "consulenza tecnica preventiva",
    "ATP o causa ordinaria",
  ],
  intro:
    "L'accertamento tecnico preventivo è un procedimento con cui il tribunale nomina un consulente per accertare difetti e cause prima della causa di merito. Si chiede con ricorso ex art. 696 c.p.c. in caso di urgenza, oppure ex art. 696-bis c.p.c. anche senza urgenza, con tentativo di conciliazione affidato al consulente stesso.",
};

export const seo = {
  seoTitle: "Accertamento Tecnico Preventivo: Come Funziona",
  metaDescription:
    "L'ATP fa accertare i difetti da un CTU prima della causa. Ricorso ex art. 696 e 696-bis c.p.c., quesiti, costi, tempi e quando conviene farlo per primi.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: puoi chiedere al tribunale di far accertare da un consulente lo stato dei luoghi e le cause dei difetti prima della causa (artt. 696 e 696-bis c.p.c.). Il termine: la prova va cristallizzata prima che i luoghi vengano modificati, e comunque entro i termini di decadenza e prescrizione della tua azione. L'azione: il ricorso si deposita al tribunale competente per il merito e chi lo promuove per primo sceglie i quesiti." },

    { type: "h2", text: "Che cos'è l'accertamento tecnico preventivo", id: "cos-e" },
    { type: "p", text: "L'accertamento tecnico preventivo è un procedimento che serve a fotografare la realtà tecnica prima che cambi. Chiedi al tribunale di nominare un consulente d'ufficio perché verifichi lo stato di un immobile, l'esistenza di difetti, le loro cause e il costo per eliminarli. Il tutto avviene prima e fuori dal giudizio di merito, ma con la stessa efficacia probatoria che avrebbe una consulenza disposta in causa." },
    { type: "p", text: "La ragione per cui esiste è semplice: le prove edilizie si consumano. Un'infiltrazione viene tamponata, un intonaco distaccato viene rifatto, una crepa viene stuccata, e con l'intervento sparisce anche la possibilità di dimostrare com'erano le cose. La perizia che hai commissionato tu, per quanto ben fatta, resta un documento di parte che la controparte può contestare. La relazione del consulente d'ufficio no." },
    { type: "p", text: "C'è poi un effetto meno visibile ma altrettanto importante. Un accertamento condotto in contraddittorio, con un tecnico nominato dal giudice, sposta la discussione dal piano delle opinioni a quello dei numeri. Molte trattative che erano bloccate da mesi si sbloccano nel momento in cui esiste una relazione che quantifica il danno." },
    { type: "p", text: "L'ATP non decide chi ha ragione. Non condanna nessuno a pagare e non attribuisce responsabilità giuridiche: accerta fatti tecnici. Ma nella materia dei difetti edilizi i fatti tecnici sono quasi tutta la controversia, e per questo l'esito dell'ATP condiziona pesantemente ciò che accade dopo." },

    { type: "figure", slot: "accertamento-tecnico-preventivo-1", alt: "Sopralluogo peritale in un appartamento: consulente con metro laser e macchina fotografica, due tecnici di parte prendono appunti", caption: "Le operazioni peritali si svolgono in contraddittorio: ogni parte può farsi assistere da un proprio consulente." },

    { type: "h2", text: "Art. 696 e art. 696-bis c.p.c.: due strumenti che sembrano uguali", id: "696-e-696bis" },
    { type: "p", text: "Il codice di procedura civile prevede due strade, e sceglierne una non è un dettaglio formale. L'art. 696 c.p.c. consente a chi ha urgenza di far verificare, prima del giudizio, lo stato dei luoghi o la qualità e la condizione delle cose. L'accertamento può estendersi alla valutazione delle cause e dei danni relativi all'oggetto della verifica. Il presupposto è però l'urgenza: devi dimostrare che rimandare significherebbe perdere la prova." },
    { type: "p", text: "L'art. 696-bis c.p.c. introduce invece la consulenza tecnica preventiva ai fini della composizione della lite. Si può chiedere anche fuori dai casi di urgenza, per l'accertamento e la determinazione dei crediti derivanti dalla mancata o inesatta esecuzione di obbligazioni contrattuali o da fatto illecito. È la formula che copre naturalmente i difetti costruttivi e i lavori eseguiti male." },
    { type: "p", text: "La differenza che pesa di più è il tentativo di conciliazione. Nel procedimento ex art. 696-bis c.p.c. il consulente, prima di depositare la relazione, tenta ove possibile di conciliare le parti. Nell'ATP tradizionale questo passaggio non è previsto. È il motivo per cui, nelle controversie edilizie non urgenti, il 696-bis è oggi lo strumento più utilizzato." },
    { type: "table", headers: ["Profilo", "Art. 696 c.p.c. — ATP", "Art. 696-bis c.p.c. — consulenza tecnica preventiva"], rows: [
      ["Presupposto", "Urgenza: rischio concreto che la prova si disperda", "Nessuna urgenza richiesta"],
      ["Oggetto", "Stato dei luoghi, qualità e condizione delle cose; cause e danni relativi", "Accertamento e determinazione dei crediti da inadempimento contrattuale o fatto illecito"],
      ["Tentativo di conciliazione", "Non previsto", "Il consulente lo tenta prima di depositare la relazione"],
      ["Esito conciliativo", "Nessuno tipizzato", "Processo verbale a cui il giudice può attribuire efficacia di titolo esecutivo con decreto"],
      ["Uso della relazione nel merito", "Acquisibile al successivo giudizio", "Su istanza di parte, acquisibile agli atti del giudizio di merito"],
      ["Quando si usa in edilizia", "Difetto in evoluzione o intervento imminente sui luoghi", "Difetto stabilizzato, controversia già chiara, obiettivo transattivo"],
      ["Effetto tipico sulla trattativa", "Blocca la modifica dello stato dei luoghi", "Porta un numero condiviso sul tavolo e apre alla definizione bonaria"],
    ] },

    { type: "h2", text: "Perché conviene muoversi per primi?", id: "muoversi-per-primi" },
    { type: "p", text: "Chi deposita il ricorso sceglie tre cose che poi condizionano tutto: il momento, il perimetro e i quesiti. Il momento, perché fissa lo stato dei luoghi quando è più eloquente — l'infiltrazione durante la stagione delle piogge, la crepa prima che venga stuccata. Se aspetti che si muova la controparte, l'accertamento arriverà quando i segni saranno meno leggibili." },
    { type: "p", text: "Il perimetro, perché nel ricorso indichi quali parti dell'immobile vanno esaminate e quali soggetti vanno chiamati. Chiamare in causa fin da subito costruttore, direttore dei lavori, progettista e, se esiste, l'assicuratore della polizza decennale significa che l'accertamento sarà opponibile a tutti loro. Un accertamento svolto senza una delle parti perde efficacia proprio verso chi resta fuori." },
    { type: "p", text: "I quesiti, infine, sono ciò che il consulente è tenuto a esaminare. Il giudice li formula tenendo conto delle richieste delle parti, ma chi ha scritto il ricorso arriva con una proposta già articolata e con il vantaggio di aver ragionato per settimane su cosa serva dimostrare. Chi si difende propone integrazioni, il che è meno vantaggioso." },
    { type: "p", text: "C'è anche un effetto pratico sulla posizione negoziale. Un ricorso depositato dice alla controparte che non stai bluffando e che il costo del contenzioso ha iniziato a correre per entrambi. Non è un argomento giuridico, ma nella pratica cambia il tono delle risposte." },

    { type: "h2", text: "Come si svolge, passo per passo", id: "svolgimento" },
    { type: "p", text: "Il procedimento è più snello di una causa ordinaria, ma ha una sua sequenza rigida. Il ricorso si deposita davanti al giudice competente per il merito, con l'esposizione dei fatti, l'indicazione delle parti da chiamare e la proposta di quesiti. Il giudice fissa l'udienza di comparizione e assegna un termine per notificare ricorso e decreto alle controparti." },
    { type: "p", text: "All'udienza il giudice verifica i presupposti, nomina il consulente tecnico d'ufficio, formula i quesiti definitivi e fissa i termini per il deposito della relazione. Il consulente accetta l'incarico, comunica alle parti data e ora di inizio delle operazioni peritali, e da quel momento ogni sopralluogo si svolge in contraddittorio con i consulenti tecnici di parte." },
    { type: "p", text: "Segue la fase più tecnica: rilievi, saggi, prove strumentali, eventuali demolizioni limitate per verificare la stratigrafia. Il consulente redige poi una bozza di relazione che trasmette alle parti, le quali depositano osservazioni tramite i propri tecnici. La relazione finale deve prendere posizione su quelle osservazioni: è una garanzia importante, perché impedisce che i rilievi di parte vengano ignorati." },
    { type: "ol", items: [
      "Giorno 0: incarichi un tecnico di fiducia per una relazione preliminare che individui i difetti e ipotizzi le cause — è la base del ricorso",
      "Entro 15 giorni: raccogli i documenti (rogito o contratto, capitolato, permesso di costruire, verbale di consegna, fotografie datate) e verifica se esiste una polizza decennale postuma",
      "Entro 30 giorni: deposita il ricorso indicando tutte le controparti e proponendo i quesiti; il giudice fissa l'udienza",
      "Nei 20-30 giorni successivi: notifica ricorso e decreto nel termine assegnato dal giudice, a pena di inefficacia",
      "All'udienza: il giudice nomina il CTU e formula i quesiti; nomina il tuo consulente di parte prima dell'inizio delle operazioni",
      "Entro 10 giorni dalla comunicazione del CTU: partecipa al sopralluogo con il tuo tecnico e fai verbalizzare ogni rilievo che ritieni rilevante",
      "Entro il termine fissato per le osservazioni, di norma 15-30 giorni dalla bozza: deposita le osservazioni tecniche, perché la relazione finale dovrà rispondervi",
      "Dopo il deposito: valuta la proposta conciliativa oppure avvia il giudizio di merito chiedendo l'acquisizione della relazione",
    ] },

    { type: "h2", text: "I quesiti che fanno la differenza", id: "quesiti" },
    { type: "p", text: "Un ATP con quesiti generici produce una relazione generica, che non serve né a transigere né a vincere. La formula «accerti il consulente lo stato dell'immobile e riferisca» è il modo più efficace per sprecare mesi e denaro. I quesiti utili sono analitici e coprono la catena completa: che cosa c'è, perché c'è, quanto costa risolverlo, che cosa comporta nel frattempo." },
    { type: "p", text: "Nei difetti costruttivi ci sono domande che tornano quasi sempre, e che vale la pena proporre nel ricorso." },
    { type: "ul", items: [
      "Accerti il consulente la presenza, l'estensione e la gravità dei difetti descritti, documentandoli con rilievi e fotografie",
      "Individui la causa tecnica di ciascun difetto, distinguendo tra errore di progettazione, difetto di esecuzione, vizio dei materiali e carenza di manutenzione",
      "Verifichi la conformità delle opere al progetto approvato, al capitolato e alle norme tecniche applicabili al momento della realizzazione",
      "Accerti se i difetti incidano sulla stabilità dell'edificio o sul suo normale godimento, e in che misura",
      "Descriva gli interventi necessari al ripristino a regola d'arte e ne quantifichi il costo con computo metrico analitico, distinguendo le opere provvisionali",
      "Indichi i tempi di esecuzione dei lavori e se comportino l'inagibilità totale o parziale dei locali",
      "Accerti l'epoca approssimativa di insorgenza dei difetti e la loro evoluzione nel tempo",
      "Quantifichi i danni ulteriori documentati, quali il deterioramento di finiture, arredi e impianti conseguente ai difetti accertati",
    ] },
    { type: "p", text: "L'ultimo quesito è quello che si dimentica più spesso ed è tra i più utili. Chiedere l'epoca di insorgenza serve a rispondere in anticipo all'obiezione classica della controparte: che i difetti siano comparsi tardi, o che dipendano da come hai usato o mantenuto l'immobile." },

    { type: "h2", text: "Come funziona il tentativo di conciliazione del 696-bis?", id: "conciliazione" },
    { type: "p", text: "Nel procedimento ex art. 696-bis c.p.c. il consulente, prima di depositare la relazione, tenta ove possibile la conciliazione delle parti. Non è una formalità: arriva nel momento in cui tutti hanno letto i numeri e nessuno può più raccontarsi che il difetto non esiste o che ripararlo costa poco. È il punto di massima pressione ragionevole dell'intera vicenda." },
    { type: "p", text: "Se la conciliazione riesce, si redige processo verbale dell'accordo. Il giudice può attribuire con decreto efficacia di titolo esecutivo a quel verbale, ai fini dell'espropriazione forzata, dell'esecuzione in forma specifica e dell'iscrizione di ipoteca giudiziale. In altre parole ottieni, senza una causa, un titolo che ha la forza di una sentenza per ciò che è stato concordato." },
    { type: "p", text: "Se invece la conciliazione non riesce, la relazione viene depositata e ciascuna parte può chiedere che sia acquisita agli atti del successivo giudizio di merito. Nulla è andato perduto: l'accertamento resta e la causa parte da una base tecnica già formata in contraddittorio, con un risparmio di tempo che spesso vale un anno di istruttoria." },
    { type: "p", text: "Va detto con onestà che l'accordo non è scontato. Quando la controparte è un soggetto strutturato, con un assicuratore alle spalle, la conciliazione dipende anche dalle logiche interne di chi deve autorizzare la spesa. Ma anche quando fallisce, il tentativo mette per iscritto le posizioni di tutti, e questo pesa nel giudizio successivo." },

    { type: "h2", text: "Quanto costa e quanto dura davvero?", id: "costi-tempi" },
    { type: "p", text: "Le voci di spesa sono quattro e vanno considerate insieme, perché il costo del solo contributo unificato dice poco. Il consulente d'ufficio è quasi sempre la voce più pesante, e il suo compenso dipende dalla complessità dell'accertamento e dal valore delle opere esaminate. Nei procedimenti speciali il contributo unificato è di norma ridotto rispetto a quello del giudizio ordinario di pari valore." },
    { type: "table", headers: ["Voce", "Chi la sostiene", "Ordine di grandezza indicativo"], rows: [
      ["Contributo unificato", "Chi deposita il ricorso", "Secondo lo scaglione di valore, di norma in misura ridotta rispetto al giudizio ordinario"],
      ["Anticipazioni forfettarie", "Chi deposita il ricorso", "Importo fisso di modesta entità, versato con il contributo"],
      ["Compenso dell'avvocato", "Ciascuna parte per il proprio difensore", "Determinato secondo i parametri forensi in base a valore e attività svolte"],
      ["Fondo spese e compenso del CTU", "Anticipato di regola da chi ricorre, salvo diversa disposizione del giudice", "Varia con l'ampiezza dell'accertamento, i saggi e le prove strumentali richieste"],
      ["Consulente tecnico di parte", "Ciascuna parte per il proprio", "Dipende dal numero di sopralluoghi e dalle osservazioni da redigere"],
      ["Saggi, demolizioni limitate, prove di laboratorio", "Di norma chi ricorre, se richiesti", "Voce eventuale, spesso sottovalutata nella previsione iniziale"],
    ] },
    { type: "p", text: "Sui tempi, un ATP ben istruito si chiude di norma in un arco che va da qualche mese a poco più di un anno, con variabilità significativa tra tribunali. Le fasi che si dilatano sono due: l'attesa dell'udienza di nomina e i termini di proroga chiesti dal consulente quando l'accertamento richiede saggi o prove di laboratorio." },
    { type: "p", text: "Il confronto va comunque fatto con l'alternativa. Un giudizio ordinario che comprenda la stessa consulenza tecnica richiede tempi sensibilmente più lunghi, perché la consulenza arriva dopo la fase introduttiva e le memorie istruttorie. L'ATP anticipa il momento in cui hai un numero in mano, ed è quel numero a permetterti di decidere." },

    { type: "h2", text: "Quando NON conviene", id: "quando-non-conviene" },
    { type: "p", text: "Non conviene quando il difetto è già stato riparato e non ne resta traccia utile. Se hai rifatto la copertura prima di far accertare nulla, il consulente potrà al massimo valutare la documentazione fotografica e le fatture, con un valore probatorio molto ridotto. In quel caso ha più senso costruire la prova sui documenti esistenti e sulle testimonianze delle ditte intervenute." },
    { type: "p", text: "Non conviene quando la controversia è puramente giuridica. Se il difetto è pacifico e le parti litigano su chi debba risponderne, su una clausola contrattuale o su una decadenza, un accertamento tecnico aggiunge poco e ritarda la decisione. Lo stesso vale quando il valore in gioco è modesto rispetto al costo prevedibile del consulente." },
    { type: "p", text: "Va valutato con attenzione anche il caso in cui la controparte abbia già offerto un intervento risolutivo. Rifiutarlo per fare l'ATP può essere ragionevole se l'offerta è generica o parziale, meno se copre effettivamente il problema. Prima di depositare, chiediti sempre che cosa otterresti che non hai già sul tavolo." },
    { type: "p", text: "Infine, verifica se la tua controversia richieda un passaggio preliminare obbligatorio prima del giudizio di merito, perché l'inquadramento della lite incide su questo. È una verifica da fare all'inizio, non dopo, per non trovarsi a ripetere passaggi già compiuti." },

    { type: "figure", slot: "accertamento-tecnico-preventivo-2", alt: "Saggio esplorativo su un solaio: porzione di massetto rimossa che mostra la stratigrafia e la guaina impermeabilizzante", caption: "Il saggio distruttivo è spesso l'unico modo per accertare la causa: una volta eseguito, lo stato originario non è più ricostruibile." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Acquisti una villetta a schiera consegnata quattro anni prima. Dal secondo inverno il muro del piano interrato presenta umidità di risalita e la pittura si stacca su una fascia alta circa 70 centimetri, per uno sviluppo di 9,3 metri lineari. Il costruttore risponde che si tratta di condensa dovuta alla scarsa aerazione e propone di installare un deumidificatore." },
    { type: "p", text: "Il tuo tecnico, dopo due sopralluoghi, ipotizza invece che manchi il drenaggio perimetrale e che l'impermeabilizzazione controterra sia stata interrotta in corrispondenza dello spiccato. Per dimostrarlo serve uno scavo lungo il perimetro esterno. È esattamente il tipo di verifica che, una volta eseguita da una sola parte, non è più ripetibile: chi scava, modifica." },
    { type: "p", text: "Depositi ricorso ex art. 696-bis c.p.c. chiamando costruttore, direttore dei lavori e l'assicuratore della polizza decennale indicata nel rogito. Il consulente esegue due scavi campione, accerta l'assenza del drenaggio e quantifica il ripristino in 23.800 euro, più 4.150 euro di opere interne e 1.900 euro di allontanamento temporaneo dei mobili. In sede di conciliazione l'assicuratore offre 16.500 euro a saldo." },
    { type: "p", text: "Qui si apre il bivio. Accettare significa chiudere in tempi brevi con un titolo eseguibile e senza il rischio di una causa, rinunciando però a circa un terzo del quantificato. Non accettare significa portare in giudizio una relazione formata in contraddittorio, con basi solide, accettando tempi lunghi e l'incertezza sul riparto delle spese. La scelta dipende dalla tua capacità di attesa e da quanto pesa il rischio residuo, non da un principio generale." },
    { type: "note", text: "L'errore da non fare: far eseguire lo scavo o il saggio dal proprio tecnico prima di aver depositato il ricorso. La verifica distrugge lo stato dei luoghi e trasforma una prova solida in una perizia di parte contestabile. Lo scenario descritto è illustrativo: importi, esiti e valutazioni dipendono dal caso concreto." },

    { type: "timeline", title: "I termini che scandiscono l'accertamento preventivo", steps: [
      { when: "Prima di ogni intervento", label: "Momento utile per depositare il ricorso", detail: "Una volta modificati i luoghi, l'accertamento perde gran parte del suo valore probatorio." },
      { when: "Termine fissato dal giudice", label: "Notifica di ricorso e decreto", detail: "Il termine è perentorio: la notifica tardiva rende inefficace il decreto di fissazione dell'udienza." },
      { when: "Comunicazione del CTU", label: "Inizio delle operazioni peritali", detail: "Da quel momento decorre la fase in contraddittorio: il consulente di parte va nominato prima." },
      { when: "Termine per le osservazioni", label: "Deposito dei rilievi tecnici di parte", detail: "La relazione finale deve prendere posizione sulle osservazioni depositate nei termini." },
      { when: "Termini di decadenza e prescrizione", label: "Vincoli esterni che continuano a correre", detail: "L'accertamento va coordinato con la denuncia dei difetti e con gli atti interruttivi della prescrizione." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "L'ATP sostituisce la causa?", a: "No. L'accertamento tecnico preventivo accerta fatti tecnici, non attribuisce responsabilità né condanna al pagamento. Può però chiudere la vicenda quando le parti raggiungono un accordo in sede di conciliazione, perché al verbale il giudice può attribuire efficacia di titolo esecutivo con decreto." },
      { q: "Serve l'avvocato per depositare il ricorso?", a: "Sì, il procedimento si svolge davanti al tribunale e richiede l'assistenza tecnica di un difensore. Il ricorso non è un modulo da compilare: la scelta della norma, delle controparti da chiamare e dei quesiti da proporre incide in modo diretto sull'utilità della relazione che otterrai." },
      { q: "Posso partecipare al sopralluogo con un mio tecnico?", a: "Sì, ed è consigliabile. Le operazioni peritali si svolgono in contraddittorio e ogni parte può nominare un proprio consulente, che assiste ai rilievi, chiede verbalizzazioni e deposita osservazioni sulla bozza di relazione. La relazione finale dovrà prendere posizione su quelle osservazioni." },
      { q: "Chi paga il consulente d'ufficio?", a: "Il fondo spese è di regola anticipato da chi ha depositato il ricorso, salvo diversa disposizione del giudice. La decisione definitiva sul carico delle spese avviene però nel giudizio di merito o nell'accordo conciliativo, dove il costo dell'accertamento può essere posto a carico della controparte." },
      { q: "La relazione del CTU vincola il giudice del merito?", a: "Non lo vincola in senso stretto, perché il giudice può discostarsene motivando. Nella pratica, però, una relazione formata in contraddittorio, con rilievi documentati e risposta alle osservazioni di parte, costituisce una base che difficilmente viene ribaltata senza elementi tecnici nuovi." },
      { q: "Posso fare l'ATP se il costruttore ha chiuso la società?", a: "Sì, purché ci sia almeno una controparte da chiamare: il direttore dei lavori, il progettista, il venditore o l'assicuratore della polizza decennale. L'accertamento è opponibile solo a chi è stato posto in condizione di partecipare, quindi l'individuazione delle parti va curata prima del deposito." },
      { q: "Quanto vale una perizia di parte rispetto a un ATP?", a: "La perizia di parte serve a impostare il caso e a decidere se agire, ma resta un documento di provenienza unilaterale che la controparte può contestare. L'accertamento disposto dal giudice, svolto in contraddittorio, ha un peso probatorio diverso proprio perché tutti hanno potuto parteciparvi." },
      { q: "Che differenza c'è tra l'art. 696 e l'art. 696-bis nella pratica?", a: "L'art. 696 c.p.c. richiede di dimostrare l'urgenza ed è la via quando i luoghi stanno per essere modificati. L'art. 696-bis c.p.c. non richiede urgenza, copre i crediti da inadempimento e prevede il tentativo di conciliazione del consulente: è la scelta più frequente nelle controversie edilizie." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai un difetto in casa e temi che i luoghi vengano modificati, la valutazione da fare è duplice: quale delle due norme si adatta alla tua situazione e chi va chiamato perché l'accertamento sia opponibile a tutti. Contattaci dalla pagina contatti portando fotografie datate, rogito o contratto d'appalto, capitolato e la relazione del tuo tecnico se già l'hai." },
    { type: "p", text: "Prima di decidere, può esserti utile anche la guida sulla differenza tra l'art. 1667 e l'art. 1669 del codice civile: la qualificazione del difetto orienta i quesiti da proporre e le parti da chiamare nel ricorso." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
