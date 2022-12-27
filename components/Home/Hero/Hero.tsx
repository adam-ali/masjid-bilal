import React from 'react'
import { Box } from '@mui/system'
// import './Hero.css'
import MasjideBilal from '../../../public/MasjideBilal.png'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
      <Box sx={{ bgcolor: '#cfe8fc', height: '300px', overflow: 'hidden' }}>
        <div className="relative w-full	h-full">
          <Image src={MasjideBilal} layout="responsive" alt="Masjid Bilal" />
        </div>
      </Box>
    </>
  )
}

export default Hero
