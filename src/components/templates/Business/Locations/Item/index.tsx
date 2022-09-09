import { Close, CloseButton, Style } from './styles'
import { IItemProps } from './types'

export const Item = ({ children, onCloseClick, id }: IItemProps) => (
  <Style>
    <CloseButton
      onClick={() => {
        onCloseClick && onCloseClick(id)
      }}
    >
      <Close size='sm' fill='secondary_contrast' />
    </CloseButton>

    {children}
  </Style>
)
