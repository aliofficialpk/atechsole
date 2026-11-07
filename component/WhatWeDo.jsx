import React, { useState } from 'react'
import './WhatWeDo.css'

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      id: 0,
      title: 'AI Solutions',
      tagline: 'Artificial Intelligence',
      description: `Atechsole is leading the charge in AI innovation, delivering client-centric solutions that transform businesses.

Our AI-powered solutions leverage cutting-edge machine learning, deep learning, and natural language processing to solve complex business challenges. We specialize in:

• Predictive Analytics & Forecasting
• Computer Vision & Image Recognition
• Natural Language Processing (NLP)
• Custom Machine Learning Models
• AI-Powered Chatbots & Automation
• Intelligent Data Analysis

We work with industries including healthcare, finance, e-commerce, and manufacturing to implement AI solutions that increase efficiency, reduce costs, and drive innovation. Our team of AI experts ensures your organization stays ahead in the digital transformation journey.`,
      image: 'https://indusai.gov.pk/assets/images/techathon/collaborations.jpg',
      color: '#0F5C3A'
    },
    {
      id: 1,
      title: 'Cybersecurity',
      tagline: 'Security First Approach',
      description: `In today's digital landscape, cybersecurity is not optional—it's essential. Atechsole provides comprehensive security solutions to protect your digital assets.

Our cybersecurity services include:

• Threat Detection & Response
• Vulnerability Assessment & Penetration Testing
• Network Security & Firewalls
• Data Encryption & Protection
• Compliance Management (ISO, GDPR, HIPAA)
• Security Awareness Training
• Incident Response & Recovery

We protect organizations of all sizes from sophisticated cyber threats. Our proactive approach identifies vulnerabilities before they become breaches, ensuring your business maintains the highest security standards while maintaining operational efficiency.`,
      image: 'https://indusai.gov.pk/assets/images/techathon/defence.png',
      color: '#0F5C3A'
    },
    {
      id: 2,
      title: 'Web Development',
      tagline: 'Digital Excellence',
      description: `We create powerful, scalable web solutions that drive business growth and deliver exceptional user experiences.

Our web development expertise spans:

• Full-Stack Web Development
• Responsive & Mobile-First Design
• Progressive Web Applications (PWA)
• E-Commerce Platforms
• Content Management Systems (CMS)
• Web Performance Optimization
• Cloud-Based Solutions

From startups to enterprises, we build web applications that are not just beautiful, but also fast, secure, and scalable. We use modern frameworks and best practices to ensure your web presence stands out in the digital marketplace.`,
      image: 'https://indusai.gov.pk/assets/images/techathon/software.png',
      color: '#0F5C3A'
    }
  ]

  const currentService = services[activeTab]

  return (
    <>
      <section className="what-we-do-section">
        <div className="what-we-do-container">
          {/* Header */}
          <div className="what-we-do-header">
            <h1>What We Do</h1>
            <p>Delivering innovative technology solutions tailored to your business needs</p>
          </div>

          {/* Tabs */}
          <div className="tabs-wrapper">
            <div className="tabs-container">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`tab-button ${activeTab === service.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <span className="tab-label">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="service-content-area">
            <div className="service-content-left">
              <div className="service-tagline">{currentService.tagline}</div>
              <h2>{currentService.title}</h2>
              <p className="service-description">{currentService.description}</p>
            </div>

            <div className="service-content-right">
              <div className="service-image-wrapper">
                <img 
                  src={currentService.image} 
                  alt={currentService.title}
                  className="service-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    if (currentService.id === 0) {
                      e.target.src = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80';
                    } else if (currentService.id === 1) {
                      e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80';
                    } else {
                      e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatWeDo
