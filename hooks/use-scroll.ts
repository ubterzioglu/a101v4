import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * @param threshold - The scroll Y threshold (default: 50)
 * @returns boolean indicating if scrolled past threshold
 */
export function useScroll(threshold: number = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
