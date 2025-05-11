FROM oven/bun:alpine as builder

WORKDIR /app

# Accept build arguments
ARG BETTER_AUTH_SECRET
ARG BETTER_AUTH_URL
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG TURSO_DB_URL
ARG TURSO_AUTH_TOKEN
ARG NEXT_PUBLIC_BACKEND_URL
ARG NEXT_PUBLIC_FRONTEND_URL

# Copy workspace files first
COPY package.json ./
COPY bun.lock ./

# Copy workspace packages
COPY packages/ ./packages/

# Copy the backend app
COPY apps/backend/ ./apps/backend/

# Install all dependencies from root
RUN bun install

# Production stage
FROM oven/bun:alpine

WORKDIR /app

# Copy the necessary files from builder
COPY --from=builder /app/apps/backend ./apps/backend
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set working directory to backend
WORKDIR /app/apps/backend

EXPOSE 3080

# Set environment variables
ENV BETTER_AUTH_SECRET=$BETTER_AUTH_SECRET
ENV BETTER_AUTH_URL=$BETTER_AUTH_URL
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET
ENV TURSO_DB_URL=$TURSO_DB_URL
ENV TURSO_AUTH_TOKEN=$TURSO_AUTH_TOKEN
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_FRONTEND_URL=$NEXT_PUBLIC_FRONTEND_URL

CMD ["bun", "run", "start"]