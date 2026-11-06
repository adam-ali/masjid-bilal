'use client'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { Box, Button, Chip, Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'
import { useEffect, useState } from 'react'
import { trackDonateClick } from '../../services/analytics'
import { ConstructionFunds, fetchSheetData } from '../../services/sheetsService'

const DONATE_URL = 'https://bit.ly/m/bilaldonate'
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

      {/* Phases 1A & 1B — complete */}
      <Box sx={{ display: 'flex', gap: 2, mx: 2, my: 5 }}>
        {[
          { phase: '1A', label: 'Fully raised', title: 'Excavation & Demolition', amount: '£145,000' },
          { phase: '1B', label: 'Fully pledged', title: 'Foundation & Substructure', amount: '£390,000' },
        ].map(({ phase, label, title, amount }) => (
          <Box
            key={phase}
            sx={{
              flex: 1,
              py: 3,
              px: { xs: 1, sm: 3 },
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
            <Typography sx={{ fontSize: { xs: 15, sm: 20 }, fontWeight: 700, letterSpacing: '0.06em' }}>
              PHASE {phase}
            </Typography>
            <Chip
              icon={<CheckCircleRoundedIcon sx={{ fontSize: '1rem !important' }} />}
              label={label}
              size="small"
              sx={{
                my: 1,
                fontWeight: 700,
                bgcolor: 'secondary.main',
                color: 'common.white',
                '& .MuiChip-icon': { color: 'common.white' },
              }}
            />
            <Typography sx={{ fontSize: { xs: 14, sm: 18 }, fontWeight: 600, color: 'secondary.dark', mb: 1 }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: { xs: 22, sm: 32 }, fontWeight: 800, color: 'secondary.dark' }}>
              {amount}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Phase 1C */}
      <Box sx={{ bgcolor: 'grey.200', py: 6, px: 3, my: 5, textAlign: 'center' }}>
        <Typography sx={{ fontSize: { xs: 18, sm: 22 }, fontWeight: 700, color: 'text.primary', lineHeight: 1.2, mb: 1 }}>
          PHASE 1C
        </Typography>
        <Typography sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 600, color: 'secondary.main', mb: 4 }}>
          Architect & Consultancy Fees & Relocation
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', color: 'text.primary', mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 700, color: 'secondary.main' }}>
            235 people
          </Box>
          {' still needed to sponsor '}
          <Box component="span" sx={{ fontWeight: 700, color: 'secondary.main' }}>
            one share of £1,500
          </Box>
        </Typography>

        <Typography sx={{ fontWeight: 700, color: 'text.primary', mt: 5, mb: 1 }}>
          Architect & Consultancy Fees
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Architect fees - £30,000</Typography>
        <Typography sx={{ color: 'text.secondary' }}>CDM and BC PM - £10,000</Typography>
        <Typography sx={{ color: 'text.secondary' }}>Structural engineer - £46,000</Typography>

        <Typography sx={{ fontWeight: 700, color: 'text.primary', mt: 4, mb: 1 }}>Relocation</Typography>
        <Typography sx={{ color: 'text.secondary' }}>Relocation to 130 Kings Road - £400,000</Typography>
        <Typography sx={{ color: 'text.secondary', fontStyle: 'italic', my: 1 }}>
          Temporary works at existing Masjid at Bury Old Road
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Purchase of two cabins - £30,000</Typography>
        <Typography sx={{ color: 'text.secondary' }}>Underground temporary works - £40,000</Typography>
        <Typography sx={{ color: 'text.secondary' }}>Demolition of existing building - £5,000</Typography>
        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
          Construction of temporary wall/fencing/demolition - £5,000
        </Typography>

        <Typography sx={{ color: 'text.primary' }}>Total</Typography>
        <Typography sx={{ fontSize: { xs: 36, sm: 44 }, fontWeight: 700, color: 'secondary.main', mb: 4 }}>
          £566,000
        </Typography>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={openConstructionDonate('phase1c_donate')}
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(27, 72, 5, 0.3)',
            '&:hover': { boxShadow: '0 4px 12px rgba(27, 72, 5, 0.4)' },
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
