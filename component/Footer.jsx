import React from 'react';
import './Footer.css';
import logo from '/atechsolelogo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/16gRbNs8d1/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/atechsole?igsh=dnR5bWVrM2xnenFw" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.youtube.com/@mustansarriazofficial" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
              </svg>
            </a>
          </div>

          <div className="footer-logo-wrapper">
            <img src={logo} alt="ATechSole Official Company Logo" title="ATechSole Solutions" className="footer-logo" />
            <div className="footer-brand-text">
              <span>ATECHSOLE</span>
              <span className="brand-subtitle">SOLUTIONS</span>
            </div>
          </div>

          <div className="footer-contact-info">
            <p>📞 +92 325 3344552</p>
            <p>📍 Johar Town, Lahore, Pakistan</p>
            <p>Have an inquiry? <a href="mailto:contact@atechsole.com" target="_blank" rel="noopener noreferrer">Contact our team.</a></p>
          </div>
        </div>

        <div className="footer-right">
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="cta-footer">
        <div className="cta-footer-content">
          <p>© 2025 ATechSole. All rights reserved. <span className="separator">|</span> <a href="#">Privacy Policy</a> <span className="separator">|</span> <a href="#">Terms of Service</a></p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
