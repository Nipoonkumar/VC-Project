import React from 'react'
import CardStartup from '../card/cardStartup'
import CardVC from '../card/cardVC.js'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'

const GuestPage = () => {
  return (

    <>
      <div>
        <Navbar />
      </div>
        <Banner />
      <div>
        <CardStartup />
      </div>
      <div>
        <CardVC />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default GuestPage