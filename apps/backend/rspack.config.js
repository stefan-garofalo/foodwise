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
    filename: 'index.js',
    module: true,
    chunkFormat: 'module',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
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
    ],
  },
  // externals: {
  //   // Keep native binaries external
  //   '@libsql/linux-x64-gnu': 'commonjs @libsql/linux-x64-gnu',
  //   '@libsql/darwin-x64': 'commonjs @libsql/darwin-x64',
  //   '@libsql/darwin-arm64': 'commonjs @libsql/darwin-arm64',
  //   '@libsql/win32-x64-msvc': 'commonjs @libsql/win32-x64-msvc',
  //   'libsql': 'commonjs libsql',
  //   '@neon-rs/load': 'commonjs @neon-rs/load'
  // },
  optimization: {
    minimize: false,
  },
})
