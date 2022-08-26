import { TOnSignInSubmit } from './types'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  password: yup.string().required('Informe uma senha'),
  email: yup
    .string()
    .email('Informe um e-mail válido')
    .required('Informe um e-mail')
})

export const useSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: { email: '', password: '' }
  })

  const onSignInSubmit: TOnSignInSubmit = event => {
    handleSubmit(data => {
      console.log(data)
    })(event)
  }

  return { onSignInSubmit, register, dirtyFields, errors }
}
