import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
	turbopack: {
		root: path.join(__dirname, '../../')
	},
	experimental: {
		ppr: 'incremental',
		reactCompiler: true
	},
	serverExternalPackages: ['@libsql/client', '@libsql/kysely-libsql']
}

export default nextConfig
