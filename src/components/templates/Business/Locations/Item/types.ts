import { ReactNode } from 'react'

export interface IItemProps {
  id: string
  children: ReactNode
  onCloseClick?: (id: string) => void
}
