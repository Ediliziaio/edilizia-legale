import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "piscina-difetti-costruttore",
  title: "La piscina perde acqua: hai dieci anni di garanzia, non due",
  excerpt:
    "La piscina interrata perde, il rivestimento si stacca, compaiono crepe? È un'opera destinata a lunga durata: la garanzia è quella decennale dell'art. 1669 c.c., non i due anni che molte imprese invocano per chiudere la pratica.",
  category: "Verticali",
  date: "Agosto 2026",
  readTime: "11 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "piscina perde acqua responsabilità costruttore",
    "piscina crepe dopo un anno garanzia",
    "rivestimento piscina si stacca chi paga",
    "piscina interrata difetti costruttivi",
    "impianto filtrazione piscina sottodimensionato",
  ],
  intro:
    "La piscina interrata è un'opera immobiliare destinata per sua natura a lunga durata: rientra quindi nell'art. 1669 c.c., con responsabilità del costruttore per dieci anni dal completamento e non nei due anni della garanzia ordinaria dell'appalto. Perdite strutturali, cedimenti e distacchi del rivestimento sono inquadrabili tra i gravi difetti.",
};

export const seo = {
  seoTitle: "Piscina Perde Acqua: Garanzia 10 Anni del Costruttore",
  metaDescription:
    "La piscina interrata è coperta dalla garanzia decennale dell'art. 1669 c.c., non dai due anni dell'art. 1667: perdite, crepe e distacchi sono gravi difetti.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: la piscina interrata è un'opera destinata a lunga durata, quindi per perdite strutturali, crepe e distacchi risponde il costruttore ex art. 1669 c.c. per dieci anni dal compimento dell'opera. Il termine: la denuncia va fatta entro un anno dalla scoperta del difetto, e l'azione va proposta entro l'anno successivo alla denuncia. L'azione: test di tenuta per distinguere la perdita della vasca da quella dell'impianto, denuncia scritta via PEC, poi accertamento tecnico preventivo e richiesta di ripristino e danni." },

    { type: "h2", text: "Perché la piscina interrata rientra nella garanzia decennale?", id: "garanzia-decennale" },
    { type: "p", text: "La risposta che quasi tutti i proprietari si sentono dare è la stessa: \"la garanzia era di due anni ed è scaduta\". È il riferimento all'art. 1667 c.c., la garanzia ordinaria per vizi e difformità dell'appalto: denuncia entro sessanta giorni dalla scoperta, prescrizione in due anni dalla consegna. Se fosse l'unica norma applicabile, la maggior parte dei difetti delle piscine emergerebbe fuori termine, perché perdite e fessurazioni si manifestano tipicamente dopo due o tre stagioni." },
    { type: "p", text: "Ma non è l'unica norma. Una vasca in cemento armato interrata è un'opera immobiliare destinata per sua natura a lunga durata: si applica l'art. 1669 c.c., che rende il costruttore responsabile per dieci anni dal compimento dell'opera quando questa rovina, presenta evidente pericolo di rovina o gravi difetti. La giurisprudenza intende i gravi difetti in senso ampio: non serve il crollo, basta un'alterazione che compromette in modo apprezzabile il godimento o la funzionalità dell'opera — e una piscina che non tiene l'acqua è l'esempio di scuola. Le Sezioni Unite (Cass. SS.UU. n. 7756/2017) hanno esteso lo stesso regime anche agli interventi di ristrutturazione su opere esistenti." },
    { type: "p", text: "C'è un vantaggio ulteriore: la responsabilità ex art. 1669 c.c. ha natura extracontrattuale, quindi può invocarla anche chi ha comprato la casa con la piscina già realizzata, senza alcun contratto con l'impresa costruttrice." },

    { type: "figure", slot: "piscina-difetti-costruttore-1", alt: "Piscina interrata in cemento armato con fessurazione verticale sulla parete", caption: "Le fessurazioni strutturali di una vasca interrata rientrano tra i gravi difetti." },

    { type: "h2", text: "Quali sono i difetti tipici e cosa rivelano?", id: "difetti-tipici" },
    { type: "p", text: "Ogni sintomo racconta una causa probabile, e la causa decide l'inquadramento giuridico. La tabella riassume i casi più frequenti nella pratica." },
    { type: "table", headers: ["Sintomo", "Causa probabile", "Inquadramento"], rows: [
      ["Il livello cala anche a impianto fermo", "Fessurazioni della vasca, giunti di ripresa non trattati", "Grave difetto ex art. 1669 c.c."],
      ["Il livello cala solo a impianto acceso", "Perdita nelle tubazioni o nei raccordi dell'impianto", "Da verificare: impianto o posa, spesso art. 1669 se interrato"],
      ["Crepe verticali o diagonali sulle pareti", "Cedimenti del terreno, armatura o copriferro insufficienti", "Grave difetto ex art. 1669 c.c."],
      ["Rivestimento o piastrelle che si staccano", "Posa difettosa, supporto non idoneo, mancata impermeabilizzazione", "Grave difetto se diffuso; art. 1667 c.c. se localizzato ed estetico"],
      ["Bordo o pavimentazione perimetrale che cede", "Sottofondo non compattato, mancanza di drenaggio", "Grave difetto se compromette uso e sicurezza"],
      ["Acqua sempre torbida, ricambio insufficiente", "Impianto di filtrazione sottodimensionato in progetto", "Difetto funzionale: art. 1669 c.c. se rende l'opera inidonea all'uso"],
    ] },
    { type: "p", text: "La distinzione non è accademica: sotto l'art. 1667 c.c. i termini sono brevissimi, sotto l'art. 1669 c.c. hai un decennio di copertura. Per questo la prima mossa dell'impresa è sempre derubricare il difetto a questione estetica o di manutenzione; la tua è documentare che il difetto compromette la funzione dell'opera." },

    { type: "h2", text: "Come si prova la perdita: il test di tenuta", id: "test-di-tenuta" },
    { type: "p", text: "Dire \"la piscina perde\" non basta: bisogna dimostrare dove perde, perché la difesa tipica dell'impresa è attribuire il calo all'evaporazione o all'impianto idraulico. Il test di tenuta segue un protocollo semplice: si misura l'abbassamento del livello per 24-48 ore a impianto completamente fermo, poi per un periodo analogo a impianto acceso, scomputando l'evaporazione naturale con un contenitore di riferimento riempito d'acqua e posto a bordo vasca. Se il livello cala anche a impianto fermo oltre l'evaporazione, la perdita è della vasca; se cala solo a impianto acceso, il problema è nelle tubazioni." },
    { type: "p", text: "Accertata la perdita strutturale, il tecnico verifica le cause: spessore del copriferro, trattamento dei giunti di ripresa, qualità del calcestruzzo, eventuali cedimenti del terreno di fondazione. Se l'impresa nega o non risponde, lo strumento giusto è l'accertamento tecnico preventivo ex art. 696-bis c.p.c.: cristallizza lo stato dei luoghi con un consulente nominato dal giudice, interrompe la dinamica del rimpallo e spesso apre la strada alla conciliazione. Nel frattempo conserva bollette dell'acqua, foto datate e ogni comunicazione scritta: la data della scoperta sarà il primo terreno di scontro sui termini." },

    { type: "h2", text: "Il secondo fronte: titolo edilizio e distanze", id: "titolo-edilizio" },
    { type: "p", text: "Prima di chiedere il rifacimento, controlla la pratica edilizia. La piscina interrata comporta una trasformazione permanente del territorio e richiede di regola un titolo abilitativo, spesso il permesso di costruire; i regolamenti comunali impongono inoltre distanze minime dal confine. Non è raro scoprire, proprio in occasione della perizia, che il titolo manca o che la distanza non è rispettata: è un problema autonomo, che può diventare un'arma del vicino o del Comune." },
    { type: "p", text: "Il punto operativo: non ha senso chiedere il rifacimento di un'opera che rischia un ordine di rimessa in pristino. I due fronti vanno gestiti in parallelo — verifica di sanabilità da un lato, azione contro il costruttore dall'altro. Sul tema rinviamo alla guida dedicata agli abusi edilizi." },

    { type: "h2", text: "Cosa puoi chiedere al costruttore?", id: "cosa-chiedere" },
    { type: "p", text: "Sotto l'art. 1669 c.c. la domanda è risarcitoria: il costo del ripristino quantificato dalla perizia (che nei difetti strutturali può avvicinarsi al valore dell'opera), il danno da mancato godimento delle stagioni perse, le spese vive di riempimento e trattamento dell'acqua dispersa. Su una perdita di qualche centimetro al giorno per un'intera stagione, l'acqua e i prodotti chimici diventano una voce tutt'altro che simbolica. Se preferisci la via contrattuale e sei nei termini dell'art. 1667 c.c., puoi chiedere in alternativa l'eliminazione dei vizi a spese dell'impresa o la riduzione del prezzo (art. 1668 c.c.)." },

    { type: "h3", text: "I passi, nell'ordine giusto" },
    { type: "ol", items: [
      "Denuncia il difetto al costruttore via PEC o raccomandata entro 1 anno dalla scoperta, descrivendo i sintomi e riservando ogni azione",
      "Incarica un tecnico del test di tenuta: 24-48 ore a impianto fermo, poi a impianto acceso, con scomputo dell'evaporazione",
      "Documenta tutto con foto datate, letture del contatore e bollette dell'acqua",
      "Verifica la pratica edilizia: titolo abilitativo e distanza dal confine prevista dal regolamento comunale",
      "Se l'impresa nega o tace, deposita ricorso per accertamento tecnico preventivo ex art. 696-bis c.p.c.",
      "Proponi l'azione entro 1 anno dalla denuncia (art. 1669, secondo comma, c.c.): il termine corre anche mentre tratti",
    ] },

    { type: "figure", slot: "piscina-difetti-costruttore-2", alt: "Test di tenuta con misurazione dell'abbassamento del livello dell'acqua", caption: "Il test distingue la perdita della vasca da quella dell'impianto idraulico: cambia il responsabile." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Piscina interrata in cemento armato da 10 per 4 metri, realizzata nel 2021 per 58.000 euro. Dal 2024 il livello dell'acqua cala di circa tre centimetri al giorno e compaiono due fessure verticali sulla parete lunga. L'azienda risponde per iscritto che \"la garanzia era di due anni ed è scaduta\". La risposta è sbagliata: l'opera è destinata a lunga durata, si applica la responsabilità decennale dell'art. 1669 c.c. e il proprietario è nei termini fino al 2031, purché denunci entro un anno dalla scoperta." },
    { type: "p", text: "La prova. Il test di tenuta misura l'abbassamento a impianto fermo e a impianto acceso: la perdita si conferma anche a impianto fermo, quindi è la vasca. La verifica strutturale evidenzia copriferro insufficiente e giunti di ripresa non trattati — difetti di esecuzione, non di manutenzione. Il secondo fronte emerge controllando la pratica edilizia: la piscina è stata realizzata a una distanza dal confine inferiore a quella del regolamento comunale, un problema autonomo da gestire in parallelo prima di pretendere il rifacimento." },
    { type: "p", text: "Il bivio: se il proprietario avesse accettato la risposta sui due anni, avrebbe abbandonato un diritto ancora pieno; avendo invece denunciato subito e avviato l'accertamento tecnico, la richiesta comprende il costo del ripristino quantificato dalla perizia, il mancato godimento delle stagioni perse e le spese di acqua e trattamento — che a tre centimetri al giorno per una stagione sono una cifra concreta, non una voce di principio." },
    { type: "note", text: "L'errore da non fare: svuotare la vasca prima di aver eseguito il test di tenuta e documentato la perdita. Si distrugge la prova principale e, con falda alta, lo svuotamento può perfino danneggiare la struttura per sottospinta. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende dalle risultanze tecniche e dai documenti del caso specifico." },

    { type: "timeline", title: "Dieci anni, non due", steps: [
      { when: "Completamento dell'opera", label: "Parte la responsabilità decennale", detail: "La piscina interrata è opera immobiliare destinata a lunga durata." },
      { when: "Comparsa del difetto", label: "Perdite, cedimenti, distacchi del rivestimento", detail: "Inquadrabili tra i gravi difetti dell'art. 1669 c.c." },
      { when: "1 anno dalla scoperta", label: "Denuncia al costruttore", detail: "È il termine che quasi tutti lasciano scadere convinti di essere fuori garanzia." },
      { when: "In parallelo", label: "Verifica del titolo edilizio e delle distanze", detail: "Un secondo fronte che va gestito insieme, non dopo." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quanti anni di garanzia ho sulla piscina interrata?", a: "Per perdite strutturali, crepe, cedimenti e distacchi diffusi vale la responsabilità decennale dell'art. 1669 c.c.: dieci anni dal compimento dell'opera, con denuncia entro un anno dalla scoperta e azione entro l'anno successivo. I due anni dell'art. 1667 c.c. riguardano i vizi minori, non i gravi difetti di un'opera destinata a lunga durata." },
      { q: "La perdita d'acqua è un grave difetto?", a: "Di regola sì. La giurisprudenza considera grave difetto ogni alterazione che compromette in modo apprezzabile la funzionalità o il godimento dell'opera, senza che serva un pericolo di crollo. Una vasca che non tiene l'acqua è inidonea alla sua funzione essenziale: perdite strutturali, fessurazioni e giunti non trattati rientrano quindi nell'art. 1669 c.c." },
      { q: "Come dimostro che perde la vasca e non l'impianto?", a: "Con il test di tenuta: si misura il calo del livello per 24-48 ore a impianto completamente fermo e poi a impianto acceso, scomputando l'evaporazione con un contenitore di riferimento a bordo vasca. Se il livello scende anche a impianto fermo, la perdita è strutturale. Il test va eseguito da un tecnico e verbalizzato, perché sarà la prova centrale." },
      { q: "Vale anche se ho comprato la casa con la piscina già fatta?", a: "Sì. La responsabilità dell'art. 1669 c.c. ha natura extracontrattuale e spetta anche all'acquirente successivo dell'immobile, che non ha alcun contratto con l'impresa costruttrice. I termini sono gli stessi: dieci anni dal compimento dell'opera, denuncia entro un anno dalla scoperta del difetto e azione entro un anno dalla denuncia." },
      { q: "E se la piscina non ha il titolo edilizio o viola le distanze?", a: "È un problema autonomo rispetto ai difetti: espone a sanzioni comunali e ad azioni del vicino, fino all'ordine di rimessa in pristino. Va verificato subito, perché non ha senso pretendere il rifacimento di un'opera a rischio demolizione: prima si valuta la sanabilità, poi si calibra la domanda verso il costruttore, la cui posizione risulta aggravata." },
      { q: "L'impianto di filtrazione sottodimensionato rientra nella garanzia?", a: "Può rientrarvi. Se il sottodimensionamento deriva da un errore di progetto o di esecuzione e rende la piscina inidonea all'uso normale — acqua torbida, ricambio insufficiente — è inquadrabile tra i gravi difetti funzionali ex art. 1669 c.c. Se invece si tratta di un malfunzionamento localizzato e rimediabile, si resta nei termini più brevi dell'art. 1667 c.c." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Molti proprietari si arrendono convinti di essere fuori garanzia: verifichiamo prima in che termine sei davvero. Contattaci dalla pagina contatti con l'anno di realizzazione, i sintomi e le comunicazioni ricevute dall'impresa: ti diciamo se sei dentro i dieci anni e quale prova serve. Per il quadro generale sulle responsabilità del costruttore leggi la guida ai difetti costruttivi; se il problema riguarda guaine e coperture, la guida alle infiltrazioni dal terrazzo affronta il caso speculare." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
