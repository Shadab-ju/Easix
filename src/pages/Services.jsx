import React from 'react'
import { serviceItems } from '../utils/constants'
import ServiceCard from '../components/ServiceCard'
import './Services.css'
const Services = () => {
  return (
    <>
      <section class="services">
        <h1>Our Services</h1>
        <p>We help businesses grow with innovative, secure, and scalable technology solutions.</p>
      </section>
      {serviceItems.map((serviceItem, id)=>
        <ServiceCard heading={serviceItem.heading} src={serviceItem.src} reasons={serviceItem.reasons}/>
      )}
    </>
  )
}

export default Services