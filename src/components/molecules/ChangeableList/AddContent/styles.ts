import { styled } from '@app/styles'

import { Button as DefaultButton } from '@app/components/atoms/Button'

export const Label = styled('span', { ml: '$7' })

export const Button = styled(DefaultButton, {
  flex: 1,
  flexCenter: 'row',

  p: '$7'
})

export const Style = styled('li', {
  flexWrap: 'wrap',
  flexCenter: 'row',

  my: '$10',
  radius: '$4',
  width: '100%',
  overflow: 'hidden',

  backgroundColor: '$secondary',

  variants: {
    show: { true: { border: 'solid 1px $tertiary_contrast_1' } }
  }
})
