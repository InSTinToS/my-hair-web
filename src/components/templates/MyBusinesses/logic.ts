import { IBusiness } from '@app/types/api/business.types'

import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { useEffect } from 'react'

const GET_USER_BUSINESSES_IDS = gql`
  query User($readUserInput: ReadUserInput) {
    user(readUserInput: $readUserInput) {
      businesses_ids
    }
  }
`

const GET_BUSINESSES = gql`
  query UserBusinesses($businessesIds: [String!]) {
    userBusinesses(businessesIds: $businessesIds) {
      id
      name
      thumbnail
    }
  }
`

export const useMyBusinesses = () => {
  const { data: userRes } = useQuery(GET_USER_BUSINESSES_IDS, {
    variables: { readUserInput: { email: 'miguel@miguel.com' } }
  })

  const [getBusinesses, { data }] = useLazyQuery<{
    userBusinesses: IBusiness[]
  }>(GET_BUSINESSES)

  useEffect(() => {
    userRes?.user &&
      getBusinesses({
        variables: { businessesIds: userRes.user.businesses_ids }
      })
  }, [getBusinesses, userRes])

  return { businesses: data?.userBusinesses }
}
