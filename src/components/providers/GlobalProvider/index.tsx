import type { IGlobalProviderProps } from './types'

import { RadixProvider } from '../Radix'
import { ThemeProvider } from '../ThemeProvider'

import { store } from 'store'

import { Provider as ReduxProvider } from 'react-redux'

export const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <ReduxProvider store={store}>
    <ThemeProvider>
      <RadixProvider>{children}</RadixProvider>
    </ThemeProvider>
  </ReduxProvider>
)
