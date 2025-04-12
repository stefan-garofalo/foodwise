// Helper function to check if a path is a static file
export function isStaticFile(pathname: string) {
	return Boolean(pathname.match(/\.[^/]+$/))
}
