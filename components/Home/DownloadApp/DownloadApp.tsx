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
          <Image src="/download_store.png" width={135} height={40} className="my-4" alt="Download on the App Store" />
        </Link>

        <Image
          src="/app_download.png"
          className="self-center"
          width={230}
          height={208}
          sizes="(min-width: 768px) 80px, 60px"
          layout="responsive"
          alt="Picture of the Masjid e Bilal App"
        />
      </Box>
    </>
  )
}
