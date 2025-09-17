import React from 'react'
import { Box, Table, TableBody, TableHead, Typography, Button, TableContainer, Paper } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'

import { TimeTable } from '../../../data/2025.js'
import { useRouter } from 'next/router'
import FajrIcon from '../../icons/fajr.tsx'

let today = new Date()
// TODO: add logic to determine year
function daySuffix(n) {
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
  return n + suffix
}

var day = String(today.toLocaleString('en-us', { weekday: 'long' }))
const month = today.toLocaleString('default', { month: 'short' })
var dd = String(today.getDate())
// var yy = String(today.getFullYear())
var mm = String(today.getMonth() + 1)

const todaysData = TimeTable.find((i) => {
  if (i.Date === dd && i.Month === mm) {
    return i
  }
})
const rows = [
  { salah: 'Fajr', start: todaysData?.Fajar, jamaat: todaysData?.fajarJamaat },
  { salah: 'Sunrise', start: todaysData?.Sunrise, jamaat: '' },
  { salah: 'Zuhur', start: todaysData?.Zuhar, jamaat: todaysData?.zuharJamaat },
  { salah: 'Asar', start: todaysData?.Asar, jamaat: todaysData?.asarJamaat },
  { salah: 'Maghrib', start: todaysData?.maghribJamaat, jamaat: todaysData?.maghribJamaat },
  { salah: 'Isha', start: todaysData?.Isha, jamaat: todaysData?.ishaJamaat },
]

const JummahTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: 'bold',
  },
}))
const SalahTimes = () => {
  const router = useRouter()

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#cef2d8',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'black',
      color: 'white',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  }))
  const fullDate = `${day}  ${daySuffix(dd)} ${month}`
  return (
    <>
      <Box
        sx={{
          bgcolor: '#EDEDED',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TableContainer component={Paper} sx={{ flexGrow: 1 }}>
          <Table aria-label="Jummah table" sx={{ minWidth: '100%' }}>
            <TableHead>
              <TableRow
                sx={{
                  '& .MuiTableCell-head': {
                    paddingTop: '8px',
                    paddingBottom: '8px',
                  },
                }}
              >
                <TableCell>
                  <Typography variant="body1">Jummah</Typography>
                </TableCell>
                <TableCell align="center" size="small">
                  <Typography variant="body1">First</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">Second</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">Third</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th">
                  <Typography variant="body1">Khutbah</Typography>
                </TableCell>
                <JummahTableCell align="center">1:20pm</JummahTableCell>
                <JummahTableCell align="center">2:00pm</JummahTableCell>
                <JummahTableCell align="center">2:45pm</JummahTableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th">
                  <Typography variant="body1">Salaah finishes</Typography>
                </TableCell>
                <JummahTableCell align="center">1:30pm</JummahTableCell>
                <JummahTableCell align="center">2:15pm</JummahTableCell>
                <JummahTableCell align="center">3:00pm</JummahTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ bgcolor: 'secondary.main', display: 'flex', justifyContent: 'space-between', p: '16px' }}>
        <Typography color={'white'} variant="h2">
          SALAH TIMES
        </Typography>
        <Typography color={'white'} variant="h3">
          {fullDate}
        </Typography>
      </Box>
      <Box sx={{ bgcolor: '#ffffff', px: '0px' }}>
        <Table align="center" sx={{ px: 0 }} aria-label="Salah table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography align="right" variant="h6">
                  Start
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Jamaat</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.salah} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <StyledTableCell component="th" scope="row">
                  <Typography variant="h6">
                    {row.salah}
                    {/* {row.salah === 'Sunrise' ? <FajrIcon /> : null} */}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right" component="th" scope="row">
                  {row.start}
                </StyledTableCell>
                <StyledTableCell align="right" component="th" scope="row">
                  {row.jamaat}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Button className="" variant="text" color="secondary" onClick={() => router.push('prayer-times')}>
          See Full Prayer Time Table
        </Button>
      </Box>
    </>
  )
}

export default SalahTimes
