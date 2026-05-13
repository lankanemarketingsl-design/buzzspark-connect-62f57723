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

const WhatsAppCTA = () => {
  const { pathname } = useLocation();
  const number = INDUSTRY_ROUTES.includes(pathname) ? "94771976351" : "94771437707";
  const service = getServiceName(pathname);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const message = `Hi Buzz Connect, I'm interested in *${service}*.%0A%0APage: ${encodeURIComponent(pageUrl)}%0A%0AMy name: %0ACompany: %0APhone: %0AWhat I need: `;

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp about ${service}`}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="hidden sm:inline text-sm">Chat about {service}</span>
    </a>
  );
};

export default WhatsAppCTA;
