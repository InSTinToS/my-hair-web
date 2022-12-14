import type { AnimatePresenceProps } from 'framer-motion'
import type { ReactNode } from 'react'

export interface IPresenceProps extends AnimatePresenceProps {
  condition: boolean
  children: ReactNode
}
