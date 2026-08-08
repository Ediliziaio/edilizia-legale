import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "difetti-costruttivi-casa-nuova",
  title: "Difetti costruttivi in una casa nuova: cosa puoi pretendere e quanto tempo hai",
  excerpt:
    "Crepe, infiltrazioni, distacchi in una casa appena comprata? La garanzia dell'art. 1669 c.c. dura dieci anni, ma la denuncia ha termini stretti: cosa puoi pretendere, da chi e con quali scadenze.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "17 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "difetti costruttivi casa nuova",
    "garanzia decennale costruttore come funziona",
    "infiltrazioni casa nuova chi paga",
    "denuncia vizi costruttore entro quanto tempo",
    "gravi difetti art 1669 cosa rientra",
  ],
  intro:
    "L'art. 1669 c.c. rende il costruttore responsabile per dieci anni dal compimento dell'opera per i gravi difetti che ne compromettono solidità, durata o godimento. Chi li scopre ha un anno dalla scoperta per denunciarli, a pena di decadenza, e un anno dalla denuncia per agire in giudizio. Per i vizi meno gravi valgono i sessanta giorni e i due anni dell'art. 1667 c.c.",
};

export const seo = {
  seoTitle: "Difetti Costruttivi Casa Nuova: Diritti e Termini",
  metaDescription:
    "Infiltrazioni o crepe nella casa nuova? L'art. 1669 c.c. copre i gravi difetti per 10 anni: denuncia entro 1 anno dalla scoperta. Termini, perizia, ATP.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: il costruttore risponde per dieci anni dal compimento dell'opera dei gravi difetti che compromettono solidità, durata o normale godimento dell'immobile (art. 1669 c.c.). Il termine: un anno dalla scoperta per la denuncia, a pena di decadenza, e un anno dalla denuncia per l'azione. L'azione: denuncia scritta subito, poi perizia e — nella maggior parte dei casi — accertamento tecnico preventivo." },

    { type: "h2", text: "Quali difetti fanno scattare la garanzia decennale?", id: "gravi-difetti" },
    { type: "p", text: "L'art. 1669 c.c. copre tre categorie: la rovina dell'edificio, il pericolo evidente di rovina e i gravi difetti. Le prime due sono rare; la terza è quella che riguarda quasi tutti i casi reali. La giurisprudenza ha esteso nel tempo la nozione di grave difetto ben oltre i problemi strutturali: è grave ogni difetto che incide in modo apprezzabile sulla funzionalità o sul normale godimento dell'immobile, anche se riguarda un elemento secondario." },
    { type: "p", text: "Rientrano quindi, per orientamento ormai consolidato, le infiltrazioni da coperture, terrazzi e pareti; i difetti di impermeabilizzazione; l'umidità da ponti termici o da barriera al vapore mancante; i distacchi estesi di intonaci e rivestimenti; i difetti seri degli impianti incorporati nell'edificio; i vizi del cappotto termico che ne annullano la funzione. Restano fuori i difetti puramente estetici e le imperfezioni che non incidono sul godimento: una fessurazione superficiale su un tramezzo interno, di norma, non è un grave difetto." },
    { type: "p", text: "Due caratteristiche rendono l'art. 1669 c.c. particolarmente forte. È responsabilità di natura extracontrattuale: puoi invocarla anche se non hai alcun contratto con il costruttore, per esempio se hai comprato da chi ha costruito o perfino come acquirente successivo. E non è derogabile: le clausole del rogito che pretendono di escluderla non ti tolgono la garanzia." },

    { type: "h2", text: "1669, 1667 o garanzia del venditore: quale norma si applica a te?", id: "tabella-termini" },
    { type: "p", text: "Il primo esercizio, davanti a un difetto, è capire in quale regime ricadi: cambiano i termini, la controparte e la forza della tua posizione. La tabella confronta le tre discipline che coprono la quasi totalità dei casi." },
    { type: "table", headers: ["Regime", "Cosa copre", "Denuncia", "Azione / prescrizione", "Contro chi"], rows: [
      ["Art. 1669 c.c. — gravi difetti", "Rovina, pericolo di rovina, gravi difetti che compromettono solidità, durata o godimento", "Entro 1 anno dalla scoperta, a pena di decadenza", "Entro 1 anno dalla denuncia; l'opera è coperta per 10 anni dal compimento", "Costruttore-appaltatore, costruttore-venditore; in concorso anche progettista e direttore dei lavori"],
      ["Art. 1667 c.c. — difformità e vizi ordinari", "Vizi e difformità dell'opera appaltata non qualificabili come gravi", "Entro 60 giorni dalla scoperta", "Prescrizione di 2 anni dalla consegna dell'opera", "Appaltatore con cui hai il contratto"],
      ["Artt. 1490 e 1495 c.c. — garanzia del venditore", "Vizi della cosa venduta che la rendono inidonea all'uso o ne diminuiscono il valore", "Entro 8 giorni dalla scoperta", "Prescrizione di 1 anno dalla consegna", "Venditore (anche non costruttore)"],
    ] },
    { type: "p", text: "La conseguenza pratica: se il difetto è grave ai sensi dell'art. 1669 c.c., sei nella posizione di gran lunga migliore — dieci anni di copertura e un anno per denunciare. Se è un vizio ordinario, i termini sono molto più stretti e spesso la partita si gioca sulla qualificazione: lo stesso fenomeno, a seconda della causa tecnica, può ricadere in un regime o nell'altro. È uno dei motivi per cui la perizia arriva prima delle conclusioni giuridiche, non dopo." },
    { type: "p", text: "A questi regimi si aggiunge, per gli immobili da costruire acquistati da un costruttore, il D.lgs. 122/2005: l'art. 4 impone al costruttore di consegnare all'acquirente una polizza assicurativa decennale postuma a copertura dei danni da rovina e gravi difetti. È un tassello che diventa decisivo quando la società ha chiuso, e ci torniamo più avanti." },

    { type: "h2", text: "Da quando decorre il termine? La \"scoperta\" che quasi tutti sbagliano", id: "decorrenza-scoperta" },
    { type: "p", text: "L'errore più frequente non riguarda il merito ma il calendario. Il termine di un anno per la denuncia decorre dalla scoperta del difetto — e la giurisprudenza chiarisce che la scoperta non coincide con la prima macchia di umidità. Si ha scoperta quando acquisisci una conoscenza sufficientemente completa della gravità del difetto e della sua derivazione causale dall'esecuzione dell'opera: nella pratica, spesso, la data della relazione del tecnico." },
    { type: "p", text: "Questo principio taglia in due direzioni. Ti protegge se hai atteso di capire: non sei decaduto solo perché la prima infiltrazione risale a due anni fa, se solo la perizia ne ha rivelato causa e gravità. Ma non protegge chi sapeva e ha aspettato: se il quadro era già evidente — danni estesi, cause palesi, magari una diagnosi verbale del tuo stesso tecnico — il termine corre da allora, e le rassicurazioni verbali del costruttore non lo sospendono." },
    { type: "p", text: "La regola operativa è quindi una sola: denuncia scritta subito, senza aspettare la perizia completa. La denuncia impedisce la decadenza e non richiede una diagnosi definitiva: basta indicare i fenomeni riscontrati e riservarsi gli approfondimenti tecnici. La perizia arriva dopo e, se rivela difetti ulteriori, si integra la denuncia." },

    { type: "h2", text: "La perizia: quando serve e come si sceglie il tecnico", id: "perizia" },
    { type: "p", text: "La perizia di parte serve a tre cose: qualificare il difetto (grave o ordinario), individuarne la causa tecnica (esecuzione, progetto, materiali) e stimare il costo del ripristino. Sono le tre informazioni da cui dipendono regime giuridico, controparti e valore della pretesa. Per un appartamento, una relazione seria costa in genere tra 1.200 e 2.500 euro a seconda delle indagini necessarie — termografia, prove di umidità, saggi." },
    { type: "p", text: "Il tecnico va scelto per specializzazione, non per vicinanza: un difetto di impermeabilizzazione richiede competenze diverse da un quadro fessurativo strutturale. Chiedi che la relazione indichi espressamente la causa più probabile e la data in cui il quadro è divenuto riconoscibile: quel passaggio, come visto, fissa anche la decorrenza dei termini. Una perizia generica che descrive i danni senza pronunciarsi sulle cause vale poco, in trattativa come in giudizio." },

    { type: "h2", text: "L'accertamento tecnico preventivo: perché è spesso l'arma migliore?", id: "atp" },
    { type: "p", text: "Tra la perizia di parte e la causa ordinaria esiste uno strumento intermedio che nella pratica risolve molti casi: l'accertamento tecnico preventivo (artt. 696 e 696-bis c.p.c.). Il giudice nomina un consulente terzo che ispeziona l'immobile in contraddittorio con il costruttore, accerta difetti e cause e stima i costi di ripristino. Il risultato è una prova già formata, spendibile nel successivo giudizio di merito." },
    { type: "p", text: "I vantaggi sono concreti. La consulenza nella versione dell'art. 696-bis include un tentativo di conciliazione, e una relazione sfavorevole al costruttore induce spesso alla transazione senza arrivare alla causa. I tempi sono più brevi di un giudizio ordinario — di norma alcuni mesi — e i costi restano contenuti: contributo unificato, compenso del consulente d'ufficio e assistenza tecnica e legale, complessivamente nell'ordine di qualche migliaio di euro per un caso medio, anticipati da chi lo promuove e recuperabili in caso di esito favorevole." },
    { type: "p", text: "C'è anche un effetto sui termini: la domanda di ATP impedisce la decadenza e interrompe i termini per l'azione, mettendo al riparo dal rischio di consumare l'anno dalla denuncia mentre si tratta. Per chi ha un costruttore che minimizza e rinvia, è di solito il passaggio che cambia il tono della conversazione." },

    { type: "h2", text: "Contro chi si agisce: impresa, venditore, progettista, direttore dei lavori", id: "contro-chi" },
    { type: "p", text: "Il riflesso istintivo è agire contro chi ha venduto. Ma la responsabilità dell'art. 1669 c.c. segue la costruzione, non solo la vendita, e spesso i responsabili sono più d'uno. Il costruttore-venditore risponde sempre; l'impresa appaltatrice risponde degli errori di esecuzione; il progettista risponde se il difetto nasce da un errore di progetto; il direttore dei lavori risponde se il difetto era rilevabile e non è intervenuto durante l'esecuzione." },
    { type: "p", text: "La giurisprudenza qualifica queste responsabilità come solidali quando le condotte hanno concorso al medesimo danno: puoi chiedere l'intero a ciascuno, e saranno loro a regolare i rapporti interni. Chiamare in causa tutti i soggetti coinvolti non è accanimento: significa avere più patrimoni e, soprattutto, più polizze professionali su cui contare — progettisti e direttori dei lavori sono obbligatoriamente assicurati, e l'assicurazione paga anche quando il professionista non potrebbe." },
    { type: "p", text: "La scelta dei convenuti si fa sulla base della perizia: se la causa è un errore di posa, il bersaglio principale è l'impresa; se è un ponte termico di progetto, si aggiunge il progettista; se il difetto era visibile in corso d'opera, il direttore dei lavori. Sbagliare perimetro all'inizio significa dover integrare il contraddittorio dopo, con tempi e costi aggiuntivi." },

    { type: "h2", text: "Il costruttore ha chiuso la società: la polizza decennale postuma", id: "polizza-postuma" },
    { type: "p", text: "È lo scenario che spaventa di più: la società costruttrice è stata liquidata, cancellata o è insolvente. Qui entra in gioco il D.lgs. 122/2005: per gli immobili da costruire venduti da un costruttore a una persona fisica, l'art. 4 impone la consegna al rogito di una polizza assicurativa decennale postuma che copre i danni materiali e diretti dell'immobile derivanti da rovina, pericolo di rovina e gravi difetti costruttivi. La polizza si aziona direttamente contro la compagnia: la sorte della società costruttrice diventa irrilevante." },
    { type: "p", text: "Controlla quindi i documenti del rogito: la polizza dovrebbe essere allegata o richiamata. Per i contratti successivi al modello standard introdotto in attuazione della riforma del 2019, la mancata consegna della polizza è motivo di nullità relativa invocabile dall'acquirente. Se la polizza esiste, la denuncia del sinistro alla compagnia segue i termini di polizza, che si affiancano — non sostituiscono — ai termini dell'art. 1669 c.c.: vanno gestiti entrambi in parallelo." },
    { type: "p", text: "Se la polizza non c'è e la società è svuotata, restano le altre direzioni viste sopra: progettista e direttore dei lavori con le loro assicurazioni professionali e, in casi specifici, la responsabilità di chi ha utilizzato lo schermo societario in modo abusivo. È un'analisi caso per caso, che parte sempre dalla stessa domanda: quali patrimoni e quali polizze esistono davvero." },

    { type: "h2", text: "Mediazione obbligatoria, tempi e costi realistici", id: "mediazione-costi" },
    { type: "p", text: "Le controversie in materia di condominio e di risarcimento da responsabilità sanitaria hanno regole proprie, ma quella che interessa qui è semplice: per le liti su diritti reali e, secondo l'orientamento prevalente, per molte controversie da appalto e compravendita immobiliare, il D.lgs. 28/2010 richiede il tentativo di mediazione prima della causa di merito. La mediazione non è richiesta per l'accertamento tecnico preventivo: è uno dei motivi per cui l'ATP viene spesso prima." },
    { type: "p", text: "Sui costi conviene essere trasparenti. Perizia di parte: indicativamente 1.200-2.500 euro. ATP: qualche migliaio di euro tra contributo unificato, consulente d'ufficio e assistenza, in funzione del valore e della complessità. Causa ordinaria: costi e tempi maggiori — spesso due o tre anni per il primo grado — ma con la prova già formata in ATP il giudizio è più rapido e molte cause non iniziano affatto, perché la relazione del consulente porta alla transazione. Chi vince ha diritto alla rifusione delle spese secondo la soccombenza, ma la liquidazione del giudice può non coprire integralmente quanto anticipato." },

    { type: "h2", text: "Cosa fare, nell'ordine", id: "passi" },
    { type: "ol", items: [
      "Documenta i fenomeni appena compaiono: foto datate, video, date di comparsa e di evoluzione",
      "Invia subito la denuncia scritta al costruttore via PEC o raccomandata, descrivendo i difetti riscontrati e riservando gli approfondimenti tecnici: hai 1 anno dalla scoperta, ma la denuncia immediata elimina ogni discussione sulla decorrenza",
      "Incarica un tecnico specializzato per la perizia: qualificazione del difetto, causa, costi di ripristino e data di riconoscibilità del quadro",
      "Se il costruttore nega o rinvia, deposita l'istanza di accertamento tecnico preventivo ex artt. 696 e 696-bis c.p.c.: impedisce la decadenza e forma la prova",
      "Ricorda il secondo termine: l'azione va proposta entro 1 anno dalla denuncia — l'ATP lo mette al riparo",
      "Sulla base della relazione, definisci il perimetro dei responsabili (impresa, venditore, progettista, direttore dei lavori) e verifica polizza decennale postuma e assicurazioni professionali",
      "Tenta la definizione in sede di conciliazione o mediazione; solo se fallisce, causa di merito",
    ] },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Una coppia acquista un appartamento nuovo nel marzo 2021, in un edificio completato nel 2020. Nell'autunno 2024 compaiono macchie di umidità in due stanze e, nella primavera successiva, si distacca l'intonaco su una parete perimetrale. Il costruttore manda un tecnico, parla di \"condensa da abitazione\" e non fa nulla. Il primo nodo è il tempo: il decennio dell'art. 1669 c.c. scade nel 2030, quindi si è ampiamente dentro; e la scoperta, ai fini dell'anno per la denuncia, non coincide con la prima macchia ma con la consapevolezza di gravità e causa — nella pratica, la data della relazione tecnica." },
    { type: "p", text: "La coppia invia comunque subito la denuncia scritta via PEC, poi incarica un termotecnico: la relazione individua un ponte termico non risolto e l'assenza di barriera al vapore su tutta la parete nord, con costi di ripristino stimati in 24.300 euro. Non è un problema estetico: incide sul godimento normale dell'immobile e rientra nei gravi difetti. Diverso sarebbe stato qualche capello di assestamento su un tramezzo interno, che sarebbe ricaduto nei termini ben più stretti dell'art. 1667 c.c." },
    { type: "p", text: "Il bivio è la qualificazione della causa: errore di progetto, quindi anche il progettista tra i responsabili con la sua polizza professionale, oltre al costruttore-venditore; e se il difetto era rilevabile in corso d'opera, anche il direttore dei lavori. Davanti al costruttore che continua a minimizzare, la mossa è l'accertamento tecnico preventivo: cristallizza lo stato dei luoghi, blocca i termini e in molti casi porta alla transazione prima della causa. Se invece la società fosse risultata chiusa, la strada maestra sarebbe stata la polizza decennale postuma del D.lgs. 122/2005 consegnata al rogito." },
    { type: "note", text: "L'errore da non fare: accontentarsi delle rassicurazioni verbali del costruttore per due o tre anni. È così che si consuma il termine di decadenza, e a quel punto non conta più avere ragione. Lo scenario descritto è illustrativo: qualificazione dei difetti, termini ed esiti dipendono sempre dagli accertamenti tecnici e dalle circostanze del caso concreto." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quali difetti sono considerati \"gravi\" ai sensi dell'art. 1669 c.c.?", a: "Quelli che compromettono solidità, durata o normale godimento dell'immobile: infiltrazioni da coperture e terrazzi, difetti di impermeabilizzazione, umidità da ponti termici, distacchi estesi di intonaci, vizi seri degli impianti incorporati o del cappotto. Restano fuori i difetti puramente estetici e le imperfezioni che non incidono sull'uso dell'immobile." },
      { q: "Quanto tempo ho per denunciare i difetti al costruttore?", a: "Per i gravi difetti, un anno dalla scoperta, a pena di decadenza, con opera coperta per dieci anni dal compimento; poi un anno dalla denuncia per agire. Per i vizi ordinari dell'appalto, sessanta giorni dalla scoperta e due anni dalla consegna. Per la garanzia del venditore, otto giorni e un anno. La qualificazione del difetto decide quindi quasi tutto." },
      { q: "Devo fare una perizia prima di muovermi?", a: "La denuncia scritta va inviata subito, senza aspettare la perizia: impedisce la decadenza e può limitarsi a descrivere i fenomeni. La perizia serve dopo, per qualificare il difetto, individuare la causa e stimare il ripristino. Per un appartamento costa indicativamente tra 1.200 e 2.500 euro, a seconda delle indagini necessarie." },
      { q: "Il costruttore ha chiuso la società: contro chi agisco?", a: "Verifica prima la polizza decennale postuma del D.lgs. 122/2005, che per gli immobili da costruire va consegnata al rogito e si aziona direttamente contro la compagnia. In parallelo si valutano progettista e direttore dei lavori, responsabili in solido quando hanno concorso al difetto e coperti da assicurazione professionale obbligatoria." },
      { q: "Serve la mediazione prima della causa?", a: "Per la causa di merito in materia immobiliare il tentativo di mediazione ex D.lgs. 28/2010 è in genere condizione di procedibilità. Non serve invece per l'accertamento tecnico preventivo, che può partire subito: è uno dei motivi per cui conviene spesso iniziare dall'ATP, che blocca i termini e forma la prova." },
      { q: "Quanto costa fare causa al costruttore?", a: "Dipende da valore e percorso. Ordini di grandezza: perizia di parte 1.200-2.500 euro; accertamento tecnico preventivo qualche migliaio di euro tra contributo, consulente e assistenza; la causa ordinaria costa di più e dura spesso due o tre anni. In caso di vittoria le spese sono poste a carico della controparte secondo la soccombenza." },
      { q: "Ho comprato da un privato che non è il costruttore: ho comunque la garanzia?", a: "Sì, per i gravi difetti. La responsabilità dell'art. 1669 c.c. è extracontrattuale e spetta anche agli acquirenti successivi, direttamente contro il costruttore, entro il decennio dal compimento dell'opera. Verso il tuo venditore privato restano invece i rimedi della compravendita, con i termini brevi degli artt. 1490 e 1495 c.c." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Il primo passo è capire in che termine sei: è una questione di date prima che di diritto. Contattaci dalla pagina contatti inviando le foto dei difetti e la data in cui li hai notati: te lo diciamo subito, insieme alla strada che i fatti sostengono. Per approfondire, leggi la pagina sulla garanzia decennale del costruttore e le guide sui difetti del cappotto termico e sulle infiltrazioni dal terrazzo; puoi anche scaricare il modello di denuncia dei vizi da adattare al tuo caso." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
