import { MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

export interface IHeaderProps {
  title: string
  icon: ReactNode
  controls: MotionProps['animate']
}
