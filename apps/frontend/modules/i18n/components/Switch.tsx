'use client'

import type { Route } from 'next'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { merge } from '@/modules/ui/utils/tailwind'
import type { LangParams } from '../types'

type Props = {
  children: React.ReactNode
  lang: string
  className?: string
}

export default function LocalizedSwitch({
  children,
  lang,
  className = '',
}: Props) {
  const { lang: currentLang } = useParams<LangParams>()
  const pathname = usePathname()

  return (
    <Link
      className={merge(
        className,
        currentLang === lang && 'pointer-events-none opacity-50'
      )}
      href={pathname.replace(currentLang, lang) as Route<string>}
    >
      {children}
    </Link>
  )
}
