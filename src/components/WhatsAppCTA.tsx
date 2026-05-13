import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  buildWhatsAppContext,
  getWhatsAppNumber,
  trackWhatsAppClick,
} from "@/lib/whatsappTracking";

const WhatsAppCTA = () => {
  const { pathname } = useLocation();
  const number = getWhatsAppNumber(pathname);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const search = typeof window !== "undefined" ? window.location.search : "";
  const ctx = buildWhatsAppContext(pathname, search, "whatsapp_cta", "floating_button");
  const { service } = ctx;

  const message =
    `Hi Buzz Connect, I'm interested in *${service}*.` +
    `%0A%0APage: ${encodeURIComponent(pageUrl)}` +
    `%0ACampaign: ${encodeURIComponent(ctx.utm_campaign)}` +
    `%0ASource: ${encodeURIComponent(ctx.utm_source)} / ${encodeURIComponent(ctx.utm_medium)}` +
    `%0A%0AMy name: %0ACompany: %0APhone: %0AWhat I need: `;

  const utmQuery = new URLSearchParams({
    utm_source: ctx.utm_source,
    utm_medium: ctx.utm_medium,
    utm_campaign: ctx.utm_campaign,
    utm_content: ctx.utm_content,
    utm_term: ctx.utm_term,
  }).toString();

  const href = `https://wa.me/${number}?text=${message}&${utmQuery}`;

  const handleClick = () => trackWhatsAppClick(ctx, number, pageUrl);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onAuxClick={handleClick}
      data-skip-wa-tracker="true"
      data-wa-placement="floating_button"
      data-analytics-event="whatsapp_cta_click"
      data-service={service}
      data-page={pathname}
      data-utm-source={ctx.utm_source}
      data-utm-medium={ctx.utm_medium}
      data-utm-campaign={ctx.utm_campaign}
      aria-label={`Chat on WhatsApp about ${service}`}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="hidden sm:inline text-sm">Chat about {service}</span>
    </a>
  );
};

export default WhatsAppCTA;
