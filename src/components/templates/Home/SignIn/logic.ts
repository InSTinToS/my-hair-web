import { TOnSignInSubmit } from './types'

import { useReadUser } from '@app/services/hooks/user/readUser'

import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
  const router = useRouter()
  const [email, setEmail] = useState('')

  const { refetch } = useReadUser({ email, enabled: false })

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
      setEmail(data.email)
    })(event)

    router.push('/main')
  }

  useEffect(() => {
    if (email) refetch()
  }, [email, refetch])

  return { onSignInSubmit, register, dirtyFields, errors }
}
