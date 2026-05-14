import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-digital-advertising-guide.webp";

const DigitalAdvertisingGuide = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Digital Advertising Sri Lanka: Complete Guide (2026)",
      description: "Complete digital advertising guide for Sri Lanka 2026 — every channel, every cost, every strategy. Email, SMS, WhatsApp, web banners, Google Ads & social.",
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
          name: "What is digital advertising in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital advertising in Sri Lanka is any paid promotion through digital channels — email marketing, SMS, WhatsApp, web banners, Google Ads and social media. Unlike traditional ads, it is targeted, measurable, adjustable in real time and can launch in 24-48 hours.",
          },
        },
        {
          "@type": "Question",
          name: "What are the main digital advertising channels in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 6 core digital advertising channels in Sri Lanka are: email marketing, SMS marketing, WhatsApp marketing, web banner advertising, Google Ads (search/display/YouTube), and social media advertising (Facebook, Instagram, TikTok, LinkedIn).",
          },
        },
        {
          "@type": "Question",
          name: "How much does digital advertising cost in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital advertising in Sri Lanka starts from LKR 20,000 for SMS, LKR 25,000 for email, LKR 50,000+ for Google Ads and from LKR 100,000 for full multi-channel campaigns reaching 500,000+ verified contacts.",
          },
        },
        {
          "@type": "Question",
          name: "How do I start digital advertising in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start by defining your audience and goal, then pick 1-2 channels that match (email/SMS for reach, Google Ads for buyer intent). Build a focused landing page, launch the campaign, track daily metrics and scale what works.",
          },
        },
        {
          "@type": "Question",
          name: "Is digital advertising better than traditional advertising in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — for most Sri Lankan businesses in 2026, digital advertising delivers lower cost per lead, precise targeting, real-time adjustments and full ROI tracking that traditional channels (TV, radio, print) cannot match.",
          },
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      badge="Advertising Sri Lanka"
      title="Digital Advertising Sri Lanka: Complete Guide (2026)"
      subtitle="Every digital advertising channel, cost, and strategy you need to drive consistent, growing results for your Sri Lankan business."
    >
      <SEOHead
        title="Digital Advertising Sri Lanka 2026 — Complete Guide & Costs | Buzz Connect"
        description="Digital advertising in Sri Lanka 2026 — complete guide to 6 core channels, costs & strategy. Email, SMS, WhatsApp, Google Ads, banners & social. Reach 500,000+ contacts."
        canonical="/digital-advertising-sri-lanka-complete-guide"
        keywords="digital advertising sri lanka, digital advertising in sri lanka, digital advertising guide sri lanka, online advertising sri lanka, digital marketing sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Digital Advertising Complete Guide", url: "/digital-advertising-sri-lanka-complete-guide" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="Digital advertising Sri Lanka complete guide" className="w-full rounded-2xl mb-8" loading="lazy" width={800} height={600} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              <strong>Digital advertising in Sri Lanka</strong> has matured rapidly. What was once limited to basic Facebook posts has evolved into a sophisticated, multi-channel ecosystem reaching hundreds of thousands of targeted Sri Lankans with measurable campaigns.
            </p>
            <p>
              This complete guide covers every dimension. For an even broader overview of all advertising types, see{" "}
              <Link to="/what-is-advertising-sri-lanka" className="text-accent hover:underline font-semibold">what is advertising in Sri Lanka</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">What is Digital Advertising?</h2>
            <p>Any paid promotion through digital channels. Unlike traditional, digital is:</p>
            <ul className="space-y-2 my-4">
              <li>✅ Targeted — choose exactly who sees your message</li>
              <li>✅ Measurable — every click, open, conversion tracked</li>
              <li>✅ Adjustable — change campaigns in real time</li>
              <li>✅ Scalable — start small, grow as results prove</li>
              <li>✅ Fast — live within 24-48 hours</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">The 6 Core Digital Advertising Channels</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">1. Email Marketing</h3>
            <p>Most cost-effective channel for B2B and professional audiences. 28-35% open rates, 4-6x ROI.{" "}
              <Link to="/email-marketing" className="text-accent hover:underline font-semibold">See Buzz Connect's email marketing service</Link>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">2. SMS Marketing</h3>
            <p>Highest open rates of any channel — above 90%. Best for time-sensitive offers.{" "}
              <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">Learn about SMS marketing in Sri Lanka</Link>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">3. WhatsApp Marketing</h3>
            <p>Personalised, media-rich messages with high engagement.{" "}
              <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">Discover WhatsApp marketing</Link>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">4. Web Banner Advertising</h3>
            <p>Visual display ads on Findit.lk and partner sites.{" "}
              <Link to="/web-banner-advertising-sri-lanka" className="text-accent hover:underline font-semibold">See web banner advertising</Link>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">5. Google Ads</h3>
            <p>Top-of-search placement for high-intent customers.{" "}
              <Link to="/google-ads-sri-lanka" className="text-accent hover:underline font-semibold">Explore Google Ads for Sri Lankan businesses</Link>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">6. Social Media Advertising</h3>
            <p>Facebook, Instagram, LinkedIn for consumer brand awareness.{" "}
              <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline font-semibold">Read the social media marketing guide</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Digital Advertising Strategy by Business Stage</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left text-foreground">Business Stage</th>
                    <th className="border border-border p-3 text-left text-foreground">Recommended Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">New — Building Awareness</td><td className="border border-border p-3">Email + SMS to targeted database. Web banners. Google Ads for search.</td></tr>
                  <tr><td className="border border-border p-3">Growing — Generating Leads</td><td className="border border-border p-3">Multi-channel email + SMS + web banners. Google Ads for competitive keywords.</td></tr>
                  <tr><td className="border border-border p-3">Established — Scaling</td><td className="border border-border p-3">Full multi-channel + retargeting. SEO alongside paid.</td></tr>
                  <tr><td className="border border-border p-3">Seasonal — Campaign Peaks</td><td className="border border-border p-3">High-intensity email + SMS bursts during booking windows.</td></tr>
                  <tr><td className="border border-border p-3">All — Retargeting</td><td className="border border-border p-3">Web banner retargeting + email follow-up to clickers.</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Digital vs Traditional</h2>
            <p>
              See our dedicated comparison:{" "}
              <Link to="/online-vs-traditional-advertising-sri-lanka" className="text-accent hover:underline font-semibold">online advertising vs traditional advertising in Sri Lanka</Link>.
              In summary: digital wins on targeting, measurability, speed, and ROI for most businesses.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">How Much Does Digital Advertising Cost?</h2>
            <p>
              See the full{" "}
              <Link to="/advertising-cost-sri-lanka" className="text-accent hover:underline font-semibold">advertising cost guide for Sri Lanka</Link>.
              Email starts from LKR 25,000, Google Ads from LKR 50,000, multi-channel from LKR 100,000.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Why Buzz Connect Leads Digital Advertising in Sri Lanka</h2>
            <ul className="space-y-2 my-4">
              <li>✅ 500,000+ verified Sri Lankan contacts</li>
              <li>✅ Web banner advertising on Findit.lk</li>
              <li>✅ Full Google Ads management</li>
              <li>✅ Social media advertising on FB, IG, LinkedIn</li>
              <li>✅ Multi-channel coordination under one strategy</li>
              <li>✅ Industry specialists for hotels, real estate, education, finance & more</li>
            </ul>

            <p>
              Read why we are the{" "}
              <Link to="/best-advertising-company-sri-lanka" className="text-accent hover:underline font-semibold">best advertising company in Sri Lanka</Link>{" "}
              and explore the full range of{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising services in Sri Lanka</Link>.
            </p>

            <p className="mt-8">
              👉 Launch your digital advertising campaign —{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">get started today</Link>.
            </p>
          </div>
        </motion.div>

        <div className="my-8 p-5 rounded-xl border border-accent/30 bg-accent/5">
          <p className="text-sm sm:text-base text-foreground">
            Comparing your options? See our full breakdown of the top{' '}
            <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">
              digital marketing companies in Sri Lanka
            </Link>{' '}
            and how to pick the right partner for your business.
          </p>
        </div>
        <RelatedArticles currentPath="/digital-advertising-sri-lanka-complete-guide" />
      </article>
    </ServicePageLayout>
  );
};

export default DigitalAdvertisingGuide;
