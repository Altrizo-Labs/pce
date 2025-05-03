'use client'; // This hook uses browser APIs, so it must be client-side

import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking the state of a CSS media query.
 * @param query - The media query string to match (e.g., '(max-width: 767px)').
 * @returns `true` if the media query matches, `false` otherwise.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Ensure window is defined (runs only in the browser)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    // Function to update state based on query match
    const updateMatches = (event: MediaQueryListEvent | MediaQueryList) => {
      setMatches(event.matches);
    };

    // Set initial state
    updateMatches(mediaQueryList);

    // Add listener for changes
    // Using addEventListener for modern browsers, with fallback for older ones
    try {
        mediaQueryList.addEventListener('change', updateMatches);
    } catch (e1) {
        // Fallback for older browsers
        console.error("Error adding media query listener:", e1);
        try {
            mediaQueryList.addListener(updateMatches);
        } catch (e2) {
            console.error("Error adding media query listener:", e2);
        }
    }


    // Cleanup function to remove listener
    return () => {
        try {
            mediaQueryList.removeEventListener('change', updateMatches);
        } catch (e1) {
            // Fallback for older browsers
            console.error("Error removing media query listener:", e1);
            try {
                mediaQueryList.removeListener(updateMatches);
            } catch (e2) {
                console.error("Error removing media query listener:", e2);
            }
        }
    };
  }, [query]); // Re-run effect if the query changes

  return matches;
}
