import React from 'react'
import CardStartup from './cardStartup'
import CardVC from './cardVC'
import Navbar from './Navbar'
import Footer from './Footer'

const width = {
  width:'100%',
  
}; 
const GuestPage = () => {
  return (
    <div>

    <div className='card-container' >
    <Navbar/>
    </div>
    <div className='card-container'>
    <CardStartup/>
    </div>
    <div className='card-container'>
    <CardVC/>
    </div>
    <div className='card-container'>
    <Footer/>
    </div>
    </div>
  )
}

export default GuestPage