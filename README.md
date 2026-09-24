# Premium Minimalistic Software Engineer Portfolio

A Swiss-designed, dark cinematic portfolio SPA built with HTML, CSS, and Tailwind CSS.

## Features

- **Minimalist Design**: Swiss Modernist aesthetic with subtle Mission-Control instrumentation
- **Dark Cinematic**: Deep blacks, controlled contrast, premium feel
- **Responsive**: Mobile-first, optimized for all screen sizes
- **Accessible**: WCAG AA compliant, keyboard navigation, screen reader support
- **Data-Driven**: Centralized data files for easy updates
- **Performance-First**: Minimal JavaScript, optimized assets

## Architecture

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── sections/       # Page sections
│   ├── data/           # Centralized data (projects, experience, tech)
│   ├── hooks/          # Custom utilities
│   ├── lib/            # Application logic
│   ├── styles/         # Global CSS and design system
│   ├── types/          # Type definitions
│   ├── main.js         # Application entry point
│   └── styles/         # CSS
├── index.html          # HTML entry point
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Development

### Phase 1: Foundation & Design System ✓
- Project structure
- Tailwind CSS configuration
- Design tokens and CSS variables
- Base components
- Accessibility foundation

### Phase 2: Brand Reveal & Home
- Loading screen animation
- Home section with hero content
- Availability status
- Social links integration

### Phase 3: About & Technology System
- About section
- Technology Orbit visualization
- Technology categories

### Phase 4: Projects & Experience
- Projects grid
- Experience timeline
- Data-driven content

### Phase 5: Contact, Polish & Production
- Contact section
- Final optimizations
- Production readiness

## Customization

Replace placeholder values in these files:

- `src/data/socialLinks.js` - Social media URLs
- `src/data/projects.js` - Project information
- `src/data/experience.js` - Work experience
- `src/data/technologies.js` - Technology stack
- `index.html` - SEO metadata and personal information

## Design System

### Colors
- Background: `#090A0B`
- Surface: `#101214`
- Foreground: `#F1F1ED`
- Accent: `#C7FF6B`

### Typography
- Primary: Geist (sans-serif)
- Secondary: Geist Mono (monospace)

### Spacing
Based on 8px grid with predefined scale (xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## Performance

- No external UI libraries
- Minimal JavaScript (vanilla)
- Lazy loading for images
- Optimized fonts
- Fast first render

## Accessibility

- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation
- Focus management
- Color contrast (WCAG AA)
- Reduced motion support

## License

[YOUR_NAME] © 2026
