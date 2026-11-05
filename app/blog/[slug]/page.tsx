/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SceneLoader from "@/components/SceneLoader";
import JsonLd from "@/components/JsonLd";
import Scroll3D from "@/components/Scroll3D";
import BlogCard from "@/components/BlogCard";
import { getPost, headingId, posts, readMinutes, type Block } from "@/lib/blog";
import { getService } from "@/lib/content";
import { site } from "@/lib/site";
import { breadcrumbLd, businessRef, pageMeta } from "@/lib/seo";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  const meta = pageMeta({ title: p.title, description: p.description, path: `/blog/${p.slug}`, absoluteTitle: p.title.length > 58 });
  return { ...meta, keywords: p.keywords, openGraph: { ...meta.openGraph, type: "article", publishedTime: p.date } };
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

/** Turns [text](/link) inside article text into a link. */
function inline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? (
      <Link key={i} href={m[2]} className="text-link">
        {m[1]}
      </Link>
    ) : (
      part
    );
  });
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return (
        <h2 key={i} id={headingId(b.text)}>
          {b.text}
        </h2>
      );
    case "h3":
      return <h3 key={i}>{b.text}</h3>;
    case "p":
      return <p key={i}>{inline(b.text)}</p>;
    case "ul":
      return (
        <ul key={i}>
          {b.items.map((x) => (
            <li key={x}>{inline(x)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i}>
          {b.items.map((x) => (
            <li key={x}>{inline(x)}</li>
          ))}
        </ol>
      );
    case "img":
      return (
        <figure key={i} className="article-figure blog-stage">
          <div data-3d="">
            <div data-tilt-hover>
              <div className="tilt-inner">
                <img src={b.src} alt={b.alt} loading="lazy" />
              </div>
            </div>
          </div>
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      );
    case "tip":
      return (
        <div key={i} className="blog-stage">
          <aside className="article-tip" data-3d="">
            {b.title && <p className="font-semibold text-cream">{b.title}</p>}
            <p className="mt-1">{inline(b.text)}</p>
          </aside>
        </div>
      );
    case "cta":
      return (
        <div key={i} className="blog-stage">
          <div className="cta-band mt-10 rounded-3xl p-7 sm:p-9" data-3d="">
            <p className="font-display text-2xl leading-snug text-cream">{b.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={b.service ? `/contact?service=${b.service}` : "/contact"} className="btn btn-primary">
                Let’s talk <span aria-hidden="true">→</span>
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      );
  }
}

export default function ArticlePage({ params }: Params) {
  const p = getPost(params.slug);
  if (!p) notFound();
  const toc = p.body.filter((b): b is { type: "h2"; text: string } => b.type === "h2");
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const svc = p.services.map((s) => getService(s)).filter(Boolean);

  const jsonLd = [
    breadcrumbLd([
      ["Blog", "/blog"],
      [p.title, `/blog/${p.slug}`],
    ]),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      image: `${site.url}${p.cover}`,
      datePublished: p.date,
      dateModified: p.date,
      mainEntityOfPage: `${site.url}/blog/${p.slug}`,
      keywords: p.keywords.join(", "),
      author: { "@type": "Organization", name: "efficiovirtual", url: site.url },
      publisher: businessRef,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <SceneLoader fixedState={1} />
      <JsonLd data={jsonLd} />
      <Scroll3D />
      <div className="read-progress" data-progress aria-hidden="true" />

      <article data-article>
        <header className="pb-10 pt-44 sm:pt-48">
          <div className="shell">
            <nav aria-label="Breadcrumb" className="text-sm">
              <ol className="flex flex-wrap items-center gap-2 text-cream-muted">
                <li>
                  <Link href="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="footer-link">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="line-clamp-1 max-w-[60vw] text-cream">
                  {p.title}
                </li>
              </ol>
            </nav>
            <div className="mt-10 max-w-4xl text-halo">
              <div className="flex flex-wrap items-center gap-3 text-sm text-cream-muted">
                <span className="blog-cat">{p.category}</span>
                <span>
                  <time dateTime={p.date}>{fmt(p.date)}</time> · {readMinutes(p)} min read · By the efficiovirtual team
                </span>
              </div>
              <h1 className="display-lg mt-6">{p.title}</h1>
              <p className="lede mt-6 max-w-3xl">{p.description}</p>
            </div>
            <div className="blog-stage mt-12">
              <div data-3d="hero">
                <div className="article-cover">
                  <img src={p.cover} alt={p.coverAlt} className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="shell grid gap-12 pb-16 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <nav aria-label="In this article" className="sticky top-40">
              <p className="eyebrow">In this article</p>
              <ol className="mt-4 space-y-0.5">
                {toc.map((h) => (
                  <li key={h.text}>
                    <a href={`#${headingId(h.text)}`} className="toc-link">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="glass max-w-3xl rounded-[1.75rem] p-6 sm:p-10">
            <div className="article-body">{p.body.map(renderBlock)}</div>

            <section aria-labelledby="faq-title" className="mt-16">
              <h2 id="faq-title" className="font-display text-3xl text-cream">
                Frequently asked questions
              </h2>
              <div className="mt-6 space-y-3">
                {p.faqs.map((f) => (
                  <details key={f.q} className="faq glass rounded-2xl">
                    <summary>
                      <h3 className="font-sans text-base font-medium text-cream sm:text-[17px]">{f.q}</h3>
                      <span className="faq-icon" aria-hidden="true" />
                    </summary>
                    <p className="px-5 pb-5 text-[15px] leading-relaxed sm:px-6">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {svc.length > 0 && (
              <section aria-labelledby="svc-title" className="mt-14 border-t border-cream/10 pt-8">
                <h2 id="svc-title" className="eyebrow">
                  Related services
                </h2>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {svc.map((s) => (
                    <li key={s!.slug}>
                      <Link href={`/services/${s!.slug}`} className="btn btn-ghost">
                        {s!.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </article>

      <section aria-labelledby="more-title" className="pb-28 pt-10">
        <div className="shell">
          <h2 id="more-title" className="display-md text-halo">
            More articles
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <li key={r.slug}>
                <BlogCard post={r} flip={i % 2 ? "r" : "l"} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
