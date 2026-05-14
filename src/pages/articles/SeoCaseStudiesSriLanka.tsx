import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Target, Search, MapPin, Sofa, GraduationCap, UtensilsCrossed, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import educationChart from "@/assets/education-seo-chart.png";
import restaurantChart from "@/assets/restaurant-seo-chart.png";
import furnitureChart from "@/assets/furniture-seo-chart.png";

const SeoCaseStudiesSriLanka = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="SEO Case Studies in Sri Lanka: Real First-Page Results"
      subtitle=""
    >
      <SEOHead
        title="SEO Case Studies Sri Lanka: Real First-Page Results | Buzz Connect"
        description="See real SEO case studies from Sri Lanka — education, restaurant, and furniture businesses that achieved first-page Google rankings with Buzz Connect."
        canonical="/seo-case-studies-sri-lanka"
        ogType="article"
        keywords="seo case studies sri lanka, seo results sri lanka, best seo company sri lanka, seo sri lanka, first page google sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "SEO Case Studies Sri Lanka", url: "/seo-case-studies-sri-lanka" },
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "SEO Case Studies in Sri Lanka: Real First-Page Results",
            datePublished: "2026-04-13",
            author: { "@type": "Organization", name: "Buzz Connect" },
            publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does SEO take to show results in Sri Lanka?",
                acceptedAnswer: { "@type": "Answer", text: "Most businesses see significant ranking improvements and increased inquiries within 2–4 months of a professional SEO campaign." },
              },
              {
                "@type": "Question",
                name: "Does SEO work for small businesses in Sri Lanka?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. SEO is one of the most cost-effective strategies for small businesses to generate consistent traffic and customer inquiries from Google." },
              },
            ],
          },
        ]}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Intro */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed mb-3">
              At Buzz Connect, we focus on delivering real, measurable SEO results for businesses in Sri Lanka. Our strategies are designed to improve visibility on Google, attract high-intent visitors, and generate consistent customer inquiries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here are real examples of how businesses achieved first-page rankings and business growth through SEO with the <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">best SEO company in Sri Lanka</Link>.
            </p>
          </div>

          {/* ── Case Study 1: Education ── */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h2 className="font-heading text-xl font-bold text-foreground">Case Study 1: Education Institute</h2>
            </div>
            <p className="text-sm text-accent font-semibold mb-3">From Low Visibility to First Page Rankings for Courses in Sri Lanka</p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2"><Target className="w-4 h-4 text-accent" /> Objective</h3>
                <p className="text-sm text-muted-foreground">Increase student inquiries and rank for course-related keywords</p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2"><Search className="w-4 h-4 text-accent" /> Challenges</h3>
                <ul className="space-y-1">
                  {["Not appearing on Google for key course searches", "Low website traffic", "No structured SEO strategy"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2">⚙️ SEO Strategy</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Targeted keywords:</p>
                  <div className="flex flex-wrap gap-2">
                    {["IT courses Sri Lanka", "English classes Colombo", "short courses Sri Lanka"].map(kw => (
                      <span key={kw} className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">{kw}</span>
                    ))}
                  </div>
                  <ul className="space-y-1 mt-2">
                    {["Course page optimization", "Landing pages for specific programs", "Internal linking between courses", "Content focused on student intent"].map(item => (
                      <li key={item} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                <h3 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-accent" /> Results (2–3 Months)</h3>
                <ul className="space-y-1">
                  {[
                    "Ranked on Page 1 for multiple course-related keywords",
                    "Increased visibility for high-intent student searches",
                    "More inquiries from students and parents",
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Growth Chart */}
              <div className="p-4 rounded-xl bg-background border border-border text-center">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Before → After SEO Growth</p>
                <img src={educationChart} alt="Education SEO growth chart showing inquiries increase from Month 1 to Month 3" className="mx-auto max-w-full rounded-lg" loading="lazy" />
              </div>

              <p className="text-sm text-muted-foreground">
                👉 Strong impact on student lead generation. <Link to="/education-marketing-sri-lanka" className="text-accent hover:underline font-semibold">Learn more about Student Lead Generation in Sri Lanka</Link>
              </p>
            </div>
          </div>

          {/* ── Case Study 2: Restaurant ── */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-accent" />
              <h2 className="font-heading text-xl font-bold text-foreground">Case Study 2: Restaurant Business</h2>
            </div>
            <p className="text-sm text-accent font-semibold mb-3">Improving Local Search Visibility and Customer Traffic</p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2"><Target className="w-4 h-4 text-accent" /> Objective</h3>
                <p className="text-sm text-muted-foreground">Appear on first page for local restaurant searches and increase walk-in customers</p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Challenges</h3>
                <ul className="space-y-1">
                  {["Not visible in search results", "Low Google Maps presence", "Limited customer inquiries"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2">⚙️ SEO Strategy</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {["Local SEO optimization", "Google Business Profile improvements", "Review generation strategy", "Location-based keyword targeting"].map(item => (
                    <li key={item} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                <h3 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-accent" /> Results (2–3 Months)</h3>
                <ul className="space-y-1">
                  {[
                    "Appeared on Page 1 for \"restaurants in Colombo\"",
                    "Increased visibility in Google Maps",
                    "Growth in customer visits and inquiries",
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Growth Chart */}
              <div className="p-4 rounded-xl bg-background border border-border text-center">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Before → After SEO Growth</p>
                <img src={restaurantChart} alt="Restaurant SEO growth chart showing customer inquiries increase from Month 1 to Month 3" className="mx-auto max-w-full rounded-lg" loading="lazy" />
              </div>

              <p className="text-sm text-muted-foreground">
                👉 Strong results through local SEO strategy. <Link to="/restaurant-marketing-sri-lanka" className="text-accent hover:underline font-semibold">Explore Restaurant Marketing in Sri Lanka</Link>
              </p>
            </div>
          </div>

          {/* ── Case Study 3: Furniture ── */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Sofa className="w-6 h-6 text-accent" />
              <h2 className="font-heading text-xl font-bold text-foreground">Case Study 3: Furniture Company</h2>
            </div>
            <p className="text-sm text-accent font-semibold mb-3">Generating High-Quality Leads Through SEO</p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2"><Target className="w-4 h-4 text-accent" /> Objective</h3>
                <p className="text-sm text-muted-foreground">Rank for commercial keywords and generate customer inquiries</p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2"><Search className="w-4 h-4 text-accent" /> Challenges</h3>
                <ul className="space-y-1">
                  {["No keyword rankings", "Low website traffic", "No SEO structure"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2">⚙️ SEO Strategy</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Targeted keywords:</p>
                  <div className="flex flex-wrap gap-2">
                    {["furniture Sri Lanka", "office furniture Colombo"].map(kw => (
                      <span key={kw} className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">{kw}</span>
                    ))}
                  </div>
                  <ul className="space-y-1 mt-2">
                    {["Service page optimization", "Content development", "Backlink building"].map(item => (
                      <li key={item} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                <h3 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-accent" /> Results (3–4 Months)</h3>
                <ul className="space-y-1">
                  {[
                    "Ranked on Page 1 for key commercial keywords",
                    "Increased website inquiries",
                    "Improved lead quality",
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Growth Chart */}
              <div className="p-4 rounded-xl bg-background border border-border text-center">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Before → After SEO Growth</p>
                <img src={furnitureChart} alt="Furniture SEO growth chart showing lead generation increase from Month 1 to Month 3" className="mx-auto max-w-full rounded-lg" loading="lazy" />
              </div>

              <p className="text-sm text-muted-foreground">
                👉 Effective for high-value product businesses
              </p>
            </div>
          </div>

          {/* What These Case Studies Prove */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">What These Case Studies Prove</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Across different industries, professional SEO consistently delivers:</p>
            <ul className="space-y-2">
              {[
                "SEO improves search visibility on Google",
                "Drives high-quality, targeted traffic",
                "Generates real business inquiries and leads",
                "The strategy is always tailored to the industry and customer intent",
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Businesses Choose Buzz Connect */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why Businesses Choose Buzz Connect</h2>
            <ul className="space-y-2">
              {[
                "Proven results across multiple industries in Sri Lanka",
                "Transparent reporting and ethical SEO techniques",
                "Tailored strategies aligned with business growth",
                "10+ years of experience in digital marketing",
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If you want similar results, explore our <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">best SEO company in Sri Lanka</Link> packages.
            </p>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Ready to Rank on Page 1 and Grow Your Business?</h3>
            <p className="text-primary-foreground/80 mb-4">Work with a trusted SEO specialist in Sri Lanka and start generating consistent traffic and inquiries.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              Start Your SEO Campaign Today
            </Link>
          </div>
        </motion.article>
        <div className="my-8 p-5 rounded-xl border border-accent/30 bg-accent/5">
          <p className="text-sm sm:text-base text-foreground">
            Comparing your options? See our full breakdown of the top{" "}
            <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">
              digital marketing companies in Sri Lanka
            </Link>{" "}
            and how to pick the right partner for your business.
          </p>
        </div>
        <RelatedArticles currentPath="/seo-case-studies-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default SeoCaseStudiesSriLanka;
