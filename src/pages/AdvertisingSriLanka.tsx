import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, Smartphone, MessageSquare, Globe, Layout, Share2,
  HelpCircle, ArrowRight, Zap, Target, TrendingUp,
  GraduationCap, ShoppingCart, Utensils, Building2, Home, Briefcase,
  BarChart3, Users, Clock, Shield, Star, Send, Eye, DollarSign,
  Tv, Radio, Newspaper, Image as ImageIcon, Search, Heart, Plane, Banknote,
  Phone, Trophy, ListChecks, MapPin, Award,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

/* ── Table of Contents ── */
const tocItems = [
  { id: "digital-audience", label: "Digital Audience in Sri Lanka — Why Now Is the Best Time" },
  { id: "geographic-reach", label: "Geographic Reach — Advertising Beyond Colombo" },
  { id: "what-is", label: "What Is Advertising in Sri Lanka?" },
  { id: "types", label: "Types of Advertising Available in Sri Lanka" },
  { id: "channel-comparison", label: "Channel Performance Comparison — All Channels Side by Side" },
  { id: "why-different", label: "Why BuzzConnect Is Different From Other Agencies" },
  { id: "vs-typical-agency", label: "BuzzConnect vs Typical Agency — Direct Comparison" },
  { id: "direct-marketing", label: "Why Direct Marketing Outperforms Traditional Advertising" },
  { id: "comparison", label: "Direct Marketing vs Social Media — Full Comparison" },
  { id: "industries", label: "Industries We Serve" },
  { id: "industry-channel", label: "Industry-by-Channel Advertising Recommendation" },
  { id: "results", label: "Real Campaign Results from BuzzConnect Clients" },
  { id: "cost", label: "Cost of Advertising in Sri Lanka" },
  { id: "roi-benchmarks", label: "Advertising ROI — Industry Benchmarks" },
  { id: "platforms", label: "Best Advertising Platforms in Sri Lanka in 2026" },
  { id: "choose-strategy", label: "How to Choose the Right Advertising Strategy" },
  { id: "how-it-works", label: "Step-by-Step: How a BuzzConnect Campaign Works" },
  { id: "mistakes", label: "Common Advertising Mistakes Sri Lankan Businesses Make" },
  { id: "faq", label: "Frequently Asked Questions" },
];

/* ── FAQs ── */
const faqs = [
  {
    q: "What is the best way to advertise in Sri Lanka?",
    a: "The most effective advertising strategy in Sri Lanka combines multi-channel direct marketing — specifically email, WhatsApp, and SMS — with targeted digital advertising on Google and social media. The optimal mix depends on your business type, target audience, and budget. For immediate lead generation, direct marketing via BuzzConnect's database consistently outperforms single-channel approaches. For long-term brand building, combining direct marketing with social media and SEO delivers the strongest compound returns.",
  },
  {
    q: "How much does advertising cost in Sri Lanka?",
    a: "Advertising costs in Sri Lanka vary enormously by channel and scale. Television advertising can cost LKR 150,000–500,000 per spot. Google Ads can cost LKR 50–500 per click. Facebook and Instagram campaigns typically generate leads at LKR 500–5,000 per lead depending on industry competition. BuzzConnect's direct marketing packages offer fixed-price options that provide significantly more reach per rupee than most alternatives — with transparent pricing and no hidden fees.",
  },
  {
    q: "How fast can I launch a campaign with BuzzConnect?",
    a: "BuzzConnect typically launches campaigns within 48 hours of receiving your brief, creative, and payment. In urgent situations — such as a flash sale or time-sensitive promotion — we can sometimes expedite this to 24 hours. This speed is one of BuzzConnect's core advantages over traditional advertising agencies, which may take weeks to launch a campaign.",
  },
  {
    q: "Is digital advertising effective in Sri Lanka?",
    a: "Yes — Sri Lanka's digital advertising landscape has matured significantly. With over 13 million internet users and 29 million mobile connections, digital advertising consistently delivers strong ROI for businesses across industries. The specific effectiveness depends on which channels you use, how well your audience is targeted, and the quality of your creative. BuzzConnect's multi-channel approach maximises effectiveness by combining the channels with the highest engagement rates in the Sri Lankan market.",
  },
  {
    q: "What makes direct marketing better than social media ads in Sri Lanka?",
    a: "Direct marketing (email, WhatsApp, SMS) offers several key advantages. First, delivery is guaranteed — your message reaches the recipient directly without depending on an algorithm. Second, open rates are dramatically higher — WhatsApp and SMS messages are opened by 85–98% of recipients, compared to 2–5% organic reach on Facebook. Third, costs are more predictable. Fourth, results are typically faster — inquiries often arrive within hours of campaign launch.",
  },
  {
    q: "Does BuzzConnect work for businesses outside Colombo?",
    a: "Absolutely. BuzzConnect runs campaigns targeting every district across Sri Lanka — Gampaha, Kandy, Galle, Matara, Kurunegala, Anuradhapura, Jaffna, Trincomalee, Batticaloa, Ratnapura, Badulla and more. Our database covers consumers and businesses island-wide, not just the Western Province.",
  },
  {
    q: "Can I target specific types of customers rather than everyone?",
    a: "Yes — precise targeting is one of BuzzConnect's core capabilities. We can target by location (province, district, city), age group, profession (students, graduates, business owners, job seekers, professionals), consumer interests, and more. This means your advertising budget reaches people most likely to be interested in what you offer.",
  },
  {
    q: "What types of businesses does BuzzConnect work with?",
    a: "BuzzConnect works with businesses of all sizes across virtually every industry — education and training institutes, real estate developers and agents, retail stores and e-commerce, restaurants and hospitality, recruitment agencies, healthcare providers, financial services, technology businesses, event organisers, NGOs, government bodies, and more.",
  },
  {
    q: "How do I measure the success of my advertising campaign?",
    a: "BuzzConnect provides campaign performance reports covering delivery statistics, open rates (for email campaigns), and click-through rates. Most importantly, you measure success by the number of inquiries, calls, messages, and website visits your campaign generates. We encourage clients to track every lead source so we can optimise future campaigns based on real conversion data.",
  },
  {
    q: "How often should I run advertising campaigns in Sri Lanka?",
    a: "Consistency outperforms one-off campaigns significantly. Businesses running monthly campaigns build audience familiarity, improve results through optimisation, and maintain a continuous pipeline of leads and enquiries. BuzzConnect recommends a minimum of one campaign per month for sustained growth, with weekly bursts during peak buying seasons for your industry.",
  },
  {
    q: "What is the difference between advertising and direct marketing?",
    a: "Advertising broadly refers to any paid communication promoting a business. Direct marketing is a specific form of advertising that delivers your message directly to individual verified contacts — bypassing mass media entirely. Direct marketing is more targeted, more measurable, and typically delivers better ROI for lead generation than traditional mass advertising approaches.",
  },
  {
    q: "Can BuzzConnect create campaign content in Sinhala and Tamil?",
    a: "Yes. BuzzConnect creates campaign content in English, Sinhala, and Tamil — and can target language-specific audience segments within the database. This is essential for campaigns targeting regional audiences where Sinhala or Tamil delivers significantly higher engagement than English.",
  },
  {
    q: "How does BuzzConnect measure success and improve future campaigns?",
    a: "BuzzConnect analyses every campaign after completion. If results are below expected benchmarks, the team identifies the likely cause — audience targeting, message, offer, timing, or channel selection — and recommends specific improvements for the next campaign. Performance history from each campaign is used to progressively improve subsequent results.",
  },
];

