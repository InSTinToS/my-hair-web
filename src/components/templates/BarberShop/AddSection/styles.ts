import { styled } from '@app/styles'

import { Button as DefaultButton } from '@app/components/atoms/Button'

import { Field as DefaultField } from '@app/components/molecules/Field'

export const Button = styled(DefaultButton, {
  flexCenter: 'row',
  flex: 1,

  p: '$7'
})

export const Label = styled('span', { ml: '$7' })

export const Field = styled(DefaultField, { my: '$4' })

export const Style = styled('li', {
  flexCenter: 'row',
  flexWrap: 'wrap',

  my: '$10',
  radius: '$4',
  width: '100%',
  overflow: 'hidden',

  backgroundColor: '$secondary_ ',
  border: 'solid 1px $tertiary_contrast_1'
})
