import { globalStyles } from '@app/styles'

import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    globalStyles()

    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />

          <link
            rel='preconnect'
            crossOrigin='true'
            href='https://fonts.gstatic.com'
          />

          <link
            rel='stylesheet'
            href='https: //fonts.googleapis.com/css2? family= Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900 & display=swap'
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
