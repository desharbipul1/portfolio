/**
 * SEO Optimization Module
 * Handles dynamic SEO improvements and page performance
 */

/**
 * Initialize SEO optimizations
 */
export function initializeSEO() {
  // Add dynamic meta descriptions
  updateSectionMetaDescriptions();

  // Setup lazy loading for images
  setupLazyLoading();

  // Monitor Core Web Vitals
  monitorCoreWebVitals();

  // Setup Open Graph updates
  setupDynamicOG();

  // Generate structured data
  generateStructuredData();
}

/**
 * Update meta descriptions based on visible sections
 */
function updateSectionMetaDescriptions() {
  const sections = {
    home: "Full-stack software engineer specializing in .NET, C#, and scalable web architecture.",
    about: "Expertise in end-to-end development, fast & scalable solutions, and reliable communication.",
    projects: "Portfolio of featured web development projects showcasing technical skills.",
    experience: "Professional experience timeline with key roles and achievements.",
    contact: "Get in touch for web development projects, collaborations, or inquiries."
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (sections[sectionId]) {
          updateMetaTag(
            'description',
            sections[sectionId]
          );
          updateMetaTag(
            'og:description',
            sections[sectionId],
            'property'
          );
        }
      }
    });
  }, { threshold: 0.5 });

  // Observe all sections
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
}

/**
 * Update meta tag dynamically
 */
function updateMetaTag(name, content, type = 'name') {
  let meta = document.querySelector(`meta[${type}="${name}"]`);
  if (meta) {
    meta.setAttribute('content', content);
  } else {
    meta = document.createElement('meta');
    meta.setAttribute(type, name);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }
}

/**
 * Setup lazy loading for images
 */
function setupLazyLoading() {
  // Use Intersection Observer for lazy loading
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
        }
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  // Observe all lazy-loadable images
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

/**
 * Monitor Core Web Vitals
 */
function monitorCoreWebVitals() {
  // Largest Contentful Paint (LCP)
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    console.log('LCP not supported');
  }

  // First Input Delay (FID)
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('FID:', entry.processingDuration);
      }
    });
    observer.observe({ entryTypes: ['first-input'] });
  } catch (e) {
    console.log('FID not supported');
  }

  // Cumulative Layout Shift (CLS)
  try {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          console.log('CLS:', clsValue);
        }
      }
    });
    observer.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    console.log('CLS not supported');
  }
}

/**
 * Setup dynamic Open Graph updates
 */
function setupDynamicOG() {
  // Update OG title and description based on current page section
  const updateOG = () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = null;
    let maxVisibility = 0;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const visibility = Math.min(
        Math.max(0, window.innerHeight - rect.top),
        rect.bottom
      ) / window.innerHeight;

      if (visibility > maxVisibility) {
        maxVisibility = visibility;
        currentSection = section.id;
      }
    });

    if (currentSection) {
      const title = document.querySelector(`section#${currentSection} h2`)?.textContent;
      if (title) {
        updateMetaTag('og:title', `${title} | [YOUR_NAME]`, 'property');
      }
    }
  };

  // Update on scroll with debounce
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateOG, 500);
  });
}

/**
 * Generate and append structured data (JSON-LD)
 */
function generateStructuredData() {
  // Add BreadcrumbList schema
  const breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://[YOUR_DOMAIN]/#home'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'About',
        'item': 'https://[YOUR_DOMAIN]/#about'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Projects',
        'item': 'https://[YOUR_DOMAIN]/#projects'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Experience',
        'item': 'https://[YOUR_DOMAIN]/#experience'
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': 'Contact',
        'item': 'https://[YOUR_DOMAIN]/#contact'
      }
    ]
  });
  document.head.appendChild(breadcrumbScript);

  // Add Organization schema
  const orgScript = document.createElement('script');
  orgScript.type = 'application/ld+json';
  orgScript.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': '[YOUR_NAME]',
    'url': 'https://[YOUR_DOMAIN]',
    'logo': 'https://[YOUR_DOMAIN]/logo.png',
    'description': 'Full-stack software engineer portfolio',
    'sameAs': [
      'https://www.linkedin.com/in/[YOUR_LINKEDIN]/',
      'https://github.com/[YOUR_GITHUB]/',
      'https://twitter.com/[YOUR_TWITTER]/'
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'General Support',
      'email': '[YOUR_EMAIL]',
      'url': 'https://[YOUR_DOMAIN]/#contact'
    }
  });
  document.head.appendChild(orgScript);
}

/**
 * Add performance tracking
 */
export function trackPagePerformance() {
  if (typeof window.performance !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page Load Time:', pageLoadTime, 'ms');

        // Send to analytics if available
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_load_time: pageLoadTime
          });
        }
      }, 0);
    });
  }
}

/**
 * Setup analytics tracking for user interactions
 */
export function setupAnalytics() {
  // Track clicks on projects
  document.querySelectorAll('.project-card a').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'project_link',
          value: link.textContent
        });
      }
    });
  });

  // Track form submissions
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      if (window.gtag) {
        window.gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'contact'
        });
      }
    });
  }
}

/**
 * Add hreflang tags for internationalization (if needed)
 */
export function setupHrefLang() {
  const hrefLang = document.createElement('link');
  hrefLang.rel = 'alternate';
  hrefLang.hreflang = 'en';
  hrefLang.href = 'https://[YOUR_DOMAIN]/';
  document.head.appendChild(hrefLang);
}

/**
 * Optimize images for SEO
 */
export function optimizeImages() {
  document.querySelectorAll('img').forEach((img) => {
    // Ensure all images have alt text
    if (!img.alt) {
      const parent = img.closest('section');
      if (parent) {
        const sectionType = parent.id;
        img.alt = `Image from ${sectionType} section`;
      }
    }

    // Add loading="lazy" for non-critical images
    if (!img.classList.contains('critical-image')) {
      img.loading = 'lazy';
    }

    // Add decoding="async" for better performance
    img.decoding = 'async';
  });
}
