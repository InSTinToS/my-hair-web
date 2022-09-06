import { styled } from '@app/styles'

import { Close as CloseIcon } from '@app/components/atoms/Icon/icons/Close'

export const Close = styled(CloseIcon, {
  transition: 'all 0.1s ease-in-out',

  '&:hover': { fill: '$error_1', transform: 'scale(1.1)' }
})

export const CloseButton = styled('button', {
  gridArea: 'close',
  justifySelf: 'center',

  p: 0,
  mr: '$7'
})

export const Style = styled('li', {
  display: 'flex',
  alignItems: 'center',

  p: '$7',
  my: '$10',
  radius: '$5',

  border: 'solid 1px $secondary_contrast_1'
})
