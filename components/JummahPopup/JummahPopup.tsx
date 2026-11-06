'use client'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import CloseIcon from '@mui/icons-material/Close'
import { Alert, Button, IconButton, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import { trackDonateClick } from '../../services/analytics'

const DONATE_URL = 'https://bit.ly/m/bilaldonate'
const FRIDAY = 5

export default function JummahPopup() {
  const [open, setOpen] = useState(false)
  const today = new Date().toDateString()

  useEffect(() => {
    if (new Date().getDay() !== FRIDAY) return
    try {
      if (localStorage.getItem('jummahPopupDismissed') !== today) setOpen(true)
    } catch {
      setOpen(true)
    }
  }, [today])

  const dismiss = () => {
    setOpen(false)
    try {
      localStorage.setItem('jummahPopupDismissed', today)
    } catch {}
  }

  return (
    <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert
        severity="success"
        variant="filled"
        icon={<VolunteerActivismIcon fontSize="inherit" />}
        sx={{ position: 'relative', alignItems: 'center', fontWeight: 600, boxShadow: 6, pr: 5 }}
        action={
            <Button
              variant="contained"
              size="small"
              sx={{
                px: 2,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                borderRadius: 8,
                fontWeight: 700,
                textTransform: 'none',
                bgcolor: 'common.white',
                color: 'secondary.dark',
                '&:hover': { bgcolor: 'grey.100' },
              }}
              onClick={() => {
                trackDonateClick('jummah_popup')
                window.open(DONATE_URL, '_blank', 'noopener,noreferrer')
                dismiss()
              }}
            >
              Donate now
            </Button>
        }
      >
        <IconButton
          aria-label="Dismiss"
          color="inherit"
          size="small"
          onClick={dismiss}
          sx={{ position: 'absolute', top: 4, right: 4 }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        Donate to the Masjid Bilal Construction Project


      </Alert>
    </Snackbar>
  )
}
