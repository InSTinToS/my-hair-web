import { styled } from 'styles'

export const Main = styled('main', {
  minWidth: 320,
  display: 'flex',
  flexDirection: 'column',

  '@lg': { flexDirection: 'row' }
})
