/**
 * Link alla fonte primaria per ogni riferimento normativo citato nelle guide.
 *
 * Per l'AEO/GEO linkare Normattiva conta il doppio: e' la fonte che i motori
 * generativi usano per verificare una citazione prima di riproporla, ed e' il
 * segnale "questo contenuto cita le fonti primarie" che la strategia del sito
 * chiede esplicitamente. Un link sbagliato pero' e' peggio di nessun link:
 * qui si producono URL solo per atti la cui data e' certa. Tutto il resto
 * restituisce null e viene mostrato come testo.
 */

const N2LS = "https://www.normattiva.it/uri-res/N2Ls?";

/** Codici: URN fissi, con ancora all'articolo (Normattiva usa `~art1667`, `~art34bis`). */
const CODICI: Record<string, string> = {
  "c.c.": "urn:nir:stato:regio.decreto:1942-03-16;262",
  "c.p.c.": "urn:nir:stato:regio.decreto:1940-10-28;1443",
  "c.p.": "urn:nir:stato:regio.decreto:1930-10-19;1398",
};

/** Atti numerati: la URN richiede la data di emanazione — solo quelle certe. */
const ATTI: Record<string, { tipo: string; data: string }> = {
  // decreti legislativi
  "D.lgs. 36/2023": { tipo: "decreto.legislativo", data: "2023-03-31" },
  "D.lgs. 28/2010": { tipo: "decreto.legislativo", data: "2010-03-04" },
  "D.lgs. 231/2002": { tipo: "decreto.legislativo", data: "2002-10-09" },
  "D.lgs. 122/2005": { tipo: "decreto.legislativo", data: "2005-06-20" },
  "D.lgs. 276/2003": { tipo: "decreto.legislativo", data: "2003-09-10" },
  "D.lgs. 206/2005": { tipo: "decreto.legislativo", data: "2005-09-06" },
  "D.lgs. 81/2008": { tipo: "decreto.legislativo", data: "2008-04-09" },
  "D.lgs. 74/2000": { tipo: "decreto.legislativo", data: "2000-03-10" },
  "D.lgs. 231/2001": { tipo: "decreto.legislativo", data: "2001-06-08" },
  "D.lgs. 14/2019": { tipo: "decreto.legislativo", data: "2019-01-12" },
  "D.lgs. 170/2021": { tipo: "decreto.legislativo", data: "2021-11-04" },
  "D.lgs. 471/1997": { tipo: "decreto.legislativo", data: "1997-12-18" },
  "D.lgs. 87/2024": { tipo: "decreto.legislativo", data: "2024-06-14" },
  // d.P.R.
  "D.P.R. 380/2001": { tipo: "decreto.del.presidente.della.repubblica", data: "2001-06-06" },
  "D.P.R. 207/2010": { tipo: "decreto.del.presidente.della.repubblica", data: "2010-10-05" },
  // decreti-legge
  "D.L. 34/2020": { tipo: "decreto.legge", data: "2020-05-19" },
  "D.L. 124/2019": { tipo: "decreto.legge", data: "2019-10-26" },
  "D.L. 76/2020": { tipo: "decreto.legge", data: "2020-07-16" },
  "D.L. 69/2024": { tipo: "decreto.legge", data: "2024-05-29" },
  // leggi
  "L. 212/2000": { tipo: "legge", data: "2000-07-27" },
};

/** "D.Lgs. 36/2023", "d.lgs 36/2023", "DPR 380/2001" -> chiave canonica della tabella. */
const canonica = (fonte: string): string | null => {
  const s = fonte.replace(/\s+/g, " ").trim();
  let m = /^d\.?\s?lgs\.?\s*(\d+)\/(\d{4})$/i.exec(s);
  if (m) return `D.lgs. ${m[1]}/${m[2]}`;
  m = /^d\.?p\.?r\.?\s*(\d+)\/(\d{4})$/i.exec(s);
  if (m) return `D.P.R. ${m[1]}/${m[2]}`;
  m = /^d\.?l\.?\s*(\d+)\/(\d{4})$/i.exec(s);
  if (m) return `D.L. ${m[1]}/${m[2]}`;
  m = /^l\.\s*(\d+)\/(\d{4})$/i.exec(s);
  if (m) return `L. ${m[1]}/${m[2]}`;
  return null;
};

export type FonteNormativa = {
  /** URN Normattiva (identificatore stabile dell'atto). */
  urn: string;
  /** URL consultabile del testo vigente. */
  url: string;
};

/**
 * Risolve un riferimento come estratto da `estraiFonti` ("art. 1667 c.c.",
 * "artt. 1667 e 1669 c.c.", "D.lgs. 36/2023") nella sua fonte su Normattiva.
 * Per i codici l'ancora punta al primo articolo citato.
 */
export const fonteNormattiva = (fonte: string): FonteNormativa | null => {
  const s = fonte.replace(/\s+/g, " ").trim();

  // articoli di codice
  const art = /^artt?\.\s*(\d+)(?:-([a-z]+))?/i.exec(s);
  const codice = /(c\.p\.c\.|c\.c\.|c\.p\.)\s*$/i.exec(s)?.[1].toLowerCase();
  if (art && codice && CODICI[codice]) {
    const urn = CODICI[codice];
    const ancora = `~art${art[1]}${art[2] ? art[2].toLowerCase() : ""}`;
    return { urn, url: `${N2LS}${urn}${ancora}` };
  }

  // atti numerati con data nota
  const chiave = canonica(s);
  const atto = chiave ? ATTI[chiave] : undefined;
  if (atto) {
    const [anno] = atto.data.split("-");
    const numero = chiave!.split(" ").pop()!.split("/")[0];
    const urn = `urn:nir:stato:${atto.tipo}:${atto.data};${numero}`;
    void anno;
    return { urn, url: `${N2LS}${urn}` };
  }

  return null;
};
