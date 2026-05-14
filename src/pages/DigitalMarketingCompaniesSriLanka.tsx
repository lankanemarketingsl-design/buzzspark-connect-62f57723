import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail, MessageSquare, Smartphone, Search, Share2, Target, Globe, Palette,
  Monitor, CheckCircle2, XCircle, Star, ArrowRight, PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/home/ContactSection";
import LogoCarousel from "@/components/home/LogoCarousel";

const WA_NUMBER = "94771437707";
const SERVICE = "Digital Marketing";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20digital%20marketing%20services`;

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "1,500+", label: "Happy Clients" },
  { value: "350K+", label: "Email Database" },
  { value: "20,000+", label: "Campaigns Executed" },
  { value: "100K+", label: "Inquiries Generated" },
];

const services = [
  { icon: Mail, title: "Email Marketing Sri Lanka", desc: "Reach over 350,000 verified Sri Lankan professionals, executives and consumers through targeted email campaigns. Bulk blasts, segmented campaigns and automated sequences with measurable open and click tracking.", to: "/email-marketing" },
  { icon: Smartphone, title: "SMS Marketing Sri Lanka", desc: "Reach 600,000+ verified mobile numbers across Sri Lanka. Instant delivery, 98% open rates and campaign execution within 24 hours — perfect for flash sales, reminders and promotional offers.", to: "/sms-marketing" },
  { icon: MessageSquare, title: "WhatsApp Marketing", desc: "Engage Sri Lankan customers on their most-used messaging platform. Rich media campaigns with images, videos and personalised messaging that delivers dramatically higher engagement.", to: "/whatsapp-marketing" },
  { icon: Search, title: "SEO Services Sri Lanka", desc: "Get to Page 1 of Google for keywords your customers are searching. Technical audits, on-page optimisation, content strategy and white-hat link building tuned for the Sri Lankan search market.", to: "/seo-sri-lanka" },
  { icon: Share2, title: "Social Media Marketing", desc: "Facebook, Instagram, TikTok and LinkedIn — content creation, targeted advertising and performance reporting that grows followers, drives engagement and converts audiences.", to: "/social-media-marketing-sri-lanka" },
  { icon: Target, title: "Lead Generation Sri Lanka", desc: "High-quality, sales-ready leads delivered directly to your sales team. Multi-channel campaigns combining email, SMS, WhatsApp, social ads and landing pages at unbeatable cost per lead.", to: "/lead-generation-sri-lanka" },
  { icon: Monitor, title: "Website Design Sri Lanka", desc: "Professional, fast, mobile-optimised websites that convert visitors into leads — clean design, SEO-friendly structure and full integration with your marketing campaigns.", to: "/website-design-sri-lanka" },
  { icon: Palette, title: "Graphic Design & Creative", desc: "E-flyers, social media creatives, animated videos and brand identities — professional marketing materials that capture attention and communicate your brand clearly.", to: "/graphic-designing-in-sri-lanka" },
  { icon: Globe, title: "Online Advertising & Web Banners", desc: "Banner placements, display advertising and discount coupon campaigns across Sri Lanka's leading online platforms — including our own network through Findit.lk.", to: "/online-advertising-sri-lanka" },
];

const reasons = [
  { title: "10+ Years of Proven Experience", desc: "Founded in 2014, Buzz Connect is one of Sri Lanka's most experienced digital marketing companies. We have navigated every algorithm change and platform shift — and our clients keep delivering results." },
  { title: "Sri Lanka's Largest Marketing Database", desc: "350,000+ email contacts, 600,000+ SMS numbers and 200,000+ WhatsApp users — proprietary, verified, opt-in audience built over a decade. Not rented. Not purchased." },
  { title: "Multi-Channel in One Platform", desc: "Email + SMS + WhatsApp + SEO + Social Media + Findit.lk coordinated from one partner. When every channel works together, results multiply. You don't need five agencies." },
  { title: "Campaign Launch in 24–72 Hours", desc: "When you approve a campaign, we execute fast. Email, SMS and WhatsApp campaigns launch within 24 hours so you capture time-sensitive opportunities without delays." },
  { title: "100% Data Safe & Compliant", desc: "Fully compliant with Sri Lanka's data protection requirements. Secure systems, never sell or share client data, and our own database is fully permission-based." },
  { title: "Integrated with Findit.lk", desc: "Buzz Connect campaigns are amplified through Findit.lk — one of Sri Lanka's leading online promotion platforms — giving clients reach no email-only or SMS-only agency can offer." },
];

const steps = [
  { title: "Free Consultation & Strategy", desc: "We begin with a free consultation to understand your goals, audience and budget, then recommend the ideal channel mix tailored to your industry." },
  { title: "Audience Targeting & Segmentation", desc: "We segment our database and your customer lists by industry, location, job role or behaviour — ensuring your message reaches the right people." },
  { title: "Creative Development & Campaign Build", desc: "Our design team creates the campaign materials — emails, SMS copy, WhatsApp messages, social and ad creatives — and presents them for your approval." },
  { title: "Launch, Track & Optimise", desc: "Campaigns launch within 24 hours of approval. Real-time data on opens, clicks, leads and ROI — you always know exactly what your investment is delivering." },
];

const industries = [
  "Hotels & Tourism", "Restaurants & Cafes", "Real Estate", "Fashion & Retail",
  "Finance & Banking", "Education", "Events & Conferences", "Healthcare",
  "Automotive", "Staff Recruitment", "E-Commerce", "Construction",
];

const compareRows = [
  { feature: "Years of Experience", us: "10+ Years (Since 2014)", agency: "2–5 Years", freelancer: "Variable", highlight: true },
  { feature: "Proprietary Sri Lanka Database", us: "350,000+ Emails / 600,000+ SMS", agency: "No proprietary database", freelancer: "No database" },
  { feature: "Multi-Channel (Email + SMS + WhatsApp)", us: "All channels integrated", agency: "Partial (1–2 channels)", freelancer: "Single channel" },
  { feature: "Campaign Launch Speed", us: "24–72 hours", agency: "1–2 weeks", freelancer: "Variable" },
  { feature: "In-House Creative Team", us: "Full creative team", agency: "Sometimes outsourced", freelancer: "Usually separate" },
  { feature: "SEO + Paid Ads + Social", us: "All services available", agency: "Limited", freelancer: "One speciality only" },
  { feature: "Findit.lk Integration", us: "Exclusive partner", agency: "Not available", freelancer: "Not available" },
  { feature: "Dedicated Account Manager", us: "Every client", agency: "Senior clients only", freelancer: "Direct only" },
  { feature: "Industry-Specific Campaigns", us: "12+ industries", agency: "Generic approach", freelancer: "Generic" },
  { feature: "Verified Client Count", us: "1,500+ satisfied clients", agency: "50–200", freelancer: "10–30" },
];

const testimonials = [
  { quote: "Buzz Connect's email marketing campaign generated over 400 direct inquiries for our hotel within 72 hours of launch. The database targeting was precise and the results far exceeded our expectations.", author: "Marketing Manager", company: "5-Star Hotel, Colombo" },
  { quote: "We needed to fill our October intake quickly. The email + WhatsApp campaign delivered over 600 student inquiries in one week. We will definitely use them again.", author: "Admissions Director", company: "Private Educational Institute, Colombo" },
  { quote: "As a real estate developer, lead quality is everything. Buzz Connect's targeted campaigns brought us qualified buyers genuinely interested in our properties — not casual browsers.", author: "Sales Director", company: "Real Estate Developer, Western Province" },
  { quote: "The multi-channel approach — email, SMS and WhatsApp together — gave our campaign incredible reach. Buzz Connect handled everything professionally and the ROI was outstanding.", author: "Brand Manager", company: "FMCG Company, Sri Lanka" },
  { quote: "We have been working with Buzz Connect for three years. They are not just a vendor — they are a genuine marketing partner who understands our business and consistently helps us grow.", author: "CEO", company: "Financial Services Firm, Colombo" },
  { quote: "The campaign was launched faster than I expected and the reporting was completely transparent. I knew exactly how many people opened, clicked and enquired.", author: "Operations Manager", company: "Retail Chain, Sri Lanka" },
];

const faqs = [
  { q: "What is the best digital marketing company in Sri Lanka?", a: "Buzz Connect is widely recognised as one of the best digital marketing companies in Sri Lanka, having served 1,500+ businesses since 2014. With the country's largest proprietary marketing database, multi-channel capabilities across email, SMS, WhatsApp, SEO and social media — and a track record of over 20,000 successful campaigns — Buzz Connect consistently delivers measurable results across all industries." },
  { q: "How much does digital marketing cost in Sri Lanka?", a: "Email marketing campaigns start from LKR 15,000, SMS campaigns from LKR 10,000, and SEO packages typically range from LKR 40,000 to LKR 150,000 per month. Social media marketing and lead generation packages are customised based on goals and industry. Buzz Connect offers free consultations to help you identify the most cost-effective approach." },
  { q: "How long does digital marketing take to show results?", a: "Email and SMS campaigns can generate inquiries within 24–72 hours. WhatsApp typically sees responses within hours. Social media advertising produces results within days to weeks. SEO is longer-term — measurable ranking improvements within 3–6 months and significant organic traffic growth within 6–12 months of consistent effort." },
  { q: "Is digital marketing effective for small businesses in Sri Lanka?", a: "Absolutely. Digital marketing is more advantageous for small and medium businesses than traditional advertising because it allows precise audience targeting, real-time performance measurement and flexible budgeting. A small business can run an effective email or SMS campaign for a fraction of newspaper or TV cost — and track exactly how many customers it generated." },
  { q: "What industries does Buzz Connect serve in Sri Lanka?", a: "Buzz Connect has extensive experience across hotels and tourism, restaurants and cafes, real estate, fashion and retail, finance and banking, education, events and conferences, healthcare, automotive, staff recruitment, e-commerce and construction — with industry-specific campaign strategies tailored to each sector's audience." },
  { q: "Can Buzz Connect help with both online and offline marketing?", a: "Buzz Connect specialises in digital marketing channels — email, SMS, WhatsApp, SEO, social media and online advertising. While we don't manage traditional offline advertising, our digital campaigns are designed to complement and amplify any offline activities for a cohesive customer experience." },
  { q: "How do I get started with Buzz Connect?", a: "Contact us through the form on our website, chat with us on WhatsApp at +94 77 143 7707, or visit our Colombo office. We begin with a free consultation, then present a tailored proposal with clear pricing and expected outcomes. Most campaigns launch within 24–72 hours of approval." },
  { q: "What makes Buzz Connect different from other digital marketing agencies in Sri Lanka?", a: "Three things: First, our proprietary database — 350,000+ emails and 600,000+ SMS contacts, built over 10 years. Second, multi-channel integration so email, SMS, WhatsApp, SEO and social media work together from one partner. Third, our Findit.lk integration delivers digital exposure no other agency can offer. Combined with 24–72 hour execution and a decade of experience, this is why 1,500+ Sri Lankan businesses choose Buzz Connect." },
];

const internalLinks = [
  { to: "/email-marketing", label: "Email Marketing Sri Lanka" },
  { to: "/sms-marketing", label: "SMS Marketing Sri Lanka" },
  { to: "/whatsapp-marketing", label: "WhatsApp Marketing" },
  { to: "/seo-sri-lanka", label: "SEO Services Sri Lanka" },
  { to: "/social-media-marketing-sri-lanka", label: "Social Media Marketing" },
  { to: "/lead-generation-sri-lanka", label: "Lead Generation" },
  { to: "/multi-channel-marketing-sri-lanka", label: "Multi-Channel Marketing" },
  { to: "/graphic-designing-in-sri-lanka", label: "Graphic Design" },
  { to: "/website-design-sri-lanka", label: "Website Design" },
  { to: "/online-advertising-sri-lanka", label: "Online Advertising" },
  { to: "/hotel-marketing-sri-lanka", label: "Hotel Marketing" },
  { to: "/real-estate-marketing-sri-lanka", label: "Real Estate Marketing" },
  { to: "/education-marketing-sri-lanka", label: "Education Marketing" },
  { to: "/contact-us", label: "Contact Us" },
];

const DigitalMarketingCompaniesSriLanka = () => {
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
        title="Digital Marketing Companies in Sri Lanka | #1 Buzz Connect"
        description="Looking for the best digital marketing companies in Sri Lanka? Buzz Connect offers Email, SMS, WhatsApp, SEO & Social Media marketing with 10+ years experience and 1,500+ clients. Get a free consultation today."
        canonical="/digital-marketing-companies-sri-lanka"
        keywords="digital marketing companies in sri lanka, digital marketing agency sri lanka, best digital marketing company sri lanka, online marketing sri lanka, digital marketing colombo, seo sri lanka, social media marketing sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Digital Marketing Companies in Sri Lanka", url: "/digital-marketing-companies-sri-lanka" },
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
              Sri Lanka's #1 Digital Marketing Company
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              The #1 Digital Marketing <span className="text-accent">Company in Sri Lanka</span>
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-8">
              Buzz Connect has been Sri Lanka's most trusted multi-channel digital marketing partner since 2014 — helping over 1,500 businesses grow with Email, SMS, WhatsApp, SEO, Social Media and Lead Generation campaigns that actually deliver results.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact-us">
                <Button variant="hero" size="lg">
                  Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* Stats Bar */}
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

      {/* Section 1: Intro */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What is <span className="text-accent">Digital Marketing</span> and Why Does Your Business Need It?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Digital marketing is the use of online channels — search engines, email, social media, messaging apps, and websites — to promote your products or services, attract new customers, and grow your revenue. In today's Sri Lanka, where internet penetration is rapidly expanding and mobile usage is at an all-time high, digital marketing is no longer optional. It is the single most powerful way to reach your ideal customer at exactly the right moment.</p>
            <p>Whether you are a hotel in Colombo trying to fill rooms, a fashion brand targeting young shoppers, a university seeking student enrollments, or a real estate developer generating qualified leads — digital marketing is how modern Sri Lankan businesses grow. The question is not whether to invest in digital marketing. The question is who you trust to execute it.</p>
            <p>At Buzz Connect, we have been answering that question for Sri Lankan businesses since 2014. With over a decade of experience, a database of 350,000+ active Sri Lankan contacts, and more than 20,000 successful campaigns delivered across every major industry, we are not just another digital marketing company in Sri Lanka. We are the partner businesses turn to when results matter.</p>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground pt-4">The Digital Marketing Landscape in Sri Lanka (2025–2026)</h3>
            <p>Sri Lanka's digital economy is undergoing rapid transformation. With increased smartphone penetration, the growth of e-commerce, and consumers increasingly relying on Google to discover businesses, brands that invest in digital marketing today are capturing market share that will be nearly impossible to recover for their competitors tomorrow.</p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Sri Lanka has over <strong className="text-foreground">13 million internet users</strong> — the majority accessing the web via mobile</li>
              <li>Google is the dominant search engine, making <strong className="text-foreground">SEO and Google Ads</strong> essential for visibility</li>
              <li>Email open rates in Sri Lanka remain significantly above global averages, making <strong className="text-foreground">email marketing</strong> one of the highest-ROI channels available</li>
              <li>WhatsApp penetration in Sri Lanka is among the highest in South Asia — making <strong className="text-foreground">WhatsApp marketing</strong> a direct line to customers</li>
              <li>Social media platforms like Facebook, Instagram and TikTok are primary discovery channels for brands targeting Sri Lankan consumers</li>
            </ul>
            <p>Businesses that partner with the right digital marketing companies in Sri Lanka can tap into all of these channels simultaneously — reaching customers across email, SMS, WhatsApp, Google and social media in a coordinated, cost-effective way.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Services */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete <span className="text-accent">Digital Marketing Services</span> Under One Roof
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Unlike agencies that specialise in just one channel, Buzz Connect is a true full-service digital marketing company in Sri Lanka. We execute across every major platform so your brand is visible wherever your customers are.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, to }) => (
              <Link
                key={title}
                to={to}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Buzz Connect */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Buzz Connect is <span className="text-accent">Sri Lanka's Top Choice</span> for Digital Marketing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              There are many digital marketing agencies in Sri Lanka. So why do over 1,500 businesses — from startups to publicly listed companies — choose Buzz Connect? Six core advantages no competitor can match.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="bg-primary text-primary-foreground rounded-2xl p-6">
                <h3 className="font-heading text-base font-bold text-accent mb-3">{r.title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How We Work: Our <span className="text-accent">4-Step Campaign Process</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Getting started with Buzz Connect is simple. From your first conversation to campaign launch, here is exactly what happens.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-card rounded-xl p-6 border-l-4 border-accent shadow-sm">
                <div className="font-heading text-3xl font-extrabold text-accent mb-2">{i + 1}</div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Industries */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Digital Marketing for <span className="text-accent">Every Industry</span> in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Buzz Connect has executed successful digital marketing campaigns across virtually every industry in Sri Lanka. Our industry expertise means you get campaigns built around your sector — not generic templates.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {industries.map((i) => (
              <div key={i} className="bg-muted border border-border rounded-xl py-4 px-3 text-center text-sm font-semibold text-foreground">
                {i}
              </div>
            ))}
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">Industry-Specific Campaign Results</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Our track record across industries speaks for itself. Hotel clients have seen direct booking inquiries increase by over 200% following targeted email campaigns to our corporate travel database. Education clients consistently achieve high student enrollment inquiry volumes during intake seasons. Real estate developers have generated hundreds of qualified property inquiries per campaign.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This is the power of combining the right database with the right message through the right channel — something only a full-service digital marketing company in Sri Lanka with Buzz Connect's depth of experience can consistently deliver.
          </p>
        </div>
      </section>

      {/* Section 6: Comparison */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Buzz Connect Compares to <span className="text-accent">Other Digital Marketing Companies</span> in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            When evaluating digital marketing companies in Sri Lanka, businesses need to assess experience, channel coverage, database quality and execution speed. Here is how Buzz Connect stacks up.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-accent">
                  <th className="text-left p-4 font-bold">Feature</th>
                  <th className="text-left p-4 font-bold">Buzz Connect</th>
                  <th className="text-left p-4 font-bold">Typical Agency</th>
                  <th className="text-left p-4 font-bold">Freelancer</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={r.feature} className={`${i % 2 ? "bg-muted/40" : ""} ${r.highlight ? "bg-accent/10" : ""} border-t border-border`}>
                    <td className="p-4 font-semibold text-foreground">{r.feature}</td>
                    <td className="p-4 text-foreground">
                      <span className="inline-flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />{r.us}</span>
                    </td>
                    <td className="p-4 text-muted-foreground">{r.agency}</td>
                    <td className="p-4 text-muted-foreground">
                      <span className="inline-flex items-start gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />{r.freelancer}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7: How to Choose */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How to Choose the <span className="text-accent">Right Digital Marketing Company</span> in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With dozens of digital marketing agencies and freelancers operating in Sri Lanka, choosing the right partner is one of the most important decisions your business will make. Here is a practical framework to evaluate any digital marketing company before you commit.
          </p>
          {[
            { h: "1. Look for Verified Experience and a Real Track Record", p: "Any agency can claim to be \"the best digital marketing company in Sri Lanka.\" What separates genuine experts from newcomers is a verifiable track record. Ask for case studies specific to your industry, client references you can contact, and how many campaigns the agency has executed. Buzz Connect has been in business since 2014 and executed over 20,000 campaigns — and we are happy to share specific results in your industry before you sign anything." },
            { h: "2. Assess Their Database Quality", p: "If you are looking for email or SMS marketing, the quality of the agency's database is everything. A list of 1 million outdated or unverified contacts will perform far worse than a curated list of 100,000 active, engaged recipients. Ask: How old is the database? Is it opt-in? Is it segmented by industry or location? Buzz Connect's database is continuously refreshed, fully segmented and built on permission-based contacts accumulated over a decade." },
            { h: "3. Demand Transparency on Reporting", p: "A trustworthy digital marketing company in Sri Lanka will give you clear, honest reporting — open rates, click-through rates, leads generated and cost per acquisition. Be wary of agencies that report vanity metrics (impressions, reach) but cannot show actual business outcomes. Buzz Connect provides detailed post-campaign analytics for every campaign." },
            { h: "4. Evaluate Multi-Channel Capability", p: "The most effective digital marketing strategies use multiple channels in a coordinated way. A business that runs email, SMS, WhatsApp and Google SEO simultaneously will always outperform one relying on a single channel. Ask whether the agency can execute across all relevant channels — or whether you'll need to manage multiple agencies." },
            { h: "5. Consider Speed and Responsiveness", p: "Digital marketing is time-sensitive. A campaign opportunity for a seasonal sale, an upcoming event or a breaking news moment requires fast execution. Buzz Connect's operational capability allows campaign launches within 24 to 72 hours of approval — faster than virtually any other digital marketing agency in Sri Lanka." },
            { h: "6. Prioritise Data Security and Compliance", p: "Your customer data and campaign data must be handled with absolute security. Ensure the agency has clear data protection policies, does not share or sell your data, and uses secure, compliant platforms. Data security at Buzz Connect is a non-negotiable standard, not an afterthought." },
          ].map((b) => (
            <div key={b.h} className="mb-6">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">{b.h}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Buzz Connect has served over 1,500 businesses across Sri Lanka. Here is what some of them say about our digital marketing services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex gap-1 mb-3 text-accent">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">"{t.quote}"</p>
                <div className="text-sm font-bold text-foreground">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Best Practices */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Digital Marketing Best Practices for <span className="text-accent">Sri Lankan Businesses</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you are starting your digital marketing journey or improving your existing strategy, here are the most important principles that drive results for businesses in Sri Lanka.
          </p>
          {[
            { h: "Start with a Clear Goal", p: "The most effective campaigns start with a specific, measurable objective. Are you trying to generate 100 leads per month? Sell 500 units of a new product? Fill 80% of hotel rooms for the upcoming season? A clear goal allows you to select the right channels, craft the right message and measure whether the campaign is working. Campaigns without clear goals produce activity — not results." },
            { h: "Know Your Audience", p: "Sri Lanka has diverse consumer segments by income, profession, location, language and lifestyle. What works in Colombo 7 may not work in Gampaha. What resonates with corporate executives won't connect with university students. Effective digital marketing companies in Sri Lanka segment campaigns by audience — targeting the right people with messages designed for them, not one-size-fits-all blasts." },
            { h: "Use Multiple Channels Together", p: "The average Sri Lankan consumer encounters a brand multiple times before deciding. Customers who receive a message on multiple channels — email, then SMS reminder, then WhatsApp follow-up — convert at dramatically higher rates than those contacted through a single channel. This is why Buzz Connect's multi-channel approach consistently outperforms single-channel campaigns." },
            { h: "Invest in SEO for Long-Term Growth", p: "Paid advertising delivers instant results but stops the moment your budget runs out. SEO builds organic visibility that compounds over time. A well-optimised website on Page 1 of Google for your key terms generates leads every month without ongoing ad spend. For long-term digital marketing in Sri Lanka, SEO is essential — not optional." },
            { h: "Measure Everything — Then Optimise", p: "The greatest advantage of digital marketing over TV, newspaper and billboards is measurability. Every email open, SMS click, website visit and form submission is tracked. Businesses that review campaign data and optimise based on what they learn consistently outperform those repeating the same approach. Buzz Connect provides detailed reporting on every campaign." },
            { h: "Build a Consistent Brand Voice", p: "In a competitive Sri Lankan market, brand recognition builds trust — and trust builds sales. Ensure your messaging is consistent across email, SMS, WhatsApp, social media and your website. Consistent branding in tone, design and message makes your business look professional and authoritative — directly impacting conversion rates." },
          ].map((b) => (
            <div key={b.h} className="mb-6">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">{b.h}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Frequently Asked Questions About <span className="text-accent">Digital Marketing in Sri Lanka</span>
          </h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-5">
              Explore Our Digital Marketing Services
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {internalLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm font-medium text-primary hover:text-accent py-2 transition-colors"
                >
                  → {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-accent to-accent/80 py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-foreground mb-4">
            Ready to Grow Your Business with Sri Lanka's #1 Digital Marketing Company?
          </h2>
          <p className="text-accent-foreground/85 leading-relaxed mb-8">
            Join 1,500+ Sri Lankan businesses already growing with Buzz Connect. Get your free consultation today — no commitment, no obligation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact-us">
              <Button size="lg" className="bg-primary text-accent hover:bg-primary/90">
                Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a data-selected-service={SERVICE} href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-accent">
                <PhoneCall className="mr-2 w-4 h-4" /> Chat on WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <LogoCarousel />
      <ContactSection />
    </div>
  );
};

export default DigitalMarketingCompaniesSriLanka;
