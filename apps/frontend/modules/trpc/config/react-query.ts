import { TRPCClientErrorLike } from '@trpc/client'
import { ResolverDef, TRPCMutationOptions } from '@trpc/tanstack-react-query'
import { toast } from 'sonner'

export const baseMutationConfig = {
	onError: (error: TRPCClientErrorLike<ResolverDef>) => toast.error(error.message),
	onSuccess: () => {}
}
