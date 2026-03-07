'use client'
import { useMemo, useState } from 'react'
import { alpha, styled } from '@mui/material/styles'
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
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
}))

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

const prayerTimes = () => {
  const [calendarView, setCalendarView] = useState<CalendarView>('gregorian')

  const enrichedTable = useMemo(() => enrichWithHijriMonth(TimeTable), [])

  const columns: GridColDef[] = [
    { field: 'Day', headerName: 'Day', width: 60, sortable: false },
    {
      field: calendarView === 'gregorian' ? 'Date' : 'Hijrah',
      headerName: calendarView === 'gregorian' ? 'Date' : 'Hijri',
      width: 60,
      sortable: false,
    },
    { field: 'Fajar', headerName: 'Start', width: 70, align: 'center', headerAlign: 'center', sortable: false },
    {
      field: 'fajarJamaat',
      headerName: 'Jamaat',
      width: 70,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
    },
    { field: 'Zuhar', headerName: 'Start', width: 70, align: 'center', headerAlign: 'center', sortable: false },
    {
      field: 'zuharJamaat',
      headerName: 'Jamaat',
      width: 70,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
    },
    { field: 'Asar', headerName: 'Start', width: 70, align: 'center', headerAlign: 'center', sortable: false },
    {
      field: 'asarJamaat',
      headerName: 'Jamaat',
      width: 70,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
    },
    {
      field: 'maghribJamaat',
      headerName: 'Start/Jamaat',
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      width: 120,
    },
    { field: 'Isha', headerName: 'Start', width: 70, align: 'center', headerAlign: 'center', sortable: false },
    {
      field: 'ishaJamaat',
      headerName: 'Jamaat',
      width: 70,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
    },
  ]
  const today = new Date()
  const mm = String(today.getMonth() + 1)
  const dd = String(today.getDate())

  const salahRows = useMemo(() => {
    const withIds = enrichedTable.map((day, i) => ({ id: i, ...day }))
    if (calendarView === 'gregorian') {
      return withIds.filter((row) => row.Month === mm)
    }
    // Hijri view: filter by current Hijri month, sort 1 to last
    const todayRow = withIds.find((r) => r.Month === mm && r.Date === dd)
    const currentHijriMonth = todayRow?.HijriMonth ?? 1
    return withIds
      .filter((row) => row.HijriMonth === currentHijriMonth)
      .sort((a, b) => parseInt(a.Hijrah, 10) - parseInt(b.Hijrah, 10))
  }, [enrichedTable, calendarView, mm, dd])

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
            <Typography color={'white'} variant="h2">
              Prayer Times
            </Typography>
            <ToggleButtonGroup
              value={calendarView}
              exclusive
              onChange={(_, value) => value && setCalendarView(value)}
              size="small"
              sx={{
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
              }}
            >
              <ToggleButton value="gregorian">Gregorian</ToggleButton>
              <ToggleButton value="hijri">Hijri</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
        <div className="flex flex-col">
          <StripedDataGrid
            sx={{
              borderColor: 'primary.light',
            }}
            rows={salahRows}
            className="fullSalahTable"
            columns={columns}
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
