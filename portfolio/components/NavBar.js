import React from 'react'
import Link from "nextjs-routes/link"
import { useRouter } from "next/router"
import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
 
const moviNavBar = [
    {paso:1, nombre: 'Home',url: '/'},
    {paso:2, nombre: 'About',url: '/about'},
    {paso:3, nombre: 'Skills',url: '/skills'},
    {paso:4, nombre: 'Projects',url: '/projects'},
    {paso:5, nombre: 'Contact',url: '/contact'},
]
let seleccionado = 1;

function NavBar() {

  const router = useRouter()

  return (
    <>
      <div className="navbarContenido">
        {moviNavBar.map((p) => (
          <p
            key={p.paso}
            className="seleccionado"
            onClick={() => {
              router.push(p.url);
              seleccionado = p.paso;
            }}
          >
            {p.nombre}
          </p>
        ))}
      <div className='logos'>
        <div className='linkedinIcon'>
          <Link href="https://www.linkedin.com/in/alejandroalfaro2022/">
          <FaLinkedin />
          </Link>
        </div>

        <div className='githubIcon'>
          <Link href="https://github.com/alealfaro2020">
            <BsGithub />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default NavBar


