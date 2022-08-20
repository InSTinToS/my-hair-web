import { Google, Styles } from './styles'
import { IButtonProps } from './types'

export const GoogleButton = ({ ...props }: IButtonProps) => (
  <Styles {...props}>
    <Google /> Entrar com o Google
  </Styles>
)
