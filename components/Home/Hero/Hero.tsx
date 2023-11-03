import React from 'react'
import { Box } from '@mui/system'
// import './Hero.css'
import MasjideBilal from '../../../public/MasjideBilal.png'
import Image from 'next/image'
import { ThemeProvider, Typography, useTheme } from '@mui/material'

type Props = {}

const Hero = (props: Props) => {
  const theme = useTheme()
  const Hadith = `Abu Huraira reported that the Prophet (ﷺ), said, “Whoever goes to the mosque in the morning and evening, Allah will prepare for him a place in Paradise for every morning and evening.” [Bukhari and Muslim] `
  return (
    <>
      <Box sx={{ bgcolor: '#1b4805', height: '300px', overflow: 'hidden' }}>
        <div className="relative w-full	h-full">
          <img src="/mBilal.png" className="M-bilal-img" />
          <Typography variant="body2" className="bottom-2.5 absolute px-2 py-1" style={{ backgroundColor: '#cef2d8' }}>
            {Hadith}
          </Typography>
        </div>
      </Box>
    </>
  )
}

export default Hero
