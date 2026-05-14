import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles from "@/components/RelatedArticles";
import StrategyCallForm from "@/components/StrategyCallForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const EmailVsSmsVsWhatsApp = () => {
  const faqs = [
    { q: "Which channel has the highest open rate in Sri Lanka — email, SMS or WhatsApp?", a: "SMS leads with 95–98% open rates within 3 minutes. WhatsApp follows at 75–90% within an hour. Email opens average 20–35% in Sri Lanka, but with much higher message length, segmentation depth and conversion value per open." },
    { q: "Which channel converts best for sales in Sri Lanka?", a: "For low-ticket impulse purchases and time-sensitive promotions, SMS and WhatsApp dominate. For considered purchases (real estate, education, B2B, hotels), email wins because it carries images, longer copy and clear CTAs. The strongest campaigns sequence all three." },
    { q: "Is email marketing dead in Sri Lanka?", a: "No — it is thriving. Buzz Connect runs over 1,000 email campaigns annually across 12 industries with measurable ROI. Email gives you full control of the audience, no platform algorithm risk, and the lowest cost per qualified lead in most B2B and considered-purchase categories." },
    { q: "How much does each channel cost in Sri Lanka?", a: "Approximate Buzz Connect ranges: Email from LKR 15,000 per blast to 350,000+ contacts, SMS from LKR 10,000 to 600,000+ verified numbers, WhatsApp from LKR 12,000 per broadcast. Cost per lead is usually lowest on email, fastest response on SMS, and highest engagement on WhatsApp." },
    { q: "Can I run all three channels together?", a: "Yes — and you should. A coordinated email + SMS + WhatsApp sequence consistently outperforms any single channel by 2–3x in our client data. Buzz Connect runs all three from one team and one campaign plan." },
    { q: "Is WhatsApp marketing legal in Sri Lanka?", a: "Yes, when sent to opt-in audiences using compliant broadcasting tools. Buzz Connect uses permission-based WhatsApp marketing fully aligned with Meta's WhatsApp Business policies and Sri Lankan data protection norms." },
    { q: "Which channel is best for hotels, restaurants and events?", a: "SMS and WhatsApp dominate for last-minute bookings, table reservations and event reminders. Email is best for monthly newsletters, package launches and database nurturing. Combine all three for the strongest results." },
  ];

  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: "Email vs SMS vs WhatsApp Marketing: Which Wins in Sri Lanka? (2026)", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-05-14", dateModified: "2026-05-14", mainEntityOfPage: "https://buzzconnect.lk/email-vs-sms-vs-whatsapp-marketing-sri-lanka" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];

  return (
    <div className="pt-14 sm:pt-16">
      <SEOHead
        title="Email vs SMS vs WhatsApp Marketing in Sri Lanka — Which Wins?"
        description="Direct comparison of email, SMS and WhatsApp marketing in Sri Lanka — open rates, costs, conversion benchmarks and which channel mix wins for your industry in 2026."
        canonical="/email-vs-sms-vs-whatsapp-marketing-sri-lanka"
        keywords="email vs sms vs whatsapp sri lanka, best direct marketing channel sri lanka, sms vs whatsapp marketing, email marketing roi sri lanka"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Email vs SMS vs WhatsApp", url: "/email-vs-sms-vs-whatsapp-marketing-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      <section className="gradient-hero text-primary-foreground py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Email vs SMS vs WhatsApp: <span className="text-accent">Which Wins</span> in Sri Lanka?</h1>
          <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed">A side-by-side 2026 benchmark of the three highest-ROI direct marketing channels in Sri Lanka — open rates, costs, conversion data and the right channel mix by industry.</p>
        </div>
      </section>

      <article className="py-14 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-10 text-foreground">
          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Every Sri Lankan business owner asks the same question: "Should I invest in email, SMS or WhatsApp?" The honest answer is rarely just one. Each channel has a distinct strength — and the best campaigns Buzz Connect runs combine all three in a coordinated sequence.</p>
            <p>This guide is a head-to-head benchmark using Buzz Connect's data from 20,000+ campaigns delivered since 2014. For wider context, see how the top <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">digital marketing companies in Sri Lanka</Link> use these channels together.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">Head-to-head benchmark</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-accent text-accent-foreground">
                  <tr>
                    <th className="text-left px-3 py-2">Metric</th>
                    <th className="text-left px-3 py-2">Email</th>
                    <th className="text-left px-3 py-2">SMS</th>
                    <th className="text-left px-3 py-2">WhatsApp</th>
                  </tr>
                </thead>
                <tbody className="bg-card">
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Open rate</td><td className="px-3 py-2">20–35%</td><td className="px-3 py-2">95–98%</td><td className="px-3 py-2">75–90%</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Response time</td><td className="px-3 py-2">Hours–days</td><td className="px-3 py-2">Under 3 min</td><td className="px-3 py-2">Under 1 hour</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Cost per contact</td><td className="px-3 py-2">Lowest</td><td className="px-3 py-2">Medium</td><td className="px-3 py-2">Medium–High</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Message length</td><td className="px-3 py-2">Unlimited</td><td className="px-3 py-2">160 chars</td><td className="px-3 py-2">Long + media</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Rich media</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">No</td><td className="px-3 py-2">Yes</td></tr>
                  <tr className="border-t border-border"><td className="px-3 py-2 font-semibold">Best for</td><td className="px-3 py-2">Considered purchases, B2B</td><td className="px-3 py-2">Time-sensitive promos</td><td className="px-3 py-2">Conversational sales</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold">When <Link to="/email-marketing" className="text-accent underline underline-offset-2 hover:no-underline">email marketing</Link> wins</h2>
            <p className="text-muted-foreground leading-relaxed">Considered purchases (real estate, education, B2B, hotels, finance), monthly newsletters, package launches and long-form storytelling. Email gives you the deepest segmentation and the lowest cost per qualified lead in nearly every B2B category.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold">When <Link to="/sms-marketing" className="text-accent underline underline-offset-2 hover:no-underline">SMS marketing</Link> wins</h2>
            <p className="text-muted-foreground leading-relaxed">Flash sales, limited-time offers, appointment reminders, OTP and transactional alerts, and any message that needs to be read within minutes. SMS still owns the highest open rate of any digital channel in Sri Lanka.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold">When <Link to="/whatsapp-marketing" className="text-accent underline underline-offset-2 hover:no-underline">WhatsApp marketing</Link> wins</h2>
            <p className="text-muted-foreground leading-relaxed">Two-way sales conversations, product catalogues with images and video, customer support, abandoned-cart recovery and rich media campaigns. WhatsApp is uniquely suited to Sri Lanka — where it has become the default messaging app for personal and business communication alike.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold">The winning play: combine all three</h2>
            <p className="text-muted-foreground leading-relaxed">In Buzz Connect's data, a coordinated email → SMS → WhatsApp sequence beats any single channel by 2–3x on cost per lead. Send the long-form pitch by email, follow up with an SMS reminder 48 hours later, then move warm responders into a WhatsApp sales conversation. This is exactly how the leading <Link to="/marketing-agencies-sri-lanka" className="text-accent font-semibold underline underline-offset-2 hover:no-underline">marketing agencies in Sri Lanka</Link> are running their highest-ROI campaigns in 2026.</p>
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
          <RelatedArticles currentPath="/email-vs-sms-vs-whatsapp-marketing-sri-lanka" />
        </div>
      </article>
    </div>
  );
};

export default EmailVsSmsVsWhatsApp;
