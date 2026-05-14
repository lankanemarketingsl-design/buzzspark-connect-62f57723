import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail, MessageSquare, Smartphone, Search, Share2, Target, Globe, Palette,
  Monitor, ArrowRight, PhoneCall, Megaphone, BarChart3, Tv, Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/home/ContactSection";
import LogoCarousel from "@/components/home/LogoCarousel";

const WA_NUMBER = "94771437707";
const SERVICE = "Online Advertising";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20Buzz%20Connect%2C%20I%27m%20looking%20for%20an%20advertising%20agency%20in%20Sri%20Lanka`;

const stats = [
  { value: "10+", label: "Years Advertising" },
  { value: "1,500+", label: "Clients Advertised" },
  { value: "20,000+", label: "Campaigns Run" },
  { value: "350K+", label: "Email Reach" },
  { value: "600K+", label: "SMS Reach" },
];

const adChannels = [
  { icon: Search, title: "Google Ads & Search Advertising", desc: "Capture demand the moment Sri Lankan customers search. Search, Display, Performance Max and YouTube ads — built and optimised for measurable ROI.", to: "/online-advertising-sri-lanka" },
  { icon: Share2, title: "Social Media Advertising", desc: "Facebook, Instagram, TikTok and LinkedIn paid campaigns — creative, targeting, A/B testing and reporting that scale spend profitably.", to: "/social-media-marketing-sri-lanka" },
  { icon: Mail, title: "Email Advertising", desc: "Sponsored email blasts to 350,000+ verified Sri Lankan inboxes — segmented by industry, location and behaviour for precise reach.", to: "/email-marketing" },
  { icon: Smartphone, title: "SMS Advertising", desc: "Bulk SMS campaigns to 600,000+ verified Sri Lankan mobile numbers — 98% open rates, instant delivery, perfect for promotions.", to: "/sms-marketing" },
  { icon: MessageSquare, title: "WhatsApp Advertising", desc: "Promotional broadcasts and click-to-WhatsApp ads that turn passive viewers into active sales conversations.", to: "/whatsapp-marketing" },
  { icon: Globe, title: "Web Banner & Display Advertising", desc: "Banner placements across Sri Lanka's largest online networks — including exclusive inventory on Findit.lk.", to: "/web-banner-advertising-sri-lanka" },
  { icon: Target, title: "Lead Generation Advertising", desc: "Performance-based advertising funnels engineered for cost-per-lead, not impressions or clicks. Pure pipeline focus.", to: "/lead-generation-sri-lanka" },
  { icon: Palette, title: "Creative & Ad Production", desc: "In-house copy, design, video and motion graphics. Every ad creative is produced specifically for the channel and audience.", to: "/graphic-designing-in-sri-lanka" },
  { icon: Monitor, title: "Landing Page Design", desc: "Conversion-focused landing pages built for paid traffic — fast, mobile-first and optimised to turn ad clicks into customers.", to: "/website-design-sri-lanka" },
];

const adTypes = [
  { icon: Megaphone, title: "Brand Awareness Advertising", desc: "Build top-of-mind recall in your category. Reach-focused campaigns across display, video and social to scale brand recognition." },
  { icon: Target, title: "Performance & Direct-Response", desc: "Campaigns optimised for measurable outcomes — leads, sales, app installs, calls. Every rupee tracked to a result." },
  { icon: BarChart3, title: "Retargeting & Remarketing", desc: "Bring back website visitors and abandoned carts with personalised follow-up ads across Google, Meta and email." },
  { icon: Tv, title: "Video & YouTube Advertising", desc: "Skippable, non-skippable and bumper ads on YouTube, plus social video on TikTok, Reels and Facebook Watch." },
  { icon: Newspaper, title: "Sponsored Content & Native Ads", desc: "Editorial-style placements that feel natural to readers — perfect for considered purchases and B2B audiences." },
  { icon: Mail, title: "Direct Response Advertising", desc: "Email + SMS + WhatsApp as paid promotion channels — instant reach to verified Sri Lankan audiences with measurable response." },
];

const reasons = [
  { title: "Owned Audience Network", desc: "Most advertising agencies just buy media on your behalf. Buzz Connect owns the audience — 350,000+ emails, 600,000+ SMS, 200,000+ WhatsApp users — so you advertise directly to a verified Sri Lankan audience." },
  { title: "10+ Years of Media Buying", desc: "Since 2014 we have planned, bought and optimised over 20,000 campaigns across every major channel — search, social, display, video, email, SMS and WhatsApp." },
  { title: "Findit.lk Exclusive Inventory", desc: "Buzz Connect is the exclusive partner for advertising on Findit.lk — one of Sri Lanka's leading promotion platforms — giving clients reach unavailable through any other agency." },
  { title: "Creative + Media in One Team", desc: "No more separate creative agency and media agency. We produce the ads and we run them — so creative is always optimised for the channel and the channel always has the right creative." },
  { title: "Transparent Pricing & Reporting", desc: "Clear media plans, no markup games and real-time dashboards on impressions, clicks, CPL and ROAS. You always know exactly where your advertising spend went." },
  { title: "Multi-Channel Coordination", desc: "Search + social + email + SMS + WhatsApp campaigns timed to reinforce each other — the lift from coordinated multi-channel advertising routinely beats single-channel by 2–3x." },
];

const steps = [
  { title: "Brief & Objectives", desc: "We define the campaign goal — leads, sales, awareness, traffic — and the audience, budget and timeline." },
  { title: "Media Plan & Creative", desc: "We build the channel mix, creative direction and targeting plan, then present everything for approval before a rupee is spent." },
  { title: "Launch & Optimise", desc: "Campaigns go live within 48–72 hours. We monitor daily, kill underperformers, scale winners and refresh creatives weekly." },
  { title: "Report & Scale", desc: "Transparent weekly reports on every metric. Once a campaign is profitable, we scale spend systematically to maximise ROI." },
];

const industries = [
  "Hotels & Tourism", "Restaurants & Cafes", "Real Estate", "Fashion & Retail",
  "Finance & Banking", "Education", "Events & Conferences", "Healthcare",
  "Automotive", "Staff Recruitment", "E-Commerce", "Construction",
];

const checklist = [
  "Verifiable case studies with real ROI numbers (not just impressions)",
  "Owned audience or proprietary inventory — not just rented Facebook traffic",
  "In-house creative team — copy, design and video under one roof",
  "Multi-channel capability across search, social, display and direct response",
  "Transparent media buying with no hidden markups on ad spend",
  "Real-time reporting dashboards — not just monthly PDF decks",
  "Industry experience in your specific sector",
  "Fast launch turnaround — campaigns live in 48–72 hours, not 4–6 weeks",
];

const faqs = [
  { q: "What are the best advertising agencies in Sri Lanka?", a: "Buzz Connect is one of the most established advertising agencies in Sri Lanka, with 10+ years of experience, 1,500+ clients and 20,000+ campaigns delivered. Our edge is that we own a proprietary audience network — 350,000+ emails and 600,000+ SMS contacts — which means we don't just buy media, we deliver a verified Sri Lankan audience directly." },
  { q: "How much do advertising agencies charge in Sri Lanka?", a: "Most Sri Lankan advertising agencies charge a management fee of 15–25% of media spend, plus creative production fees. Buzz Connect's email advertising starts from LKR 15,000 per campaign, SMS from LKR 10,000, and full multi-channel paid campaigns are scoped to your budget. We always provide transparent pricing — no hidden markups on ad spend." },
  { q: "What is the difference between an advertising agency and a marketing agency?", a: "A marketing agency handles the full marketing function — strategy, branding, content, SEO, CRM and advertising. An advertising agency focuses specifically on paid media — planning, buying and optimising ads across search, social, display, video and direct response. Buzz Connect operates as both: we are a full marketing agency that also has a strong dedicated advertising team." },
  { q: "Which advertising channels work best in Sri Lanka?", a: "It depends on your goal. For instant response and promotions, SMS, WhatsApp and email perform exceptionally well in Sri Lanka. For brand building and demand generation, Facebook, Instagram, TikTok and YouTube dominate. For high-intent capture, Google Ads is the strongest. The best campaigns combine 2–3 channels — Buzz Connect will recommend the right mix for your business." },
  { q: "How long does it take to see results from advertising?", a: "Direct-response channels — email, SMS, WhatsApp, Google Search Ads — generate measurable response within 24–72 hours of campaign launch. Social and display ads typically need 7–14 days to optimise toward profitable cost-per-lead. Brand campaigns are measured over months, not days." },
  { q: "Can a small business afford a Sri Lankan advertising agency?", a: "Yes. Buzz Connect works with small businesses regularly — campaigns can start from LKR 10,000–25,000 and still generate meaningful results because of our owned audience network. You don't need a massive budget; you need the right channel and the right targeting." },
  { q: "Does Buzz Connect handle traditional advertising (TV, print, radio)?", a: "Buzz Connect specialises in digital advertising and direct-response channels — Google, Meta, TikTok, YouTube, email, SMS, WhatsApp and online display. We do not buy traditional TV, print or radio inventory directly, but our digital campaigns are designed to amplify any offline activity you run." },
  { q: "How do I get started with Buzz Connect for advertising?", a: "Contact us through the website form, WhatsApp +94 77 143 7707 or visit our Colombo office. We start with a free strategy call to understand your goals and budget, then deliver a written media plan with channel mix, creative concepts and projected results within 48 hours." },
];

const internalLinks = [
  { to: "/digital-marketing-companies-sri-lanka", label: "Digital Marketing Companies in Sri Lanka" },
  { to: "/marketing-agencies-sri-lanka", label: "Marketing Agencies in Sri Lanka" },
  { to: "/online-advertising-sri-lanka", label: "Online Advertising" },
  { to: "/advertising-sri-lanka", label: "Advertising in Sri Lanka" },
  { to: "/web-banner-advertising-sri-lanka", label: "Web Banner Advertising" },
  { to: "/social-media-marketing-sri-lanka", label: "Social Media Marketing" },
  { to: "/email-marketing", label: "Email Marketing" },
  { to: "/sms-marketing", label: "SMS Marketing" },
  { to: "/whatsapp-marketing", label: "WhatsApp Marketing" },
  { to: "/lead-generation-sri-lanka", label: "Lead Generation" },
  { to: "/best-advertising-company-sri-lanka", label: "Best Advertising Company" },
  { to: "/best-google-ads-agency-sri-lanka", label: "Best Google Ads Agency" },
  { to: "/contact-us", label: "Contact Us" },
];

const AdvertisingAgenciesSriLanka = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="pt-14 sm:pt-16">
      <SEOHead
        title="Advertising Agencies in Sri Lanka | #1 Buzz Connect"
        description="Looking for the best advertising agencies in Sri Lanka? Buzz Connect runs Google Ads, social ads, email, SMS, WhatsApp & display campaigns — 10+ years, 20,000+ campaigns, transparent ROI."
        canonical="/advertising-agencies-sri-lanka"
        keywords="advertising agencies in sri lanka, advertising agency sri lanka, best advertising agency colombo, top ad agencies sri lanka, paid advertising sri lanka, google ads agency sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Advertising Agencies in Sri Lanka", url: "/advertising-agencies-sri-lanka" },
        ]}
        jsonLd={[faqJsonLd]}
      />

      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/15 text-accent border border-accent/30 mb-4">
              Sri Lanka's #1 Advertising Agency
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              The Top Advertising <span className="text-accent">Agencies in Sri Lanka</span> — Powered by Buzz Connect
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-8">
              Buzz Connect is the advertising agency Sri Lankan businesses trust to plan, buy and optimise paid campaigns across Google, Meta, TikTok, YouTube, email, SMS and WhatsApp — with a decade of experience and Sri Lanka's largest owned audience network.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact-us">
                <Button variant="hero" size="lg">
                  Get a Free Media Plan <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a data-selected-service={SERVICE} href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg">
                  <PhoneCall className="mr-2 w-4 h-4" /> Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-accent-foreground">{s.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-accent-foreground/80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What <span className="text-accent">Advertising Agencies in Sri Lanka</span> Actually Do
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>An advertising agency plans your media strategy, produces the ad creative, buys the placements and optimises everything toward a measurable business outcome — leads, sales, calls, app installs or brand reach. The strongest advertising agencies in Sri Lanka combine media buying expertise with in-house creative production, so the ads, the targeting and the channel all work together.</p>
            <p>Buzz Connect has been running paid campaigns for Sri Lankan businesses since 2014 — over 20,000 campaigns across every major channel. What sets us apart is that we don't just buy media on rented platforms. We own one of the largest verified audience networks in Sri Lanka — 350,000+ email contacts, 600,000+ SMS numbers and 200,000+ WhatsApp users — which means we can deliver direct-response advertising at a fraction of the cost of pure platform media buying.</p>
            <p>Comparing options? See our companion guides on the top <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">digital marketing companies in Sri Lanka</Link> and the leading <Link to="/marketing-agencies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">marketing agencies in Sri Lanka</Link> for the wider context on how to choose.</p>
          </div>
        </div>
      </section>

      {/* Ad Channels */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Every <span className="text-accent">Advertising Channel</span> Sri Lankan Businesses Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From Google Search to WhatsApp broadcasts — one team, one media plan, one performance dashboard.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {adChannels.map((s) => (
              <Link key={s.title} to={s.to} className="group p-6 rounded-2xl bg-card border border-border hover:border-accent shadow-card hover:shadow-elegant transition-all">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20">
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-accent">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Types */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            Types of <span className="text-accent">Advertising Campaigns</span> We Run
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {adTypes.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <a.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buzz Connect */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            Why Buzz Connect Leads the <span className="text-accent">Advertising Agencies in Sri Lanka</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            How to Choose the Right <span className="text-accent">Advertising Agency</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            An 8-point checklist for evaluating any advertising agency in Sri Lanka — Buzz Connect ticks every box.
          </p>
          <ul className="space-y-3">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground font-bold text-xs flex items-center justify-center">{i + 1}</span>
                <span className="text-foreground text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            Our 4-Step <span className="text-accent">Advertising Process</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={s.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground font-extrabold flex items-center justify-center mb-3">{i + 1}</div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
            Industries We Advertise For
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Industry-tested advertising playbooks for 12+ verticals across Sri Lanka.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/30">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* FAQs */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5 rounded-xl bg-card border border-border">
                <summary className="font-heading text-base font-bold text-foreground cursor-pointer list-none flex items-start justify-between gap-3">
                  <span>{f.q}</span>
                  <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-1 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 text-center">Explore Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {internalLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-border bg-muted/30 hover:bg-accent/10 hover:border-accent hover:text-accent text-muted-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default AdvertisingAgenciesSriLanka;
