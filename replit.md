# Digireg Kenya Ltd Website

## Overview

This is a production-ready React-based marketing website for Digireg Kenya Ltd, a geo-information and data-engineering consultancy specializing in e-governance, spatial planning, and high-resolution data solutions. The application is built with modern web technologies focusing on performance, accessibility, and mobile-first design optimized for low-bandwidth contexts in Kenya and East Africa.

The website serves as a digital presence for showcasing the company's services, use cases, and expertise in GIS-based spatial planning, Land Information Management Systems (LIMS), AI-GIS data engineering, and training solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Single Page Application (SPA) architecture with client-side routing via Wouter (lightweight alternative to React Router)

**UI Component System**
- Shadcn UI component library built on Radix UI primitives for accessible, headless components
- Tailwind CSS for utility-first styling with custom design tokens matching brand guidelines
- Framer Motion for declarative animations and smooth transitions
- Custom design system with defined color palette (Primary: Geo-Blue #0891b2, Secondary: Charcoal #1E293B, Accent: Bright Green #10B981)

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and API interaction
- React Hook Form with Zod resolver for form state and validation
- Local component state via React hooks

**Styling Strategy**
- Mobile-first responsive design using Tailwind breakpoints
- CSS custom properties for theming (light mode focused)
- Typography: Inter for body text, Montserrat for headings
- Consistent spacing system using Tailwind units (4, 6, 8, 12, 16, 20, 24)

**Page Structure**
- Home: Hero, About, Services, Use Cases, Testimonials sections
- About: Company history, mission, values
- Services: Detailed service offerings (E-Governance, Spatial Planning, Data Engineering, Training)
- Projects/Use Cases: Portfolio showcase with modal details
- Contact: Contact form with office information

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API endpoints
- Development mode: Vite middleware integration for HMR
- Production mode: Static file serving from dist/public

**API Design**
- RESTful API endpoint pattern (`/api/*`)
- Single implemented endpoint: POST `/api/contact` for contact form submissions
- Request validation using Zod schemas shared between client and server
- JSON-based request/response format

**Request Handling**
- Body parsing with express.json middleware
- Raw body capture for potential webhook verification
- Structured error responses with validation details
- Logging middleware for API request tracking

**Build Process**
- Client: Vite builds to `dist/public`
- Server: esbuild bundles `server/index-prod.ts` to `dist/index.js` as ESM
- Separate dev (`server/index-dev.ts`) and production (`server/index-prod.ts`) entry points

### Data Storage Solutions

**Current Implementation**
- No persistent database for the marketing website
- Contact form submissions are validated and logged (mock implementation)
- Storage interface (`server/storage.ts`) defined but not actively used

**Database Configuration Present**
- Drizzle ORM configured with PostgreSQL dialect
- Neon Database serverless driver included in dependencies
- Schema definitions in `shared/schema.ts` (currently only contact form validation schema)
- Migration configuration in `drizzle.config.ts` pointing to PostgreSQL via DATABASE_URL environment variable

**Design Decision**
The application is architected as a static marketing site that doesn't require persistent storage. The database infrastructure is configured but not actively used, allowing future extension for features like contact form storage, newsletter subscriptions, or content management without architectural changes.

### Authentication & Authorization

Not implemented. This is a public-facing marketing website with no user authentication requirements. All content is publicly accessible.

## External Dependencies

### Third-Party Services

**Asset Hosting**
- Unsplash API for placeholder geospatial/satellite imagery
- Configuration centralized in `client/src/config/assets.ts` for easy replacement with local assets

**Fonts**
- Google Fonts CDN: Inter (body text), Montserrat (headings)
- Loaded via `<link>` tags in `client/index.html`

### Database Service

**Neon Database (Configured but Unused)**
- PostgreSQL-compatible serverless database
- Connection via `@neondatabase/serverless` driver
- Environment variable: `DATABASE_URL`
- Purpose: Reserved for future feature expansion (contact form persistence, analytics, CMS)

### UI Component Libraries

**Radix UI Primitives**
- Comprehensive set of accessible, unstyled component primitives
- Includes: Dialog, Dropdown Menu, Select, Checkbox, Radio Group, Accordion, Toast, Tooltip, Navigation Menu, and more
- Provides keyboard navigation, ARIA attributes, and focus management

**Shadcn UI**
- Pre-built component implementations using Radix UI and Tailwind CSS
- Components located in `client/src/components/ui/`
- Customizable via `components.json` configuration

### Development Tools

**Replit Integration**
- `@replit/vite-plugin-cartographer`: Source mapping for better debugging
- `@replit/vite-plugin-dev-banner`: Development environment indicator
- `@replit/vite-plugin-runtime-error-modal`: Enhanced error reporting
- Only loaded in development mode on Replit environment

### Form & Validation Libraries

- React Hook Form: Form state management with performance optimization
- Zod: Schema validation for type-safe form data and API contracts
- `@hookform/resolvers`: Integration between React Hook Form and Zod

### Animation & Icons

- Framer Motion: Animation library for page transitions and component animations
- Lucide React: Icon library with consistent design and tree-shakeable imports

### Build & Development Tools

- TypeScript: Static type checking across client, server, and shared code
- Vite: Development server and build tool with fast HMR
- esbuild: Server-side bundling for production
- PostCSS with Tailwind CSS and Autoprefixer
- Drizzle Kit: Database schema management and migrations (configured for future use)