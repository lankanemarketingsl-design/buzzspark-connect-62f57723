import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-how-to-advertise.jpg";

const HowToAdvertiseBusinessSriLanka = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Advertise Your Business in Sri Lanka: Step-by-Step Guide",
      description: "Step-by-step guide to advertising your business in Sri Lanka — define audience, set goal, choose channels, set budget, build creative & launch.",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect" },
      datePublished: "2026-04-24",
    },
  ];

  return (
    <ServicePageLayout
      badge="Advertising Sri Lanka"
      title="How to Advertise Your Business in Sri Lanka: Step-by-Step Guide (2026)"
      subtitle="The exact 8-step process for launching effective advertising campaigns in Sri Lanka — from audience definition to optimisation."
    >
      <SEOHead
        title="How to Advertise Your Business in Sri Lanka — Step-by-Step | Buzz Connect"
        description="Complete step-by-step guide on how to advertise in Sri Lanka 2026 — audience, goal, channels, budget, creative & launch. Get leads in 48 hours."
        canonical="/how-to-advertise-business-sri-lanka"
        keywords="how to advertise in sri lanka, how to advertise business sri lanka, advertising guide sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "How to Advertise Your Business in Sri Lanka", url: "/how-to-advertise-business-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="How to advertise your business in Sri Lanka" className="w-full rounded-2xl mb-8" loading="lazy" width={1024} height={640} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Whether you are advertising your business for the first time or trying to improve campaigns that aren't working, this <strong>step-by-step guide on how to advertise in Sri Lanka</strong> walks you through exactly what to do in 2026.
            </p>
            <p>For a complete overview of the landscape, read{" "}
              <Link to="/what-is-advertising-sri-lanka" className="text-accent hover:underline font-semibold">what is advertising in Sri Lanka</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Step 1 — Define Your Target Audience</h2>
            <p>The single most important step. Define by:</p>
            <ul className="space-y-2 my-4">
              <li>✅ <strong>Industry</strong> — which sector do your best customers come from?</li>
              <li>✅ <strong>Location</strong> — Colombo, island-wide, or specific regions?</li>
              <li>✅ <strong>Job title</strong> — decision-makers, consumers, or both?</li>
              <li>✅ <strong>Demographics</strong> — age, income, education</li>
              <li>✅ <strong>Behaviour</strong> — what do they search for online?</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Step 2 — Set a Clear Campaign Goal</h2>
            <p>Every campaign needs a single, measurable goal: leads per month, bookings, registrations, website traffic, or brand awareness.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Step 3 — Choose Your Advertising Channels</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left text-foreground">Goal</th>
                    <th className="border border-border p-3 text-left text-foreground">Best Channel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">Reach 100,000+ fast</td><td className="border border-border p-3">Email + SMS multi-channel</td></tr>
                  <tr><td className="border border-border p-3">Top of Google searches</td><td className="border border-border p-3">Google Ads</td></tr>
                  <tr><td className="border border-border p-3">Retarget site visitors</td><td className="border border-border p-3">Web banner advertising</td></tr>
                  <tr><td className="border border-border p-3">Reach professionals</td><td className="border border-border p-3">Targeted email marketing</td></tr>
                  <tr><td className="border border-border p-3">Drive phone calls</td><td className="border border-border p-3">SMS marketing</td></tr>
                  <tr><td className="border border-border p-3">Visual brand awareness</td><td className="border border-border p-3">Web banners + social ads</td></tr>
                  <tr><td className="border border-border p-3">Maximum reach</td><td className="border border-border p-3">Multi-channel combining all</td></tr>
                </tbody>
              </table>
            </div>
            <p>See the full breakdown of{" "}
              <Link to="/types-of-advertising-sri-lanka" className="text-accent hover:underline font-semibold">types of advertising in Sri Lanka</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Step 4 — Set Your Budget</h2>
            <p>
              A good rule: allocate 5-10% of monthly target revenue to advertising; 10-15% in growth mode. See our full{" "}
              <Link to="/advertising-cost-sri-lanka" className="text-accent hover:underline font-semibold">advertising cost guide for Sri Lanka</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Step 5 — Create Your Campaign Message</h2>
            <p>Answer three questions in 3 seconds: What are you offering? Why should I care? What should I do next?</p>
            <p>Common mistakes:</p>
            <ul className="space-y-2 my-4">
              <li>❌ Trying to say too much — one message per campaign</li>
              <li>❌ Focusing on your company instead of customer benefit</li>
              <li>❌ Weak call to action — "call us" is weaker than "call now to book your free consultation"</li>
              <li>❌ Not localising for Sri Lankan audiences</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Step 6 — Build Your Landing Page</h2>
            <p>Sending ad traffic to your homepage is a common, expensive mistake. Your landing page needs:</p>
            <ul className="space-y-2 my-4">
              <li>✅ Headline matching your ad message exactly</li>
              <li>✅ Short enquiry form — name, phone, email</li>
              <li>✅ One clear call-to-action button</li>
              <li>✅ Trust signals — testimonials, client logos</li>
              <li>✅ Mobile optimisation</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Step 7 — Launch and Track</h2>
            <p>Track daily: email open/click/bounce, SMS delivery/response, Google Ads CTR/CPC/conversions, leads generated, cost per lead.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Step 8 — Optimise and Scale</h2>
            <p>Review which channel, segment, message, and timing performed best. Improve incrementally — each campaign better than the last.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Why Work with Buzz Connect?</h2>
            <p>
              Buzz Connect manages every step for clients. Explore the complete range of{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising services in Sri Lanka</Link>{" "}
              and pick the{" "}
              <Link to="/best-advertising-company-sri-lanka" className="text-accent hover:underline font-semibold">best advertising company in Sri Lanka</Link>{" "}
              for your campaign.
            </p>

            <p className="mt-8">
              👉 Ready to launch?{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">Start advertising in Sri Lanka today</Link>.
            </p>
          </div>
        </motion.div>

        <RelatedArticles currentPath="/how-to-advertise-business-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default HowToAdvertiseBusinessSriLanka;
