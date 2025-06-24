import { PropsWithChildren } from 'react'
import { TRPCReactProvider } from '@/modules/trpc/client'

export default function Providers({ children }: PropsWithChildren) {
	return <TRPCReactProvider>{children}</TRPCReactProvider>
}
