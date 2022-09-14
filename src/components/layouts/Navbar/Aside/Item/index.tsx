import { Style } from './styles'

import { AnimatedSpan } from '../AnimatedSpan'

export const Item = ({ onClick, condition, icon: Icon, label }: any) => (
  <Style>
    <button type='button' onClick={onClick}>
      {Icon}

      <AnimatedSpan label={label} condition={condition} />
    </button>
  </Style>
)
