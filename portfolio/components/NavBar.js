import React from 'react'
import Link from "nextjs-routes/link"
import imagen1 from '../public/bx-envelope.svg'
import imagen2 from '../public/bxl-github.svg'
import imagen3 from '../public/bxl-linkedin.svg'


function NavBar() {
  return (
    <div>
        <style jsx>
            {`
                display: flex
            `}
        </style>
        <div>
            <Link href="index.js">
                <h3>Home</h3>
            </Link>
        </div>

        <div>
            <Link href="about">
                <h3>About me</h3>
            </Link>
        </div>

        <div>
            <Link href="skills">
                <h3>Skills</h3>
            </Link>  
        </div>

        <div>
            <Link href="projects">
                <h3>Projects</h3>
            </Link>
        </div>

        <div>
            <Link href="contact">
                <h3>Contact</h3>
            </Link>
        </div>

        <div>
            <Link href="https://www.linkedin.com/in/alejandroalfaro2022/">
                <img src={imagen3} alt='linkedIn' />
            </Link>
        </div>

        <div>
            <Link href="https://github.com/alealfaro2020">
                <img src={imagen2} alt='github' />
            </Link>
        </div>

    </div>
  )
}

export default NavBar