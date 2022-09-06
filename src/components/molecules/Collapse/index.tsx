import { Trigger } from './styles'
import { ICollapseProps } from './types'

import { Content, Root } from '@radix-ui/react-collapsible'

export const Collapse = ({ trigger, content, ...props }: ICollapseProps) => (
  <Root {...props}>
    <Trigger>{trigger}</Trigger>

    <Content>{content}</Content>
  </Root>
)
