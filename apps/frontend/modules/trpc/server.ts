import 'server-only'

import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query'
import { headers } from 'next/headers'
import { cache } from 'react'

import { createTRPCContext } from '@foodwise/api'
import { makeQueryClient, makeTrpcClient } from './lib'

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
	const heads = new Headers(await headers())
	heads.set('x-trpc-source', 'rsc')

	return createTRPCContext({
		headers: heads
	})
})

// IMPORTANT: Create a stable getter for the query client that
// will return the same client during the same request.
const getQueryClient = cache(makeQueryClient)

export const trpc = createTRPCOptionsProxy({
	ctx: createContext,
	queryClient: getQueryClient,
	client: makeTrpcClient()
})
