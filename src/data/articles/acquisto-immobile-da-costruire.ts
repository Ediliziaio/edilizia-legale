import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "acquisto-immobile-da-costruire",
  title:
    "Comprare casa sulla carta: le tutele del D.lgs. 122/2005 che il costruttore deve darti",
  excerpt:
    "Fideiussione sugli acconti, polizza decennale, contratto preliminare con contenuti obbligatori: chi compra un immobile da costruire ha una corazza di tutele che funziona solo se pretesa prima della firma. Ecco cosa controllare, clausola per clausola.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "17 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "acquisto immobile da costruire tutele",
    "fideiussione acquisto casa in costruzione",
    "comprare casa sulla carta rischi",
    "preliminare immobile da costruire contenuti obbligatori",
    "costruttore fallisce prima del rogito acconti",
    "nullità preliminare senza fideiussione",
  ],
  intro:
    "Chi compra un immobile da costruire da un'impresa è protetto dal D.lgs. 122/2005: il costruttore deve consegnare una fideiussione che garantisce tutti gli acconti versati fino al rogito e, al trasferimento, una polizza decennale sui gravi difetti. Il preliminare senza fideiussione è nullo, ma la nullità può farla valere solo l'acquirente. Il punto critico: queste tutele vanno pretese prima di firmare, perché dopo il fallimento del costruttore una fideiussione mai consegnata non si recupera.",
};

