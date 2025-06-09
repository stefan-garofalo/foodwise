'use client'

import { ChevronRight, type LucideIcon } from 'lucide-react'

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@/modules/ui/primitives/collapsible'
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem
} from '@/modules/ui/primitives/sidebar'
import { RouteGroup } from '@/modules/routing'
import { usePathname } from 'next/navigation'
import { useGlobalDictionary } from '@/modules/i18n/hooks/dictionaries'

export default function SidebarMainGroup({ group }: { group: RouteGroup }) {
	const pathname = usePathname()
	const labels = useGlobalDictionary().sidebar.groups[group.label as 'settings']

	return (
		<SidebarGroup>
			<SidebarGroupLabel>{labels.label}</SidebarGroupLabel>
			<SidebarMenu>
				{group.routes.map((item) => (
					<Collapsible
						key={item.name}
						asChild
						defaultOpen={pathname.startsWith(item.path())}
					>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a href={item.path()}>
									<item.icon />
									<span>
										{labels.routes[item.name as keyof typeof labels.routes]}
									</span>
								</a>
							</SidebarMenuButton>
							{item.children?.length ? (
								<>
									<CollapsibleTrigger asChild>
										<SidebarMenuAction className="data-[state=open]:rotate-90">
											<ChevronRight />
											<span className="sr-only">Toggle</span>
										</SidebarMenuAction>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{item.children?.map((subItem) => (
												<SidebarMenuSubItem key={subItem.name}>
													<SidebarMenuSubButton asChild>
														<a href={subItem.path()}>
															<subItem.icon />
															<span>
																{
																	labels.routes[
																		subItem.name as keyof typeof labels.routes
																	]
																}
															</span>
														</a>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								</>
							) : null}
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
