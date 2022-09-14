import { Style } from './styles'

import { theme } from '@app/styles'

import { Presence } from '@app/components/atoms/Presence'

import { Variants } from 'framer-motion'

export const AnimatedSpan = ({ condition, label }: any) => {
  const openSidebarWidth =
    Number(theme.sizes[56].value.split('r')[0]) * 2 + 'rem'

  const spanAnimation: Variants = {
    enter: { x: 0, opacity: 1, width: 'auto' },
    exit: { x: openSidebarWidth, opacity: 0, width: 0 },
    initial: { x: openSidebarWidth, opacity: 0, width: 0 }
  }

  return (
    <Presence condition={condition}>
      <Style
        exit='exit'
        animate='enter'
        initial='initial'
        variants={spanAnimation}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        {label}
      </Style>
    </Presence>
  )
}
