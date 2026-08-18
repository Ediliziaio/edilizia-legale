/**
 * SLOT IMMAGINE DEL SITO — un solo punto per collegare le foto reali.
 *
 * Come si usa: metti il file in /public/images/ (es. public/images/imprese-hero.jpg)
 * e scrivi qui il percorso, es.:  "imprese-hero": "/images/imprese-hero.jpg"
 * Finché il valore è null, la pagina mostra un segnaposto elegante con l'etichetta.
 */

export type ImageSlotId =
  | "home-due-lati"
  | "home-metodo"
  | "imprese-banda"
  | "privati-banda"
  | "domande-hero"
  | "studio-team"
  | "contatti-studio"
  | "guide-hero"
  | "avvocato-ritratto";

export const imageSlots: Record<ImageSlotId, string | null> = {
  /** Home, sezione "due lati": foto cantiere + scrivania, o stretta di mano in cantiere */
  "home-due-lati": null,
  /** Home, sezione "come lavoriamo": esame del fascicolo documentale sul tavolo */
  "home-metodo": null,
  /** Hub imprese, banda tra le aree e le guide: cantiere di un'impresa al lavoro */
  "imprese-banda": null,
  /** Hub privati, banda tra le aree e i verticali: casa in ristrutturazione */
  "privati-banda": null,
  /** Hub domande frequenti: scrivania con appunti e codice civile */
  "domande-hero": null,
  /** Pagina studio: foto vera del team / dello studio */
  "studio-team": null,
  /** Contatti: ingresso o sala riunioni dello studio */
  "contatti-studio": null,
  /** Guide: scrivania con fascicoli / codice civile */
  "guide-hero": null,
  /** Ritratto dell'avvocato: usato in home, pagina studio e firma degli articoli */
  "avvocato-ritratto": null,
};

/** Didascalie/alt di default per ogni slot (usate anche dal segnaposto). */
export const imageSlotLabels: Record<ImageSlotId, string> = {
  "home-due-lati": "Il cantiere e le carte: i due lati del contenzioso edilizio",
  "home-metodo": "L'esame del fascicolo documentale",
  "imprese-banda": "Il cantiere di un'impresa edile al lavoro",
  "privati-banda": "La casa in ristrutturazione del committente",
  "domande-hero": "Appunti e codice civile sulla scrivania",
  "studio-team": "Il team dello studio",
  "contatti-studio": "Lo studio",
  "guide-hero": "Fascicoli e codice civile",
  "avvocato-ritratto": "Avv. Armando Rossi",
};
