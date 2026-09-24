import './styles/globals.css';
import { initializeApp } from './lib/app.js';
import { setupMobileMenu } from './lib/navigation.js';
import { setupAccessibility } from './lib/accessibility.js';
import { initializeAllScrollAnimations } from './lib/scrollAnimations.js';
import { initializeSEO, trackPagePerformance, setupAnalytics, optimizeImages } from './lib/seo.js';
import { createBrandLoader, setupLoaderAnimations } from './components/loading/BrandLoader.js';
import { createHomeSection, setupHomeAnimations } from './sections/Home/HomeSection.js';
import { createAboutSection, setupAboutAnimations } from './sections/About/AboutSection.js';
import { createProjectsSection } from './sections/Projects/ProjectsSection.js';
import { createExperienceSection } from './sections/Experience/ExperienceSection.js';
import { createContactSection } from './sections/Contact/ContactSection.js';
import { createFooter } from './components/common/Footer.js';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  // Setusp animations first
  setupLoaderAnimations();
  setupHomeAnimations();
  setupAboutAnimations();

  // Initialize core app
  initializeApp();
  setupMobileMenu();
  setupAccessibility();

  // Build page sections
  buildPageSections();

  // Initisssalize brand loader with transition
  createBrandLoader();

  // Setup premium scroll animations
  initializeAllScrollAnimations();

  // Initialize SEO optimizations
  setTimeout(() => {
    initializeSEO();
    optimizeImages();
    trackPagePerformance();
    setupAnalytics();
  }, 500);
});

/**
 * Build all page sections dynamically
 */
function buildPageSections() {
  const container = document.getElementById('sections-container');
  const app = document.getElementById('app');
  
  // Clear existing sections if any
  container.innerHTML = '';

  // Add Home section
  const homeSection = createHomeSection();
  container.appendChild(homeSection);

  // Add About section
  const aboutSection = createAboutSection();
  container.appendChild(aboutSection);

  // Add Projects section
  const projectsSection = createProjectsSection();
  container.appendChild(projectsSection);

  // Add Experience section
  const experienceSection = createExperienceSection();
  container.appendChild(experienceSection);

  // Add Contact section
  const contactSection = createContactSection();
  container.appendChild(contactSection);

  // Add Footer
  const footer = createFooter();
  container.appendChild(footer);

  // Update content visibility
  const content = document.getElementById('content');
  content.classList.add('show');
}

// Handle active section on scroll for navigation highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('text-accent-DEFAULT', 'font-semibold');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-accent-DEFAULT', 'font-semibold');
    }
  });
});
