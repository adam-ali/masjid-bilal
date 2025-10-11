'use client'
import { alpha, styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { DataGrid, gridClasses, GridColDef, GridRowClassNameParams } from '@mui/x-data-grid'
import { TimeTable } from '../../data'

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

const prayerTimes = () => {
  const columns: GridColDef[] = [
    { field: 'Day', headerName: 'Day', width: 60, sortable: false },
    { field: 'Date', headerName: 'Date', width: 60, sortable: false },
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
  let today = new Date()
  const mm = String(today.getMonth() + 1)
  const dd = String(today.getDate())
  //   var yy = String(today.getFullYear())
  // const mm = String(today.getMonth() + 1)

  const salahRows = TimeTable.map((day, i) => {
    return { id: i, ...day }
  }).filter((i) => {
    return i.Month === mm
  })

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
          <Typography color={'white'} variant="h2">
            Prayer Times
          </Typography>
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
