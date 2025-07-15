'use client'

import { signInWithGoogle } from '@/modules/auth/lib/client/actions'
import { usePageDictionary } from '@/modules/i18n/hooks/dictionaries'
import { GoogleIcon } from '@/modules/ui/icons'
import { Button } from '@/modules/ui/primitives/button'
import { merge } from '@/modules/ui/utils/tailwind'
import type { ClassProps } from '@/modules/ui/utils/types'

export function LoginButton({ className }: ClassProps) {
  const labels = usePageDictionary<'login'>()

  return (
    <Button
      className={merge(className)}
      onClick={signInWithGoogle}
      size="full"
      variant="default"
    >
      <GoogleIcon color="currentColor" /> {labels.actions.google}
    </Button>
  )
}
