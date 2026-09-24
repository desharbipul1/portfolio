/**
 * BrandLoader Component
 * Initial loading screen with cinematic letter animation
 * Transitions smoothly to Home section
 */

export function createBrandLoader() {
  const loader = document.getElementById('loader');
  const loaderLetter = document.getElementById('loader-letter');
  const content = document.getElementById('content');

  // Get first letter from page title
  const yourName = document.title.match(/\[([^\]]*)\]/)?.[1] || 'Y';
  const initialLetter = yourName.charAt(0).toUpperCase();

  loaderLetter.textContent = initialLetter;

  // Apply cinematic reveal animation
  loaderLetter.classList.add('animate-cinematicReveal');

  // Start loading sequence
  const loadingDuration = 800; // 600-1000ms as per spec

  // Transition after duration
  setTimeout(() => {
    hideLoader();
  }, loadingDuration);

  function hideLoader() {
    // Fade out loader with smooth transition
    loader.style.transition = 'opacity 0.6s ease-out';
    loader.style.opacity = '0';

    // Show content with fade in
    content.classList.add('animate-sectionFadeIn');
    content.style.opacity = '1';

    // Remove loader from DOM
    setTimeout(() => {
      loader.style.display = 'none';
    }, 600);
  }

  return { hideLoader };
}

/**
 * Add keyframes for loader animation
 */
export function setupLoaderAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInOut {
      0%, 100% {
        opacity: 0.7;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.02);
      }
    }

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

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    #loader {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #090A0B;
      z-index: 9999;
      font-family: 'Geist', sans-serif;
    }

    #loader-letter {
      font-size: 96px;
      font-weight: 700;
      color: #E6D7B8;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    #content {
      opacity: 0;
      transition: opacity 0.8s ease-out;
    }

    #content.show {
      opacity: 1;
    }

    @media (max-width: 640px) {
      #loader-letter {
        font-size: 64px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #loader-letter {
        animation: none;
      }
    }
  `;
  document.head.appendChild(style);
}
