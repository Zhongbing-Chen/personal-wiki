import { useRouter as useNextRouter } from 'next/router';
import { useEffect } from 'react';

export function useRouter() {
    const router = useNextRouter();
  
    useEffect(() => {
      const handleRouteChangeComplete = url => {
        // Encode Chinese characters in the URL
        const encodedUrl = encodeURIComponent(url);
        window.history.replaceState(null, null, encodedUrl);
      };
  
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
  
      return () => {
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
      };
    }, [router]);
  
    return router;
  }
  