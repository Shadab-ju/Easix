import React from 'react'
import './About_us.css'
const About_us = () => {
  return (
    <>
      <section className="who_we_are_image_block container">
        <div className="who_we_are">
            <h1>Who We Are?</h1>
            <p>At Easix, we are a team of skilled developers, designers, and engineers focused on delivering cutting-edge technology solutions that drive business growth. We specialize in crafting high-quality web and mobile applications, optimizing systems with DevOps best practices, and building scalable infrastructure through cloud services.</p>
        </div>
        <div className="who_we_are_image">
            <img src="/images/assets/About_us.svg" alt=""/>
        </div>
      </section>
      <section className="mission container">
        <h1>Our Mission</h1>

        <div className="our_mission_image">
            <div className="image">
                <img src="/images/assets/our_mission.svg" alt="" />
            </div>
            <ul className="reason">
                <li>
                    Our mission is to harness the power of technology to solve real-world problems, drive innovation, and create lasting value for our clients.
                </li>
                <li>
                    We strive to be more than just a service provider—we aim to be a trusted partner in your digital transformation journey.
                </li>
                <li>
                     We are committed to delivering high-quality, scalable, and secure digital solutions that align with your business goals. Whether we're building intuitive web and mobile apps, streamlining operations with DevOps automation, or architecting resilient cloud infrastructure, our goal is to help you move faster, work smarter, and grow sustainably.
                </li>
                <li>
                     With a focus on agility, collaboration, and continuous improvement, we believe in building solutions that are not just functional, but also future-ready. Technology is always evolving—and so are we.
                </li>
            </ul>
        </div>
      </section>
    </>
  )
}

export default About_us