import React, { useState } from 'react';
import './Events.css';
import Footer from './Footer';

import img1 from '../assets/Event-images/image (1).jpeg';
import img2 from '../assets/Event-images/image (2).jpeg';
import img3 from '../assets/Event-images/image (3).jpeg';
import img4 from '../assets/Event-images/image (4).jpeg';
import img5 from '../assets/Event-images/image (5).jpeg';
import img6 from '../assets/Event-images/image (6).jpeg';

const eventData = [
  { 
    id: 1, 
    title: 'Indus AI Techathon & Innovation Expo', 
    date: 'OCTOBER 2024',
    location: 'Islamabad, Pakistan',
    tag: 'National AI Competition',
    desc: 'ATechSole showcased frontier artificial intelligence models and partnered in organizing national hackathon tracks, driving industry-academia synergy.',
    image: img1 
  },
  { 
    id: 2, 
    title: 'Global Tech Summit & Cyber Workshop', 
    date: 'AUGUST 2024',
    location: 'Dubai & Remote',
    tag: 'Cybersecurity & Defense',
    desc: 'Keynote sessions on modern zero-trust architecture, automated threat modeling, and next-generation SecOps frameworks.',
    image: img2 
  },
  { 
    id: 3, 
    title: 'Annual Corporate Gala & Excellence Awards', 
    date: 'DECEMBER 2023',
    location: 'Lahore, Pakistan',
    tag: 'Company Milestone',
    desc: 'Honoring exceptional team contributions, celebrating 12+ years of excellence, and outlining strategic goals for expansion.',
    image: img3 
  },
  { 
    id: 4, 
    title: 'AI & Cloud Engineering Hackathon', 
    date: 'MAY 2024',
    location: 'ATechSole HQ',
    tag: 'Engineering Sprint',
    desc: 'A 48-hour continuous coding sprint where engineers created agentic AI workflows and ultra-fast microservices prototypes.',
    image: img4 
  },
  { 
    id: 5, 
    title: 'Enterprise Digital Transformation Workshop', 
    date: 'FEBRUARY 2024',
    location: 'Tech Hub Center',
    tag: 'Executive RoundTable',
    desc: 'Collaborative workshop connecting enterprise executives with software architecture experts to plan cloud-native modernization.',
    image: img5 
  },
  { 
    id: 6, 
    title: 'Tech Mentorship & Developer Bootcamp', 
    date: 'NOVEMBER 2023',
    location: 'Innovation Campus',
    tag: 'Community Mentorship',
    desc: 'Fostering future software engineering talent through hands-on labs in React, Python AI, and cloud architecture.',
    image: img6 
  },
];

const Events = () => {
  const [activeEventId, setActiveEventId] = useState(1);

  const selectedEvent = eventData.find(e => e.id === activeEventId) || eventData[0];

  return (
    <>
      <div className="events-page-wrapper">
        <div className="events-header-banner">
          <span className="events-pill">EXPERIENCE & IMPACT</span>
          <h1>ATechSole Events & Summits</h1>
          <p>Highlights from our global conferences, engineering hackathons, and corporate milestones</p>
        </div>

        {/* Desktop Interactive Layout */}
        <div className="events-container desktop-events-view">
          {/* Background Image Layer */}
          <div className="event-bg-layer">
            {eventData.map((event) => (
              <div 
                key={event.id}
                className={`bg-image-wrapper ${activeEventId === event.id ? 'visible' : ''}`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="bg-image"
                />
                <div className="bg-image-overlay"></div>
              </div>
            ))}
          </div>

          <div className="events-split-content">
            <div className="events-list">
              {eventData.map((event) => (
                <div
                  key={event.id}
                  className={`event-item ${activeEventId === event.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveEventId(event.id)}
                  onClick={() => setActiveEventId(event.id)}
                >
                  <div className="event-meta">
                    <span className="event-tag">{event.tag}</span>
                    <span className="event-date">{event.date}</span>
                  </div>
                  <h2>{event.title}</h2>
                  <div className="event-loc">📍 {event.location}</div>
                </div>
              ))}
            </div>

            <div className="event-detail-preview">
              <div className="detail-card">
                <span className="detail-tag">{selectedEvent.tag}</span>
                <h3>{selectedEvent.title}</h3>
                <div className="detail-meta">
                  <span>📅 {selectedEvent.date}</span>
                  <span>📍 {selectedEvent.location}</span>
                </div>
                <p>{selectedEvent.desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Cards Layout */}
        <div className="mobile-events-cards">
          {eventData.map((event) => (
            <div key={event.id} className="mobile-event-card">
              <div className="mobile-event-img-wrap">
                <img src={event.image} alt={event.title} loading="lazy" />
                <span className="mobile-event-badge">{event.tag}</span>
              </div>
              <div className="mobile-event-info">
                <div className="mobile-event-meta">
                  <span>📅 {event.date}</span>
                  <span>📍 {event.location}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
