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

const PAYPAL_DONATE_URL = 'https://www.paypal.com/ncp/payment/6SP9M7KN2F4U2'
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
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          {icon}
          <Box>
            <Typography color="text.secondary" variant="body2">
              {title}
            </Typography>
            <Typography fontWeight="500" variant="body1">
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
        <Stack direction="row" spacing={2} alignItems="center">
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
            <Stack spacing={1} alignItems="center">
              <FormatQuoteIcon color="secondary" />
              <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                "Charity does not decrease wealth."
              </Typography>
              <Typography variant="caption" color="text.secondary">
                - Prophet Muhammad (ﷺ) [Sahih Muslim]
              </Typography>
            </Stack>
          </Paper>

          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
            <Button
              component="a"
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              sx={{
                width: 130,
                height: 130,
                minWidth: 130,
                minHeight: 130,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                boxShadow: '0 4px 14px 0 rgba(27, 72, 5, 0.25)',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  boxShadow: '0 6px 20px 0 rgba(27, 72, 5, 0.35)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <ConstructionIcon sx={{ fontSize: 36, opacity: 0.95 }} />
              <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem', textAlign: 'center', lineHeight: 1.2 }}>
                New Construction Project
              </Typography>
              <Typography component="span" sx={{ fontWeight: 500, fontSize: '0.7rem', opacity: 0.95 }}>
                Donate via PayPal
              </Typography>
            </Button>
            <Button
              component="a"
              href={SQUARE_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              sx={{
                width: 130,
                height: 130,
                minWidth: 130,
                minHeight: 130,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                boxShadow: '0 4px 14px 0 rgba(27, 72, 5, 0.25)',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  boxShadow: '0 6px 20px 0 rgba(27, 72, 5, 0.35)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <CreditCardIcon sx={{ fontSize: 36, opacity: 0.95 }} />
              <Typography component="span" sx={{ fontWeight: 600, fontSize: '0.75rem', textAlign: 'center', lineHeight: 1.2 }}>
                Masjid Bilal Operational Costs
              </Typography>
              <Typography component="span" sx={{ fontWeight: 500, fontSize: '0.7rem', opacity: 0.95 }}>
                Donate via Square
              </Typography>
            </Button>
          </Stack>

          <Paper elevation={4} sx={{ borderRadius: 2, width: '100%' }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="body1">Alternivitely you can donate via bank transfer using the details below.</Typography>
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
