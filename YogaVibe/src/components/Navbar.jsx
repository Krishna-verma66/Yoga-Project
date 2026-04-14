import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='w-full h-[10%] py-6 px-20 flex items-center justify-between'>
                <h2 className='poppins text-2xl font-semibold text-black cursor-pointer'>Yoga<span className='text-[#5787ff]'>Vibe</span></h2>
                <div className='flex w-1/3 justify-around items-center poppins cursor-pointer font-normal'>
                    <span className="relative text-gray-800 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-0.5 after:w-full after:bg-blue-500 
          after:scale-x-0 after:origin-right 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100 hover:after:origin-left">
                        Home
                    </span>
                    <span className="relative text-gray-800 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-0.5 after:w-full after:bg-blue-500 
          after:scale-x-0 after:origin-right 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100 hover:after:origin-left">Classes</span>
                    <span className="relative text-gray-800 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-0.5 after:w-full after:bg-blue-500 
          after:scale-x-0 after:origin-right 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100 hover:after:origin-left">Pricing</span>
                    <span className="relative text-gray-800 
          after:content-[''] after:absolute after:left-0 after:bottom-0 
          after:h-0.5 after:w-full after:bg-blue-500 
          after:scale-x-0 after:origin-right 
          after:transition-transform after:duration-300 
          hover:after:scale-x-100 hover:after:origin-left">Contact</span>
                </div>
                <button className='poppins border rounded-lg 
                p-2 px-8 text-sm 
                cursor-pointer 
                hover:bg-[#080808dc] 
                hover:text-white *
                hover:border-[#080808dc]
                transition duration-100'>
                    Sign In
                </button>
            </div>
        </>
    )
}

export default Navbar