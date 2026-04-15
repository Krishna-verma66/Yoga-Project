import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [LoggedIn, setLoggedIn] = useState(false);
    
    useEffect(() => {
        let isToken = !!localStorage.getItem("access-token");
        if(isToken){
            setLoggedIn(true);
        }
    }, [])
    

    return (
        <>
            <div className='w-full h-[10%] py-6 px-20 flex items-center justify-between'>
                <h2 className='poppins text-2xl font-semibold text-black cursor-pointer'>Yoga<span className='text-[#5787ff]'>Vibe</span></h2>
                <div className='flex w-1/3 justify-around items-center poppins cursor-pointer font-normal'>
                    <span className="relative text-gray-800 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-0.5 after:w-full after:bg-blue-500 
          after:scale-x-0 after:origin-center 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100 hover:after:origin-center">
                        Home
                    </span>
                    <span className="relative text-gray-800 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-0.5 after:w-full after:bg-blue-500 
          after:scale-x-0 after:origin-center 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100 hover:after:origin-center">Classes</span>
                    <span className="relative text-gray-800 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-0.5 after:w-full after:bg-blue-500 
          after:scale-x-0 after:origin-center 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100 hover:after:origin-center">Pricing</span>
                    <span className="relative text-gray-800 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-0.5 after:w-full after:bg-blue-500 
          after:scale-x-0 after:origin-center 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100 hover:after:origin-center">Contact</span>
                </div>
                {LoggedIn? <button className='poppins border rounded-lg 
                p-2 px-8 text-sm 
                cursor-pointer 
                hover:bg-[#080808dc] 
                hover:text-white *
                hover:border-[#080808dc]
                transition duration-100'>
                    Dashboard
                </button>:<button className='poppins border rounded-lg 
                p-2 px-8 text-sm 
                cursor-pointer 
                hover:bg-[#080808dc] 
                hover:text-white *
                hover:border-[#080808dc]
                transition duration-100'>
                    Sign In
                </button>}
            </div>
        </>
    )
}

export default Navbar