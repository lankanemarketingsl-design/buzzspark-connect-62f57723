import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  buildWhatsAppContext,
  enrichWhatsAppHref,
  getWhatsAppNumber,
  isWhatsAppHref,
  trackWhatsAppClick,
} from "@/lib/whatsappTracking";
import { logInquiryFromContext } from "@/lib/logInquiry";

/**
 * Site-wide delegated handler for every WhatsApp CTA on the page.
 *
 * - Intercepts clicks on any <a href="https://wa.me/..."> (and api/web/chat
 *   variants) anywhere in the DOM, including links rendered by individual
 *   pages we don't want to refactor one-by-one.
 * - Just-in-time appends normalized utm_source/medium/campaign/content/term
 *   params (skipping links that already opted in via data-skip-wa-tracker).
 * - Fires the same `whatsapp_cta_click` gtag + dataLayer event used by the
 *   floating WhatsAppCTA so all inquiries land in one report.
 */
const WhatsAppGlobalTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.dataset.skipWaTracker === "true") return;

      const href = anchor.getAttribute("href");
      if (!isWhatsAppHref(href)) return;

      // Tag the inferred CTA placement so reporting can split floating button
      // vs. inline page CTAs.
      const placement =
        anchor.dataset.waPlacement ||
        (anchor.closest("header,nav") ? "nav" : null) ||
        (anchor.closest("footer") ? "footer" : null) ||
        (anchor.classList.contains("fixed") ? "floating_button" : "inline_cta");

      const ctx = buildWhatsAppContext(
        pathname,
        window.location.search,
        undefined,
        placement,
      );
      const enriched = enrichWhatsAppHref(href as string, ctx);
      if (enriched !== href) anchor.setAttribute("href", enriched);

      const selectedService =
        anchor.dataset.selectedService ||
        anchor.dataset.service ||
        ctx.service;

      trackWhatsAppClick(ctx, getWhatsAppNumber(pathname), window.location.href, {
        placement,
        selected_service: selectedService,
      });
    };

    // Capture phase so we mutate href before the browser navigates.
    document.addEventListener("click", handler, true);
    document.addEventListener("auxclick", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
      document.removeEventListener("auxclick", handler, true);
    };
  }, [pathname]);

  return null;
};

export default WhatsAppGlobalTracker;
