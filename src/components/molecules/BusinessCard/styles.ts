import { styled, theme } from '@app/styles'

import { hexRgba } from '@app/utils/hexRgba'

export const Style = styled('div', {
  position: 'relative',

  m: '$8',
  size: 250,
  radius: '$5',

  overflow: 'hidden',

  img: { size: '100%' },

  div: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    display: 'flex',
    justifyContent: 'space-around',

    py: '$8',

    backgroundColor: hexRgba(theme.colors.secondary_1.value, 0.7),

    span: { color: '$success_1', fontWeight: 'bold' }
  }
})
