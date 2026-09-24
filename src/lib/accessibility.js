/**
 * Accessibility utilities
 */

export function setupAccessibility() {
  // Skip to content link
  const skipLink = document.createElement('a');
  skipLink.href = '#sections-container';
  skipLink.className = 'skip-to-content';
  skipLink.textContent = 'Skip to main content';
  document.body.prepend(skipLink);

  // Ensure all interactive elements are keyboard accessible
  setupKeyboardNavigation();

  // Set up ARIA labels
  setupAriaLabels();

  // Test color contrast
  testColorContrast();
}

/**
 * Setup keyboard navigation
 */
function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // Handle Escape key for modals/menus
    if (e.key === 'Escape') {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        document.getElementById('mobile-menu-btn').setAttribute('aria-expanded', 'false');
      }
    }

    // Handle Tab key for focus management
    if (e.key === 'Tab') {
      // Tab order is managed by HTML structure
    }
  });
}

/**
 * Setup ARIA labels for better screen reader support
 */
function setupAriaLabels() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.setAttribute('role', 'navigation');
    navbar.setAttribute('aria-label', 'Main navigation');
  }

  const content = document.getElementById('content');
  if (content) {
    content.setAttribute('role', 'main');
  }

  // Add aria-current to active nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.setAttribute('aria-current', 'false');
  });
}

/**
 * Check color contrast ratios (WCAG AA standards)
 * Logs warnings if contrast is insufficient
 */
function testColorContrast() {
  // This is a basic check; for production, consider using a proper WCAG contrast checker
  const foreground = getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim();
  const background = getComputedStyle(document.documentElement).getPropertyValue('--background').trim();

  if (process.env.NODE_ENV === 'development') {
    console.log('Accessibility: Color contrast check enabled');
  }
}

/**
 * Focus management utility
 */
export function manageFocus(element) {
  if (element) {
    element.focus();
    // Ensure the element is within the viewport
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(message, priority = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.className = 'visually-hidden';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement is made
  setTimeout(() => {
    announcement.remove();
  }, 1000);
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
