// components/TawkChat.tsx
'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}

const TawkChat = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Prevent multiple loads
    if (scriptLoaded.current) return;
    
    // Check if Tawk.to is already loaded
    if (document.querySelector('script[src*="tawk.to"]')) {
      scriptLoaded.current = true;
      return;
    }

    try {
      // Initialize Tawk_API
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      // Create and load the script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/6a3287a6c770bc1d46b1f693/1jram3pf3';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      document.body.appendChild(script);
      scriptLoaded.current = true;

      // Cleanup
      return () => {
        // Don't remove the script to avoid conflicts
        scriptLoaded.current = false;
      };
    } catch (error) {
      // Silent fail
    }
  }, []);

  return null;
};

export default TawkChat;