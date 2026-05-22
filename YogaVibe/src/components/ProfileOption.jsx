import { useContext, useState } from 'react'
import suggested from '../assets/sugg1.png'
import { Clock4 } from 'lucide-react'
import pp from '../assets/HeroImg.jpg'
import { AuthUser } from '../Contexts/UserContext'
import { CalendarCheck, Hourglass, Award, SunDim, Check, HandFist, Flame, CalendarMinus2, Moon, Star } from 'lucide-react'

const ProfileOption = () => {
 
    const { userData, loading } = useContext(AuthUser);
    let profileName = userData.data.first_name.split(" ")[0];

    const percentage = 72;

    // Circle values
    const radius = 70;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;

    // Progress calculation
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className='w-5/6 px-6 py-4 poppins flex flex-col gap-5 overflow-y-auto will-change-scroll no-scrollbar'>
            <div className='shrink-0 flex justify-between items-center h-40 rounded-2xl bg-linear-to-r from-indigo-500 to-indigo-400 w-full overflow-hidden poppins'>
                <div className='w-1/2 flex items-center gap-5 pl-8 poppins'>
                    <div className='w-25 h-25 rounded-full overflow-hidden object-contain border-4 flex items-center justify-center p-1 bg-white/40 border-indigo-700'>
                        <img src={pp} alt="profile picture" className='w-full h-full object-cover rounded-full' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-semibold text-white'>{userData.data.first_name}</h1>
                        <div className='flex gap-4 font-medium text-white/60 text-xs '>
                            <span>@{profileName}Yoga</span>
                            <span>Member since Jan 2024</span>
                        </div>
                        <div className='flex gap-4 font-medium text-white/60 text-xs mt-1'>
                            <span className='bg-white/20 py-1 px-4 rounded-2xl'>Intermediate</span>
                            <span className='bg-white/20 py-1 px-4 rounded-2xl'>Vinyasa</span>
                            <span className='bg-white/20 py-1 px-4 rounded-2xl'>Mindfulness</span>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full flex gap-20 justify-center items-center'>
                    <div className='flex gap-5 items-center'>
                        <span className='text-xl font-medium text-white/60 flex flex-col text-center'>142<span className='text-xs text-white/40'>Sessions</span></span>
                        <span className='text-xl font-medium text-white/60 flex flex-col text-center'>38h<span className='text-xs text-white/40'>Total Time</span></span>
                        <span className='text-xl font-medium text-white/60 flex flex-col text-center'>21<span className='text-xs text-white/40'>Best Streak</span></span>
                    </div>
                    <button className='active:bg-white/10 transition-all transition-1 shadow-lg border-none py-2 px-8 rounded-xl bg-white/20 text-sm text-white/80 font-medium'>Edit Profile</button>
                </div>
            </div>
            <div className='shrink-0 flex gap-4 h-40 w-full'>
                <div className='w-1/3 h-full bg-white rounded-lg flex flex-col justify-end pb-6'>
                    <CalendarCheck className='ml-5 mb-5' color='red' />
                    <h1 className='w-[90%] text-2xl font-bold ml-5'>8</h1>
                    <p className='w-[90%] font-medium text-sm ml-5 text-gray-500 mb-2'>Day Streak</p>
                    <div className='w-[90%] h-1.5 rounded overflow-hidden ml-5 bg-gray-200'><div className='h-full w-[80%] bg-red-500'></div></div>
                </div>
                <div className='w-1/3 h-full bg-white rounded-lg flex flex-col justify-end pb-6'>
                    <Hourglass className='ml-5 mb-5' color='green' />
                    <h1 className='w-[90%] text-2xl font-bold ml-5'>2.3h</h1>
                    <p className='w-[90%] font-medium text-sm text-gray-500 ml-5 mb-2'>This Week</p>
                    <div className='w-[90%] h-1.5 rounded overflow-hidden ml-5 bg-gray-200'><div className='h-full w-[30%] bg-green-500'></div></div>
                </div>
                <div className='w-1/3 h-full bg-white rounded-lg flex flex-col justify-end pb-6'>
                    <Award className='ml-5 mb-5' color='blue' />
                    <h1 className='w-[90%] text-2xl font-bold ml-5'>12</h1>
                    <p className='w-[90%] font-medium text-sm text-gray-500 mb-2 ml-5'>Badges Earned</p>
                    <div className='w-[90%] h-1.5 rounded overflow-hidden bg-gray-200 ml-5'><div className='h-full w-[60%] bg-indigo-500'></div></div>
                </div>
            </div>
            <div className='shrink-0 flex gap-4 h-40 w-full'>
                <div className='flex gap-1 flex-col items-center w-3/5 h-full rounded-xl bg-white py-3'>
                    <div className='flex justify-between font-semibold text-xs w-[95%]'><span>Weekly Activity</span><span className='text-gray-500'>This Week</span></div>

                    <div className='flex gap-2 w-[95%] h-60 text-xs font-semibold mt-1'>
                        <div className='flex flex-col items-center rounded-t-lg w-1/7 h-full justify-end'><span className='text-center'>100%</span><div className='bg-indigo-500 rounded-t-lg w-full h-[100%]'></div></div>
                        <div className='flex flex-col items-center rounded-t-lg w-1/7 h-full justify-end'><span className='text-center'>60%</span><div className='bg-indigo-500 rounded-t-lg w-full h-[60%]'></div></div>
                        <div className='flex flex-col items-center rounded-t-lg w-1/7 h-full justify-end'><span className='text-center'>50%</span><div className='bg-indigo-500 rounded-t-lg w-full h-[50%]'></div></div>
                        <div className='flex flex-col items-center rounded-t-lg w-1/7 h-full justify-end'><span className='text-center'>20%</span><div className='bg-indigo-500 rounded-t-lg w-full h-[20%]'></div></div>
                        <div className='flex flex-col items-center rounded-t-lg w-1/7 h-full justify-end'><span className='text-center'>7%</span><div className='bg-indigo-500 rounded-t-lg w-full h-[7%]'></div></div>
                        <div className='flex flex-col items-center rounded-t-lg w-1/7 h-full justify-end'><span className='text-center'>55%</span><div className='bg-indigo-500 rounded-t-lg w-full h-[55%]'></div></div>
                        <div className='flex flex-col items-center rounded-t-lg w-1/7 h-full justify-end'><span className='text-center'>30%</span><div className='bg-indigo-500 rounded-t-lg w-full h-[30%]'></div></div>
                    </div>
                    <div className='flex text-xs text-gray-600 font-semibold  gap-2 w-[95%]'>
                        <span className='w-1/7 text-center'>Mon</span>
                        <span className='w-1/7 text-center'>Tue</span>
                        <span className='w-1/7 text-center'>Wed</span>
                        <span className='w-1/7 text-center'>Thu</span>
                        <span className='w-1/7 text-center'>Fri</span>
                        <span className='w-1/7 text-center'>Sat</span>
                        <span className='w-1/7 text-center'>Sun</span>
                    </div>
                </div>
                <div className='w-2/5 h-full rounded-xl flex gap-2 flex-col items-center bg-white py-3'>
                    <h1 className='flex justify-between font-semibold text-xs w-[95%]'>Monthly Goal</h1>
                    <div className='w-[95%] flex gap-4'>
                        <div className='w-1/4'>
                            <div className="flex items-center justify-center">
                                <div className="relative w-full h-full">

                                    {/* Background Circle */}
                                    <svg
                                        className="w-full h-full -rotate-90"
                                        viewBox="0 0 180 180"
                                    >
                                        <circle
                                            cx="90"
                                            cy="90"
                                            r={radius}
                                            strokeWidth={strokeWidth}
                                            className="fill-none stroke-gray-300"
                                        />

                                        {/* Progress Circle */}
                                        <circle
                                            cx="90"
                                            cy="90"
                                            r={radius}
                                            strokeWidth={strokeWidth}
                                            strokeLinecap="round"
                                            className="fill-none stroke-indigo-600 transition-all duration-700"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={offset}
                                        />
                                    </svg>

                                    {/* Percentage Text */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-xl font-bold">
                                            {percentage}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-3/4 flex flex-col'>
                            <h1 className='font-bold text-2xl'>19 / 30</h1>
                            <p className='text-sm text-gray-600 font-medium'>Session completed</p>
                            <div className='flex flex-col text-xs text-gray-800 font-medium mt-2'>
                                <span className='flex items-center gap-2'><span className='w-2 h-2 bg-indigo-600 rounded-full'></span> Practice: 19 Days</span>
                                <span className='flex items-center gap-2'><span className='w-2 h-2 bg-green-600 rounded-full'></span> Streak: 4 Days</span>
                                <span className='flex items-center gap-2'><span className='w-2 h-2 bg-red-600 rounded-full'></span> Time: 2.5h / 5h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shrink-0 flex gap-4 h-70 w-full'>
                <div className='flex gap-2 flex-col items-center w-3/5 h-full rounded-xl bg-white py-3 overflow-y-auto will-change-scroll no-scrollbar'>
                    <div className='flex justify-between font-semibold text-xs w-[95%]'><span>Recent Sessions</span><button className='cursor-pointer text-gray-500'>View All</button></div>
                    
                    <div className='flex w-[90%] border-b border-b-gray-400 py-2 px-2 justify-between items-center'>
                        <div className='flex gap-4 py-2 justify-between items-center'>
                            <div className='h-10 w-10 bg-gray-200 flex items-center justify-center rounded-2xl'><SunDim size={25} className='text-orange-500'/></div>
                            <div>
                                <h2 className='text-sm font-semibold'>Morning Flow</h2>
                                <p className='flex gap-3 font-medium text-gray-500 text-xs'><span>Today</span>|<span>20 min</span>|<span>Intermediate</span></p>
                            </div>
                        </div>
                        <span className='bg-green-300 text-green-600 py-2 px-4 rounded-xl text-xs font-bold flex gap-1 items-center'><Check size={15}/>Done</span>
                    </div>

                    <div className='flex w-[90%] border-b border-b-gray-400 py-2 px-2 justify-between items-center'>
                        <div className='flex gap-4 py-2 justify-between items-center'>
                            <div className='h-10 w-10 bg-gray-200 flex items-center justify-center rounded-2xl'><HandFist size={25} className='text-red-500'/></div>
                            <div>
                                <h2 className='text-sm font-semibold'>Strength & Balance</h2>
                                <p className='flex gap-3 font-medium text-gray-500 text-xs'><span>Yesterday</span>|<span>30 min</span>|<span>Intermediate</span></p>
                            </div>
                        </div>
                        <span className='bg-green-300 text-green-600 py-2 px-4 rounded-xl text-xs font-bold flex gap-1 items-center'><Check size={15}/>Done</span>
                    </div>

                    <div className='flex w-[90%] border-b-gray-400 py-2 px-2 justify-between items-center'>
                        <div className='flex gap-4 py-2 justify-between items-center'>
                            <div className='h-10 w-10 bg-gray-200 flex items-center justify-center rounded-2xl'><Moon size={25} className='text-blue-500'/></div>
                            <div>
                                <h2 className='text-sm font-semibold'>Evening Relaxation</h2>
                                <p className='flex gap-3 font-medium text-gray-500 text-xs'><span>-</span>|<span>25 min</span>|<span>Beginner</span></p>
                            </div>
                        </div>
                        <span className='bg-indigo-300 text-indigo-600 py-2 px-4 rounded-xl text-xs font-bold flex gap-1 items-center'><CalendarMinus2 size={15}/>Pending</span>
                    </div>

                </div>
                <div className='w-2/5 h-full rounded-xl flex gap-2 flex-col items-center bg-white py-4'>
                    <div className='flex font-semibold text-xs w-[95%]'><span>Achievements</span></div>

                    <div className='flex flex-wrap gap-2 w-[95%] justify-between'>
                        <div className='flex items-center gap-2 rounded-xl bg-indigo-200 w-[49%] py-2 px-3'>
                            <span><Flame color='green' size={25} /></span>
                            <div>
                                <h2 className='font-semibold text-sm'>7-Day Streak</h2>
                                <p className='font-medium text-xs text-gray-600'>Consistency master</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 rounded-xl bg-indigo-200 w-[49%] py-2 px-3'>
                            <span><Star color='yellow' size={25} /></span>
                            <div>
                                <h2 className='font-semibold text-sm'>First 100</h2>
                                <p className='font-medium text-xs text-gray-600'>100 Sessions done</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 rounded-xl bg-indigo-200 w-[49%] py-2 px-3'>
                            <span><Star color='yellow' size={25} /></span>
                            <div>
                                <h2 className='font-semibold text-sm'>First 100</h2>
                                <p className='font-medium text-xs text-gray-600'>100 Sessions done</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileOption