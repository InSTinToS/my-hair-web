import { useAddContent } from './logic'
import { Button, Label, Style } from './styles'
import { IAddContentProps } from './types'

import { Close } from '@app/components/atoms/Icon/icons/Close'
import { Plus } from '@app/components/atoms/Icon/icons/Plus'

export const AddContent = ({ children }: IAddContentProps) => {
  const { show, onAddClick } = useAddContent()

  return (
    <Style show={show}>
      {show && children}

      {show && (
        <Button onClick={onAddClick} radius='none' theme='error'>
          <Close size='sm' fill='secondary_contrast' />

          <Label>Cancelar</Label>
        </Button>
      )}

      <Button onClick={onAddClick} radius='none' theme='success'>
        <Plus size='sm' stroke='secondary_contrast' />

        <Label>Adicionar</Label>
      </Button>
    </Style>
  )
}
