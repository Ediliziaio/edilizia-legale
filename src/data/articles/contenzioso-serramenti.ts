import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "contenzioso-serramenti",
  title: "Contenzioso sui serramenti: chi risponde, in che termini, con quali prove",
  excerpt:
    "Vendita con posa o appalto? Da questa qualificazione dipendono otto giorni o sessanta per denunciare, un anno o due per agire. Chi risponde tra produttore, posatore e venditore, quali prove tecniche reggono e quando conviene l'ATP.",
  category: "Verticali",
  date: "Agosto 2026",
  readTime: "19 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-navy-light",
  keywords: [
    "contenzioso serramenti",
    "causa contro serramentista",
    "infissi difettosi risarcimento",
    "responsabilità posatore serramenti",
    "perizia infissi contenzioso",
    "contestare fornitura e posa infissi",
  ],
  intro:
    "Nel contenzioso sui serramenti la prima domanda non è chi ha sbagliato, ma come è qualificato il contratto: se prevale la fornitura si applicano gli otto giorni e l'anno della vendita, se prevale la posa con opere di adattamento valgono i sessanta giorni e i due anni dell'appalto. Da questa qualificazione dipendono termini, rimedi e soggetto responsabile.",
};

export const seo = {
  seoTitle: "Contenzioso Serramenti: Chi Risponde e in Che Termini",
  metaDescription:
    "Infissi difettosi: vendita o appalto, 8 giorni o 60, chi risponde tra produttore e posatore, quali prove tecniche reggono e quando conviene l'ATP.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: il committente ha diritto a un serramento conforme al contratto e a una posa che ne conservi le prestazioni dichiarate (artt. 1667 e 1669 c.c., art. 1495 c.c. se prevale la vendita, garanzia di conformità del Codice del Consumo se il committente è consumatore). Il termine: 8 giorni dalla scoperta nella vendita, 60 giorni nell'appalto; azione in 1 o 2 anni dalla consegna, salvo i difetti gravi. L'azione: denuncia scritta immediata, rilievo tecnico strumentale sui nodi di posa, saldo trattenuto in misura proporzionata al costo di ripristino." },

    { type: "h2", text: "Perché il contenzioso sui serramenti è un contenzioso tecnico", id: "perche-tecnico" },
    { type: "p", text: "Il serramento è uno dei pochi componenti dell'edificio che arriva in cantiere con prestazioni dichiarate e misurabili. Un infisso marcato CE porta con sé valori di trasmittanza termica, di permeabilità all'aria, di tenuta all'acqua e di resistenza al vento. Quei valori però appartengono al prodotto in laboratorio. Una volta montato, l'infisso conserva le proprie prestazioni solo se il collegamento con la muratura è eseguito correttamente." },
    { type: "p", text: "Il contenzioso nasce quasi sempre in questo scarto: fra il dato dichiarato e il comportamento reale della finestra installata. La conseguenza processuale è precisa. La controversia si decide sulla consulenza tecnica, non sulle affermazioni delle parti. Chi contesta dicendo \"sento aria\" porta una percezione; chi contesta con una termografia e una prova di tenuta porta un dato." },
    { type: "p", text: "Il secondo elemento di specificità è la pluralità dei soggetti coinvolti. Dietro una finestra ci sono un produttore di profili e vetri, un serramentista che assembla, un posatore che monta, un venditore che ha firmato il contratto e talvolta un direttore dei lavori. Individuare il soggetto corretto da contestare, e nei confronti del quale agire, è metà del lavoro difensivo." },
    { type: "p", text: "Il terzo elemento sono i termini, molto più brevi di quanto la maggior parte dei committenti immagini. A seconda di come il contratto viene qualificato, ci sono otto giorni o sessanta per denunciare e un anno o due per agire. Sbagliare qualificazione significa spesso vedersi eccepire la decadenza prima ancora di poter discutere del difetto." },

    { type: "figure", slot: "contenzioso-serramenti-1", alt: "Dettaglio del nodo di posa di una finestra: telaio, controtelaio e nastro di tenuta interno interrotto in corrispondenza dell'angolo", caption: "Il nodo di posa è il punto in cui si decide quasi ogni contenzioso sui serramenti: il prodotto è quasi sempre conforme, la connessione con il muro no." },

    { type: "h2", text: "Vendita con posa o appalto? Il criterio della prevalenza", id: "qualificazione" },
    { type: "p", text: "La distinzione tra vendita con posa in opera e appalto è la questione preliminare di ogni causa sui serramenti. Nella vendita l'obbligazione principale è il dare: il fornitore consegna un bene, di serie o costruito su misura, e la posa resta un'attività accessoria rispetto al trasferimento. Nell'appalto prevale il fare: l'installazione richiede un'organizzazione di mezzi e lavorazioni che modificano lo stato dei luoghi." },
    { type: "p", text: "Il criterio applicato è quello della prevalenza, economica e funzionale. Quando il contratto comprende il rilievo delle misure in cantiere, la rimozione dei vecchi telai, la posa di controtelai, il ripristino delle spallette, la sigillatura dei giunti e le opere murarie di raccordo, la posa non è più un'appendice della fornitura. In quei casi il rapporto viene qualificato come appalto o contratto d'opera, con la disciplina che ne consegue." },
    { type: "p", text: "Restano invece nell'area della vendita le forniture di serramenti a catalogo installati su fori già predisposti, con montaggio rapido e senza opere murarie. La qualificazione non dipende dal nome che le parti hanno dato al documento: un foglio intestato \"conferma d'ordine\" può contenere un appalto, e un documento intitolato \"contratto d'appalto\" può risolversi in una vendita. Contano l'oggetto reale e il peso delle lavorazioni." },
    { type: "p", text: "Nella pratica la qualificazione si ricava dal preventivo. Se le voci relative a posa, controtelai, smontaggio, smaltimento e ripristini pesano in modo significativo sul totale, l'impostazione da appalto è quella difendibile. È il primo documento che un legale legge quando riceve un fascicolo di questo tipo, prima ancora delle fotografie dei difetti." },

    { type: "h2", text: "Che termini hai davvero: otto giorni, sessanta o due anni?", id: "termini" },
    { type: "p", text: "Dalla qualificazione discendono termini di ordine di grandezza incompatibile. Nella vendita l'art. 1495 c.c. impone la denuncia dei vizi entro otto giorni dalla scoperta e prescrive l'azione in un anno dalla consegna. Nell'appalto l'art. 1667 c.c. concede sessanta giorni dalla scoperta per la denuncia e due anni dalla consegna per agire. La differenza fra le due discipline decide molte cause prima del merito." },
    { type: "p", text: "A questi si aggiunge l'art. 1669 c.c. quando il difetto è grave, cioè incide su elementi essenziali dell'opera o ne compromette la funzionalità. In quel caso il termine è di un anno dalla scoperta per la denuncia e di un anno dalla denuncia per agire, entro il decennio dal compimento dell'opera. Sui serramenti l'ipotesi ricorre quando il difetto di posa produce infiltrazioni ricorrenti o ponti termici che degradano porzioni di muratura." },
    { type: "p", text: "Se il committente è un consumatore, la garanzia di conformità del Codice del Consumo si affianca ai rimedi del codice civile e copre anche i contratti che hanno per oggetto beni da fabbricare o installare. Per i contratti conclusi dal 1° gennaio 2022 non è più previsto l'onere di denuncia entro due mesi. Il difetto che si manifesta entro un anno dalla consegna si presume esistente già a quella data, il venditore risponde dei difetti manifestatisi entro due anni e l'azione si prescrive in ventisei mesi dalla consegna." },
    { type: "p", text: "Il punto pratico è uno solo: la decadenza è l'eccezione più frequente nelle difese dei serramentisti. Per questo la prima comunicazione va spedita subito e con data certa, anche quando la causa tecnica del difetto non è ancora chiara. Una denuncia tempestiva e sommaria, integrata dopo il rilievo tecnico, protegge la posizione meglio di una denuncia perfetta ma tardiva." },

    { type: "table", headers: ["Profilo", "Vendita con posa (art. 1495 c.c.)", "Appalto o contratto d'opera (art. 1667 c.c.)"], rows: [
      ["Prestazione prevalente", "Il dare: consegna del serramento, posa accessoria", "Il fare: adattamenti, controtelai, opere murarie"],
      ["Denuncia del vizio", "8 giorni dalla scoperta", "60 giorni dalla scoperta"],
      ["Termine per agire", "1 anno dalla consegna", "2 anni dalla consegna"],
      ["Rimedi tipici", "Risoluzione o riduzione del prezzo, oltre al danno", "Eliminazione dei vizi a spese dell'impresa, riduzione del prezzo, risoluzione nei casi gravi"],
      ["Difetti gravi", "Restano nella disciplina della vendita", "Possibile art. 1669 c.c.: 1 anno dalla scoperta, entro 10 anni dal compimento"],
      ["Committente consumatore", "Garanzia di conformità: 2 anni dalla consegna, azione in 26 mesi", "Stessa garanzia quando l'oggetto è un bene da fabbricare o installare"],
      ["Primo soggetto da contestare", "Il venditore", "L'appaltatore o l'installatore che ha assunto l'opera"],
      ["Rilievo pratico", "Termine brevissimo: la denuncia va spedita quasi subito", "Più tempo per la denuncia, ma la prova tecnica resta indispensabile"],
    ] },

    { type: "h2", text: "I difetti tipici e che cosa rivelano tecnicamente", id: "difetti-tecnici" },
    { type: "p", text: "Il collegamento fra serramento e muratura si compone di tre giunti sovrapposti. Il giunto primario, sul lato interno, garantisce la tenuta all'aria e il controllo del vapore. Il giunto secondario, centrale, riempie lo spazio e assicura isolamento termico e acustico. Il giunto terziario, sul lato esterno, protegge dalla pioggia battente lasciando però uscire il vapore." },
    { type: "p", text: "La regola tecnica che ne deriva si riassume in una formula: più chiuso all'interno che all'esterno. Se il nastro interno è interrotto, l'aria umida degli ambienti entra nel giunto, incontra superfici fredde e condensa dentro la muratura. È il meccanismo che produce, a distanza di mesi, la muffa sulle mazzette e sugli angoli, quando la posa apparentemente sembrava impeccabile." },
    { type: "p", text: "Gli spifferi lungo il perimetro indicano una discontinuità del giunto primario. La condensa sui contorni murari segnala un ponte termico sul nodo, con temperatura superficiale scesa sotto il punto di rugiada. Le ante fuori squadro e la chiusura dura rimandano quasi sempre a un controtelaio non a piombo, a fissaggi insufficienti o a un telaio deformato in fase di serraggio." },
    { type: "p", text: "Un errore ricorrente merita una menzione autonoma: l'uso della sola schiuma poliuretanica come sistema di tenuta. La schiuma riempie e isola, ma non è una barriera all'aria durevole né una protezione contro la pioggia battente. Una posa affidata alla sola schiuma, senza nastri e sigillanti, è un difetto rilevabile e documentabile in perizia." },

    { type: "table", headers: ["Difetto rilevato", "Causa tecnica ricorrente", "Soggetto tipicamente responsabile"], rows: [
      ["Spifferi lungo il perimetro del telaio", "Giunto primario interrotto, nastro di tenuta non continuo agli angoli", "Posatore"],
      ["Condensa sui contorni murari e sulle spallette", "Ponte termico sul nodo di posa, giunto secondario non riempito", "Posatore, o progettista e DL se il dettaglio era in progetto"],
      ["Muffa negli angoli interni della mazzetta", "Superficie fredda unita a umidità relativa elevata: nodo non risolto", "Posatore"],
      ["Condensa fra i vetri della camera", "Perdita di tenuta del vetrocamera: difetto del prodotto", "Produttore o fornitore"],
      ["Ante fuori squadro, chiusura dura, strisciamenti", "Controtelaio non a piombo, fissaggi insufficienti, telaio deformato al serraggio", "Posatore"],
      ["Infiltrazioni d'acqua dal davanzale", "Giunto terziario e raccordo con la soglia non sigillati", "Posatore"],
      ["Trasmittanza reale peggiore di quella dichiarata", "Profilo o vetro diversi da quelli contrattati e attestati", "Produttore o venditore"],
      ["Rumore esterno superiore alle attese", "Stratigrafia del vetro difforme dall'ordine oppure giunto non riempito", "Produttore o posatore, secondo il rilievo"],
    ] },

    { type: "h2", text: "Chi risponde quando i soggetti in campo sono più di uno?", id: "chi-risponde" },
    { type: "p", text: "Il produttore risponde del prodotto. Rientrano qui la difformità rispetto alla scheda tecnica, il profilo o il vetro diversi da quelli ordinati, la ferramenta difettosa, il vetrocamera che perde tenuta. La marcatura CE e la dichiarazione di prestazione sono documenti che dichiarano valori misurabili: se il serramento consegnato non li rispetta, la contestazione riguarda il prodotto, non il montaggio." },
    { type: "p", text: "Il posatore risponde del nodo di posa, cioè della continuità dei giunti, della verticalità e planarità del controtelaio, dei fissaggi e dei raccordi con soglia e spalle. È il fronte statisticamente più frequente, perché la posa è l'anello meno standardizzato della filiera. Quando il contratto comprendeva adattamenti e opere murarie, la sua obbligazione è di risultato sull'opera finita." },
    { type: "p", text: "Il venditore è il primo interlocutore del committente. Chi ha firmato un contratto di fornitura e posa risponde dell'intera prestazione, compreso l'operato dell'installatore di cui si è avvalso, salvo poi rivalersi internamente. Il committente non deve ricostruire la catena a monte per essere tutelato: deve però contestare al soggetto con cui ha contrattato, e non solo a chi si è materialmente presentato in cantiere." },
    { type: "p", text: "Il direttore dei lavori, quando c'è, risponde della vigilanza sulle modalità esecutive e della verifica dei dettagli costruttivi previsti dal capitolato. Se il progetto conteneva un dettaglio di posa e l'esecuzione se ne è discostata senza rilievi, la responsabilità può concorrere con quella dell'esecutore. Nei cantieri privati minori il direttore lavori spesso manca, e il fronte resta quello impresa-posatore." },
    { type: "h3", text: "Come si isola la responsabilità" },
    { type: "ul", items: [
      "Distinguere subito prodotto e posa: se il difetto è nel serramento chiuso (vetro, ferramenta, profilo), la responsabilità risale al produttore; se è nel collegamento con il muro, resta al posatore",
      "Confrontare il serramento installato con la scheda tecnica e la dichiarazione di prestazione allegate all'ordine",
      "Formulare il quesito peritale in modo che il tecnico attribuisca la causa, non solo che descriva il sintomo",
      "Conservare i documenti che separano le fasi: ordine, DDT di consegna, verbale o rapportino di posa, verbale di consegna finale",
      "Contestare in via cautelativa a tutti i soggetti contrattualmente coinvolti, lasciando alla perizia il compito di ripartire",
      "Valutare la chiamata in causa del terzo quando il convenuto attribuisce la causa a un altro anello della filiera",
    ] },

    { type: "h2", text: "Le prove che reggono davvero", id: "prove" },
    { type: "p", text: "La termografia è lo strumento di prima lettura. Eseguita con una differenza di temperatura sufficiente fra interno ed esterno, restituisce una mappa delle dispersioni e individua le discontinuità sul perimetro dei serramenti. Non misura una portata d'aria, ma localizza il punto in cui il nodo di posa non funziona e permette di indirizzare le verifiche successive." },
    { type: "p", text: "La prova di tenuta all'aria, comunemente chiamata blower door test, mette l'ambiente in depressione e misura il ricambio d'aria dovuto alle infiltrazioni. Abbinata alla termografia in depressione, mostra da quali punti entra l'aria e in che quantità. È il passaggio che trasforma una percezione soggettiva in un valore numerico verificabile, discutibile in contraddittorio e riproducibile dal consulente d'ufficio." },
    { type: "p", text: "Il terzo fronte probatorio è documentale: il confronto fra prestazioni dichiarate e prestazioni reali. Si acquisiscono ordine e conferma d'ordine, schede tecniche, dichiarazione di prestazione, marcatura, disegni esecutivi e capitolato di posa. Poi si verifica che il profilo montato, la stratigrafia del vetro, gli spessori, il gas e il tipo di canalina corrispondano a quanto contrattato." },
    { type: "p", text: "Infine la documentazione fotografica dei nodi, tanto più utile quanto più è stata raccolta in corso d'opera. Fotografie datate del controtelaio, dei nastri prima della chiusura e delle sigillature valgono più di qualunque ricostruzione successiva, perché dopo l'intonaco il nodo di posa non è più visibile senza demolizioni. Chi ha un cantiere in corso ha una finestra probatoria che si chiude in pochi giorni." },
    { type: "h3", text: "Il fascicolo probatorio minimo" },
    { type: "ul", items: [
      "Contratto, preventivo dettagliato e modulo di rilievo misure firmato",
      "Schede tecniche, dichiarazione di prestazione e documentazione della marcatura dei serramenti forniti",
      "Fotografie datate dei nodi di posa, prima e dopo la chiusura, e delle manifestazioni del difetto",
      "Relazione tecnica con termografia e, dove il difetto lo giustifica, prova di tenuta all'aria",
      "Computo metrico del ripristino, voce per voce, redatto dal tecnico",
      "Corrispondenza con data certa: PEC o raccomandate di denuncia e le eventuali risposte",
      "Documenti fiscali del beneficio richiesto: asseverazione, ricevuta della pratica ENEA, bonifici",
    ] },

    { type: "caselaw", title: "Che cosa dice la giurisprudenza", items: [
      {
        court: "Cassazione civile, Sezioni Unite",
        ref: "n. 7756 del 27 marzo 2017",
        principle: "L'art. 1669 c.c. si applica anche alle opere eseguite su edifici preesistenti, quindi a ristrutturazioni e interventi di rilevante ampiezza, e non soltanto alle costruzioni nuove, quando i difetti incidono su elementi essenziali o compromettono la funzionalità dell'opera.",
        impact: "Serramenti sostituiti nell'ambito di una ristrutturazione possono rientrare nella responsabilità decennale, se il difetto di posa produce conseguenze che vanno oltre l'infisso e incidono sulla funzionalità dell'edificio.",
      },
      {
        court: "Orientamento costante di legittimità",
        principle: "La distinzione tra vendita con posa in opera e appalto si fonda sulla prevalenza: quando l'attività di installazione, con gli adattamenti e le opere accessorie che comporta, non è meramente strumentale alla consegna del bene ma costituisce l'oggetto essenziale della prestazione, il contratto è di appalto.",
        impact: "La qualificazione non dipende dal titolo del documento firmato: cambia i termini di decadenza e di prescrizione applicabili, e va argomentata a partire dal contenuto reale del preventivo.",
      },
      {
        court: "Giurisprudenza di merito prevalente",
        principle: "Il committente che eccepisce l'inadempimento per rifiutare il pagamento deve rispettare la proporzionalità e la buona fede: il rifiuto è legittimo se commisurato alla gravità del difetto e al costo della sua eliminazione, non se investe l'intero corrispettivo residuo a fronte di vizi di modesta entità.",
        impact: "Trattenere l'intero saldo quando il ripristino costa una frazione espone a una pronuncia sfavorevole anche in punto di spese: l'importo trattenuto va ancorato a un computo tecnico.",
      },
    ] },

    { type: "h2", text: "Il danno che quasi nessuno chiede: detrazione e pratica ENEA", id: "danno-fiscale" },
    { type: "p", text: "La sostituzione di serramenti accede alle agevolazioni fiscali a condizioni tecniche precise: il rispetto dei valori di trasmittanza previsti per la zona climatica, la documentazione delle caratteristiche del prodotto e la trasmissione della pratica ENEA nei termini stabiliti. Sono condizioni che dipendono in larga parte da chi fornisce e installa, non dal committente." },
    { type: "p", text: "Se il serramento montato non corrisponde a quello attestato, o se le prestazioni reali non raggiungono i valori dichiarati nella documentazione trasmessa, l'agevolazione diventa contestabile. Il committente si trova allora con due danni sovrapposti: un difetto costruttivo da riparare e un'esposizione fiscale che può emergere anni dopo, quando i termini contrattuali verso il fornitore si sono già consumati." },
    { type: "p", text: "Questa voce va quantificata e chiesta insieme al ripristino. Comprende la quota di detrazione compromessa, gli eventuali oneri accessori che ne derivano e il costo del rifacimento della pratica e delle asseverazioni. Il collegamento con l'inadempimento del fornitore è diretto, perché è lui che ha attestato dati poi non riscontrati sul posato." },
    { type: "p", text: "In termini operativi conviene chiedere subito copia dell'asseverazione, della ricevuta ENEA e delle schede tecniche depositate. Se l'impresa si era assunta anche la gestione della pratica, quell'obbligazione è parte del contratto e il suo inadempimento va contestato insieme al difetto tecnico, nello stesso atto e con gli stessi termini." },

    { type: "h2", text: "Conviene l'accertamento tecnico preventivo o la causa di merito?", id: "atp-o-causa" },
    { type: "p", text: "L'accertamento tecnico preventivo ha senso quando lo stato dei luoghi rischia di essere alterato e quando serve un tecnico terzo per sbloccare una trattativa ferma. Sui serramenti la prima condizione ricorre di frequente: appena l'appartamento viene finito, arredato o l'impresa interviene a modo suo, il nodo di posa originario non è più accertabile. Il tempo lavora contro la prova." },
    { type: "p", text: "La consulenza tecnica preventiva finalizzata alla composizione della lite ha una funzione ulteriore: il consulente tenta la conciliazione. In molte vertenze sui serramenti l'oggetto reale del contendere è un importo determinabile con un computo, e una relazione tecnica terza è spesso sufficiente a definire la questione senza arrivare alla causa di merito." },
    { type: "p", text: "La causa di merito resta necessaria quando la controparte nega ogni responsabilità, quando serve una condanna al pagamento di somme già esborsate, quando il danno eccede il costo del ripristino oppure quando si discute della risoluzione del contratto. Anche in questi casi, però, un accertamento preventivo può precedere utilmente il giudizio, perché consolida la prova quando è ancora disponibile." },
    { type: "p", text: "Attenzione a un equivoco frequente: l'accertamento tecnico preventivo non sospende i termini di decadenza. La denuncia va comunque effettuata nei giorni previsti dalla disciplina applicabile e la domanda giudiziale va proposta entro la prescrizione, salvo atti interruttivi. Anche la mediazione, dove è condizione di procedibilità, va calendarizzata tenendo conto di quei termini e non al posto loro." },

    { type: "h2", text: "La leva del saldo non ancora pagato", id: "saldo" },
    { type: "p", text: "Nei contratti di fornitura e posa il saldo si paga alla consegna, e i difetti dei serramenti si manifestano quasi sempre dopo: al primo inverno, con il primo temporale battente, alla prima stagione di riscaldamento. Chi ha ancora una parte del corrispettivo da versare quando il difetto emerge dispone di una leva contrattuale che l'art. 1460 c.c. riconosce espressamente." },
    { type: "p", text: "La condizione è la proporzionalità. Il rifiuto di pagare deve essere commisurato alla gravità dell'inadempimento e conforme a buona fede. La misura difendibile è quella ancorata al costo di ripristino stimato da un tecnico: si trattiene quell'importo, si paga la differenza e si comunica per iscritto il criterio adottato. Trattenere l'intero saldo per un difetto circoscritto è la condotta che indebolisce di più la posizione." },
    { type: "p", text: "In concreto la sequenza è questa: perizia con computo del ripristino, comunicazione scritta che indica l'importo trattenuto e la causale, offerta formale di pagamento della differenza. Se il fornitore reagisce con un decreto ingiuntivo, il committente si presenta in opposizione con un conteggio già documentato e con un'offerta di pagamento parziale già effettuata." },
    { type: "p", text: "Se il saldo è già stato versato per intero, questa leva non esiste più e resta la sola domanda risarcitoria, con l'onere di anticipare i costi del ripristino e recuperarli poi. È il motivo per cui il momento del saldo va gestito con attenzione: una verifica funzionale prima del pagamento finale, anche sommaria, cambia tutto il seguito della vicenda." },
    { type: "h3", text: "I passi, nell'ordine giusto" },
    { type: "ol", items: [
      "Giorno 0 — annotare la data di scoperta del difetto con un riscontro oggettivo (fotografie datate, messaggio, segnalazione scritta): da quella data decorrono tutti i termini",
      "Entro 8 giorni dalla scoperta — inviare via PEC o raccomandata una denuncia scritta al venditore e all'installatore, descrivendo i sintomi: si rispetta il termine più breve, così la contestazione regge anche se il contratto verrà qualificato come vendita",
      "Entro 15-20 giorni — far eseguire il rilievo tecnico (termografia e, dove il difetto lo giustifica, prova di tenuta all'aria) e acquisire schede tecniche, dichiarazione di prestazione e documenti d'ordine",
      "Entro 60 giorni dalla scoperta — integrare la denuncia con la specificazione tecnica dei vizi, l'indicazione della causa e il computo del ripristino, così da coprire anche il termine dell'appalto",
      "Contestualmente — comunicare per iscritto l'importo del saldo trattenuto, ancorato al computo, offrendo formalmente il pagamento della differenza",
      "Entro 30 giorni dalla diffida rimasta senza esito — scegliere fra accertamento tecnico preventivo e mediazione, in base all'importo e al rischio che lo stato dei luoghi venga alterato",
      "Entro 1 anno dalla consegna nella vendita, o 2 anni nell'appalto — proporre la domanda giudiziale, salvo atti interruttivi tempestivi",
      "Se il difetto è grave ai sensi dell'art. 1669 c.c. — denuncia entro 1 anno dalla scoperta e azione entro 1 anno dalla denuncia, comunque nel decennio dal compimento dell'opera",
    ] },

    { type: "figure", slot: "contenzioso-serramenti-2", alt: "Immagine termografica di una finestra con la fascia fredda continua lungo il perimetro del telaio e l'angolo inferiore in evidenza", caption: "La termografia localizza la discontinuità del nodo; la prova di tenuta all'aria le assegna un valore numerico." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un committente privato sostituisce undici serramenti in un appartamento in ristrutturazione. Il contratto di fornitura e posa vale 24.380 euro, di cui 5.940 imputati a smontaggio dei vecchi telai, controtelai, posa e ripristino delle spallette. Vengono versati acconti per 16.900 euro e resta un saldo di 7.480 euro, sospeso in attesa della verifica finale. Al primo inverno compaiono condensa su quattro finestre, muffa su due mazzette e aria percepibile lungo il perimetro della portafinestra del soggiorno." },
    { type: "p", text: "Il tecnico incaricato esegue una termografia in depressione e riscontra il nastro interno interrotto su tre nodi, il giunto secondario non riempito su due aperture e il controtelaio del soggiorno fuori piombo di sei millimetri. Profili e vetrocamera risultano invece conformi alle schede tecniche allegate all'ordine. Il computo del ripristino, su cinque aperture, si ferma a 6.150 euro. La causa è quindi nella posa, non nel prodotto." },
    { type: "p", text: "La qualificazione del contratto pesa immediatamente: con 5.940 euro di lavorazioni su 24.380 e opere murarie di adattamento, l'impostazione da appalto è quella difendibile, con sessanta giorni per la denuncia e due anni per agire. La denuncia viene comunque spedita entro otto giorni dalla comparsa dei sintomi, per coprire anche l'ipotesi in cui il rapporto venisse ricondotto alla vendita. Sul saldo, il committente trattiene 6.150 euro pari al computo e versa i 1.330 euro di differenza, comunicando il criterio per iscritto." },
    { type: "p", text: "Il bivio è a questo punto. Se il serramentista accetta di eseguire il ripristino secondo un capitolato di posa condiviso, con verifica strumentale finale a suo carico, la vicenda si chiude senza contenzioso e il saldo viene liberato a lavori conclusi. Se nega la responsabilità, la scelta ragionevole è l'accertamento tecnico preventivo prima che l'appartamento venga finito e arredato, perché dopo l'intonaco e i rivestimenti il nodo di posa non è più accertabile senza demolizioni. Il fronte fiscale, in questo caso, regge: i prodotti installati corrispondono a quelli attestati nella pratica, e la contestazione resta circoscritta alla posa." },
    { type: "note", text: "L'errore da non fare: pagare l'intero saldo alla consegna in cambio della promessa verbale di \"tornare a sistemare\". Chiuso il pagamento, sparisce la leva contrattuale e restano solo i termini di decadenza che corrono. Lo scenario descritto è illustrativo: importi, cause tecniche ed esito dipendono sempre dai documenti e dalle circostanze del caso concreto." },

    { type: "timeline", title: "I termini del contenzioso sui serramenti", steps: [
      { when: "Giorno della scoperta", label: "Parte il termine di denuncia", detail: "8 giorni nella vendita (art. 1495 c.c.), 60 giorni nell'appalto (art. 1667 c.c.): finché la qualificazione non è certa, vale il più breve." },
      { when: "Entro 60 giorni", label: "Denuncia specificata per iscritto", detail: "Descrizione tecnica dei vizi, indicazione della causa e computo del ripristino, inviati con data certa a venditore e installatore." },
      { when: "1 anno dalla consegna", label: "Prescrizione dell'azione nella vendita", detail: "Art. 1495 c.c.: decorso l'anno resta la possibilità di far valere la garanzia in via di eccezione, se il prezzo non è stato pagato e il vizio era stato denunciato nei termini." },
      { when: "2 anni dalla consegna", label: "Prescrizione dell'azione nell'appalto", detail: "Art. 1667 c.c., salvo atti interruttivi tempestivi e salvo il riconoscimento del vizio da parte dell'impresa." },
      { when: "10 anni dal compimento", label: "Finestra dei difetti gravi", detail: "Art. 1669 c.c.: denuncia entro 1 anno dalla scoperta e azione entro 1 anno dalla denuncia, nel decennio dal compimento dell'opera." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Devo contestare al negozio o a chi ha montato gli infissi?", a: "Al soggetto con cui hai firmato il contratto, in via principale. Chi ha venduto fornitura e posa risponde anche dell'operato del proprio installatore. In via cautelativa conviene comunque inviare la denuncia a entrambi, lasciando alla perizia il compito di attribuire la causa fra prodotto e posa." },
      { q: "Quanti giorni ho per contestare serramenti difettosi?", a: "Otto giorni dalla scoperta se il contratto è qualificabile come vendita con posa, sessanta se prevale l'appalto. Poiché la qualificazione si discute in giudizio, la scelta prudente è spedire una prima denuncia scritta entro otto giorni e integrarla con la relazione tecnica entro i sessanta." },
      { q: "Posso trattenere il saldo se gli infissi sono difettosi?", a: "Sì, ma in misura proporzionata. L'importo difendibile è quello corrispondente al costo di ripristino stimato da un tecnico, non l'intero residuo. Va comunicato per iscritto il criterio adottato, offrendo formalmente il pagamento della differenza: è la condotta che regge meglio in un'eventuale opposizione a decreto ingiuntivo." },
      { q: "La condensa sui vetri è sempre colpa di chi ha montato?", a: "No, e la distinzione è tecnica. La condensa fra i due vetri della camera indica una perdita di tenuta del vetrocamera, quindi un difetto del prodotto. La condensa sui contorni murari e sulle spallette segnala invece un ponte termico sul nodo di posa, riconducibile all'installazione." },
      { q: "Serve per forza una perizia per fare causa?", a: "Formalmente no, praticamente sì. Il contenzioso sui serramenti si decide sulla consulenza tecnica, e una contestazione fondata solo su percezioni difficilmente regge il confronto con il consulente d'ufficio. Una relazione di parte con rilievi strumentali orienta anche il quesito peritale e il computo del ripristino." },
      { q: "Che cos'è il blower door test e quando serve?", a: "È una prova che mette l'ambiente in depressione e misura le infiltrazioni d'aria. Sui serramenti serve quando la contestazione riguarda spifferi e permeabilità: abbinata alla termografia, individua i punti di ingresso e li quantifica, sostituendo un'affermazione soggettiva con un dato riproducibile in contraddittorio." },
      { q: "Se le prestazioni reali sono inferiori a quelle dichiarate, cosa succede alla detrazione?", a: "L'agevolazione può essere contestata, perché è condizionata al rispetto di requisiti tecnici e alla correttezza della documentazione trasmessa. È un danno ulteriore, distinto dal costo del ripristino, che va quantificato e richiesto insieme agli altri nella stessa contestazione al fornitore." },
      { q: "Meglio l'accertamento tecnico preventivo o andare direttamente in causa?", a: "Dipende dallo stato dei luoghi. Se il nodo di posa rischia di diventare inaccessibile perché il cantiere prosegue, l'accertamento preventivo va valutato subito. Se la controparte nega ogni responsabilità e servono somme già anticipate, la causa di merito diventa il percorso necessario." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se hai serramenti che danno spifferi, condensa o muffa, il primo passo è capire due cose: come è qualificato il contratto che hai firmato e quanto tempo ti resta. Da lì dipendono il soggetto da contestare, il termine da rispettare e l'utilità di un rilievo strumentale. Contattaci dalla pagina contatti: leggiamo il contratto e la documentazione tecnica e ti indichiamo quale strada ha senso nel tuo caso." },
    { type: "p", text: "Per approfondire i due temi che tornano più spesso in questi fascicoli: la guida su /guide/infissi-montati-male è dedicata ai sintomi della posa difettosa e alla garanzia del consumatore, mentre /guide/differenza-1667-1669 spiega quando un difetto dei serramenti esce dai due anni dell'appalto ed entra nella finestra decennale dei gravi difetti." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
