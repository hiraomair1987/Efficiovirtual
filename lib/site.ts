/**
 * Site-wide settings. This is the main file to edit for contact details,
 * social links and navigation.
 */
export const site = {
  name: "efficiovirtual",
  title: "Digital Marketing & Web Design Agency | efficiovirtual",
  description:
    "efficiovirtual is a digital marketing and website development agency in Karachi, working with businesses in the USA, UAE, Canada, UK and Pakistan.",
  /** Markets where efficiovirtual takes on clients (remote work). Used in structured data and homepage copy. */
  areasServed: ["United States", "United Arab Emirates", "Canada", "United Kingdom", "Pakistan"],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://efficiovirtual.com",
  /** Contact email used by every email link and the contact form. */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "admin@efficiovirtual.com",
  /** Phone number shown on the site (display format) and its dial link. */
  phone: "+92 329 3115339",
  phoneHref: "tel:+923293115339",
  /** Where the business is based (city and country only — no street address). */
  city: "Karachi",
  country: "Pakistan",
  countryCode: "PK",
  /** Year efficiovirtual started taking on client work. */
  foundingYear: 2020,
  /** Support included after a project launches. */
  supportAfterLaunch: "3 months",
  /**
   * Optional: path to your own logo file inside /public, e.g. "/brand/logo.svg".
   * Leave as null to use the built-in vector version of the ev mark.
   */
  logoFile: null as string | null,
  /**
   * Google Search Console "HTML tag" verification code (only the content="..." part).
   * Paste it here or set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel.
   */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  /** Bing Webmaster Tools verification code (optional). */
  bingSiteVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
};

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/efficiovirtual/" },
  { name: "Facebook", href: "https://www.facebook.com/efficiovirtual/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/efficiovirtual" },
  { name: "X", href: "https://x.com/efficiovirtual" },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
