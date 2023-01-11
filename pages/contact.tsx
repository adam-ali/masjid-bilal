import { Divider, Typography } from '@mui/material'
import React from 'react'

type Props = {}

function contact({}: Props) {
  return (
    <>
      <Typography sx={{ mt: 2, mb: 1, color: 'secondary.main' }} variant="h2">
        CONTACT US
      </Typography>
      <Divider sx={{ bgcolor: 'secondary.light', height: 2, width: '152px', mb: 3 }} />

      <div className="p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5276.324660602146!2d-2.2645414675307904!3d53.51923804651718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb018a5d84123%3A0x1b66f589044a3b4a!2zTWFzamlkLWUtQmlsYWwg2YXYs9is2K8g2KjZhNin2YQ!5e0!3m2!1sen!2suk!4v1673465325083!5m2!1sen!2suk"
          width="100%"
          height="350"
          loading="lazy"
        ></iframe>
      </div>
      {/* <div>100 Bury New Road Prestwich M25 XXX</div> */}
    </>
  )
}

export default contact
