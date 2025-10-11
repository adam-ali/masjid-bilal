import React from 'react'
import { Box, Button, Link, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import PolicyIcon from '@mui/icons-material/Policy'

const Footer = () => {
  const router = useRouter()
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 4 }}>
      <Stack spacing={3}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          CONTACT US
        </Typography>

        <Stack spacing={2}>
          <Stack direction="row" alignItems="flex-start" spacing={2}>
            <LocationOnIcon sx={{ mt: 0.5 }} />
            <Box>
              <Typography variant="body1">52 Bury Old Road</Typography>
              <Typography variant="body1">Prestwich, M25 0ER</Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <PhoneIcon />
            <Link href="tel:01617402125" color="inherit" underline="hover">
              <Typography variant="body1">0161 740 2125</Typography>
            </Link>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <EmailIcon />
            <Link href="mailto:info@masjidebilal.co.uk" color="inherit" underline="hover">
              <Typography variant="body1">info@masjidebilal.co.uk</Typography>
            </Link>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
          <PolicyIcon />
          <Link
            component="button"
            variant="body2"
            onClick={() => router.push('/privacy-policy')}
            color="inherit"
            underline="hover"
            sx={{ textAlign: 'left' }}
          >
            Privacy Policy
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer
