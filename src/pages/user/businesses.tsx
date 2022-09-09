import { MyBusinesses } from '@app/components/templates/MyBusinesses'

import { Navbar } from '@app/components/layouts/Navbar'

MyBusinesses.getLayout = page => <Navbar withSearch>{page}</Navbar>

export default MyBusinesses
