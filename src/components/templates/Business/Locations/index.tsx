import { useLocations } from './logic'
import { Country, External, Form, Location, Street, Style } from './styles'

import { Map } from '@app/components/atoms/Icon/icons/Map'

import { ChangeableList } from '@app/components/molecules/ChangeableList'
import { Collapse } from '@app/components/molecules/Collapse'
import { Field } from '@app/components/molecules/Field'
import { ToggleHeader } from '@app/components/molecules/ToggleHeader'

export const Locations = () => {
  const { onCollapseChange, locations, open } = useLocations()

  return (
    <Style>
      <Collapse
        onOpenChange={onCollapseChange}
        trigger={
          <ToggleHeader
            open={open}
            title='Localizações'
            icon={<Map fill='secondary_contrast' size='md' />}
          />
        }
        content={
          <ChangeableList
            toAddContent={
              <Form>
                <Field grid placeholder='País' name='country' onlyBottom />

                <Field grid placeholder='Estado' name='state' onlyBottom />

                <Field grid placeholder='Rua' name='street' onlyBottom />

                <Field grid placeholder='Número' name='number' onlyBottom />

                <Field
                  grid
                  onlyBottom
                  name='complement'
                  placeholder='Complemento'
                />

                <Field grid placeholder='Link no mapa' name='link' onlyBottom />
              </Form>
            }
            items={locations?.map(
              ({ city, country, street, number, link }, index) => (
                <Location key={index}>
                  <Country>
                    {country}, {city}
                  </Country>

                  <Street>
                    {street}, {number}
                  </Street>

                  {link && <External size='sm' fill='info' href={link} />}
                </Location>
              )
            )}
          />
        }
      />
    </Style>
  )
}
