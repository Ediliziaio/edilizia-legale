import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "recesso-contratto-fotovoltaico",
  title: "Contratto fotovoltaico firmato a casa: puoi annullarlo fino a 12 mesi dopo",
  excerpt:
    "Firmato in salotto o a distanza? Hai 14 giorni per recedere senza motivazione, che diventano 12 mesi e 14 giorni se manca l'informativa. E il recesso travolge anche il finanziamento collegato.",
  category: "Verticali",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "recesso contratto fotovoltaico firmato a casa",
    "annullare finanziamento fotovoltaico collegato",
    "contratto firmato a domicilio recesso 14 giorni",
    "recesso 12 mesi mancata informativa",
    "azienda fotovoltaico fallita impianto non finito",
    "disdire contratto fotovoltaico porta a porta",
  ],
  intro:
    "Chi firma un contratto per un impianto fotovoltaico fuori dai locali commerciali dell'azienda — a casa propria, in fiera, a distanza — ha quattordici giorni per recedere senza motivazione. Se il venditore non ha fornito l'informativa sul diritto di recesso, il termine si estende a dodici mesi e quattordici giorni, e il recesso travolge anche il finanziamento collegato.",
};

export const seo = {
  seoTitle: "Recesso Contratto Fotovoltaico Firmato a Casa: Termini",
  metaDescription:
    "Contratto fotovoltaico firmato a casa? 14 giorni per recedere, che diventano 12 mesi e 14 giorni senza informativa. E cade anche il finanziamento collegato.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: per i contratti conclusi fuori dai locali commerciali o a distanza il consumatore può recedere senza motivazione (artt. 45 e ss. Codice del Consumo). Il termine: 14 giorni; se manca l'informativa sul recesso, 12 mesi e 14 giorni (art. 53 Cod. Cons.). L'azione: comunicazione scritta di recesso all'azienda e, contestualmente, alla finanziaria, perché il credito collegato si scioglie insieme al contratto principale (art. 58 Cod. Cons.)." },

    { type: "h2", text: "Quando si applica il diritto di recesso: fuori dai locali commerciali e a distanza", id: "quando-si-applica" },
    { type: "p", text: "Il diritto di recesso non è una cortesia commerciale: è una tutela di legge, prevista dagli artt. 45 e seguenti del Codice del Consumo, che scatta quando un consumatore conclude un contratto fuori dai locali dell'azienda. I casi tipici del fotovoltaico ci rientrano quasi tutti: il commerciale che viene a casa dopo una telefonata, il contratto firmato in salotto sul tablet, lo stand in fiera o al centro commerciale, la firma a distanza dopo una videochiamata." },
    { type: "p", text: "La ragione della tutela è semplice: in quelle situazioni il cliente non ha potuto confrontare offerte né dormirci sopra. Per questo la legge concede un periodo di ripensamento in cui sciogliersi dal contratto senza motivare nulla e senza penali. Non serve dimostrare che l'impianto è difettoso: basta essere nei termini." },
    { type: "p", text: "Attenzione al perimetro: la tutela vale per i consumatori, cioè per chi firma per scopi estranei alla propria attività professionale. Un impianto per la casa rientra; un impianto per il capannone dell'azienda, di regola, no. E vale anche per i contratti conclusi interamente online o al telefono, che sono contratti a distanza a tutti gli effetti." },

    { type: "figure", slot: "recesso-contratto-fotovoltaico-1", alt: "Plico contrattuale del fotovoltaico firmato in casa, senza modulo di recesso", caption: "La prima verifica non riguarda l'impianto: riguarda il plico e l'informativa sul recesso." },

    { type: "h2", text: "Quattordici giorni: ma da quando, e cosa doveva dirti il venditore?", id: "quattordici-giorni" },
    { type: "p", text: "Il termine ordinario è di quattordici giorni (art. 52 Cod. Cons.). Per i contratti che includono la fornitura di beni — i pannelli, l'inverter, l'accumulo — il termine decorre dalla consegna dei beni, non dalla firma. Per i contratti di soli servizi decorre dalla conclusione: se tra firma e consegna passano due mesi, la finestra si apre davvero solo alla consegna." },
    { type: "p", text: "Ma il punto decisivo è un altro: il venditore aveva l'obbligo di informarti del diritto di recesso prima della firma, in modo chiaro e comprensibile, indicando condizioni, termini e procedure e consegnando il modulo tipo di recesso (art. 49, comma 1, lett. h, Cod. Cons.). Questa informativa non è una formalità: è la condizione perché il termine di quattordici giorni inizi a decorrere. Nei plichi contrattuali del fotovoltaico porta a porta, sorprendentemente spesso, non c'è." },
    { type: "p", text: "Dal 2023, inoltre, per i contratti conclusi durante visite a domicilio non richieste il legislatore ha rafforzato la tutela, estendendo il periodo di recesso a trenta giorni (art. 52, comma 1-bis, Cod. Cons., introdotto dal D.lgs. 26/2023). Se il commerciale si è presentato senza un tuo invito, il termine base è già più lungo." },

    { type: "h2", text: "La regola che ribalta tutto: dodici mesi e quattordici giorni", id: "dodici-mesi" },
    { type: "p", text: "Qui sta la leva che quasi nessuno conosce. Se il venditore non ha fornito l'informativa sul diritto di recesso, il periodo di recesso non è più di quattordici giorni: termina dodici mesi dopo la fine del periodo iniziale, quindi dodici mesi e quattordici giorni in tutto (art. 53 Cod. Cons.). Se l'informativa arriva in ritardo, il termine di quattordici giorni decorre da quando viene effettivamente fornita." },
    { type: "p", text: "Tradotto: un contratto firmato in salotto sette od otto mesi fa, con un plico che non contiene l'informativa e il modulo di recesso, può essere ancora nei termini. È il motivo per cui la prima verifica da fare non riguarda l'impianto, i difetti o la produzione: riguarda il plico contrattuale. Si controlla cosa c'è scritto, cosa è stato consegnato e quando." },
    { type: "table", headers: ["Scenario", "Termine per recedere", "Da quando decorre"], rows: [
      ["Informativa completa e modulo consegnati", "14 giorni", "Dalla consegna dei beni (o dalla conclusione, per i soli servizi)"],
      ["Visita a domicilio non richiesta", "30 giorni", "Dalla consegna dei beni (art. 52, co. 1-bis, Cod. Cons.)"],
      ["Informativa omessa", "12 mesi e 14 giorni", "Dalla scadenza del periodo iniziale (art. 53 Cod. Cons.)"],
      ["Informativa fornita in ritardo", "14 giorni", "Dal giorno in cui l'informativa viene fornita"],
    ] },
    { type: "p", text: "Il recesso nei termini scioglie il contratto senza penali: le somme versate vanno restituite entro quattordici giorni dalla comunicazione (art. 56 Cod. Cons.), e le clausole che ostacolano il recesso sono prive di effetto." },

    { type: "h2", text: "Il finanziamento collegato cade insieme al contratto?", id: "finanziamento-collegato" },
    { type: "p", text: "Sì, ed è la parte che vale più di tutto. Quasi tutti gli impianti venduti porta a porta sono finanziati con un credito al consumo proposto dallo stesso venditore. Quel finanziamento è un contratto accessorio collegato al contratto di fornitura: se eserciti il recesso dal contratto principale, anche il contratto di credito si scioglie di diritto, senza costi per il consumatore (art. 58 Cod. Cons.; per i contratti di credito collegati, art. 125-quinquies TUB in caso di inadempimento del fornitore)." },
    { type: "p", text: "L'errore pratico più frequente è comunicare il recesso solo all'azienda e continuare a pagare le rate \"per sicurezza\". La comunicazione va inviata contestualmente anche alla finanziaria, con copia del recesso esercitato verso il fornitore, chiedendo la chiusura del rapporto e la cessazione degli addebiti: la finanziaria è parte di un'operazione economica unitaria, e la sorte del suo credito segue quella del contratto principale." },

    { type: "h2", text: "Cosa succede all'impianto già installato?", id: "impianto-installato" },
    { type: "p", text: "È l'obiezione che blocca molti: \"ormai i pannelli sono sul tetto\". La risposta di legge è meno drammatica di quanto sembri. Con il recesso l'azienda ha diritto alla restituzione dei beni, ma nei contratti conclusi fuori dai locali commerciali, quando i beni sono stati consegnati a casa del consumatore e per loro natura non possono essere restituiti a mezzo posta — ed è esattamente il caso di un impianto sul tetto — il ritiro è a carico e a spese del professionista (art. 57 Cod. Cons.). Il consumatore non deve smontare né trasportare nulla." },
    { type: "p", text: "Quanto ai servizi già eseguiti: un importo proporzionale è dovuto solo se il consumatore aveva chiesto espressamente l'esecuzione durante il periodo di recesso ed era stato correttamente informato (art. 57, commi 3 e 4, Cod. Cons.). Se l'informativa mancava, di regola non è dovuto nemmeno questo." },

    { type: "h2", text: "Come si esercita il recesso, in pratica", id: "come-si-esercita" },
    { type: "p", text: "Il recesso è una dichiarazione: non richiede formule sacramentali, ma richiede prova certa di invio e di data (art. 54 Cod. Cons.). Questa è la sequenza operativa." },
    { type: "ol", items: [
      "Recupera l'intero plico: contratto, allegati, piano finanziario, brochure, eventuali moduli. Verifica se contiene l'informativa sul recesso e il modulo tipo",
      "Fissa le date: giorno della firma, giorno della consegna dei beni, giorno dell'eventuale installazione. Da qui si calcola in quale scenario ti trovi (14 giorni, 30 giorni o 12 mesi e 14 giorni)",
      "Redigi la comunicazione di recesso: dati del contratto, dichiarazione inequivocabile di voler recedere, richiesta di restituzione delle somme entro 14 giorni",
      "Inviala via PEC o raccomandata A/R all'azienda entro il termine: ai fini della scadenza conta la data di spedizione, non di ricezione",
      "Invia contestualmente copia alla finanziaria, chiedendo lo scioglimento del credito collegato e la cessazione degli addebiti",
      "Non smontare nulla e non consegnare i beni a tue spese: il ritiro dell'impianto installato a domicilio è a carico del professionista",
      "Conserva ricevute e risposte: se l'azienda non restituisce le somme entro 14 giorni o la finanziaria continua gli addebiti, si passa alla diffida legale",
    ] },

    { type: "figure", slot: "recesso-contratto-fotovoltaico-2", alt: "Pannelli già installati sul tetto di un'abitazione", caption: "L'onere e il costo del ritiro dei beni restano a carico dell'azienda quando l'informativa mancava." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un pensionato firma nel proprio salotto, dopo una visita commerciale non richiesta, un contratto per fotovoltaico e accumulo da 24.800 euro, finanziato con 144 rate da 172 euro. Nel plico ci sono il contratto, il piano finanziario e una brochure. Nessun modulo di recesso, nessuna informativa sui quattordici giorni. Sette mesi dopo l'impianto è installato, ma l'accumulo non è mai arrivato e la bolletta è calata di poco." },
    { type: "p", text: "La prima verifica non riguarda l'impianto: riguarda il plico. Il contratto è stato concluso fuori dai locali commerciali, quindi il Codice del Consumo si applica; l'informativa sul recesso manca, quindi il termine non è di quattordici giorni ma si estende fino a dodici mesi e quattordici giorni ex art. 53. A sette mesi dalla firma si è ampiamente nei termini. Il secondo effetto è quello che pesa di più: il recesso, comunicato anche alla finanziaria, scioglie il credito collegato e ferma le 137 rate residue. Il terzo punto scioglie l'obiezione classica: i pannelli già montati vanno ritirati a cura e spese dell'azienda, senza che il pensionato debba smontare o spedire nulla." },
    { type: "p", text: "Il bivio strategico, da valutare con onestà: se l'impianto funzionasse bene e il cliente volesse tenerlo, il recesso ancora esercitabile diventerebbe una leva negoziale — per ottenere l'accumulo mancante o uno sconto — invece che un azzeramento. Nel caso peggiore, azienda nel frattempo liquidata, il collegamento con il finanziamento resta la strada principale: la finanziaria è un soggetto solvibile, e la sorte del suo credito dipende da quella del contratto principale." },
    { type: "note", text: "L'errore da non fare: continuare a pagare le rate in silenzio \"finché non si chiarisce\", senza mai formalizzare nulla per iscritto. Ogni mese che passa consuma il termine dei dodici mesi, e il recesso non esercitato non produce alcun effetto. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende dai documenti e dalle circostanze specifiche." },

    { type: "timeline", title: "Quanto tempo hai davvero", steps: [
      { when: "Firma del contratto", label: "Fuori dai locali commerciali", detail: "Vale il Codice del Consumo: casa, fiera, o a distanza." },
      { when: "14 giorni", label: "Recesso ordinario senza motivazione", detail: "Se l'informativa sul diritto di recesso è stata fornita correttamente." },
      { when: "12 mesi e 14 giorni", label: "Se l'informativa mancava", detail: "Il termine si estende, anche a impianto già installato." },
      { when: "Contestualmente", label: "Comunicazione anche alla finanziaria", detail: "Il finanziamento è collegato: se cade il contratto, cadono le rate." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quanti giorni ho per recedere da un contratto fotovoltaico firmato a casa?", a: "Quattordici giorni, che decorrono dalla consegna dei beni (art. 52 Cod. Cons.), e trenta se la visita a domicilio non era stata richiesta. Se però il venditore non ti ha informato del diritto di recesso con il relativo modulo, il termine si estende a dodici mesi e quattordici giorni (art. 53 Cod. Cons.)." },
      { q: "Sono passati diversi mesi dalla firma: posso ancora recedere?", a: "Dipende dal plico contrattuale. Se manca l'informativa sul diritto di recesso o il modulo tipo, il termine è di dodici mesi e quattordici giorni, quindi a distanza di mesi puoi essere ancora nei termini. La verifica si fa sui documenti consegnati alla firma: è la prima cosa da controllare, prima di ogni contestazione tecnica." },
      { q: "Devo continuare a pagare il finanziamento dopo il recesso?", a: "No: il credito collegato si scioglie di diritto insieme al contratto principale, senza costi per il consumatore (art. 58 Cod. Cons.). La condizione pratica è avere comunicato il recesso anche alla finanziaria, con prova di invio. Fino a quella comunicazione gli addebiti proseguono, quindi va fatta contestualmente, non dopo." },
      { q: "Chi smonta e si riprende i pannelli già installati?", a: "L'azienda. Nei contratti fuori dai locali commerciali, i beni consegnati a domicilio che per natura non possono essere resi per posta vanno ritirati a cura e spese del professionista (art. 57 Cod. Cons.). Non devi smontare l'impianto, trasportarlo o anticipare costi di rimozione: basta metterlo a disposizione." },
      { q: "Devo pagare qualcosa per i lavori già eseguiti?", a: "Solo se avevi chiesto espressamente l'esecuzione durante il periodo di recesso ed eri stato correttamente informato: in quel caso è dovuto un importo proporzionale (art. 57 Cod. Cons.). Se l'informativa sul recesso mancava, di regola l'addebito non è dovuto. È un punto tecnico da verificare sui documenti prima di riconoscere qualsiasi somma." },
      { q: "L'azienda è fallita e l'impianto non è finito: che opzioni ho?", a: "Il recupero verso l'azienda passa dalla procedura concorsuale, con tempi lunghi. La leva più concreta resta il finanziamento collegato: verso la finanziaria, soggetto solvibile, si fanno valere il recesso se ancora nei termini o l'inadempimento del fornitore ex art. 125-quinquies TUB, per fermare le rate e recuperare quanto versato." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Mandaci il contratto: la prima cosa da verificare è se contiene l'informativa sul recesso. Se manca, i tempi cambiano completamente, e con loro la strategia. Puoi allegare il plico dalla pagina contatti e ricevere un riscontro sulla verifica dei termini. Se invece i termini sono decorsi ma l'impianto produce meno del promesso, leggi [la guida su cosa chiedere quando il fotovoltaico non rende](/guide/fotovoltaico-non-produce); per il quadro generale sull'annullamento dei contratti, c'è la guida dedicata. È disponibile anche il modello di comunicazione di recesso da adattare al tuo caso." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
