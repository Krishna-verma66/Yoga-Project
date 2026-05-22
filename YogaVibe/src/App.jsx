import './App.css'
import HeroSec from './components/HeroSec'
import Navbar from './components/Navbar'
import Auth from './pages/account/Auth'
import Login from './pages/account/Login'
import Signup from './pages/account/Signup'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext, useState } from 'react'
import HomeOption from './components/HomeOption'
import ProfileOption from './components/ProfileOption'
import ProtectedRoute from './components/ProtectedRoutes' 
import PublicRoute from './components/PublicRoutes' 






function App() {

  return (
    <>

      <div className='relative h-screen w-full'>
        <BrowserRouter>
          <Routes>

            {/* Public */}
            <Route path="/" element={<Home />} />



            {/* Auth Routes */}
            <Route element={<PublicRoute />}>

              <Route element={<Auth />}>

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

              </Route>

            </Route>



            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>

              <Route element={<Dashboard />}>

                <Route path="/home" element={<HomeOption />} />

                <Route path="/profile" element={<ProfileOption />} />

              </Route>

            </Route>

          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
