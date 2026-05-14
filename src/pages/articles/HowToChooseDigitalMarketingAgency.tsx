import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles from "@/components/RelatedArticles";
import StrategyCallForm from "@/components/StrategyCallForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HowToChooseDigitalMarketingAgency = () => {
  const faqs = [
    { q: "What should I look for in a digital marketing agency in Sri Lanka?", a: "Look for verifiable experience (5+ years, 500+ clients), an in-house team across strategy, creative and media, multi-channel capability, transparent pricing and reporting, and proven case studies in your industry. Avoid agencies that promise guaranteed Google rankings or refuse to share past results." },
    { q: "How much does a digital marketing agency cost in Sri Lanka?", a: "Entry-level retainers in Sri Lanka start around LKR 25,000–50,000/month for single-channel work. Full-service multi-channel retainers typically range from LKR 75,000–250,000/month depending on scope. Project-based campaigns (email blasts, SMS) can start as low as LKR 10,000–15,000." },
    { q: "Should I hire a freelancer, in-house team, or agency?", a: "Freelancers suit single, narrow tasks. An in-house team makes sense once you spend over LKR 500,000/month consistently. For most Sri Lankan SMEs, an agency delivers a senior strategist, designer, copywriter and media buyer for less than the salary of one mid-level marketing manager." },
    { q: "How long does an agency engagement usually last?", a: "Most agencies want a 3–6 month minimum because SEO, content and paid media all need time to optimise. Avoid agencies pushing 12-month lock-ins without a clear opt-out clause — and always insist on a 30-day exit notice in your contract." },
    { q: "What questions should I ask in the first agency meeting?", a: "Ask: who will actually work on my account, can I see 3 case studies in my industry, what is your reporting cadence, what is your average client retention, what is and is not included in the retainer, and what happens if results miss target after 90 days." },
    { q: "How do I know if my current agency is underperforming?", a: "Red flags: monthly reports full of impressions and likes but no leads or revenue, no clear KPIs, slow campaign launches (>2 weeks), the same junior account manager handling everything, and refusal to share raw analytics access." },
    { q: "Can a small business really afford a Sri Lankan digital agency?", a: "Yes. Buzz Connect runs profitable campaigns for SMEs from LKR 10,000–25,000 because of our owned audience network. The right channel and right targeting matter far more than budget size." },
  ];

  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: "How to Choose a Digital Marketing Agency in Sri Lanka (2026 Guide)", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-05-14", dateModified: "2026-05-14", mainEntityOfPage: "https://buzzconnect.lk/how-to-choose-digital-marketing-agency-sri-lanka" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];

  return (
    <div className="pt-14 sm:pt-16">
      <SEOHead
        title="How to Choose a Digital Marketing Agency in Sri Lanka (2026)"
        description="A step-by-step buyer's guide to choosing the right digital marketing agency in Sri Lanka — checklists, pricing, red flags, and the questions to ask before you sign."
        canonical="/how-to-choose-digital-marketing-agency-sri-lanka"
        keywords="how to choose digital marketing agency sri lanka, digital marketing agency checklist, hiring marketing agency colombo, best digital marketing agency questions"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "How to Choose a Digital Marketing Agency", url: "/how-to-choose-digital-marketing-agency-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      <section className="gradient-hero text-primary-foreground py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">How to Choose a <span className="text-accent">Digital Marketing Agency</span> in Sri Lanka</h1>
          <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed">A practical 2026 buyer's guide: the checklist, the questions, the pricing benchmarks, and the red flags Sri Lankan business owners need before signing with any agency.</p>
        </div>
      </section>

      <article className="py-14 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-10 text-foreground">
          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Choosing the right digital marketing agency is one of the most consequential decisions a Sri Lankan business owner makes. Get it right and you unlock years of profitable growth. Get it wrong and you burn six figures on impressions, likes and "brand awareness" with nothing measurable to show.</p>
            <p>This guide walks through the exact framework Buzz Connect recommends — the same one our 1,500+ clients have used to evaluate us against the alternatives. If you are comparing options, also see our breakdown of the top <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">digital marketing companies in Sri Lanka</Link> and the leading <Link to="/marketing-agencies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">marketing agencies in Sri Lanka</Link>.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">1. Define your goal before you call anyone</h2>
            <p className="text-muted-foreground leading-relaxed">Are you trying to generate leads, drive online sales, build brand awareness, fill an event, or rank in Google? Each goal points to a different channel mix and a different type of agency. Walking in with a clear, written objective ("100 qualified property leads per month at under LKR 2,500 each") instantly filters out 80% of agencies who only know how to talk in vague brand language.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">2. The 8-point agency checklist</h2>
            <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
              <li>Verifiable years in business — minimum 5 years, ideally 10+</li>
              <li>Documented client list of 500+ businesses across multiple industries</li>
              <li>In-house team — strategy, creative, copy, media buying, analytics</li>
              <li>Multi-channel capability across SEO, social, email, SMS, WhatsApp and paid ads</li>
              <li>Owned audience or proprietary inventory (not just rented Facebook traffic)</li>
              <li>Transparent pricing — written proposals with no hidden ad-spend markup</li>
              <li>Real-time reporting dashboards, not just monthly PDFs</li>
              <li>Industry experience in your specific sector</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">3. The 6 questions that expose any agency</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>"Who specifically will work on my account?" (Watch for senior pitches followed by junior delivery.)</li>
              <li>"Show me 3 case studies in my industry with real numbers."</li>
              <li>"What is your average client retention?" (Under 12 months is a red flag.)</li>
              <li>"What is your reporting cadence and what KPIs will we track?"</li>
              <li>"What happens if results miss target after 90 days?"</li>
              <li>"Can I have direct access to my Google Ads, Meta and Analytics accounts?"</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">4. Sri Lankan agency pricing benchmarks (2026)</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Single-channel project: LKR 10,000–50,000</li>
              <li>Single-channel monthly retainer: LKR 25,000–75,000</li>
              <li>Full-service multi-channel retainer: LKR 75,000–250,000/month</li>
              <li>Enterprise / large-budget: LKR 250,000+/month with dedicated team</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">Avoid bottom-of-market pricing (under LKR 10,000/month for "everything") — it almost always means a single freelancer juggling 30 clients with templated work.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">5. Red flags to walk away from</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Guaranteed #1 Google rankings (impossible to honestly promise)</li>
              <li>No written scope of work or contract</li>
              <li>Refusal to share raw analytics access or past client references</li>
              <li>Vague reporting full of impressions and engagement, no leads or revenue</li>
              <li>12-month lock-ins with no opt-out clause</li>
              <li>Hidden markups on ad spend you can't audit</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">6. Why Buzz Connect passes every test</h2>
            <p className="text-muted-foreground leading-relaxed">Buzz Connect has served 1,500+ Sri Lankan businesses since 2014, runs an in-house team across every channel, owns a 350,000+ email and 600,000+ SMS database, and provides transparent reporting and pricing on every engagement. Explore our <Link to="/advertising-agencies-sri-lanka" className="text-accent font-semibold underline underline-offset-2 hover:no-underline">advertising agency services</Link> or jump straight to a <Link to="/contact-us" className="text-accent font-semibold underline underline-offset-2 hover:no-underline">free strategy call</Link>.</p>
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
          <RelatedArticles currentPath="/how-to-choose-digital-marketing-agency-sri-lanka" />
        </div>
      </article>
    </div>
  );
};

export default HowToChooseDigitalMarketingAgency;
