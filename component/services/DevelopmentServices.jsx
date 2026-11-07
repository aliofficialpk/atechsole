import React, { useEffect } from 'react'
import './Services.css'
import Footer from '../Footer'
import DevelopmentProcess from './DevelopmentProcess'

const DevelopmentServices = () => {

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') {
            document.querySelectorAll('.service-page .feature-card, .service-page .why-us-item, .service-page .process-flow-item, .service-page .benefit-item, .service-page .overview-circle').forEach(el => el.classList.add('in-view'));
            return;
        }

        const containerSelector = '.service-page';
        const items = Array.from(document.querySelectorAll(`${containerSelector} .feature-card, ${containerSelector} .why-us-item, ${containerSelector} .process-flow-item, ${containerSelector} .benefit-item, ${containerSelector} .overview-circle`));
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const idx = items.indexOf(el);
                    el.style.animationDelay = `${(idx >= 0 ? idx : 0) * 0.12}s`;
                    el.classList.add('in-view');
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.12 });

        items.forEach(i => observer.observe(i));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="service-page">
            {/* Hero Section */}
            <section className="service-hero">
                <h1>Custom Development That Scales with Your Vision</h1>
                <p>
                    From web platforms to mobile apps and enterprise systems, our development services
                    build digital solutions that outperform expectations.
                </p>
                <div className="service-hero-cta">
                    <a href="#contact" className="btn-primary">Start Your Project</a>
                    <a href="#features" className="btn-secondary">Free Strategy Call</a>
                </div>
            </section>

            {/* Overview Section */}
            <section className="service-overview">
                <h2>Development Expertise</h2>
                <p>
                    At ATechSole, we craft robust applications that boost productivity, streamline workflows,
                    and deliver exceptional user experiences.
                </p>
                <div className="overview-circles">
                    <div className="overview-circle">Quality Code</div>
                    <div className="overview-circle">Agile Delivery</div>
                    <div className="overview-circle">Scalable Architecture</div>
                    <div className="overview-circle">DevOps Culture</div>
                    <div className="overview-circle">Test Automation</div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="service-features">
                <h2>Our Development Services</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                        </div>
                        <h3>Full-Stack Web Development</h3>
                        <p>Responsive, scalable websites and web apps with modern frameworks.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
                            </svg>
                        </div>
                        <h3>Mobile App Development</h3>
                        <p>Native & cross-platform mobile solutions for iOS and Android.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                            </svg>
                        </div>
                        <h3>API & Database Integration</h3>
                        <p>Connect systems securely and efficiently using modern standards.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                        </div>
                        <h3>E-Commerce Platforms</h3>
                        <p>Secure, performance-optimized online stores with seamless UX.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                        </div>
                        <h3>CMS & Backend Systems</h3>
                        <p>Manage content and backend logic with customized admin solutions.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
                            </svg>
                        </div>
                        <h3>Custom Software Engineering</h3>
                        <p>Bespoke solutions built for your specific needs and growth.</p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="service-benefits">
                <h2>Why It Matters</h2>
                <div className="benefits-list">
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Accelerate digital transformation</p>
                    </div>
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Deliver seamless customer experiences</p>
                    </div>
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Increase operational efficiency</p>
                    </div>
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Drive measurable business outcomes</p>
                    </div>
                </div>
            </section>

            <DevelopmentProcess />

            {/* Industries Section */}
            <section className="service-industries">
                <h2>We Work Across Industries</h2>
                
                <div className="industries-grid">
                    <span className="industry-tag">Retail</span>
                    <span className="industry-tag">Healthcare</span>
                    <span className="industry-tag">Finance</span>
                    <span className="industry-tag">Logistics</span>
                    <span className="industry-tag">Education</span>
                    <span className="industry-tag">Travel</span>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="service-why-us">
                <h2>Why ATechSole Development?</h2>
                <div className="why-us-grid">
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <h3>Proven Track Record</h3>
                        <p>Building high-impact apps for diverse clients</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                        </svg>
                        <h3>Agile Practices</h3>
                        <p>Transparent communication throughout</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                        </svg>
                        <h3>Dedicated Support</h3>
                        <p>Maintenance and ongoing optimization</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" />
                        </svg>
                        <h3>Modern Tech Stack</h3>
                        <p>Latest frameworks and best practices</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                        </svg>
                        <h3>Custom Solutions</h3>
                        <p>Tailored to your business needs</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                        </svg>
                        <h3>Scalability</h3>
                        <p>Built to handle growth and demand</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" className="service-final-cta">
                <h2>Let's Build Together</h2>
                <div className="cta-buttons">
                    <a href="#" className="btn-primary">Get a Quote</a>
                    <a href="#" className="btn-secondary">Talk to Our Experts</a>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default DevelopmentServices
