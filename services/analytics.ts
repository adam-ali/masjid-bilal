// services/analytics.ts

export const trackNavigateToDonate = (location: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'navigate_to_donation_page', {
      event_category: 'Navigation',
      origin_location: location,
      transport: 'beacon',
    })
  }
}

export function trackDonateClick(cta_id: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click_donation_cta', {
      event_category: 'CTA',
      cta_id: cta_id,
      transport: 'beacon',
    })
  }
}
