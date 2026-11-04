import type { Metadata } from "next";
import Link from "next/link";
import SceneLoader from "@/components/SceneLoader";
import ChapterRail from "@/components/ChapterRail";
import TiltCard from "@/components/TiltCard";
import ServiceInView from "@/components/ServiceInView";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import LogoMark from "@/components/LogoMark";
import { homeFaqs, processSteps, services, stages } from "@/lib/content";
import { site, socials } from "@/lib/site";
import { locations } from "@/lib/locations";
import { pageMeta } from "@/lib/seo";
import { caseStudies, publishedCaseStudies } from "@/lib/caseStudies";
import { withAvailableImages } from "@/lib/caseStudyImages";

const pageTitle = site.title;
const pageDescription = site.description;

/** Real projects shown in "Selected work" (slugs from lib/caseStudies.ts). */
const featuredSlugs = ["himahs", "westpaq-cleaning-services", "aurora-estates", "revsol", "harry-narang-consulting", "art-of-watch-storytelling"];
const featured = withAvailableImages(caseStudies).filter((c) => c.published && featuredSlugs.includes(c.slug));
featured.sort((a, b) => featuredSlugs.indexOf(a.slug) - featuredSlugs.indexOf(b.slug));

const yearsWorking = new Date().getFullYear() - site.foundingYear;
const numbers = [
  { value: String(site.foundingYear), label: "Working with clients since" },
  { value: String(publishedCaseStudies.length), label: "Projects in our case studies" },
  { value: String(services.length), label: "Services under one team" },
  { value: String(site.areasServed.length), label: "Countries we work with" },
];

const reasons = [
  {
    title: "One team for marketing, websites and apps",
    text: "Your ads, website, landing pages and app are planned and built by the same team, so nothing gets lost between agencies.",
  },
  {
    title: "Working across time zones",
    text: `We’re based in ${site.city} and work remotely with clients in the USA, UAE, Canada, UK and Pakistan, with calls scheduled at times that suit you.`,
  },
  {
    title: "Flexible pricing",
    text: "Pricing is shaped around your goals and budget — start with a single service or combine several as you grow.",
  },
  {
    title: `${site.supportAfterLaunch.charAt(0).toUpperCase() + site.supportAfterLaunch.slice(1)} of support after launch`,
    text: `Every website, app and SaaS project includes ${site.supportAfterLaunch} of support after it goes live, for fixes, updates and small changes.`,
  },
  {
    title: `${yearsWorking}+ years of client work`,
    text: `We’ve been helping businesses grow online since ${site.foundingYear}, across travel, healthcare, real estate, technology and more.`,
  },
];

export const metadata: Metadata = pageMeta({ title: pageTitle, description: pageDescription, path: "/", absoluteTitle: true });

/** The five core services get full cards; the rest are listed as "also available". */
const coreSlugs = ["google-ads", "marketing-automation", "3d-websites", "landing-pages", "creative-design"];
const coreServices = services.filter((s) => coreSlugs.includes(s.slug));
const extraServices = services.filter((s) => !coreSlugs.includes(s.slug));

