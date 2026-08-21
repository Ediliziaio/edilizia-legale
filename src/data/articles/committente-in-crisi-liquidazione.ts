import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "committente-in-crisi-liquidazione",
  title:
    "Il committente è in concordato o liquidazione giudiziale: come l'impresa salva il salvabile",
  excerpt:
    "Cantiere in corso, SAL maturati e un committente che deposita i libri in tribunale. Cosa succede al contratto d'appalto, come e quando insinuarsi al passivo, quali crediti hanno privilegio e perché i materiali in cantiere vanno rivendicati subito.",
  category: "Imprese",
  date: "Agosto 2026",
  readTime: "16 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "committente fallito lavori in corso cosa fare",
    "insinuazione al passivo impresa edile",
    "privilegio artigiano 2751 bis crediti",
    "appalto liquidazione giudiziale scioglimento",
    "committente in concordato preventivo pagamenti",
    "rivendica materiali cantiere fallimento",
  ],
  intro:
    "Quando il committente entra in liquidazione giudiziale, il contratto d'appalto si scioglie salvo che il curatore dichiari di subentrare; i crediti maturati prima dell'apertura si fanno valere solo con l'insinuazione al passivo, e le azioni esecutive individuali si fermano. La differenza tra recuperare una parte seria del credito e perdere quasi tutto sta in quattro mosse rapide: fotografare il cantiere e la contabilità, rivendicare i materiali propri, verificare il privilegio ex art. 2751-bis c.c. e rispettare i termini della domanda di ammissione.",
};

