import React, { useEffect } from 'react'
import './Services.css'
import Footer from '../Footer'
import AIProcess from './AIProcess'

const AIServices = () => {

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') {
            // fallback: reveal all
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
                <h1>AI Solutions That Power the Future of Innovation</h1>
                <p>
                    Empower your business with advanced Artificial Intelligence solutions designed to
                    automate operations, deliver predictive insights, and drive competitive advantage.
                </p>
                <div className="service-hero-cta">
                    <a href="#contact" className="btn-primary">Free Consultation</a>
                    <a href="#features" className="btn-secondary">Explore AI Capabilities</a>
                </div>
            </section>

            {/* Overview Section */}
            <section className="service-overview">
                <h2>What We Offer</h2>
                 <p>
                    At ATechSole, our AI services transform data into intelligence. From machine learning
                    to custom AI systems, we build scalable solutions that enhance efficiency, personalization,
                    and decision-making.
                </p>
                <div className="overview-circles">
                    <div className="overview-circle">Accurate Models</div>
                    <div className="overview-circle">Ethical AI</div>
                    <div className="overview-circle">Real-Time Insights</div>
                    <div className="overview-circle">Scalable Pipelines</div>
                    <div className="overview-circle">MLOps</div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="service-features">
                <h2>Core AI Capabilities</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        </div>
                        <h3>AI Chatbot Development</h3>
                        <p>Intelligent, conversational bots that automate support and improve engagement.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 20V10M18 20V4M6 20v-4" />
                            </svg>
                        </div>
                        <h3>Natural Language Processing</h3>
                        <p>Enable machines to understand and interpret human language for smarter automation.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <h3>Predictive Analytics</h3>
                        <p>Forecast trends, detect risk patterns, and make data-backed decisions.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <h3>Machine & Deep Learning</h3>
                        <p>Train systems that evolve with data to deliver accurate insights and automation.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v10" />
                            </svg>
                        </div>
                        <h3>Computer Vision Solutions</h3>
                        <p>Analyze visual data for object detection, diagnostics, and real-time decision-making.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h3>ChatGPT & Conversational AI</h3>
                        <p>Enhance apps with natural, contextual AI responses that improve interactions.</p>
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
                        <p>Automate Repetitive Tasks — Save time and reduce costs</p>
                    </div>
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Data-Driven Decisions — Predict outcomes with precision</p>
                    </div>
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Enhanced Customer Interaction — AI-powered engagement</p>
                    </div>
                    <div className="benefit-item">
                        <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <p>Scalable AI Deployment — From prototype to production</p>
                    </div>
                </div>
            </section>

            <AIProcess />

            {/* Industries Section */}
            <section className="service-industries">
                <h2>Industries We Serve</h2>
                <div className="industries-grid">
                    <span className="industry-tag">Healthcare</span>
                    <span className="industry-tag">Finance</span>
                    <span className="industry-tag">E-commerce</span>
                    <span className="industry-tag">Education</span>
                    <span className="industry-tag">Manufacturing</span>
                    <span className="industry-tag">Logistics</span>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="service-why-us">
                <h2>Why Choose ATechSole for AI</h2>
                <div className="why-us-grid">
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <h3>Expert AI Engineers</h3>
                        <p>Skilled data scientists and AI specialists</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" />
                        </svg>
                        <h3>Custom Models</h3>
                        <p>Tailored solutions for your business needs</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <h3>Transparent Process</h3>
                        <p>Clear communication and delivery</p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                        </svg>
                        <h3>Ongoing Support</h3>
                        <p>Post-launch optimization and maintenance</p>
                    </div>
                     <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                        </svg>
                        <h3> Fine-Tuned Models </h3>
                        <p> Models specifically trained for your business requirements </p>
                    </div>
                    <div className="why-us-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                        </svg>
                        <h3> Scalability </h3>
                        <p> Handle large volumes of data and requests with ease </p>
                    </div>
                    
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" className="service-final-cta">
                <h2>Ready to Transform with AI?</h2>
                <div className="cta-buttons">
                    <a href="#" className="btn-primary">Request a Demo</a>
                    <a href="#" className="btn-secondary">Contact Us Today</a>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AIServices
