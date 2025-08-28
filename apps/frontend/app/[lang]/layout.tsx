import '../globals.css'
import { geist, instrument } from '@/modules/font'
import { LOCALE_LIST } from '@/modules/i18n/config'
import Providers from '@/modules/providers'
import { Toaster } from '@/modules/ui/primitives/sonner'

export const generateStaticParams = () => LOCALE_LIST.map((lang) => ({ lang }))

export default async function RootLayout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  return (
    <html lang={lang}>
      <body className={`${geist.variable} ${instrument.variable}`}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  )
}
