import React from 'react'
import pose1 from "../assets/pose1.jpg"
import {Clock3} from 'lucide-react'

const YogaCards = () => {
  return (
    <div className='shrink-0 scale-95'>
        <div className='flex flex-col rounded-xl px-2.5 py-3 bg-white poppins w-60'>
            <div className='rounded-xl overflow-hidden w-55 h-50'>
                <img className='object-cover w-55 h-50' src={pose1} alt="" />
            </div>
            <div className='w-full px-3 py-3'>
                <h1 className='text-l font-semibold poppins'>Evening Relaxation</h1>
                <p className='text-xs font-normal text-gray-600'>Fresh yourself and stay concious.</p>
            </div>
            <div className='w-full px-3  flex justify-between items-center'>
                <span className='flex gap-1 text-xs font-semibold text-gray-600'><Clock3 size={15} /> 15 min</span>
                <span className='text-xs font-semibold bg-green-300 text-green-700 rounded-2xl py-1 px-4'>
                    Beginner
                </span>
            </div>
        </div>
    </div>
  )
}

export default YogaCards