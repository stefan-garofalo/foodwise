import type { PropsWithChildren } from 'react'
import type { ParamsWithLang } from '@/modules/i18n/types'

export type RootLayoutProps = PropsWithChildren<RootLayoutParams>
export type RootLayoutParams = {
  params: Promise<ParamsWithLang>
}

export type GenerateMetadataProps = {
  params: Promise<{ slug: string }>
}
export interface PageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
