import React from 'react'
import Navbar from '../components/Navbar'
import HeroSec from '../components/HeroSec'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <>
      <Navbar />
      <hr className='w-[90%] h-0.2 ml-[5%] bg-[#898a8d44]'></hr>
      <HeroSec />
      
    </>
  )
}

export default Home