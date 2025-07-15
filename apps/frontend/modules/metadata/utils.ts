const ROUTE_GROUP_REGEX = /^\(.*\)$/g

export function calculatePath(path: string) {
  const segments = path.split('/')
  const appDirIndex = segments.indexOf('app')
  return `/${segments
    .splice(appDirIndex + 2)
    .filter((segment) => !segment.match(ROUTE_GROUP_REGEX))
    .slice(0, -1)
    .join('/')}`
}
