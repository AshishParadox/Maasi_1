import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Trusted Campus Support Partner
            </h1>
            <p className="hero-subtitle">
              Reliable, affordable services to make campus living easier at HIT and beyond
            </p>
            <div className="hero-buttons">
              <Link to="/hire" className="btn btn-primary">
                Find Your Maasi
              </Link>
              <button 
                className="btn btn-outline"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-icon">🧹</div>
                <h4>Cleaning</h4>
                
              </div>
              <div className="feature-card">
                <div className="feature-icon">👕</div>
                <h4>Laundry</h4>
               
              </div>
              <div className="feature-card">
                <div className="feature-icon">🍳</div>
                <h4 >Cooking</h4>
               
              </div>
              <div className="feature-card">
                <div className="feature-icon">🍳</div>
                <h4>grocery shopping</h4>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  )
}

export default Home