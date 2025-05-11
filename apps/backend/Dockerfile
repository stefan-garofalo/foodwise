FROM oven/bun:alpine

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .

EXPOSE 3080

CMD ["bun", "run", "start"]
