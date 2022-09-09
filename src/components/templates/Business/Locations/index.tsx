import { useLocations } from './logic'
import { Country, External, Form, Location, Street, Style } from './styles'

import { Map } from '@app/components/atoms/Icon/icons/Map'

import { ChangeableList } from '@app/components/molecules/ChangeableList'
import { Collapse } from '@app/components/molecules/Collapse'
import { Field } from '@app/components/molecules/Field'
import { ToggleHeader } from '@app/components/molecules/ToggleHeader'

export const Locations = () => {
  const { onFormSubmit, onCollapseChange, locations, open, register } =
    useLocations()

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
            onAddClick={onFormSubmit}
            toAddContent={
              <Form onSubmit={onFormSubmit}>
                <Field
                  grid
                  placeholder='País'
                  onlyBottom
                  {...register('country')}
                />

                <Field
                  grid
                  placeholder='Estado'
                  onlyBottom
                  {...register('state')}
                />

                <Field
                  grid
                  placeholder='Rua'
                  onlyBottom
                  {...register('street')}
                />

                <Field
                  grid
                  placeholder='Número'
                  onlyBottom
                  {...register('number')}
                />

                <Field
                  grid
                  onlyBottom
                  placeholder='Complemento'
                  {...register('complement')}
                />

                <Field
                  grid
                  placeholder='Link no mapa'
                  onlyBottom
                  {...register('link')}
                />
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
