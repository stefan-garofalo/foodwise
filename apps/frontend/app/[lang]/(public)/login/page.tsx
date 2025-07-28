import { LoginButton } from '@/modules/auth/components/login'
import { getMetadata } from '@/modules/metadata'

import { Title } from '@/modules/ui/primitives/typography'
import type { GenerateMetadataProps, PageProps } from '../../types'
import { getLoginDictionary } from './dictionary'
import type { LoginPageProps } from './types'

export const generateMetadata = async (props: GenerateMetadataProps) =>
  getMetadata(props, import.meta.url)

export default async function LoginPage({ params }: PageProps) {
  const { lang } = await (params as unknown as LoginPageProps['params'])
  const labels = getLoginDictionary(lang)

  return (
    <main className="flex h-svh flex-col items-center justify-center gap-y-4">
      <Title className="text-center lg:text-7xl!" variant="title">
        {labels.title}
      </Title>
      <p className="whitespace-pre-line text-pretty text-center md:w-1/2 lg:text-lg 2xl:w-1/3">
        {labels.subtitle}
      </p>
      <LoginButton className="mt-5 max-w-sm" />
    </main>
  )
}
