import { useState, useEffect, type ReactNode } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import ELHeader from "@/components/ELHeader";
import ELFooter from "@/components/ELFooter";
import ELContactModal from "@/components/ELContactModal";
import ELStickyCTA from "@/components/ELStickyCTA";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Info,
  List,
  Share2,
  Linkedin,
  MessageCircle,
  Mail,
  Link as LinkIcon,
  Check,
  Tag,
  Phone,
  Sparkles,
  ChevronRight,
  ChevronDown,
  FileText,
  Scale,
  BadgeCheck,
} from "lucide-react";
import { articlesMeta, getRelated, toISODate, type Block, type Article, type ArticleMeta } from "@/data/articles";
import { getArticleContent } from "@/data/articlesContent";
import { getArticleSeo } from "@/data/articleSeo";
import { getArticleImage } from "@/data/articleImages";
import { SITE_URL, PHONE_TEL, PHONE_DISPLAY, AUTHOR_ID, AUTHOR_URL, AUTHOR_ROLE, AUTHOR_FORO, AUTHOR_SAMEAS } from "@/data/site";
import ArticleFigure from "@/components/ArticleFigure";
import ArticleTimeline from "@/components/ArticleTimeline";
import ArticleCover from "@/components/ArticleCover";
import ArticleCaselaw from "@/components/ArticleCaselaw";
import ELAuthorBox from "@/components/ELAuthorBox";
import ArticleSources, { estraiFonti } from "@/components/ArticleSources";

/**
 * Link inline nel testo dei blocchi, con sintassi `[testo](/guide/slug)`.
 * Serve a rendere cliccabili i rimandi tra guide, che finora esistevano solo
 * a parole: senza, l'architettura a silo non trasferisce nessuna autorità.
 */
const LINK_RE = /\[([^\]]+)\]\((\/[^)\s]+|https?:\/\/[^)\s]+)\)/g;

