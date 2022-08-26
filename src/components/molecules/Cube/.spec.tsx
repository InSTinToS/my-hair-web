import { Cube } from '.'
import { render } from '@testing-library/react'
import React from 'react'

describe('Cube', () => {
  it('should be able to render', () => {
    const { getAllByRole } = render(<Cube back='' front='' left='' right='' />)

    expect(getAllByRole('listitem')[0]).toBeInTheDocument()
  })
})
