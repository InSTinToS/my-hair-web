import { styled } from '@app/styles'

export const Style = styled('li', {
  width: '100%',

  button: {
    flexCenter: 'row',

    width: '100%',
    maxHeight: '$9',

    color: '$secondary_1_contrast'
  },

  '& + li': { mt: '$10' }
})
