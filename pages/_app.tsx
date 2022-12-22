import React from 'react'
import { AppProps } from 'next/app'
import { Container, ThemeProvider } from '@mui/material'
import DrawerAppBar from '../components/MainLayout/AppBar/AppBar'
import Footer from '../components/Footer/Footer'
import { theme } from '../theme/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
