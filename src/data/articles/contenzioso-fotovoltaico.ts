import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "contenzioso-fotovoltaico",
  title: "Contenzioso fotovoltaico: le cinque cause più frequenti e come si affrontano",
  excerpt:
    "Produzione sotto le promesse, infiltrazioni dal tetto, contratti firmati a casa, aziende sparite a impianto incompleto, pratiche GSE mai presentate: le cinque liti tipiche del fotovoltaico, con le prove che servono e i rimedi nell'ordine giusto.",
  category: "Verticali",
  date: "Agosto 2026",
  readTime: "16 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "contenzioso fotovoltaico",
    "causa azienda fotovoltaico",
    "impianto fotovoltaico difettoso rimedi",
    "risoluzione contratto fotovoltaico",
    "perizia impianto fotovoltaico",
    "finanziamento collegato fotovoltaico",
  ],
  intro:
    "Il contenzioso fotovoltaico nasce quasi sempre da cinque situazioni: produzione inferiore a quella promessa, infiltrazioni dal tetto dopo il fissaggio, contratti firmati fuori dai locali commerciali, aziende sparite a impianto incompleto e pratiche GSE mai presentate. Ognuna ha una prova tipica e un rimedio diverso: sbagliare la qualificazione è l'errore che fa perdere la causa.",
};

