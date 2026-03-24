'use client'

import { useMemo, useState, useEffect } from 'react'
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

/** Minutes from midnight; null if missing/invalid */
function parseTimeToMinutes(s: string | undefined): number | null {
  if (!s || s === '—') return null
  const parts = s.trim().split(':')
  if (parts.length < 2) return null
  const h = parseInt(parts[0], 10)
  const m = parseInt(parts[1], 10)
  if (Number.isNaN(h) || Number.isNaN(m)) return null
  return h * 60 + m
}

/**
 * Which prayer column is "current" from Start times: after a salah begins until the next begins.
 * After Isha until Fajr (incl. after midnight) → Isha. Before Fajr same day → Isha.
 */
function getActivePrayerColumnIndex(startMinutes: (number | null)[], now: Date): number | null {
  const [fajr, dhuhr, asr, maghrib, isha] = startMinutes
  if ([fajr, dhuhr, asr, maghrib, isha].some((x) => x === null)) return null
  const nowM = now.getHours() * 60 + now.getMinutes()

  if (nowM < fajr!) return 4
  if (nowM < dhuhr!) return 0
  if (nowM < asr!) return 1
  if (nowM < maghrib!) return 2
  if (nowM < isha!) return 3
  return 4
}

const SalahTimes = () => {
  const router = useRouter()
  const [nowTick, setNowTick] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => setNowTick((t) => t + 1), 60_000)
    return () => window.clearInterval(id)
  }, [])

  const { fullDate, sunriseTime, startRow, jamaatRow, startMinutes } = useMemo(() => {
    const today = new Date()
    const dd = today.getDate()
    const mm = String(today.getMonth() + 1)
    const month = today.toLocaleString('en-GB', { month: 'short' })

    const todaysData = TimeTable.find((i: TimeTableType) => i.Date === String(dd) && i.Month === mm)

    const sunriseRaw = todaysData?.Sunrise?.trim()
    const sunriseTime = sunriseRaw && sunriseRaw.length > 0 ? sunriseRaw : '—'

    const startRow: string[] = []
    const jamaatRow: string[] = []
    const startMinutes: (number | null)[] = []
    for (const col of PRAYER_COLUMNS) {
      const rawStart = todaysData?.[col.start] as string | undefined
      const rawJamaat = todaysData?.[col.jamaat] as string | undefined
      const startStr = rawStart?.trim() || '—'
      startRow.push(startStr)
      jamaatRow.push(rawJamaat?.trim() || '—')
      startMinutes.push(parseTimeToMinutes(startStr === '—' ? undefined : startStr))
    }

    return {
      fullDate: `${daySuffix(dd)} ${month}`,
      sunriseTime,
      startRow,
      jamaatRow,
      startMinutes,
    }
  }, [])

  const activeColumnIndex = useMemo(() => {
    return getActivePrayerColumnIndex(startMinutes, new Date())
  }, [startMinutes, nowTick])

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      {/* Salah — dark green grid (prayers as columns, Start / Jamaat as rows) */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          color: 'common.white',
          px: { xs: 1.5, sm: 2 },
          pt: 0,
          pb: 2,
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            gap: { xs: 0.5, sm: 1 },
            minWidth: { xs: 320, sm: 0 },
          }}
        >
          {/* Row labels — same row heights as prayer columns */}
          <Box
            sx={{
              width: { xs: '4.5rem', sm: '5.5rem' },
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ minHeight: { xs: 40, sm: 44 }, flexShrink: 0 }} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                py: 1,
                minHeight: 40,
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', py: 1, minHeight: 40 }}>
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
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 1, minHeight: 40 }}>
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
            </Box>
          </Box>

          {PRAYER_COLUMNS.map((col, i) => {
            const active = activeColumnIndex !== null && activeColumnIndex === i
            const fg = active ? 'secondary.main' : 'common.white'

            return (
              <Box
                key={col.key}
                sx={{
                  flex: 1,
                  minWidth: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  px: { xs: 0.25, sm: 0.5 },
                  py: 0.75,
                }}
              >
                {/* Meta row (sunrise / date): always on green — never part of white highlight */}
                <Box
                  sx={{
                    minHeight: { xs: 40, sm: 44 },
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {i === 0 && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0.5,
                        whiteSpace: 'nowrap',
                        pl: 6
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
                  )}
                  {i === 4 && (
                    <Typography
                      sx={{
                        textAlign: 'center',
                        color: 'common.white',
                        fontSize: { xs: '0.65rem', sm: '0.9rem' },
                        fontWeight: 600,
                        lineHeight: 1.25,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {fullDate}
                    </Typography>
                  )}
                </Box>

                {/* Prayer name + times only — single white block when active */}
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 2,
                    overflow: 'hidden',
                    bgcolor: active ? 'common.white' : 'transparent',
                    transition: 'background-color 0.35s ease',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      py: 1,
                      minHeight: 40,
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: { xs: '0.85rem', sm: '0.9rem' },
                        color: fg,
                        lineHeight: 1.2,
                      }}
                    >
                      {col.label}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      py: 1,
                      minHeight: 40,
                    }}
                  >
                    <Typography sx={{ textAlign: 'center', fontSize: { xs: '1rem' }, fontWeight: 500, color: fg }}>
                      {startRow[i]}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      py: 1,
                      minHeight: 40,
                    }}
                  >
                    <Typography sx={{ textAlign: 'center', fontSize: { xs: '1rem' }, fontWeight: 500, color: fg }}>
                      {jamaatRow[i]}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )
          })}
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
