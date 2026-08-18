import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "mediazione-obbligatoria-edilizia",
  title: "Mediazione obbligatoria nelle controversie edilizie: come funziona davvero",
  excerpt:
    "La mediazione è obbligatoria solo in alcune materie: condominio, diritti reali, locazione, contratto d'opera. Sull'appalto no. Quando serve, quanto costa e cosa rischi se non partecipi.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "15 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "mediazione obbligatoria appalto edilizia",
    "mediazione condominio lavori",
    "quando è obbligatoria la mediazione",
    "costi mediazione civile",
    "mancata partecipazione mediazione conseguenze",
    "D.lgs 28/2010",
  ],
  intro:
    "Nelle controversie edilizie la mediazione è condizione di procedibilità solo per le materie elencate dall'art. 5 del D.lgs. 28/2010: condominio, diritti reali, divisione, locazione, comodato e contratto d'opera. L'appalto non è nell'elenco. Se la materia rientra, senza mediazione la domanda giudiziale è improcedibile.",
};

export const seo = {
  seoTitle: "Mediazione Obbligatoria Edilizia: Quando Serve Davvero",
  metaDescription:
    "Mediazione obbligatoria nelle liti edilizie: quali materie la richiedono, quali no, costi reali, agevolazioni fiscali e conseguenze se non partecipi.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: la mediazione è condizione di procedibilità solo nelle materie elencate dall'art. 5 del D.lgs. 28/2010, tra cui condominio, diritti reali, locazione e contratto d'opera. Il termine: il procedimento dura al massimo tre mesi, prorogabili di altri tre con accordo scritto delle parti. L'azione: la domanda va depositata presso un organismo del luogo del giudice competente e interrompe la prescrizione." },

    { type: "h2", text: "Che cos'è la condizione di procedibilità e perché ti riguarda", id: "condizione-procedibilita" },
    { type: "p", text: "La mediazione civile e commerciale è disciplinata dal D.lgs. 4 marzo 2010 n. 28, profondamente riscritto dal D.lgs. 10 ottobre 2022 n. 149 — la cosiddetta riforma Cartabia — con effetto dal 30 giugno 2023. Nelle materie che la legge indica, la mediazione non è una possibilità: è un passaggio da compiere prima di poter andare davanti al giudice." },
    { type: "p", text: "Condizione di procedibilità significa che, se non la esperisci, la domanda giudiziale non viene esaminata nel merito. Il convenuto può eccepire l'improcedibilità e il giudice può rilevarla d'ufficio, non oltre la prima udienza. In quel caso il giudizio non si chiude: il giudice assegna un termine per avviare la mediazione, ma hai perso mesi e un'udienza." },
    { type: "p", text: "Un chiarimento importante dopo la riforma: la condizione si considera avverata quando il primo incontro si conclude senza accordo. Non sei tenuto a proseguire la mediazione contro la tua volontà, ma sei tenuto a comparire e a discutere effettivamente della possibilità di conciliare. La partecipazione formale e silenziosa è il comportamento che il giudice valuta con maggiore severità." },

    { type: "figure", slot: "mediazione-obbligatoria-edilizia-1", alt: "Tavolo di mediazione con due parti sedute ai lati, i rispettivi avvocati e il mediatore al centro", caption: "Il primo incontro non è un adempimento formale: è il momento in cui si misura se una definizione è possibile." },

    { type: "h2", text: "In quali controversie edilizie la mediazione è obbligatoria?", id: "materie" },
    { type: "p", text: "L'art. 5, comma 1, del D.lgs. 28/2010 contiene un elenco chiuso di materie. Non c'è una voce che si chiami edilizia: devi guardare alla natura giuridica della controversia, non al fatto che riguardi un cantiere. È il motivo per cui due liti nate dallo stesso lavoro possono seguire percorsi diversi." },
    { type: "p", text: "Le materie che intercettano più spesso il contenzioso edilizio sono quattro. Il condominio, che copre praticamente ogni lite su lavori alle parti comuni, riparto delle spese, impugnazione di delibere sui lavori, nomina e revoca dell'amministratore. I diritti reali, che comprendono servitù, distanze, luci e vedute, immissioni. La divisione e le successioni, quando l'immobile è in comunione. La locazione e il comodato, per gli interventi eseguiti sull'immobile locato." },
    { type: "p", text: "La riforma del 2022 ha aggiunto all'elenco anche i contratti d'opera. È una novità che pesa nel settore: se il tuo rapporto con l'artigiano che ha eseguito i lavori si qualifica come contratto d'opera ai sensi dell'art. 2222 c.c. — professionista che lavora prevalentemente con il proprio lavoro e senza organizzazione d'impresa — la mediazione è obbligatoria." },

    { type: "table", headers: ["Controversia edilizia", "Mediazione obbligatoria?", "Base normativa e note"], rows: [
      ["Lavori su parti comuni, riparto spese, impugnazione delibere", "Sì", "Materia condominio, art. 5 D.lgs. 28/2010"],
      ["Servitù, distanze, luci e vedute, immissioni dal cantiere", "Sì", "Materia diritti reali"],
      ["Opere eseguite sull'immobile locato, ripristini a fine locazione", "Sì", "Materia locazione e comodato"],
      ["Difetti dei lavori affidati a un artigiano senza organizzazione d'impresa", "Sì", "Materia contratto d'opera, aggiunta dalla riforma del 2022"],
      ["Difetti dei lavori affidati con contratto d'appalto a un'impresa", "No", "L'appalto non figura nell'elenco dell'art. 5"],
      ["Risarcimento dei danni da esecuzione difettosa fuori dalle materie elencate", "No", "L'elenco cita la responsabilità medica e la diffamazione, non il danno in generale"],
      ["Ricorso per decreto ingiuntivo", "No, fino alla pronuncia sulla provvisoria esecuzione", "Esclusione espressa dell'art. 5"],
      ["Accertamento tecnico preventivo ex art. 696-bis c.p.c.", "No", "Esclusione espressa dell'art. 5"],
    ] },

    { type: "h2", text: "Le controversie edilizie che restano fuori", id: "esclusioni" },
    { type: "p", text: "La prima sorpresa, per molti, è l'appalto. Se hai firmato un contratto d'appalto con un'impresa e contesti difetti, ritardi o extra non pattuiti, la mediazione non è condizione di procedibilità: puoi andare direttamente in giudizio. Vale lo stesso, all'inverso, per l'impresa che agisce per il pagamento del corrispettivo." },
    { type: "p", text: "La seconda riguarda il risarcimento del danno. L'art. 5 non contempla il risarcimento in generale: cita espressamente solo la responsabilità medica e sanitaria e la diffamazione a mezzo stampa. Un'azione risarcitoria per danni da esecuzione difettosa, se non ricade in una delle altre materie elencate, non richiede mediazione preventiva." },
    { type: "p", text: "Restano poi le esclusioni processuali. Il procedimento per ingiunzione ne è escluso fino alla pronuncia sulle istanze di concessione e sospensione della provvisoria esecuzione; il procedimento di consulenza tecnica preventiva ex art. 696-bis c.p.c. ne è escluso del tutto; sono esclusi i procedimenti possessori fino alla pronuncia sui provvedimenti e i procedimenti in camera di consiglio." },
    { type: "p", text: "Sull'opposizione a decreto ingiuntivo la riforma ha risolto un contrasto durato anni. L'art. 5-bis del D.lgs. 28/2010 stabilisce oggi che, quando la mediazione è condizione di procedibilità, l'onere di presentare la domanda grava sulla parte opposta, cioè sul creditore che ha ottenuto il decreto. È una regola da conoscere: se sei l'opponente e resti inerte confidando che tocchi a te, l'errore non sarà tuo." },

    { type: "h2", text: "Mediazione o accertamento tecnico preventivo: quale prima?", id: "atp" },
    { type: "p", text: "Nel contenzioso edilizio la domanda si pone quasi sempre, perché i due strumenti sembrano alternativi ma servono a cose diverse. La mediazione lavora sull'accordo tra le parti; l'accertamento tecnico preventivo ex art. 696-bis c.p.c. lavora sui fatti tecnici, producendo una perizia con valore processuale pieno." },
    { type: "p", text: "La differenza pratica è netta. Se le parti litigano su quanto vale il danno o su chi lo ha causato, la mediazione senza un dato tecnico condiviso si arena in poche ore: ciascuno resta sulle proprie stime. Se invece esiste già una perizia, la mediazione ha materia su cui lavorare e diventa molto più concreta." },
    { type: "p", text: "Va aggiunto che anche l'accertamento tecnico preventivo dell'art. 696-bis c.p.c. ha una funzione conciliativa propria: il consulente nominato dal giudice tenta la conciliazione tra le parti. Nelle controversie su difetti costruttivi, la sequenza che dà i risultati migliori è quasi sempre accertamento tecnico prima, trattativa poi — anche quando la mediazione formale non è dovuta." },

    { type: "h2", text: "Come si svolge: domanda, organismo, primo incontro, proposta", id: "svolgimento" },
    { type: "p", text: "Il procedimento inizia con il deposito della domanda presso un organismo di mediazione iscritto nel registro tenuto dal Ministero della giustizia. La competenza territoriale non è libera: l'organismo deve avere sede nel luogo del giudice territorialmente competente per la controversia. Depositare presso un organismo incompetente è un errore che può rendere inefficace tutto il percorso." },
    { type: "p", text: "L'organismo designa il mediatore e fissa il primo incontro. Le parti devono comparire personalmente, con l'assistenza dell'avvocato; è possibile delegare un rappresentante, purché a conoscenza dei fatti e munito dei poteri necessari per conciliare. La delega generica all'avvocato non basta e viene spesso valutata come mancata partecipazione." },
    { type: "p", text: "Il primo incontro non è più una semplice verifica di disponibilità: il mediatore illustra funzione e modalità del procedimento e le parti discutono effettivamente della possibilità di conciliare. Se emerge uno spazio, il procedimento prosegue con incontri successivi; se non emerge, il verbale chiude e la condizione di procedibilità si considera avverata." },
    { type: "p", text: "Il mediatore può formulare una proposta, su richiesta concorde delle parti o anche d'ufficio nei casi previsti. È un passaggio da valutare con attenzione, perché il rifiuto della proposta può avere conseguenze sulle spese del successivo giudizio se la sentenza corrisponderà interamente al contenuto della proposta rifiutata. Se si raggiunge l'accordo e il verbale è sottoscritto dagli avvocati, il documento è titolo esecutivo." },

    { type: "h2", text: "Quanto costa e quali agevolazioni fiscali esistono?", id: "costi" },
    { type: "p", text: "I costi si compongono di tre voci distinte, e confonderle porta a sopravvalutare la spesa. La prima è l'indennità dell'organismo, determinata per scaglioni di valore secondo il decreto ministeriale sulle indennità di mediazione, alla quale si aggiungono le spese di avvio. La seconda è il compenso del tuo avvocato. La terza, eventuale, è il costo del tecnico di parte." },
    { type: "p", text: "Il legislatore ha però costruito un sistema di incentivi fiscali significativo, contenuto negli artt. 17 e 20 del D.lgs. 28/2010. Tutti gli atti del procedimento sono esenti dall'imposta di bollo e da ogni spesa o diritto; il verbale di accordo è esente dall'imposta di registro entro il limite di valore fissato dalla legge. È inoltre previsto un credito d'imposta sulle indennità versate all'organismo e, nelle materie di condizione di procedibilità, un ulteriore credito d'imposta sul compenso dell'avvocato in caso di esito positivo, entrambi nei limiti massimi stabiliti dalla norma." },
    { type: "p", text: "Chi possiede i requisiti reddituali può inoltre accedere al patrocinio a spese dello Stato per la mediazione, secondo l'art. 15-bis del D.lgs. 28/2010. È una previsione poco conosciuta e vale la pena verificarla prima di rinunciare al procedimento per ragioni di costo." },

    { type: "table", headers: ["Voce", "Chi la sostiene", "Agevolazione prevista"], rows: [
      ["Spese di avvio del procedimento", "Ciascuna parte", "Esenzione da bollo e diritti su tutti gli atti (art. 17)"],
      ["Indennità di mediazione per scaglione di valore", "Ciascuna parte", "Credito d'imposta sulle indennità versate, nei limiti di legge (art. 20)"],
      ["Compenso dell'avvocato", "Ciascuna parte", "Credito d'imposta in caso di accordo nelle materie obbligatorie, nei limiti di legge"],
      ["Imposta di registro sul verbale di accordo", "Le parti", "Esente entro il limite di valore fissato dall'art. 17"],
      ["Contributo unificato del giudizio successivo", "Chi promuove la causa", "Credito d'imposta se il giudizio segue una mediazione non riuscita, nei limiti di legge"],
      ["Costi complessivi in caso di redditi bassi", "Lo Stato", "Patrocinio a spese dello Stato ex art. 15-bis, con i requisiti di legge"],
    ] },

    { type: "h2", text: "Che succede se non partecipi senza giustificato motivo", id: "mancata-partecipazione" },
    { type: "p", text: "È la parte del sistema che molti sottovalutano, ed è quella con le conseguenze più concrete. Le regole sono oggi contenute nell'art. 12-bis del D.lgs. 28/2010, introdotto dalla riforma, e agiscono su tre piani diversi." },
    { type: "p", text: "Il primo piano è probatorio: dalla mancata partecipazione senza giustificato motivo il giudice può desumere argomenti di prova nel successivo giudizio, ai sensi dell'art. 116, comma 2, c.p.c. Non è una prova piena, ma è un elemento che si somma agli altri e in una causa incerta può pesare." },
    { type: "p", text: "Il secondo piano è economico e automatico: il giudice condanna la parte assente al versamento all'entrata del bilancio dello Stato di una somma corrispondente al contributo unificato dovuto per il giudizio. È una sanzione che non dipende da chi vince la causa." },
    { type: "p", text: "Il terzo piano riguarda le spese. Il giudice può condannare la parte assente al pagamento delle spese del giudizio, e può escludere dalla ripetizione le spese sostenute dalla parte vincitrice che, senza giustificato motivo, non ha partecipato. Nella pratica: puoi vincere la causa e non recuperare i costi." },

    { type: "h2", text: "Come si arriva preparati al primo incontro", id: "preparazione" },
    { type: "p", text: "La mediazione edilizia riesce o fallisce in funzione di quanto è preparata. Arrivare con una posizione generica — voglio essere risarcito, i lavori sono fatti male — produce quasi sempre un verbale negativo. Arrivare con numeri, documenti e un margine di trattativa definito in anticipo cambia completamente la dinamica." },
    { type: "ol", items: [
      "Entro 15 giorni dalla decisione di procedere: raccogli contratto, preventivo, capitolato, fatture, comunicazioni scambiate e fotografie datate dei difetti",
      "Entro 30 giorni: fai redigere una relazione tecnica di parte con la quantificazione del danno e la stima del ripristino, voce per voce",
      "Prima del deposito: individua l'organismo competente per territorio, cioè quello nel luogo del giudice competente per la controversia",
      "Al deposito della domanda: verifica che la materia sia indicata correttamente, perché da essa dipende il valore e quindi l'indennità",
      "Almeno 7 giorni prima del primo incontro: definisci con il tuo avvocato la soglia minima accettabile e le modalità di pagamento sostenibili per la controparte",
      "Al primo incontro: comparire personalmente o con delegato informato e munito di poteri per conciliare, mai con delega generica",
      "Entro 3 mesi dal deposito: il procedimento deve concludersi, salvo proroga scritta di ulteriori 3 mesi concordata tra le parti",
    ] },
    { type: "p", text: "Un accorgimento che vale più di molte strategie: porta con te una proposta scritta già articolata, con importo, tempi e modalità. Chi arriva con un documento sposta la discussione dal principio al dettaglio, ed è nel dettaglio che gli accordi si chiudono." },

    { type: "figure", slot: "mediazione-obbligatoria-edilizia-2", alt: "Verbale di mediazione sul tavolo con la relazione tecnica di parte e le fotografie dei difetti", caption: "Chi arriva con una perizia e una proposta scritta trasforma il primo incontro in una trattativa vera." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un condominio di dodici unità delibera il rifacimento della facciata per 187.400 euro. A lavori conclusi, tre condomini contestano che il ponteggio ha danneggiato i parapetti dei balconi e che il colore non corrisponde a quello approvato in assemblea. L'amministratore trattiene 21.600 euro sul saldo dell'impresa. L'impresa minaccia il decreto ingiuntivo, i condomini minacciano l'impugnazione della delibera di approvazione dei lavori." },
    { type: "p", text: "Qui convivono due percorsi diversi. La lite tra condomini e condominio sulla delibera ricade nella materia condominio ed è soggetta a mediazione obbligatoria. La lite tra condominio e impresa nasce invece da un contratto d'appalto e non lo è: se l'impresa deposita il ricorso per decreto ingiuntivo, non deve passare dalla mediazione fino alla pronuncia sulla provvisoria esecuzione." },
    { type: "p", text: "Il bivio decisionale è questo. Prima strada: l'amministratore promuove una mediazione volontaria coinvolgendo impresa e condomini contestatori, portando una relazione tecnica che quantifica in 8.750 euro il ripristino dei parapetti e in 4.300 euro la differenza cromatica. Con un dato tecnico sul tavolo, la trattativa ha un oggetto misurabile. Seconda strada: si attende il decreto ingiuntivo dell'impresa e si difende in opposizione, dove per effetto dell'art. 5-bis del D.lgs. 28/2010 l'onere della mediazione, se dovuta, graverebbe sulla parte opposta." },
    { type: "p", text: "La variabile che pesa di più non è l'importo trattenuto: è la presenza o meno di una perizia condivisa prima dell'incontro. Senza, la mediazione si riduce a uno scambio di stime opposte e il verbale si chiude in un'ora. Con, si discute di una cifra e di un calendario." },
    { type: "note", text: "L'errore da non fare: presentarsi al primo incontro con la sola delega all'avvocato e senza poteri per conciliare. È un comportamento che può essere valutato come mancata partecipazione, con le conseguenze dell'art. 12-bis del D.lgs. 28/2010. Lo scenario descritto è illustrativo: l'esito dipende dalla qualificazione delle domande e dalle circostanze concrete." },

    { type: "timeline", title: "Le fasi e i tempi della mediazione", steps: [
      { when: "Giorno 0", label: "Deposito della domanda", detail: "Presso un organismo del luogo del giudice competente; interrompe la prescrizione." },
      { when: "Entro pochi giorni", label: "Designazione del mediatore", detail: "L'organismo nomina il mediatore e fissa la data del primo incontro." },
      { when: "Primo incontro", label: "Discussione effettiva sulla conciliazione", detail: "Comparizione personale con l'avvocato; senza accordo la condizione è avverata." },
      { when: "Entro 3 mesi", label: "Termine di durata del procedimento", detail: "Prorogabile di ulteriori 3 mesi con accordo scritto delle parti." },
      { when: "Alla chiusura", label: "Verbale di accordo o di mancato accordo", detail: "L'accordo sottoscritto dagli avvocati è titolo esecutivo." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "La mediazione è obbligatoria per una lite su un contratto d'appalto?", a: "No. L'appalto non figura nell'elenco delle materie dell'art. 5 del D.lgs. 28/2010, quindi la mediazione non è condizione di procedibilità. Diverso è il contratto d'opera, aggiunto all'elenco dalla riforma del 2022: se l'esecutore è un artigiano senza organizzazione d'impresa, la mediazione va esperita." },
      { q: "E per una controversia condominiale sui lavori?", a: "Sì. La materia condominio è espressamente elencata e copre le liti su lavori alle parti comuni, riparto delle spese e impugnazione delle delibere che approvano gli interventi. Senza aver esperito la mediazione, la domanda giudiziale è improcedibile e il giudice assegna un termine per avviarla." },
      { q: "Devo partecipare di persona o basta l'avvocato?", a: "Devi comparire personalmente, assistito dall'avvocato. È ammessa la delega a un rappresentante, ma deve trattarsi di persona a conoscenza dei fatti e munita dei poteri necessari per conciliare. Una delega generica al difensore è spesso valutata come mancata partecipazione, con le conseguenze dell'art. 12-bis." },
      { q: "Quanto dura la mediazione?", a: "Il procedimento ha durata non superiore a tre mesi dal deposito della domanda, prorogabile di ulteriori tre mesi con accordo scritto delle parti dopo la scadenza. Nella pratica, quando la condizione di procedibilità è l'unico obiettivo, il percorso si esaurisce spesso nel primo incontro." },
      { q: "La domanda di mediazione blocca la prescrizione?", a: "Sì. La comunicazione alle altre parti della domanda di mediazione produce sulla prescrizione gli effetti della domanda giudiziale e impedisce la decadenza per una sola volta. È un effetto rilevante quando i termini di denuncia dei vizi stanno per scadere." },
      { q: "Posso rifiutare la proposta del mediatore?", a: "Sì, ma con attenzione. Se la sentenza che definisce il giudizio corrisponde interamente al contenuto della proposta rifiutata, il giudice può addossare alla parte che l'ha rifiutata le spese del processo. La valutazione del rifiuto va fatta con il proprio avvocato, non d'istinto." },
      { q: "Se la controparte non si presenta, cosa ottengo?", a: "La condizione di procedibilità si considera comunque avverata e puoi procedere in giudizio. Nel processo, dalla mancata partecipazione senza giustificato motivo il giudice può desumere argomenti di prova, condanna la parte assente al versamento di una somma pari al contributo unificato e può regolare le spese a suo sfavore." },
      { q: "Conviene fare mediazione anche quando non è obbligatoria?", a: "Conviene quando esiste già un dato tecnico condiviso e le parti hanno un interesse comune a chiudere in tempi brevi, ad esempio per liberare un immobile da vendere. Senza una perizia sul tavolo, nelle liti su difetti costruttivi la mediazione volontaria tende invece a esaurirsi in uno scambio di stime opposte." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Prima di depositare qualunque domanda, la verifica da fare è una sola: la tua controversia rientra o no in una delle materie dell'art. 5 del D.lgs. 28/2010? Da questa risposta dipendono l'organismo da scegliere, i tempi e il rischio di improcedibilità. Contattaci dalla pagina contatti con il contratto e le comunicazioni scambiate: qualifichiamo la controversia e indichiamo se la mediazione è dovuta e come prepararla. Se stai valutando invece una causa per difetti, leggi anche [la guida sui tempi reali del giudizio civile](/guide/quanto-dura-causa-difetti)." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
