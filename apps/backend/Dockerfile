FROM oven/bun:alpine as builder
WORKDIR /app

# Copy essential root configuration files
COPY package.json ./
COPY bun.lockb ./
COPY turbo.json ./
# COPY tsconfig.json ./ # Uncomment if you have a root tsconfig.json relevant to the build

# Copy all applications and packages
COPY apps/ ./apps/
COPY packages/ ./packages/

# Install all monorepo dependencies
# Using --frozen-lockfile is good practice for CI/CD
RUN bun install --frozen-lockfile

# Build only the backend application using Turborepo
# This relies on apps/backend/package.json having a "build" script
# that outputs to apps/backend/dist/
RUN bunx turbo build --filter=@apps/backend

# Production Stage: Prepares a lean image with only the built backend and its runtime needs
FROM oven/bun:alpine
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy the compiled backend output from the builder stage
COPY --from=builder /app/apps/backend/dist ./dist

# Copy the backend's package.json to run its 'start' script and install its specific prod dependencies
COPY --from=builder /app/apps/backend/package.json ./package.json

# Copy the root lockfile to ensure consistent prod dependency installation for the backend
COPY --from=builder /app/bun.lockb ./bun.lockb

# Install only production dependencies defined in the backend's package.json
# This uses the backend's package.json (now in /app/package.json) and the root bun.lockb
RUN bun install --production --frozen-lockfile

# Expose the port the backend will run on
EXPOSE 3080

# Copy .env file or manage environment variables through Coolify's service configuration
# For Coolify, it's generally better to set environment variables in the Coolify UI
# ARG BETTER_AUTH_SECRET
# ARG BETTER_AUTH_URL
# ARG GOOGLE_CLIENT_ID
# ARG GOOGLE_CLIENT_SECRET
# ARG TURSO_DB_URL
# ARG TURSO_AUTH_TOKEN
# ARG NEXT_PUBLIC_BACKEND_URL
# ARG NEXT_PUBLIC_FRONTEND_URL

# Command to run the backend application
# This should use the "start" script from apps/backend/package.json,
# which should point to the compiled output, e.g., "bun ./dist/index.js"
CMD ["bun", "run", "start"]