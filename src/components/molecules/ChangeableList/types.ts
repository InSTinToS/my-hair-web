import { IAddContentProps } from './AddContent/types'

import { ReactNode } from 'react'

export interface IChangeableListProps {
  items?: ReactNode[]
  toAddContent: ReactNode
  onAddClick: IAddContentProps['onAddClick']
}
