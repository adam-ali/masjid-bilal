'use client'
import { useEffect, useState } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'

const mobileScript = `
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0" nonce="random-nonce"></script> 
<div class="fb-page" data-href="https://www.facebook.com/MasjideBilalPrestwich" data-show-posts="true" data-width="370" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/MasjideBilalPrestwich" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/MasjideBilalPrestwich">Masjid E Bilal Prestwich</a></blockquote></div>
`
const desktopScript = `
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0" nonce="random-nonce"></script>
<div class="fb-page" data-href="https://www.facebook.com/MasjideBilalPrestwich" data-show-posts="true" data-width="500" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/MasjideBilalPrestwich" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/MasjideBilalPrestwich">Masjid E Bilal Prestwich</a></blockquote></div>
`

const LiveMediaFeedCard = () => {
  const [isMobile, setisMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setisMobile(window.innerWidth < 500 ? true : false)
    setIsMounted(true)

    if (window['FB']) {
      window['FB'].XFBML.parse()
    }
  }, [])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="flex justify-center">
          {isMounted && <div dangerouslySetInnerHTML={{ __html: isMobile ? mobileScript : desktopScript }} />}
        </div>
        {/* <Typography variant="h2">Tafseer Classes</Typography>
        <Typography variant="body1">
          Our Tafseer classes take place every Friday after Isha, where we go through the meaning of the 30th Juz.
        </Typography> */}
      </CardContent>
    </Card>
  )
}
const LiveMediaFeed = () => {
  return (
    <>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'primary.light',
        }}
        my={3}
      >
        <Typography variant="h2">Media Feed</Typography>
        <LiveMediaFeedCard />
      </Box>
    </>
  )
}

export default LiveMediaFeed
