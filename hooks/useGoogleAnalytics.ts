import { useEffect } from 'react';

const useGoogleAnalytics = (trackingId: string) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gtag) {
      // Load the gtag.js script dynamically
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: any[]) {
        window.dataLayer.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', trackingId);
    }
  }, [trackingId]);
};

export default useGoogleAnalytics;
