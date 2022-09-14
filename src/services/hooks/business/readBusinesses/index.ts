import { api } from '@app/services/api'

import { IBusiness } from '@app/types/api/business.types'

import { gql } from 'graphql-request'
import { useQuery } from 'react-query'

const GET_BUSINESSES = gql`
  query Businesses {
    businesses {
      id
      name
      thumbnail
    }
  }
`

const fetchBusinesses = async (): Promise<{ businesses: IBusiness[] }> =>
  await api.request(GET_BUSINESSES)

export const useReadBusinesses = () =>
  useQuery('READ_BUSINESSES', { queryFn: fetchBusinesses })
