import { useAddSection } from './logic'
import { Button, Label, Style } from './styles'
import { IAddSectionProps } from './types'

import { Close } from '@app/components/atoms/Icon/icons/Close'
import { Plus } from '@app/components/atoms/Icon/icons/Plus'

export const AddSection = ({ children }: IAddSectionProps) => {
  const { showSection, onAddClick } = useAddSection()

  return (
    <Style>
      {showSection && children}

      <Button onClick={onAddClick} radius='none' theme='success'>
        <Plus size='sm' stroke='secondary_contrast' />

        <Label>Adicionar</Label>
      </Button>

      {showSection && (
        <Button onClick={onAddClick} radius='none' theme='error'>
          <Close size='sm' fill='secondary_contrast' />

          <Label>Cancelar</Label>
        </Button>
      )}
    </Style>
  )
}
