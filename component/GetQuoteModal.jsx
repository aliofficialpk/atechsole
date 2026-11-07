import React, { useState } from 'react';
import './GetQuoteModal.css';

const GetQuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI & Machine Learning',
    'Cybersecurity Solutions',
    'Cloud Infrastructure',
    'UI/UX Design',
    'Digital Marketing',
    'Custom Software',
    'Other'
  ];

  const budgets = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+'
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('Please fill in your name, email, and project details.');
      setIsSuccess(false);
      return;
    }

    setStatus('');
    setIsSubmitting(true);

    try {
      const baseUrl = import.meta.env.VITE_API_URL || '';
      // Submit as a contact message with subject "Quote Request"
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Quote Request - ${formData.service || 'General'}`,
          message: `[QUOTE REQUEST]\nCompany: ${formData.company || 'N/A'}\nService: ${formData.service || 'Not specified'}\nBudget: ${formData.budget || 'Not specified'}\n\nProject Details:\n${formData.message}`
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setStatus('Quote request submitted successfully! We\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
      } else {
        setIsSuccess(false);
        setStatus(data.message || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      setIsSuccess(false);
      setStatus('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const msg = `Hi ATechSole! I'm interested in getting a quote.\n\nName: ${formData.name || '[Your Name]'}\nService: ${formData.service || '[Service]'}\nDetails: ${formData.message || '[Your project details]'}`;
    window.open(`https://wa.me/923253344552?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="quote-close-btn" onClick={onClose}>&times;</button>

        <div className="quote-modal-inner">
          {/* Left Panel */}
          <div className="quote-left-panel">
            <span className="quote-badge">FREE CONSULTATION</span>
            <h2>Get a <span className="quote-highlight">Quote</span></h2>
            <p>Tell us about your project and we'll provide a detailed estimate within 24 hours.</p>

            <div className="quote-features">
              <div className="quote-feature">
                <span className="quote-feature-icon">⚡</span>
                <span>Fast 24h Response</span>
              </div>
              <div className="quote-feature">
                <span className="quote-feature-icon">🔒</span>
                <span>100% Confidential</span>
              </div>
              <div className="quote-feature">
                <span className="quote-feature-icon">💼</span>
                <span>No Commitment</span>
              </div>
            </div>

            <div className="quote-whatsapp-section">
              <p className="quote-or-text">Or connect directly via</p>
              <button className="quote-whatsapp-btn" onClick={openWhatsApp} type="button">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="quote-right-panel">
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="quote-form-row">
                <div className="quote-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="quote-form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="quote-form-row">
                <div className="quote-form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+92 XXX XXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="quote-form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="quote-form-row">
                <div className="quote-form-group">
                  <label>Service Required</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="quote-form-group">
                  <label>Estimated Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange}>
                    <option value="">Select budget range</option>
                    {budgets.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="quote-form-group full-width">
                <label>Project Details *</label>
                <textarea
                  name="message"
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="quote-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>

              {status && (
                <div className={`quote-status ${isSuccess ? 'success' : 'error'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuoteModal;
