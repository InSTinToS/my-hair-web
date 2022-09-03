import { Form, LocationsList, Style } from './styles'

import { AddSection } from '../../AddSection'
import { Field } from '../../AddSection/styles'
import { Header } from '../../Header'
import { Location } from './Location'
import { ILocationProps } from './Location/types'

import { Map } from '@app/components/atoms/Icon/icons/Map'

import { Collapse } from '@app/components/molecules/Collapse'
import { ICollapseProps } from '@app/components/molecules/Collapse/types'

import { useAnimationControls } from 'framer-motion'

const fakeLocations: ILocationProps['location'][] = [
  {
    city: 'SP',
    link: 'Link',
    number: 22,
    country: 'Brasil',
    street: 'Rua Mackenzie'
  },
  {
    city: 'SP',
    link: 'Link',
    number: 22,
    country: 'Brasil',
    street: 'Rua Mackenzie'
  }
]

export const Locations = () => {
  const controls = useAnimationControls()

  const onCollapseChange: ICollapseProps['onOpenChange'] = open => {
    controls.start({ rotate: open ? -180 : 0, transition: { duration: 0.3 } })
  }

  return (
    <Style>
      <Collapse
        onOpenChange={onCollapseChange}
        trigger={
          <Header
            controls={controls}
            title='Localizações'
            icon={<Map fill='secondary_contrast' size='md' />}
          />
        }
        content={
          <LocationsList>
            {fakeLocations.map((location, index) => (
              <Location location={location} key={index} />
            ))}

            <AddSection>
              <Form>
                <Field grid placeholder='País' name='country' onlyBottom />

                <Field grid placeholder='Estado' name='state' onlyBottom />

                <Field grid placeholder='Rua' name='street' onlyBottom />

                <Field grid placeholder='Número' name='number' onlyBottom />

                <Field grid placeholder='Link no mapa' name='link' onlyBottom />
              </Form>
            </AddSection>
          </LocationsList>
        }
      />
    </Style>
  )
}
