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
  serverExternalPackages: ['@libsql/client', '@libsql/kysely-libsql'],
}

export default nextConfig
