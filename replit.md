# Lavoro Europa – Canarie

## Overview

A multilingual job search platform designed to help candidates from the Canary Islands find work opportunities across Europe. The application allows users to register, search for jobs by country, sector, and zone, view curated job listings, and submit simplified CVs. It features a collaborator login system and integrates with external European job portals.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The project contains two parallel frontend implementations:

1. **Static HTML Pages** (root and `client/public/`): Vanilla HTML/CSS/JavaScript pages for the job search flow including:
   - Landing page (`index.html`)
   - Candidate registration (`register.html`)
   - Job search with filters (`search.html`)
   - Search results with external portal links (`results.html`)
   - Collaborator login (`login.html`)
   - CV submission (`upload_reduced.html`)

2. **React SPA** (`client/src/`): A modern React application using:
   - Vite as the build tool and dev server
   - TypeScript for type safety
   - React Router (wouter) for client-side routing
   - TanStack Query for server state management
   - Tailwind CSS with shadcn/ui component library
   - Radix UI primitives for accessible components

### Backend Architecture

- **Express.js Server** (`server/`): Node.js backend with TypeScript
- **Storage Layer**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`)
- **Database Schema**: Drizzle ORM with PostgreSQL dialect configured
- **API Pattern**: RESTful routes registered through `registerRoutes` function

### Data Management

- **Job Data**: Static JavaScript files (`js/data.js`) containing job listings
- **Job Portals**: Curated external job portal links by country/sector/zone (`js/portals.js`)
- **Internationalization**: Client-side i18n with translations for Italian, English, and Spanish (`js/lang.js`)
- **Local Storage**: Used for language preferences and collaborator session state

### Authentication

- **Collaborator Access**: Simple password-based authentication stored in localStorage
- **User Schema**: Database-ready user table with username/password fields using Drizzle ORM
- **Session Ready**: Schema supports full authentication implementation with bcrypt-compatible password storage

### Build System

- **Development**: Vite dev server with HMR and Replit-specific plugins
- **Production**: Custom build script using esbuild for server bundling, Vite for client
- **Path Aliases**: Configured for `@/`, `@shared/`, and `@assets/` imports

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Schema definition and database operations
- **Drizzle Kit**: Database migration tooling

### UI Framework
- **shadcn/ui**: Pre-built React components with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Full suite of accessible component primitives

### External Job Portals
The application aggregates and links to external European job portals including:
- Indeed (country-specific domains)
- StepStone
- LinkedIn Jobs
- Country-specific job boards (Arbeitsagentur, Net-Empregos, etc.)

### Development Tools
- **Replit Plugins**: Dev banner, cartographer, and runtime error overlay
- **TypeScript**: Strict mode enabled with path mapping