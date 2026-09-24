# Portfolio Website — Design & Implementation Specification

## 0. Project Vision

Build a **premium, minimalistic Software Engineer portfolio SPA** with a visual language inspired by:

- **Swiss Modernist** — strict typography, grid discipline, whitespace, hierarchy, precision.

- **Subtle Mission Control** — restrained technical instrumentation, status indicators, micro-labels, coordinates-like metadata, thin rules, system-style details.

- **Dark Cinematic** — deep blacks, controlled contrast, soft ambient lighting, no loud neon.

- **Premium Minimal** — every element should have a purpose; avoid visual clutter and generic portfolio-template aesthetics.

The result should feel like a **high-end engineering/product portfolio**, not a typical developer landing page.

> Important: Mission Control is a subtle visual layer only. Do NOT turn the site into a sci-fi dashboard, spaceship UI, HUD, cyberpunk interface, or gaming website.

---

# 1. Core Requirements

## Application

- Single Page Application (SPA).

- Responsive across desktop, tablet, and mobile.

- Use **HTML + CSS + Tailwind CSS**.

- Use semantic HTML.

- Keep components modular and maintainable.

- Content must be data-driven where practical.

- Do not invent personal information, companies, projects, dates, achievements, links, or technologies.

- Use placeholders such as `[YOUR_NAME]`, `[LINKEDIN_URL]`, `[EMAIL]`, etc.

- The implementation must be production-quality rather than a static visual mockup.

## Primary sections

1. Loading / Brand Reveal

2. Home

3. About

4. Projects

5. Experience

6. Contact

7. Footer

## Navigation

Provide a minimal sticky navigation with anchors to:

- Home

- About

- Projects

- Experience

- Contact

Also include a LinkedIn external link.

Navigation should remain visually lightweight.

---

# 2. Design System

## 2.1 Visual direction

The design should combine:

### Swiss Modernist

- Strong typographic hierarchy.

- Large intentional whitespace.

- Mathematical spacing.

- Clear alignment.

- Asymmetric but controlled layouts.

- Thin rules.

- Grid-based composition.

- Minimal decoration.

- No unnecessary cards.

### Subtle Mission Control

Use small details such as:

- `SYSTEM / 01`

- `STATUS / AVAILABLE`

- `REMOTE / YES`

- `CONTRACT / YES`

- `01 — ABOUT`

- `02 — PROJECTS`

- Small section indexes.

- Tiny metadata labels.

- Thin horizontal rules.

- Small status dots.

- Monospace technical labels.

- Very subtle coordinate/grid references where appropriate.

These details must support the Swiss layout rather than dominate it.

### Premium Minimal

- Fewer elements, better spacing.

- Avoid visual noise.

- No excessive shadows.

- No excessive rounded cards.

- No gradients that look like generic SaaS templates.

- No oversized decorative icons.

- No skill percentage bars.

- No unnecessary statistics.

---

# 3. Color System

Use a dark cinematic palette.

Suggested CSS variables:

```css

:root {

  --background: #090A0B;

  --surface: #101214;

  --surface-elevated: #151719;

  --foreground: #F1F1ED;

  --foreground-secondary: #A6A7A3;

  --foreground-muted: #686A68;

  --border: rgba(241, 241, 237, 0.10);

  --border-strong: rgba(241, 241, 237, 0.18);

  --accent: #C7FF6B;

  --accent-muted: rgba(199, 255, 107, 0.12);

  --status: #B8FF7A;

}

```

### Color rules

- Background should be almost black but not pure `#000000`.

- Primary text should be warm/off-white rather than pure white.

- Secondary text should have enough contrast while remaining understated.

- Accent should be used sparingly.

- Prefer one restrained accent rather than multiple bright colors.

- The accent may be used for:

  - availability status

  - active navigation state

  - tiny technical indicators

  - CTA hover states

  - selected project details

- Do not make large sections bright green.

- Do not use rainbow gradients.

- Do not use neon cyberpunk colors.

---

# 4. Typography

Typography is one of the most important parts of the design.

Use:

### Primary font

**Geist** or another high-quality modern grotesk/sans-serif.

Use for:

- Name

- Headings

- Body

- Navigation

- Buttons

- Project titles

### Secondary font

**Geist Mono** or a similar modern monospace.

Use sparingly for:

- Section indexes

- Technical metadata

- Status labels

- Dates

- Technology labels

- Small mission-control details

Example:

```text

SYSTEM / 01

OPEN TO OPPORTUNITIES

2026

C# · .NET · DOCKER

```

### Typography principles

- Large hero typography.

- Tight but readable heading line-height.

- Comfortable body line-height.

- Small uppercase metadata with tracking.

- Avoid using too many font sizes.

- Use typography rather than decoration to create visual interest.

---

# 5. Loading / Brand Reveal

The first screen must be extremely minimal.

On initial load:

```text

                        A

```

Where `A` represents the first letter of `[YOUR_NAME]`.

Requirements:

- Full viewport.

- Dark background.

- Letter centered horizontally and vertically.

