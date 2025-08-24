import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
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
  external: [
    '@trpc/server',
    'arktype',
    'drizzle-arktype',
    'neverthrow',
    'uuid',
  ],
  noExternal: ['@foodwise/auth', '@foodwise/db'],
  esbuildOptions(options) {
    options.conditions = ['module']
  },
})
