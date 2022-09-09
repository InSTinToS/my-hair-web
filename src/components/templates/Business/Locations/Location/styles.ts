import { styled } from '@app/styles'

import { External as ExternalIcon } from '@app/components/atoms/Icon/icons/External'

export const External = styled(ExternalIcon, { gridArea: 'link' })

export const Street = styled('span', { gridArea: 'street' })

export const Country = styled('strong', { gridArea: 'country' })

export const Style = styled('div', {
  flex: 1,
  display: 'grid',
  alignItems: 'center',

  grid: `
    'close country link' 1fr
    'close street link' 1fr / auto 1fr
  `
})
