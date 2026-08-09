import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "vizi-appalto-condominiale",
  title: "Vizi nell'appalto condominiale: può agire anche il singolo condomino?",
  excerpt:
    "I lavori sulle parti comuni sono venuti male e l'assemblea non decide. Quando può muoversi il singolo condomino, che cosa può chiedere e quali termini corrono anche senza delibera.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "16 min",
  author: "Redazione Edilizia Legale",
  cover: "from-navy to-navy-light",
  keywords: [
    "vizi lavori condominio chi può agire",
    "legittimazione singolo condomino appalto",
    "amministratore azione contro impresa",
    "delibera per agire in giudizio condominio",
    "difetti lavori parti comuni",
  ],
  intro:
    "Il committente formale è il condominio, rappresentato dall'amministratore, ma il singolo condomino non è spettatore: per la tutela delle parti comuni la Cassazione gli riconosce una legittimazione concorrente, con maggiori certezze per l'azione sui gravi difetti dell'art. 1669 c.c. I termini di denuncia, però, corrono anche se l'assemblea resta ferma.",
};

export const seo = {
  seoTitle: "Vizi Lavori Condominio: Chi Può Agire Contro l'Impresa",
  metaDescription:
    "Lavori difettosi sulle parti comuni: quando può agire il singolo condomino, cosa può chiedere e quali termini corrono anche senza delibera assembleare.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: il singolo condomino ha legittimazione concorrente con l'amministratore per la tutela delle parti comuni. Il termine: 60 giorni dalla scoperta per denunciare i vizi ex art. 1667 c.c., un anno dalla scoperta per i gravi difetti ex art. 1669 c.c. L'azione: denuncia scritta immediata all'impresa, poi azione dell'amministratore previa delibera oppure azione individuale del singolo." },

    { type: "h2", text: "Chi è il committente quando i lavori sono condominiali", id: "committente" },
    { type: "p", text: "Nell'appalto condominiale il contratto è firmato dall'amministratore in nome e per conto del condominio, sulla base della delibera che ha approvato i lavori e la spesa. Il committente, quindi, è il condominio: è lui la parte del contratto d'appalto e il titolare naturale delle pretese verso l'impresa. Il singolo condomino non ha firmato nulla e non compare nel rapporto." },
    { type: "p", text: "Questa è però solo la fotografia formale. Il condominio non è un soggetto distinto dai condòmini nel senso in cui lo è una società: è un ente di gestione, e i diritti sulle parti comuni restano dei singoli in regime di comunione. È da qui che nasce la possibilità del condomino di attivarsi anche quando l'organo di gestione non si muove." },
    { type: "p", text: "I poteri dell'amministratore sono definiti dagli artt. 1130 e 1131 c.c. Può compiere gli atti conservativi relativi alle parti comuni senza bisogno di autorizzazione, ai sensi dell'art. 1130, n. 4, c.c., mentre per le azioni che eccedono le sue attribuzioni ha bisogno della delibera dell'assemblea. La distinzione tra atto conservativo e azione che eccede le attribuzioni è esattamente il punto su cui si litiga più spesso." },
    { type: "p", text: "In concreto: la denuncia dei vizi all'impresa e gli atti diretti a interrompere i termini rientrano tra le iniziative che l'amministratore può e deve assumere per conservare il diritto. L'avvio di una causa risarcitoria, invece, richiede di norma il passaggio assembleare. È una differenza che decide chi deve fare che cosa nelle prime settimane." },

    { type: "figure", slot: "vizi-appalto-condominiale-1", alt: "Facciata condominiale appena rifatta con distacchi di intonaco e macchie di umidità, con ponteggio smontato da poco", caption: "I difetti delle parti comuni emergono spesso dopo la fine lavori: da quel momento iniziano a correre i termini di denuncia." },

    { type: "h2", text: "Può agire anche il singolo condomino?", id: "legittimazione-singolo" },
    { type: "p", text: "Sì, e non è una deroga eccezionale. La giurisprudenza di legittimità riconosce da tempo che ciascun condomino può agire a tutela dei diritti relativi alle parti comuni, in via concorrente con l'amministratore, senza che sia necessario coinvolgere in giudizio tutti gli altri condòmini. Il fondamento è la contitolarità del diritto sulle parti comuni, che non viene assorbita dalla rappresentanza dell'ente di gestione." },
    { type: "p", text: "La legittimazione è più solida quando l'azione si fonda sull'art. 1669 c.c., cioè sui gravi difetti dell'opera. Quella responsabilità ha natura extracontrattuale e di ordine pubblico, e prescinde dal rapporto contrattuale: può farla valere chi subisce il pregiudizio, quindi anche il condomino che non ha firmato l'appalto e, in certe condizioni, l'acquirente successivo dell'unità immobiliare." },
    { type: "p", text: "Più discussa è la posizione del singolo quando l'azione è puramente contrattuale, cioè fondata sugli artt. 1667 e 1668 c.c. Anche qui esistono aperture, perché il risultato favorevole giova a tutti i contitolari, ma l'impostazione della domanda va calibrata con attenzione, distinguendo tra ciò che si chiede per le parti comuni e ciò che si chiede per il proprio appartamento." },
    { type: "p", text: "Una regola pratica aiuta a orientarsi. Se l'assemblea si è già mossa e l'amministratore ha agito, l'iniziativa individuale rischia di sovrapporsi e di creare confusione processuale. Se invece il condominio è fermo, il singolo che attende perde tempo prezioso su termini che non si fermano." },

    { type: "h2", text: "Che cosa può chiedere il singolo, e per quale quota?", id: "cosa-puo-chiedere" },
    { type: "p", text: "Vanno tenute distinte tre categorie di pretese. La prima è l'eliminazione dei vizi delle parti comuni: qui la richiesta riguarda l'opera nel suo complesso e giova a tutti, perché il ripristino della facciata o del tetto non è frazionabile per millesimi. Il singolo può chiedere che l'impresa esegua l'intervento a proprie spese." },
    { type: "p", text: "La seconda è il risarcimento del danno alle parti comuni, e questa è per sua natura divisibile: il condomino può chiederlo nei limiti della propria quota millesimale, perché è quella la misura della sua partecipazione al bene comune. Chiedere l'intero per sé, in assenza di mandato degli altri, è un errore che si paga in giudizio." },
    { type: "p", text: "La terza riguarda i danni alla proprietà esclusiva: infiltrazioni nell'appartamento, muffa sulle pareti interne, danni ai serramenti o agli arredi, costi di alloggio alternativo durante i lavori di ripristino. Questi il condomino li chiede per intero e in proprio, senza alcun bisogno di delibera, perché sono danni a un bene suo." },

    { type: "table", headers: ["Che cosa si chiede", "Chi può agire", "Serve la delibera?"], rows: [
      ["Denuncia dei vizi all'impresa per interrompere i termini", "Amministratore o singolo condomino", "No: è atto conservativo (art. 1130, n. 4, c.c.)"],
      ["Eliminazione dei difetti delle parti comuni", "Amministratore o singolo condomino", "Sì per la causa promossa dall'amministratore; il singolo agisce in proprio"],
      ["Risarcimento del danno alle parti comuni", "Amministratore per il condominio; singolo per la sua quota", "Sì per l'azione dell'amministratore"],
      ["Danni all'appartamento di proprietà esclusiva", "Solo il condomino proprietario", "No, mai"],
      ["Azione per gravi difetti ex art. 1669 c.c.", "Condominio e singolo condomino", "Sì per l'amministratore; il singolo è legittimato in proprio"],
      ["Azione verso l'amministratore per mala gestio", "Condominio, previa delibera; singolo per il danno proprio", "Sì per l'azione del condominio"],
    ] },

    { type: "h2", text: "L'assemblea non delibera: che cosa si fa?", id: "assemblea-inerte" },
    { type: "p", text: "È lo scenario più frustrante e anche il più comune. Le ragioni dell'inerzia sono quasi sempre le stesse: timore dei costi della lite, rapporti personali con l'impresa, maggioranze che non si formano, un amministratore che ha proposto lui stesso quell'impresa e non ha interesse a contestarla. Il risultato è che i mesi passano e i termini si consumano." },
    { type: "p", text: "La prima mossa, che nessuno può impedirti, è la denuncia scritta dei vizi all'impresa, inviata via PEC o raccomandata anche a titolo individuale e contestualmente comunicata all'amministratore. Non è un atto ostile: è ciò che conserva il diritto di tutti. Farla presto e in forma scritta è più importante di farla perfetta." },
    { type: "p", text: "La seconda è la richiesta formale di convocazione dell'assemblea con all'ordine del giorno la contestazione dei vizi e l'autorizzazione ad agire, richiesta che va indirizzata all'amministratore con termine e con l'avvertimento di provvedere. Se l'amministratore non convoca, il codice civile prevede rimedi specifici, compresa la possibilità di sollecitare l'intervento dell'autorità giudiziaria per i provvedimenti necessari alla gestione della cosa comune, secondo il rinvio dell'art. 1139 c.c." },
    { type: "p", text: "La terza è l'azione individuale, da valutare quando le prime due non producono effetti in tempi compatibili con i termini. Va ricordato l'art. 1132 c.c.: il condomino dissenziente rispetto a una lite deliberata può separare la propria responsabilità per le spese, notificando il dissenso entro trenta giorni. È l'altra faccia dello stesso problema e va conosciuta prima dell'assemblea, non dopo." },

    { type: "h2", text: "I termini corrono comunque", id: "termini" },
    { type: "p", text: "È il punto che vale l'intero articolo. I termini di denuncia e di prescrizione non si sospendono perché il condominio sta discutendo, perché l'amministratore è in scadenza o perché l'assemblea è stata rinviata. Corrono dal fatto: dalla consegna dell'opera, dalla scoperta del vizio, dalla denuncia. Un diritto perfettamente fondato può estinguersi mentre si aspetta la prossima riunione." },
    { type: "table", headers: ["Azione", "Termine di denuncia", "Termine per agire"], rows: [
      ["Difformità e vizi dell'opera (art. 1667 c.c.)", "60 giorni dalla scoperta", "2 anni dalla consegna dell'opera"],
      ["Gravi difetti e rovina (art. 1669 c.c.)", "1 anno dalla scoperta", "1 anno dalla denuncia, entro 10 anni dal compimento dell'opera"],
      ["Vizi riconosciuti o taciuti in mala fede dall'impresa", "Denuncia non necessaria", "Restano applicabili i termini di prescrizione dell'azione"],
      ["Impugnazione della delibera assembleare", "—", "30 giorni (art. 1137 c.c.), dalla delibera o dalla comunicazione del verbale"],
      ["Dissenso del condomino rispetto alla lite", "—", "30 giorni dalla notizia della delibera (art. 1132 c.c.)"],
    ] },
    { type: "p", text: "Sulla decorrenza esiste un margine di discussione tecnica: per i gravi difetti la scoperta si considera avvenuta quando si acquisisce un'apprezzabile certezza della gravità e della causa, che spesso coincide con la relazione di un tecnico e non con la prima macchia sul muro. È un argomento serio, ma è un argomento difensivo: contarci in partenza per giustificare l'attesa è una scelta rischiosa." },

    { type: "h2", text: "Perché l'art. 1669 c.c. è la norma decisiva per le parti comuni", id: "art-1669" },
    { type: "p", text: "L'art. 1669 c.c. riguarda gli edifici e le altre cose immobili destinate per loro natura a lunga durata, quando nel corso di dieci anni dal compimento si manifestano rovina, pericolo di rovina o gravi difetti. La giurisprudenza vi ha ricondotto un insieme ampio di patologie: infiltrazioni dalla copertura, distacchi di intonaco e rivestimenti, difetti dell'impermeabilizzazione dei terrazzi, cappotti termici mal eseguiti, umidità di risalita che compromette l'abitabilità." },
    { type: "p", text: "Il criterio non è estetico ma funzionale: il difetto è grave quando incide in modo apprezzabile sul godimento o sulla durata dell'opera, anche se non ne compromette la stabilità. È il motivo per cui molti difetti delle parti comuni, che a prima vista sembrano questioni di finitura, rientrano in questa disciplina e non nel più stretto regime dell'art. 1667 c.c." },
    { type: "p", text: "La conseguenza pratica è duplice. Da un lato i termini sono più favorevoli, perché la denuncia va fatta entro un anno dalla scoperta e non entro sessanta giorni. Dall'altro la responsabilità si estende oltre l'appaltatore: possono risponderne, secondo i rispettivi ruoli, il direttore dei lavori e il progettista, e la valutazione di chi convenire in giudizio va fatta prima di agire, non dopo." },

    { type: "h2", text: "I passi delle prime settimane", id: "passi" },
    { type: "ol", items: [
      "Entro 7 giorni dalla scoperta: documentare i difetti con fotografie datate e con l'indicazione precisa dei punti interessati, all'esterno e nelle unità colpite",
      "Entro 15 giorni: inviare all'impresa la denuncia scritta dei vizi via PEC o raccomandata, con copia all'amministratore e al direttore dei lavori",
      "Entro 20 giorni: chiedere formalmente all'amministratore la convocazione dell'assemblea, indicando l'ordine del giorno e i termini in scadenza",
      "Entro 30 giorni: incaricare un tecnico di una relazione sulle cause dei difetti, sulla loro gravità e sulla stima del costo di ripristino",
      "Entro 60 giorni dalla scoperta: assicurarsi che la denuncia sia stata comunque effettuata, perché è il termine più breve previsto dall'art. 1667 c.c.",
      "Entro 90 giorni: se l'assemblea non ha deliberato, valutare l'azione individuale per la propria quota e per i danni all'unità di proprietà esclusiva",
      "Prima della causa: verificare l'esperimento della mediazione, che in materia condominiale è condizione di procedibilità ai sensi del D.lgs. 28/2010",
    ] },
    { type: "p", text: "La sequenza risolve la maggior parte dei casi problematici, perché separa ciò che va fatto subito e da chiunque — documentare e denunciare — da ciò che richiede il passaggio assembleare. Chi inverte l'ordine si trova con una delibera tardiva su un diritto ormai indebolito." },

    { type: "h2", text: "La responsabilità dell'amministratore", id: "amministratore" },
    { type: "p", text: "L'amministratore risponde verso il condominio secondo le regole del mandato, con la diligenza richiesta dall'art. 1710 c.c. e con gli obblighi specifici dell'art. 1129 c.c. Nella gestione di un appalto questo si traduce in doveri concreti: acquisire più preventivi, verificare i requisiti dell'impresa, sottoporre all'assemblea un contratto leggibile, vigilare sull'esecuzione, non liberare i pagamenti finali in presenza di contestazioni." },
    { type: "p", text: "I profili di responsabilità che emergono più spesso sono tre. Il pagamento integrale del corrispettivo nonostante difetti già segnalati, che priva il condominio della leva economica. L'omessa denuncia dei vizi nei termini, che è la fattispecie più grave perché estingue il diritto. L'assenza di direzione lavori su un intervento che ne avrebbe richiesta una, con conseguente mancanza di controllo tecnico sull'esecuzione." },
    { type: "p", text: "L'azione del condominio verso l'amministratore richiede la delibera, e in molti casi si accompagna alla revoca. Il singolo condomino, però, conserva la possibilità di agire per il danno subito nella propria sfera individuale. Va detto anche che la responsabilità dell'amministratore non sostituisce quella dell'impresa: sono strade parallele, e conviene tenerle aperte entrambe finché non è chiaro dove si trova la capienza." },

    { type: "figure", slot: "vizi-appalto-condominiale-2", alt: "Verbale di assemblea condominiale aperto sul punto relativo alla contestazione dei lavori, con la relazione tecnica allegata", caption: "La delibera serve all'azione dell'amministratore: la denuncia dei vizi, invece, non aspetta l'assemblea." },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "Un condominio di ventidue unità approva il rifacimento della facciata con cappotto termico per un importo di 218.400 euro. I lavori si chiudono a fine primavera e il ponteggio viene smontato. Sette mesi dopo compaiono distacchi in tre punti della facciata nord e infiltrazioni in due appartamenti dell'ultimo piano. L'amministratore comunica di aver \"segnalato tutto a voce all'impresa\" e rinvia la questione alla prossima assemblea utile." },
    { type: "p", text: "Un condomino dell'ultimo piano incarica un tecnico, che rileva un'esecuzione non conforme nella posa del sistema di ancoraggio e nella sigillatura dei raccordi, con un costo stimato di ripristino di 47.300 euro per le parti comuni. La relazione qualifica i difetti come incidenti sulla funzionalità e sulla durata dell'opera, il che li colloca nell'area dell'art. 1669 c.c. e non in quella della semplice difformità estetica." },
    { type: "p", text: "Qui si apre il bivio. La prima strada è insistere sul percorso condominiale: denuncia scritta immediata a firma del condomino, richiesta formale di convocazione, assemblea con delibera di incarico e azione dell'amministratore per l'intero. È la via ordinata, ma dipende da una maggioranza che potrebbe non formarsi. La seconda è l'azione individuale, con cui il condomino chiede l'eliminazione dei difetti delle parti comuni, il risarcimento per la propria quota millesimale e, per intero e in proprio, i danni subiti dall'appartamento. Le due strade non si escludono: la denuncia scritta va fatta comunque, subito, perché è il passaggio che conserva il diritto di tutti." },
    { type: "note", text: "L'errore da non fare: accontentarsi della segnalazione verbale dell'amministratore all'impresa. La denuncia dei vizi va provata, quindi va fatta per iscritto e con data certa: una contestazione orale non dimostrabile equivale, sul piano probatorio, a nessuna contestazione. Lo scenario descritto è illustrativo: l'esito dipende dai documenti, dalla natura dei difetti e dalle circostanze specifiche." },

    { type: "timeline", title: "I termini dei vizi nell'appalto condominiale", steps: [
      { when: "Consegna dell'opera", label: "Inizia il conto per l'azione contrattuale", detail: "L'azione ex art. 1667 c.c. si prescrive in due anni dalla consegna." },
      { when: "60 giorni dalla scoperta", label: "Denuncia dei vizi ex art. 1667 c.c.", detail: "Termine breve: va rispettato anche se l'assemblea non si è ancora riunita." },
      { when: "1 anno dalla scoperta", label: "Denuncia dei gravi difetti ex art. 1669 c.c.", detail: "Riguarda i difetti che incidono su godimento e durata dell'opera." },
      { when: "1 anno dalla denuncia", label: "Termine per proporre l'azione ex art. 1669 c.c.", detail: "Decorre dalla denuncia e va coordinato con il decennio dal compimento dell'opera." },
      { when: "30 giorni", label: "Impugnazione della delibera e dissenso sulla lite", detail: "Artt. 1137 e 1132 c.c.: due termini brevi che riguardano il rapporto interno al condominio." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Posso agire da solo se l'assemblea non ha deliberato?", a: "Per la tutela delle parti comuni la Cassazione riconosce al singolo condomino una legittimazione concorrente con quella dell'amministratore, con maggiori certezze quando l'azione si fonda sull'art. 1669 c.c. Per i danni all'appartamento di proprietà esclusiva non serve alcuna delibera: quelli si chiedono sempre in proprio." },
      { q: "Se vinco, il risultato vale anche per gli altri condòmini?", a: "Per l'eliminazione dei difetti delle parti comuni sì, perché il ripristino non è frazionabile e giova a tutti i contitolari. Il risarcimento in denaro per le parti comuni, invece, spetta al singolo nei limiti della sua quota millesimale: chiedere l'intero senza mandato degli altri è un errore ricorrente." },
      { q: "L'amministratore può denunciare i vizi senza passare dall'assemblea?", a: "Sì, e in genere deve farlo. La denuncia dei vizi è un atto conservativo del diritto sulle parti comuni, che rientra tra le attribuzioni dell'art. 1130, n. 4, c.c. La delibera serve invece per promuovere la causa risarcitoria, che eccede l'ordinaria amministrazione." },
      { q: "Che differenza c'è tra art. 1667 e art. 1669 c.c.?", a: "L'art. 1667 c.c. disciplina le difformità e i vizi con termini stretti: sessanta giorni per la denuncia e due anni dalla consegna per l'azione. L'art. 1669 c.c. riguarda rovina e gravi difetti nei dieci anni dal compimento, con un anno dalla scoperta per denunciare e un anno dalla denuncia per agire." },
      { q: "L'impresa dice che il problema è la manutenzione: come si risponde?", a: "Con una relazione tecnica che individui la causa del difetto. La distinzione tra vizio di esecuzione e degrado da mancata manutenzione è tecnica e si prova con accertamenti, non con affermazioni. Quando la controversia si radicalizza, l'accertamento tecnico preventivo consente di cristallizzare lo stato dei luoghi." },
      { q: "Serve la mediazione prima di fare causa?", a: "In materia di condominio la mediazione è prevista come condizione di procedibilità dal D.lgs. 28/2010, e l'amministratore vi partecipa nei modi stabiliti dalle norme di attuazione del codice civile. Va verificata anche la posizione delle altre parti coinvolte, perché la controversia spesso riguarda più soggetti." },
      { q: "Posso chiedere i danni anche al direttore dei lavori?", a: "Nell'ambito dell'art. 1669 c.c. la responsabilità può estendersi, secondo i rispettivi ruoli, anche a progettista e direttore dei lavori. La valutazione va fatta prima di agire, sulla base della relazione tecnica: individuare tardi il soggetto responsabile significa spesso doverlo chiamare in un secondo momento, allungando i tempi." },
      { q: "L'amministratore ha pagato il saldo nonostante i difetti: che cosa comporta?", a: "Il pagamento integrale toglie al condominio la leva economica più efficace e può integrare una gestione non diligente ai sensi degli artt. 1129 e 1710 c.c. Non estingue però i diritti verso l'impresa: la denuncia dei vizi resta possibile nei termini e l'azione verso l'amministratore corre in parallelo." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se i lavori sulle parti comuni hanno prodotto difetti, la prima cosa da stabilire è quale disciplina si applica — vizi dell'art. 1667 c.c. o gravi difetti dell'art. 1669 c.c. — perché da quella dipendono i termini, e i termini decidono se il diritto esiste ancora. La seconda è mettere per iscritto la denuncia, senza aspettare l'assemblea. Contattaci dalla pagina contatti con il verbale di approvazione dei lavori, il contratto d'appalto e la documentazione fotografica: verifichiamo i termini e ti indichiamo chi può agire e per che cosa." },
    { type: "p", text: "Se il problema riguarda infiltrazioni dal terrazzo o difetti del cappotto termico, le guide dedicate a quei due casi entrano nel dettaglio tecnico delle cause e delle responsabilità." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
