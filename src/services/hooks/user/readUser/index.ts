import { IUseUserParams, TGetUser } from './types'

import { useAppDispatch } from '@app/hooks/useAppDispatch'

import { userStore } from '@app/store/user'

import { api } from '@app/services/api'

import { gql } from 'graphql-request'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

const GET_USER = gql`
  query User($readUserInput: ReadUserInput) {
    user(readUserInput: $readUserInput) {
      id
      email
      avatar
      username
      password
      full_name
      updated_at
      created_at
      businesses_ids
    }
  }
`

const fetchUser: TGetUser = async ({ queryKey }) => {
  const [_key, email] = queryKey
  console.log(email)

  return await api.request(GET_USER, { readUserInput: { email } })
}

export const useReadUser = ({ email, enabled }: IUseUserParams) => {
  const dispatch = useAppDispatch()

  const queryResponse = useQuery({
    enabled,
    queryFn: fetchUser,
    queryKey: ['READ_USER', email]
  })

  useEffect(() => {
    dispatch(userStore.actions.update(queryResponse.data?.user))
  }, [dispatch, queryResponse.data?.user])

  return queryResponse
}
