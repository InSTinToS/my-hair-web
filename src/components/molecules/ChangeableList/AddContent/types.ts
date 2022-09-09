import { ReactNode } from 'react'

export interface IAddContentProps {
  children: ReactNode
  onAddClick?: any
}

export interface IUseAddContentParams {
  onClick?: IAddContentProps['onAddClick']
}
