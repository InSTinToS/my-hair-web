/* eslint-disable @next/next/no-html-link-for-pages */
import { useMyBusinesses } from './logic'
import { AddCard, Style } from './styles'

import { Plus } from '@app/components/atoms/Icon/icons/Plus'

import { BusinessCard } from '@app/components/molecules/BusinessCard'

import { TNextPageWithLayout } from '@app/types/next.types'

export const MyBusinesses: TNextPageWithLayout = () => {
  const { businesses } = useMyBusinesses()

  return (
    <Style>
      <ul>
        {businesses?.map((item: any) => (
          <BusinessCard item={item} key={item.id} />
        ))}

        <AddCard>
          <a href='/business/create'>
            <Plus size='md' stroke='tertiary_contrast' />
            <span>Adicionar</span>
          </a>
        </AddCard>
      </ul>
    </Style>
  )
}
