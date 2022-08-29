import { GlobalProvider } from '@app/components/providers/GlobalProvider'

import { themes } from '@storybook/theming'

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: { dark: { ...themes.dark }, light: { ...themes.normal } },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } }
}

export const decorators = [
  Story => (
    <GlobalProvider>
      <Story />
    </GlobalProvider>
  )
]
