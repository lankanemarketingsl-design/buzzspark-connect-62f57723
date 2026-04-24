import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Search, Monitor, Video, ShoppingCart, RefreshCw, Sparkles,
  Zap, Target, DollarSign, TrendingUp, CheckCircle, XCircle,
  ArrowRight, Phone, MapPin, Star, Clock, Globe, BarChart3,
} from "lucide-react";

const GoogleAdsSriLanka = () => {
  const faqs = [
    {
      q: "How much does Google Ads cost in Sri Lanka?",
      a: "Google Ads budgets in Sri Lanka typically start from LKR 20,000/month for small businesses. The actual cost depends on your industry, competition for your keywords, and campaign goals. Buzz Connect offers a free consultation to help you plan the right budget for maximum ROI. Remember — you only pay per click, not per ad impression.",
    },
    {
      q: "How long does it take to see results from Google Ads in Sri Lanka?",
      a: "Google Ads can generate leads within 24–48 hours of campaign launch. However, campaigns typically reach peak performance within 30–90 days as Google's algorithm learns from real conversion data and optimises targeting and bidding accordingly.",
    },
    {
      q: "Do you manage Google Ads for businesses outside Colombo?",
      a: "Yes. Buzz Connect manages Google Ads campaigns for businesses across all provinces in Sri Lanka — including Colombo, Kandy, Galle, Jaffna, Negombo, Anuradhapura, Kurunegala, Matara, and beyond. We also run island-wide and multi-city targeting campaigns.",
    },
    {
      q: "Is Google Ads better than Facebook Ads for Sri Lankan businesses?",
      a: "They serve different purposes. Google Ads captures high-intent buyers actively searching for your product or service — ideal for lead generation. Facebook Ads is better for brand awareness and interest-based targeting. For most Sri Lankan businesses, a combination of both delivers the best results.",
    },
    {
      q: "Can you run Google Ads in Sinhala or Tamil?",
      a: "Yes. Google Ads fully supports Sinhala and Tamil language targeting. Buzz Connect can create bilingual or multilingual campaigns to reach Sinhala-speaking and Tamil-speaking audiences across Sri Lanka, with localised ad copy that resonates with each audience.",
    },
    {
      q: "Do I need a website to run Google Ads in Sri Lanka?",
      a: "Yes, for most campaign types you need a website or landing page. However, Google also offers Call-Only ads and local service ads that direct users to call your business directly without a website click. If you need a landing page built, Buzz Connect can help with that too.",
    },
    {
      q: "What is the minimum budget to start Google Ads in Sri Lanka?",
      a: "Google has no minimum budget requirement. However, we recommend starting with at least LKR 20,000–30,000/month to gather enough data for optimisation. Very small budgets (under LKR 10,000/month) often don't generate enough clicks or conversions to optimise effectively.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Buzz Connect Google Ads Sri Lanka",
      url: "https://buzzconnect.lk/google-ads-sri-lanka",
      description: "Professional Google Ads management services in Sri Lanka. Certified Google Ads experts delivering high-ROI campaigns for Sri Lankan businesses.",
      areaServed: "Sri Lanka",
      serviceType: "Google Ads Management",
      address: { "@type": "PostalAddress", addressCountry: "LK" },
      telephone: "+94771437707",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const heroStats = [
    { num: "500+", lbl: "Campaigns Managed" },
    { num: "10+", lbl: "Years Experience" },
    { num: "6M+", lbl: "Sri Lankan Audience Reached" },
    { num: "3.5×", lbl: "Average ROI for Clients" },
  ];

  const trustItems = [
    { icon: CheckCircle, text: "Google Certified Experts" },
    { icon: MapPin, text: "Local Sri Lankan Team" },
    { icon: BarChart3, text: "Transparent Reporting" },
    { icon: Zap, text: "Campaigns Live in 48 Hours" },
    { icon: Sparkles, text: "Free Account Audit" },
    { icon: Globe, text: "Sinhala & Tamil Support" },
  ];

  const whyCards = [
    { icon: Zap, title: "Instant Visibility", desc: "Your business appears at the top of Google search results within hours — no waiting months for SEO. Reach customers actively searching in Sri Lanka right now." },
    { icon: Target, title: "Precision Targeting", desc: "Target by location (Colombo, Kandy, Galle, island-wide), language (Sinhala, Tamil, English), device, time of day, and audience interests." },
    { icon: DollarSign, title: "Full Budget Control", desc: "You set the daily budget. You only pay when someone clicks. No hidden fees. Budgets can start from LKR 20,000/month and scale as you grow." },
    { icon: TrendingUp, title: "Measurable ROI", desc: "Track every click, call, and conversion. Know exactly what your ad spend is generating — down to the rupee. No guesswork, only data." },
  ];

  const services = [
    {
      icon: Search, title: "Google Search Ads",
      desc: "Appear at the top of Google when Sri Lankans search for your products or services. Capture high-intent buyers at the perfect moment.",
      bullets: ["Keyword research & competitor analysis", "Compelling, high-CTR ad copy", "Exact, phrase & broad match strategy", "Negative keyword management", "Quality Score optimisation"],
    },
    {
      icon: Monitor, title: "Google Display Ads",
      desc: "Build brand awareness across 2 million+ websites and apps on Google's Display Network. Ideal for visual products and brand recall.",
      bullets: ["Banner & responsive display ads", "Audience & interest targeting", "Sri Lanka geo-targeting", "Creative design support", "Frequency capping"],
    },
    {
      icon: Video, title: "YouTube Video Ads",
      desc: "Reach Sri Lankan audiences on YouTube — the #1 video platform. Video ads build trust and drive awareness at a fraction of traditional TV costs.",
      bullets: ["TrueView in-stream ads", "Bumper & discovery ads", "Demographic & interest targeting", "Video performance tracking", "Script & concept guidance"],
    },
    {
      icon: ShoppingCart, title: "Google Shopping Ads",
      desc: "Showcase your products visually with price and image directly in Google Search. Perfect for e-commerce businesses in Sri Lanka.",
      bullets: ["Google Merchant Center setup", "Product feed optimisation", "Smart Shopping campaigns", "ROAS-based bidding", "Competitive price monitoring"],
    },
    {
      icon: RefreshCw, title: "Remarketing Campaigns",
      desc: "Re-engage visitors who left your website without converting. Remarketing keeps your brand top-of-mind and dramatically improves conversion rates.",
      bullets: ["Website visitor remarketing", "Cart abandonment targeting", "Dynamic remarketing ads", "Custom audience lists", "Cross-device tracking"],
    },
    {
      icon: Sparkles, title: "Performance Max (PMax)",
      desc: "Google's latest AI-powered campaign type. A single campaign that runs across Search, Display, YouTube, Gmail, and Maps for maximum reach.",
      bullets: ["AI-driven asset optimisation", "Audience signal configuration", "Cross-channel performance", "Automated bidding strategy", "Conversion-focused goals"],
    },
  ];

  const processSteps = [
    { n: 1, title: "Free Consultation", desc: "We understand your business, goals, and target audience in Sri Lanka." },
    { n: 2, title: "Research & Strategy", desc: "Keyword research, competitor analysis, and full campaign strategy." },
    { n: 3, title: "Campaign Build", desc: "We set up your account, ads, targeting, and conversion tracking." },
    { n: 4, title: "Launch & Optimise", desc: "Campaigns go live. We optimise daily for maximum performance." },
    { n: 5, title: "Report & Scale", desc: "Monthly reports with clear ROI. Scale what works, cut what doesn't." },
  ];

  const results = [
    { num: "3.5×", label: "Average return on ad spend for our clients" },
    { num: "48h", label: "Typical time from sign-up to campaign going live" },
    { num: "40%", label: "Average reduction in cost-per-lead after 90 days" },
    { num: "500+", label: "Google Ads campaigns managed across Sri Lanka" },
  ];

  const industries = [
    { emoji: "🏡", name: "Real Estate" },
    { emoji: "🏥", name: "Healthcare & Clinics" },
    { emoji: "🎓", name: "Education & Tuition" },
    { emoji: "🛍️", name: "E-Commerce" },
    { emoji: "🏨", name: "Hotels & Tourism" },
    { emoji: "🚗", name: "Automotive" },
    { emoji: "⚖️", name: "Legal Services" },
    { emoji: "💆", name: "Beauty & Wellness" },
    { emoji: "🍽️", name: "Restaurants & Food" },
    { emoji: "🔧", name: "Home Services" },
    { emoji: "💻", name: "IT & Software" },
    { emoji: "📦", name: "Retail & FMCG" },
  ];

  const compareRows = [
    { f: "Captures active buyers", g: { ok: true, t: "High intent" }, fb: { ok: false, t: "Interest-based" }, seo: { ok: true, t: "Organic intent" }, tv: { ok: false, t: "Passive" } },
    { f: "Speed to results", g: { ok: true, t: "24–48 hours" }, fb: { ok: true, t: "24–48 hours" }, seo: { ok: false, t: "3–12 months" }, tv: { ok: false, t: "Weeks to plan" } },
    { f: "Budget flexibility", g: { ok: true, t: "Any budget" }, fb: { ok: true, t: "Any budget" }, seo: { ok: true, t: "Low monthly" }, tv: { ok: false, t: "High fixed cost" } },
    { f: "Measurable ROI", g: { ok: true, t: "Full tracking" }, fb: { ok: true, t: "Good tracking" }, seo: { ok: true, t: "Trackable" }, tv: { ok: false, t: "Hard to measure" } },
    { f: "Sinhala/Tamil targeting", g: { ok: true, t: "Yes" }, fb: { ok: true, t: "Yes" }, seo: { ok: true, t: "Yes" }, tv: { ok: true, t: "Yes" } },
    { f: "Best for", g: { ok: true, t: "Lead gen & sales" }, fb: { ok: true, t: "Brand awareness" }, seo: { ok: true, t: "Long-term growth" }, tv: { ok: true, t: "Mass awareness" } },
  ];

  const testimonials = [
    { quote: "Buzz Connect set up our Google Ads campaign within two days and we had our first qualified leads the same week. Our cost per lead dropped by almost half within three months.", author: "General Manager, Real Estate Company, Colombo 7" },
    { quote: "We were wasting money on Google Ads before Buzz Connect took over. They restructured everything, and now we're getting 4× more enquiries for the same budget. Excellent team.", author: "Owner, Private Clinic, Kandy" },
    { quote: "The monthly reports are clear and detailed — I can see exactly where every rupee is going. Our online course enrolments doubled in three months of working with Buzz Connect.", author: "Director, Educational Institute, Nugegoda" },
  ];

  const locations = [
    { emoji: "🌆", city: "Colombo", detail: "All districts & suburbs" },
    { emoji: "🏔️", city: "Kandy", detail: "Central Province" },
    { emoji: "🌊", city: "Galle", detail: "Southern Province" },
    { emoji: "🏝️", city: "Negombo", detail: "Western Province" },
    { emoji: "🌿", city: "Kurunegala", detail: "North Western Province" },
    { emoji: "🏙️", city: "Jaffna", detail: "Northern Province" },
    { emoji: "🌾", city: "Anuradhapura", detail: "North Central Province" },
    { emoji: "🗺️", city: "Island-Wide", detail: "All 25 districts" },
  ];

  return (
    <ServicePageLayout
      badge="🏆 Certified Google Ads Partner — Sri Lanka"
      title="Google Ads Sri Lanka — Leads That Actually Convert"
      subtitle="Sri Lanka's experienced Google Ads agency. We build and manage search, display, shopping, and YouTube campaigns that drive real revenue — not just clicks."
    >
      <SEOHead
        title="Google Ads Sri Lanka | PPC Advertising Services 2026 | Buzz Connect"
        description="Professional Google Ads management in Sri Lanka. Get instant leads with search, display, YouTube & shopping ads. Certified experts. Free consultation. High ROI campaigns."
        canonical="/google-ads-sri-lanka"
        keywords="Google Ads Sri Lanka, Google AdWords Sri Lanka, PPC Sri Lanka, Google Ads agency Sri Lanka, Google Ads management Sri Lanka, paid search Sri Lanka, Colombo Google Ads"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Google Ads Sri Lanka", url: "/google-ads-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-6xl mx-auto">
        {/* Hero Stats */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroStats.map((s) => (
              <div key={s.lbl} className="p-5 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 text-center">
                <div className="font-heading text-3xl font-extrabold text-foreground">{s.num}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.lbl}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Trust Bar */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 p-5 rounded-2xl bg-secondary/40 border border-border">
            {trustItems.map((t) => (
              <div key={t.text} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <t.icon className="w-4 h-4 text-accent" />
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why Google Ads */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">Why Google Ads</span>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Why Sri Lankan Businesses Choose Google Ads</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Google is where your customers are searching right now. Google Ads puts your business in front of them at the exact moment they're ready to buy.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Services */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">Our Services</span>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Google Ads Services We Offer in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            From search to shopping, we manage every type of Google Ads campaign to grow your business across Sri Lanka and beyond.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border-t-4 border-t-accent border border-border bg-card hover:shadow-xl transition-shadow">
                <s.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">Our Process</span>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-3">How We Run Google Ads Campaigns in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">A proven, step-by-step approach that gets your campaign live fast and profitable quickly.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((s) => (
              <div key={s.n} className="text-center p-5 rounded-2xl bg-secondary/30 border border-border">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-heading font-extrabold text-lg flex items-center justify-center mx-auto mb-3">
                  {s.n}
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2 text-sm">{s.title}</h4>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="p-8 md:p-12 rounded-3xl gradient-hero text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-xs font-bold uppercase tracking-wider mb-3">Results</span>
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-8">Results We Deliver for Sri Lankan Businesses</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((r) => (
                <div key={r.label}>
                  <div className="font-heading text-5xl font-extrabold text-primary-foreground mb-2">{r.num}</div>
                  <p className="text-sm text-primary-foreground/80">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Industries */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">Industries</span>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Industries We Serve with Google Ads in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            We have managed Google Ads campaigns across a wide range of industries throughout Sri Lanka, from Colombo to regional markets.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {industries.map((i) => (
              <div key={i.name} className="p-4 rounded-xl border border-border bg-card text-center hover:border-accent hover:bg-accent/5 transition-colors">
                <div className="text-2xl mb-1">{i.emoji}</div>
                <div className="text-sm font-semibold text-foreground">{i.name}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Comparison Table */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">Comparison</span>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Google Ads vs Other Advertising Channels in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">An honest comparison for Sri Lankan businesses choosing their advertising channels.</p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent text-accent-foreground">
                  <th className="text-left p-4 font-bold">Feature</th>
                  <th className="text-left p-4 font-bold">Google Ads</th>
                  <th className="text-left p-4 font-bold">Facebook / Meta Ads</th>
                  <th className="text-left p-4 font-bold">SEO</th>
                  <th className="text-left p-4 font-bold">TV / Print</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.f} className={i % 2 === 0 ? "bg-card" : "bg-secondary/30"}>
                    <td className="p-4 font-semibold text-foreground">{row.f}</td>
                    {[row.g, row.fb, row.seo, row.tv].map((cell, j) => (
                      <td key={j} className="p-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          {cell.ok ? <CheckCircle className="w-4 h-4 text-accent shrink-0" /> : <XCircle className="w-4 h-4 text-destructive shrink-0" />}
                          <span>{cell.t}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            💡 <strong>Pro tip:</strong> For most Sri Lankan businesses, combining Google Ads (for immediate leads) with{" "}
            <Link to="/seo-services-sri-lanka" className="text-accent hover:underline font-semibold">SEO</Link> (for long-term traffic) delivers the best overall results.
          </p>
        </motion.section>

        {/* Testimonials */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">Client Reviews</span>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">What Sri Lankan Businesses Say About Buzz Connect</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm italic text-muted-foreground mb-4">"{t.quote}"</p>
                <p className="text-xs font-bold text-foreground">— {t.author}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Locations */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">Coverage</span>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Google Ads Management Across Sri Lanka</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            We run geo-targeted Google Ads campaigns for businesses in every major city and province in Sri Lanka — from Colombo to Jaffna.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {locations.map((l) => (
              <div key={l.city} className="p-4 rounded-xl border border-border bg-card text-center hover:border-accent transition-colors">
                <div className="text-2xl mb-1">{l.emoji}</div>
                <div className="font-bold text-foreground text-sm">{l.city}</div>
                <div className="text-xs text-muted-foreground mt-1">{l.detail}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Long-form SEO Content */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">Complete Guide</span>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Complete Guide to Google Ads in Sri Lanka (2026)</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Google Ads — formerly known as Google AdWords — is the most powerful paid advertising platform available to businesses in Sri Lanka today. With over 6 million internet users in Sri Lanka and Google commanding over 95% of the local search market, Google Ads gives your business unparalleled access to customers who are actively searching for what you offer.
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground mt-6 mb-2">What Are Google Ads and How Do They Work in Sri Lanka?</h3>
            <p>
              Google Ads is a pay-per-click (PPC) advertising platform. Businesses bid on keywords related to their products and services. When a Sri Lankan user types a matching search query into Google, your ad appears at the top of the search results page — marked with "Sponsored." You only pay when the user actually clicks your ad.
            </p>
            <p>
              For example, if you run a dental clinic in Colombo and a user searches "dentist in Colombo," your Google Search Ad can appear at the very top — above all organic results. This instant visibility is why Google Ads is so powerful for Sri Lankan businesses looking for immediate leads.
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground mt-6 mb-2">Google Ads Cost in Sri Lanka — What to Expect</h3>
            <p>One of the most common questions: how much does Google Ads cost in Sri Lanka? The honest answer is that it depends on your industry, the competition for your keywords, and your campaign goals. Here's a general guide:</p>
            <ul className="space-y-1 list-disc pl-6">
              <li><strong>Small local businesses</strong> (clinics, salons, tuition centres): LKR 20,000–50,000/month</li>
              <li><strong>SMEs & mid-sized businesses</strong> (real estate, retail, hotels): LKR 50,000–200,000/month</li>
              <li><strong>Large businesses & e-commerce</strong>: LKR 200,000+/month</li>
              <li><strong>Average cost-per-click (CPC) in Sri Lanka</strong>: LKR 30–250 depending on industry</li>
            </ul>
            <p>
              Read our detailed{" "}
              <Link to="/google-ads-sri-lanka-cost-guide" className="text-accent hover:underline font-semibold">Google Ads Cost Guide</Link>{" "}
              for budgeting tips by industry.
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground mt-6 mb-2">Targeting Options for Sri Lanka-Specific Campaigns</h3>
            <ul className="space-y-1 list-disc pl-6">
              <li><strong>Geographic targeting</strong>: Specific cities (Colombo, Kandy, Galle), provinces, or the entire island</li>
              <li><strong>Language targeting</strong>: Sinhala, Tamil, and English audiences</li>
              <li><strong>Device targeting</strong>: Mobile, desktop, or tablet — important as Sri Lanka is mobile-first</li>
              <li><strong>Time-of-day targeting</strong>: Show ads only during business hours or peak search times</li>
              <li><strong>Audience targeting</strong>: Reach users by interests, demographics, or past behaviour</li>
              <li><strong>Remarketing</strong>: Re-target users who previously visited your website</li>
            </ul>

            <h3 className="font-heading text-xl font-bold text-foreground mt-6 mb-2">Google Ads vs SEO for Sri Lankan Businesses</h3>
            <p>
              Google Ads delivers immediate results — your business can be at the top of Google within 48 hours. SEO builds long-term organic visibility that continues working even when you're not spending on ads. For most Sri Lankan businesses, the ideal strategy combines Google Ads for fast lead generation while investing in{" "}
              <Link to="/seo-services-sri-lanka" className="text-accent hover:underline font-semibold">SEO services in Sri Lanka</Link> for sustainable growth over 6–12 months.
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground mt-6 mb-2">Common Google Ads Mistakes Sri Lankan Businesses Make</h3>
            <p>
              Many businesses run Google Ads themselves and lose money due to avoidable mistakes: targeting overly broad keywords that attract irrelevant clicks, having no negative keyword list, sending traffic to weak or slow landing pages, not setting up conversion tracking, and running campaigns without regular optimisation. At Buzz Connect, every campaign we manage is built to avoid these pitfalls from day one.
            </p>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3">FAQ</span>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Frequently Asked Questions — Google Ads Sri Lanka</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Common questions from Sri Lankan businesses about Google Ads management.</p>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-5 bg-card">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* Internal Links */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="p-6 rounded-2xl bg-secondary/30 border border-border space-y-2">
            <p className="font-bold text-foreground mb-3">Related Services:</p>
            <p className="text-muted-foreground">📣 <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">Advertising in Sri Lanka</Link> — full multi-channel advertising</p>
            <p className="text-muted-foreground">🔍 <Link to="/seo-services-sri-lanka" className="text-accent hover:underline font-semibold">SEO services in Sri Lanka</Link> — rank organically alongside paid campaigns</p>
            <p className="text-muted-foreground">🎯 <Link to="/lead-generation" className="text-accent hover:underline font-semibold">Lead generation Sri Lanka</Link> — generate more qualified leads</p>
            <p className="text-muted-foreground">📊 <Link to="/google-ads-sri-lanka-cost-guide" className="text-accent hover:underline font-semibold">Google Ads cost guide</Link> — understand pricing before you start</p>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="p-10 rounded-3xl gradient-hero text-center">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-3">Ready to Grow Your Business with Google Ads in Sri Lanka?</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Talk to our certified Google Ads team today. Free consultation, no obligation. We'll audit your current campaigns or build a strategy from scratch.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="tel:+94771437707" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-primary font-bold hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" /> +94 77 143 7707
              </a>
              <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-colors">
                Send an Enquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="mt-6 text-xs text-primary-foreground/70 flex items-center justify-center gap-2">
              <Clock className="w-3 h-3" /> Available Mon–Sat, 9AM–6PM | Response within 2 business hours
            </p>
          </div>
        </motion.section>

        <DigitalMarketingCTA />
        <RelatedArticles currentPath="/google-ads-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default GoogleAdsSriLanka;
