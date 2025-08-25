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
  external: ['@foodwise/auth', '@foodwise/db'],
  noExternal: [
    '@trpc/server',
    'arktype',
    'drizzle-arktype',
    'neverthrow',
    'uuid',
  ],
  esbuildOptions(options) {
    options.conditions = ['module']
  },
})
