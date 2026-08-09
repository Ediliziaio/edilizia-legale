import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "tetto-rifatto-infiltrazioni",
  title: "Il tetto rifatto infiltra ancora: garanzia e responsabilità",
  excerpt:
    "Hai rifatto la copertura e l'acqua entra ancora? Le infiltrazioni dal tetto rientrano di norma nei gravi difetti dell'art. 1669 c.c.: dieci anni di garanzia, non due. Cause, responsabili e termini.",
  category: "Verticali",
  date: "Agosto 2026",
  readTime: "15 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "tetto rifatto infiltra ancora chi risponde",
    "rifacimento tetto difettoso garanzia",
    "infiltrazioni copertura responsabilità impresa",
    "guaina tetto difetti",
    "coibentazione tetto condensa",
  ],
  intro:
    "Se dopo il rifacimento la copertura infiltra ancora, l'impresa risponde di norma ai sensi dell'art. 1669 c.c.: le infiltrazioni dal tetto sono considerate gravi difetti perché compromettono la funzionalità dell'edificio. La garanzia è di dieci anni dal compimento dell'opera, ma devi denunciare il difetto entro un anno dalla scoperta.",
};

export const seo = {
  seoTitle: "Tetto Rifatto che Infiltra: Chi Risponde e per Quanto",
  metaDescription:
    "Il tetto appena rifatto infiltra? È un grave difetto ex art. 1669 c.c.: dieci anni di garanzia. Cause tecniche, responsabili e termini per denunciare.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: le infiltrazioni da copertura rientrano di norma nei gravi difetti dell'art. 1669 c.c., non nei vizi minori. Il termine: dieci anni dal compimento dell'opera, con denuncia entro un anno dalla scoperta e azione entro l'anno successivo. L'azione: accertamento tecnico preventivo per fissare la prova, poi richiesta di ripristino e risarcimento dei danni." },

    { type: "h2", text: "Perché un tetto che infiltra è un grave difetto e non un vizio qualsiasi", id: "grave-difetto" },
    { type: "p", text: "La differenza tra garanzia biennale e garanzia decennale non è una sfumatura: cambia completamente lo scenario. L'art. 1667 c.c. copre le difformità e i vizi dell'opera, con denuncia entro sessanta giorni dalla scoperta e prescrizione in due anni dalla consegna. L'art. 1669 c.c. copre invece la rovina e i gravi difetti dell'edificio, e opera per dieci anni dal compimento dell'opera. Un tetto che lascia passare acqua ricade quasi sempre nel secondo binario." },
    { type: "p", text: "La ragione è funzionale, non estetica. La giurisprudenza considera grave difetto ogni vizio che incide in modo apprezzabile sul godimento normale del bene, anche quando non minaccia il crollo. L'acqua che entra dalla copertura compromette l'abitabilità dei locali sottostanti, degrada l'isolamento e aggredisce strutture lignee e intonaci." },
    { type: "p", text: "C'è un secondo passaggio che devi conoscere. Per anni si è discusso se l'art. 1669 c.c. valesse solo per le costruzioni nuove o anche per gli interventi su edifici esistenti. Le Sezioni Unite della Cassazione, con la sentenza n. 7756 del 27 marzo 2017, hanno chiarito che la norma si applica anche alle opere di ristrutturazione e di riparazione di un immobile preesistente, quando incidono sugli elementi essenziali o ne compromettono la funzionalità globale. Il rifacimento di una copertura è il caso di scuola di quell'orientamento: non stai sostituendo una finitura, stai rifacendo l'elemento che protegge tutto ciò che sta sotto." },

    { type: "figure", slot: "tetto-rifatto-infiltrazioni-1", alt: "Falda di tetto rifatto vista dall'alto: manto in tegole, camino con risvolto della guaina e lucernario", caption: "Il punto debole non è quasi mai il centro della falda: sono i raccordi, i camini e i lucernari." },

    { type: "h2", text: "Da dove entra davvero l'acqua: le cause tecniche ricorrenti", id: "cause-tecniche" },
    { type: "p", text: "Nelle perizie sulle coperture rifatte da poco, l'acqua raramente attraversa il manto nel mezzo della falda. Entra nei punti singolari, cioè dove il pacchetto di copertura si interrompe e deve essere raccordato a qualcos'altro. Sapere quali sono ti serve per capire cosa chiedere al tecnico e per non farti liquidare con la spiegazione più comoda per l'impresa." },
    { type: "p", text: "Il primo gruppo di cause riguarda i raccordi e i risvolti. La guaina deve risalire lungo i muretti d'attico, i camini e i timpani per un'altezza sufficiente ed essere fissata meccanicamente in sommità. Un risvolto troppo basso, incollato male o non protetto da una scossalina si stacca alla prima escursione termica e crea una via d'acqua stabile." },
    { type: "p", text: "Il secondo gruppo riguarda i sormonti. Le membrane vanno sovrapposte con una larghezza minima e saldate su tutta la giunzione; tegole e coppi hanno un ricoprimento minimo che dipende dalla pendenza. Un sormonto ridotto per risparmiare materiale produce infiltrazioni che si manifestano solo con pioggia battente e vento, cioè in modo intermittente e apparentemente inspiegabile." },
    { type: "p", text: "Il terzo gruppo riguarda il comportamento igrotermico del pacchetto. Se manca la barriera al vapore sul lato caldo, o è stata posata ma non sigillata alle giunzioni e ai passaggi impiantistici, il vapore condensa dentro l'isolante. Il risultato somiglia a un'infiltrazione — macchie, gocciolamenti, muffa — ma l'acqua non viene dal cielo. Allo stesso modo, una microventilazione della falda assente o ostruita degrada la coibentazione nel giro di poche stagioni." },
    { type: "table", headers: ["Sintomo che vedi", "Causa tecnica più frequente", "Dove si concentra la responsabilità"], rows: [
      ["Macchia sempre nello stesso punto vicino al camino", "Risvolto della guaina troppo basso o scossalina mancante", "Esecuzione: posa dei punti singolari"],
      ["Gocciolamento solo con pioggia e vento forte", "Sormonti insufficienti o saldature incomplete", "Esecuzione: posa del manto"],
      ["Perimetro del lucernario bagnato", "Raccordo del serramento da tetto eseguito senza kit di tenuta", "Esecuzione e scelta dei componenti"],
      ["Isolante compresso e bagnato, muffa diffusa", "Barriera al vapore assente, forata o non sigillata", "Progetto e esecuzione (stratigrafia)"],
      ["Legno scuro e umido nonostante manto integro", "Microventilazione della falda assente o ostruita", "Progetto della stratigrafia"],
      ["Infiltrazione comparsa dopo l'impianto fotovoltaico", "Fissaggi passanti senza ripristino della tenuta", "Installatore dell'impianto"],
      ["Membrana rigonfia e screpolata su tutta la superficie", "Materiale non idoneo o degradato prima del tempo", "Fornitore, con rivalsa dell'impresa"],
    ] },

    { type: "h2", text: "Vizio di posa o vizio del materiale? Come si distingue", id: "posa-o-materiale" },
    { type: "p", text: "È la prima linea di difesa che incontrerai. L'impresa dirà che la membrana era difettosa, il fornitore risponderà che è stata posata male. La distinzione non è accademica: cambia il soggetto contro cui agisci e, in alcuni casi, i termini applicabili." },
    { type: "p", text: "Il vizio del materiale è diffuso e omogeneo: la membrana presenta lo stesso degrado su tutta la superficie, comprese le zone non sollecitate, e spesso appartiene a un lotto identificabile. Il vizio di posa è invece localizzato, concentrato nei punti singolari e nelle giunzioni." },
    { type: "p", text: "Attenzione però: anche quando il materiale è difettoso, l'impresa non si libera automaticamente. L'appaltatore deve scegliere materiali idonei all'uso e verificarne certificazioni e integrità prima della posa. Se ha impiegato un prodotto non adatto alla pendenza della falda, la scelta stessa è un suo inadempimento. Nei tuoi confronti resta il primo interlocutore, salva la rivalsa verso il fornitore." },
    { type: "p", text: "Nella pratica il consulente tecnico arriva alla risposta con saggi mirati: apertura del manto in due o tre punti, verifica delle sovrapposizioni, prova di allagamento, termografia e misure igrometriche. Sono verifiche che vanno chieste in modo esplicito nei quesiti, altrimenti l'accertamento rischia di fermarsi alla constatazione che l'acqua entra." },

    { type: "h2", text: "Chi risponde: impresa, progettista, direttore dei lavori", id: "chi-risponde" },
    { type: "p", text: "Nella maggior parte dei rifacimenti il tuo contratto è uno solo, con l'impresa, e l'art. 1669 c.c. si rivolge all'appaltatore. Ma quando l'intervento ha avuto un progetto e una direzione lavori la responsabilità può essere concorrente, e conviene inquadrarla subito: agire contro un solo soggetto quando il difetto nasce a monte espone alla chiamata in causa di tutti gli altri, con allungamento dei tempi." },
    { type: "p", text: "Il progettista risponde quando l'errore sta nella stratigrafia: pacchetto senza barriera al vapore in un sottotetto abitato, isolante inadatto, pendenza insufficiente per il manto scelto, camera di ventilazione assente dove serviva. Il direttore dei lavori risponde invece per l'omessa vigilanza sull'esecuzione, secondo la diligenza qualificata dell'art. 1176, comma 2, c.c. Non gli si chiede presenza continua, ma controllo nei momenti decisivi: e la posa dei risvolti e della barriera al vapore lo è, perché a manto chiuso non è più ispezionabile." },
    { type: "p", text: "Se il tetto è condominiale, cambia il legittimato ad agire. La copertura è parte comune ai sensi dell'art. 1117 c.c., quindi l'azione per il ripristino spetta di regola al condominio tramite l'amministratore, previa delibera assembleare. Il singolo condomino conserva però l'azione per i danni subiti dentro la sua proprietà: intonaci, pavimenti, mobili." },

    { type: "h2", text: "Che cosa puoi chiedere, e in che ordine", id: "cosa-chiedere" },
    { type: "p", text: "Le pretese sono tre e vanno tenute distinte nella lettera di contestazione. La prima è l'eliminazione del difetto: il ripristino della tenuta, che secondo l'estensione del vizio può significare rifare i soli punti singolari o l'intero manto. Se il ripristino è impossibile o eccessivamente oneroso, si passa alla riduzione del prezzo." },
    { type: "p", text: "La seconda è il danno all'immobile: intonaci da rifare, cartongessi da sostituire, isolante saturo da smaltire, travi da trattare, bonifica della muffa. È la voce che cresce di più con il passare del tempo, ed è il motivo per cui rinviare l'accertamento peggiora la tua posizione economica anche quando non la peggiora giuridicamente." },
    { type: "p", text: "La terza è il danno ai beni e all'uso: mobili, elettrodomestici, merce se il locale è commerciale, mancato godimento dei vani resi inagibili. Queste voci vanno documentate quando accadono, con foto datate e — dove esistono — le fatture di acquisto dei beni rovinati. Ricostruirle a distanza di due anni è quasi sempre un esercizio perso." },

    { type: "h2", text: "E se il fotovoltaico è stato installato dopo il rifacimento?", id: "fotovoltaico" },
    { type: "p", text: "È la complicazione più frequente degli ultimi anni, e la più insidiosa: offre all'impresa che ha rifatto il tetto una linea difensiva immediata, cioè che l'acqua entra dai fissaggi dei pannelli. A volte è vero, a volte no, e la differenza si stabilisce solo con un accertamento fatto bene." },
    { type: "p", text: "I sistemi di ancoraggio su falda inclinata prevedono staffe agganciate alla struttura sotto il manto, con ripristino della tenuta nel punto di attraversamento. Su coperture piane si usano zavorre o basi incollate, proprio per non forare la membrana. Quando l'installatore fora e sigilla solo con mastice, il punto cede nel giro di poche stagioni: è un difetto suo, non del tetto." },
    { type: "p", text: "Ci sono però casi in cui il fotovoltaico rivela un difetto preesistente anziché crearlo: il carico aggiuntivo e la modifica dello scorrimento dell'acqua mettono sotto stress raccordi già eseguiti male. Per questo, se hai entrambi gli interventi alle spalle, la contestazione va indirizzata fin dall'inizio a tutti e due i soggetti. E conviene recuperare subito le schede tecniche del sistema di fissaggio e le foto dell'installazione: il confronto tra ciò che il produttore prescrive e ciò che è stato realizzato chiude spesso la discussione." },

    { type: "h2", text: "Quanto tempo hai per agire?", id: "termini" },
    { type: "p", text: "La struttura dei termini dell'art. 1669 c.c. è a tre livelli e sbagliarne uno significa perdere il diritto anche quando il difetto è evidente. Il primo livello è il decennio: i gravi difetti devono manifestarsi entro dieci anni dal compimento dell'opera. Il secondo è la denuncia, entro un anno dalla scoperta. Il terzo è l'azione, che si prescrive in un anno dalla denuncia." },
    { type: "p", text: "Il punto delicato è cosa si intenda per scoperta. Non coincide con la prima macchia sul soffitto, ma con il momento in cui acquisisci consapevolezza sufficientemente sicura della gravità del difetto e della sua riconducibilità all'opera. Nella pratica quel momento è spesso la data della relazione tecnica: incaricare un tecnico fissa un riferimento temporale difendibile." },
    { type: "table", headers: ["Regime", "Quando si applica alla copertura", "Denuncia", "Termine finale"], rows: [
      ["Art. 1669 c.c. — gravi difetti", "Infiltrazioni che compromettono l'uso dei locali sottostanti", "1 anno dalla scoperta", "10 anni dal compimento dell'opera; azione entro 1 anno dalla denuncia"],
      ["Art. 1667 c.c. — vizi e difformità", "Difetti minori: estetica del manto, finiture, opere accessorie", "60 giorni dalla scoperta", "2 anni dalla consegna dell'opera"],
      ["Art. 1490 e 1495 c.c. — vendita", "Fornitura di materiale senza posa (membrane, tegole, pannelli)", "8 giorni dalla scoperta", "1 anno dalla consegna del bene"],
      ["Artt. 128 e ss. D.lgs. 206/2005", "Consumatore che acquista beni da un professionista", "Termini del codice del consumo", "2 anni dalla consegna"],
      ["Art. 2043 c.c. — danno extracontrattuale", "Danno a chi non è parte del contratto, come il vicino", "Nessuna denuncia formale", "5 anni dal fatto"],
    ] },
    { type: "p", text: "Una precisazione che evita molti equivoci: il riconoscimento scritto e non equivoco del difetto da parte dell'impresa rende superflua la denuncia. Se l'impresa ti risponde ammettendo il problema e proponendo di intervenire, quella lettera va conservata con cura." },

    { type: "h2", text: "Come si costruisce la prova prima che l'impresa contesti", id: "prova" },
    { type: "p", text: "Le controversie sulle coperture si decidono sulla prova tecnica, e la prova tecnica si deteriora in fretta: l'impresa rientra, ripara, il quadro cambia e nessuno può più dire com'era. La sequenza che segue fissa la situazione con termini precisi e lascia all'impresa una possibilità reale di rimediare." },
    { type: "ol", items: [
      "Giorno 0: foto e video datati di ogni macchia, del sottotetto e della copertura dall'esterno, con nota sulle condizioni meteo",
      "Entro 7 giorni: recupera il fascicolo — preventivo, contratto, capitolato, schede tecniche, fatture, verbale di fine lavori, foto di cantiere",
      "Entro 15 giorni: incarica un tecnico per una relazione scritta su cause, estensione e stima del ripristino",
      "Entro 30 giorni dalla relazione: denuncia dei gravi difetti via PEC a impresa, progettista e direttore dei lavori, con richiesta di sopralluogo congiunto",
      "Assegna 30 giorni per il sopralluogo e 60 giorni per il ripristino, precisando che ogni intervento è accettato in via provvisoria",
      "Se non arriva risposta: entro i 60 giorni successivi valuta il ricorso per accertamento tecnico preventivo ex art. 696-bis c.p.c.",
      "Prima della scadenza dell'anno dalla denuncia, compi un atto interruttivo o avvia il giudizio di merito",
    ] },
    { type: "p", text: "L'accertamento tecnico preventivo merita una nota a parte: produce una perizia con valore processuale pieno in tempi molto più brevi di una causa e mette le parti davanti a un dato tecnico condiviso. Non di rado la transazione arriva alla lettura della relazione, prima che il giudizio di merito venga incardinato." },

    { type: "figure", slot: "tetto-rifatto-infiltrazioni-2", alt: "Sottotetto con isolante bagnato e macchia di infiltrazione sul cartongesso, illuminato da una torcia", caption: "Il danno all'immobile cresce a ogni stagione: documentarlo subito, con foto datate, è la voce che si perde più facilmente." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Una villetta con sottotetto abitabile fa rifare la copertura per 38.400 euro: smontaggio del manto, nuovo isolante, membrana traspirante, coppi recuperati e nuovi. I lavori si chiudono a giugno. Il primo inverno passa senza problemi. Il secondo, dopo tre giorni di pioggia con vento, compaiono due macchie sul cartongesso della camera, entrambe in corrispondenza della canna fumaria. L'impresa torna, applica sigillante, il gocciolamento si ferma. Riprende l'inverno successivo, più esteso." },
    { type: "p", text: "Il proprietario incarica un tecnico. La relazione rileva due elementi: il risvolto della membrana attorno al camino risale pochi centimetri e non è protetto da scossalina, e la barriera al vapore risulta interrotta in corrispondenza dei faretti del controsoffitto. L'isolante nella zona è saturo. La stima del ripristino è di 9.700 euro, più 4.150 euro di opere interne." },
    { type: "p", text: "Qui si apre il bivio. Prima strada: denuncia dei gravi difetti a impresa e direttore dei lavori, con richiesta di sopralluogo congiunto e ripristino a carico dell'impresa; se accetta, il problema si chiude in una stagione. Seconda strada: se l'impresa nega e attribuisce tutto ai faretti installati dal proprietario, l'accertamento tecnico preventivo ex art. 696-bis c.p.c. diventa il passaggio obbligato, perché solo un consulente nominato dal giudice può distribuire le cause tra risvolto mal eseguito e barriera al vapore forata a posteriori." },
    { type: "p", text: "La variabile che pesa di più non è l'importo: è la data del compimento dell'opera. Con il decennio ampiamente aperto e una relazione tecnica recente che fissa la scoperta, la posizione del proprietario è solida. Se avesse lasciato passare due inverni dalla prima relazione senza denunciare nulla, la discussione si sarebbe spostata dal difetto alla decadenza." },
    { type: "note", text: "L'errore da non fare: accettare le riparazioni tampone senza metterle per iscritto. Ogni ritorno dell'impresa va accompagnato da una comunicazione che descrive il difetto, qualifica l'intervento come provvisorio e riserva ogni diritto. Lo scenario descritto è illustrativo: l'esito dipende dai documenti, dalla stratigrafia realizzata e dalle circostanze specifiche." },

    { type: "timeline", title: "I termini dell'art. 1669 c.c. sulla copertura", steps: [
      { when: "Compimento dell'opera", label: "Parte il decennio", detail: "I gravi difetti devono manifestarsi entro dieci anni." },
      { when: "Scoperta del difetto", label: "Parte l'anno per la denuncia", detail: "Coincide con la consapevolezza sicura della gravità e della causa." },
      { when: "Entro 1 anno dalla scoperta", label: "Denuncia scritta via PEC", detail: "A impresa e, se ci sono, progettista e direttore dei lavori." },
      { when: "Entro 1 anno dalla denuncia", label: "Azione o atto interruttivo", detail: "Scaduto il termine, l'azione ex art. 1669 c.c. si prescrive." },
      { when: "In parallelo", label: "Accertamento tecnico preventivo", detail: "Ex art. 696-bis c.p.c., cristallizza la prova." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Il rifacimento del tetto ha garanzia di due anni o di dieci?", a: "Dipende dalla gravità del difetto, non dal tipo di intervento. Se le infiltrazioni compromettono l'uso dei locali sottostanti si applica l'art. 1669 c.c., con dieci anni dal compimento dell'opera. I difetti minori, come imperfezioni estetiche del manto, restano nell'art. 1667 c.c. con due anni dalla consegna." },
      { q: "L'art. 1669 c.c. vale anche per una semplice ristrutturazione della copertura?", a: "Sì. Le Sezioni Unite della Cassazione, con la sentenza n. 7756 del 27 marzo 2017, hanno esteso l'art. 1669 c.c. agli interventi su edifici preesistenti quando incidono su elementi essenziali o ne compromettono la funzionalità globale. Il rifacimento di un tetto rientra tipicamente in questa categoria." },
      { q: "L'impresa dice che è condensa e non infiltrazione: cambia qualcosa?", a: "Cambia la causa, non necessariamente la responsabilità. Se la condensa deriva da barriera al vapore assente, forata o non sigillata, oppure da microventilazione mancante, il difetto resta imputabile a chi ha progettato o realizzato la stratigrafia. La distinzione va accertata con igrometro e termografia." },
      { q: "Ho fatto installare il fotovoltaico dopo: perdo la garanzia sul tetto?", a: "No, non automaticamente. Perdi la garanzia solo per i difetti causati dall'intervento successivo. Se l'infiltrazione si concentra nei fissaggi dei pannelli, risponde l'installatore; se riguarda zone diverse della falda, resta la responsabilità di chi ha rifatto la copertura. Serve un accertamento che distingua le cause." },
      { q: "Il tetto è condominiale: chi deve agire?", a: "La copertura è parte comune ai sensi dell'art. 1117 c.c., quindi l'azione per il ripristino spetta di regola al condominio tramite l'amministratore, previa delibera. Il singolo condomino può però agire autonomamente per i danni subiti nella sua proprietà, come intonaci, pavimenti e beni rovinati." },
      { q: "Cosa succede se l'impresa nel frattempo ha chiuso?", a: "L'azione verso l'impresa cessata diventa difficile ma non sempre inutile: vanno verificate la posizione dei soci, l'eventuale polizza postuma decennale e la responsabilità concorrente di progettista e direttore dei lavori, che rispondono in proprio e di norma hanno una copertura assicurativa professionale attiva." },
      { q: "Quanto tempo ho se il difetto compare al nono anno?", a: "Il difetto deve manifestarsi entro i dieci anni dal compimento dell'opera, ma i termini per denunciare e agire decorrono dalla scoperta e possono collocarsi oltre il decennio. Un vizio scoperto al nono anno va comunque denunciato entro un anno da quel momento, e l'azione proposta entro l'anno successivo." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se la copertura che hai fatto rifare infiltra ancora, i primi due passi sono sempre gli stessi: fissare la data di scoperta con una relazione tecnica e denunciare i gravi difetti prima che l'anno decorra. Contattaci dalla pagina contatti con contratto, capitolato e foto: valutiamo se il caso rientra nell'art. 1669 c.c. e quale sequenza ha senso. Se il problema riguarda invece il terrazzo o il lastrico solare, la guida dedicata alle infiltrazioni da terrazzo affronta le regole sul riparto delle spese in condominio." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
