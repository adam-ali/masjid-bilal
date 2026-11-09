import React from 'react'
import Image from 'next/image'
import { Box, IconButton, Link, Stack, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import SmsIcon from '@mui/icons-material/Sms'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'

const links = [
  ['Home', '/'],
  ['Prayer Times', '/prayer-times'],
  ['About', '/about'],
  ['Donations', '/donations'],
  ['Masjid Expansion', '/masjid-expansion'],
  ['Contact', '/contact'],
]

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 4 }}>
      <Stack spacing={3}>
        <Stack spacing={1} sx={{ alignItems: 'flex-start' }}>
          <Image src="/Masjid_Bilal_Logo.png" alt="Masjid Bilal" width={120} height={60} style={{ height: 'auto' }} />
          {/* <IconButton
            href="https://www.facebook.com/MasjideBilalPrestwich"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Masjid E Bilal on Facebook"
            color="inherit"
            sx={{ p: 0 }}
          >
            <FacebookIcon />
          </IconButton> */}
        </Stack>

        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          CONTACT US
        </Typography>

        <Stack spacing={2} sx={{ opacity: 0.75 }}>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
            <LocationOnIcon sx={{ mt: 0.5 }} />
            <Box>
              <Typography variant="body1">52 Bury Old Road</Typography>
              <Typography variant="body1">Prestwich, M25 0ER</Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <PhoneIcon />
            <Link href="tel:01617402125" color="inherit" underline="hover">
              <Typography variant="body1">0161 740 2125</Typography>
            </Link>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <SmsIcon />
            <Link href="sms:+447874476885" color="inherit" underline="hover">
              <Typography variant="body1">+44 7874 476885 (text messages only)</Typography>
            </Link>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <EmailIcon />
            <Link href="mailto:info@masjidebilal.co.uk" color="inherit" underline="hover">
              <Typography variant="body1">info@masjidebilal.co.uk</Typography>
            </Link>
          </Stack>
        </Stack>

        <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 2 }}>
          QUICK LINKS
        </Typography>

        <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 3, opacity: 0.75 }}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} color="inherit" underline="hover">
              <Typography variant="body1">{label}</Typography>
            </Link>
          ))}
        </Stack>

        <Link href="/privacy-policy" color="inherit" underline="hover" sx={{ fontSize: '0.75rem' }}>
          Privacy Policy
        </Link>
      </Stack>
    </Box>
  )
}

export default Footer
