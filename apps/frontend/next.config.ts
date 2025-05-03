import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		ppr: 'incremental',
		reactCompiler: true,
		typedRoutes: true
	},
	serverExternalPackages: ['@libsql/client', '@libsql/kysely-libsql']
}

export default nextConfig
