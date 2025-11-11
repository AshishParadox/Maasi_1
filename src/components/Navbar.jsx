import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">FindMaasi.com</span>
        </Link>
        
        <div className="nav-center">
          <ul className="nav-menu">
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('about')}
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <Link to="/hire" className="nav-link">
                Hire Maasi
              </Link>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <div className="nav-placeholder"></div>
      </div>
    </nav>
  )
}

export default Navbar