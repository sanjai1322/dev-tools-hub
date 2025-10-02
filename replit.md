# DevTools Hub - Replit Setup

## Project Overview
This is a developer tools hub built with:
- **Frontend**: React 19 + Vite + TypeScript + Tailwind v4
- **UI Library**: Shadcn UI components
- **Backend**: Convex (serverless backend & database)
- **Authentication**: Convex Auth (Email OTP + Anonymous)
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Package Manager**: pnpm

## Project Structure
- `src/pages/` - Page components and routes
- `src/components/` - Reusable components
- `src/components/ui/` - Shadcn UI primitives
- `src/convex/` - Convex backend functions
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions

## Current State
**Status**: Fresh GitHub import, requires Convex setup

### What's Working
- ✅ Dependencies installed (pnpm)
- ✅ Vite configured for Replit proxy (port 5000, host 0.0.0.0)
- ✅ Frontend build system ready

### What Needs Setup
- ⚠️ **Convex Backend**: Requires deployment URL and authentication
  - Need to run: `npx convex dev` to create/link deployment
  - Set environment variables: `VITE_CONVEX_URL`, `CONVEX_DEPLOYMENT`
  - Configure JWT keys using `./set-convex-jwt-env.sh`

## Setup Instructions

### 1. Convex Setup (Required)
The app uses Convex for backend and database. To set it up:

```bash
# Login to Convex (creates account if needed)
npx convex login

# Initialize Convex dev deployment
npx convex dev

# This will:
# - Create a new Convex deployment
# - Generate VITE_CONVEX_URL
# - Update .env.local automatically
# - Watch for backend changes
```

### 2. Set JWT Environment Variables
After Convex is initialized, run:
```bash
bash set-convex-jwt-env.sh
```

This sets up authentication keys for Convex Auth.

### 3. Run the Development Server
The workflow is configured to run on port 5000:
```bash
pnpm dev
```

## Development Notes

### Frontend Configuration
- Vite dev server binds to `0.0.0.0:5000`
- Configured for Replit proxy with WSS HMR on port 443
- All hosts allowed for iframe preview compatibility

### Authentication
- Uses Convex Auth with Email OTP
- Auth page at `/auth`
- Use `useAuth()` hook from `@/hooks/use-auth` for auth state
- Protected routes redirect to `/auth`

### Styling Conventions
- Tailwind v4 with custom color scheme in `src/index.css`
- Mobile-first responsive design
- Dark/light mode support via `next-themes`
- No nested cards or shadows (per design guidelines)
- Use Framer Motion for animations

### Backend Conventions
- Schema in `src/convex/schema.ts`
- Use internal CRUD helpers for database operations
- Actions with external APIs use `"use node"` directive
- Email OTP via `email.vly.ai` service

## Recent Changes (October 02, 2025)
- Initial Replit environment setup
- Configured Vite for Replit proxy
- Installed all dependencies via pnpm
- Created workflow for development server
- Documented Convex setup requirements
