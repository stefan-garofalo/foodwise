# Stage 1: Builder – Prune monorepo for backend
FROM oven/bun:alpine AS builder
WORKDIR /app
USER root
RUN apk add --no-cache git
COPY package.json bun.lock turbo.json ./
COPY . .
RUN bunx turbo prune --scope=@apps/backend --docker

# Stage 2: Installer – install dependencies and build
FROM oven/bun:alpine AS installer
WORKDIR /app

COPY --from=builder /app/out/json ./
RUN bun install

COPY --from=builder /app/out/full ./
RUN bunx turbo build --filter=@apps/backend

# Stage 3: Runner – lean image
FROM oven/bun:alpine AS runner
WORKDIR /app

COPY --from=installer /app ./

WORKDIR /app/apps/backend
EXPOSE 3080
CMD ["bun","run","dist/index.js"]