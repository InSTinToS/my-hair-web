import { styled, theme } from '@app/styles'

import { hexRgba } from '@app/utils/hexRgba'

export const Style = styled('aside', {
  position: 'absolute',
  top: 0,
  right: 0,

  px: '$8',
  py: '$8',
  width: '$25',
  height: '100vh',

  transition: 'all 0.3s ease-in-out',

  backgroundColor: hexRgba(theme.colors.secondary_1.value, 0.98),

  ul: {
    flexCenter: 'col',

    mt: '$13',
    listStyle: 'none'
  },

  header: {
    flexCenter: 'row',

    button: {
      flexCenter: 'row',
      color: '$secondary_1_contrast',

      img: { size: '$15', radius: '$full' }
    },

    span: { ml: '$8' }
  },

  variants: {
    show: {
      true: {
        width: '$56',

        'ul li button': { justifyContent: 'space-between' }
      }
    }
  }
})
