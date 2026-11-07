import React from 'react';
import './CybersecurityProcess.css';

const processSteps = [
  {
    id: 1,
    title: "Security Audit",
    subtitle: "Vulnerability Assessment",
    description: "Comprehensive scanning and auditing of your current infrastructure to identify potential vulnerabilities and compliance gaps.",
    icon: "https://cdn-icons-png.flaticon.com/128/2716/2716612.png" 
  },
  {
    id: 2,
    title: "Strategy & Architecture",
    subtitle: "Defense Planning",
    description: "Designing a robust security framework and zero-trust architecture customized to your organization's specific threat landscape.",
    icon: "https://cdn-icons-png.flaticon.com/128/921/921591.png"
  },
  {
    id: 3,
    title: "Implementation",
    subtitle: "Deploying Controls",
    description: "Installing and configuring advanced security tools, firewalls, and protocols to fortify your digital perimeter.",
    icon: "https://cdn-icons-png.flaticon.com/128/2092/2092663.png"
  },
  {
    id: 4,
    title: "Penetration Testing",
    subtitle: "Stress Testing",
    description: "Ethical hacking simulations to test the effectiveness of implemented security measures against real-world attack vectors.",
    icon: "https://cdn-icons-png.flaticon.com/128/3048/3048122.png"
  },
  {
    id: 5,
    title: "Monitoring & Response",
    subtitle: "24/7 Vigilance",
    description: "Continuous monitoring of your systems with rapid incident response capabilities to neutralize threats in real-time.",
    icon: "https://cdn-icons-png.flaticon.com/128/9502/9502265.png"
  }
];

const CybersecurityProcess = () => {
  return (
    <section className="cyber-process-section">
      <div className="cyber-process-header">
        <h2>Cybersecurity Process</h2>
        <p>A proactive approach to securing your digital assets against evolving threats</p>
      </div>

      <div className="process-timeline-container">
        {/* Connection Line */}
        <div className="timeline-line"></div>

        <div className="process-steps-wrapper">
          {processSteps.map((step, index) => (
            <div key={step.id} className={`process-step-item ${index % 2 === 0 ? 'top' : 'bottom'}`}>
              
              {/* Icon Circle */}
              <div className="step-icon-circle">
                <img src={step.icon} alt={step.title} />
              </div>

              {/* Number Badge */}
              <div className="step-number-badge">
                {String(step.id).padStart(2, '0')}
              </div>

              {/* Connector Dot on Line - Removed */}

              {/* Content Card */}
              <div className="step-content-card">
                <h3>{step.title}</h3>
                <span className="step-subtitle">{step.subtitle}</span>
                <p>{step.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CybersecurityProcess;