/* ── Geographic Reach ── */
const geographicReach = [
  { region: "Colombo & Western Province", opp: "Largest urban professional audience. Highest purchasing power. Most competitive advertising environment." },
  { region: "Kandy & Central Province", opp: "Strong education, retail, and tourism market. Growing digital adoption especially among younger demographics." },
  { region: "Galle & Southern Province", opp: "Tourism and hospitality hub. High-value property market. Growing entrepreneurial base with strong purchasing power." },
  { region: "Jaffna & Northern Province", opp: "Rapidly growing digital audience. Significantly underserved by most advertisers — lower competition, strong engagement rates." },
  { region: "Matara, Kurunegala, Anuradhapura", opp: "Growing middle-class consumer market. SMS and WhatsApp deliver strong results where internet speed is more variable." },
];

/* ── Channel Performance Comparison ── */
const channelComparison = [
  { channel: "SMS Marketing", reach: "98% open rate", best: "Flash sales, urgent offers, appointments, time-sensitive promotions" },
  { channel: "WhatsApp Marketing", reach: "85–95% open rate", best: "Personal outreach, bookings, high-value offers, real estate" },
  { channel: "Email Marketing", reach: "28–35% open rate (LK)", best: "B2B, professionals, education, finance, complex offers" },
  { channel: "Google Ads", reach: "Top search position", best: "High-intent buyers actively searching for your product or service" },
  { channel: "Web Banner Ads", reach: "High impression volume", best: "Brand awareness, retargeting, visual product promotion on Findit.lk" },
  { channel: "Facebook/Instagram", reach: "2–5% organic reach", best: "Consumer brand building, events, fashion, younger demographics" },
  { channel: "TikTok Ads", reach: "High for 18–35 audience", best: "Fashion, food, entertainment, consumer product launches" },
  { channel: "Television", reach: "Mass reach, no targeting", best: "National brand campaigns, FMCG, large consumer brands" },
  { channel: "Radio", reach: "Regional mass reach", best: "Local awareness, commuter audience, regional campaigns" },
  { channel: "Newspaper", reach: "35+ demographic", best: "Formal announcements, legal notices, recruitment ads" },
];

/* ── BuzzConnect vs Typical Agency ── */
const vsTypicalAgency = [
  { what: "Database", bc: "500,000+ verified Sri Lankan contacts — industry-segmented", typical: "Generic purchased lists with no verification" },
  { what: "Channels", bc: "Email + SMS + WhatsApp + Web Banners + Google Ads + Social Media", typical: "1 or 2 channels only" },
  { what: "Launch Speed", bc: "Campaign live within 48 hours of approval", typical: "2 to 3 weeks for typical agency" },
  { what: "Targeting", bc: "Segmented by industry, location, job title, age, behaviour", typical: "Broad demographic only" },
  { what: "Findit.lk Access", bc: "Exclusive placement on Sri Lanka's leading classified platform", typical: "No access" },
  { what: "Reporting", bc: "Full analytics — open rates, click rates, leads generated, CPL", typical: "Impressions and reach only" },
  { what: "Pricing", bc: "Fixed transparent packages with no hidden fees", typical: "Variable retainers with surprise charges" },
  { what: "Industry Focus", bc: "Proven campaigns for hotels, real estate, education, finance, events", typical: "Generic approach" },
];

/* ── Industry-Channel Recommendation ── */
const industryChannel = [
  { industry: "Hotels & Tourism", primary: "Email to professionals & travel agents", secondary: "SMS for last-minute booking urgency" },
  { industry: "Real Estate", primary: "Email to verified investor & buyer database", secondary: "WhatsApp for personalised property follow-up" },
  { industry: "Education", primary: "Email to parents & working professionals", secondary: "SMS for intake deadline reminders" },
  { industry: "Finance", primary: "Email to business owners & salaried staff", secondary: "WhatsApp for personal product enquiries" },
  { industry: "Restaurants", primary: "WhatsApp to local consumer database", secondary: "SMS for daily specials & weekend promotions" },
  { industry: "Events", primary: "Email for early registrations & awareness", secondary: "SMS for last-minute ticket urgency" },
  { industry: "Recruitment", primary: "Email to professional & graduate database", secondary: "Findit.lk classifieds for job listings" },
  { industry: "Healthcare", primary: "SMS to local area subscribers", secondary: "Email for service awareness campaigns" },
  { industry: "Fashion & Retail", primary: "WhatsApp for product & collection launches", secondary: "Email for seasonal sales & loyalty campaigns" },
  { industry: "Automotive", primary: "Email to professional & business owner base", secondary: "WhatsApp for test drive bookings & follow-up" },
];

/* ── ROI Benchmarks by Industry ── */
const roiBenchmarks = [
  { industry: "Real Estate", cpl: "LKR 2,500 – 8,000 per qualified property enquiry" },
  { industry: "Finance & Investment", cpl: "LKR 2,000 – 7,000 per qualified financial product lead" },
  { industry: "Hotels & Tourism", cpl: "LKR 500 – 2,000 per booking enquiry" },
  { industry: "Education", cpl: "LKR 800 – 2,500 per student course enquiry" },
  { industry: "Healthcare", cpl: "LKR 600 – 2,000 per patient appointment enquiry" },
  { industry: "Automotive", cpl: "LKR 1,500 – 5,000 per qualified vehicle enquiry" },
  { industry: "Events", cpl: "LKR 300 – 1,200 per ticket or registration lead" },
  { industry: "Recruitment", cpl: "LKR 200 – 800 per qualified candidate application" },
  { industry: "Restaurants", cpl: "LKR 150 – 600 per table reservation" },
];

/* ── Common Mistakes ── */
const commonMistakes = [
  { title: "Relying on a Single Channel", desc: "Businesses running only Facebook ads or one email campaign are severely limiting results. The most effective Sri Lankan advertisers run coordinated multi-channel campaigns — email and SMS together, or Google Ads combined with direct marketing follow-up. Each additional channel multiplies the impact of the others." },
  { title: "No Dedicated Landing Page", desc: "Sending advertising traffic to your homepage is one of the most expensive mistakes in Sri Lankan digital marketing. A dedicated landing page with one clear offer and one call to action converts at 5 to 10 times the rate of a homepage — for the same advertising spend." },
  { title: "Advertising Without a Specific Offer", desc: "'Visit our website' is not an advertising offer. 'Book a free consultation this week' is. 'Register before Friday for 20% off' is. Every campaign must have one specific, time-bound reason for the audience to act right now." },
  { title: "Running One Campaign and Stopping", desc: "Advertising compounds over time. The first campaign delivers results. The second delivers more because the agency has learned what works. Businesses that run one campaign and stop are capturing perhaps 20% of the value that consistent campaigning would deliver." },
  { title: "Slow Lead Follow-Up", desc: "Generating leads through advertising and then following up 2 to 3 days later wastes the entire investment. Sri Lankan consumers who submit an enquiry expect a response within 2 to 4 hours. Leads not contacted within the first hour convert at a fraction of the rate." },
];

