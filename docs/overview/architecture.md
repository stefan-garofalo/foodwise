# Project Architecture

## Repository Structure

- **Monorepo using Turborepo**
  ```
  food-management/
  ├── apps/
  │   ├── backend/    # Hono.js backend
  │   └── frontend/   # Next.js frontend
  └── packages/
      └── api/        # Shared tRPC definitions
  ```

## Backend Architecture

- **Runtime**: Bun
- **Framework**: Hono.js
- **API Layer**: tRPC for type-safe API communication
- **Database**: Turso (libSQL)
- **Push Notifications**: OneSignal integration

## Frontend Architecture

- **Framework**: Next.js
- **API Integration**: tRPC client
- **State Management**: React Query (via tRPC)
- **Hosting**: Vercel

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