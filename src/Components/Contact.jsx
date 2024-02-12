import React from "react"
import resume from "../Example/Aiswarya_Shaji_Resume.pdf"

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>
            <span>Contact Me!</span>
          </h2>
          <p>I am a full stack developer. Contact me if you've any project to be done.</p>

          <div className="list">
            <li>
              <a href="">+91 7025145703</a>
            </li>
            <li>
              <a href="">aiswaryashaji.98@gmail.com</a>
            </li>
          </div>

          <div className="contact-icons">
            <a href="https://github.com/Aiswarya-98">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aiswarya-shaji-b6a5b2215">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href={resume}>
              <i className="bx bx-import"></i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form action="">
            <input type="name" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="" placeholder="Your Mobile Number" required />
            <textarea name="" id="" cols="35" rows="10" placeholder="How Can I Help You" required></textarea>
            <input type="submit" value="Send Message" className="submit" required />
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
