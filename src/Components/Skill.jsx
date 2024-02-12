import React from "react"

function Skill() {
  return (
    <>
      <section className="Services" id="services">
        <div className="main-text">
          <h2>
            <span>My Skills</span>
          </h2>
        </div>

        <div className="services-content">
          {/* <!-- box1 --> */}

          <div className="box">
            <div className="s-icons">
              <i className="bx bxl-mongodb"></i>
            </div>
          </div>

          {/* 
    <!-- box2 --> */}

          <div className="box">
            <div className="s-icons">
              <i className="bx bxl-angular"></i>
            </div>
          </div>

          {/* <!-- box3 --> */}

          <div className="box">
            <div className="s-icons">
              <i className="bx bxl-react"></i>
            </div>
          </div>

          {/* box4 */}

          <div className="box">
            <div className="s-icons">
              <i className="bx bxl-javascript"></i>
            </div>
          </div>

          {/* box5 */}
          <div className="box">
            <div className="s-icons">
              <i className="bx bxl-nodejs"></i>
            </div>
          </div>

          {/* box6 */}
          <div className="box">
            <div className="s-icons">
              <i className="bx bxl-github"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill
