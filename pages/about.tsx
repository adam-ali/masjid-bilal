import { Divider, Typography } from '@mui/material'
import React, { PropsWithChildren } from 'react'

function about(props: PropsWithChildren) {
  return (
    <>
      <Typography sx={{ mt: 2, mb: 1 }} variant="h1">
        ABOUT US
      </Typography>
      <Divider sx={{ bgcolor: 'primary.light', height: 2, width: '152px', mb: 3 }} />

      <Typography>
        Masjid E Bilal (Prestwich Muslim Welfare Trust – PWT) was first established in 1999 to meet the needs of the
        then small, but growing Muslim community of Prestwich. This was the first Masjid to be established in the
        Prestwich area. The aim was to provide a place of worship for the Muslim community and facilities to develop
        Islamic education for the children of the Muslim community.
      </Typography>

      {/* <Typography>
        Our three key objectives are: • To advance the understanding and practices of the Islamic faith in accordance of
        the Quran, Hadith and Sunnah of the prophet Muhammad (Sallallahu Alaiyhi Wassallam) • Provide suitable religious
        education for the Muslim and non-Muslim community of Prestwich. • Provide materials and accommodation where the
        religious aspirations of the Muslim community can be catered for The centre currently consists of one building;
        the Masjid which is utilised for daily worship and prayers, children’s educational classes and a whole host of
        other activities.
      </Typography> */}
    </>
  )
}

export default about
