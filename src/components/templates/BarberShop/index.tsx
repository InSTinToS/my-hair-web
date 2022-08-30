import {
  Button,
  Field,
  Header,
  Location,
  Map,
  Plus,
  Styles,
  Title
} from './styles'

export const BarberShop = () => {
  return (
    <Styles>
      <Location>
        <Header>
          <Map />

          <Title>Adicionar Localização</Title>

          <Plus />
        </Header>

        <Field placeholder='País' name='country' />

        <Field placeholder='Estado' name='state' />

        <Field placeholder='Rua' name='street' />

        <Field placeholder='Número' name='number' />

        <Field placeholder='Link no mapa' name='link' />

        <Button>Adicionar/alterar</Button>
      </Location>
    </Styles>
  )
}
