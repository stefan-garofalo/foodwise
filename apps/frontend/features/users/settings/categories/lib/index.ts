import { RouterInputs, RouterOutputs, useTRPC } from '@/modules/trpc/client'
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
		useCategoryGet: () =>
			useQuery(trpc.users.settings.categories.get.queryOptions()),
		useCategoryGetAll: () =>
			useQuery(trpc.users.settings.categories.getAll.queryOptions())
	}
}
