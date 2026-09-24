/**
 * Technology Orbit Component
 * Rotating technology visualization for About section
 */

import { technologies } from '../../data/technologies.js';

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function createTechnologyOrbit() {
  const container = document.createElement('div');
  container.className = 'relative w-full aspect-square max-w-md mx-auto my-12';
  container.setAttribute('role', 'img');
  container.setAttribute('aria-label', 'Technology stack visualization orbiting core');

  // SVG for orbit
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 400 400');
  svg.setAttribute('class', 'w-full h-full');
  svg.setAttribute('aria-hidden', 'true');

  // Define styles
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  style.textContent = `
    .orbit-circle {
      fill: none;
      stroke: rgba(241, 241, 237, 0.08);
      stroke-width: 1;
    }

    .orbit-group {
      animation: orbitRotate 30s linear infinite;
      transform-origin: 50% 50%;
    }

    .orbit-group:hover {
      animation-play-state: paused;
    }

    @keyframes orbitRotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .tech-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border: 1px solid rgba(241, 241, 237, 0.15);
      border-radius: 8px;
      background: rgba(16, 18, 20, 0.6);
      font-family: 'Geist Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      color: #E6D7B8;
      cursor: pointer;
      transition: all 0.3s ease-out;
    }

    .tech-item:hover {
      border-color: #E6D7B8;
      background: rgba(230, 215, 184, 0.1);
      transform: scale(1.1);
      box-shadow: 0 0 12px rgba(230, 215, 184, 0.2);
    }

    .core {
      font-family: 'Geist', sans-serif;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      color: #E6D7B8;
      letter-spacing: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .orbit-group {
        animation: none;
      }
    }
  `;
  defs.appendChild(style);
  svg.appendChild(defs);

  // Background circles (orbits)
  const orbits = [100, 150, 200];
  orbits.forEach((radius) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '200');
    circle.setAttribute('cy', '200');
    circle.setAttribute('r', radius);
    circle.setAttribute('class', 'orbit-circle');
    svg.appendChild(circle);
  });

  // Orbit group
  const orbitGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  orbitGroup.setAttribute('class', 'orbit-group');

  // Add technology items in orbit
  const techItems = technologies.slice(0, 8); // Use first 8 techs
  const itemsPerOrbit = Math.ceil(techItems.length / 3);
  let itemIndex = 0;

  orbits.forEach((radius, orbitIndex) => {
    for (let i = 0; i < itemsPerOrbit && itemIndex < techItems.length; i++) {
      const angle = (i / itemsPerOrbit) * Math.PI * 2 - Math.PI / 2;
      const x = 200 + radius * Math.cos(angle) - 30;
      const y = 200 + radius * Math.sin(angle) - 30;

      const tech = techItems[itemIndex];
      const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
      foreignObject.setAttribute('x', x);
      foreignObject.setAttribute('y', y);
      foreignObject.setAttribute('width', '60');
      foreignObject.setAttribute('height', '60');

      const techDiv = document.createElement('div');
      techDiv.className = 'tech-item';
      techDiv.textContent = tech.name.split(' ')[0];
      techDiv.setAttribute('title', tech.name);
      techDiv.setAttribute('role', 'tooltip');

      foreignObject.appendChild(techDiv);
      orbitGroup.appendChild(foreignObject);

      itemIndex++;
    }
  });

  svg.appendChild(orbitGroup);

  // Core circle with text
  const coreBackground = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  coreBackground.setAttribute('cx', '200');
  coreBackground.setAttribute('cy', '200');
  coreBackground.setAttribute('r', '50');
  coreBackground.setAttribute('fill', 'rgba(230, 215, 184, 0.05)');
  coreBackground.setAttribute('stroke', 'rgba(230, 215, 184, 0.2)');
  coreBackground.setAttribute('stroke-width', '1');
  svg.appendChild(coreBackground);

  const coreText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  coreText.setAttribute('x', '200');
  coreText.setAttribute('y', '200');
  coreText.setAttribute('text-anchor', 'middle');
  coreText.setAttribute('dominant-baseline', 'middle');
  coreText.setAttribute('class', 'core');
  coreText.textContent = 'CORE';
  svg.appendChild(coreText);

  container.appendChild(svg);

  // Handle reduced motion
  if (prefersReducedMotion()) {
    orbitGroup.style.animation = 'none';
  }

  return container;
}
