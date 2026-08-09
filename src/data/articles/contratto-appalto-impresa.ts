import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "contratto-appalto-impresa",
  title: "Il contratto d'appalto che protegge l'impresa: le dodici clausole che contano",
  excerpt:
    "A corpo o a misura, penale con tetto, collaudo con silenzio-assenso, varianti solo per iscritto, clausola risolutiva espressa: le dodici clausole che decidono chi sopporta i rischi del cantiere.",
  category: "Imprese",
  date: "Agosto 2026",
  readTime: "17 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "contratto di appalto edile modello",
    "clausole contratto appalto tutela impresa",
    "contratto appalto privato cosa deve contenere",
    "appalto a corpo o a misura differenza",
    "capitolato speciale appalto privato",
  ],
  intro:
    "Un contratto d'appalto che protegge l'impresa definisce oggetto e allegati, sceglie consapevolmente tra corpo e misura, fissa pagamenti per SAL con interessi di mora, impone la forma scritta per le varianti e prevede penale con tetto, collaudo con silenzio-assenso e clausola risolutiva espressa. Dodici clausole che decidono chi sopporta i rischi del cantiere, prima che nascano.",
};

export const seo = {
  seoTitle: "Contratto di Appalto Edile: le 12 Clausole per l'Impresa",
  metaDescription:
    "A corpo o a misura, penale con tetto, collaudo con silenzio-assenso, varianti scritte, clausola risolutiva: le 12 clausole che proteggono l'impresa edile.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: nell'appalto privato quasi tutte le regole del codice civile (artt. 1655 e ss. c.c.) sono derogabili, quindi è il contratto a decidere chi sopporta ciascun rischio. Il termine: le clausole si negoziano prima della firma; dopo, si subiscono per tutta la durata del cantiere. L'azione: verificare le dodici clausole una per una prima di firmare, o far rivedere la bozza in pochi giorni." },

    { type: "h2", text: "Perché il modello scaricato da internet ti costa più di quanto risparmi?", id: "modello-internet" },
    { type: "p", text: "Il modello generico scaricato online ha un difetto strutturale: è scritto per nessuno, e quindi non alloca i rischi di nessun cantiere in particolare. Nel migliore dei casi ripete il codice civile — che si applicherebbe comunque — e nel peggiore ricalca schemi pensati per il committente, con penali senza tetto e pagamenti condizionati a eventi che l'impresa non controlla. Il risparmio è di qualche centinaio di euro; l'esposizione, su una commessa media, di decine di migliaia." },
    { type: "p", text: "Il punto che sfugge è che nell'appalto privato la maggior parte delle norme del codice è derogabile: art. 1659 c.c. sulle varianti, art. 1664 c.c. sulla revisione dei prezzi, art. 1665 c.c. sul collaudo funzionano come regole di default che il contratto può migliorare o peggiorare. Chi firma senza leggere non sta accettando \"le regole standard\": sta accettando la versione delle regole scritta dall'altra parte. E le clausole mancanti pesano quanto quelle sbagliate, perché il silenzio del contratto lascia i vuoti che il contenzioso poi riempie." },

    { type: "figure", slot: "contratto-appalto-impresa-1", alt: "Contratto d'appalto sul tavolo, penna appoggiata sulla pagina delle clausole", caption: "Le clausole che contano stanno in quattro righe: penale con tetto, varianti, collaudo, interessi." },

    { type: "h2", text: "A corpo o a misura: quale sposta il rischio su di te?", id: "corpo-misura" },
    { type: "p", text: "È la prima scelta del contratto e quella che sposta più valore. Nell'appalto a corpo il prezzo è globale e invariabile: l'impresa si impegna a realizzare l'opera descritta negli elaborati per una cifra fissa, e il rischio delle quantità — lo scavo più profondo del previsto, i metri quadri contati male — resta a suo carico. Nell'appalto a misura si pattuiscono prezzi unitari e si contabilizzano le quantità effettivamente eseguite: il rischio delle quantità torna al committente." },
    { type: "table", headers: ["Aspetto", "A corpo", "A misura"], rows: [
      ["Prezzo", "Globale e fisso, riferito agli elaborati", "Prezzi unitari per le quantità reali"],
      ["Rischio quantità", "Sull'impresa", "Sul committente"],
      ["Contabilità", "Percentuali di avanzamento", "Misurazioni in contraddittorio"],
      ["Varianti", "Ogni extra va formalizzato, o si perde nel \"prezzo chiuso\"", "Le maggiori quantità rientrano nei prezzi unitari"],
      ["Quando conviene all'impresa", "Solo con progetto esecutivo completo e computo verificato", "Ristrutturazioni e lavori con incognite (sottoservizi, esistente)"],
    ] },
    { type: "p", text: "La regola pratica: a corpo solo se hai potuto verificare un progetto esecutivo completo e rifare il computo con i tuoi numeri; a misura ogni volta che l'opera contiene incognite, come accade in quasi tutte le ristrutturazioni. Le formule ibride sono legittime — corpo per le opere definite, misura per le lavorazioni a rischio — ma vanno scritte con precisione, indicando quale criterio si applica a quale categoria di lavori." },

    { type: "h2", text: "Le dodici clausole, una per una", id: "dodici-clausole" },
    { type: "h3", text: "1. Oggetto e allegati: cosa è compreso e cosa no" },
    { type: "p", text: "L'oggetto rinvia a capitolato, elaborati e computo, tutti allegati e firmati pagina per pagina, con una clausola che fissa l'ordine di prevalenza in caso di contrasto tra documenti. Altrettanto importante è l'elenco delle esclusioni: opere provvisionali, allacci, oneri di discarica, pratiche edilizie. La metà delle liti su \"questo era compreso\" nasce da contratti che non dicono che cosa non lo era." },
    { type: "h3", text: "2. Corrispettivo e natura del prezzo" },
    { type: "p", text: "Il contratto deve dichiarare espressamente se l'appalto è a corpo, a misura o misto, e per ciascuna parte indicare la base: le tavole di riferimento per il corpo, l'elenco prezzi unitari per la misura. Un contratto che tace sulla natura del prezzo consegna la questione all'interpretazione del giudice, cioè a tre anni di causa su un punto che una riga avrebbe risolto." },
    { type: "h3", text: "3. Pagamenti per SAL con termini certi" },
    { type: "p", text: "I pagamenti vanno agganciati a eventi oggettivi — stati di avanzamento a percentuali o importi definiti — con un termine di pagamento in giorni dalla presentazione di ciascun SAL e il richiamo espresso agli interessi di mora del D.lgs. 231/2002, che tra imprese decorrono comunque ma scritti nel contratto scoraggiano il ritardo. Vietato accettare formule come \"pagamento a discrezione del DL\" o senza data: un credito senza scadenza è un credito che non scade mai." },
    { type: "h3", text: "4. Sospensione dei lavori per mancato pagamento" },
    { type: "p", text: "L'eccezione di inadempimento dell'art. 1460 c.c. esiste anche senza patto, ma usarla in cantiere senza una clausola espressa espone a contestazioni sulla proporzionalità. La clausola giusta la trasforma in un automatismo: decorsi ad esempio quindici giorni dalla scadenza di un SAL non pagato, l'impresa può sospendere i lavori senza responsabilità e i termini di consegna slittano di pari durata. È la clausola che riequilibra il potere negoziale a cantiere aperto." },
    { type: "h3", text: "5. Varianti solo per iscritto, con prezzo concordato prima" },
    { type: "p", text: "La clausola recepisce l'art. 1659 c.c. e lo rende operativo: nessuna variante viene eseguita senza conferma scritta — bastano PEC o modulo firmato — con prezzo e impatto sui tempi definiti prima dell'esecuzione, e con prezzi agganciati all'elenco contrattuale o a un listino richiamato. Protegge nei due sensi: l'impresa incassa gli extra, il committente non se li vede addebitare a sorpresa." },
    { type: "h3", text: "6. Cronoprogramma e proroghe automatiche" },
    { type: "p", text: "Il termine di consegna deve convivere con un elenco di eventi che lo sospendono automaticamente: varianti richieste dal committente, ritardi nelle forniture o nelle decisioni a suo carico, maltempo documentato, ritardi delle autorizzazioni amministrative. Senza questa clausola ogni variante allunga il lavoro ma non il termine, e la penale matura su un ritardo che l'impresa non ha causato." },
    { type: "h3", text: "7. Penale con tetto massimo" },
    { type: "p", text: "La penale per ritardo (art. 1382 c.c.) è legittima e quasi inevitabile; quella pericolosa è la penale senza limite. La versione equilibrata prevede un importo giornaliero proporzionato, una franchigia iniziale di qualche giorno e soprattutto un tetto massimo — tipicamente il 10% del corrispettivo. Il giudice può ridurre la penale manifestamente eccessiva ex art. 1384 c.c., ma è una scommessa a valle: il tetto scritto è una certezza a monte." },
    { type: "h3", text: "8. Revisione del prezzo per sopravvenienze" },
    { type: "p", text: "L'art. 1664 c.c. concede la revisione solo quando aumenti o diminuzioni nei costi di materiali e mano d'opera, dovuti a circostanze imprevedibili, superano il decimo del prezzo complessivo — e solo per l'eccedenza. Dopo gli anni di volatilità dei prezzi dei materiali, lasciare il default è imprudente: la clausola migliorativa abbassa la soglia o aggancia le voci più esposte a un indice, con un meccanismo di adeguamento definito. Attenzione al rovescio: molti modelli di parte committente escludono del tutto l'art. 1664, ed è una rinuncia che va vista prima di firmare." },
    { type: "h3", text: "9. Consegna e collaudo con silenzio-assenso" },
    { type: "p", text: "L'art. 1665 c.c. dà al committente il diritto di verificare l'opera prima della consegna, ma non fissa un calendario. La clausola giusta sì: la verifica va compiuta entro un termine — ad esempio trenta giorni dalla comunicazione di fine lavori — decorso il quale, senza contestazioni scritte, l'opera si intende accettata. Va aggiunto che la consegna anticipata o l'utilizzo dell'opera equivalgono ad accettazione. Senza questi termini, il saldo resta appeso a un collaudo che il committente può semplicemente non convocare mai." },
    { type: "h3", text: "10. Ritenute di garanzia con svincolo automatico" },
    { type: "p", text: "La ritenuta di garanzia sui SAL è prassi accettabile se contenuta — di norma il 5% — e se lo svincolo è automatico: all'accettazione dell'opera, anche per silenzio-assenso, o al più tardi a una data certa. La ritenuta senza termine di svincolo è un modo elegante per non pagare l'ultimo 5% per anni. In alternativa si può pattuire la sostituzione della ritenuta con una garanzia fideiussoria, che libera cassa senza togliere tutela al committente." },
    { type: "h3", text: "11. Clausola risolutiva espressa" },
    { type: "p", text: "L'art. 1456 c.c. consente di prevedere che il contratto si risolva di diritto al verificarsi di inadempimenti specifici: per l'impresa, il caso da scrivere è il mancato pagamento di un SAL protratto oltre un termine dato — ad esempio trenta giorni dalla scadenza. La clausola deve indicare gli obblighi specifici, non un generico \"ogni inadempimento\", e va accompagnata dal diritto al corrispettivo per i lavori eseguiti e al risarcimento. È l'uscita di sicurezza che evita di restare incatenati a un committente che ha smesso di pagare." },
    { type: "h3", text: "12. Foro, mediazione e spese" },
    { type: "p", text: "L'ultima clausola è quella che nessuno legge e che decide dove e come si litiga: il foro esclusivo — se hai la forza negoziale, quello della sede dell'impresa — e l'eventuale tentativo di mediazione prima della causa. Utile aggiungere chi sopporta le spese tecniche di eventuali accertamenti in corso d'opera. Sono dettagli finché va tutto bene; quando va male, spostano tempi e costi dell'intero contenzioso." },

    { type: "p", text: "Il percorso per arrivare alla firma con queste clausole al loro posto è più corto di quanto sembri:" },
    { type: "ol", items: [
      "Prima dell'offerta: definisci capitolato, computo ed elenco esclusioni — sono i documenti che le clausole 1 e 2 richiameranno",
      "Alla ricezione della bozza: revisione legale delle dodici clausole, in genere 2-3 giorni lavorativi",
      "Entro 7 giorni: negoziazione dei punti critici — pagamenti, penale, collaudo, varianti — con proposte di riformulazione scritte",
      "Alla firma: allegati siglati pagina per pagina e clausola di prevalenza tra documenti verificata",
      "Entro 10 giorni dalla firma: scambio di polizze, garanzie e comunicazioni previste dal contratto, con prova scritta dell'invio",
    ] },

    { type: "h2", text: "Le tre clausole che il committente cerca di infilare — e perché rifiutarle", id: "clausole-da-rifiutare" },
    { type: "ul", items: [
      "La penale senza tetto: un importo giornaliero anche modesto, moltiplicato per un ritardo lungo e senza massimale, può superare il margine dell'intera commessa. Controproposta: tetto al 10% del corrispettivo e franchigia iniziale.",
      "Il saldo \"a collaudo favorevole\" senza termine: subordina il pagamento a un evento che dipende solo dal committente, che può rinviare il collaudo a tempo indeterminato. Controproposta: collaudo entro trenta giorni dalla fine lavori, con silenzio-assenso.",
      "La facoltà illimitata di varianti senza adeguamento: la formula \"il committente può richiedere in ogni tempo modifiche che l'appaltatore si obbliga a eseguire\" senza aggancio a prezzo e tempi ribalta l'art. 1661 c.c. contro l'impresa. Controproposta: varianti solo per iscritto, con prezzo concordato prima e proroga automatica del cronoprogramma.",
    ] },

    { type: "h2", text: "Cosa cambia nel subappalto?", id: "subappalto" },
    { type: "p", text: "Se lavori come appaltatore che affida parti dell'opera in subappalto, il contratto a valle deve ribaltare le condizioni di quello a monte — termini, penali, disciplina delle varianti, collaudo — perché ogni disallineamento è un rischio che resta in mezzo, cioè su di te. In più vanno presidiati due punti che il codice e le leggi speciali rendono ineludibili. Il primo: la responsabilità solidale per retribuzioni e contributi dei dipendenti del subappaltatore, che l'art. 29, comma 2, del D.lgs. 276/2003 estende al committente imprenditore entro due anni dalla cessazione dell'appalto — da gestire con verifica periodica del DURC del subappaltatore e clausole di sospensione dei pagamenti in caso di irregolarità." },
    { type: "p", text: "Il secondo è il regresso per i vizi: l'art. 1670 c.c. concede all'appaltatore l'azione verso il subappaltatore solo se gli comunica la denunzia ricevuta dal committente entro sessanta giorni, a pena di decadenza. È un termine che nessun gestionale ricorda da solo: va scritto nel contratto di subappalto e in una procedura interna, perché perderlo significa pagare al committente vizi causati da altri senza poterli ribaltare. Se lavori spesso in subappalto, il tema merita la guida dedicata al contratto di subappalto." },

    { type: "figure", slot: "contratto-appalto-impresa-2", alt: "Due contratti a confronto, uno generico e uno con le clausole di tutela evidenziate", caption: "Stesso cantiere, stesso ritardo, esiti economici opposti: la differenza è nel testo firmato." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Due imprese, lo stesso identico contenzioso, esiti opposti. Entrambe realizzano una villa per circa 300.000 euro; entrambe subiscono un ritardo di quattro mesi, causato in parte da varianti del committente e in parte da ritardi propri. L'Impresa A ha firmato un modello generico scaricato online: penale di 200 euro al giorno senza tetto massimo, nessuna clausola sulla sospensione dei termini in caso di varianti, saldo \"a collaudo favorevole\" senza indicazione di un termine. Risultato: penale teorica di 24.000 euro, saldo bloccato a tempo indeterminato perché il committente non convoca il collaudo, nessuno strumento per far decorrere i termini." },
    { type: "p", text: "L'Impresa B ha lo stesso contratto con quattro righe diverse: penale con tetto massimo al 10% del corrispettivo, clausola che sospende automaticamente il cronoprogramma per il tempo necessario all'esecuzione delle varianti richieste, collaudo che si intende favorevole se non contestato entro trenta giorni dalla comunicazione di fine lavori, interessi di mora commerciali espressamente richiamati. Risultato: penale contenuta e in gran parte neutralizzata dalla sospensione per le varianti, saldo esigibile alla scadenza dei trenta giorni, interessi che maturano da quel momento." },
    { type: "p", text: "La differenza economica tra i due contratti, a parità di cantiere e di comportamento delle parti, supera i 40.000 euro. Il tempo necessario a scrivere quelle quattro righe: mezza giornata, una volta sola, perché poi diventano il modello standard dell'impresa per tutti i cantieri successivi. È il senso dell'intera guida: il contratto non serve a vincere la causa, serve a non farla." },
    { type: "note", text: "L'errore da non fare: firmare in fretta la bozza del committente per paura di perdere il lavoro, contando di \"sistemare le cose\" a cantiere avviato. Dopo la firma ogni clausola si subisce, e la forza negoziale dell'impresa cala a ogni SAL maturato e non ancora incassato. Lo scenario descritto è illustrativo: l'esito concreto dipende sempre dal testo effettivamente firmato e dalle circostanze specifiche." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Meglio l'appalto a corpo o a misura per l'impresa?", a: "Dipende dal grado di definizione del progetto. A corpo conviene solo con un progetto esecutivo completo e un computo che hai verificato con i tuoi numeri, perché il rischio delle quantità resta su di te. A misura è preferibile quando l'opera contiene incognite, come nelle ristrutturazioni. Le formule miste sono legittime, purché il contratto dica quale criterio vale per quali lavorazioni." },
      { q: "Qual è una penale ragionevole in un appalto privato?", a: "Un importo giornaliero proporzionato al valore della commessa, una franchigia iniziale di qualche giorno e un tetto massimo, di norma il 10% del corrispettivo. Il giudice può ridurre la penale manifestamente eccessiva ex art. 1384 c.c., ma è un rimedio incerto e tardivo: il tetto scritto in contratto è l'unica protezione certa." },
      { q: "Come mi tutelo dalle varianti richieste in corso d'opera?", a: "Con una clausola che impone la forma scritta per ogni variante, il prezzo concordato prima dell'esecuzione e la proroga automatica del cronoprogramma per il tempo necessario. L'art. 1659 c.c. richiede comunque la prova scritta dell'autorizzazione: la clausola trasforma la norma in una procedura di cantiere, con moduli di conferma pronti da far firmare." },
      { q: "Serve la fideiussione del committente privato?", a: "Non è obbligatoria, ma su commesse rilevanti o con committenti di cui non conosci la solidità è una tutela concreta: una garanzia a prima richiesta sul pagamento del corrispettivo, anche solo per la quota di saldo. L'alternativa minima è la verifica preventiva di capienza del committente e pagamenti per SAL ravvicinati, che limitano l'esposizione massima." },
      { q: "Posso inserire la clausola risolutiva espressa per il mancato pagamento?", a: "Sì. L'art. 1456 c.c. consente di prevedere la risoluzione di diritto per inadempimenti specificamente indicati: il caso tipico è il mancato pagamento di un SAL oltre un termine dato, ad esempio trenta giorni dalla scadenza. La clausola deve indicare obblighi determinati, non un generico \"qualsiasi inadempimento\", e va abbinata al diritto al corrispettivo maturato e al risarcimento." },
      { q: "Il capitolato è obbligatorio nell'appalto privato?", a: "No, nessuna norma lo impone, ed è proprio questo il problema: senza capitolato il contenuto dell'opera si ricostruisce da preventivi, messaggi e testimonianze. Un capitolato anche sintetico, allegato e firmato, con l'elenco delle esclusioni e la clausola di prevalenza tra documenti, previene la maggior parte delle liti su \"questo era compreso nel prezzo\"." },
      { q: "Posso sospendere i lavori se il committente non paga un SAL?", a: "In linea di principio sì, grazie all'eccezione di inadempimento dell'art. 1460 c.c., ma la sospensione deve essere proporzionata e in buona fede, e senza una clausola espressa il confine è discusso. La clausola di sospensione automatica — decorso un dato numero di giorni dal SAL non pagato, con slittamento dei termini — toglie l'incertezza e l'alibi alla controparte." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Portaci il contratto che stai per firmare: rivederlo prima costa una frazione di quello che costa discuterlo dopo. Contattaci dalla pagina contatti: esaminiamo la bozza clausola per clausola, ti segnaliamo quelle da rifiutare e ti proponiamo le riformulazioni, in tempi compatibili con la trattativa. Per completare il quadro leggi anche la guida al recupero dei crediti dell'impresa, quella sui lavori extra ordinati a voce e quella sul contratto di subappalto: sono i tre contenziosi che un contratto scritto bene evita in partenza." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
