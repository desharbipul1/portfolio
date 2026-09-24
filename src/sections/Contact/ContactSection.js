/**
 * Contact Section Component
 * Call to action and contact information
 */

import { createPrimaryButton } from '../../components/common/Button.js';
import { createSocialLinksContainer } from '../../components/common/SocialLink.js';
import { socialLinks, contactInfo } from '../../data/socialLinks.js';

export function createContactSection() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'min-h-screen py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background-DEFAULT via-background-hover to-background-DEFAULT flex items-center relative overflow-hidden';

  // Add decorative gradient elements
  section.innerHTML = `
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 -right-40 w-96 h-96 bg-accent-coral/8 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent-emerald/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
    </div>
  `;

  // Container
  const container = document.createElement('div');
  container.className = 'max-w-5xl mx-auto w-full text-center relative z-10';

  // Section number with animation and new colors
  const sectionNum = document.createElement('p');
  sectionNum.className = 'font-mono text-xs text-foreground-muted tracking-widest uppercase mb-6 animate-slideDown';
  sectionNum.innerHTML = '<span class="text-accent-coral">▌</span> 04 / CONTACT_GATEWAY';
  container.appendChild(sectionNum);

  // Main heading with gradient
  const heading = document.createElement('h2');
  heading.className = 'text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-heroContent';
  heading.innerHTML = "LET'S BUILD<br /><span class='bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-gold bg-clip-text text-transparent'>SOMETHING</span><br />WORTH SHIPPING.";
  container.appendChild(heading);

  // Subtitle with animation
  const subtitle = document.createElement('p');
  subtitle.className = 'text-xl text-foreground-secondary mb-12 leading-relaxed animate-heroContent animate-delay-200';
  subtitle.textContent =
    "I'm open to interesting software engineering opportunities and technical collaborations. Whether you have a question or just want to say hi, feel free to reach out.";
  container.appendChild(subtitle);

  // Primary CTA with animation and gradient
  const ctaButton = createPrimaryButton('GET IN TOUCH →', {
    href: 'https://linkedin.com/in/bipuldeshar',
    target: '_blank',
    className: 'inline-block px-8 py-4 bg-gradient-to-r from-accent-coral to-accent-gold text-background-DEFAULT font-bold rounded transition-all duration-base animate-heroContent animate-delay-300 relative group hover:shadow-lg hover:shadow-coral-500/40',
  });
  
  container.appendChild(ctaButton);

  // Contact details
  const detailsSection = document.createElement('div');
  detailsSection.className = 'mt-16 pt-12 border-t border-border-strong';

  const detailsHeading = document.createElement('h3');
  detailsHeading.className = 'text-2xl font-semibold text-foreground-DEFAULT mb-8';
  detailsHeading.textContent = 'ELSEWHERE';

  detailsSection.appendChild(detailsHeading);

  const detailsGrid = document.createElement('div');
  detailsGrid.className = 'grid grid-cols-1 sm:grid-cols-3 gap-8';

  // Email
  const emailCol = document.createElement('div');
  emailCol.className = 'text-center';

  const emailColLabel = document.createElement('p');
  emailColLabel.className = 'font-mono text-xs text-foreground-muted tracking-widest uppercase mb-2';
  emailColLabel.textContent = 'Email';

  const emailLink = document.createElement('a');
  emailLink.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=desharbipul@gmail.com';
  emailLink.target = '_blank';
  emailLink.rel = 'noopener noreferrer';
  emailLink.className = 'text-lg font-semibold text-foreground-DEFAULT hover:text-accent-coral transition-colors duration-fast cursor-pointer';
  emailLink.style.fontFamily = "'Caveat', cursive";
  emailLink.style.fontStyle = 'italic';
  emailLink.style.fontSize = '1.5rem';
  emailLink.style.fontVariationSettings = "'slnt' -20";
  emailLink.style.transform = 'skewX(-10deg)';
  emailLink.textContent = 'desharbipul@gmail.com';

  emailCol.appendChild(emailColLabel);
  emailCol.appendChild(emailLink);
  detailsGrid.appendChild(emailCol);

  // Social Links
  const socialCol = document.createElement('div');
  socialCol.className = 'text-center';

  const socialLabel = document.createElement('p');
  socialLabel.className = 'font-mono text-xs text-foreground-muted tracking-widest uppercase mb-3';
  socialLabel.textContent = 'Social';

  const socialLinks2 = [
    { platform: 'GitHub', url: 'https://github.com/', label: 'GitHub' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/bipuldeshar', label: 'LinkedIn' },
  ];

  const socialContainer = createSocialLinksContainer(socialLinks2);
  socialContainer.className = 'flex flex-col gap-2';

  socialCol.appendChild(socialLabel);
  socialCol.appendChild(socialContainer);
  detailsGrid.appendChild(socialCol);

  // Location
  const locationCol = document.createElement('div');
  locationCol.className = 'text-center';

  const locationLabel = document.createElement('p');
  locationLabel.className = 'font-mono text-xs text-foreground-muted tracking-widest uppercase mb-2';
  locationLabel.textContent = 'Location';

  const locationText = document.createElement('p');
  locationText.className = 'text-lg font-semibold text-foreground-DEFAULT';
  locationText.textContent = 'Kathmandu, Nepal';

  locationCol.appendChild(locationLabel);
  locationCol.appendChild(locationText);
  detailsGrid.appendChild(locationCol);

  // Availability / Open to Opportunities
  const availabilityCol = document.createElement('div');
  availabilityCol.className = 'text-center';

  const availabilityLabel = document.createElement('p');
  availabilityLabel.className = 'font-mono text-xs text-foreground-muted tracking-widest uppercase mb-2';
  availabilityLabel.textContent = 'Availability';

  const availabilityText = document.createElement('p');
  availabilityText.className = 'text-lg font-semibold text-accent-emerald flex items-center justify-center gap-2';
  availabilityText.innerHTML = '<span class="w-2 h-2 rounded-full bg-accent-emerald animate-glowPulse"></span> Open to Opportunities';

  availabilityCol.appendChild(availabilityLabel);
  availabilityCol.appendChild(availabilityText);
  detailsGrid.appendChild(availabilityCol);

  detailsSection.appendChild(detailsGrid);
  container.appendChild(detailsSection);

  section.appendChild(container);
  return section;
}
