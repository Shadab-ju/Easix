import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
      <section className="hero_section">
        <div className="hero_image">
            <div className="hero">
                <h1>Want To Start or Scale</h1>  <h1>Your Business</h1>
                <h3>Launch Your digital business with ease,<br/>scale efficiently and make lucrative business</h3>
                <div className="button">
                    <a href="/contact.html">Contact us</a>
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
      <section className="services_block container">
        <h1>Services We Provide</h1>
        <div className="cardscontainer">
            <div className="card">
                <img className="card-img-top" src="/images/assets/mobile development.svg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Mobile App Development</h4>
                    <p className="card-text">From iOS to Android, we build native and cross-platform mobile applications that deliver seamless user experiences.</p>
                    <div className="button">
                        <a href="/contact.html">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="/images/assets/web_development.svg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Web Development</h4>
                    <p className="card-text">We create responsive, fast, and secure websites and web apps using modern frameworks and best practices.</p>
                    <div className="button">
                        <a href="/contact.html">Learn more</a>
                    </div>
                </div>
            </div>
            
            <div className="card">
                <img className="card-img-top" src="/images/assets/cybersecurity.svg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Cyber Security</h4>
                    <p className="card-text">Comprehensive security assessments, threat mitigation, and compliance strategies to protect your digital assets</p>
                    <div className="button">
                        <a href="/contact.html">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="/images/assets/cloud_architect.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Cloud Solutions</h4>
                    <p className="card-text">Cloud architecture design, migration, and management on AWS, Azure, and Google Cloud for scalable and secure infrastructure</p>
                    <div className="button">
                        <a href="/contact.html">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="/images/assets/data_science.svg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Data Science</h4>
                    <p className="card-text">Turn raw data into actionable insights with machine learning, data visualization, and predictive analytics solutions</p>
                    <div className="button">
                        <a href="/contact.html">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="/images/assets/devops.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Devops and CI/CD</h4>
                    <p className="card-text">We automate and optimize development pipelines, ensuring faster deployments, better testing, and improved scalability.</p>
                    <div className="button">
                        <a href="/contact.html">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </>
  )
}

export default Home