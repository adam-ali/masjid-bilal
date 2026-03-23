'use client'

import { Box, Button, Typography } from '@mui/material'
import { trackNavigateToDonate } from '../../services/analytics'
import { usePathname, useRouter } from 'next/navigation'

const donateLinkButtonSx = {
  display: 'inline-flex',
  alignItems: 'baseline',
  p: 0,
  minWidth: 0,
  m: 0,
  textTransform: 'none' as const,
  font: 'inherit',
  fontSize: 'inherit',
  fontWeight: 500,
  lineHeight: 'inherit',
  letterSpacing: 'inherit',
  verticalAlign: 'baseline',
  color: '#60a5fa',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  borderRadius: 0,
  boxShadow: 'none',
  '&:hover': {
    bgcolor: 'transparent',
    boxShadow: 'none',
    color: '#93c5fd',
    textDecoration: 'underline',
  },
  '&:active': {
    bgcolor: 'transparent',
    boxShadow: 'none',
  },
  '&.Mui-focusVisible': {
    outline: '2px solid #60a5fa',
    outlineOffset: 2,
    bgcolor: 'transparent',
  },
}

function BannerSegment() {
  const location = usePathname()
  const router = useRouter()
  const goToDonate = () => {
    trackNavigateToDonate(location)
    router.push('/masjid-expansion')
  }
  return (
    <Typography
      component="span"
      sx={{
        whiteSpace: 'nowrap',
        px: 4,
        fontSize: { xs: '0.875rem', sm: '0.9375rem' },
        fontWeight: 500,
        color: 'white',
      }}
    >
      <Button component="span" variant="text" disableRipple onClick={() => goToDonate()} sx={donateLinkButtonSx}>
        Donate
      </Button>
      {' towards the Masjid Bilal New Construction Project'}
    </Typography>
  )
}

export default function InfoBanner() {
  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        backgroundColor: '#1b4805',
        color: 'white',
        py: 1,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 20s linear infinite',
          '@keyframes marquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        <BannerSegment />
        <BannerSegment />
      </Box>
    </Box>
  )
}
