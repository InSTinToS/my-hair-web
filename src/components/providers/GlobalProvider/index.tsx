import type { IGlobalProviderProps } from './types'

import { RadixProvider } from '../Radix'
import { ThemeProvider } from '../ThemeProvider'

import { store } from '@app/store'

import { reactQueryClient } from '@app/services/api'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query/react'
import { Provider as ReduxProvider } from 'react-redux'

export const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <QueryClientProvider client={reactQueryClient}>
    <ReduxProvider store={store}>
      <ThemeProvider>
        <ReactQueryDevtools />
        <RadixProvider>{children}</RadixProvider>
      </ThemeProvider>
    </ReduxProvider>
  </QueryClientProvider>
)
