import React, { useEffect } from 'react'
import './Services.css'
import Footer from '../Footer'
import CybersecurityProcess from './CybersecurityProcess'

const CybersecurityServices = () => {

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
                <h1>Comprehensive Cybersecurity Solutions for Modern Threats</h1>
                <p>
                    Protect your business with end-to-end cybersecurity — from threat detection
                    to compliance and resilience.
                </p>
                <div className="service-hero-cta">
                    <a href="#contact" className="btn-primary">Secure Your Systems</a>
                    <a href="#features" className="btn-secondary">Request Assessment</a>
                </div>
            </section>

            {/* Overview Section */}
            <section className="service-overview">
                <h2>What We Protect</h2>
                <p>
                    Our cybersecurity solutions cover a wide range of threats, including malware,
                    ransomware, phishing, and more. We also provide compliance services to help
                    you meet industry regulations.
                </p>
                <div className="overview-circles">
                    <div className="overview-circle">Threat Detection</div>
                    <div className="overview-circle">Zero Trust</div>
                    <div className="overview-circle">Compliance Ready</div>
                    <div className="overview-circle">Data Privacy</div>
                    <div className="overview-circle">Rapid Response</div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="service-features">
                <h2>Our Cybersecurity Offerings</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h3>Risk & Vulnerability Assessment</h3>
                        <p>Identify threats and patch vulnerabilities before they're exploited.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                        </div>
                        <h3>Threat Monitoring & Detection</h3>
                        <p>24/7 monitoring with intelligent alerts and response mechanisms.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                                <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
                            </svg>
                        </div>
                        <h3>Endpoint Security</h3>
                        <p>Protect devices and networks from unauthorized access.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
                            </svg>
                        </div>
                        <h3>Secure Architecture Design</h3>
                        <p>Build security into every layer, from code to infrastructure.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                        </div>
                        <h3>Incident Response & Recovery</h3>
                        <p>Minimize downtime and loss with proactive threat response plans.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                        </div>
                        <h3>Compliance & Security Audits</h3>
                        <p>Ensure regulatory compliance and industry best practices.</p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="service-benefits">
                <h2>Business Benefits</h2>
                <div className="benefits-list">
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Reduce attack surfaces</p>
                    </div>
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Prevent data breaches</p>
                    </div>
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Ensure business continuity</p>
                    </div>
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Build customer trust</p>
                    </div>
                </div>
            </section>

            <CybersecurityProcess />

            {/* Industries Section */}
            <section className="service-industries">
                <h2>Industry Application</h2>
                <div className="industries-grid">
                    <span className="industry-tag">Healthcare</span>
                    <span className="industry-tag">Finance</span>
                    <span className="industry-tag">E-commerce</span>
                    <span className="industry-tag">Enterprise IT</span>
                    <span className="industry-tag">Government</span>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="service-why-us">
                <h2>Why Partner with ATechSole</h2>
                <div className="why-us-grid">
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <h3>Deep Technical Expertise</h3>
                        <p>Years of cybersecurity experience</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                        </svg>
                        <h3>Security-First Development</h3>
                        <p>Security built into every solution</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        </svg>
                        <h3>Custom Roadmaps</h3>
                        <p>Tailored security strategies</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                        </svg>
                        <h3>Proactive Protection</h3>
                        <p>Advanced tools and monitoring</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                        </svg>
                        <h3>Final Support</h3>
                        <p>Comprehensive post-launch support</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                        </svg>
                        <h3>Compliance</h3>
                        <p>Adherence to industry standards</p>  
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" className="service-final-cta">
                <h2>Get Protected Today</h2>
                <div className="cta-buttons">
                    <a href="#" className="btn-primary">Request Security Audit</a>
                    <a href="#" className="btn-secondary">Contact Us</a>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default CybersecurityServices
