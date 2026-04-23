import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LeadGenerationCost = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Lead Generation Cost in Sri Lanka", url: "/lead-generation-cost-sri-lanka" },
  ];

  return (
    <>
      <SEOHead
        title="Lead Generation Cost in Sri Lanka (2026 Pricing Guide) | Buzz Connect"
        description="Lead generation cost in Sri Lanka 2026 — pricing by channel, industry & cost per lead. Compare email, SMS, WhatsApp, Google Ads & multi-channel pricing."
        canonical="/lead-generation-cost-sri-lanka"
        keywords="lead generation cost sri lanka, lead generation pricing sri lanka, cost per lead sri lanka, lead generation packages sri lanka"
        breadcrumbs={breadcrumbs}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Lead Generation Cost in Sri Lanka (2026 Pricing Guide)",
            description: "Complete 2026 pricing guide for lead generation in Sri Lanka — channels, industries, cost per lead and what packages should include.",
            author: { "@type": "Organization", name: "Buzz Connect" },
            publisher: { "@type": "Organization", name: "Buzz Connect" },
            datePublished: "2026-04-23",
            dateModified: "2026-04-23",
          },
        ]}
      />
      <ServicePageLayout
        badge="Lead Generation"
        title="Lead Generation Cost in Sri Lanka (2026 Pricing Guide)"
        subtitle="What lead generation costs in Sri Lanka in 2026 — by channel, by industry and by the type of result you're trying to achieve."
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One of the first questions every business owner asks before starting a lead generation campaign in Sri Lanka is: how much will it cost, and how many leads will I actually get?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The honest answer is that lead generation pricing in Sri Lanka varies significantly depending on your industry, target audience, channels used, and the quality of lead you're looking for. A hotel wanting enquiries from travel agents has a very different campaign cost to a finance company targeting high-net-worth investors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This guide breaks down exactly what lead generation costs in Sri Lanka in 2026 so you can budget confidently before you begin.
            </p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What Are You Actually Paying For?</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">When you pay for lead generation in Sri Lanka you are paying for one or more of:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Campaign design and creative — emails, SMS messages, ads, landing pages</li>
              <li>Database access — reaching a verified audience matching your target profile</li>
              <li>Platform costs — email sending fees, SMS delivery fees, ad spend on Google or social</li>
              <li>Agency management — the team that builds, runs, optimises and reports on your campaign</li>
              <li>Lead qualification — filtering raw enquiries and delivering verified leads</li>
            </ul>
            <div className="my-6 p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <p className="font-heading text-lg font-bold text-foreground mb-2">💡 Cost Per Lead vs Campaign Cost</p>
              <p className="text-muted-foreground">
                Always evaluate lead generation by cost per lead — not total campaign spend. A campaign costing LKR 150,000 that delivers 50 qualified leads is far better value than one costing LKR 80,000 that delivers 8 unqualified enquiries.
              </p>
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Lead Generation Pricing Models in Sri Lanka</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left">Pricing Model</th>
                    <th className="border border-border px-4 py-2 text-left">How It Works</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr><td className="border border-border px-4 py-2">Monthly Retainer</td><td className="border border-border px-4 py-2">Fixed monthly fee covering campaign management, creative and reporting. Most common for ongoing lead generation.</td></tr>
                  <tr><td className="border border-border px-4 py-2">Cost Per Lead (CPL)</td><td className="border border-border px-4 py-2">Pay a fixed price for each verified lead delivered. Higher risk for the agency, so CPL rates are typically higher.</td></tr>
                  <tr><td className="border border-border px-4 py-2">Campaign Package</td><td className="border border-border px-4 py-2">Fixed price for a defined campaign — specific audience size, channel, duration and deliverables.</td></tr>
                  <tr><td className="border border-border px-4 py-2">Performance Based</td><td className="border border-border px-4 py-2">Agency earns a percentage of revenue generated from leads. Rare in Sri Lanka but available for high-value industries.</td></tr>
                  <tr><td className="border border-border px-4 py-2">Ad Spend + Management Fee</td><td className="border border-border px-4 py-2">You pay the ad platform directly and pay the agency a management fee on top.</td></tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Lead Generation Cost by Channel in Sri Lanka (2026)</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left">Channel</th>
                    <th className="border border-border px-4 py-2 text-left">Typical Cost Range (LKR per month)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr><td className="border border-border px-4 py-2"><Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email Marketing Campaign</Link></td><td className="border border-border px-4 py-2">LKR 25,000 to LKR 75,000 — depending on database size and campaign complexity</td></tr>
                  <tr><td className="border border-border px-4 py-2"><Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS Marketing Campaign</Link></td><td className="border border-border px-4 py-2">LKR 20,000 to LKR 60,000 — based on number of messages sent and audience size</td></tr>
                  <tr><td className="border border-border px-4 py-2"><Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp Marketing</Link></td><td className="border border-border px-4 py-2">LKR 30,000 to LKR 80,000 — higher engagement justifies slightly higher cost</td></tr>
                  <tr><td className="border border-border px-4 py-2"><Link to="/google-ads-sri-lanka" className="text-accent hover:underline font-semibold">Google Ads (Search)</Link></td><td className="border border-border px-4 py-2">LKR 50,000 to LKR 200,000+ — ad spend plus management fee, highly industry-dependent</td></tr>
                  <tr><td className="border border-border px-4 py-2">Facebook and Instagram Ads</td><td className="border border-border px-4 py-2">LKR 40,000 to LKR 150,000 — ad spend plus management, lower intent than Google</td></tr>
                  <tr><td className="border border-border px-4 py-2">Multi-Channel Campaign</td><td className="border border-border px-4 py-2">LKR 80,000 to LKR 250,000 — combines email, SMS and web ads for maximum reach</td></tr>
                  <tr><td className="border border-border px-4 py-2">Full Lead Generation Package</td><td className="border border-border px-4 py-2">LKR 100,000 to LKR 400,000 — end-to-end campaign with qualified lead delivery</td></tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Lead Generation Cost by Industry in Sri Lanka</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Industry is one of the biggest factors in lead generation pricing. High-value industries with longer sales cycles cost more per lead — but each lead is worth significantly more to the business.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left">Industry</th>
                    <th className="border border-border px-4 py-2 text-left">Typical Cost Per Lead (LKR)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr><td className="border border-border px-4 py-2">Real Estate</td><td className="border border-border px-4 py-2">LKR 2,500 to LKR 8,000 per qualified property enquiry</td></tr>
                  <tr><td className="border border-border px-4 py-2">Finance and Investment</td><td className="border border-border px-4 py-2">LKR 2,000 to LKR 7,000 per qualified financial product lead</td></tr>
                  <tr><td className="border border-border px-4 py-2">Education and Training</td><td className="border border-border px-4 py-2">LKR 800 to LKR 2,500 per student enquiry</td></tr>
                  <tr><td className="border border-border px-4 py-2">Hotels and Tourism</td><td className="border border-border px-4 py-2">LKR 500 to LKR 2,000 per booking enquiry</td></tr>
                  <tr><td className="border border-border px-4 py-2">Healthcare</td><td className="border border-border px-4 py-2">LKR 600 to LKR 2,000 per patient appointment enquiry</td></tr>
                  <tr><td className="border border-border px-4 py-2">Automotive</td><td className="border border-border px-4 py-2">LKR 1,500 to LKR 5,000 per qualified vehicle enquiry</td></tr>
                  <tr><td className="border border-border px-4 py-2">Events</td><td className="border border-border px-4 py-2">LKR 300 to LKR 1,200 per ticket or registration lead</td></tr>
                  <tr><td className="border border-border px-4 py-2">Recruitment</td><td className="border border-border px-4 py-2">LKR 200 to LKR 800 per qualified candidate application</td></tr>
                </tbody>
              </table>
            </div>
            <div className="my-6 p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <p className="font-heading text-lg font-bold text-foreground mb-2">📊 How to Judge If Your Cost Per Lead is Good</p>
              <p className="text-muted-foreground">
                Compare your cost per lead against the lifetime value of a customer. A real estate lead costing LKR 5,000 that converts into a property sale worth LKR 25 million is an exceptional return. A student lead costing LKR 1,500 that enrols in a LKR 300,000 course delivers a 200x return on the lead cost.
              </p>
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What Affects Lead Generation Cost in Sri Lanka?</h2>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">1. Audience Size and Targeting Precision</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Broader campaigns reaching a large general audience cost more in total but less per contact. Highly targeted campaigns reaching a small specific audience — such as hotel procurement managers in Colombo — cost more per contact but deliver higher quality leads.
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">2. Channel Selection</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Email campaigns are typically the most cost-effective entry point. Adding SMS, WhatsApp and web banner advertising increases reach and results but also increases cost. See how <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing in Sri Lanka</Link> reduces cost per lead by reaching audiences across multiple touchpoints.
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">3. Lead Quality Requirements</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raw enquiries — anyone who fills in a form — are cheaper per lead. Qualified leads — verified by phone, confirmed interest and matched to your ideal customer profile — cost more but convert at significantly higher rates.
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">4. Competition in Your Industry</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Industries with many businesses competing for the same audience drive up lead generation costs. Finance and real estate in Sri Lanka have more competition for qualified leads than niche sectors. Understand <Link to="/how-lead-generation-works-sri-lanka" className="text-accent hover:underline font-semibold">how lead generation works in Sri Lanka</Link> across different industries.
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">5. Campaign Duration</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Short burst campaigns generate immediate results but don't build momentum. Monthly retainer campaigns running consistently over 3 to 6 months deliver progressively better results as the agency optimises targeting and creative based on real data.
            </p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What Should a Lead Generation Package Include?</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Clear definition of what counts as a lead — form fill, phone call, verified enquiry</li>
              <li>Audience targeting specification — who exactly will receive your campaign</li>
              <li>Campaign creative — email design, SMS copy, landing page if applicable</li>
              <li>Sending or distribution to your agreed audience</li>
              <li>Post-campaign report with delivery rates, open rates, click rates and leads generated</li>
              <li>Lead list delivered in a usable format — spreadsheet, CRM upload, or direct notification</li>
            </ul>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Buzz Connect Lead Generation Packages in Sri Lanka</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Buzz Connect offers <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation services in Sri Lanka</Link> for every industry and budget — from focused single-channel campaigns to full multi-channel programmes with qualified lead delivery.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Access to 500,000+ verified Sri Lankan contacts for direct marketing campaigns</li>
              <li>Email, SMS, WhatsApp and web banner advertising — single or multi-channel</li>
              <li>Industry-specific targeting for hotels, real estate, education, finance and more</li>
              <li>Full campaign design, deployment and reporting included</li>
              <li>Transparent pricing — no hidden fees or surprise charges</li>
            </ul>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Is there a minimum budget for lead generation in Sri Lanka?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Buzz Connect offers entry-level packages starting from LKR 25,000 per month for focused single-channel campaigns. For meaningful multi-channel lead generation with measurable monthly lead volume, a budget of LKR 80,000 to LKR 150,000 per month is recommended for most industries.
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">How many leads can I expect per month?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This depends on your industry, budget and audience size. A hotel spending LKR 60,000 on a targeted email campaign might receive 30 to 80 booking enquiries. A real estate developer spending LKR 150,000 on a multi-channel campaign might receive 20 to 50 qualified property enquiries.
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Is lead generation better than running my own Google Ads?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Running Google Ads yourself without experience typically results in significant wasted spend. A professional lead generation agency manages your budget more efficiently, builds better landing pages and optimises campaigns based on data — usually delivering a lower cost per lead than self-managed campaigns within the first 60 days.
            </p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <div className="mt-6 p-6 rounded-2xl bg-accent/10 border border-accent/20 text-center">
              <p className="font-heading text-xl font-bold text-foreground mb-3">Get a Custom Lead Generation Quote from Buzz Connect</p>
              <ul className="text-muted-foreground text-left max-w-xl mx-auto list-disc pl-6 mb-4 space-y-1">
                <li>Tell us your industry, target audience and monthly lead goal</li>
                <li>Receive a custom pricing proposal within 24 hours</li>
                <li>No obligation — understand the full cost before committing</li>
              </ul>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/lead-generation-sri-lanka" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                  Explore Lead Generation Services →
                </Link>
                <Link to="/contact-us" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                  Request a Free Quote →
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </ServicePageLayout>
    </>
  );
};

export default LeadGenerationCost;
