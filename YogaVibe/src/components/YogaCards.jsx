import React from 'react'
import {Clock3} from 'lucide-react'

const YogaCards = ({poseImg, timing, desc, duration, level}) => {
  return (
    <div className='shrink-0 shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl'>
        <div className='flex flex-col rounded-xl px-2.5 py-2.5 bg-white poppins w-57'>
            <div className='rounded-xl overflow-hidden w-52 h-40'>
                <img className='object-cover w-52 h-40' src={poseImg} alt="" />
            </div>
            <div className='w-full px-3 py-3'>
                <h1 className='text-l font-semibold poppins'>{timing}</h1>
                <p className='text-xs font-normal text-gray-600'>{desc}</p>
            </div>
            <div className='w-full px-3  flex justify-between items-center'>
                <span className='flex gap-1 text-xs font-semibold text-gray-600'><Clock3 size={15} />{duration} min</span>
                <span className='text-xs font-semibold bg-green-300 text-green-700 rounded-2xl py-1 px-4'>
                    {level}
                </span>
            </div>
        </div>
    </div>
  )
}

export default YogaCards