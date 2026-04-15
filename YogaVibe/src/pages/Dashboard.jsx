import React from 'react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import YogaCards from '../components/YogaCards'

const Dashboard = () => {
    return (
        <div className='flex w-screen h-screen'>
            <Sidebar />
            <div className='w-full bg-[#edebeed2]'>
                <DashboardHeader />
                <div className='flex px-4 flex-wrap gap-5'>
                    <YogaCards />
                    <YogaCards />
                    <YogaCards />
                    <YogaCards />
        
                </div>
            </div>
        </div>
    )
}

export default Dashboard