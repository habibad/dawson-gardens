/**
 * Lightweight analytics layer.
 *
 * Pushes to `window.dataLayer` so GA4 (gtag.js or GTM) can be connected later
 * without touching component code. No vendor script is loaded here and no
 * synthetic/fake data is produced.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "quote_cta_click"
  | "phone_click"
  | "email_click"
  | "quote_form_start"
  | "quote_form_submit"
  | "portfolio_project_click"
  | "service_click"
  | "nav_click"
  | "before_after_interact";

export function track(event: AnalyticsEvent, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
}
