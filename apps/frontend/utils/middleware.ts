import { NextRequest } from 'next/server'

// Helper function to check if a path is a static file
export function isStaticFile(pathname: string) {
	return Boolean(pathname.match(/\.[^/]+$/))
}

export function buildAbsoluteUrl(path: string, request: NextRequest) {
	return new URL(path, request.url)
}
