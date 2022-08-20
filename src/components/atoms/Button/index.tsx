import { Styles } from './styles'
import { IButtonProps } from './types'

export const Button = ({ children, ...props }: IButtonProps) => (
  <Styles {...props}>{children}</Styles>
)
