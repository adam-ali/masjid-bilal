import { Box, Container } from '@mui/system'
// import './Hero.css'
import MasjideBilal from '../../../assets/MasjideBilal.jpeg'
import { Image } from 'mui-image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
      <Box sx={{ bgcolor: '#cfe8fc', height: '300px' }}>
        {/* <div className="hero-img">
        <p className="image-txt">text</p>
      </div> */}
        <Image src={MasjideBilal} style={{ borderRadius: 5 }} easing="ease" fit="cover" />
      </Box>
    </>
  )
}

export default Hero
