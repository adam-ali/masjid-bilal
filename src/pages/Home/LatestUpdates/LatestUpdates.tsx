import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'

type Props = {}

const LatestUpdatesCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5">Tafseer Classes</Typography>
        <Typography variant="body1">
          Our Tafseer classes take place every Friday after Isha, where we go through the meaning of the 30th Juz.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
const LatestUpdates = (props: Props) => {
  return (
    <>
      <Box sx={{ mt: '30px' }} className="green-header">
        <Typography color={'white'} sx={{ fontWeight: 'bold' }} variant="h6">
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
