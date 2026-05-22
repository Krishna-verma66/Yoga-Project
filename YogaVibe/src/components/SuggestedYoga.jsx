import React from 'react'
import suggested from '../assets/sugg1.png'
import { Clock4 } from 'lucide-react'


const SuggestedYoga = () => {
    return (
        <div className='w-full'>
            <h2 className='text-lg font-semibold poppins mb-1'>Today's Practice</h2>
            <div className='flex justify-between h-45 rounded-2xl bg-linear-to-r from-indigo-200 to-indigo-400 w-full overflow-hidden poppins'>
                <div className='w-1/2 ml-10 my-5'>
                    <h1 className='text-2xl font-semibold'>Morning Flow</h1>
                    <p className='mt-2 text-xs font-normal'>Start you day with this energizing 20-minute flow to awaken your body and calm your mind.</p>
                    <div className='flex gap-3 mt-8'>
                        <button className='px-7 cursor-pointer flex items-center justify-center h-10 bg-[#1b2e4c] rounded-xl text-white font-semibold text-xs poppins'>
                            Begin Practice
                        </button>
                        <button className='px-7 cursor-pointer flex items-center justify-center gap-1 h-10 bg-white rounded-xl text-black font-semibold text-sm poppins'>
                            <Clock4 className='font-bold' size={15} /> 20 min
                        </button>
                    </div>
                </div>
                <img className='object-cover h-full mr-10' src={suggested} alt="" />
            </div>
        </div>
    )
}

export default SuggestedYoga