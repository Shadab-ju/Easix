import React, { useState } from 'react'
import Header from '../components/Header'
import Overlay from '../components/Overlay'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <div className='header_overlay_list'>
            <Header setIsOpen={setIsOpen} isOpen={isOpen} />
            <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout