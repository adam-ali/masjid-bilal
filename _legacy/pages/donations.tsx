import { Box, Typography } from '@mui/material'
import React from 'react'


function BankDetail({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <>
      <Typography fontWeight={'bold'}>
        {title}
      </Typography>

      <Typography variant='body1' marginBottom={2}>
        {subtitle}
      </Typography>
    </>
  )
}

export default function donations() {
  return (
    <>

      <Box sx={{ bgcolor: 'secondary.main', display: 'flex', mb: 0, justifyContent: 'space-between', p: '16px' }}>
        <Typography color={'white'} sx={{ fontWeight: 'bold' }} variant="h2">
          DONATIONS
        </Typography>
      </Box>
      <Box sx={{ p: '16px' }}>
        <Box gap={2} marginTop={5} maxWidth={'500px'}>
          <Typography marginBottom={2}>To donate to the masjid, please use the following details. Make sure to use the reference below.   </Typography>

          <BankDetail title='Name' subtitle={'Prestwich Muslim Welfare Trust'} />
          <BankDetail title='Account Number' subtitle={'17856140'} />
          <BankDetail title='Sort Code' subtitle={'53-81-36'} />
          <BankDetail title='Reference' subtitle={'masjid donation '} />
        </Box>
      </Box >
    </>
  )
}