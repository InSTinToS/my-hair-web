import { useReadBusinesses } from '@app/services/hooks/business/readBusinesses'

export const useMain = () => {
  const { data, isFetching } = useReadBusinesses()

  return { businesses: data?.businesses, loading: isFetching }
}
