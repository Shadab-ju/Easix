import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = ({isOpen,setIsOpen}) => {
  return (
    <header className='container'>
        <div className="logo_menu">
                <div className="logo">
                    <Link to="/">
                    <img src="/images/logo/easix_icon_dark.png" alt="" />
                    <h1>asix</h1>
                    </Link>
                </div>
                <div className="menu" id="menu">
                    <img 
                    src="/images/icons/menu.png" 
                    alt="" 
                    onClick={()=>setIsOpen(!isOpen)}/>
                </div>
            </div>
    </header>
  )
}

export default Header