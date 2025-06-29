import { RouterInputs, useTRPC } from '@/modules/trpc/client'
import { useMutation, useQuery } from '@tanstack/react-query'

/**
 * Hook to access categories router with autocompletion and type safety
 */
export function useCategoriesRouter() {
	const trpc = useTRPC()
	return {
		useCategoryCreate: () =>
			useMutation(trpc.users.settings.categories.create.mutationOptions()),
		useCategoryUpdate: () =>
			useMutation(trpc.users.settings.categories.update.mutationOptions()),
		useCategoryRemove: () =>
			useMutation(trpc.users.settings.categories.remove.mutationOptions()),
		useCategoryGet: (
			params: RouterInputs['users']['settings']['categories']['get']
		) => useQuery(trpc.users.settings.categories.get.queryOptions(params)),
		useCategoryGetAll: (
			params: RouterInputs['users']['settings']['categories']['getAll']
		) => useQuery(trpc.users.settings.categories.getAll.queryOptions(params))
	}
}
