import { IDropdownArrowProps } from '../DropdownArrow/types'

import { ReactNode } from 'react'

export interface IToggleHeaderProps {
  title: string
  icon: ReactNode
  open?: IDropdownArrowProps['open']
}
