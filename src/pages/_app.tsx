import type { TAppPropsWithLayout } from 'types/next.types'

import { GlobalProvider } from 'components/providers/GlobalProvider'

const MyApp = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page)

  return getLayout(
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
