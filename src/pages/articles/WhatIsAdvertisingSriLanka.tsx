import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-what-is-advertising.jpg";

const WhatIsAdvertisingSriLanka = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "What is Advertising in Sri Lanka? Complete Guide for Businesses (2026)",
      description: "Complete guide to advertising in Sri Lanka — types, channels, costs and how to choose the right advertising for your business in 2026.",
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
          name: "What is advertising in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Advertising in Sri Lanka is any paid promotion that helps a business reach its target audience — through digital channels like email, SMS, WhatsApp, Google Ads, web banners and social media, or through traditional channels like TV, radio and print. In 2026, digital advertising dominates because it is targeted, measurable and delivers faster results.",
          },
        },
        {
          "@type": "Question",
          name: "What are the main types of advertising in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main types of advertising in Sri Lanka are: email marketing, SMS marketing, WhatsApp marketing, web banner advertising, Google Ads, social media advertising, multi-channel campaigns, and traditional advertising (TV, radio, print, outdoor).",
          },
        },
        {
          "@type": "Question",
          name: "How much does advertising cost in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Advertising in Sri Lanka starts from LKR 20,000 for a focused SMS campaign, LKR 25,000 for email marketing, LKR 50,000 for Google Ads, and from LKR 100,000 for a full multi-channel campaign reaching 500,000+ verified contacts.",
          },
        },
        {
          "@type": "Question",
          name: "Which advertising channel works best in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your goal. For instant mass reach, multi-channel email + SMS works best. For top-of-Google visibility, Google Ads. For ongoing brand presence, social media and web banners. Most businesses get the best ROI by combining 2-3 channels.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to launch an advertising campaign in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With Buzz Connect, advertising campaigns go live within 24-48 hours of brief approval — including creative design, audience selection and channel deployment.",
          },
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      badge="Advertising Sri Lanka"
      title="What is Advertising in Sri Lanka? Complete Guide for Businesses (2026)"
      subtitle="Every type of advertising available in Sri Lanka, which channels work for which goals, and how to choose the right one for your business."
    >
      <SEOHead
        title="What is Advertising in Sri Lanka? Complete 2026 Guide | Buzz Connect"
        description="What is advertising in Sri Lanka? Complete 2026 guide to types, channels, costs & ROI. Reach 500,000+ verified contacts with email, SMS, WhatsApp & multi-channel ads."
        canonical="/what-is-advertising-sri-lanka"
        keywords="advertising sri lanka, advertising in sri lanka, what is advertising sri lanka, types of advertising sri lanka, digital advertising sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "What is Advertising in Sri Lanka", url: "/what-is-advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="What is advertising in Sri Lanka" className="w-full rounded-2xl mb-8" loading="lazy" width={1024} height={640} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Advertising is the engine behind every successful business in Sri Lanka. Whether you are trying to fill hotel rooms, sell property, attract students, generate finance leads, or drive customers to your restaurant — advertising is how you make your target audience aware that you exist and give them a reason to choose you.
            </p>
            <p>
              But <strong>advertising in Sri Lanka in 2026</strong> looks very different from even five years ago. The channels have multiplied, the targeting has become incredibly precise, and the ability to measure results down to the last rupee has transformed how smart businesses approach their marketing budgets.
            </p>
            <p>
              This guide explains every major type of advertising available to Sri Lankan businesses, which channels work best for which goals, and how Buzz Connect helps businesses across every industry reach their ideal customers fast.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">What is Advertising?</h2>
            <p>
              Advertising is any paid communication that promotes your business, product, or service to a target audience. Unlike public relations or word of mouth, advertising gives you full control over the message, the audience, the timing, and the channel.
            </p>
            <p>In Sri Lanka, advertising serves three core purposes:</p>
            <ul className="space-y-2 my-4">
              <li>✅ <strong>Awareness</strong> — letting people know your business exists and what you offer</li>
              <li>✅ <strong>Consideration</strong> — giving potential customers reasons to choose you over competitors</li>
              <li>✅ <strong>Conversion</strong> — driving direct action such as an enquiry, booking, purchase, or registration</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Types of Advertising Available in Sri Lanka</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">1. Digital Advertising</h3>
            <p>Digital advertising covers all paid promotional activity conducted online. It is the fastest-growing and most measurable form of advertising in Sri Lanka and includes:</p>
            <ul className="space-y-2 my-4">
              <li>📧 <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email Marketing</Link> — targeted promotional messages sent directly to verified inboxes</li>
              <li>📱 <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS Marketing</Link> — instant text messages with 90%+ open rates</li>
              <li>💬 <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp Marketing</Link> — personalised messages via Sri Lanka's most used messaging platform</li>
              <li>🖥️ <Link to="/web-banner-advertising-sri-lanka" className="text-accent hover:underline font-semibold">Web Banner Advertising</Link> — visual display ads on Findit.lk</li>
              <li>🔍 <Link to="/google-ads-sri-lanka" className="text-accent hover:underline font-semibold">Google Ads</Link> — paid search ads at the top of Google</li>
              <li>📲 <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline font-semibold">Social Media Advertising</Link> — Facebook, Instagram, LinkedIn promotions</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">2. Direct Marketing</h3>
            <p>
              Direct marketing delivers your message directly to a specific, targeted individual. Learn more about{" "}
              <Link to="/what-is-direct-marketing-sri-lanka" className="text-accent hover:underline font-semibold">how direct marketing works in Sri Lanka</Link>{" "}
              and why it delivers faster results than traditional methods.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">3. Traditional Advertising</h3>
            <p>
              Traditional channels include television, radio, newspapers, magazines, and outdoor billboards. Read our full comparison of{" "}
              <Link to="/online-vs-traditional-advertising-sri-lanka" className="text-accent hover:underline font-semibold">online advertising vs traditional advertising in Sri Lanka</Link>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">4. Multi-Channel Advertising</h3>
            <p>
              The most effective strategies combine email, SMS, web banners, and social media in one coordinated campaign. See how{" "}
              <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing in Sri Lanka</Link>{" "}
              delivers significantly better results.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Why Advertising Matters for Every Business</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left text-foreground">Business Type</th>
                    <th className="border border-border p-3 text-left text-foreground">What Advertising Achieves</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">Hotels and Resorts</td><td className="border border-border p-3">Fills rooms during low seasons, builds brand recognition</td></tr>
                  <tr><td className="border border-border p-3">Real Estate</td><td className="border border-border p-3">Generates qualified property enquiries from verified buyers</td></tr>
                  <tr><td className="border border-border p-3">Education Institutes</td><td className="border border-border p-3">Drives student enrolments during intake periods</td></tr>
                  <tr><td className="border border-border p-3">Finance Companies</td><td className="border border-border p-3">Reaches high-net-worth investors with targeted campaigns</td></tr>
                  <tr><td className="border border-border p-3">Restaurants</td><td className="border border-border p-3">Attracts diners for new menus and special occasions</td></tr>
                  <tr><td className="border border-border p-3">Events</td><td className="border border-border p-3">Sells tickets through urgency-based campaigns</td></tr>
                  <tr><td className="border border-border p-3">Recruitment Agencies</td><td className="border border-border p-3">Reaches thousands of qualified candidates rapidly</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Digital vs Traditional Advertising in Sri Lanka</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left text-foreground">Factor</th>
                    <th className="border border-border p-3 text-left text-foreground">Digital</th>
                    <th className="border border-border p-3 text-left text-foreground">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">Targeting</td><td className="border border-border p-3">Precise — by industry, location, behaviour</td><td className="border border-border p-3">Broad — general audience</td></tr>
                  <tr><td className="border border-border p-3">Measurability</td><td className="border border-border p-3">Every click and conversion tracked</td><td className="border border-border p-3">Difficult to measure</td></tr>
                  <tr><td className="border border-border p-3">Speed</td><td className="border border-border p-3">Live within 24-48 hours</td><td className="border border-border p-3">Weeks of lead time</td></tr>
                  <tr><td className="border border-border p-3">Cost</td><td className="border border-border p-3">Flexible — any budget</td><td className="border border-border p-3">High minimum spend</td></tr>
                  <tr><td className="border border-border p-3">Optimisation</td><td className="border border-border p-3">Real-time adjustments</td><td className="border border-border p-3">Cannot adjust once published</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-8 rounded">
              <p className="font-semibold text-foreground mb-2">📊 Sri Lanka Advertising Landscape 2026</p>
              <p className="text-muted-foreground">
                Sri Lanka has 8 million+ internet users, 30 million+ mobile connections, and rapidly growing digital consumption. Digital advertising now accounts for over 60 percent of total advertising spend growth — and businesses that have shifted their budgets to digital are consistently outperforming those still relying on traditional media alone.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">How to Choose the Right Channel</h2>
            <p>The right channel depends on your audience, goal, and budget. Get a complete view in our{" "}
              <Link to="/types-of-advertising-sri-lanka" className="text-accent hover:underline font-semibold">types of advertising guide</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Advertising Services from Buzz Connect</h2>
            <p>
              Buzz Connect is Sri Lanka's leading advertising company — offering email, SMS, WhatsApp, web banner, Google Ads, and social media advertising under one roof. Explore the full range of{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising services in Sri Lanka</Link>{" "}
              available from Buzz Connect.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Frequently Asked Questions</h2>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-2">What is the most effective form of advertising in Sri Lanka?</h3>
            <p>For most industries, multi-channel direct marketing combining email, SMS, and web banner advertising delivers the strongest ROI. For immediate search visibility, Google Ads is the fastest route. The best strategy combines both.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-2">How much does advertising cost in Sri Lanka?</h3>
            <p>
              Costs vary by channel. Email campaigns start from LKR 25,000. See the full{" "}
              <Link to="/advertising-cost-sri-lanka" className="text-accent hover:underline font-semibold">advertising cost guide for Sri Lanka</Link>{" "}
              for detailed 2026 pricing.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-2">Can small businesses afford advertising?</h3>
            <p>Yes. Digital advertising is highly scalable — there are effective entry points at every budget level, with far more precise targeting than TV or print.</p>

            <p className="mt-8">
              👉 Ready to start advertising? Explore{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising in Sri Lanka with Buzz Connect</Link>.
            </p>
          </div>
        </motion.div>

        <RelatedArticles currentPath="/what-is-advertising-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default WhatIsAdvertisingSriLanka;
