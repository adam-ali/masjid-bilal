'use client'
import { Box, Button, Typography } from '@mui/material'

const DONATE_URL = 'https://www.paypal.com/ncp/payment/6SP9M7KN2F4U2'
// Replace with your YouTube video ID for the construction project video
const YOUTUBE_VIDEO_ID = 'RBN0GRKk9SY?si=YZ7OvXszLnS8BMmj'

const TOTAL_PLEDGED = 104_645
const TOTAL_RECEIVED = 13_908.35
const TOTAL_NEEDS = 395_000

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
          Construction Project
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

      {/* Phase 1 Section - Light gray background */}
      <Box sx={{ bgcolor: 'grey.200', py: 6, px: 3, my: 5 }}>
        <Typography
          sx={{
            fontSize: { xs: 28, sm: 32 },
            fontWeight: 700,
            color: 'text.primary',
            textAlign: 'center',
            lineHeight: 1.2,
            mb: 4,
          }}
        >
          PHASE 1
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 24 },
            fontWeight: 600,
            color: 'text.primary',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Excavation, foundations
          <br />& relocation
        </Typography>
        <Box component="ol" sx={{ m: 0, pl: 4, maxWidth: 560, mx: 'auto' }}>
          <Typography component="li" sx={{ mb: 2, color: 'text.primary', fontSize: '1rem' }}>
            Excavation of the ground
          </Typography>
          <Typography component="li" sx={{ mb: 2, color: 'text.primary', fontSize: '1rem' }}>
            Demolition of the front part of the current building
          </Typography>
          <Typography component="li" sx={{ mb: 2, color: 'text.primary', fontSize: '1rem' }}>
            Retaining walls and foundation
          </Typography>
          <Typography component="li" sx={{ color: 'text.primary', fontSize: '1rem' }}>
            Preparation of new musalla and madrasah and relocation
          </Typography>
        </Box>
      </Box>

      {/* Immediate needs Section  */}
      <Box sx={{ bgcolor: 'grey.200', py: 6, px: 3, my: 5, textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: { xs: 28, sm: 32 },
            fontWeight: 700,
            color: 'text.primary',
            mb: 4,
          }}
        >
          Immediate needs
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', color: 'text.primary', mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 700, color: 'secondary.main' }}>
            100 people
          </Box>
          {' to donate '}
          <Box component="span" sx={{ fontWeight: 700, color: 'secondary.main' }}>
            £1,450 each
          </Box>
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 4 }}>
          the cost of 1 truck load for demolition inclusive of excavation and loading
        </Typography>
        <Typography sx={{ color: 'text.primary', mb: 1 }}>Foundations & Substructure</Typography>
        <Typography
          sx={{
            fontSize: { xs: 36, sm: 44 },
            fontWeight: 700,
            color: 'text.primary',
            mb: 4,
          }}
        >
          £395,000.00
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
      <Box sx={{ bgcolor: 'grey.200', py: 5, px: 3 }}>
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
                background: `conic-gradient(rgb(143, 207, 161) 0% ${PLEDGED_PERCENTAGE}%, rgb(27, 72, 5) ${PLEDGED_PERCENTAGE}% 100%)`,
                flexShrink: 0,
              }}
            />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: { xs: 'center', sm: 'flex-start' } }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: 0.5, bgcolor: 'rgb(143, 207, 161)', flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>Total pledged</Typography>
                  <Typography sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 700, color: 'text' }}>
                    £{TOTAL_PLEDGED.toLocaleString('en-GB')}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: 0.5, bgcolor: 'rgb(27, 72, 5)', flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>Remaining needs</Typography>
                  <Typography sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 700, color: 'text.primary' }}>
                    £{(TOTAL_NEEDS - TOTAL_PLEDGED).toLocaleString('en-GB', { minimumFractionDigits: 2 })}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
