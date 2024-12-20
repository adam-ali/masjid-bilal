import Hero from '../components/Home/Hero/Hero'
import LiveMediaFeed from '../components/Home/LiveMediaFeed/LiveMediaFeed'
import SalahTimes from '../components/Home/SalahTimes/SalahTimes'
import React from 'react'
import DownloadApp from '../components/Home/DownloadApp/DownloadApp'

function App() {
  return (
    <>
      <div className="app">
        <Hero />
        <SalahTimes />
        <DownloadApp />
        <LiveMediaFeed />
      </div>
    </>
  )
}

export default App
