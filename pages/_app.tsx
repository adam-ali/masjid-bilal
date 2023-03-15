import React from 'react'
import { AppProps } from 'next/app'
import { Container, ThemeProvider } from '@mui/material'
import DrawerAppBar from '../components/MainLayout/AppBar/AppBar'
import Footer from '../components/Footer/Footer'
import { theme } from '../theme/theme'
import Head from 'next/head'
import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2VPES8G3LQ" />
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2VPES8G3LQ');
      `}
        </Script>
        <title>Masjid Bilal</title>
      </Head>

      <ThemeProvider theme={theme}>
        <DrawerAppBar />
        <Container maxWidth="md" sx={{ px: '0' }} className="page-container">
          <div className="content-wrapper">
            <Component {...pageProps} />
          </div>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp
