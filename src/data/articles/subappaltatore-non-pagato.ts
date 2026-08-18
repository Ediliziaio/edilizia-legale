import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "subappaltatore-non-pagato",
  title: "Subappaltatore non pagato: perché l'art. 1676 non ti serve e cosa funziona davvero",
  excerpt:
    "L'appaltatore non ti paga? L'azione diretta dell'art. 1676 c.c. spetta ai dipendenti, non alla tua impresa: la Cassazione lo dice da anni. Gli strumenti veri: surrogatoria, sequestro conservativo, pagamento diretto nel pubblico.",
  category: "Imprese",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "subappaltatore non pagato cosa fare",
    "azione diretta subappaltatore art 1676",
    "art 1676 codice civile chi può usarlo",
    "azione surrogatoria credito appaltatore",
    "pagamento diretto subappaltatore appalto pubblico",
    "artigiano non pagato dall'impresa principale",
  ],
  intro:
    "L'impresa subappaltatrice non può agire direttamente contro il committente: la Cassazione (sentenze n. 12048/2003 e n. 24368/2017) riserva l'azione diretta dell'art. 1676 c.c. ai soli lavoratori alle dipendenze dell'appaltatore. Il subappaltatore deve invece usare l'azione surrogatoria ex art. 2900 c.c. sul credito dell'appaltatore verso il committente, o — negli appalti pubblici — il pagamento diretto della stazione appaltante.",
};

