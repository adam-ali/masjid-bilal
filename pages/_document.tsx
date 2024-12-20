import { Html, Main, Head, NextScript } from 'next/document'
import React from 'react'

function _head() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Masjid Bilal Prestiwch prayer times" />

        <link rel="icon" href="/mosque.ico" />

      </Head>
      <body>
        {/* <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script> */}
        <Main />
        <NextScript />

        {/* <div id="fb-root"></div> */}
        {/* <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0"
          nonce="wgGXcbnO"
        ></script> */}
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0"
          nonce="random-nonce"
        ></script>
      </body>
    </Html>
  )
}

export default _head
