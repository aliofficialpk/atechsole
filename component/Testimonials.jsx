import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "John Davidson",
    role: "CEO, TechCorp",
    image: "https://cdn-icons-png.flaticon.com/128/14663/14663189.png",
    review: "ATechSole transformed our business with their innovative web development solutions. Their team's expertise and dedication exceeded our expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Robert Park",
    role: "Director, Global Retail Inc",
    image: "https://cdn-icons-png.flaticon.com/128/14663/14663195.png",
    review: "Their AI solutions have revolutionized our customer service. We've seen a 40% increase in efficiency since implementation.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "CTO, Finance Plus",
    image: "https://cdn-icons-png.flaticon.com/128/417/417776.png",
    review: "The cybersecurity implementation by ATechSole has been outstanding. We now have peace of mind knowing our data is fully protected.",
    rating: 5
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Founder, StartUpHub",
    image: "https://cdn-icons-png.flaticon.com/128/2342/2342011.png",
    review: "Their mobile app development team is fantastic. They brought our vision to life with a user-friendly and beautiful app.",
    rating: 5
  },
  {
    id: 5,
    name: "Michael Wilson",
    role: "Operations Manager, LogisticsPro",
    image: "https://cdn-icons-png.flaticon.com/128/4140/4140061.png",
    review: "Reliable, efficient, and cost-effective. ATechSole is our go-to partner for all cloud infrastructure needs.",
    rating: 5
  },
  {
    id: 6,
    name: "Amina Khalid",
    role: "Marketing Head, BrandWave",
    image: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
    review: "ATechSole's digital marketing integration with their web platform boosted our online engagement by 60%. Truly impressive work!",
    rating: 5
  },
  {
    id: 7,
    name: "David Chen",
    role: "VP Engineering, DataSync",
    image: "https://cdn-icons-png.flaticon.com/128/3940/3940403.png",
    review: "Their backend architecture is rock solid. Migrating to their cloud solutions reduced our downtime to nearly zero.",
    rating: 4
  },
  {
    id: 8,
    name: "Fatima Noor",
    role: "CEO, EduTech Solutions",
    image: "https://cdn-icons-png.flaticon.com/128/4322/4322992.png",
    review: "From concept to deployment, ATechSole delivered our e-learning platform flawlessly. Their attention to UX is second to none.",
    rating: 5
  }
];

const StarRating = ({ rating }) => (
  <div className="testimonial-stars">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  const getCardPosition = (index) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;

    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === testimonials.length - 1) return 'left';
    if (diff === 2) return 'far-right';
    if (diff === testimonials.length - 2) return 'far-left';
    return 'hidden';
  };

  return (
    <section
      className="testimonials-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonials-header">
        <span className="testimonials-badge">WHAT PEOPLE SAY</span>
        <h2 className="testimonials-title">CLIENT TESTIMONIALS</h2>
        <p className="testimonials-subtitle">What our clients say about us</p>
      </div>

      <div className="testimonials-container">
        <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous testimonial">
          &#10094;
        </button>

        <div className="cards-wrapper">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`testimonial-card ${getCardPosition(index)}`}
            >
              <div className="card-content">
                <div className="quote-icon">"</div>
                <p className="client-review">{item.review}</p>
                <StarRating rating={item.rating} />
                <div className="client-info">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="client-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=0F5C3A&color=ffffff&bold=true`;
                    }}
                  />
                  <div>
                    <h3 className="client-name">{item.name}</h3>
                    <p className="client-role">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={nextSlide} aria-label="Next testimonial">
          &#10095;
        </button>
      </div>

      <div className="dots-container">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>

      {/* Auto-scroll indicator */}
      <div className="auto-scroll-indicator">
        <span className={`scroll-dot ${!isPaused ? 'animating' : ''}`}></span>
        <span className="scroll-label">{isPaused ? 'Paused' : 'Auto-scrolling'}</span>
      </div>
    </section>
  );
};

export default Testimonials;
