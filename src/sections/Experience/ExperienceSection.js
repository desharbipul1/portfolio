/**
 * Experience Section Component
 * Professional timeline/history
 */

import { createSectionLabel } from '../../components/common/SectionLabel.js';
import { createExperienceItem } from '../../components/experience/ExperienceItem.js';
import { experience, getExperienceChronological } from '../../data/experience.js';

export function createExperienceSection() {
  const section = document.createElement('section');
  section.id = 'experience';
  section.className = 'min-h-screen py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background-DEFAULT to-background-hover relative overflow-hidden';

  // Add decorative gradient
  section.innerHTML = `
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 -right-40 w-80 h-80 bg-accent-gold/8 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent-emerald/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
    </div>
  `;

  // Container
  const container = document.createElement('div');
  container.className = 'max-w-5xl mx-auto relative z-10';

  // Section Label
  const sectionLabel = createSectionLabel('EXPERIENCE');
  sectionLabel.classList.add('animate-slideUp');
  container.appendChild(sectionLabel);

  // Mission Control + Editorial Header with enhanced styling
  const missionHeader = document.createElement('div');
  missionHeader.className = 'mb-16 p-8 border-l-4 border-accent-gold rounded-r-lg bg-surface-elevated/50 hover:bg-surface-elevated/80 transition-all duration-base animate-slideUp animate-delay-100 backdrop-blur-sm';
  missionHeader.style.boxShadow = '0 0 20px rgba(251, 191, 36, 0.05)';
  missionHeader.innerHTML = `
    <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent-gold to-accent-emerald bg-clip-text text-transparent">EXPERIENCE</h2>
  `;
  container.appendChild(missionHeader);

  // Timeline
  const timeline = document.createElement('div');
  timeline.className = 'space-y-0 relative';

  // Add vertical line effect
  timeline.style.position = 'relative';
  timeline.innerHTML = '<div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-gold via-accent-purple to-transparent opacity-30" style="left: 2px; display: none;"></div>';

  const chronologicalExp = getExperienceChronological();

  chronologicalExp.forEach((exp, index) => {
    const expItem = createExperienceItem(exp);
    expItem.classList.add('animate-slideUp');
    expItem.style.animationDelay = `${200 + index * 100}ms`;
    timeline.appendChild(expItem);
  });

  container.appendChild(timeline);

  section.appendChild(container);
  return section;
}
