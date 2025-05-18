import { NextRequest } from 'next/server'

// Helper function to check if a path is a static file
export function isStaticFile(pathname: string) {
	return Boolean(pathname.match(/\.[^/]+$/))
}

export function setAbsoluteUrl(request: NextRequest, path: string) {
	const url = request.nextUrl.clone()
	url.pathname = path
	return url
}
