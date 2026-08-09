import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "parquet-posato-male",
  title: "Parquet posato male che si solleva: prodotto o posa?",
  excerpt:
    "Il parquet si solleva o si imbarca dopo pochi mesi? Quasi sempre la causa è a monte: umidità residua del massetto e prova igrometrica mai eseguita. Chi risponde, con quali termini e quali prove.",
  category: "Verticali",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "parquet posato male si solleva rimedi",
    "parquet si imbarca umidità massetto",
    "garanzia parquet quanti anni",
    "posa parquet a regola d'arte",
    "contestare posatore parquet",
  ],
  intro:
    "Un parquet che si solleva o si imbarca pochi mesi dopo la posa indica quasi sempre umidità residua nel massetto, non un difetto del legno. Il posatore professionista deve misurare l'umidità prima di posare e rifiutare la posa se è troppo alta: se non l'ha fatto, la responsabilità è sua.",
};

export const seo = {
  seoTitle: "Parquet Posato Male che si Solleva: Chi Risponde",
  metaDescription:
    "Parquet che si solleva o si imbarca? Di norma è umidità del massetto, non il legno. Responsabilità del posatore, termini di denuncia e prove da fare.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: il posatore professionista deve verificare l'umidità del sottofondo prima di posare e rifiutare la posa se il valore è fuori soglia (art. 1176, comma 2, c.c.). Il termine: 60 giorni dalla scoperta se il rapporto è di appalto, 8 giorni se è vendita o contratto d'opera. L'azione: prova igrometrica con metodo al carburo e contestazione scritta immediata." },

    { type: "h2", text: "Che cosa ti sta dicendo il parquet che si muove", id: "sintomi" },
    { type: "p", text: "Il legno è un materiale igroscopico: assorbe e cede umidità fino a raggiungere l'equilibrio con l'ambiente. Quando si muove non lo fa a caso, e la forma del difetto racconta quasi sempre da dove viene il problema. Imparare a leggerla ti serve per non accettare la prima spiegazione che ti verrà data, che di regola è la meno costosa per chi l'ha posato." },
    { type: "p", text: "Un parquet che si imbarca verso l'alto ai bordi delle doghe — la cosiddetta concavità — sta assorbendo umidità dal basso. Un parquet che si arrotonda al centro, con i bordi bassi, sta cedendo umidità verso l'alto e in genere segnala un ambiente troppo secco o una posa avvenuta con legno già umido. Sono due diagnosi opposte e portano a responsabili diversi." },
    { type: "p", text: "Il sollevamento a schiena d'asino, invece, è quasi sempre un problema di dilatazione impedita: il legno si espande, non trova spazio ai giunti perimetrali e l'unica direzione libera è verso l'alto. Gli scricchiolii e i suoni a vuoto indicano distacchi dell'incollaggio, spesso da primer mancante o da colla stesa in quantità insufficiente." },

    { type: "figure", slot: "parquet-posato-male-1", alt: "Doghe di parquet sollevate al centro della stanza con fughe aperte e battiscopa staccato", caption: "La forma del difetto è già una diagnosi: bordi alti significa umidità dal basso, sollevamento centrale significa dilatazione impedita." },

    { type: "h2", text: "L'umidità del massetto: la causa che sta a monte di quasi tutto", id: "umidita-massetto" },
    { type: "p", text: "Nella grande maggioranza dei casi il difetto non nasce dal legno né dalla colla, ma dal sottofondo. Un massetto cementizio cede umidità per mesi: come regola pratica si considera un tempo di asciugatura indicativo di circa una settimana per centimetro di spessore nei primi quattro centimetri, ben più lungo oltre. Con un riscaldamento a pavimento serve inoltre un ciclo di preriscaldamento e raffreddamento documentato prima della posa." },
    { type: "p", text: "Le soglie di riferimento sono note a chiunque lavori nel settore. Per un massetto cementizio si posa quando l'umidità residua non supera il 2 per cento in peso, valore che scende intorno all'1,7 per cento in presenza di impianto radiante. Per i massetti a base di solfato di calcio i valori ammessi sono molto più bassi. La misura attendibile è quella con il metodo al carburo di calcio, che preleva un campione in profondità." },
    { type: "p", text: "Qui sta il punto giuridico decisivo. Il posatore non è un esecutore passivo: è un professionista tenuto alla diligenza qualificata dell'art. 1176, comma 2, c.c. La verifica dell'idoneità del sottofondo fa parte della sua prestazione. Se il massetto è troppo umido ha il dovere di segnalarlo per iscritto e di rifiutare la posa; se posa comunque, assume su di sé il rischio del risultato." },
    { type: "p", text: "È lo stesso principio che regola l'appalto: chi esegue nonostante condizioni inidonee, senza formulare riserve, non può poi invocarle per liberarsi. Nella pratica la domanda che sposta l'esito è una sola: esiste un verbale di misurazione dell'umidità, con data, metodo e valore rilevato?" },

    { type: "table", headers: ["Difetto che osservi", "Causa tecnica più probabile", "Chi risponde in prima battuta"], rows: [
      ["Doghe concave, bordi rialzati", "Umidità residua del massetto o risalita dal sottofondo", "Posatore: mancata verifica igrometrica"],
      ["Doghe convesse, bordi bassi", "Ambiente troppo secco o legno posato già umido", "Posatore o condizioni d'uso, da accertare"],
      ["Sollevamento a schiena d'asino", "Giunti perimetrali e di frazionamento assenti o insufficienti", "Posatore: errore di posa"],
      ["Fughe aperte e stabili tra le doghe", "Ritiro fisiologico eccessivo o umidità del legno errata alla posa", "Fornitore o posatore, secondo la misura"],
      ["Scricchiolii, suono a vuoto, distacchi", "Primer mancante, colla insufficiente, sottofondo polveroso", "Posatore: preparazione del supporto"],
      ["Macchie scure diffuse e odore", "Barriera al vapore assente su sottofondo a contatto con terra", "Chi ha realizzato il massetto e il progettista"],
      ["Deformazioni sull'intera fornitura, anche non posata", "Difetto di essiccazione o di lavorazione del legno", "Fornitore, con rivalsa sul produttore"],
    ] },

    { type: "h2", text: "Prodotto o posa? Come si distinguono i due difetti", id: "prodotto-o-posa" },
    { type: "p", text: "La distinzione conta perché indirizza l'azione verso soggetti diversi, con termini diversi. Il criterio pratico più affidabile è la distribuzione del difetto nello spazio. Un vizio del prodotto è omogeneo: si presenta su tutte le doghe, comprese quelle rimaste in magazzino o posate in stanze con condizioni diverse, e riguarda in genere un lotto identificabile." },
    { type: "p", text: "Un vizio di posa è invece selettivo. Si concentra dove la posa era più delicata: vicino ai muri, sopra le zone del massetto rimaste più umide, in corrispondenza dei passaggi impiantistici, lungo le soglie. Se il parquet è perfetto in tre stanze e disastroso nella quarta, il legno non c'entra quasi mai." },
    { type: "p", text: "Esiste poi una terza ipotesi che i posatori sollevano spesso: l'uso improprio da parte tua, con umidità dell'ambiente fuori intervallo, lavaggi eccessivi, riscaldamento acceso di colpo al massimo. È una difesa che regge solo se documentata e se le istruzioni d'uso ti erano state consegnate: informare il cliente sulle condizioni di mantenimento fa parte della prestazione." },

    { type: "h2", text: "Chi risponde tra posatore, fornitore e chi ha realizzato il massetto", id: "chi-risponde" },
    { type: "p", text: "La configurazione contrattuale cambia molto. Se hai comprato il parquet e fatto posare dallo stesso soggetto, hai un solo interlocutore e la vita è più semplice: risponde di tutto lui, salva la rivalsa verso il produttore. Se invece hai acquistato il materiale da un rivenditore e chiamato un posatore separato, i rapporti sono due e le contestazioni vanno indirizzate a entrambi finché la causa non è accertata." },
    { type: "p", text: "Il caso più delicato è quello del massetto realizzato da un'impresa diversa, magari mesi prima, nell'ambito di una ristrutturazione più ampia. Se il massetto è stato eseguito con dosaggi o spessori sbagliati, o senza barriera al vapore dove serviva, la causa prima sta lì. Ma questo non assolve automaticamente il posatore, che aveva comunque il dovere di misurare prima di posare." },
    { type: "p", text: "Se sopra il parquet c'è un direttore dei lavori, la sua posizione va valutata a parte: risponde dell'omessa vigilanza nei momenti in cui il controllo era esigibile, e la verifica dell'umidità del sottofondo prima della posa delle finiture è uno di questi. In pratica, la contestazione iniziale conviene indirizzarla a tutti i soggetti coinvolti, lasciando che sia l'accertamento tecnico a ripartire le responsabilità." },

    { type: "h2", text: "Le norme tecniche di posa come parametro della regola d'arte", id: "regola-arte" },
    { type: "p", text: "Le norme tecniche non sono legge, ma nel giudizio pesano molto. Il consulente tecnico le usa come parametro oggettivo di ciò che si intende per esecuzione a regola d'arte, e discostarsene senza motivo documentato diventa di fatto un indice di negligenza. Per le pavimentazioni di legno il riferimento sono le norme UNI dedicate alla progettazione e alla posa in opera." },
    { type: "p", text: "Che cosa prescrivono, in sostanza? Che il supporto sia asciutto, planare, compatto e privo di polveri; che l'umidità sia misurata con metodo attendibile e verbalizzata; che il legno sia acclimatato nell'ambiente prima della posa; che ambiente e temperatura rientrino in intervalli definiti; che siano previsti giunti perimetrali adeguati e giunti di frazionamento sulle superfici estese o sui passaggi tra vani." },
    { type: "p", text: "Nella controversia questo si traduce in una lista di domande molto concrete da porre al tecnico. È stato steso il primer consolidante? La colla è compatibile con il tipo di legno e con la presenza dell'impianto radiante? I giunti perimetrali esistono e sono liberi, o il battiscopa li ha bloccati? Le risposte sono verificabili con saggi limitati e chiudono spesso la discussione." },

    { type: "h2", text: "Vendita con posa o appalto? Perché cambia i termini", id: "qualificazione" },
    { type: "p", text: "È il passaggio tecnicamente più insidioso, e quello su cui si perdono più cause per decadenza. Se la fornitura prevale sulla posa — compri il parquet e l'installazione è un servizio accessorio — il contratto è una vendita: valgono gli artt. 1490 e 1495 c.c., con denuncia entro otto giorni dalla scoperta e prescrizione in un anno dalla consegna. Se prevale l'attività di lavorazione, il contratto è un appalto e si applica l'art. 1667 c.c., con sessanta giorni per la denuncia e due anni dalla consegna." },
    { type: "p", text: "C'è una terza figura, spesso trascurata: il contratto d'opera dell'art. 2222 c.c., quando il posatore è un artigiano che lavora con il proprio lavoro prevalente e senza organizzazione d'impresa. In quel caso l'art. 2226 c.c. prevede termini stretti, otto giorni per la denuncia e un anno dalla consegna per l'azione." },
    { type: "p", text: "Se sei un consumatore e hai acquistato da un professionista, hai in più la garanzia legale di conformità degli artt. 128 e seguenti del D.lgs. 206/2005: due anni dalla consegna, con la precisazione importante che l'installazione non corretta eseguita dal venditore o sotto la sua responsabilità è equiparata al difetto di conformità del bene. È il regime più favorevole e va sempre invocato in via alternativa nella contestazione." },
    { type: "p", text: "La regola operativa che ne discende è semplice: non provare a qualificare il contratto da solo prima di contestare. Contesta subito, entro otto giorni dalla scoperta, invocando tutti i regimi in via alternativa. Il termine più breve è quello che rischi di perdere, e rispettarlo non ti costa nulla." },

    { type: "table", headers: ["Regime", "Quando si applica", "Denuncia", "Termine per agire"], rows: [
      ["Appalto — art. 1667 c.c.", "La posa prevale sulla fornitura, cantiere organizzato", "60 giorni dalla scoperta", "2 anni dalla consegna dell'opera"],
      ["Vendita — artt. 1490 e 1495 c.c.", "Acquisto del materiale con posa accessoria", "8 giorni dalla scoperta", "1 anno dalla consegna"],
      ["Contratto d'opera — art. 2226 c.c.", "Artigiano senza organizzazione d'impresa", "8 giorni dalla scoperta", "1 anno dalla consegna"],
      ["Codice del consumo — artt. 128 e ss. D.lgs. 206/2005", "Consumatore che acquista da un professionista", "Termini di legge del codice del consumo", "2 anni dalla consegna"],
      ["Gravi difetti — art. 1669 c.c.", "Il difetto compromette in modo apprezzabile il godimento dell'immobile", "1 anno dalla scoperta", "10 anni dal compimento dell'opera"],
    ] },

    { type: "h2", text: "Quali prove servono e quando vanno fatte?", id: "prove" },
    { type: "p", text: "Il problema della prova, nel parquet, è che si consuma da sola. Se aspetti un anno, il massetto nel frattempo si asciuga e nessuno potrà più dire quanta umidità contenesse il giorno della posa. Per questo la sequenza dei tempi conta quanto il contenuto delle contestazioni." },
    { type: "ol", items: [
      "Giorno 0: foto datate di ogni zona interessata, con riferimento metrico, e nota su temperatura e umidità relativa dell'ambiente",
      "Entro 8 giorni dalla scoperta: contestazione scritta via PEC o raccomandata a posatore e fornitore, invocando in via alternativa appalto, vendita, contratto d'opera e codice del consumo",
      "Entro 15 giorni: incarica un tecnico per la misura dell'umidità del massetto con metodo al carburo di calcio e per la misura dell'umidità del legno",
      "Nella stessa fase: chiedi per iscritto il verbale di misurazione eseguito prima della posa, le schede tecniche di colla e primer e il documento di trasporto del lotto",
      "Assegna 30 giorni per il sopralluogo congiunto e 45 giorni per il rifacimento, precisando che ogni intervento parziale è accettato in via provvisoria",
      "Se non arriva risposta: entro i 60 giorni successivi valuta il ricorso per accertamento tecnico preventivo ex art. 696-bis c.p.c.",
    ] },
    { type: "p", text: "Un avvertimento pratico che vale più di molte considerazioni giuridiche: non far rimuovere il pavimento prima dell'accertamento. La rimozione distrugge la prova principale e ti espone all'obiezione che il difetto non è più verificabile. Se sei costretto a intervenire per necessità, fai eseguire prima un accertamento tecnico e conserva campioni di doghe e di sottofondo." },

    { type: "figure", slot: "parquet-posato-male-2", alt: "Tecnico che preleva un campione di massetto per la prova dell'umidità con il metodo al carburo di calcio", caption: "La misura al carburo sul massetto è la prova che decide la controversia: va fatta prima che il sottofondo si asciughi." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Una ristrutturazione da 90 metri quadrati si chiude a novembre con la posa di un parquet prefinito in rovere per 14.350 euro, materiale e posa dallo stesso rivenditore. A febbraio le doghe della zona giorno mostrano bordi rialzati e fughe irregolari; nelle camere il pavimento è perfetto. Il posatore attribuisce il problema all'umidificatore acceso in soggiorno e propone una levigatura." },
    { type: "p", text: "Il proprietario contesta per iscritto entro una settimana e incarica un tecnico. La misura al carburo in tre punti della zona giorno restituisce valori tra il 3,2 e il 3,8 per cento; nelle camere il massetto è al 2,1 per cento. L'umidità del legno delle doghe rimaste in scatola è nella norma. Il verbale di misurazione precedente alla posa non esiste: il posatore ammette di aver usato solo un igrometro elettrico di superficie. La stima del rifacimento è di 11.900 euro." },
    { type: "p", text: "Il bivio è netto. Prima strada: il posatore accetta il rifacimento della sola zona giorno con nuova misurazione documentata, e la vicenda si chiude in poche settimane. Seconda strada: il posatore nega e chiama in causa l'impresa che ha realizzato il massetto quattro mesi prima; a quel punto l'accertamento tecnico preventivo diventa il passaggio utile, perché il consulente può ripartire le cause tra spessore del massetto, tempi di asciugatura e mancata verifica." },
    { type: "p", text: "Da notare un dettaglio che pesa più dell'importo: l'assenza del verbale di misurazione. È un'omissione che sposta l'onere della discussione, perché la verifica del sottofondo rientra nella prestazione professionale del posatore. Il fatto che le camere siano integre, poi, esclude in radice sia il vizio del lotto sia l'ipotesi dell'umidificatore." },
    { type: "note", text: "L'errore da non fare: accettare una levigatura o una sostituzione parziale senza aver prima misurato l'umidità del massetto. Se il sottofondo è ancora umido, il difetto si ripresenta e nel frattempo i termini di denuncia sono decorsi. Lo scenario descritto è illustrativo: l'esito dipende dai documenti e dalle misure effettive." },

    { type: "timeline", title: "I termini della contestazione sul parquet", steps: [
      { when: "Giorno della scoperta", label: "Parte il termine più breve", detail: "Otto giorni se il rapporto è vendita o contratto d'opera." },
      { when: "Entro 8 giorni", label: "Contestazione scritta", detail: "Invocando in via alternativa tutti i regimi applicabili." },
      { when: "Entro 15 giorni", label: "Prova al carburo sul massetto", detail: "Prima che il sottofondo continui ad asciugarsi." },
      { when: "Entro 60 giorni", label: "Termine dell'appalto", detail: "Denuncia dei vizi ex art. 1667 c.c. se il contratto è di appalto." },
      { when: "1 o 2 anni dalla consegna", label: "Prescrizione dell'azione", detail: "Un anno per vendita e contratto d'opera, due per appalto e codice del consumo." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Quanti anni di garanzia ha un parquet posato?", a: "Dipende dalla qualificazione del contratto. Due anni dalla consegna nell'appalto e nella garanzia di conformità del codice del consumo; un anno nella vendita e nel contratto d'opera artigianale. Se il difetto compromette in modo apprezzabile il godimento dell'immobile può rilevare anche l'art. 1669 c.c., con dieci anni." },
      { q: "Il posatore dice che il massetto non era suo: si libera?", a: "Non automaticamente. Il posatore professionista deve verificare l'idoneità del sottofondo prima di posare e, se l'umidità è fuori soglia, segnalarlo per iscritto e rifiutare la posa. Se ha posato senza misurare e senza riserve, ha assunto il rischio del risultato, salva la rivalsa verso chi ha realizzato il massetto." },
      { q: "Come si misura davvero l'umidità del massetto?", a: "Il metodo attendibile è quello al carburo di calcio, che preleva un campione in profondità e restituisce un valore in percentuale di peso. Gli igrometri elettrici di superficie danno indicazioni orientative ma non sono considerati probanti, perché leggono solo i primi millimetri del sottofondo." },
      { q: "Devo denunciare entro 8 giorni o entro 60?", a: "Finché la qualificazione del contratto non è chiara, comportati come se il termine fosse di otto giorni. Contestare subito, invocando in via alternativa vendita, appalto, contratto d'opera e codice del consumo, non ti costa nulla e ti mette al riparo dalla decadenza più breve." },
      { q: "Posso chiedere il rifacimento totale o solo delle zone difettose?", a: "Dipende dall'estensione del difetto e dalla possibilità di ottenere un risultato omogeneo. Se la sostituzione parziale lascerebbe differenze visibili di tonalità o di quota, o se il sottofondo è compromesso su tutta la superficie, la richiesta di rifacimento integrale è tecnicamente sostenibile e va documentata dal tecnico." },
      { q: "Il parquet scricchiola ma non si vede nulla: è un vizio?", a: "Può esserlo. Scricchiolii diffusi e suono a vuoto indicano di norma distacchi dell'incollaggio, riconducibili a primer mancante, colla insufficiente o supporto polveroso. Si verificano con battitura e saggi mirati. Un rumore isolato e occasionale rientra invece nella normale tolleranza del materiale." },
      { q: "Se ho già fatto rimuovere il pavimento posso ancora agire?", a: "Sì, ma la posizione si indebolisce, perché la prova principale non è più ispezionabile. Diventano decisivi le foto datate, la relazione tecnica eventualmente redatta prima della rimozione, i campioni conservati e le fatture del rifacimento. Per questo conviene sempre accertare prima e rimuovere dopo." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se il parquet si sta muovendo, i due gesti che contano sono immediati: contestare per iscritto entro otto giorni dalla scoperta e far misurare l'umidità del massetto prima che si asciughi. Contattaci dalla pagina contatti con preventivo, fattura e foto: valutiamo la qualificazione del contratto, i termini applicabili e a chi indirizzare la contestazione. Se il problema riguarda invece la posa dei serramenti o un arredo su misura, trovi guide dedicate a quei difetti nella sezione verticali." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
