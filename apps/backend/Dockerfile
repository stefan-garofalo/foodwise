FROM oven/bun:alpine as builder

WORKDIR /app

# Copy the entire workspace first
COPY . .

# Install all workspace dependencies from root
RUN bun install

# Build if needed
RUN cd apps/backend && bun run build || true

# Production stage
FROM oven/bun:alpine

WORKDIR /app

# Copy the built app and workspace dependencies
COPY --from=builder /app/apps/backend ./apps/backend
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set working directory to backend
WORKDIR /app/apps/backend

EXPOSE 3080

# Pass environment variables as ENV instead of ARG
ENV BETTER_AUTH_SECRET=$BETTER_AUTH_SECRET
ENV BETTER_AUTH_URL=$BETTER_AUTH_URL
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET
ENV TURSO_DB_URL=$TURSO_DB_URL
ENV TURSO_AUTH_TOKEN=$TURSO_AUTH_TOKEN
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_FRONTEND_URL=$NEXT_PUBLIC_FRONTEND_URL

CMD ["bun", "run", "start"]