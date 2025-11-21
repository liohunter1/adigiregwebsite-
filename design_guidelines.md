# Design Guidelines for Digireg Kenya Ltd Website

## Design Approach
**Reference-Based + Established System**: This is a professional B2G (Business-to-Government) consultancy site requiring credibility and sophistication. Draw inspiration from enterprise tech consultancies (IBM, Esri, McKinsey) combined with modern geospatial platforms while maintaining unique Digireg identity.

## Brand Identity

**Typography:**
- Headings: Oswald or Montserrat (bold, authoritative)
- Body: Inter or Roboto (clean, readable)
- Establish clear hierarchy: H1 (hero headlines), H2 (section titles), H3 (card titles), body text

**Color Palette:**
- Primary: Geo-Blue / Deep Teal (#0E7490 or similar) - trust, technology
- Secondary: Charcoal / Dark Slate (#1E293B)
- Accent: Bright Green (#10B981) or Orange (#F59E0B) - innovation, data
- Neutrals: White (#FFFFFF), Light Grey (#F3F4F6)

**Logo:** Text "DIGIREG" in all caps with optional map-pin or abstract map icon

## Layout System

**Spacing:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 (mobile), py-20 to py-32 (desktop)
- Component spacing: gap-6 to gap-8 for grids
- Container: max-w-7xl for most sections, max-w-6xl for content-focused areas

**Responsive Grid:**
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Projects/Use Cases: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Mobile-first approach optimized for low-bandwidth

## Page Structure & Components

### Navigation
- Desktop: Logo left, horizontal menu (Home, About, Services, Use Cases, Contact), CTA button right
- Mobile: Hamburger menu with slide-in panel, focus trap, ESC to close
- Sticky header with subtle shadow on scroll

### Hero Section (Home)
**Layout:** Full-viewport height (min-h-screen) with geospatial/satellite imagery background
- Headline: Large, bold "Turning Data into Decisions"
- Subheadline: Supporting text about geo-information and e-governance
- Dual CTAs: Primary "Our Services" (scroll), Secondary "Get in Touch" (navigate)
- Trust strip below: "Spatial Planning • Data Engineering • E-Governance"
- Dark overlay (bg-black/50) for text readability

### About Section
**Two-column layout** (desktop): Left column - company story, Right column - key stats/values
- Highlight: Netherlands origin, Kenya expansion 2021, mission statement
- Stats cards: Number of projects, accuracy metrics (90-99%), countries served
- Team highlight: Emmanuel Marete and key leadership

### Services Section
**Four-card grid** with hover effects:
1. E-Governance - digital spatial plans, LIMS, asset management
2. Spatial Planning - GIS-based planning, zoning, change detection
3. Data Engineering - AI-GIS, scripting (FME/Python), high-res mapping
4. Training & Automation - geo-ICT training, remote sensing

Each card: Icon (Lucide), title, description, "Learn More" link

### Projects/Use Cases Section
**Interactive card grid** with expand-on-click modals:
- Card front: Project name, brief description, map-style imagery
- Modal: Detailed outcome, benefits, technical approach
- Examples: County spatial planning, LIMS implementation, Digital Twin mapping

### Trust & Testimonials
- Partner logos strip (government/county placeholders)
- Testimonial cards (2-3): Quote, attribution, role/organization

### Contact Page
**Split layout**: Left - contact details (address, phone, email), Right - form
- Form fields: Name, Email, Organization, Service dropdown, Message, Consent checkbox
- Validation indicators, loading state, success/error messages
- Kenrail Towers address prominently displayed

### Footer
- Three-column layout: Quick links, Services list, Contact info
- Social media icons (LinkedIn, Twitter placeholders)
- Copyright "© 2025 Digireg Kenya Ltd", Legal/Privacy links

## Animations (Framer Motion)

**Subtle, Professional:**
- Hero entrance: Fade-up for headline (delay stagger for multi-line)
- Card hover: Slight lift (translateY: -4px), shadow increase
- Scroll animations: Fade-in sections as they enter viewport
- Modal: Scale + fade entrance/exit
- Reduced-motion support via `prefers-reduced-motion`

## Images

**Hero Section:** Large, high-impact geospatial/satellite imagery (Unsplash: "satellite view", "GIS mapping", "aerial city planning")
- Buttons on hero: Use backdrop-blur-sm with semi-transparent backgrounds

**Service Cards:** Icon-based (no images) with Lucide icons
**Project Cards:** Map-style or data-visualization imagery per card
**About Section:** Optional team photo or office environment
**Trust Section:** Partner/government logos (placeholders)

## Accessibility Requirements

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- All images: Descriptive alt text
- Keyboard navigation: Tab order, focus indicators, modal focus trap
- ARIA: `aria-label` for icon buttons, `aria-expanded` for mobile menu
- Form labels: Explicit `<label>` elements, error messages announced

## Performance Optimizations

- Lazy-load images below fold
- Optimize images for web (WebP format recommended)
- Keep animations minimal (60fps target)
- Mobile-first CSS (reduce desktop overrides)
- Consider low-bandwidth context (Kenya/Africa)