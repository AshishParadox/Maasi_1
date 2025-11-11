import React, { useState } from 'react'
import './ContactUs.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Have questions? We'd love to hear from you.</p>
        </div>

        <div className="contact-main">
          <div className="contact-sidebar">
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email Us</h4>
                <p>support@findmaasi.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p>+91 798580xxxx</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>Haldia, West Bengal</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#instagram" className="social-icon">📱</a>
                <a href="#facebook" className="social-icon">💬</a>
                <a href="#twitter" className="social-icon">🐦</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>

              {showSuccess && (
                <div className="success-message">
                  ✅ Thank you! Message sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs