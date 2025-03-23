import { PropsWithChildren } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { TRPCReactProvider } from '@/modules/trpc/react'

export default function Providers({ children }: PropsWithChildren) {
	return (
		<ClerkProvider>
			<TRPCReactProvider>{children}</TRPCReactProvider>
		</ClerkProvider>
	)
}
