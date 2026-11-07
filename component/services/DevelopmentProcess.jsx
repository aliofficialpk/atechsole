import React from 'react';
import './DevelopmentProcess.css';

const processSteps = [
  {
    id: 1,
    title: "Discovery & Planning",
    subtitle: "Understanding Your Vision",
    description: "We begin by analyzing your business goals, requirements, and target audience to create a strategic roadmap.",
    icon: "https://cdn-icons-png.flaticon.com/128/10061/10061738.png" 
  },
  {
    id: 2,
    title: "Design & Prototyping",
    subtitle: "Crafting the Experience",
    description: "Our designers create intuitive wireframes and high-fidelity prototypes to visualize the user journey before coding begins.",
    icon: "https://cdn-icons-png.flaticon.com/128/1256/1256650.png"
  },
  {
    id: 3,
    title: "Development",
    subtitle: "Building the Solution",
    description: "Our developers bring the design to life using cutting-edge technologies, ensuring scalable and robust code.",
    icon: "https://cdn-icons-png.flaticon.com/128/1005/1005141.png"
  },
  {
    id: 4,
    title: "Testing & QA",
    subtitle: "Ensuring Perfection",
    description: "Rigorous testing phases including unit, integration, and user acceptance testing to guarantee a bug-free product.",
    icon: "https://cdn-icons-png.flaticon.com/128/9502/9502265.png"
  },
  {
    id: 5,
    title: "Deployment & Support",
    subtitle: "Launch & Beyond",
    description: "We handle the deployment process and provide ongoing maintenance to keep your software performing at its best.",
    icon: "https://cdn-icons-png.flaticon.com/128/10866/10866384.png"
  }
];

const DevelopmentProcess = () => {
  return (
    <section className="dev-process-section">
      <div className="dev-process-header">
        <h2>Software Development Process</h2>
        <p>A systematic approach to delivering excellence from concept to launch</p>
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

export default DevelopmentProcess;
