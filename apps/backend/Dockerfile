# Build stage
FROM oven/bun:alpine AS builder

WORKDIR /app

# Build-time arguments
ARG BETTER_AUTH_SECRET
ARG BETTER_AUTH_URL
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG TURSO_DB_URL
ARG TURSO_AUTH_TOKEN
ARG NEXT_PUBLIC_BACKEND_URL
ARG NEXT_PUBLIC_FRONTEND_URL

# Copy the entire repository (for turborepo)
COPY . .

# Install dependencies
RUN bun install

# Build the backend if needed
RUN cd apps/backend && bun install

# Production stage
FROM oven/bun:alpine

WORKDIR /app

# Runtime environment variables (converted from ARGs)
ENV BETTER_AUTH_SECRET=${BETTER_AUTH_SECRET}
ENV BETTER_AUTH_URL=${BETTER_AUTH_URL}
ENV GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}
ENV GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET}
ENV TURSO_DB_URL=${TURSO_DB_URL}
ENV TURSO_AUTH_TOKEN=${TURSO_AUTH_TOKEN}
ENV NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL}
ENV NEXT_PUBLIC_FRONTEND_URL=${NEXT_PUBLIC_FRONTEND_URL}

# Copy needed files for runtime
COPY --from=builder /app/apps/backend ./apps/backend
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Set working directory
WORKDIR /app/apps/backend

EXPOSE 3080

CMD ["bun", "run", "start"]