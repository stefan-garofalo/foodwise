import { routes } from '.'
import type { RouteDefinition } from './types'

export function getRoute(path: string) {
  return (
    routes.find((route) => route.path() === path) ??
    ({
      name: undefined,
      path: () => '',
      icon: undefined,
    } as unknown as RouteDefinition)
  )
}
