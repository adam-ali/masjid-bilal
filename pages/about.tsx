import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

function about({}: {}) {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }} className="green-header">
        <Typography color={'white'} sx={{ fontWeight: 'bold' }} variant="h1">
          ABOUT US
        </Typography>
      </Box>
      <div className="px-2">
        <section className="mb-10">
          <Typography sx={{ mt: 2, mb: 1, color: 'secondary.main' }} variant="h2">
            OUR HISTORY
          </Typography>
          <Divider sx={{ bgcolor: 'secondary.light', height: 2, width: '152px', mb: 3 }} />

          <Typography>
            Masjid E Bilal (Prestwich Muslim Welfare Trust – PWT) was first established in 1999 to meet the needs of the
            then small, but growing Muslim community of Prestwich. This was the first Masjid to be established in the
            Prestwich area. The aim was to provide a place of worship for the Muslim community and facilities to develop
            Islamic education for the children of the Muslim community.
          </Typography>
        </section>
        <section className="mb-10">
          <Typography sx={{ mt: 2, mb: 1, color: 'secondary.main' }} variant="h2">
            OUR OBJECTIVES
          </Typography>
          <Divider sx={{ bgcolor: 'secondary.light', height: 2, width: '152px', mb: 3 }} />
          <div>
            <Grid container alignItems="stretch" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} md={4}>
                <Card sx={{ bgcolor: '#EFEFEF', height: '250px' }}>
                  <CardContent sx={{ my: '30px' }}>
                    <Typography gutterBottom variant="h5" component="h5">
                      1
                    </Typography>
                    <Typography>
                      To advance the understanding and practices of the Islamic faith in accordance of the Quran, Hadith
                      and Sunnah of the prophet Muhammad (Sallallahu Alaiyhi Wassallam)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ bgcolor: '#EFEFEF', height: '250px' }}>
                  <CardContent sx={{ my: '30px' }}>
                    <Typography gutterBottom variant="h5" component="h5">
                      2
                    </Typography>
                    <Typography>
                      Provide suitable religious education for the Muslim and non-Muslim community of Prestwich.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ bgcolor: '#EFEFEF', height: '250px' }}>
                  <CardContent sx={{ my: '30px' }}>
                    <Typography gutterBottom variant="h5" component="h5">
                      3
                    </Typography>
                    <Typography>
                      Provide materials and accommodation where the religious aspirations of the Muslim community can be
                      catered for
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className="mb-5">
          <Typography sx={{ mt: 2, mb: 1, color: 'secondary.main' }} variant="h2">
            OUR CENTER
          </Typography>
          <Divider sx={{ bgcolor: 'secondary.light', height: 2, width: '152px', mb: 3 }} />
          <Typography>
            The centre currently consists of one building; the Masjid which is utilised for daily worship and prayers,
            children’s educational classes and a whole host of other activities.
          </Typography>
        </section>
      </div>
    </>
  )
}

export default about
