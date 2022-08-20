import { styled } from 'styles'

export const Label = styled('label', {
  top: 0,
  left: 0,
  ml: '$4',
  px: '$2',
  position: 'absolute',
  transform: 'translateY(-50%)',
  backgroundColor: '$primary_500_color'
})

export const Input = styled('input', {
  px: '$2',
  width: '100%',
  border: 'none',
  height: '100%',
  color: '$primary_500_text',
  backgroundColor: 'transparent',

  '&:focus': { outline: 'none' }
})

export const Icon = styled('button', {
  p: '$5',
  width: '$16',
  border: 'none',
  height: '100%',
  minWidth: '$16',
  flexCenter: 'row',
  stroke: '$primary_500_text',
  backgroundColor: 'transparent',

  svg: { size: '100%' }
})

export const Style = styled('div', {
  radius: '$3',
  width: '100%',
  height: '$22',
  minWidth: '$64',

  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  border: 'solid 1px $primary_500_text'
})
