import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
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

  const onSignInSubmit = (data: any) => {
    console.log(data)
  }

  return { onSignInSubmit, register, handleSubmit, dirtyFields, errors }
}
