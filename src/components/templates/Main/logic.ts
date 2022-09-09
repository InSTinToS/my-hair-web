import { IBusiness } from '@app/types/api/business.types'

import { gql, useQuery } from '@apollo/client'

const GET_LOCATIONS = gql`
  query Businesses {
    businesses {
      id
      name
      thumbnail
    }
  }
`

export const useMain = () => {
  const { data, loading } = useQuery<{ businesses: IBusiness[] }>(GET_LOCATIONS)

  return { businesses: data?.businesses, loading }
}
