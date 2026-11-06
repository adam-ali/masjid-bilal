'use client'
import { useState } from 'react'
import { Box, Typography, Paper, Stack, Divider, IconButton, Snackbar, Tooltip, Button } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import PinIcon from '@mui/icons-material/Pin'
import ArticleIcon from '@mui/icons-material/Article'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import ConstructionIcon from '@mui/icons-material/Construction'

const CONSTRUCTION_DONATE_URL = 'https://bit.ly/m/bilaldonate'
const SQUARE_DONATE_URL = 'https://square.link/u/oqzchKUK'

// BankDetailRow component (no changes needed here)
function BankDetailRow({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  const [open, setOpen] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(subtitle)
    setOpen(true)
  }

  return (
    <>
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          {icon}
          <Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: '500' }}>
              {subtitle}
            </Typography>
          </Box>
        </Stack>
        <Tooltip title={`Copy ${title}`} placement="top">
          <IconButton onClick={handleCopy} aria-label={`Copy ${title}`}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message={`${title} copied to clipboard!`}
      />
    </>
  )
}

export default function DonationsPage() {
  return (
    <>
      <Box sx={{ bgcolor: 'secondary.main', p: 4, color: 'secondary.contrastText' }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <VolunteerActivismIcon sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Support Your Masjid
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              Your contribution helps us grow and serve the community.
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ p: { xs: 2, md: 4 }, display: 'flex', justifyContent: 'center' }}>
        <Stack spacing={4} sx={{ maxWidth: '600px', width: '100%' }}>
          <Paper variant="outlined" sx={{ p: 3, textAlign: 'center', borderColor: 'divider', bgcolor: 'action.hover' }}>
            <Stack spacing={1} sx={{ alignItems: 'center' }}>
              <FormatQuoteIcon color="secondary" />
              <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                "Charity does not decrease wealth."
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                - Prophet Muhammad (ﷺ) [Sahih Muslim]
              </Typography>
            </Stack>
          </Paper>

          <Stack spacing={2}>
            {[
              { href: CONSTRUCTION_DONATE_URL, icon: <ConstructionIcon />, label: 'Donate to the New Construction Project', sub: 'Donate online' },
              { href: SQUARE_DONATE_URL, icon: <CreditCardIcon />, label: 'Masjid Bilal Operational Costs', sub: 'Donate via Square' },
            ].map(({ href, icon, label, sub }) => (
              <Button
                key={href}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                startIcon={icon}
                sx={{
                  py: 2,
                  px: 3,
                  justifyContent: 'flex-start',
                  '& .MuiButton-startIcon': { mr: 2, '& > *:first-of-type': { fontSize: 28 } },
                  borderRadius: 8,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px 0 rgba(27, 72, 5, 0.25)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': { boxShadow: '0 6px 20px 0 rgba(27, 72, 5, 0.35)', transform: 'translateY(-2px)' },
                }}
              >
                <Box sx={{ textAlign: 'left' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.2 }}>{label}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', opacity: 0.9 }}>{sub}</Typography>
                </Box>
              </Button>
            ))}
          </Stack>

          <Paper elevation={4} sx={{ borderRadius: 2, width: '100%' }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="body1">
                Alternivitely you can donate via bank transfer using the details below.
              </Typography>
            </Box>
            <Divider />
            <BankDetailRow
              icon={<AccountBalanceIcon color="primary" />}
              title="Account Name"
              subtitle="Prestwich Muslim Welfare Trust"
            />
            <Divider />
            <BankDetailRow
              icon={<ConfirmationNumberIcon color="primary" />}
              title="Account Number"
              subtitle="17856140"
            />
            <Divider />
            <BankDetailRow icon={<PinIcon color="primary" />} title="Sort Code" subtitle="53-81-36" />
            <Divider />
            <BankDetailRow icon={<ArticleIcon color="primary" />} title="Reference" subtitle="masjid donation" />
          </Paper>
        </Stack>
      </Box>
    </>
  )
}
