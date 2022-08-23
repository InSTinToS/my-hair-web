import { useGoogleButton } from './logic'
import { Google, Styles } from './styles'
import { IButtonProps } from './types'

export const GoogleButton = ({ ...props }: IButtonProps) => {
  const { googleCSS, stylesCSS, onMouseEnter, onMouseLeave } = useGoogleButton()

  return (
    <Styles
      {...props}
      css={stylesCSS}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <Google css={googleCSS} /> Entrar com o Google
    </Styles>
  )
}
