import { styled } from '@app/styles'

export const Main = styled('main', {
  minWidth: 320,
  display: 'flex',
  flexDirection: 'column',

  '@lg': { flexDirection: 'row' }
})
