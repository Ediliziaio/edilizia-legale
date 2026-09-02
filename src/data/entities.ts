/**
 * Entity linking per i motori generativi.
 *
 * Gemini e il Knowledge Graph disambiguano un contenuto agganciandolo a
 * entita' note: dichiarare in `mentions` che una guida parla di "Appalto"
 * (l'entita' Wikipedia, non la parola) e' uno dei pochi segnali GEO
 * documentati che dipendono solo da noi. La lista e' volutamente corta e
 * contiene solo voci di it.wikipedia di cui il titolo e' certo: un link a
 * una pagina inesistente e' un'entita' rotta, non un'entita' in piu'.
 */

export type Entita = {
  name: string;
  /** Voce di Wikipedia in italiano. */
  sameAs: string;
  /** Espressioni che, se presenti nel testo, attivano l'entita' (minuscole, senza accenti). */
  trigger: string[];
};

const W = "https://it.wikipedia.org/wiki/";

export const ENTITA: Entita[] = [
  { name: "Appalto", sameAs: `${W}Appalto`, trigger: ["appalto", "appaltatore", "committente"] },
  { name: "Subappalto", sameAs: `${W}Subappalto`, trigger: ["subappalt"] },
  { name: "Codice civile italiano", sameAs: `${W}Codice_civile_italiano`, trigger: [" c.c."] },
  { name: "Codice di procedura civile italiano", sameAs: `${W}Codice_di_procedura_civile_italiano`, trigger: ["c.p.c."] },
  { name: "Decreto ingiuntivo", sameAs: `${W}Decreto_ingiuntivo`, trigger: ["decreto ingiuntivo"] },
  { name: "Condominio", sameAs: `${W}Condominio`, trigger: ["condomin"] },
  { name: "Corte suprema di cassazione", sameAs: `${W}Corte_suprema_di_cassazione`, trigger: ["cassazione"] },
  { name: "Documento unico di regolarità contributiva", sameAs: `${W}Documento_unico_di_regolarit%C3%A0_contributiva`, trigger: ["durc"] },
  { name: "Direttore dei lavori", sameAs: `${W}Direttore_dei_lavori`, trigger: ["direttore dei lavori", "direzione lavori", "direzione dei lavori"] },
  { name: "Superbonus 110%", sameAs: `${W}Superbonus_110%25`, trigger: ["superbonus"] },
  { name: "Impianto fotovoltaico", sameAs: `${W}Impianto_fotovoltaico`, trigger: ["fotovoltaic"] },
  { name: "Inversione contabile", sameAs: `${W}Inversione_contabile`, trigger: ["reverse charge"] },
];

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Entita' effettivamente presenti in un testo, nell'ordine della tabella. */
export const entitaCitate = (testo: string): Entita[] => {
  const t = norm(testo);
  return ENTITA.filter((e) => e.trigger.some((k) => t.includes(norm(k))));
};
