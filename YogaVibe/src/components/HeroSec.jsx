import React from 'react'
import heroimg from '../assets/HeroImg3.png'
import Cards from './Cards'
import ProgressToast from './ProgressToast'

const HeroSec = () => {
  return (
    <div className='flex h-[90%] w-full'>
      <div className='relative w-full h-full flex justify-around'>
        <img className='absolute w-130 right-60 animate animate' src={heroimg} alt="" />
        <div className='absolute top-25 pl-20 left-0 '>
          <h1 className='text-5xl font-bold leading-snug poppins'>
            Discover Yourself <br />
            Discover Yoga
          </h1>
          <p className='text-xl poppins text-gray-400 leading-snug w-150 font-semibold mt-8'>
            We share the transformative power of yoga with every mind, every body, everywhere.
          </p>
          <button className='mt-10 rounded-lg 
                py-3 px-10 text-sm 
                cursor-pointer 
                bg-[#4378ff] 
                text-white
                transition duration-100
                font-semibold poppins'>
            Join Now
          </button>

        </div>
        <div className='absolute bottom-10 right-[5%] flex gap-6'>
          <Cards />
          <Cards />
        </div>
        <ProgressToast />

      </div>
    </div>
  )
}

export default HeroSec