import React from 'react'
import { Link } from 'react-router-dom'
import './Contact_us.css'
const Contact_us = () => {
  return (
    <>
      <section style={{textAlign: "center"}} className="services">
        <h2>Need help with your next project?</h2>
        <p>Contact our experts today to get started with a free consultation.</p>
        <Link to="/contact_us" style={{display: "inline-block", marginTop: "1rem", padding: "0.75rem 2rem", backgroundColor: "#0a192f", color: "white", borderRadius: "5px"}}>Get in Touch</Link>
      </section>
      <section className="contact_us container">
        <h1>Contact Us</h1>
        <div className="contact_image_block">
            <div className="contact_image">
                <img src="/images/assets/contact_us_bg_removed_2.png" alt="" />
            </div>
            <div className="contact_detail_block">
                <form action="">
                    <div>
                        <input type="text" id="email" placeholder="Email" />
                    </div>
                    <div>
                        <input type="text" id="phone" placeholder="Phone Number" />
                    </div>
                    <div>
                        <textarea name="test" placeholder="Summary" row="6"></textarea>
                    </div>
                    <div>
                        <button onClick={e=>{e.preventDefault()}}>Send</button>
                    </div>
                </form>
            </div>
        </div>
      </section>
    
    </>
  )
}

export default Contact_us