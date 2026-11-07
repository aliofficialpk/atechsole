import React from 'react'
import './Expertise.css'
import logo from '/atechsolelogo.png'

const Expertise = () => {
  const leftServices = [
    'MEAN Stack | MERN Stack ',
    'MEVN Stack | Full Stack',
    'React| Angular ',
    'Vue.js | Node.js',
    'Python | Java | Laraval',


  ]

  const rightServices = [
    'IOS | Andriod | Flutter',
    'React native | Swift | Kotlin',
    'Azure | AWS',
    'Kubernetes| Docker',
    'AI/ML| BlockChain',
  ]

  const mergedServices = []
  const maxLen = Math.max(leftServices.length, rightServices.length)
  for (let i = 0; i < maxLen; i++) {
    if (leftServices[i]) mergedServices.push(leftServices[i])
    if (rightServices[i]) mergedServices.push(rightServices[i])
  }

  return (
    <section className="services-section">
      <div className="services-header">
        <div className="hand-icon">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16.5 14.5s-1.5 2.5-4.5 2.5-5-2.5-5-2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 12c-3 0-5.5 2.5-5.5 5.5S9 23 12 23s5.5-2.5 5.5-5.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 12V3c0-1.657-1.343-3-3-3S6 1.343 6 3v9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.5 12V5c0-1.657 1.343-3 3-3s3 1.343 3 3v7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 12a6 6 0 0 0 12 0" />
            {/* Customizing to look like 'Okay' hand gesture roughly */}
            <circle cx="10" cy="8" r="2.5" />
            <path d="M12.5 8h4" strokeLinecap="round" />
            <path d="M14 5.5v5" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="services-title" style={{ transition: 'all 0.4s ease-in-out' }}>
          Expertise of<br />
          <span className="highlight">ATECHSOLE</span>
        </h2>
      </div>

      <div className="services-content">
        <div className="services-column left">
          {leftServices.map((service, index) => (
            <div key={index} className="service-tag left-tag">
              <span className="diamond">✦</span> {service}
            </div>
          ))}
        </div>

        <div className="services-center">
          <div className="logo-glow"></div>
          <img src={logo} alt="ATechSole Logo" className="center-logo" />
        </div>

        <div className="services-list-mobile">
          {mergedServices.map((service, index) => (
            <div
              key={index}
              className={`mobile-service-tag ${index % 2 === 0 ? 'mobile-left' : 'mobile-right'}`}
            >
              <span className="diamond">✦</span> {service}
            </div>
          ))}
        </div>

        <div className="services-column right">
          {rightServices.map((service, index) => (
            <div key={index} className="service-tag right-tag">
              <span className="diamond">✦</span> {service}
            </div>
          ))}
        </div>
      </div>

      <div className="services-footer">
        <p>
          Mastery across modern technology stacks and frameworks
        </p>
      </div>
    </section>
  )
}

export default Expertise
