# Changelog

## [2026-03-09] - Vite to Next.js Migration

### Changes
- **Migration**: Migrated project from Vite + React to Next.js 15 with App Router
- **Structure**: Moved `src/` to `app/` directory structure
- **Configuration**: Updated configuration files
  - Added `next.config.mjs` (Next.js configuration)
  - Updated `tsconfig.json` for Next.js
  - Updated `tailwind.config.ts` for Next.js
  - Added `eslint.config.mjs`
  - Removed `vite.config.ts`, `tsconfig.app.json`, `tsconfig.node.json`

### New Files
- **App Router**:
  - `app/layout.tsx` - Root layout with metadata and fonts
  - `app/page.tsx` - Main home page
  - `app/robots.ts` - SEO robots configuration
  - `app/sitemap.ts` - SEO sitemap
  - `app/globals.css` - Global styles (renamed from src/index.css)

- **Services**:
  - `services/contact.service.ts` - Contact form submission service
  - `services/newsletter.service.ts` - Newsletter subscription service

- **Constants**:
  - `constants/index.ts` - Main constants exports
  - `constants/data/features.ts` - Features section data
  - `constants/data/education.ts` - Education section data
  - `constants/data/career.ts` - Career section data
  - `constants/data/life.ts` - Life section data
  - `constants/data/footer.ts` - Footer section data

- **Lib**:
  - `lib/animation.ts` - Shared Framer Motion animation variants
  - `lib/supabase.ts` - Supabase client re-exports
  - `lib/supabase/client.ts` - Client-side Supabase
  - `lib/supabase/server.ts` - Server-side Supabase with cookies

- **Hooks**:
  - `hooks/use-scroll.ts` - Scroll position hook (NEW)
  - `hooks/use-mobile.ts` - Mobile detection hook (moved from src)

- **Components**:
  - `components/layout/SectionHeader.tsx` - Reusable section header (NEW)
  - `components/sections/` - All section components moved from src/sections/

- **Types**:
  - `types/supabase.ts` - Database types (moved from src/lib)
  - `types/index.ts` - Type exports

- **Documentation**:
  - `CLAUDE.md` - Project documentation for Claude Code
  - `REFACTORING_SUMMARY.md` - Detailed refactoring summary
  - `CHANGELOG.md` - This file

### Component Changes
- **Navigation**: Moved to `components/sections/Navigation.tsx`, using NAVIGATION_ITEMS constant
- **Hero**: Created new Hero component with Brandenburg Gate animation
- **Features**: Refactored to use constants/data/features.ts
- **Education**: Refactored to use constants/data/education.ts
- **Career**: Refactored to use constants/data/career.ts
- **Life**: Refactored to use constants/data/life.ts
- **Contact**: Updated to use services/contact.service.ts
- **Newsletter**: Removed service dependency, now simulates submission
- **Footer**: Refactored to use constants/data/footer.ts

### Dependencies
- **Added**: `next` (^15.3.1), `next-themes` (^0.4.6)
- **Updated**: `@supabase/ssr` (^0.6.1) for server-side rendering support
- **Removed**: Vite dependencies (no longer needed)

### Build Files
- **Added**: `.next/` - Next.js build output directory (should be in .gitignore in future)

### Known Issues
- Build may fail due to missing 'use client' directives in some components using Framer Motion
- Newsletter subscription is simulated (no backend service)
- Contact form submission uses mock service (needs actual Supabase integration)

### Next Steps
1. Add `'use client'` directive to components using Framer Motion (Features, Education, Career, Life, Footer)
2. Configure Supabase database tables
3. Implement actual newsletter subscription logic
4. Implement actual contact form submission
5. Remove `.next/` from git tracking (add to .gitignore)
