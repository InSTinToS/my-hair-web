import { Main } from '@app/components/templates/Main'

import { Navbar } from '@app/components/layouts/Navbar'

Main.getLayout = page => <Navbar withSearch>{page}</Navbar>

export default Main
