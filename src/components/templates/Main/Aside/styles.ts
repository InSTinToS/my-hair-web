import { styled, theme } from '@app/styles'

import { hexRgba } from '@app/utils/hexRgba'

export const Style = styled('aside', {
  position: 'absolute',
  top: 0,
  right: 0,

  height: '100vh',
  px: '$8',
  py: '$8',

  backgroundColor: hexRgba(theme.colors.secondary_1.value, 0.98),

  ul: {
    flexCenter: 'col',
    mt: '$13',
    listStyle: 'none',

    li: {
      button: {
        flexCenter: 'row',

        color: '$secondary_1_contrast',

        span: { ml: '$8' }
      }
    }
  },

  header: {
    flexCenter: 'row',

    button: {
      flexCenter: 'row',
      color: '$secondary_1_contrast',

      img: { size: '$15', radius: '$full' }
    },

    span: { ml: '$8' }
  }
})
