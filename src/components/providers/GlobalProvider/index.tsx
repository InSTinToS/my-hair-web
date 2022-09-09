import type { IGlobalProviderProps } from './types'

import { RadixProvider } from '../Radix'
import { ThemeProvider } from '../ThemeProvider'

import { store } from '@app/store'

import { ApolloProvider } from '@apollo/client'
import { client } from '@app/api'
import { Provider as ReduxProvider } from 'react-redux'

export const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <ThemeProvider>
        <RadixProvider>{children}</RadixProvider>
      </ThemeProvider>
    </ReduxProvider>
  </ApolloProvider>
)
