import { styled } from 'styles'

import {
  Arrow as RadixArrow,
  Content as RadixContent,
  Trigger as RadixTrigger
} from '@radix-ui/react-tooltip'

export const Arrow = styled(RadixArrow, {
  fill: '$error_500_color'
})

export const Content = styled(RadixContent, {
  p: '$4',
  theme: '$error_500',
  borderRadius: '$3'
})

export const Trigger = styled(RadixTrigger, {
  border: 'none',
  backgroundColor: 'transparent'
})

export const Styles = styled('div', { '*': { color: '$error_500_color' } })
