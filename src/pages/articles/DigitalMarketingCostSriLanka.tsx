import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles from "@/components/RelatedArticles";
import StrategyCallForm from "@/components/StrategyCallForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DigitalMarketingCostSriLanka = () => {
  const faqs = [
    { q: "How much does digital marketing cost in Sri Lanka?", a: "Entry-level campaigns start from LKR 10,000–15,000 (single email, SMS or WhatsApp blast). Monthly retainers range from LKR 25,000 (single channel) to LKR 250,000+ (full-service multi-channel). Project-based campaigns and one-off creative work fall in between." },
    { q: "What is the cheapest digital marketing channel in Sri Lanka?", a: "Email marketing typically delivers the lowest cost per qualified lead because of the high message volume per blast and low per-contact cost. Buzz Connect's email campaigns reach 350,000+ verified Sri Lankan inboxes from LKR 15,000 per blast." },
    { q: "How much should a small business in Sri Lanka spend on digital marketing?", a: "Most Sri Lankan SMEs allocate 5–10% of monthly revenue to marketing, with a starting budget of LKR 25,000–75,000/month across two or three channels. Businesses below this often struggle to generate consistent results; those above tend to scale faster." },
    { q: "How much do Google Ads cost in Sri Lanka?", a: "Google Ads cost-per-click in Sri Lanka ranges from LKR 30 to LKR 500+ depending on industry. High-competition verticals (insurance, real estate, legal) cost more. Most SMEs spend LKR 30,000–150,000/month on ad budget plus LKR 15,000–35,000 in management fees." },
    { q: "How much does SEO cost in Sri Lanka?", a: "SEO retainers in Sri Lanka typically run LKR 40,000–150,000/month depending on competitiveness. Buzz Connect's SEO packages start lower for niche local businesses and scale up for national or e-commerce campaigns." },
    { q: "How much does social media marketing cost in Sri Lanka?", a: "Organic social media management starts at LKR 25,000–60,000/month for one to two platforms. Add paid ads (Facebook, Instagram, TikTok) and budgets typically rise to LKR 75,000–200,000/month including media spend." },
    { q: "Are there hidden costs in digital marketing agency contracts?", a: "Sometimes. Common hidden costs include ad spend markups (5–25%), creative production fees billed separately, third-party tool subscriptions and 'optimisation' fees. Buzz Connect's pricing is fully transparent — no markup on ad spend, no hidden fees." },
  ];

  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Digital Marketing Cost in Sri Lanka: 2026 Price Guide", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-05-14", dateModified: "2026-05-14", mainEntityOfPage: "https://buzzconnect.lk/digital-marketing-cost-sri-lanka" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];

  return (
    <div className="pt-14 sm:pt-16">
      <SEOHead
        title="Digital Marketing Cost in Sri Lanka: 2026 Price Guide"
        description="Transparent 2026 pricing for digital marketing in Sri Lanka — email, SMS, WhatsApp, SEO, Google Ads, social media. Real LKR ranges by channel, scope and business size."
        canonical="/digital-marketing-cost-sri-lanka"
        keywords="digital marketing cost sri lanka, digital marketing price sri lanka, seo cost sri lanka, google ads cost sri lanka, social media marketing cost colombo"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Digital Marketing Cost in Sri Lanka", url: "/digital-marketing-cost-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      <section className="gradient-hero text-primary-foreground py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Digital Marketing <span className="text-accent">Cost in Sri Lanka</span>: 2026 Price Guide</h1>
          <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed">Real LKR pricing for every major digital marketing channel in Sri Lanka — by scope, by business size and by expected ROI. Updated for 2026.</p>
        </div>
      </section>

      <article className="py-14 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-10 text-foreground">
          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Pricing is the question every Sri Lankan business owner asks first — and the question most agencies dodge until you sign an NDA. This guide gives you transparent 2026 LKR ranges for every major channel, drawn from Buzz Connect's 20,000+ campaign history and benchmarked against the wider Sri Lankan market.</p>
            <p>For wider context, see our overviews of the top <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">digital marketing companies in Sri Lanka</Link> and the leading <Link to="/advertising-agencies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">advertising agencies in Sri Lanka</Link>.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">Pricing by channel (2026)</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-accent text-accent-foreground">
                  <tr>
                    <th className="text-left px-3 py-2">Channel</th>
                    <th className="text-left px-3 py-2">Entry</th>
                    <th className="text-left px-3 py-2">Typical</th>
                    <th className="text-left px-3 py-2">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="bg-card">
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Email Marketing</td><td className="px-3 py-2">LKR 15,000/blast</td><td className="px-3 py-2">LKR 30,000–80,000/mo</td><td className="px-3 py-2">LKR 100,000+/mo</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">SMS Marketing</td><td className="px-3 py-2">LKR 10,000/blast</td><td className="px-3 py-2">LKR 25,000–60,000/mo</td><td className="px-3 py-2">LKR 80,000+/mo</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">WhatsApp Marketing</td><td className="px-3 py-2">LKR 12,000/broadcast</td><td className="px-3 py-2">LKR 30,000–75,000/mo</td><td className="px-3 py-2">LKR 100,000+/mo</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">SEO</td><td className="px-3 py-2">LKR 40,000/mo</td><td className="px-3 py-2">LKR 60,000–120,000/mo</td><td className="px-3 py-2">LKR 150,000+/mo</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Google Ads (mgmt)</td><td className="px-3 py-2">LKR 15,000/mo</td><td className="px-3 py-2">LKR 25,000–50,000/mo</td><td className="px-3 py-2">LKR 75,000+/mo</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Social Media (mgmt)</td><td className="px-3 py-2">LKR 25,000/mo</td><td className="px-3 py-2">LKR 50,000–100,000/mo</td><td className="px-3 py-2">LKR 150,000+/mo</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Lead Generation</td><td className="px-3 py-2">LKR 30,000/mo</td><td className="px-3 py-2">LKR 60,000–150,000/mo</td><td className="px-3 py-2">LKR 200,000+/mo</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Website Design</td><td className="px-3 py-2">LKR 75,000 once</td><td className="px-3 py-2">LKR 150,000–400,000</td><td className="px-3 py-2">LKR 500,000+</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">Ranges are indicative for the Sri Lankan market in 2026. Final pricing depends on scope, audience size and competitiveness. Ad spend (Google, Meta) is additional to management fees.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">Recommended budget by business size</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li><strong>Solo / micro business:</strong> LKR 10,000–25,000/month — single channel, project-based</li>
              <li><strong>Small business (5–20 staff):</strong> LKR 25,000–75,000/month — two channels, light retainer</li>
              <li><strong>Mid-market (20–100 staff):</strong> LKR 75,000–250,000/month — full-service multi-channel</li>
              <li><strong>Enterprise / national brand:</strong> LKR 250,000+ — dedicated team, all channels, performance media</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">Where most businesses overspend</h2>
            <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
              <li>Paying for "social media management" that produces engagement but no leads</li>
              <li>Boosting Facebook posts instead of running structured campaigns</li>
              <li>Hidden ad-spend markups (5–25%) on top of management fees</li>
              <li>Expensive websites that aren't optimised for conversion or SEO</li>
              <li>Single-channel agencies that miss obvious cross-channel lift</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">How Buzz Connect prices</h2>
            <p className="text-muted-foreground leading-relaxed">Transparent. Written. No markup on ad spend. Free strategy call before any quote. Most clients start with a single-channel project (LKR 10,000–25,000), prove ROI, then scale into a multi-channel retainer once the math is clear.</p>
            <p className="text-muted-foreground leading-relaxed">Ready for a tailored quote? <Link to="/contact-us" className="text-accent font-semibold underline underline-offset-2 hover:no-underline">Get a free strategy call</Link>.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <StrategyCallForm />
          <RelatedArticles currentPath="/digital-marketing-cost-sri-lanka" />
        </div>
      </article>
    </div>
  );
};

export default DigitalMarketingCostSriLanka;
