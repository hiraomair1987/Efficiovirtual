/**
 * BLOG ARTICLES
 *
 * To add an article, copy one of the objects below and change the text.
 * - `slug` becomes the address: /blog/your-slug (lowercase, hyphens only).
 * - `body` is a list of blocks shown in order: headings ("h2"), paragraphs ("p"),
 *   lists ("ul"/"ol"), images ("img"), highlighted tips ("tip") and a contact box ("cta").
 * - Images go in /public/blog/ (or reuse /public/case-studies/ screenshots).
 * Keep claims honest: no invented statistics, prices or guarantees.
 */

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "tip"; title?: string; text: string }
  | { type: "cta"; text: string; service?: string };

export type Post = {
  slug: string;
  title: string;
  /** Shown in Google results; keep under ~155 characters. */
  description: string;
  category: string;
  /** ISO date, e.g. "2026-11-04". */
  date: string;
  cover: string;
  coverAlt: string;
  keywords: string[];
  /** Links to related services (slugs from lib/content.ts). */
  services: string[];
  body: Block[];
  faqs: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: "website-cost-small-business-pakistan",
    title: "How much does a website cost for a small business in Pakistan? (2026 guide)",
    description:
      "What really decides the price of a small business website in Pakistan: pages, design, features, platform, content and support — plus how to compare quotes.",
    category: "Websites",
    date: "2026-11-04",
    cover: "/blog/website-cost-pakistan.svg",
    coverAlt: "Illustration of a website layout, price tiers and a stack of coins",
    keywords: ["website cost in Pakistan", "website development Pakistan", "small business website price", "web design agency Pakistan"],
    services: ["website-development", "landing-pages"],
    body: [
      {
        type: "p",
        text: "“How much does a website cost?” is usually the first question a business owner asks — and the honest answer is that it depends on what the website needs to do. Two quotes for “a website” can be very different because they describe very different projects. This guide explains what actually shapes the price, so you can compare quotes properly and pay for what your business needs.",
      },
      { type: "h2", text: "Why website prices vary so much" },
      {
        type: "p",
        text: "A website is not one fixed product. A three-page site that introduces a local business is a small job. A website with dozens of service pages, a booking system, online payments and content in two languages is a much bigger one. Most of the difference between quotes comes from scope: how many pages, how much custom design, which features and who prepares the content.",
      },
      {
        type: "img",
        src: "/blog/website-cost-factors.svg",
        alt: "Six factors that shape website price: pages, design, features, content, platform and support",
        caption: "The six things that decide most of a website’s price.",
      },
      { type: "h2", text: "The six things that decide the price" },
      { type: "h3", text: "1. Number of pages" },
      {
        type: "p",
        text: "Every page has to be planned, designed, written and tested. A simple site might have a home page, an about page, a services page and a contact page. A business that wants to rank in Google for several services usually needs a separate page for each one, which adds work — and value.",
      },
      { type: "h3", text: "2. Design: template, customised or fully custom" },
      {
        type: "p",
        text: "A ready-made template is the quickest option. A customised template keeps the structure but changes colours, fonts, layouts and images to match your brand. A fully custom design is created from scratch around your business and your customers, which takes more time but gives you something nobody else has.",
      },
      { type: "h3", text: "3. Features" },
      {
        type: "ul",
        items: [
          "Contact and quote forms",
          "Online booking or appointment requests",
          "An online shop with payments",
          "Customer accounts and logins",
          "Multiple languages (for example English and Urdu)",
          "Connections to other tools, such as a CRM or email marketing",
        ],
      },
      { type: "p", text: "Each feature adds design, development and testing time. Ask yourself which ones you need at launch and which can wait." },
      { type: "h3", text: "4. Content" },
      {
        type: "p",
        text: "Text, photos and videos are often forgotten when budgeting. If you write the text and supply the photos yourself, the project is smaller. If the agency writes search-friendly copy, sources images or arranges a photo shoot, the price reflects that work.",
      },
      { type: "h3", text: "5. Platform" },
      {
        type: "p",
        text: "WordPress is popular because it’s flexible and easy to update. Shopify is built for online shops. A custom-coded website can be faster and more unique, but changes may need a developer. The right platform depends on how you plan to use and update the site.",
      },
      { type: "h3", text: "6. Support after launch" },
      {
        type: "p",
        text: "A website needs updates, backups, security checks and small changes over time. Some quotes include a period of support; others charge separately from day one. Always ask what happens after the site goes live.",
      },
      {
        type: "tip",
        title: "Don’t forget yearly costs",
        text: "Your domain name (yourbusiness.com or .pk) and hosting are renewed every year. Ask who will own and pay for them — they should be registered in your name.",
      },
      { type: "h2", text: "How to compare website quotes" },
      {
        type: "ol",
        items: [
          "Check that each quote lists the same pages and features.",
          "Ask whether the design is a template or custom.",
          "Ask who writes the content and who supplies images.",
          "Confirm that the site will be mobile-friendly and fast.",
          "Ask what basic SEO is included: page titles, descriptions, headings and a sitemap.",
          "Find out how much support is included after launch.",
          "Make sure the domain, hosting and website files belong to you.",
        ],
      },
      { type: "h2", text: "Is a cheap website a bad idea?" },
      {
        type: "p",
        text: "Not always. A simple, well-made site can be the right start for a new business. The risk is a site that looks fine but loads slowly, isn’t set up for Google, or can’t grow with you — so you end up paying twice. Start with what you need now, on a platform that can grow later.",
      },
      { type: "h2", text: "How efficiovirtual prices websites" },
      {
        type: "p",
        text: "We use flexible pricing based on your goals and budget. After a short conversation about your business, we suggest a scope — pages, features and design approach — and give you a clear quote. Every website includes 3 months of support after launch for fixes, updates and small changes.",
      },
      { type: "cta", text: "Tell us what your website needs to do and we’ll suggest a scope and a clear quote.", service: "website-development" },
    ],
    faqs: [
      {
        q: "How long does it take to build a small business website?",
        a: "It depends on the number of pages, features and how quickly content is ready. A small site is usually much quicker than a large site with custom features. We agree a timeline before work starts.",
      },
      {
        q: "Do I need to pay every year for my website?",
        a: "Your domain name and hosting are renewed every year. Support and maintenance may also have ongoing costs after any included support period ends.",
      },
      {
        q: "Can I update the website myself?",
        a: "Yes, if it’s built on a platform such as WordPress or Shopify. We can show you how to edit text, images and pages.",
      },
    ],
  },
  {
    slug: "google-ads-vs-seo-new-business",
    title: "Google Ads vs SEO: which should a new business start with?",
    description:
      "Google Ads brings visitors quickly; SEO builds traffic over time. Learn how each works, what they cost in time and money, and how to choose for your business.",
    category: "Google Ads & SEO",
    date: "2026-11-04",
    cover: "/blog/google-ads-vs-seo.svg",
    coverAlt: "Illustration comparing Google Ads bar chart with a rising SEO growth line",
    keywords: ["Google Ads vs SEO", "Google Ads agency", "SEO for new business", "digital marketing agency"],
    services: ["google-ads", "seo-google-business"],
    body: [
      {
        type: "p",
        text: "When someone searches Google for what you sell, there are two main ways to appear: pay for an ad at the top of the results (Google Ads) or earn a place in the normal results (SEO, search engine optimisation). Both can bring customers. They work very differently, and the right starting point depends on your goals, budget and timeline.",
      },
      { type: "h2", text: "How Google Ads works" },
      {
        type: "p",
        text: "With Google Ads, you choose the searches you want to appear for, write ads and set a budget. You pay when someone clicks. Your ads can start showing soon after your campaign is approved, which makes Google Ads useful when you need enquiries quickly or want to test what customers respond to.",
      },
      {
        type: "ul",
        items: [
          "Fast: visitors can start arriving within days",
          "Controllable: choose keywords, locations, times and budget",
          "Measurable: see which searches and ads lead to calls or forms",
          "But: when you stop paying, the ads stop",
        ],
      },
      { type: "h2", text: "How SEO works" },
      {
        type: "p",
        text: "SEO means making your website the best answer for the searches your customers make: useful pages for each service, clear titles and headings, a fast mobile-friendly site, a complete Google Business Profile and links from other trusted websites. You don’t pay per click, but it takes time for Google to find, trust and rank your pages.",
      },
      {
        type: "ul",
        items: [
          "Slower: results usually build over months, not days",
          "Lasting: good pages can keep bringing visitors for a long time",
          "Trusted: many people prefer to click normal results",
          "But: rankings are never guaranteed and need ongoing work",
        ],
      },
      {
        type: "img",
        src: "/blog/ads-vs-seo-curve.svg",
        alt: "Diagram showing Google Ads traffic starting quickly and stopping with budget, and SEO traffic starting slowly then growing",
        caption: "The typical pattern: ads are fast but stop with the budget; SEO is slow but keeps building. (Illustration, not real data.)",
      },
      { type: "h2", text: "Which should you start with?" },
      { type: "h3", text: "Start with Google Ads if…" },
      {
        type: "ul",
        items: [
          "You need enquiries soon, for example after launching",
          "You want to test which services or messages customers respond to",
          "Your market is competitive and ranking will take time",
          "You have a clear budget for advertising",
        ],
      },
      { type: "h3", text: "Start with SEO if…" },
      {
        type: "ul",
        items: [
          "You can wait for results and want lasting visibility",
          "Your budget for paid ads is small",
          "Customers search for detailed questions you can answer well",
          "You serve local customers and can grow your Google Business Profile",
        ],
      },
      {
        type: "tip",
        title: "The common approach: both, in the right order",
        text: "Many businesses run Google Ads for quick enquiries while building SEO in the background. As organic traffic grows, they can adjust ad spend. Ads data also shows which keywords bring customers — useful for SEO.",
      },
      { type: "h2", text: "What both need: a website that converts" },
      {
        type: "p",
        text: "Ads and SEO only bring visitors. Your website or landing page turns them into enquiries. Make sure the page matches what people searched for, explains your offer clearly, loads quickly on a phone and makes it easy to call or send a message.",
      },
      { type: "h2", text: "How efficiovirtual can help" },
      {
        type: "p",
        text: "We plan and manage Google Ads campaigns, improve websites for search and set up Google Business Profiles — and because we also design landing pages and websites, the whole journey from search to enquiry is handled by one team.",
      },
      { type: "cta", text: "Not sure where to start? Tell us about your business and we’ll suggest whether to begin with ads, SEO or both.", service: "google-ads" },
    ],
    faqs: [
      { q: "Is SEO free?", a: "You don’t pay Google for organic clicks, but SEO takes time and work: content, technical improvements and ongoing updates." },
      { q: "How quickly does Google Ads work?", a: "Ads can start showing soon after the campaign is approved. Getting the best results usually takes some testing and adjustment." },
      { q: "Can you guarantee a first-page ranking?", a: "No one can honestly guarantee rankings, because Google decides them. We focus on doing the work that gives your pages the best chance." },
    ],
  },
  {
    slug: "what-does-a-digital-marketing-agency-do",
    title: "What does a digital marketing agency actually do? (and when you need one)",
    description:
      "A plain-English guide to what a digital marketing agency does — strategy, Google Ads, SEO, websites, social media and reporting — and signs it’s time to hire one.",
    category: "Digital marketing",
    date: "2026-11-04",
    cover: "/blog/what-agency-does.svg",
    coverAlt: "Illustration of a brand at the centre, surrounded by marketing services",
    keywords: ["digital marketing agency", "what does a digital marketing agency do", "digital marketing services", "hire a marketing agency"],
    services: ["google-ads", "seo-google-business", "social-media-marketing"],
    body: [
      {
        type: "p",
        text: "“Digital marketing agency” can mean very different things. Some agencies only run ads; others only post on social media; others build websites. This guide explains what a full digital marketing agency can do, how the pieces fit together and how to tell when you need outside help.",
      },
      {
        type: "img",
        src: "/blog/agency-services-map.svg",
        alt: "Six areas a digital marketing agency can handle: strategy, Google Ads, SEO, website, social media and reporting",
        caption: "The main areas a digital marketing agency can look after.",
      },
      { type: "h2", text: "1. Strategy: deciding where to focus" },
      {
        type: "p",
        text: "Good marketing starts with questions: Who are your best customers? Where do they look for businesses like yours? What makes them choose you? A strategy turns the answers into a plan — which channels to use, what to say and how to measure success — so your budget isn’t spread too thin.",
      },
      { type: "h2", text: "2. Google Ads and paid advertising" },
      {
        type: "p",
        text: "Paid campaigns put your business in front of people who are already searching for what you offer. An agency chooses keywords, writes ads, sets budgets, builds landing pages and adjusts campaigns based on what brings calls and enquiries.",
      },
      { type: "h2", text: "3. SEO: getting found without paying per click" },
      {
        type: "p",
        text: "SEO improves your website so it appears in Google’s normal results. That includes creating useful service pages, improving titles and headings, making pages faster, fixing technical problems and setting up your Google Business Profile for local searches.",
      },
      { type: "h2", text: "4. Websites and landing pages" },
      {
        type: "p",
        text: "Every campaign leads somewhere — usually your website. An agency that designs and builds websites can make sure the page people land on matches the ad or search, loads quickly and makes it easy to get in touch.",
      },
      { type: "h2", text: "5. Social media marketing" },
      {
        type: "p",
        text: "This can include planning and designing posts, writing captions, managing your profiles and running paid campaigns on platforms such as Facebook, Instagram, LinkedIn or TikTok — depending on where your customers spend time.",
      },
      { type: "h2", text: "6. Creative design" },
      {
        type: "p",
        text: "Ads, posts and websites all need visuals: graphics, banners, short videos and brand assets that look consistent and give people a reason to stop scrolling.",
      },
      { type: "h2", text: "7. Automation and follow-up" },
      {
        type: "p",
        text: "Marketing automation sends the right message at the right time — for example a welcome email when someone enquires, or a reminder to people who haven’t booked yet — so fewer leads are forgotten.",
      },
      { type: "h2", text: "8. Reporting: what worked and what’s next" },
      {
        type: "p",
        text: "A good agency tells you clearly what happened: how many people visited, called or filled in a form, what it cost and what will change next. You should always understand where your money went.",
      },
      { type: "h2", text: "Signs you need a digital marketing agency" },
      {
        type: "ul",
        items: [
          "You’re too busy running the business to market it consistently",
          "You’re spending on ads but can’t tell what’s working",
          "Your website looks outdated or doesn’t bring enquiries",
          "Competitors appear in Google and you don’t",
          "You want to grow into new cities or countries",
        ],
      },
      {
        type: "tip",
        title: "Questions to ask before hiring an agency",
        text: "Who will work on my account? How will we communicate? What will you report each month? Who owns the ad accounts, website and content? Be cautious of anyone who guarantees rankings or results.",
      },
      { type: "h2", text: "How efficiovirtual works" },
      {
        type: "p",
        text: "efficiovirtual is a digital marketing and web design agency based in Karachi, working remotely with businesses in the USA, UAE, Canada, the UK and Pakistan. One team handles strategy, Google Ads, SEO, social media, creative, websites and apps, with flexible pricing and calls at times that suit your time zone.",
      },
      { type: "cta", text: "Tell us what you want to improve and we’ll suggest where an agency can help most." },
    ],
    faqs: [
      { q: "Do I need a website before hiring an agency?", a: "No. Many agencies, including efficiovirtual, can design and build your website as part of the work." },
      { q: "Can an agency work with me remotely?", a: "Yes. We work by email, phone and scheduled video calls with clients in several countries." },
      { q: "Is it better to hire an agency or do marketing myself?", a: "Doing it yourself can work when you have time to learn and stay consistent. An agency saves time and brings experience across channels." },
    ],
  },
  {
    slug: "service-business-website-checklist",
    title: "10 things every service business website needs to win enquiries",
    description:
      "A practical checklist for cleaners, clinics, consultants, contractors and other service businesses: the 10 website elements that turn visitors into enquiries.",
    category: "Websites",
    date: "2026-11-04",
    cover: "/blog/service-website-checklist.svg",
    coverAlt: "Illustration of a website checklist next to a mobile phone with a call button",
    keywords: ["service business website", "website design for small business", "web design agency", "website checklist"],
    services: ["website-development", "landing-pages", "seo-google-business"],
    body: [
      {
        type: "p",
        text: "For a service business — a cleaning company, clinic, consultant, contractor or training institute — a website has one main job: turn visitors into calls, quote requests and bookings. These ten elements make the biggest difference.",
      },
      {
        type: "img",
        src: "/blog/service-website-checklist-diagram.svg",
        alt: "Checklist of 10 things a service business website needs",
        caption: "Use this checklist to review your own website.",
      },
      { type: "h2", text: "1. A clear headline: what you do and where" },
      {
        type: "p",
        text: "Visitors decide in seconds whether they’re in the right place. Your first heading should say what you do and who or where you serve — for example “Commercial cleaning for offices in Houston”, not just “Welcome”.",
      },
      { type: "h2", text: "2. A phone number people can tap to call" },
      {
        type: "p",
        text: "Many service customers want to talk to someone. Put your number at the top of every page and make it tappable on mobile so it starts a call straight away.",
      },
      { type: "h2", text: "3. A short quote or contact form" },
      {
        type: "p",
        text: "Ask only for what you need to reply: name, contact details and a short description. Every extra field gives people a reason to give up.",
      },
      { type: "h2", text: "4. Reviews, photos and real work" },
      {
        type: "p",
        text: "People trust what they can see. Show real photos of your work, your team or premises, and genuine reviews from customers (with their permission). Avoid stock photos where you can.",
      },
      {
        type: "img",
        src: "/case-studies/westpaq.webp",
        alt: "Westpaq Cleaning Services website with a clear headline, quote button and phone number",
        caption: "Example from our work: Westpaq Cleaning Services leads with a clear headline, a quote button and a phone number.",
      },
      { type: "h2", text: "5. Fast loading on a phone" },
      {
        type: "p",
        text: "Many of your visitors are on mobile data. Compress images, avoid heavy add-ons and test your site on a real phone. A slow page loses customers before they see your offer.",
      },
      { type: "h2", text: "6. A separate page for each service" },
      {
        type: "p",
        text: "A page for each service helps visitors find exactly what they need — and gives Google a clear page to show for each search, such as “deep cleaning” or “office cleaning”.",
      },
      { type: "h2", text: "7. The areas you serve" },
      {
        type: "p",
        text: "List the cities, neighbourhoods or regions you cover. It reassures visitors and helps you appear in local searches.",
      },
      { type: "h2", text: "8. Trust details" },
      {
        type: "p",
        text: "Licences, insurance, certifications, guarantees, years in business and how you work all reduce the risk of choosing you. Only include details that are true and current.",
      },
      { type: "h2", text: "9. Answers to common questions" },
      {
        type: "p",
        text: "An FAQ section answers concerns before they become objections — pricing approach, timing, what’s included and what happens next — and gives Google more useful content.",
      },
      { type: "h2", text: "10. A linked Google Business Profile" },
      {
        type: "p",
        text: "Your Google Business Profile shows your business on Google Maps and local results. Link it to your website, keep your details matching and encourage happy customers to leave reviews.",
      },
      {
        type: "tip",
        title: "Quick self-check",
        text: "Open your website on your phone. Within five seconds, can you tell what the business does, where it works and how to contact it? If not, start with points 1–3.",
      },
      { type: "cta", text: "Want a website built around this checklist? Tell us about your service business.", service: "website-development" },
    ],
    faqs: [
      { q: "Does a small service business need a website if it has social media?", a: "Social media is useful, but a website gives you a place you control, appears in Google searches and can collect enquiries directly." },
      { q: "How many pages should a service business website have?", a: "At minimum: home, about, contact and a page for each main service. Add area pages and an FAQ as you grow." },
      { q: "Can you improve my existing website instead of building a new one?", a: "Yes. Sometimes a few changes — a clearer headline, faster pages, a better form — make a big difference." },
    ],
  },
  {
    slug: "google-business-profile-setup-guide",
    title: "How to set up your Google Business Profile, step by step",
    description:
      "A step-by-step guide to creating and completing a Google Business Profile so your business can appear on Google Maps and local search results.",
    category: "Local SEO",
    date: "2026-11-04",
    cover: "/blog/google-business-profile.svg",
    coverAlt: "Illustration of a map pin and a business profile card",
    keywords: ["Google Business Profile setup", "Google My Business", "local SEO", "Google Maps listing"],
    services: ["seo-google-business"],
    body: [
      {
        type: "p",
        text: "A Google Business Profile (formerly Google My Business) is the free listing that shows your business on Google Maps and in local search results, with your hours, phone number, photos and reviews. For many local businesses it’s one of the most valuable things to set up. Here’s how.",
      },
      {
        type: "img",
        src: "/blog/google-business-profile-steps.svg",
        alt: "Six steps to set up a Google Business Profile: sign in, add business, location, contact, verify, complete",
        caption: "The six main steps. Google’s screens change from time to time, but the order stays similar.",
      },
      { type: "h2", text: "Before you start" },
      {
        type: "ul",
        items: [
          "Your exact business name (as customers know it — don’t add keywords)",
          "Your address, or the areas you serve if you visit customers",
          "A phone number and website address",
          "Your opening hours",
          "Good photos: logo, premises, team and work",
        ],
      },
      { type: "h2", text: "Step 1: Sign in with a Google account" },
      {
        type: "p",
        text: "Go to Google Business Profile (business.google.com) and sign in. Use an account you’ll keep long-term — ideally one connected to your business email — so you don’t lose access later.",
      },
      { type: "h2", text: "Step 2: Add your business name and category" },
      {
        type: "p",
        text: "Search for your business; if it isn’t listed, create it. Choose the primary category that best describes what you do — for example “Marketing agency”, “Cleaning service” or “Medical clinic”. You can add secondary categories later.",
      },
      { type: "h2", text: "Step 3: Add your location or service area" },
      {
        type: "p",
        text: "If customers visit you, add your address so you appear on Maps. If you travel to customers or work remotely, you can hide your address and set the areas you serve instead.",
      },
      { type: "h2", text: "Step 4: Add contact details" },
      { type: "p", text: "Add your phone number and website. Make sure they match what’s on your website exactly." },
      { type: "h2", text: "Step 5: Verify your business" },
      {
        type: "p",
        text: "Google needs to confirm the business is real and that you manage it. Depending on your business, Google may offer a phone call or text, an email, a video recording or another method. Follow the option shown to you; your profile becomes fully visible after verification.",
      },
      { type: "h2", text: "Step 6: Complete every section" },
      {
        type: "ul",
        items: [
          "Opening hours, including special holiday hours",
          "A clear description of what you do and who you help",
          "Your services or products, with short descriptions",
          "Photos of your logo, premises, team and work",
          "Attributes that apply to you (for example, online appointments)",
        ],
      },
      { type: "h2", text: "Keep your profile active" },
      {
        type: "ul",
        items: [
          "Ask happy customers for reviews and reply to every review politely",
          "Add new photos regularly",
          "Share updates and offers with Google posts",
          "Answer questions people ask on your profile",
          "Update hours and details whenever they change",
        ],
      },
      {
        type: "tip",
        title: "Avoid these common mistakes",
        text: "Don’t add keywords to your business name, don’t create duplicate listings, don’t use a virtual office address you don’t actually operate from, and never post fake reviews. These can get a profile suspended.",
      },
      { type: "cta", text: "Want help setting up or improving your Google Business Profile? We can do it for you.", service: "seo-google-business" },
    ],
    faqs: [
      { q: "Is a Google Business Profile free?", a: "Yes. Creating and managing a Google Business Profile is free." },
      { q: "Can I create a profile without a shop or office?", a: "Yes. Service-area businesses can hide their address and show the areas they serve instead, as long as they meet Google’s guidelines." },
      { q: "How long does verification take?", a: "It depends on the method Google offers. Some are instant; others can take several days." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Words in an article, used for reading time. */
export function readMinutes(post: Post) {
  const text = post.body
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
    .join(" ");
  return Math.max(3, Math.round(text.split(/\s+/).length / 220));
}

/** Turns a heading into an anchor id, e.g. "Step 1: Sign in" → "step-1-sign-in". */
export const headingId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[’'"“”()?,.:]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
