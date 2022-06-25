import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'


export default function ({ children }) {
  return (
    <div className="contNavbar">
      <NavBar />
      <main className="contenido">
        {children}
        <Footer />
      </main>
    </div>
  );
}
