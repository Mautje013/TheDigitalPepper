// Google Analytics 4
export function loadGA4() {
  if (typeof window === 'undefined') return;
  if ((window as any).gtag && (window as any).ga4Loaded) return; // Already loaded

  // Load gtag.js if not already loaded
  if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Vervang met jouw GA4 ID
    document.head.appendChild(script1);
  }

  // Initialize gtag if not already initialized
  if (!(window as any).gtag) {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
  }

  (window as any).gtag('config', 'G-XXXXXXXXXX'); // Vervang met jouw GA4 ID
  (window as any).ga4Loaded = true;
}

// Meta Pixel
export function loadMetaPixel() {
  if (typeof window === 'undefined') return;
  if ((window as any).fbq && (window as any).pixelLoaded) return; // Already loaded

  // Initialize fbq if not exists
  if (!(window as any).fbq) {
    (window as any).fbq = function(...args: any[]) {
      ((window as any).fbq.q = (window as any).fbq.q || []).push(args);
    };
    (window as any).fbq.l = 1;
    (window as any).fbq.q = [];
  }

  // Load script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }

  // Initialize Pixel - Vervang 'YOUR_PIXEL_ID' met jouw Meta Pixel ID
  (window as any).fbq('init', 'YOUR_PIXEL_ID');
  (window as any).fbq('track', 'PageView');
  (window as any).pixelLoaded = true;
}

// Initialize Google Consent Mode v2
export function initConsentMode() {
  if (typeof window === 'undefined') return;
  if ((window as any).consentModeInitialized) return; // Already initialized

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  if (!(window as any).gtag) {
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;
  }

  // Set default consent to denied
  (window as any).gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  (window as any).consentModeInitialized = true;
}

// Update consent based on user preferences
export function updateConsent(consent: {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}) {
  if (typeof window === 'undefined' || !(window as any).gtag) return;

  const gtag = (window as any).gtag;

  if (consent.analytics && consent.marketing) {
    // Full consent
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
  } else if (consent.analytics) {
    // Analytics only
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  } else {
    // No consent
    gtag('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
}

