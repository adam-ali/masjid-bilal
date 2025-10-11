import type { AppProps } from 'next/app'
import { Container, ThemeProvider } from '@mui/material'
import DrawerAppBar from '../components/Layout/AppBar'
import Footer from '../components/Footer/Footer'
import { theme } from '../theme/theme'
import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Masjid Bilal</title>
        <link rel="icon" href="/mosque.ico" />
        <link rel="apple-touch-icon" href="/mosque.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-2VPES8G3LQ" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2VPES8G3LQ');
      `}
      </Script>

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
