/* eslint-disable @next/next/no-img-element */
import { useMain } from './logic'
import { Style } from './styles'

import { BusinessCard } from '@app/components/molecules/BusinessCard'

import { TNextPageWithLayout } from '@app/types/next.types'

export const Main: TNextPageWithLayout = () => {
  const { businesses, loading } = useMain()

  return (
    <>
      <Style>
        {loading ? (
          <div>Carregando</div>
        ) : (
          <ul>
            {businesses?.map(item => (
              <BusinessCard item={item} key={item.id} />
            ))}
          </ul>
        )}
      </Style>
    </>
  )
}
