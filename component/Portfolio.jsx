import React from 'react';
import './Portfolio.css';
import Footer from './Footer';

const projects = [
  {
    id: '01',
    title: 'E-COMMERCE APP',
    category: 'Global Retail Solution',
    description: 'Developed a scalable e-commerce platform handling 1M+ transactions monthly with integrated AI recommendations.',
    image: 'https://indusai.gov.pk/assets/images/techathon/agriculture.png'
  },
  {
    id: '02',
    title: 'HealthCare System ',
    category: 'Medical Records Management',
    description: 'Built a secure HIPAA-compliant system for managing patient records and appointments for 50+ clinics.',
    image: 'https://indusai.gov.pk/assets/images/techathon/health.jpg'
  },
  {
    id: '03',
    title: 'FinTech App',
    category: 'Mobile Banking Solution',
    description: 'Created a secure mobile banking application with biometric authentication and real-time transactions.',
    image: 'https://indusai.gov.pk/assets/images/techathon/fintech.png'
  },
  {
    id: '04',
    title: 'AI Analytics',
    category: ' Business Intelligence Platform',
    description: 'Implemented AI-powered analytics dashboard providing real-time insights and predictive forecasting.',
    image: 'https://indusai.gov.pk/assets/images/techathon/manufacturing.png'
  },
  {
    id: '05',
    title: 'Logistics System',
    category: 'Supply Chain Management',
    description: 'Developed end-to-end logistics platform with real-time tracking and automated dispatch system.',
    image: 'https://indusai.gov.pk/assets/images/techathon/energy.png'
  },
  {
    id: '06',
    title: 'EdTech Platform',
    category: 'Online Learning System',
    description: 'Built comprehensive LMS supporting 100K+ students with live streaming and interactive assessments.',
    image: 'https://indusai.gov.pk/assets/images/techathon/education.png'
  },
  {
    id: '07',
    title: 'Smart City IoT',
    category: 'Urban Sensor Network',
    description: 'Deployed city-wide IoT sensors with real-time dashboards for traffic, air quality, and utilities monitoring.',
    image: 'https://indusai.gov.pk/assets/images/techathon/foundation.jpg'
  },
  {
    id: '08',
    title: 'SaaS Analytics',
    category: 'Multi-tenant Platform',
    description: 'Delivered a secure multi-tenant analytics SaaS with role-based access and custom reporting.',
    image: 'https://indusai.gov.pk/assets/images/techathon/governance.jpg'
  },
  {
    id: '09',
    title: 'Travel Booking Engine',
    category: 'High-Scale Reservations',
    description: 'Engineered a resilient booking system handling peak loads with dynamic pricing and inventory sync.',
    image: 'https://indusai.gov.pk/assets/images/techathon/collaborations.jpg'
  },
 
];

const Portfolio = () => {
  return (
    <>
    <div className="portfolio-container">
      <div className='portfolio-intro'>
        <h1>Portfolio</h1>
        <p>Showcasing our successful projects and client achievements</p>
      </div>
      <div className="portfolio-header">
        <h1>Our Recent Projects</h1>
        <p>Explore the successful projects we've delivered</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="portfolio-card-wrapper" 
            style={{ animationDelay: `${0.3 + index * 0.15}s` }}
          >
            <div className="portfolio-card">
              <div className="portfolio-card-top">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    const fallbacks = [
                      'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=600&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80'
                    ];
                    e.target.src = fallbacks[index % fallbacks.length];
                  }}
                />
                <div className="portfolio-overlay">
                  <button className="view-btn">View Details</button>
                </div>
              </div>
              <div className="portfolio-card-bottom">
                <h3>{project.title}</h3>
                <h4 className="cyan-text">{project.category}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Portfolio;
