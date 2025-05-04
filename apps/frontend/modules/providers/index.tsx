import { PropsWithChildren } from 'react'
import { TRPCReactProvider } from '@/modules/trpc/react'

export default function Providers({ children }: PropsWithChildren) {
	return <TRPCReactProvider>{children}</TRPCReactProvider>
}
