import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Navbar from './component/Navbar.jsx'
import Background from './component/Background.jsx'
import FloatingNav from './component/FloatingNav.jsx'
import ContactModal from './component/ContactModal.jsx'
import GetQuoteModal from './component/GetQuoteModal.jsx'
import CustomCursor from './component/CustomCursor.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Blog from './component/Blog.jsx'
import Portfolio from './component/Portfolio.jsx'
import Events from './component/Events.jsx'
import Photos from './component/Photos.jsx'
import Videos from './component/Videos.jsx'
import FloatingContact from './component/FloatingContact.jsx'
import Careers from './component/Careers.jsx'
import LifeAtAtechsole from './component/LifeAtAtechsole.jsx'
// Services Pages
import AIServices from './component/services/AIServices.jsx'
import DevelopmentServices from './component/services/DevelopmentServices.jsx'
import CybersecurityServices from './component/services/CybersecurityServices.jsx'
// Admin Portal
import AdminPanel from './component/admin/AdminPanel.jsx'

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const location = useLocation();

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);
  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  const isAdminRoute = location.pathname.startsWith('/adminatechsole');

  const isNavbarHidden = location.pathname.startsWith('/adminatechsole');

  // If in the private admin area, render only the admin portal
  if (isAdminRoute) {
    return (
      <Routes>
        <Route path="/adminatechsole" element={<AdminPanel />} />
      </Routes>
    );
  }

  return (
    <div className="app-layout">
      <Background />
      <CustomCursor />
      {!isNavbarHidden && <Navbar onContactClick={openContact} onQuoteClick={openQuote} />}

      <Routes>
        <Route path="/" element={<Home openContact={openContact} openQuote={openQuote} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery/photos" element={<Photos />} />
        <Route path="/gallery/videos" element={<Videos />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/company/life-at-atechsole" element={<LifeAtAtechsole />} />
        {/* Services Routes */}
        <Route path="/services/ai" element={<AIServices />} />
        <Route path="/services/development" element={<DevelopmentServices />} />
        <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
      </Routes>

      <FloatingNav />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <GetQuoteModal isOpen={isQuoteOpen} onClose={closeQuote} />
      <FloatingContact />
    </div>
  )
}

export default App
