import React from 'react'

const ProgressToast = () => {
  return (
    <div className='absolute top-[5%] right-[5%] poppins'>
      <ul className='flex flex-col gap-3'>
        <li className='text-gray-600 text-sm flex flex-col items-end'>
          <span className='font-bold text-2xl text-black'>30+</span>
          Live Session
        </li>
        <li className='text-gray-600 text-sm flex flex-col items-end'>
          <span className='font-bold text-2xl text-black'>12K</span>
          Lives Impact
        </li>
        <li className='text-gray-600 text-sm flex flex-col items-end'>
          <span className='font-bold text-2xl text-black'>60%</span>
          Engagement Rate
        </li>
        <li className='text-gray-600 text-sm flex flex-col items-end'>
          <span className='font-bold text-2xl text-black'>97%</span>
          User Satisfaction
        </li>
      </ul>
    </div>
  )
}

export default ProgressToast