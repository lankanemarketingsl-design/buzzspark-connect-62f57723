import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-online-vs-traditional.webp";

const OnlineVsTraditionalAdvertising = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Online Advertising vs Traditional Advertising in Sri Lanka: Which Wins in 2026?",
      description: "Online vs traditional advertising in Sri Lanka — head-to-head comparison on targeting, cost, measurability and ROI.",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect" },
      datePublished: "2026-04-24",
    },
  ];

  return (
    <ServicePageLayout
      badge="Advertising Sri Lanka"
      title="Online Advertising vs Traditional Advertising in Sri Lanka: Which Wins in 2026?"
      subtitle="A clear, objective head-to-head comparison so you can decide where to put your advertising budget."
    >
      <SEOHead
        title="Online vs Traditional Advertising in Sri Lanka 2026 | Buzz Connect"
        description="Online vs traditional advertising Sri Lanka — compare targeting, cost, speed, measurability & ROI. Why digital wins for most businesses in 2026."
        canonical="/online-vs-traditional-advertising-sri-lanka"
        keywords="online advertising vs traditional advertising sri lanka, digital vs traditional advertising"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Online vs Traditional Advertising", url: "/online-vs-traditional-advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="Online vs traditional advertising Sri Lanka" className="w-full rounded-2xl mb-8" loading="lazy" width={800} height={600} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Every business owner in Sri Lanka faces the same question: should I advertise <strong>online</strong> or stick with <strong>traditional channels</strong> like TV, radio, and newspapers?
            </p>
            <p>
              In 2026, digital has decisively overtaken traditional for most Sri Lankan businesses. For background, see{" "}
              <Link to="/what-is-advertising-sri-lanka" className="text-accent hover:underline font-semibold">what is advertising in Sri Lanka</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">What is Traditional Advertising?</h2>
            <ul className="space-y-2 my-4">
              <li>📺 Television, 📻 Radio, 📰 Newspaper & magazine, 🚏 Outdoor billboards, 📬 Direct mail leaflets</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">What is Online Advertising?</h2>
            <p>See all online channels in our complete{" "}
              <Link to="/types-of-advertising-sri-lanka" className="text-accent hover:underline font-semibold">types of advertising guide</Link>:
            </p>
            <ul className="space-y-2 my-4">
              <li>📧 <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link></li>
              <li>📱 <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link></li>
              <li>🖥️ <Link to="/web-banner-advertising-sri-lanka" className="text-accent hover:underline font-semibold">Web banner advertising</Link></li>
              <li>🔍 <Link to="/google-ads-sri-lanka" className="text-accent hover:underline font-semibold">Google Ads</Link></li>
              <li>📲 <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline font-semibold">Social media advertising</Link></li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Head-to-Head Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left text-foreground">Factor</th>
                    <th className="border border-border p-3 text-left text-foreground">Online</th>
                    <th className="border border-border p-3 text-left text-foreground">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">Targeting</td><td className="border border-border p-3">Precise — industry, location, behaviour</td><td className="border border-border p-3">Broad — age and geography</td></tr>
                  <tr><td className="border border-border p-3">Measurability</td><td className="border border-border p-3">Every metric tracked</td><td className="border border-border p-3">Difficult to measure</td></tr>
                  <tr><td className="border border-border p-3">Speed</td><td className="border border-border p-3">24-48 hours</td><td className="border border-border p-3">Weeks of lead time</td></tr>
                  <tr><td className="border border-border p-3">Cost</td><td className="border border-border p-3">Flexible — any budget</td><td className="border border-border p-3">High minimum spend</td></tr>
                  <tr><td className="border border-border p-3">Optimisation</td><td className="border border-border p-3">Real-time</td><td className="border border-border p-3">Cannot change once live</td></tr>
                  <tr><td className="border border-border p-3">Engagement</td><td className="border border-border p-3">Two-way clicks/replies</td><td className="border border-border p-3">One-way only</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Where Online Wins</h2>
            <ul className="space-y-2 my-4">
              <li>✅ Pay only to reach your target audience</li>
              <li>✅ Measure exactly who opened, clicked, enquired</li>
              <li>✅ Launch today, get leads tomorrow</li>
              <li>✅ A LKR 50,000 email campaign to 100,000 targeted contacts beats a LKR 500,000 untargeted newspaper ad</li>
            </ul>

            <p>For full pricing comparison, see our{" "}
              <Link to="/advertising-cost-sri-lanka" className="text-accent hover:underline font-semibold">advertising cost guide for Sri Lanka</Link>.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-8 rounded">
              <p className="font-semibold text-foreground mb-2">📊 The Shift in Sri Lanka</p>
              <p className="text-muted-foreground">
                Digital advertising now accounts for over 60% of advertising spend growth in Sri Lanka. Businesses that have shifted budgets report 3-5x more leads per rupee spent.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Start Online Advertising</h2>
            <p>
              Buzz Connect offers Sri Lanka's most comprehensive online advertising platform. Explore all{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising services in Sri Lanka</Link>{" "}
              or read our complete{" "}
              <Link to="/digital-advertising-sri-lanka-complete-guide" className="text-accent hover:underline font-semibold">digital advertising guide</Link>.
            </p>

            <p className="mt-8">
              👉{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">Start your online advertising campaign today</Link>.
            </p>
          </div>
        </motion.div>

        <RelatedArticles currentPath="/online-vs-traditional-advertising-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default OnlineVsTraditionalAdvertising;
