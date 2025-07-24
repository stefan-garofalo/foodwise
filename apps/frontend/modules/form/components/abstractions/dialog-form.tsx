import { getParams } from '@nimpl/getters/get-params'
import type { PropsWithChildren } from 'react'

import { getCategoriesDictionary } from '@/app/[lang]/(protected)/settings/categories/dictionary'
import type { CategoriesSettingsPageParams } from '@/app/[lang]/(protected)/settings/categories/types'
import { Button } from '@/modules/ui/primitives/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/modules/ui/primitives/dialog'

type FormDialogProps = PropsWithChildren<{
  labels?: { title?: string; description?: string; trigger?: string }
}>

export default function DialogForm({ children, labels }: FormDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{labels?.trigger}</Button>
      </DialogTrigger>

      <DialogContent>
        {labels?.title && <DialogTitle>{labels?.title}</DialogTitle>}
        {labels?.description && (
          <DialogDescription>{labels?.description}</DialogDescription>
        )}
        {children}
      </DialogContent>
    </Dialog>
  )
}
