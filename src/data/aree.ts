import {
  Banknote,
  FileSignature,
  ShieldAlert,
  Timer,
  Landmark,
  HardHat,
  Siren,
  Gavel,
  FileText,
  TrendingDown,
  Home,
  Hammer,
  CalendarClock,
  Receipt,
  Sun,
  KeyRound,
  Building,
  AlertTriangle,
  Truck,
  ScrollText,
  type LucideIcon,
} from "lucide-react";

export type Area = {
  icon: LucideIcon;
  title: string;
  desc: string;
  /** slug della guida correlata, se già pubblicata */
  guida?: string;
  badge?: string;
};

/** Le dieci aree del silo Imprese, ordinate per urgenza percepita dal cliente. */
export const areeImprese: Area[] = [
  {
    icon: Banknote,
    title: "Recupero crediti nel settore edile",
    desc: "SAL non pagati, saldi trattenuti con la scusa di vizi generici, ritenute mai svincolate, decreto ingiuntivo con provvisoria esecutorietà, azione surrogatoria del subappaltatore.",
    guida: "recupero-crediti-edilizia",
    badge: "Urgenza massima",
  },
  {
    icon: FileSignature,
    title: "Riserve, varianti e maggiori oneri",
    desc: "Iscrizione tempestiva delle riserve, varianti ordinate a voce dal direttore dei lavori, sospensioni illegittime, revisione prezzi e caro materiali.",
    guida: "varianti-in-corso-opera",
    badge: "Alto valore",
  },
  {
    icon: ShieldAlert,
    title: "Difesa da contestazioni di vizi",
    desc: "Contestazioni pretestuose per non pagare, eccezioni di decadenza e prescrizione, riparto di responsabilità con progettista e DL, strategia peritale e ATP.",
    guida: "committente-contesta-i-lavori",
  },
  {
    icon: Timer,
    title: "Penali e ritardi",
    desc: "Contestazione della penale, prova del ritardo non imputabile, riduzione giudiziale della penale eccessiva ex art. 1384 c.c., proroghe e sospensioni.",
    guida: "ritardo-consegna-lavori",
  },
  {
    icon: Landmark,
    title: "Contenzioso tributario dell'edilizia",
    desc: "Avvisi di recupero sui crediti d'imposta e relativi sequestri, reverse charge applicato male, IVA agevolata contestata, responsabilità solidale fiscale, accertamenti sui bonus edilizi.",
    guida: "accertamento-superbonus-imprese",
    badge: "Presidio dedicato",
  },
  {
    icon: HardHat,
    title: "Diritto del lavoro edile e DURC",
    desc: "DURC irregolare che blocca pagamenti e gare, DURC di congruità della manodopera, contenzioso con la Cassa Edile, appalto non genuino.",
    guida: "durc-irregolare",
  },
  {
    icon: Siren,
    title: "Sicurezza in cantiere e penale",
    desc: "Difesa del datore di lavoro dopo un infortunio, sequestro del cantiere e istanza di dissequestro, deleghe di funzioni, modelli 231.",
    guida: "infortunio-in-cantiere-difesa-datore",
  },
  {
    icon: Gavel,
    title: "Appalti pubblici e gare",
    desc: "Ricorso al TAR contro esclusioni e aggiudicazioni, anomalia dell'offerta, annotazioni ANAC, risoluzione del contratto pubblico, ATI e consorzi.",
    guida: "esclusione-gara-appalto-ricorso",
  },
  {
    icon: FileText,
    title: "Contrattualistica preventiva",
    desc: "Contratto d'appalto e subappalto scritti per proteggere l'impresa: clausole su penali, riserve, varianti, SAL, ritenute, collaudo e garanzie.",
    guida: "contratto-appalto-impresa",
  },
  {
    icon: TrendingDown,
    title: "Crisi d'impresa nel settore edile",
    desc: "Committente in concordato o liquidazione giudiziale: insinuazione al passivo, crediti privilegiati dell'appaltatore, sorte del contratto in corso.",
    guida: "committente-in-crisi-liquidazione",
  },
];

