import { useState, useEffect } from 'react'
import { Box, Typography, Grid, Paper, Stack, Chip, useTheme } from '@mui/material'
import EventNoteIcon from '@mui/icons-material/EventNote'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import TimelapseIcon from '@mui/icons-material/Timelapse'

// --- Data without the "ends" time ---
const jummahTimesData = [
  { title: 'First', khutbah: '13:20', salah: '13:30' },
  { title: 'Second', khutbah: '14:00', salah: '14:15' },
  { title: 'Third', khutbah: '14:45', salah: '15:00' },
]

const parseTimeString = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number)
  const date = new Date()
  date.setHours(hours, minutes, 0, 0)
  return date
}

export default function JummahTimetable() {
  const theme = useTheme()
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const jummahDateTimes = jummahTimesData.map((j) => ({
    ...j,
    khutbahDate: parseTimeString(j.khutbah),
    salahDate: parseTimeString(j.salah),
  }))

  const nextJummahIndex = jummahDateTimes.findIndex((j) => j.salahDate > now)
  const allJummahFinished = nextJummahIndex === -1

  const formatTime = (timeString: string) =>
    new Date(`1970-01-01T${timeString}`).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })

  return (
    <Box p={{ xs: 2, md: 4 }} bgcolor="grey.100" borderRadius={2}>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <EventNoteIcon color="primary" fontSize="large" />
        <Typography variant="h4" fontWeight="bold">
          Jummah Timetable
        </Typography>
      </Stack>

      {/* === MOBILE VIEW === */}
      <Box display={{ xs: 'block', md: 'none' }}>
        <Paper elevation={2} style={{ padding: '16px', maxHeight: 160, overflow: 'hidden' }}>
          <Grid container spacing={1} justifyContent="space-around" textAlign="center">
            {jummahDateTimes.map((time) => {
              return (
                <Grid size={{ xs: 4 }} key={time.title}>
                  <Stack>
                    <Typography variant="body2" fontWeight="bold">
                      {time.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Khutbah
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      {formatTime(time.khutbah)}
                    </Typography>
                  </Stack>
                </Grid>
              )
            })}
          </Grid>
        </Paper>
      </Box>

      {/* === DESKTOP VIEW === */}
      <Box display={{ xs: 'none', md: 'block' }}>
        <Grid container spacing={3}>
          {jummahDateTimes.map((time, index) => {
            const isNext = index === nextJummahIndex
            const isFinished = index < nextJummahIndex || allJummahFinished
            const minutesUntilKhutbah = isNext ? Math.round((time.khutbahDate.getTime() - now.getTime()) / (1000 * 60)) : 0
            return (
              <Grid size={{ md: 4 }} key={time.title}>
                <Paper
                  elevation={isNext ? 8 : 2}
                  style={{
                    padding: '24px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease-in-out',
                    opacity: isFinished ? 0.5 : 1,
                    border: isNext ? `2px solid ${theme.palette.secondary.main}` : '2px solid transparent',
                    transform: isNext ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  {isNext && (
                    <Chip label="Next Prayer" color="secondary" style={{ fontWeight: 'bold', marginBottom: '16px' }} />
                  )}
                  <Typography variant="h6" gutterBottom>
                    {time.title}
                  </Typography>
                  <Stack spacing={2} my={2}>
                    <Box>
                      <Typography
                        variant="caption"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={0.5}
                      >
                        <AccessTimeIcon fontSize="inherit" /> Khutbah
                      </Typography>
                      <Typography variant="h4" fontWeight="bold">
                        {formatTime(time.khutbah)}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={0.5}
                      >
                        <TimelapseIcon fontSize="inherit" /> Salah Finishes
                      </Typography>
                      <Typography variant="body1">{formatTime(time.salah)}</Typography>
                    </Box>
                  </Stack>
                  {isNext && minutesUntilKhutbah > 0 && (
                    <Typography variant="body2" color="secondary.main" fontWeight="bold">
                      Starts in approx. {minutesUntilKhutbah} minutes
                    </Typography>
                  )}
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}
