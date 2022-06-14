import React from 'react'
import Link from "nextjs-routes/link"
import { useRouter } from "next/router"
import imagen1 from '../public/bx-envelope.svg'
import imagen2 from '../public/bxl-github.svg'
import imagen3 from '../public/bxl-linkedin.svg'

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
      <div>
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
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/alejandroalfaro2022/">
          <img src={imagen3} alt="linkedIn" />
        </Link>
      </div>

      <div>
        <Link href="https://github.com/alealfaro2020">
          <img src={imagen2} alt="github" />
        </Link>
      </div>
    </>
  );
}

export default NavBar


