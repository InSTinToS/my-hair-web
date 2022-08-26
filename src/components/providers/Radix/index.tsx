import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

export const RadixProvider = ({ children }: { children: ReactNode }) => (
  <RadixTooltip.Provider delayDuration={0}>{children}</RadixTooltip.Provider>
)