/**
 * Structured data. Only verified details are included: name, website, email,
 * phone, city, founding year, logo, social profiles, services and markets.
 * No street address, reviews or ratings — add them only when real.
 */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: "efficiovirtual",
    url: site.url,
    email: site.contactEmail,
    telephone: site.phoneHref.replace("tel:", ""),
    foundingDate: String(site.foundingYear),
    address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.countryCode },
    logo: `${site.url}/brand/logo-original.webp`,
    image: `${site.url}/brand/logo-original.webp`,
    description: pageDescription,
    areaServed: site.areasServed.map((name) => ({ "@type": "Country", name })),
    sameAs: socials.map((s) => s.href),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital marketing services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.summary, url: `${site.url}/services/${s.slug}` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: "efficiovirtual",
    url: site.url,
    publisher: { "@id": `${site.url}/#business` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

/* Each <section data-chapter> is one chapter of the story. data-state-start /
   data-state-end tell the 3D scene which layout to show (see components/Scene.tsx). */
export default function Home() {
  return (
    <>
      <SceneLoader />
      <ChapterRail />
      <ServiceInView />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1 · Hero */}
      <section id="top" data-chapter data-state-start="0" aria-labelledby="hero-title" className="chapter chapter-tall" style={{ minHeight: "150vh" }}>
        <div className="chapter-pin">
          <div className="shell">
            <div className="max-w-2xl text-halo">
              <p className="eyebrow">
                Digital marketing agency
              </p>
              <h1 id="hero-title" className="display-xl mt-5">
                The digital marketing agency that moves your brand <em className="italic text-accent">forward.</em>
              </h1>
              <p className="lede mt-6 max-w-xl">
                efficiovirtual is a results-driven digital marketing and web design agency helping startups, small businesses
                and growing brands turn attention into enquiries and sales. We run Google Ads and SEO, design and develop
                websites, landing pages and apps, automate follow-up and create the creative that ties it all together.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="#contact" className="btn btn-primary">
                  Let’s talk <span aria-hidden="true">→</span>
                </Link>
                <Link href="#services" className="btn btn-ghost">
                  Explore services
                </Link>
              </div>
            </div>
          </div>
          {/* Static logo glow, shown only when the 3D scene is unavailable */}
          <div className="hero-fallback" aria-hidden="true">
            <LogoMark className="h-full w-full" />
          </div>
          <a href="#intro" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.24em] text-cream-muted hover:text-cream focus-visible:text-cream">
            Scroll to learn more
          </a>
        </div>
      </section>

      {/* 2 · Agency introduction: strategy, creative and performance */}
      <section id="intro" data-chapter data-state-start="1" data-state-end="3" aria-labelledby="intro-title" className="chapter">
        <div className="flex min-h-[110vh] items-center pt-36">
          <div className="shell text-center">
            <p className="eyebrow" data-reveal>
              About efficiovirtual
            </p>
            <h2 id="intro-title" className="display-lg text-halo mx-auto mt-5 max-w-4xl" data-reveal style={{ ["--d" as string]: "100ms" }}>
              Strategy, creative and performance — working as one.
            </h2>
            <div className="lede text-halo mx-auto mt-6 max-w-2xl space-y-4" data-reveal style={{ ["--d" as string]: "200ms" }}>
              <p>
                Many brands run ads in one place, a website in another and emails whenever someone has time. Each piece might
                work on its own, but it’s hard to tell what is really bringing in customers.
              </p>
              <p>
                efficiovirtual connects those pieces. Strategy decides where to focus, creative gives people a reason to
                respond, and performance marketing measures what happens — so each decision is based on evidence rather than
                guesswork.
              </p>
            </div>
          </div>
        </div>
        <div className="shell pb-28 pt-[18vh]">
          <ul className="grid gap-4 md:grid-cols-3">
            {stages.map((s, i) => (
              <li key={s.name} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }}>
                <TiltCard className="h-full p-6 sm:p-7">
                  <p className="flex items-center gap-3 text-sm text-violet-300" aria-hidden="true">
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-violet-300/40 text-xs tabular-nums">{i + 1}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-violet-300/40 to-transparent" />
                  </p>
                  <h3 className="mt-5 text-2xl sm:text-[1.7rem]">{s.name}</h3>
                  <p className="mt-2 text-cream">{s.line}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Services overview */}
      <section id="services" data-chapter data-state-start="4" aria-labelledby="services-title" className="chapter">
        <div className="shell pb-28 pt-40">
          <div className="flex flex-col justify-between gap-5 text-halo md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow" data-reveal>
                Services
              </p>
              <h2 id="services-title" className="display-md mt-4" data-reveal style={{ ["--d" as string]: "100ms" }}>
                Digital marketing services built to work together.
              </h2>
            </div>
            <p className="max-w-sm text-[15px]" data-reveal style={{ ["--d" as string]: "200ms" }}>
              Use a single service to solve a specific problem, or combine several so your ads, pages, follow-up and
              creative all point in the same direction.
            </p>
          </div>

          <ul className="mt-[22vh] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((s, i) => (
              <li key={s.slug} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                <TiltCard serviceIndex={services.indexOf(s)} className="flex h-full flex-col p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-violet-300">{s.short}</p>
                  <h3 className="mt-3 text-[1.55rem] leading-tight">{s.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream">{s.summary}</p>
                  <ul className="mt-4 space-y-1.5 text-sm" aria-label={`${s.name} includes`}>
                    {s.includes.slice(0, 3).map((x) => (
                      <li key={x} className="flex gap-2.5">
                        <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex-1 text-sm">
                    <strong className="font-medium text-cream">Who it helps: </strong>
                    {s.forWho}
                  </p>
                  <Link href={`/services/${s.slug}`} className="arrow-link stretched mt-5">
                    Explore {s.name} <span aria-hidden="true">→</span>
                  </Link>
                </TiltCard>
              </li>
            ))}
          </ul>

          <div className="mt-12" data-reveal>
            <h3 className="eyebrow">Also available</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {extraServices.map((s) => (
                <li key={s.slug}>
                  <TiltCard serviceIndex={services.indexOf(s)} className="h-full p-5">
                    <p className="text-lg text-cream">{s.name}</p>
                    <p className="mt-1.5 text-sm">{s.forWho}</p>
                    <Link href={`/services/${s.slug}`} className="arrow-link stretched mt-3">
                      Explore {s.name} <span aria-hidden="true">→</span>
                    </Link>
                  </TiltCard>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4 · Selected work */}
      <section id="work" data-chapter data-state-start="5" aria-labelledby="work-title" className="chapter">
        <div className="shell pb-24 pt-32">
          <div className="flex flex-col justify-between gap-5 text-halo md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow" data-reveal>
                Selected work
              </p>
              <h2 id="work-title" className="display-md mt-4" data-reveal style={{ ["--d" as string]: "100ms" }}>
                Websites and digital projects we’ve delivered.
              </h2>
            </div>
            <p className="max-w-sm text-[15px]" data-reveal style={{ ["--d" as string]: "200ms" }}>
              A few recent projects across healthcare, cleaning services, real estate, industrial supplies, consulting and
              luxury brands.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c, i) => (
              <li key={c.slug} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                <TiltCard className="flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-cream/10 bg-plum-900">
                    {c.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={c.image} alt={`${c.client} — ${c.title}`} loading="lazy" className="h-full w-full object-cover object-top" />
                    ) : (
                      <LogoMark className="case-thumb-mark mx-auto h-full" />
                    )}
                    {c.kind === "concept" && <span className="case-badge concept">{c.badge ?? "Concept"}</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-violet-300">
                      {c.industry}
                      {c.country ? ` · ${c.country}` : ""}
                    </p>
                    <h3 className="mt-2 text-[1.45rem] leading-tight">{c.client}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed">{c.summary}</p>
                    <Link href={`/case-studies/${c.slug}`} className="arrow-link stretched mt-4">
                      View {c.client} case study <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </TiltCard>
              </li>
            ))}
          </ul>
          <div className="mt-10" data-reveal>
            <Link href="/case-studies" className="btn btn-ghost">
              See all case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5 · Why work with efficiovirtual */}
      <section id="why" data-chapter data-state-start="5" aria-labelledby="why-title" className="chapter">
        <div className="shell pb-24 pt-20">
          <div className="max-w-2xl text-halo">
            <p className="eyebrow" data-reveal>
              Why efficiovirtual
            </p>
            <h2 id="why-title" className="display-md mt-4" data-reveal style={{ ["--d" as string]: "100ms" }}>
              Why businesses work with our digital marketing agency.
            </h2>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {numbers.map((n, i) => (
              <div key={n.label} className="glass rounded-2xl p-5 sm:p-6" data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                <dt className="text-sm text-cream-muted">{n.label}</dt>
                <dd className="font-display mt-1 text-4xl text-cream tabular-nums sm:text-5xl">{n.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <li key={r.title} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                <TiltCard className="h-full p-6">
                  <h3 className="text-xl leading-snug sm:text-[1.4rem]">{r.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed">{r.text}</p>
                </TiltCard>
              </li>
            ))}
            <li data-reveal style={{ ["--d" as string]: "400ms" }}>
              <div className="cta-band flex h-full flex-col justify-between gap-5 rounded-3xl p-6">
                <h3 className="text-xl leading-snug sm:text-[1.4rem]">Let’s plan your next step</h3>
                <Link href="#contact" className="btn btn-primary self-start">
                  Talk to us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 6 · Approach: Understand, Create, Improve */}
      <section id="approach" data-chapter data-state-start="5" aria-labelledby="approach-title" className="chapter chapter-tall unpin-short">
        <div className="chapter-pin">
          <div className="shell">
            <div className="max-w-xl text-halo">
              <p className="eyebrow" data-reveal>
                Our approach
              </p>
              <h2 id="approach-title" className="display-md mt-4" data-reveal style={{ ["--d" as string]: "100ms" }}>
                Understand, create, improve — and repeat.
              </h2>
              <ol className="mt-7 space-y-3">
                {processSteps.map((step, i) => (
                  <li key={step.name} data-reveal style={{ ["--d" as string]: `${200 + i * 120}ms` }}>
                    <TiltCard className="flex gap-5 px-5 py-4 sm:px-6">
                      <span className="font-display text-3xl leading-none text-accent tabular-nums" aria-hidden="true">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl">{step.name}</h3>
                        <p className="mt-1 text-cream">{step.line}</p>
                        <p className="mt-2 text-sm leading-relaxed">{step.detail}</p>
                      </div>
                    </TiltCard>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Markets we work with */}
      <section id="markets" data-chapter data-state-start="6" aria-labelledby="markets-title" className="chapter">
        <div className="shell pb-10 pt-40">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="text-halo">
              <p className="eyebrow" data-reveal>
                Where we work
              </p>
              <h2 id="markets-title" className="display-md mt-4" data-reveal style={{ ["--d" as string]: "100ms" }}>
                Remote collaboration, tailored to your market.
              </h2>
            </div>
            <div className="lede space-y-4 text-halo" data-reveal style={{ ["--d" as string]: "200ms" }}>
              <p>
                efficiovirtual is based in {site.city}, {site.country}, and works remotely with businesses in the USA, the UAE,
                Canada, the UK and Pakistan. Wherever you
                are, the work starts the same way: understanding your customers, your competitors and how people in your
                market search and buy.
              </p>
              <p>
                From there we adapt the details that matter locally — search terms, spelling, currency, campaign timing and
                the tone of your messaging — while keeping your brand consistent across every channel. Communication happens
                by email, phone and scheduled calls at times that suit your time zone.
              </p>
              <p className="text-[15px]">
                See what we consider in each market:{" "}
                {locations.map((l, i) => (
                  <span key={l.slug}>
                    <Link href={`/locations/${l.slug}`} className="text-link">
                      digital marketing in {l.inSentence}
                    </Link>
                    {i < locations.length - 2 ? ", " : i === locations.length - 2 ? " and " : "."}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · FAQ */}
      <section id="faq" data-chapter data-state-start="6" aria-labelledby="faq-title" className="chapter">
        <div className="shell grid gap-10 pb-12 pt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="text-halo">
            <p className="eyebrow" data-reveal>
              FAQ
            </p>
            <h2 id="faq-title" className="display-md mt-4" data-reveal style={{ ["--d" as string]: "100ms" }}>
              Questions, answered.
            </h2>
            <p className="mt-5 max-w-sm" data-reveal style={{ ["--d" as string]: "200ms" }}>
              Can’t find what you’re looking for?{" "}
              <a href={`mailto:${site.contactEmail}`} className="text-link">
                Email us your question
              </a>
              .
            </p>
          </div>
          <div className="space-y-3">
            {homeFaqs.map((f) => (
              <details key={f.q} className="faq glass rounded-2xl">
                <summary>
                  <h3 className="font-sans text-base font-medium text-cream sm:text-[17px]">{f.q}</h3>
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 text-[15px] leading-relaxed sm:px-6">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Contact */}
      <section id="contact" data-chapter data-state-start="6" aria-labelledby="contact-title" className="chapter">
        <div className="shell grid gap-12 pb-24 pt-24 lg:min-h-screen lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="text-halo">
            <p className="eyebrow" data-reveal>
              Let’s talk
            </p>
            <h2 id="contact-title" className="display-lg mt-5" data-reveal style={{ ["--d" as string]: "100ms" }}>
              Tell us what’s holding your growth back.
            </h2>
            <p className="lede mt-6 max-w-md" data-reveal style={{ ["--d" as string]: "200ms" }}>
              Fewer enquiries than you’d like, a website that doesn’t convert, ads that cost too much? Tell us what you offer
              and what isn’t working. We’ll reply with questions or suggested next steps.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4" data-reveal style={{ ["--d" as string]: "300ms" }}>
              <a href={`mailto:${site.contactEmail}`} className="email-cta">
                <span className="text-[11px] uppercase tracking-[0.2em] text-cream-muted">Email efficiovirtual</span>
                <span className="font-display text-2xl text-cream sm:text-3xl">{site.contactEmail}</span>
              </a>
              <a href={site.phoneHref} className="email-cta">
                <span className="text-[11px] uppercase tracking-[0.2em] text-cream-muted">Call efficiovirtual</span>
                <span className="font-display text-2xl text-cream sm:text-3xl">{site.phone}</span>
              </a>
            </div>
            <div className="mt-8" data-reveal style={{ ["--d" as string]: "400ms" }}>
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-cream-muted">Follow efficiovirtual</p>
              <SocialLinks size="lg" />
            </div>
          </div>
          <div className="glass rounded-3xl p-6 sm:p-9" data-reveal style={{ ["--d" as string]: "200ms" }}>
            <h3 className="mb-6 text-2xl">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
