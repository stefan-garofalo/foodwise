import { Button } from '@/modules/ui/primitives/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger
} from '@/modules/ui/primitives/dialog'

import { getCategoriesDictionary } from '@/app/[lang]/(protected)/settings/categories/dictionary'

import { getParams } from '@nimpl/getters/get-params'
import { CategoriesSettingsPageParams } from '@/app/[lang]/(protected)/settings/categories/types'
import { PropsWithChildren } from 'react'

type FormDialogProps = PropsWithChildren<{
	labels?: { title?: string; description?: string; trigger?: string }
}>

export default function DialogForm({ children, labels }: FormDialogProps) {
	const { lang } = getParams() as Awaited<CategoriesSettingsPageParams>
	const dict = getCategoriesDictionary(lang)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>{labels?.trigger ?? dict.actions.create}</Button>
			</DialogTrigger>

			<DialogContent>
				{(dict.title || labels?.title) && (
					<DialogTitle>{labels?.title ?? dict.title}</DialogTitle>
				)}
				{(dict.description || labels?.description) && (
					<DialogDescription>
						{labels?.description ?? dict.description}
					</DialogDescription>
				)}
				{children}
			</DialogContent>
		</Dialog>
	)
}
