import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles from "@/components/RelatedArticles";
import StrategyCallForm from "@/components/StrategyCallForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DigitalMarketingTrendsSriLanka = () => {
  const faqs = [
    { q: "What are the biggest digital marketing trends in Sri Lanka for 2026?", a: "AI-assisted content and creative production, WhatsApp commerce and conversational sales, short-form video on TikTok and Reels, first-party data and email database building, and the continued rise of multi-channel coordinated campaigns over single-platform reliance." },
    { q: "Is TikTok worth investing in for Sri Lankan businesses in 2026?", a: "Yes — TikTok adoption in Sri Lanka has grown significantly, particularly in fashion, food, beauty, education and entertainment. Organic reach is still high relative to Facebook and Instagram, making it one of the best low-cost discovery channels for 2026." },
    { q: "How is AI changing digital marketing in Sri Lanka?", a: "AI is now mainstream for ad copy generation, image and video creation, audience segmentation, chatbot-led customer service and predictive lead scoring. Buzz Connect uses AI to accelerate campaign production while keeping human strategy and creative direction at the centre." },
    { q: "Is email marketing still effective in Sri Lanka in 2026?", a: "More than ever. With rising platform ad costs and algorithm volatility, owned email databases are one of the most defensible marketing assets a Sri Lankan business can build. Buzz Connect's 350,000+ verified email database is the foundation of dozens of high-ROI campaigns each month." },
    { q: "What is WhatsApp commerce and is it growing in Sri Lanka?", a: "WhatsApp commerce uses WhatsApp Business catalogues, click-to-WhatsApp ads and broadcast campaigns to drive product sales conversations. It is one of the fastest-growing channels in Sri Lanka, particularly for fashion, beauty, hospitality and SME retail." },
    { q: "Should Sri Lankan businesses still invest in SEO in 2026?", a: "Yes. Despite AI search and zero-click results, Google still drives the majority of considered-purchase research traffic in Sri Lanka. SEO compounds over time and produces lower cost-per-lead than paid channels once established." },
    { q: "What channel mix should a Sri Lankan business plan for 2026?", a: "A balanced 2026 mix typically includes SEO + content for compounding traffic, Google + Meta paid for fast performance, email + SMS + WhatsApp for direct response, and TikTok or Reels for low-cost discovery and brand building." },
  ];

  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Digital Marketing Trends in Sri Lanka 2025–2026", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-05-14", dateModified: "2026-05-14", mainEntityOfPage: "https://buzzconnect.lk/digital-marketing-trends-sri-lanka" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];

  return (
    <div className="pt-14 sm:pt-16">
      <SEOHead
        title="Digital Marketing Trends in Sri Lanka 2025–2026 | Buzz Connect"
        description="The most important digital marketing trends shaping Sri Lanka in 2025–2026 — AI, WhatsApp commerce, TikTok, first-party data, multi-channel campaigns and what to budget."
        canonical="/digital-marketing-trends-sri-lanka"
        keywords="digital marketing trends sri lanka 2026, marketing trends sri lanka, sri lanka marketing 2025, ai marketing sri lanka, whatsapp commerce sri lanka, tiktok marketing sri lanka"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Digital Marketing Trends in Sri Lanka", url: "/digital-marketing-trends-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      <section className="gradient-hero text-primary-foreground py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Digital Marketing <span className="text-accent">Trends in Sri Lanka</span> 2025–2026</h1>
          <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed">The 10 trends every Sri Lankan business owner and marketer needs to plan for in 2026 — from AI and WhatsApp commerce to first-party data and multi-channel coordination.</p>
        </div>
      </section>

      <article className="py-14 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-10 text-foreground">
          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>The pace of change in Sri Lanka's digital marketing landscape has never been faster. Platform algorithms shift weekly, AI is reshaping creative production, and consumer attention is fragmenting across more channels than ever. This 2026 outlook captures the trends that will most affect ROI for Sri Lankan businesses — based on Buzz Connect's frontline data from 1,500+ clients.</p>
            <p>For wider context, see our guides to the top <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">digital marketing companies in Sri Lanka</Link> and the best <Link to="/marketing-agencies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">marketing agencies in Sri Lanka</Link>.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">1. AI-assisted content and creative production</h2>
            <p className="text-muted-foreground leading-relaxed">Ad copy, image generation, video editing and email drafting are now AI-accelerated by default. The agencies winning in 2026 use AI to ship 5–10x more creative variations — while keeping human strategy and brand direction at the centre.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">2. WhatsApp commerce and conversational sales</h2>
            <p className="text-muted-foreground leading-relaxed">WhatsApp Business catalogues, click-to-WhatsApp ads and broadcast campaigns are turning passive viewers into active sales conversations. <Link to="/whatsapp-marketing" className="text-accent font-semibold underline underline-offset-2 hover:no-underline">WhatsApp marketing</Link> is one of the fastest-growing channels in Sri Lanka.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">3. Short-form video dominates discovery</h2>
            <p className="text-muted-foreground leading-relaxed">TikTok, Instagram Reels and YouTube Shorts are now the top organic discovery channels in Sri Lanka — particularly for fashion, food, beauty, education and entertainment brands.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">4. First-party data and owned audience networks</h2>
            <p className="text-muted-foreground leading-relaxed">As platform ad costs rise and tracking restrictions tighten, owned email and WhatsApp databases are now the most defensible marketing asset a Sri Lankan business can build. <Link to="/email-marketing" className="text-accent font-semibold underline underline-offset-2 hover:no-underline">Email marketing</Link> is more important in 2026, not less.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">5. Multi-channel campaigns beat single-platform plays</h2>
            <p className="text-muted-foreground leading-relaxed">Coordinated email + SMS + WhatsApp + paid social campaigns consistently beat any single-channel plan by 2–3x in Buzz Connect's data. The leading <Link to="/advertising-agencies-sri-lanka" className="text-accent font-semibold underline underline-offset-2 hover:no-underline">advertising agencies in Sri Lanka</Link> are now built around channel coordination, not single-channel specialisation.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">6. Performance creative replaces brand creative</h2>
            <p className="text-muted-foreground leading-relaxed">Ads built for measurable response — short hooks, clear CTAs, native-feeling formats — are outperforming traditional polished brand films across every platform. This is reshaping how creative teams in Sri Lanka work.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">7. SEO shifts toward intent and entities</h2>
            <p className="text-muted-foreground leading-relaxed">Google's AI-driven search rewards topical authority and clear entity signals more than keyword stuffing. Sri Lankan businesses winning at <Link to="/seo-sri-lanka" className="text-accent font-semibold underline underline-offset-2 hover:no-underline">SEO</Link> in 2026 are publishing deep, structured content clusters — not isolated blog posts.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">8. Local SEO and Google Business Profile</h2>
            <p className="text-muted-foreground leading-relaxed">For hotels, restaurants, clinics and any location-based business in Sri Lanka, ranking in Google Maps and the local pack now drives more high-intent traffic than the classic blue-link results.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">9. Marketing automation goes mainstream</h2>
            <p className="text-muted-foreground leading-relaxed">Automated email sequences, WhatsApp follow-ups and lead scoring are no longer enterprise-only. Sri Lankan SMEs are now running automation that used to require a dedicated team.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">10. Transparent, ROI-led agency relationships</h2>
            <p className="text-muted-foreground leading-relaxed">Clients in 2026 are walking away from vanity reporting and demanding lead-, revenue- and ROAS-led accountability from their agencies. This is exactly the model Buzz Connect has run since 2014.</p>
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
          <RelatedArticles currentPath="/digital-marketing-trends-sri-lanka" />
        </div>
      </article>
    </div>
  );
};

export default DigitalMarketingTrendsSriLanka;
