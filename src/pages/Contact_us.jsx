import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact_us.css'
import { fetchData } from '../features/fetchFunction'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Contact_us = () => {
  const [formData, setFormData] = useState({
    phone:"",
    email:"",
    message:""
  })
  const [errors, setErrors] = useState({})
  
  function validate(){
    let newError = {};
    if(!formData.phone.trim()){
      newError.phone = "Phone number is required";
    }else if(!/^[+]{1}\d{6,15}$/.test(formData.phone)){
      newError.phone = "Phone is Invalid. example for india +919876543210";
    }
    if(!formData.email.trim()){
      newError.email = "Email is required";
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
      newError.email = "Email is Invalid";
    }
    if(!formData.message.trim()){
      newError.message = "Message is required";
    }else if( formData.message.length <=50){
      newError.message = "Message must contain at least 50 character";

    }
    setErrors(newError)
    return Object.keys(newError).length ===0
  }
  function handleSubmit(e){
    e.preventDefault();
    if(validate()){
      fetchData('https://easix-backend.vercel.app/api/contact', formData)
      .then(data=>{
        if(data.success){
        toast.success(`Hi ${formData.email}, Form Submitted successfully!`)
        }else{
        toast.error("Error Ocurred")
        }
      })
      .catch(err=> console.log(err))

    }
  }
  function handleChange(e){
    setFormData({...formData,[e.target.name]: e.target.value})
  }
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
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div>
                        <input value={formData.email} onChange={handleChange} type="text" id="email" placeholder="Email" name="email"/>
                        {errors.email && <p style={{fontSize: "small", color: "orangered", marginTop:"3px"}}>{errors.email}</p>}
                    </div>
                    <div>
                        <input value={formData.phone} onChange={handleChange} type="text" id="phone" placeholder="Phone Number" name="phone"/>
                        {errors.phone && <p style={{fontSize: "small", color: "orangered", marginTop:"3px"}}>{errors.phone}</p>}
                    </div>
                    <div>
                        <textarea value={formData.message} onChange={handleChange} name="message" placeholder="Summary" row="6"></textarea>
                        {errors.message && <p style={{fontSize: "small", color: "orangered", marginTop:"3px"}}>{errors.message}</p>}
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
                {/* toast container */}
                <ToastContainer 
                position='top-right' 
                autoClose={3000}
                closeButton={false} 
                pauseOnHover/>
            </div>
        </div>
      </section>
    
    </>
  )
}

export default Contact_us