import { RouterInputs, RouterOutputs, useTRPC } from '@/modules/trpc/client'
import { makeTrpcClient } from '@/modules/trpc/lib/clients'
import { createRouterHooks } from '@/modules/trpc/lib/hooks'
import { useMutation, useQuery } from '@tanstack/react-query'

export type CategoriesRouterInputs = RouterInputs['categories']['create']
export type CategoriesRouterOutputs = RouterOutputs['categories']

/**
 * Hook to access categories router with autocompletion and type safety
 */
export function useCategoriesRouter() {
	const trpc = useTRPC()
	return {
		useCategoryCreate: () => useMutation(trpc.categories.create.mutationOptions()),
		useCategoryUpdate: () => useMutation(trpc.categories.update.mutationOptions()),
		useCategoryRemove: () => useMutation(trpc.categories.remove.mutationOptions()),
		useCategoryGet: () => useQuery(trpc.categories.get.queryOptions()),
		useCategoryGetAll: () => useQuery(trpc.categories.getAll.queryOptions())
	}
}
