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
  external: ['@foodwise/auth', '@foodwise/api', '@foodwise/db'],
  outExtension: () => ({ js: '.js' }),
  esbuildOptions(options) {
    options.conditions = ['module']
  },
})
