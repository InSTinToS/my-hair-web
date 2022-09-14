import { styled, theme } from '@app/styles'

import { hexRgba } from '@app/utils/hexRgba'

export const Main = styled('main', {
  theme: '$tertiary_1',
  minHeight: '100vh',
  pt: '$26',
  pr: '$25',

  transition: 'padding 0.3s ease-in-out',

  variants: { show: { true: { pr: '$56' } } }
})

export const Style = styled('nav', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 2,

  display: 'flex',
  alignItems: 'center',

  py: '$8',
  pr: '$32',
  pl: '$13',

  variants: {
    withNavbar: {
      true: { background: hexRgba(theme.colors.secondary_1.value, 0.98) }
    }
  }
})
