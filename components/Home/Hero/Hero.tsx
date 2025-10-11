import React from 'react'
import { Box, maxHeight } from '@mui/system'
import { Button, Stack, Typography } from '@mui/material'
import { HandCoins } from 'lucide-react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'

const hadithNarration = 'The Messenger of Allah (ﷺ) said: '
const hadith = ' “The prayer in congregation is twenty-seven times more rewarding than the prayer offered alone.”'
const Hero = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        position: 'relative', 
        // minHeight: { xs: 300, md: 350 }, 
        height: 300,

        overflow: 'hidden',
        color: 'white',
        // boxShadow: 5,
      }}
    >
      <Image
        src="/mBilal.png"
        alt="A beautiful view of the Masjid"
        fill
        style={{ objectFit: 'cover', zIndex: 0 }}
        priority // Helps load this important image faster
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0, 20, 0, 0.9) 0%, rgba(0, 20, 0, 0.2) 100%)',
          zIndex: 1,
        }}
      />

      <Stack
        spacing={1}
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          minHeight: { xs: 350, md: 400 },
          p: { xs: 2, md: 4 },
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <FormatQuoteIcon sx={{ fontSize: 48, color: 'secondary.light' }} /> */}

        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {hadithNarration}
        </Typography>

        <Typography variant="h5" sx={{ fontStyle: 'italic', fontWeight: 500, maxWidth: '70ch' }}>
          {hadith}
        </Typography>

        {/* <Box> */}
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            [Ṣaḥīḥ al-Bukhārī, Ṣaḥīḥ Muslim]
          </Typography>
        {/* </Box> */}

        <Button
          variant="contained"
          size="large"
          onClick={() => router.push('donations')}
          color="secondary"
          startIcon={<VolunteerActivismIcon />}
          sx={{
            // mt: 2,
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            textTransform: 'none',
            fontSize: '1rem',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease 0s',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0px 15px 20px rgba(46, 229, 157, 0.4)',
            },
          }}
        >
          Donate to the Masjid
        </Button>
      </Stack>
    </Box>
  )
}

export default Hero
