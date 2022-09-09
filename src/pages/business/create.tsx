import { Business } from '@app/components/templates/Business'

import { Navbar } from '@app/components/layouts/Navbar'

Business.getLayout = page => <Navbar>{page}</Navbar>

export default Business
