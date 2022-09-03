import { useSignIn } from './logic'
import { Form, Google, Logo, Style, Submit } from './styles'

import { Field } from '@app/components/molecules/Field'

import { AiFillLock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'

export const SignIn = () => {
  const { errors, onSignInSubmit, register, dirtyFields } = useSignIn()

  return (
    <Style>
      <Form onSubmit={onSignInSubmit}>
        <Logo />

        <Field
          grid
          isFilled={dirtyFields['email']}
          error={errors['email']?.message}
          label={{ text: 'E-mail', icon: <BiUser /> }}
          {...register('email')}
        />

        <Field
          grid
          type='password'
          isFilled={dirtyFields['password']}
          error={errors['password']?.message}
          label={{ text: 'Senha', icon: <AiFillLock /> }}
          {...register('password')}
        />

        <Submit type='submit' theme='primary'>
          Entrar
        </Submit>

        <Google />
      </Form>
    </Style>
  )
}
