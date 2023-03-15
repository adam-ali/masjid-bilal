import Hero from '../components/Home/Hero/Hero'
import LiveMediaFeed from '../components/Home/LiveMediaFeed/LiveMediaFeed'
import SalahTimes from '../components/Home/SalahTimes/SalahTimes'
import React from 'react'

function App(props: {}) {
  return (
    <>
      <div className="app">
        <Hero />
        <SalahTimes />
        <LiveMediaFeed />
      </div>
    </>
  )
}

export default App
