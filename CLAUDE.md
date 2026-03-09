# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

almanya101 is a GenZ-focused Germany guide website built with React 19, TypeScript, and Vite. It provides information about education, career, and life in Germany with a distinctive visual design featuring nighttime Germany landscapes.

## Development Commands

- `npm run dev` - Start Vite development server with hot module replacement (runs on http://localhost:5173)
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally

## Architecture

### Section-Based Layout
The application is organized into distinct page sections composed in `App.tsx`:
- `Navigation` - Fixed navbar with scroll-aware styling
- `Hero` - Landing with animated "ALMANYA101" title, nighttime Germany landscape background
- `Features`, `Education`, `Career`, `Life`, `Contact`, `Newsletter` - Content sections
- `Footer` - Site footer with links and social icons

All sections are in `src/sections/` directory.

### Component System
- `src/components/ui/` - shadcn/ui components (50+ reusable components)
- `src/lib/utils.ts` - Utility: `cn()` function for merging Tailwind classes (clsx + tailwind-merge)
- Import UI components from `@/components/ui/[component-name]`

### Styling
- Tailwind CSS with custom theme in `tailwind.config.js`
- Path alias `@/*` resolves to `src/*` (configured in tsconfig.app.json)
- Custom colors available: `google-blue`, `google-red`, `google-yellow`, `google-green`

### Animation
- Framer Motion for all animations
- Use `motion.div`, `motion.h1`, etc. for animated elements
- Common patterns: stagger children, whileHover, whileTap, variants

### Font
- ZuMe Rough font (weight 900/Bold) is the primary display font
- Loaded from Google Fonts in `index.html`
- Use `fontFamily: '"ZuMe Rough", sans-serif', fontWeight: 900` for brand text

### Brand Guidelines
- "ALMANYA" text: white (#ffffff)
- "101" text: golden yellow (#ffbb00)
- Use these exact colors for brand consistency across Hero and Navigation

### Backend/Data
- Supabase integration configured in `src/lib/supabase.ts`
- Use for any database/storage needs

## TypeScript Configuration

- Strict mode enabled
- Module resolution: "bundler"
- JSX: "react-jsx"
- Path alias: `@/*` → `src/*`
