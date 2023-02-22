import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Divider, Typography } from '@mui/material'

type Props = {}
// <div class="fb-page" data-href="https://www.facebook.com/MasjideBilalPrestwich" data-show-posts="true" data-width="500" data-height="400" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
// <blockquote cite="https://www.facebook.com/MasjideBilalPrestwich" class="fb-xfbml-parse-ignore">
//   <a href="https://www.facebook.com/MasjideBilalPrestwich">Facebook</a>
// </blockquote>
// </div>

const mobileScript = `
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0" nonce="random-nonce"></script>
<div class="fb-page" data-href="https://www.facebook.com/MasjideBilalPrestwich" data-show-posts="true" data-width="340" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/MasjideBilalPrestwich" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/MasjideBilalPrestwich">Masjid E Bilal Prestwich</a></blockquote></div>
`
const desktopScript = `
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0" nonce="random-nonce"></script>
<div class="fb-page" data-href="https://www.facebook.com/MasjideBilalPrestwich" data-show-posts="true" data-width="500" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/MasjideBilalPrestwich" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/MasjideBilalPrestwich">Masjid E Bilal Prestwich</a></blockquote></div>
`
const LatestUpdatesCard = () => {
  const [isMobile, setisMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false) // Need this for the react-tooltip

  useEffect(() => {
    setisMobile(/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent))
    setIsMounted(true)
  }, [])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="flex justify-center">
          {isMounted && <div dangerouslySetInnerHTML={{ __html: isMobile ? mobileScript : desktopScript }} />}
        </div>
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