export const seo = {
  seoTitle: "Subappaltatore Non Pagato: l'Art. 1676 Non Ti Serve",
  metaDescription:
    "L'azione diretta dell'art. 1676 c.c. spetta ai dipendenti, non alla ditta subappaltatrice (Cass. 12048/2003). Cosa funziona: surrogatoria e sequestro.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: il subappaltatore ha azione contrattuale solo verso l'appaltatore; verso il committente può agire in surrogatoria ex art. 2900 c.c. sul credito che l'appaltatore vanta e non riscuote. Il termine: il credito da subappalto si prescrive in 10 anni (art. 2946 c.c.), ma il credito dell'appaltatore verso il committente può esaurirsi in poche settimane con l'ultimo pagamento. L'azione: decreto ingiuntivo contro l'appaltatore, verifica delle somme ancora dovute dal committente, surrogatoria e sequestro conservativo su quel credito." },

    { type: "h2", text: "Il mito che gira sul web: l'art. 1676 non spetta alla tua impresa", id: "mito-1676" },
    { type: "p", text: "Cerca \"subappaltatore non pagato\" su un motore di ricerca e troverai decine di articoli che ripetono lo stesso consiglio: \"puoi chiedere i soldi direttamente al committente grazie all'art. 1676 del codice civile\". È il consiglio più diffuso in materia, ed è sbagliato. L'art. 1676 c.c. attribuisce l'azione diretta verso il committente a \"coloro che, alle dipendenze dell'appaltatore, hanno dato la loro attività per eseguire l'opera\": i lavoratori subordinati, non le imprese." },
    { type: "p", text: "La Corte di Cassazione lo ha chiarito in modo netto: con la sentenza n. 12048/2003 ha escluso che il subappaltatore, in quanto imprenditore autonomo, possa avvalersi dell'azione diretta dell'art. 1676 c.c., e con la sentenza n. 24368/2017 ha ribadito che la norma tutela i soli ausiliari legati all'appaltatore da un rapporto di lavoro dipendente. La ratio è chiara: è una tutela del lavoro subordinato, un'eccezione al principio per cui i contratti producono effetti solo tra le parti, e come tutte le eccezioni non si estende per analogia." },
    { type: "p", text: "Le conseguenze pratiche dell'errore non sono teoriche. L'impresa che scrive al committente invocando l'art. 1676 c.c. riceve una risposta di rigetto giuridicamente corretta, brucia settimane preziose mentre il committente liquida gli ultimi pagamenti all'appaltatore, e rivela le proprie mosse alla controparte. Nel frattempo il solo patrimonio aggredibile — il credito residuo dell'appaltatore — si esaurisce." },

    { type: "figure", slot: "subappaltatore-non-pagato-1", alt: "Struttura metallica montata in cantiere da un'impresa subappaltatrice", caption: "Il lavoro eseguito in subappalto si prova con i documenti di cantiere, non con la buona fede." },

    { type: "h2", text: "Chi può davvero usare l'art. 1676: i tuoi dipendenti, non la ditta", id: "chi-puo-usarlo" },
    { type: "p", text: "L'art. 1676 c.c. resta però una norma utile, se la si mette in mano a chi ne è titolare. I dipendenti dell'appaltatore inadempiente possono agire direttamente contro il committente per le retribuzioni non pagate, fino a concorrenza di quanto il committente deve ancora all'appaltatore. E per giurisprudenza consolidata la stessa azione spetta ai dipendenti del subappaltatore verso l'appaltatore principale, che rispetto al subappalto è in posizione di committente." },
    { type: "p", text: "A questa tutela civilistica si affianca la responsabilità solidale del committente imprenditore e dell'appaltatore per retribuzioni e contributi dei dipendenti impiegati nell'appalto, entro due anni dalla cessazione dei lavori (art. 29 D.lgs. 276/2003). Per l'impresa subappaltatrice questo ha un rilievo indiretto ma concreto: se i tuoi operai non ricevono lo stipendio perché l'appaltatore non ti paga, loro hanno strumenti verso la filiera che tu non hai. Ma il credito d'impresa — i tuoi 87.000 euro di lavori — segue un'altra strada." },

    { type: "table", headers: ["Strumento", "Chi può usarlo", "Contro chi", "Base normativa"], rows: [
      ["Azione diretta per le retribuzioni", "Solo i lavoratori dipendenti dell'appaltatore (o del subappaltatore verso l'appaltatore)", "Il committente, nei limiti di quanto deve all'appaltatore", "art. 1676 c.c. (Cass. 12048/2003 e 24368/2017)"],
      ["Decreto ingiuntivo", "L'impresa subappaltatrice", "L'appaltatore, debitore contrattuale", "artt. 633 e ss. c.p.c."],
      ["Azione surrogatoria", "L'impresa subappaltatrice", "Il committente, esercitando il credito che l'appaltatore trascura", "art. 2900 c.c."],
      ["Sequestro conservativo", "L'impresa subappaltatrice", "Sul credito dell'appaltatore verso il committente", "art. 671 c.p.c."],
      ["Pagamento diretto", "Il subappaltatore in appalti pubblici (micro/piccole imprese, inadempimento)", "Richiesta alla stazione appaltante", "art. 119 D.lgs. 36/2023"],
    ] },

    { type: "h2", text: "Qual è lo strumento vero nel privato? L'azione surrogatoria", id: "surrogatoria" },
    { type: "p", text: "Lo strumento corretto è l'azione surrogatoria dell'art. 2900 c.c.: il creditore può esercitare i diritti che il suo debitore trascura di far valere verso terzi, quando questa inerzia mette a rischio la soddisfazione del credito. Applicata al subappalto: se l'appaltatore, tuo debitore, non riscuote — o non ha ancora riscosso — quanto il committente gli deve, tu puoi sostituirti a lui e chiedere che il committente paghi, con effetti che vanno a vantaggio del patrimonio dell'appaltatore su cui poi ti soddisfi." },
    { type: "p", text: "I presupposti sono tre e vanno documentati: un credito certo verso l'appaltatore, meglio se già consacrato in un decreto ingiuntivo; l'inerzia dell'appaltatore nella riscossione del proprio credito; il pregiudizio, cioè l'insufficienza del restante patrimonio del debitore. Proprio perché la surrogatoria non crea una corsia preferenziale — il credito riscosso rientra nel patrimonio dell'appaltatore, a disposizione di tutti i suoi creditori — va quasi sempre abbinata a una misura che blocchi le somme: il sequestro conservativo." },
    { type: "p", text: "La differenza rispetto al falso rimedio è sostanziale: con l'art. 1676 c.c. chiederesti al committente un pagamento diretto a te, che non ti spetta; con la surrogatoria eserciti un diritto che esiste davvero, e con il sequestro impedisci che il denaro transiti dall'appaltatore ai suoi altri creditori prima che tu arrivi." },

    { type: "h2", text: "Come scopri se il committente deve ancora soldi all'appaltatore?", id: "come-scoprire" },
    { type: "p", text: "Tutta la strategia dipende da una domanda di fatto: esiste ancora un credito dell'appaltatore verso il committente? Le fonti per rispondere sono più numerose di quanto sembri. Il tuo stesso contratto e la contabilità di cantiere dicono a che punto è l'opera e quali SAL sono maturati; il direttore dei lavori e gli altri subappaltatori sanno se il saldo è stato liquidato; nei lavori condominiali i verbali d'assemblea riportano lo stato dei pagamenti. Quasi sempre, a fine commessa, restano non liquidati un SAL finale e la ritenuta a garanzia, tipicamente il 5-10% trattenuto fino al collaudo." },
    { type: "p", text: "Se le informazioni informali non bastano, gli strumenti formali arrivano con il titolo: ottenuto il decreto ingiuntivo contro l'appaltatore, puoi notificare al committente un pignoramento presso terzi ex art. 543 c.p.c., che lo obbliga a dichiarare per iscritto quanto deve ancora all'appaltatore. La dichiarazione del terzo è spesso il momento della verità dell'intera vicenda: da lì sai esattamente su quale importo puoi contare." },

    { type: "h2", text: "Il sequestro conservativo per congelare quel credito", id: "sequestro" },
    { type: "p", text: "Il tempo è la variabile decisiva: il credito dell'appaltatore verso il committente si estingue con il pagamento, e un bonifico parte in un giorno. Il sequestro conservativo ex art. 671 c.p.c. serve a fermare l'orologio: il giudice, su ricorso, autorizza il sequestro dei beni o dei crediti del debitore quando c'è il fumus boni iuris — la verosimiglianza del tuo credito, che fatture e SAL firmati dimostrano — e il periculum in mora, il rischio concreto di perdere la garanzia patrimoniale." },
    { type: "p", text: "Nel caso del subappaltatore il periculum è spesso già scritto nei fatti: protesti dell'appaltatore, decreti ingiuntivi di altri fornitori, cantieri fermi, dipendenti in agitazione. Il sequestro notificato al committente come terzo gli impedisce di pagare validamente l'appaltatore per le somme sequestrate, e con la conversione in pignoramento dopo la conferma del credito quelle somme diventano la fonte concreta del recupero. Ricorso e concessione, nei casi urgenti, possono chiudersi in poche settimane." },

    { type: "h2", text: "Negli appalti pubblici: il pagamento diretto della stazione appaltante", id: "appalti-pubblici" },
    { type: "p", text: "Se il committente è una pubblica amministrazione, il quadro cambia in meglio. Il Codice dei contratti pubblici (art. 119 D.lgs. 36/2023) prevede il pagamento diretto del subappaltatore da parte della stazione appaltante in casi determinati: quando il subappaltatore è una microimpresa o piccola impresa, in caso di inadempimento dell'appaltatore, o su richiesta ove la natura del contratto lo consenta. Il contratto d'appalto e il bando indicano se e come l'ipotesi opera nella tua commessa." },
    { type: "p", text: "La richiesta va formalizzata subito, via PEC alla stazione appaltante e al RUP, documentando il subappalto autorizzato, le lavorazioni eseguite e l'inadempimento dell'appaltatore. Il tempismo conta più della perfezione formale: il pagamento diretto funziona finché la stazione appaltante non ha liquidato il saldo all'appaltatore. Ricorda inoltre che negli appalti pubblici l'appaltatore ha l'obbligo di trasmettere le fatture quietanzate dei subappaltatori: la mancata quietanza è essa stessa un segnale che la stazione appaltante deve gestire sospendendo i pagamenti." },

    { type: "h2", text: "Cosa scrivere nel contratto di subappalto per non trovarti qui", id: "contratto" },
    { type: "p", text: "La tutela migliore si costruisce alla firma, quando la forza negoziale è massima. Tre clausole cambiano la posizione del subappaltatore: l'obbligo dell'appaltatore di comunicare gli incassi ricevuti dal committente per le lavorazioni subappaltate, entro 5 giorni da ciascun pagamento; il consenso preventivo alla cessione del credito, che ti permette di farti cedere direttamente il credito verso il committente al primo ritardo; la clausola di pagamento entro un termine fisso dall'incasso del SAL corrispondente, con esclusione espressa di ogni condizionamento del tipo \"ti pago se e quando mi pagano\"." },
    { type: "p", text: "Vale la pena ricordare che le clausole che subordinano in modo assoluto il pagamento del subappaltatore all'incasso dall'appaltatore si scontrano con la disciplina dei ritardi di pagamento nelle transazioni commerciali (D.lgs. 231/2002), che sanziona con la nullità le pattuizioni gravemente inique per il creditore. Metterlo per iscritto costa zero in fase di firma e vale decine di migliaia di euro dopo." },

    { type: "h2", text: "I passi da fare, nell'ordine giusto", id: "passi" },
    { type: "ol", items: [
      "Entro 7 giorni dal mancato pagamento: diffida via PEC all'appaltatore con conteggio del credito e degli interessi di mora ex D.lgs. 231/2002 e termine di 15 giorni",
      "In parallelo, raccogliere le informazioni sul rapporto principale: stato dei SAL tra appaltatore e committente, ritenuta a garanzia, data prevista del saldo",
      "Alla scadenza della diffida, depositare ricorso per decreto ingiuntivo contro l'appaltatore con istanza di provvisoria esecutorietà ex art. 642 c.p.c.",
      "Se emergono segnali di insolvenza, depositare ricorso per sequestro conservativo ex art. 671 c.p.c. sul credito dell'appaltatore verso il committente, anche prima o insieme al decreto",
      "Con il titolo in mano, notificare il pignoramento presso terzi ex art. 543 c.p.c.: il committente deve dichiarare quanto deve ancora all'appaltatore",
      "Se il committente è una stazione appaltante, formalizzare subito la richiesta di pagamento diretto ex art. 119 D.lgs. 36/2023 al RUP, prima della liquidazione del saldo",
      "Se l'appaltatore entra in liquidazione giudiziale, insinuarsi al passivo nel termine fissato dal giudice, documentando il credito con contratto, SAL e fatture",
    ] },

    { type: "figure", slot: "subappaltatore-non-pagato-2", alt: "Contratto di subappalto aperto sulla clausola dei pagamenti", caption: "Due righe scritte alla firma valgono decine di migliaia di euro quando l'appaltatore smette di pagare." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un'impresa di carpenteria metallica esegue in subappalto le strutture di un capannone per 87.000 euro. L'appaltatore generale incassa regolarmente dal committente ma non gira nulla al subappaltatore, e mostra segnali di difficoltà: protesti, fornitori in agitazione. Il riflesso condizionato — scrivere al committente invocando l'art. 1676 c.c. — qui sarebbe l'errore più costoso: il committente risponderebbe, correttamente, che quella norma riguarda i lavoratori dipendenti dell'appaltatore e non le imprese subappaltatrici. Si perderebbero due mesi scoprendo il fianco." },
    { type: "p", text: "La strategia scelta corre su tre binari paralleli. Primo: decreto ingiuntivo contro l'appaltatore, che è e resta il debitore contrattuale. Secondo: verifica delle somme che il committente deve ancora all'appaltatore — emergono un SAL finale e una ritenuta a garanzia non svincolata, per circa 34.000 euro. Terzo: su quel credito si agisce con l'azione surrogatoria ex art. 2900 c.c., accompagnata da un ricorso per sequestro conservativo che impedisce all'appaltatore di incassare e disperdere le somme. Il periculum è documentato dai protesti già levati." },
    { type: "p", text: "Il bivio pubblico/privato: se il committente fosse una stazione appaltante, il percorso sarebbe più semplice — richiesta formale di pagamento diretto ex art. 119 D.lgs. 36/2023, protocollata prima della liquidazione del saldo. E la lezione contrattuale resta per il prossimo cantiere: obbligo di comunicazione degli incassi e consenso preventivo alla cessione del credito scritti nel contratto di subappalto avrebbero anticipato di mesi ogni mossa." },
    { type: "note", text: "L'errore da non fare: aspettare \"ancora un SAL\" sperando che l'appaltatore si rimetta in pari, mentre il committente liquida gli ultimi pagamenti. Il credito verso l'appaltatore sopravvive, ma l'unico patrimonio facilmente aggredibile — il credito residuo verso il committente — si esaurisce in poche settimane. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende sempre dai documenti e dalle circostanze specifiche." },

    { type: "timeline", title: "I tre binari da attivare in parallelo", steps: [
      { when: "Subito", label: "Decreto ingiuntivo contro l'appaltatore", detail: "È lui il debitore contrattuale: l'azione principale parte da qui." },
      { when: "In parallelo", label: "Verifica del credito verso il committente", detail: "SAL finali e ritenute non ancora svincolate: è lì che si aggredisce." },
      { when: "Prima che incassi", label: "Sequestro conservativo ex art. 671 c.p.c.", detail: "Congela il credito dell'appaltatore prima che venga riscosso e disperso." },
      { when: "Se l'appalto è pubblico", label: "Richiesta di pagamento diretto", detail: "Da formalizzare alla stazione appaltante prima che liquidi il saldo." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso chiedere i soldi direttamente al committente con l'art. 1676 c.c.?", a: "No. La Cassazione (sentenze n. 12048/2003 e n. 24368/2017) riserva l'azione diretta dell'art. 1676 c.c. ai lavoratori dipendenti dell'appaltatore. L'impresa subappaltatrice, in quanto imprenditore autonomo, non può usarla: verso il committente deve agire in surrogatoria ex art. 2900 c.c. sul credito dell'appaltatore." },
      { q: "I miei operai possono agire contro il committente?", a: "Sì. I dipendenti possono usare l'azione diretta dell'art. 1676 c.c. per le retribuzioni non pagate, fino a concorrenza di quanto il committente deve all'appaltatore, e beneficiano della responsabilità solidale per retribuzioni e contributi entro due anni dalla fine dei lavori (art. 29 D.lgs. 276/2003)." },
      { q: "Cos'è l'azione surrogatoria e quando posso usarla?", a: "È lo strumento dell'art. 2900 c.c.: ti sostituisci al tuo debitore inerte nell'esercizio dei suoi diritti verso terzi. Serve un credito certo verso l'appaltatore, la sua inerzia nel riscuotere dal committente e il rischio che il suo patrimonio non basti. Va abbinata al sequestro conservativo per bloccare le somme." },
      { q: "Come faccio a sapere se il committente deve ancora soldi all'appaltatore?", a: "Prima in via informale: direttore dei lavori, altri subappaltatori, verbali condominiali, stato dei SAL. Poi in via formale: con il decreto ingiuntivo puoi notificare un pignoramento presso terzi ex art. 543 c.p.c., e il committente è obbligato a dichiarare per iscritto quanto deve ancora all'appaltatore." },
      { q: "Cosa cambia se l'appalto è pubblico?", a: "Cambia molto: l'art. 119 D.lgs. 36/2023 prevede il pagamento diretto del subappaltatore da parte della stazione appaltante in casi determinati, tra cui l'inadempimento dell'appaltatore e i subappalti a micro e piccole imprese. La richiesta va formalizzata al RUP prima che venga liquidato il saldo all'appaltatore." },
      { q: "E se l'appaltatore nel frattempo fallisce?", a: "Con l'apertura della liquidazione giudiziale le azioni individuali si fermano e devi insinuarti al passivo nel termine fissato dal giudice, documentando il credito con contratto, SAL e fatture. Un sequestro già convertito in pignoramento o somme già incassate prima dell'apertura fanno la differenza sull'esito." },
      { q: "La clausola \"ti pago quando mi paga il committente\" è valida?", a: "Le clausole che subordinano in modo assoluto e senza limiti di tempo il pagamento del subappaltatore all'incasso dell'appaltatore si scontrano con il D.lgs. 231/2002, che sanziona con la nullità gli accordi gravemente iniqui sui termini di pagamento. Vanno contestate, non subite: la valutazione dipende dal testo esatto della clausola." },
      { q: "Quanto tempo ho per agire contro l'appaltatore?", a: "Il credito da subappalto si prescrive in 10 anni (art. 2946 c.c.), quindi sul piano formale il tempo non manca. Sul piano pratico sì: il credito dell'appaltatore verso il committente, che è la tua vera garanzia, si esaurisce con gli ultimi pagamenti. Le prime settimane valgono più dei dieci anni successivi." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se l'appaltatore non paga, la prima cosa da capire è se il committente gli deve ancora qualcosa: è su quel credito che si costruisce il recupero, ed è un credito che si esaurisce in fretta. Contattaci dalla pagina contatti con contratto di subappalto, SAL e fatture: verifichiamo la situazione del rapporto principale e ti diciamo se la strada è la surrogatoria con sequestro, il pagamento diretto pubblico o il solo decreto ingiuntivo. Leggi anche [la guida al recupero crediti nell'edilizia](/guide/recupero-crediti-edilizia) e, prima della prossima firma, le clausole da inserire nel contratto di subappalto." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
