import '../globals.css'
import { instrument, geist } from '@/modules/font'
import { LOCALE_LIST } from '@/modules/i18n/config'
import { LangPageParams } from '@/modules/i18n/types'
import Providers from '@/modules/providers'

export const experimental_ppr = true

export function generateStaticParams() {
	return LOCALE_LIST.map((lang) => ({ lang }))
}

type LayoutProps = {
	children: React.ReactNode
	params: LangPageParams
}
export default async function RootLayout({ params, children }: LayoutProps) {
	const { lang } = await params

	return (
		<html lang={lang}>
			<body className={`${geist.variable} ${instrument.variable}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
