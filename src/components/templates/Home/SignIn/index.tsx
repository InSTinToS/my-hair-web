import { useSignIn } from './logic'
import { Email, Form, Google, Logo, Password, Styles, Submit } from './styles'

import { AiFillLock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'

export const SignIn = () => {
  const { errors, onSignInSubmit, register, dirtyFields } = useSignIn()

  return (
    <Styles>
      <Form onSubmit={onSignInSubmit}>
        <Logo />

        <Email
          isFilled={dirtyFields['email']}
          error={errors['email']?.message}
          label={{ text: 'E-mail', icon: <BiUser /> }}
          {...register('email')}
        />

        <Password
          type='password'
          isFilled={dirtyFields['password']}
          error={errors['password']?.message}
          label={{ text: 'Senha', icon: <AiFillLock /> }}
          {...register('password')}
        />

        <Submit type='submit'>Entrar</Submit>

        <Google />
      </Form>
    </Styles>
  )
}
