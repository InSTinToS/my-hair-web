import { styled, theme } from '@app/styles'

import { hexRgba } from '@app/utils/hexRgba'

export const Navbar = styled('nav', {
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
  background: hexRgba(theme.colors.secondary_1.value, 0.98)
})

export const Style = styled('main', {
  pt: '$26',
  pr: '$25',

  height: '100vh',

  background: '$tertiary_1',

  ul: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',

    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    p: '$8',

    '&::-webkit-scrollbar': {
      width: '16px'
    },

    '&::-webkit-scrollbar-track': {},

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      border: 'solid $tertiary_1 5px',
      backgroundColor: '$tertiary_contrast_5'
    },

    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '$tertiary_contrast_1'
    },

    li: {
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
    }
  }
})
