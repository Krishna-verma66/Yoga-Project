import React from 'react'
import logo from '../assets/Logo2.jpg'
import pp from '../assets/Pp.png'
import { LayoutGrid, PersonStanding, Activity, Component, Settings, BookOpenText } from 'lucide-react'

const Sidebar = () => {
    return (
        <div className='flex flex-col w-1/6 h-screen bg-indigo-200 text-black'>
            <div className='flex gap-3 items-center px-6 py-4'>
                <div className='overflow-hidden rounded bg-indigo-500 w-10 h-10 flex items-center justify-center'>
                    <img className='object-cover w-12 h-12 bg-transparent' src={logo} alt='Brand Logo' />
                </div>
                <h2 className='poppins text-xl font-semibold text-black cursor-pointer'>Yoga<span className='text-[#5787ff]'>Vibe</span></h2>
            </div>

            <div className='flex flex-col px-2 poppins'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='text-sm h-13 pl-7 rounded-xl hover:text-indigo-400 font-semibold w-[88%] flex items-center cursor-pointer hover:bg-[#1b2e4c]'><LayoutGrid className='mr-4 hover:text-indigo-400' size={20} /> Home</div>
                    <div className='text-sm h-13 pl-7 rounded-xl hover:text-indigo-400 font-semibold w-[88%] flex items-center cursor-pointer hover:bg-[#1b2e4c]'><PersonStanding className='mr-4 hover:text-indigo-400' size={20} /> Yoga Posses</div>
                    <div className='text-sm h-13 pl-7 rounded-xl hover:text-indigo-400 font-semibold w-[88%] flex items-center cursor-pointer hover:bg-[#1b2e4c]'><BookOpenText className='mr-4 hover:text-indigo-400' size={20} /> Classes</div>
                    <div className='text-sm h-13 pl-7 rounded-xl hover:text-indigo-400 font-semibold w-[88%] flex items-center cursor-pointer hover:bg-[#1b2e4c]'><Component className='mr-4 hover:text-indigo-400' size={20} /> Programs</div>
                    <div className='text-sm h-13 pl-7 rounded-xl hover:text-indigo-400 font-semibold w-[88%] flex items-center cursor-pointer hover:bg-[#1b2e4c]'><Activity className='mr-4 hover:text-indigo-400' size={20} /> Progress</div>
                    <div className='text-sm h-13 pl-7 rounded-xl hover:text-indigo-400 font-semibold w-[88%] flex items-center cursor-pointer hover:bg-[#1b2e4c]'><Settings className='mr-4 hover:text-indigo-400' size={20} />Settings</div>

                </div>
            </div>

            <div className='flex flex-col w-[92%] mx-[4%] mt-2 h-90 rounded-2xl items-center justify-around bg-indigo-300 poppins'>
                <div className='w-full flex flex-col items-center'>
                    <img className='w-[75%]' src={pp} alt="" />
                    <h2 className='font-bold'>Ready to Begin.</h2>
                    <p className='text-sm text-gray-900 w-[80%] text-center mt-2'>Start your yoga journey today with our guided session.</p>
                </div>
                <button className='cursor-pointer flex items-center justify-center w-[96%] h-12 bg-[#1b2e4c] rounded-xl text-white font-semibold text-sm poppins'>
                    Start Practice
                </button>
            </div>
        </div>
    )
}

export default Sidebar