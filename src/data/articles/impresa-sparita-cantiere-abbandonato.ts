import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "impresa-sparita-cantiere-abbandonato",
  title: "L'impresa ha abbandonato il cantiere: i cinque passi nell'ordine giusto",
  excerpt:
    "Cantiere fermo e impresa irraggiungibile? Prima documenta lo stato dei lavori, poi diffida ad adempiere: i cinque passi nell'ordine giusto per far completare l'opera e recuperare acconti e danni.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "impresa sparita dopo acconto cosa fare",
    "impresa edile non finisce i lavori",
    "cantiere fermo da mesi diritti committente",
    "recuperare acconto versato impresa",
    "diffida ad adempiere impresa edile",
  ],
  intro:
    "Quando l'impresa abbandona il cantiere, il committente deve prima documentare lo stato dei lavori, poi diffidarla ad adempiere assegnando un termine non inferiore a quindici giorni. Scaduto inutilmente il termine, il contratto si risolve di diritto e diventa possibile far completare l'opera a terzi addebitando all'impresa la maggiore spesa.",
};

export const seo = {
  seoTitle: "Impresa Sparita dal Cantiere: i 5 Passi da Fare",
  metaDescription:
    "L'impresa è sparita dopo l'acconto? Documenta lo stato dei lavori, diffida ad adempiere, risolvi il contratto e fai finire l'opera a terzi. I 5 passi.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: l'abbandono del cantiere è un inadempimento grave che consente la risoluzione del contratto (artt. 1453 e 1454 c.c.) e il risarcimento del danno. Il termine: la diffida ad adempiere deve assegnare almeno 15 giorni; scaduti, il contratto è risolto di diritto. L'azione: prima di tutto si documenta lo stato dei lavori con un tecnico — è il documento da cui dipende tutto il resto." },

    { type: "h2", text: "Cantiere fermo: quando puoi dire che l'impresa è inadempiente?", id: "quando-inadempiente" },
    { type: "p", text: "Un cantiere fermo per una settimana non è un abbandono: può dipendere da forniture, meteo, altri lavori in sovrapposizione. Diventa inadempimento quando il fermo si protrae oltre ogni ragionevolezza rispetto ai tempi pattuiti, quando l'impresa smette di rispondere, quando ritira attrezzature e ponteggi senza spiegazioni. La combinazione tipica — telefono muto, cantiere vuoto da settimane, richieste di ulteriori acconti prima di riprendere — è il quadro che i giudici considerano inadempimento di non scarsa importanza ex art. 1455 c.c." },
    { type: "p", text: "In quel momento scatta una tentazione comprensibile e quasi sempre dannosa: chiamare subito un'altra impresa e far ripartire i lavori. Farlo prima di aver documentato lo stato del cantiere e risolto il contratto significa distruggere la prova di ciò che l'impresa aveva eseguito — e regalarle la difesa perfetta: \"i lavori li avevamo fatti, li ha rovinati chi è venuto dopo\". I cinque passi che seguono servono esattamente a evitare questo esito, nell'ordine in cui vanno fatti." },

    { type: "figure", slot: "impresa-sparita-cantiere-abbandonato-1", alt: "Cantiere domestico abbandonato: impianti a metà, materiali fermi, nessun operaio", caption: "Prima di scrivere all'impresa serve la fotografia datata di quanto è stato davvero eseguito." },

    { type: "h2", text: "Passo 1 — Fotografare e verbalizzare lo stato dei lavori, oggi", id: "passo-1-documentare" },
    { type: "p", text: "Prima di qualsiasi lettera, un tecnico di tua fiducia — geometra, architetto o ingegnere — deve redigere un rilievo dello stato dei luoghi: documentazione fotografica datata, descrizione delle lavorazioni eseguite e non eseguite, computo metrico del valore di quanto realizzato. Costa in genere qualche centinaio di euro e vale tutto il contenzioso che segue: tra sei mesi, senza quel documento, sarà la tua parola contro quella dell'impresa." },
    { type: "p", text: "Il rilievo di parte è spesso sufficiente per la trattativa. Se prevedi una causa e lo stato dei luoghi è destinato a cambiare, lo strumento più solido è l'accertamento tecnico preventivo (artt. 696 e 696-bis c.p.c.): un consulente nominato dal giudice cristallizza lo stato del cantiere con valore di prova già formata per il futuro giudizio. Nel frattempo, non toccare nulla: niente sgomberi, niente demolizioni, niente interventi di altre imprese." },

    { type: "h2", text: "Passo 2 — La diffida ad adempiere: come si scrive perché funzioni?", id: "passo-2-diffida" },
    { type: "p", text: "La diffida ad adempiere ex art. 1454 c.c. va inviata via PEC e raccomandata con ricevuta di ritorno. Deve contenere tre elementi: l'intimazione a riprendere e completare i lavori, un termine non inferiore a quindici giorni, e la dichiarazione espressa che, decorso inutilmente il termine, il contratto si intenderà risolto di diritto. Quest'ultima formula è il cuore del meccanismo: senza, la lettera è un semplice sollecito e non produce la risoluzione." },
    { type: "p", text: "Nella diffida conviene anche riepilogare i fatti in modo asciutto — data del contratto, acconti versati, data dell'ultimo giorno di presenza in cantiere — e riservare espressamente il risarcimento dei danni. Toni minacciosi e ricostruzioni emotive non aggiungono nulla e offrono appigli alla difesa avversaria. La diffida afferma, data e documenta: non discute." },

    { type: "h2", text: "Passo 3 — La risoluzione del contratto", id: "passo-3-risoluzione" },
    { type: "p", text: "Se nei quindici giorni l'impresa non riprende i lavori — o risponde con promesse generiche senza tornare in cantiere — il contratto si risolve di diritto alla scadenza del termine, senza bisogno di una sentenza che lo pronunci. Da quel momento l'impresa non ha più titolo per rientrare in cantiere e tu sei libero di affidare il completamento a terzi." },
    { type: "p", text: "Conviene comunque mettere per iscritto la presa d'atto: una seconda PEC che constata l'inutile decorso del termine, dichiara il contratto risolto e chiede la restituzione degli acconti non coperti da lavorazioni, assegnando un termine di dieci giorni. È il documento che chiude formalmente il rapporto e apre la fase del recupero." },

    { type: "h2", text: "Passo 4 — Far completare l'opera e addebitare la differenza", id: "passo-4-completamento" },
    { type: "p", text: "Risolto il contratto, puoi far completare i lavori da una seconda impresa. Fatti rilasciare un preventivo analitico, voce per voce: servirà a dimostrare che la nuova spesa riguarda il completamento dell'opera pattuita e non lavori aggiuntivi o migliorie. La regola risarcitoria (artt. 1453 e 1223 c.c.) è lineare: la maggiore spesa per finire l'opera rispetto a quanto sarebbe residuato dal contratto originario è un danno che l'impresa inadempiente deve rimborsare." },
    { type: "p", text: "È il motivo per cui il rilievo del passo 1 è così importante: il conto si costruisce confrontando il valore dei lavori eseguiti, gli acconti versati e il costo del completamento. Senza la fotografia iniziale, ognuno di questi numeri diventa contestabile." },

    { type: "h2", text: "Passo 5 — Recuperare acconti e danni", id: "passo-5-recupero" },
    { type: "p", text: "Il credito verso l'impresa ha di norma tre componenti: gli acconti versati che eccedono il valore delle lavorazioni eseguite, la maggiore spesa per il completamento, e gli altri danni documentabili — per esempio il canone dell'alloggio alternativo se la casa è inagibile. Se l'impresa non paga dopo la richiesta scritta, le strade sono il decreto ingiuntivo, quando il credito è documentato, o il giudizio ordinario negli altri casi; il debitore ha quaranta giorni dalla notifica del decreto per proporre opposizione." },
    { type: "p", text: "Prima di avviare qualunque azione, però, va fatta una verifica che molti saltano: la capienza patrimoniale dell'impresa. Visure immobiliari, protesti, mezzi intestati, altri cantieri in corso da cui potrebbe incassare. Una causa vinta contro un'impresa senza patrimonio è una vittoria di carta, e la strategia va calibrata prima, non dopo." },

    { type: "h2", text: "I cinque passi in sintesi, con i termini", id: "passi-sintesi" },
    { type: "ol", items: [
      "Rilievo tecnico dello stato dei lavori con foto datate e computo: da fare subito, prima di qualsiasi comunicazione e senza toccare il cantiere",
      "Diffida ad adempiere ex art. 1454 c.c. via PEC e raccomandata, con termine non inferiore a 15 giorni e dichiarazione espressa di risoluzione di diritto",
      "Alla scadenza, PEC di presa d'atto della risoluzione con richiesta di restituzione degli acconti entro 10 giorni",
      "Affidamento del completamento a una seconda impresa con preventivo analitico, conservando ogni documento di spesa",
      "Richiesta di acconti eccedenti e danni; se non paga, decreto ingiuntivo o causa (opposizione al decreto: 40 giorni dalla notifica; prescrizione ordinaria del credito risarcitorio: 10 anni ex art. 2946 c.c.)",
    ] },

    { type: "h2", text: "E se l'impresa è in liquidazione o è sparita davvero?", id: "impresa-insolvente" },
    { type: "p", text: "Prima di scegliere la strada, va capito con che tipo di controparte hai a che fare: da questo dipende se conviene la causa, il sequestro o l'escussione di una garanzia." },
    { type: "table", headers: ["Situazione dell'impresa", "Cosa si può aggredire", "Strada più efficace"], rows: [
      ["Attiva, con altri cantieri in corso", "Crediti verso altri committenti, mezzi, conti", "Sequestro conservativo tempestivo, poi giudizio"],
      ["Attiva ma senza patrimonio visibile", "Polizze, fideiussioni, garanzie contrattuali", "Escussione delle garanzie prima della causa"],
      ["Irreperibile ma non cancellata", "Beni intestati, crediti fiscali", "Visure e pignoramento presso terzi"],
      ["In liquidazione giudiziale", "Solo l'attivo della procedura", "Insinuazione al passivo, nei termini fissati dal giudice"],
      ["Cancellata dal registro imprese", "Eventuale responsabilità di soci e amministratori", "Valutazione caso per caso, spesso non conviene agire"],
    ] },
    { type: "p", text: "L'impresa che abbandona il cantiere è spesso un'impresa in difficoltà. Se è entrata in liquidazione giudiziale, il recupero individuale si ferma e resta l'insinuazione al passivo, con tempi lunghi e soddisfazione legata all'attivo disponibile. Se è semplicemente irreperibile ma continua a lavorare altrove, può avere senso un sequestro conservativo ex art. 671 c.p.c. sui crediti che vanta verso altri committenti, prima che incassi e sparisca anche quel denaro." },
    { type: "p", text: "Vale anche la pena verificare le coperture: la polizza CAR o RC dell'impresa, le garanzie eventualmente previste in contratto, e — se i lavori rientravano in un intervento con fideiussione o polizza di buona esecuzione — l'escussione della garanzia. Sono strade che non dipendono dal patrimonio dell'impresa, e per questo a volte valgono più della causa." },

    { type: "h2", text: "Quando c'è anche un profilo penale (e quando no)?", id: "profilo-penale" },
    { type: "p", text: "La domanda arriva sempre: \"posso denunciarli per truffa?\". La risposta onesta è: quasi mai per il solo abbandono. La truffa (art. 640 c.p.) richiede artifici o raggiri già al momento della firma — un'impresa che incassa acconti senza avere mezzi né intenzione di eseguire, magari con identità o qualifiche false. L'impresa che inizia i lavori e poi entra in crisi è inadempiente sul piano civile, non un truffatore su quello penale." },
    { type: "p", text: "Promettere una querela facile è un modo per far perdere tempo e soldi: il procedimento penale non restituisce gli acconti e non completa il bagno. Il profilo penale va coltivato quando ci sono indizi concreti di un disegno ingannatorio fin dall'origine; negli altri casi, le energie vanno messe sulla strada civile e sulla ricerca di patrimonio aggredibile." },

    { type: "figure", slot: "impresa-sparita-cantiere-abbandonato-2", alt: "Tecnico che redige il rilievo dello stato dei luoghi con macchina fotografica e metro", caption: "Senza questo documento, tra sei mesi sarà la tua parola contro quella dell'impresa." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Ristrutturazione di un appartamento per 52.000 euro. L'impresa incassa 31.000 euro in acconti, demolisce tutto, rifà gli impianti a metà e poi sparisce: telefono staccato, cantiere fermo da undici settimane. La famiglia vive dai genitori e paga il mutuo di una casa inagibile. Il primo passo è il rilievo tecnico: un geometra fotografa lo stato dei luoghi e calcola 19.400 euro di lavorazioni effettivamente eseguite, a fronte dei 31.000 incassati." },
    { type: "p", text: "Segue la diffida ad adempiere via PEC e raccomandata, con termine di quindici giorni e dichiarazione espressa di risoluzione di diritto. Nessuna risposta. Alla scadenza il contratto è risolto e il completamento viene affidato a una seconda impresa: preventivo 41.000 euro, contro i 21.000 che sarebbero residuati dal contratto originario. Il danno chiesto all'impresa è quindi 20.000 euro di maggiore spesa più 11.600 di acconti non coperti da lavorazioni." },
    { type: "p", text: "Il bivio, da guardare in faccia: un'impresa sparita è spesso un'impresa senza patrimonio. Le visure rivelano se ci sono immobili o mezzi da aggredire; se non c'è nulla, la strategia cambia — garanzie e polizze da escutere, e un sequestro conservativo tempestivo sui crediti che l'impresa vanta verso altri committenti, se risulta ancora operativa su altri cantieri. Agire d'istinto con una causa ordinaria, in quel quadro, significa aggiungere spese a spese." },
    { type: "note", text: "L'errore da non fare: far entrare subito la seconda impresa senza rilievo tecnico e senza risoluzione. Si distrugge la prova dello stato dei lavori e si offre all'impresa la difesa perfetta. Lo scenario descritto è illustrativo: numeri ed esiti dipendono sempre dai documenti e dalle circostanze del caso concreto." },

    { type: "timeline", title: "I cinque passi, con i tempi", steps: [
      { when: "Oggi", label: "Rilievo tecnico dello stato dei lavori", detail: "Foto datate e computo delle lavorazioni effettivamente eseguite." },
      { when: "Subito dopo", label: "Diffida ad adempiere via PEC", detail: "Termine non inferiore a 15 giorni e dichiarazione di risoluzione di diritto." },
      { when: "15 giorni dopo", label: "Il contratto si risolve di diritto", detail: "La formula conta: senza quella dichiarazione la diffida è solo un sollecito." },
      { when: "Poi", label: "Completamento a terzi e addebito della maggiore spesa", detail: "Preventivo della seconda impresa a confronto con il residuo contrattuale." },
      { when: "In parallelo", label: "Verifica della capienza patrimoniale", detail: "Visure, mezzi, altri cantieri: decide se conviene agire o puntare alle garanzie." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso chiamare subito un'altra impresa per finire i lavori?", a: "Non prima di aver documentato lo stato del cantiere e risolto il contratto con la diffida ex art. 1454 c.c. Intervenire subito distrugge la prova delle lavorazioni eseguite e espone all'obiezione che i difetti siano opera della seconda impresa. L'unica eccezione sono gli interventi urgenti di messa in sicurezza, da documentare comunque prima con foto datate." },
      { q: "Chi paga la differenza se la seconda impresa costa di più?", a: "L'impresa inadempiente. La maggiore spesa per completare l'opera rispetto a quanto sarebbe residuato dal contratto originario è un danno risarcibile ex artt. 1453 e 1223 c.c. Serve però la prova: rilievo dello stato dei lavori al momento dell'abbandono e preventivo analitico della seconda impresa, limitato al completamento dell'opera pattuita." },
      { q: "Come dimostro a che punto erano i lavori?", a: "Con un rilievo tecnico immediato: foto datate, descrizione delle lavorazioni e computo metrico redatti da un professionista. Se è probabile la causa, l'accertamento tecnico preventivo ex artt. 696 e 696-bis c.p.c. affida la fotografia a un consulente nominato dal giudice, con valore di prova già formata per il giudizio." },
      { q: "Se l'impresa fallisce recupero qualcosa?", a: "Con la liquidazione giudiziale il recupero individuale si ferma e resta l'insinuazione al passivo, nei termini fissati dal giudice. La soddisfazione dipende dall'attivo e i tempi sono lunghi. Per questo conviene verificare subito garanzie e polizze escutibili, che non dipendono dal patrimonio dell'impresa, e muoversi prima che la crisi diventi procedura." },
      { q: "Posso denunciare l'impresa per truffa?", a: "Solo se ci sono artifici o raggiri già al momento della firma: incassare acconti senza mezzi né intenzione di eseguire, qualifiche false, identità di comodo. Il semplice abbandono per difficoltà economiche è inadempimento civile, non reato. La querela non restituisce gli acconti: la strada principale resta quella civile." },
      { q: "Quanto tempo ho per agire contro l'impresa?", a: "Il credito risarcitorio da inadempimento contrattuale si prescrive in dieci anni ex art. 2946 c.c. Ma il tempo lavora contro di te su un altro piano: lo stato del cantiere cambia, l'impresa si svuota, i testimoni dimenticano. La documentazione va fatta nei primi giorni; l'azione può seguire con calma, la prova no." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Il primo passo costa poco e vale tutto: documentare oggi lo stato del cantiere. Contattaci dalla pagina contatti e ti diciamo come farlo in modo che regga in giudizio, e se nel tuo caso conviene il rilievo di parte o l'accertamento tecnico preventivo. Se stai valutando come uscire dal contratto, leggi anche la guida alle cinque strade per sciogliere il contratto con l'impresa; se il problema è un conto lievitato, quella sul preventivo sforato. Puoi scaricare il modello di diffida ad adempiere per vedere come è costruita la formula che produce la risoluzione." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
