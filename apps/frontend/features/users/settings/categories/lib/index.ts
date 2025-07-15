'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { type RouterInputs, useTRPC } from '@/modules/trpc/client'

export const useCategoryCreate = () =>
  useMutation(useTRPC().users.settings.categories.create.mutationOptions())
export const useCategoryUpdate = () =>
  useMutation(useTRPC().users.settings.categories.update.mutationOptions())
export const useCategoryRemove = () =>
  useMutation(useTRPC().users.settings.categories.remove.mutationOptions())
export const useCategoryGet = (
  params: RouterInputs['users']['settings']['categories']['get']
) => useQuery(useTRPC().users.settings.categories.get.queryOptions(params))
