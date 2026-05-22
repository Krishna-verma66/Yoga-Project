import React from 'react'
import DashboardHeader from '../components/DashboardHeader'
import SuggestedYoga from '../components/SuggestedYoga'
import YogaCards from '../components/YogaCards'
import QuickOptions from '../components/QuickOptions'
import Streak from '../components/Streak'
import BmiCalc from '../components/BmiCalc'
import pose1 from '../assets/pose1.jpg'
import pose2 from '../assets/pose2.jpg'
import pose3 from '../assets/pose3.jpg'

const HomeOption = () => {
    let cardData = [
        {
            poseImg: pose1,
            timing: 'Evening Relaxation',
            desc: 'This Pose is perfect for stress relief',
            duration: 15,
            level: 'beginner'
        },
        {
            poseImg: pose2,
            timing: 'Evening Relaxation',
            desc: 'This Pose is perfect for sterss relief',
            duration: 10,
            level: 'beginner'
        },
        {
            poseImg: pose3,
            timing: 'Evening Relaxation',
            desc: 'This Pose is perfect for sterss relief',
            duration: 2,
            level: 'beginner'
        }

    ]
    return (
        <>
            <div className='flex flex-col w-5/6'>
                <DashboardHeader />

                <div className='w-full flex overflow-hidden'>
                    <div className='flex flex-col w-[70%] px-8 py-2 overflow-y-auto will-change-scroll no-scrollbar'>
                        <SuggestedYoga />

                        <div className='w-full flex flex-col gap-1 mt-5'>
                            <div className='flex justify-between'>
                                <h2 className='text-lg font-semibold poppins'>Popular Yoga Practices</h2>
                                <span className='cursor-pointer text-xs font-bold poppins flex items-center'>View All</span>
                            </div>
                            <div className='w-full flex justify-around gap-4'>
                                {
                                    cardData.map((ele, idx) => (
                                        <YogaCards key={idx} poseImg={ele.poseImg} timing={ele.timing} desc={ele.desc} duration={ele.duration} level={ele.level} />
                                    ))
                                }
                            </div>

                            <QuickOptions />
                        </div>

                    </div>
                    <div className='flex flex-col items-center w-[30%] h-full gap-5 pb-4'>
                        <Streak />
                        <BmiCalc />
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeOption