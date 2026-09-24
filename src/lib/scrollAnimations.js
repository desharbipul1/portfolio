/**
 * Scroll Animations and Interactive Enhancements
 * Handles scroll-triggered animations and premium effects
 */

/**
 * Initialize intersection observer for scroll animations
 */
export function setupScrollAnimations() {
  // Create intersection observer for scroll animations
  const observerOptions = {
    threshold: [0, 0.1, 0.5],
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes based on visibility
        const animClass = entry.target.dataset.animate;
        if (animClass) {
          entry.target.classList.add(animClass);
        }

        // For sections with staggered items
        if (entry.target.dataset.stagger) {
          const children = entry.target.querySelectorAll('[data-stagger-item]');
          const staggerDelay = parseInt(entry.target.dataset.stagger) || 100;
          
          children.forEach((child, index) => {
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
              const itemAnim = child.dataset.animate || 'animate-slideInLeft';
              child.classList.add(itemAnim);
            }, index * staggerDelay);
          });
        }

        // Stagger project cards and experience items
        const cards = entry.target.querySelectorAll('.project-card, .experience-item');
        cards.forEach((card, index) => {
          if (!card.dataset.animated) {
            card.dataset.animated = 'true';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
              card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, index * 100);
          }
        });

        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });

  // Observe elements with animation triggers
  document.querySelectorAll('[data-animate], [data-stagger]').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Scroll progress indicator
 */
export function setupScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'fixed top-0 left-0 bg-gradient-to-r from-accent-DEFAULT to-status z-50';
  progressBar.style.width = '0%';
  progressBar.style.height = '3px';
  document.body.insertBefore(progressBar, document.body.firstChild);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

/**
 * Smooth scroll to section with offset for fixed header
 */
export function smoothScrollToElement(elementId, offset = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - offset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
}

/**
 * Add parallax effect to hero background and decorative elements
 */
export function setupParallaxEffect() {
  const homeSection = document.getElementById('home');
  if (!homeSection) return;

  const decorativeElements = homeSection.querySelectorAll('[class*="blur"]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const homeSectionTop = homeSection.offsetTop;
    const homeSectionHeight = homeSection.offsetHeight;
    
    // Only apply parallax when in home section view
    if (scrollY < homeSectionTop + homeSectionHeight) {
      const offset = (scrollY - homeSectionTop) * 0.3;
      
      // Apply subtle parallax to each decorative element
      decorativeElements.forEach((el, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        el.style.transform = `translateY(${offset * direction}px)`;
      });
    }
  });

  // Also add parallax to other sections' decorative elements
  document.querySelectorAll('section').forEach((section) => {
    const decorElements = section.querySelectorAll('.absolute[class*="blur"]');
    
    if (decorElements.length > 0) {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionHeight) {
          const relativeScroll = (scrollY - sectionTop + window.innerHeight) * 0.15;
          
          decorElements.forEach((el, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            el.style.transform = `translateY(${relativeScroll * direction}px) scale(1.1)`;
          });
        }
      });
    }
  });
}

/**
 * Smooth link navigation with scroll offset
 */
export function setupSmoothNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = href.substring(1);
        smoothScrollToElement(target);
      }
    });
  });
}

/**
 * Fade in elements as they come into view
 */
export function setupElementFadeIn() {
  const elements = document.querySelectorAll(
    'h2, h3, p, .project-card, .experience-item, .glassmorphic-card'
  );
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      } else {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        entry.target.style.transition = 'all 0.6s ease-out';
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
}

/**
 * Highlight active navigation section on scroll
 */
export function setupActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Initialize all scroll animations
 */
export function initializeAllScrollAnimations() {
  setupScrollAnimations();
  setupScrollProgress();
  setupParallaxEffect();
  setupSmoothNavigation();
  setupElementFadeIn();
  setupActiveNavHighlight();
}