- No border.

- No card.

- No visible padding container.

- No logo frame.

- No loading spinner.

- No progress bar.

- No extra text.

- Use a refined font treatment.

- Subtle opacity/scale animation is acceptable.

Then transition smoothly into the Home section.

Suggested sequence:

```text

Initial:

A

Then:

A → fades/scales subtly → Home appears

```

Keep the loading animation around 600–1000ms.

Do not create a long artificial loading experience.

---

# 6. Home Section

The Home section is the primary brand statement.

## Personal brand

The developer's name should act as a **wordmark / brand identity**.

Do NOT present it as a normal navbar item inside a basic bordered box.

Example:

```text

[YOUR_NAME]

```

Use:

- Large typography.

- Refined tracking.

- Strong but minimal visual treatment.

- Subtle hover behavior.

- Optional tiny monogram/initial detail.

- No heavy logo container.

- No decorative badge around the name.

## Hero content

Suggested structure:

```text

[YOUR_NAME]

SOFTWARE ENGINEER

I design and build reliable software

with thoughtful architecture and clean code.

.NET · C# · ASP.NET CORE · DOCKER · SQL

```

Do not copy this wording literally if the real user content is later provided.

Use placeholders for personal copy.

## Availability

Prominently but subtly show:

```text

● OPEN TO OPPORTUNITIES

CONTRACT    AVAILABLE

REMOTE      AVAILABLE

```

This should be a compact status component.

Use the accent color only for the status indicator.

## Primary actions

Include:

- View Projects

- Download Resume

Secondary social links:

- LinkedIn ↗

- GitHub ↗

- Email ↗

LinkedIn must redirect to `[LINKEDIN_URL]`.

Resume must point to `[RESUME_URL_OR_FILE]`.

## Hero micro-details

Optional subtle metadata:

```text

SYSTEM / 01

BASED IN / [LOCATION]

FOCUS / BACKEND & SOFTWARE ENGINEERING

```

Keep these small and secondary.

---

# 7. About Section

The About section should feel editorial and spacious.

Suggested layout:

```text

01 / ABOUT

ABOUT ME

[Personal description]

[Second paragraph]

TECHNOLOGY

Backend

C# · ASP.NET Core · Web API

Architecture

DDD · Clean Architecture · CQRS

Data

SQL Server · PostgreSQL · Redis

Infrastructure

Docker · Azure · CI/CD

Testing

xUnit · Integration Testing · Testcontainers

```

## Content principles

Do not make the About section a giant biography.

Focus on:

- Who the developer is.

- What they build.

- Engineering interests.

- Engineering philosophy.

- Core technologies.

---

# 8. Technology Orbit

Create a subtle rotating technology visual inside or near the About section.

The concept:

```text

                C#

        Docker          .NET

              [ CORE ]

        SQL              Redis

```

Technology logos/icons should orbit around a central element.

Possible technologies:

- C#

- .NET

- ASP.NET Core

- Docker

- SQL

- PostgreSQL

- Redis

- Git

Only use technologies actually provided by the user.

## Animation

- Slow rotation.

- Smooth and elegant.

- No fast spinning.

- No excessive glow.

- Pause or reduce animation on hover if appropriate.

- Respect `prefers-reduced-motion`.

The orbit should feel like a **technical instrument**, not a flashy animation.

---

# 9. Projects Section

Projects are a major part of the portfolio.

Use a clean Swiss grid.

Suggested structure:

```text

02 / SELECTED PROJECTS

01

PROJECT NAME

Short project description.

.NET · PostgreSQL · Docker

GitHub ↗

Case Study →

```

Repeat for 3–5 projects.

## Project cards

Cards should be visually minimal.

Avoid:

- huge rounded cards

- excessive shadows

- glassmorphism

- giant gradients

- stock images

Use:

- subtle borders

- strong typography

- project number

- project title

- concise description

- technology metadata

- small arrow

- subtle hover movement

## Hover behavior

On hover:

- border becomes slightly stronger.

- project title shifts subtly.

- arrow moves a few pixels.

- optional project preview appears.

- background may brighten very slightly.

Animation must remain fast and restrained.

## Project data model

Keep project content in a dedicated data file.

Example:

```ts

{

  id: "project-01",

  number: "01",

  title: "[PROJECT_NAME]",

  description: "[PROJECT_DESCRIPTION]",

  technologies: ["C#", ".NET", "PostgreSQL"],

  githubUrl: "[GITHUB_URL]",

  demoUrl: "[DEMO_URL]",

  caseStudyUrl: "[CASE_STUDY_URL]"

}

```

---

# 10. Experience Section

Use a clean editorial timeline/list.

Example:

```text

03 / EXPERIENCE

SOFTWARE ENGINEER

[COMPANY]

[START_DATE] — [END_DATE]

[Short description]

• Achievement / responsibility

• Achievement / responsibility

• Achievement / responsibility

```

Use dates as monospace metadata.

Avoid:

- large timeline graphics

- excessive circles

- huge vertical connectors

- overly decorative resume cards

