import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "varianti-in-corso-opera",
  title: "Lavori extra ordinati a voce dal direttore lavori: si possono farsi pagare?",
  excerpt:
    "L'art. 1659 c.c. chiede l'autorizzazione scritta per le varianti, ma messaggi, giornale dei lavori e comportamento del committente possono provare l'ordine verbale. Come farsi pagare i lavori extra.",
  category: "Imprese",
  date: "Agosto 2026",
  readTime: "11 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "varianti in corso d'opera chi le paga",
    "lavori extra ordinati a voce dal direttore lavori",
    "variante non autorizzata per iscritto art 1659",
    "farsi pagare lavori non previsti in contratto",
    "prova ordine verbale variante appalto",
  ],
  intro:
    "L'art. 1659 c.c. richiede l'autorizzazione scritta del committente per le variazioni al progetto, ma la giurisprudenza ammette che la prova possa emergere da altri elementi: corrispondenza, annotazioni nel giornale dei lavori controfirmate, contabilità accettata, messaggi e comportamento concludente del committente che ha usato l'opera modificata.",
};

export const seo = {
  seoTitle: "Varianti in Corso d'Opera: Chi Paga i Lavori Extra",
  metaDescription:
    "Lavori extra ordinati a voce dal direttore lavori? L'art. 1659 c.c. chiede la prova scritta, ma messaggi, giornale dei lavori e collaudo possono bastare.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: le variazioni concordate al progetto richiedono un'autorizzazione provata per iscritto (art. 1659 c.c.), ma le varianti ordinate dal committente entro un sesto del prezzo vanno comunque compensate (art. 1661 c.c.). Il termine: la prova si costruisce in cantiere, il giorno stesso dell'ordine; l'azione di arricchimento si prescrive in dieci anni. L'azione: conferma scritta immediata e annotazione nel giornale dei lavori." },

    { type: "h2", text: "La regola dell'art. 1659 c.c.: perché ti si ritorce contro?", id: "regola-1659" },
    { type: "p", text: "L'art. 1659 c.c. stabilisce che l'appaltatore non può apportare variazioni alle modalità convenute dell'opera senza l'autorizzazione del committente, e che l'autorizzazione deve essere provata per iscritto. La norma nasce per proteggere il committente da lavori non richiesti; nella pratica di cantiere si ritorce contro l'impresa, perché le variazioni quasi mai partono dall'appaltatore: le chiede il direttore dei lavori, a voce, mentre i muri sono aperti e fermarsi costa più che proseguire." },
    { type: "p", text: "Il codice però non contiene una sola regola, ma tre, e confonderle è l'errore più comune. L'art. 1659 riguarda le variazioni proposte dall'appaltatore o concordate; l'art. 1660 c.c. le variazioni necessarie per eseguire l'opera a regola d'arte, il cui prezzo — in mancanza di accordo — è determinato dal giudice; l'art. 1661 c.c. le varianti ordinate dal committente, che vanno compensate anche se il prezzo era stato pattuito globalmente, purché non eccedano il sesto del prezzo complessivo. Quando l'ordine viene dal committente o da chi lo rappresenta, la cornice giusta è l'art. 1661, e la posizione dell'impresa è più forte di quanto la lettera dell'art. 1659 faccia credere." },
    { type: "p", text: "Resta il nodo del direttore dei lavori: il suo ordine vincola il committente solo se il DL aveva il potere di disporre varianti — cosa che l'incarico spesso non prevede — oppure se il committente ha ratificato, anche per comportamento concludente: ha assistito ai lavori, ha sottoscritto la contabilità, usa l'opera modificata. È qui che si gioca la maggior parte dei contenziosi sui lavori extra." },

    { type: "figure", slot: "varianti-in-corso-opera-1", alt: "Direttore dei lavori e capocantiere davanti a una traccia aperta nel muro", caption: "L'ordine dato a voce in cantiere è il punto in cui si perde il margine della commessa." },

    { type: "h2", text: "Quali prove accettano i giudici al posto dell'autorizzazione scritta?", id: "prove" },
    { type: "p", text: "La forma scritta dell'art. 1659 c.c. è richiesta ad probationem, non per la validità dell'accordo: non serve un contratto formale, basta un documento da cui l'autorizzazione risulti. La giurisprudenza ha progressivamente valorizzato gli scritti informali del cantiere reale: email, messaggi, annotazioni controfirmate, contabilità accettata. Il limite della forma ad probationem è un altro: restringe la prova per testimoni, che da sola difficilmente regge, mentre restano ammessi l'interrogatorio formale e la confessione del committente." },
    { type: "table", headers: ["Elemento di prova", "Che cosa dimostra", "Peso pratico"], rows: [
      ["Messaggio o email del committente o del DL (\"procedete pure\")", "L'ordine, la sua provenienza e la data", "Alto, se riferibile alla lavorazione specifica"],
      ["Annotazione nel giornale dei lavori controfirmata dal DL", "Esecuzione della variante e conoscenza da parte della direzione", "Alto: è prova scritta formata in cantiere"],
      ["SAL o contabilità con la voce extra accettata o pagata in acconto", "Riconoscimento del corrispettivo aggiuntivo", "Alto: comportamento incompatibile con il rifiuto"],
      ["Verbale di collaudo o consegna sottoscritto dal committente", "Accettazione dell'opera come modificata", "Medio-alto"],
      ["Uso prolungato dell'opera senza contestazioni", "Comportamento concludente del committente", "Medio: rafforza il quadro, da solo raramente basta"],
      ["Testimonianze di operai o fornitori", "Le circostanze di fatto del cantiere", "Limitato: la forma ad probationem restringe la prova per testi"],
    ] },
    { type: "p", text: "La lezione operativa è una: nessuno di questi elementi nasce in tribunale, nascono tutti in cantiere, nei giorni in cui la variante viene ordinata ed eseguita. Chi arriva dal legale con due messaggi, un'annotazione firmata e un collaudo sottoscritto discute di quanto incassare; chi arriva solo con la propria parola discute di quanto perdere." },

    { type: "h2", text: "Il giornale dei lavori: perché quasi nessuno lo usa?", id: "giornale-lavori" },
    { type: "p", text: "Negli appalti privati il giornale dei lavori non è obbligatorio, ed è per questo che quasi nessuna impresa lo tiene. È un errore di calcolo: si tratta dello strumento probatorio più economico che esista — un quaderno o un file condiviso — e di quello che i giudici leggono più volentieri, perché è contemporaneo ai fatti e non costruito a lite già nata." },
    { type: "p", text: "Perché valga, l'annotazione deve avere quattro caratteristiche: la data, la descrizione della lavorazione extra con chi l'ha ordinata, il richiamo alle foto scattate prima di coprire le opere, e la firma del direttore dei lavori — anche apposta a fine settimana su tutte le annotazioni del periodo. Un DL che firma il giornale con la variante annotata difficilmente potrà sostenere, due anni dopo, che quella lavorazione non è mai stata chiesta." },

    { type: "h2", text: "Quando funziona l'arricchimento senza causa?", id: "arricchimento" },
    { type: "p", text: "Se la prova dell'autorizzazione manca del tutto, resta l'azione generale di arricchimento dell'art. 2041 c.c.: chi si è arricchito senza giusta causa a danno di altri deve indennizzarlo nei limiti dell'arricchimento e della correlativa diminuzione patrimoniale. Nel nostro campo: il committente che si ritrova un impianto nuovo e funzionante ha ricevuto un vantaggio quantificabile, e quel vantaggio va indennizzato anche se l'ordine scritto non c'è." },
    { type: "p", text: "Due limiti vanno messi in conto prima di contarci. Il primo è la sussidiarietà dell'art. 2042 c.c.: l'azione è esperibile solo quando non ce n'è un'altra fondata sul contratto. Il secondo è la misura: l'indennizzo copre il minore tra l'arricchimento del committente e l'impoverimento dell'impresa — in pratica i costi sostenuti, non il prezzo pieno con l'utile. L'arricchimento è la rete di sicurezza, non la strategia: recupera qualcosa quando il fascicolo è vuoto, ma rende sempre meno di una variante documentata." },

    { type: "h2", text: "Il protocollo di cantiere in cinque righe che elimina il problema", id: "protocollo" },
    { type: "p", text: "Il contenzioso sulle varianti si vince prima che nasca, con un protocollo che costa cinque minuti a variante. Questi i passaggi, con i tempi che contano:" },
    { type: "ol", items: [
      "Il giorno stesso dell'ordine verbale: invia una PEC o un messaggio di conferma — \"come da sua richiesta odierna procediamo con [lavorazione], maggior costo stimato [importo] euro, salvo sua diversa indicazione\". Se il committente non smentisce, il silenzio diventa un elemento a tuo favore",
      "Entro 3 giorni: trasmetti un preventivo integrativo scritto, anche sintetico, con prezzo, tempi aggiuntivi e riserva di aggiornamento del cronoprogramma",
      "Ogni 7 giorni: annota le lavorazioni extra nel giornale dei lavori e fai apporre la firma al direttore dei lavori sulle annotazioni della settimana",
      "Prima di coprire le opere: scatta foto datate delle lavorazioni extra e richiamale nell'annotazione",
      "Nel primo SAL utile: inserisci la voce della variante in contabilità — un SAL pagato senza contestazioni sulla voce extra è una delle prove più solide che esistano",
    ] },

    { type: "figure", slot: "varianti-in-corso-opera-2", alt: "Giornale dei lavori aperto, con l'annotazione della lavorazione e la firma del DL", caption: "È la prova che i giudici accettano quando manca l'autorizzazione scritta." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Durante la ristrutturazione di un ufficio, il direttore dei lavori chiede a voce di rifare integralmente l'impianto elettrico \"visto che i muri sono già aperti\". L'impresa esegue: 14.600 euro di lavori non previsti in contratto. A fine cantiere il committente rifiuta il pagamento perché \"non c'era nessun ordine scritto\". Nel fascicolo però qualcosa c'è: due messaggi WhatsApp del DL con la foto della traccia e la frase \"procedete pure\", il giornale dei lavori con l'annotazione della lavorazione firmata dal DL a fine settimana, il verbale di collaudo dell'impianto sottoscritto anche dal committente, e l'impianto in funzione da otto mesi." },
    { type: "p", text: "Il percorso: diffida che ricostruisce la sequenza documentale e chiede il pagamento con gli interessi di mora del D.lgs. 231/2002, poi — in mancanza di riscontro — giudizio fondato sull'art. 1661 c.c. e sulla ratifica per comportamento concludente. Perché la posizione regge: un committente che ha assistito ai lavori, sottoscritto il collaudo dell'opera aggiuntiva e la usa da mesi difficilmente convince un giudice di non averla mai voluta. In subordine resta l'azione di arricchimento ex art. 2041 c.c., perché il vantaggio patrimoniale c'è ed è quantificabile." },
    { type: "p", text: "Il bivio: se in cantiere non fosse rimasto nulla — nessun messaggio, nessuna annotazione, nessun collaudo firmato — la posizione sarebbe molto più debole, l'arricchimento coprirebbe al più i costi vivi e la trattativa transattiva diventerebbe la strada realistica. La differenza tra i due scenari non la fa il giudice: la fanno i cinque minuti della conferma scritta, la sera stessa dell'ordine." },
    { type: "note", text: "L'errore da non fare: eseguire la variante contando sui buoni rapporti e rimandare la conferma scritta \"a quando c'è tempo\". La prova che non si forma il giorno dell'ordine, dopo, non si forma più. Lo scenario descritto è illustrativo: l'esito concreto dipende sempre dai documenti e dalle circostanze specifiche." },

    { type: "timeline", title: "Il protocollo che salva il margine", steps: [
      { when: "Giorno della richiesta", label: "Il DL ordina la variante a voce", detail: "Da solo non basta: l'art. 1659 c.c. richiede l'autorizzazione scritta." },
      { when: "La sera stessa", label: "PEC di conferma in due righe", detail: "«Come da sua richiesta odierna procediamo con X, maggior costo stimato Y»." },
      { when: "Fine settimana", label: "Annotazione sul giornale dei lavori", detail: "Da far controfirmare al direttore dei lavori." },
      { when: "A fine opera", label: "Collaudo sottoscritto anche sull'opera aggiuntiva", detail: "Il comportamento concludente del committente pesa in giudizio." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Serve per forza l'autorizzazione scritta del committente per le varianti?", a: "La forma scritta dell'art. 1659 c.c. è richiesta come prova, non per la validità dell'accordo. Bastano documenti informali da cui l'autorizzazione risulti: email, messaggi, annotazioni controfirmate, contabilità accettata. Per le varianti ordinate dal committente entro il sesto del prezzo, inoltre, il compenso è dovuto ai sensi dell'art. 1661 c.c." },
      { q: "Come provo un ordine dato a voce dal direttore dei lavori?", a: "Con gli scritti che nascono in cantiere: la conferma inviata il giorno stesso via PEC o messaggio, l'annotazione nel giornale dei lavori firmata dal DL, le foto datate, il SAL con la voce extra. Il comportamento del committente — collaudo sottoscritto, uso dell'opera — completa il quadro come ratifica per fatti concludenti." },
      { q: "L'ordine del direttore dei lavori obbliga il committente a pagare?", a: "Solo se il DL aveva il potere di disporre varianti in nome del committente, cosa che l'incarico spesso non prevede, oppure se il committente ha ratificato l'operato: ha assistito ai lavori, firmato la contabilità o il collaudo, utilizza l'opera modificata. Per questo la conferma scritta va indirizzata anche al committente, non solo al DL." },
      { q: "Se non ho nessuna prova dell'ordine posso chiedere l'arricchimento senza causa?", a: "Sì, ma con limiti precisi. L'azione dell'art. 2041 c.c. è sussidiaria (art. 2042 c.c.) e l'indennizzo copre il minore tra l'arricchimento del committente e il tuo impoverimento: in pratica i costi sostenuti, senza l'utile d'impresa. Si prescrive in dieci anni. È una rete di sicurezza, non un'alternativa alla variante documentata." },
      { q: "Che cosa scrivo nel giornale dei lavori perché abbia valore?", a: "Quattro elementi: la data, la descrizione della lavorazione extra con l'indicazione di chi l'ha ordinata, il richiamo alle foto scattate prima di coprire le opere e la firma del direttore dei lavori, anche apposta a fine settimana. Un'annotazione contemporanea ai fatti e controfirmata è tra le prove scritte più solide che l'impresa possa formare." },
      { q: "Entro quanto tempo devo agire per farmi pagare i lavori extra?", a: "Il credito da appalto si prescrive in dieci anni ex art. 2946 c.c., come l'azione di arricchimento. Ma il tempo utile vero è più breve: messaggi che si perdono, operai che cambiano impresa, memoria dei fatti che sbiadisce. La diffida con il conteggio degli interessi di mora conviene entro pochi mesi dal rifiuto di pagare." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai lavori extra non pagati, il primo passo è capire che cosa esiste nel fascicolo: messaggi, annotazioni, contabilità, collaudi. Contattaci dalla pagina contatti: valutiamo la prova disponibile e ti diciamo se la strada è l'art. 1661, la ratifica o l'arricchimento — e ti diamo il modulo di conferma variante da far firmare in cantiere, una pagina che vale il margine dell'intera commessa. Per il quadro completo leggi anche la guida all'iscrizione delle riserve e quella sulle clausole del contratto d'appalto che proteggono l'impresa: una clausola sulle varianti scritta bene elimina il problema alla radice." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
