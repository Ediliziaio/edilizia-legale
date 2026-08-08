import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "pompa-di-calore-non-scalda",
  title: "La pompa di calore non scalda: quando è un errore di dimensionamento e chi ne risponde",
  excerpt:
    "Termosifoni tiepidi, blocchi nelle giornate fredde, bolletta raddoppiata? Spesso non è la macchina né la posa: è un errore di dimensionamento. Chi ne risponde e cosa puoi chiedere.",
  category: "Verticali",
  date: "Agosto 2026",
  readTime: "12 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "pompa di calore non scalda abbastanza cosa fare",
    "pompa di calore sottodimensionata responsabilità",
    "bolletta aumentata dopo pompa di calore",
    "pompa di calore va in blocco freddo",
    "termosifoni tiepidi con pompa di calore",
  ],
  intro:
    "Se la pompa di calore non scalda abbastanza e la bolletta è aumentata, nella maggior parte dei casi non è un difetto della macchina ma un errore di dimensionamento: un vizio del progetto, di cui risponde chi ha proposto la soluzione. Hai 60 giorni dalla scoperta per denunciare il vizio all'azienda (art. 1667 c.c.).",
};

export const seo = {
  seoTitle: "Pompa di Calore Non Scalda: Cause, Colpe e Rimedi",
  metaDescription:
    "Pompa di calore che non scalda e bolletta aumentata? Spesso è un errore di dimensionamento, non di posa. Chi risponde, quale perizia serve, cosa chiedere.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: l'impianto deve essere idoneo a riscaldare l'immobile e a rendere quanto promesso; il vizio di dimensionamento ricade su chi ha progettato e proposto l'intervento (artt. 1667 e 1668 c.c.). Il termine: 60 giorni dalla scoperta per la denuncia dei vizi, 2 anni dalla consegna per l'azione. L'azione: perizia sul calcolo del fabbisogno termico, denuncia via PEC, poi adeguamento a spese dell'azienda, riduzione del prezzo o risoluzione." },

    { type: "h2", text: "Come capisci se il problema è il dimensionamento?", id: "sintomi" },
    { type: "p", text: "Il quadro tipico si presenta al primo inverno: nelle mezze stagioni l'impianto sembra funzionare, poi arrivano le giornate fredde e la casa non supera i 18 gradi, la macchina va in blocco o resta in funzione ininterrottamente, i termosifoni sono tiepidi e la bolletta elettrica cresce fino a superare la vecchia spesa a gas. Chi vive questa situazione pensa quasi sempre a un guasto o a un errore di montaggio. Nella maggior parte dei casi non è né l'uno né l'altro." },
    { type: "p", text: "Una pompa di calore aria-acqua rende bene quando lavora a bassa temperatura di mandata, su un edificio con dispersioni contenute o con terminali adeguati (pavimento radiante, ventilconvettori). Installata su un impianto a radiatori ad alta temperatura, in un edificio non isolato, lavora fuori dal proprio campo di efficienza: consuma molto, scalda poco e nelle giornate più fredde va in crisi. Non è un difetto della macchina: è una macchina sbagliata per quell'edificio, mai analizzato prima della vendita." },
    { type: "p", text: "I sintomi che orientano verso il sottodimensionamento o l'errore di progetto sono ricorrenti: temperatura interna che non raggiunge i 20 gradi quando fuori si scende sotto zero, resistenza elettrica di backup che interviene di continuo, cicli di sbrinamento molto frequenti, compressore sempre al massimo, consumi invernali fuori scala rispetto al preventivo." },

    { type: "h2", text: "Vizio di posa o vizio di progetto: chi risponde di cosa?", id: "posa-o-progetto" },
    { type: "p", text: "La distinzione è decisiva perché cambia il responsabile e cambia la prova. Il vizio di posa è un errore di esecuzione: collegamenti idraulici sbagliati, circolatore inadeguato, curve climatiche mai impostate, macchina installata in posizione che ne compromette la resa. Ne risponde l'installatore come appaltatore, ai sensi degli artt. 1667 e 1668 c.c." },
    { type: "p", text: "Il vizio di progetto è un errore a monte: nessun calcolo del fabbisogno termico dell'edificio, macchina scelta a catalogo sulla base dei metri quadri, nessuna verifica dei terminali esistenti né dell'isolamento. Ne risponde chi ha progettato l'intervento e chi lo ha proposto. E qui sta il punto che molte aziende preferiscono ignorare: se l'azienda ha eseguito il sopralluogo e ha presentato una soluzione \"chiavi in mano\", ha assunto anche la responsabilità della scelta tecnica. Non può poi difendersi dicendo che il cliente aveva la casa sbagliata: era suo compito accorgersene prima di vendere." },
    { type: "table", headers: ["", "Vizio di posa", "Vizio di progetto / dimensionamento"], rows: [
      ["Cos'è", "Errore nell'installazione o nella configurazione", "Macchina o soluzione inadatta all'edificio"],
      ["Chi risponde", "L'installatore (artt. 1667-1668 c.c.)", "Chi ha progettato e proposto l'intervento; nel \"chiavi in mano\", l'azienda venditrice"],
      ["Perizia che serve", "Verifica dell'installazione e delle tarature", "Calcolo del fabbisogno termico confrontato con le curve di resa della macchina"],
      ["Rimedio tipico", "Correzione dell'installazione a spese dell'azienda", "Adeguamento dell'impianto, riduzione del prezzo o risoluzione"],
      ["Termini", "Denuncia entro 60 giorni dalla scoperta, azione entro 2 anni dalla consegna", "Stessi termini; se l'intervento è inidoneo allo scopo, si discute anche di inadempimento contrattuale"],
    ] },
    { type: "p", text: "Se sei un consumatore e l'impianto ti è stato venduto e installato dalla stessa azienda, si applica anche la garanzia di conformità del Codice del Consumo (artt. 128 e ss. del D.lgs. 206/2005): il bene deve possedere le qualità e le prestazioni che il venditore ha dichiarato, anche nella pubblicità. La garanzia dura due anni e non richiede di dimostrare la colpa: basta la mancanza di conformità." },

    { type: "h2", text: "Quando la resa promessa è un obbligo contrattuale?", id: "resa-promessa" },
    { type: "p", text: "\"Mi avevano detto che avrei speso la metà.\" È la frase più ricorrente, e la risposta dipende da dove sta scritta quella promessa. Se il risparmio è stato indicato solo a voce dal commerciale, la prova è difficile — non impossibile, ma difficile. Se invece compare in una brochure, nel preventivo, in una simulazione di risparmio o anche in un messaggio WhatsApp, diventa un elemento su cui hai fatto affidamento nel concludere il contratto: il suo mancato raggiungimento è inadempimento della prestazione promessa, non semplice delusione." },
    { type: "p", text: "Per il consumatore la regola è ancora più netta: l'art. 129 del Codice del Consumo include tra i requisiti di conformità anche le dichiarazioni pubbliche del venditore, comprese quelle contenute nella pubblicità. Questo apre una seconda strada, oltre a quella del vizio: non devi dimostrare soltanto che l'impianto è dimensionato male, ma che non rende quanto ti era stato prospettato per convincerti a firmare. Per questo il consiglio più importante è banale e decisivo: conserva tutto il materiale commerciale — brochure, preventivi, simulazioni, chat — e le bollette dell'anno precedente all'installazione." },

    { type: "h2", text: "Quale perizia serve davvero?", id: "perizia" },
    { type: "p", text: "L'errore tipico è commissionare una verifica sull'installazione: il tecnico controlla collegamenti e tarature, certifica che \"l'impianto funziona\" e la pratica sembra chiusa. Ma se il problema è il dimensionamento, quella perizia guarda nel posto sbagliato. Il documento che dimostra il sottodimensionamento è un altro: il calcolo del fabbisogno termico dell'edificio — dispersioni, superfici, isolamento, zona climatica — confrontato con le curve di resa della macchina alle temperature esterne di progetto della località (quelle su cui, per ogni comune, si dimensionano gli impianti)." },
    { type: "p", text: "Se da quel confronto emerge che alle temperature di progetto la macchina non copre il fabbisogno, o lo copre solo con la resistenza elettrica sempre inserita, il sottodimensionamento è dimostrato con numeri, non con impressioni. È la perizia da mettere in mano all'avvocato prima della diffida, e quella su cui un eventuale consulente del giudice lavorerà in un accertamento tecnico preventivo (art. 696-bis c.p.c.), lo strumento che cristallizza la prova e spesso apre la strada a una conciliazione." },

    { type: "h2", text: "Adeguamento, sostituzione o risoluzione: cosa puoi chiedere?", id: "rimedi" },
    { type: "p", text: "L'art. 1668 c.c. e la garanzia di conformità disegnano una scala di rimedi, e conviene percorrerla nell'ordine di praticabilità. Il primo è l'adeguamento a spese dell'azienda: sostituzione dei radiatori con ventilconvettori, integrazione della potenza, corretta taratura delle curve climatiche, interventi sull'involucro se erano compresi nella proposta. È quasi sempre la strada che il cliente vuole davvero, perché il bisogno reale è scaldare la casa, non vincere una causa." },
    { type: "p", text: "Il secondo rimedio è la riduzione del prezzo, proporzionata al minor valore dell'intervento: utile quando l'impianto funziona ma rende strutturalmente meno del promesso. Il terzo, la risoluzione del contratto con restituzione di quanto pagato, scatta quando l'impianto è sostanzialmente inidoneo a riscaldare l'immobile: è il rimedio più radicale e il giudice lo riserva ai casi in cui l'inidoneità è grave. A questi si aggiunge il risarcimento del danno — le maggiori spese in bolletta documentate, gli interventi tampone, l'eventuale noleggio di riscaldamento integrativo." },
    { type: "h3", text: "I passi, nell'ordine giusto" },
    { type: "ol", items: [
      "Raccogli e metti al sicuro il materiale commerciale (brochure, preventivo, simulazioni, chat) e le bollette pre e post installazione",
      "Documenta i sintomi: temperature interne rilevate nelle giornate fredde, foto dei blocchi, letture dei consumi",
      "Invia la denuncia dei vizi via PEC o raccomandata entro 60 giorni dalla scoperta (art. 1667 c.c.): interrompe la discussione sulla tardività",
      "Fai redigere la perizia sul fabbisogno termico confrontato con le curve di resa della macchina",
      "Invia la diffida con un termine di 15 giorni: adeguamento dell'impianto o, in difetto, azione per riduzione del prezzo o risoluzione",
      "Se l'azienda non risponde, valuta l'accertamento tecnico preventivo e agisci comunque entro 2 anni dalla consegna dell'opera",
    ] },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Villetta anni Ottanta, impianto a radiatori. L'azienda propone la sostituzione della caldaia con una pompa di calore aria-acqua per 14.200 euro, promettendo in una brochure \"fino al 50% di risparmio\". Dopo il primo inverno: temperatura interna che non supera i 18 gradi nelle giornate sotto zero, macchina che va in blocco, bolletta elettrica raddoppiata e spesa complessiva superiore a quella dell'anno precedente a gas. La perizia sul fabbisogno termico dice quello che il sopralluogo commerciale avrebbe dovuto dire prima della firma: su radiatori ad alta temperatura, in un edificio non isolato, quella macchina lavora fuori dal proprio campo di efficienza. Non è un difetto di montaggio: è un errore nella proposta." },
    { type: "p", text: "Il percorso: denuncia dei vizi via PEC entro i 60 giorni, perizia allegata, diffida con richiesta di adeguamento — ventilconvettori nelle zone giorno e ritaratura — a spese dell'azienda. Il bivio: se l'azienda collabora, l'adeguamento chiude la vicenda in poche settimane ed è l'esito migliore per tutti; se nega ogni responsabilità trincerandosi dietro \"la macchina funziona\", la strada diventa l'accertamento tecnico preventivo e poi la domanda di riduzione del prezzo o di risoluzione, con il risarcimento delle maggiori spese in bolletta documentate. Avendo conservato la brochure con la promessa di risparmio, il cliente può agire anche per inadempimento della prestazione promessa: una posizione molto più solida di chi ha solo ricordi di conversazioni." },
    { type: "note", text: "L'errore da non fare: accettare mesi di \"tarature\" e interventi tampone senza mai formalizzare nulla per iscritto. Ogni inverno che passa senza denuncia avvicina la scadenza dei termini dell'art. 1667 c.c. e consente all'azienda di eccepire la tardività. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende sempre dai documenti e dalle circostanze specifiche." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "È un difetto o l'ho usata male?", a: "Se la casa non raggiunge la temperatura nelle giornate fredde, la resistenza elettrica interviene di continuo e i consumi sono fuori scala, difficilmente è un problema d'uso. Una perizia sul fabbisogno termico confrontato con le curve di resa della macchina distingue in modo oggettivo l'errore di dimensionamento dal cattivo utilizzo." },
      { q: "Chi risponde: l'installatore o chi ha proposto l'impianto?", a: "Dipende dal tipo di vizio. Gli errori di esecuzione ricadono sull'installatore; l'errore di dimensionamento ricade su chi ha progettato e proposto l'intervento. Se la stessa azienda ha fatto sopralluogo, vendita e posa \"chiavi in mano\", risponde della scelta tecnica nel suo complesso e non può scaricare la colpa sull'edificio." },
      { q: "Posso chiedere la sostituzione della pompa di calore?", a: "Sì, quando l'adeguamento non basta. La scala dei rimedi parte dall'adeguamento a spese dell'azienda (terminali, integrazione, tarature), passa per la riduzione del prezzo e arriva alla risoluzione con restituzione quando l'impianto è sostanzialmente inidoneo a riscaldare l'immobile (art. 1668 c.c.). A questi si aggiunge il risarcimento delle maggiori spese documentate." },
      { q: "Se me l'hanno venduta insieme al fotovoltaico cambia qualcosa?", a: "Sì, in meglio: se il contratto è unico e la proposta era un pacchetto di efficientamento, l'inidoneità di una parte incide sull'intera operazione, e le promesse di risparmio della brochure valgono per il pacchetto complessivo. Le contestazioni su pompa di calore e fotovoltaico si gestiscono nello stesso fascicolo, verso lo stesso responsabile." },
      { q: "Quanto tempo ho per agire?", a: "Nell'appalto, la denuncia dei vizi va fatta entro 60 giorni dalla scoperta e l'azione si prescrive in 2 anni dalla consegna dell'opera (art. 1667 c.c.). Per il consumatore la garanzia di conformità dura due anni dalla consegna (D.lgs. 206/2005). Sono termini brevi: la denuncia scritta via PEC va inviata subito, non dopo l'ennesimo tentativo di taratura." },
      { q: "La promessa di risparmio detta a voce vale qualcosa?", a: "La prova è più difficile ma non impossibile: testimoni, messaggi, comportamenti dell'azienda possono ricostruirla. Se però la promessa compare in brochure, preventivi o simulazioni scritte, diventa un requisito di conformità del bene (art. 129 del Codice del Consumo) e il suo mancato raggiungimento è direttamente contestabile come inadempimento." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se ti hanno promesso un risparmio in bolletta e non è arrivato, il problema di solito è a monte dell'installazione. Verifichiamolo: contattaci dalla pagina contatti con il preventivo, il materiale commerciale e le bollette, e ti diciamo se il quadro è compatibile con un errore di dimensionamento e quale rimedio ha senso chiedere. Se l'impianto ti è stato venduto in pacchetto con i pannelli, leggi anche la guida ai problemi dell'impianto fotovoltaico; e se il contratto è stato firmato in casa tua dopo la visita del commerciale, verifica nella guida al diritto di recesso se hai ancora margini per sciogliere il contratto." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
