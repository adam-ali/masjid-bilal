'use client'

import Link from 'next/link'
import { Box, Typography } from '@mui/material'

const bannerText = 'Donate towards the Masjid Bilal New Construction Project'
const donateUrl = '/masjid-expansion'

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
        <Link
          href={donateUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
        >
          <Typography
            component="span"
            sx={{
              whiteSpace: 'nowrap',
              px: 4,
              fontSize: { xs: '0.875rem', sm: '0.9375rem' },
              fontWeight: 500,
            }}
          >
            <Box
              component="span"
              sx={{
                color: '#60a5fa',
                textDecoration: 'underline',
                '&:hover': { opacity: 0.9 },
              }}
            >
              Donate
            </Box>
            {' towards the Masjid Bilal New Construction Project'}
          </Typography>
        </Link>
        {/* Duplicate for seamless loop */}
        <Link
          href={donateUrl}
          // target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
        >
          <Typography
            component="span"
            sx={{
              whiteSpace: 'nowrap',
              px: 4,
              fontSize: { xs: '0.875rem', sm: '0.9375rem' },
              fontWeight: 500,
            }}
          >
            <Box
              component="span"
              sx={{
                color: '#60a5fa',
                textDecoration: 'underline',
                '&:hover': { opacity: 0.9 },
              }}
            >
              Donate
            </Box>
            {' towards the Masjid Bilal New Construction Project'}
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}
