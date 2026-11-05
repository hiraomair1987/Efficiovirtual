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
    slug: "local-seo-for-dentists-and-clinics",
    title: "Local SEO for dentists and clinics: how to get more patients from Google",
    description:
      "A practical local SEO guide for dentists and medical clinics: Google Business Profile, reviews, treatment pages, location signals and mobile booking.",
    category: "Local SEO",
    date: "2026-11-05",
    cover: "/blog/local-seo-dentists-clinics.svg",
    coverAlt: "Illustration of a clinic map pin next to local search results with star ratings",
    keywords: ["local seo for dentists", "dental seo", "dental marketing services", "healthcare marketing agency", "local seo for clinics"],
    services: ["seo-google-business", "website-development", "google-ads"],
    body: [
      {
        type: "p",
        text: "When someone needs a dentist or a clinic, they usually search Google with words like “dentist near me”, “dental clinic in Karachi” or “emergency dentist”. The clinics that appear in the map results and the first few listings get most of the calls. Local SEO is the work that helps your clinic appear there — and most of it is within your control.",
      },
      { type: "h2", text: "What is local SEO for a dental or medical clinic?" },
      {
        type: "p",
        text: "Local SEO means improving your online presence so Google shows your clinic to people searching nearby. Google’s local results mainly depend on three things: relevance (does your clinic match what was searched?), distance (how close you are to the searcher) and prominence (how well known and trusted your clinic is, including reviews and links). You can’t change distance, but you can strongly improve relevance and prominence.",
      },
      {
        type: "img",
        src: "/blog/local-seo-clinic-checklist.svg",
        alt: "Six things that help a clinic rank locally: Google Business Profile, reviews, treatment pages, location, mobile booking and consistent details",
        caption: "The six areas that make the biggest difference for clinics.",
      },
      { type: "h2", text: "1. Complete and verify your Google Business Profile" },
      {
        type: "p",
        text: "Your Google Business Profile is the listing that appears on Google Maps (see our [step-by-step setup guide](/blog/google-business-profile-setup-guide)). Choose the most accurate primary category (for example “Dentist”, “Dental clinic” or “Medical clinic”), add your exact address, phone number, opening hours, website and appointment link, and upload real photos of your clinic, team and equipment.",
      },
      {
        type: "ul",
        items: [
          "Add each treatment you offer as a service, with a short description",
          "Keep holiday and emergency hours up to date",
          "Use Google posts to share news, offers or health tips",
          "Answer questions people ask on your profile",
        ],
      },
      { type: "h2", text: "2. Build a steady flow of genuine reviews" },
      {
        type: "p",
        text: "Reviews influence both rankings and whether patients choose you. Ask every satisfied patient — for example with a short message or QR code after their appointment — and reply to every review politely. Never buy reviews or offer rewards for them, which breaks Google’s policies.",
      },
      {
        type: "tip",
        title: "Protect patient privacy in replies",
        text: "Thank the reviewer, but never confirm that they are a patient or mention any treatment or health detail in your reply. Invite them to contact the clinic privately instead.",
      },
      { type: "h2", text: "3. Create a page for each treatment" },
      {
        type: "p",
        text: "A single “Services” page listing everything rarely ranks well. Give each main treatment its own page — implants, whitening, braces, root canal, check-ups — explaining what it is, who it’s for, what to expect and how to book. These pages match what patients search for and give Google a clear page to show.",
      },
      { type: "h2", text: "4. Show your location clearly" },
      {
        type: "p",
        text: "Put your full address, a map and directions on your contact page, and mention the areas and neighbourhoods you serve naturally in your content. If you have more than one branch, create a separate page for each location with its own address, phone number, hours and photos.",
      },
      { type: "h2", text: "5. Make booking easy on a phone" },
      {
        type: "p",
        text: "Most local searches happen on mobile. Your website should load quickly, show a tap-to-call button and make it simple to request an appointment. A fast, clear site also helps people stay rather than going back to Google to choose another clinic.",
      },
      { type: "h2", text: "6. Keep your details consistent everywhere" },
      {
        type: "p",
        text: "Your clinic’s name, address and phone number should be exactly the same on your website, Google Business Profile, social media and directories. Inconsistent details confuse both patients and search engines.",
      },
      { type: "h2", text: "Should a clinic use Google Ads or SEO first?" },
      {
        type: "p",
        text: "Local SEO builds visibility that lasts, but it takes time. Google Ads can bring bookings straight away while SEO grows. Many clinics run a small, well-targeted ad campaign for their most valuable treatments while building their local SEO. Read our guide to [Google Ads vs SEO](/blog/google-ads-vs-seo-new-business) for more on choosing.",
      },
      {
        type: "tip",
        title: "Check healthcare advertising rules",
        text: "Many countries regulate how clinics advertise — for example claims about results or before-and-after photos. Check the rules that apply where you practise before publishing.",
      },
      { type: "cta", text: "Want more patients from Google? We set up and improve Google Business Profiles, treatment pages and clinic websites.", service: "seo-google-business" },
    ],
    faqs: [
      { q: "How do dentists rank higher on Google Maps?", a: "Complete and verify your Google Business Profile, choose the right category, collect genuine reviews, keep your details consistent and build a website with a page for each treatment." },
      { q: "How long does local SEO take for a clinic?", a: "Some improvements, such as a complete Google Business Profile, can help quickly. Stronger rankings usually build over several months, depending on competition in your area." },
      { q: "Do reviews really affect local rankings?", a: "Reviews are part of what Google considers for local results, and they strongly influence whether patients choose your clinic." },
      { q: "Do I need a separate page for each clinic branch?", a: "Yes. Each branch should have its own page with its address, phone number, opening hours and photos, plus its own Google Business Profile." },
    ],
  },
  {
    slug: "how-long-does-seo-take",
    title: "How long does SEO take to work?",
    description:
      "How long SEO takes to show results, what affects the timeline, what happens month by month and how to tell whether your SEO is working.",
    category: "SEO",
    date: "2026-11-05",
    cover: "/blog/how-long-seo-takes.svg",
    coverAlt: "Illustration of a calendar of months next to a rising growth line",
    keywords: ["how long does seo take", "how long does seo take to work", "seo timeline", "seo results"],
    services: ["seo-google-business"],
    body: [
      {
        type: "p",
        text: "It’s the question every business asks before investing in SEO: how long until it works? The honest answer is that SEO usually takes months, not days — and the exact time depends on your website, your competitors and how much work goes in. Google’s own guidance on hiring an SEO says it often takes four months to a year to put improvements in place and start seeing the benefit.",
      },
      {
        type: "img",
        src: "/blog/seo-timeline.svg",
        alt: "A typical SEO timeline: month 1 audit and plan, months 2–3 new pages and indexing, months 4–6 first rankings, months 6–12 growth",
        caption: "A typical pattern — not a guarantee. Your starting point and competition change the timing.",
      },
      { type: "h2", text: "Why does SEO take so long?" },
      {
        type: "p",
        text: "Google needs to find your pages, understand them and compare them with every other page competing for the same searches. Trust is built over time — through useful content, a good experience for visitors and other websites linking to yours. Changes you make today may take weeks to be noticed and longer to affect rankings.",
      },
      { type: "h2", text: "What affects how quickly SEO works" },
      {
        type: "ul",
        items: [
          "Competition: ranking for “dentist in Karachi” is faster than for “digital marketing agency”",
          "Your website’s age and history: new sites usually take longer",
          "Technical health: slow or broken pages hold everything back",
          "Content: pages that answer searchers’ questions well rank sooner",
          "Links and mentions from other trusted websites",
          "Consistency: SEO done every month beats a one-off burst",
        ],
      },
      { type: "h2", text: "What happens month by month" },
      { type: "h3", text: "Month 1: audit and plan" },
      { type: "p", text: "Fix technical problems, research keywords, decide which page targets which search (a [keyword map](/blog/keyword-mapping-beginners-guide)) and set up tracking in Google Search Console." },
      { type: "h3", text: "Months 2–3: build and improve pages" },
      { type: "p", text: "Improve existing pages, publish new service pages and articles, and complete your Google Business Profile. Google starts finding and indexing the changes." },
      { type: "h3", text: "Months 4–6: first movement" },
      { type: "p", text: "Rankings often begin to rise for easier, more specific searches first. Impressions in Search Console usually grow before clicks do." },
      { type: "h3", text: "Months 6–12 and beyond: growth" },
      { type: "p", text: "As your site earns trust, harder keywords start moving and visitors turn into enquiries. Results tend to build on each other the longer you keep going." },
      {
        type: "tip",
        title: "Local businesses can move faster",
        text: "For local searches, a complete Google Business Profile, genuine reviews and accurate details can help sooner than ranking nationally.",
      },
      { type: "h2", text: "How do you know if SEO is working?" },
      {
        type: "ul",
        items: [
          "More impressions in Google Search Console — your pages are being shown",
          "Better average positions for your target keywords",
          "More clicks and visitors from organic search",
          "More calls, forms and bookings from those visitors",
        ],
      },
      { type: "h2", text: "Can you speed SEO up?" },
      {
        type: "p",
        text: "You can’t force Google, but you can avoid slowing it down: fix technical problems first, target realistic keywords, publish genuinely useful pages, link related pages together and keep going consistently. If you need enquiries now, run Google Ads alongside SEO — see [Google Ads vs SEO](/blog/google-ads-vs-seo-new-business).",
      },
      {
        type: "p",
        text: "Be careful of anyone who promises fast or guaranteed rankings. Google itself warns that no one can guarantee a number one ranking — one of several [SEO myths](/blog/seo-myths) worth knowing.",
      },
      { type: "cta", text: "Want a realistic SEO plan for your website? Tell us about your business and goals.", service: "seo-google-business" },
    ],
    faqs: [
      { q: "How long does SEO take?", a: "Usually several months. Google’s guidance says it often takes four months to a year to implement improvements and start seeing results, depending on competition and your website." },
      { q: "How long does it take a new website to rank on Google?", a: "New websites usually take longer than established ones, because Google needs time to find and trust them. Starting with less competitive keywords helps." },
      { q: "Why are my impressions rising but clicks are not?", a: "That’s common early on: your pages are being shown but not yet high enough to get many clicks. Keep improving the pages and titles." },
      { q: "Do I need to keep doing SEO after I rank?", a: "Yes. Competitors and search results keep changing, so ongoing updates help you keep and grow your rankings." },
    ],
  },
  {
    slug: "keyword-mapping-beginners-guide",
    title: "Keyword mapping: a beginner’s guide to planning your website’s SEO",
    description:
      "What keyword mapping is, why it matters and how to create a simple keyword map so every page on your website targets the right search.",
    category: "SEO",
    date: "2026-11-05",
    cover: "/blog/keyword-mapping.svg",
    coverAlt: "Illustration of keywords connected by lines to the website pages they belong to",
    keywords: ["keyword mapping", "keyword map", "how to create a keyword map", "seo keyword planning"],
    services: ["seo-google-business"],
    body: [
      {
        type: "p",
        text: "Keyword research tells you what people search for. Keyword mapping tells you which page on your website should rank for each of those searches. It’s one of the simplest ways to make SEO organised — and to stop your own pages competing against each other.",
      },
      { type: "h2", text: "What is keyword mapping?" },
      {
        type: "p",
        text: "Keyword mapping is assigning each important keyword (and its close variations) to one page on your website. The homepage might target your main service and location, each service page targets that service, and each blog article targets a specific question. The result is a keyword map: a simple table showing which page targets which search.",
      },
      {
        type: "img",
        src: "/blog/keyword-map-example.svg",
        alt: "Example keyword map table with page URLs, main keywords, related keywords and search intent for a dental clinic website",
        caption: "A simple keyword map: one main keyword per page, plus related keywords and the searcher’s intent.",
      },
      { type: "h2", text: "Why keyword mapping matters" },
      {
        type: "ul",
        items: [
          "Each page gets a clear focus, which helps Google understand it",
          "It prevents keyword cannibalization — two of your pages fighting for the same search",
          "It shows gaps: important searches you don’t have a page for yet",
          "It makes writing easier, because every page has a clear goal",
          "It guides internal links between related pages",
        ],
      },
      { type: "h2", text: "How to create a keyword map, step by step" },
      {
        type: "ol",
        items: [
          "List your keywords from research (Google Keyword Planner, Semrush, Search Console or your own customer questions).",
          "Group keywords that mean the same thing — “teeth whitening” and “whitening teeth price” usually belong together.",
          "Decide the search intent for each group: informational (wants to learn), commercial (comparing options), transactional (ready to buy or book) or local.",
          "Match each group to the best existing page — or note that a new page is needed.",
          "Choose one main keyword per page and a few related ones.",
          "Record it in a spreadsheet: URL, main keyword, related keywords, intent, search volume and status.",
          "Use the map when writing page titles, headings and content, and update it as you add pages.",
        ],
      },
      {
        type: "tip",
        title: "Match intent before volume",
        text: "A service page should target searches from people ready to book; an article should target questions. Putting an informational keyword on a sales page (or the other way round) rarely ranks well.",
      },
      { type: "h2", text: "How many keywords should one page target?" },
      {
        type: "p",
        text: "Give each page one main keyword and a handful of closely related variations or questions. For a service business, start with the pages in our [website checklist](/blog/service-business-website-checklist). If two keywords need different answers, they probably need different pages.",
      },
      { type: "h2", text: "Common keyword mapping mistakes" },
      {
        type: "ul",
        items: [
          "Targeting the same keyword on several pages",
          "Ignoring search intent",
          "Forcing keywords unnaturally into text",
          "Never updating the map as the website grows",
        ],
      },
      { type: "cta", text: "Need a keyword plan for your website? We can research, map and build the pages for you.", service: "seo-google-business" },
    ],
    faqs: [
      { q: "What’s the difference between keyword research and keyword mapping?", a: "Keyword research finds what people search for. Keyword mapping decides which page on your website should target each of those searches." },
      { q: "What tools can I use for keyword mapping?", a: "A simple spreadsheet works well. Use keyword tools such as Google Keyword Planner, Semrush or Google Search Console to find the keywords." },
      { q: "Does keyword mapping prevent keyword cannibalization?", a: "Yes. By giving each keyword group one page, you avoid having several of your own pages compete for the same search." },
    ],
  },
  {
    slug: "seo-myths",
    title: "SEO myths business owners should stop believing",
    description:
      "Six common SEO myths — from guaranteed rankings to keyword stuffing — and what actually helps your website rank in Google.",
    category: "SEO",
    date: "2026-11-05",
    cover: "/blog/seo-myths.svg",
    coverAlt: "Illustration of a crossed-out myth card next to a fact card with a tick",
    keywords: ["seo myths", "seo myths and facts", "common seo mistakes", "seo misconceptions"],
    services: ["seo-google-business"],
    body: [
      {
        type: "p",
        text: "SEO advice is everywhere, and plenty of it is outdated or simply wrong. Believing the wrong things can waste your budget — or even harm your website. Here are six myths we hear often, and what’s actually true.",
      },
      {
        type: "img",
        src: "/blog/seo-myths-list.svg",
        alt: "Six SEO myths: guaranteed number one ranking, meta keywords tag, more keywords is better, SEO is one-time, Google Ads boosts SEO, duplicate content penalty",
        caption: "Six myths covered in this article.",
      },
      { type: "h2", text: "Myth 1: “Someone can guarantee you a #1 ranking”" },
      {
        type: "p",
        text: "No one can guarantee a top position, because Google decides rankings and changes its systems constantly. Google’s own advice is to be wary of anyone who promises guaranteed rankings. A good SEO partner explains what they’ll do and how they’ll measure progress instead.",
      },
      { type: "h2", text: "Myth 2: “The meta keywords tag helps you rank”" },
      {
        type: "p",
        text: "Google has said for many years that it doesn’t use the meta keywords tag for ranking. What matters is your page title, headings and content clearly matching what people search for.",
      },
      { type: "h2", text: "Myth 3: “More keywords on a page is better”" },
      {
        type: "p",
        text: "Repeating a keyword again and again — keyword stuffing — makes text hard to read and goes against Google’s spam policies. Write naturally for people, use the main keyword where it fits, and cover the topic thoroughly.",
      },
      { type: "h2", text: "Myth 4: “SEO is a one-time job”" },
      {
        type: "p",
        text: "Competitors publish new content, customer questions change and search results keep evolving. SEO works best as ongoing work: improving pages, adding new ones, fixing problems and building your reputation. Find out [how long SEO takes](/blog/how-long-does-seo-take) to show results.",
      },
      { type: "h2", text: "Myth 5: “Running Google Ads improves your SEO”" },
      {
        type: "p",
        text: "Paying for Google Ads doesn’t improve your organic rankings — Google keeps the two separate. Ads and SEO still work well together: ads bring visitors now, and the keyword data they produce helps you plan SEO.",
      },
      { type: "h2", text: "Myth 6: “Duplicate content gets you penalised”" },
      {
        type: "p",
        text: "Ordinary duplicate content — such as the same product description on two URLs — doesn’t usually lead to a penalty; Google typically picks one version to show. It can still waste effort and split signals, so it’s worth fixing. Copying other websites’ content to manipulate rankings is a different matter and can cause problems.",
      },
      {
        type: "tip",
        title: "What actually helps",
        text: "Useful content that answers real questions, a fast and mobile-friendly website, clear page titles and headings, a complete Google Business Profile for local searches, and genuine links and mentions from other websites.",
      },
      { type: "h2", text: "Other myths worth questioning" },
      {
        type: "ul",
        items: [
          "“You must submit your site to Google every week” — you don’t; Google finds updates itself, and Search Console can help",
          "“More pages always means better rankings” — quality and usefulness matter more than quantity",
          "“Social media likes directly boost rankings” — social media helps people find you, but likes aren’t a direct ranking factor",
        ],
      },
      { type: "cta", text: "Want honest SEO advice for your website? Tell us what you’re trying to achieve.", service: "seo-google-business" },
    ],
    faqs: [
      { q: "Is SEO dead?", a: "No. People still search Google every day to find businesses, products and answers. SEO is how your website appears in those results." },
      { q: "Can SEO be done once and left alone?", a: "Not for long. Search results and competitors change, so regular updates keep your website visible." },
      { q: "Does Google penalise duplicate content?", a: "Usually not for ordinary duplication within your own site, but it can split signals, so it’s worth fixing. Copying other sites to manipulate rankings can cause problems." },
    ],
  },
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
