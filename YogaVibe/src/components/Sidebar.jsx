import React from 'react'
import logo from '../assets/Logo2.jpg'
import pp from '../assets/Pp.png'
import { NavLink } from 'react-router-dom'
import { LayoutGrid, PersonStanding, Activity, Component, Settings, BookOpenText } from 'lucide-react'

const Sidebar = () => {
    return (
        <div className='flex flex-col w-1/6 h-screen bg-indigo-300 text-black'>
            <div className='flex gap-3 items-center px-6 py-4'>
                <div className='overflow-hidden rounded bg-indigo-500 w-10 h-10 flex items-center justify-center'>
                    <img className='object-cover w-12 h-12 bg-transparent' src={logo} alt='Brand Logo' />
                </div>
                <h2 className='poppins text-xl font-semibold text-black cursor-pointer'>Yoga<span className='text-[#5787ff]'>Vibe</span></h2>
            </div>

            <div className='flex flex-col px-2 poppins'>
                <div className='flex flex-col items-center gap-2'>

                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            `className='text-sm h-13 pl-7 rounded-xl font-semibold w-[88%] flex items-center cursor-pointer ${isActive
                                ? "bg-[#1b2e4c] text-indigo-400"
                                : "hover:bg-[#1b2e4c] hover:text-indigo-400"
                            }`
                        }
                    ><LayoutGrid className='mr-4' size={20} /> 
                        Home
                    </NavLink>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `className='text-sm h-13 pl-7 rounded-xl font-semibold w-[88%] flex items-center cursor-pointer ${isActive
                                ? "bg-[#1b2e4c] text-indigo-400"
                                : "hover:bg-[#1b2e4c] hover:text-indigo-400"
                            }`
                        }
                    ><PersonStanding className='mr-4' size={20} /> 
                        Yoga Poses
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `className='text-sm h-13 pl-7 rounded-xl font-semibold w-[88%] flex items-center cursor-pointer ${isActive
                                ? "bg-[#1b2e4c] text-indigo-400"
                                : "hover:bg-[#1b2e4c] hover:text-indigo-400"
                            }`
                        }
                    ><BookOpenText className='mr-4' size={20} /> 
                        Classes
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `className='text-sm h-13 pl-7 rounded-xl font-semibold w-[88%] flex items-center cursor-pointer ${isActive
                                ? "bg-[#1b2e4c] text-indigo-400"
                                : "hover:bg-[#1b2e4c] hover:text-indigo-400"
                            }`
                        }
                    ><Component className='mr-4' size={20} /> 
                        Programs
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `className='text-sm h-13 pl-7 rounded-xl font-semibold w-[88%] flex items-center cursor-pointer ${isActive
                                ? "bg-[#1b2e4c] text-indigo-400"
                                : "hover:bg-[#1b2e4c] hover:text-indigo-400"
                            }`
                        }
                    ><Activity className='mr-4' size={20} /> 
                        Profile
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `className='text-sm h-13 pl-7 rounded-xl font-semibold w-[88%] flex items-center cursor-pointer ${isActive
                                ? "bg-[#1b2e4c] text-indigo-400"
                                : "hover:bg-[#1b2e4c] hover:text-indigo-400"
                            }`
                        }
                    ><Settings className='mr-4' size={20} /> 
                        Settings
                    </NavLink>
                </div>
            </div>

            <div className='flex flex-col w-[92%] mx-[4%] mt-2 h-90 rounded-2xl items-center justify-around bg-indigo-300 poppins'>
                <div className='w-full flex flex-col items-center'>
                    <img className='w-[75%]' src={pp} alt="" />
                    <h2 className='font-bold'>Ready to Begin.</h2>
                    <p className='text-xs text-gray-900 w-[80%] text-center mt-2'>Start your yoga journey today with our guided session.</p>
                </div>
                <button className='cursor-pointer flex items-center justify-center w-[96%] h-12 bg-[#1b2e4c] rounded-xl text-white font-semibold text-sm poppins'>
                    Start Practice
                </button>
            </div>
        </div>
    )
}

export default Sidebar