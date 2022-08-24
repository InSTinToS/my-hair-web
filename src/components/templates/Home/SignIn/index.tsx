import { useSignIn } from './logic'
import { Email, Form, Google, Logo, Password, Styles, Submit } from './styles'

import { AiFillLock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'

export const SignIn = () => {
  const { handleSubmit, errors, onSignInSubmit, register, dirtyFields } =
    useSignIn()

  return (
    <Styles>
      <Form onSubmit={handleSubmit(onSignInSubmit)}>
        <Logo />

        <Email
          name='email'
          register={register}
          error={errors['email']}
          isFilled={dirtyFields['email']}
          label={{ text: 'E-mail', icon: <BiUser /> }}
        />

        <Password
          name='password'
          type='password'
          register={register}
          error={errors['password']}
          isFilled={dirtyFields['password']}
          label={{ icon: <AiFillLock />, text: 'Senha' }}
        />

        <Submit type='submit'>Entrar</Submit>

        <Google />
      </Form>
    </Styles>
  )
}
