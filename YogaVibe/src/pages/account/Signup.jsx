import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';

const Signup = () => {

  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/csrf/", {
      withCredentials: true
    });
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrftoken = Cookies.get('csrftoken');

    try {
      console.log(csrftoken);
      const response = await axios.post(
        "http://localhost:8000/accounts/register/",
        {
          'first_name': Username,
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
      

      console.log(response.data);
      navigate('/login');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='flex flex-col w-[54%]'>

        <h1 className='text-3xl font-bold tracking-wide roboto'>Join the journey to inner peace</h1>
        <p className='text-sm font-medium text-gray-600 mt-3 '>Start your wellness journey today</p>

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

        <form className='flex flex-col gap-2 mt-6' onSubmit={handleSubmit} method='POST'>
          <label className='text-sm font-medium'>Full Name</label>
          <input className='rounded outline-none py-3 px-2 w-100 bg-white text-sm font-medium' type='text' required placeholder='John Doe' value={Username} onChange={(e) => (
            setUsername(e.target.value)
          )} />

          <label className='text-sm font-medium'>Email Address</label>
          <input className='rounded outline-none py-3 px-2 w-100 bg-white text-sm font-medium' type='email' required placeholder='example@gamil.com' value={Email} onChange={(e) => (
            setEmail(e.target.value)
          )} />
          <label className='text-sm font-medium'>Password</label>
          <input className='rounded outline-none py-3 px-2 w-100 bg-white text-sm font-medium' type='password' required placeholder='sh12b@2ab' value={Password} onChange={(e) => (
            setPassword(e.target.value)
          )} />
          <div className='flex w-full items-center mt-1'>
            <div className='flex gap-1 items-center'>
              <input type="checkbox" /><span className='text-sm'>Remember me</span>
            </div>
          </div>

          <button className='rounded-lg outline-none mt-4 py-3 px-2 w-100 bg-indigo-600 text-white text-sm font-medium' >Sign Up</button>
        </form>
        <div className='text-sm font-medium flex justify-center w-full mt-3'>Already have an account?<Link to='/login'> <span className='text-indigo-600'>Sign in</span></Link></div>
      </div>
    </>
  )
}

export default Signup