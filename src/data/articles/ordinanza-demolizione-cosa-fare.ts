import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "ordinanza-demolizione-cosa-fare",
  title: "Ordinanza di demolizione: cosa fare nei primi trenta giorni",
  excerpt:
    "Il Comune ha notificato l'ordine di demolire: novanta giorni per ottemperare, sessanta per il ricorso al TAR. Cosa verificare subito, quali vizi contano e quando la sanatoria è ancora percorribile.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "17 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "ordinanza demolizione cosa fare ricorso",
    "ricorso TAR ordinanza demolizione termini",
    "90 giorni demolizione acquisizione",
    "sanatoria abuso edilizio",
    "sospensiva TAR demolizione",
  ],
  intro:
    "Con l'ordinanza di demolizione hai novanta giorni per demolire e ripristinare, e sessanta giorni dalla notifica per impugnare l'atto davanti al TAR. I due termini corrono insieme: se lasci scadere il primo senza ottemperare né agire, il bene e l'area di sedime possono essere acquisiti gratuitamente al patrimonio del Comune ai sensi dell'art. 31 del D.P.R. 380/2001.",
};

export const seo = {
  seoTitle: "Ordinanza di Demolizione: Cosa Fare e Come Fare Ricorso",
  metaDescription:
    "Novanta giorni per demolire, sessanta per il ricorso al TAR. Vizi dell'ordinanza, sanatoria, tolleranze e sospensiva: cosa verificare subito.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: l'ordine di demolizione è un atto vincolato, ma resta impugnabile per i suoi vizi propri. Il termine: 90 giorni per ottemperare, 60 giorni dalla notifica per il ricorso al TAR. L'azione: verifica tecnica immediata dell'opera contestata, poi ricorso con istanza cautelare oppure istanza di accertamento di conformità, valutando quale delle due strade è realmente praticabile." },

    { type: "h2", text: "Che cosa ti sta dicendo davvero l'ordinanza", id: "cosa-dice" },
    { type: "p", text: "L'ordinanza di demolizione è il provvedimento con cui il Comune, accertata un'opera realizzata senza titolo o in difformità da esso, ti ordina di rimuoverla e di ripristinare lo stato dei luoghi a tue spese. Non è una multa e non è un invito a regolarizzare: è un ordine con un termine. La prima cosa da fare, prima ancora di chiamare qualcuno, è leggere quale norma viene richiamata, perché da quella dipende tutto il resto." },
    { type: "p", text: "Le ipotesi sono diverse e le conseguenze cambiano. L'art. 31 del D.P.R. 380/2001 riguarda gli interventi eseguiti in assenza di permesso di costruire, in totale difformità o con variazioni essenziali, ed è quello che porta all'acquisizione gratuita in caso di inottemperanza. L'art. 33 riguarda le ristrutturazioni abusive, l'art. 34 le parziali difformità, per le quali la legge prevede in certi casi la conversione in sanzione pecuniaria quando la demolizione pregiudicherebbe la parte conforme." },
    { type: "p", text: "La seconda verifica riguarda l'oggetto. L'ordinanza deve individuare con precisione l'opera da demolire: dimensioni, collocazione, dati catastali, riferimento al verbale di accertamento. Un provvedimento che parla genericamente di \"manufatti abusivi\" senza dire quali, dove e di che consistenza è un atto che pone un problema serio di individuazione, e quel problema è materia di ricorso." },
    { type: "p", text: "La terza riguarda te. L'ordine si rivolge al proprietario e al responsabile dell'abuso, che possono non coincidere. Se l'opera è stata realizzata da un precedente proprietario, da un conduttore o da un comproprietario, la posizione va chiarita subito, perché incide sulle sanzioni pecuniarie e sull'acquisizione, anche se non fa venire meno l'ordine in sé." },

    { type: "figure", slot: "ordinanza-demolizione-cosa-fare-1", alt: "Ordinanza comunale di demolizione con la relata di notifica in evidenza, accanto a un calendario", caption: "La data della relata di notifica è il punto zero: da lì decorrono sia i novanta giorni sia i sessanta." },

    { type: "h2", text: "Che cosa succede se non fai nulla?", id: "inottemperanza" },
    { type: "p", text: "Nell'ipotesi dell'art. 31 del D.P.R. 380/2001, decorsi novanta giorni dalla notifica senza che tu abbia demolito e ripristinato, il bene e l'area di sedime sono acquisiti di diritto e gratuitamente al patrimonio del Comune. L'area acquisita non si limita al sedime del manufatto: la norma la individua in una superficie che può arrivare fino a dieci volte la superficie utile abusivamente costruita, entro i limiti indicati dalla legge." },
    { type: "p", text: "L'acquisizione non avviene in silenzio. Il Comune adotta un accertamento formale dell'inottemperanza, che costituisce titolo per l'immissione in possesso e per la trascrizione nei registri immobiliari. È un passaggio che va tenuto d'occhio, perché ha una propria autonomia e apre a sua volta una finestra di impugnazione, distinta da quella dell'ordinanza originaria." },
    { type: "p", text: "Alla perdita del bene si aggiunge la sanzione pecuniaria prevista dall'art. 31, comma 4-bis, del D.P.R. 380/2001, compresa tra duemila e ventimila euro, applicata nella misura massima quando l'abuso ricade in aree soggette a vincolo. E resta ferma la possibilità che il Comune proceda alla demolizione d'ufficio, con addebito delle spese." },
    { type: "p", text: "C'è infine un profilo che non va confuso con quello amministrativo. Se esiste un procedimento penale per la violazione edilizia, il giudice penale può disporre a sua volta la demolizione, con un percorso e tempi propri. Le due strade coesistono e vanno gestite insieme: una definizione favorevole su un fronte non chiude automaticamente l'altro." },

    { type: "h2", text: "Due termini che corrono insieme", id: "due-termini" },
    { type: "p", text: "Il punto che genera più danni è la sovrapposizione. I novanta giorni per ottemperare e i sessanta giorni per impugnare decorrono entrambi dalla notifica, quindi il termine processuale scade prima di quello amministrativo. Chi passa i primi due mesi a cercare soluzioni tecniche e si rivolge a un legale al settantesimo giorno trova la strada del TAR già chiusa." },
    { type: "p", text: "Va anche chiarito un equivoco frequente: la presentazione di un'istanza di sanatoria non sospende automaticamente il termine per il ricorso. Ha invece effetti sul procedimento sanzionatorio, perché l'amministrazione deve pronunciarsi sull'istanza prima di dare corso all'esecuzione. Confondere i due piani porta a perdere il ricorso confidando in un'istanza che potrebbe essere respinta." },
    { type: "table", headers: ["Termine", "Quanto dura", "Da quando decorre"], rows: [
      ["Ricorso al TAR", "60 giorni", "Dalla notifica dell'ordinanza o dalla piena conoscenza dell'atto"],
      ["Ottemperanza all'ordine di demolizione", "90 giorni", "Dalla notifica dell'ordinanza (art. 31, comma 3, D.P.R. 380/2001)"],
      ["Ricorso straordinario al Presidente della Repubblica", "120 giorni", "Dalla notifica, in alternativa al ricorso al TAR"],
      ["Pronuncia sull'istanza di accertamento di conformità", "45 giorni", "Dalla presentazione dell'istanza al Comune"],
      ["Impugnazione dell'accertamento di inottemperanza", "60 giorni", "Dalla notifica di quel distinto provvedimento"],
    ] },
    { type: "p", text: "Un'ultima avvertenza sulle date. Il termine di sessanta giorni si calcola dalla notifica risultante dalla relata, non dalla data in cui l'atto è stato firmato dal dirigente né da quando lo hai letto. Se la notifica è avvenuta per compiuta giacenza, la decorrenza segue le regole di quella modalità: è una verifica da fare subito, perché a volte restituisce giorni che sembravano persi." },

    { type: "h2", text: "Quali vizi rendono impugnabile l'ordinanza?", id: "vizi" },
    { type: "p", text: "Va detto con chiarezza: l'ordine di demolizione è un atto vincolato, e la giurisprudenza amministrativa — a partire dalla nota pronuncia dell'Adunanza Plenaria del Consiglio di Stato n. 9 del 2017 — esclude che il Comune debba motivare l'interesse pubblico alla rimozione, anche quando l'abuso risale a molti anni prima. Contestare l'ordinanza sostenendo soltanto che è passato troppo tempo non è una linea difensiva efficace." },
    { type: "p", text: "I vizi che contano sono altri e hanno natura sostanziale. Il primo è l'erronea qualificazione dell'opera: un intervento trattato come nuova costruzione quando era manutenzione straordinaria o pertinenza, oppure una parziale difformità qualificata come totale. La qualificazione decide la norma applicabile e quindi la sanzione: è il terreno su cui si gioca la maggior parte dei ricorsi." },
    { type: "p", text: "Il secondo è il difetto di individuazione dell'opera, che rende l'ordine ineseguibile e indeterminato. Il terzo riguarda il destinatario: ordinanza rivolta a chi non è proprietario né responsabile, oppure notificata a un solo comproprietario quando il bene è in comunione. Il quarto attiene all'istruttoria, quando l'accertamento tecnico è carente, contraddittorio o basato su rilievi non verificabili." },
    { type: "p", text: "Esiste poi il tema della partecipazione al procedimento. Per gli atti vincolati la mancata comunicazione di avvio ha una rilevanza limitata, perché l'art. 21-octies, comma 2, della L. 241/1990 esclude l'annullamento quando il contenuto non avrebbe potuto essere diverso. Diventa però rilevante quando la partecipazione avrebbe portato elementi capaci di cambiare la qualificazione dell'opera: è un motivo da costruire con il tecnico, non da enunciare." },

    { type: "h2", text: "Sanatoria e doppia conformità", id: "sanatoria" },
    { type: "p", text: "L'accertamento di conformità disciplinato dall'art. 36 del D.P.R. 380/2001 consente di regolarizzare l'opera quando essa è conforme alla disciplina urbanistica ed edilizia sia al momento della realizzazione sia al momento della domanda. È la cosiddetta doppia conformità, ed è un requisito rigoroso: un'opera che oggi sarebbe assentibile ma che all'epoca violava lo strumento urbanistico non rientra in questa strada." },
    { type: "p", text: "Il quadro si è articolato con il D.L. 69/2024, convertito nella L. 105/2024, che ha introdotto l'art. 36-bis del D.P.R. 380/2001 per le parziali difformità e le variazioni essenziali, con un requisito di conformità costruito su due riferimenti temporali diversi per la disciplina urbanistica e per quella edilizia. È una differenza tecnica ma decisiva, perché apre la regolarizzazione a situazioni che con la doppia conformità piena restavano escluse." },
    { type: "p", text: "Sull'istanza il Comune si pronuncia entro quarantacinque giorni, e le conseguenze del silenzio non sono le stesse nelle due ipotesi: è un profilo da verificare caso per caso prima di impostare la strategia sul decorso del termine. Sui beni vincolati, inoltre, occorre il pronunciamento dell'autorità preposta alla tutela del vincolo, che segue tempi e presupposti propri." },
    { type: "p", text: "La regola pratica è una sola: l'istanza va presentata solo dopo una verifica tecnica seria di conformità, non come mossa dilatoria. Un'istanza priva di presupposti viene respinta, non ferma il procedimento sanzionatorio a lungo e nel frattempo il termine per il ricorso al TAR è scaduto. Le due strade vanno decise insieme, nella stessa settimana, non una dopo l'altra." },

    { type: "h2", text: "Le tolleranze costruttive", id: "tolleranze" },
    { type: "p", text: "Prima di ragionare su ricorso e sanatoria va verificato se lo scostamento contestato rientri nelle tolleranze costruttive dell'art. 34-bis del D.P.R. 380/2001. La norma, nella versione modificata dal D.L. 69/2024, gradua la percentuale di tolleranza in funzione della superficie dell'unità immobiliare: più l'unità è piccola, più ampia è la percentuale ammessa rispetto alle misure previste dal titolo." },
    { type: "p", text: "Se lo scostamento rientra nella tolleranza, non costituisce violazione edilizia e l'ordinanza perde il proprio presupposto. È una verifica strumentale, che richiede il confronto tra i grafici allegati al titolo e il rilievo dello stato di fatto: un lavoro da geometra o architetto, con misurazioni documentate, non una valutazione a occhio." },
    { type: "p", text: "L'art. 34-bis contempla anche le tolleranze esecutive, riferite a irregolarità geometriche, modifiche alle finiture e difformità di modesta entità, con condizioni e limiti propri. È una porta stretta ma va sempre controllata, perché una quota non trascurabile delle contestazioni riguarda scostamenti di pochi centimetri o modifiche interne prive di rilevanza urbanistica." },

    { type: "table", headers: ["Ipotesi", "Norma di riferimento", "Esito possibile"], rows: [
      ["Assenza di permesso, totale difformità, variazioni essenziali", "Art. 31 D.P.R. 380/2001", "Demolizione in 90 giorni, altrimenti acquisizione gratuita al Comune"],
      ["Ristrutturazione edilizia abusiva", "Art. 33 D.P.R. 380/2001", "Ripristino, con sanzione pecuniaria nei casi in cui la demolizione non è possibile"],
      ["Parziale difformità dal permesso", "Art. 34 D.P.R. 380/2001", "Demolizione, o sanzione pecuniaria se pregiudica la parte conforme"],
      ["Scostamento entro le percentuali di tolleranza", "Art. 34-bis D.P.R. 380/2001", "Nessuna violazione: viene meno il presupposto dell'ordinanza"],
      ["Opera conforme prima e ora", "Art. 36 D.P.R. 380/2001", "Accertamento di conformità con pagamento della somma dovuta"],
      ["Parziali difformità e variazioni essenziali regolarizzabili", "Art. 36-bis D.P.R. 380/2001", "Regolarizzazione con requisiti di conformità differenziati"],
    ] },

    { type: "h2", text: "Quando il TAR concede la sospensiva?", id: "sospensiva" },
    { type: "p", text: "L'istanza cautelare prevista dall'art. 55 del codice del processo amministrativo, approvato con D.lgs. 104/2010, si fonda su due presupposti che devono coesistere. Il primo è il fumus boni iuris, cioè l'apparente fondatezza dei motivi di ricorso: non basta contestare, servono motivi tecnicamente costruiti. Il secondo è il periculum in mora, cioè il pregiudizio grave e irreparabile che deriverebbe dall'esecuzione nelle more del giudizio." },
    { type: "p", text: "Nel caso della demolizione il periculum è per sua natura evidente, perché l'esecuzione produce un effetto irreversibile: una volta abbattuto, il manufatto non torna. Proprio per questo l'attenzione del giudice si concentra soprattutto sul primo presupposto, e la qualità tecnica del ricorso conta più della drammaticità della situazione personale." },
    { type: "p", text: "Quando l'esecuzione è imminente, l'art. 56 del codice del processo amministrativo consente di chiedere un provvedimento monocratico del presidente prima della camera di consiglio, nei casi di eccezionale gravità e urgenza. È uno strumento per situazioni reali — ruspe già programmate, comunicazione di avvio dell'esecuzione d'ufficio — e va documentato con gli atti che dimostrano l'urgenza." },

    { type: "h2", text: "I passi dei primi trenta giorni", id: "passi" },
    { type: "ol", items: [
      "Entro 3 giorni: verificare la data della relata di notifica e calcolare le due scadenze, 60 giorni per il ricorso e 90 per l'ottemperanza",
      "Entro 7 giorni: chiedere in Comune l'accesso agli atti del procedimento, compresi verbale di sopralluogo, rilievi e segnalazioni che lo hanno originato",
      "Entro 15 giorni: far eseguire da un tecnico un rilievo dello stato di fatto e il confronto con i titoli edilizi esistenti, per verificare qualificazione e tolleranze",
      "Entro 20 giorni: decidere se la strada è la sanatoria, il ricorso o entrambe, sulla base dell'esito della verifica tecnica e non delle intenzioni",
      "Entro 30 giorni: se si opta per l'accertamento di conformità, depositare l'istanza completa, tenendo presente che il Comune si pronuncia entro 45 giorni",
      "Entro 60 giorni: notificare il ricorso al TAR con istanza cautelare, e depositarlo nel termine previsto dal codice del processo amministrativo",
      "Entro 90 giorni: se nessuna strada è praticabile, valutare l'ottemperanza spontanea, che evita l'acquisizione e la sanzione pecuniaria",
    ] },
    { type: "p", text: "La sequenza serve a un obiettivo preciso: prendere la decisione entro il ventesimo giorno, con i dati tecnici in mano. Le settimane perse a cercare conferme informali sono le stesse che, alla fine, tolgono la possibilità di scegliere." },

    { type: "h2", text: "Ho comprato una casa con un abuso fatto da altri", id: "acquirente" },
    { type: "p", text: "È una situazione più diffusa di quanto si pensi, e va affrontata su due piani distinti. Sul piano amministrativo, l'ordine di demolizione ha carattere reale: colpisce l'opera e si rivolge al proprietario attuale, indipendentemente da chi l'ha realizzata. L'estraneità all'abuso non fa venire meno l'ordine, ma rileva sulle sanzioni pecuniarie e su alcuni profili dell'acquisizione." },
    { type: "p", text: "Sul piano civile, invece, l'estraneità pesa molto. Gli atti di trasferimento di immobili privi degli estremi del titolo edilizio sono colpiti da nullità ai sensi dell'art. 46 del D.P.R. 380/2001, e il venditore risponde comunque per gli oneri non apparenti e per le difformità taciute, secondo le regole della garanzia contrattuale. Vanno inoltre verificate le dichiarazioni urbanistiche rese in atto e l'operato del notaio e dell'eventuale tecnico incaricato." },
    { type: "p", text: "L'azione civile verso il venditore va valutata subito, in parallelo con quella amministrativa, perché ha termini propri e perché la documentazione utile — atto, dichiarazioni urbanistiche, relazione tecnica, annuncio di vendita — si recupera più facilmente adesso che tra due anni." },

    { type: "figure", slot: "ordinanza-demolizione-cosa-fare-2", alt: "Tecnico che misura una veranda chiusa confrontando il rilievo con i grafici allegati al permesso di costruire", caption: "La differenza tra abuso e tolleranza si vede nel confronto tra rilievo e grafici di progetto, non a occhio." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Una famiglia riceve un'ordinanza di demolizione relativa a una veranda chiusa realizzata sul terrazzo, per una superficie indicata dal Comune in 23,40 metri quadrati, con richiamo all'art. 31 del D.P.R. 380/2001. L'opera è stata realizzata dal precedente proprietario undici anni prima dell'acquisto e non compare nei grafici allegati al permesso di costruire originario. La notifica avviene il quattro del mese, per consegna diretta." },
    { type: "p", text: "L'accesso agli atti mostra che il procedimento nasce da un esposto e che il verbale di sopralluogo riporta una misurazione effettuata dall'esterno, senza accesso all'immobile. Il rilievo del tecnico incaricato dalla famiglia restituisce una superficie di 19,70 metri quadrati e, soprattutto, evidenzia che la struttura non è ancorata stabilmente e presenta caratteristiche costruttive diverse da quelle descritte nel verbale. È la configurazione tipica in cui la qualificazione dell'opera diventa il centro della difesa." },
    { type: "p", text: "Il bivio è netto e va sciolto entro il ventesimo giorno. La prima strada è il ricorso al TAR con istanza cautelare, contestando la qualificazione dell'intervento e il difetto di istruttoria del verbale; è la via che difende il manufatto ma richiede un impianto tecnico solido e tempi di giudizio non brevi. La seconda è l'istanza di accertamento di conformità, percorribile solo se la verifica urbanistica conferma la conformità richiesta dalla norma applicabile: se quella verifica dà esito negativo, l'istanza non va presentata, perché consuma tempo senza produrre effetti utili." },
    { type: "p", text: "Nel frattempo va aperto il fronte civile verso il venditore, recuperando l'atto di compravendita, le dichiarazioni urbanistiche rese e la documentazione della trattativa. Anche se l'ordine amministrativo resta, il costo della demolizione e la perdita di valore dell'immobile sono voci che possono essere fatte valere in quella sede." },
    { type: "note", text: "L'errore da non fare: presentare l'istanza di sanatoria \"per guadagnare tempo\" senza aver verificato la conformità, lasciando scadere i sessanta giorni per il ricorso. L'istanza non sospende il termine processuale e un rigetto lascia senza strumenti. Lo scenario descritto è illustrativo: l'esito dipende dai titoli edilizi, dalla disciplina urbanistica locale e dalla documentazione." },

    { type: "timeline", title: "I termini dell'ordinanza di demolizione", steps: [
      { when: "Giorno 0", label: "Notifica dell'ordinanza", detail: "Da questa data decorrono contemporaneamente i 60 giorni per il ricorso e i 90 per l'ottemperanza." },
      { when: "Entro 60 giorni", label: "Ricorso al TAR con istanza cautelare", detail: "Termine di decadenza: scaduto, l'atto diventa inoppugnabile in sede giurisdizionale amministrativa." },
      { when: "Entro 90 giorni", label: "Termine per demolire e ripristinare", detail: "Scaduto senza ottemperanza, scatta l'acquisizione prevista dall'art. 31 D.P.R. 380/2001." },
      { when: "45 giorni", label: "Pronuncia sull'accertamento di conformità", detail: "Termine entro cui il Comune si esprime sull'istanza presentata ai sensi degli artt. 36 o 36-bis." },
      { when: "Dopo i 90 giorni", label: "Accertamento di inottemperanza", detail: "Provvedimento autonomo, titolo per l'immissione in possesso e per la trascrizione: impugnabile a sua volta." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso fare ricorso al TAR dopo i sessanta giorni?", a: "No, il termine è di decadenza e decorre dalla notifica o dalla piena conoscenza dell'atto. Resta il ricorso straordinario al Presidente della Repubblica entro centoventi giorni, alternativo e non cumulabile, con caratteristiche proprie. Vanno inoltre verificati eventuali provvedimenti successivi, che aprono finestre di impugnazione autonome." },
      { q: "Se presento la sanatoria il Comune deve fermarsi?", a: "L'amministrazione deve pronunciarsi sull'istanza prima di dare corso all'esecuzione, ma questo non sospende il termine per impugnare l'ordinanza davanti al TAR. Sono due piani distinti: chi confida nella sanatoria e lascia scadere i sessanta giorni resta senza rimedio giurisdizionale se l'istanza viene respinta." },
      { q: "L'abuso è di trent'anni fa: il Comune può ancora ordinare la demolizione?", a: "Sì. La giurisprudenza amministrativa qualifica l'ordine di demolizione come atto vincolato che non richiede una motivazione ulteriore sull'interesse pubblico, neppure a distanza di molto tempo. Il decorso del tempo non sana l'abuso: la difesa va costruita sulla qualificazione dell'opera, sulle tolleranze o sulla conformità urbanistica." },
      { q: "Ho comprato la casa così: devo demolire io?", a: "L'ordine si rivolge al proprietario attuale perché ha natura reale e segue il bene. L'estraneità all'abuso rileva sulle sanzioni pecuniarie e su alcuni profili dell'acquisizione, e soprattutto apre l'azione civile verso il venditore per le difformità taciute e per le dichiarazioni urbanistiche rese nell'atto." },
      { q: "Che cosa perdo esattamente se non demolisco?", a: "Nell'ipotesi dell'art. 31 del D.P.R. 380/2001 il bene e l'area di sedime sono acquisiti gratuitamente al patrimonio del Comune, con un'area che può estendersi fino a dieci volte la superficie utile abusiva nei limiti di legge. Si aggiunge la sanzione pecuniaria del comma 4-bis, da duemila a ventimila euro." },
      { q: "Uno scostamento di pochi centimetri è comunque abuso?", a: "Non necessariamente. L'art. 34-bis del D.P.R. 380/2001 prevede tolleranze costruttive graduate in funzione della superficie dell'unità immobiliare e tolleranze esecutive per difformità di modesta entità. La verifica richiede il confronto documentato tra rilievo dello stato di fatto e grafici allegati al titolo edilizio." },
      { q: "Serve subito l'avvocato o prima il tecnico?", a: "Servono insieme, e nella stessa settimana. Il tecnico stabilisce che cosa è stato realizzato davvero e se rientra in tolleranza o in conformità; l'avvocato stabilisce quale strada è praticabile nei termini e prepara ricorso e istanza cautelare. La decisione va presa con entrambi gli elementi sul tavolo." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai ricevuto un'ordinanza di demolizione, la prima cosa da fissare è il calendario: data della notifica, scadenza dei sessanta giorni, scadenza dei novanta. La seconda è l'accesso agli atti, perché il verbale che ha originato il provvedimento dice molto più dell'ordinanza stessa. Contattaci dalla pagina contatti con l'atto e i titoli edilizi dell'immobile: verifichiamo la qualificazione dell'opera e ti diciamo quali strade sono ancora aperte." },
    { type: "p", text: "Se l'abuso è emerso in sede di compravendita o riguarda opere realizzate da chi ti ha venduto l'immobile, va valutata anche l'azione civile verso il venditore, che ha termini propri e va impostata in parallelo." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