/* ── Industries ── */
const industries = [
  { icon: GraduationCap, label: "Education & Training Institutes", desc: "Targeted email and WhatsApp campaigns timed around A/L results, exam season, and university admissions periods. SMS reminders for open day events and application deadlines.", link: "/education-marketing-sri-lanka" },
  { icon: ShoppingCart, label: "Retail & E-Commerce", desc: "Flash sale promotions via WhatsApp and SMS for instant response, product launches via email with full pricing, banner advertising on Findit.lk and partner sites.", link: "/fashion-marketing-sri-lanka" },
  { icon: Utensils, label: "Restaurants, Cafes & Food Businesses", desc: "Location-targeted WhatsApp and SMS campaigns promoting daily specials and seasonal menus, email campaigns for loyalty promotions and event bookings.", link: "/restaurant-marketing-sri-lanka" },
  { icon: Home, label: "Real Estate", desc: "Targeted email campaigns to professionals and investors, WhatsApp campaigns to high-income segments, banner advertising on Findit.lk, SMS alerts for new listings.", link: "/real-estate-marketing-sri-lanka" },
  { icon: Briefcase, label: "Recruitment & HR", desc: "Email and WhatsApp campaigns targeted to relevant professional and graduate segments, SMS broadcasts for urgent vacancy fills, classified listings on Findit.lk's jobs section.", link: "/staff-recruitment-sri-lanka" },
  { icon: Plane, label: "Hotels, Guest Houses & Tourism", desc: "Email campaigns targeting Sri Lankan professionals for weekend getaways, WhatsApp promotions for seasonal packages, banner advertising on travel platforms.", link: "/hotel-marketing-sri-lanka" },
  { icon: Banknote, label: "Financial Services", desc: "Email campaigns to business owners and salaried professionals, WhatsApp campaigns for product launches and seasonal promotions, SMS alerts for limited-period offers.", link: "/finance-marketing-sri-lanka" },
  { icon: Heart, label: "Healthcare & Wellness", desc: "Hospitals, medical clinics, pharmacies, gyms, and wellness centres reaching Sri Lankan patients and health-conscious consumers responsibly.", link: "/lead-generation-sri-lanka" },
];

/* ── Stats ── */
const heroStats = [
  { stat: "13M+", label: "Internet Users" },
  { stat: "29M+", label: "Mobile Connections" },
  { stat: "2,000+", label: "Businesses Served" },
  { stat: "48hrs", label: "Campaign Launch" },
];

/* ── Digital Audience Stats ── */
const audienceStats = [
  { icon: Globe, stat: "13M+", label: "Internet users browsing daily across Sri Lanka" },
  { icon: Smartphone, stat: "29M+", label: "Active mobile connections (dual-SIM is common)" },
  { icon: MessageSquare, stat: "80%+", label: "WhatsApp penetration among smartphone users" },
  { icon: Share2, stat: "7M+", label: "Sri Lankans using Facebook every month" },
  { icon: TrendingUp, stat: "30%/yr", label: "Mobile commerce growth rate" },
  { icon: MapPin, stat: "Island-wide", label: "Reach into Kandy, Galle, Jaffna, Matara & more" },
];

/* ── Types of Advertising ── */
const digitalTypes = [
  { icon: Search, title: "Search Engine Advertising (Google Ads)", desc: "Your ad appears at the top of Google when potential customers actively search for your product. Highest-intent advertising. Best for: e-commerce, real estate, education, professional services, hospitality." },
  { icon: Share2, title: "Social Media Advertising (Facebook & Instagram)", desc: "Granular targeting by age, location, interests, income, and behaviour. Sri Lanka has 7M+ Facebook users. Best for: brand building, product launches, event promotions, younger demographics." },
  { icon: TrendingUp, title: "TikTok Advertising", desc: "Explosive growth among 18–35 demographic. Short-form video ads deliver high engagement at low cost. Best for: fashion, food, entertainment, courses, consumer products." },
  { icon: Mail, title: "Email Marketing", desc: "One of the highest ROI channels globally. Targeted campaigns to Sri Lankan professionals, students, and consumers can generate substantial inquiries within 24 hours. Best for: courses, financial services, B2B, job listings." },
  { icon: MessageSquare, title: "WhatsApp Marketing", desc: "80%+ of Sri Lankan smartphone users are on WhatsApp. Open rates exceed 85–95% vs email's 20–30%. Best for: promotions, appointment reminders, event invitations, real estate." },
  { icon: Smartphone, title: "SMS Marketing", desc: "98% open rate with most messages read within 3 minutes. No internet required. Best for: flash sales, event reminders, restaurant offers, time-sensitive promotions." },
  { icon: Layout, title: "Display & Banner Advertising", desc: "Banner ads on high-traffic Sri Lankan websites and news portals. Findit.lk offers exceptional reach at affordable prices. Best for: real estate, vehicles, jobs, broad local audiences." },
];

const traditionalTypes = [
  { icon: Tv, title: "Television Advertising", desc: "Dominant medium for mass-market brand building. Prime-time slots on Sirasa TV, Hiru TV, TV Derana, ITN reach millions. Best for: large brands, FMCG, emotional storytelling." },
  { icon: Radio, title: "Radio Advertising", desc: "Effective for regional campaigns and reaching commuters. Highly cost-effective vs TV. Yes FM, Sirasa FM, Shakthi FM carry strong listener loyalty." },
  { icon: Newspaper, title: "Newspaper Advertising", desc: "Daily Mirror, Sunday Times, Lankadeepa, and Divaina retain loyal readerships, especially among the 35+ demographic. Strong for legal notices, recruitment, formal announcements." },
  { icon: ImageIcon, title: "Outdoor & Print", desc: "Billboards along major roads and city centres create high-frequency brand impressions in Colombo, Kandy, and Galle. Flyers and brochures still work in real estate, hospitality, retail." },
];

/* ── Why Different ── */
const differentiators = [
  { icon: Send, title: "Multi-Channel Combined", desc: "Most agencies specialise in one channel. BuzzConnect combines email, WhatsApp, SMS, and web advertising into a single unified campaign — reaching the same customer across multiple touchpoints for dramatically higher response rates." },
  { icon: Users, title: "Proprietary Sri Lankan Database", desc: "Years of building a carefully curated, opted-in database of consumers, students, job seekers, business owners, and professionals across every district — segmented by demographics, interests, and behaviour." },
  { icon: Zap, title: "48-Hour Launch", desc: "Traditional agencies need weeks. BuzzConnect launches campaigns within 48 hours of receiving your brief, creative, and payment. When speed matters, we deliver." },
  { icon: Trophy, title: "Findit.lk Exclusive Access", desc: "BuzzConnect owns and operates Findit.lk — one of Sri Lanka's leading classified platforms. Our clients get exclusive listing and banner placement on a site receiving hundreds of thousands of monthly visits." },
  { icon: BarChart3, title: "Real Results, Not Vanity Metrics", desc: "Reach and likes are interesting. Inquiries, leads, calls, and sales matter. Our reports focus on the metrics that affect your bottom line." },
];

