import '../globals.css'
import { inter } from '@/modules/font'
import { LOCALE_LIST } from '@/features/i18n/config'
import { LangPageParams } from '@/features/i18n/types'
import Providers from '@/features/providers'

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
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
