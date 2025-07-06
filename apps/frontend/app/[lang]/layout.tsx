import '../globals.css'
import { instrument, geist } from '@/modules/font'
import { LOCALE_LIST } from '@/modules/i18n/config'
import Providers from '@/modules/providers'
import { RootLayoutProps } from './types'

export const experimental_ppr = true

export const generateStaticParams = () => LOCALE_LIST.map((lang) => ({ lang }))

export default async function RootLayout({ params, children }: RootLayoutProps) {
	const { lang } = await params
	return (
		<html lang={lang}>
			<body className={`${geist.variable} ${instrument.variable}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
