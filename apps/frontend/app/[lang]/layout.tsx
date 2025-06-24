import '../globals.css'
import { instrument, geist } from '@/modules/font'
import { LOCALE_LIST } from '@/modules/i18n/config'
import { WithLangParam } from '@/modules/i18n/types'
import Providers from '@/modules/providers'
import { PropsWithChildren } from 'react'

export const experimental_ppr = true

export const generateStaticParams = () => LOCALE_LIST.map((lang) => ({ lang }))

export default async function RootLayout({
	params,
	children
}: WithLangParam<PropsWithChildren>) {
	const { lang } = await params

	return (
		<html lang={lang}>
			<body className={`${geist.variable} ${instrument.variable}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
