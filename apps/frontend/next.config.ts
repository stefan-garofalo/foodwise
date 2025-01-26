import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		ppr: 'incremental',
		reactCompiler: true,
		typedRoutes: true
	}
}

export default nextConfig
