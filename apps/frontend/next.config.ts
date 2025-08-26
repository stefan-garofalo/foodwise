import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, '../../'),
  },
  experimental: {
    cacheComponents: true,
    reactCompiler: true,
    clientSegmentCache: true,
    devtoolSegmentExplorer: true,
    turbopackPersistentCaching: true,
    browserDebugInfoInTerminal: true,
  },
  typedRoutes: true,
  serverExternalPackages: [
    '@libsql/client',
    '@libsql/kysely-libsql',
    '@libsql/darwin-arm64',
    '@libsql/linux-x64-gnu',
    '@libsql/win32-x64-msvc',
    'libsql',
    'drizzle-orm',
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ignore binary files and documentation from libsql packages
      config.externals.push({
        '@libsql/darwin-arm64': 'commonjs @libsql/darwin-arm64',
        '@libsql/linux-x64-gnu': 'commonjs @libsql/linux-x64-gnu',
        '@libsql/win32-x64-msvc': 'commonjs @libsql/win32-x64-msvc',
        libsql: 'commonjs libsql',
      })

      // Ignore specific file patterns that cause issues
      config.module.rules.push({
        test: /\.node$/,
        use: 'ignore-loader',
      })

      config.module.rules.push({
        test: /node_modules\/@libsql\/.*\/(README\.md|LICENSE)$/,
        use: 'ignore-loader',
      })
    }
    return config
  },
}

export default nextConfig
