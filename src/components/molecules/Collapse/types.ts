import { CollapsibleProps } from '@radix-ui/react-collapsible'
import { ReactNode } from 'react'

export interface ICollapseProps extends CollapsibleProps {
  trigger: ReactNode
  content: ReactNode
}
