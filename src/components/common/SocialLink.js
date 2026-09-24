/**
 * Social Link Component
 * Creates styled social media links
 */
export function createSocialLink(platform, url, text = null) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  link.className = `inline-flex items-center gap-1 text-foreground-secondary hover:text-accent-cyan 
    transition-all duration-base font-medium hover:scale-110 hover:animate-pop`;

  link.innerHTML = `
    ${text || platform}
    <span class="text-xs inline-block group-hover:animate-wave">↗</span>
  `;

  link.setAttribute('aria-label', `Visit our ${platform}`);

  // Add hover animation
  link.addEventListener('mouseenter', () => {
    link.style.textShadow = '0 0 10px rgba(6, 214, 255, 0.5)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.textShadow = 'none';
  });

  return link;
}

/**
 * Social Links Container
 */
export function createSocialLinksContainer(links) {
  const container = document.createElement('div');
  container.className = 'flex flex-wrap gap-6';

  links.forEach(({ platform, url, text }, index) => {
    const link = createSocialLink(platform, url, text);
    link.style.animationDelay = `${index * 100}ms`;
    link.classList.add('animate-slideInLeft');
    container.appendChild(link);
  });

  return container;
}
