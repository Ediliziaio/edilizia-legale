import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "accertamento-superbonus-imprese",
  title: "Accertamento Superbonus all'impresa: come si costruisce la difesa",
  excerpt:
    "L'Agenzia delle Entrate contesta i crediti da bonus edilizi? Il primo nodo è la qualificazione — credito non spettante o inesistente — perché da lì dipendono termini, sanzioni e rischio penale. La guida completa alla difesa.",
  category: "Tributario",
  date: "Agosto 2026",
  readTime: "15 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "accertamento superbonus impresa edile",
    "agenzia entrate contesta crediti superbonus",
    "credito inesistente o non spettante differenza",
    "sequestro crediti d'imposta bonus edilizi",
    "ricorso accertamento bonus edilizi termini",
    "difendersi controlli superbonus impresa",
  ],
  intro:
    "Quando l'Agenzia delle Entrate contesta crediti da bonus edilizi, il primo nodo è la qualificazione: credito non spettante o inesistente. La differenza incide su termini di accertamento, misura delle sanzioni e possibile rilevanza penale, e va aggredita nel ricorso prima ancora del merito della contestazione.",
};

export const seo = {
  seoTitle: "Accertamento Superbonus Impresa: Come Difendersi",
  metaDescription:
    "L'Agenzia contesta i crediti Superbonus? Il primo nodo è la qualificazione: non spettante o inesistente. Da lì dipendono termini, sanzioni e penale.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: un credito relativo a lavori realmente eseguiti e documentati è di regola non spettante, non inesistente (art. 1, lett. g-quater e g-quinquies, D.lgs. 74/2000): cambiano sanzioni, termini e rischio penale. Il termine: 60 giorni dalla notifica dell'atto di recupero per il ricorso (art. 21 D.lgs. 546/1992). L'azione: ricorso con istanza di sospensione ex art. 47 D.lgs. 546/1992 e, se i crediti sono sequestrati, riesame o istanza di dissequestro." },

    { type: "h2", text: "Che cosa contesta davvero l'Agenzia alle imprese edili?", id: "cosa-contesta" },
    { type: "p", text: "Gli atti che colpiscono le imprese del Superbonus hanno quasi sempre la stessa forma: un atto di recupero dei crediti d'imposta ex art. 38-bis D.P.R. 600/1973, che contesta l'utilizzo in compensazione di crediti nati dallo sconto in fattura o acquistati tramite cessione (art. 121 D.L. 34/2020). Le contestazioni ricorrenti sono un numero limitato: vizi dell'asseverazione tecnica, incongruità dei prezzi rispetto ai massimali, difetti della documentazione fotografica o dei SAL, lavori dichiarati non conformi a quelli eseguiti, e — nei casi più gravi — cantieri mai esistiti." },
    { type: "p", text: "La prima cosa da capire, leggendo l'atto, non è quanto viene chiesto ma come viene qualificato il credito. L'Agenzia tende a qualificare come \"inesistente\" anche crediti nati da lavori realmente eseguiti, perché la qualificazione più grave allunga i termini di accertamento e aggrava le sanzioni. È esattamente il terreno su cui la difesa deve piantare la prima bandiera: prima della singola voce di computo, si discute l'inquadramento." },
    { type: "p", text: "Spesso l'atto arriva insieme ad altre due misure: il blocco del cassetto fiscale con sospensione delle compensazioni e, nei procedimenti penali paralleli, il sequestro preventivo dei crediti ex art. 321 c.p.p. Ognuna di queste misure ha un rimedio proprio e termini propri: trattarle come un unico problema è l'errore che paralizza l'impresa." },

    { type: "h2", text: "Credito inesistente o non spettante: qual è la differenza che cambia tutto?", id: "inesistente-non-spettante" },
    { type: "p", text: "Dopo anni di incertezza, le Sezioni Unite della Cassazione (sentenze n. 34419 e n. 34452 del 2023) e poi il legislatore (D.lgs. 87/2024, che ha introdotto le definizioni nell'art. 1, lett. g-quater e g-quinquies, D.lgs. 74/2000) hanno fissato il criterio. Il credito è inesistente quando manca il presupposto costitutivo: i lavori non sono stati eseguiti, o la documentazione è frutto di falsità. È non spettante quando il presupposto esiste ma il credito è stato fruito in violazione delle regole: vizi dell'asseverazione, spese oltre i massimali, requisiti tecnici non rispettati." },
    { type: "p", text: "La distinzione non è accademica: governa tre conseguenze concrete. La misura della sanzione, il termine entro cui l'Agenzia può notificare l'atto di recupero, e la cornice penale dell'eventuale contestazione di indebita compensazione. La tabella riassume il quadro dopo la riforma del sistema sanzionatorio (D.lgs. 87/2024, applicabile alle violazioni commesse dal 1° settembre 2024; per quelle anteriori restano le misure previgenti, più pesanti)." },
    { type: "table", headers: ["Profilo", "Credito non spettante", "Credito inesistente"], rows: [
      ["Definizione", "Il presupposto esiste, ma il credito è fruito in violazione di modalità o requisiti (art. 1, lett. g-quater, D.lgs. 74/2000)", "Manca il presupposto costitutivo: lavori non eseguiti o documentazione falsa (lett. g-quinquies)"],
      ["Sanzione amministrativa", "25% del credito utilizzato (art. 13 D.lgs. 471/1997; 30% per violazioni ante 1/9/2024)", "70% del credito utilizzato (dal 100% al 200% per violazioni ante 1/9/2024)"],
      ["Termine per l'atto di recupero", "31 dicembre del quinto anno successivo all'utilizzo in compensazione", "31 dicembre dell'ottavo anno successivo all'utilizzo (art. 38-bis D.P.R. 600/1973)"],
      ["Rilevanza penale (oltre 50.000 euro annui)", "Art. 10-quater, comma 1, D.lgs. 74/2000: reclusione da 6 mesi a 2 anni", "Art. 10-quater, comma 2: reclusione da 1 anno e 6 mesi a 6 anni"],
      ["Sequestro preventivo dei crediti", "Meno frequente, legato alla contestazione penale", "Tipico: accompagna quasi sempre la contestazione di inesistenza"],
    ] },
    { type: "p", text: "Ecco perché spostare la qualificazione da inesistente a non spettante è spesso la mossa più redditizia dell'intero contenzioso: dimezza e oltre la sanzione, può rendere l'atto tardivo se notificato dopo il quinto anno, e sposta l'eventuale profilo penale in una cornice molto più mite, dove il D.lgs. 87/2024 ha introdotto anche una causa di non punibilità per obiettiva incertezza normativa." },

    { type: "h2", text: "Quanti giorni hai e da quando decorrono?", id: "termini" },
    { type: "p", text: "Il termine che comanda tutto è uno: 60 giorni dalla notifica dell'atto di recupero per proporre ricorso alla Corte di giustizia tributaria di primo grado (art. 21 D.lgs. 546/1992). Non è un termine ordinatorio: l'atto non impugnato diventa definitivo, e con esso la qualificazione del credito, le sanzioni e l'iscrizione a ruolo. Chi aspetta la cartella di pagamento per reagire ha già perso ogni difesa nel merito, anche quando avrebbe avuto ragione." },
    { type: "p", text: "Prima dell'atto definitivo, nella maggior parte dei casi, deve arrivare lo schema di atto previsto dal contraddittorio preventivo obbligatorio (art. 6-bis L. 212/2000), con 60 giorni per presentare controdeduzioni. È una finestra preziosa e sottovalutata: è lì che si depositano per la prima volta i documenti sull'effettiva esecuzione dei lavori e si contesta la qualificazione, costringendo l'ufficio a motivare sul punto già nell'atto finale." },
    { type: "ol", items: [
      "Alla notifica dello schema di atto: 60 giorni per le controdeduzioni nel contraddittorio preventivo (art. 6-bis L. 212/2000) — è la prima sede dove contestare la qualificazione del credito",
      "Alla notifica dell'atto di recupero: segnare subito la scadenza dei 60 giorni per il ricorso (art. 21 D.lgs. 546/1992)",
      "Entro i primi 15-20 giorni: ricostruire il fascicolo documentale — asseverazioni, SAL, fatture, bonifici, foto, collaudi — e far qualificare il credito da un difensore tributarista",
      "Con il ricorso o subito dopo: istanza di sospensione della riscossione ex art. 47 D.lgs. 546/1992, documentando il danno grave e irreparabile per la cassa",
      "Se i crediti sono sequestrati in sede penale: richiesta di riesame entro 10 giorni dall'esecuzione del sequestro (art. 324 c.p.p.) o istanza di dissequestro al giudice",
      "In parallelo, senza attendere l'esito: denuncia del sinistro alla polizza del tecnico asseveratore, prima che i termini di polizza si consumino",
    ] },

    { type: "h2", text: "Come si blocca la riscossione e si sblocca il sequestro dei crediti?", id: "sospensione-dissequestro" },
    { type: "p", text: "Il ricorso da solo non ferma la riscossione. Per congelarla serve l'istanza di sospensione ex art. 47 D.lgs. 546/1992, che richiede due elementi: il fumus, cioè un ricorso non pretestuoso, e il periculum, cioè il danno grave e irreparabile che l'esecuzione produrrebbe. Per un'impresa edile il periculum si documenta con numeri, non con aggettivi: esposizione bancaria, scadenze verso fornitori e dipendenti, incidenza della somma richiesta sul circolante. Un'istanza generica viene respinta; una costruita sui bilanci viene discussa in tempi rapidi." },
    { type: "p", text: "Il sequestro preventivo dei crediti nel cassetto fiscale segue invece la via penale: contro il decreto di sequestro si può chiedere il riesame entro 10 giorni (art. 324 c.p.p.) o presentare istanza di dissequestro. La leva più efficace è la stessa del contenzioso tributario: dimostrare che i lavori sono stati eseguiti e documentati, perché il sequestro si giustifica sul presupposto dell'inesistenza. Nei casi misti si punta al dissequestro parziale, sulla porzione di crediti riferita a lavori documentati, per restituire ossigeno alla compensazione." },
    { type: "p", text: "Le due strade vanno percorse insieme e con la stessa documentazione, ma senza confonderle: la sospensione tributaria protegge dalla riscossione dell'atto di recupero, il dissequestro libera i crediti bloccati nel cassetto fiscale, e ottenere l'una non produce automaticamente l'altra. Per un'impresa che vive di compensazioni la priorità operativa è quasi sempre il cassetto: senza crediti utilizzabili, anche una difesa vincente nel merito rischia di arrivare quando l'azienda non c'è più. È il motivo per cui la strategia va disegnata all'inizio, sui flussi di cassa dei successivi dodici mesi, e non atto per atto." },

    { type: "h2", text: "La prova documentale che salva o affonda la difesa", id: "prova-documentale" },
    { type: "p", text: "Nel contenzioso sui bonus edilizi la difesa vive o muore sul fascicolo tecnico. Il nucleo minimo: asseverazioni e relative ricevute di deposito, computi metrici, SAL con date certe, fatture e bonifici parlanti, documentazione fotografica georeferenziata o comunque datata delle lavorazioni, collaudi e certificazioni finali, visto di conformità. Chi ha operato da general contractor deve aggiungere i contratti con i subappaltatori e la tracciabilità dei flussi verso di loro: è ciò che dimostra che il cantiere è esistito davvero, con costi reali." },
    { type: "p", text: "Il fascicolo va costruito prima di scrivere una riga di ricorso, perché orienta la strategia: se l'esecuzione dei lavori è solidamente provata, tutta la difesa converge sulla riqualificazione del credito come non spettante e sulla riduzione delle sanzioni; se la prova è lacunosa, conviene concentrare le risorse sulle annualità e sui cantieri difendibili, valutando per il resto gli istituti definitori. Difendere tutto allo stesso modo, senza gerarchia, è il modo migliore per perdere anche le posizioni forti." },
    { type: "p", text: "Un accorgimento pratico che vale ore di udienza: organizzare il fascicolo per condominio e per SAL, con un indice che incroci ogni contestazione dell'ufficio con i documenti che la smentiscono. I giudici tributari decidono su carte, non su sopralluoghi: la parte che porta un quadro documentale ordinato e verificabile parte avvantaggiata rispetto a chi deposita faldoni indistinti. Dove mancano pezzi — foto di lavorazioni ormai coperte, certificazioni intermedie — si può ancora integrare con perizie di parte e, nei casi giusti, con una consulenza tecnica chiesta al giudice." },

    { type: "h2", text: "Quando la contestazione tributaria diventa penale?", id: "penale" },
    { type: "p", text: "La soglia è fissata dall'art. 10-quater D.lgs. 74/2000: l'indebita compensazione diventa reato quando supera 50.000 euro per anno d'imposta. Ma la differenza vera la fa ancora una volta la qualificazione: la compensazione di crediti non spettanti (comma 1) è punita con la reclusione da 6 mesi a 2 anni, quella di crediti inesistenti (comma 2) da 1 anno e 6 mesi a 6 anni — con tutto ciò che ne consegue in termini di misure cautelari e sequestri. Per i crediti non spettanti, inoltre, il D.lgs. 87/2024 ha previsto la non punibilità in caso di obiettiva incertezza sui requisiti." },
    { type: "p", text: "Il procedimento penale e quello tributario corrono su binari autonomi, ma i materiali difensivi sono in larga parte gli stessi: la prova dell'esecuzione dei lavori smonta l'inesistenza in entrambe le sedi. Attenzione anche alla posizione di chi ha solo acquistato crediti: per il cessionario la responsabilità richiede il concorso nella violazione con dolo o colpa grave (art. 121, comma 6, D.L. 34/2020), e la due diligence svolta all'acquisto diventa la prova centrale della buona fede." },

    { type: "h2", text: "La rivalsa verso il tecnico asseveratore e le sue polizze", id: "rivalsa-asseveratore" },
    { type: "p", text: "Quando la contestazione nasce da un vizio dell'asseverazione — attestazioni di congruità errate, requisiti tecnici certificati e non sussistenti — l'impresa non è l'ultimo anello della catena: esiste la rivalsa verso il tecnico asseveratore. Per il Superbonus la legge imponeva al professionista una polizza di responsabilità civile con massimale adeguato agli importi asseverati (art. 119, comma 14, D.L. 34/2020): è una garanzia patrimoniale reale, pensata esattamente per questo scenario, che quasi nessuna impresa attiva." },
    { type: "p", text: "Il punto critico sono i tempi: la denuncia del sinistro alla compagnia va fatta subito, appena l'atto di recupero rende concreto il rischio, perché i termini di polizza e la prescrizione dell'azione corrono in parallelo al contenzioso tributario — e chi aspetta l'esito del ricorso scopre spesso che la copertura non è più azionabile. La rivalsa si prepara con una diffida al professionista, la denuncia cautelativa alla compagnia e, se serve, un accertamento tecnico sulla correttezza dell'asseverazione." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un'impresa che ha operato come general contractor su tre condomini riceve un atto di recupero per 612.000 euro di crediti d'imposta, qualificati come inesistenti, con sanzione proporzionale piena. Contestualmente il cassetto fiscale è bloccato e la compensazione sospesa. Il primo controllo, prima di ogni altra cosa: i lavori sono stati eseguiti? Qui sì — documentazione fotografica, SAL asseverati, fatture, bonifici tracciati e collaudi. La contestazione riguarda in realtà un vizio dell'asseverazione e alcune voci di computo ritenute non congrue." },
    { type: "p", text: "Questo cambia la partita: un credito relativo a lavori realmente eseguiti e documentati è tipicamente da qualificare come non spettante, non come inesistente. Spostare l'inquadramento incide su termini di decadenza, sanzioni e rilevanza penale della compensazione, ed è spesso più efficace che discutere ogni singola voce del computo metrico. In parallelo corre il secondo binario: istanza di sospensione della riscossione, per evitare che l'esecuzione strangoli la cassa mentre il ricorso pende, e istanza di dissequestro sulla parte di crediti riferita a lavori documentati." },
    { type: "p", text: "Il terzo binario, che quasi nessuno attiva: poiché il vizio contestato è dell'asseverazione, si denuncia subito il sinistro alla polizza professionale del tecnico — obbligatoria nel Superbonus, con massimali dedicati — e si notifica la diffida di rivalsa. In uno scenario di questo tipo il percorso plausibile è una forte riduzione della pretesa attraverso la riqualificazione, con la polizza dell'asseveratore a copertura di parte del residuo." },
    { type: "note", text: "L'errore da non fare: aspettare la cartella. I 60 giorni per il ricorso decorrono dalla notifica dell'atto di recupero, e chi li lascia scadere perde ogni difesa nel merito, anche quando avrebbe avuto ragione. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende sempre dai documenti e dalle circostanze specifiche." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Che differenza c'è tra credito inesistente e non spettante?", a: "Il credito è inesistente quando manca il presupposto: lavori mai eseguiti o documentazione falsa. È non spettante quando i lavori esistono ma il credito è stato fruito violando regole o requisiti. Cambiano sanzione (70% contro 25%), termini di accertamento (otto anni contro cinque) e cornice penale." },
      { q: "Quanto tempo ho per fare ricorso contro l'atto di recupero?", a: "60 giorni dalla notifica, davanti alla Corte di giustizia tributaria di primo grado (art. 21 D.lgs. 546/1992). Il termine è perentorio: l'atto non impugnato diventa definitivo con la qualificazione e le sanzioni che contiene. La cartella successiva non riapre la partita sul merito." },
      { q: "Posso bloccare la riscossione mentre il ricorso pende?", a: "Sì, con l'istanza di sospensione ex art. 47 D.lgs. 546/1992: serve un ricorso non pretestuoso e la prova documentata del danno grave e irreparabile — esposizione bancaria, scadenze, incidenza della pretesa sul circolante. Un'istanza costruita sui numeri di bilancio ha probabilità concrete di essere discussa rapidamente." },
      { q: "I miei crediti sono sotto sequestro penale: cosa posso fare?", a: "Contro il decreto di sequestro preventivo si può chiedere il riesame entro 10 giorni dall'esecuzione (art. 324 c.p.p.) o presentare istanza di dissequestro. L'argomento più forte è la prova che i lavori sono stati eseguiti: nei casi misti si punta al dissequestro parziale sulla quota documentata." },
      { q: "Rischio anche un procedimento penale?", a: "Sopra 50.000 euro di compensazioni annue scatta l'art. 10-quater D.lgs. 74/2000: da 6 mesi a 2 anni per crediti non spettanti, da 1 anno e 6 mesi a 6 anni per crediti inesistenti. Per i non spettanti è prevista la non punibilità in caso di obiettiva incertezza normativa." },
      { q: "Cosa succede ai crediti che ho già ceduto a terzi?", a: "Il cessionario risponde solo in caso di concorso nella violazione con dolo o colpa grave (art. 121, comma 6, D.L. 34/2020); in mancanza, il recupero resta indirizzato verso chi ha generato il credito. Per l'impresa cedente la cessione non chiude il rischio: la contestazione torna su di lei." },
      { q: "Posso rivalermi sul tecnico che ha sbagliato l'asseverazione?", a: "Sì. Se la contestazione nasce da un vizio dell'asseverazione, esiste la rivalsa verso il professionista e la sua polizza obbligatoria con massimale adeguato agli importi asseverati (art. 119, comma 14, D.L. 34/2020). La denuncia del sinistro va fatta subito: i termini di polizza corrono in parallelo al contenzioso." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai ricevuto uno schema di atto o un atto di recupero, mandaci l'atto: la prima cosa da stabilire è la qualificazione del credito, perché da quella dipendono termini, sanzioni e rischio penale — e i 60 giorni corrono già. Dalla pagina contatti puoi fissare una valutazione del fascicolo documentale. Per il quadro generale delle liti con il Fisco, parti dall'hub sul contenzioso tributario; se il tuo problema oggi è il cassetto fiscale bloccato, leggi l'approfondimento sul sequestro dei crediti d'imposta; e se le contestazioni toccano le fatture dei subappalti, c'è la guida al reverse charge in edilizia." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
