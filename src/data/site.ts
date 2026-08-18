// Costanti di brand e contatto — un solo punto di modifica per tutto il sito.
// I valori segnati [DA CONFERMARE] vanno sostituiti con i dati reali dello
// studio prima del lancio (vedi README).

export const SITE_URL = "https://www.edilizialegale.it";
export const SITE_NAME = "Edilizia Legale";

// [DA CONFERMARE] recapiti reali dello studio
export const PHONE_TEL = "+390200000000";
export const PHONE_DISPLAY = "02 0000 0000";
export const EMAIL = "info@edilizialegale.it";
export const PEC = "edilizialegale@pec.it";

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
export const AUTHOR_FORO: string | null = null;   // es. "Ordine degli Avvocati di Milano"
export const AUTHOR_ANNO: string | null = null;   // es. "2009"
/** Profili pubblici verificabili dell'autore (LinkedIn, scheda albo). */
export const AUTHOR_SAMEAS: string[] = [];

/** Ancora dei dati strutturati della persona: gli articoli ci puntano come autore. */
export const AUTHOR_ID = `${SITE_URL}/studio#avvocato`;
export const AUTHOR_URL = `${SITE_URL}/studio`;

export const abs = (path: string) => `${SITE_URL}${path}`;
