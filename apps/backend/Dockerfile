FROM oven/bun:alpine as builder
WORKDIR /app

# Copy essential root configuration files
COPY package.json ./
COPY bun.lock ./
COPY turbo.json ./
# COPY tsconfig.json ./ # Uncomment if you have a root tsconfig.json relevant to the build

# Copy all applications and packages
COPY apps/ ./apps/
COPY packages/ ./packages/

# Install all monorepo dependencies
# Using --frozen-lockfile is good practice for CI/CD
RUN bun install --frozen-lockfile

# Build step for backend is removed, we will run from source
# RUN bunx turbo build --filter=@apps/backend

# Production Stage: Prepares a lean image with only the backend and its runtime needs
FROM oven/bun:alpine
# WORKDIR /app # Set WORKDIR after initial copies if needed, or structure for monorepo root

# Set NODE_ENV to production
ENV NODE_ENV=production

# Create the /app directory structure for the monorepo subset needed by the backend
WORKDIR /app

# Copy the backend's source code
COPY --from=builder /app/apps/backend/src ./apps/backend/src/

# Copy the backend's package.json and tsconfig.json (if it exists)
COPY --from=builder /app/apps/backend/package.json ./apps/backend/package.json
# Assuming apps/backend/tsconfig.json exists and is needed for 'bun run src/index.ts'
COPY --from=builder /app/apps/backend/tsconfig.json ./apps/backend/tsconfig.json

# Copy required workspace packages (source code and package.json)
COPY --from=builder /app/packages/auth ./packages/auth
COPY --from=builder /app/packages/api ./packages/api
COPY --from=builder /app/packages/tsconfig ./packages/tsconfig # For base tsconfig files

# Copy the root package.json and bun.lock to provide workspace context and ensure consistent installs
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lockb ./bun.lockb

# Change WORKDIR to the backend app's directory to install its specific dependencies
WORKDIR /app/apps/backend

# Install only production dependencies for the backend
# This uses apps/backend/package.json and the root bun.lock.
# Workspace dependencies (@foodwise/auth, @foodwise/api) will be linked from /app/packages/...
RUN bun install --production --frozen-lockfile

# Expose the port the backend will run on
EXPOSE 3080

# Environment variables will be managed by Coolify or other deployment mechanisms
# ARG BETTER_AUTH_SECRET
# ARG BETTER_AUTH_URL
# ARG GOOGLE_CLIENT_ID
# ARG GOOGLE_CLIENT_SECRET
# ARG TURSO_DB_URL
# ARG TURSO_AUTH_TOKEN
# ARG NEXT_PUBLIC_BACKEND_URL
# ARG NEXT_PUBLIC_FRONTEND_URL

# Command to run the backend application
# WORKDIR is /app/apps/backend, so 'start' script from ./package.json is used
# which should be "bun run src/index.ts"
CMD ["bun", "run", "start"]