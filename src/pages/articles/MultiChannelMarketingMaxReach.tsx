import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const MultiChannelMarketingMaxReach = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Multi-Channel Marketing in Sri Lanka: The Key to Maximum Reach"
      subtitle=""
    >
      <SEOHead
        title="Multi-Channel Marketing in Sri Lanka: The Key to Maximum Reach | Buzz Connect"
        description="Multi-channel marketing combines Email, SMS, WhatsApp and social media to maximize reach for Sri Lankan businesses. Learn why unified strategies deliver better results."
        canonical="/multi-channel-marketing-maximum-reach-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Multi-Channel Marketing Maximum Reach", url: "/multi-channel-marketing-maximum-reach-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Multi-Channel Marketing in Sri Lanka: The Key to Maximum Reach",
          datePublished: "2025-03-24",
          author: { "@type": "Organization", name: "Buzz Connect" },
          publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
        }]}
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
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed">
              Customers today interact with brands across multiple platforms. To stay competitive, businesses in Sri Lanka must adopt a multi-channel marketing approach that ensures consistent messaging wherever their audience is.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">What is Multi-Channel Marketing?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Multi-channel marketing combines multiple communication channels to create a unified customer experience:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email Marketing</Link> — targeted campaigns with high ROI</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS Marketing</Link> — instant reach with 90%+ open rates</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp Marketing</Link> — personal, high-engagement messaging</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Social media and web advertising</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This ensures your message reaches customers wherever they are — on their phone, inbox, or social feed.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why Multi-Channel Marketing Matters</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Increased brand visibility across platforms</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Better customer engagement and response rates</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Higher conversion rates through multiple touchpoints</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Consistent messaging strengthens brand trust</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Businesses that use multi-channel strategies outperform competitors who rely on a single channel. Explore our complete solution at{" "}
              <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">
                Multi-Channel Marketing Sri Lanka
              </Link>.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">A Unified Marketing Approach Delivers Better Results</h3>
            <p className="text-primary-foreground/80 mb-4">Combine Email, SMS, and WhatsApp for maximum impact.</p>
            <Link to="/multi-channel-marketing-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Multi-Channel Packages
            </Link>
          </div>
        </motion.article>
        <div className="my-8 p-5 rounded-xl border border-accent/30 bg-accent/5">
          <p className="text-sm sm:text-base text-foreground">
            Comparing your options? See our full breakdown of the top{' '}
            <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">
              digital marketing companies in Sri Lanka
            </Link>{' '}
            and how to pick the right partner for your business.
          </p>
        </div>
        <RelatedArticles currentPath="/multi-channel-marketing-maximum-reach-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default MultiChannelMarketingMaxReach;