/** Le dieci aree del silo Privati. */
export const areePrivati: Area[] = [
  {
    icon: Home,
    title: "Difetti costruttivi in casa nuova",
    desc: "Infiltrazioni, crepe, impianti non a norma, isolamento non conforme: garanzia decennale ex art. 1669 c.c., termini di denuncia e azione contro il costruttore.",
    guida: "difetti-costruttivi-casa-nuova",
    badge: "Il caso più frequente",
  },
  {
    icon: Hammer,
    title: "Lavori mai finiti o eseguiti male",
    desc: "Cantiere abbandonato dopo gli acconti, impresa irreperibile, diffida ad adempiere, risoluzione del contratto e completamento a spese dell'impresa.",
    guida: "impresa-sparita-cantiere-abbandonato",
    badge: "Alta urgenza",
  },
  {
    icon: CalendarClock,
    title: "Ritardi nella consegna",
    desc: "Penale contrattuale: calcolo e sospensioni legittime, risoluzione per termine essenziale, risarcimento del danno documentato.",
    guida: "ritardo-consegna-lavori",
  },
  {
    icon: Receipt,
    title: "Preventivo sforato e costi extra",
    desc: "Varianti mai autorizzate per iscritto (art. 1659 c.c.), appalto a corpo e a misura, contestazione delle fatture gonfiate.",
    guida: "preventivo-sforato",
  },
  {
    icon: Sun,
    title: "Fotovoltaico e bonus edilizi",
    desc: "Impianto che non produce quanto promesso, recesso dai contratti firmati a casa, finanziamento collegato, general contractor sparito, recuperi dell'Agenzia.",
    guida: "fotovoltaico-non-produce",
  },
  {
    icon: KeyRound,
    title: "Acquisto di immobile da costruire",
    desc: "Fideiussione obbligatoria e nullità del preliminare (D.lgs. 122/2005), polizza decennale postuma, tutela contro il fallimento del costruttore.",
    guida: "acquisto-immobile-da-costruire",
  },
  {
    icon: Building,
    title: "Condominio e lavori sulle parti comuni",
    desc: "Vizi dell'appalto condominiale, infiltrazioni da lastrico solare (art. 1126 c.c.), impugnazione di delibere, Superbonus condominiale.",
    guida: "terrazzo-infiltrazioni",
  },
  {
    icon: AlertTriangle,
    title: "Abusi edilizi e difformità",
    desc: "Ordinanze di demolizione, sanatorie e doppia conformità, difformità scoperte dopo il rogito, responsabilità del venditore.",
    guida: "ordinanza-demolizione-cosa-fare",
  },
  {
    icon: Truck,
    title: "Danni dal cantiere del vicino",
    desc: "Crepe da scavi e demolizioni, accertamento tecnico preventivo urgente, distanze legali, immissioni intollerabili di rumore e polveri.",
    guida: "danni-cantiere-vicino",
  },
  {
    icon: ScrollText,
    title: "Difesa da decreto ingiuntivo",
    desc: "Decreto ingiuntivo per lavori fatti male o non finiti: opposizione entro 40 giorni, eccezione di inadempimento e domanda riconvenzionale.",
    guida: "opposizione-decreto-ingiuntivo-impresa-edile",
  },
];

/** Verticali di settore in evidenza (guide dedicate). */
export const verticali = [
  { title: "Infissi e serramenti", guida: "infissi-montati-male", kw: "Spifferi, condensa, muffa e detrazione a rischio" },
  { title: "Fotovoltaico e accumulo", guida: "fotovoltaico-non-produce", kw: "Produzione inferiore al promesso, infiltrazioni dal tetto" },
  { title: "Recesso fotovoltaico", guida: "recesso-contratto-fotovoltaico", kw: "Contratti firmati a casa: fino a 12 mesi per ripensarci" },
  { title: "Cappotto termico", guida: "cappotto-termico-difettoso", kw: "Distacchi e crepe: chi paga tra impresa, progettista e DL" },
  { title: "Cucine su misura", guida: "cucina-su-misura-difettosa", kw: "Vendita o appalto? Cambiano termini e rimedi" },
  { title: "Piscine", guida: "piscina-difetti-costruttore", kw: "Dieci anni di garanzia, non due" },
  { title: "Terrazzi e impermeabilizzazioni", guida: "terrazzo-infiltrazioni", kw: "Il terrazzo rifatto che perde ancora" },
  { title: "Pompe di calore", guida: "pompa-di-calore-non-scalda", kw: "Errore di dimensionamento, non di posa" },
];
