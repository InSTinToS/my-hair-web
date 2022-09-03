import { Style, Title } from './styles'
import { IHeaderProps } from './types'

import { Arrow } from '@app/components/atoms/Icon/icons/Arrow'

import { motion } from 'framer-motion'

export const Header = ({ controls, icon, title }: IHeaderProps) => {
  return (
    <Style>
      {icon}

      <Title>{title}</Title>

      <motion.div animate={controls}>
        <Arrow size='sm' fill='tertiary_contrast' />
      </motion.div>
    </Style>
  )
}
