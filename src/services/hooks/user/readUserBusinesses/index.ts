import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { IUser } from '@app/types/api/user.types'

import { gql } from 'graphql-request'
import { useQuery } from 'react-query'

const GET_BUSINESSES = gql`
  query Query($readBusinessesInput: ReadBusinessesInput) {
    businesses(readBusinessesInput: $readBusinessesInput) {
      id
      name
      thumbnail
      admins_ids
      locations {
        id
        link
        state
        street
        number
        country
        complement
      }
    }
  }
`

const fetchBusinesses = (ids: IUser['businesses_ids']) => {
  if (ids) api.request(GET_BUSINESSES, { readBusinessesInput: { ids } })
}

export const useReadUserBusinesses = () => {
  const userStore = useAppSelector(state => state.usersStore)
  const businesses_ids = userStore.user?.businesses_ids

  return useQuery({
    queryKey: 'READ_USER_BUSINESSES',
    queryFn: () => {
      fetchBusinesses(businesses_ids)
    }
  })
}
