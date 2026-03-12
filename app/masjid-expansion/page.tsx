'use client'
import { Box, Button, Typography } from '@mui/material'

const DONATE_URL = 'https://www.paypal.com/ncp/payment/6SP9M7KN2F4U2'
// Replace with your YouTube video ID for the construction project video
const YOUTUBE_VIDEO_ID = 'RBN0GRKk9SY?si=YZ7OvXszLnS8BMmj'

const TOTAL_PLEDGED = 185_745
const TOTAL_RECEIVED = 22_868
const TOTAL_NEEDS = 535_000

const TOTAL_REQUIRED = 612_000 // 185,745 + 426,250

const receivedPercentage = (TOTAL_RECEIVED / TOTAL_REQUIRED) * 100
const pledgedRemainingPercentage = ((TOTAL_PLEDGED - TOTAL_RECEIVED) / TOTAL_REQUIRED) * 100
const pledgedTotalPercentage = (TOTAL_PLEDGED / TOTAL_REQUIRED) * 100

// Pledged as percentage of total needs (for pie chart)
const PLEDGED_PERCENTAGE = Math.min(100, (TOTAL_PLEDGED / TOTAL_NEEDS) * 100)

export default function MasjidExpansionPage() {
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      {/* Header Section - White background */}
      <Box sx={{ px: 2, py: 4, pt: 8 }}>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 38, sm: 48 },
            fontWeight: 700,
            color: 'text.primary',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Masjid Bilal
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 38, sm: 48 },
            fontWeight: 700,
            color: 'text.primary',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            mb: 3,
          }}
        >
          Construction <br /> Project
        </Typography>
        <div>
          <Button
            component="a"
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="secondary"
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(27, 72, 5, 0.3)',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(27, 72, 5, 0.4)',
              },
            }}
          >
            Donate
          </Button>
        </div>
      </Box>

      {/* Video Section - Full width */}
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          bgcolor: 'grey.300',
          aspectRatio: '16/9',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
          title="Masjid Bilal construction project"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </Box>

      {/* Phase 1A */}
      <Box sx={{ bgcolor: 'grey.200', py: 6, px: 3, my: 5, textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 22 },
            fontWeight: 700,
            color: 'text.primary',
            textAlign: 'center',
            lineHeight: 1.2,
            mb: 1,
          }}
        >
          PHASE 1A
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 24, sm: 28 },
            fontWeight: 600,
            color: 'secondary.main',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Excavation & Demolition
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', color: 'text.primary', mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 700, color: 'secondary.main' }}>
            25 more people
          </Box>
          {' to donate '}
          <Box component="span" sx={{ fontWeight: 700, color: 'secondary.main' }}>
            £1,450 each
          </Box>
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 4 }}>
          the cost of 1 truck load for demolition inclusive of excavation and loading
        </Typography>
        <Typography sx={{ color: 'text.primary' }}>Total</Typography>
        <Typography
          sx={{
            fontSize: { xs: 36, sm: 44 },
            fontWeight: 700,
            color: 'secondary.main',
            mb: 4,
          }}
        >
          £145,000
        </Typography>
        <Button
          component="a"
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="secondary"
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(27, 72, 5, 0.3)',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(27, 72, 5, 0.4)',
            },
          }}
        >
          Donate
        </Button>
      </Box>

      {/* Phase 1B */}
      <Box sx={{ bgcolor: 'grey.200', py: 6, px: 3, my: 5, textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 22 },
            fontWeight: 700,
            color: 'text.primary',
            textAlign: 'center',
            lineHeight: 1.2,
            mb: 1,
          }}
        >
          PHASE 1B
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 24, sm: 28 },
            fontWeight: 600,
            color: 'secondary.main',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Foundation & Substructure
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', color: 'text.primary', mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 700, color: 'secondary.main' }}>
            300 people
          </Box>
          {' to donate '}
          <Box component="span" sx={{ fontWeight: 700, color: 'secondary.main' }}>
            £1,300 each
          </Box>
        </Typography>

        <Typography sx={{ color: 'text.secondary', mt: 5 }}>Concrete foundation - £200,000</Typography>
        <Typography sx={{ color: 'text.secondary' }}>Retaining walls and sheet piling - £150,000</Typography>
        <Typography sx={{ color: 'text.secondary', mb: 5 }}>Drainage - £40,000</Typography>

        <Typography sx={{ color: 'text.primary' }}>Total</Typography>
        <Typography
          sx={{
            fontSize: { xs: 36, sm: 44 },
            fontWeight: 700,
            color: 'secondary.main',
            mb: 4,
          }}
        >
          £390,000
        </Typography>
        <Button
          component="a"
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="secondary"
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(27, 72, 5, 0.3)',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(27, 72, 5, 0.4)',
            },
          }}
        >
          Donate
        </Button>
      </Box>

      {/* Funding Progress Section */}
      <Box sx={{ bgcolor: 'grey.200', py: 5, px: 3, mb: 5 }}>
        <Typography
          sx={{
            fontSize: { xs: 28, sm: 32 },
            color: 'text.primary',
            textAlign: 'center',
            mb: 4,
            fontWeight: 700,
          }}
        >
          Funding progress
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Pie chart with keys and amounts combined */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <Box
              sx={{
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: `conic-gradient(
                  rgb(72, 160, 92) 0% ${receivedPercentage}%,
                  rgb(143, 207, 161) ${receivedPercentage}% ${pledgedTotalPercentage}%,
                  rgb(27, 72, 5) ${pledgedTotalPercentage}% 100%
                )`,
                flexShrink: 0,
              }}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                width: '100%',
              }}
            >
              {/* Total pledged */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, width: '100%' }}>
                <Box sx={{ width: 12, height: 12, borderRadius: 0.5, bgcolor: 'rgb(143, 207, 161)', flexShrink: 0 }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>Total pledged</Typography>
                  <Typography sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 700 }}>
                    £{TOTAL_PLEDGED.toLocaleString('en-GB')}
                  </Typography>
                </Box>
              </Box>

              {/* Total received */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, width: '100%' }}>
                <Box sx={{ width: 12, height: 12, borderRadius: 0.5, bgcolor: 'rgb(72, 160, 92)', flexShrink: 0 }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>Total received</Typography>
                  <Typography sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 700 }}>
                    £{TOTAL_RECEIVED.toLocaleString('en-GB')}
                  </Typography>
                </Box>
              </Box>

              {/* Remaining needs */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, width: '100%' }}>
                <Box sx={{ width: 12, height: 12, borderRadius: 0.5, bgcolor: 'rgb(27, 72, 5)', flexShrink: 0 }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>Remaining needs</Typography>
                  <Typography sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 700 }}>£426,250</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
