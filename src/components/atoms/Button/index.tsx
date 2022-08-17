import { ButtonStyle } from './styles'

import { HTMLAttributes } from 'react'

export const Button = (props: HTMLAttributes<HTMLButtonElement>) => (
  <ButtonStyle {...props} />
)
