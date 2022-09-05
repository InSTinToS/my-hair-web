import { Style } from './styles'
import { IDropdownArrowProps } from './types'

import { Arrow } from '@app/components/atoms/Icon/icons/Arrow'

export const DropdownArrow = ({
  open = false,
  ...props
}: IDropdownArrowProps) => (
  <Style
    transition={{ duration: 0.3 }}
    animate={open ? { rotate: -180 } : { rotate: 0 }}
  >
    <Arrow {...props} />
  </Style>
)
