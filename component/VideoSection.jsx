import React, { useState, useRef } from 'react'
import './VideoSection.css'
import videoSource from '../assets/Atechsole.mp4'
import logoImage from '/atechsolelogo.png'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handleClose = () => {
    setIsPlaying(false)
  }

  return (
    <>
      <section className="video-section">
        <div className="video-content-wrapper">
          {/* Left Column - Video */}
         

          {/* Right Column - Content (relocated from Hero) */}
          <div className="content-column">
            <h1 className="section-headline">
              Empowering Your Business<br />with <span className="highlight">Cutting-Edge</span> Technology
            </h1>

            <p className="section-subtitle">
              We specialize in Cybersecurity, Web Development, and AI Solutions<br />
              to help your business thrive in the digital age.
            </p>

            <div className="cta-group">
              <a href="#contact" className="cta-primary">
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#services" className="cta-secondary">
                Learn More
              </a>
            </div>

            <div className="social-links">
              <span className="social-label">Follow us</span>
              <div className="social-icons">
                <a className="social-icon" aria-label="LinkedIn" href="https://www.linkedin.com/company/atechsole/" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 8.98h3.96V21H3V8.98zm7.49 0h3.79v1.64h.05c.53-.95 1.82-1.96 3.75-1.96 4.01 0 4.75 2.64 4.75 6.07V21h-3.98v-4.97c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.29-1.92 2.63V21h-3.88V8.98z" />
                  </svg>
                </a>
                <a className="social-icon" aria-label="YouTube" href="https://www.youtube.com/@mustansarriazofficial" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.6 15.5V8.5l6.2 3.5-6.2 3.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Overlay */}
        {isPlaying && (
          <div className="video-overlay">
            <button className="close-video-btn" onClick={handleClose} aria-label="Close video">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="video-wrapper">
              <video
                ref={videoRef}
                src={videoSource}
                className="fullscreen-video"
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        )}
      </section>

      {/* CEO Executive Message Section */}
      <section className="ceo-section" id="ceo" itemScope itemType="https://schema.org/Person">
        <div className="ceo-executive-card ceo-wrapper in-view">
          {/* Left Column: Official CEO Portrait */}
          <div className="ceo-photo-container">
            <picture>
              <source srcSet="/ceo-mustansar-riaz.webp" type="image/webp" />
              <img
                src="/ceo-mustansar-riaz.jpg"
                alt="Mustansar Riaz - Chief Executive Officer and Co-Founder of ATechSole"
                title="Mustansar Riaz, CEO & Co-Founder of ATechSole"
                className="ceo-card-image"
                loading="eager"
                width="600"
                height="800"
                itemProp="image"
              />
            </picture>
          </div>

          {/* Right Column: Message & Details */}
          <div className="ceo-content-pane">
            <div className="ceo-badge-header">
              <span className="ceo-badge-text">MESSAGE FROM OUR CEO</span>
              <div className="ceo-accent-divider" aria-hidden="true"></div>
            </div>

            <h2 className="ceo-headline">
              Innovating Software.
              <span className="ceo-headline-red">Driving Solutions.</span>
            </h2>

            <p className="ceo-body-p">
              At atechsole, our mission is to deliver exceptional, custom software solutions that empower businesses through cutting-edge code, scalable architectures, and strategic digital transformation.
            </p>

            <p className="ceo-body-p">
              We are committed to engineering excellence, agile development practices, and forward-thinking technologies like Cloud Computing, Enterprise Systems, and AI-driven platforms, to help our clients build, scale, and lead in their industries.
            </p>

            {/* Signature & Credentials */}
            <div className="ceo-credentials-block">
              <div className="ceo-signature-font" aria-label="Mustansar Riaz Signature">
                Mustansar Riaz
              </div>
              <h3 className="ceo-name-text" itemProp="name">Mustansar Riaz</h3>
              <p className="ceo-role-text" itemProp="jobTitle">Chief Executive Officer, atechsole</p>
            </div>

            {/* 4 Metrics Pill Container */}
            <div className="ceo-stats-pill">
              <div className="ceo-stat-col">
                <div className="ceo-stat-icon-wrap green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="ceo-stat-value">500+</div>
                <div className="ceo-stat-title">Projects Delivered</div>
              </div>

              <div className="ceo-stat-col">
                <div className="ceo-stat-icon-wrap red">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <div className="ceo-stat-value red">200+</div>
                <div className="ceo-stat-title">Software Engineers</div>
              </div>

              <div className="ceo-stat-col">
                <div className="ceo-stat-icon-wrap green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div className="ceo-stat-value">100+</div>
                <div className="ceo-stat-title">Global Clients</div>
              </div>

              <div className="ceo-stat-col">
                <div className="ceo-stat-icon-wrap red">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div className="ceo-stat-value red">99.8%</div>
                <div className="ceo-stat-title">SLA Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VideoSection
