'use client'

import { Box, Typography } from '@mui/material'

type JummahSession = { label: string; bayaan: string; salah: string }

const JUMMAH_SESSIONS: JummahSession[] = [
  { label: 'First', bayaan: '12:30', salah: '12:45' },
  { label: 'Second', bayaan: '13:05', salah: '13:20' },
  { label: 'Third', bayaan: '13:35', salah: '13:50' },
]

function formatDisplayTime(time24: string): string {
  const [h, m] = time24.split(':').map(Number)
  if (Number.isNaN(h) || Number.isNaN(m)) return time24
  const d = new Date()
  d.setHours(h, m, 0, 0)
  return d.toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit' })
}

export default function JummahTimes() {
  return (
    <Box
      sx={{
        bgcolor: '#e8e8e8',
        py: 3,
        px: { xs: 2, sm: 4 },
        width: '100%',
      }}
    >
      <Typography
        component="h2"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', sm: '1.75rem' },
          color: 'text.primary',
          mb: 3,
        }}
      >
        Jummuah
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'row' },
          alignItems: 'stretch',
          justifyContent: 'center',
          width: '100%',
          maxWidth: { xs: 'none', sm: 720 },
          mx: { xs: 0, sm: 'auto' },
        }}
      >
        {JUMMAH_SESSIONS.map((session, index) => (
          <Box
            key={session.label}
            sx={{
              flex: 1,
              textAlign: 'center',
              pb: { xs: 2, sm: 0 },
              px: { xs: 0, sm: 1.5 },
              borderLeft: { xs: index > 0 ? '1px solid' : 'none' },
              borderColor: 'rgba(0,0,0,0.12)',
            }}
          >
            <Box sx={{ m: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: 'text.primary', mb: 1.5 }}>
                {session.label}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '1rem', mb: 0.5 }}>
                  Bayaan
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem', mb: 0.5 }}>
                  {formatDisplayTime(session.bayaan)}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '1rem' }}>Salah</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>
                  {formatDisplayTime(session.salah)}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
