import { useLocations } from './logic'
import {
  AddButton,
  AddedList,
  CancelButton,
  Footer,
  Form,
  Label,
  SubmitButton
} from './styles'
import { Style } from './styles'

import { Location } from './Location'

import { Close } from '@app/components/atoms/Icon/icons/Close'
import { Map } from '@app/components/atoms/Icon/icons/Map'
import { Plus } from '@app/components/atoms/Icon/icons/Plus'

import { Collapse } from '@app/components/molecules/Collapse'
import { Field } from '@app/components/molecules/Field'
import { ToggleHeader } from '@app/components/molecules/ToggleHeader'

import { Item } from '@app/components/templates/Business/Locations/Item'

export const Locations = () => {
  const {
    open,
    show,
    items,
    register,
    onAddClick,
    onFormSubmit,
    onCloseClick,
    onCancelClick,
    onCollapseChange
  } = useLocations()

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
          <>
            <AddedList>
              {items.map(item => (
                <Item key={item.id} id={item.id} onCloseClick={onCloseClick}>
                  <Location location={item} />
                </Item>
              ))}
            </AddedList>

            <Footer show={show}>
              {show && (
                <Form onSubmit={onFormSubmit}>
                  <Field
                    grid
                    onlyBottom
                    placeholder='País'
                    {...register('country')}
                  />

                  <Field
                    grid
                    onlyBottom
                    placeholder='Estado'
                    {...register('state')}
                  />

                  <Field
                    grid
                    onlyBottom
                    placeholder='Rua'
                    {...register('street')}
                  />

                  <Field
                    grid
                    onlyBottom
                    placeholder='Número'
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
                    onlyBottom
                    placeholder='Link no mapa'
                    {...register('link')}
                  />

                  <CancelButton
                    theme='error'
                    radius='none'
                    onClick={onCancelClick}
                  >
                    <Close size='sm' fill='secondary_contrast' />

                    <Label>Cancelar</Label>
                  </CancelButton>

                  <SubmitButton radius='none' theme='success'>
                    <Plus size='sm' stroke='secondary_contrast' />

                    <Label>Adicionar</Label>
                  </SubmitButton>
                </Form>
              )}

              {!show && (
                <AddButton onClick={onAddClick} radius='none' theme='success'>
                  <Plus size='sm' stroke='secondary_contrast' />

                  <Label>Adicionar</Label>
                </AddButton>
              )}
            </Footer>
          </>
        }
      />
    </Style>
  )
}
