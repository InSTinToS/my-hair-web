import { Google as GoogleIcon } from '../Icon/icons/Google'

import { styled } from 'styles'

export const Google = styled(GoogleIcon, {
  height: '100%',
  mr: '$8'
})

export const Styles = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  py: '$7',
  px: '$10',
  width: '100%',
  height: '$22',
  radius: '$3',
  color: '$google_gray',
  backgroundColor: '$google_white'
})
