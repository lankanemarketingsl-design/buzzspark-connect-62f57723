import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

const INDUSTRY_ROUTES = [
  "/hotel-marketing-sri-lanka",
  "/education-marketing-sri-lanka",
  "/restaurant-marketing-sri-lanka",
  "/fashion-marketing-sri-lanka",
];

// Map specific routes to a clean, human-readable service name so the
// WhatsApp message tells us exactly what the visitor was looking at.
const SERVICE_MAP: Record<string, string> = {
  "/": "your services",
  "/email-marketing": "Email Marketing",
  "/sms-marketing": "SMS Marketing",
  "/whatsapp-marketing": "WhatsApp Marketing",
  "/multi-channel-marketing-sri-lanka": "Multi-Channel Marketing Packages",
  "/online-advertising-sri-lanka": "Online Advertising",
  "/graphic-designing-in-sri-lanka": "Graphic Design",
  "/seo-sri-lanka": "SEO Services",
  "/website-design-sri-lanka": "Website Design",
  "/lead-generation-sri-lanka": "Lead Generation",
  "/social-media-marketing-sri-lanka": "Social Media Marketing",
  "/web-banner-advertising-sri-lanka": "Web Banner Advertising",
  "/hotel-marketing-sri-lanka": "Hotel Marketing",
  "/education-marketing-sri-lanka": "Education Marketing",
  "/finance-marketing-sri-lanka": "Finance Marketing",
  "/restaurant-marketing-sri-lanka": "Restaurant Marketing",
  "/real-estate-marketing-sri-lanka": "Real Estate Marketing",
  "/fashion-marketing-sri-lanka": "Fashion Marketing",
  "/advertising-sri-lanka": "Advertising in Sri Lanka",
  "/digital-marketing-company-in-sri-lanka": "Digital Marketing",
  "/event-marketing-sri-lanka": "Event Marketing",
  "/staff-recruitment-campaigns-sri-lanka": "Staff Recruitment Campaigns",
  "/google-ads-sri-lanka": "Google Ads",
  "/about-us": "Buzz Connect",
  "/why-choose-us": "your services",
  "/contact-us": "your services",
  "/careers": "career opportunities",
  "/resources": "your services",
};

const GRAPHIC_DESIGN_PREFIXES = [
  "/e-flyer-design-sri-lanka",
  "/business-card-design-sri-lanka",
  "/animated-video-creation-sri-lanka",
  "/logo-design-sri-lanka",
  "/letterhead-design-sri-lanka",
  "/hoarding-design-sri-lanka",
  "/signboard-design-sri-lanka",
  "/invitation-design-sri-lanka",
  "/brochure-design-sri-lanka",
  "/company-profile-design-sri-lanka",
  "/presentation-design-sri-lanka",
  "/photo-editing-sri-lanka",
  "/social-media-post-design-sri-lanka",
  "/menu-card-design-sri-lanka",
  "/label-design-sri-lanka",
  "/package-design-sri-lanka",
  "/video-editing-sri-lanka",
];

const titleCaseFromPath = (pathname: string): string => {
  const slug = pathname.replace(/^\/+/, "").split("/")[0] || "";
  if (!slug) return "your services";
  return slug
    .replace(/-sri-lanka$/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim() || "your services";
};

const getServiceName = (pathname: string): string => {
  if (SERVICE_MAP[pathname]) return SERVICE_MAP[pathname];
  if (GRAPHIC_DESIGN_PREFIXES.includes(pathname)) {
    return titleCaseFromPath(pathname);
  }
  // Articles and other long-form pages — derive a readable label.
  return titleCaseFromPath(pathname);
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// UTM hygiene: GA4 accepts up to 100 chars per UTM but recommends keeping
// them short and ASCII-only. We slugify, strip diacritics, collapse repeats,
// and truncate on a word boundary so utm_campaign is always safe in URLs.
const UTM_LIMITS: Record<string, number> = {
  utm_source: 50,
  utm_medium: 50,
  utm_campaign: 80,
  utm_content: 50,
  utm_term: 50,
};

const slugify = (s: string) =>
  (s || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_") // only a-z0-9 + underscore
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

const normalizeUtm = (raw: string | null, fallback: string, key: string): string => {
  const slug = slugify(raw || fallback) || slugify(fallback) || "na";
  const limit = UTM_LIMITS[key] ?? 80;
  if (slug.length <= limit) return slug;
  // Truncate on the last underscore boundary inside the limit when possible.
  const cut = slug.slice(0, limit);
  const boundary = cut.lastIndexOf("_");
  return (boundary > limit * 0.6 ? cut.slice(0, boundary) : cut).replace(/_+$/g, "");
};

const WhatsAppCTA = () => {
  const { pathname } = useLocation();
  const number = INDUSTRY_ROUTES.includes(pathname) ? "94771976351" : "94771437707";
  const service = getServiceName(pathname);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  // Forward existing UTMs from the page URL (e.g. Google Ads landing) so the
  // original campaign attribution is preserved end-to-end. Fall back to
  // sensible defaults derived from the page/service.
  const search = typeof window !== "undefined" ? window.location.search : "";
  const params = new URLSearchParams(search);
  const pageSlug = pathname.replace(/^\/+|\/+$/g, "") || "home";

  const utmSource = normalizeUtm(params.get("utm_source"), "website", "utm_source");
  const utmMedium = normalizeUtm(params.get("utm_medium"), "whatsapp_cta", "utm_medium");
  const utmCampaign = normalizeUtm(
    params.get("utm_campaign"),
    `${service}_${pageSlug}`,
    "utm_campaign",
  );
  const utmContent = normalizeUtm(params.get("utm_content"), "floating_button", "utm_content");
  const utmTerm = normalizeUtm(params.get("utm_term"), service, "utm_term");

  const utmQuery = new URLSearchParams({
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: utmContent,
    utm_term: utmTerm,
  }).toString();

  const message =
    `Hi Buzz Connect, I'm interested in *${service}*.` +
    `%0A%0APage: ${encodeURIComponent(pageUrl)}` +
    `%0ACampaign: ${encodeURIComponent(utmCampaign)}` +
    `%0ASource: ${encodeURIComponent(utmSource)} / ${encodeURIComponent(utmMedium)}` +
    `%0A%0AMy name: %0ACompany: %0APhone: %0AWhat I need: `;

  const href = `https://wa.me/${number}?text=${message}&${utmQuery}`;

  const handleClick = () => {
    try {
      const payload = {
        event_category: "engagement",
        event_label: service,
        service,
        page_path: pathname,
        page_location: pageUrl,
        whatsapp_number: number,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_term: utmTerm,
        transport_type: "beacon",
      };
      window.gtag?.("event", "whatsapp_cta_click", payload);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "whatsapp_cta_click", ...payload });
    } catch {
      // analytics must never break the click
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onAuxClick={handleClick}
      data-analytics-event="whatsapp_cta_click"
      data-service={service}
      data-page={pathname}
      data-utm-source={utmSource}
      data-utm-medium={utmMedium}
      data-utm-campaign={utmCampaign}
      aria-label={`Chat on WhatsApp about ${service}`}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="hidden sm:inline text-sm">Chat about {service}</span>
    </a>
  );
};

export default WhatsAppCTA;
