import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: '16px' }} display={'grid'}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        CONTACT US
      </Typography>
      <br />
      <Typography variant="body1">52 Bury Old Road</Typography>
      <Typography>Prestwich</Typography>
      <Typography>M25 0ER</Typography>
      <br />
      <Typography>07912041474 (Text Message/WhatsApp only)</Typography>
      <Typography>0161 740 2125</Typography>
      <br />
      <Typography>
        <a href="mailto:info@masjidebilal.co.uk">info@masjidebilal.co.uk</a>
      </Typography>

      <Typography variant="body2" className="mt-4">
        <a className="hover:underline hover:cursor-pointer" onClick={() => router.push('/privacy-policy')}>
          Privacy policy
        </a>
      </Typography>
    </Box>
  )
}

export default Footer
