import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({name, src, path}) => {
  return (
    <div className="menu_item">
        <div className="chevron">
            <img src={src} alt=""/>
            </div>
        <Link to={path}>{name}</Link>
    </div>

  )
}

export default MenuItem