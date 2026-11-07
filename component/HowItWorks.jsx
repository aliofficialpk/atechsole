import React from 'react'
import './HowItWorks.css'

const Icon = ({ id }) => {
  switch (id) {
    case 'team':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M2 20a6 6 0 0 1 12 0" />
          <path d="M12 20a6 6 0 0 1 10 0" />
        </svg>
      )
    case 'agile':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10" />
          <path d="M12 2v6M12 12h8" />
        </svg>
      )
    case 'client':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="7" r="4" />
          <path d="M4 22a8 8 0 0 1 16 0" />
        </svg>
      )
    case 'global':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M2 12h20M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      )
    case 'support':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22a10 10 0 1 0-10-10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      )
    case 'cost':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 1v22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    case 'supportive':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 10l5-5 5 5" />
          <path d="M12 5v14" />
        </svg>
      )
    case 'diverse':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="12" r="3" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
        </svg>
      )
    case 'track':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12l6 6L21 6" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="6" />
        </svg>
      )
  }
}

const items = [
  { title: 'Expert Team', iconBg: '#ff2a7a', label: 'ATechsole', description: 'ATechsole has a team of experienced professionals who are dedicated to helping clients achieve their goals.', icon: 'team' },
  { title: 'Agile Development', iconBg: '#f59e0b', label: 'ATechsole', description: 'ATechsole uses agile development methodologies to ensure that clients are always satisfied with the final product.', icon: 'agile' },
  { title: 'Client Centric', iconBg: '#8b5cf6', label: 'ATechsole', description: 'ATechsole puts the client needs first and works closely with them to understand their requirements.', icon: 'client' },
  { title: 'Global Reach', iconBg: '#f97316', label: 'ATechsole', description: 'ATechsole has a global network of clients who are spread across different industries and regions.', icon: 'global' },
  { title: 'Full Support', iconBg: '#22c55e', label: 'ATechsole', description: 'ATechsole provides full support to its clients throughout the development process.', icon: 'support' },
  { title: 'Cost Effective', iconBg: '#ec4899', label: 'ATechsole', description: 'ATechsole offers cost-effective solutions to its clients, helping them save money while still achieving their goals.', icon: 'cost' },
  { title: 'Supportive Team  ', iconBg: '#8b5cf6', label: 'ATechsole', description: 'ATechsole has a team of supportive professionals who are always there to help clients.', icon: 'supportive' }, 
  { title: 'Diverse Clients', iconBg: '#f97316', label: 'ATechsole', description: 'ATechsole has a global network of clients who are spread across different industries and regions.', icon: 'diverse' },
  { title: 'Proven Track Record', iconBg: '#22c55e', label: 'ATechsole', description: 'ATechsole has a proven track record of successfully helping clients achieve their goals.', icon: 'track' }, 
]

const HowItWorks = () => {
  return (
    <section className="hiw">
      <div className="hiw-head">
        <h2 className="hiw-h1">Why Choose ATechsole</h2>
        <p className="hiw-sub">ATechSole activities and initiatives designed for impact.</p>
      </div>
      <div className="hiw-grid">
        {items.map((i, idx) => (
          <div className="hiw-card" key={idx}>
            <div className="hiw-card-top">
              <div className="hiw-icon" style={{ background: i.iconBg }}>
                <Icon id={i.icon} />
              </div>
              <span className="hiw-label">{i.label}</span>
            </div>
            <h3 className="hiw-title">{i.title}</h3>
            <h4 className="description">{i.description} </h4>
            <div className="hiw-foot">
              <span className="hiw-foot-icon" style={{ color: i.iconBg }}>
                <Icon id={i.icon} />
              </span>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
