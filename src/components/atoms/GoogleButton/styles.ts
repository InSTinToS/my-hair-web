import { Google as GoogleIcon } from '../Icon/icons/Google'

import { styled } from 'styles'

export const Google = styled(GoogleIcon, {
  mr: '$8',
  height: '100%',
  transition: 'all 0.3s ease-in-out'
})

export const Styles = styled('button', {
  py: '$7',
  px: '$10',
  radius: '$3',
  width: '100%',
  height: '$22',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$google_white',
  transition: 'all 0.3s ease-in-out'
})
