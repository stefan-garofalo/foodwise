import type { ComponentProps } from 'react'
import { HydrateClient, prefetch, trpc } from '@/modules/trpc/server'

export default function UserSettingsPrefetch(
  props: ComponentProps<typeof HydrateClient>
) {
  prefetch(trpc.users.getSettings.queryOptions())
  return <HydrateClient {...props} />
}
