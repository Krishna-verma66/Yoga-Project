import React from 'react'
import Sidebar from '../components/Sidebar'
import HomeOption from '../components/HomeOption'
import ProfileOption from '../components/ProfileOption'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='flex w-screen h-screen bg-indigo-200'>
            <Sidebar />

            <Outlet />
        </div>
    )
}

export default Dashboard