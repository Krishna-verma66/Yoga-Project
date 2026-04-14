import React from 'react'
import p1 from '../assets/P1.jpg'
import p2 from '../assets/P2.jpg'

const Cards = () => {
  return (
    <div>
      <div className='w-100 px-5 py-5 border-[0.2px] border-gray-400 rounded-lg'>
        <p className='poppins text-sm'>First I've paid for online yoga program, I can feel my whole approach to life changing by utilising all of the program content!</p>
        <div className='flex gap-2 items-center mt-4'>
          <div className='w-15 h-15 rounded-full overflow-hidden'>
            <img className='object-cover w-20 h-20 ' src={p1} />
          </div>
          <div>
            <span className='text-xl font-bold poppins'>John Carter</span><br/>
            <p className='text-sm poppins'>California</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards