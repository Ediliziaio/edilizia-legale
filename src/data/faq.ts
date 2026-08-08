/**
 * Motore AEO: una URL per ogni domanda (/domande-frequenti/[slug]).
 * Ogni risposta breve è autonoma (40-60 parole) — è il blocco che i motori
 * di risposta estraggono. L'approfondimento aggiunge il riferimento normativo.
 */

export type FaqEntry = {
  slug: string;
  question: string;
  /** Risposta diretta, 40-60 parole, autonoma. */
  answer: string;
  /** Approfondimento: 2-4 paragrafi. */
  detail: string[];
  /** Slug della guida correlata, se esiste. */
  guida?: string;
  silo: "imprese" | "privati";
};

export const faqEntries: FaqEntry[] = [
  {
    slug: "quanto-tempo-denunciare-difetti-casa-nuova",
    question: "Quanto tempo ho per denunciare i difetti di una casa nuova?",
    answer:
      "Dipende dalla gravità. Per i gravi difetti coperti dall'art. 1669 c.c. hai un anno dalla scoperta per denunciarli e un anno dalla denuncia per agire, entro dieci anni dal completamento dell'opera. Per i vizi meno gravi, l'art. 1667 c.c. prevede sessanta giorni dalla scoperta e due anni dalla consegna.",
    detail: [
      "Il punto più delicato è la nozione di \"scoperta\": non coincide con la prima macchia di umidità, ma con il momento in cui acquisisci consapevolezza certa della gravità del difetto e della sua causa. Nella pratica, spesso è la data della relazione del tecnico.",
      "È per questo che la denuncia scritta va inviata subito, anche prima della perizia completa: la denuncia interrompe la decadenza, l'approfondimento tecnico arriva dopo.",
      "Se hai comprato dal costruttore-venditore possono valere anche le garanzie della vendita (artt. 1490 e 1495 c.c.), con termini propri. La qualificazione corretta del rapporto è la prima cosa da verificare.",
    ],
    guida: "difetti-costruttivi-casa-nuova",
    silo: "privati",
  },
  {
    slug: "posso-non-pagare-impresa-lavori-fatti-male",
    question: "Posso non pagare l'impresa se i lavori sono fatti male?",
    answer:
      "In parte sì: l'eccezione di inadempimento dell'art. 1460 c.c. consente di sospendere il pagamento, ma la ritenuta deve essere proporzionata al costo di eliminazione dei difetti. Trattenere l'intero saldo per un vizio modesto espone al decreto ingiuntivo e capovolge la posizione.",
    detail: [
      "La proporzionalità è il criterio chiave: se il difetto costa 1.500 euro da eliminare e il saldo è di 19.000, la ritenuta legittima è nell'ordine del costo di ripristino, non dell'intero importo.",
      "Conta anche il momento della contestazione: i vizi apparenti non contestati alla consegna si considerano accettati, e per i vizi occulti dell'appalto la denuncia va fatta entro sessanta giorni dalla scoperta (art. 1667 c.c.).",
      "La mossa corretta è una contestazione scritta, specifica e quantificata, accompagnata dall'offerta di pagare la parte non contestata.",
    ],
    guida: "opposizione-decreto-ingiuntivo-impresa-edile",
    silo: "privati",
  },
  {
    slug: "quanto-costa-fare-causa-costruttore",
    question: "Quanto costa fare causa a un costruttore?",
    answer:
      "Le voci sono tre: compenso del legale, spese tecniche (perizia di parte e consulenza d'ufficio) e spese di giustizia come il contributo unificato. L'ordine di grandezza dipende dal valore della controversia; prima della causa è spesso previsto il tentativo di mediazione. Un preventivo scritto va richiesto prima dell'incarico.",
    detail: [
      "In molti casi il percorso più efficiente non è la causa ordinaria ma l'accertamento tecnico preventivo (ATP): cristallizza lo stato dei luoghi con un consulente nominato dal giudice e induce spesso a una definizione bonaria, con costi e tempi molto inferiori.",
      "Chi vince la causa recupera di norma una parte delle spese dalla controparte, ma l'anticipazione resta a carico di chi agisce: va messa in conto nella strategia.",
      "Diffida di chi promette esiti certi: l'esito dipende dai documenti e dalla perizia, e nessun professionista serio può garantirlo.",
    ],
    guida: "difetti-costruttivi-casa-nuova",
    silo: "privati",
  },
  {
    slug: "cosa-succede-se-committente-non-paga-sal",
    question: "Cosa succede se il committente non paga il SAL?",
    answer:
      "Il credito da SAL maturato produce interessi di mora commerciali automatici (D.lgs. 231/2002). L'impresa può costituire in mora il committente con un termine scritto e, se il SAL è documentato e controfirmato, chiedere decreto ingiuntivo. La sospensione dei lavori è possibile ma va gestita con la procedura corretta.",
    detail: [
      "Sospendere i lavori d'impulso è l'errore più frequente: senza costituzione in mora scritta, l'impresa rischia la penale da ritardo e passa da creditore a inadempiente.",
      "La sequenza che regge: PEC di costituzione in mora con termine, avvertimento espresso di sospensione ex art. 1460 c.c., poi comunicazione formale di sospensione con verbale fotografico dello stato del cantiere.",
    ],
    guida: "sal-non-pagato",
    silo: "imprese",
  },
  {
    slug: "subappaltatore-puo-chiedere-soldi-committente",
    question: "Il subappaltatore può chiedere i soldi direttamente al committente?",
    answer:
      "No, non con l'azione diretta dell'art. 1676 c.c.: la Cassazione la riserva ai lavoratori dipendenti dell'appaltatore, non all'impresa subappaltatrice. Gli strumenti veri sono l'azione surrogatoria ex art. 2900 c.c. sul credito dell'appaltatore verso il committente e, negli appalti pubblici, il pagamento diretto della stazione appaltante.",
    detail: [
      "È uno degli errori più diffusi sul web: invocare l'art. 1676 c.c. come impresa fa perdere mesi e scopre la strategia. Le sentenze di riferimento sono Cass. n. 12048/2003 e n. 24368/2017.",
      "Il percorso efficace corre su binari paralleli: decreto ingiuntivo contro l'appaltatore, verifica di quanto il committente gli deve ancora, e sequestro conservativo su quel credito prima che venga incassato e disperso.",
    ],
    guida: "subappaltatore-non-pagato",
    silo: "imprese",
  },
  {
    slug: "quanto-dura-causa-difetti-costruttivi",
    question: "Quanto dura una causa per difetti costruttivi?",
    answer:
      "Un giudizio ordinario di primo grado dura in media due o tre anni, a cui si aggiunge la consulenza tecnica d'ufficio. L'accertamento tecnico preventivo è molto più rapido — di norma alcuni mesi — e in una parte significativa dei casi porta a una definizione senza causa.",
    detail: [
      "I tempi dipendono dal tribunale, dalla complessità della perizia e dal numero di parti chiamate (impresa, progettista, direttore dei lavori, assicurazioni).",
      "La variabile che controlli tu è la tempestività: denunciare subito i difetti e promuovere l'ATP per primi significa scegliere il momento e il perimetro dell'accertamento, invece di subirlo.",
    ],
    guida: "difetti-costruttivi-casa-nuova",
    silo: "privati",
  },
  {
    slug: "posso-sospendere-lavori-se-non-mi-pagano",
    question: "Posso sospendere i lavori se non mi pagano?",
    answer:
      "Sì, invocando l'eccezione di inadempimento dell'art. 1460 c.c., ma solo se il mancato pagamento è grave e la sospensione è proporzionata e conforme a buona fede. Serve prima una costituzione in mora scritta con termine; una sospensione immediata e non preceduta da diffida espone alla penale contrattuale.",
    detail: [
      "Il calcolo da fare è sempre lo stesso: credito non pagato contro penale teorica da ritardo. Se la sospensione è legittima la penale non matura, ed è per questo che i passaggi formali vanno fatti nell'ordine e per iscritto.",
      "Se il committente è in difficoltà finanziaria strutturale, sospendere non basta: conviene valutare la risoluzione per grave inadempimento e il recupero di quanto già eseguito.",
    ],
    guida: "sal-non-pagato",
    silo: "imprese",
  },
  {
    slug: "impresa-sparita-con-acconto-cosa-fare",
    question: "L'impresa è sparita con l'acconto: cosa devo fare?",
    answer:
      "Tre passi, nell'ordine: far documentare da un tecnico lo stato dei lavori con foto datate e computo di quanto eseguito; inviare diffida ad adempiere via PEC con termine di almeno quindici giorni e dichiarazione di risoluzione automatica; alla scadenza, affidare il completamento a terzi addebitando all'impresa la maggiore spesa.",
    detail: [
      "Il rilievo tecnico iniziale è il passaggio che quasi tutti saltano ed è il più importante: tra sei mesi sarà impossibile dimostrare a che punto erano i lavori.",
      "Prima di avviare una causa va verificata la capienza dell'impresa: visure, immobili, mezzi, altri cantieri da cui potrebbe incassare. Se non c'è nulla da aggredire, la strategia punta su garanzie, polizze e sequestri tempestivi.",
      "Non ogni abbandono è truffa penale: serve dimostrare artifici o raggiri già al momento della firma. La strada civile è quasi sempre quella concreta.",
    ],
    guida: "impresa-sparita-cantiere-abbandonato",
    silo: "privati",
  },
  {
    slug: "decreto-ingiuntivo-impresa-quanto-tempo-per-opporsi",
    question: "Ho ricevuto un decreto ingiuntivo dall'impresa: quanto tempo ho?",
    answer:
      "Quaranta giorni dalla notifica, e il termine è perentorio: scaduto, il decreto diventa definitivo e non è più contestabile nel merito. Nell'opposizione puoi eccepire i vizi e l'incompletezza dei lavori e chiedere in via riconvenzionale i danni. Se il decreto è provvisoriamente esecutivo va chiesta subito la sospensione.",
    detail: [
      "Prima di opporsi conviene quantificare la contestazione con un preventivo di terzi: se i difetti valgono una frazione dell'importo ingiunto, l'opposizione porta a una riduzione, non all'annullamento, e la trattativa può essere la scelta economicamente migliore.",
      "Il termine non si sospende per le trattative: lasciar passare i quaranta giorni sperando in un accordo verbale è l'errore irreparabile.",
    ],
    guida: "opposizione-decreto-ingiuntivo-impresa-edile",
    silo: "privati",
  },
  {
    slug: "durc-irregolare-quanto-tempo-per-regolarizzare",
    question: "DURC irregolare: quanto tempo ho per regolarizzare?",
    answer:
      "Quindici giorni dal preavviso di accertamento negativo. In quel periodo puoi pagare, ottenere una rateizzazione o contestare l'addebito documentando l'errore dell'ente. Superato il termine senza intervento, il DURC diventa negativo e blocca contemporaneamente i pagamenti degli appalti e la partecipazione alle gare.",
    detail: [
      "Prima di pagare verifica sempre se l'importo è davvero dovuto: una parte delle irregolarità nasce da disallineamenti tra denunce e versamenti o da bonifici imputati male. In quel caso la strada è la contestazione documentale.",
      "La rateizzazione produce effetti sul DURC solo se concessa e regolarmente in corso: il primo versamento saltato la fa decadere.",
    ],
    guida: "durc-irregolare",
    silo: "imprese",
  },
  {
    slug: "contratto-fotovoltaico-firmato-a-casa-posso-annullarlo",
    question: "Ho firmato il contratto del fotovoltaico a casa mia: posso annullarlo?",
    answer:
      "Sì. Per i contratti conclusi fuori dai locali commerciali il Codice del Consumo dà quattordici giorni di recesso senza motivazione. Se il venditore non ti ha informato correttamente del diritto di recesso, il termine si estende fino a dodici mesi e quattordici giorni, e il recesso travolge anche il finanziamento collegato.",
    detail: [
      "La prima verifica riguarda il plico contrattuale: se manca l'informativa e il modulo di recesso, i termini lunghi si applicano anche a impianto già installato.",
      "Il finanziamento è un contratto collegato: se cade il contratto principale, la finanziaria non può più pretendere le rate. La comunicazione va inviata a entrambe, contestualmente.",
    ],
    guida: "recesso-contratto-fotovoltaico",
    silo: "privati",
  },
  {
    slug: "chi-paga-infiltrazioni-lastrico-solare",
    question: "Chi paga le infiltrazioni dal lastrico solare o dal terrazzo?",
    answer:
      "La regola condominiale dell'art. 1126 c.c. ripartisce le spese per un terzo a chi ha l'uso esclusivo e due terzi ai condòmini coperti. Ma se la perdita dipende da un rifacimento eseguito male, la responsabilità è dell'impresa: infiltrazioni da difetto di impermeabilizzazione rientrano nei gravi difetti dell'art. 1669 c.c., con garanzia decennale.",
    detail: [
      "Le due domande — chi ha sbagliato e chi deve pagare — vanno tenute separate: la prima porta all'impresa e alle sue polizze, la seconda al riparto tra condòmini.",
      "Il proprietario sottostante danneggiato può agire direttamente, senza attendere la delibera dell'assemblea: i termini di denuncia corrono anche per lui.",
    ],
    guida: "terrazzo-infiltrazioni",
    silo: "privati",
  },
  {
    slug: "ritenuta-a-garanzia-quando-va-restituita",
    question: "La ritenuta a garanzia: quando va restituita?",
    answer:
      "Alla scadenza del periodo di garanzia contrattuale, salvo che il committente abbia contestato per tempo vizi specifici e quantificati. Una contestazione generica non giustifica il trattenimento. Dal momento della richiesta formale di svincolo il credito produce interessi di mora commerciali.",
    detail: [
      "Nella pratica molte imprese non chiedono mai indietro le ritenute: ricostruendo i SAL degli ultimi anni emergono spesso somme importanti già esigibili.",
      "Il primo passaggio è contabile, non legale: estrarre da ogni cantiere l'importo trattenuto e la data di fine garanzia, poi una sola PEC riepilogativa con termine di trenta giorni.",
    ],
    guida: "ritenuta-a-garanzia",
    silo: "imprese",
  },
  {
    slug: "lavori-extra-ordinati-a-voce-vanno-pagati",
    question: "I lavori extra ordinati a voce vanno pagati?",
    answer:
      "L'art. 1659 c.c. richiede l'autorizzazione scritta del committente per le variazioni, ma la giurisprudenza ammette la prova per altra via: messaggi, annotazioni controfirmate nel giornale dei lavori, collaudo sottoscritto, uso dell'opera modificata. Senza alcun elemento, la strada realistica è la trattativa o l'azione di arricchimento.",
    detail: [
      "Per l'impresa il protocollo che elimina il problema costa due righe: ogni richiesta ricevuta in cantiere viene confermata la sera stessa con un messaggio o una PEC che indica lavorazione e maggior costo stimato.",
      "Per il committente vale il rovescio: in un appalto a corpo le maggiori quantità su voci già comprese non sono dovute, e gli \"imprevisti\" mai comunicati prima dell'esecuzione si contestano voce per voce.",
    ],
    guida: "varianti-in-corso-opera",
    silo: "imprese",
  },
  {
    slug: "accertamento-superbonus-cosa-fare-subito",
    question: "L'Agenzia contesta i crediti Superbonus alla mia impresa: cosa faccio subito?",
    answer:
      "La prima cosa da stabilire è la qualificazione: credito non spettante o inesistente. Da lì dipendono termini, sanzioni e rischio penale. In parallelo vanno valutate l'istanza di sospensione della riscossione e, se il vizio è dell'asseverazione, la rivalsa verso il tecnico asseveratore e la sua polizza.",
    detail: [
      "Se i lavori sono stati realmente eseguiti e documentati — foto, SAL asseverati, bonifici tracciati — la contestazione tende a spostarsi sul terreno del credito non spettante, con un quadro sanzionatorio diverso da quello dei crediti inesistenti.",
      "I termini per il ricorso decorrono dalla notifica dell'atto di recupero: aspettare la cartella significa perdere ogni difesa nel merito.",
    ],
    guida: "accertamento-superbonus-imprese",
    silo: "imprese",
  },
  {
    slug: "garanzia-piscina-quanti-anni",
    question: "La piscina ha due o dieci anni di garanzia?",
    answer:
      "La piscina interrata è un'opera immobiliare destinata a lunga durata: si applica la responsabilità decennale dell'art. 1669 c.c., non i due anni dell'art. 1667. Perdite strutturali, cedimenti e distacchi del rivestimento rientrano nei gravi difetti, purché denunciati entro un anno dalla scoperta.",
    detail: [
      "Molti proprietari si arrendono perché l'azienda risponde che \"la garanzia era di due anni ed è scaduta\": per i difetti strutturali quella risposta è di regola sbagliata.",
      "La prova passa da un test di tenuta secondo protocollo, che distingue la perdita della vasca da quella dell'impianto idraulico.",
    ],
    guida: "piscina-difetti-costruttore",
    silo: "privati",
  },
  {
    slug: "infissi-nuovi-spifferi-di-chi-e-la-colpa",
    question: "Gli infissi nuovi fanno spifferi: di chi è la colpa?",
    answer:
      "Spifferi, condensa e muffa intorno ai serramenti nuovi indicano quasi sempre un difetto di posa in opera, non del prodotto. Il responsabile è l'installatore. Se il contratto prevedeva opere murarie di adattamento si applica l'appalto: sessanta giorni dalla scoperta per denunciare e due anni dalla consegna per agire.",
    detail: [
      "La verifica tecnica si fa con una termografia e, dove serve, una prova di tenuta all'aria: le dispersioni concentrate sui nodi di posa firmano la diagnosi.",
      "C'è anche un danno che quasi nessuno chiede: se le prestazioni reali non raggiungono i valori dichiarati, la detrazione fiscale e la pratica ENEA sono a rischio, e quel pregiudizio va contestato insieme al difetto.",
    ],
    guida: "infissi-montati-male",
    silo: "privati",
  },
  {
    slug: "reverse-charge-quando-si-applica-edilizia",
    question: "Quando si applica il reverse charge in edilizia?",
    answer:
      "Dipende dal tipo di prestazione e dalla posizione nella catena contrattuale, non dal nome dato al contratto: tipicamente si applica ai servizi resi in subappalto nel comparto edile e a specifiche prestazioni su edifici, mentre resta esclusa la fornitura con posa in cui prevale la cessione del bene. L'errore si moltiplica su tutte le fatture successive.",
    detail: [
      "Se l'errore emerge prima di un controllo si può intervenire con note di variazione e ravvedimento, con sanzioni ridotte. Dopo, la difesa punta su buona fede e assenza di danno erariale effettivo, quando l'IVA sarebbe stata comunque detraibile.",
      "Nei cantieri misti — servizi e forniture con posa insieme — la qualificazione va verificata a monte, in fase di contratto.",
    ],
    guida: "reverse-charge-edilizia",
    silo: "imprese",
  },
  {
    slug: "cucina-su-misura-vendita-o-appalto",
    question: "Il contratto della cucina su misura è vendita o appalto?",
    answer:
      "Dipende dalla prevalenza: la composizione di moduli standard con montaggio è vendita; la progettazione e realizzazione su misura per quello spazio è appalto. Cambiano i termini per contestare — otto giorni e un anno nella vendita, sessanta giorni e due anni nell'appalto — e i rimedi, per il consumatore integrati dalla garanzia di conformità.",
    detail: [
      "Il documento decisivo è spesso il modulo di rilievo misure: se le misure le ha prese il tecnico del venditore, l'errore dimensionale è suo e non può essere addebitato al cliente.",
      "Alla consegna, mai firmare senza riserve ciò che è visibilmente difforme: trenta secondi di annotazione sul documento di trasporto valgono più di mesi di contestazioni successive.",
    ],
    guida: "cucina-su-misura-difettosa",
    silo: "privati",
  },
];

export const getFaq = (slug: string) => faqEntries.find((f) => f.slug === slug);
