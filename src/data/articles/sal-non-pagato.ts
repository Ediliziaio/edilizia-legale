import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "sal-non-pagato",
  title: "SAL non pagato: posso sospendere i lavori senza rischiare?",
  excerpt:
    "Il committente non paga lo stato di avanzamento? Sospendere si può, ma solo con l'eccezione di inadempimento fatta bene: costituzione in mora, proporzionalità, buona fede. La procedura corretta passo per passo.",
  category: "Imprese",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "SAL non pagato cosa fare",
    "posso sospendere i lavori se non mi pagano",
    "mancato pagamento stato avanzamento lavori",
    "sospensione lavori per mancato pagamento legittima",
    "eccezione di inadempimento appaltatore",
    "risoluzione contratto appalto mancato pagamento",
  ],
  intro:
    "L'appaltatore può sospendere i lavori per mancato pagamento invocando l'eccezione di inadempimento prevista dall'art. 1460 c.c., ma solo se l'inadempimento del committente è grave e se la sospensione è proporzionata e conforme a buona fede. Va sempre preceduta da una costituzione in mora scritta con termine.",
};

export const seo = {
  seoTitle: "SAL Non Pagato: Sospendere i Lavori Senza Rischiare",
  metaDescription:
    "Puoi sospendere i lavori per SAL non pagato ex art. 1460 c.c., ma solo dopo costituzione in mora scritta e se la sospensione è proporzionata. La procedura.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: l'appaltatore può rifiutare la propria prestazione se il committente non paga, in forza dell'eccezione di inadempimento (art. 1460 c.c.). Il termine: la costituzione in mora scritta con termine di 15 giorni deve sempre precedere la sospensione; gli interessi di mora commerciali decorrono automaticamente dalla scadenza (D.lgs. 231/2002). L'azione: PEC di messa in mora, poi comunicazione formale di sospensione con verbale dello stato del cantiere, poi recupero del credito o risoluzione." },

    { type: "h2", text: "La sospensione è un'arma a doppio taglio: quando è legittima?", id: "arma-doppio-taglio" },
    { type: "p", text: "Quando un SAL non viene pagato, l'istinto dell'imprenditore è fermare il cantiere: \"se non mi paghi, non lavoro\". L'istinto è giuridicamente fondato — l'eccezione di inadempimento dell'art. 1460 c.c. esiste esattamente per questo — ma eseguito male si ritorce contro chi lo usa. Una sospensione illegittima trasforma il creditore in inadempiente: fa maturare la penale contrattuale da ritardo, legittima il committente a risolvere il contratto per fatto dell'impresa e a chiedere i danni." },
    { type: "p", text: "La sospensione è legittima quando ricorrono tre condizioni. Primo: l'inadempimento del committente deve essere grave, non un ritardo di pochi giorni su un acconto marginale, ma il mancato pagamento di un SAL significativo rispetto al valore dell'appalto. Secondo: la reazione deve essere proporzionata, cioè commisurata a quell'inadempimento. Terzo: deve essere conforme a buona fede, il che nella pratica significa preavvisata per iscritto, motivata e accompagnata dalla disponibilità a riprendere i lavori al pagamento." },
    { type: "p", text: "Il punto debole tipico è la prova: nei contenziosi su sospensioni contestate, la differenza la fa quasi sempre la carta. Un'impresa che ha messo in mora per iscritto, atteso il termine e verbalizzato lo stato del cantiere ha una posizione difendibile; una che ha smontato il ponteggio da un giorno all'altro dopo una telefonata, no." },

    { type: "h2", text: "Come funziona l'eccezione di inadempimento e cosa pretende la buona fede?", id: "eccezione-1460" },
    { type: "p", text: "L'art. 1460 c.c. consente a ciascun contraente di rifiutare la propria prestazione se l'altro non adempie o non offre di adempiere la sua. Nel contratto d'appalto con pagamento a SAL la corrispettività è scandita per fasi: ogni stato di avanzamento accertato fa sorgere il diritto al pagamento della rata, e il mancato pagamento di quella rata legittima — in linea di principio — il rifiuto di proseguire le lavorazioni successive." },
    { type: "p", text: "Il secondo comma della norma pone però il limite decisivo: il rifiuto non può essere contrario a buona fede. La giurisprudenza ne ricava un test di proporzionalità e correttezza: si confrontano la gravità dell'inadempimento del committente e l'impatto della sospensione, si verifica che l'impresa abbia avvisato prima di fermarsi e che non stia usando il ritardo come pretesto per coprire i propri ritardi di cronoprogramma. Un SAL da 48.000 euro non pagato su un appalto da 210.000 supera il test; un acconto da 2.000 euro pagato con dieci giorni di ritardo, no." },
    { type: "p", text: "C'è poi un requisito quasi sempre trascurato: la costituzione in mora ex art. 1219 c.c. Non è un obbligo formale dell'eccezione, ma è ciò che rende la sospensione dimostrabilmente conforme a buona fede: il committente deve aver ricevuto un'intimazione scritta di pagamento, con un termine, e averla lasciata scadere. Sospendere senza questo passaggio significa presentarsi in giudizio senza la prova del presupposto." },

    { type: "h2", text: "Qual è la procedura corretta, in quattro passaggi?", id: "procedura" },
    { type: "ol", items: [
      "PEC di costituzione in mora ex art. 1219 c.c.: intimazione di pagamento del SAL scaduto con conteggio degli interessi di mora (D.lgs. 231/2002), termine di 15 giorni e avvertimento espresso che alla scadenza i lavori saranno sospesi ex art. 1460 c.c.",
      "Alla scadenza del termine, comunicazione formale di sospensione via PEC: data di fermo del cantiere, riferimento alla messa in mora rimasta senza esito, riserva di ogni azione per il credito e per i maggiori danni da fermo",
      "Entro 3 giorni dal fermo, verbale fotografico dello stato di avanzamento e inventario dei materiali presenti in cantiere, possibilmente in contraddittorio con il direttore dei lavori o inviato via PEC al committente",
      "Contestuale offerta scritta di ripresa immediata dei lavori al pagamento integrale del dovuto: è la prova di buona fede che neutralizza l'accusa di sospensione ritorsiva",
    ] },
    { type: "p", text: "Dopo il quarto passaggio la sospensione è in piedi e documentata, ma non è una strategia di lungo periodo: il cantiere fermo costa a entrambe le parti. Nelle due o tre settimane successive si decide la partita: o il committente paga e i lavori riprendono, o si passa al recupero del credito — diffida finale e decreto ingiuntivo per i SAL maturati — oppure, se l'inadempimento è strutturale, alla risoluzione del contratto." },

    { type: "h2", text: "Cosa scrivere nella comunicazione di sospensione", id: "comunicazione" },
    { type: "p", text: "La comunicazione di sospensione è un documento processuale travestito da lettera: verrà letta da un giudice, e va scritta con questo lettore in mente. Deve contenere: il richiamo puntuale alla messa in mora precedente con data e termine scaduto; l'importo esatto del credito con il conteggio degli interessi; la dichiarazione che la sospensione è disposta ex art. 1460 c.c. in conseguenza del grave inadempimento; la data di decorrenza del fermo; la disponibilità immediata alla ripresa al pagamento; la riserva dei maggiori danni da fermo cantiere." },
    { type: "p", text: "Altrettanto importante è cosa non scrivere. Niente toni minacciosi né ultimatum teatrali, che in giudizio pesano contro chi li usa. Niente dichiarazioni di abbandono del cantiere: la sospensione è temporanea e condizionata al pagamento, l'abbandono è un inadempimento definitivo dell'impresa. E attenzione ai materiali: rimuovere dal cantiere materiali già contabilizzati in un SAL accettato, o comunque di proprietà del committente, espone ad accuse pesanti. I materiali non ancora posati e non fatturati restano dell'impresa, ma anche qui la mossa corretta è inventariarli nel verbale, non portarli via di notte." },

    { type: "h2", text: "Sospendere o risolvere: come si sceglie?", id: "sospendere-o-risolvere" },
    { type: "p", text: "Sospensione e risoluzione rispondono a due diagnosi diverse. La sospensione presuppone che il committente possa e voglia ancora pagare: è pressione negoziale, tiene in vita il contratto e il margine sulle lavorazioni future. La risoluzione per inadempimento — giudiziale ex art. 1453 c.c. o tramite diffida ad adempiere ex art. 1454 c.c., con termine non inferiore a 15 giorni — chiude il rapporto: l'impresa esce dal cantiere, chiede il corrispettivo di quanto eseguito e il risarcimento, incluso il mancato utile sulle opere non eseguite." },
    { type: "table", headers: ["Criterio", "Sospensione ex art. 1460 c.c.", "Risoluzione ex artt. 1453-1454 c.c."], rows: [
      ["Quando ha senso", "Ritardo serio ma committente solvibile e cantiere recuperabile", "Inadempimento strutturale, più SAL scaduti, fiducia esaurita"],
      ["Effetto sul contratto", "Resta in vita: i lavori riprendono al pagamento", "Si scioglie: l'impresa esce definitivamente dal cantiere"],
      ["Cosa si può chiedere", "SAL scaduti, interessi di mora, danni da fermo", "Corrispettivo dell'eseguito, interessi e risarcimento del danno"],
      ["Presupposto formale", "Messa in mora scritta con termine, poi comunicazione di sospensione", "Diffida ad adempiere con termine di almeno 15 giorni, o domanda giudiziale"],
      ["Rischio principale", "Sospensione giudicata sproporzionata: penale e responsabilità", "Gravità dell'inadempimento negata dal giudice: risoluzione illegittima"],
    ] },
    { type: "p", text: "Il criterio di scelta più affidabile è la solvibilità: se il committente è in difficoltà finanziaria strutturale, sospendere significa solo congelare un credito destinato a crescere di valore contabile e a calare di valore reale. In quel caso conviene risolvere presto, consolidare il credito per quanto eseguito e agire prima che si aggiungano altri creditori." },

    { type: "h2", text: "Cosa cambia negli appalti pubblici?", id: "appalti-pubblici" },
    { type: "p", text: "Negli appalti pubblici l'autotutela privata è fortemente compressa: l'esecutore non può fermare il cantiere invocando semplicemente l'art. 1460 c.c., perché la disciplina di settore — oggi il Codice dei contratti pubblici, D.lgs. 36/2023 — regola in modo tipizzato sospensioni, riserve e rimedi contro i ritardi della stazione appaltante. La sospensione unilaterale fuori dai casi previsti espone a penali e alla risoluzione in danno." },
    { type: "p", text: "Gli strumenti dell'appaltatore pubblico sono altri: gli interessi moratori automatici sui ritardi di pagamento ai sensi del D.lgs. 231/2002, l'iscrizione tempestiva delle riserve negli atti contabili, e — quando il ritardo complessivo supera le soglie di legge — il diritto di chiedere la risoluzione del contratto. La regola pratica: nel pubblico ogni contestazione passa dalla contabilità di cantiere e dalle riserve, e una riserva non iscritta nei termini è un diritto perso. Prima di qualunque iniziativa su un appalto pubblico serve una verifica specifica del capitolato e degli atti contabili." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Appalto privato da 210.000 euro per la costruzione di una villa, con pagamento in cinque SAL. Il terzo SAL, da 48.000 euro, non viene pagato alla scadenza; il quarto è in maturazione e l'impresa ha già anticipato ferro e solai. La tentazione è sospendere subito, ma una sospensione immediata senza costituzione in mora esporrebbe l'impresa alla penale contrattuale da ritardo — nel contratto, 150 euro al giorno — e capovolgerebbe le parti: da creditore a inadempiente." },
    { type: "p", text: "La sequenza scelta: prima una PEC di costituzione in mora con termine di quindici giorni e avvertimento espresso che alla scadenza i lavori saranno sospesi ex art. 1460 c.c.; alla scadenza, comunicazione formale di sospensione con verbale fotografico dello stato del cantiere e inventario dei materiali; contestualmente, offerta di ripresa immediata al pagamento, che dimostra la buona fede e neutralizza l'accusa di sospensione ritorsiva. Il calcolo del rischio: 48.000 euro di credito contro una penale teorica di 150 euro al giorno, che dopo tre mesi varrebbe 13.500 euro — ma se la sospensione è legittima, la penale non matura affatto. È per questo che i passaggi vanno fatti nell'ordine e per iscritto." },
    { type: "p", text: "Il bivio: se il committente fosse in difficoltà finanziaria strutturale — altri cantieri fermi, fornitori non pagati — sospendere non basterebbe. Converrebbe puntare direttamente alla risoluzione per grave inadempimento e al recupero del corrispettivo per quanto già eseguito, prima che alla platea dei creditori se ne aggiungano altri." },
    { type: "note", text: "L'errore da non fare: continuare a lavorare \"per fiducia\" mentre i SAL non pagati si accumulano, e poi fermarsi di colpo senza preavviso scritto quando la misura è colma. Si arriva al fermo con l'esposizione massima e la posizione formale più debole. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende sempre dal contratto e dalle circostanze specifiche." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso sospendere i lavori se il committente non paga un SAL?", a: "Sì, in forza dell'eccezione di inadempimento dell'art. 1460 c.c., ma a condizioni precise: l'inadempimento deve essere grave, la sospensione proporzionata e conforme a buona fede, e deve essere preceduta da una costituzione in mora scritta con termine. Senza questi presupposti la sospensione diventa essa stessa un inadempimento." },
      { q: "Quanti SAL non pagati servono per sospendere?", a: "Non esiste un numero fisso: conta la gravità. Anche un solo SAL può bastare se è significativo rispetto al valore dell'appalto e il ritardo è consistente, mentre un piccolo acconto pagato con pochi giorni di ritardo non giustifica il fermo. La valutazione è di proporzionalità, caso per caso." },
      { q: "Devo avvisare per iscritto prima di fermare il cantiere?", a: "Sì, sempre. La PEC di costituzione in mora con termine — di norma 15 giorni — e l'avvertimento che alla scadenza i lavori saranno sospesi sono ciò che rende la sospensione dimostrabilmente conforme a buona fede. Una sospensione a sorpresa, comunicata a voce, è quasi indifendibile in giudizio." },
      { q: "Durante la sospensione la penale per ritardo matura?", a: "Se la sospensione è legittima, no: il ritardo è imputabile al committente inadempiente e la penale non matura. Se invece il giudice ritiene la sospensione sproporzionata o in mala fede, la penale si applica per tutto il periodo di fermo. È il motivo per cui la procedura scritta è decisiva." },
      { q: "Posso rimuovere i materiali dal cantiere?", a: "Con molta cautela. I materiali già posati o contabilizzati in SAL accettati non vanno toccati; quelli non ancora incorporati e non fatturati restano in linea di principio dell'impresa. La mossa corretta è inventariarli nel verbale di sospensione e, in caso di dubbio, chiedere prima un parere sul singolo contratto." },
      { q: "Il committente può risolvere il contratto perché ho sospeso?", a: "Può provarci: è il rischio tipico della sospensione mal eseguita. Se però la sospensione rispetta i presupposti dell'art. 1460 c.c. ed è documentata da messa in mora, comunicazione formale e offerta di ripresa, il tentativo di risoluzione in danno dell'impresa non trova fondamento." },
      { q: "Negli appalti pubblici posso sospendere allo stesso modo?", a: "No. Nel pubblico l'autotutela privata è compressa: valgono le regole del D.lgs. 36/2023 su sospensioni e riserve, e il fermo unilaterale fuori dai casi previsti espone a penali e risoluzione in danno. Gli strumenti sono gli interessi moratori, le riserve iscritte nei termini e, oltre le soglie, la richiesta di risoluzione." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Prima di fermare il cantiere, fatti dire se la sospensione regge: una valutazione sbagliata trasforma il creditore in inadempiente. Inviaci contratto e situazione dei SAL dalla pagina contatti: verifichiamo gravità, proporzionalità e i passaggi già fatti, e ti indichiamo se la strada è la sospensione, il recupero immediato o la risoluzione. Per la fase successiva leggi la guida al recupero crediti nell'edilizia e, se il committente contesta i lavori per giustificare il mancato pagamento, la guida su come smontare la contestazione pretestuosa." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
