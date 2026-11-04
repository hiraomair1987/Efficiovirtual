import type { Metadata } from "next";
import Link from "next/link";
import SceneLoader from "@/components/SceneLoader";
import JsonLd from "@/components/JsonLd";
import Scroll3D from "@/components/Scroll3D";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Blog: Digital Marketing & Web Design Advice",
  description:
    "Practical guides on websites, Google Ads, SEO and Google Business Profile from efficiovirtual, a digital marketing and web design agency in Karachi.",
  path: "/blog",
});

const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
const [featured, ...rest] = sorted;
const categories = Array.from(new Set(posts.map((p) => p.category)));

const jsonLd = [
  breadcrumbLd([["Blog", "/blog"]]),
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "efficiovirtual blog",
    url: `${site.url}/blog`,
    publisher: { "@id": `${site.url}/#business` },
    blogPost: sorted.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${site.url}/blog/${p.slug}`, datePublished: p.date })),
  },
];

export default function BlogPage() {
  return (
    <>
      <SceneLoader fixedState={1} />
      <JsonLd data={jsonLd} />
      <Scroll3D />

      <section aria-labelledby="blog-title" className="pb-12 pt-44 sm:pt-48">
        <div className="shell">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-cream-muted">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-cream">
                Blog
              </li>
            </ol>
          </nav>
          <div className="mt-10 max-w-3xl text-halo">
            <p className="eyebrow">The efficiovirtual blog</p>
            <h1 id="blog-title" className="display-xl mt-5">
              Ideas that move your brand <em className="italic text-accent">forward.</em>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Plain-English guides on websites, Google Ads, SEO and local marketing — written for business owners who want
              more enquiries, not more jargon.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Topics">
              {categories.map((c) => (
                <li key={c} className="blog-cat">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Featured article" className="pb-10">
        <div className="shell">
          <BlogCard post={featured} large />
        </div>
      </section>

      <section aria-labelledby="latest-title" className="pb-28 pt-10">
        <div className="shell">
          <h2 id="latest-title" className="display-md text-halo">
            Latest articles
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <li key={p.slug}>
                <BlogCard post={p} flip={i % 2 ? "r" : "l"} />
              </li>
            ))}
          </ul>
          <div className="cta-band mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:p-12" data-3d="">
            <div>
              <h2 className="display-md">Have a question we haven’t covered?</h2>
              <p className="mt-3 max-w-xl text-cream">Tell us what you’re working on and we’ll point you in the right direction.</p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Let’s talk <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
