import React from 'react'
import "./contact.css"
import Navbar from '../navbar/Navbar'
import Header2 from '../header/Header2'
import Footer from '../footer/Footer'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <Header2/>


      <main className="main-content">
            <section className="contact-info">
                <h2>Contact Info</h2>
                <p>Get in Touch - We're Always Happy To Hear From You</p>
                <address>
                    Address: Rajkot-Gujarat<br />
                    Phone: +91 7878953245<br />
                    Email: <a href="mailto:booking.spot@gmail.com">booking.spot@gmail.com</a>
                </address>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8dbb78c1b67584060d37fd6640bd1bf9b4cdbe700553bf7c0b72f56107e96e1?apiKey=eec316cd659d4ca78822416e36f4161f&" alt="Office location map" className="location-map" />
            </section>

            <section className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName" className="visually-hidden">First Name</label>
                        <input type="text" id="firstName" placeholder="First Name" aria-label="First Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="visually-hidden">Last Name</label>
                        <input type="text" id="lastName" placeholder="Last Name" aria-label="Last Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="visually-hidden">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Phone Number" aria-label="Phone Number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="visually-hidden">Your Email</label>
                        <input type="email" id="email" placeholder="Your Email" aria-label="Your Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="visually-hidden">Enter Your Text Here</label>
                        <textarea id="message" placeholder="Enter Your Text Here" aria-label="Enter Your Text Here"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </section>
        </main>


        <Footer/>

    </>
  )
}

export default Contact