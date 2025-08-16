import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { homeServiceItems } from '../utils/constants'
import HomeSercieCard from '../components/HomeSercieCard'
const Home = () => {
  return (
    <>
      <section className="hero_section">
        <div className="hero_image">
            <div className="hero">
                <h1>Want To Start or Scale<br/>  Your Business</h1>
                <h3>Launch Your digital business with ease,<br/>scale efficiently and make lucrative business</h3>
                <div className="button">
                    <Link to="/contact_us">Contact us</Link>
                </div>
            </div>
            
        </div>
    </section>
      <section className="reasons_block container">
        <h1>Top Reasons To Choose Us</h1>
        <div className="image_reasons">
            <div className="reason_image">
                <img src="/images/assets/customer_support.svg" alt="" />
            </div>
            <ul className="reason">
                <li>Launch Fast</li>
                <li>Scale Easily</li>
                <li>Manage Better</li>
                <li>Cost Effective</li>
                <li>24X7 Support</li>
            </ul>
        </div>
      </section>
      <section className="services_block">
        <h1>Services We Provide</h1>
        <div className="cardscontainer">
            {
                homeServiceItems.map((homeServiceItem, id)=>{
                    return <HomeSercieCard key={id} src={homeServiceItem.src} heading={homeServiceItem.heading} description={homeServiceItem.description} />
                })
            }
        </div>
      </section>

    </>
  )
}

export default Home