const renderInline = (text: string): ReactNode => {
  if (!text.includes("](")) return text;
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    out.push(
      href.startsWith("/") ? (
        <Link key={`${m.index}`} to={href} className="text-navy underline decoration-gold decoration-2 underline-offset-2 hover:text-gold-dark">
          {label}
        </Link>
      ) : (
        <a key={`${m.index}`} href={href} target="_blank" rel="noopener noreferrer" className="text-navy underline decoration-gold decoration-2 underline-offset-2 hover:text-gold-dark">
          {label}
        </a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
};

const renderBlock = (block: Block, i: number) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} id={block.id} className="text-2xl md:text-3xl font-bold text-navy mt-12 mb-5 leading-tight scroll-mt-24">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl font-bold text-navy mt-8 mb-3 leading-tight">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-foreground/80 leading-relaxed mb-5 text-lg">
          {renderInline(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-6 space-y-2.5">
          {block.items.map((it, j) => (
            <li key={j} className="flex items-start gap-3 text-foreground/80 text-lg">
              <span className="text-gold-dark mt-2 text-xs">●</span>
              <span>{renderInline(it)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-6 space-y-2.5 list-decimal pl-6 marker:text-gold-dark marker:font-bold">
          {block.items.map((it, j) => (
            <li key={j} className="text-foreground/80 text-lg pl-2 leading-relaxed">
              {renderInline(it)}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="border-l-4 border-gold pl-5 my-7 italic text-foreground/80">
          <p className="text-lg leading-relaxed">"{block.text}"</p>
          {block.cite && <cite className="text-sm text-foreground/60 not-italic block mt-2">— {block.cite}</cite>}
        </blockquote>
      );
    case "note":
      return (
        <div key={i} className="bg-gold/10 border-l-4 border-gold rounded-r-xl p-5 my-7 flex items-start gap-3">
          <Info className="w-5 h-5 text-gold-dark mt-0.5 shrink-0" />
          <p className="text-navy leading-relaxed">{renderInline(block.text)}</p>
        </div>
      );
    case "table":
      return (
        <div key={i} className="my-7 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left">
            <thead className="bg-navy text-white">
              <tr>
                {block.headers.map((h, j) => (
                  <th key={j} className="px-4 py-3 text-sm font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {block.rows.map((row, j) => (
                <tr key={j} className="border-t border-border">
                  {row.map((cell, k) => (
                    <td key={k} className="px-4 py-3 text-foreground/80">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "faq":
      // <details> nativo, non accordion JS: le risposte devono stare nell'HTML
      // statico. Lo schema FAQPage le dichiara, e i crawler AI non eseguono JS.
      return (
        <div key={i} className="my-7 space-y-3">
          {block.items.map((f, j) => (
            <details
              key={j}
              className="group bg-muted/40 rounded-xl border border-border px-5 open:pb-1"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-4 font-semibold text-navy hover:text-gold-dark [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-foreground/75 leading-relaxed pb-4 text-base">{renderInline(f.a)}</p>
            </details>
          ))}
        </div>
      );
    case "figure":
      return <ArticleFigure key={i} slot={block.slot} alt={block.alt} caption={block.caption} />;
    case "timeline":
      return <ArticleTimeline key={i} title={block.title} steps={block.steps} />;
    case "caselaw":
      return <ArticleCaselaw key={i} title={block.title} items={block.items} />;
    case "image":
      return (
        <figure key={i} className="my-8">
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl shadow-card border border-border aspect-[16/9] object-cover"
          />
          {block.caption && (
            <figcaption className="text-sm text-foreground/60 mt-3 italic text-center leading-relaxed">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
};

const wordCountOf = (blocks?: Block[]): number => {
  if (!blocks) return 0;
  const count = (t: string) => t.trim().split(/\s+/).filter(Boolean).length;
  let n = 0;
  for (const b of blocks) {
    if ("text" in b && typeof b.text === "string") n += count(b.text);
    if ("items" in b && Array.isArray(b.items)) {
      for (const it of b.items) {
        if (typeof it === "string") {
          n += count(it);
        } else if (it && typeof it === "object") {
          // FAQ ({q,a}) oppure giurisprudenza ({principle,impact})
          if ("q" in it) n += count(it.q) + count(it.a);
          else if ("principle" in it) n += count(it.principle) + count(it.impact ?? "");
        }
      }
    }
    if (b.type === "timeline") {
      for (const s of b.steps) n += count(s.label) + count(s.detail ?? "");
    }
  }
  return n;
};

const buildSchemas = (article: ArticleMeta, content?: Block[]) => {
  const url = `https://www.edilizialegale.it/guide/${article.slug}`;
  // Immagine per schema/Open Graph: la copertina collegata, altrimenti l'OG di sito.
  const cover = getArticleImage(`${article.slug}-cover`) ?? article.coverImage;
  const image = cover
    ? cover.startsWith("http")
      ? cover
      : `https://www.edilizialegale.it${cover}`
    : "https://www.edilizialegale.it/og-image.png";
  const minutes = parseInt(article.readTime, 10);
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": [image],
    "author": {
      "@type": "Person",
      "@id": AUTHOR_ID,
      "name": article.author,
      "url": AUTHOR_URL,
      "jobTitle": AUTHOR_ROLE,
      ...(AUTHOR_FORO ? { "memberOf": { "@type": "Organization", "name": AUTHOR_FORO } } : {}),
      ...(AUTHOR_SAMEAS.length ? { "sameAs": AUTHOR_SAMEAS } : {}),
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.edilizialegale.it/#organization",
      "name": "Edilizia Legale",
      "url": "https://www.edilizialegale.it",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.edilizialegale.it/brand/marchio-edilizia-legale.png",
        "width": 391,
        "height": 512,
      },
    },
    "datePublished": toISODate(article.date) ?? article.date,
    "dateModified": toISODate(article.date) ?? article.date,
    "keywords": article.keywords?.join(", "),
    "articleSection": article.category,
    "inLanguage": "it-IT",
    "isAccessibleForFree": true,
    ...(Number.isFinite(minutes) ? { "timeRequired": `PT${minutes}M` } : {}),
    ...(content ? { "wordCount": wordCountOf(content) } : {}),
    // Le norme citate come entita' tipizzate, non come stringhe: e' cosi' che
    // un motore collega la guida all'articolo di legge invece di leggerne il
    // nome come testo qualsiasi.
    ...(content && estraiFonti(content).length
      ? {
          "citation": estraiFonti(content).map((f) => ({
            "@type": "Legislation",
            "name": f,
            "legislationJurisdiction": "IT",
          })),
        }
      : {}),
    ...(article.keywords?.length
      ? { "about": { "@type": "Thing", "name": article.keywords[0] } }
      : {}),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.edilizialegale.it/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guide",
        "item": "https://www.edilizialegale.it/guide",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.category,
        "item":
          article.category === "Imprese" || article.category === "Tributario"
            ? "https://www.edilizialegale.it/imprese"
            : "https://www.edilizialegale.it/privati",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": article.title,
        "item": url,
      },
    ],
  };

  const faqBlock = content?.find((b) => b.type === "faq");
  const faqSchema = faqBlock?.type === "faq"
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqBlock.items.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }
    : null;

  return { articleSchema, breadcrumbSchema, faqSchema };
};

interface SidebarProps {
  article: Article;
  related: ArticleMeta[];
  onOpenContact: () => void;
}

const Sidebar = ({ article, related, onOpenContact }: SidebarProps) => {
  const [copied, setCopied] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const headings = article.content.filter(
    (b): b is { type: "h2"; text: string; id?: string } => b.type === "h2" && !!b.id
  );

  // URL canonico, non window.location: è identico in prerender e nel browser
  // (niente disallineamento di idratazione) e chi condivide manda il link di
  // produzione, non l'indirizzo su cui sta navigando.
  const articleUrl = `${SITE_URL}/guide/${article.slug}`;

  // Scrollspy: track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id!);
      if (el) observer.observe(el);
    });
    observers.push(observer);
    return () => observers.forEach((o) => o.disconnect());
  }, [headings]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_e) {
      // ignore
    }
  };

  // Category counts across all articles
  const allCategories = Array.from(new Set(articlesMeta.map((a) => a.category)));

  return (
    <aside className="lg:sticky lg:top-24 space-y-5 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
      {/* Primary CTA card */}
      <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl p-5 lg:p-6 shadow-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gold/15 blur-2xl pointer-events-none" aria-hidden="true" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gold/15 text-gold rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border border-gold/30">
            <Sparkles className="w-3 h-3" />
            Analisi del caso
          </div>
          <h3 className="text-lg font-bold mb-2 leading-tight">Vuoi capire se si applica al tuo caso?</h3>
          <p className="text-white/75 text-sm leading-relaxed mb-4">
            Mandaci i documenti: entro 48 ore lavorative ti diciamo in che termine sei e quali strade esistono.
          </p>
          <Button
            onClick={onOpenContact}
            className="w-full bg-gold hover:bg-gold-dark text-navy font-bold mb-2"
          >
            Richiedi l'analisi <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-1.5 text-xs text-white/70 hover:text-gold mt-2">
            <Phone className="w-3.5 h-3.5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Author + meta card */}
      <div className="bg-white rounded-2xl p-5 border border-border">
        <div className="text-[10px] uppercase tracking-wider text-gold-dark font-bold mb-2">Autore</div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-gold font-bold text-sm">
            {article.author.split(" ").slice(-2).map((s) => s[0]).join("")}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-navy text-sm leading-tight">{article.author}</div>
            <div className="text-xs text-foreground/60">Edilizia Legale</div>
          </div>
        </div>
        <div className="space-y-1.5 text-xs text-foreground/70 pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Pubblicato: {article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Lettura: {article.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Categoria: <strong className="text-navy">{article.category}</strong></span>
          </div>
        </div>
      </div>

      {/* Table of contents with scrollspy */}
      {headings.length >= 3 && (
        <div className="bg-muted/40 border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <List className="w-4 h-4 text-gold-dark" />
            <h3 className="font-bold text-navy text-sm">In questo articolo</h3>
          </div>
          <ol className="space-y-1.5 text-sm">
            {headings.map((h, i) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`flex items-start gap-2 py-1 px-2 rounded-md transition-colors border-l-2 ${
                    activeId === h.id
                      ? "bg-gold/10 text-navy font-semibold border-gold"
                      : "text-foreground/70 hover:text-navy hover:bg-white border-transparent"
                  }`}
                >
                  <span className={`tabular-nums shrink-0 text-xs mt-0.5 ${activeId === h.id ? "text-gold-dark font-bold" : "text-gold-dark/60"}`}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="leading-tight">{h.text}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Share buttons */}
      <div className="bg-white border border-border rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Share2 className="w-4 h-4 text-gold-dark" />
          <h3 className="font-bold text-navy text-sm">Condividi l'articolo</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-trust hover:text-white text-foreground/70 transition-colors"
            aria-label="Condividi su LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-[10px] font-semibold">LinkedIn</span>
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(article.title + " — " + articleUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-success hover:text-white text-foreground/70 transition-colors"
            aria-label="Condividi su WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px] font-semibold">WhatsApp</span>
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent("Ti segnalo questo articolo: " + articleUrl)}`}
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-navy hover:text-white text-foreground/70 transition-colors"
            aria-label="Condividi via email"
          >
            <Mail className="w-4 h-4" />
            <span className="text-[10px] font-semibold">Email</span>
          </a>
          <button
            onClick={copyLink}
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-muted hover:bg-gold hover:text-navy text-foreground/70 transition-colors"
            aria-label="Copia link"
          >
            {copied ? <Check className="w-4 h-4 text-success" /> : <LinkIcon className="w-4 h-4" />}
            <span className="text-[10px] font-semibold">{copied ? "Copiato" : "Copia"}</span>
          </button>
        </div>
      </div>

      {/* Related articles compact */}
      {related.length > 0 && (
        <div className="bg-white border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-gold-dark" />
            <h3 className="font-bold text-navy text-sm">Articoli correlati</h3>
          </div>
          <ul className="space-y-3">
            {related.slice(0, 3).map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/guide/${a.slug}`}
                  className="group flex items-start gap-3 hover:bg-muted/60 -mx-2 px-2 py-1.5 rounded-lg transition-colors"
                >
                  <ArticleCover article={a} className="shrink-0 w-12 h-12 rounded-lg" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-wider text-gold-dark font-bold leading-tight mb-0.5">
                      {a.category}
                    </div>
                    <div className="text-sm font-semibold text-navy leading-snug group-hover:text-gold-dark line-clamp-2">
                      {a.title}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/guide"
            className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-navy hover:text-gold-dark"
          >
            Tutte le guide <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Categories navigation */}
      <div className="bg-white border border-border rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-gold-dark" />
          <h3 className="font-bold text-navy text-sm">Esplora per categoria</h3>
        </div>
        <ul className="space-y-1">
          {allCategories.map((cat) => {
            const count = articlesMeta.filter((a) => a.category === cat).length;
            return (
              <li key={cat}>
                <Link
                  to="/guide"
                  className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-muted text-sm transition-colors group"
                >
                  <span className={`font-medium ${article.category === cat ? "text-gold-dark" : "text-foreground/75 group-hover:text-navy"}`}>
                    {cat}
                  </span>
                  <span className="text-xs text-foreground/50 tabular-nums">{count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* FAQ mini-card */}
      <div className="bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/40 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-gold-dark" />
          <h3 className="font-bold text-navy text-sm">Domande frequenti</h3>
        </div>
        <p className="text-xs text-foreground/75 leading-relaxed mb-3">
          Termini, garanzie, decreti ingiuntivi: risposte brevi con i riferimenti normativi.
        </p>
        <Link to="/domande-frequenti" className="text-xs font-bold text-navy hover:text-gold-dark inline-flex items-center gap-1">
          Vai alle domande frequenti <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </aside>
  );
};

const Articolo = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  if (!slug) return <Navigate to="/guide" replace />;
  // Full content is available synchronously so the article body is present in the
  // prerendered static HTML (SSG) — crawlers and AI engines read it without JS.
  const article = getArticleContent(slug);
  if (!article) return <Navigate to="/guide" replace />;

  const related = getRelated(slug, 3);
  const toc = article.content.filter(
    (b): b is { type: "h2"; text: string; id?: string } & { id: string } =>
      b.type === "h2" && typeof b.id === "string" && b.id.length > 0,
  );
  const { articleSchema, breadcrumbSchema, faqSchema } = buildSchemas(article, article.content);
  // SERP-length title/description (fallback to the long H1/excerpt if not tuned).
  const seo = getArticleSeo(slug);
  const seoTitle = seo?.seoTitle ?? `${article.title} | Edilizia Legale`;
  const seoDescription = seo?.metaDescription ?? article.excerpt;
  // Stessa copertina che finisce nello schema: prima lo slot collegato, poi il
  // campo dell'articolo, e solo all'ultimo l'immagine di sito. Senza questo,
  // ogni guida condivideva la stessa anteprima social.
  const ogCover = getArticleImage(`${article.slug}-cover`) ?? article.coverImage;
  const ogImage = ogCover
    ? (ogCover.startsWith("http") ? ogCover : `${SITE_URL}${ogCover}`)
    : `${SITE_URL}/og-image.png`;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={article.keywords?.join(", ")}
        robots="index, follow, max-image-preview:large, max-snippet:-1"
        canonical={`https://www.edilizialegale.it/guide/${article.slug}`}
        ogType="article"
        ogTitle={article.title}
        ogDescription={article.excerpt}
        image={ogImage}
        preloadImage={getArticleImage(`${article.slug}-cover`) ?? undefined}
        extraMeta={[
          { name: "author", content: article.author },
          { property: "article:author", content: article.author },
          { property: "article:section", content: article.category },
          { property: "article:published_time", content: toISODate(article.date) ?? article.date },
          { property: "article:modified_time", content: toISODate(article.date) ?? article.date },
        ]}
        jsonLd={[articleSchema, breadcrumbSchema, faqSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <ELHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Article Hero — navy band; l'intro è il blocco di risposta diretta */}
          <section className="bg-navy text-white border-b border-white/10">
            <div className="container mx-auto px-4 py-10 lg:py-14">
              {/* Briciole visibili: lo schema BreadcrumbList dichiarava un
                  percorso che in pagina non esisteva. Ora sono la stessa cosa,
                  e danno a Google due link interni contestuali in piu'. */}
              <nav aria-label="Percorso" className="mb-6">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/60">
                  <li><Link to="/" className="hover:text-gold">Home</Link></li>
                  <li aria-hidden="true" className="text-white/30">/</li>
                  <li><Link to="/guide" className="hover:text-gold">Guide</Link></li>
                  <li aria-hidden="true" className="text-white/30">/</li>
                  <li>
                    <Link
                      to={article.category === "Imprese" || article.category === "Tributario" ? "/imprese" : "/privati"}
                      className="hover:text-gold"
                    >
                      {article.category}
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/30">/</li>
                  <li aria-current="page" className="text-white/85 max-w-full truncate">{article.title}</li>
                </ol>
              </nav>
              <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-center">
                <div className="max-w-4xl">
                <div className="flex items-center gap-3 flex-wrap mb-5">
                  <span className="px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-sm text-white/60 flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Aggiornato: {article.date}</span>
                  <span className="text-sm text-white/60 flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
                  <span className="text-sm text-white/60 flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  {article.title}
                </h1>
                <div className="bg-white/5 border-l-4 border-gold rounded-r-xl p-5 lg:p-6">
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                    {article.intro}
                  </p>
                </div>
                </div>
                <ArticleCover
                  article={article}
                  eager
                  className="hidden lg:block rounded-2xl aspect-[4/3] shadow-soft"
                />
              </div>
            </div>
          </section>

          {/* Body with sidebar */}
          <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 max-w-7xl mx-auto">
                {/* Main content */}
                <div className="min-w-0">
                  {/* Indice su mobile: la sidebar è nascosta sotto lg, e senza
                      questo una guida da 3.000 parole non ha navigazione dove
                      arriva la maggior parte del traffico. */}
                  {toc.length > 2 && (
                    <details className="lg:hidden group mb-8 bg-muted/40 border border-border rounded-xl px-5">
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-4 font-bold text-navy [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center gap-2">
                          <List className="w-4 h-4 text-gold-dark" /> In questa guida
                        </span>
                        <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" />
                      </summary>
                      <ol className="pb-4 space-y-2 list-decimal pl-5 marker:text-gold-dark marker:font-bold">
                        {toc.map((h) => (
                          <li key={h.id}>
                            <a href={`#${h.id}`} className="text-foreground/75 hover:text-gold-dark leading-snug">
                              {h.text}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </details>
                  )}

                  <article>{article.content.map(renderBlock)}</article>

                  <ArticleSources content={article.content} />

                  <ELAuthorBox />

                  {/* CTA box */}
                  <div className="mt-12 bg-navy text-white rounded-2xl p-7 lg:p-9">
                    <h3 className="text-xl lg:text-2xl font-bold mb-3">Vuoi capire come si applica al tuo caso?</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      Gli articoli del blog hanno carattere informativo. Per una valutazione concreta della tua posizione è sempre necessario un colloquio individuale con esame della documentazione.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={openContact}
                        className="bg-gold hover:bg-gold-dark text-navy font-semibold"
                      >
                        Richiedi l'analisi del caso <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-foreground/50 mt-10 leading-relaxed">
                    <strong>Disclaimer.</strong> Il presente articolo ha carattere meramente informativo. Non costituisce parere legale o fiscale né sostituisce in alcun modo una consulenza personalizzata. La normativa è in costante evoluzione: per applicazioni concrete è necessario rivolgersi a un professionista abilitato.
                  </p>
                </div>

                {/* Sidebar */}
                <Sidebar article={article} related={related} onOpenContact={openContact} />
              </div>
            </div>
          </section>

          {/* Related — full width grid below */}
          {related.length > 0 && (
            <section className="py-14 lg:py-20 bg-muted/40">
              <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">Continua a leggere</h2>
                  <div className="grid md:grid-cols-3 gap-5">
                    {related.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/guide/${a.slug}`}
                        className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-gold hover:shadow-card flex flex-col"
                      >
                        <div className="relative">
                          <ArticleCover article={a} className="aspect-[16/9]" />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-navy text-xs font-semibold z-10">
                            {a.category}
                          </span>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="font-bold text-navy mb-2 leading-snug group-hover:text-gold-dark">{a.title}</h3>
                          <p className="text-sm text-foreground/70 leading-relaxed mb-3 flex-1">{a.excerpt}</p>
                          <span className="text-sm font-semibold text-navy group-hover:text-gold-dark flex items-center gap-1 mt-auto">
                            Leggi <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        <ELFooter />
        <ELContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <ELStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Articolo;
