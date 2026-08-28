import ELLegalLayout from "@/components/ELLegalLayout";

const CookiePolicy = () => (
  <ELLegalLayout
    title="Cookie Policy"
    subtitle="Informativa sull'uso dei cookie da parte del sito edilizialegale.it, ai sensi della normativa italiana ed europea in materia di protezione dei dati personali."
    lastUpdate="Agosto 2026"
    icon="cookie"
    metaDescription="Cookie Policy di Edilizia Legale: tipologie di cookie utilizzati, finalità, durata e modalità di gestione delle preferenze."
    canonicalPath="/cookie"
  >
    <h2>1. Cosa sono i cookie</h2>
    <p>
      I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono
      memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. Si distinguono per titolare
      (di prima o terza parte), durata (di sessione o persistenti) e finalità (tecnici o di profilazione).
    </p>

    <h2>2. Cookie utilizzati da questo sito</h2>
    <p>Il sito <strong>edilizialegale.it</strong> utilizza esclusivamente:</p>
    <ul>
      <li><strong>Cookie tecnici di sessione</strong>, necessari al funzionamento del sito (es. gestione delle preferenze di navigazione). Non richiedono consenso.</li>
    </ul>
    <p>
      Il sito <strong>non utilizza cookie di profilazione</strong> né strumenti di tracciamento pubblicitario.
      Per le statistiche di visita è impiegato uno strumento di misurazione aggregata <strong>privo di
      cookie</strong> (Vercel Web Analytics), che non identifica il singolo visitatore e non ne segue la
      navigazione su altri siti: per questo non richiede un banner di consenso. Qualora in futuro venissero
      introdotti strumenti di profilazione o marketing, questa informativa sarà aggiornata e, dove richiesto,
      sarà attivato un banner di raccolta del consenso preventivo.
    </p>

    <h2>3. Cookie di terze parti</h2>
    <p>
      I caratteri tipografici sono serviti direttamente dal dominio del sito: la navigazione non comporta
      richieste verso fornitori di font esterni. L'infrastruttura di hosting (Vercel) tratta i dati tecnici di
      connessione — indirizzo IP, log del server — necessari all'erogazione del servizio, in qualità di
      responsabile del trattamento.
    </p>

    <h2>4. Gestione dei cookie dal browser</h2>
    <p>
      L'utente può gestire o eliminare i cookie tramite le impostazioni del proprio browser. La disabilitazione dei
      cookie tecnici può compromettere il corretto funzionamento del sito.
    </p>

    <h2>5. Titolare</h2>
    <p>
      Per l'identità del titolare e i diritti dell'interessato si rinvia alla <a href="/privacy">Privacy Policy</a>.
    </p>
  </ELLegalLayout>
);

export default CookiePolicy;
