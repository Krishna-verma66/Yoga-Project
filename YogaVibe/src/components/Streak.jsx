import React from 'react'
import {Check} from 'lucide-react'

const Streak = () => {
  return (
    <div className='poppins bg-white rounded-xl mt-4 px-4 py-4 w-[90%]'>
        <div className=''>
            <h1 className='text-sm font-bold'>7 Day Streak</h1>
            <p className='text-xs text-gray-700 font-medium w-[80%]'>keep it up! Practice today to maintain your streak.</p>
        </div>
        <div className='flex gap-2 mt-4'>
            <span className='flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500'><Check color='white' size={13} /></span>
            <span className='flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500'><Check color='white' size={13} /></span>
            <span className='flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500'><Check color='white' size={13} /></span>
            <span className='flex items-center justify-center h-6 w-6 rounded-full bg-gray-300'></span>
            <span className='flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500'><Check color='white' size={13} /></span>
            <span className='flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500'><Check color='white' size={13} /></span>
            <span className='flex items-center justify-center h-6 w-6 rounded-full bg-gray-300'></span>
        </div>
    </div>
  )
}

export default Streak