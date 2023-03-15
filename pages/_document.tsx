import { Html, Main, Head, NextScript } from 'next/document'
import React from 'react'

type Props = {}

function _head({}: Props) {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Masjid Bilal Prestiwch prayer times" />
        <link rel="icon" href="/mosque.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0"
          nonce="random-nonce"
        ></script>
      </body>
    </Html>
  )
}

export default _head
