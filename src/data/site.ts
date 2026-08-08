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

// Autore di default dei contenuti. Per l'E-E-A-T va sostituito con un
// avvocato reale, nominato, con foro e anno di iscrizione ([DA CONFERMARE]).
export const DEFAULT_AUTHOR = "Redazione Edilizia Legale";

export const abs = (path: string) => `${SITE_URL}${path}`;
