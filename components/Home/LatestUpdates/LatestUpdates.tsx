import React from 'react'
import { Box, Card, CardActions, CardContent, Divider, Typography } from '@mui/material'

type Props = {}

const LatestUpdatesCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h2">Tafseer Classes</Typography>
        <Typography variant="body1">
          Our Tafseer classes take place every Friday after Isha, where we go through the meaning of the 30th Juz.
        </Typography>
      </CardContent>
      <CardActions>{/* <Button size="small">Learn More</Button> */}</CardActions>
    </Card>
  )
}
const LatestUpdates = (props: Props) => {
  return (
    <>
      <Box sx={{ bgcolor: 'secondary.main', mt: '30px', p: '16px' }}>
        <Typography color={'white'} variant="h2">
          EVENTS
        </Typography>
      </Box>

      {/* <Box component="span"> */}
      {/* <LatestUpdatesCard /> */}
      <LatestUpdatesCard />
      {/* </Box> */}
    </>
  )
}

export default LatestUpdates