The experience section should feel like a well-designed technical résumé.

---

# 11. Contact Section

The final major section should feel like a conclusion.

Suggested layout:

```text

04 / CONTACT

LET'S BUILD

SOMETHING.

I'm open to interesting software engineering

opportunities and technical collaborations.

[GET IN TOUCH →]

EMAIL

[email]

LINKEDIN

[LinkedIn]

GITHUB

[GitHub]

```

Keep it spacious.

The contact CTA should be visually strong but still minimal.

---

# 12. Footer

Minimal footer:

```text

[YOUR_NAME]

Software Engineer

GitHub ↗

LinkedIn ↗

Email ↗

© 2026 [YOUR_NAME]

```

Optional tiny technical label:

```text

BUILT WITH HTML · CSS · TAILWIND

```

---

# 13. Navigation

Create a sticky navigation.

Desktop:

```text

[YOUR_NAME]                         ABOUT

                                     PROJECTS

                                     EXPERIENCE

                                     CONTACT

                                     LINKEDIN ↗

```

Possible alternative:

```text

[YOUR_NAME]      01 About  02 Work  03 Experience  04 Contact

```

Use a compact layout.

Navigation should:

- become slightly more opaque after scrolling.

- maintain a subtle bottom border.

- indicate the active section.

- smoothly scroll to sections.

- work properly on mobile.

Mobile navigation should be simple and accessible.

---

# 14. Scroll Experience

The site should feel calm and intentional.

Implement:

- smooth scrolling.

- subtle section reveal animations.

- small fade/translate transitions.

- optional 1px scroll-progress line at the top.

- active navigation section detection.

Do not animate every element independently.

The user should feel:

> "The interface is alive."

not:

> "Everything is moving."

---

# 15. Mission-Control Micro Details

Use these selectively.

Examples:

```text

SYSTEM / 01

```

```text

STATUS / ONLINE

```

```text

MODE / OPEN

```

```text

REMOTE / AVAILABLE

```

```text

CONTRACT / AVAILABLE

```

```text

STACK / .NET

```

```text

2026

```

```text

SCROLL TO EXPLORE ↓

```

These should generally use the monospace font and muted color.

Do not turn every paragraph into system metadata.

---

# 16. Layout System

Use a consistent grid.

Desktop:

- Max content width around 1200–1400px.

- Generous horizontal padding.

- 12-column grid where useful.

- Consistent vertical rhythm.

- Large section spacing.

Mobile:

- Smaller horizontal padding.

- Stack grid content.

- Preserve whitespace.

- Avoid shrinking desktop layouts excessively.

- Ensure headings wrap naturally.

Use CSS/Tailwind spacing tokens consistently.

---

# 17. Responsive Requirements

## Desktop

Optimize for:

- 1440px

- 1280px

- 1024px

## Tablet

Optimize for:

- 768px

- 834px

## Mobile

Optimize for:

- 390px

- 375px

- 360px

Requirements:

- No horizontal overflow.

- No clipped text.

- No broken animations.

- Cards become single-column.

- Navigation becomes mobile-friendly.

- Technology orbit scales down.

- Hero typography scales fluidly.

---

# 18. Accessibility

Must include:

- Semantic HTML.

- Proper heading hierarchy.

- Accessible navigation.

- Keyboard navigation.

- Visible focus states.

- Alt text for meaningful images.

- Decorative images marked appropriately.

- Good color contrast.

- Buttons should be real buttons.

- Links should be real links.

- Respect `prefers-reduced-motion`.

Animations must be disabled or substantially reduced when:

```css

@media (prefers-reduced-motion: reduce)

```

is active.

---

# 19. Performance

Prioritize:

- Minimal JavaScript.

- Optimized assets.

- Lazy-load non-critical images.

- Avoid huge background videos.

- Avoid unnecessary animation libraries.

- Avoid excessive DOM nesting.

- Use CSS/Tailwind for simple animations.

- Keep first render fast.

- Avoid artificial loading delays.

The loading animation is visual branding, not a reason to delay the application.

---

# 20. SEO / Metadata

Even though this is an SPA, include:

- meaningful `<title>`

- meta description

- Open Graph metadata

- Twitter/X metadata where applicable

- canonical URL placeholder

- favicon

- semantic headings

Example:

```text

[YOUR_NAME] — Software Engineer

```

Do not use fake personal details.

---

# 21. Suggested Folder Architecture

Use a clean, scalable structure.

