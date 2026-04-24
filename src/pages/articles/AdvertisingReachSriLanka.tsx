import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-advertising-reach.jpg";

const AdvertisingReachSriLanka = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Advertising Sri Lanka: How to Reach 500,000+ People Fast",
      description: "Reach 500,000+ verified Sri Lankan contacts with multi-channel advertising. Email, SMS, WhatsApp & web banners — campaign live in 24-48 hours.",
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
          name: "How can I reach 500,000+ customers fast in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Buzz Connect's multi-channel advertising — a single campaign combining email, SMS, WhatsApp and web banners reaches 500,000+ verified Sri Lankan contacts within 24-48 hours of brief approval.",
          },
        },
        {
          "@type": "Question",
          name: "What is mass-reach advertising in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mass-reach advertising in Sri Lanka means delivering one message to a very large verified audience quickly. Buzz Connect operates Sri Lanka's largest direct marketing database with 500,000+ permission-based contacts segmented by industry and location.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can I reach a large Sri Lankan audience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An advertising campaign reaching 500,000+ Sri Lankans can be live within 24-48 hours of approval. Email and SMS deliver within hours, WhatsApp within a day, and banner ads typically within 48 hours.",
          },
        },
        {
          "@type": "Question",
          name: "Is mass-reach advertising in Sri Lanka cost-effective?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A 500,000-contact multi-channel campaign starts from LKR 100,000 — under LKR 0.20 per contact reached, far cheaper than print, TV or Google Ads on a per-impression basis.",
          },
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      badge="Advertising Sri Lanka"
      title="Advertising Sri Lanka: How to Reach 500,000+ People Fast"
      subtitle="How Buzz Connect's mass-reach advertising delivers your message to half a million verified Sri Lankans in under 48 hours."
    >
      <SEOHead
        title="Reach 500,000+ Customers Fast in Sri Lanka — Advertising | Buzz Connect"
        description="Reach 500,000+ verified Sri Lankans in 24-48 hours with one multi-channel campaign — email, SMS, WhatsApp & web banners. Sri Lanka's largest direct marketing database."
        canonical="/advertising-reach-sri-lanka"
        keywords="reach customers fast sri lanka, mass advertising sri lanka, large audience advertising sri lanka, advertising reach sri lanka, 500000 contacts sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "How to Reach 500,000+ People Fast", url: "/advertising-reach-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="Reach 500,000+ Sri Lankans with advertising" className="w-full rounded-2xl mb-8" loading="lazy" width={1024} height={640} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Imagine sending your advertising message to over <strong>500,000 verified Sri Lankan contacts</strong> — business owners, professionals, and decision-makers — within a single day. That is what Buzz Connect delivers right now.
            </p>
            <p>This guide explains how mass-reach advertising works in Sri Lanka and why speed and scale matter. For background, see{" "}
              <Link to="/what-is-advertising-sri-lanka" className="text-accent hover:underline font-semibold">what is advertising in Sri Lanka</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Why Reach Matters in Sri Lanka</h2>
            <p>Being first to your audience often determines who gets the lead. Speed and scale matter most when:</p>
            <ul className="space-y-2 my-4">
              <li>✅ Seasonal campaigns with limited booking windows — hotels, intakes, events</li>
              <li>✅ Competitive markets targeting the same audience</li>
              <li>✅ New product launches needing first-mover awareness</li>
              <li>✅ Time-sensitive offers with genuine urgency</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">How Buzz Connect Reaches 500,000+ People</h2>
            <p>Buzz Connect operates Sri Lanka's largest verified direct marketing database — built and segmented over years across every major industry.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Email Marketing at Scale</h3>
            <p>
              Reach hundreds of thousands of inboxes within hours. Learn how{" "}
              <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing in Sri Lanka</Link>{" "}
              delivers 28-35% open rates at scale.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">SMS Marketing at Scale</h3>
            <p>
              Reach 100,000 mobile numbers within minutes — 90%+ open rates. See how{" "}
              <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>{" "}
              delivers near-instant reach.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">Multi-Channel Maximum Reach</h3>
            <p>
              Combining email, SMS, WhatsApp, and web banner advertising in one campaign. Discover how{" "}
              <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing in Sri Lanka</Link>{" "}
              multiplies results.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Who Can You Reach?</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left text-foreground">Audience Segment</th>
                    <th className="border border-border p-3 text-left text-foreground">Database Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">Business Owners & Entrepreneurs</td><td className="border border-border p-3">Large segment — nationwide</td></tr>
                  <tr><td className="border border-border p-3">Corporate Professionals & Managers</td><td className="border border-border p-3">Colombo and major cities</td></tr>
                  <tr><td className="border border-border p-3">Hotel & Tourism Industry</td><td className="border border-border p-3">Agents, operators, corporates</td></tr>
                  <tr><td className="border border-border p-3">Real Estate Investors & Buyers</td><td className="border border-border p-3">Verified property-interested</td></tr>
                  <tr><td className="border border-border p-3">Education — Parents & Students</td><td className="border border-border p-3">Segmented by age, region</td></tr>
                  <tr><td className="border border-border p-3">Finance — Investors & Borrowers</td><td className="border border-border p-3">High-net-worth and SME</td></tr>
                  <tr><td className="border border-border p-3">General Sri Lankan Consumers</td><td className="border border-border p-3">Broad island-wide</td></tr>
                  <tr><td className="border border-border p-3">Healthcare — Patients</td><td className="border border-border p-3">Localised by region</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">The Speed Advantage</h2>
            <p>
              Buzz Connect campaigns go from brief to live in 24-48 hours — most agencies take 1-2 weeks. Read why our process makes us the{" "}
              <Link to="/best-advertising-company-sri-lanka" className="text-accent hover:underline font-semibold">best advertising company in Sri Lanka</Link>.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-8 rounded">
              <p className="font-semibold text-foreground mb-2">📊 Scale + Speed = Results</p>
              <p className="text-muted-foreground">
                The combination of reaching a large verified audience and doing so within hours of a campaign brief is what separates Buzz Connect from typical agencies. Most take 1-2 weeks. We launch in 24-48 hours.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Reach + Quality — Get Both</h2>
            <p>Every campaign is segmented by industry, geography, behaviour, and demographics. A hotel in Galle isn't paying to reach industrial buyers in Jaffna.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">The Full Multi-Channel Ecosystem</h2>
            <ol className="space-y-2 my-4 list-decimal list-inside">
              <li>Email campaign to verified database</li>
              <li>SMS broadcast to mobile numbers</li>
              <li>WhatsApp messages for personalised follow-up</li>
              <li>Web banner ads on Findit.lk for visual reinforcement</li>
              <li>Retargeting ads to re-engage clickers</li>
            </ol>
            <p>
              See the full range of{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising services in Sri Lanka</Link>.
              Compare pricing in our{" "}
              <Link to="/advertising-cost-sri-lanka" className="text-accent hover:underline font-semibold">advertising cost guide</Link>.
            </p>

            <p className="mt-8">
              👉 Ready to reach 500,000+ Sri Lankans?{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">Launch your advertising campaign today</Link>.
            </p>
          </div>
        </motion.div>

        <RelatedArticles currentPath="/advertising-reach-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default AdvertisingReachSriLanka;