export const seo = {
  seoTitle: "Contenzioso fotovoltaico: le 5 cause più frequenti",
  metaDescription:
    "Impianto che produce poco, infiltrazioni dal tetto, recesso, azienda sparita, pratiche GSE: le 5 liti tipiche del fotovoltaico, le prove e i rimedi.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: chi compra un impianto fotovoltaico ha diritto a un'opera funzionante e conforme a quanto promesso (artt. 1667, 1668 e 1669 c.c., art. 1490 c.c., Codice del Consumo). Il termine: 14 giorni per recedere dai contratti firmati fuori dai locali commerciali, che diventano 12 mesi e 14 giorni se l'informativa sul recesso è stata omessa (artt. 49 e 52-53 Codice del Consumo). L'azione: si parte dai dati di produzione reali e da una denuncia scritta, poi si sale la scala dei rimedi — adeguamento, riduzione del prezzo, risoluzione con risarcimento." },

    { type: "h2", text: "Perché il contenzioso fotovoltaico ha regole sue", id: "perche-diverso" },
    { type: "p", text: "Un impianto fotovoltaico non è un prodotto che funziona o non funziona: è un sistema che produce, e la produzione si misura. Nella maggior parte delle liti l'impianto è acceso, i moduli sono integri e l'inverter gira: quello che manca sono i chilowattora promessi. La controversia si sposta così dal difetto visibile al rendimento, e si vince o si perde sui numeri." },
    { type: "p", text: "La seconda particolarità è la sovrapposizione di discipline. Lo stesso contratto può essere qualificato come vendita con posa in opera o come appalto, a seconda di quanto pesa l'installazione rispetto alla fornitura. Se il cliente è un consumatore si aggiunge il Codice del Consumo, con recesso e obblighi informativi; se l'impianto è a rate entra in gioco anche la disciplina del credito." },
    { type: "p", text: "La terza è che il danno non si ferma all'impianto. Un fissaggio eseguito male sul manto di copertura produce infiltrazioni che danneggiano solaio, isolante e ambienti sottostanti, con un pregiudizio che supera spesso il valore dell'impianto. Per questo il fotovoltaico genera cause in cui convivono tre domande — rendimento mancato, danno all'immobile e sorte del finanziamento — da impostare insieme fin dalla prima lettera." },

    { type: "figure", slot: "contenzioso-fotovoltaico-1", alt: "Tetto a falda in tegole con moduli fotovoltaici installati e staffe di fissaggio in vista, fotografato dall'alto in una giornata limpida", caption: "Il punto di attacco delle staffe sul manto è dove nascono i danni più costosi: va fotografato prima che qualcuno intervenga a sistemare." },

    { type: "h2", text: "Prima causa: l'impianto produce meno di quanto promesso", id: "produzione" },
    { type: "p", text: "È la lite più frequente in assoluto. Il cliente ha firmato dopo aver visto un prospetto con una producibilità annua attesa, spesso accompagnato da un piano di rientro che confrontava la rata con il risparmio in bolletta. Dopo un anno i chilowattora sono molto inferiori e il ritorno dell'investimento si allontana. La domanda giuridica è una sola: quel numero era vincolante?" },
    { type: "p", text: "Dipende da dove compare. Se la producibilità è indicata nel contratto o nell'allegato tecnico, è parte della prestazione dovuta e il mancato raggiungimento è inadempimento. Se compare solo nel materiale promozionale o nel piano di rientro, può comunque rilevare quando ha determinato il consenso all'acquisto. Per questo la prima cosa da salvare è tutto il materiale commerciale: preventivo, simulazione, brochure, messaggi del venditore." },
    { type: "p", text: "Il secondo passaggio è misurare lo scostamento nel modo corretto. Non serve confrontare la produzione reale con una media nazionale o con quanto \"di solito rende\" un impianto di pari potenza. Il confronto sostenibile è con l'irraggiamento effettivamente registrato in zona nel periodo considerato, corretto per esposizione, inclinazione e ombreggiamenti: solo così si separa l'annata sfortunata dall'impianto progettato male." },
    { type: "p", text: "Le cause tecniche ricorrenti sono poche e quasi sempre di progettazione: falda con esposizione o inclinazione sbagliate, ombreggiamenti da camini, alberi o edifici vicini rilevabili con un normale sopralluogo, stringhe sottodimensionate o mal bilanciate, inverter di taglia inadeguata, moduli con degrado superiore al dichiarato. Il tema è approfondito nella guida dedicata su /guide/fotovoltaico-non-produce." },

    { type: "h2", text: "Seconda causa: infiltrazioni dal tetto dopo il fissaggio", id: "infiltrazioni" },
    { type: "p", text: "Il secondo grande filone riguarda l'acqua. Per fissare le strutture di supporto occorre intervenire sul manto: staffe che attraversano le tegole, ganci ancorati ai listelli, fori nella guaina delle coperture piane. Se il ripristino della tenuta è approssimativo, le prime piogge importanti fanno comparire macchie sui soffitti e isolante bagnato. Qui il danno all'immobile si somma al mancato rendimento e di solito lo supera." },
    { type: "p", text: "È la situazione più favorevole al committente, perché l'intervento sul tetto di un edificio esistente rientra nell'art. 1669 c.c. quando i difetti incidono su elementi essenziali o compromettono la funzionalità dell'opera. È il principio affermato dalle Sezioni Unite nel 2017 sulle opere su fabbricati preesistenti. La conseguenza è rilevante: la responsabilità si estende per dieci anni dal compimento dell'opera." },
    { type: "p", text: "Attenzione ai termini, brevi e decadenziali: denuncia entro un anno dalla scoperta e azione entro un anno dalla denuncia, il tutto dentro il decennio. \"Scoperta\" significa consapevolezza sufficientemente sicura dell'esistenza e della causa del difetto, che nelle infiltrazioni coincide di norma con la prima relazione tecnica. Rinviare l'incarico al perito per risparmiare qualche centinaio di euro è il modo più rapido per bruciare una posizione forte." },
    { type: "p", text: "La prova, qui, si costruisce con la fotografia: punti di attacco delle staffe, tipo di ripristino eseguito, stato del manto attorno ai fori, andamento delle macchie nel tempo. Se l'azienda propone di tornare a sistemare, la riparazione va accettata solo dopo aver fissato lo stato dei luoghi. Rifatto il fissaggio, dimostrare com'era prima diventa quasi impossibile." },

    { type: "h2", text: "Terza causa: contratto firmato fuori dai locali commerciali", id: "recesso" },
    { type: "p", text: "Una quota altissima dei contratti residenziali viene firmata in casa del cliente al termine di una visita commerciale, oppure in fiera. Sono contratti negoziati fuori dai locali commerciali e, se il cliente è un consumatore, seguono il Codice del Consumo agli artt. 45 e seguenti. Prima della firma il venditore deve fornire un'informativa precontrattuale completa, che comprende le informazioni sul diritto di recesso richieste dall'art. 49." },
    { type: "p", text: "Il consumatore ha quattordici giorni per recedere senza motivare e senza penalità (artt. 52 e 53 Codice del Consumo). Il termine decorre di regola dalla consegna del bene e la comunicazione va inviata in forma tracciabile, con raccomandata o PEC. È un diritto che nel fotovoltaico viene esercitato tardi, quando il cliente rilegge il piano di rientro e si accorge che i conti non tornano." },
    { type: "p", text: "Qui sta il punto che cambia molte partite: se l'informativa sul recesso non è stata fornita, il termine si estende fino a dodici mesi e quattordici giorni. Un contratto firmato più di un anno prima può quindi essere ancora sciolto. Vanno controllati la presenza del modulo nel fascicolo consegnato, il suo contenuto e la data. Il funzionamento pratico è spiegato su /guide/recesso-contratto-fotovoltaico." },

    { type: "h2", text: "Che fine fa il finanziamento se il contratto principale cade?", id: "finanziamento" },
    { type: "p", text: "Quasi nessuno paga l'impianto in contanti: la formula standard è il prestito finalizzato, erogato da una finanziaria convenzionata e istruito dallo stesso venditore alla firma. Quando il cliente recede o ottiene la risoluzione della fornitura, la domanda immediata è se debba continuare a pagare le rate. Per i contratti di credito collegati la risposta è negativa, secondo l'art. 125-quinquies del Testo Unico Bancario." },
    { type: "p", text: "La norma prevede che l'inadempimento del fornitore, dopo una costituzione in mora rimasta senza esito, legittimi il consumatore a chiedere la risoluzione anche del contratto di credito. In caso di recesso dal contratto principale, il credito collegato si scioglie di diritto e senza penalità. La condizione è che il finanziamento serva in via esclusiva a quell'acquisto e sia stato concluso tramite il fornitore." },
    { type: "p", text: "Sul piano operativo la regola è una sola: la finanziaria va coinvolta subito, con una comunicazione formale separata da quella al fornitore. Continuare a pagare in silenzio indebolisce la posizione, ma sospendere le rate senza aver mai scritto nulla espone a segnalazioni e decreti ingiuntivi. La sequenza corretta è costituzione in mora del fornitore, comunicazione alla finanziaria, poi gestione delle rate." },

    { type: "h2", text: "Quarta causa: azienda sparita a impianto incompleto", id: "azienda-sparita" },
    { type: "p", text: "Il quarto scenario è il più frustrante. I moduli ci sono, l'accumulo pagato non è mai arrivato, la connessione alla rete non è stata completata, le pratiche non sono state presentate. L'azienda smette di rispondere, la sede risulta chiusa, a volte è aperta una procedura concorsuale. Il cliente ha pagato — o sta pagando a rate — un impianto che non fa quello per cui è stato comprato." },
    { type: "p", text: "Il primo passo è una verifica camerale della controparte: stato della società, sede effettiva, procedure in corso, altri soggetti coinvolti nel contratto. Non di rado il contratto è intestato a una società commerciale che si è avvalsa di un'installatrice diversa, e questo apre una seconda posizione aggredibile. Vanno recuperate anche polizze, fideiussioni e garanzie del produttore su moduli e inverter, azionabili anche quando l'installatore è scomparso." },
    { type: "p", text: "Se la società è insolvente, il recupero diretto è spesso illusorio e la leva vera diventa il finanziamento: un impianto incompleto non è un impianto, e l'inadempimento è grave e conclamato. Va poi valutata subito la conservazione della prova: se lo stato dei luoghi rischia di cambiare, un accertamento tecnico preventivo lo cristallizza e spesso, da solo, porta la controparte al tavolo." },

    { type: "h2", text: "Quinta causa: pratiche amministrative e incentivi non gestiti", id: "pratiche" },
    { type: "p", text: "Il contratto tipo è quasi sempre \"chiavi in mano\": l'azienda si impegna non solo a installare, ma a curare la richiesta di connessione al distributore, la pratica presso il GSE, l'attivazione del regime di valorizzazione dell'energia immessa in rete e la documentazione per la detrazione fiscale. Quando queste attività non vengono svolte, l'impianto può essere perfetto e comunque non produrre alcun beneficio economico." },
    { type: "p", text: "Gli effetti sono concreti e quantificabili. Un impianto non allacciato non immette in rete e l'energia in eccesso viene semplicemente persa. Una pratica GSE mai presentata o presentata male fa saltare la valorizzazione dell'energia immessa. Una documentazione incompleta o intestata in modo errato può compromettere la detrazione fiscale, con un danno pari all'agevolazione perduta." },
    { type: "p", text: "La prova è documentale e semplice da costruire: contratto che elenca le attività promesse, assenza di riscontri sui portali, corrispondenza con il distributore e con il gestore. Il consiglio operativo è chiedere direttamente al distributore e al GSE lo stato della propria posizione, senza affidarsi alle rassicurazioni del venditore. Molte contestazioni si chiudono quando il cliente arriva con quella prova." },

    { type: "h2", text: "Come si prova un contenzioso fotovoltaico?", id: "prove" },
    { type: "p", text: "La prova nel fotovoltaico è più accessibile che in altri contenziosi edilizi, perché l'impianto registra da solo la propria storia. L'inverter e il portale di monitoraggio conservano i dati di produzione giorno per giorno: sono la base di ogni contestazione seria sul rendimento. Vanno esportati e conservati in proprio, perché l'accesso al portale passa spesso dall'installatore e può essere revocato." },
    { type: "p", text: "Il dato grezzo però non basta. Serve una perizia sull'impianto fotovoltaico che confronti la produzione reale con quella attesa in base all'irraggiamento registrato in zona e che risalga alla causa dello scostamento. Una perizia che dice solo \"produce poco\" non regge; una che dimostra stringhe sottodimensionate, inverter inadeguato o ombreggiamenti prevedibili sposta il baricentro della trattativa." },
    { type: "p", text: "Sulle infiltrazioni contano invece la documentazione fotografica dei fissaggi e la sequenza temporale tra installazione e comparsa delle macchie. In ogni caso va conservato tutto il materiale commerciale ricevuto prima della firma: è l'unico modo per dimostrare quali risultati erano stati prospettati. La tabella mette in fila le cinque cause, la prova tipica e il rimedio principale." },
    { type: "table", headers: ["Causa del contenzioso", "Cosa provare", "Rimedio principale"], rows: [
      ["Produzione inferiore al promesso", "Dati inverter e portale, confronto con l'irraggiamento di zona, perizia sul dimensionamento, materiale commerciale con la producibilità dichiarata", "Adeguamento dell'impianto o riduzione del prezzo; risoluzione se lo scostamento rende l'impianto inidoneo"],
      ["Infiltrazioni dal tetto dopo il fissaggio", "Foto dei punti di attacco, relazione tecnica sulla causa, sequenza installazione-macchie, preventivi di ripristino", "Eliminazione dei difetti e risarcimento del danno all'immobile (art. 1669 c.c. per i gravi difetti)"],
      ["Contratto firmato fuori dai locali commerciali", "Contratto con data e luogo di firma, fascicolo consegnato, assenza dell'informativa sul recesso", "Recesso entro 14 giorni, esteso a 12 mesi e 14 giorni se l'informativa manca (artt. 49 e 52-53 Cod. Cons.)"],
      ["Azienda sparita a impianto incompleto", "Visura camerale, contratto con l'elenco delle forniture, prova dei pagamenti, verbale dello stato dei luoghi", "Risoluzione per inadempimento e risoluzione del credito collegato (art. 125-quinquies TUB); escussione delle garanzie"],
      ["Pratiche e incentivi non gestiti", "Contratto chiavi in mano, assenza di riscontri presso distributore e GSE, quantificazione del beneficio perduto", "Esecuzione a spese dell'azienda e risarcimento dell'incentivo o della detrazione persi"],
    ] },

    { type: "h2", text: "I rimedi in scala: adeguamento, riduzione, risoluzione", id: "rimedi" },
    { type: "p", text: "I rimedi non sono alternativi a piacere: seguono una scala calibrata sulla gravità dell'inadempimento. Il primo gradino è l'eliminazione dei difetti a spese dell'azienda — sostituzione dell'inverter, rifacimento delle stringhe, integrazione di moduli, ripristino corretto della copertura. È il rimedio più rapido e spesso il più conveniente, perché lascia al cliente un impianto funzionante invece di un rimborso." },
    { type: "p", text: "Il secondo gradino è la riduzione del prezzo prevista dall'art. 1668 c.c. per l'appalto, quando il difetto è definitivo o l'adeguamento è sproporzionato. Nel fotovoltaico si quantifica capitalizzando il differenziale di produzione sulla vita utile residua dell'impianto: un calcolo che richiede supporto tecnico ma che rende la richiesta finalmente misurabile invece che generica." },
    { type: "p", text: "Il terzo gradino è la risoluzione del contratto, ammessa quando i difetti rendono l'opera del tutto inadatta alla sua destinazione. È la strada obbligata quando l'impianto è incompleto, non è mai stato allacciato o produce così poco da svuotare la ragione dell'acquisto. Comporta la restituzione di quanto pagato e, per i contratti a rate, apre la questione del credito collegato." },
    { type: "p", text: "Sopra tutti resta il risarcimento del danno, cumulabile con gli altri rimedi: danno all'immobile da infiltrazione, costi di ripristino, mancato risparmio in bolletta, incentivi e detrazioni perduti, spese tecniche sostenute per accertare il difetto. È la voce che nelle liti sul tetto pesa più dell'impianto stesso, e va documentata con preventivi di ripristino, non con stime a occhio." },

    { type: "h2", text: "Quanto tempo hai per agire?", id: "termini" },
    { type: "p", text: "I termini vanno verificati prima ancora del merito. Nel fotovoltaico convivono scadenze diverse a seconda della qualificazione del contratto e del tipo di difetto, e alcune sono molto brevi. Una posizione tecnicamente vincente si perde con una denuncia inviata due mesi dopo la scoperta o con un'azione introdotta oltre l'anno dalla denuncia dei gravi difetti." },
    { type: "table", headers: ["Situazione", "Termine", "Da quando decorre"], rows: [
      ["Recesso da contratto negoziato fuori dai locali commerciali", "14 giorni", "Di regola dalla consegna del bene (artt. 52-53 Codice del Consumo)"],
      ["Recesso quando l'informativa è stata omessa", "12 mesi e 14 giorni", "Dalla scadenza del termine ordinario di recesso (art. 49 Codice del Consumo)"],
      ["Contratto di credito collegato", "Segue il contratto principale", "Dal recesso o dalla risoluzione della fornitura (art. 125-quinquies TUB)"],
      ["Denuncia dei vizi dell'appalto", "60 giorni", "Dalla scoperta del vizio (art. 1667 c.c.)"],
      ["Azione per i vizi dell'appalto", "2 anni", "Dalla consegna dell'opera (art. 1667 c.c.)"],
      ["Gravi difetti: denuncia e azione", "1 anno + 1 anno", "Dalla scoperta e poi dalla denuncia, dentro i 10 anni dal compimento (art. 1669 c.c.)"],
      ["Vizi della cosa venduta", "8 giorni per la denuncia, 1 anno per l'azione", "Dalla scoperta e dalla consegna (artt. 1490 e 1495 c.c.)"],
      ["Difetto di conformità nella vendita al consumatore", "2 anni", "Dalla consegna del bene (Codice del Consumo)"],
    ] },
    { type: "p", text: "Un'avvertenza sulla decorrenza: nei difetti di rendimento la scoperta non coincide con la prima bolletta deludente, ma con il momento in cui il cliente acquisisce consapevolezza ragionevolmente certa dello scostamento e della sua causa. Nel dubbio la regola è inviare comunque una denuncia scritta e circostanziata appena il sospetto è fondato: costa una PEC e mette al riparo dall'eccezione di decadenza." },

    { type: "caselaw", title: "Cosa dice la giurisprudenza", items: [
      {
        court: "Cassazione civile, Sezioni Unite",
        ref: "n. 7756 del 27 marzo 2017",
        principle: "L'art. 1669 c.c. si applica anche alle opere eseguite su edifici preesistenti, e non solo alle costruzioni nuove, quando i difetti incidono su elementi essenziali dell'immobile o ne compromettono la funzionalità.",
        impact: "L'installazione di un impianto su un tetto esistente che provoca infiltrazioni può rientrare nella responsabilità decennale, con il regime di tutela più forte per il committente.",
      },
      {
        court: "Orientamento costante di legittimità",
        principle: "Nei contratti che hanno per oggetto la fornitura e l'installazione di un impianto, l'obbligazione non si esaurisce nella consegna dei materiali: l'opera deve risultare idonea alla funzione a cui è destinata secondo il contratto.",
        impact: "Un impianto formalmente completo ma inidoneo a produrre quanto pattuito può integrare inadempimento anche senza difetti visibili dei singoli componenti.",
      },
      {
        court: "Giurisprudenza di merito prevalente",
        principle: "Quando il finanziamento è destinato in via esclusiva all'acquisto dell'impianto ed è stato concluso tramite il fornitore, il collegamento tra i due contratti fa sì che le vicende estintive della fornitura si riflettano sul contratto di credito.",
        impact: "È la ragione per cui la finanziaria va coinvolta formalmente insieme al fornitore, e non dopo la conclusione della vertenza principale.",
      },
    ] },

    { type: "h3", text: "I passi, nell'ordine giusto" },
    { type: "ol", items: [
      "Giorni 1-5: esportare dal portale dell'inverter lo storico completo di produzione e salvarlo in locale, prima che l'accesso venga revocato",
      "Giorni 1-5: recuperare contratto, allegati tecnici, piano di rientro, materiale commerciale, modulo di finanziamento e fascicolo consegnato alla firma",
      "Giorni 5-15: verificare se il contratto è stato firmato fuori dai locali commerciali e se l'informativa sul recesso era presente: se manca, il termine è di 12 mesi e 14 giorni",
      "Giorni 10-30: incaricare un tecnico per la perizia, con confronto tra produzione reale e irraggiamento di zona e verifica del dimensionamento",
      "Entro 60 giorni dalla scoperta del vizio, o entro 1 anno per i gravi difetti: inviare la denuncia scritta via PEC o raccomandata, descrivendo il difetto in modo circostanziato",
      "Contestualmente: costituire in mora il fornitore con termine di 15 giorni per l'adeguamento e inviare copia alla società finanziaria",
      "Se lo stato dei luoghi rischia di cambiare: depositare ricorso per accertamento tecnico preventivo prima di autorizzare qualunque ripristino",
      "Scaduti i 15 giorni senza esito: valutare la mediazione e poi l'azione giudiziale, sempre dentro i termini di decadenza applicabili",
    ] },

    { type: "figure", slot: "contenzioso-fotovoltaico-2", alt: "Schermata del portale di monitoraggio dell'inverter con il grafico della produzione mensile, affiancata al prospetto cartaceo di producibilità consegnato alla firma", caption: "La causa sul rendimento si costruisce confrontando due documenti: quello che è stato promesso e quello che l'impianto ha davvero prodotto." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Una famiglia acquista un impianto da 6,48 kWp con accumulo, firmando in casa al termine di una visita commerciale. Prezzo 21.400 euro, interamente finanziato con un prestito finalizzato istruito dal venditore, rata da 247 euro. Il prospetto indicava una producibilità attesa di 8.900 kWh l'anno. Dopo dodici mesi il portale dell'inverter segna 6.130 kWh e l'accumulo non è mai stato installato." },
    { type: "p", text: "Il tecnico incaricato confronta la produzione con l'irraggiamento registrato in zona nello stesso periodo e trova uno scostamento del 28% non spiegabile con l'andamento meteorologico. Le cause sono due: una falda ombreggiata per diverse ore al giorno da un edificio adiacente, rilevabile con un sopralluogo ordinario, e un inverter di taglia inadeguata rispetto alla configurazione delle stringhe. Nel frattempo dal sottotetto compaiono due macchie di umidità in corrispondenza di altrettanti fissaggi." },
    { type: "p", text: "Il bivio è netto. Se l'informativa sul recesso non era nel fascicolo consegnato alla firma, la strada più rapida è il recesso tardivo entro dodici mesi e quattordici giorni, con scioglimento del credito collegato: si esce dall'operazione senza dover dimostrare nulla sul rendimento. Se invece l'informativa c'era e il termine è scaduto, si procede sull'inadempimento: denuncia, costituzione in mora con richiesta di adeguamento e installazione dell'accumulo, poi riduzione del prezzo o risoluzione." },
    { type: "p", text: "In questa seconda ipotesi il conto si costruisce così: differenziale di produzione capitalizzato sulla vita utile residua, valore dell'accumulo pagato e mai fornito, costo del ripristino della copertura da preventivo, spese tecniche della perizia. È la quantificazione che rende possibile la trattativa: finché la richiesta resta \"l'impianto rende poco\", la controparte non ha nulla su cui rispondere." },
    { type: "note", text: "L'errore da non fare: autorizzare l'azienda a tornare a sistemare il tetto senza aver prima documentato lo stato dei fissaggi con foto e relazione tecnica. Dopo l'intervento, dimostrare come era stato eseguito il fissaggio originario è quasi impossibile. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende sempre dai documenti, dalla qualificazione del contratto e dalle circostanze specifiche." },

    { type: "timeline", title: "I termini del contenzioso fotovoltaico", steps: [
      { when: "14 giorni", label: "Recesso dal contratto firmato a casa", detail: "Senza motivazione né penalità, per i contratti negoziati fuori dai locali commerciali (artt. 52-53 Codice del Consumo)." },
      { when: "12 mesi e 14 giorni", label: "Recesso esteso se manca l'informativa", detail: "Quando l'informativa sul diritto di recesso non è stata fornita, il termine si allunga (art. 49 Codice del Consumo)." },
      { when: "60 giorni dalla scoperta", label: "Denuncia dei vizi dell'appalto", detail: "Termine di decadenza per contestare i difetti (art. 1667 c.c.); l'azione va introdotta entro 2 anni dalla consegna." },
      { when: "1 anno dalla scoperta", label: "Denuncia dei gravi difetti", detail: "Per infiltrazioni e difetti che compromettono la funzionalità: azione entro 1 anno dalla denuncia, dentro i 10 anni dal compimento (art. 1669 c.c.)." },
      { when: "Dopo il recesso o la risoluzione", label: "Sorte del finanziamento collegato", detail: "Il contratto di credito collegato segue le sorti della fornitura (art. 125-quinquies TUB)." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "L'impianto produce meno del promesso: posso chiedere la risoluzione?", a: "Non sempre. La risoluzione richiede che i difetti rendano l'opera inadatta alla sua destinazione: uno scostamento modesto giustifica l'adeguamento o la riduzione del prezzo, non lo scioglimento del contratto. Serve una perizia che quantifichi lo scarto rispetto all'irraggiamento di zona e ne individui la causa tecnica." },
      { q: "La producibilità indicata nella brochure è vincolante?", a: "Dipende. Se compare nel contratto o nell'allegato tecnico fa parte della prestazione dovuta. Se sta solo nel materiale promozionale o nel piano di rientro, può comunque rilevare quando ha determinato la decisione di acquisto. Per questo va conservato ogni documento commerciale ricevuto prima della firma." },
      { q: "Ho firmato più di un anno fa: posso ancora recedere?", a: "Se il contratto è stato negoziato fuori dai locali commerciali e l'informativa sul diritto di recesso non è stata fornita, il termine si estende a dodici mesi e quattordici giorni. Va verificato il fascicolo consegnato alla firma: la presenza del modulo, il suo contenuto e la data di consegna." },
      { q: "Devo continuare a pagare le rate se l'impianto non funziona?", a: "Non sospendere i pagamenti senza aver prima costituito in mora il fornitore e scritto alla finanziaria. Quando il credito è collegato all'acquisto, l'inadempimento del fornitore consente di chiedere la risoluzione anche del contratto di credito (art. 125-quinquies TUB). L'ordine delle comunicazioni è decisivo." },
      { q: "Quanto costa una perizia sull'impianto fotovoltaico?", a: "Dipende dalla potenza e dall'ampiezza dell'incarico: la sola analisi dei dati di produzione costa meno di una verifica completa con sopralluogo, controllo del dimensionamento e ispezione della copertura. È una spesa risarcibile se l'inadempimento viene accertato, e senza di essa la contestazione resta generica." },
      { q: "L'azienda è fallita: ho ancora qualcosa da fare?", a: "Sì. Restano le garanzie del produttore su moduli e inverter, eventuali polizze e fideiussioni, la posizione di altri soggetti coinvolti nel contratto e soprattutto la questione del finanziamento collegato. Vanno poi valutate l'insinuazione al passivo e la conservazione della prova sullo stato dell'impianto." },
      { q: "Chi risponde delle infiltrazioni, l'installatore o il produttore dei moduli?", a: "Delle infiltrazioni risponde di regola chi ha eseguito il fissaggio e il ripristino della copertura, cioè l'installatore; il produttore risponde dei difetti dei componenti. Quando l'intervento riguarda un edificio esistente e compromette la funzionalità dell'opera si applica la responsabilità decennale dell'art. 1669 c.c." },
      { q: "Serve la mediazione prima di fare causa?", a: "Il tentativo di mediazione è una condizione da verificare caso per caso, in base alla qualificazione del rapporto e alla domanda che si intende proporre. In materia di fotovoltaico resta comunque un passaggio spesso utile, perché la perizia già acquisita rende la trattativa concreta e misurabile." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se il tuo impianto rende meno del promesso, il tetto perde acqua o l'azienda non risponde più, il primo passo è capire su quale delle cinque cause si colloca il tuo caso: da lì dipendono termini, prove e rimedio. Contattaci dalla pagina contatti con il contratto, il piano di rientro e i dati di produzione. Se il problema è solo il rendimento, parti dalla guida su /guide/fotovoltaico-non-produce; se il contratto è stato firmato a casa, da quella su /guide/recesso-contratto-fotovoltaico." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
