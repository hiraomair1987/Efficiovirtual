/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // Case studies that were removed: send old links to the Case Studies page instead of "not found".
    return ["developer-portfolio", "brightway-cleaning-demo"].map((slug) => ({
      source: `/case-studies/${slug}`,
      destination: "/case-studies",
      permanent: true,
    }));
  },
};

export default nextConfig;