export const seo = {
  seoTitle: "Committente in Liquidazione: la Guida per l'Impresa",
  metaDescription:
    "Il committente è fallito o in concordato con il cantiere aperto? Sorte del contratto, insinuazione al passivo, privilegi e rivendica dei materiali.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: nella liquidazione giudiziale il contratto d'appalto si scioglie se il curatore non dichiara di subentrare (art. 186 del Codice della crisi); i crediti anteriori si soddisfano in moneta concorsuale, con il privilegio dell'art. 2751-bis n. 5 c.c. per le imprese artigiane. Il termine: la domanda di insinuazione va trasmessa di regola entro trenta giorni prima dell'udienza di verifica dello stato passivo. L'azione: cristallizzare subito lo stato del cantiere e della contabilità, rivendicare i beni propri presenti in cantiere, insinuarsi nei termini con i documenti giusti." },

    { type: "h2", text: "Prima cosa: capire in quale procedura sei finito", id: "procedure" },
    { type: "p", text: "«Il committente è fallito» è una frase che nella pratica copre situazioni molto diverse, e la strategia cambia radicalmente a seconda della procedura. La liquidazione giudiziale — il vecchio fallimento — significa che l'impresa committente ha cessato di operare e un curatore ne amministra il patrimonio per liquidarlo. Il concordato preventivo significa che il committente prova a ristrutturarsi o a liquidarsi sotto controllo del tribunale, e può continuare a operare. La composizione negoziata è una trattativa assistita, prima e fuori dal concorso." },
    { type: "p", text: "La distinzione non è accademica: nel concordato in continuità il cantiere può proseguire e i crediti per prestazioni successive al deposito della domanda sono trattati in prededuzione — cioè pagati prima dei crediti concorsuali — mentre nella liquidazione giudiziale la prosecuzione è l'eccezione. Prima di qualunque mossa, quindi, serve una verifica formale: quale procedura, davanti a quale tribunale, con quali date. Sono dati pubblici, e da quelle date dipende tutto il resto." },
    { type: "table", headers: ["Procedura", "Il cantiere prosegue?", "I tuoi crediti anteriori", "Le prestazioni successive"], rows: [
      ["Liquidazione giudiziale", "Solo se il curatore subentra nel contratto", "Insinuazione al passivo", "Se il curatore subentra: prededuzione"],
      ["Concordato in continuità", "Di regola sì", "Falcidiati secondo il piano, con voto", "Pagate regolarmente: sono funzionali alla continuità"],
      ["Concordato liquidatorio", "Di regola no", "Falcidiati secondo il piano, con voto", "Solo se autorizzate"],
      ["Composizione negoziata", "Sì: l'impresa resta in bonis", "Esigibili, ma con cautela sulle azioni", "Pagabili: valuta garanzie per il prosieguo"],
    ] },

    { type: "h2", text: "La sorte del contratto d'appalto in corso", id: "contratto" },
    { type: "p", text: "Nella liquidazione giudiziale la regola dell'art. 186 del Codice della crisi è netta: il contratto d'appalto pendente si scioglie, salvo che il curatore — autorizzato dal comitato dei creditori — dichiari di voler subentrare. Nella pratica dei cantieri privati il subentro è raro: il curatore subentra quando completare l'opera aumenta il valore dell'attivo, non per far piacere all'appaltatore." },
    { type: "p", text: "Lo scioglimento produce un effetto che molte imprese scoprono tardi: il rapporto si chiude allo stato in cui si trova. Le opere eseguite e non ancora liquidate diventano un credito concorsuale da quantificare e documentare; il mancato utile sulle opere non eseguite, nella liquidazione giudiziale, non è di regola risarcibile. È il motivo per cui la contabilità di cantiere aggiornata — SAL, libretti delle misure, riserve iscritte — vale letteralmente denaro: ciò che non è misurato e documentato al giorno dell'apertura della procedura è ciò su cui il curatore eccepirà." },
    { type: "p", text: "Attenzione a un riflesso condizionato pericoloso: abbandonare il cantiere dall'oggi al domani. Fino alla comunicazione dello scioglimento, l'impresa deve gestire la pendenza con diligenza — messa in sicurezza, custodia, comunicazioni formali al curatore con richiesta di pronunciarsi sul subentro. Un abbandono disordinato genera contestazioni sulla custodia e sui danni che vanno a compensarsi proprio con il tuo credito." },

    { type: "figure", slot: "committente-in-crisi-liquidazione-1", alt: "Cantiere edile fermo con gru e materiali accatastati, cancello chiuso con lucchetto e cartello di cantiere sbiadito", caption: "Il cantiere al giorno dell'apertura della procedura: ciò che non è documentato a questa data è ciò che si perde." },

    { type: "h2", text: "L'insinuazione al passivo: come si fa e con quali documenti", id: "insinuazione" },
    { type: "p", text: "Il credito verso il committente in liquidazione giudiziale si fa valere con la domanda di ammissione al passivo, trasmessa via PEC al curatore di regola entro trenta giorni prima dell'udienza di verifica. La domanda tardiva è possibile ma costa: si partecipa solo ai riparti successivi, e oltre il termine finale serve dimostrare che il ritardo non è imputabile. I termini precisi stanno nella sentenza di apertura e nell'avviso che il curatore invia ai creditori: vanno letti il giorno in cui arrivano." },
    { type: "p", text: "La qualità della domanda decide l'ammissione. Per un appaltatore il fascicolo tipo contiene: contratto e capitolato, SAL emessi e stati di avanzamento non ancora liquidati con i relativi computi, fatture, estratto autentico delle scritture contabili, corrispondenza sulle contestazioni, documentazione fotografica dello stato dei lavori. Il curatore non è il committente: non ha memoria del cantiere e ammette ciò che i documenti dimostrano, eccependo tutto il resto." },
    { type: "p", text: "Capitolo privilegio, che è la voce che cambia le percentuali di recupero. L'art. 2751-bis n. 5 c.c. assiste con privilegio generale i crediti dell'impresa artigiana: se la tua impresa ha i requisiti — iscrizione all'albo delle imprese artigiane e struttura coerente con la qualifica — il credito da corrispettivo può essere ammesso in via privilegiata invece che chirografaria. Nelle procedure con attivo modesto, è la differenza tra un riparto percentuale a due cifre e le briciole. Il privilegio va chiesto e documentato nella domanda: nessuno lo riconosce d'ufficio." },

    { type: "h2", text: "Materiali, attrezzature e le mosse difensive collaterali", id: "materiali" },
    { type: "p", text: "In cantiere, al giorno dell'apertura, ci sono quasi sempre beni tuoi: attrezzature, ponteggi, materiali acquistati e non ancora posati. Non entrano nell'attivo della procedura, ma devi rivendicarli formalmente — con domanda di rivendica o restituzione nelle forme dell'accertamento del passivo — documentando la proprietà con fatture d'acquisto e DDT. Ogni settimana di ritardo aumenta il rischio che finiscano inventariati e la restituzione si complichi." },
    { type: "p", text: "Seconda mossa collaterale: i pagamenti ricevuti nei mesi precedenti. Il curatore esamina i pagamenti dell'ultimo periodo per le azioni revocatorie; i pagamenti di debiti liquidi ed esigibili eseguiti nei termini d'uso sono esenti, ma anticipi anomali o pagamenti con mezzi inconsueti possono essere aggrediti. Se hai ricevuto acconti rilevanti a ridosso della crisi, portali subito all'attenzione del legale: la difesa dalla revocatoria si prepara, non si improvvisa." },
    { type: "p", text: "Terza mossa, per i subappaltatori: la crisi del committente del tuo appaltatore — o dell'appaltatore stesso — apre il tema dei rimedi diretti, di cui parliamo nella guida sul [subappaltatore non pagato](/guide/subappaltatore-non-pagato). E se il tuo credito era già assistito da decreto ingiuntivo non opposto, verifica con il legale data e definitività: cambia il perimetro delle contestazioni possibili in sede di verifica." },

    { type: "figure", slot: "committente-in-crisi-liquidazione-2", alt: "Scrivania con fascicolo della domanda di insinuazione al passivo: SAL, fatture e computo metrico affiancati alla PEC pronta per l'invio", caption: "La domanda di insinuazione è un fascicolo tecnico: il curatore ammette ciò che i documenti dimostrano." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Stai realizzando le opere strutturali di una palazzina per un developer: contratto da 480.000 euro, tre SAL liquidati, il quarto da 68.000 euro emesso e non pagato, lavorazioni ulteriori per circa 25.000 euro eseguite dopo l'ultimo SAL. In cantiere hai un ponteggio, la gru a noleggio e materiali per 19.000 euro. Il tribunale apre la liquidazione giudiziale del committente." },
    { type: "p", text: "Nella prima settimana fai tre cose: un verbale di consistenza con fotografie e rilievi firmato dal tuo direttore tecnico, la PEC al curatore con cui chiedi la pronuncia sul subentro e comunichi la messa in sicurezza, e l'inventario documentato dei beni tuoi in cantiere. Il curatore dichiara di non subentrare: il contratto si scioglie." },
    { type: "p", text: "La domanda di insinuazione chiede 93.000 euro — il SAL emesso più le lavorazioni successive, computate sul libretto delle misure — in via privilegiata ex art. 2751-bis n. 5 c.c., allegando l'iscrizione all'albo artigiani, e in subordine in chirografo; in parallelo depositi la rivendica dei materiali. Il curatore eccepisce 11.000 euro di lavorazioni non documentate, ne ammette 82.000 in privilegio e restituisce i beni rivendicati. Al riparto, il privilegio si traduce in un recupero del 74 per cento; i chirografari della stessa procedura prenderanno il 6." },
    { type: "note", text: "L'errore da non fare: continuare a lavorare «per finire il lotto» dopo l'apertura della procedura, senza autorizzazione del curatore. Quelle lavorazioni rischiano di restare senza titolo e senza pagamento: la prosecuzione si fa solo con il subentro formalizzato o con autorizzazioni scritte. Lo scenario è illustrativo: percentuali ed esiti dipendono dall'attivo e dai documenti del caso concreto." },

    { type: "timeline", title: "I termini della procedura visti dall'appaltatore", steps: [
      { when: "Al primo segnale di crisi", label: "Contabilità di cantiere aggiornata e riserve iscritte", detail: "Tutto ciò che è misurato e verbalizzato prima dell'apertura è credito documentato." },
      { when: "Apertura della procedura", label: "Verbale di consistenza e messa in sicurezza del cantiere", detail: "Fotografie datate, rilievi, custodia: si chiude la scena senza distruggerla." },
      { when: "Subito dopo l'apertura", label: "PEC al curatore su subentro e beni di terzi", detail: "Chiedi la pronuncia sul contratto e annuncia la rivendica di attrezzature e materiali." },
      { when: "30 giorni prima dell'udienza di verifica", label: "Domanda di insinuazione al passivo", detail: "Con richiesta espressa del privilegio ex art. 2751-bis n. 5 c.c. se l'impresa è artigiana." },
      { when: "Dopo lo stato passivo", label: "Eventuale opposizione allo stato passivo", detail: "Se il credito è escluso o degradato, l'impugnazione ha termini brevi dal deposito." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso sospendere subito i lavori appena so della crisi del committente?", a: "Se la procedura è aperta, il quadro è governato dalle regole concorsuali e dalla pronuncia del curatore sul subentro. Se invece la crisi è solo annunciata — decreti ingiuntivi di altri, protesti — valgono i rimedi ordinari: il mutamento delle condizioni patrimoniali del committente consente di sospendere la prestazione se non vengono date garanzie, con le cautele descritte nella guida sul [SAL non pagato](/guide/sal-non-pagato)." },
      { q: "Il curatore mi chiede di finire i lavori: mi conviene?", a: "Se il curatore subentra formalmente, i corrispettivi successivi sono in prededuzione: si può accettare, con un'attenzione contrattuale nuova su tempi e pagamenti. Diffida invece delle richieste informali di «completare quel poco che manca» senza subentro autorizzato: è lavoro che rischia di restare senza titolo." },
      { q: "Ho un decreto ingiuntivo contro il committente: posso proseguire il pignoramento?", a: "No: dall'apertura della liquidazione giudiziale le azioni esecutive individuali sono vietate e quelle in corso non proseguono. Il credito, anche se munito di titolo, va fatto valere con l'insinuazione. Il titolo però non è inutile: rafforza la posizione in sede di verifica." },
      { q: "Cosa succede alla polizza fideiussoria che avevo rilasciato al committente?", a: "Le garanzie rilasciate — performance bond, anticipazione — restano un fronte aperto: il curatore può escuterle se ne ricorrono i presupposti contrattuali. Vanno riesaminate subito con il legale, anche per contestare escussioni pretestuose su un contratto ormai sciolto per scelta della procedura." },
      { q: "La mia impresa è una SRL: ho comunque il privilegio dell'artigiano?", a: "Il privilegio dell'art. 2751-bis n. 5 c.c. assiste i crediti dell'impresa artigiana: ciò che conta è la qualifica sostanziale e l'iscrizione all'albo, e anche le società possono esserne titolari se rispettano i requisiti dimensionali e organizzativi della legge quadro sull'artigianato. È una verifica da fare caso per caso, prima di redigere la domanda." },
      { q: "Il committente è in concordato e il piano mi offre il 30 per cento: posso oppormi?", a: "Puoi votare contro e, se la maggioranza approva comunque, contestare in sede di omologazione nei limiti che la legge consente. Realisticamente, la leva più efficace è a monte: classamento corretto del tuo credito, riconoscimento del privilegio, e trattativa sulla prosecuzione del cantiere se sei ancora operativo." },
      { q: "I materiali che avevo già portato in cantiere sono della procedura?", a: "No, se restano tuoi: i beni di terzi non entrano nell'attivo, ma la proprietà va dimostrata con fatture e documenti di trasporto, e la restituzione va chiesta con la domanda di rivendica nelle forme della verifica del passivo. I materiali già incorporati nell'opera, invece, non si rivendicano più: sono diventati parte dell'immobile e concorrono al credito da corrispettivo." },
      { q: "Quanto tempo passa prima di vedere dei soldi?", a: "I riparti seguono la liquidazione dell'attivo: per un riparto finale gli orizzonti sono di anni, ma i riparti parziali arrivano prima quando l'attivo è liquido e lo stato passivo è definito. Il privilegio incide più del tempo: determina se nel riparto ci sei con una percentuale significativa o simbolica." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se il tuo committente è entrato in procedura — o se i segnali dicono che sta per farlo — i giorni utili per cristallizzare cantiere e contabilità sono pochi. Contattaci dalla pagina contatti con contratto, SAL, situazione dei pagamenti e ogni comunicazione ricevuta dal tribunale o dal curatore: costruiamo la domanda di insinuazione, verifichiamo il privilegio e mettiamo in sicurezza beni e garanzie." },
    { type: "p", text: "Se invece il committente è semplicemente moroso ma in bonis, sei ancora nel perimetro del recupero ordinario: parti dalla guida al [recupero crediti nell'edilizia](/guide/recupero-crediti-edilizia), dove i tempi giocano a tuo favore invece che contro." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
