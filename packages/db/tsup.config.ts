import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/client.ts',
    'src/schema/index.ts',
    'src/utils/index.ts'
  ],
  format: ['esm'],
  target: 'node22',
  outDir: 'dist',
  clean: true,
  splitting: false,
  sourcemap: true,
  dts: false,
  minify: false,
  external: ['@libsql/client', 'drizzle-orm', 'uuid'],
  esbuildOptions(options) {
    options.conditions = ['module']
  },
})
