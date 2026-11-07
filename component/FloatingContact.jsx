import React, { useState } from 'react';
import './FloatingContact.css';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState('')

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const baseUrl = import.meta.env.VITE_API_URL || ''
    const res = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message: msg })
    })
    if (res.ok) {
      setStatus('Message sent successfully. We will respond soon.')
      setName(''); setEmail(''); setMsg('')
    } else {
      setStatus('Failed to send message.')
    }
  }

  return (
    <div className="floating-contact-wrapper">
      {isOpen && (
        <div className="contact-popover">
          <div className="popover-header">
            <h3>Contact us</h3>
            <button className="close-btn" onClick={toggleForm}>×</button>
          </div>
          <form className="popover-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className="popover-input" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email Address" className="popover-input" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Message" className="popover-textarea" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
            <button type="submit" className="popover-submit">Send a message</button>
            {status && <div className="submit-status">{status}</div>}
          </form>
          <div className="popover-arrow"></div>
        </div>
      )}

      <button 
        className={`floating-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleForm}
        aria-label="Contact Us"
      >
        {isOpen ? (
             <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
             </svg>
        ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
