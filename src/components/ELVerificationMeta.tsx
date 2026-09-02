import { Head } from "vite-react-ssg";

/**
 * Meta di verifica per Google Search Console e Bing Webmaster Tools, lette
 * dalle variabili d'ambiente di build. Senza i due strumenti non si vede
 * cosa e' indicizzato e cosa no, ne' si puo' inviare la sitemap o usare
 * IndexNow con feedback. Se la variabile manca il tag non viene emesso.
 *
 *   VITE_GSC_VERIFICATION   -> <meta name="google-site-verification">
 *   VITE_BING_VERIFICATION  -> <meta name="msvalidate.01">
 */
const ELVerificationMeta = () => {
  const gsc = import.meta.env.VITE_GSC_VERIFICATION as string | undefined;
  const bing = import.meta.env.VITE_BING_VERIFICATION as string | undefined;
  if (!gsc && !bing) return null;
  return (
    <Head>
      {gsc && <meta name="google-site-verification" content={gsc} />}
      {bing && <meta name="msvalidate.01" content={bing} />}
    </Head>
  );
};

export default ELVerificationMeta;
