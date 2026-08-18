import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import Imprese from "./pages/Imprese";
import Privati from "./pages/Privati";
import Studio from "./pages/Studio";
import ConflittiInteresse from "./pages/ConflittiInteresse";
import Guide from "./pages/Guide";
import DomandeFrequenti from "./pages/DomandeFrequenti";
import DomandaSingola from "./pages/DomandaSingola";
import Contatti from "./pages/Contatti";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import NoteLegali from "./pages/NoteLegali";
import NotFound from "./pages/NotFound";
import { articlesMeta } from "./data/articlesMeta";
import { faqEntries } from "./data/faq";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Salta la navigazione: obbligo di accessibilita' (WCAG 2.4.1), e su
            queste pagine il menu davanti al contenuto e' lungo. Invisibile
            finche' non riceve il fuoco da tastiera. */}
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2.5 focus:text-white focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold"
        >
          Vai al contenuto
        </a>
        <ScrollToTop />
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "imprese", element: <Imprese /> },
      { path: "privati", element: <Privati /> },
      { path: "studio", element: <Studio /> },
      { path: "studio/conflitti-di-interesse", element: <ConflittiInteresse /> },
      { path: "guide", element: <Guide /> },
      {
        // Rotta pigra: il corpo delle 43 guide pesa quasi 1 MB e, importato in
        // cima, finiva nel bundle unico che scarica anche chi apre solo la home.
        // Cosi' resta in un chunk a parte, richiesto solo aprendo una guida.
        path: "guide/:slug",
        lazy: () => import("./pages/Articolo").then((m) => ({ Component: m.default })),
        getStaticPaths: () => articlesMeta.map((a) => `/guide/${a.slug}`),
      },
      { path: "domande-frequenti", element: <DomandeFrequenti /> },
      {
        path: "domande-frequenti/:slug",
        element: <DomandaSingola />,
        getStaticPaths: () => faqEntries.map((f) => `/domande-frequenti/${f.slug}`),
      },
      { path: "contatti", element: <Contatti /> },
      { path: "privacy", element: <Privacy /> },
      { path: "cookie", element: <CookiePolicy /> },
      { path: "note-legali", element: <NoteLegali /> },
      // Prerenderizzata come /404: Vercel serve dist/404.html sui percorsi
      // sconosciuti, con status 404 corretto. Senza, il visitatore vedeva la
      // pagina di errore generica di Vercel invece di quella dello studio.
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
