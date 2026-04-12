import { useEffect, useRef } from 'react';

/**
 * Adds a `.revealed` class to the ref element when it scrolls into view.
 * @param {object} options – IntersectionObserver options
 */
export default function useScrollReveal(options = {}) {
   const ref = useRef(null);

   useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               el.classList.add('revealed');
               observer.unobserve(el);
            }
         },
         { threshold: 0.15, ...options }
      );

      observer.observe(el);
      return () => observer.disconnect();
   }, []);

   return ref;
}
