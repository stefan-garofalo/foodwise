import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, '../../'),
  },
  experimental: {
    ppr: 'incremental',
    reactCompiler: true,
  },
  serverExternalPackages: ['@libsql/client', '@libsql/kysely-libsql'],
}

export default nextConfig