```text

portfolio/

│

├── public/

│   ├── favicon.svg

│   ├── resume/

│   │   └── resume.pdf

│   └── images/

│

├── src/

│   │

│   ├── components/

│   │   ├── common/

│   │   │   ├── Button

│   │   │   ├── SectionLabel

│   │   │   ├── StatusIndicator

│   │   │   └── SocialLink

│   │   │

│   │   ├── navigation/

│   │   │   ├── Navbar

│   │   │   └── MobileMenu

│   │   │

│   │   ├── loading/

│   │   │   └── BrandLoader

│   │   │

│   │   ├── technology/

│   │   │   ├── TechnologyOrbit

│   │   │   └── TechnologyIcon

│   │   │

│   │   ├── projects/

│   │   │   ├── ProjectCard

│   │   │   ├── ProjectGrid

│   │   │   └── ProjectPreview

│   │   │

│   │   └── experience/

│   │       └── ExperienceItem

│   │

│   ├── sections/

│   │   ├── Home/

│   │   │   └── HomeSection

│   │   ├── About/

│   │   │   └── AboutSection

│   │   ├── Projects/

│   │   │   └── ProjectsSection

│   │   ├── Experience/

│   │   │   └── ExperienceSection

│   │   └── Contact/

│   │       └── ContactSection

│   │

│   ├── data/

│   │   ├── projects.ts

│   │   ├── experience.ts

│   │   ├── technologies.ts

│   │   └── socialLinks.ts

│   │

│   ├── hooks/

│   │   ├── useActiveSection.ts

│   │   └── useReducedMotion.ts

│   │

│   ├── lib/

│   │   └── utils.ts

│   │

│   ├── styles/

│   │   ├── globals.css

│   │   └── variables.css

│   │

│   ├── types/

│   │   ├── project.ts

│   │   ├── experience.ts

│   │   └── technology.ts

│   │

│   ├── App

│   └── main

│

├── index.html

├── package.json

├── tailwind.config

└── README.md

```

If the chosen tooling uses a slightly different convention, preserve the architectural intent rather than forcing these exact filenames.

---

# 22. Data-Driven Content

Do not hardcode project/experience/technology content throughout JSX/HTML.

Create centralized data structures.

Example:

```ts

export const technologies = [

  {

    name: "C#",

    icon: "/icons/csharp.svg",

    category: "language"

  },

  {

    name: ".NET",

    icon: "/icons/dotnet.svg",

    category: "backend"

  }

];

```

This makes future updates easy.

---

# 23. Component Principles

Components should have one clear responsibility.

Good:

```text

ProjectCard

TechnologyOrbit

StatusIndicator

SectionLabel

SocialLink

```

Avoid giant components such as:

```text

PortfolioEverything.tsx

```

Keep presentation and data separate.

Avoid premature abstractions.

---

# 24. Animation Principles

Use subtle animation durations around:

- 150–250ms for hover interactions.

- 300–500ms for section transitions.

- 600–1000ms for brand reveal.

Use easing that feels smooth and premium.

Prefer:

```text

opacity

transform

filter

```

for simple animation.

Avoid layout-heavy animations.

---

# 25. Design Anti-Patterns

Do NOT implement:

- Generic Bootstrap-looking UI.

- Excessive rounded cards.

- Glassmorphism everywhere.

- Neon cyberpunk styling.

- Purple/pink AI gradients.

- Particle backgrounds.

- Full-screen video backgrounds.

- Huge 3D objects.

- Excessive parallax.

- Skill percentage bars.

- Fake testimonials.

- Fake client logos.

- Fake metrics.

- Fake achievements.

- Excessive badges.

- Multiple competing accent colors.

- Excessive shadows.

- Excessive border boxes.

- Constant spinning elements.

- Unnecessary hamburger menus on desktop.

- Long loading screens.

---

# 26. Five-Phase Implementation Plan

The entire project must be completed in **5 phases**.

---

## PHASE 1 — Foundation & Design System

### Goal

Establish the technical foundation and visual system.

### Tasks

- Initialize project.

- Configure Tailwind CSS.

- Configure fonts.

- Create global CSS variables.

- Establish dark theme.

- Create typography scale.

- Establish spacing/grid system.

- Configure responsive breakpoints.

- Create base components.

- Create basic navigation.

- Set up project architecture.

- Add accessibility foundation.

- Add SEO metadata structure.

### Deliverable

A running SPA with:

- correct fonts

- correct colors

- correct spacing

- basic responsive structure

- reusable design primitives

Do NOT build every section in this phase.

---

## PHASE 2 — Brand Reveal & Home

### Goal

Create the first impression.

### Tasks

- Build `BrandLoader`.

- Create initial-letter loading animation.

- Implement transition from loading to Home.

- Build personal wordmark/name treatment.

- Build hero typography.

- Add Software Engineer label.

- Add introduction.

- Add technology metadata.

- Add availability status.

- Add Contract availability.

- Add Remote availability.

- Add Resume CTA.

- Add Projects CTA.

- Add LinkedIn.

- Add GitHub.

- Add Email.

- Add subtle hero animation.

- Add responsive Home layout.

### Deliverable

A polished, production-quality Home section that immediately communicates:

- Who the developer is.

- What they do.

- Their technical focus.

- Their availability.

- How to contact them.

---

## PHASE 3 — About & Technology System

### Goal

Communicate engineering identity and technical skills.

### Tasks

- Build About section.

- Add concise personal description.

- Add engineering philosophy.

- Build technology categories.

- Create technology data model.

- Build technology icons.

- Build Technology Orbit.

- Implement slow orbit animation.

