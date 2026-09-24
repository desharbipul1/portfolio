/**
 * Custom hooks
 */

/**
 * Hook to detect active section based on scroll position
 */
export function useActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';

  const updateActiveSection = () => {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    return current;
  };

  window.addEventListener('scroll', updateActiveSection);

  return {
    getActive: updateActiveSection,
    destroy: () => {
      window.removeEventListener('scroll', updateActiveSection);
    },
  };
}

/**
 * Hook to detect if user prefers reduced motion
 */
export function useReducedMotion() {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReduced = mediaQuery.matches;

  const handleChange = (e) => {
    isReduced = e.matches;
  };

  mediaQuery.addEventListener('change', handleChange);

  return {
    isReduced: () => isReduced,
    destroy: () => {
      mediaQuery.removeEventListener('change', handleChange);
    },
  };
}

/**
 * Hook for intersection observer
 */
export function useIntersectionObserver(callback, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry);
    });
  }, defaultOptions);

  return {
    observe: (element) => {
      if (element) observer.observe(element);
    },
    unobserve: (element) => {
      if (element) observer.unobserve(element);
    },
    disconnect: () => observer.disconnect(),
  };
}
