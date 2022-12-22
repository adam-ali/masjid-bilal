import React from 'react'
import { Box, Container } from '@mui/system'
// import './Hero.css'
import MasjideBilal from '../../../public/MasjideBilal.png'
// import { Image } from 'mui-image'
//import Image from 'next/legacy/image' //'next/image'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
      <Box sx={{ bgcolor: '#cfe8fc', height: '300px', overflow: 'hidden' }}>
        {/* <div className="hero-img">
        <p className="image-txt">text</p>
      </div> */}
        <div className="relative w-full	h-full">
          <Image src={MasjideBilal} layout="responsive" alt="Masjid Bilal" />
        </div>
      </Box>
    </>
  )
}

export default Hero
