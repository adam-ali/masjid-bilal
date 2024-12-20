import { Box, Typography } from '@mui/material'
import React from 'react'
// import { GoogleMapsEmbed } from '@next/third-parties/google'

function contact() {
  return (
    <>
      <Box sx={{ bgcolor: 'secondary.main', display: 'flex', mb: 0, justifyContent: 'space-between', p: '16px' }}>
        <Typography color={'white'} sx={{ fontWeight: 'bold' }} variant="h2">
          CONTACT US
        </Typography>
      </Box>
      <div className="p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5276.324660602146!2d-2.2645414675307904!3d53.51923804651718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb018a5d84123%3A0x1b66f589044a3b4a!2zTWFzamlkLWUtQmlsYWwg2YXYs9is2K8g2KjZhNin2YQ!5e0!3m2!1sen!2suk!4v1673465325083!5m2!1sen!2suk"
          width="100%"
          height="350"
          loading="lazy"
        ></iframe>
      </div>
    </>
  )
}

export default contact
