/**
 * Button Component
 * Reusable button with consistent styling
 */
export function createButton(text, options = {}) {
  const {
    type = 'button',
    href = null,
    target = '_self',
    className = '',
    onClick = null,
    ariaLabel = null,
  } = options;

  let element;

  if (href) {
    element = document.createElement('a');
    element.href = href;
    element.target = target;
    if (target === '_blank') {
      element.rel = 'noopener noreferrer';
    }
  } else {
    element = document.createElement('button');
    element.type = type;
  }

  element.textContent = text;
  element.className = `px-6 py-3 rounded-md font-medium transition-all duration-base 
    hover:shadow-lg ${className || 'bg-accent text-background hover:bg-status'}`;

  // Add interactive feedback
  element.addEventListener('mousedown', () => {
    element.style.transform = 'scale(0.95)';
  });

  element.addEventListener('mouseup', () => {
    element.style.transform = '';
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = '';
  });

  if (ariaLabel) {
    element.setAttribute('aria-label', ariaLabel);
  }

  if (onClick && !href) {
    element.addEventListener('click', onClick);
  }

  return element;
}

/**
 * Primary Button
 */
export function createPrimaryButton(text, options = {}) {
  return createButton(text, {
    ...options,
    className:
      options.className ||
      'bg-gradient-to-r from-accent-cyan to-accent-purple text-background-DEFAULT font-semibold px-8 py-3 rounded-lg transition-all duration-base shadow-elevation-1 hover:shadow-elevation-4 hover:shadow-glow-cyan-lg hover:scale-105 active:scale-95',
  });
}

/**
 * Secondary Button
 */
export function createSecondaryButton(text, options = {}) {
  return createButton(text, {
    ...options,
    className:
      options.className ||
      'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 px-8 py-3 rounded-lg transition-all duration-base shadow-elevation-1 hover:shadow-elevation-3 hover:shadow-glow-cyan hover:scale-105 active:scale-95',
  });
}
