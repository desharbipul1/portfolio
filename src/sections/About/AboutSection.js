/**
 * About Section Component
 * Displays personal description and technology stack
 */

import { createSectionLabel } from '../../components/common/SectionLabel.js';
import { getTechByCategory } from '../../data/technologies.js';
import { createTechnologyOrbit3D, inject3DAnimationStyles } from '../../components/technology/TechnologyOrbit3D.js';

export function createAboutSection() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'min-h-screen py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background-DEFAULT via-background-DEFAULT to-background-hover relative overflow-hidden';

  // Add decorative gradient
  section.innerHTML = `
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/3 -left-40 w-80 h-80 bg-accent-cyan/8 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/3 -right-40 w-80 h-80 bg-accent-purple/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s"></div>
    </div>
  `;

  // Container
  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto relative z-10';

  // Section Label
  const sectionLabel = createSectionLabel('ABOUT');
  container.appendChild(sectionLabel);

  // Main content grid - Split-Screen Editorial Layout
  const contentGrid = document.createElement('div');
  contentGrid.className = 'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start editorial-split';

  // LEFT SIDE - Profile & Visual (Editorial style)
  const profileContainer = document.createElement('div');
  profileContainer.className = 'lg:col-span-1 flex flex-col gap-8';

  // Profile Image with gradient border and glow
    // const profileImgWrapper = document.createElement('div');
    // profileImgWrapper.className = 'relative group';
    // profileImgWrapper.innerHTML = `
    //   <div class="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 via-accent-purple/10 to-transparent rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-slow opacity-0 group-hover:opacity-100"></div>
    //   <img src="[PROFILE_IMAGE_URL]" alt="[YOUR_NAME]" class="w-full rounded-lg object-cover border-2 border-gradient bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30 relative z-10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-base" style="border-image: linear-gradient(135deg, rgba(6, 214, 255, 0.5), rgba(167, 139, 250, 0.5)) 1">
    // `;
  //profileContainer.appendChild(profileImgWrapper);

  // Technical Blueprint info on left (Glassmorphic with colors)
  const blueprintInfo = document.createElement('div');
  blueprintInfo.className = 'glassmorphic-card p-8 rounded-lg bg-surface-elevated/60 backdrop-blur-sm border border-accent-cyan/20 hover:border-accent-cyan/50 transition-all duration-base';
  blueprintInfo.innerHTML = `
    <p class="font-mono text-xs text-accent-cyan uppercase tracking-widest mb-4"><span class="text-accent-coral">▌</span> Technical Specs</p>
    <div class="space-y-3 font-mono text-xs text-foreground-secondary">
      <div class="flex justify-between items-center pb-2 border-b border-accent-cyan/10 hover:border-accent-cyan/30 transition-colors duration-fast">
        <span class="text-foreground-muted">Focus</span>
        <span class="text-accent-cyan font-semibold">Backend Development & AI Integration</span>
      </div>
      <div class="flex justify-between items-center pb-2 border-b border-accent-cyan/10 hover:border-accent-cyan/30 transition-colors duration-fast">
        <span class="text-foreground-muted">Architecture</span>
        <span class="text-accent-coral font-semibold">Monolith / Distributed</span>
      </div>
      <div class="flex justify-between items-center pb-2 border-b border-accent-cyan/10 hover:border-accent-cyan/30 transition-colors duration-fast">
        <span class="text-foreground-muted">Approach</span>
        <span class="text-accent-emerald font-semibold">Scalable Architecture</span>
      </div>
      <div class="flex justify-between items-center pb-2 border-b border-accent-cyan/10 hover:border-accent-cyan/30 transition-colors duration-fast">
        <span class="text-foreground-muted">Core Stack</span>
        <span class="text-accent-purple font-semibold">.NET / C# / SQL / Azure</span>
      </div>
      <div class="flex justify-between items-center pb-2 border-b border-accent-cyan/10 hover:border-accent-cyan/30 transition-colors duration-fast">
        <span class="text-foreground-muted">Integration</span>
        <span class="text-accent-pink font-semibold">APIs / CI/CD / Cloud</span>
      </div>
      <div class="flex justify-between items-center pb-2 border-b border-accent-cyan/10 hover:border-accent-cyan/30 transition-colors duration-fast">
        <span class="text-foreground-muted">Methodology</span>
        <span class="text-accent-cyan font-semibold">Agile</span>
      </div>
      <div class="flex justify-between items-center pb-2 border-b border-accent-cyan/10 hover:border-accent-cyan/30 transition-colors duration-fast">
        <span class="text-foreground-muted">Development</span>
        <span class="text-accent-gold font-semibold">Clean Code / SOLID</span>
      </div>
      <div class="flex justify-between items-center pb-2 border-b border-accent-cyan/10 hover:border-accent-cyan/30 transition-colors duration-fast">
        <span class="text-foreground-muted">Interests</span>
        <span class="text-accent-coral font-semibold">AI / Automation / Design</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-foreground-muted">Availability</span>
        <span class="text-accent-emerald font-semibold">Contract / Remote / Freelance</span>
      </div>
    </div>
  `;
  profileContainer.appendChild(blueprintInfo);
  contentGrid.appendChild(profileContainer);

  // RIGHT SIDE - Editorial Content
  const textContent = document.createElement('div');
  textContent.className = 'lg:col-span-1 space-y-8 editorial-content';

  // Name heading with gradient
  const nameHeading = document.createElement('h2');
  nameHeading.className = 'text-4xl sm:text-5xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent';
  nameHeading.textContent = 'Bipul Deshar';
  nameHeading.style.fontFamily = "'Caveat', cursive";
  nameHeading.style.fontStyle = 'italic';
  nameHeading.style.fontVariationSettings = "'slnt' -20";
  nameHeading.style.transform = 'skewX(-10deg)';

  textContent.appendChild(nameHeading);

  // Role and location - editorial style with accent color
  const roleSection = document.createElement('div');
  roleSection.innerHTML = `
    <p class="text-lg font-semibold text-accent-gold mb-2">→ Software Engineer</p>
    <p class="text-foreground-muted font-mono text-sm uppercase tracking-wide">Kathmandu, Nepal</p>
  `;
  textContent.appendChild(roleSection);

  // Personal description - editorial paragraph with colored border
  const description = document.createElement('p');
  description.className = 'text-lg text-foreground-secondary leading-relaxed pt-2 border-l-4 border-accent-emerald/50 hover:border-accent-emerald transition-colors duration-base pl-6';
  description.textContent =
    'I\'m a Software Engineer with experience in designing, developing, and maintaining scalable software solutions. I enjoy building reliable applications, solving technical problems, and continuously improving my knowledge of modern software engineering practices.';

  textContent.appendChild(description);

  // Core stack section with accent colors
  const coreStackLabel = document.createElement('p');
  coreStackLabel.className = 'font-mono text-xs text-accent-cyan tracking-widest uppercase mt-8 mb-2';
  coreStackLabel.innerHTML = '<span class="text-accent-purple">›</span> core_stack';

  textContent.appendChild(coreStackLabel);

  const coreStack = document.createElement('p');
  coreStack.className = 'text-foreground-secondary font-mono text-sm';
  coreStack.textContent = 'C#, .NET, ASP.NET Core, Angular, SQL Server, PostgreSQL, Docker, CI/CD, AI';

  textContent.appendChild(coreStack);

  // Expertise section with accent colors
  const expertiseLabel = document.createElement('p');
  expertiseLabel.className = 'font-mono text-xs text-accent-gold tracking-widest uppercase mt-4';
  expertiseLabel.innerHTML = '<span class="text-accent-coral">></span> expertise';

  textContent.appendChild(expertiseLabel);

  const expertise = document.createElement('p');
  expertise.className = 'text-foreground-secondary font-mono text-sm';
  expertise.textContent = 'Backend Development, Scalable Applications, Database Design, API Development, Software Architecture';

  textContent.appendChild(expertise);

  // Principles section with accent colors
  const principlesLabel = document.createElement('p');
  principlesLabel.className = 'font-mono text-xs text-accent-emerald tracking-widest uppercase mt-4';
  principlesLabel.innerHTML = '<span class="text-accent-purple">></span> principles';

  textContent.appendChild(principlesLabel);

  const principles = document.createElement('p');
  principles.className = 'text-foreground-secondary font-mono text-sm';
  principles.textContent = 'Clean Code, Reliability, Maintainability, Continuous Learning, Technical Excellence';

  textContent.appendChild(principles);

  contentGrid.appendChild(textContent);
  container.appendChild(contentGrid);

  // Technology section - Enhanced styling
  const techSection = document.createElement('div');
  techSection.className = 'mt-16 pt-12 border-t border-accent-cyan/20';

  const techHeading = document.createElement('h3');
  techHeading.className = 'text-2xl font-semibold bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent mb-6';
  techHeading.textContent = 'TECH STACK';

  techSection.appendChild(techHeading);

  // Tech Stack Container - 2 Column Layout
  const techContentGrid = document.createElement('div');
  techContentGrid.className = 'grid grid-cols-2 gap-16 items-center';

  // Column 1 - Technology categories (all in one single column)
  const categoriesContainer = document.createElement('div');
  categoriesContainer.className = 'space-y-8';

  const categories = [
    { label: 'Languages', key: 'language' },
    { label: 'Frameworks', key: 'framework' },
    { label: 'Databases', key: 'database' },
    { label: 'Infrastructure', key: 'infrastructure' },
  ];

  categories.forEach(({ label, key }) => {
    const category = document.createElement('div');

    const categoryLabel = document.createElement('span');
    categoryLabel.className = 'font-mono text-xs text-foreground-muted tracking-widest uppercase block mb-3';
    categoryLabel.textContent = label;

    const techs = getTechByCategory(key);
    const techList = document.createElement('p');
    techList.className = 'text-foreground-secondary text-sm leading-loose';
    techList.innerHTML = techs.map((t) => t.name).join('&nbsp;&nbsp;');

    category.appendChild(categoryLabel);
    category.appendChild(techList);
    categoriesContainer.appendChild(category);
  });

  techContentGrid.appendChild(categoriesContainer);

  // Column 2 - 3D Tech Orbit Animation (circle animation)
  const orbitContainer = document.createElement('div');
  orbitContainer.className = 'flex justify-center items-center';
  orbitContainer.style.cssText = 'min-height: 420px;';
  const techOrbit3D = createTechnologyOrbit3D();
  orbitContainer.appendChild(techOrbit3D);
  techContentGrid.appendChild(orbitContainer);

  techSection.appendChild(techContentGrid);
  container.appendChild(techSection);

  // Inject 3D animation styles
  inject3DAnimationStyles();

  // Mission Control details
  const missionSection = document.createElement('div');
  missionSection.className = 'mt-16 pt-12 border-t border-border-strong grid grid-cols-2 sm:grid-cols-4 gap-6';

  const missionItems = [
    { label: 'FOCUS', value: 'BACKEND' },
    { label: 'INTERESTS', value: 'ARCHITECTURE' },
    { label: 'METHODOLOGY', value: 'AGILE' },
    { label: 'LEARNING', value: 'ACTIVE' },
  ];

  missionItems.forEach(({ label, value }) => {
    const item = document.createElement('div');
    item.className = 'text-center sm:text-left';

    const itemLabel = document.createElement('span');
    itemLabel.className = 'font-mono text-xs text-foreground-muted tracking-widest uppercase block mb-1';
    itemLabel.textContent = label;

    const itemValue = document.createElement('span');
    itemValue.className = 'text-foreground-DEFAULT font-semibold';
    itemValue.textContent = value;

    item.appendChild(itemLabel);
    item.appendChild(itemValue);
    missionSection.appendChild(item);
  });

  container.appendChild(missionSection);

  section.appendChild(container);
  return section;
}

/**
 * Add animations for about section
 */
export function setupAboutAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    #about h2,
    #about h3 {
      animation: slideUp 0.6s ease-out;
    }

    #about p {
      animation: slideUp 0.6s ease-out;
    }

    @media (prefers-reduced-motion: reduce) {
      #about h2,
      #about h3,
      #about p {
        animation: none;
      }
    }

    @media (max-width: 1024px) {
      #about {
        padding: 80px 20px;
      }
    }

    @media (max-width: 640px) {
      #about h2 {
        font-size: 2rem;
      }

      #about h3 {
        font-size: 1.25rem;
      }
    }
  `;
  document.head.appendChild(style);
}
