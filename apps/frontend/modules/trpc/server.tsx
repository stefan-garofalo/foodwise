import 'server-only'

import { appRouter, createTRPCContext } from '@foodwise/api'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import {
  createTRPCOptionsProxy,
  type TRPCQueryOptions,
} from '@trpc/tanstack-react-query'
import { headers } from 'next/headers'
import { cache } from 'react'
import { makeQueryClient } from './lib/clients'

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = async () => {
  const heads = new Headers(await headers())
  heads.set('x-trpc-source', 'rsc')
  return createTRPCContext({
    headers: heads,
  })
}

// IMPORTANT: Create a stable getter for the query client that
// will return the same client during the same request.
const getQueryClient = cache(makeQueryClient)

export const trpc = createTRPCOptionsProxy({
  ctx: createContext,
  router: appRouter,
  queryClient: getQueryClient,
})
export const trpcServer = appRouter.createCaller(createContext)

export function HydrateClient(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient()
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {props.children}
    </HydrationBoundary>
  )
}

export function prefetch<T extends ReturnType<TRPCQueryOptions<any>>>(
  queryOptions: T
) {
  const queryClient = getQueryClient()
  if (queryOptions.queryKey[1]?.type === 'infinite') {
    queryClient.prefetchInfiniteQuery(queryOptions as any)
  } else {
    queryClient.prefetchQuery(queryOptions)
  }
}
