import React from 'react'
import { Box } from '@mui/system'
// import './Hero.css'
// import MasjideBilal from '../../../public/MasjideBilal.png'
import { Button, Typography } from '@mui/material'
import { HandCoins } from 'lucide-react'
import { useRouter } from 'next/router'
const hadithOld = `Abu Huraira reported that the Prophet (ﷺ), said, “Whoever goes to the mosque in the morning and evening, Allah will prepare for him a place in Paradise for every morning and evening.” [Bukhari and Muslim] `
const hadithNarration = 'The Messenger of Allah, may Allah bless him and grant him peace, said: '
const hadith = ' “Give charity without delay, for it stands in the way of calamity” [Al-Tirmidhi]'
const Hero = () => {
  const router = useRouter()

  return (
    <>
      <Box sx={{ bgcolor: '#1b4805', height: '300px', overflow: 'hidden' }}>
        <div className="relative w-full	h-full">
          <img src="/mBilal.png" className="M-bilal-img" />

          <Typography
            variant="body2"
            component="div"
            className="bottom-2.5 absolute px-2 py-1 text-center w-full opacity-95"
            style={{ backgroundColor: '#cef2d8' }}
          >
            <Typography variant="body2" className="italic">
              {hadithNarration}
            </Typography>
            <Typography variant="subtitle1">{hadith}</Typography>
            <Box>
              <Button
                variant="contained"
                disableTouchRipple
                onClick={() => router.push('donations')}
                color="secondary"
                endIcon={<HandCoins />}
              >
                Donate to the Masjid
              </Button>
            </Box>
          </Typography>
        </div>
      </Box>
    </>
  )
}

export default Hero