- Implement hover interaction.

- Implement reduced-motion behavior.

- Ensure mobile orbit layout works.

- Add Mission-Control micro metadata.

### Deliverable

A refined About section with an attractive but restrained technical visualization.

---

## PHASE 4 — Projects & Experience

### Goal

Show real engineering work.

### Tasks

- Build project data model.

- Build ProjectCard.

- Build ProjectGrid.

- Add project hover interaction.

- Add GitHub/demo links.

- Add optional case-study links.

- Build Experience section.

- Build ExperienceItem.

- Add dates.

- Add responsibilities/achievements.

- Make all content data-driven.

- Add responsive layouts.

### Deliverable

A strong portfolio showcase that can be updated by editing data files rather than rebuilding components.

---

## PHASE 5 — Contact, Polish & Production

### Goal

Finish the experience and make the application production-ready.

### Tasks

- Build Contact section.

- Add email CTA.

- Add LinkedIn.

- Add GitHub.

- Build footer.

- Implement sticky navigation behavior.

- Implement active section detection.

- Implement scroll progress if appropriate.

- Add smooth scrolling.

- Add section reveal animations.

- Add reduced-motion support.

- Test all breakpoints.

- Test keyboard navigation.

- Test accessibility.

- Test links.

- Test resume download.

- Optimize assets.

- Optimize fonts.

- Verify SEO metadata.

- Verify no horizontal overflow.

- Remove console errors.

- Remove unused CSS/classes/dependencies.

- Perform final visual consistency pass.

### Deliverable

A complete, responsive, accessible, performant portfolio SPA.

---

# 27. Definition of Done

The project is considered complete only when:

- [ ] Loading screen works.

- [ ] Brand reveal transitions smoothly.

- [ ] Home section is polished.

- [ ] Name works as the personal brand.

- [ ] LinkedIn link works.

- [ ] GitHub link works.

- [ ] Email link works.

- [ ] Resume link/download works.

- [ ] Contract availability is visible.

- [ ] Remote availability is visible.

- [ ] About section is complete.

- [ ] Technology stack is data-driven.

- [ ] Technology orbit works.

- [ ] Projects are data-driven.

- [ ] Project cards work.

- [ ] Experience section works.

- [ ] Contact section works.

- [ ] Navigation works.

- [ ] Active navigation state works.

- [ ] Mobile navigation works.

- [ ] Responsive layout works.

- [ ] Reduced-motion behavior works.

- [ ] Keyboard navigation works.

- [ ] Color contrast is acceptable.

- [ ] SEO metadata exists.

- [ ] No horizontal overflow exists.

- [ ] No fake personal information exists.

- [ ] No unnecessary animations exist.

- [ ] No console errors exist.

- [ ] No unused placeholder content remains except explicitly marked fields.

---

# 28. Copilot Implementation Rules

When implementing this specification:

1. Do not invent personal information.

2. Do not invent professional experience.

3. Do not invent projects.

4. Do not invent company names.

5. Do not invent social links.

6. Use clearly marked placeholders.

7. Keep the implementation modular.

8. Prefer Tailwind utility classes for layout and styling.

9. Use CSS variables for design tokens.

10. Avoid unnecessary dependencies.

11. Do not introduce a UI component library unless explicitly requested.

12. Do not over-engineer the SPA.

13. Preserve the Swiss Modernist visual hierarchy.

14. Keep Mission-Control styling subtle.

15. Keep the overall aesthetic dark, cinematic, refined, and minimal.

16. Prioritize typography, spacing, alignment, and composition over decorative effects.

17. Every animation must have a purpose.

18. Respect reduced-motion preferences.

19. Make the site responsive from the beginning rather than adding mobile support later.

20. Keep content separate from presentation.

21. Reuse components where repetition exists.

22. Do not create giant monolithic components.

23. Do not use placeholder lorem ipsum.

24. Do not use stock imagery unless explicitly requested.

25. Do not add sections that are not specified without a clear reason.

---

# 29. Final Design Statement

The final portfolio should feel like:

> **A Swiss-designed engineering portfolio with a dark cinematic atmosphere and subtle mission-control instrumentation.**

The visual priority should be:

```text

TYPOGRAPHY

    ↓

SPACING

    ↓

GRID

    ↓

CONTENT

    ↓

MICRO-INTERACTIONS

    ↓

DECORATION

```

Decoration should always come last.

The site should communicate:

**Precision. Engineering. Calm. Confidence. Craft.**

30. VISUAL IMPLEMENTATION OVERRIDE — CSS, LAYOUT & ANIMATION

IMPORTANT FOR GITHUB COPILOT: The previous sections define the visual direction, but they are not sufficient if implemented only as generic Tailwind cards and stacked sections. This section is an implementation override. Use it to control the actual visual composition, CSS, spacing, responsive behavior, and animation quality.

Use https://kumarpulami.com.np/ as a visual reference for composition quality, editorial spacing, typography, restrained motion, section rhythm, and technical portfolio presentation. Do not copy its personal content, exact text, exact branding, or exact layout. The goal is to capture the quality of the presentation.

