import type { Article, ArticleMeta } from "../articles";

export const meta: ArticleMeta = {
  slug: "danni-cantiere-vicino",
  title:
    "Crepe da scavi e demolizioni: cosa fare quando il cantiere del vicino danneggia casa tua",
  excerpt:
    "Il cantiere accanto scava, demolisce, vibra — e sui tuoi muri compaiono crepe. Chi risponde tra impresa e committente, come si blocca un danno che avanza e perché le fotografie datate valgono più di dieci lettere.",
  category: "Privati",
  date: "Agosto 2026",
  readTime: "16 min",
  author: "Avv. Armando Rossi",
  cover: "from-navy to-gold",
  keywords: [
    "crepe muro cantiere vicino chi paga",
    "danni da scavi edificio confinante",
    "vibrazioni cantiere danni casa risarcimento",
    "denuncia nuova opera cantiere confinante",
    "distanze legali costruzioni vicino",
    "immissioni rumore polvere cantiere",
  ],
  intro:
    "Dei danni provocati dal cantiere confinante risponde in prima battuta l'impresa che esegue i lavori, ai sensi dell'art. 2043 c.c.; il committente vicino risponde in solido nei casi di attività pericolosa, di ingerenza nell'esecuzione o di incarico affidato a un'impresa palesemente inadeguata. La mossa che decide la partita non è la diffida: è fissare la prova subito, con fotografie datate e, se il danno avanza, con un accertamento tecnico preventivo.",
};

export const seo = {
  seoTitle: "Crepe da Cantiere del Vicino: Chi Paga i Danni",
  metaDescription:
    "Scavi e demolizioni del vicino hanno crepato i tuoi muri? Chi risponde tra impresa e committente, come fermare i lavori e i termini per agire.",
};

