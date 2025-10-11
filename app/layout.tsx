// app/layout.tsx
'use client'
import { Container } from '@mui/material'
import DrawerAppBar from '../components/Layout/AppBar'
import Footer from '../components/Footer/Footer'
import { Providers } from './providers' // Import our new client provider
import { GoogleAnalytics } from '@next/third-parties/google' // The new, easy way!
import Script from 'next/script'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* 2. PROVIDERS & LAYOUT! Everything from _app.tsx's body goes here. */}
        <Providers>
          <DrawerAppBar />
          <Container maxWidth="md" sx={{ px: '0' }} className="page-container">
            <div className="content-wrapper">
              {children} {/* This is where your page content will go! */}
            </div>
            <Footer />
          </Container>
        </Providers>

        {/* 3. SCRIPT UPGRADES! All scripts are handled cleanly. */}
        <div id="fb-root"></div>
        <GoogleAnalytics gaId="G-2VPES8G3LQ" />
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0"
          nonce="random-nonce" // Consider managing nonces properly if you have a CSP
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
