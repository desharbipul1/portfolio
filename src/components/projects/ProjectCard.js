/**
 * Project Card Component
 * Individual project showcase card with hover animations and premium effects
 */

export function createProjectCard(project) {
  const card = document.createElement('div');
  card.className =
    'group project-card animate-slideUp transition-all duration-base cursor-pointer p-8 rounded-xl border border-accent-cyan/20 hover:border-accent-cyan/60 bg-surface-elevated/60 hover:bg-surface-elevated/95 backdrop-blur-md relative overflow-hidden';
  card.setAttribute('data-project-id', project.id);
  card.style.perspective = '1000px';

  // Add decorative gradient background element on hover
  const hoverGradient = document.createElement('div');
  hoverGradient.className = 'absolute inset-0 bg-gradient-to-br from-accent-cyan/0 via-transparent to-accent-purple/0 hover:from-accent-cyan/5 hover:via-accent-purple/3 hover:to-accent-cyan/5 pointer-events-none transition-all duration-base';
  card.appendChild(hoverGradient);

  // Add premium hover effects with layered shadows and glow
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = 'var(--shadow-elevation-5), var(--shadow-glow-cyan-lg), inset 0 0 20px rgba(6, 214, 255, 0.05)';
    card.style.transform = 'translateY(-12px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'var(--shadow-elevation-2)';
    card.style.transform = 'translateY(0) scale(1)';
  });

  // Initial shadow on load
  card.style.boxShadow = 'var(--shadow-elevation-2)';

  // Featured badge if applicable
  if (project.featured) {
    const badge = document.createElement('div');
    badge.className = 'absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-accent-coral to-accent-gold rounded-full text-xs font-bold text-background-DEFAULT animate-pulse';
    badge.textContent = '★ FEATURED';
    badge.style.zIndex = '10';
    card.appendChild(badge);
  }

  // Project number with accent color
  const numberElement = document.createElement('div');
  numberElement.className = 'text-xs font-mono text-accent-cyan mb-4 font-semibold tracking-widest relative z-20';
  numberElement.innerHTML = `<span class="text-accent-coral">▌</span> PROJECT_${String(project.number).padStart(2, '0')}`;
  card.appendChild(numberElement);

  // Project title with premium gradient and animation
  const titleElement = document.createElement('h3');
  titleElement.className =
    'text-2xl sm:text-3xl font-bold mb-4 transition-all duration-base relative z-20 bg-gradient-to-r from-foreground-DEFAULT to-accent-cyan bg-clip-text text-transparent group-hover:from-accent-cyan group-hover:to-accent-purple';
  titleElement.textContent = project.title;
  
  card.addEventListener('mouseenter', () => {
    titleElement.classList.add('animate-titleSlide');
  });

  card.addEventListener('mouseleave', () => {
    titleElement.classList.remove('animate-titleSlide');
  });

  card.appendChild(titleElement);

  // Project description with better typography
  const descElement = document.createElement('p');
  descElement.className = 'text-foreground-secondary text-sm sm:text-base leading-relaxed mb-6 relative z-20';
  descElement.textContent = project.description;
  card.appendChild(descElement);

  // Technologies with premium badge styling
  const techContainer = document.createElement('div');
  techContainer.className = 'mb-8 flex flex-wrap gap-2 relative z-20';
  project.technologies.forEach((tech, index) => {
    const techTag = document.createElement('span');
    
    // Use simple monochrome styling without colors
    techTag.className = `text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-fast cursor-default border border-foreground-secondary/30 bg-surface-elevated/40 text-foreground-secondary hover:border-foreground-secondary/60 hover:bg-surface-elevated/60`;
    techTag.textContent = tech;
    
    techContainer.appendChild(techTag);
  });
  card.appendChild(techContainer);

  // Divider line
  const divider = document.createElement('div');
  divider.className = 'h-px bg-gradient-to-r from-accent-cyan/20 via-accent-purple/20 to-transparent mb-6 relative z-20';
  card.appendChild(divider);

   // Linkssssss with premium styling and icons
  const linksContainer = document.createElement('div');
  linksContainer.className = 'flex flex-wrap gap-4 text-sm font-semibold relative z-20';

  if (project.githubUrl && project.githubUrl !== '[GITHUB_PROJECT_URL]') {
    const githubLink = document.createElement('a');
    githubLink.href = project.githubUrl;
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.className = 'inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 hover:shadow-glow-cyan transition-all duration-fast group/link';
    
    githubLink.innerHTML = `
      <span>GitHub</span>
      <span class="text-xs group-hover/link:animate-arrow inline-block transition-transform">↗</span>
    `;
    
    linksContainer.appendChild(githubLink);
  }

  // if (project.demoUrl && project.demoUrl !== '[DEMO_URL]') {
  //   const demoLink = document.createElement('a');
  //   demoLink.href = project.demoUrl;
  //   demoLink.target = '_blank';
  //   demoLink.rel = 'noopener noreferrer';
  //   demoLink.className = 'inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-gold/10 text-accent-gold hover:bg-accent-gold/20 hover:shadow-glow-gold transition-all duration-fast group/link';
    
  //   demoLink.innerHTML = `
  //     <span>Live Demo</span>
  //     <span class="text-xs group-hover/link:animate-arrow inline-block transition-transform">↗</span>
  //   `;
    
  //   linksContainer.appendChild(demoLink);
  // }

  // if (project.caseStudyUrl && project.caseStudyUrl !== '[CASE_STUDY_URL]') {
  //   const caseLink = document.createElement('a');
  //   caseLink.href = project.caseStudyUrl;
  //   caseLink.className = 'inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-purple/10 text-accent-purple hover:bg-accent-purple/20 hover:shadow-glow-purple transition-all duration-fast group/link';
    
  //   caseLink.innerHTML = `
  //     <span>Case Study</span>
  //     <span class="text-xs inline-block transition-transform">→</span>
  //   `;
    
  //   linksContainer.appendChild(caseLink);
  // }

  card.appendChild(linksContainer);

  return card;
}
