import { useForm } from 'react-hook-form'

export const useSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { dirtyFields }
  } = useForm({ defaultValues: { email: '', password: '' } })

  const onSignInSubmit = (data: any) => {
    console.log(data)
  }

  return { onSignInSubmit, register, handleSubmit, dirtyFields }
}
