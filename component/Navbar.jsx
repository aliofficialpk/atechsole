import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '/atechsolelogo.png'

const Navbar = ({ onContactClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [desktopDropdown, setDesktopDropdown] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Close menus on route change
  useEffect(() => {
    setIsSidebarOpen(false)
    setDesktopDropdown(null)
    setActiveDropdown(null)
  }, [location.pathname])

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Services',
      isDropdown: true,
      children: [
        { label: 'Web Development', path: '/services/development', desc: 'Scalable full-stack web platforms' },
        { label: 'Cybersecurity', path: '/services/cybersecurity', desc: 'Enterprise security & threat defense' },
        { label: 'AI Solutions', path: '/services/ai', desc: 'Intelligent AI models & automation' }
      ]
    },
    {
      label: 'Company',
      isDropdown: true,
      children: [
        { label: 'About Us', path: '/about', desc: 'Our mission, team & 12+ years journey' },
        { label: 'Life at ATechSole', path: '/company/life-at-atechsole', desc: 'Culture, work environment & values' }
      ]
    },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Events', path: '/events' },
    {
      label: 'Resources',
      isDropdown: true,
      children: [
        { label: 'Tech Blog', path: '/blog', desc: 'Insights on AI, security & development' },
        { label: 'Photo Gallery', path: '/gallery/photos', desc: 'Team events & company milestones' },
        { label: 'Careers', path: '/careers', desc: 'Join our team of 50+ technology experts' }
      ]
    }
  ]

  const handleNavClick = (item) => {
    if (item.isDropdown) {
      setActiveDropdown(activeDropdown === item.label ? null : item.label)
      return
    }

    setIsSidebarOpen(false)
    if (item.path) {
      navigate(item.path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleDropdownClick = (child) => {
    setIsSidebarOpen(false)
    setDesktopDropdown(null)
    navigate(child.path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isItemActive = (item) => {
    if (item.path === '/' && location.pathname === '/') return true
    if (item.path && item.path !== '/' && location.pathname.startsWith(item.path)) return true
    if (item.children) {
      return item.children.some(child => location.pathname === child.path)
    }
    return false
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="nav-left" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img 
              src={logo} 
              alt="ATechSole - Software, AI & Cybersecurity Solutions" 
              title="ATechSole Technology Official Logo" 
              className="nav-logo" 
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="nav-center desktop-nav">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="desktop-nav-item-wrapper"
                onMouseEnter={() => item.isDropdown && setDesktopDropdown(item.label)}
                onMouseLeave={() => item.isDropdown && setDesktopDropdown(null)}
              >
                <button
                  type="button"
                  className={`desktop-nav-link ${isItemActive(item) ? 'active' : ''}`}
                  onClick={() => !item.isDropdown && handleNavClick(item)}
                >
                  <span>{item.label}</span>
                  {item.isDropdown && (
                    <svg className="dropdown-caret" viewBox="0 0 10 6" width="10" height="6" fill="currentColor">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                </button>

                {item.isDropdown && desktopDropdown === item.label && (
                  <div className="desktop-dropdown-menu">
                    {item.children.map((child) => (
                      <div
                        key={child.label}
                        className={`desktop-dropdown-item ${location.pathname === child.path ? 'active' : ''}`}
                        onClick={() => handleDropdownClick(child)}
                      >
                        <div className="dropdown-item-title">{child.label}</div>
                        {child.desc && <div className="dropdown-item-desc">{child.desc}</div>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="nav-right desktop-only">
            <button 
              type="button" 
              className="nav-cta-btn" 
              onClick={(e) => { e.preventDefault(); onContactClick(); }}
            >
              <span>Contact Us</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Toggler */}
          <button 
            type="button"
            className="mobile-toggler" 
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Side Navbar Overlay */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} 
        onClick={() => setIsSidebarOpen(false)} 
      />

      {/* Side Navbar Drawer */}
      <aside className={`side-navbar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src={logo} alt="ATechSole Logo" className="sidebar-logo" />
          <button 
            type="button"
            className="close-btn" 
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close Navigation Menu"
          >
            &times;
          </button>
        </div>

        <div className="sidebar-content">
          {navItems.map((item) => (
            <div key={item.label} className="mobile-nav-item-wrapper">
              <div 
                className={`mobile-nav-item ${isItemActive(item) ? 'active' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                <span>{item.label}</span>
                {item.isDropdown && (
                  <span className={`dropdown-arrow ${activeDropdown === item.label ? 'rotated' : ''}`}>▼</span>
                )}
              </div>
              
              {item.isDropdown && (
                <div className={`mobile-dropdown ${activeDropdown === item.label ? 'open' : ''}`}>
                  {item.children.map((child) => (
                    <div 
                      key={child.label} 
                      className={`mobile-dropdown-item ${location.pathname === child.path ? 'active' : ''}`}
                      onClick={() => handleDropdownClick(child)}
                    >
                      <div className="child-label">{child.label}</div>
                      {child.desc && <div className="child-desc">{child.desc}</div>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="mobile-cta-container">
            <button 
              type="button"
              className="mobile-cta" 
              onClick={(e) => { 
                e.preventDefault(); 
                setIsSidebarOpen(false);
                onContactClick(); 
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar
