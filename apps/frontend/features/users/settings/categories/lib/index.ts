'use client'

import { RouterInputs, useTRPC } from '@/modules/trpc/client'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useCategoryCreate = () =>
	useMutation(useTRPC().users.settings.categories.create.mutationOptions())
export const useCategoryUpdate = () =>
	useMutation(useTRPC().users.settings.categories.update.mutationOptions())
export const useCategoryRemove = () =>
	useMutation(useTRPC().users.settings.categories.remove.mutationOptions())
export const useCategoryGet = (
	params: RouterInputs['users']['settings']['categories']['get']
) => useQuery(useTRPC().users.settings.categories.get.queryOptions(params))
