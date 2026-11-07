import React, { useEffect } from 'react'
import './Animations.css'
// import Hero from './Hero.jsx'
import CTASection from './CTASection.jsx'
import VideoSection from './VideoSection.jsx'
import Services from './Services.jsx'
import AutoSlideTags from './AutoSlideTags.jsx'
import Expertise from './Expertise.jsx'
import HowItWorks from './HowItWorks.jsx'
import Testimonials from './Testimonials.jsx'
import FAQ from './FAQ.jsx'
import StatsPage from './StatsPage.jsx'
import WhatWeDo from './WhatWeDo.jsx'


const Home = ({ openContact, openQuote }) => {
  useEffect(() => {
    const selectors = [
      '.video-content-wrapper',
      '.ceo-wrapper',
      '.ceo-executive-card',
      '.services-section .services-header',
      '.services-section .services-center',
      '.services-section .service-tag',
      '.services-section .services-footer',
      '.hiw-card',
      '.features-grid .feature-card',
      '.services-main',
      '.services-tabs .service-tab',
      '.tabs-container .tab-button',
      '.service-content-area',
      '.service-content-left',
      '.service-content-right',
      '.service-image-wrapper',
      '.life-item',
      '.portfolio-card',
      '.portfolio-card-wrapper',
      // '.faq-item',
      '.testimonial-card',
      '.industries-grid',
      '.why-us-item',
      '.process-flow-item',
      '.benefit-item',
      '.cta-group',
      '.gallery-item'
    ].join(', ')
    const targets = Array.from(document.querySelectorAll(selectors))
    targets.forEach((el, i) => {
      el.classList.add('reveal')
      el.style.setProperty('--reveal-delay', `${i * 30}ms`)
    })
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          o.unobserve(e.target)
        }
      })
    }, { threshold: 0.10 })
    targets.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <>
      {/* <Hero /> */}
      <VideoSection />
      <Expertise />
       <HowItWorks />
      <Services />
      <AutoSlideTags />
       <WhatWeDo />
      <StatsPage/>
      <Testimonials />
      <FAQ />
      <CTASection onContactClick={openContact} onQuoteClick={openQuote} />
    </>
  )
}

export default Home
