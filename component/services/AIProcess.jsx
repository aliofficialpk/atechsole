import React from 'react';
import './AIProcess.css';

const processSteps = [
  {
    id: 1,
    title: "Data Collection & Strategy",
    subtitle: "Gathering Intelligence",
    description: "We identify and gather relevant datasets, cleaning and structuring them to ensure high-quality inputs for your AI model.",
    icon: "https://cdn-icons-png.flaticon.com/128/2083/2083213.png" 
  },
  {
    id: 2,
    title: "Model Architecture",
    subtitle: "Designing the Brain",
    description: "Our experts select and design the optimal neural network architecture tailored to your specific problem and constraints.",
    icon: "https://cdn-icons-png.flaticon.com/128/2103/2103633.png"
  },
  {
    id: 3,
    title: "Training & Refinement",
    subtitle: "Learning Patterns",
    description: "We train the model using advanced algorithms, iteratively refining parameters to maximize accuracy and performance.",
    icon: "https://cdn-icons-png.flaticon.com/128/8654/8654246.png"
  },
  {
    id: 4,
    title: "Evaluation & Testing",
    subtitle: "Validating Results",
    description: "Rigorous testing against real-world scenarios to ensure the model generalizes well and meets all performance metrics.",
    icon: "https://cdn-icons-png.flaticon.com/128/2821/2821637.png"
  },
  {
    id: 5,
    title: "Deployment & Scaling",
    subtitle: "Production Ready",
    description: "Seamless integration into your existing infrastructure with continuous monitoring and scaling capabilities.",
    icon: "https://cdn-icons-png.flaticon.com/128/8062/8062283.png"
  }
];

const AIProcess = () => {
  return (
    <section className="ai-process-section">
      <div className="ai-process-header">
        <h2>AI Development Process</h2>
        <p>Turning raw data into intelligent solutions through a structured workflow</p>
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

export default AIProcess;
