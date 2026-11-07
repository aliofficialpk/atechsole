import React, { useEffect } from 'react'
import './services/Services.css'
import Footer from './Footer'
import img2 from '../assets/Event-images/image (1).jpeg'
import img3 from '../assets/Event-images/image (14).jpg'
import img4 from '../assets/Event-images/image (4).jpeg'
import img5 from '../assets/Event-images/image (13).jpeg'
import img6 from '../assets/Event-images/image (6).jpeg'
import img7 from '../assets/Event-images/image (7).jpeg'
import img8 from '../assets/Event-images/image (5).jpeg'


const LifeAtAtechsole = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.life-sections .life-item')
    if (!('IntersectionObserver' in window)) {
      // If no support, reveal all
      items.forEach((it) => it.classList.add('in-view'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            // optionally remove when scrolled out
            // entry.target.classList.remove('in-view')
          }
        })
      },
      { threshold: 0.25 }
    )

    items.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])
  return (
    <div className="service-page">
      <section className="service-hero">
        <h1>Life at ATechSole</h1>
        <p>Collaborative culture, growth mindset, and real impact.</p>
      </section>

      <section className="life-intro">
        <p>
          We build a people-first environment focused on collaboration and continuous learning. Everyone is empowered to take
          ownership, grow their craft, and contribute to meaningful outcomes — while keeping a healthy work-life balance.
        </p>
      </section>

      <section className="life-sections">
        <div className="life-item">
          <div className="life-content">
            <div className="life-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18v-6h6v6M8 6h8l-1 4H9L8 6z" />
              </svg>
            </div>
            <h3>Collaboration over Competition</h3>
            <p>By encouraging cooperation over competition, we enable our team to achieve shared objectives.</p>
          </div>
          <div className="life-image-wrap">
            <div className="life-image">
              <img src={img2} alt="Collaboration at ATechSole" />
            </div>
            <span className="life-accent accent-tr"></span>
            <span className="life-accent accent-bl"></span>
          </div>
        </div>

        <div className="life-item reverse">
          
          <div className="life-content">
            <div className="life-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l4 8H8l4-8zm0 20v-8" />
              </svg>
            </div>
            <h3>Empowering Employees</h3>
            <p>We provide resources and support so everyone can succeed and achieve their goals.</p>
          </div>
          <div className="life-image-wrap">
            <div className="life-image">
              <img src={img3} alt="Empowering Employees" />
            </div>
            <span className="life-accent accent-tr"></span>
            <span className="life-accent accent-bl"></span>
          </div>
        </div>

        <div className="life-item">
          <div className="life-content">
            <div className="life-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M16.24 7.76l2.83-2.83M4.93 19.07l2.83-2.83" />
              </svg>
            </div>
            <h3>Innovation and Creativity</h3>
            <p>We constantly strive to push boundaries and deliver exceptional outcomes for our clients.</p>
          </div>
          <div className="life-image-wrap">
            <div className="life-image">
              <img src={img4} alt="Innovation and Creativity" />
            </div>
            <span className="life-accent accent-tr"></span>
            <span className="life-accent accent-bl"></span>
          </div>
        </div>

        <div className="life-item reverse">
          
          <div className="life-content">
            <div className="life-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20v-6m0-8l-7 4 7 4 7-4-7-4z" />
              </svg>
            </div>
            <h3>Learning and Growth</h3>
            <p>Continuous learning is part of our culture, helping teammates develop skills and stay ahead.</p>
          </div>
          <div className="life-image-wrap">
            <div className="life-image">
              <img src={img5} alt="Learning and Growth" />
            </div>
            <span className="life-accent accent-tr"></span>
            <span className="life-accent accent-bl"></span>
          </div>
        </div>
      </section>

      <section className="life-stats">
        <div className="stat-card">
          <h3>50+</h3>
          <p>Team Members</p>
        </div>
        <div className="stat-card">
          <h3>20+</h3>
          <p>Events & Workshops</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Growth Mindset</p>
        </div>
      </section>

      <section className="life-gallery">
        <div className="gallery-item poly"><img src={img6} alt="Workspace" /></div>
        <div className="gallery-item poly"><img src={img7} alt="Team Session" /></div>
        <div className="gallery-item poly"><img src={img8} alt="Collab Space" /></div>
      
      </section>

      <section className="life-cta">
        <h2>Join Our Culture</h2>
        <p>Be part of a team that values collaboration, creativity, and growth.</p>
        <a className="btn-primary" href="/careers">Explore Careers</a>
      </section>

      <Footer />
    </div>
  )
}

export default LifeAtAtechsole
