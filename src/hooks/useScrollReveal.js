import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollReveal:
 * Universal, ultra-reliable scroll reveal animation hook.
 * Seamlessly tracks elements with .reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-fade, .reveal-stagger.
 * Uses IntersectionObserver + MutationObserver + viewport rect checks for 100% reliability across all devices.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const SELECTOR = '.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-fade, .reveal-stagger';

    // Direct viewport check function
    const checkVisibility = () => {
      const targets = document.querySelectorAll(SELECTOR);
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const triggerThreshold = viewportHeight * 0.94;

      targets.forEach((el) => {
        if (el.classList.contains('is-revealed')) return;
        const rect = el.getBoundingClientRect();
        // Reveal if element enters the viewport area or is already scrolled past
        if (rect.top <= triggerThreshold && rect.bottom >= -100) {
          el.classList.add('is-revealed');
        }
      });
    };

    // IntersectionObserver instance
    let observer = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight * 0.95) {
              entry.target.classList.add('is-revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: '0px 0px -20px 0px'
        }
      );
    }

    // Function to register elements with observer
    const observeAll = () => {
      const targets = document.querySelectorAll(SELECTOR);
      targets.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          if (observer) {
            observer.observe(el);
          }
        }
      });
      checkVisibility();
    };

    // MutationObserver to catch dynamically rendered elements (filters, tabs, pagination)
    let mutationObserver = null;
    if ('MutationObserver' in window) {
      mutationObserver = new MutationObserver(() => {
        observeAll();
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    // Run immediate and staged checks for layout stability
    observeAll();
    const raf = requestAnimationFrame(checkVisibility);
    const timer1 = setTimeout(checkVisibility, 60);
    const timer2 = setTimeout(checkVisibility, 250);
    const timer3 = setTimeout(checkVisibility, 600);

    // Scroll & Resize listeners
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
    window.addEventListener('touchmove', checkVisibility, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      window.removeEventListener('touchmove', checkVisibility);
    };
  }, [pathname]);
}
