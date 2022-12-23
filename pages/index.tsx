import Hero from '../components/Home/Hero/Hero'
import LatestUpdates from '../components/Home/LatestUpdates/LatestUpdates'
import SalahTimes from '../components/Home/SalahTimes/SalahTimes'
import React from 'react'

function App() {
  return (
    <>
      <div className="app">
        <Hero />
        <SalahTimes />
        <LatestUpdates />
      </div>
    </>
  )
}

export default App
