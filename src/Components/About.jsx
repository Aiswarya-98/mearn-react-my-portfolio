import React from "react"
import my_pic from "../../src/Components/Images/my-pic.jpg"

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about-img">
          <img src={my_pic} alt="" />
        </div>

        <div className="about-text">
          <h2>
            <span>About Me</span>
          </h2>
          <h4>Full Stack Developer</h4>

          <p>
            Hello and welcome to my portfolio! <br></br>
            I'm Aiswarya Shaji, and I'm thrilled to have you here. I am a passionate and motivated MEAN full-stack developer with a strong desire to create meaningful and innovative applications. My journey as a MEA(R)N full-stack developer is just beginning, and I'm excited about the opportunities and challenges that lie ahead. I'm committed to continuous learning and improvement, and my goal is to contribute to projects that make a positive impact on people's lives.
          </p>

          <a href="https://www.linkedin.com/in/aiswarya-shaji-b6a5b2215" className="btn">
            More About
          </a>
        </div>
      </section>
    </>
  )
}

export default About
