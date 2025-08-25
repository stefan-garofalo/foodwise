/** biome-ignore-all lint/performance/useTopLevelRegex: <explanation> */
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from '@rspack/cli'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  entry: './src/index.ts',
  target: 'node',
  mode: 'production',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.cjs',
    library: {
      type: 'commonjs2',
    },
  },
  // No ESM output for backend runtime; emit CommonJS to allow require() paths
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
              },
              target: 'es2022',
            },
          },
        },
      },
      {
        test: /\.node$/,
        type: 'asset/resource',
      },
      {
        test: /node_modules\/@libsql\/.*\.(node|md)$/,
        type: 'asset/resource',
      },
    ],
  },
  externals: [
    ({ request }, callback) => {
      if (/^@libsql\//.test(request)) {
        return callback(null, `commonjs ${request}`)
      }
      if (['libsql', '@neon-rs/load'].includes(request)) {
        return callback(null, `commonjs ${request}`)
      }
      callback()
    },
  ],
  ignoreWarnings: [
    {
      module: /node_modules\/@libsql\//,
    },
  ],
  optimization: {
    minimize: false,
    concatenateModules: true,
    avoidEntryIife: true,
  },
})
