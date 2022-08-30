import { styled } from '@app/styles'

import { Button } from '@app/components/atoms/Button'
import { GoogleButton } from '@app/components/atoms/GoogleButton'
import { Logo as LogoIcon } from '@app/components/atoms/Icon/icons/Logo'

import { Field } from '@app/components/molecules/Field'

export const Google = styled(GoogleButton, {
  gridArea: 'google',

  '@lg': { px: '$4' }
})

export const Submit = styled(Button, { gridArea: 'submit' })

export const Password = styled(Field, { gridArea: 'password' })

export const Email = styled(Field, { gridArea: 'email' })

export const Logo = styled(LogoIcon, {
  height: '$40',
  gridArea: 'logo',
  flexCenter: 'row',
  alignSelf: 'center',
  justifySelf: 'center',
  fill: '$primary_1'
})

export const Form = styled('form', {
  display: 'grid',
  grid: ` 
    'logo logo'
    'email email' 
    'password password'
    'google submit' auto / 3fr 1fr
  `,

  gridColumnGap: '$6',

  px: '$8',
  width: 'min(100%, $116)',

  '> * + *': { mt: '$8' },

  '@lg': { px: '$16' }
})

export const Styles = styled('section', {
  width: '100%',
  minHeight: '80vh',
  flexCenter: 'col',
  py: '$40',
  theme: '$secondary_1',

  '@lg': { width: '40%', height: '100vh' }
})
