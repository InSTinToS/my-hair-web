import type { ILinkProps } from './types'

import NextLink from 'next/link'

const Link = ({ children, ...props }: ILinkProps) => (
  <NextLink {...props}>
    <a>{children}</a>
  </NextLink>
)

export default Link
