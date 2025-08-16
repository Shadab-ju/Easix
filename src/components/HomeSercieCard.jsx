import React from 'react'
import { Link } from 'react-router-dom'

const HomeSercieCard = ({src, heading, description}) => {
  return (
                <div className="card">
                <img className="card-img-top" src={src} alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">{heading}</h4>
                    <p className="card-text">{description}</p>
                    <div className="button">
                        <Link to="/contact_us">Learn more</Link>
                    </div>
                </div>
            </div>
  )
}

export default HomeSercieCard