30.1 Overall composition

The page must feel editorial, asymmetric, spacious, and deliberately art-directed.

DO NOT build:

centered heading + centered paragraph + three cards

identical cards for every section

every section inside a rounded container

dashboard-like grids

PREFER:

one consistent page container

strong left alignment

12-column desktop grid

asymmetric content placement

large typography

thin horizontal rules

generous vertical spacing

small monospace metadata

project and experience rows rather than generic cards

Typical structure:

01 / ABOUT              main editorial content
02 / SELECTED WORK      project rows
03 / EXPERIENCE         experience rows
04 / CONTACT            large closing typography

30.2 Global page container

Use one primary page container:

:root {
  --page-max-width: 1440px;
  --page-padding-desktop: clamp(32px, 5vw, 88px);
  --page-padding-mobile: 20px;
  --section-space: clamp(120px, 15vw, 240px);
}

.page-container {
  width: min(
    100% - (2 * var(--page-padding-desktop)),
    var(--page-max-width)
  );
  margin-inline: auto;
}

@media (max-width: 767px) {
  .page-container {
    width: min(100% - 40px, var(--page-max-width));
  }
}

Do not let every section invent its own horizontal padding.

30.3 Grid system

Use a real 12-column grid on desktop:

.section-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: clamp(20px, 2.5vw, 40px);
}

Typical composition:

.section-label { grid-column: span 3; }
.section-content { grid-column: 4 / 11; }
.section-meta { grid-column: 11 / 13; }

Collapse to one column on mobile.

Do not center every section.

30.4 Section rhythm

Every major section should feel like a new editorial chapter.

.section {
  padding-block: var(--section-space);
}

Use section labels such as:

01 / ABOUT
02 / SELECTED WORK
03 / EXPERIENCE
04 / CONTACT

The index is small, monospace, muted, and aligned with the main grid.

30.5 Horizontal rules

Use thin rules as a major part of the visual language:

.rule {
  height: 1px;
  width: 100%;
  background: var(--border);
}

Use rules for navigation separation, section headers, project rows, experience rows, and footer separation.

Do not put borders around every element.

30.6 Hero composition

The hero should dominate the first viewport:

.hero {
  min-height: max(720px, 92svh);
  display: grid;
  align-items: end;
  padding-block: clamp(100px, 15vh, 180px);
}

Recommended hierarchy:

SYSTEM / 01

[YOUR_NAME]
[YOUR_NAME]

SOFTWARE ENGINEER

Short introduction...

● OPEN TO OPPORTUNITIES

[ VIEW PROJECTS ]   [ RESUME ]

.NET · C# · ARCHITECTURE · CLOUD

The name is the visual anchor.

.hero-name {
  font-size: clamp(4rem, 10vw, 10rem);
  line-height: .82;
  letter-spacing: -.065em;
  font-weight: 600;
  max-width: 11ch;
}

Do not use gradient text, glow, a logo card, or a huge decorative background.

30.7 Hero reveal animation

Reveal the hero in layers:

0ms    metadata
150ms  name
250ms  remaining name
400ms  role
500ms  description
650ms  availability
750ms  actions/metadata

Reusable CSS:

.reveal {
  opacity: 0;
  transform: translateY(18px);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 700ms cubic-bezier(.22, 1, .36, 1),
    transform 700ms cubic-bezier(.22, 1, .36, 1);
}

Do not animate the whole page as one block.

30.8 Loader transition

Keep the minimal initial letter loader from the original specification, but make it refined:

.loader-letter {
  animation: loader-in 700ms cubic-bezier(.22, 1, .36, 1) both;
}

