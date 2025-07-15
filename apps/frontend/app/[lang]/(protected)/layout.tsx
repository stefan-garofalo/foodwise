import type { PropsWithChildren } from 'react'
import { Header } from '@/features/layout/header'
import LayoutSidebar from '@/features/layout/sidebar'
import { SidebarInset, SidebarProvider } from '@/modules/ui/primitives/sidebar'

export default function ProtectedLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <LayoutSidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
