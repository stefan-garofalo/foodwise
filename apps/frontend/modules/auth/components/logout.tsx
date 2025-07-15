'use client'

import { LogOut } from 'lucide-react'
import { signOut } from '@/modules/auth/lib/client/actions'
import { Button } from '@/modules/ui/primitives/button'
import { merge } from '@/modules/ui/utils/tailwind'
import type { ClassProps } from '@/modules/ui/utils/types'

export function LogoutButton({ className }: ClassProps) {
  return (
    <Button
      className={merge(className)}
      onClick={signOut}
      size="full"
      variant="default"
    >
      <LogOut />
    </Button>
  )
}
