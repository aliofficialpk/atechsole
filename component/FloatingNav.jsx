import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './FloatingNav.css'

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')
  const [hoveredDropdown, setHoveredDropdown] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      // Always show on non-home pages
      if (location.pathname !== '/') {
        setIsVisible(true)
        return
      }

      // Show navbar immediately after scrolling starts on home page
      if (window.scrollY > 20) {
        setIsVisible(true)
        return
      }

      setIsVisible(false)
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname.startsWith('/company')) setActiveTab('Company')
    else if (location.pathname === '/portfolio') setActiveTab('Portfolio')
    else if (location.pathname === '/events') setActiveTab('Events')
    else if (location.pathname.startsWith('/services')) setActiveTab('Services')
    else if (location.pathname === '/blog' || location.pathname.startsWith('/gallery') || location.pathname === '/careers') setActiveTab('Resources')
    else if (location.pathname === '/') setActiveTab('Home')
  }, [location])

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Company',
      isDropdown: true,
      children: [
        { label: 'About', path: '/about' },
        { label: 'Life at ATechSole', path: '/company/life-at-atechsole' }
      ]
    },
    {
      label: 'Services',
      isDropdown: true,
      children: [
        { label: 'Development', path: '/services/development' },
        { label: 'Cybersecurity', path: '/services/cybersecurity' },
        { label: 'AI Services', path: '/services/ai' }
      ]
    },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Events', path: '/events' },
    {
      label: 'Resources',
      isDropdown: true,
      children: [
        { label: 'Blog', path: '/blog' },
        { label: 'Gallery', path: '/gallery/photos' },
        { label: 'Careers', path: '/careers' }
      ]
    }
  ]

  const handleNavClick = (item) => {
    if (item.isDropdown) return;

    setActiveTab(item.label)
    if (item.path) {
      navigate(item.path)
      window.scrollTo(0, 0)
    } else {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(item.label.toLowerCase())
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const handleDropdownClick = (child, parentLabel) => {
    setActiveTab(parentLabel)
    navigate(child.path)
    window.scrollTo(0, 0)
    setHoveredDropdown(null)
  }

  if (!isVisible) return null

  return (
    <div className="floating-nav-container">
      <nav className="floating-nav">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="nav-item-wrapper"
            onMouseEnter={() => item.isDropdown && setHoveredDropdown(item.label)}
            onMouseLeave={() => item.isDropdown && setHoveredDropdown(null)}
          >
            <button
              className={`nav-item ${activeTab === item.label ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </button>

            {item.isDropdown && hoveredDropdown === item.label && (
              <div className="nav-dropdown">
                {item.children.map((child) => (
                  <button
                    key={child.label}
                    className="dropdown-item"
                    onClick={() => handleDropdownClick(child, item.label)}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

export default FloatingNav
