import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "preventivo-sforato",
  title: "Il preventivo è raddoppiato: devo pagare i lavori extra che non ho autorizzato?",
  excerpt:
    "La fattura finale è molto più alta del preventivo? Nell'appalto a corpo il prezzo è fisso e l'art. 1659 c.c. richiede l'autorizzazione scritta per le variazioni: ecco cosa è dovuto e cosa no.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "13 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "preventivo sforato lavori extra non concordati",
    "impresa chiede più soldi del preventivo",
    "devo pagare varianti non autorizzate",
    "appalto a corpo o a misura chi rischia",
    "preventivo non vincolante è vero",
    "contestare fattura impresa edile troppo alta",
  ],
  intro:
    "Nell'appalto a corpo il prezzo pattuito è fisso e l'impresa non può chiedere di più per maggiori quantità, salvo variazioni richieste per iscritto dal committente. L'art. 1659 c.c. vieta all'appaltatore di apportare variazioni senza autorizzazione scritta: i lavori extra non concordati, di regola, non vanno pagati.",
};

export const seo = {
  seoTitle: "Preventivo Sforato: Devo Pagare i Lavori Extra?",
  metaDescription:
    "L'art. 1659 c.c. vieta variazioni senza autorizzazione scritta: nell'appalto a corpo i lavori extra non concordati non si pagano. Come contestare.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: l'appaltatore non può variare l'opera senza autorizzazione del committente, e l'autorizzazione si prova per iscritto (art. 1659 c.c.); nell'appalto a corpo il rischio delle quantità è dell'impresa. Il termine: la contestazione della fattura va fatta subito per iscritto; se arriva un decreto ingiuntivo, l'opposizione ha 40 giorni dalla notifica. L'azione: confronto voce per voce, risposta analitica con offerta della parte dovuta, eventuale perizia sui prezzi." },

    { type: "h2", text: "Preventivo, contratto a corpo e contratto a misura: tre cose diverse", id: "tre-cose-diverse" },
    { type: "p", text: "\"Il preventivo non è vincolante\" è una frase che le imprese ripetono spesso, ma va capita bene. Il preventivo in sé è una proposta: finché non lo accetti, non vincola nessuno. Nel momento in cui lo firmi o lo accetti anche solo per fatti concludenti — dai il via ai lavori su quella base — diventa il contenuto economico del contratto d'appalto, e da lì in poi vincola eccome. La vera domanda è come è stato pattuito il prezzo." },
    { type: "p", text: "Nell'appalto a corpo (o a forfait) il prezzo è determinato globalmente per l'intera opera descritta: 84.000 euro per la ristrutturazione dell'appartamento come da capitolato. Nell'appalto a misura il prezzo si calcola applicando prezzi unitari alle quantità effettivamente eseguite: tot euro al metro quadro di intonaco, al metro lineare di battiscopa. Il codice consente entrambe le forme (art. 1657 c.c. regola i casi in cui il corrispettivo non è determinato), ma la ripartizione del rischio è opposta." },
    { type: "p", text: "Nel contratto a corpo il rischio delle quantità è dell'impresa: se ha misurato male e servono più metri quadri di quanto stimato, il problema è suo. È il senso stesso di quel tipo di contratto, ed è il motivo per cui il prezzo a corpo è di norma leggermente più alto di quello a misura. Nel contratto a misura, al contrario, le maggiori quantità realmente eseguite vanno pagate ai prezzi unitari pattuiti, e la discussione si sposta sulla contabilità." },

    { type: "figure", slot: "preventivo-sforato-1", alt: "Preventivo e fattura finale affiancati, con le voci divergenti evidenziate", caption: "Il confronto voce per voce è il primo lavoro da fare, e quasi sempre è rivelatore." },

    { type: "h2", text: "Cosa dice l'art. 1659 c.c. dal lato del committente?", id: "art-1659" },
    { type: "p", text: "L'art. 1659 c.c. è la norma da conoscere a memoria in queste situazioni. Primo comma: l'appaltatore non può apportare variazioni alle modalità convenute dell'opera se il committente non le ha autorizzate. Secondo comma: l'autorizzazione si deve provare per iscritto. Terzo comma: anche quando le variazioni sono state autorizzate, se il prezzo dell'intera opera è stato determinato globalmente l'appaltatore non ha diritto a compenso per variazioni e aggiunte, salvo diversa pattuizione." },
    { type: "p", text: "Letta dal lato del committente, la norma dice tre cose molto concrete. I lavori extra decisi dall'impresa di propria iniziativa non vanno pagati, e non basta che l'impresa li abbia effettivamente eseguiti: serve la tua autorizzazione, provata per iscritto. Nel contratto a corpo, perfino le varianti autorizzate non danno diritto a un compenso aggiuntivo se non è stato pattuito espressamente. E \"per iscritto\" non significa per forza un atto notarile: anche uno scambio di messaggi in cui approvi la lavorazione e il prezzo può costituire la prova richiesta." },
    { type: "p", text: "Il quadro si completa con le norme vicine: le variazioni necessarie per eseguire l'opera a regola d'arte vanno concordate, e in mancanza di accordo le determina il giudice (art. 1660 c.c.); il committente può ordinare varianti entro il sesto del prezzo complessivo, pagandole (art. 1661 c.c.); e l'impresa può chiedere la revisione del prezzo solo per aumenti dei costi di materiali e manodopera oltre il decimo, dovuti a circostanze imprevedibili (art. 1664 c.c.). Fuori da questi binari, l'aumento non ha base legale." },

    { type: "h2", text: "Quando l'aumento è legittimo e quando no?", id: "aumento-legittimo" },
    { type: "p", text: "Non tutto ciò che eccede il preventivo è indebito: la fattura finale va scomposta, perché dentro \"gli extra\" convivono voci con destini giuridici opposti. La tabella riassume i casi ricorrenti." },
    { type: "table", headers: ["Tipo di aumento", "Appalto a corpo", "Appalto a misura"], rows: [
      ["Maggiori quantità su voci già previste (più mq di intonaco, più ml di battiscopa)", "Non dovuto: il rischio delle quantità è dell'impresa", "Dovuto, ai prezzi unitari pattuiti e previa verifica delle misure"],
      ["Lavori extra richiesti dal committente per iscritto (messaggi, email)", "Dovuto, se risultano richiesta e prezzo; senza patto sul prezzo si liquida in base a tariffe o usi", "Dovuto, ai prezzi unitari pattuiti o concordati"],
      ["Variazioni decise dall'impresa senza autorizzazione scritta", "Non dovuto (art. 1659, commi 1 e 2, c.c.)", "Non dovuto (art. 1659, commi 1 e 2, c.c.)"],
      ["Variazioni necessarie per la regola d'arte, mai concordate né comunicate", "Da concordare ex art. 1660 c.c.; in difetto decide il giudice", "Da concordare ex art. 1660 c.c.; in difetto decide il giudice"],
      ["Rincaro di materiali e manodopera", "Solo oltre il decimo e per circostanze imprevedibili (art. 1664 c.c.)", "Solo oltre il decimo e per circostanze imprevedibili (art. 1664 c.c.)"],
    ] },
    { type: "h2", text: "Come si contesta una fattura gonfiata?", id: "come-contestare" },
    { type: "p", text: "La contestazione efficace non è il rifiuto in blocco né il silenzio: è la risposta scritta e analitica. Il rifiuto totale di una fattura che contiene anche voci dovute ti mette dalla parte del torto per quella parte; il silenzio, al contrario, rischia di essere letto come acquiescenza e lascia correre gli interessi. La strada corretta sta nel mezzo: riconoscere espressamente ciò che è dovuto, contestare motivatamente il resto, voce per voce." },
    { type: "ol", items: [
      "Recupera i documenti: preventivo accettato, contratto, capitolato, messaggi ed email con l'impresa, foto del cantiere, fattura finale",
      "Confronta la fattura con il preventivo voce per voce e classifica ogni differenza: richiesta da te per iscritto, maggiore quantità, variazione mai autorizzata, imprevisto mai comunicato",
      "Entro 15 giorni dal ricevimento della fattura invia una risposta scritta via PEC o raccomandata: riconosci la parte dovuta, contesta analiticamente il resto e offri il pagamento della somma non contestata",
      "Paga la parte riconosciuta: blocca gli interessi su quella somma e dimostra buona fede",
      "Se l'impresa insiste, proponi una verifica tecnica congiunta o una mediazione; una perizia sui prezzi a prezzario spesso chiude la trattativa",
      "Se ricevi un decreto ingiuntivo, hai 40 giorni dalla notifica per proporre opposizione: non lasciar decorrere il termine, perché il decreto non opposto diventa definitivo",
    ] },

    { type: "h2", text: "La perizia sui prezzi e i prezzari di riferimento", id: "perizia-prezzi" },
    { type: "p", text: "Quando la distanza tra le parti resta ampia, lo strumento che oggettivizza la discussione è la perizia estimativa: un tecnico confronta le lavorazioni effettivamente eseguite con il preventivo e valorizza le voci contestate secondo i prezzari di riferimento — i prezzari regionali delle opere pubbliche, il prezzario DEI, le tariffe correnti di zona. Se l'impresa pretende 240 euro al metro quadro per una lavorazione che il prezzario regionale valorizza 96, la trattativa cambia tono in fretta." },
    { type: "p", text: "La perizia serve anche in chiave processuale: l'art. 1657 c.c. prevede che, in mancanza di accordo sul corrispettivo, questo si calcoli con riferimento alle tariffe esistenti o agli usi. Per le voci extra effettivamente dovute ma mai quotate — la richiesta c'era, il prezzo no — è esattamente il criterio che il giudice applicherà, di norma attraverso una consulenza tecnica d'ufficio. Arrivare al tavolo con una perizia già impostata su quei criteri significa anticipare l'esito e negoziare da una posizione documentata." },

    { type: "h2", text: "Se hai già pagato: si può recuperare?", id: "gia-pagato" },
    { type: "p", text: "Aver pagato non significa aver rinunciato. Chi ha versato somme non dovute — magari sotto la pressione della consegna del cantiere o della minaccia di fermare i lavori — può ripeterle come indebito oggettivo ex art. 2033 c.c.: chi ha eseguito un pagamento non dovuto ha diritto di ottenerne la restituzione. L'azione si prescrive nel termine ordinario di dieci anni dal pagamento (art. 2946 c.c.)." },
    { type: "p", text: "Il punto delicato è la prova: pagare senza riserve una fattura dettagliata può essere letto come riconoscimento. Per questo, se paghi per sbloccare una situazione, accompagna sempre il bonifico con una comunicazione scritta in cui dichiari di pagare con riserva di ripetizione delle somme contestate. Una riga che tiene aperta la porta della restituzione." },

    { type: "figure", slot: "preventivo-sforato-2", alt: "Ristrutturazione in corso in un appartamento, con lavorazioni aggiuntive in vista", caption: "In un appalto a corpo il rischio delle maggiori quantità resta sull'impresa." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Preventivo accettato per la ristrutturazione di un appartamento: 84.000 euro, voci dettagliate e dicitura \"lavori a corpo\". A fine cantiere la fattura finale è di 127.500 euro, giustificata con \"imprevisti strutturali, maggiori quantità e migliorie richieste in corso d'opera\". Il confronto voce per voce rivela tre gruppi molto diversi. Circa 9.000 euro derivano da lavorazioni realmente richieste dai committenti, documentate da messaggi con foto: sono dovute. Circa 18.000 riguardano maggiori quantità su voci già comprese nel corpo — più metri quadri di intonaco, più metri lineari di battiscopa: in un contratto a corpo non sono dovute, perché il rischio delle quantità è dell'impresa. I restanti 16.500 sono \"imprevisti\" mai comunicati prima dell'esecuzione né documentati: manca l'autorizzazione scritta e manca perfino l'informazione preventiva." },
    { type: "p", text: "La mossa: risposta scritta e analitica alla fattura, con riconoscimento espresso dei 9.000 euro dovuti, contestazione motivata voce per voce del resto e offerta immediata di pagamento della somma non contestata. Questo blocca gli interessi sulla parte riconosciuta, dimostra buona fede e mette l'impresa nella posizione scomoda di dover agire per la sola parte controversa. Il bivio: se il contratto fosse stato \"a misura\", il ragionamento sarebbe opposto — le maggiori quantità effettivamente eseguite andrebbero pagate ai prezzi unitari pattuiti, e la contestazione si sposterebbe sulla contabilità e sulla verifica delle misure realmente realizzate. È per questo che la prima cosa da guardare non è la fattura, ma come è scritto il contratto." },
    { type: "note", text: "L'errore da non fare: rifiutare in blocco l'intera fattura o, all'opposto, pagare tutto \"per chiudere\" senza riserva scritta. Nel primo caso finisci in mora sulla parte dovuta; nel secondo rischi di veder letta la tua condotta come riconoscimento del debito. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende dal contratto e dalle prove disponibili." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Il preventivo firmato è vincolante?", a: "Sì: una volta accettato, il preventivo definisce il contenuto economico del contratto d'appalto e vincola entrambe le parti. L'impresa può chiedere di più solo nei casi previsti dalla legge o dal contratto: varianti richieste dal committente, variazioni necessarie concordate, revisione ex art. 1664 c.c. per rincari imprevedibili oltre il decimo." },
      { q: "Di quanto può aumentare legittimamente il prezzo?", a: "Non esiste una percentuale di tolleranza generale. Nel contratto a corpo il prezzo resta fisso salvo varianti autorizzate con compenso pattuito; la revisione per il rincaro di materiali e manodopera scatta solo per la parte che eccede il decimo del prezzo, se dovuta a circostanze imprevedibili (art. 1664 c.c.)." },
      { q: "Devo pagare lavori extra che non ho mai autorizzato per iscritto?", a: "Di regola no: l'art. 1659 c.c. vieta all'appaltatore le variazioni non autorizzate dal committente e richiede che l'autorizzazione sia provata per iscritto. Fanno eccezione le variazioni necessarie per eseguire l'opera a regola d'arte, che però vanno concordate ex art. 1660 c.c. e, in difetto, determinate dal giudice." },
      { q: "I messaggi WhatsApp valgono come autorizzazione scritta?", a: "Possono valere: uno scambio in cui approvi una lavorazione aggiuntiva e il relativo prezzo è un documento che prova l'accordo. Per lo stesso motivo, attenzione a cosa scrivi in corso d'opera: un \"ok procedete\" generico su una variante costosa può essere usato dall'impresa come prova dell'autorizzazione." },
      { q: "Posso chiedere una perizia sui prezzi applicati?", a: "Sì. Un tecnico può confrontare le voci della fattura con i prezzari di riferimento — prezzari regionali, DEI, tariffe locali — e con le quantità realmente eseguite. In giudizio la valutazione passa di norma da una consulenza tecnica d'ufficio, ma una perizia di parte ben fatta spesso chiude la trattativa prima." },
      { q: "L'impresa minaccia di fermare il cantiere se non pago gli extra: cosa faccio?", a: "Metti tutto per iscritto: chiedi l'elenco analitico degli extra pretesi con i relativi titoli, riconosci ciò che è dovuto e contesta il resto. La sospensione dei lavori per il mancato pagamento di somme non dovute è un inadempimento dell'impresa, che può fondare la risoluzione e il risarcimento." },
      { q: "Ho ricevuto un decreto ingiuntivo per gli extra: quanto tempo ho?", a: "Hai 40 giorni dalla notifica per proporre opposizione, nella quale far valere l'art. 1659 c.c. e la natura a corpo del contratto. Se non ti opponi, il decreto diventa definitivo anche per somme che avresti potuto contestare con successo: è il termine più importante di tutta la vicenda." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Mandaci preventivo, contratto e fattura finale: il confronto voce per voce dice subito quanto dell'aumento è dovuto e quanto no, e da lì si imposta la risposta scritta. Contattaci dalla pagina contatti per una valutazione dei documenti. Sul tema puoi leggere anche la guida all'opposizione al decreto ingiuntivo e quelle sulle clausole del contratto d'appalto e sui difetti dei lavori: molte fatture gonfiate nascono da contratti che non fissavano né il tipo di prezzo né la gestione delle varianti." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
