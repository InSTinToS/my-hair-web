import { styled } from '@app/styles'

import { Close as CloseIcon } from '@app/components/atoms/Icon/icons/Close'
import { External as ExternalIcon } from '@app/components/atoms/Icon/icons/External'

export const External = styled(ExternalIcon, { gridArea: 'link' })

export const Country = styled('strong', { gridArea: 'country' })

export const Street = styled('span', { gridArea: 'street' })

export const Close = styled(CloseIcon, {
  gridArea: 'close',
  justifySelf: 'center',

  mr: '$7'
})

export const Style = styled('li', {
  display: 'grid',
  alignItems: 'center',
  grid: `
    'close country link' 1fr
    'close street link' 1fr / auto 1fr
  `,

  p: '$7',
  my: '$10',
  radius: '$5',

  border: 'solid 1px $secondary_contrast_1'
})
