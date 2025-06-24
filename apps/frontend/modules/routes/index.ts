import { Tag } from 'lucide-react'
import { type RouteDefinition, type RouteGroup } from './types'

export const SettingsRoutes: RouteGroup = {
	label: 'settings',
	routes: [
		{
			name: 'categories',
			path: () => '/settings/categories',
			icon: Tag
		}
	]
}

const routes: RouteDefinition[] = [...SettingsRoutes.routes]

export function getRoute(path: string) {
	return (
		routes.find((route) => route.path() === path) ??
		({
			name: undefined,
			path: () => undefined,
			icon: undefined
		} as unknown as RouteDefinition)
	)
}
