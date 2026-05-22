import { useContext, useState } from 'react'
import profile from '../assets/profile.jpg'
import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AuthUser } from '../Contexts/UserContext'


const DashboardHeader = () => {
    const { userData, loading } = useContext(AuthUser);

    return (
        <div className='flex itmes-center justify-between py-5 px-8 w-full poppins'>
            <div>
                <h1 className='text-2xl font-bold '>Good morning, <span className='text-blue-400'>{userData.data.first_name}</span></h1>
                <p className='text-sm font-normal text-gray-700'>
                    Welcome to your yoga journey. Ready to find your inner peace?
                </p>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <Bell size={20} />
                <div className='rounded-full w-12 h-12 overflow-hidden'>
                    <Link to='/profile'>
                        <img className='object-cover w-12 h-12 ' src={profile} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader