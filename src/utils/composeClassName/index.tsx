import type { TComposeClassName } from './types'

export const composeClassName: TComposeClassName = (
  componentClassName,
  propClassName
) =>
  propClassName ? `${componentClassName} ${propClassName}` : componentClassName
