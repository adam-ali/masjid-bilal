import Head from 'next/head'
import Hero from '../components/Home/Hero/Hero'
import LatestUpdates from '../components/Home/LatestUpdates/LatestUpdates'
import SalahTimes from '../components/Home/SalahTimes/SalahTimes'
import React from 'react'

function App() {
  return (
    <>
      <Head>
        <title>Masjid Bilal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mosqu.ico" />
      </Head>
      <div className="app">
        <Hero />
        <SalahTimes />
        <LatestUpdates />
      </div>
    </>
  )
}

export default App
