'use client'

import { Box, Typography } from '@mui/material'
import { Fragment } from 'react'

type JummahSession = { label: string; bayan: string; khutbah: string; salah: string }

const JUMMAH_SESSIONS: JummahSession[] = [
  { label: 'First', bayan: '11:45', khutbah: '12:05', salah: '12:15' },
  { label: 'Second', bayan: '12:30', khutbah: '12:45', salah: '13:00' },
  { label: 'Third', bayan: '13:15', khutbah: '13:30', salah: '13:45' },
]

const ROWS: [string, 'bayan' | 'khutbah' | 'salah'][] = [
  ['Bayan', 'bayan'],
  ['Khutbah', 'khutbah'],
  ['Salah\nfinishes', 'salah'],
]

const CELL = { py: 1.5, px: 1, display: 'flex', alignItems: 'center' }
const SESSION_CELL = { ...CELL, justifyContent: 'center', borderLeft: '1px solid rgba(0,0,0,0.12)' }

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
          display: 'grid',
          gridTemplateColumns: 'auto repeat(3, 1fr)',
          columnGap: 0,
          textAlign: 'center',
          maxWidth: 720,
          mx: 'auto',
        }}
      >
        <Box sx={CELL} />
        {JUMMAH_SESSIONS.map((s) => (
          <Typography key={s.label} sx={{ fontWeight: 700, fontSize: '1.05rem', color: 'text.primary', ...SESSION_CELL }}>
            {s.label}
          </Typography>
        ))}
        {ROWS.map(([label, key]) => (
          <Fragment key={key}>
            <Typography sx={{ ...CELL, color: 'text.secondary', fontWeight: 600, fontSize: '1rem', textAlign: 'left', whiteSpace: 'pre-line' }}>
              {label}
            </Typography>
            {JUMMAH_SESSIONS.map((s) => (
              <Typography key={s.label} sx={{ ...SESSION_CELL, color: 'text.secondary', fontSize: '1rem' }}>
                {formatDisplayTime(s[key])}
              </Typography>
            ))}
          </Fragment>
        ))}
      </Box>
    </Box>
  )
}
