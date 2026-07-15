/**
 * Unified Analytics & Event Tracking Layer for Express Webcraft.
 * This helper prepares the application for Google Analytics 4,
 * Google Tag Manager, Microsoft Clarity, Meta Pixel, and structured custom events.
 */

interface TrackEventProps {
  category: string;
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
}

export const trackEvent = ({
  category,
  action,
  label,
  value,
  properties = {},
}: TrackEventProps) => {
  // 1. Console logging for audit / local verification
  if (process.env.NODE_ENV === "development") {
    console.group(`📊 [Analytics Event] ${category} - ${action}`);
    if (label) console.log(`Label:`, label);
    if (value) console.log(`Value:`, value);
    if (Object.keys(properties).length) console.log(`Properties:`, properties);
    console.groupEnd();
  }

  try {
    // 2. Google Analytics 4 (gtag.js)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
        ...properties,
      });
    }

    // 3. Google Tag Manager (dataLayer)
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: `${category}_${action}`,
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        eventValue: value,
        ...properties,
      });
    }

    // 4. Meta Pixel (fbq)
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("trackCustom", `${category}_${action}`, {
        label,
        value,
        ...properties,
      });
    }
  } catch (error) {
    console.error("Failed to propagate analytics event:", error);
  }
};

/**
 * High-utility events pre-bound for quick conversion auditing.
 */
export const Analytics = {
  trackCtaClick: (ctaName: string, location: string) => {
    trackEvent({
      category: "CTA",
      action: "click",
      label: ctaName,
      properties: { location },
    });
  },

  trackFormSubmit: (formId: string, status: "success" | "error" | "spam", durationMs?: number) => {
    trackEvent({
      category: "Form",
      action: "submit",
      label: formId,
      properties: { status, durationMs },
    });
  },

  trackPortfolioView: (projectId: string, projectTitle: string) => {
    trackEvent({
      category: "Portfolio",
      action: "view_details",
      label: projectTitle,
      properties: { projectId },
    });
  },

  trackWhatsAppClick: () => {
    trackEvent({
      category: "Contact",
      action: "whatsapp_click",
      label: "WhatsApp Quick Contact Floating Button",
    });
  },

  trackPhoneClick: (phoneNumber: string) => {
    trackEvent({
      category: "Contact",
      action: "phone_click",
      label: phoneNumber,
    });
  },

  trackEmailClick: (emailAddress: string) => {
    trackEvent({
      category: "Contact",
      action: "email_click",
      label: emailAddress,
    });
  },

  trackCalendlyPlaceholderClick: () => {
    trackEvent({
      category: "Calendly",
      action: "placeholder_click",
      label: "Book direct session placeholder clicked",
    });
  },

  trackScrollDepth: (depthPercent: 25 | 50 | 75 | 100) => {
    trackEvent({
      category: "UX",
      action: "scroll_depth",
      label: `${depthPercent}%`,
    });
  }
};
