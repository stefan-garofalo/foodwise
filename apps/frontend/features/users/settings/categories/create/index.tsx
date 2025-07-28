import type { ComponentProps } from 'react'
import DialogForm from '@/modules/form/components/abstractions/dialog-form'
import CategoryCreateForm from './form'

export type CategoryCreateDialogProps = {
  formLabels: ComponentProps<typeof CategoryCreateForm>['labels']
  dialogLabels: ComponentProps<typeof DialogForm>['labels']
}

export default function CategoryCreateDialog({
  formLabels,
  dialogLabels,
}: CategoryCreateDialogProps) {
  return (
    <DialogForm labels={dialogLabels}>
      <CategoryCreateForm labels={formLabels} />
    </DialogForm>
  )
}
