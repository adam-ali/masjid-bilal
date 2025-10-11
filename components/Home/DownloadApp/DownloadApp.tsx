import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Image from 'next/image'

export default function DownloadApp() {
  return (
    <>
      <Box sx={{ bgcolor: 'secondary.main', mt: '0px', p: '16px' }}>
        <Typography color={'white'} variant="h2">
          DOWNLOAD APP
        </Typography>
      </Box>
      <Box
        sx={{
          p: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
        my={3}
      >
        <Typography variant="h2">View prayer times in App</Typography>
        <Typography variant="body2">View prayer times easier through our app and widgets. Download here!</Typography>

        <Link href="https://apps.apple.com/gb/app/masjid-e-bilal/id6479962497" target="_blank">
          <Image src="/download.svg" width={135} height={40} className="my-4" alt="Download on the App Store" />
        </Link>

        <Image
          src="/app_download.png"
          width={808}
          height={818}
          alt="Masjid e Bilal mobile App"
          className="w-full h-auto self-center" // <-- THE MAGIC! ✨
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // <-- PERFORMANCE BOOST!
        />
      </Box>
    </>
  )
}
