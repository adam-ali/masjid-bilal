import React from 'react'
import { Box, Table, TableBody, TableHead, Typography, Button } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'

import { TimeTable } from '../../../data/Timetable.js'
// import TimeTable from '../../../data/Timetable.json'

import { useRouter } from 'next/router'

let today = new Date()

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
          p: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <Typography variant="h2">First Jummah</Typography>
          <Typography variant="body1">
            Bayaan 12:00pm <br /> Salah 12:30pm
          </Typography>
        </div>
        <div>
          <Typography variant="h2">Second Jummah</Typography>
          <Typography variant="body1">
            Bayaan 1:00pm <br /> Salah 1:30pm
          </Typography>
        </div>
      </Box>
      <Box sx={{ bgcolor: 'secondary.main', display: 'flex', justifyContent: 'space-between', p: '16px' }}>
        <Typography color={'white'} sx={{ fontWeight: 'bold' }} variant="h2">
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
                <Typography sx={{ fontWeight: 'bold' }} align="right" variant="h6">
                  Start
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography sx={{ fontWeight: 'bold' }} variant="h6">
                  Jamaat
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.salah} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <StyledTableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 'bold' }} variant="h6">
                    {row.salah}
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
