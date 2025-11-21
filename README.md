# Digireg Kenya Ltd — Website

A professional, production-ready React website for Digireg Kenya Ltd, a leading geo-information and data-engineering consultancy specializing in e-governance, spatial planning, and high-resolution data solutions.

## 🌍 About Digireg Kenya

Digireg Kenya Ltd helps governments and organizations become data-driven through expert geospatial consultancy. With international roots in the Netherlands and a Kenya office established in 2021, we deliver:

- **E-Governance**: Digital spatial planning, Land Information Management Systems (LIMS), asset management
- **Spatial Planning**: GIS-based spatial planning, zoning, change detection, planning frameworks
- **Data Engineering**: AI-GIS, data cleaning, 5-20cm resolution object registration mapping, Python/FME automation
- **Training & Automation**: Geo-ICT training, remote sensing, web mapping, automated workflows

**Mission**: *Turning Data into Decisions*

## 🚀 Tech Stack

### Frontend
- **React 18** with **Vite** for fast development and optimized builds
- **TypeScript** for type safety
- **Tailwind CSS** for responsive, utility-first styling
- **Framer Motion** for smooth, professional animations
- **Lucide React** for beautiful, consistent icons
- **Wouter** for lightweight client-side routing
- **React Hook Form** + **Zod** for form validation
- **Shadcn UI** components for accessible, beautiful UI primitives

### Backend
- **Express.js** for API server
- **Zod** for request validation
- Mock contact API endpoint at `/api/contact`

### Design System
- **Fonts**: Inter (body text), Montserrat (headings)
- **Colors**: 
  - Primary: Geo-Blue/Deep Teal (#0891b2)
  - Secondary: Charcoal (#1E293B)
  - Accent: Bright Green (#10B981)
- **Mobile-first responsive design** optimized for low-bandwidth contexts

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Environment Variables

No environment variables are required for the mock implementation. In production, you would set:

\`\`\`
# Optional: Replace with real contact API
CONTACT_API_URL=https://your-api.com/contact

# Optional: Email service credentials
EMAIL_SERVICE_API_KEY=your_key_here
\`\`\`

## 🏃 Running the Project

### Development Mode

\`\`\`bash
npm run dev
\`\`\`

The application will be available at:
- Frontend & Backend: `http://localhost:5000`

The Vite dev server and Express backend are configured to run on the same port.

### Production Build

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI primitives
│   │   ├── Navigation.tsx   # Header with mobile menu
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── About.tsx        # About section
│   │   ├── Services.tsx     # Services grid
│   │   ├── UseCases.tsx     # Projects with modals
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── ContactForm.tsx  # Contact form
│   │   └── Footer.tsx       # Site footer
│   ├── pages/
│   │   ├── Home.tsx         # Homepage
│   │   ├── AboutPage.tsx    # About page
│   │   ├── ServicesPage.tsx # Services page
│   │   ├── ProjectsPage.tsx # Use cases page
│   │   ├── ContactPage.tsx  # Contact page
│   │   └── not-found.tsx    # 404 page
│   ├── lib/
│   │   └── queryClient.ts   # React Query setup
│   ├── App.tsx              # Main app with routing
│   ├── index.css            # Tailwind + custom styles
│   └── main.tsx             # Entry point
├── public/
│   └── favicon.png
└── index.html

server/
├── routes.ts                # API routes (/api/contact)
├── storage.ts               # Storage interface (mock)
├── app.ts                   # Express app setup
└── index-dev.ts             # Dev server entry

shared/
└── schema.ts                # Shared types & validation schemas
\`\`\`

## 🎨 Design Guidelines

### Typography Hierarchy
- **H1**: Hero headlines (text-4xl to text-7xl)
- **H2**: Section titles (text-3xl to text-5xl)
- **H3**: Card titles (text-xl to text-2xl)
- **Body**: text-base to text-lg

### Spacing
- Section padding: py-16 to py-32
- Component gaps: gap-4 to gap-8
- Container: max-w-7xl

### Animations
- Hero: Fade-up entrance with staggered delays
- Cards: Hover lift effect (translateY: -4px)
- Modals: Scale + fade transitions
- Scroll animations: Fade-in as elements enter viewport
- **Reduced-motion support**: Respects `prefers-reduced-motion` media query

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ Descriptive alt text for all images
- ✅ Keyboard navigation (Tab order, focus indicators)
- ✅ ARIA attributes (`aria-label`, `aria-expanded`)
- ✅ Focus trap in mobile menu
- ✅ Form labels and error messages
- ✅ Reduced-motion support
- ✅ Color contrast meets WCAG AA standards

## 📱 Performance Optimizations

- ✅ Mobile-first CSS (minimal desktop overrides)
- ✅ Lazy-load images below the fold
- ✅ Vite's code splitting and tree shaking
- ✅ Optimized for low-bandwidth contexts (Kenya/Africa)
- ✅ Minimal animation overhead (60fps target)

## 🔌 API Endpoints

### POST /api/contact

Submit a contact form inquiry.

**Request Body:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "organization": "County Government",
  "serviceInterest": "spatial-planning",
  "message": "We need help with county spatial planning...",
  "consent": true
}
\`\`\`

**Success Response (200):**
\`\`\`json
{
  "success": true,
  "message": "Thank you for your message. We will be in touch shortly."
}
\`\`\`

**Error Response (400):**
\`\`\`json
{
  "success": false,
  "message": "Validation failed. Please check your input.",
  "errors": {
    "email": ["Please enter a valid email address"]
  }
}
\`\`\`

## 🚢 Deployment

### Netlify / Vercel (Recommended)

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment variables: (none required for mock)

### Manual Deployment

\`\`\`bash
npm run build
\`\`\`

Deploy the `dist` folder to your hosting service.

## 🖼️ Replacing Placeholder Images

The website uses Unsplash images for hero and use case sections. To replace with custom images:

1. Add your images to `client/public/images/`
2. Update image URLs in:
   - `client/src/components/Hero.tsx` (hero background)
   - `client/src/components/UseCases.tsx` (use case cards)

Recommended specifications:
- Hero: 2070x1380px (3:2 aspect ratio)
- Use Cases: 2074x1383px (3:2 aspect ratio)
- Format: WebP or optimized JPEG

## 🔐 Production Considerations

For a production deployment, replace the mock contact API with:

1. **Email Integration**: SendGrid, AWS SES, or Mailgun
2. **Database Storage**: Save contact submissions to PostgreSQL/MongoDB
3. **CRM Integration**: Pipe leads to HubSpot, Salesforce, etc.
4. **Spam Protection**: Add reCAPTCHA or hCaptcha
5. **Rate Limiting**: Implement to prevent abuse

## 🧪 Testing

The project includes:
- Form validation testing
- Accessibility testing
- Responsive design testing

Run tests:
\`\`\`bash
npm test
\`\`\`

## 📞 Contact

**Digireg Kenya Ltd**  
Northern Wing, Kenrail Towers, 5th Floor  
Nairobi, Kenya

Phone: +254 743 571597  
Email: info@digireg.co.ke  
Website: [Coming Soon]

## 📄 License

© 2025 Digireg Kenya Ltd. All rights reserved.

---

Built with ❤️ for better spatial planning and data-driven governance in Kenya.
