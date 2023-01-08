import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: '16px' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        CONTACT US
      </Typography>
      <br />
      <Typography variant="body1">52 Bury Old Road</Typography>
      <Typography>Prestwich</Typography>
      <Typography>M25 0ER</Typography>
      <br />
      <Typography>07912041474</Typography>
      <Typography>0161 740 2125</Typography>
      <br />
      <Typography>info@masjidebilal.co.uk</Typography>
    </Box>
  )
}

export default Footer