/* ── Direct Marketing Channels ── */
const directChannels = [
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing — Sri Lanka's Most Powerful Channel",
    points: [
      "Open rates consistently above 85–95% (vs 20–30% for email)",
      "Messages feel personal and direct, creating higher engagement",
      "Supports rich media — images, videos, PDFs, clickable links",
      "Two-way communication — prospects can ask questions immediately",
      "Works across all smartphones, even on slower 3G connections",
      "No algorithmic gatekeeping — your message arrives, period",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing — Cost-Effective Mass Reach",
    points: [
      "Average ROI of $36–$42 for every $1 invested (Litmus, 2023)",
      "Reach tens of thousands of prospects simultaneously at minimal cost",
      "Include full product descriptions, images, pricing, and CTAs",
      "Ideal for promotions with complex offers requiring explanation",
      "Trackable — opens, clicks, and conversions measured precisely",
      "Sent from high-reputation servers for strong deliverability",
    ],
  },
  {
    icon: Smartphone,
    title: "SMS Marketing — Guaranteed Delivery, Instant Attention",
    points: [
      "98% open rate — the highest of any marketing channel",
      "90% of messages read within 3 minutes of receipt",
      "Works on all phones — including basic feature phones in rural areas",
      "Ideal for flash sales, time-limited offers, event reminders",
      "Cost per message extremely low — accessible for small businesses",
      "Carrier-grade infrastructure for reliable bulk delivery",
    ],
  },
];

/* ── Cost tables ── */
const traditionalCosts = [
  { channel: "Television (Sirasa, Hiru)", format: "30-second prime-time spot", cost: "150,000 – 500,000+ per spot" },
  { channel: "Radio", format: "30-second weekday spot", cost: "15,000 – 50,000 per spot" },
  { channel: "National Newspaper", format: "Half-page colour ad", cost: "100,000 – 300,000 per insertion" },
  { channel: "Billboard (Colombo)", format: "Monthly rental", cost: "150,000 – 600,000 per month" },
  { channel: "Flyer Distribution", format: "Per 10,000 (print + distribution)", cost: "25,000 – 60,000" },
];

const digitalCosts = [
  { channel: "Google Ads", format: "Per click (competitive keywords)", cost: "50 – 500 per click" },
  { channel: "Facebook/Instagram", format: "Cost per 1,000 impressions", cost: "500 – 3,000 per CPM" },
  { channel: "Facebook/Instagram", format: "Cost per lead (typical)", cost: "500 – 5,000 per lead" },
  { channel: "SEO Agency", format: "Monthly retainer", cost: "30,000 – 150,000+ per month" },
  { channel: "Influencer Marketing", format: "Per post (micro-influencer)", cost: "15,000 – 100,000 per post" },
];

/* ── Case Studies ── */
const caseStudies = [
  {
    title: "Private University, Colombo",
    objective: "Generate applications for a new postgraduate program",
    campaign: "Email + WhatsApp campaign to working professionals aged 25–40 with university degrees",
    results: ["1,200+ inquiries received within 7 days", "340 completed application forms", "28 confirmed enrollments within 30 days", "Cost per enrollment significantly lower than Facebook"],
  },
  {
    title: "Real Estate Developer, Western Province",
    objective: "Generate qualified leads for a new apartment project",
    campaign: "Email to professionals + WhatsApp to high-income segment + Findit.lk banners",
    results: ["850+ qualified inquiries within 14 days", "60+ site visits booked", "12 deposits paid within 30 days", "ROI exceeded 15x campaign investment"],
  },
  {
    title: "Restaurant Chain, Colombo",
    objective: "Drive footfall for a weekend promotion",
    campaign: "WhatsApp + SMS to Colombo consumers aged 20–45",
    results: ["Launched Thursday — promotion ran Fri–Sun", "400+ table reservations received", "Weekend revenue increased 65% vs prior month"],
  },
  {
    title: "Recruitment Agency",
    objective: "Fill 50 vacancies for a multinational client within 30 days",
    campaign: "Email + WhatsApp to professional segments + Findit.lk job listings",
    results: ["3,000+ applications in 10 days", "All 50 positions filled within 21 days", "Cost per hire 40% lower than newspaper ads"],
  },
  {
    title: "Finance Company, Colombo",
    objective: "Generate qualified leads for a new personal loan product targeting salaried professionals",
    campaign: "Email campaign to salaried professionals database + SMS broadcast to verified consumers",
    results: ["620+ loan enquiries received in 5 days", "180 qualified applications submitted", "Cost per qualified lead 60% lower than equivalent Google Ads"],
  },
  {
    title: "Fashion Brand, Island-Wide Campaign",
    objective: "Launch a new clothing collection and drive online sales nationwide",
    campaign: "WhatsApp campaign to fashion-interested consumer database + email to past customer list",
    results: ["900+ website visits within 48 hours of launch", "240 orders placed in the first week", "Revenue target achieved 11 days ahead of schedule"],
  },
];

/* ── Best platforms by category ── */
const platformCategories = [
  {
    icon: Zap,
    title: "For Immediate Lead Generation",
    items: ["WhatsApp direct marketing — highest open rates", "SMS marketing — guaranteed delivery", "Email marketing — high ROI, detailed targeting"],
  },
  {
    icon: Search,
    title: "For Search Intent Targeting",
    items: ["Google Search Ads — capture active searchers", "Google Shopping Ads — for e-commerce and retail"],
  },
  {
    icon: Share2,
    title: "For Brand Building & Visual Advertising",
    items: ["Facebook & Instagram — broad reach, visual format", "YouTube — video storytelling, growing audience", "TikTok — younger demographic, high engagement"],
  },
  {
    icon: Layout,
    title: "For Classified & Property Advertising",
    items: ["Findit.lk — Sri Lanka's leading classified platform (owned by BuzzConnect, exclusive placement advantage)"],
  },
  {
    icon: TrendingUp,
    title: "For Authority & B2B",
    items: ["SEO-optimized blog content — long-term organic traffic", "LinkedIn advertising — B2B, professional audience", "PR coverage — Roar.lk, Daily FT, LMD"],
  },
];

/* ── Strategy questions ── */
const strategyQuestions = [
  {
    q: "What is your primary objective right now?",
    options: [
      "Need leads & sales immediately → Direct marketing (email, WhatsApp, SMS)",
      "Need brand awareness → Social media + outdoor + display",
      "Need search visibility → Google Ads + SEO",
      "Need to fill vacancies fast → Direct marketing + classifieds",
    ],
  },
  {
    q: "Who is your target audience?",
    options: [
      "Students & young adults (18–28) → WhatsApp, email, Instagram, TikTok, SMS",
      "Working professionals (28–45) → Email, LinkedIn, Facebook, Google",
      "Business owners → Email, WhatsApp, LinkedIn, Google",
      "General consumers island-wide → SMS, WhatsApp, Facebook, radio",
      "Older demographic (45+) → SMS, email, Facebook, newspaper, radio",
    ],
  },
  {
    q: "What is your budget?",
    options: [
      "Under LKR 50,000 → SMS or WhatsApp marketing for immediate reach",
      "LKR 50,000 – 200,000 → Multi-channel direct marketing package",
      "LKR 200,000+ → Full multi-channel + social + classifieds",
    ],
  },
  {
    q: "How urgently do you need results?",
    options: [
      "Within 48 hours → Direct marketing (SMS, WhatsApp)",
      "Within 1–2 weeks → Multi-channel direct marketing campaign",
      "3–6 months growth → Direct marketing + social + SEO + content",
    ],
  },
];

