import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "sconto-in-fattura-non-applicato",
  title: "Sconto in fattura promesso e mai applicato: cosa si può fare",
  excerpt:
    "L'impresa aveva promesso lo sconto in fattura, poi ha emesso fattura piena o ha lasciato il cantiere a metà. Quando è inadempimento, quali rimedi restano e come si recuperano gli acconti versati.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "15 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "sconto in fattura non applicato cosa fare",
    "general contractor non applica sconto in fattura",
    "contratto superbonus sconto in fattura inadempimento",
    "recupero acconti superbonus",
    "cessione credito non perfezionata",
  ],
  intro:
    "La promessa di sconto in fattura è un'obbligazione contrattuale: se l'impresa non la rispetta, sei di fronte a un inadempimento e puoi chiedere l'esecuzione, la risoluzione con restituzione degli acconti o il risarcimento. La difesa dell'impresa che invoca il blocco normativo delle cessioni regge solo se quel blocco ha reso l'obbligazione davvero impossibile.",
};

export const seo = {
  seoTitle: "Sconto in Fattura Non Applicato: Cosa Fare Subito",
  metaDescription:
    "L'impresa ha promesso lo sconto in fattura e non l'ha applicato? Diffida, risoluzione, recupero degli acconti e detrazione residua: i rimedi reali.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: la promessa di sconto in fattura è un'obbligazione contrattuale e il suo mancato adempimento è inadempimento (art. 1218 c.c.). Il termine: la diffida ad adempiere deve assegnare un termine non inferiore a 15 giorni (art. 1454 c.c.). L'azione: diffida, poi risoluzione con restituzione degli acconti e risarcimento, oppure riduzione del corrispettivo se preferisci tenere in piedi il contratto." },

    { type: "h2", text: "Che cosa hai comprato davvero quando ti hanno promesso lo sconto", id: "natura-promessa" },
    { type: "p", text: "Lo sconto in fattura non è una cortesia commerciale né una scontistica di listino. È il contributo previsto dall'art. 121, comma 1, lettera a), del D.L. 34/2020: il fornitore anticipa il beneficio riducendo il corrispettivo che tu devi pagare e recupera l'importo sotto forma di credito d'imposta. Nel contratto quella promessa è un'obbligazione a carico dell'impresa, esattamente come l'obbligo di eseguire i lavori a regola d'arte." },
    { type: "p", text: "Ne discende una conseguenza che molti committenti non mettono a fuoco. Se l'impresa emette fattura senza applicare lo sconto, o se emette la fattura con lo sconto ma non trasmette l'opzione, non sta semplicemente cambiando modalità di pagamento: sta lasciando inadempiuta una prestazione che era parte dell'equilibrio economico dell'accordo. Il prezzo che hai accettato era quel prezzo perché comprendeva quella promessa." },
    { type: "p", text: "Il primo passaggio operativo, quindi, è leggere il contratto con occhi diversi. Va individuato dove è scritta la promessa — clausola dedicata, allegato economico, preventivo accettato, scambio di email — e con quale formulazione. Un impegno formulato come obbligo dell'impresa ha un peso; una formula condizionale del tipo \"subordinatamente alla capienza fiscale e all'accettazione del cessionario\" ne ha un altro, e va analizzata riga per riga." },

    { type: "figure", slot: "sconto-in-fattura-non-applicato-1", alt: "Contratto di appalto aperto sulla clausola dello sconto in fattura, accanto a una fattura emessa per l'intero importo", caption: "Tutto parte dalla clausola: come è formulata la promessa di sconto decide quali rimedi sono davvero disponibili." },

    { type: "h2", text: "È inadempimento o impossibilità sopravvenuta?", id: "inadempimento-o-impossibilita" },
    { type: "p", text: "È la domanda che decide la causa, e la risposta quasi mai è netta. L'impresa che non applica lo sconto in genere si difende richiamando il blocco delle nuove opzioni introdotto dal D.L. 11/2023, convertito nella L. 38/2023, o la chiusura dei canali di acquisto da parte dei cessionari. La tesi è che l'obbligazione sia divenuta impossibile per causa non imputabile, con gli effetti degli artt. 1256 e 1463 c.c." },
    { type: "p", text: "Perché quella difesa regga occorre però che l'impossibilità sia oggettiva e non imputabile all'impresa. Se il contratto rientrava tra le fattispecie fatte salve dalla disciplina transitoria, o se l'opzione non è stata trasmessa per inerzia del fornitore prima che il quadro cambiasse, non c'è impossibilità: c'è un ritardo che ha prodotto il danno. La distinzione si gioca sulle date, ed è per questo che la ricostruzione cronologica del fascicolo vale più di qualsiasi argomento." },
    { type: "p", text: "Esiste poi una zona intermedia, quella dell'impresa che avrebbe potuto cedere il credito ma solo a condizioni economiche peggiori. Qui non si parla di impossibilità ma, semmai, di maggiore onerosità, che l'ordinamento tratta in modo diverso e con presupposti stringenti (art. 1467 c.c.). Un'impresa che sceglie di non cedere per ragioni di convenienza propria non ha una causa di esonero da opporti." },

    { type: "h2", text: "I rimedi, nell'ordine in cui vanno usati", id: "rimedi" },
    { type: "p", text: "Il primo atto è la diffida ad adempiere ex art. 1454 c.c., con termine non inferiore a quindici giorni e con l'avvertimento espresso che, decorso inutilmente, il contratto si intenderà risolto. È un atto tecnico: se manca l'avvertimento o se il termine è più breve, non produce l'effetto risolutivo automatico e resta un semplice sollecito." },
    { type: "p", text: "La diffida deve anche dire con precisione che cosa chiedi. Applicare lo sconto ed emettere nota di credito, oppure trasmettere l'opzione entro il termine, oppure restituire gli acconti: sono richieste diverse e vanno formulate in via principale e subordinata, non impastate in una lamentela generica. Una diffida ambigua diventa un problema probatorio nel momento in cui serve dimostrare che cosa avevi domandato." },
    { type: "p", text: "Se il termine scade senza risposta si aprono due strade alternative. La risoluzione del contratto ex art. 1453 c.c., che scioglie il rapporto e obbliga alla restituzione di quanto versato ex art. 1458 c.c., più il risarcimento del danno. Oppure il mantenimento del contratto con richiesta di riduzione del corrispettivo, quando i lavori sono in gran parte eseguiti e demolire il rapporto ti danneggerebbe più dell'impresa." },

    { type: "table", headers: ["Situazione", "Rimedio principale", "Che cosa ottieni concretamente"], rows: [
      ["Lavori non ancora iniziati, sconto rifiutato", "Diffida e risoluzione ex art. 1453 c.c.", "Scioglimento del contratto e restituzione integrale degli acconti"],
      ["Lavori a metà, l'impresa vuole fattura piena", "Riduzione del corrispettivo o risoluzione parziale", "Contratto in piedi sulla parte eseguita, prezzo ricondotto al pattuito"],
      ["Lavori finiti, opzione mai trasmessa", "Risarcimento del danno ex artt. 1218 e 1223 c.c.", "Ristoro del beneficio perduto, se non recuperabile in dichiarazione"],
      ["Impresa che invoca il blocco normativo", "Verifica delle date e della disciplina transitoria", "Se il contratto rientrava tra le ipotesi fatte salve, la difesa non regge"],
      ["Cessione al terzo non perfezionata", "Azione verso il fornitore, non verso il cessionario", "Il tuo rapporto contrattuale è con chi ha promesso lo sconto"],
    ] },

    { type: "h2", text: "Come si recuperano gli acconti versati?", id: "acconti" },
    { type: "p", text: "Gli acconti sono il capitolo più concreto, perché sono soldi già usciti. Se il contratto si risolve, la restituzione discende dall'effetto restitutorio della risoluzione (art. 1458 c.c.) e, per le somme prive di titolo, dalla ripetizione dell'indebito (art. 2033 c.c.). La richiesta va formulata con un conteggio analitico: importo, data, mezzo di pagamento e causale di ciascun versamento." },
    { type: "p", text: "Va però evitata una semplificazione frequente. Se una parte dei lavori è stata eseguita, l'impresa ha diritto al corrispettivo per quella parte, e la restituzione riguarda la differenza. Presentarsi chiedendo tutto indietro quando in cantiere c'è un cappotto posato al settanta per cento indebolisce la posizione e allunga i tempi: conviene arrivare con una quantificazione tecnica dello stato di avanzamento." },
    { type: "p", text: "Quando l'impresa mostra segnali di difficoltà, il tempo diventa la variabile principale. Prima di avviare una causa lunga vale la pena verificare la consistenza patrimoniale della controparte e valutare, con l'assistenza legale, gli strumenti di tutela del credito disponibili in via cautelare. Un titolo ottenuto contro una società ormai svuotata ha un valore pratico limitato." },

    { type: "h2", text: "Se lo sconto salta, puoi ancora detrarre in dichiarazione?", id: "detrazione-residua" },
    { type: "p", text: "In linea di principio sì, ma a una condizione precisa: la detrazione spetta a chi sostiene la spesa. Se lo sconto non viene applicato e paghi tu la fattura con le modalità richieste dalla normativa — bonifico con le indicazioni prescritte, salvo i casi in cui non sia dovuto — la detrazione torna a essere fruibile nella dichiarazione dei redditi, secondo l'aliquota e la ripartizione in quote annuali previste per l'anno in cui la spesa è stata sostenuta." },
    { type: "p", text: "Le insidie sono due. La prima è l'aliquota: le percentuali del superbonus sono cambiate nel tempo, quindi la detrazione recuperabile oggi può essere inferiore al beneficio promesso in contratto, e proprio quella differenza costituisce una voce di danno da chiedere all'impresa. La seconda è la capienza fiscale: se la tua imposta annua non assorbe la quota, la parte eccedente non è recuperabile e va anch'essa quantificata come danno." },
    { type: "p", text: "C'è poi il tema pratico degli adempimenti. Asseverazioni, visto di conformità e attestazioni possono essere stati predisposti per il percorso dell'opzione e non per la detrazione diretta, e vanno verificati con il tecnico prima della dichiarazione. Chiedere all'impresa la consegna integrale della documentazione, con termine scritto, è un passaggio da fare subito." },

    { type: "table", headers: ["Voce", "Come si quantifica", "Verso chi si chiede"], rows: [
      ["Acconti versati senza controprestazione", "Somma dei bonifici, al netto dei lavori realmente eseguiti", "Impresa o general contractor"],
      ["Differenza tra beneficio promesso e detrazione recuperabile", "Confronto tra aliquota pattuita e aliquota applicabile all'anno di spesa", "Impresa o general contractor"],
      ["Quota di detrazione persa per incapienza", "Simulazione fiscale sulle imposte dovute negli anni di ripartizione", "Impresa o general contractor"],
      ["Costi tecnici sostenuti a vuoto", "Fatture di asseverazioni, APE, visto di conformità", "Impresa, e in alcuni casi il professionista incaricato"],
      ["Maggiori costi per completare i lavori con altra impresa", "Preventivi comparativi e differenza rispetto al pattuito", "Impresa inadempiente"],
    ] },

    { type: "h2", text: "Che cosa fare, e in quanti giorni", id: "passi" },
    { type: "ol", items: [
      "Entro 7 giorni: raccogliere contratto, allegati economici, preventivo accettato, email e messaggi in cui lo sconto è stato promesso",
      "Entro 10 giorni: chiedere per PEC all'impresa copia di fatture emesse, comunicazioni delle opzioni trasmesse e documentazione tecnica",
      "Entro 15 giorni: far quantificare da un tecnico lo stato di avanzamento reale dei lavori, con rilievo fotografico datato",
      "Entro 20 giorni: notificare la diffida ad adempiere con termine di 15 giorni e avvertimento di risoluzione (art. 1454 c.c.)",
      "Entro 40 giorni: se il termine scade inutilmente, comunicare formalmente la risoluzione e chiedere la restituzione degli acconti con conteggio analitico",
      "Entro 60 giorni: valutare l'avvio del percorso conciliativo o dell'azione giudiziale, verificando prima la consistenza patrimoniale della controparte",
    ] },
    { type: "p", text: "Il calendario non è un adempimento burocratico. Serve a evitare l'errore più comune, cioè lasciar passare mesi in trattative informali mentre l'impresa si riorganizza o cessa l'attività. Ogni passaggio scritto costruisce la prova del tuo comportamento diligente, che pesa anche sulla quantificazione del danno." },

    { type: "h2", text: "Come coordinarsi con impresa e cessionario", id: "coordinamento" },
    { type: "p", text: "Un punto va chiarito subito: il tuo contratto è con l'impresa o con il general contractor, non con la banca o con la società che avrebbe dovuto acquistare il credito. Se la cessione non si è perfezionata, il cessionario non ha assunto alcun obbligo verso di te e chiedergli conto è tempo perso. La responsabilità di procurare l'effetto promesso resta di chi lo ha promesso." },
    { type: "p", text: "Diverso è il caso in cui la struttura contrattuale coinvolgeva più soggetti con ruoli distinti: general contractor per il coordinamento, impresa esecutrice per i lavori, tecnico per le asseverazioni. Qui va ricostruito chi si era obbligato a che cosa, perché la responsabilità può essere ripartita e alcune posizioni possono essere solidali. È una lettura che si fa sui contratti, non sulle impressioni." },
    { type: "p", text: "Va infine verificato se il cantiere ha prodotto opere incomplete che creano un problema in sé — ponteggi rimasti, cappotto posato solo in parte, impianti smontati. In quel caso alla questione economica si somma quella tecnica, e la messa in mora deve chiedere anche il ripristino o la messa in sicurezza, con termine espresso." },

    { type: "figure", slot: "sconto-in-fattura-non-applicato-2", alt: "Facciata con cappotto termico posato solo su una porzione e ponteggio ancora montato", caption: "Quando il cantiere si ferma a metà, la quantificazione dello stato di avanzamento diventa il cuore della trattativa." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un proprietario firma con un general contractor un contratto da 74.600 euro per cappotto e sostituzione infissi, con sconto in fattura integrale indicato in una clausola dedicata. Versa 8.300 euro come anticipo per le spese tecniche. I lavori partono, si fermano dopo la posa del cappotto su due lati su quattro, e a quel punto l'impresa comunica che lo sconto non è più praticabile e chiede il pagamento della fattura per intero." },
    { type: "p", text: "La ricostruzione delle date mostra che la pratica edilizia era stata presentata prima della modifica normativa invocata dall'impresa, e che l'opzione non era stata trasmessa nei mesi successivi nonostante due solleciti via email. La perizia tecnica quantifica i lavori realmente eseguiti in 27.900 euro. È la configurazione in cui la difesa dell'impossibilità sopravvenuta appare fragile, perché il ritardo è riconducibile alla condotta del fornitore." },
    { type: "p", text: "Il bivio è tra due strategie. La prima: diffida ad adempiere con termine di quindici giorni per la trasmissione dell'opzione, e in subordine risoluzione con restituzione dell'anticipo di 8.300 euro al netto delle spese tecniche effettivamente sostenute; è la via più rapida per chiudere il rapporto e affidare il completamento ad altra impresa. La seconda: mantenere il contratto per la parte eseguita, chiedere la riduzione del corrispettivo alla misura pattuita e recuperare la detrazione in dichiarazione, agendo poi per la differenza tra beneficio promesso e beneficio effettivamente recuperabile. La scelta dipende da quanto il cantiere è avanzato e da quanto l'impresa è solida." },
    { type: "note", text: "L'errore da non fare: pagare la fattura piena \"per non bloccare i lavori\", contando di recuperare dopo. Il pagamento senza riserva scritta indebolisce la contestazione e sposta il peso della prova. Se decidi di pagare, fallo con riserva espressa e per iscritto. Lo scenario descritto è illustrativo: l'esito dipende dalle clausole, dalle date e dalla documentazione." },

    { type: "timeline", title: "I termini da tenere sotto controllo", steps: [
      { when: "Giorno 0", label: "Rifiuto o inerzia dell'impresa", detail: "Da qui vanno datati tutti gli atti successivi: conserva email, PEC e messaggi." },
      { when: "15 giorni", label: "Termine minimo della diffida ad adempiere", detail: "Sotto questa soglia l'atto non produce l'effetto risolutivo previsto dall'art. 1454 c.c." },
      { when: "Alla scadenza", label: "Risoluzione di diritto", detail: "Il contratto si intende risolto se la diffida conteneva l'avvertimento espresso." },
      { when: "Anno d'imposta", label: "Finestra per la detrazione diretta", detail: "La detrazione segue l'anno in cui la spesa è stata effettivamente sostenuta e pagata." },
      { when: "10 anni", label: "Prescrizione ordinaria dei diritti contrattuali", detail: "Art. 2946 c.c., ma agire tardi riduce le possibilità concrete di recupero." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "L'impresa dice che non può più cedere il credito: è una scusa valida?", a: "Va verificata sulle date. Se il contratto e la pratica edilizia rientravano tra le ipotesi fatte salve dalla disciplina transitoria del D.L. 11/2023, o se l'opzione non è stata trasmessa per inerzia dell'impresa quando era ancora possibile, non si tratta di impossibilità sopravvenuta ma di inadempimento." },
      { q: "Posso rifiutarmi di pagare la fattura emessa senza sconto?", a: "Puoi contestarla per iscritto e sospendere il pagamento della parte corrispondente allo sconto promesso, richiamando l'eccezione di inadempimento. È però una scelta da calibrare sullo stato dei lavori: se il cantiere è quasi concluso, un rifiuto totale può esporti a contestazioni sull'importo realmente dovuto." },
      { q: "Ho versato un acconto e l'impresa non si è più fatta sentire: come lo recupero?", a: "Con una diffida che assegni un termine e, alla scadenza, con la comunicazione di risoluzione e la richiesta di restituzione fondata sugli artt. 1458 e 2033 c.c. Il conteggio va presentato in modo analitico, indicando data, importo e causale di ogni versamento, al netto delle prestazioni realmente ricevute." },
      { q: "Se lo sconto salta posso comunque portare la spesa in dichiarazione?", a: "Sì, se sei tu a sostenere effettivamente la spesa e a pagarla con le modalità richieste, e se i requisiti dell'agevolazione sono rispettati. L'aliquota applicabile è però quella prevista per l'anno di sostenimento, quindi il beneficio può risultare inferiore a quello promesso: la differenza è una voce di danno." },
      { q: "Devo agire contro la banca che doveva comprare il credito?", a: "No, se la cessione non si è mai perfezionata. Il tuo rapporto contrattuale è con l'impresa o con il general contractor che ha promesso lo sconto, ed è a loro che va chiesto conto. Il cessionario entra in scena solo se ha assunto obblighi diretti verso di te in un accordo firmato." },
      { q: "Conviene risolvere il contratto o tenerlo in piedi?", a: "Dipende da quanto è avanzato il cantiere. Con lavori appena iniziati la risoluzione libera e consente di rivolgersi ad altra impresa. Con lavori in gran parte eseguiti spesso è preferibile mantenere il contratto e chiedere la riduzione del corrispettivo, evitando i costi e i tempi di un subentro." },
      { q: "Serve il tecnico o basta l'avvocato?", a: "Servono entrambi, con ruoli distinti. Il tecnico quantifica lo stato di avanzamento e la documentazione dell'agevolazione, dati senza i quali qualunque richiesta resta generica. L'avvocato imposta la diffida, sceglie il rimedio e struttura la quantificazione del danno in modo che regga in un eventuale giudizio." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se lo sconto promesso non è stato applicato, il primo passo è capire se l'obbligazione era formulata come impegno pieno o come promessa condizionata, e se le date rendono credibile la difesa dell'impossibilità. Contattaci dalla pagina contatti con contratto, fatture e corrispondenza: analizziamo la clausola, ricostruiamo la cronologia e ti indichiamo quale rimedio ha senso nel tuo caso." },
    { type: "p", text: "Se invece hai già ricevuto una contestazione dall'Agenzia delle Entrate sulla detrazione, [la guida dedicata al recupero presso il beneficiario](/guide/superbonus-recupero-agenzia-privato) spiega perché l'atto arriva al proprietario e come impostare la difesa nei sessanta giorni." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
