'use client'
import { Box, Typography, Button, Paper, Link, Stack } from '@mui/material'
import MapIcon from '@mui/icons-material/Map'
import DirectionsIcon from '@mui/icons-material/Directions'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import SmsIcon from '@mui/icons-material/Sms'
import EmailIcon from '@mui/icons-material/Email'

function contact() {
  const address = '52 Bury Old Road, Prestwich, Manchester M25 0ER'
  // A URL-friendly version for the directions link
  const addressUrl = encodeURIComponent(address)

  return (
    <Paper elevation={1} sx={{ overflow: 'hidden', maxWidth: 800, margin: 'auto', borderRadius: 0 }}>
      <Box
        sx={{
          bgcolor: 'secondary.main',
          color: 'secondary.contrastText',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        {/* <MapIcon fontSize="large" /> */}
        <Typography variant="h3" sx={{ fontWeight: 'normal' }}>
          GET IN TOUCH
        </Typography>
      </Box>

      <Box sx={{ p: 2 }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
            <LocationOnIcon color="secondary" sx={{ mt: 0.5 }} />
            <Typography variant="body1">{address}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <PhoneIcon color="secondary" />
            <Link href="tel:01617402125" color="inherit" underline="hover">
              <Typography variant="body1">0161 740 2125</Typography>
            </Link>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <SmsIcon color="secondary" />
            <Link href="sms:+447874476885" color="inherit" underline="hover">
              <Typography variant="body1">+44 7874 476885 (text messages only)</Typography>
            </Link>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <EmailIcon color="secondary" />
            <Link href="mailto:info@masjidebilal.co.uk" color="inherit" underline="hover">
              <Typography variant="body1">info@masjidebilal.co.uk</Typography>
            </Link>
          </Stack>
        </Stack>
      </Box>

      {/* === THE REAL, LIVE MAP! === */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5276.324660602146!2d-2.2645414675307904!3d53.51923804651718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb018a5d84123%3A0x1b66f589044a3b4a!2zTWFzamlkLWUtQmlsYWwg2YXYs9is2K8g2KjZhNin2YQ!5e0!3m2!1sen!2suk!4v1673465325083!5m2!1sen!2suk"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DirectionsIcon />}
          href={`https://www.google.com/maps/dir/?api=1&destination=${addressUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </Button>
      </Box>
    </Paper>
  )
}

export default contact
