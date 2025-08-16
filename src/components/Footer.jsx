import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
        <div className="footer_background">
        <footer className="">
            <div className="pages_subscription">
                <div className="pages">
                    <h3>Pages</h3>
                    <div><Link to="/" className='a_link'>Home </Link></div>
                    <div><Link to="/services" className='a_link'>Services </Link></div>
                    <div><Link to="/career" className='a_link'>Career </Link></div>
                    <div><Link to="/about_us" className='a_link'>About Us </Link></div>
                    <div><Link to="/contact_us" className='a_link'>Contact Us </Link></div>
                </div>
                
                <div className="heading_subscription">
                    <h3>Subscribe Our Newsletter!</h3>
                    <div className="subscription">
                        <input type="text" placeholder="Email" />
                        <button>Subscribe</button>
                    </div>
                </div>
        
            </div>
        
            <div className="copyright">
                &copy;2025 Easix. All right reserved.
            </div>
        </footer>
        </div>
    )
}

export default Footer