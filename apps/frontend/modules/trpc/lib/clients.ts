import type { AppRouter } from '@foodwise/api'
import { defaultShouldDehydrateQuery, QueryClient } from '@tanstack/react-query'
import { createTRPCClient, httpBatchStreamLink, loggerLink } from '@trpc/client'

import { env } from '@/env'

export const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 30 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
    },
  })

export const makeTrpcClient = () =>
  createTRPCClient<AppRouter>({
    links: [
      loggerLink({
        enabled: (op) =>
          process.env.NODE_ENV === 'development' ||
          (op.direction === 'down' && op.result instanceof Error),
      }),
      httpBatchStreamLink({
        url: `${env.NEXT_PUBLIC_BACKEND_URL}/api/trpc`,
      }),
    ],
  })