export const article: Article = {
  ...meta,
  content: [
    { type: "note", text: "In sintesi — Il diritto: dei danni da scavo o demolizione risponde l'impresa esecutrice ex art. 2043 c.c., e il committente può risponderne in solido quando l'attività è pericolosa o quando ha scelto un'impresa inadeguata. Il termine: il risarcimento da fatto illecito si prescrive in 5 anni dal danno (art. 2947 c.c.); le azioni di nuova opera e danno temuto vanno proposte entro un anno dall'inizio dell'opera (artt. 1171-1172 c.c.). L'azione: prova fotografica immediata, poi accertamento tecnico preventivo ex art. 696-bis c.p.c. mentre il cantiere è ancora aperto." },

    { type: "h2", text: "Perché il tempo gioca contro di te, non contro di loro", id: "tempo" },
    { type: "p", text: "Il danno da cantiere confinante ha una caratteristica che lo distingue da quasi tutti gli altri contenziosi edilizi: la scena cambia ogni giorno. Lo scavo viene reinterrato, la demolizione finisce, la gru se ne va. Quando il cantiere chiude, dimostrare che la crepa sul tuo muro dipende da quello scavo — e non dall'età della casa, dall'assestamento o dalla siccità — diventa una battaglia di perizie contrapposte, con l'onere della prova a tuo carico." },
    { type: "p", text: "Per questo la sequenza corretta è controintuitiva. L'istinto dice: chiamo l'impresa, protesto, aspetto che sistemino. La strategia dice: prima congelo la prova, poi tratto. Un'impresa che sa che il nesso causale è già documentato in contraddittorio tratta in modo molto diverso da una che sa che, chiuso il cantiere, potrai dimostrare poco." },
    { type: "p", text: "C'è anche un dato tecnico che pochi conoscono: le crepe da scavo evolvono. Un quadro fessurativo fotografato una sola volta dice poco; fotografato ogni settimana con un giornale del giorno o un timestamp certificato, racconta una progressione che segue l'avanzamento del cantiere. È la correlazione temporale, prima ancora della perizia, a costruire il nesso di causa." },

    { type: "figure", slot: "danni-cantiere-vicino-1", alt: "Crepa diagonale su una parete interna con fessurimetro a vetrino applicato per monitorarne l'evoluzione", caption: "Il fessurimetro costa pochi euro e trasforma una crepa in una serie storica: è la prova che evolve col cantiere." },

    { type: "h2", text: "Chi risponde: l'impresa, il committente o entrambi?", id: "chi-risponde" },
    { type: "p", text: "La regola di partenza è che l'appaltatore opera in autonomia: dei danni ai terzi risponde lui, ex art. 2043 c.c., perché è lui che organizza i mezzi e decide come eseguire lo scavo o la demolizione. Il vicino che ha commissionato i lavori, di regola, non risponde del fatto dell'impresa che ha scelto." },
    { type: "p", text: "Questa regola ha però eccezioni che nella pratica ricorrono spesso, e che conviene verificare subito perché cambiano il numero di patrimoni aggredibili. Il committente risponde in proprio o in solido quando ha esercitato un'ingerenza concreta sull'esecuzione, riducendo l'appaltatore a mero esecutore; quando ha affidato i lavori a un'impresa palesemente priva della capacità tecnica necessaria, la cosiddetta culpa in eligendo; e quando il danno deriva dall'opera in sé come autorizzata e progettata, non dalle modalità esecutive." },
    { type: "p", text: "Accanto a loro possono rispondere il progettista e il direttore dei lavori, se il danno dipende da scelte progettuali — uno scavo spinto in adiacenza alle fondazioni altrui senza opere di sostegno adeguate — o dall'omesso controllo. Nei casi di scavi profondi, la giurisprudenza inquadra spesso l'attività come pericolosa ex art. 2050 c.c.: il vantaggio pratico per te è l'inversione dell'onere della prova, perché è chi scava a dover dimostrare di aver adottato tutte le misure idonee a evitare il danno." },
    { type: "table", headers: ["Soggetto", "Titolo di responsabilità", "Quando risponde"], rows: [
      ["Impresa esecutrice", "Art. 2043 c.c., o art. 2050 c.c. per attività pericolose", "Sempre, per i danni causati dall'esecuzione"],
      ["Committente (il vicino)", "Culpa in eligendo o in vigilando, ingerenza", "Impresa inadeguata, direttive impartite, danno insito nell'opera autorizzata"],
      ["Progettista", "Responsabilità professionale", "Scavo o struttura progettati senza considerare i fabbricati adiacenti"],
      ["Direttore dei lavori", "Responsabilità professionale", "Omessa vigilanza su lavorazioni a rischio per i confinanti"],
      ["Assicuratore del cantiere", "Polizza CAR / RCT", "Quasi ogni cantiere ne ha una: va chiesta subito con la diffida"],
    ] },
    { type: "p", text: "Un dettaglio operativo che vale denaro: quasi ogni cantiere ha una polizza CAR o una responsabilità civile verso terzi. Nella prima comunicazione scritta conviene sempre chiedere gli estremi della copertura assicurativa: sposta la trattativa dal patrimonio dell'impresa, che può essere modesto, a quello di una compagnia." },

    { type: "h2", text: "Le tre azioni: risarcimento, nuova opera, danno temuto", id: "azioni" },
    { type: "p", text: "Se il danno è già avvenuto e il cantiere prosegue senza creare ulteriori rischi, la strada è l'azione risarcitoria ordinaria, preceduta dall'accertamento tecnico. Ma il codice offre due strumenti d'urgenza pensati esattamente per la situazione in cui il danno sta ancora maturando." },
    { type: "p", text: "La denuncia di nuova opera, art. 1171 c.c., consente a chi teme un danno dalla costruzione iniziata sul fondo vicino di chiedere al giudice di vietarne la continuazione o di imporre cautele. Ha un limite temporale secco: l'opera non deve essere terminata e non deve essere trascorso un anno dal suo inizio. La denuncia di danno temuto, art. 1172 c.c., copre il caso speculare: un pericolo di danno grave e prossimo che deriva da un edificio o altra cosa esistente, tipicamente la demolizione condotta in modo da minacciare crolli sul tuo fondo." },
    { type: "p", text: "Sono azioni possessorie nella forma ma cautelari nella sostanza: si decidono in tempi brevi, su prova sommaria, e possono fermare o condizionare il cantiere. La loro sola pendenza, nella pratica, porta l'impresa e la sua assicurazione al tavolo. Vanno però maneggiate con realismo: un giudice non ferma un cantiere per una crepa capillare, lo fa per un rischio serio e documentato." },

    { type: "h2", text: "Distanze legali e immissioni: gli altri due fronti", id: "distanze" },
    { type: "p", text: "Il danno da vibrazioni non è l'unico che un cantiere confinante può produrre. Il secondo fronte sono le distanze: l'art. 873 c.c. impone tra costruzioni su fondi finitimi almeno tre metri, e i regolamenti edilizi locali quasi sempre prevedono distanze maggiori. La violazione delle distanze legali dà diritto alla riduzione in pristino — cioè all'arretramento o alla demolizione della parte illegittima — oltre al risarcimento, ed è uno dei pochi casi in cui il giudice civile può ordinare di demolire ciò che è stato costruito." },
    { type: "p", text: "Attenzione a un equivoco diffuso: il permesso di costruire non sana la violazione delle distanze civilistiche. Il titolo edilizio regola il rapporto con il Comune, non quello con te; un edificio perfettamente autorizzato può essere illegittimo verso il confinante. Vale anche l'inverso: verificare la regolarità urbanistica del cantiere resta utile, perché una segnalazione fondata al Comune ha effetti pratici immediati." },
    { type: "p", text: "Il terzo fronte sono le immissioni dell'art. 844 c.c.: rumore, polveri, vibrazioni che superano la normale tollerabilità. Per un cantiere temporaneo la giurisprudenza è tollerante sulla durata ragionevole, molto meno su orari e modalità: lavorazioni rumorose fuori dagli orari consentiti dai regolamenti comunali, demolizioni senza abbattimento delle polveri, vibrazioni oltre soglia sono tutte condotte che fondano inibitorie e risarcimento, anche del danno da ridotta godibilità dell'immobile." },

    { type: "figure", slot: "danni-cantiere-vicino-2", alt: "Scavo di fondazione aperto a ridosso del muro di confine, con paratia di micropali a sostegno del fronte", caption: "Lo scavo in adiacenza senza opere di sostegno adeguate è la causa tipica dei cedimenti sul fabbricato confinante." },

    { type: "h2", text: "La sequenza operativa nei primi trenta giorni", id: "passi" },
    { type: "ol", items: [
      "Fotografa ogni lesione con data certa: giornale del giorno nell'inquadratura, metadati attivi, oppure marca temporale. Ripeti il rilievo ogni settimana, sempre dagli stessi punti",
      "Applica fessurimetri a vetrino sulle crepe principali e annota le letture: costano pochi euro e trasformano la crepa in una serie storica",
      "Invia una PEC all'impresa e al committente vicino: descrivi i danni, chiedi gli estremi della polizza di cantiere e diffida dal proseguire le lavorazioni a rischio senza cautele",
      "Se il quadro peggiora o lo scavo avanza, deposita il ricorso per accertamento tecnico preventivo ex art. 696-bis c.p.c., chiamando impresa, committente e, se noti, progettista e direttore dei lavori",
      "Nei casi di pericolo serio e imminente, valuta con il legale la denuncia di nuova opera o di danno temuto: sono le uniche azioni che possono incidere sul cantiere in corso",
      "Non firmare verbali di sopralluogo predisposti dall'impresa che qualificano i danni come preesistenti o di assestamento, e non accettare riparazioni tampone non documentate",
    ] },

    { type: "h2", text: "Un esempio concreto", id: "esempio" },
    { type: "p", text: "A marzo il lotto confinante apre un cantiere per un edificio con piano interrato. Ad aprile, durante gli scavi, sulla tua tramezza compaiono due crepe diagonali; a maggio le crepe si allargano e una porta non chiude più. L'impresa, contattata a voce, parla di normale assestamento e ti invita ad aspettare la fine dei lavori." },
    { type: "p", text: "Invece di aspettare, fotografi con data certa, applichi tre fessurimetri e mandi la PEC chiedendo la polizza. A giugno depositi il ricorso ex art. 696-bis c.p.c.: il consulente del tribunale esegue il sopralluogo mentre lo scavo è ancora aperto, rileva che la paratia di sostegno è stata realizzata solo su metà del fronte e collega il quadro fessurativo al cedimento del terreno di fondazione. Quantifica il ripristino in 34.000 euro." },
    { type: "p", text: "Con la relazione depositata, l'assicuratore del cantiere — che fino a quel momento non aveva risposto — formula un'offerta. La trattativa si chiude a 31.500 euro più le spese dell'accertamento, senza causa. Il punto non è la fortuna: è che la perizia è stata fatta quando la causa del danno era ancora visibile e in contraddittorio con tutti i responsabili." },
    { type: "note", text: "L'errore da non fare: aspettare la fine del cantiere per contestare. Reinterrato lo scavo, il nesso causale si dimostra solo con indagini costose e dall'esito incerto, e l'impresa lo sa. Lo scenario descritto è illustrativo: importi ed esiti dipendono sempre dai documenti e dalle circostanze del caso concreto." },

    { type: "timeline", title: "I termini che contano", steps: [
      { when: "Subito", label: "Prova fotografica con data certa e fessurimetri", detail: "È l'unico adempimento che non può essere recuperato dopo." },
      { when: "1 anno dall'inizio dell'opera", label: "Limite per la denuncia di nuova opera (art. 1171 c.c.)", detail: "Oltre, o a opera terminata, resta solo la tutela risarcitoria e petitoria." },
      { when: "Mentre il cantiere è aperto", label: "Finestra utile per l'ATP ex art. 696-bis c.p.c.", detail: "La perizia sullo scavo visibile vale il doppio di quella sullo scavo reinterrato." },
      { when: "5 anni dal danno", label: "Prescrizione del risarcimento ex art. 2947 c.c.", detail: "Si interrompe con una richiesta scritta di risarcimento; la semplice segnalazione non basta." },
      { when: "20 anni", label: "Azione per la violazione delle distanze legali", detail: "La riduzione in pristino segue i tempi delle azioni reali, non dei 5 anni risarcitori." },
    ] },

    { type: "caselaw", title: "I principi consolidati", items: [
      { court: "Orientamento costante di legittimità", principle: "Negli scavi che interessano fondi confinanti, l'attività può qualificarsi pericolosa ex art. 2050 c.c. quando per profondità, mezzi impiegati e prossimità alle fondazioni altrui presenta una rilevante potenzialità dannosa.", impact: "L'onere della prova si inverte: è chi scava a dover dimostrare di aver adottato tutte le misure idonee." },
      { court: "Orientamento costante di legittimità", principle: "Il committente non risponde dei danni cagionati dall'appaltatore ai terzi, salvo che abbia esercitato ingerenza sull'esecuzione, abbia scelto un'impresa palesemente inidonea o il danno derivi dall'opera in sé come commissionata.", impact: "La responsabilità del vicino committente va costruita su elementi concreti, non presunta." },
      { court: "Orientamento costante di legittimità", principle: "La conformità dell'edificio al titolo edilizio non esclude la violazione delle norme civilistiche sulle distanze, che tutelano il confinante e restano azionabili davanti al giudice ordinario.", impact: "Il permesso di costruire del vicino non chiude la partita: il fronte civilistico è autonomo." },
    ] },

    { type: "h2", text: "Domande frequenti", id: "faq" },
    { type: "faq", items: [
      { q: "Le crepe sono comparse durante i lavori del vicino: è automatico che la colpa sia del cantiere?", a: "No, la coincidenza temporale è un indizio forte ma non una prova. Serve il nesso tecnico tra lavorazione e lesione, ed è il motivo per cui la perizia va fatta mentre il cantiere è aperto. La progressione documentata delle crepe in parallelo all'avanzamento degli scavi è l'elemento che di regola convince il consulente." },
      { q: "Posso far fermare il cantiere del vicino?", a: "Solo un giudice può farlo, con la denuncia di nuova opera o di danno temuto, e solo davanti a un rischio serio e documentato: nessun tribunale blocca un cantiere per una crepa capillare. Nella pratica, più che il blocco totale si ottengono prescrizioni: opere di sostegno, monitoraggio, modifica delle lavorazioni." },
      { q: "L'impresa dice che le crepe sono preesistenti. Come mi difendo?", a: "Con la data certa. Se hai fotografie dell'immobile precedenti al cantiere — anche occasionali: un trasloco, una ristrutturazione, un annuncio di vendita — e rilievi datati durante i lavori, l'eccezione di preesistenza si sgonfia. È anche il motivo per non firmare verbali di sopralluogo che qualificano i danni come pregressi." },
      { q: "Chi paga la mia perizia e l'accertamento tecnico preventivo?", a: "In prima battuta li anticipi tu. Ma se il nesso viene accertato, le spese dell'ATP e della consulenza entrano nel conto del risarcimento o nelle spese della causa successiva. Nella trattativa con l'assicuratore vanno sempre incluse nella richiesta." },
      { q: "Il vicino ha il permesso di costruire: significa che è tutto regolare?", a: "Verso il Comune forse, verso di te no. Il titolo edilizio non copre i danni da esecuzione e non sana la violazione delle distanze civilistiche. Sono piani distinti: puoi non avere nulla da eccepire sull'urbanistica e avere pieno diritto al risarcimento, o all'arretramento della costruzione." },
      { q: "Rumore e polvere del cantiere mi impediscono di vivere: posso chiedere qualcosa?", a: "Sì, se superano la normale tollerabilità dell'art. 844 c.c., valutata anche rispetto a orari e prescrizioni comunali. Per un cantiere temporaneo la soglia è più alta, ma lavorazioni fuori orario o senza abbattimento delle polveri fondano l'inibitoria e il risarcimento del godimento perduto." },
      { q: "Il danno si è manifestato dopo la chiusura del cantiere: è troppo tardi?", a: "No: il risarcimento si prescrive in cinque anni e i cedimenti da scavo possono manifestarsi con mesi di ritardo. È però più difficile sul piano probatorio, perché la causa non è più visibile. Recupera subito ogni documento sul cantiere — progetti depositati, relazione geologica, fotografie aeree — e muoviti con una perizia seria." },
      { q: "Conviene denunciare anche al Comune?", a: "Se ci sono profili di irregolarità urbanistica o violazioni degli orari di cantiere, la segnalazione agli uffici tecnici e alla polizia locale è utile e gratuita: crea atti pubblici che documentano la situazione. Non sostituisce però l'azione civile: il Comune tutela l'interesse pubblico, non il tuo diritto al risarcimento." },
    ] },

    { type: "h2", text: "Il passo successivo", id: "cta" },
    { type: "p", text: "Se il cantiere è ancora aperto, ogni settimana di attesa è prova che si perde. Contattaci dalla pagina contatti con le fotografie datate delle lesioni, gli estremi del cantiere confinante e ogni comunicazione già scambiata: valutiamo se ci sono i presupposti per l'accertamento tecnico preventivo e verso chi indirizzarlo." },
    { type: "p", text: "Per capire come funziona lo strumento che congela la prova, leggi [la guida all'accertamento tecnico preventivo](/guide/accertamento-tecnico-preventivo). E se il danno riguarda infiltrazioni dal lastrico o dalle parti comuni condominiali, il caso è diverso: parte dalla guida sui [vizi nell'appalto condominiale](/guide/vizi-appalto-condominiale)." },
    { type: "p", text: "Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto. Aggiornato ad agosto 2026 sulla base della normativa e della giurisprudenza vigenti." },
  ],
};
