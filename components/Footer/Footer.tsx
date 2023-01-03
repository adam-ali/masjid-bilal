import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: '16px' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        CONTACT US
      </Typography>
      <br />
      <Typography variant="body1">52 Bury old Road</Typography>
      <Typography>Prestwich</Typography>
      <Typography>M250 0ER</Typography>
      <br />
      <Typography>07492 868984</Typography>
      <br />
      <Typography>info@masjidebilal.co.uk</Typography>
    </Box>
  )
}

export default Footer
