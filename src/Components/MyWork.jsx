import React from "react"
import p1 from "./Images/project1.png"
import p2 from "./Images/project2.png"
import p3 from "./Images/project3.png"
import p4 from "./Images/project4.png"
import p5 from "./Images/project5.png"
import p6 from "./Images/project6.png"

function MyWork() {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="main-text">
          <h2>
            <span>My Works</span>
          </h2>
        </div>

        <div className="portfolio-content">
          {/* <!-- project1 --> */}

          <div className="row">
            <img src={p1} alt="project1" />
            <div className="layer">
              <h5>Dynamic Website</h5>
              <p>A Movie Searching App</p>
              <a href="https://github.com/Aiswarya-98/mearn-react-movie-api-app">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          {/* <!-- project2 --> */}

          <div className="row">
            <img src={p2} alt="project2" />
            <div className="layer">
              <h5>Static Website</h5>
              <p>Finance planning Application</p>
              <a href="https://github.com/Aiswarya-98/finance-solution-application">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          {/* <!-- project3 --> */}

          <div className="row">
            <img src={p3} alt="project3" />
            <div className="layer">
              <h5>Static Website</h5>
              <p>Memory game using React</p>
              <a href="https://github.com/Aiswarya-98/mearn-react-memory-game">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          {/* <!-- project4 --> */}

          <div className="row">
            <img src={p4} alt="project4" />
            <div className="layer">
              <h5>Static Website</h5>
              <p>The first static website</p>
              <a href="https://github.com/Aiswarya-98/travel-blog-website">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          {/* project 5 */}
          <div className="row">
            <img src={p5} alt="project4" />
            <div className="layer">
              <h5>Static Website</h5>
              <p>The first static website</p>
              <a href="https://github.com/Aiswarya-98/Static-foodGallery-website">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          {/* project 6 */}

          <div className="row">
            <img src={p6} alt="project4" />
            <div className="layer">
              <h5>Static Website</h5>
              <p>The food recipe app</p>
              <a href="https://github.com/Aiswarya-98/mearn-react-food-recipe-app">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyWork
