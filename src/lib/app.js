/**
 * Application initialization
 * Handles loading screen transitions and app setup
 */

export function initializeApp() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Simulate loading duration (600-1000ms range as per spec)
  const loadingDuration = 800;

  // Transition from loading to content
  setTimeout(() => {
    loader.style.transition = 'opacity 0.6s ease-out';
    loader.style.opacity = '0';
    
    content.style.transition = 'opacity 0.8s ease-out';
    content.style.opacity = '1';

    // Remove loader from DOM after animation
    setTimeout(() => {
      loader.style.display = 'none';
    }, 600);
  }, loadingDuration);

  // Initialize smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';

  // Add scroll event listeners for navbar updates
  setupScrollBehavior();

  // Setup intersection observer for scroll-triggered animations
  setupScrollAnimations();

  // Setup ripple effects on interactive elements
  setupInteractiveEffects();
}

/**
 * Setup interactive effects (ripples, hover states, etc.)
 */
function setupInteractiveEffects() {
  // Add ripple effect to all buttons
  document.querySelectorAll('button').forEach(button => {
    addRippleEffect(button);
  });

  // Add ripple effect to all links
  document.querySelectorAll('a').forEach(link => {
    addRippleEffect(link);
  });

  // Add active state to cards
  document.querySelectorAll('.project-card, .experience-item').forEach(card => {
    card.addEventListener('mousedown', () => {
      card.style.transform = 'scale(0.98)';
    });

    card.addEventListener('mouseup', () => {
      card.style.transform = '';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/**
 * Setup scroll behavior for navbar opacity and effects
 */
function setupScrollBehavior() {
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNavbarOnScroll() {
    const currentScrollY = window.scrollY;

    // Add scrolled class when user scrolls down
    if (currentScrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbarOnScroll);
      ticking = true;
    }
  });
}

/**
 * Setup scroll-triggered animations using Intersection Observer
 */
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation classes based on data attributes
        const animClass = entry.target.dataset.animate;
        if (animClass) {
          entry.target.classList.add(animClass);
        }
        // Add stagger delay for lists
        if (entry.target.dataset.stagger) {
          const children = entry.target.querySelectorAll('[data-stagger-item]');
          children.forEach((child, index) => {
            const delay = index * (parseInt(entry.target.dataset.stagger) || 100);
            child.style.animationDelay = `${delay}ms`;
            const itemAnim = child.dataset.animate || 'animate-slideInLeft';
            child.classList.add(itemAnim);
          });
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });

  // Observe all elements with data-stagger attribute
  document.querySelectorAll('[data-stagger]').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get user's preferred color scheme
 */
export function getColorScheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Add ripple effect to clickable elements
 */
export function addRippleEffect(element) {
  element.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('absolute', 'rounded-full', 'animate-ripple');
    ripple.style.left = e.clientX - element.offsetLeft + 'px';
    ripple.style.top = e.clientY - element.offsetTop + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.backgroundColor = 'rgba(6, 214, 255, 0.5)';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
}
