import ELLegalLayout from "@/components/ELLegalLayout";
import { EMAIL, PEC } from "@/data/site";

const NoteLegali = () => (
  <ELLegalLayout
    title="Note legali"
    subtitle="Informazioni legali sul sito edilizialegale.it e condizioni di utilizzo dei contenuti pubblicati."
    lastUpdate="Agosto 2026"
    icon="file"
    metaDescription="Note legali di Edilizia Legale: identificazione del titolare, natura informativa dei contenuti, limitazioni di responsabilità, copyright e foro competente."
    canonicalPath="/note-legali"
  >
    <h2>1. Titolarità del sito</h2>
    <p>
      Il sito <strong>edilizialegale.it</strong> è di proprietà dello <strong>Studio Edilizia Legale</strong>
      [dati identificativi completi, P.IVA, sede e iscrizioni all'albo in fase di pubblicazione].
      Contatti: {EMAIL} — PEC: {PEC}.
    </p>

    <h2>2. Informazione professionale</h2>
    <p>
      I contenuti del sito costituiscono informazione sull'attività professionale ai sensi dell'art. 35 del Codice
      Deontologico Forense: sono redatti secondo criteri di verità, correttezza e non ingannevolezza, senza
      promesse di risultato, indicazioni comparative o percentuali di successo.
    </p>

    <h2>3. Natura informativa dei contenuti</h2>
    <p>
      Le guide, le domande frequenti e ogni altro contenuto pubblicato hanno <strong>finalità esclusivamente
      informative</strong> e non costituiscono parere legale né sostituiscono una consulenza sul caso concreto.
      La normativa e la giurisprudenza sono in costante evoluzione: prima di assumere decisioni basate sui
      contenuti del sito è necessario rivolgersi a un professionista, esaminando i documenti del caso specifico.
    </p>
    <p>
      Gli esempi riportati nelle guide sono <strong>scenari illustrativi</strong>, costruiti su dinamiche ricorrenti:
      non descrivono casi reali identificabili e gli esiti indicati non costituiscono garanzia di risultati analoghi.
    </p>

    <h2>4. Limitazione di responsabilità</h2>
    <p>
      Lo studio non risponde dei danni derivanti dall'uso dei contenuti del sito in assenza di incarico
      professionale, né dei contenuti di siti terzi raggiungibili tramite link, dei quali non controlla
      l'aggiornamento o la correttezza.
    </p>

    <h2>5. Proprietà intellettuale</h2>
    <p>
      Testi, struttura e grafica del sito sono protetti dalla normativa sul diritto d'autore. È consentita la
      citazione di brevi estratti con indicazione della fonte e link alla pagina originale; sono vietate la
      riproduzione integrale e la ripubblicazione dei contenuti a fini commerciali senza autorizzazione scritta.
    </p>

    <h2>6. Legge applicabile e foro</h2>
    <p>
      Ai contenuti del sito e alle presenti condizioni si applica la legge italiana. Per ogni controversia è
      competente il foro previsto dalla legge, fatta salva la competenza inderogabile del foro del consumatore.
    </p>
  </ELLegalLayout>
);

export default NoteLegali;
