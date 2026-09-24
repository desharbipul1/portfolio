/**
 * Projects Section Component
 * Grid of portfolio projects
 */

import { createSectionLabel } from '../../components/common/SectionLabel.js';
import { createProjectCard } from '../../components/projects/ProjectCard.js';
import { projects } from '../../data/projects.js';

export function createProjectsSection() {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'min-h-screen py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background-DEFAULT via-background-DEFAULT to-background-hover relative overflow-hidden';

  // Add decorative gradient elements
  section.innerHTML = `
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s"></div>
    </div>
  `;

  // Container
  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto relative z-10';

  // Section Label
  const sectionLabel = createSectionLabel('PROJECTS');
  sectionLabel.classList.add('animate-slideUp');
  container.appendChild(sectionLabel);

  // Technical Blueprint Header with mission statement - Enhanced styling
  const blueprintHeader = document.createElement('div');
  blueprintHeader.className = 'mb-16 p-8 border-2 border-gradient bg-surface-elevated/60 backdrop-blur-sm rounded-lg animate-slideUp animate-delay-100 hover:border-accent-cyan/60 transition-all duration-base';
  blueprintHeader.style.borderImage = 'linear-gradient(135deg, rgba(6, 214, 255, 0.4), rgba(167, 139, 250, 0.4)) 1';
  blueprintHeader.style.boxShadow = '0 0 20px rgba(6, 214, 255, 0.05)';
  blueprintHeader.innerHTML = `
    <div class="font-mono text-xs text-accent-cyan uppercase tracking-widest mb-3"><span class="text-accent-coral">▌</span> TECHNICAL_BLUEPRINT</div>
    <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-4">PROJECTS</h2>
    <p class="text-foreground-secondary max-w-2xl">Engineering-focused portfolio showcasing scalable systems, clean architecture, and production-ready solutions.</p>
  `;
  container.appendChild(blueprintHeader);

  // Projects grid
  const projectsGrid = document.createElement('div');
  projectsGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-8 mb-16';

  projects.forEach((project, index) => {
    const card = createProjectCard(project);
    card.classList.add('animate-slideUp');
    card.style.animationDelay = `${200 + index * 100}ms`;
    projectsGrid.appendChild(card);
  });

  container.appendChild(projectsGrid);

  // Call to action - Enhanced with colors
  const ctaSection = document.createElement('div');
  ctaSection.className = 'mt-16 pt-12 border-t border-accent-cyan/20 text-center animate-slideUp animate-delay-300';

  const ctaText = document.createElement('p');
  ctaText.className = 'text-lg text-foreground-secondary mb-6';
  ctaText.textContent = 'Interested in exploring more projects?';

  const ctaLink = document.createElement('a');
  ctaLink.href = 'https://github.com/';
  ctaLink.target = '_blank';
  ctaLink.rel = 'noopener noreferrer';
  ctaLink.className = 'inline-flex items-center gap-2 px-6 py-3 text-foreground-DEFAULT bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/40 hover:border-accent-cyan rounded-lg transition-all duration-base hover:shadow-lg hover:shadow-cyan-500/20 font-semibold';
  ctaLink.innerHTML = 'Visit GitHub Profile <span class="text-accent-cyan">↗</span>';

  ctaSection.appendChild(ctaText);
  ctaSection.appendChild(ctaLink);
  container.appendChild(ctaSection);

  section.appendChild(container);
  return section;
}
