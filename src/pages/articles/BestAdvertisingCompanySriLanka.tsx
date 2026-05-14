import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-best-advertising.webp";

const BestAdvertisingCompanySriLanka = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Best Advertising Company in Sri Lanka (2026 Guide)",
      description: "How to choose the best advertising company in Sri Lanka — what to look for, what to ask, and why Buzz Connect is the leading choice for 2026.",
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
          name: "Which is the best advertising company in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buzz Connect is among the leading advertising companies in Sri Lanka, trusted by 2,000+ businesses since 2014. We deliver multi-channel campaigns (email, SMS, WhatsApp, web banners, Google Ads) reaching 500,000+ verified contacts with transparent reporting on every campaign.",
          },
        },
        {
          "@type": "Question",
          name: "How do I choose the best advertising agency in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use a 7-point framework: proven results in your industry, full multi-channel capability, verified audience database, transparent reporting, in-house creative, fast turnaround (24-48 hours), and clear pricing with no hidden costs.",
          },
        },
        {
          "@type": "Question",
          name: "What services does the best advertising company offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A top advertising company in Sri Lanka should offer email marketing, SMS marketing, WhatsApp marketing, web banner advertising, Google Ads management, social media advertising, multi-channel campaigns, landing page design and detailed performance reporting.",
          },
        },
        {
          "@type": "Question",
          name: "How much do top advertising agencies charge in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Top advertising agencies in Sri Lanka charge from LKR 25,000 for single-channel campaigns and from LKR 100,000 for full multi-channel campaigns. Pricing depends on audience size, channels used and campaign duration.",
          },
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      badge="Advertising Sri Lanka"
      title="Best Advertising Company in Sri Lanka (2026 Guide)"
      subtitle="The 7-point framework to evaluate any advertising company in Sri Lanka — and why Buzz Connect is trusted by 2,000+ businesses."
    >
      <SEOHead
        title="Best Advertising Company in Sri Lanka 2026 — 7-Point Guide | Buzz Connect"
        description="Best advertising company in Sri Lanka 2026 — 500,000+ verified contacts, multi-channel email/SMS/WhatsApp campaigns, transparent reporting. 7-point evaluation framework."
        canonical="/best-advertising-company-sri-lanka"
        keywords="best advertising company sri lanka, best advertising agency sri lanka, top advertising agency sri lanka, leading advertising company sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Best Advertising Company in Sri Lanka", url: "/best-advertising-company-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="Best advertising company in Sri Lanka" className="w-full rounded-2xl mb-8" loading="lazy" width={800} height={600} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Finding the <strong>best advertising company in Sri Lanka</strong> is not about the cheapest option. It's about finding a partner that understands your industry, knows how to reach your exact target audience, and proves with real data that their campaigns deliver results.
            </p>
            <p>
              For a complete view of the landscape, start with our{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising services in Sri Lanka</Link>{" "}
              page or read{" "}
              <Link to="/what-is-advertising-sri-lanka" className="text-accent hover:underline font-semibold">what is advertising in Sri Lanka</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">7 Things to Look For</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">1. Proven Results in Your Industry</h3>
            <p>Ask: can you show me a case study from a business in my industry, with actual campaign metrics?</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">2. Full Multi-Channel Capability</h3>
            <p>An agency that only does Facebook or only email is limiting your reach. Look for email, SMS, WhatsApp, web banner, and Google Ads — all under one roof. Read why{" "}
              <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing</Link>{" "}
              consistently outperforms single-channel.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">3. Verified Sri Lankan Database</h3>
            <p>How many verified contacts? How is it segmented? What is the bounce rate?</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">4. Transparent Pricing</h3>
            <p>
              Itemised quotes, no hidden fees. Compare costs across channels in our{" "}
              <Link to="/advertising-cost-sri-lanka" className="text-accent hover:underline font-semibold">advertising cost guide for Sri Lanka</Link>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">5. Speed of Execution</h3>
            <p>Best agencies launch in 24-48 hours from content approval, not weeks.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">6. Local Market Understanding</h3>
            <p>Sinhala/Tamil capability, knowledge of seasonal patterns, Colombo vs island-wide targeting.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">7. Post-Campaign Reporting</h3>
            <p>Reach, delivery, open rate, CTR, leads, and cost per lead — itemised after every campaign.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Questions to Ask Any Agency</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left text-foreground">Question</th>
                    <th className="border border-border p-3 text-left text-foreground">What the Answer Tells You</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">Show me a case study from my industry</td><td className="border border-border p-3">Real experience vs theoretical</td></tr>
                  <tr><td className="border border-border p-3">What channels do you manage?</td><td className="border border-border p-3">True multi-channel capability</td></tr>
                  <tr><td className="border border-border p-3">How large is your database?</td><td className="border border-border p-3">Direct marketing reach</td></tr>
                  <tr><td className="border border-border p-3">How quickly can you launch?</td><td className="border border-border p-3">Process efficiency</td></tr>
                  <tr><td className="border border-border p-3">What's in your post-campaign report?</td><td className="border border-border p-3">What they actually measure</td></tr>
                  <tr><td className="border border-border p-3">What's included in pricing?</td><td className="border border-border p-3">Hidden fees risk</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Why Buzz Connect is #1</h2>
            <ul className="space-y-2 my-4">
              <li>✅ <strong>500,000+ verified Sri Lankan contacts</strong> — segmented by industry, location, behaviour</li>
              <li>✅ <strong>Full multi-channel execution</strong> — email, SMS, WhatsApp, web banners, Google Ads, social</li>
              <li>✅ <strong>Deep industry specialisation</strong> — hotels, real estate, education, finance, restaurants & more</li>
              <li>✅ <strong>Transparent reporting</strong> — detailed analytics within 48 hours of campaign completion</li>
              <li>✅ <strong>10+ years of experience</strong> in the Sri Lankan market</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Industries We Advertise For</h2>
            <p>Hotels, real estate, education, finance, restaurants, fashion, events, healthcare, automotive, recruitment — with industry-specific targeting for every campaign.</p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-8 rounded">
              <p className="font-semibold text-foreground mb-2">🏆 Buzz Connect Performance Benchmarks</p>
              <p className="text-muted-foreground">
                Email open rates of 28-35%, SMS delivery rates above 95%, and consistent 4-6x ROI across every major industry in Sri Lanka.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">FAQs</h2>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-2">Suitable for small businesses?</h3>
            <p>Yes — entry-level packages from LKR 20,000 for boutique businesses, scaling to enterprise programmes.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-2">Sinhala or Tamil campaigns?</h3>
            <p>Yes — content created in English, Sinhala, and Tamil with language-specific audience targeting.</p>

            <p className="mt-8">
              👉 Ready to work with the best?{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">Get a free consultation for advertising in Sri Lanka</Link>.
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
        <RelatedArticles currentPath="/best-advertising-company-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default BestAdvertisingCompanySriLanka;
