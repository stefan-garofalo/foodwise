'use client'

import { QueryClientProvider, type QueryClient } from '@tanstack/react-query'
import { createTRPCContext } from '@trpc/tanstack-react-query'
import { useState } from 'react'
import {
	type AppRouter,
	type inferRouterInputs,
	type inferRouterOutputs
} from '@foodwise/api'

import { makeQueryClient } from './lib/clients'
import { makeTrpcClient } from './lib/clients'

let clientQueryClientSingleton: QueryClient | undefined = undefined
const getQueryClient = () => {
	// Server: always make a new query client
	if (typeof window === 'undefined') return makeQueryClient()
	// Browser: use singleton pattern to keep the same query cl	ient
	return (clientQueryClientSingleton ??= makeQueryClient())
}

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>()

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>

export function TRPCReactProvider(props: { children: React.ReactNode }) {
	const queryClient = getQueryClient()
	const [trpcClient] = useState(makeTrpcClient)

	return (
		<QueryClientProvider client={queryClient}>
			<TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
				{props.children}
			</TRPCProvider>
		</QueryClientProvider>
	)
}
