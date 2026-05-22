import React from 'react'
import { Calculator, Hourglass, CalendarCheck, Heart } from 'lucide-react'

const QuickOptions = () => {
    return (
        <div className='w-full mt-5 mb-5'>
            <h2 className='text-lg font-semibold poppins mb-1'>Quick Options</h2>
            <div className='flex gap-2 poppins w-full'>

                <div className='w-1/4 flex flex-col gap-2 cursor-pointer bg-green-200 hover:bg-green-300 rounded-xl overflow-hidden p-3'>
                    <div className='rounded'>
                        <Calculator className='text-green-400'/>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-sm font-bold'>BMI Calculator</span>
                    </div>
                </div>

                <div className='w-1/4 flex flex-col gap-2 cursor-pointer bg-indigo-300 hover:bg-indigo-400 rounded-xl overflow-hidden p-3'>
                    <div className='rounded'>
                        <Hourglass className='text-indigo-500'/>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-sm font-bold'>Start Timer</span>
                    </div>
                </div>

                <div className='w-1/4 flex flex-col gap-2 cursor-pointer bg-amber-200 hover:bg-amber-300 rounded-xl overflow-hidden p-3'>
                    <div className='rounded'>
                        <CalendarCheck className='text-amber-400'/>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-sm font-bold'>Schedule Class</span>
                    </div>
                </div>

                <div className='w-1/4 flex flex-col gap-2 cursor-pointer bg-red-200 hover:bg-red-300 rounded-xl overflow-hidden p-3'>
                    <div className='rounded'>
                        <Heart className='text-red-400'/>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-sm font-bold'>Favorites</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuickOptions