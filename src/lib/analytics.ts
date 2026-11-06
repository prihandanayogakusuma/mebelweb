declare global {
  interface Window {
    gtag?: (command: 'event', name: string, params?: Record<string, string>) => void
  }
}

export type TrackedEvent = 'whatsapp_click' | 'call_click' | 'email_click' | 'view_location_click' | 'get_directions_click' | 'product_detail_click'

/** Mengirim event ke Google Analytics 4 bila sudah dipasang. Tanpa GA4, tidak melakukan apa-apa. */
export const trackEvent = (name: TrackedEvent, params?: Record<string, string>) => {
  window.gtag?.('event', name, params)
}
