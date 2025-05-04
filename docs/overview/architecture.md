# Project Architecture

## Repository Structure

- **Monorepo using Turborepo**
  ```
  food-management/
  ├── apps/
  │   ├── backend/    # Hono.js backend
  │   └── frontend/   # Next.js frontend
  └── packages/
      ├── api/        # Shared tRPC routers and procedures
      ├── auth/       # Better Auth configuration
      └── db/         # Shared database client
  ```

## Backend Architecture

- **Runtime**: Bun
- **Framework**: Hono.js
- **API Layer**: tRPC for type-safe API communication with neverthrow error handling
- **Database**: Turso (libSQL)
- **Push Notifications**: OneSignal integration

## Frontend Architecture

- **Framework**: Next.js
- **API Integration**: tRPC client
- **State Management**: React Query (via tRPC)
- **Hosting**: Vercel

## API Architecture

### Core Components

- **Context Model**

  ```typescript
  type Context = {
  	db: Database // Turso database instance
  	headers?: Headers // Request headers for RSC support
  }
  ```

- **Router Structure**
  ```typescript
  appRouter = router({
  	categories: categoriesRouter
  	// Additional feature routers
  })
  ```

### Integration Layers

- **Server Components (RSC)**

  - Hydration helpers for RSC support
  - Server-side tRPC caller
  - Hydration state management

- **Client Components**
  - Client-side query management
  - React Query state management
  - Real-time updates via React Query cache

### Organization

- **Backend Layer**

  ```
  packages/api/
  ├── index.ts         # Router exports and context
  ├── trpc.ts          # Base tRPC configuration
  └── {feature}/       # Feature routers
  ```

- **Frontend Layer**
  ```
  apps/frontend/lib/trpc/
  ├── query-client.ts  # Query configuration
  ├── react.tsx       # Client provider
  └── server.ts       # Server utilities
  ```

### Technical Specifications

- **Query Configuration**

  - 30 second default stale time
  - Pending query dehydration support
  - Browser environment singleton pattern

- **Environment Setup**

  - Development: Local port with detailed logging
  - Production: Optimized backend URL configuration

- **Type Safety**

  - Zod runtime validation
  - tRPC compile-time checking
  - Shared frontend/backend types

- **Error Handling**
  - neverthrow implementation
  - Development logging
  - Type-safe error responses

## Type Safety and Code Sharing

- Shared types between frontend and backend via `packages/api`
- tRPC routers defined in shared package
- Zod schemas for runtime type validation

## Development Workflow

- Unified development commands via Turborepo
- Hot reloading for both frontend and backend
- Shared ESLint and TypeScript configurations
- Type checking across workspace boundaries

## Deployment Strategy

- Frontend: Deployed to Vercel
- Backend: Self-hosted Docker container
- Database: Hosted on Turso cloud
