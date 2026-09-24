/**
 * Home Section Component
 * Hero section with personal branding and main CTAs
 */

import { createPrimaryButton, createSecondaryButton } from '../../components/common/Button.js';
import { createAvailabilityBadge } from '../../components/common/StatusIndicator.js';
import { createSocialLinksContainer } from '../../components/common/SocialLink.js';
import { socialLinks } from '../../data/socialLinks.js';

export function createHomeSection() {
  const section = document.createElement('section');
  section.id = 'home';
  section.className = 'min-h-screen py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background-DEFAULT via-background-DEFAULT to-background-hover flex items-center overflow-hidden relative';

  // Add animated background gradient
  section.innerHTML = `
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    </div>
  `;

  // Container
  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto w-full relative z-10';

  // Decorative rule line with gradient
  const ruleLine = document.createElement('div');
  ruleLine.className = 'w-12 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-gold mb-8 animate-ruleDraw rounded-full';
  container.appendChild(ruleLine);

  // Mission Control + Editorial - Status indicator line with new colors
  const missionControlStatus = document.createElement('div');
  missionControlStatus.className = 'mb-8 animate-slideDown';
  missionControlStatus.innerHTML = `
    <div class="pl-4 border-l-2 border-accent-cyan/50 space-y-1">
      <p class="font-mono text-xs text-foreground-muted">[ ENTERPRISE → FOCUSED_WEB → AI → BACKEND ]</p>
      <p class="font-mono text-xs text-accent-emerald font-semibold">✓ SYSTEMS_ENGINEERED</p>
      <p class="font-mono text-xs text-accent-gold font-semibold">✓ ARCHITECTURE_OPTIMIZED</p>
      <p class="font-mono text-xs text-accent-coral font-semibold">✓ EXCELLENCE_DELIVERED</p>
    </div>
  `;
  container.appendChild(missionControlStatus);

  // Kinetic Typography - Name with gradient animation
  const nameElement = document.createElement('h1');
  nameElement.className =
    'text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 transition-all duration-slow bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-gold bg-clip-text text-transparent animate-floatUp';
  nameElement.textContent = 'Bipul Deshar';
  nameElement.style.fontFamily = "'Caveat', cursive";
  nameElement.style.fontStyle = 'italic';
  nameElement.style.fontVariationSettings = "'slnt' -20";
  nameElement.style.transform = 'skewX(-10deg)';

  container.appendChild(nameElement);

  // Subtitle with role and description
  const subtitleSection = document.createElement('div');
  subtitleSection.className = 'mb-12 animate-heroContent animate-delay-200';

  const roleText = document.createElement('p');
  roleText.className = 'text-lg sm:text-xl text-foreground-secondary mb-4 font-mono tracking-widest';
  roleText.innerHTML = '<span class="text-accent-cyan">→</span> SOFTWARE ENGINEER · <span class="text-accent-gold">KATHMANDU</span>';

  const bioText = document.createElement('p');
  bioText.className = 'text-lg sm:text-xl text-foreground-secondary leading-relaxed max-w-2xl mb-6';
  bioText.textContent =
    'I design and build scalable software solutions with thoughtful architecture and clean code. Focused on backend systems, reliability, and engineering excellence.';

  subtitleSection.appendChild(roleText);
  subtitleSection.appendChild(bioText);
  container.appendChild(subtitleSection);

  // CTAs - View Resume and scroll indicator
  const ctaSection = document.createElement('div');
  ctaSection.className = 'mb-16 flex flex-wrap items-center gap-6 animate-heroContent animate-delay-300';

  const viewResumeBtn = createPrimaryButton('VIEW RESUME →', {
    href: '[RESUME_URL]',
    className: 'px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-background-DEFAULT font-semibold rounded transition-all duration-base hover:shadow-lg hover:shadow-accent-cyan/40 hover:scale-105',
  });

  const connectBtn = createPrimaryButton('CONNECT →', {
    href: 'https://linkedin.com/in/bipuldeshar',
    target: '_blank',
    className: 'px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-background-DEFAULT font-semibold rounded transition-all duration-base hover:shadow-lg hover:shadow-accent-cyan/40 hover:scale-105',
  });

  ctaSection.appendChild(viewResumeBtn);
  ctaSection.appendChild(connectBtn);
  container.appendChild(ctaSection);

  // Open to Opportunities Text with accent
  const openToOpportunitiesText = document.createElement('p');
  openToOpportunitiesText.className = 'text-sm text-foreground-secondary mb-8 animate-heroContent animate-delay-400 flex items-center gap-4';
  openToOpportunitiesText.innerHTML = '<span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-accent-emerald animate-glowPulse"></span> Open to opportunities</span><span class="text-foreground-muted/40">·</span><span class="text-xs text-foreground-muted/80 font-mono tracking-wide">Freelancing · Remote · Contract</span>';
  container.appendChild(openToOpportunitiesText);

  // Social Links
  const socialSection = document.createElement('div');
  socialSection.className = 'animate-heroContent animate-delay-400';

  const socialLabel = document.createElement('p');
  socialLabel.className = 'font-mono text-xs text-foreground-muted tracking-widest uppercase mb-4';
  socialLabel.innerHTML = '<span class="text-accent-purple">→</span> ELSEWHERE';

  const socialContainer = createSocialLinksContainer(socialLinks);
  socialContainer.className = 'flex flex-wrap gap-4';

  socialSection.appendChild(socialLabel);
  socialSection.appendChild(socialContainer);
  container.appendChild(socialSection);

  // System Map - Interactive Status Indicator with gradient colors
  const systemMap = document.createElement('div');
  systemMap.className = 'mt-20 pt-12 border-t border-accent-cyan/20 animate-heroContent animate-delay-500';
  systemMap.innerHTML = `
    <div class="grid grid-cols-3 gap-6 mb-8">
      <div class="text-center p-4 rounded-lg bg-accent-emerald/5 border border-accent-emerald/20 hover:border-accent-emerald/60 transition-all duration-base">
        <div class="w-3 h-3 rounded-full bg-accent-emerald mx-auto mb-2 animate-glowPulse"></div>
        <p class="font-mono text-xs text-foreground-muted">STATUS</p>
        <p class="font-mono text-xs text-accent-emerald font-semibold">ACTIVE</p>
      </div>
      <div class="text-center p-4 rounded-lg bg-accent-cyan/5 border border-accent-cyan/20 hover:border-accent-cyan/60 transition-all duration-base">
        <div class="w-3 h-3 rounded-full bg-accent-cyan mx-auto mb-2 animate-glowPulse" style="animation-delay: 0.3s"></div>
        <p class="font-mono text-xs text-foreground-muted">AVAILABILITY</p>
        <p class="font-mono text-xs text-accent-cyan font-semibold">OPEN</p>
      </div>
      <div class="text-center p-4 rounded-lg bg-accent-gold/5 border border-accent-gold/20 hover:border-accent-gold/60 transition-all duration-base">
        <div class="w-3 h-3 rounded-full bg-accent-gold mx-auto mb-2 animate-glowPulse" style="animation-delay: 0.6s"></div>
        <p class="font-mono text-xs text-foreground-muted">REMOTE</p>
        <p class="font-mono text-xs text-accent-gold font-semibold">YES</p>
      </div>
    </div>
  `;
  container.appendChild(systemMap);

  // Scroll Indicator with animation
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'mt-12 flex justify-center text-foreground-muted text-xs font-mono tracking-widest';
  scrollIndicator.innerHTML = '<span class="animate-scrollIndicator text-accent-cyan">SCROLL <span class="ml-2">↓</span></span>';

  container.appendChild(scrollIndicator);

  section.appendChild(container);
  return section;
}

