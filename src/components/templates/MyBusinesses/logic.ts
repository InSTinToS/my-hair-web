import { api } from '@app/services/api'
import { useReadUserBusinesses } from '@app/services/hooks/user/readUserBusinesses'

import { IBusiness } from '@app/types/api/business.types'

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

export const useMyBusinesses = () => {
  const userBusinessesIds = [{}]

  const { data } = useReadUserBusinesses()

  const businessesResponse = useQuery<{ businesses: IBusiness[] }>(
    'READ_BUSINESSES',
    async () =>
      await api.request(GET_BUSINESSES, {
        readBusinessesInput: userBusinessesIds
      })
  )

  const businesses = businessesResponse.data?.businesses

  return { businesses }
}
