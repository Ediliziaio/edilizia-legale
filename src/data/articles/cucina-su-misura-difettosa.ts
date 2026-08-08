import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "cucina-su-misura-difettosa",
  title: "Cucina su misura difettosa: il tuo contratto è vendita o appalto? Cambia tutto",
  excerpt:
    "Misure sbagliate, top crepato, modello diverso dall'ordine? Prima del difetto conta la natura del contratto: vendita o appalto cambiano termini, rimedi e possibilità di risoluzione.",
  category: "Verticali",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "cucina su misura difettosa cosa posso fare",
    "cucina misure sbagliate rifiutare consegna",
    "contratto cucina è vendita o appalto",
    "acconto cucina non consegnata recupero",
    "cucina consegnata in ritardo penale",
    "top cucina crepato garanzia",
  ],
  intro:
    "La Cassazione distingue vendita e appalto in base alla prevalenza dell'obbligazione di dare su quella di fare. Una cucina composta con moduli standard è vendita; una cucina progettata e realizzata su misura per quello spazio è appalto. La distinzione cambia i termini per contestare e i rimedi disponibili, incluso il diritto di chiedere subito la risoluzione se l'opera è del tutto inadatta allo scopo.",
};

export const seo = {
  seoTitle: "Cucina su Misura Difettosa: Vendita o Appalto? Cosa Fare",
  metaDescription:
    "Cucina su misura difettosa? Se prevale il fare è appalto, se prevale il dare è vendita: cambiano termini e rimedi. La tabella e i passi per contestare.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: se prevale il fare (progetto e realizzazione su misura) il contratto è appalto, con i rimedi degli artt. 1667 e 1668 c.c.; se prevale il dare è vendita, e per il consumatore valgono gli artt. 128 e ss. del Codice del consumo. Il termine: nell'appalto la denuncia dei vizi ha 60 giorni dalla scoperta; nella vendita al consumatore il difetto è coperto se si manifesta entro 2 anni dalla consegna. L'azione: riserva scritta alla consegna, contestazione via PEC, poi i rimedi nell'ordine previsto dal tipo di contratto." },

    { type: "h2", text: "Vendita o appalto: qual è il criterio della Cassazione?", id: "criterio" },
    { type: "p", text: "Quando una cucina arriva con le misure sbagliate o il top crepato, l'istinto è discutere del difetto. Ma la prima domanda giuridicamente utile è un'altra: che contratto hai firmato? La Cassazione, con orientamento costante, distingue la vendita dall'appalto guardando quale obbligazione prevale: quella di dare — consegnare un bene che rientra nella normale produzione del venditore — o quella di fare, cioè realizzare un risultato specifico con lavoro prevalente sulla materia." },
    { type: "p", text: "Tradotto sul caso cucina: se hai scelto moduli a catalogo che il rivenditore ha accostato e montato con lavorazioni standard, prevale il dare ed è vendita. Se invece il tecnico ha rilevato le misure in loco, il progetto è stato disegnato su quel vano specifico e alcuni elementi sono stati realizzati appositamente — tagli fuori misura, basi fuori serie, top sagomato — prevale il fare e sei nell'appalto (art. 1655 c.c.). Gli indizi si pesano nel complesso: rilievo misure, progetto personalizzato, entità delle lavorazioni dedicate." },
    { type: "h2", text: "Cosa cambia tra vendita e appalto: la tabella", id: "tabella" },
    { type: "p", text: "La tabella riassume le differenze operative tra i due inquadramenti, ipotizzando — come è la regola in questi acquisti — che il cliente sia un consumatore." },
    { type: "table", headers: ["Aspetto", "Vendita al consumatore (artt. 128 e ss. Cod. cons.)", "Appalto (artt. 1655, 1667, 1668 c.c.)"], rows: [
      ["Norme di riferimento", "D.lgs. 6 settembre 2005, n. 206, artt. 128-135-septies", "Codice civile, artt. 1655 e ss."],
      ["Copertura del difetto", "Difetti di conformità che si manifestano entro 2 anni dalla consegna", "Denuncia entro 60 giorni dalla scoperta del vizio"],
      ["Prescrizione dell'azione", "26 mesi dalla consegna del bene", "2 anni dalla consegna dell'opera"],
      ["Rimedi e loro ordine", "Prima riparazione o sostituzione; poi riduzione del prezzo o risoluzione", "Eliminazione dei vizi a spese dell'appaltatore o riduzione del prezzo, oltre al risarcimento"],
      ["Risoluzione immediata", "Solo se il ripristino è impossibile, eccessivamente oneroso o fallito", "Subito, se l'opera è del tutto inadatta alla sua destinazione (art. 1668, comma 2, c.c.)"],
      ["Onere della prova nel primo anno", "Il difetto si presume esistente alla consegna (art. 135 Cod. cons.)", "Regole ordinarie: il committente prova il vizio"],
    ] },

    { type: "h2", text: "Sei un consumatore: come funziona la gerarchia dei rimedi?", id: "gerarchia" },
    { type: "p", text: "Se il contratto è qualificato come vendita e hai comprato come privato, si applica il Codice del consumo. Il venditore risponde di ogni difetto di conformità che si manifesta entro due anni dalla consegna, e nel primo anno il difetto si presume esistente fin dall'origine: è il venditore a dover provare il contrario. Non serve la denuncia entro due mesi, che la riforma del 2022 ha eliminato; conta la prescrizione di ventisei mesi." },
    { type: "p", text: "I rimedi però seguono una gerarchia: prima puoi pretendere il ripristino della conformità, scegliendo tra riparazione e sostituzione, senza spese e in un tempo congruo. Solo se il ripristino è impossibile, eccessivamente oneroso, fallito o fonte di notevoli inconvenienti puoi passare alla riduzione del prezzo o alla risoluzione del contratto. In pratica: al venditore va data una possibilità di rimediare, ma una sola stagione di appuntamenti mancati e riparazioni tentate esaurisce quella possibilità." },

    { type: "h2", text: "Quando l'opera è del tutto inadatta allo scopo (art. 1668 c.c.)", id: "risoluzione" },
    { type: "p", text: "Se invece il contratto è appalto, il committente può chiedere che i vizi siano eliminati a spese dell'appaltatore oppure che il prezzo sia ridotto, salvo il risarcimento del danno (art. 1668, comma 1, c.c.). Ma il secondo comma contiene l'arma più incisiva: se le difformità o i vizi rendono l'opera del tutto inadatta alla sua destinazione, puoi chiedere direttamente la risoluzione del contratto, senza passare per tentativi di riparazione." },
    { type: "p", text: "Una cucina in cui le basi non entrano nel vano, il piano di lavoro è danneggiato e gli elementi non corrispondono all'ordine può integrare, nel suo complesso, un'opera inidonea allo scopo: non è un mobile con un graffio, è un impianto che non svolge la funzione per cui è stato commissionato. La valutazione è di merito e dipende dal quadro concreto, ma la soglia della risoluzione nell'appalto è raggiungibile in situazioni in cui, nella vendita, saresti ancora fermo alla richiesta di sostituzione." },

    { type: "h2", text: "Misure sbagliate: chi doveva rilevarle?", id: "misure" },
    { type: "p", text: "È il punto che decide la maggior parte di queste controversie. Se il rilievo delle misure è stato eseguito dal tecnico del venditore, l'errore è suo: non può addebitarlo al cliente né pretendere un supplemento per rifare le basi. Il professionista che assume l'incarico di misurare risponde dell'esattezza del rilievo, che è esattamente la prestazione per cui è intervenuto." },
    { type: "p", text: "Se invece le misure le hai fornite tu e l'ordine le recepisce \"salvo verifica\" mai eseguita, la posizione si complica: l'errore ricade almeno in parte su chi ha misurato. Per questo il modulo di rilievo firmato è il documento più importante del fascicolo: dice chi ha misurato, quando e con quali riserve. Prima di qualunque contestazione va recuperato e letto con attenzione, insieme all'ordine e ai disegni allegati." },

    { type: "h2", text: "Come si contesta senza perdere il diritto", id: "come-contestare" },
    { type: "p", text: "La contestazione efficace comincia al momento della consegna e prosegue per iscritto, con date certe. L'errore tipico è firmare tutto alla consegna \"per cortesia verso i montatori\" e telefonare al negozio la settimana dopo: le contestazioni verbali non lasciano traccia e la firma senza riserve di ciò che era visibile pesa contro di te." },
    { type: "ol", items: [
      "Alla consegna, non firmare il documento di trasporto senza riserve: scrivi a mano i difetti visibili (misure, danni, elementi diversi dall'ordine) e fotografa tutto prima che i montatori vadano via",
      "Entro pochi giorni, invia una contestazione scritta via PEC o raccomandata con elenco dei difetti, foto e richiesta precisa; se il contratto è appalto, la denuncia dei vizi va comunque fatta entro 60 giorni dalla scoperta",
      "Concedi per iscritto un termine congruo per il ripristino — di norma 15 o 20 giorni per calendarizzare l'intervento — chiedendo un piano con date",
      "Se il ripristino fallisce o i tempi slittano, comunica il passaggio al rimedio successivo: riduzione del prezzo o risoluzione, con richiesta di restituzione dell'acconto",
      "Se il venditore non risponde, valuta la mediazione o l'azione giudiziale: nella vendita al consumatore la prescrizione è di 26 mesi dalla consegna, nell'appalto di 2 anni dalla consegna dell'opera",
    ] },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Cucina ordinata per 18.400 euro, acconto di 6.000, rilievo delle misure eseguito dal tecnico del rivenditore. Alla consegna: due basi non entrano perché il vano è più stretto di quanto rilevato, il top in pietra arriva con una crepa nell'angolo del lavello, la cappa è di un modello diverso da quello indicato nell'ordine. Il cliente scrive a mano sul documento di trasporto \"consegna accettata con riserva per difformità di misura, top danneggiato e cappa diversa dall'ordine\" e fotografa tutto: trenta secondi che valgono migliaia di euro." },
    { type: "p", text: "La qualificazione: rilievo in loco del tecnico, progetto disegnato su quel vano, elementi su misura — prevale il fare, è appalto. Le misure sbagliate sono un errore del venditore, che non può pretendere un supplemento per rifare le basi. Il bivio: se il complesso dei difetti rende la cucina inidonea allo scopo, la strada dell'art. 1668, comma 2, c.c. consente di chiedere la risoluzione e la restituzione dei 6.000 euro di acconto, oltre al danno; se invece i difetti sono rimediabili, conviene pretendere per iscritto un piano di ripristino con date, tenendosi pronta la riduzione del prezzo. Fosse stata una composizione di moduli a catalogo, il percorso sarebbe passato dalla gerarchia dei rimedi del Codice del consumo: prima sostituzione delle basi e del top, poi — solo in caso di fallimento — riduzione o risoluzione." },
    { type: "note", text: "L'errore da non fare: firmare la bolla di consegna senza riserve e contestare a voce nei giorni successivi. La sottoscrizione senza riserve di ciò che era visibile rende molto più difficile contestarlo dopo, e le telefonate non lasciano traccia. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende dai documenti e dalle circostanze specifiche." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso rifiutare la consegna di una cucina difettosa?", a: "Puoi rifiutare la consegna se la difformità è macroscopica ed evidente al momento dello scarico. Nella pratica è spesso più utile accettare con riserva scritta dettagliata sul documento di trasporto, fotografare tutto e contestare subito via PEC: conservi la prova e non resti senza cucina durante la trattativa." },
      { q: "Quanto tempo ho per contestare i difetti?", a: "Dipende dalla qualificazione. Nell'appalto la denuncia dei vizi va fatta entro 60 giorni dalla scoperta e l'azione si prescrive in 2 anni dalla consegna dell'opera (art. 1667 c.c.). Nella vendita al consumatore il difetto è coperto se si manifesta entro 2 anni dalla consegna e l'azione si prescrive in 26 mesi." },
      { q: "Recupero l'acconto se il contratto si risolve?", a: "Sì: la risoluzione obbliga le parti alle restituzioni, quindi l'acconto va restituito, oltre all'eventuale risarcimento. Il punto critico è arrivarci correttamente: serve aver contestato per iscritto, aver dato modo di rimediare quando il rimedio era dovuto e poter provare che l'opera era inidonea o il ripristino fallito." },
      { q: "La garanzia della cucina è di due anni o di dieci?", a: "Di regola due anni: la garanzia decennale dell'art. 1669 c.c. riguarda edifici e opere immobiliari destinate a lunga durata, non i mobili. Per una cucina valgono i 2 anni dalla consegna della vendita al consumatore o i termini dell'appalto: 60 giorni per la denuncia e 2 anni di prescrizione." },
      { q: "Devo accettare la riparazione o posso pretendere la sostituzione?", a: "Nella vendita al consumatore puoi scegliere tra riparazione e sostituzione, salvo che la scelta sia impossibile o eccessivamente onerosa per il venditore. Nell'appalto puoi chiedere l'eliminazione dei vizi a spese dell'appaltatore o la riduzione del prezzo; la risoluzione immediata scatta solo se l'opera è del tutto inadatta allo scopo." },
      { q: "La consegna è slittata di mesi: posso chiedere qualcosa?", a: "Sì. Se il termine di consegna era indicato nell'ordine, il ritardo è un inadempimento: puoi intimare per iscritto un termine finale e, se decorre inutilmente, risolvere il contratto e chiedere la restituzione dell'acconto oltre al danno documentato. Controlla anche se l'ordine prevede una penale per il ritardo." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Mandaci l'ordine firmato, il modulo di rilievo misure e le foto della consegna: dalla qualificazione del contratto — vendita o appalto — dipendono i termini che hai davanti e il rimedio con cui partire. Contattaci dalla pagina contatti per una valutazione del fascicolo. Sul tema puoi leggere anche la guida sugli infissi difettosi, che segue la stessa logica contrattuale, e quella su come annullare un contratto firmato in casa o in fiera." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
