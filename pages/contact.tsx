import { Box, Typography, Button, Paper } from '@mui/material'
import MapIcon from '@mui/icons-material/Map'
import DirectionsIcon from '@mui/icons-material/Directions'

// import { GoogleMapsEmbed } from '@next/third-parties/google'
const GMK = `1m18!1m12!1m3!1d5276.324660602146!2d-2.2645414675307904!3d53.51923804651718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb018a5d84123%3A0x1b66f589044a3b4a!2zTWFzamlkLWUtQmlsYWwg2YXYs9is2K8g2KjZhNin2YQ!5e0!3m2!1sen!2suk!4v1673465325083!5m2!1sen!2suk`
function contact() {
  const address = '52 Bury Old Road, Prestwich, Manchester M25 0ER'
  // A URL-friendly version for the directions link
  const addressUrl = encodeURIComponent(address)

  return (
    <Paper elevation={4} sx={{ overflow: 'hidden', maxWidth: 800, margin: 'auto' }}>
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
        <MapIcon fontSize="large" />
        <Typography variant="h3" sx={{ fontWeight: 'normal' }}>
          FIND US
        </Typography>
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
