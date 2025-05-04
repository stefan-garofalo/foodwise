import { Header } from '@/features/layout/header'
import { Sidebar } from '@/features/layout/sidebar'
import { SidebarInset, SidebarProvider } from '@/modules/ui/primitives/sidebar'
import { PropsWithChildren } from 'react'

export default function ProtectedLayout({ children }: PropsWithChildren) {
	return (
		<SidebarProvider>
			<Sidebar variant="inset" />
			<SidebarInset>
				<Header />
				{children}
			</SidebarInset>
		</SidebarProvider>
	)
}
