import React, { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';

import { AuthUser } from '../../Contexts/UserContext'


const Login = () => {
  const { userData, loading , fetchUserData} = useContext(AuthUser);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrftoken = Cookies.get('csrftoken');


    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_BACKEND_URL}/accounts/login/`,
        {
          'email': Email,
          'password': Password
        },
        {
          withCredentials: true,           // ← Most Important for cookies
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken     // Add if needed
          }
        }
      );


      fetchUserData(); // Instead of this We have to Fetch Data + (other data like profilepic, dob etc) from Login serializer(create tommorow) and use that data in profile page.
      navigate('/home');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='flex flex-col'>

        <h1 className='text-3xl font-bold tracking-wide leading-relaxed roboto'>Welcome Back</h1>
        <p className='text-sm font-medium text-gray-600'>Sign in to continue your fitness journey</p>

        <div className='flex gap-2 w-full mt-7'>
          <button className='w-1/2 poppins rounded-lg 
                p-2 px-8 text-sm 
                cursor-pointer 
                bg-[#ffffffdc]
                transition duration-100'>
            <FontAwesomeIcon icon={faGoogle} /><span className='ml-1 font-medium'>Google</span>
          </button>
          <button className='w-1/2 poppins rounded-lg 
                p-2 px-8 text-sm 
                cursor-pointer 
                bg-[#ffffffdc]
                transition duration-100'>
            <FontAwesomeIcon icon={faFacebookF} /><span className='ml-1 font-medium'>Facebook</span>
          </button>
        </div>

        <div className='flex items-center justify-center gap-2 mt-7 mb-7'>
          <div className='border-t w-30'></div> <p className='text-xs font-medium text-[#404040df]'>Or continue with email</p> <div className='border-t w-30'></div>
        </div>

        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <label className='text-sm font-medium'>Email Address</label>
          <input className='rounded outline-none py-3 px-2 w-100 bg-white text-sm font-medium' type='email' required placeholder='example@gamil.com' value={Email} onChange={(e) => (
            setEmail(e.target.value)
          )} />
          <label className='text-sm font-medium mt-4'>Password</label>
          <input className='rounded outline-none py-3 px-2 w-100 bg-white text-sm font-medium' type='password' required placeholder='sh12b@2ab' value={Password} onChange={(e) => (
            setPassword(e.target.value)
          )} />
          <div className='flex w-full justify-between items-center mt-1'>
            <div className='flex gap-1 items-center'>
              <input type="checkbox" /><span className='text-sm'>Keep me signed in</span>
            </div>
            <div className='text-sm'>Forgot password?</div>
          </div>

          <button className='rounded-lg outline-none mt-4 py-3 px-2 w-100 bg-indigo-600 text-white text-sm font-medium' >Sign In</button>
        </form>
        <div className='text-sm font-medium flex justify-center w-full mt-3'>Don't have an account? <Link to='/signup'><span className='text-indigo-600'>Sign up for free</span></Link></div>
      </div>
    </>
  )
}

export default Login