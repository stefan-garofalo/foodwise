import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts', 'src/client.ts'],
  format: ['esm'],
  target: 'node22',
  outDir: 'dist',
  clean: true,
  splitting: false,
  sourcemap: true,
  dts: false,
  minify: false,
  external: ['better-auth', '@libsql/kysely-libsql'],
  noExternal: ['@foodwise/db'],
  esbuildOptions(options) {
    options.conditions = ['module']
  },
})
