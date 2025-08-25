# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Common Operations
- `pnpm dev` - Start development server at localhost:3000
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking without emitting files

### Sanity CMS Management
- `pnpm typegen` - Extract Sanity schema and generate TypeScript types (run this after schema changes)
- Access Sanity Studio at `/studio` when dev server is running

### Email Development
- `pnpm email` - Start React Email development server at port 4001 for email template previews

### Package Manager
This project uses **pnpm** as the package manager. Always use `pnpm` instead of `npm` or `yarn`.

## Architecture Overview

### Core Technology Stack
- **Next.js 15** with App Router and React 19
- **Sanity CMS** as headless content management system
- **NextAuth.js** for authentication (Google OAuth + credentials)
- **Tailwind CSS** + **Radix UI** for styling and components
- **Three.js** / **React Three Fiber** for 3D product visualization
- **Redsys** payment gateway integration for Spanish market
- **SWR** for data fetching and global state management
- **TypeScript** with strict configuration

### Project Structure
```
src/
├── actions/          # Server actions for auth, orders, customers
├── app/              # Next.js App Router pages and layouts
├── auth.ts           # NextAuth configuration
├── components/       # React components organized by feature
├── emails/           # React Email templates
├── lib/              # Utility functions, validation schemas, clients
├── middleware.ts     # Next.js middleware
├── sanity/           # Sanity CMS configuration, schemas, queries
├── stores/           # SWR-based global state stores
└── types/            # TypeScript type definitions
```

### Key Architectural Patterns

#### State Management
- **Local Storage Persistence**: Shopping cart and wishlist use `swr-global-state` with localStorage persistor
- **Server State**: SWR handles API data caching and synchronization
- **Client State**: React state for UI interactions

#### Data Layer
- **Sanity CMS**: Single source of truth for products, orders, customers, and content
- **Type-Safe Queries**: All Sanity queries are typed using generated TypeScript types
- **Real-time Updates**: SWR provides optimistic updates and background revalidation

#### Authentication Flow
- **Dual Provider Setup**: Supports both Google OAuth and email/password authentication
- **Automatic User Creation**: Google users are automatically created in Sanity on first login
- **Session Management**: NextAuth handles JWT tokens with custom callbacks

#### Payment Processing
- **Redsys Integration**: Primary payment gateway for Spanish credit card processing
- **Bank Transfer**: Alternative payment method with manual verification
- **Order States**: `procesando` → `completado`/`cancelado` with email notifications

#### E-commerce Features
- **3D Product Visualization**: Interactive shirt customizer using Three.js
- **Multi-variant Products**: Products have designs (colors/patterns) with individual pricing
- **Dynamic Pricing**: Supports sale prices and discount coupons
- **Inventory Management**: Size-based stock tracking
- **Social Urgency**: Low stock indicators and recent purchase notifications

#### Component Architecture
- **Feature-Based Organization**: Components grouped by domain (checkout, products, profile, etc.)
- **Shared UI Components**: Reusable components in `/ui` folder using Radix primitives
- **Layout Components**: Header, footer, navigation with responsive design
- **Form Handling**: React Hook Form with Zod validation schemas

### Critical Configuration Files
- `sanity.config.ts` - Sanity studio configuration (accessible at `/studio`)
- `src/auth.ts` - Authentication providers and session callbacks
- `next.config.mjs` - Image domains for Sanity CDN and external sources
- `middleware.ts` - Route protection and authentication redirects

### Environment Variables Required
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project identifier
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name
- `AUTH_SECRET` - NextAuth secret key
- `REDSYS_MERCHANT_CODE`, `REDSYS_TERMINAL`, `REDSYS_SECRET_KEY` - Payment gateway credentials

### Development Workflow
1. **Schema Changes**: After modifying Sanity schemas, run `pnpm typegen` to update TypeScript types
2. **Component Development**: Use Storybook-like pattern with isolated component development
3. **Email Templates**: Develop templates using React Email at `localhost:4001`
4. **Git Hooks**: Husky runs type checking, linting, and formatting on pre-commit

### Testing Strategy
- **Type Safety**: TypeScript strict mode catches errors at compile time
- **Linting**: ESLint with Next.js and React Hooks rules
- **Pre-commit Hooks**: Automated quality checks prevent bad commits
- **Manual Testing**: No automated test framework currently implemented

### Performance Considerations
- **Image Optimization**: Next.js automatic optimization for Sanity CDN images
- **Bundle Splitting**: Automatic code splitting with Next.js App Router
- **SWR Caching**: Intelligent data caching reduces API calls
- **Static Generation**: Product pages and blog posts are statically generated where possible
