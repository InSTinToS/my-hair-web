import { Form, Logo, Styles } from './styles'

import { Button } from 'components/atoms/Button'
import { GoogleButton } from 'components/atoms/GoogleButton'

import { Field } from 'components/molecules/Field'

import { AiFillLock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'

export const SignIn = () => {
  return (
    <Styles>
      <Form>
        <Logo />

        <Field name='e-mail' label='E-mail' labelIcon={<BiUser />} />

        <Field
          label='Senha'
          name='password'
          type='password'
          labelIcon={AiFillLock({})}
        />

        <Button>Entrar</Button>

        <GoogleButton />
      </Form>
    </Styles>
  )
}
