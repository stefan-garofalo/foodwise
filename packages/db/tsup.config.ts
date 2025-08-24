import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    client: 'src/client.ts',
    'schema/index': 'src/schema/index.ts',
    'utils/index': 'src/utils/index.ts',
  },
  format: ['esm'],
  target: 'node22',
  outDir: 'dist',
  clean: true,
  splitting: false,
  sourcemap: true,
  dts: true,
  minify: false,
  outExtension: () => ({
    js: '.js',
  }),
  external: ['@libsql/client', 'drizzle-orm', 'uuid'],
  esbuildOptions(options) {
    options.conditions = ['module']
  },
})
