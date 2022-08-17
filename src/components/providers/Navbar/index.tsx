import { Style } from './styles'

import { ReactElement } from 'react'

const Navbar = () => <Style></Style>

const getNavbarLayout = (page: ReactElement) => (
  <>
    <Navbar />

    {page}
  </>
)

export { getNavbarLayout }

export default Navbar
