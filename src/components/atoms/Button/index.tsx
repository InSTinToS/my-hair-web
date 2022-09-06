import { Style } from './styles'
import { IButtonProps } from './types'

export const Button = ({ children, ...props }: IButtonProps) => (
  <Style {...props}>{children}</Style>
)
