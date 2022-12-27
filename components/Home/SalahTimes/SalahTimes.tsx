import React from 'react'
import { Box, Paper, Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'

import TimeTable from '../../../data/Timetable.json'
type Props = {}

var today = new Date()
var dd = String(today.getDate())
const todaysData = TimeTable.find((i) => {
  if (i.Date === dd) {
    return i
  }
})
const rows = [
  { salah: 'Fajr', start: todaysData?.Fajar, jamaat: todaysData?.fajarJamaat },
  { salah: 'Zuhur', start: todaysData?.Zuhar, jamaat: todaysData?.zuharJamaat },
  { salah: 'Asar', start: todaysData?.Asar, jamaat: todaysData?.asarJamaat },
  { salah: 'Maghrib', start: todaysData?.maghribJamaat, jamaat: todaysData?.maghribJamaat },
  { salah: 'Isha', start: todaysData?.Isha, jamaat: todaysData?.ishaJamaat }
]

const SalahTimes = (props: Props) => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#cef2d8'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'black',
      color: 'white'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  }))
  return (
    <>
      <Box
        sx={{
          bgcolor: '#EDEDED',
          px: '20px',
          py: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            First Jummah
          </Typography>
          <Typography variant="body1">
            Bayaan 12:00 <br /> Salah 12:30
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Second Jummah
          </Typography>
          <Typography variant="body1">
            Bayaan 1:00 <br /> Salah 1:30
          </Typography>
        </div>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }} className="green-header">
        <Typography color={'white'} sx={{ fontWeight: 'bold' }} variant="h6">
          SALAH TIMES
        </Typography>
        <Typography color={'white'} align={'right'} variant="h6">
          {today.toDateString()}
        </Typography>
      </Box>
      <Box sx={{ bgcolor: '#ffffff', px: '0px' }}>
        <Table align="center" sx={{ px: 0 }} aria-label="simple table">
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
      </Box>
    </>
  )
}

export default SalahTimes