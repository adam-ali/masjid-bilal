'use client'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { Box, Button, Chip, Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'
import { useEffect, useState } from 'react'
import { trackDonateClick } from '../../services/analytics'
import { ConstructionFunds, fetchSheetData } from '../../services/sheetsService'

const DONATE_URL = 'https://www.paypal.com/ncp/payment/6SP9M7KN2F4U2'
const YOUTUBE_VIDEO_ID = 'RBN0GRKk9SY?si=YZ7OvXszLnS8BMmj'

const TOTAL_PLEDGED_local = 185_745
const TOTAL_RECEIVED_local = 22_868
const TOTAL_REQUIRED = 612_000

const formatCurrency = (value: number | string) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0)

export default function MasjidExpansionPage() {
  const [funds, setFunds] = useState<ConstructionFunds | null>(null)
  useEffect(() => {
    fetchSheetData().then(setFunds)
  }, [])

  const openConstructionDonate = (cta_id: string) => () => {
    trackDonateClick(cta_id)
    window.open(DONATE_URL, '_blank', 'noopener,noreferrer')
  }

  const TOTAL_PLEDGED = funds?.totalPledged || TOTAL_PLEDGED_local
  const TOTAL_RECEIVED = funds?.totalReceived || TOTAL_RECEIVED_local
  const REMAINING_NEEDS = funds?.remainingNeeds || TOTAL_REQUIRED - TOTAL_PLEDGED_local

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
            type="button"
            variant="contained"
            color="secondary"
            onClick={openConstructionDonate('header_donate')}
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

      {/* Phase 1A — fully raised */}
      <Box
        sx={{
          mx: 2,
          my: 5,
          py: { xs: 5, sm: 6 },
          px: { xs: 2.5, sm: 4 },
          textAlign: 'center',
          borderRadius: 3,
          border: '2px solid',
          borderColor: 'secondary.main',
          bgcolor: 'rgba(72, 160, 92, 0.08)',
          backgroundImage:
            'linear-gradient(165deg, rgba(143, 207, 161, 0.35) 0%, rgba(255,255,255,0.92) 45%, rgba(72, 160, 92, 0.06) 100%)',
          boxShadow: '0 8px 32px rgba(27, 72, 5, 0.12)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: { xs: 1, sm: 1.5 },
            mb: 0.5,
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: { xs: 18, sm: 22 },
              fontWeight: 700,
              color: 'text.primary',
              letterSpacing: '0.06em',
            }}
          >
            PHASE 1A
          </Typography>
          <Chip
            icon={<CheckCircleRoundedIcon sx={{ fontSize: '1.1rem !important' }} />}
            label="Fully raised"
            size="small"
            sx={{
              fontWeight: 700,
              fontSize: '0.8rem',
              bgcolor: 'secondary.main',
              color: 'common.white',
              '& .MuiChip-icon': { color: 'common.white' },
              height: 28,
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 24, sm: 28 },
            fontWeight: 600,
            color: 'secondary.dark',
            mb: 2,
          }}
        >
          Excavation & Demolition
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1.05rem', sm: '1.15rem' },
            color: 'text.primary',
            maxWidth: 520,
            mx: 'auto',
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          Alhamdulillah — the full target for Phase 1A has been pledged and raised. Thank you to everyone who
          contributed.
        </Typography>
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.5,
            mb: 3,
            py: 2,
            px: 3,
            borderRadius: 2,
            bgcolor: 'rgba(255,255,255,0.75)',
            border: '1px solid',
            borderColor: 'rgba(72, 160, 92, 0.35)',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 40 },
              fontWeight: 800,
              color: 'secondary.dark',
              letterSpacing: '-0.02em',
            }}
          >
            £145,000
          </Typography>
          <Typography sx={{ color: 'secondary.main', fontWeight: 600, fontSize: '0.95rem' }}>Complete</Typography>
        </Box>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', mb: 2 }}>
          Continue supporting the project — Phase 1B (foundation & substructure) is now our focus.
        </Typography>
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          onClick={openConstructionDonate('phase1a_donate')}
          sx={{
            py: 1.25,
            px: 3,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            borderWidth: 2,
            '&:hover': { borderWidth: 2 },
          }}
        >
          Donate to Phase 1B
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
          type="button"
          variant="contained"
          color="secondary"
          onClick={openConstructionDonate('phase1b_donate')}
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
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 'received',
                      value: TOTAL_RECEIVED,
                      label: 'Total received',
                      color: 'rgb(72, 160, 92)',
                    },
                    {
                      id: 'pledged',
                      value: TOTAL_PLEDGED - TOTAL_RECEIVED,
                      label: 'Total pledged',
                      color: 'rgb(143, 207, 161)',
                    },
                    {
                      id: 'remaining',
                      value: REMAINING_NEEDS,
                      label: 'Remaining needs',
                      color: 'rgb(27, 72, 5)',
                    },
                  ],
                  innerRadius: 0,
                  outerRadius: 80,
                  paddingAngle: 2,
                  arcLabel: () => '',
                },
              ]}
              width={200}
              height={200}
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
              hideLegend
            />

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '10px 1fr',
                columnGap: 3,
                rowGap: 2,
                alignItems: 'center',
                justifyItems: 'start',
                width: 'fit-content',
                mx: 'auto',
              }}
            >
              {/* Total pledged */}
              <Box sx={{ width: 12, height: 12, borderRadius: 0.5, bgcolor: 'rgb(143, 207, 161)' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>Total pledged</Typography>
                <Typography sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 700 }}>
                  {formatCurrency(TOTAL_PLEDGED)}
                </Typography>
              </Box>

              {/* Total received */}
              <Box sx={{ width: 12, height: 12, borderRadius: 0.5, bgcolor: 'rgb(72, 160, 92)' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>Total received</Typography>
                <Typography sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 700 }}>
                  {formatCurrency(TOTAL_RECEIVED)}
                </Typography>
              </Box>

              {/* Remaining needs */}
              <Box sx={{ width: 12, height: 12, borderRadius: 0.5, bgcolor: 'rgb(27, 72, 5)' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>Remaining needs</Typography>
                <Typography sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 700 }}>
                  {formatCurrency(REMAINING_NEEDS)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
