import React from 'react';
import './CTASection.css';
import logoImage from '/atechsolelogo.png';


const CTASection = ({ onContactClick, onQuoteClick }) => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h3 className="cta-subtitle">Grow Your Business with</h3>
        <h1 className="cta-title">ATECHSOLE</h1>
        <div className="cta-buttons-group">
          <button className="cta-button" onClick={onContactClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Let's Start
          </button>
          <button className="cta-button cta-button-quote" onClick={onQuoteClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Get a Quote
          </button>
        </div>

        <div className='cta-contact'>
          <h4>Reach Out to Us</h4>
          <div className='cta-items-row'>
            <div className='cta-contact-item'>
              <img src='https://cdn-icons-png.flaticon.com/128/9764/9764472.png' alt='timing' />
              <p>Mon-Fri: 9AM-6PM</p>
            </div>
            <div className='cta-contact-item'>
              <img src='https://cdn-icons-png.flaticon.com/128/18004/18004562.png' alt='location' />
              <p>Johar Town Lahore</p>
            </div>
            <div className='cta-contact-item'>
              <img src='https://cdn-icons-png.flaticon.com/128/1959/1959251.png' alt='Phone' />
              <p>+92 325 3344552</p>
            </div>
            <div className='cta-contact-item'>
              <img src='https://cdn-icons-png.flaticon.com/128/18857/18857153.png' alt='Email' />
              <p>info@atechsole.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-image-container">
        <img src={logoImage} alt="ATechSole Technology Official Logo" title="ATechSole" className="cta-logo" />
      </div>

      <div className="cta-footer">
        <div className="cta-footer-content">
          <p>© 2025 ATechSole. All rights reserved. <span className="separator">|</span> <a href="#">Privacy Policy</a> <span className="separator">|</span> <a href="#">Terms of Service</a></p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
