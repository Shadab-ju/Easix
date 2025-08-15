import React from 'react'
import './Career.css'
const Career = () => {
  return (
    <>
      <section class="services">
        <h1>Career at Easix</h1>
        <p>Join us in shaping the future.</p>
      </section>
      <section class="career_image_block container">
        <div class="career">
            <h2>Career At Easix</h2>
            <p>At Easix, we don’t just build software—we build the future of how people interact with technology.
            </p>
            <p>We're looking for curious minds, innovative thinkers, and passionate problem-solvers to join our growing team of developers, engineers, and technologists.</p>
        </div>
        <div class="career_form">
          <form action="">
                    <div>
                        <input type="text" id="email" placeholder="Email" />
                    </div>
                    <div>
                        <input type="text" id="phone" placeholder="Phone Number" />
                    </div>
                    <div>
                        <textarea name="details" placeholder="Profile Summary" row="6"></textarea>
                    </div>
                    <div>
                        <button onClick={e=>{e.preventDefault()}}>Send</button>
                    </div>
                </form>
        </div>
      </section>
    </>
  )
}

export default Career