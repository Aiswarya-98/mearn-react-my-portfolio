import React from "react"

function Main() {
  return (
    <>
      <header class="sticky">
        <ul class="navlist">
          <li>
            <a href="#home" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div className="bx bx-menu" id="menu-icon"></div>
      </header>
    </>
  )
}

export default Main
