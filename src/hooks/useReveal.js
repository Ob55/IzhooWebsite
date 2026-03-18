import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useReveal() {
  const location = useLocation();

  useEffect(() => {
    const initReveal = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      reveals.forEach((el) => el.classList.remove('visible'));

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      reveals.forEach(el => observer.observe(el));
    };

    // Call after a small delay to allow DOM to render
    const timeout = setTimeout(initReveal, 100);
    return () => clearTimeout(timeout);
  }, [location.pathname]);
}
