import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About Us</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-main">
            <div className="about-intro">
              <h3>Welcome to FindMaasi.com</h3>
              <p>
                Your trusted campus support partner at HIT and other institutions. 
                We offer reliable, affordable services to make campus living easier 
                so students can focus on academics and personal growth.
              </p>
            </div>
            
            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>
                Empower students by handling essential tasks—cooking, cleaning, 
                grocery shopping, laundry—with stress-free solutions tailored to student needs.
              </p>
            </div>
          </div>
          
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🍳</div>
              <h4>Cooking</h4>
              <p>Fresh, homemade meals</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🧹</div>
              <h4>Cleaning</h4>
              <p>Spotless living spaces</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🛒</div>
              <h4>Shopping</h4>
              <p>Essentials delivered</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">👕</div>
              <h4>Laundry</h4>
              <p>Professional washing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs