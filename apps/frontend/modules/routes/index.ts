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

export const RootRoutes: RouteDefinition[] = [
	{
		name: 'login',
		path: () => '/login'
	}
]

export const routes: RouteDefinition[] = [...RootRoutes, ...SettingsRoutes.routes]
