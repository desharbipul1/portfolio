/**
 * Technology Orbit 3D Component
 * 3D rotating technology visualization with logos and hover tooltips
 */

import { technologies } from '../../data/technologies.js';

/**
 * Map tech names to proper logos
 */
const techLogos = {
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  '.NET Core': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  'SQL Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'Jira': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
  'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
  'AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
};

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function createTechnologyOrbit3D() {
  const container = document.createElement('div');
  container.className = 'relative w-full h-96 flex items-center justify-center perspective';
  container.setAttribute('role', 'img');
  container.setAttribute('aria-label', '3D technology stack visualization with branches');

  // SVG for branches (removed - keeping SVG for cleaner structure)
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 400 400');
  svg.setAttribute('class', 'absolute w-full h-full');
  svg.setAttribute('style', 'position: absolute; top: 0; left: 0;');
  svg.setAttribute('aria-hidden', 'true');

  // Removed branches - only keep center circle

  // Central white circle - REMOVED
  // (keeping empty for future use if needed)

  container.appendChild(svg);

  // Main orbit container with 3D perspective
  const orbitContainer = document.createElement('div');
  orbitContainer.className = 'relative';
  orbitContainer.style.cssText = `
    width: 100%;
    height: 100%;
    max-width: 420px;
    max-height: 420px;
    perspective: 1000px;
    transform-style: preserve-3d;
  `;

  // Create rotating orbit group
  const orbit = document.createElement('div');
  orbit.className = 'orbit-3d';
  orbit.style.cssText = `
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: ${prefersReducedMotion() ? 'none' : 'orbitClockwise 20s linear infinite'};
  `;

  // Add tech items in 3D circular orbit
  const orbitTechs = ['C#', '.NET', 'SQL Server', 'Redis', 'Docker', 'Python', 'GitHub', 'Jira', 'HTML', 'CSS'];
  const techItems = technologies.filter(tech => orbitTechs.includes(tech.name));
  const itemCount = techItems.length;

  techItems.forEach((tech, index) => {
    const angle = (index / itemCount) * Math.PI * 2;
    const radius = 130;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    const techElement = document.createElement('div');
    techElement.className = 'tech-item-3d';
    techElement.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60px;
      height: 60px;
      margin: -30px 0 0 -30px;
      transform: translateX(${x}px) translateY(${y}px);
      transform-style: preserve-3d;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1.5px solid rgba(230, 215, 184, 0.4);
      border-radius: 8px;
      background: rgba(16, 18, 20, 0.8);
      backdrop-filter: blur(8px);
      cursor: pointer;
      transition: all 0.4s ease-out;
      font-size: 26px;
      font-weight: 600;
      color: #E6D7B8;
      box-shadow: inset 0 0 8px rgba(230, 215, 184, 0.15);
    `;

    // Get logo URL or fallback to placeholder
    const logoUrl = techLogos[tech.name];
    if (logoUrl) {
      const logoImg = document.createElement('img');
      logoImg.src = logoUrl;
      logoImg.alt = tech.name;
      logoImg.style.cssText = `
        width: 40px;
        height: 40px;
        object-fit: contain;
        filter: drop-shadow(0 0 4px rgba(230, 215, 184, 0.3));
      `;
      techElement.appendChild(logoImg);
    } else {
      // Fallback to emoji if no logo found
      const icon = '◆';
      techElement.innerHTML = `
        <span class="tech-icon" style="font-size: 28px; filter: drop-shadow(0 0 4px rgba(230, 215, 184, 0.3));">${icon}</span>
      `;
    }

    // Create tooltip for name
    const tooltip = document.createElement('div');
    tooltip.className = 'tech-tooltip';
    tooltip.style.cssText = `
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(230, 215, 184, 0.95);
      color: #090A0B;
      padding: 4px 8px;
      border-radius: 4px;
      font-family: 'Geist Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: 20;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;
    tooltip.textContent = tech.name;
    techElement.appendChild(tooltip);

    // Hover effects
    techElement.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(230, 215, 184, 0.15)';
      this.style.borderColor = '#E6D7B8';
      this.style.boxShadow = '0 0 16px rgba(230, 215, 184, 0.4), inset 0 0 8px rgba(230, 215, 184, 0.15)';
      this.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.15)`;
      tooltip.style.opacity = '1';
      orbit.style.animationPlayState = 'paused';
    });

    techElement.addEventListener('mouseleave', function() {
      this.style.background = 'rgba(16, 18, 20, 0.8)';
      this.style.borderColor = 'rgba(230, 215, 184, 0.4)';
      this.style.boxShadow = 'inset 0 0 8px rgba(230, 215, 184, 0.15)';
      this.style.transform = `translateX(${x}px) translateY(${y}px)`;
      tooltip.style.opacity = '0';
      orbit.style.animationPlayState = 'running';
    });

    orbit.appendChild(techElement);
  });

  orbitContainer.appendChild(orbit);
  container.appendChild(orbitContainer);

  return container;
}

/**
 * Inject 3D animation keyframes into the document
 */
export function inject3DAnimationStyles() {
  // Check if styles already injected
  if (document.getElementById('tech-orbit-3d-styles')) {
    return;
  }

  const style = document.createElement('style');
  style.id = 'tech-orbit-3d-styles';
  style.textContent = `
    @keyframes orbit3D {
      from {
        transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
      }
      to {
        transform: rotateX(20deg) rotateY(360deg) rotateZ(0deg);
      }
    }

    @keyframes orbit3DVertical {
      from {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
      }
      to {
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
      }
    }

    .orbit-3d {
      perspective: 1200px;
    }

    .tech-item-3d {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }

    @media (prefers-reduced-motion: reduce) {
      .orbit-3d {
        animation: none !important;
      }
    }

    @media (max-width: 640px) {
      .tech-tooltip {
        font-size: 10px !important;
      }
    }
  `;

  document.head.appendChild(style);
}
