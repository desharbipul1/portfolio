/**
 * Section Label Component
 * Displays section metadata like "ABOUT" with animated rule draw and premium styling
 */
export function createSectionLabel(label, number) {
  const container = document.createElement('div');
  container.className = 'mb-12 sm:mb-16 flex items-center gap-4 animate-slideFadeIn';

  // Accent indicator
  const indicator = document.createElement('div');
  indicator.className = 'w-1.5 h-6 rounded-full bg-gradient-to-b from-accent-cyan to-accent-purple';
  container.appendChild(indicator);

  const labelElement = document.createElement('span');
  labelElement.className = 'font-mono text-xs sm:text-sm tracking-widest text-transparent bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-gold bg-clip-text uppercase font-bold hover:animate-neonGlow transition-all duration-base cursor-default';
  labelElement.textContent = `${label}`;

  const line = document.createElement('div');
  line.className = 'flex-1 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-transparent animate-ruleDraw hover:animate-glowPulse rounded-full';
  line.setAttribute('aria-hidden', 'true');

  container.appendChild(labelElement);
  container.appendChild(line);

  return container;
}

/**
 * Create subsection label
 */
export function createSubLabel(text) {
  const label = document.createElement('span');
  label.className = 'font-mono text-xs sm:text-sm text-accent-cyan tracking-widest uppercase block mb-6 font-bold hover:animate-wave transition-all duration-base cursor-default';
  label.textContent = text;
  return label;
}
