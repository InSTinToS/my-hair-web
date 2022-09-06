import { Close, CloseButton, Style } from './styles'
import { IItemProps } from './types'

export const Item = ({ children }: IItemProps) => (
  <Style>
    <CloseButton>
      <Close size='sm' fill='secondary_contrast' />
    </CloseButton>

    {children}
  </Style>
)
