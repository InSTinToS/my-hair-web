import { margin } from './margin'
import { padding } from './padding'
import { radius } from './radius'
import { size } from './size'

export const utils = {
  theme: (theme: string) => ({
    color: `${theme}_text`,
    backgroundColor: `${theme}_color`
  }),

  flexCenter: (direction: 'row' | 'col') => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: direction === 'col' ? 'column' : 'row'
  }),

  ...size,
  ...radius,
  ...margin,
  ...padding
}
