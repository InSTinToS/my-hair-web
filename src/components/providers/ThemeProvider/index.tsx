import { globalStyles } from 'styles'
import { dark } from 'styles/themes/dark'
import { light } from 'styles/themes/light'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ReactNode, useEffect } from 'react'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    globalStyles()
  }, [])

  return (
    <NextThemeProvider
      attribute='class'
      storageKey='@MyHair-theme'
      defaultTheme={dark.className}
      themes={['dark_theme', 'light_theme']}
      value={{ dark_theme: dark.className, light_theme: light.className }}
    >
      {children}
    </NextThemeProvider>
  )
}
