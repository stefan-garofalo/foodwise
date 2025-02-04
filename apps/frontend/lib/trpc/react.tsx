'use client'

import { QueryClientProvider, type QueryClient } from '@tanstack/react-query'
import { loggerLink, unstable_httpBatchStreamLink } from '@trpc/client'
import { createTRPCReact } from '@trpc/react-query'
import { useState } from 'react'
import {
	type AppRouter,
	type inferRouterInputs,
	type inferRouterOutputs
} from '@repo/api'
import { env } from '@/env'
import { createQueryClient } from './query-client'

let clientQueryClientSingleton: QueryClient | undefined = undefined
const getQueryClient = () => {
	if (typeof window === 'undefined') {
		// Server: always make a new query client
		return createQueryClient()
	}
	// Browser: use singleton pattern to keep the same query client
	return (clientQueryClientSingleton ??= createQueryClient())
}

export const api = createTRPCReact<AppRouter>()

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

	const [trpcClient] = useState(() =>
		api.createClient({
			links: [
				loggerLink({
					enabled: (op) =>
						process.env.NODE_ENV === 'development' ||
						(op.direction === 'down' && op.result instanceof Error)
				}),
				unstable_httpBatchStreamLink({
					url: getBaseUrl() + '/api/trpc'
				})
			]
		})
	)

	return (
		<QueryClientProvider client={queryClient}>
			<api.Provider client={trpcClient} queryClient={queryClient}>
				{props.children}
			</api.Provider>
		</QueryClientProvider>
	)
}

function getBaseUrl() {
	if (process.env.NODE_ENV === 'development') return `http://localhost:${env.BACKEND_PORT}`
	if (env.BACKEND_URL) return `https://${env.BACKEND_URL}`
}
