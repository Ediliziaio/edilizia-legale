/**
 * SLOT IMMAGINE DEL SITO — un solo punto per collegare le foto reali.
 *
 * Come si usa: metti il file in /public/images/ (es. public/images/imprese-hero.jpg)
 * e scrivi qui il percorso, es.:  "imprese-hero": "/images/imprese-hero.jpg"
 * Finché il valore è null, la pagina mostra un segnaposto elegante con l'etichetta.
 */

export type ImageSlotId =
  | "home-due-lati"
  | "imprese-hero"
  | "privati-hero"
  | "studio-team"
  | "contatti-studio"
  | "guide-hero"
  | "avvocato-ritratto";

export const imageSlots: Record<ImageSlotId, string | null> = {
  /** Home, sezione "due lati": foto cantiere + scrivania, o stretta di mano in cantiere */
  "home-due-lati": null,
  /** Hub imprese: cantiere reale, gru, operai (no stock finto-americano) */
  "imprese-hero": null,
  /** Hub privati: casa/famiglia o dettaglio difetto (crepa, infiltrazione) */
  "privati-hero": null,
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
  "imprese-hero": "Cantiere di un'impresa edile",
  "privati-hero": "La casa del committente",
  "studio-team": "Il team dello studio",
  "contatti-studio": "Lo studio",
  "guide-hero": "Fascicoli e codice civile",
  "avvocato-ritratto": "Avv. Armando Rossi",
};
