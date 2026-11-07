import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does ATechSole offer?",
      answer: "We offer a wide range of services including Web Development, Mobile App Development, UI/UX Design, Cybersecurity Solutions, Cloud Computing, and AI/ML integration."
    },
    {
      question: "How do you ensure project security?",
      answer: "We follow industry-standard security protocols, including encryption, regular audits, and secure coding practices to protect your data and intellectual property."
    },
    {
      question: "What is your typical development process?",
      answer: "Our process involves Requirement Analysis, UI/UX Design, Development, Testing & QA, Deployment, and Post-Launch Support. We follow Agile methodologies for flexibility."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your software runs smoothly and stays up-to-date."
    },
    {
      question: "How long does it take to build a website or app?",
      answer: "The timeline depends on the project's complexity. A simple website might take 2-4 weeks, while a complex mobile app could take 3-6 months. We provide a detailed timeline after initial consultation."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We can augment your existing team with our experts or work independently as a dedicated project team, depending on your needs."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know about our services</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
