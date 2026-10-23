'use client'
import { useMemo, useState } from 'react'
import { alpha, styled, useTheme } from '@mui/material/styles'
import { Box, MenuItem, Select, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from '@mui/material'
import { DataGrid, gridClasses, GridColDef, GridRowClassNameParams } from '@mui/x-data-grid'
import { TimeTable } from '../../data'

type CalendarView = 'gregorian' | 'hijri'

const ODD_OPACITY = 0.2
const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.masjidBilal-green`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity),
        },
      },
    },
  },
  [`& .${gridClasses.row}.todaysDate`]: {
    backgroundColor: alpha(theme.palette.secondary.main, 0.15),
    boxShadow: `inset 4px 0 0 ${theme.palette.secondary.main}`,
    fontWeight: 700,
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.22),
    },
  },
  [`& .${gridClasses.cell}`]: {
    fontVariantNumeric: 'tabular-nums',
  },
  [`& .${gridClasses.cell}.start-time`]: {
    color: theme.palette.text.secondary,
  },
  [`& .${gridClasses.cell}.jamaat-time`]: {
    fontWeight: 700,
  },
}))

// Pad single-digit hours ('6:36' -> '06:36') so times line up in their columns
const padTime = (value: string) => (value.length === 4 ? `0${value}` : value)

// Time columns share the spare width on desktop and shrink down to minWidth on phones
const startTimeColumn = (field: string, headerName = 'Start', minWidth = 64): GridColDef => ({
  field,
  headerName,
  flex: 1,
  minWidth,
  align: 'center',
  headerAlign: 'center',
  sortable: false,
  valueFormatter: padTime,
  cellClassName: 'start-time',
})

const jamaatTimeColumn = (field: string, headerName = 'Jamaat', minWidth = 64): GridColDef => ({
  ...startTimeColumn(field, headerName, minWidth),
  cellClassName: 'jamaat-time',
})

// Start columns are hidden on phones (unless asked for) so the table fits without scrolling sideways
const HIDDEN_START_COLUMNS = { Fajar: false, Zuhar: false, Asar: false, Isha: false }

const whiteToggleSx = {
  '& .MuiToggleButton-root': {
    color: 'white',
    borderColor: 'rgba(255,255,255,0.5)',
    '&.Mui-selected': {
      bgcolor: 'rgba(255,255,255,0.2)',
      color: 'white',
      '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
    },
    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
  },
}

// Enrich rows with HijriMonth (derived from Hijrah resetting to 1)
function enrichWithHijriMonth<T extends { Hijrah: string }>(rows: T[]): (T & { HijriMonth: number })[] {
  let hijriMonth = 1
  let prevHijrah = ''
  return rows.map((row) => {
    if (row.Hijrah === '1' && ['29', '30'].includes(prevHijrah)) {
      hijriMonth++
    }
    prevHijrah = row.Hijrah
    return { ...row, HijriMonth: hijriMonth }
  })
}

const GREGORIAN_MONTHS = Array.from({ length: 12 }, (_, i) =>
  new Date(2000, i, 1).toLocaleString('en-GB', { month: 'long' })
)

const hijriMonthFormatter = new Intl.DateTimeFormat('en-GB-u-ca-islamic-umalqura', { month: 'long' })

const prayerTimes = () => {
  const today = new Date()
  const mm = String(today.getMonth() + 1)
  const dd = String(today.getDate())

  const enrichedTable = useMemo(() => enrichWithHijriMonth(TimeTable), [])

  // One option per Hijri month in the timetable, named from a mid-month day so a day's offset can't change the name
  const hijriMonthOptions = useMemo(() => {
    const options = new Map<number, string>()
    for (const row of enrichedTable) {
      if (!options.has(row.HijriMonth) || row.Hijrah === '15') {
        const date = new Date(today.getFullYear(), Number(row.Month) - 1, Number(row.Date))
        options.set(row.HijriMonth, hijriMonthFormatter.format(date))
      }
    }
    return Array.from(options, ([value, label]) => ({ value, label }))
  }, [enrichedTable])

  const currentHijriMonth = enrichedTable.find((r) => r.Month === mm && r.Date === dd)?.HijriMonth ?? 1

  const [calendarView, setCalendarView] = useState<CalendarView>('gregorian')
  const [gregorianMonth, setGregorianMonth] = useState(Number(mm))
  const [hijriMonth, setHijriMonth] = useState(currentHijriMonth)

  const monthOptions =
    calendarView === 'gregorian' ? GREGORIAN_MONTHS.map((label, i) => ({ value: i + 1, label })) : hijriMonthOptions
  const selectedMonth = calendarView === 'gregorian' ? gregorianMonth : hijriMonth
  const setSelectedMonth = calendarView === 'gregorian' ? setGregorianMonth : setHijriMonth

  const isPhone = useMediaQuery(useTheme().breakpoints.down('sm'))
  const [showStartTimes, setShowStartTimes] = useState(false)
  const timeMinWidth = isPhone ? 48 : 64

  const columns: GridColDef[] = [
    {
      field: 'dayDate',
      headerName: calendarView === 'gregorian' ? 'Date' : 'Hijri',
      width: isPhone ? 64 : 80,
      sortable: false,
      valueGetter: (_, row) => `${row.Day} ${calendarView === 'gregorian' ? row.Date : row.Hijrah}`,
    },
    startTimeColumn('Fajar', 'Start', timeMinWidth),
    jamaatTimeColumn('fajarJamaat', 'Jamaat', timeMinWidth),
    startTimeColumn('Sunrise', 'Time', timeMinWidth),
    startTimeColumn('Zuhar', 'Start', timeMinWidth),
    jamaatTimeColumn('zuharJamaat', 'Jamaat', timeMinWidth),
    startTimeColumn('Asar', 'Start', timeMinWidth),
    jamaatTimeColumn('asarJamaat', 'Jamaat', timeMinWidth),
    jamaatTimeColumn(
      'maghribJamaat',
      isPhone && !showStartTimes ? 'Jamaat' : 'Start/Jamaat',
      isPhone && !showStartTimes ? timeMinWidth : 104
    ),
    startTimeColumn('Isha', 'Start', timeMinWidth),
    jamaatTimeColumn('ishaJamaat', 'Jamaat', timeMinWidth),
  ]
  const salahRows = useMemo(() => {
    const withIds = enrichedTable.map((day, i) => ({ id: i, ...day }))
    if (calendarView === 'gregorian') {
      return withIds.filter((row) => row.Month === String(gregorianMonth))
    }
    // Hijri view: filter by selected Hijri month, sort 1 to last
    return withIds
      .filter((row) => row.HijriMonth === hijriMonth)
      .sort((a, b) => parseInt(a.Hijrah, 10) - parseInt(b.Hijrah, 10))
  }, [enrichedTable, calendarView, gregorianMonth, hijriMonth])

  const getRowClassName = (params: GridRowClassNameParams) => {
    if (params.row.Date === dd && params.row.Month === mm) {
      return 'todaysDate'
    }
    if (params.indexRelativeToCurrentPage % 2 === 0) return 'masjidBilal-green'
    else return 'Mui-odd'
  }

  return (
    <>
      <Box sx={{ height: '100%', width: '100%' }}>
        <Box sx={{ bgcolor: 'secondary.main', mt: '0px', p: '16px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ color: 'common.white' }} variant="h2">
              Prayer Times
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
              <ToggleButtonGroup
                value={calendarView}
                exclusive
                onChange={(_, value) => value && setCalendarView(value)}
                size="small"
                sx={whiteToggleSx}
              >
                <ToggleButton value="gregorian">Gregorian</ToggleButton>
                <ToggleButton value="hijri">Hijri</ToggleButton>
              </ToggleButtonGroup>
              <Select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                size="small"
                inputProps={{ 'aria-label': 'Month' }}
                sx={{
                  minWidth: 160,
                  color: 'common.white',
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'common.white' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'common.white' },
                  '& .MuiSelect-icon': { color: 'common.white' },
                }}
              >
                {monthOptions.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
              {isPhone && (
                <Box sx={whiteToggleSx}>
                  <ToggleButton
                    value="startTimes"
                    selected={showStartTimes}
                    onChange={() => setShowStartTimes((show) => !show)}
                    size="small"
                  >
                    Start times
                  </ToggleButton>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <div className="flex flex-col">
          <StripedDataGrid
            sx={{
              borderColor: 'primary.light',
              fontSize: { xs: 13, sm: 14 },
              [`& .${gridClasses.cell}, & .${gridClasses.columnHeader}`]: { px: { xs: 0.5, sm: 1.25 } },
            }}
            rows={salahRows}
            className="fullSalahTable"
            columns={columns}
            columnVisibilityModel={isPhone && !showStartTimes ? HIDDEN_START_COLUMNS : {}}
            showCellVerticalBorder
            showColumnVerticalBorder
            getRowClassName={(params) => getRowClassName(params)}
            getRowHeight={() => 'auto'}
            hideFooter
            disableColumnFilter
            disableColumnMenu
            disableColumnSelector
            columnGroupingModel={[
              {
                groupId: 'Fajar',
                children: [{ field: 'Fajar' }, { field: 'fajarJamaat' }],
                headerClassName: 'SalahTimes-column-group',
                headerAlign: 'center',
              },
              {
                groupId: 'Sunrise',
                children: [{ field: 'Sunrise' }],
                headerClassName: 'SalahTimes-column-group',
                headerAlign: 'center',
              },
              {
                groupId: 'Zuhur',
                children: [{ field: 'Zuhar' }, { field: 'zuharJamaat' }],
                headerClassName: 'SalahTimes-column-group',
                headerAlign: 'center',
              },
              {
                groupId: 'Asar',
                children: [{ field: 'Asar' }, { field: 'asarJamaat' }],
                headerClassName: 'SalahTimes-column-group',
                headerAlign: 'center',
              },
              {
                groupId: 'Maghrib',
                children: [{ field: 'maghribJamaat' }],
                headerClassName: 'SalahTimes-column-group',
                headerAlign: 'center',
              },
              {
                groupId: 'Isha',
                children: [{ field: 'Isha' }, { field: 'ishaJamaat' }],
                headerClassName: 'SalahTimes-column-group',
                headerAlign: 'center',
              },
            ]}
          />
        </div>
      </Box>
    </>
  )
}

export default prayerTimes
