import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    server: 'src/server.ts',
    client: 'src/client.ts',
  },
  format: ['esm'],
  target: 'node22',
  outDir: 'dist',
  clean: true,
  splitting: false,
  sourcemap: true,
  dts: false,
  minify: false,
  outExtension: () => ({
    js: '.js',
  }),
  external: ['better-auth', '@libsql/kysely-libsql'],
  noExternal: ['@foodwise/db'],
  esbuildOptions(options) {
    options.conditions = ['module']
  },
})
