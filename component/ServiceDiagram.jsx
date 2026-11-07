import React from 'react';
import './ServiceDiagram.css';
import logo from '/atechsolelogo.png';

const ServiceDiagram = () => {
  const services = [
    {
      title: "AI Solutions",
      desc: "Leveraging AI for smarter business decisions and automation.",
      icon: "https://cdn-icons-png.flaticon.com/128/901/901002.png",
      position: "top-left"
    },
    {
      title: "Web Development",
      desc: "Scalable and responsive web solutions for business growth.",
      icon: "https://cdn-icons-png.flaticon.com/128/7838/7838457.png",
      position: "top-right"
    },
    {
      title: "Cybersecurity",
      desc: "Robust security measures to protect your digital assets.",
      icon: "https://cdn-icons-png.flaticon.com/128/6071/6071531.png",
      position: "bottom-left"
    },
    {
      title: "Mobile App Dev",
      desc: "Intuitive mobile apps for seamless performance.",
      icon: "https://cdn-icons-png.flaticon.com/128/12294/12294365.png",
      position: "bottom-right"
    }
  ];

  return (
    <div className="service-diagram-container">
      <h2 className="diagram-title">Atechsole Services Ecosystem</h2>
      <p className="diagram-subtitle">Comprehensive technology solutions tailored to your business needs</p>
      
      <div className="diagram-layout">
        {/* Center Node */}
        <div className="center-node">
          <div className="center-circle">
            <img src={logo} alt="Atechsole Core" className="center-logo" />
          </div>
          <div className="pulse-ring"></div>
        </div>

        {/* Connecting Lines (SVG) */}
        <svg className="diagram-lines" viewBox="0 0 800 600">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#ef6060" />
            </marker>
          </defs>
          
          {/* Lines to corners */}
          <line x1="400" y1="300" x2="200" y2="150" className="connector-line" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="300" x2="600" y2="150" className="connector-line" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="300" x2="200" y2="450" className="connector-line" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="300" x2="600" y2="450" className="connector-line" markerEnd="url(#arrowhead)" />
        </svg>

        {/* Service Cards */}
        {services.map((service, index) => (
          <div key={index} className={`service-node ${service.position}`}>
            <div className="node-icon-wrapper">
              <img src={service.icon} alt={service.title} className="node-icon" />
            </div>
            <div className="node-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDiagram;
