import React, { useState, useEffect, useRef } from 'react'
import './StatsCounter.css'

const CounterCard = ({ end, label, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let current = 0
    const increment = Math.ceil(end / 50)
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [hasStarted, end])

  return (
    <div ref={cardRef} className="counter-card">
      <div className="counter-number">
        {count}
        {suffix}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  )
}

const StatsCounter = ({ title = 'Our numbers speaks for itself', subtitle = '', stats = [] }) => {
  // Ensure stats is an array before mapping
  const statsArray = Array.isArray(stats) ? stats : []

  return (
    <section className="stats-counter-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="counter-grid">
          {statsArray.map((stat, index) => (
            <CounterCard
              key={index}
              end={stat.end}
              label={stat.label}
              suffix={stat.suffix || ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