@keyframes loader-in {
  from {
    opacity: 0;
    transform: scale(.94);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.loader.is-exiting {
  opacity: 0;
  transform: scale(1.02);
  transition:
    opacity 450ms ease,
    transform 650ms cubic-bezier(.22, 1, .36, 1);
}

Never artificially delay the site just to show the loader.

30.9 Navigation

Desktop navigation should be understated:

[NAME]                         ABOUT  WORK  EXPERIENCE  CONTACT

Use a subtle transition after scrolling:

.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  border-bottom: 1px solid transparent;
  transition:
    background-color 300ms ease,
    border-color 300ms ease,
    backdrop-filter 300ms ease;
}

.nav.is-scrolled {
  background: rgba(9, 10, 11, .78);
  border-color: var(--border);
  backdrop-filter: blur(14px);
}

Do not create a large pill-shaped navbar.

Active state should be a tiny underline or accent line, not a filled pill.

30.10 About layout

Use an editorial split:

01 / ABOUT                         ABOUT ME

                                   Main description
                                   Main description

                                   Engineering philosophy

                                   ─────────────────────

                                   TECHNOLOGY
                                   Backend
                                   Architecture
                                   Data
                                   Infrastructure

Do not turn About into a profile card.

30.11 Technology presentation

Do not use dozens of rounded technology badges.

Prefer structured typography:

BACKEND
C#                       .NET
ASP.NET Core             Web API

ARCHITECTURE
DDD                      Clean Architecture
CQRS                     MediatR

INFRASTRUCTURE
Docker                   Azure
CI/CD                    PostgreSQL

Icons can be used, but should remain secondary.

30.12 Technology orbit

Keep the orbit only if it improves the composition. It should feel like a technical diagram.

.orbit {
  animation: orbit-rotate 36s linear infinite;
}

@keyframes orbit-rotate {
  to { transform: rotate(360deg); }
}

.orbit-icon {
  animation: orbit-counter-rotate 36s linear infinite;
}

@keyframes orbit-counter-rotate {
  to { transform: rotate(-360deg); }
}

Use slow motion only. No fast spinning, neon glow, particles, 3D perspective, or pulsing.

On mobile, it is acceptable to replace the orbit with a clean technology list.

30.13 Projects — use rows, not generic cards

This is a major visual requirement.

Preferred:

01     PROJECT NAME                         .NET · SQL · DOCKER
       Short description.                   VIEW →

──────────────────────────────────────────────────────────────

02     PROJECT NAME                         C# · AZURE · REDIS
       Short description.                   VIEW →

──────────────────────────────────────────────────────────────

Recommended interaction:

.project-row {
  position: relative;
  padding-block: 32px;
  transition:
    padding 400ms cubic-bezier(.22, 1, .36, 1),
    background-color 300ms ease;
}

.project-row::before {
  content: "";
  position: absolute;
  inset: 0;
  transform: scaleX(0);
  transform-origin: left;
  background: rgba(241, 241, 237, .025);
  transition: transform 500ms cubic-bezier(.22, 1, .36, 1);
  z-index: -1;
}

.project-row:hover {
  padding-inline: 16px;
}

.project-row:hover::before {
  transform: scaleX(1);
}

.project-title {
  transition:
    transform 350ms cubic-bezier(.22, 1, .36, 1),
    color 250ms ease;
}

.project-row:hover .project-title {
  transform: translateX(8px);
}

.project-arrow {
  transition: transform 350ms cubic-bezier(.22, 1, .36, 1);
}

.project-row:hover .project-arrow {
  transform: translate(5px, -5px);
}

No giant shadows, glassmorphism, or oversized gradients.

30.14 Optional project preview

A small desktop-only project preview may appear on hover.

Requirements:

subtle

small

hidden on touch devices

does not affect layout

does not block clicking

no huge images

no performance-heavy effects

If cursor-following becomes complex, skip it.

30.15 Experience layout

Use editorial rows, not a generic timeline:

2024 — NOW       SOFTWARE ENGINEER
                 COMPANY
                 Description...
                 Responsibility...

──────────────────────────────────────────────────────────────

2023 — 2024      ASSOCIATE SOFTWARE ENGINEER
                 COMPANY
                 Description...

Desktop:

.experience-item {
  display: grid;
  grid-template-columns: 2fr 5fr 5fr;
  gap: 32px;
  padding-block: 40px;
}

Mobile:

@media (max-width: 767px) {
  .experience-item {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

Avoid circles and giant timeline connectors.

30.16 Contact section

Make the contact section a strong typographic conclusion:

04 / CONTACT

LET'S BUILD
SOMETHING.

Open to interesting engineering opportunities,
technical collaboration, and challenging problems.

GET IN TOUCH →

Use text/underline interactions rather than giant buttons.

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--foreground);
  padding-bottom: 8px;
  transition:
    gap 300ms cubic-bezier(.22, 1, .36, 1),
    color 250ms ease;
}

.contact-link:hover {
  gap: 20px;
  color: var(--accent);
}

30.17 Button system

Do not use generic rounded Tailwind buttons everywhere.

For actual primary actions:

.button-primary {
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding-inline: 20px;
  border: 1px solid var(--foreground);
  background: var(--foreground);
  color: var(--background);
  border-radius: 999px;
  transition:
    transform 250ms ease,
    background-color 250ms ease,
    color 250ms ease;
}

.button-primary:hover {
  transform: translateY(-2px);
}

Use pill shapes only for actual action controls, not for metadata.

30.18 Micro-interaction language

Use one consistent animation vocabulary.

Links:

arrow moves 4–8px

underline can extend subtly

color changes only slightly

Project rows:

subtle background sweep

title translates 4–8px

arrow moves

rule becomes slightly brighter

Navigation:

opacity/background transition

active underline

Buttons:

1–2px lift

restrained color transition

Images:

optional scale from 1 to 1.02

Do not create a different animation for every component.

30.19 Scroll reveal

Use one reusable IntersectionObserver reveal system:

[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 800ms cubic-bezier(.22, 1, .36, 1),
    transform 800ms cubic-bezier(.22, 1, .36, 1);
}

[data-reveal="fade"] {
  transform: none;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

Reveal groups, not every paragraph individually.

30.20 Performance rules for animation

Prefer:

transform

opacity

limited filter

Avoid animating:

width

height

top

left

margin

padding

Use IntersectionObserver for reveal.

Do not attach expensive scroll handlers to every element.

30.21 Reduced motion

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }

  [data-reveal] {
    opacity: 1;
    transform: none;
  }
}

