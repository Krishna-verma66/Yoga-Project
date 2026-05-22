import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import heroillustrate from '../../assets/Pp.png'
import Signup from './Signup'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='w-full h-screen flex poppins'>

      <div className='bg-indigo-500 w-1/2 h-full flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <img className='w-100' src={heroillustrate} />
          <h1 className='text-3xl font-semibold tracking-wide justify-center mt-4 mb-4 roboto'>Find Your Inner Peace</h1>
          <p className='text-sm font-medium w-100 text-center text-[#00000075] leading-relaxed'>Join thousands of practitioners on their journey to mindfulness add wellness</p>
        </div>
      </div>


      <div className='w-1/2 h-full flex items-center justify-center bg-indigo-200'>
        <Outlet />
      </div>
    </div>
  )
}

export default Auth