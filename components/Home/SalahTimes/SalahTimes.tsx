'use client'

import { useMemo } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import WbTwilightIcon from '@mui/icons-material/WbTwilight'

import { TimeTable, TimeTableType } from '../../../data'
import JummahTimes from './JummahTimes'

function daySuffix(n: number) {
  let suffix = 'th'
  if (n < 11 || n > 13) {
    switch (n % 10) {
      case 1:
        suffix = 'st'
        break
      case 2:
        suffix = 'nd'
        break
      case 3:
        suffix = 'rd'
        break
    }
  }
  return `${n}${suffix}`
}

type PrayerColumn = {
  key: string
  label: string
  start: keyof TimeTableType
  jamaat: keyof TimeTableType
}

const PRAYER_COLUMNS: PrayerColumn[] = [
  { key: 'fajr', label: 'Fajr', start: 'Fajar', jamaat: 'fajarJamaat' },
  { key: 'dhuhr', label: 'Dhuhr', start: 'Zuhar', jamaat: 'zuharJamaat' },
  { key: 'asr', label: 'Asr', start: 'Asar', jamaat: 'asarJamaat' },
  { key: 'maghrib', label: 'Maghrib', start: 'maghribJamaat', jamaat: 'maghribJamaat' },
  { key: 'isha', label: 'Isha', start: 'Isha', jamaat: 'ishaJamaat' },
]

const SalahTimes = () => {
  const router = useRouter()

  const { fullDate, sunriseTime, startRow, jamaatRow } = useMemo(() => {
    const today = new Date()
    const dd = today.getDate()
    const mm = String(today.getMonth() + 1)
    const month = today.toLocaleString('en-GB', { month: 'short' })

    const todaysData = TimeTable.find((i: TimeTableType) => i.Date === String(dd) && i.Month === mm)

    const sunriseRaw = todaysData?.Sunrise?.trim()
    const sunriseTime = sunriseRaw && sunriseRaw.length > 0 ? sunriseRaw : '—'

    const startRow: string[] = []
    const jamaatRow: string[] = []
    for (const col of PRAYER_COLUMNS) {
      const rawStart = todaysData?.[col.start] as string | undefined
      const rawJamaat = todaysData?.[col.jamaat] as string | undefined
      startRow.push(rawStart?.trim() || '—')
      jamaatRow.push(rawJamaat?.trim() || '—')
    }

    return {
      fullDate: `${daySuffix(dd)} ${month}`,
      sunriseTime,
      startRow,
      jamaatRow,
    }
  }, [])

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      {/* Salah — dark green grid (prayers as columns, Start / Jamaat as rows) */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          color: 'common.white',
          px: { xs: 1.5, sm: 2 },
          pt: 2,
          pb: 2.5,
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '4.5rem repeat(5, minmax(0, 1fr))', sm: '5.5rem repeat(5, minmax(0, 1fr))' },
            columnGap: { xs: 0.5, sm: 1 },
            rowGap: 1.25,
            alignItems: 'center',
            minWidth: { xs: 320, sm: 0 },
          }}
        >
          {/* Row: Sunrise above Fajr, date above Isha (each on a single line) */}
          <Box />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              whiteSpace: 'nowrap',
              pb: 0.25,
              mr: -7,
            }}
          >
            <WbTwilightIcon
              sx={{
                fontSize: { xs: 16, sm: 20 },
                color: 'common.white',
                opacity: 0.95,
                flexShrink: 0,
              }}
            />
            <Typography
              component="span"
              sx={{
                color: 'common.white',
                fontSize: { xs: '0.65rem', sm: '0.8rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                whiteSpace: 'nowrap',
              }}
            >
              Sunrise {sunriseTime}
            </Typography>
          </Box>
          <Box />
          <Box />
          <Box />
          <Typography
            sx={{
              textAlign: 'center',
              color: 'common.white',
              fontSize: { xs: '0.65rem', sm: '0.9rem' },
              fontWeight: 600,
              lineHeight: 1.25,
              pb: 0.25,
              whiteSpace: 'nowrap',
            }}
          >
            {fullDate}
          </Typography>

          {/* Prayer name row */}
          <Box />
          {PRAYER_COLUMNS.map((col) => (
            <Typography
              key={col.key}
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
                color: 'common.white',
                lineHeight: 1.2,
              }}
            >
              {col.label}
            </Typography>
          ))}

          {/* Start row */}
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1rem' },
              color: 'common.white',
              textAlign: 'left',
            }}
          >
            Start
          </Typography>
          {startRow.map((t, i) => (
            <Typography
              key={`start-${PRAYER_COLUMNS[i].key}`}
              sx={{
                textAlign: 'center',
                fontSize: { xs: '1rem' },
                fontWeight: 500,
                color: 'common.white',
              }}
            >
              {t}
            </Typography>
          ))}

          {/* Jamaat row */}
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1rem' },
              color: 'common.white',
              textAlign: 'left',
            }}
          >
            Jamaat
          </Typography>
          {jamaatRow.map((t, i) => (
            <Typography
              key={`jamaat-${PRAYER_COLUMNS[i].key}`}
              sx={{
                textAlign: 'center',
                fontSize: { xs: '1rem' },
                fontWeight: 500,
                color: 'common.white',
              }}
            >
              {t}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Jummuah — full width edge-to-edge on mobile */}
      <Box sx={{ pt: { xs: 2, sm: 3 }, pb: 0 }}>
        <JummahTimes />
      </Box>

      <Box sx={{ bgcolor: '#ffffff', px: 2, textAlign: 'center' }}>
        <Button
          variant="text"
          color="secondary"
          disableRipple
          onClick={() => router.push('/prayer-times')}
          sx={{ textTransform: 'none' }}
        >
          See full prayer time table
        </Button>
      </Box>
    </Box>
  )
}

export default SalahTimes
