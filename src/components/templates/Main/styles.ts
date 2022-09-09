import { styled } from '@app/styles'

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
    }
  }
})
