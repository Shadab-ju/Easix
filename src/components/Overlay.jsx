import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'
import { menuItems } from '../utils/constants'
import './Overlay.css'
const Overlay = ({isOpen, setIsOpen}) => {
    if(!isOpen) return null
    return (
        <div className="nav_menulist" id="menu_list">
                <div className="container">
                    <div className="nav_logo_close">
                        <div className="nav_logo">
                            <Link to="/" onClick={()=>setIsOpen(!isOpen)} className='nav_logo_overlay'><img src="./images/logo/easix_icon_dark.png" alt=""/><h1>asix</h1></Link>
                        </div>
                        <div className="close" id="close">
                            <img src="images/icons/close.png"
                             alt=""
                             onClick={()=>setIsOpen(!isOpen)}
                             />
                        </div>
                    </div>

                    {menuItems.map((menuItem, id)=>
                        <MenuItem key={id} src={menuItem.src} path={menuItem.path} name={menuItem.name} setIsOpen={setIsOpen} isOpen={isOpen}/>
                        )}
                </div>
        </div>
    )
}

export default Overlay