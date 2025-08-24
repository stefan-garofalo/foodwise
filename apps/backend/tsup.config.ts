import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  target: 'node22',
  outDir: 'dist',
  clean: true,
  splitting: false,
  sourcemap: true,
  dts: true,
  minify: false,
  external: [
    'hono', 
    '@hono/trpc-server',
    '@libsql/client',
    'drizzle-orm',
    'better-auth',
    '@libsql/kysely-libsql',
    '@trpc/server',
    'arktype',
    'drizzle-arktype',
    'neverthrow',
    'uuid'
  ],
  noExternal: ['@foodwise/auth', '@foodwise/api', '@foodwise/db'],
  esbuildOptions(options) {
    options.conditions = ['module']
  },
})
