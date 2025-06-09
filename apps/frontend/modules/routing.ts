import { Settings2, Tag } from 'lucide-react'

export type Route = {
	name: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	children?: Route[]
	path: (...args: string[]) => string
}
export type RouteGroup = {
	label: string
	routes: Route[]
}

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
