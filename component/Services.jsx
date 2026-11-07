import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    title: "CYBERSECURITY",
    desc: "Protecting your digital assets with robust security measures, threat detection, and compliance management to ensure your business stays secure.",
    img: "https://cdn-icons-png.flaticon.com/128/15254/15254442.png",
  },
  {
    title: "WEB DEVELOPEMENT",
    desc: "Crafting scalable and responsive web solutions that deliver exceptional user experiences and drive business growth.",
    img: "https://cdn-icons-png.flaticon.com/128/5738/5738073.png",
  },
  {
    title: "AI SOLUTIONS",
    desc: "Leveraging artificial intelligence for smarter business decisions, automation, and predictive analytics.",
    img: "https://cdn-icons-png.flaticon.com/128/2591/2591945.png",
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    desc: "Developing intuitive mobile applications for all platforms with seamless performance and engaging interfaces..",
    img: "https://cdn-icons-png.flaticon.com/128/10214/10214393.png",
  },
  {
    title: "UI/UX DESIGN",
    desc: "Designing user-centric interfaces for enhanced user experience and maximum engagement.",
    img: "https://cdn-icons-png.flaticon.com/128/13191/13191289.png",
  },
  {
    title: "CLOUD SOLUTIONS",
    desc: "Implementing scalable cloud infrastructure and migration strategies for optimal performance.",
    img: "https://cdn-icons-png.flaticon.com/128/10835/10835199.png",
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="services-wrapper">
        <h2 className="services-title">SERVICES ATECHSOLE<br/> PROVIDE</h2>
         <p className="hiw-subtitle">
          Comprehensive technology solutions tailored to your business needs
        </p>
      <div className="services-container">
        {/* LEFT MAIN PANEL */}
        <div className="services-main">
          <h1>{services[active].title}</h1>
          <p>{services[active].desc}</p>
          <img src={services[active].img} alt="service" className="main-img" />

        </div>

        {/* RIGHT VERTICAL TABS */}
        <div className="services-tabs ">
          {services.map((s, index) => (
            <div
              key={index}
              className={`service-tab ${active === index ? "active" : ""}`}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span className="vertical-text">{s.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