export const seo = {
  seoTitle: "Comprare Casa in Costruzione: le Tutele Obbligatorie",
  metaDescription:
    "Fideiussione sugli acconti, polizza decennale, preliminare trascritto: cosa deve darti il costruttore per legge e cosa controllare prima di firmare.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: per gli immobili da costruire il costruttore deve consegnare all'acquirente una fideiussione a garanzia di tutte le somme versate prima del rogito (artt. 2-3 D.lgs. 122/2005) e, all'atto del trasferimento, la polizza indennitaria decennale (art. 4). Il termine: la fideiussione va consegnata all'atto della firma del preliminare, non dopo. L'azione: il preliminare privo di fideiussione è nullo, e la nullità è relativa — può farla valere solo l'acquirente, anche a distanza di tempo." },

    { type: "h2", text: "Quando si applica questa disciplina e quando no", id: "ambito" },
    { type: "p", text: "La corazza del D.lgs. 122/2005 non copre ogni acquisto di casa nuova. Servono tre condizioni insieme: un venditore che sia un costruttore — impresa o cooperativa edilizia — un acquirente persona fisica, e un immobile da costruire in senso tecnico, cioè per il quale sia stato richiesto il permesso di costruire ma che non sia ancora stato ultimato al punto da ottenere l'agibilità." },
    { type: "p", text: "La conseguenza pratica è netta. Se compri un appartamento finito e agibile, anche se nuovissimo, la disciplina non si applica: restano le garanzie ordinarie sui difetti, di cui parliamo nella guida ai [difetti costruttivi della casa nuova](/guide/difetti-costruttivi-casa-nuova). Se invece firmi un preliminare per un'unità ancora da edificare o al grezzo, sei esattamente nel perimetro della legge, e ogni acconto che versi senza fideiussione è denaro esposto al rischio d'impresa di qualcun altro." },
    { type: "p", text: "Un caso di confine che ricorre spesso: la ristrutturazione integrale venduta sulla carta. Il frazionamento di un edificio esistente con interventi radicali può rientrare nella nozione di immobile da costruire quando l'intervento richiede un titolo edilizio maggiore e l'unità non è ancora agibile. È una valutazione da fare caso per caso sui documenti, non un dettaglio da lasciare alla fiducia." },

    { type: "h2", text: "La fideiussione: la garanzia che vale quanto tutti i tuoi acconti", id: "fideiussione" },
    { type: "p", text: "L'art. 2 del D.lgs. 122/2005 impone al costruttore di procurare e consegnare all'acquirente, a pena di nullità del contratto, una fideiussione di importo corrispondente a tutte le somme che l'acquirente ha versato o deve versare prima del trasferimento della proprietà. La rilascia una banca o un'assicurazione, e garantisce la restituzione degli acconti — con gli interessi legali — se il costruttore finisce in una situazione di crisi prima del rogito." },
    { type: "p", text: "Tre caratteristiche la rendono uno strumento serio. È escutibile a prima richiesta: la banca paga senza poterti opporre le eccezioni del costruttore. Copre la crisi in senso ampio: liquidazione giudiziale, concordato, liquidazione coatta, ma anche l'esecuzione immobiliare sul bene promesso. E la sua mancanza produce una nullità che solo tu puoi far valere: il costruttore non può usarla per liberarsi di un contratto diventato scomodo." },
    { type: "p", text: "Il punto debole è uno solo, ed è comportamentale: la fideiussione mai chiesta. Nella pratica molti preliminari vengono firmati con la promessa che la garanzia arriverà, o con una fideiussione di importo inferiore agli acconti reali, magari perché una parte del prezzo viaggia fuori contratto. Dopo il fallimento del costruttore, quella garanzia non si materializza più: resta l'insinuazione al passivo, cioè la coda dei creditori." },
    { type: "table", headers: ["Documento", "Quando va consegnato", "Cosa succede se manca"], rows: [
      ["Fideiussione sugli acconti (artt. 2-3)", "All'atto della firma del preliminare", "Nullità relativa del contratto: la fa valere solo l'acquirente"],
      ["Polizza indennitaria decennale (art. 4)", "All'atto del trasferimento della proprietà", "Il notaio non può procedere alla stipula; nullità relativa dell'atto"],
      ["Preliminare con i contenuti dell'art. 6", "Alla firma", "Integrazione giudiziale o responsabilità; segnale grave sulla serietà dell'operazione"],
      ["Capitolato e elaborati di progetto allegati", "Alla firma, come allegati del preliminare", "Contestazioni su finiture e varianti quasi impossibili da vincere"],
    ] },

    { type: "figure", slot: "acquisto-immobile-da-costruire-1", alt: "Contratto preliminare di vendita di immobile da costruire sul tavolo con la fideiussione bancaria allegata", caption: "La fideiussione va allegata al preliminare e verificata riga per riga: importo, escutibilità, durata." },

    { type: "h2", text: "Il preliminare: cosa deve contenere per legge", id: "preliminare" },
    { type: "p", text: "L'art. 6 del D.lgs. 122/2005 elenca i contenuti obbligatori del preliminare: gli estremi del permesso di costruire, le caratteristiche tecniche della costruzione, i tempi massimi di esecuzione, il prezzo con le modalità di pagamento, gli estremi della fideiussione, l'esistenza di ipoteche o trascrizioni pregiudizievoli con l'impegno alla cancellazione o al frazionamento prima del rogito, e gli allegati tecnici: capitolato ed elaborati di progetto." },
    { type: "p", text: "Questo elenco non è burocrazia: è la mappa dei punti dove gli acquisti sulla carta vanno storti. L'ipoteca del cantiere non frazionata è la ragione per cui alcuni acquirenti si trovano al rogito con un'unità gravata da un mutuo fondiario altrui. Il capitolato non allegato è la ragione per cui le finiture consegnate non somigliano al render. I tempi massimi non pattuiti sono la ragione per cui un ritardo di due anni resta senza penale." },
    { type: "p", text: "Alla firma conviene aggiungere ciò che la legge non impone ma la pratica consiglia: la trascrizione del preliminare nei registri immobiliari, che ti rende opponibile ai terzi e attiva il privilegio speciale sul bene per le somme versate; una penale espressa per il ritardo nella consegna; e la verifica, tramite visura, che il permesso di costruire esista davvero e corrisponda a quanto dichiarato." },

    { type: "h2", text: "Se il costruttore entra in crisi prima del rogito", id: "crisi" },
    { type: "p", text: "È lo scenario per cui l'intera disciplina esiste. Se prima del trasferimento della proprietà il costruttore finisce in liquidazione giudiziale, la tua prima mossa è l'escussione della fideiussione: va comunicata all'istituto garante secondo le forme previste dalla polizza, di regola dopo che la situazione di crisi si è formalizzata e prima che il curatore scelga di dare esecuzione al contratto. Recuperi gli acconti con gli interessi, e la vicenda si chiude sul piano economico." },
    { type: "p", text: "In parallelo esistono due protezioni ulteriori. Gli acconti pagati con dazione tracciabile nei modi previsti godono, se il preliminare è trascritto, del privilegio speciale sull'immobile. E l'art. 10 del decreto mette al riparo l'acquisto della prima casa dalla revocatoria fallimentare, quando è avvenuto a giusto prezzo: il curatore non può travolgere il tuo rogito per recuperare l'immobile alla massa." },
    { type: "p", text: "C'è infine il diritto di prelazione dell'art. 9: se l'immobile che abitavi come prima casa finisce all'asta nella procedura, hai diritto di essere preferito a parità di prezzo. Sono tutele che operano su piani diversi — restitutorio, reale, conservativo — e la strategia giusta dipende da quale interesse prevale: riavere i soldi o avere la casa." },

    { type: "figure", slot: "acquisto-immobile-da-costruire-2", alt: "Cantiere residenziale fermo con edificio al grezzo e gru smontata, recinzione chiusa con catena", caption: "Il cantiere che si ferma prima del rogito: lo scenario esatto per cui la fideiussione esiste." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Firmi un preliminare per un trilocale da 285.000 euro in un edificio da costruire: 40.000 alla firma, 60.000 a stati di avanzamento, saldo al rogito. Il costruttore consegna una fideiussione di 100.000 euro, pari agli acconti pattuiti, e un preliminare con permesso di costruire, capitolato e termine di consegna a ventiquattro mesi. Fai trascrivere il preliminare dal notaio." },
    { type: "p", text: "Al sedicesimo mese il cantiere rallenta; al ventesimo l'impresa deposita domanda di concordato, con l'edificio al grezzo avanzato. Hai versato 100.000 euro. Escuti la fideiussione: l'istituto, verificati i presupposti, restituisce l'intero importo con interessi legali in novanta giorni. Chi nello stesso cantiere aveva versato acconti superiori alla garanzia ricevuta — o non l'aveva mai ricevuta — si insinua al passivo, con prospettive di recupero parziali e tempi di anni." },
    { type: "p", text: "La differenza tra i due esiti non dipende dalla fortuna né dall'avvocato chiamato dopo: dipende da tre controlli fatti prima della firma. Fideiussione di importo pieno, preliminare trascritto, pagamenti tracciati e coerenti con il contratto." },
    { type: "note", text: "L'errore da non fare: versare somme fuori contratto per «risparmiare sulle imposte». Quel denaro non è coperto dalla fideiussione, non gode del privilegio e non è documentabile nella procedura: è la prima perdita secca in ogni crisi di cantiere. Lo scenario descritto è illustrativo: gli esiti dipendono dai documenti e dalle circostanze concrete." },

    { type: "timeline", title: "I momenti che decidono la tutela", steps: [
      { when: "Prima della firma", label: "Verifica di permesso di costruire, ipoteche e visura dell'impresa", detail: "Dopo la firma questi controlli servono solo a contare i danni." },
      { when: "Alla firma del preliminare", label: "Consegna della fideiussione e allegazione del capitolato", detail: "«Arriverà» non è una modalità di consegna prevista dalla legge." },
      { when: "Subito dopo la firma", label: "Trascrizione del preliminare nei registri immobiliari", detail: "Opponibilità ai terzi e privilegio speciale sulle somme versate." },
      { when: "A ogni acconto", label: "Pagamento tracciabile e aggiornamento della garanzia", detail: "La fideiussione deve coprire tutto il versato: se il piano pagamenti cambia, si integra." },
      { when: "Alla crisi del costruttore", label: "Escussione della fideiussione nelle forme di polizza", detail: "Attenzione ai termini interni della garanzia e al coordinamento con la procedura." },
      { when: "Al rogito", label: "Consegna della polizza decennale postuma", detail: "Senza, il notaio non può stipulare: è l'ultimo presidio, non una formalità." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Ho firmato un preliminare senza fideiussione: il contratto è carta straccia?", a: "No: è nullo di nullità relativa, che significa che solo tu puoi farla valere, quando ti conviene. Se il cantiere procede bene puoi non eccepirla e arrivare al rogito; se la situazione si deteriora, la nullità ti consente di chiedere la restituzione di quanto versato. È una posizione da gestire con consapevolezza, non un vicolo cieco." },
      { q: "La fideiussione copre anche la caparra?", a: "La garanzia deve coprire tutte le somme che il costruttore ha riscosso o deve riscuotere prima del trasferimento, e la giurisprudenza vi ricomprende le somme versate a titolo di caparra confirmatoria. Ciò che non copre sono i pagamenti fuori contratto, non documentati o effettuati dopo il trasferimento." },
      { q: "Il costruttore propone di intestare il preliminare a una società: cambia qualcosa?", a: "Sì, moltissimo: la disciplina protegge l'acquirente persona fisica. Se acquisti tramite una società, anche solo per ragioni fiscali, perdi fideiussione obbligatoria, polizza decennale e prelazione. È una scelta da valutare con tutti i costi sul tavolo, non solo quelli tributari." },
      { q: "Cosa significa che la fideiussione è «a prima richiesta»?", a: "Che l'istituto garante paga a semplice domanda scritta, senza poterti opporre le eccezioni che il costruttore avrebbe potuto sollevare e senza che tu debba prima fare causa. È la caratteristica che rende la garanzia liquida: verificala nel testo, perché una fideiussione con eccezioni opponibili vale molto meno." },
      { q: "Il preliminare va trascritto per forza?", a: "La trascrizione non è obbligatoria ma è fortemente consigliata: richiede l'atto notarile e ha un costo, in cambio ti rende opponibile ai terzi — compreso chi comprasse la stessa unità dopo di te — e attiva il privilegio speciale sulle somme versate in caso di crisi. Su acconti importanti, è un costo che compra un grado di protezione reale." },
      { q: "L'immobile promesso è gravato dall'ipoteca del mutuo di cantiere: devo preoccuparmi?", a: "È fisiologico che il cantiere sia finanziato con mutuo fondiario ipotecario. Ciò che conta è che il preliminare dichiari l'ipoteca e contenga l'impegno al frazionamento o alla cancellazione prima del rogito, e che al rogito la tua unità arrivi libera o con accollo consapevole della quota. Arrivare alla stipula con l'ipoteca intera non frazionata è un segnale d'allarme serio." },
      { q: "Il costruttore è in ritardo di un anno sulla consegna: posso sciogliermi e riavere gli acconti?", a: "Dipende da cosa prevede il preliminare: termine essenziale, penali, clausole risolutive. In assenza di crisi dell'impresa la fideiussione non si escute per il semplice ritardo; si lavora con diffida ad adempiere e risoluzione per inadempimento. È il motivo per cui i tempi di consegna e la penale vanno scritti alla firma, quando hai potere negoziale." },
      { q: "Ho comprato al grezzo con atto definitivo e il costruttore è fallito senza finire le opere: che tutele ho?", a: "Se il trasferimento c'è già stato, la fideiussione ha esaurito la sua funzione: per le opere mancanti sei creditore della procedura, mentre per i gravi difetti dell'eseguito opera la polizza decennale se consegnata. È una situazione più esposta, che conferma la regola: più tardi trasferisci il rischio, più protetto sei." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Il momento giusto per farci leggere un preliminare di immobile da costruire è prima della firma: la revisione di contratto, fideiussione e visure costa una frazione di qualunque recupero successivo. Se hai già firmato e il cantiere mostra segni di crisi, contattaci dalla pagina contatti con preliminare, garanzia e prova dei pagamenti: verifichiamo escussione, privilegio e posizione nella procedura." },
    { type: "p", text: "Se il tuo problema è un difetto emerso dopo il rogito, la strada è diversa: parti dalla guida alla [polizza decennale postuma](/guide/polizza-decennale-postuma) o da quella sui [difetti costruttivi della casa nuova](/guide/difetti-costruttivi-casa-nuova)." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
