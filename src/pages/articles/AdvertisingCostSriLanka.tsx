import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-advertising-cost.webp";

const AdvertisingCostSriLanka = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Advertising Cost in Sri Lanka (2026 Pricing Guide)",
      description: "Complete advertising cost breakdown for Sri Lanka 2026 — pricing per channel, per industry, and budget guide for small to large businesses.",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect" },
      datePublished: "2026-04-24",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does advertising cost in Sri Lanka in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Advertising in Sri Lanka costs from LKR 20,000 for SMS campaigns, LKR 25,000 for email marketing, LKR 30,000 for WhatsApp campaigns, LKR 50,000+ for Google Ads, and LKR 100,000-400,000 for full multi-channel campaigns reaching 500,000+ verified contacts.",
          },
        },
        {
          "@type": "Question",
          name: "How much should a small business spend on advertising in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Small businesses in Sri Lanka should allocate 5-10% of monthly target revenue to advertising, with 10-15% if in growth mode. A typical SME starts with LKR 30,000-75,000/month across email + SMS or social media.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cheapest advertising channel in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Email marketing is the cheapest advertising channel in Sri Lanka per contact reached, with campaigns starting at LKR 25,000 to reach 50,000+ verified email addresses — far less per contact than print, TV or Google Ads.",
          },
        },
        {
          "@type": "Question",
          name: "Why does advertising cost vary so much in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Advertising cost in Sri Lanka varies based on channel, audience size, targeting precision, creative production, campaign duration and reporting depth. Multi-channel campaigns cost more upfront but deliver lower cost per lead than single channels.",
          },
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      badge="Advertising Sri Lanka"
      title="Advertising Cost in Sri Lanka (2026 Pricing Guide)"
      subtitle="Real advertising costs in Sri Lanka 2026 — by channel, by industry, by business size. Plan your budget with confidence."
    >
      <SEOHead
        title="Advertising Cost in Sri Lanka 2026 — Real Pricing per Channel | Buzz Connect"
        description="Advertising cost in Sri Lanka 2026 — email from LKR 25K, SMS from LKR 20K, Google Ads from LKR 50K, multi-channel from LKR 100K. Full pricing guide by channel & industry."
        canonical="/advertising-cost-sri-lanka"
        keywords="advertising cost sri lanka, advertising cost in sri lanka, advertising price sri lanka, advertising rates sri lanka, digital advertising cost sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Advertising Cost in Sri Lanka", url: "/advertising-cost-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="Advertising cost in Sri Lanka 2026" className="w-full rounded-2xl mb-8" loading="lazy" width={1024} height={640} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              How much does <strong>advertising cost in Sri Lanka</strong>? The honest answer is that costs vary enormously — from LKR 20,000 for a focused SMS campaign to LKR 400,000+ for a full multi-channel programme. What matters is not the total cost but the cost per result.
            </p>
            <p>This guide breaks down real 2026 advertising costs in Sri Lanka across every major channel.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">What Affects Advertising Cost?</h2>
            <ul className="space-y-2 my-4">
              <li>✅ <strong>Channel</strong> — email and SMS are the most cost-effective</li>
              <li>✅ <strong>Audience size</strong> — reaching 10,000 vs 500,000 changes pricing dramatically</li>
              <li>✅ <strong>Targeting precision</strong> — broad campaigns cost less; segmented cost more but convert better</li>
              <li>✅ <strong>Campaign duration</strong> — sustained programmes outperform one-offs</li>
              <li>✅ <strong>Creative complexity</strong> — text SMS is cheaper than designed emails or video ads</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Advertising Cost by Channel (2026)</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left text-foreground">Channel</th>
                    <th className="border border-border p-3 text-left text-foreground">Monthly Cost (LKR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3"><Link to="/email-marketing" className="text-accent hover:underline">Email Marketing</Link></td><td className="border border-border p-3">25,000 – 80,000</td></tr>
                  <tr><td className="border border-border p-3"><Link to="/sms-marketing" className="text-accent hover:underline">SMS Marketing</Link></td><td className="border border-border p-3">20,000 – 65,000</td></tr>
                  <tr><td className="border border-border p-3"><Link to="/whatsapp-marketing" className="text-accent hover:underline">WhatsApp Marketing</Link></td><td className="border border-border p-3">30,000 – 85,000</td></tr>
                  <tr><td className="border border-border p-3"><Link to="/web-banner-advertising-sri-lanka" className="text-accent hover:underline">Web Banner Ads</Link></td><td className="border border-border p-3">35,000 – 120,000</td></tr>
                  <tr><td className="border border-border p-3"><Link to="/google-ads-sri-lanka" className="text-accent hover:underline">Google Ads (Search)</Link></td><td className="border border-border p-3">50,000 – 250,000+</td></tr>
                  <tr><td className="border border-border p-3"><Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline">Facebook & Instagram Ads</Link></td><td className="border border-border p-3">40,000 – 180,000</td></tr>
                  <tr><td className="border border-border p-3"><Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline">Multi-Channel Campaign</Link></td><td className="border border-border p-3">100,000 – 400,000</td></tr>
                  <tr><td className="border border-border p-3">Full Advertising Package</td><td className="border border-border p-3">150,000 – 500,000</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-8 rounded">
              <p className="font-semibold text-foreground mb-2">💡 Think Cost Per Result — Not Total Spend</p>
              <p className="text-muted-foreground">
                A LKR 150,000 multi-channel campaign generating 60 qualified leads = LKR 2,500 per lead. A LKR 60,000 single-channel campaign generating 8 leads = LKR 7,500 per lead. The "expensive" campaign is actually 3x more efficient.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Advertising Cost by Industry</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left text-foreground">Industry</th>
                    <th className="border border-border p-3 text-left text-foreground">Monthly Budget (LKR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">Real Estate</td><td className="border border-border p-3">100,000 – 400,000</td></tr>
                  <tr><td className="border border-border p-3">Finance & Investment</td><td className="border border-border p-3">80,000 – 350,000</td></tr>
                  <tr><td className="border border-border p-3">Hotels & Tourism</td><td className="border border-border p-3">60,000 – 250,000</td></tr>
                  <tr><td className="border border-border p-3">Education Institutes</td><td className="border border-border p-3">50,000 – 200,000</td></tr>
                  <tr><td className="border border-border p-3">Healthcare</td><td className="border border-border p-3">40,000 – 150,000</td></tr>
                  <tr><td className="border border-border p-3">Restaurants</td><td className="border border-border p-3">30,000 – 120,000</td></tr>
                  <tr><td className="border border-border p-3">Fashion & Retail</td><td className="border border-border p-3">40,000 – 180,000</td></tr>
                  <tr><td className="border border-border p-3">Events</td><td className="border border-border p-3">50,000 – 200,000 per event</td></tr>
                  <tr><td className="border border-border p-3">Recruitment</td><td className="border border-border p-3">30,000 – 100,000 per vacancy</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Realistic Budget by Business Size</h2>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Small Business (LKR 50K – 100K/month)</h3>
            <p>Focused email or SMS campaign to a targeted local audience. Great for restaurants, boutique hotels, and local services.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Medium Business (LKR 100K – 250K/month)</h3>
            <p>Multi-channel approach combining email, SMS, web banner, and Google Ads — strongest combined ROI.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Large Business (LKR 250K+/month)</h3>
            <p>Full programmes combining direct marketing, Google Ads, social media, web banners, and SEO. Maximum reach and brand building.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Buzz Connect Advertising Packages</h2>
            <p>
              Buzz Connect offers transparent, fixed-price packages for every business size. View the complete range of{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising services in Sri Lanka</Link>{" "}
              and our{" "}
              <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">special multi-channel advertising packages</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">FAQs</h2>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-2">What is the minimum budget to start?</h3>
            <p>Buzz Connect entry-level packages start from LKR 20,000 — accessible to businesses of any size.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-2">Is Google Ads more expensive than email?</h3>
            <p>Yes in monthly spend, but for high-search-demand industries Google Ads delivers competitive cost per lead. Email is more cost-effective for outbound reach.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-2">Do costs increase over time?</h3>
            <p>Google Ads can increase as competition rises. Buzz Connect direct marketing pricing remains stable, and consistent campaigns improve cost per lead.</p>

            <p className="mt-8">
              👉 Get a custom quote for{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising in Sri Lanka</Link>.
            </p>
          </div>
        </motion.div>
        <div className="my-8 p-5 rounded-xl border border-accent/30 bg-accent/5">
          <p className="text-sm sm:text-base text-foreground">
            Comparing your options? See our full breakdown of the top{" "}
            <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">
              digital marketing companies in Sri Lanka
            </Link>{" "}
            and how to pick the right partner for your business.
          </p>
        </div>
        <RelatedArticles currentPath="/advertising-cost-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default AdvertisingCostSriLanka;
