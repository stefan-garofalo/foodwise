export function calculatePath(path: string) {
	const segments = path.split('/')
	const appDirIndex = segments.findIndex((segment) => segment === 'app')
	return `/${segments
		.splice(appDirIndex + 2)
		.filter((segment) => !segment.match(/^\(.*\)$/))
		.filter((segment) => !segment.match(/^\(.*\)$/))
		.slice(0, -1)
		.join('/')}`
}