/**
 * Add slide-up animation styles
 */
export function setupHomeAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-slideUp {
      animation: slideUp 0.6s ease-out forwards;
    }

    .animate-slideUp:nth-child(1) {
      animation-delay: 0.2s;
    }

    .animate-slideUp:nth-child(2) {
      animation-delay: 0.3s;
    }

    .animate-slideUp:nth-child(3) {
      animation-delay: 0.4s;
    }

    .animate-slideUp:nth-child(4) {
      animation-delay: 0.5s;
    }

    .animate-slideUp:nth-child(5) {
      animation-delay: 0.6s;
    }

    .animate-slideUp:nth-child(6) {
      animation-delay: 0.7s;
    }

    .animate-slideUp:nth-child(7) {
      animation-delay: 0.8s;
    }

    .animate-bounce {
      animation: bounce 2s infinite;
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
        opacity: 0.7;
      }
      50% {
        transform: translateY(-10px);
        opacity: 1;
      }
    }

    /* Kinetic Typography - Premium name animation */
    @keyframes kinematicGradient {
      0% {
        background-position: 0% center;
      }
      50% {
        background-position: 100% center;
      }
      100% {
        background-position: 0% center;
      }
    }

    .animate-kinematicText {
      background: linear-gradient(90deg, #F1F1ED 0%, #C7FF6B 50%, #F1F1ED 100%);
      background-size: 200% auto;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: kinematicGradient 4s ease-in-out infinite;
    }

    .animate-kinematicText:hover {
      animation: kinematicGradient 2s ease-in-out infinite;
    }

    /* Blink animation for Mission Control cursor */
    @keyframes blink {
      0%, 50% {
        opacity: 1;
      }
      51%, 100% {
        opacity: 0;
      }
    }

    .animate-blink {
      animation: blink 1s infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      .animate-slideUp {
        animation: none;
        opacity: 1;
      }

      .animate-bounce {
        animation: none;
      }

      .animate-kinematicText {
        animation: none;
        background: #F1F1ED;
        -webkit-text-fill-color: inherit;
      }

      .animate-blink {
        animation: none;
      }
    }

    @media (max-width: 640px) {
      #home {
        padding-top: 100px;
      }

      #home h1 {
        font-size: 2.5rem;
      }
    }
  `;
  document.head.appendChild(style);
}
