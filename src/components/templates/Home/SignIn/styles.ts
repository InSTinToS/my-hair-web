import { Button } from 'components/atoms/Button'
import { GoogleButton } from 'components/atoms/GoogleButton'
import { Logo as LogoIcon } from 'components/atoms/Icon/icons/Logo'

import { Field } from 'components/molecules/Field'

import { styled } from 'styles'

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
  fill: '$tertiary_500_color'
})

export const Form = styled('form', {
  display: 'grid',
  grid: ` 'logo logo'
          'email email' 
          'password password'
          'google submit' auto / 3fr 1fr
        `,

  px: '$8',
  width: 'min(100%, $116)',

  '> * + *': { mt: '$8' },

  '@lg': { px: '$16' }
})

export const Styles = styled('section', {
  width: '100%',
  height: '80vh',
  flexCenter: 'col',
  theme: '$primary_500',

  '@lg': { width: '40%', height: '100vh' }
})
