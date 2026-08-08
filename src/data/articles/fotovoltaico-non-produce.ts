import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "fotovoltaico-non-produce",
  title: "Il fotovoltaico non produce quanto promesso: cosa puoi chiedere davvero",
  excerpt:
    "Bollette che non calano e produzione lontana dal piano di rientro? Se la producibilità era promessa in contratto è inadempimento: come si misura il divario e cosa puoi chiedere, dall'adeguamento alla risoluzione.",
  category: "Verticali",
  date: "Agosto 2026",
  readTime: "14 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "impianto fotovoltaico non produce quanto promesso",
    "fotovoltaico bolletta non è diminuita cosa fare",
    "infiltrazioni tetto dopo installazione pannelli",
    "impianto fotovoltaico difettoso risoluzione contratto",
    "producibilità garantita fotovoltaico contratto",
    "accumulo non installato contratto fotovoltaico",
  ],
  intro:
    "Se la producibilità annua è indicata nel contratto o nel materiale promozionale su cui il cliente ha fatto affidamento, uno scostamento significativo e non giustificabile con l'irraggiamento dell'anno costituisce inadempimento. Il committente può chiedere l'adeguamento dell'impianto, la riduzione del prezzo o, se il divario è rilevante, la risoluzione del contratto.",
};

export const seo = {
  seoTitle: "Fotovoltaico Non Produce Quanto Promesso: Cosa Fare",
  metaDescription:
    "L'impianto fotovoltaico produce meno del promesso? Se la producibilità è in contratto è inadempimento: adeguamento, riduzione del prezzo o risoluzione.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: se il contratto o la proposta indicano una producibilità annua, quella è una prestazione promessa e lo scostamento rilevante è inadempimento (art. 1453 c.c.); i difetti dell'installazione seguono la garanzia dell'appalto (art. 1667 c.c.). Il termine: 60 giorni dalla scoperta per denunciare i vizi, 2 anni dalla consegna per agire; per i danni gravi alla copertura può valere il decennio dell'art. 1669 c.c. L'azione: misurare il divario con i dati reali di produzione e l'irraggiamento di zona, individuare la causa tecnica con perizia, poi scegliere tra adeguamento, riduzione del prezzo e risoluzione." },

    { type: "h2", text: "Quello che ti hanno promesso è vincolante? Dipende da come è scritto", id: "promessa-vincolante" },
    { type: "p", text: "Quasi tutti i contratti fotovoltaici vengono venduti con un \"piano di rientro\": una producibilità annua in kWh, un risparmio in bolletta, un numero di anni per ripagare l'investimento. La prima domanda giuridica è se quei numeri vincolano il venditore o sono pubblicità. La risposta sta nei documenti: se la producibilità è scritta nel contratto, in un allegato tecnico o nella proposta accettata, è parte della prestazione dovuta." },
    { type: "p", text: "Ma anche i numeri rimasti fuori dal contratto non spariscono. Se il cliente è un consumatore, le caratteristiche dichiarate nel materiale promozionale e nelle comunicazioni precontrattuali concorrono a definire la conformità del bene (artt. 128 e ss. Codice del Consumo), e le informazioni precontrattuali integrano il contratto (art. 49 Cod. Cons.). Un piano di rientro consegnato a mano dal commerciale, su cui il cliente ha basato la decisione di acquisto, non è carta straccia: è il metro su cui si misura l'inadempimento." },
    { type: "p", text: "Se invece il contratto tace del tutto sulla produzione, la strada dell'inadempimento della prestazione promessa si restringe e si lavora sui vizi dell'opera: un impianto dimensionato o orientato male non è a regola d'arte, a prescindere dalle promesse." },

    { type: "h2", text: "Come si misura davvero il divario di produzione?", id: "misurare-divario" },
    { type: "p", text: "\"La bolletta non è calata\" non basta: la bolletta dipende anche dai consumi, dai prezzi dell'energia e dall'autoconsumo. Il dato che regge è la produzione lorda in kWh, che l'inverter e il portale di monitoraggio registrano giorno per giorno, confrontata con la producibilità promessa e con l'irraggiamento reale della zona nel periodo." },
    { type: "p", text: "Il confronto corretto si fa in tre passaggi. Primo: raccogliere almeno dodici mesi di produzione reale, meglio ventiquattro, per neutralizzare la stagionalità. Secondo: normalizzare rispetto all'irraggiamento effettivo dell'annata, usando banche dati pubbliche come PVGIS, perché un anno poco soleggiato giustifica scostamenti fisiologici. Terzo: quantificare il divario percentuale residuo. Uno scarto di qualche punto è tolleranza tecnica; uno scarto che supera stabilmente il 15-20% su annate normalizzate è un'anomalia che richiede una spiegazione." },
    { type: "p", text: "Questo lavoro va fatto prima di qualsiasi lettera: una contestazione con i numeri normalizzati costringe l'azienda a rispondere nel merito, una lamentela sulla bolletta viene archiviata in una riga." },

    { type: "h2", text: "Le cinque cause tecniche più frequenti", id: "cause-tecniche" },
    { type: "p", text: "Individuare la causa non è curiosità tecnica: determina chi risponde e quale rimedio ha senso. Le cause ricorrenti di sottoproduzione sono cinque, e quasi tutte riconducono a chi ha progettato o installato l'impianto." },
    { type: "ul", items: [
      "Esposizione o inclinazione reale diverse da quelle di progetto: la falda è a sud-ovest, il preventivo assumeva sud. Errore di progettazione della proposta, visibile al sopralluogo",
      "Ombreggiamenti non rilevati: camini, antenne, alberi o edifici vicini che coprono le stringhe nelle ore centrali. Anche questo era rilevabile al sopralluogo commerciale",
      "Errori di stringa o di configurazione dell'inverter: moduli in serie con orientamenti misti senza ottimizzatori, inverter sottodimensionato o mal parametrizzato",
      "Componenti diversi da quelli promessi: moduli di potenza inferiore, accumulo mai installato o di capacità ridotta rispetto all'ordine",
      "Difetti di installazione in senso stretto: connettori mal crimpati, cali di isolamento, moduli danneggiati alla posa, che emergono dal log errori dell'inverter",
    ] },
    { type: "p", text: "La distinzione chiave è tra ciò che era prevedibile al momento della vendita e ciò che no. Un ombreggiamento del camino non è un rischio imprevedibile: è un dato che il proponente doveva rilevare e scontare nel piano. Se non l'ha fatto, il divario non è sfortuna — è un errore della proposta su cui il cliente ha fatto affidamento." },

    { type: "h2", text: "Vizio dell'opera o inadempimento della prestazione promessa?", id: "vizio-o-inadempimento" },
    { type: "p", text: "Sono due strade giuridiche diverse, con termini diversi, e spesso si percorrono insieme. La garanzia per vizi dell'appalto (art. 1667 c.c.) copre i difetti di esecuzione: denuncia entro 60 giorni dalla scoperta, azione entro due anni dalla consegna. Se l'opera è del tutto inadatta alla sua destinazione, l'art. 1668 c.c. consente di chiedere la risoluzione del contratto, oltre a riduzione del prezzo ed eliminazione dei vizi a spese dell'appaltatore." },
    { type: "p", text: "L'inadempimento della prestazione promessa (art. 1453 c.c.) è la strada quando il problema non è come è stato montato l'impianto, ma cosa è stato venduto: una producibilità indicata in contratto e mai raggiunta, un accumulo pagato e mai consegnato. Qui il termine è la prescrizione ordinaria decennale, e la soglia è la non scarsa importanza dell'inadempimento (art. 1455 c.c.). Per il consumatore si aggiunge la garanzia di conformità del Codice del Consumo, che copre anche l'installazione e le caratteristiche dichiarate in pubblicità." },
    { type: "table", headers: ["Rimedio", "Quando ha senso", "Base normativa", "Termini"], rows: [
      ["Adeguamento tecnico a spese dell'azienda", "Il divario è colmabile: moduli aggiuntivi, ottimizzatori, riconfigurazione", "artt. 1667-1668 c.c.; art. 135-bis Cod. Cons.", "Denuncia 60 gg dalla scoperta, azione 2 anni dalla consegna"],
      ["Riduzione del prezzo", "Il divario resta ma l'impianto è utilizzabile", "art. 1668 c.c.; art. 135-bis Cod. Cons.", "Come sopra; per il consumatore prescrizione 26 mesi"],
      ["Risoluzione del contratto", "Divario rilevante, impianto inadatto allo scopo, accumulo mai fornito", "artt. 1453 e 1455 c.c.; art. 1668, co. 2, c.c.", "Prescrizione ordinaria 10 anni (art. 2946 c.c.)"],
      ["Risarcimento danni (incluse infiltrazioni)", "Sempre, in aggiunta agli altri rimedi", "artt. 1453 e 1223 c.c.; art. 1669 c.c. per danni gravi alla copertura", "Per l'art. 1669: denuncia 1 anno dalla scoperta, 10 anni dall'opera"],
    ] },

    { type: "h2", text: "Le infiltrazioni dal tetto: il secondo danno da contestare", id: "infiltrazioni" },
    { type: "p", text: "Il fissaggio delle staffe attraversa il manto di copertura: se le forature non sono sigillate a regola d'arte, l'acqua entra, e le macchie compaiono in genere al primo autunno. È un danno all'immobile distinto dal mancato rendimento, e va contestato insieme, nella stessa diffida — non con una lettera separata sei mesi dopo, quando la prima contestazione si è già arenata." },
    { type: "p", text: "Il profilo giuridico è più serio di quanto sembri: un'infiltrazione che compromette la funzione di tenuta della copertura può integrare il grave difetto dell'art. 1669 c.c., con responsabilità decennale dell'installatore e denuncia entro un anno dalla scoperta. In ogni caso, prima di qualsiasi riparazione fai documentare lo stato dei luoghi con foto datate e, nei casi seri, con un accertamento tecnico: riparare subito senza prova cristallizzata significa spesso pagare due volte." },

    { type: "h2", text: "Riduzione del prezzo, ripristino o risoluzione: come si sceglie?", id: "scelta-rimedi" },
    { type: "p", text: "La scelta del rimedio è strategica, non emotiva. Se il divario è colmabile con interventi tecnici — moduli aggiuntivi, ottimizzatori, spostamento di stringhe — la strada efficiente è chiedere l'adeguamento a spese dell'azienda: è più rapida, conserva l'investimento e non richiede di dimostrare la gravità dell'inadempimento. Se il divario non è colmabile, si punta alla riduzione del prezzo proporzionata al minor rendimento, che si traduce in un conguaglio o in uno stralcio sul residuo da pagare." },
    { type: "p", text: "La risoluzione è il rimedio radicale: restituzione delle prestazioni, impianto rimosso, somme rese. Ha senso quando l'impianto è sostanzialmente inadatto allo scopo per cui è stato acquistato o quando componenti essenziali, come l'accumulo, non sono mai stati forniti. Ricorda però che la risoluzione richiede un inadempimento di non scarsa importanza: su un divario modesto il giudice concederà la riduzione, non lo scioglimento del contratto." },
    { type: "p", text: "I passi operativi, nell'ordine giusto:" },
    { type: "ol", items: [
      "Scarica dal portale di monitoraggio i dati di produzione di almeno 12-24 mesi e conserva contratto, piano di rientro e materiale promozionale",
      "Normalizza il confronto con l'irraggiamento reale di zona (PVGIS) e quantifica il divario percentuale",
      "Se ci sono infiltrazioni o difetti visibili, invia subito la denuncia scritta via PEC: per i vizi dell'appalto hai 60 giorni dalla scoperta, per i gravi difetti 1 anno",
      "Fai redigere una perizia che individui la causa tecnica e distingua errore di progetto, difetto di installazione e componenti mancanti",
      "Invia la diffida unica: divario quantificato, causa tecnica, infiltrazioni, richiesta di adeguamento o riduzione entro un termine (di norma 15 giorni)",
      "Se il contratto è finanziato, valuta con il legale la comunicazione alla finanziaria: in caso di risoluzione per inadempimento del fornitore, il consumatore può agire anche sul credito collegato (art. 125-quinquies TUB)",
      "In assenza di riscontro, accertamento tecnico preventivo o azione di merito, tenendo d'occhio il termine dei 2 anni dalla consegna per i vizi",
    ] },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Impianto da 6 kWp con accumulo, venduto per 19.500 euro con finanziamento a 120 rate. Il piano di rientro allegato al contratto indica una producibilità di 7.800 kWh l'anno e un risparmio in bolletta di circa 1.500 euro. Dopo due anni completi la produzione reale è di 5.100 kWh il primo anno e 5.300 il secondo, con un risparmio effettivo intorno ai 700 euro. Dallo scorso autunno, in più, il soffitto della mansarda presenta due macchie di infiltrazione in corrispondenza dei fissaggi." },
    { type: "p", text: "Primo passaggio: il divario è significativo e stabile. Uno scarto del 32% ripetuto su due annate consecutive non si spiega con un anno poco soleggiato, e il confronto con i dati di irraggiamento della zona nel periodo — non con una media generica — è il passaggio che regge in giudizio. Secondo: la causa. La perizia individua un'esposizione reale a sud-ovest anziché a sud e un ombreggiamento parziale del camino nelle ore centrali, entrambi visibili al momento del sopralluogo commerciale. Chi ha progettato e venduto doveva rilevarli: il divario non è un rischio imprevedibile, è un errore di progettazione della proposta. Terzo: le infiltrazioni, con ripristino della copertura preventivato in 3.400 euro, entrano nella stessa diffida come danno ulteriore." },
    { type: "p", text: "Il bivio sui rimedi: se il divario fosse colmabile con ottimizzatori e una ridistribuzione delle stringhe, la strada efficiente sarebbe l'adeguamento a spese dell'azienda. Qui l'orientamento della falda non si cambia: si punta alla riduzione del prezzo proporzionata al minor rendimento — sul valore attuale dei kWh mancanti per la vita utile dell'impianto — oppure, se il giudice ritenesse l'impianto inadatto allo scopo, alla risoluzione con effetti anche sul finanziamento collegato." },
    { type: "note", text: "L'errore da non fare: contestare \"la bolletta alta\" senza dati di produzione normalizzati. È l'obiezione che l'azienda smonta in una riga, dando la colpa ai consumi. Lo scenario descritto è un caso illustrativo: l'esito concreto dipende sempre dai documenti contrattuali e dalle risultanze tecniche del singolo impianto." },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Il piano di rientro consegnato dal commerciale è vincolante?", a: "Se è allegato al contratto o richiamato nella proposta accettata, sì: la producibilità indicata è prestazione dovuta. Per il consumatore anche le caratteristiche dichiarate nel materiale promozionale concorrono a definire la conformità del bene (artt. 128 e ss. Cod. Cons.), quindi un piano rimasto fuori dal contratto conserva comunque peso." },
      { q: "Quanto scostamento serve per contestare?", a: "Non esiste una soglia di legge. Scarti di pochi punti percentuali rientrano nella tolleranza tecnica; uno scarto che supera stabilmente il 15-20% su produzione normalizzata con l'irraggiamento reale della zona richiede una spiegazione tecnica. Conta anche la persistenza: due annate consecutive pesano molto più di un semestre." },
      { q: "Come dimostro che l'impianto produce meno del promesso?", a: "Con i dati dell'inverter o del portale di monitoraggio su almeno dodici mesi, confrontati con la producibilità promessa e normalizzati con l'irraggiamento effettivo di zona tramite banche dati pubbliche come PVGIS. Una perizia tecnica individua poi la causa: orientamento, ombreggiamenti, configurazione o componenti difformi." },
      { q: "Chi paga le infiltrazioni comparse dopo l'installazione dei pannelli?", a: "L'installatore, se derivano da forature o fissaggi non sigillati a regola d'arte. Vanno denunciate per iscritto appena scoperte e contestate insieme al mancato rendimento. Se l'infiltrazione compromette la tenuta della copertura, può valere la responsabilità decennale per gravi difetti (art. 1669 c.c.)." },
      { q: "Posso smettere di pagare le rate del finanziamento?", a: "Non unilateralmente: la sospensione arbitraria dei pagamenti genera segnalazioni e interessi. Il percorso corretto per il consumatore passa dalla costituzione in mora del fornitore e, in caso di risoluzione per suo inadempimento, dagli effetti sul credito collegato previsti dall'art. 125-quinquies TUB. Va costruito con il legale, non improvvisato." },
      { q: "L'accumulo pagato e mai installato cosa mi consente di chiedere?", a: "È un inadempimento parziale grave: puoi chiedere l'installazione di quanto pattuito entro un termine, la riduzione del prezzo per la parte mancante o, se l'accumulo era essenziale nell'economia dell'acquisto, la risoluzione del contratto (artt. 1453 e 1455 c.c.), con effetti anche sul finanziamento collegato." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Mandaci contratto, preventivo di producibilità e dati di produzione reali: il divario si quantifica prima di qualsiasi azione, e da lì si sceglie il rimedio con i numeri in mano. Puoi allegare tutto dalla pagina contatti. Se il contratto è stato firmato a casa tua o a distanza, leggi prima la guida al recesso dal contratto fotovoltaico: in molti casi è una strada più rapida e radicale. E se insieme all'impianto ti hanno installato una pompa di calore che non rende, il problema è spesso lo stesso errore di dimensionamento: ne parliamo nella guida dedicata." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
