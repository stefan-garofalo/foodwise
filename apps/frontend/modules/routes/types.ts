export type RouteDefinition = {
	name: string
	icon?: React.FC<React.SVGProps<SVGSVGElement>>
	children?: RouteDefinition[]
	path: (...args: string[]) => string
}
export type RouteGroup = {
	label: string
	routes: RouteDefinition[]
}
