import { Arrow, Content, Trigger } from './styles'
import { ITooltipProps } from './types'

import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

export const Tooltip = ({ content, trigger, sideOffset }: ITooltipProps) => (
  <RadixTooltip.Root>
    <Trigger asChild>{trigger}</Trigger>

    <RadixTooltip.Portal>
      <Content align='start' sideOffset={sideOffset}>
        {content}
        <Arrow />
      </Content>
    </RadixTooltip.Portal>
  </RadixTooltip.Root>
)
