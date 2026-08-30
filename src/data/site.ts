// Costanti di brand e contatto — un solo punto di modifica per tutto il sito.
// I valori segnati [DA CONFERMARE] vanno sostituiti con i dati reali dello
// studio prima del lancio (vedi README).

export const SITE_URL = "https://www.edilizialegale.it";
export const SITE_NAME = "Edilizia Legale";

// Recapiti reali dello Studio Legale Avv. Armando Rossi (fonte: tuteladebito.it).
export const PHONE_TEL = "+390818671862";
export const PHONE_DISPLAY = "081 18671862";
export const PHONE_MOBILE_TEL = "+393386115394";
export const PHONE_MOBILE_DISPLAY = "338 6115394";
export const EMAIL = "info@studioavvocatorossi.it";
export const PEC = "armandorossi@avvocatinapoli.legalmail.it";

/** Sedi operative reali: indirizzo fisico verificabile = segnale di affidabilità. */
export const SEDI = [
  { citta: "Napoli", via: "Via M. Cervantes 55/5", cap: "80133", provincia: "NA" },
  { citta: "Milano", via: "Via R. Boscovich 14", cap: "20124", provincia: "MI" },
  { citta: "Torino", via: "Corso Vittorio Emanuele II 168", cap: "10138", provincia: "TO" },
] as const;

// Autore dei contenuti: una persona nominata, non una redazione anonima.
// Il diritto è materia YMYL — Google e i motori generativi pesano molto
// chi firma, con quale titolo e presso quale foro.
export const DEFAULT_AUTHOR = "Avv. Armando Rossi";
export const AUTHOR_ROLE = "Avvocato";

/**
 * Foro e anno di iscrizione all'albo. [DA CONFERMARE] — finché restano null
 * non vengono mostrati in pagina né inseriti nei dati strutturati: meglio
 * un dato assente che un dato inventato.
 */
export const AUTHOR_FORO: string | null = "Ordine degli Avvocati di Napoli";
export const AUTHOR_ANNO: string | null = null;   // [DA CONFERMARE] anno di iscrizione all'albo
/** Titolo ulteriore dichiarato dal professionista. */
export const AUTHOR_TITOLO: string | null = "Patrocinante in Cassazione";
/** Profili pubblici verificabili dell'autore (LinkedIn, scheda albo). */
export const AUTHOR_SAMEAS: string[] = [
  "https://www.linkedin.com/in/armando-rossi-0378083b/",
];

/** Ancora dei dati strutturati della persona: gli articoli ci puntano come autore. */
export const AUTHOR_ID = `${SITE_URL}/studio#avvocato`;
export const AUTHOR_URL = `${SITE_URL}/studio`;

/**
 * Endpoint del modulo contatti (Formspree, Web3Forms, funzione serverless...).
 * [DA CONFERMARE] Finché resta null, il modulo apre il client di posta del
 * visitatore con la richiesta già scritta: nessun invio nel vuoto e nessun
 * messaggio di successo non veritiero.
 */
export const CONTACT_ENDPOINT: string | null = null;

export const abs = (path: string) => `${SITE_URL}${path}`;
