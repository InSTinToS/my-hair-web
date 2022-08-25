import { Field } from '.'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { BiUser } from 'react-icons/bi'

describe('Field', () => {
  it('should be able to render with correct label', () => {
    const labelText = 'Senha'

    const { getByLabelText } = render(
      <Field name='password' label={{ text: labelText }} />
    )

    expect(getByLabelText(labelText)).toBeInTheDocument()
  })

  it('should be able to render with correct label icon', () => {
    const labelIcon = <BiUser aria-label='Senha' />

    const { getByLabelText } = render(
      <Field name='password' label={{ icon: labelIcon }} />
    )

    expect(getByLabelText('Senha')).toBeInTheDocument()
  })

  it('should be able to change between text and password using eye button', async () => {
    const { getByRole, getByLabelText } = render(
      <Field type='password' name='password' label={{ text: 'Senha' }} />
    )

    const input = getByLabelText('Senha')
    const eye = getByRole('button', { name: 'Mostrar senha' })

    expect(eye).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')

    userEvent.click(eye)

    await waitFor(() => expect(input).toHaveAttribute('type', 'text'))
  })
})
