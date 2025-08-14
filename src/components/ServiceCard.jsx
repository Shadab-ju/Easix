import React from 'react'
import './ServiceCard.css'
const ServiceCard = ({heading, src, reasons}) => {
  return (
    <section className="mobile container">
        <h1>{heading}</h1>
        <div className="image_reasons">
            <div className="reason_image">
                <img src={src} alt=""/>
            </div>
            <ul className="reason">
                {reasons.map((reason, id)=>
                  <li key={id}>{reason}</li>)}
            </ul>
        </div>
    </section>
  )
}

export default ServiceCard