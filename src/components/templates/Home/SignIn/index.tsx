import { useSignIn } from './logic'
import { Email, Form, Google, Logo, Password, Styles, Submit } from './styles'

import { AiFillLock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'

export const SignIn = () => {
  const { handleSubmit, onSignInSubmit, register, dirtyFields } = useSignIn()

  return (
    <Styles>
      <Form onSubmit={handleSubmit(onSignInSubmit)}>
        <Logo />

        <Email
          name='email'
          label='E-mail'
          register={register}
          labelIcon={<BiUser />}
          isFilled={dirtyFields['email']}
        />

        <Password
          label='Senha'
          name='password'
          type='password'
          register={register}
          labelIcon={<AiFillLock />}
          isFilled={dirtyFields['password']}
        />

        <Submit type='submit'>Entrar</Submit>

        <Google />
      </Form>
    </Styles>
  )
}
