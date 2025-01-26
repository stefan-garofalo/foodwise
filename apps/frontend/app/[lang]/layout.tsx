import '../globals.css'
import { Analytics } from '@vercel/analytics/react'
import { inter } from '@/lib/font'
import { LOCALE_LIST } from '@/feat/i18n/config'
import { LangPageParams } from '@/feat/i18n/types'

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
				<Analytics />
				{children}
			</body>
		</html>
	)
}
