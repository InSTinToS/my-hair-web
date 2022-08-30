import { styled } from '@app/styles'

import { Button as DefaultButton } from '@app/components/atoms/Button'
import { Map as MapIcon } from '@app/components/atoms/Icon/icons/Map'
import { Plus as PlusIcon } from '@app/components/atoms/Icon/icons/Plus'

import { Field as DefaultField } from '@app/components/molecules/Field'

export const Button = styled(DefaultButton, {
  mt: '$4',
  theme: '$success_500'
})

export const Field = styled(DefaultField, {
  height: '$16',
  my: '$4'
})

export const Map = styled(MapIcon, {
  height: '$8',
  fill: '$tertiary_1_contrast'
})

export const Plus = styled(PlusIcon, {
  height: '$8',
  stroke: '$tertiary_1_contrast'
})

export const Title = styled('h2', {
  mx: '$10',
  my: '$4'
})

export const Header = styled('header', {
  flexCenter: 'row'
})

export const Location = styled('section', {
  flexCenter: 'col',
  px: '$10'
})

export const Styles = styled('div', {
  minHeight: '100vh',

  backgroundColor: '$tertiary_1'
})
