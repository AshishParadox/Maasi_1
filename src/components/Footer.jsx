import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h3 className="footer-logo">FindMaasi.com</h3>
          <p className="footer-tagline">
            Your trusted campus support partner for reliable and affordable services.
          </p>
          {/* <div className="social-links">
            <a href="#instagram" className="social-link">📱</a>
            <a href="#facebook" className="social-link">💬</a>
            <a href="#twitter" className="social-link">🐦</a>
            <a href="#linkedin" className="social-link">💼</a>
          </div> */}
        </div>

        <div className="footer-sections">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/cleaning">Cleaning</a></li>
              <li><a href="/laundry">Laundry</a></li>
              <li><a href="/cooking">Cooking</a></li>
              <li><a href="/other">Other Services</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 support@findmaasi.com</li>
              <li>📞 +91 798580xxxx</li>
              <li>📍 Haldia, West Bengal</li>
              <li>🕒 Available 24/7</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 FindMaasi.com. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;