import { styled } from '@app/styles'

import { Button } from '@app/components/atoms/Button'
import { GoogleButton } from '@app/components/atoms/GoogleButton'
import { Logo as LogoIcon } from '@app/components/atoms/Icon/icons/Logo'

export const Google = styled(GoogleButton, {
  gridArea: 'google',

  '@lg': { px: '$4' }
})

export const Submit = styled(Button, { gridArea: 'submit' })

export const Logo = styled(LogoIcon, {
  gridArea: 'logo',

  flexCenter: 'row',
  alignSelf: 'center',
  justifySelf: 'center',

  height: '$40',

  fill: '$primary_1'
})

export const Form = styled('form', {
  display: 'grid',
  gridColumnGap: '$6',
  grid: ` 
    'logo logo'
    'email email' 
    'password password'
    'google submit' auto / 3fr 1fr
  `,

  px: '$8',
  width: 'min(100%, $116)',

  '> * + *': { mt: '$8' },

  '@lg': { px: '$16' }
})

export const Style = styled('section', {
  flexCenter: 'col',

  py: '$40',
  width: '100%',
  minHeight: '80vh',

  theme: '$secondary_1',

  '@lg': { width: '40%', height: '100vh' }
})
