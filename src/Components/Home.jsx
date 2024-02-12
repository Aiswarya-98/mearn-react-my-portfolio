import React from "react"

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-text">
          <div className="slide">
            <span className="one">Hey</span>
            <span className="two">I'm</span>
          </div>

          <h1>AISWARYA SHAJI</h1>
          <h3>
            {" "}
            Full Stack Developer <span>MEA(R)N</span>{" "}
          </h3>
          <p>An aspiring full stack developer with a passion for building the digital future. Let's connect and collaborate on transforming the digital landscape!</p>

          <div className="button">
            <a href="#contact" className="btn">
              Say Hello
            </a>
            <a href="#portfolio" className="btn2">
              <span>
                <i className="bx bx-play"></i>
              </span>
              Watch My Work
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
