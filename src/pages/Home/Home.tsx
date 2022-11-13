import { Container } from '@mui/material'
import React from 'react'
import Hero from './Hero/Hero'
import LatestUpdates from './LatestUpdates/LatestUpdates'
import SalahTimes from './SalahTimes/SalahTimes'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <SalahTimes />
      <LatestUpdates />
    </div>
  )
}
export default Home
