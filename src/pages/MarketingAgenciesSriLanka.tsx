import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail, MessageSquare, Smartphone, Search, Share2, Target, Globe, Palette,
  Monitor, ArrowRight, PhoneCall, Users, Award, Zap, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/home/ContactSection";
import LogoCarousel from "@/components/home/LogoCarousel";

const WA_NUMBER = "94771437707";
const SERVICE = "Digital Marketing";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20Buzz%20Connect%2C%20I%27m%20looking%20for%20a%20marketing%20agency%20in%20Sri%20Lanka`;

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "1,500+", label: "Clients Served" },
  { value: "350K+", label: "Email Database" },
  { value: "20,000+", label: "Campaigns Delivered" },
  { value: "12+", label: "Industries Covered" },
];

const services = [
  { icon: Mail, title: "Email Marketing Agency", desc: "Full-service email marketing with copy, design, segmentation and sending — backed by Sri Lanka's largest opt-in email database of 350,000+ contacts.", to: "/email-marketing" },
  { icon: Smartphone, title: "SMS Marketing Agency", desc: "Bulk SMS strategy, list targeting, copywriting and instant delivery to 600,000+ verified Sri Lankan mobile numbers — perfect for time-sensitive promotions.", to: "/sms-marketing" },
  { icon: MessageSquare, title: "WhatsApp Marketing Agency", desc: "Conversational WhatsApp campaigns with rich media — images, videos, catalogues — to drive sales conversations on Sri Lanka's most-used messaging app.", to: "/whatsapp-marketing" },
  { icon: Search, title: "SEO Agency Sri Lanka", desc: "Technical SEO, on-page optimisation, content strategy and link building tuned for the Sri Lankan search market — get on Page 1 of Google for the keywords that matter.", to: "/seo-sri-lanka" },
  { icon: Share2, title: "Social Media Agency", desc: "Facebook, Instagram, TikTok and LinkedIn — content calendars, paid ads, community management and reporting that turns followers into paying customers.", to: "/social-media-marketing-sri-lanka" },
  { icon: Target, title: "Lead Generation Agency", desc: "Multi-channel lead generation campaigns delivering sales-ready leads to your team — combining email, SMS, WhatsApp, social and landing pages at unbeatable cost per lead.", to: "/lead-generation-sri-lanka" },
  { icon: Monitor, title: "Web Design Agency", desc: "Conversion-focused, mobile-first websites built to rank in Google and turn visitors into leads — fully integrated with your campaigns.", to: "/website-design-sri-lanka" },
  { icon: Palette, title: "Creative & Design Agency", desc: "E-flyers, social creatives, animated explainer videos, brand identity and full marketing collateral produced by an in-house creative team.", to: "/graphic-designing-in-sri-lanka" },
  { icon: Globe, title: "Online Advertising Agency", desc: "Google Ads, web banner placements and discount coupon campaigns across Sri Lanka's largest online networks — including Findit.lk.", to: "/online-advertising-sri-lanka" },
];

const reasons = [
  { icon: Award, title: "Decade-Long Track Record", desc: "Founded in 2014, Buzz Connect is one of the longest-running and most experienced marketing agencies in Sri Lanka — 1,500+ clients and 20,000+ campaigns delivered." },
  { icon: Users, title: "Proprietary Audience Network", desc: "350,000+ verified emails, 600,000+ SMS numbers and 200,000+ WhatsApp users — a permission-based audience built over 10 years that no other Sri Lankan agency owns." },
  { icon: Zap, title: "Full-Service Under One Roof", desc: "Strategy, creative, copy, media buying, SEO, social, email, SMS, WhatsApp and reporting — handled by one integrated team. No more juggling five different vendors." },
  { icon: ShieldCheck, title: "Transparent, ROI-Focused Reporting", desc: "Real-time dashboards on opens, clicks, leads and revenue — you always know exactly what every rupee of marketing spend is delivering." },
];

const agencyTypes = [
  { title: "Full-Service Digital Agency", desc: "Handles every digital channel — SEO, social, email, SMS, WhatsApp, paid ads, web — under one roof. Best for businesses that want one strategic partner." },
  { title: "Specialist Agency", desc: "Focuses on a single channel like SEO-only or social-only. Useful for businesses with a single, narrow objective and existing in-house teams." },
  { title: "Creative & Branding Agency", desc: "Specialises in brand identity, design and storytelling — strong on creative output, lighter on performance media buying and analytics." },
  { title: "Media Buying Agency", desc: "Focused on paid ad placements (Google, Meta, programmatic). Strong on reach and performance, lighter on organic content and CRM channels." },
  { title: "Lead Generation Agency", desc: "Focused entirely on producing qualified sales leads through multi-channel funnels. Best for B2B and high-ticket B2C." },
];

const steps = [
  { title: "Free Discovery Call", desc: "We learn about your business, audience, goals and budget — no commitment, no jargon, just an honest assessment of how we can help." },
  { title: "Strategy & Channel Mix", desc: "We propose the right mix of channels, audience targeting and campaign formats for your industry — with clear pricing and projected outcomes." },
  { title: "Creative & Campaign Build", desc: "Our in-house team produces the copy, design, segmentation and tracking. Everything is presented for your approval before launch." },
  { title: "Launch, Measure, Optimise", desc: "Campaigns go live within 24–72 hours of approval. We track performance daily, optimise continuously and report transparently." },
];

const industries = [
  "Hotels & Tourism", "Restaurants & Cafes", "Real Estate", "Fashion & Retail",
  "Finance & Banking", "Education", "Events & Conferences", "Healthcare",
  "Automotive", "Staff Recruitment", "E-Commerce", "Construction",
];

const checklist = [
  "10+ years of verifiable experience and 1,000+ clients served",
  "An in-house team — strategy, creative, media and analytics under one roof",
  "Proprietary audience database (not just rented Facebook traffic)",
  "Multi-channel capability across email, SMS, WhatsApp, SEO and social",
  "Transparent, ROI-focused reporting with real numbers — not vanity metrics",
  "Industry experience in your specific sector (hospitality, real estate, etc.)",
  "Clear pricing, written proposals and signed scope of work",
  "Fast execution — campaigns live within 72 hours, not 6 weeks",
];

const faqs = [
  { q: "What are the best marketing agencies in Sri Lanka?", a: "Buzz Connect is consistently rated among the best marketing agencies in Sri Lanka, with 10+ years of experience, 1,500+ satisfied clients and Sri Lanka's largest proprietary marketing database. We are a full-service agency covering email, SMS, WhatsApp, SEO, social media, lead generation, website design and creative — all under one roof." },
  { q: "How much do marketing agencies in Sri Lanka charge?", a: "Pricing varies by scope. Email campaigns at Buzz Connect start from LKR 15,000, SMS from LKR 10,000, SEO retainers from LKR 40,000–150,000 per month, and full-service multi-channel packages are tailored to your goals. We offer a free consultation so you only pay for what you actually need." },
  { q: "What does a marketing agency actually do?", a: "A marketing agency plans, builds and runs campaigns to bring your business more customers. That includes strategy, audience research, creative production (copy, design, video), media buying (Google Ads, Meta), organic channels (SEO, social), CRM channels (email, SMS, WhatsApp), reporting and continuous optimisation." },
  { q: "Should I hire a freelancer or a marketing agency in Sri Lanka?", a: "A freelancer is fine for a single, narrow task — like writing a few blog posts. But for any campaign that needs strategy, multiple channels, creative production and consistent reporting, an agency like Buzz Connect delivers far better results because you get a full team — strategist, designer, copywriter, media buyer and account manager — for less than the cost of a single senior in-house hire." },
  { q: "How do I choose the right marketing agency for my business?", a: "Look for verifiable experience (years in business, client list, case studies), a proprietary database or audience network, multi-channel capability, transparent pricing and reporting, and industry experience in your sector. Avoid agencies that promise guaranteed rankings or refuse to share past results." },
  { q: "How long until a marketing agency delivers results?", a: "Email, SMS and WhatsApp campaigns typically generate inquiries within 24–72 hours of launch. Paid social and Google Ads produce measurable results within days. SEO is a longer commitment — meaningful ranking improvements within 3–6 months and significant traffic growth within 6–12 months." },
  { q: "Is Buzz Connect a full-service marketing agency?", a: "Yes. Buzz Connect is a full-service marketing agency in Sri Lanka covering strategy, creative, SEO, social media, email, SMS, WhatsApp, lead generation, website design, graphic design and online advertising — all delivered by one integrated team, so you do not have to coordinate multiple vendors." },
  { q: "Where is Buzz Connect located?", a: "Buzz Connect is headquartered in Colombo, Sri Lanka, and serves clients across the entire country — Colombo, Kandy, Galle, Jaffna, Negombo and beyond. Our digital-first model means we deliver the same quality of service nationwide." },
];

const internalLinks = [
  { to: "/digital-marketing-companies-sri-lanka", label: "Digital Marketing Companies in Sri Lanka" },
  { to: "/email-marketing", label: "Email Marketing Sri Lanka" },
  { to: "/sms-marketing", label: "SMS Marketing Sri Lanka" },
  { to: "/whatsapp-marketing", label: "WhatsApp Marketing" },
  { to: "/seo-sri-lanka", label: "SEO Services Sri Lanka" },
  { to: "/social-media-marketing-sri-lanka", label: "Social Media Marketing" },
  { to: "/lead-generation-sri-lanka", label: "Lead Generation" },
  { to: "/website-design-sri-lanka", label: "Website Design" },
  { to: "/graphic-designing-in-sri-lanka", label: "Graphic Design" },
  { to: "/online-advertising-sri-lanka", label: "Online Advertising" },
  { to: "/best-digital-marketing-agency-sri-lanka", label: "Best Digital Marketing Agency" },
  { to: "/best-advertising-company-sri-lanka", label: "Best Advertising Company" },
  { to: "/contact-us", label: "Contact Us" },
];

const MarketingAgenciesSriLanka = () => {
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
        title="Marketing Agencies in Sri Lanka | #1 Buzz Connect Agency"
        description="Looking for the best marketing agencies in Sri Lanka? Buzz Connect is a full-service agency offering email, SMS, WhatsApp, SEO, social media & lead generation — 10+ years, 1,500+ clients."
        canonical="/marketing-agencies-sri-lanka"
        keywords="marketing agencies in sri lanka, marketing agency sri lanka, best marketing agency sri lanka, full service marketing agency colombo, top marketing companies sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Marketing Agencies in Sri Lanka", url: "/marketing-agencies-sri-lanka" },
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
              Sri Lanka's #1 Full-Service Marketing Agency
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              The Top Marketing <span className="text-accent">Agencies in Sri Lanka</span> — Led by Buzz Connect
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-8">
              Buzz Connect is the full-service marketing agency Sri Lankan businesses trust to grow — strategy, creative, SEO, social, email, SMS, WhatsApp and lead generation, all delivered by one integrated team since 2014.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact-us">
                <Button variant="hero" size="lg">
                  Get a Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
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
            What Do <span className="text-accent">Marketing Agencies in Sri Lanka</span> Actually Do?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>A marketing agency is a team of strategists, creatives, copywriters, media buyers and analysts who plan and run the campaigns that grow your business. In Sri Lanka, the strongest agencies combine deep local market knowledge with global digital marketing best practice — and the very best of them, like Buzz Connect, also bring proprietary audience databases that no individual freelancer or in-house team could ever build.</p>
            <p>The right marketing agency does three things for you: it brings <strong>strategy</strong> (where to play and how to win), <strong>execution capability</strong> (the people, tools and channels to deliver), and <strong>accountability</strong> (transparent reporting on what every rupee delivered). Hiring a strong agency is almost always cheaper, faster and more effective than building the same capability in-house — especially for small and mid-sized Sri Lankan businesses.</p>
            <p>If you are comparing options, our full breakdown of the top <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">digital marketing companies in Sri Lanka</Link> walks through how to evaluate agencies, what to ask in the first meeting and the red flags to avoid.</p>
          </div>
        </div>
      </section>

      {/* Types of Agencies */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            Types of <span className="text-accent">Marketing Agencies</span> in Sri Lanka
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {agencyTypes.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Full-Service <span className="text-accent">Marketing</span> Under One Roof
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Every channel, every creative deliverable, every reporting dashboard — handled by one integrated Buzz Connect team.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
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

      {/* Why Buzz Connect */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            Why Buzz Connect Leads the <span className="text-accent">Marketing Agencies in Sri Lanka</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <r.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist: How to choose */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            How to Choose the Right <span className="text-accent">Marketing Agency</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Use this 8-point checklist when shortlisting any marketing agency in Sri Lanka. Buzz Connect ticks every box — and we encourage you to hold every other agency to the same standard.
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
            Our 4-Step <span className="text-accent">Agency Engagement</span> Process
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
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Buzz Connect has built deep, channel-tested playbooks for 12+ industries across Sri Lanka.
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
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 text-center">Explore Our Services</h2>
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

export default MarketingAgenciesSriLanka;