The site must remain fully usable without animation.

30.22 Mobile art direction

Do not merely shrink desktop.

Mobile hero:

SYSTEM / 01

YOUR
NAME

SOFTWARE ENGINEER

Short introduction...

● OPEN TO OPPORTUNITIES

[ VIEW WORK ]

.NET · C# · DOCKER

Mobile projects:

01

PROJECT NAME
Description...

.NET · SQL · DOCKER

VIEW →
────────────────

Use about 20px horizontal padding and generous vertical spacing.

Use fluid typography with clamp().

30.23 Background depth

Keep the background nearly black. Optional depth may be extremely subtle:

body {
  background:
    radial-gradient(
      circle at 80% 10%,
      rgba(199, 255, 107, .025),
      transparent 30%
    ),
    var(--background);
}

This should be barely visible. No rainbow gradients.

30.24 Mission-control rules

Good:

SYSTEM / 01
STATUS / AVAILABLE
REMOTE / YES

Bad:

╔══════════════════════════════╗
║ SYSTEM ONLINE                ║
║ POWER 98%                    ║
║ CPU 14%                      ║
║ NETWORK CONNECTED            ║
╚══════════════════════════════╝

Never turn the portfolio into a dashboard.

30.25 CSS architecture

Use:

styles/
├── variables.css
├── globals.css
├── typography.css
├── layout.css
├── animations.css
└── components.css

If using Tailwind, preserve the same conceptual separation through CSS variables, Tailwind theme tokens, reusable component classes, and small custom CSS for complex animation.

Do not force complex animations into unreadable utility strings.

30.26 Required tokens

:root {
  --background: #090A0B;
  --surface: #101214;
  --surface-elevated: #151719;

  --foreground: #F1F1ED;
  --foreground-secondary: #A6A7A3;
  --foreground-muted: #686A68;

  --border: rgba(241, 241, 237, .10);
  --border-strong: rgba(241, 241, 237, .18);

  --accent: #C7FF6B;
  --accent-muted: rgba(199, 255, 107, .12);
  --status: #B8FF7A;

  --page-max-width: 1440px;

  --ease-out: cubic-bezier(.22, 1, .36, 1);
  --ease-standard: cubic-bezier(.2, .65, .3, 1);

  --duration-fast: 180ms;
  --duration-normal: 350ms;
  --duration-slow: 700ms;

  --section-space: clamp(120px, 15vw, 240px);
}

30.27 Visual QA

Inspect:

1440×900
1280×800
1024×768
834×1112
768×1024
390×844
375×812
360×800

Fail visual QA if:

it looks like a generic Tailwind template

every section is centered

everything is a rounded card

spacing is tight

typography is weak

the hero does not dominate

projects look like dashboard cards

experience looks like a generic timeline

animations are missing or excessive

navigation looks like SaaS UI

mobile is only compressed desktop

Mission Control overwhelms the Swiss Modernist design

Pass visual QA when the page feels:

EDITORIAL
+
ENGINEERING
+
DARK CINEMATIC
+
RESTRAINED MOTION
+
PREMIUM TYPOGRAPHY

31. COPILOT BUILD ORDER — VISUAL FIRST

Do not build every section first and style later.

Design tokens — colors, fonts, spacing, grid, easing, durations.

Global composition — page container, 12-column grid, section spacing, rules.

Navigation — finish the final visual nav first.

Hero — spend significant effort on typography, wordmark scale, metadata, availability, CTA, and reveal.

About — editorial two-column composition.

Projects — rows first; use cards only when genuinely useful.

Experience — editorial grid rows.

Contact — large closing typography and simple CTA.

Motion pass — loader, hero reveal, scroll reveal, hover, nav transition, orbit only if useful.

Visual QA — test all required breakpoints and refine typography, spacing, alignment, and animation timing.

The browser rendering is the primary acceptance criterion. A project is not complete merely because all components render.

32. REFERENCE SITE USAGE RULE

The reference site demonstrates a strong engineering-portfolio approach with prominent personal branding, restrained navigation, editorial About content, technology presentation, meaningful experience, availability/contact information, concise technical metadata, and a polished dark presentation. Use these qualities as design references only.

Never copy the reference site's name, biography, employers, metrics, technologies, contact information, personal interests, exact text, or branding.

33. FINAL COPILOT INSTRUCTION

If there is a conflict between a generic Tailwind implementation and this visual specification, choose this visual specification.

Do not optimize for:

easy-to-code generic components

lots of cards

default Tailwind spacing

generic dashboard layouts

Optimize for:

TYPOGRAPHY
→ COMPOSITION
→ GRID
→ SPACING
→ RESPONSIVE ART DIRECTION
→ MICRO-INTERACTIONS
→ PERFORMANCE

The final result should look intentionally designed by a product designer and implemented by a senior frontend engineer.

It must not look like a generated portfolio template.