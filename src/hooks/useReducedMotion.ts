import { useEffect, useState } from 'react';

/**
 * Hook to detect and respect user's prefers-reduced-motion preference
 * Returns true if user prefers reduced motion, false otherwise
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check initial preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * Get optimized transition config based on motion preference
 */
export const getOptimizedTransition = (
  prefersReducedMotion: boolean,
  normalDuration: number = 0.5,
): number => {
  return prefersReducedMotion ? 0 : normalDuration;
};
