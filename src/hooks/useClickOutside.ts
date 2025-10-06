import { useEffect, useRef } from 'react';

interface UseClickOutsideProps {
  callback: () => void;
  enabled?: boolean;
  excludeRefs?: React.RefObject<HTMLElement | null>[];
}

export function useClickOutside<T extends HTMLElement = HTMLDivElement>({ callback, enabled = true, excludeRefs = [] }: UseClickOutsideProps) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;
      
      // Check if click is inside the main element
      if (ref.current && !ref.current.contains(target)) {
        // Check if click is inside any excluded elements
        const isInsideExcluded = excludeRefs.some(excludeRef => 
          excludeRef.current && excludeRef.current.contains(target)
        );
        
        if (!isInsideExcluded) {
          callback();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [callback, enabled, excludeRefs]);

  return ref;
}
