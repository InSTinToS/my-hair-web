import { Style, Title } from './styles'
import { IToggleHeaderProps } from './types'

import { DropdownArrow } from '@app/components/molecules/DropdownArrow'

export const ToggleHeader = ({ icon, title, open }: IToggleHeaderProps) => (
  <Style>
    {icon}

    <Title>{title}</Title>

    <DropdownArrow open={open} fill='secondary_contrast' size='sm' />
  </Style>
)
