import { styled, theme } from '@app/styles'

import { hexRgba } from '@app/utils/hexRgba'

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
      true: {
        background: hexRgba(theme.colors.secondary_1.value, 0.98)
      }
    }
  }
})