/* ── Steps ── */
const steps = [
  { num: "01", title: "Discovery Call (Day 1)", desc: "Contact us via phone, WhatsApp, or form. A campaign manager discusses your objectives, audience, geography, and budget. Takes 15–30 minutes." },
  { num: "02", title: "Campaign Strategy (Day 1–2)", desc: "We recommend the optimal channel mix, audience segments from our database, campaign timing, and messaging. You receive a clear proposal with fixed pricing." },
  { num: "03", title: "Creative & Content (Day 2–3)", desc: "Provide your content — images, offer details, key message. Our team can assist with copywriting and creative formatting optimised for each channel." },
  { num: "04", title: "Audience Segmentation (Day 2–3)", desc: "We pull and verify the target audience from our database based on agreed profile — location, age, profession, interests. Only verified contacts are used." },
  { num: "05", title: "Campaign Launch (Day 3–4 / 48 hours)", desc: "Your campaign goes live. Emails dispatched, WhatsApp delivered, SMS broadcasts sent, banner ads live on partner platforms. You receive launch confirmation." },
  { num: "06", title: "Results & Reporting", desc: "Detailed report covering delivery rates, opens, clicks, and — most importantly — the volume of inquiries and leads generated. We discuss results and recommend next steps." },
];

const AdvertisingSriLanka = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Advertising in Sri Lanka",
      provider: { "@type": "Organization", name: "BuzzConnect", url: "https://buzzconnect.lk" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Sri Lanka's most trusted multi-channel advertising company offering WhatsApp, SMS, email, Google Ads and display advertising with 48-hour campaign launches.",
      serviceType: "Multi-Channel Advertising",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Advertising in Sri Lanka | Best Advertising Company for Fast Results",
      url: "https://buzzconnect.lk/advertising-sri-lanka",
      isPartOf: { "@type": "WebSite", name: "BuzzConnect", url: "https://buzzconnect.lk" },
    },
  ], []);

  const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  return (
    <ServicePageLayout
      badge="Sri Lanka's Most Trusted Multi-Channel Advertising Company"
      title="Advertising in Sri Lanka – Reach Millions of Customers Fast with BuzzConnect"
      subtitle="Multi-channel advertising that combines email, WhatsApp, SMS, and high-traffic web placements to deliver measurable results within days — not months."
    >
      <SEOHead
        title="Advertising in Sri Lanka 2026 — #1 Multi-Channel Ad Company"
        description="Advertising in Sri Lanka 2026 — multi-channel campaigns reaching 500,000+ verified contacts via Email, SMS, WhatsApp, Google Ads & banners. Live in 48 hours."
        canonical="/advertising-sri-lanka"
        keywords="advertising sri lanka, advertising in sri lanka, best advertising company sri lanka, multi-channel advertising sri lanka, digital advertising sri lanka, online advertising sri lanka, advertising agency sri lanka, advertising cost sri lanka, types of advertising sri lanka, whatsapp marketing sri lanka, sms marketing sri lanka, email marketing sri lanka, advertising 2026 sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Advertising Sri Lanka", url: "/advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">

        {/* ── Hero Stats Bar ── */}
        <motion.div {...fadeIn} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {heroStats.map(s => (
            <div key={s.label} className="text-center p-5 rounded-2xl bg-accent/10 border border-accent/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent font-heading">{s.stat}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Introduction ── */}
        <motion.div {...fadeIn} className="mb-16 space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Buzz Connect offers the most powerful <strong>advertising solutions in Sri Lanka</strong> — designed to help businesses reach targeted audiences quickly, cost-effectively, and at massive scale. Using a combination of email marketing, WhatsApp campaigns, SMS marketing, and high-traffic web placements, we deliver measurable results <strong>within days — not months</strong>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you're looking for the fastest, most affordable way to promote your business in Sri Lanka, generate high-quality leads, and increase sales — BuzzConnect provides the most complete multi-channel advertising system available on the island today.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're a small local business in Colombo, a large enterprise expanding island-wide, or an overseas company targeting Sri Lankan consumers — BuzzConnect gives you the reach, targeting, and results you need.
          </p>

          {/* ── Why 2026 ── */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-accent/5 border border-accent/20">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">
              Why 2026 Is the Best Time to Advertise Your Business in Sri Lanka
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Sri Lanka's digital economy is growing faster than at any previous point in its history. Consumer behaviour has permanently shifted online — people research products, compare services, and make purchasing decisions through their phones <strong>before they ever speak to a salesperson</strong> or visit a business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Early movers in digital advertising in Sri Lanka are already seeing <strong>4 to 6 times return</strong> on every rupee spent. The cost of not advertising is not zero — every month you are invisible, your competitors are not.
            </p>
          </div>

          {/* ── What Actually Makes Advertising Work ── */}
          <div className="mt-8">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
              What Actually Makes Advertising Work in Sri Lanka
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After running thousands of campaigns across every major industry in Sri Lanka, BuzzConnect has identified the <strong>four factors</strong> that determine whether a campaign succeeds or fails:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { t: "The right audience", d: "Reaching people who can actually buy from you, not a broad general population" },
                { t: "The right channel", d: "Using the platforms your audience actually uses and trusts in Sri Lanka" },
                { t: "The right message", d: "One clear offer with a compelling, specific reason to act now" },
                { t: "The right timing", d: "Reaching your audience when they are most receptive to your offer" },
              ].map(it => (
                <div key={it.t} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div><strong className="text-foreground">{it.t}</strong> <span className="text-muted-foreground text-sm">— {it.d}</span></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Table of Contents ── */}
        <motion.nav {...fadeIn} className="mb-16 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card" aria-label="Table of Contents">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-accent" /> In This Guide
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* ── 1. Digital Audience ── */}
        <motion.div id="digital-audience" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🌍 1. Digital Audience in Sri Lanka — Why Now Is the Best Time to Advertise
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Sri Lanka's digital landscape has undergone a dramatic transformation over the past five years, creating one of the most exciting advertising opportunities in South Asia. The numbers tell a compelling story.
          </p>

          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Key statistics you need to know:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {audienceStats.map(s => (
              <div key={s.label} className="p-5 rounded-2xl bg-card border border-border shadow-card">
                <s.icon className="w-7 h-7 text-accent mb-3" />
                <div className="text-2xl font-bold text-foreground font-heading mb-1">{s.stat}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-lg font-bold text-foreground mb-3">What does this mean for your business?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Your customers are <strong>already online</strong> — and they are reachable right now. The window to establish a dominant digital advertising presence in Sri Lanka is wide open, but it won't stay open forever. Early movers in digital advertising are already seeing outsized returns compared to businesses relying solely on traditional channels.
          </p>
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-foreground leading-relaxed">
              BuzzConnect helps you tap into this growing audience instantly, with campaigns that go live within <strong>48 hours of briefing</strong> and start generating real inquiries from day one.
            </p>
          </div>
        </motion.div>

        {/* ── Geographic Reach ── */}
        <motion.div id="geographic-reach" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🗺️ Advertising in Sri Lanka Beyond Colombo — Island-Wide Reach
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            One of the biggest missed opportunities for Sri Lankan businesses is limiting advertising to the Western Province. Digital penetration is growing rapidly across every region — and the audiences <strong>outside Colombo are underserved</strong> by most agencies.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-4 font-heading font-bold text-foreground">Region</th>
                  <th className="text-left p-4 font-heading font-bold text-foreground">Advertising Opportunity</th>
                </tr>
              </thead>
              <tbody>
                {geographicReach.map((row, i) => (
                  <tr key={row.region} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-4 font-semibold text-foreground"><MapPin className="inline w-4 h-4 text-accent mr-2" />{row.region}</td>
                    <td className="p-4 text-muted-foreground">{row.opp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── 2. What Is Advertising ── */}
        <motion.div id="what-is" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            📢 2. What Is Advertising in Sri Lanka?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>Advertising in Sri Lanka</strong> refers to the full range of paid communication strategies used by businesses to promote their products, services, or brand to local audiences across the island. It encompasses both traditional media and modern digital channels — and the most successful businesses in Sri Lanka today use a combination of both.
          </p>

          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Traditional advertising channels that remain relevant:</h3>
          <div className="space-y-3 mb-8">
            {[
              { t: "Television advertising", d: "Powerful for mass brand awareness. Prime-time slots on Sirasa TV, Hiru TV, TV Derana, ITN reach millions of households. Production costs are high; targeting is limited." },
              { t: "Radio advertising", d: "Highly effective for regional targeting and reaching commuters. Yes FM, Sirasa FM, Shakthi FM carry strong listener loyalty." },
              { t: "Newspaper advertising", d: "Daily Mirror, Sunday Times, Lankadeepa, Divaina retain loyal readerships, especially among the 35+ demographic." },
              { t: "Outdoor advertising", d: "Billboards, lamp post banners, bus shelters, transit advertising remain highly visible in Colombo and major cities." },
              { t: "Print collateral", d: "Flyers, brochures, catalogs, direct mail still work in real estate, hospitality, and retail." },
            ].map(it => (
              <div key={it.t} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div><strong className="text-foreground">{it.t}</strong> <span className="text-muted-foreground">— {it.d}</span></div>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Modern digital and direct advertising channels:</h3>
          <div className="space-y-3 mb-8">
            {[
              { t: "Email marketing", d: "Permission-based campaigns sent to large databases of Sri Lankan consumers, students, professionals, and business owners." },
              { t: "WhatsApp marketing", d: "Direct message campaigns delivered to targeted segments with open rates exceeding 90%." },
              { t: "SMS marketing", d: "Instant delivery of promotional messages to thousands of mobile subscribers simultaneously." },
              { t: "Google Ads", d: "Pay-per-click advertising on Sri Lanka's most-used search engine, targeting active searchers." },
              { t: "Social media advertising", d: "Paid campaigns on Facebook, Instagram, TikTok, and LinkedIn targeting Sri Lankan audiences by demographics, interests, behaviour." },
              { t: "Website banner advertising", d: "Display ads on high-traffic Sri Lankan websites and classified platforms." },
              { t: "YouTube advertising", d: "Video ads shown to Sri Lankan viewers before and during popular local content." },
            ].map(it => (
              <div key={it.t} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div><strong className="text-foreground">{it.t}</strong> <span className="text-muted-foreground">— {it.d}</span></div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-muted-foreground leading-relaxed">
              While many businesses choose only one or two of these channels, the businesses that consistently outperform their competition use <strong>multi-channel campaigns</strong> — reaching their audience across multiple touchpoints simultaneously for maximum impact.
            </p>
          </div>
        </motion.div>

        {/* ── 3. Types of Advertising ── */}
        <motion.div id="types" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            📺 3. Types of Advertising Available in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Understanding the full advertising landscape helps you make smarter investment decisions. Here is a breakdown of every major advertising type available in Sri Lanka today, along with who each one is best suited for.
          </p>

          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Digital Advertising</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {digitalTypes.map(t => (
              <div key={t.title} className="p-5 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <t.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground text-sm">{t.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Traditional Advertising</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {traditionalTypes.map(t => (
              <div key={t.title} className="p-5 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <t.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground text-sm">{t.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Channel Performance Comparison ── */}
        <motion.div id="channel-comparison" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            📊 Channel Performance Comparison — All Advertising Channels in Sri Lanka (2026)
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Use this table to quickly identify which advertising channel matches your goal, audience, and expected results.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-3 font-heading font-bold text-foreground">Channel</th>
                  <th className="text-left p-3 font-heading font-bold text-accent">Open / Reach Rate</th>
                  <th className="text-left p-3 font-heading font-bold text-foreground">Best For in Sri Lanka</th>
                </tr>
              </thead>
              <tbody>
                {channelComparison.map((row, i) => (
                  <tr key={row.channel} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-3 font-semibold text-foreground">{row.channel}</td>
                    <td className="p-3 text-foreground">{row.reach}</td>
                    <td className="p-3 text-muted-foreground">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── 4. Why BuzzConnect is Different ── */}
        <motion.div id="why-different" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            ⚡ 4. Why BuzzConnect Is Different From Other Advertising Agencies in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The Sri Lankan advertising market is crowded. There are hundreds of agencies offering social media management, graphic design, and digital marketing. So what makes BuzzConnect the right choice?
          </p>

          <div className="space-y-4">
            {differentiators.map((d, i) => (
              <div key={d.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <d.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      <span className="text-accent">0{i + 1}.</span> {d.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── BuzzConnect vs Typical Agency ── */}
        <motion.div id="vs-typical-agency" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            ⚖️ BuzzConnect vs a Typical Sri Lankan Advertising Agency — Side-by-Side
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            See exactly how BuzzConnect compares against a typical advertising agency in Sri Lanka across the eight factors that matter most to your campaign results.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-3 font-heading font-bold text-foreground">What to Compare</th>
                  <th className="text-left p-3 font-heading font-bold text-accent">BuzzConnect</th>
                  <th className="text-left p-3 font-heading font-bold text-muted-foreground">Typical Agency</th>
                </tr>
              </thead>
              <tbody>
                {vsTypicalAgency.map((row, i) => (
                  <tr key={row.what} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-3 font-semibold text-foreground">{row.what}</td>
                    <td className="p-3 text-foreground">{row.bc}</td>
                    <td className="p-3 text-muted-foreground">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── 5. Why Direct Marketing Outperforms ── */}
        <motion.div id="direct-marketing" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            📊 5. Why Direct Marketing Outperforms Traditional Advertising in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Sri Lanka is a <strong>mobile-first nation</strong> where people communicate primarily through their phones. This fundamental reality makes direct marketing — reaching people directly on their devices — significantly more effective than traditional advertising for most business objectives.
          </p>

          <div className="space-y-6">
            {directChannels.map(c => (
              <div key={c.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{c.title}</h3>
                </div>
                <ul className="space-y-2">
                  {c.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── 6. Direct vs Social Comparison ── */}
        <motion.div id="comparison" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🆚 6. Direct Marketing vs Social Media Advertising — Full Comparison
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Many businesses begin their advertising journey with Facebook and Instagram ads. While social media has genuine value, understanding how it compares to direct marketing helps you allocate your budget more effectively.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-border shadow-card mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                  <th className="text-left p-4 font-heading font-bold text-accent">Direct Marketing (BuzzConnect)</th>
                  <th className="text-left p-4 font-heading font-bold text-muted-foreground">Social Media Advertising</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Message Delivery", direct: "Guaranteed delivery to inbox/phone", social: "Subject to algorithm approval" },
                  { feature: "Reach Speed", direct: "Instant — within minutes", social: "Slower — builds over days" },
                  { feature: "Targeting Method", direct: "Database-based — defined segments", social: "Algorithm-based estimates" },
                  { feature: "Open Rate", direct: "85–98% (WhatsApp/SMS)", social: "2–5% organic; paid varies" },
                  { feature: "Cost Efficiency", direct: "Fixed packages, predictable", social: "Variable — rises with competition" },
                  { feature: "Ad Fatigue", direct: "Low — feels personal", social: "High — users scroll past ads" },
                  { feature: "Result Speed", direct: "Inquiries within hours", social: "Days to weeks to build" },
                  { feature: "Audience Ownership", direct: "You retain audience data", social: "Platform controls access" },
                  { feature: "Internet Required", direct: "SMS works without internet", social: "Connection required" },
                  { feature: "Best Use Case", direct: "Lead gen, promotions, conversions", social: "Brand awareness, retargeting" },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-foreground">{row.direct}</td>
                    <td className="p-4 text-muted-foreground">{row.social}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-foreground font-semibold mb-2">Our recommendation:</p>
            <p className="text-muted-foreground leading-relaxed">
              The most powerful campaigns in Sri Lanka <strong>combine both approaches</strong>. Use direct marketing (email, WhatsApp, SMS) for immediate lead generation and conversions. Use social media for ongoing brand building, retargeting warm leads, and community. BuzzConnect helps you integrate both seamlessly.
            </p>
          </div>
        </motion.div>

        {/* ── 7. Industries ── */}
        <motion.div id="industries" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🏢 7. Industries We Serve
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            BuzzConnect works with businesses across virtually every sector of the Sri Lankan economy. Our multi-channel approach is flexible enough to serve the unique needs of each industry while delivering consistent, measurable results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map(ind => (
              <Link key={ind.label} to={ind.link} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <ind.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-foreground mb-1">{ind.label}</h3>
                  <p className="text-sm text-muted-foreground">{ind.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 italic">
            <strong>Other industries we serve:</strong> Vehicle sales and rentals, event management, fashion and lifestyle brands, logistics and freight, IT and technology services, government and public sector communications, NGOs and nonprofit organisations.
          </p>
        </motion.div>

        {/* ── Industry × Channel Recommendation ── */}
        <motion.div id="industry-channel" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🎯 Which Advertising Channel Works Best for Your Industry in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Each industry has its own audience behaviour. This table shows BuzzConnect's recommended primary and secondary channel for the most active sectors in Sri Lanka.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-3 font-heading font-bold text-foreground">Industry</th>
                  <th className="text-left p-3 font-heading font-bold text-accent">Primary Channel</th>
                  <th className="text-left p-3 font-heading font-bold text-foreground">Secondary Channel</th>
                </tr>
              </thead>
              <tbody>
                {industryChannel.map((row, i) => (
                  <tr key={row.industry} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-3 font-semibold text-foreground">{row.industry}</td>
                    <td className="p-3 text-foreground">{row.primary}</td>
                    <td className="p-3 text-muted-foreground">{row.secondary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── 8. Real Campaign Results ── */}
        <motion.div id="results" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            📈 8. Real Campaign Results from BuzzConnect Clients
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We believe in transparency. Here are real examples of the kinds of results our clients achieve with BuzzConnect campaigns.
          </p>

          <div className="space-y-6">
            {caseStudies.map((cs, i) => (
              <div key={cs.title} className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Case Study {i + 1} — {cs.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs uppercase font-semibold text-muted-foreground mb-1">Objective</p>
                    <p className="text-sm text-foreground">{cs.objective}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold text-muted-foreground mb-1">Campaign</p>
                    <p className="text-sm text-foreground">{cs.campaign}</p>
                  </div>
                </div>
                <p className="text-xs uppercase font-semibold text-muted-foreground mb-2">Results</p>
                <ul className="space-y-2">
                  {cs.results.map(r => (
                    <li key={r} className="flex items-start gap-2 text-sm text-foreground">
                      <TrendingUp className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── 9. Cost ── */}
        <motion.div id="cost" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            💰 9. Cost of Advertising in Sri Lanka — What to Expect
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            One of the most common questions businesses ask is: <em>"How much does advertising in Sri Lanka cost?"</em> The honest answer depends on your channel, audience size, campaign duration, and objectives. Here is a transparent breakdown.
          </p>

          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Traditional Advertising Costs (Approximate)</h3>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-card mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-3 font-heading font-bold text-foreground">Channel</th>
                  <th className="text-left p-3 font-heading font-bold text-foreground">Format</th>
                  <th className="text-left p-3 font-heading font-bold text-accent">Cost (LKR)</th>
                </tr>
              </thead>
              <tbody>
                {traditionalCosts.map((row, i) => (
                  <tr key={row.channel + row.format} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-3 font-medium text-foreground">{row.channel}</td>
                    <td className="p-3 text-muted-foreground">{row.format}</td>
                    <td className="p-3 text-foreground font-semibold">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mb-8 italic">
            Traditional advertising is expensive, difficult to track, and provides no targeting. A TV ad costs hundreds of thousands of rupees and reaches everyone — including the vast majority of viewers who will never buy your product.
          </p>

          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Digital Advertising Costs (Approximate)</h3>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-card mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-3 font-heading font-bold text-foreground">Channel</th>
                  <th className="text-left p-3 font-heading font-bold text-foreground">Format</th>
                  <th className="text-left p-3 font-heading font-bold text-accent">Cost (LKR)</th>
                </tr>
              </thead>
              <tbody>
                {digitalCosts.map((row, i) => (
                  <tr key={row.channel + row.format} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-3 font-medium text-foreground">{row.channel}</td>
                    <td className="p-3 text-muted-foreground">{row.format}</td>
                    <td className="p-3 text-foreground font-semibold">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mb-8 italic">
            Digital advertising costs are rising rapidly in Sri Lanka as more businesses compete for the same audiences on Google and Meta. Costs per click and per lead have increased significantly over the past three years.
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-accent/5 border border-accent/20">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-accent" /> BuzzConnect Direct Marketing Packages
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              BuzzConnect offers transparent, fixed-price packages with no hidden fees. Our packages provide significantly more reach per rupee than social media advertising or traditional media.
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Fixed package price — you know exactly what you spend before you commit",
                "No ongoing management fees or percentage-of-spend markups",
                "Massive reach included — thousands of targeted recipients per campaign",
                "Multi-channel exposure in a single package — email + WhatsApp + SMS",
                "Access to Findit.lk listings included in select packages",
                "No minimum contract period — campaigns can be one-time or recurring",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-semibold">
              👉 Contact BuzzConnect today for a customised quote based on your campaign objectives, audience, and budget.
            </p>
          </div>
        </motion.div>

        {/* ── ROI Benchmarks ── */}
        <motion.div id="roi-benchmarks" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            📐 Advertising ROI Benchmarks by Industry in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Use these benchmarks to evaluate whether your advertising investment is delivering competitive returns. Compare your cost per lead (CPL) against your average customer lifetime value — a real estate lead at LKR 5,000 that converts into a property sale is exceptional value.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-card mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-3 font-heading font-bold text-foreground">Industry</th>
                  <th className="text-left p-3 font-heading font-bold text-accent">Strong Cost Per Lead (LKR)</th>
                </tr>
              </thead>
              <tbody>
                {roiBenchmarks.map((row, i) => (
                  <tr key={row.industry} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-3 font-semibold text-foreground">{row.industry}</td>
                    <td className="p-3 text-foreground">{row.cpl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-muted-foreground leading-relaxed text-sm">
              💡 A student enquiry costing LKR 1,500 that enrols in a LKR 300,000 programme delivers a <strong>200x return on the lead cost</strong>. Always measure CPL against lifetime value, not just upfront cost.
            </p>
          </div>
        </motion.div>

        {/* ── 10. Best Platforms ── */}
        <motion.div id="platforms" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🌐 10. Best Advertising Platforms in Sri Lanka in 2026
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The advertising landscape in Sri Lanka is evolving rapidly. These are the platforms and channels delivering the strongest results for businesses advertising in Sri Lanka today.
          </p>

          <div className="space-y-4 mb-6">
            {platformCategories.map(cat => (
              <div key={cat.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <cat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground">{cat.title}</h3>
                </div>
                <ul className="space-y-2 ml-1">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-muted-foreground leading-relaxed">
              BuzzConnect integrates all of these channels into <strong>cohesive multi-channel campaigns</strong>, ensuring your advertising investment works harder by reaching the same prospect across multiple platforms.
            </p>
          </div>
        </motion.div>

        {/* ── 11. Choose Strategy ── */}
        <motion.div id="choose-strategy" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🧭 11. How to Choose the Right Advertising Strategy for Your Business
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Not every business needs the same advertising mix. Here is a practical framework to help you identify the right approach. Ask yourself these questions:
          </p>

          <div className="space-y-6">
            {strategyQuestions.map((sq, i) => (
              <div key={sq.q} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <h3 className="font-heading text-base font-bold text-foreground mb-4">
                  <span className="text-accent">{i + 1}.</span> {sq.q}
                </h3>
                <ul className="space-y-2">
                  {sq.options.map(opt => (
                    <li key={opt} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-muted-foreground leading-relaxed">
              If you are unsure which approach is right for your business, <Link to="/contact-us" className="text-accent hover:underline font-semibold">contact BuzzConnect</Link> for a free strategy consultation. Our team will analyse your business objectives, target audience, and budget — and recommend the most effective campaign structure for your specific situation.
            </p>
          </div>
        </motion.div>

        {/* ── 12. How a Campaign Works ── */}
        <motion.div id="how-it-works" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🚀 12. Step-by-Step: How a BuzzConnect Campaign Works
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We keep the process simple so you can focus on your business while we handle the advertising.
          </p>

          <div className="space-y-4">
            {steps.map(s => (
              <div key={s.num} className="flex gap-5 p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center">
                  <span className="font-heading font-bold text-primary-foreground text-lg">{s.num}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">Step {parseInt(s.num)} — {s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Common Mistakes ── */}
        <motion.div id="mistakes" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            ⚠️ Common Advertising Mistakes Sri Lankan Businesses Make — And How to Avoid Them
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Understanding what <em>not</em> to do is just as valuable as knowing the right strategy. These are the five most common mistakes BuzzConnect sees from businesses running their first advertising campaigns in Sri Lanka.
          </p>
          <div className="space-y-4">
            {commonMistakes.map((m, i) => (
              <div key={m.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-destructive">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">Mistake {i + 1} — {m.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-foreground font-semibold mb-2">How BuzzConnect helps you avoid every one of these mistakes:</p>
            <ul className="space-y-2">
              {[
                "Multi-channel campaigns by default — never single-channel only",
                "Landing page design available as part of campaign packages",
                "Campaign strategists ensure every campaign has a compelling, specific offer",
                "Monthly retainer programmes build consistent momentum and compounding results",
                "Instant lead delivery to your team via email, WhatsApp, or CRM integration",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Internal Links ── */}
        <motion.div {...fadeIn} className="mb-16 p-6 rounded-2xl bg-card border border-border shadow-card">
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">Explore More Advertising Solutions</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>🌐 <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">Online Advertising in Sri Lanka</Link> — Digital-specific strategies for maximum online visibility</p>
            <p>🚀 <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">Multi-Channel Marketing Campaigns</Link> — Combine all channels for maximum reach</p>
            <p>📊 <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">Lead Generation Services</Link> — Convert advertising reach into qualified leads</p>
            <p>🏆 <Link to="/best-advertising-company-sri-lanka" className="text-accent hover:underline font-semibold">Best Advertising Company in Sri Lanka</Link> — Why businesses trust BuzzConnect</p>
          </div>
        </motion.div>

        {/* ── 13. FAQ ── */}
        <motion.div id="faq" {...fadeIn} className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-7 h-7 text-primary" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">13. Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details key={faq.q} className="group p-5 rounded-xl bg-card shadow-card border border-border">
                <summary className="font-heading font-semibold text-foreground cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </motion.div>

        <RelatedArticles currentPath="/advertising-sri-lanka" max={4} />
      </article>

      {/* ── Final CTA ── */}
      <motion.div {...fadeIn} className="text-center p-8 sm:p-12 rounded-2xl gradient-hero mt-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
          📞 Ready to Start Advertising in Sri Lanka?
        </h2>
        <p className="text-primary-foreground/80 mb-2 max-w-2xl mx-auto leading-relaxed">
          BuzzConnect is Sri Lanka's most complete multi-channel advertising partner. Whether you need to generate 100 leads in 48 hours or build a brand that Sri Lankans recognise and trust for years — we have the platform, audience, and expertise to make it happen.
        </p>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-semibold">
          Contact us today and a campaign manager will respond within 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link to="/contact-us" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://wa.me/94771437707?text=Hi%20BuzzConnect%2C%20I%27m%20interested%20in%20advertising%20in%20Sri%20Lanka." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary-foreground/10 text-primary-foreground font-bold border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
            <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +94 77 143 7707</span>
          <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> infobuzzconnect@gmail.com</span>
          <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> buzzconnect.lk</span>
        </div>
        <p className="text-xs text-primary-foreground/60 mt-6 italic">
          BuzzConnect — Sri Lanka's Fastest Growing Multi-Channel Advertising Network
        </p>
      </motion.div>
    </ServicePageLayout>
  );
};

export default AdvertisingSriLanka;
