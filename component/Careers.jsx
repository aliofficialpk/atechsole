import React, { useState } from 'react'
import './Careers.css'
import Footer from './Footer.jsx'

const Careers = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', message: '' })

  const vacancies = [
    {
      id: 1,
      title: 'ML Engineer',
      location: 'Lahore, Pakistan',
      type: 'Full Time',
      description: 'We are looking for experienced ML Engineers to join our team and build intelligent systems that power our AI solutions.',
      fullDescription: `ABOUT ATECHSOLE
Atechsole is a leading technology company dedicated to making AI more accessible and inclusive for all. We develop cutting-edge solutions in cybersecurity, AI, web development, and mobile applications that empower businesses and individuals worldwide.

JOB DESCRIPTION
As an ML Engineer at Atechsole, you will:
• Design and develop machine learning models and algorithms for production systems
• Build scalable ML pipelines and data processing frameworks
• Collaborate with cross-functional teams including data scientists and backend engineers
• Optimize model performance and implement best practices for ML deployment
• Work on computer vision, NLP, and deep learning projects
• Contribute to research and development of new AI solutions
• Conduct code reviews and mentor junior team members

REQUIRED QUALIFICATIONS
• Bachelor's degree in Computer Science, Engineering, Mathematics, or related field (Master's preferred)
• 2+ years of professional experience in Machine Learning or related field
• Strong proficiency in Python, TensorFlow, PyTorch, or scikit-learn
• Experience with data manipulation and analysis (NumPy, Pandas, SQL)
• Solid understanding of ML algorithms, statistical methods, and data structures
• Experience with cloud platforms (AWS, Google Cloud, or Azure)
• Familiarity with version control (Git) and CI/CD pipelines
• Experience with Docker and containerization
• Strong problem-solving and analytical skills

PREFERRED QUALIFICATIONS
• Master's degree in Machine Learning, AI, or related field
• Experience with computer vision or NLP projects
• Published research papers or open-source contributions
• Experience with distributed computing and big data frameworks
• Knowledge of MLOps and model monitoring tools
• Experience in blockchain or cybersecurity applications

WHAT WE OFFER
• Competitive salary package
• Health insurance and benefits
• Professional development opportunities
• Flexible work arrangements
• Collaborative and innovative work environment
• Cutting-edge technology and tools`,
    },
    {
      id: 2,
      title: 'UI/UX Developer',
      location: 'Lahore, Pakistan',
      type: 'Full Time',
      description: 'Join our design team to create stunning and intuitive user interfaces that delight our users and drive engagement.',
      fullDescription: `ABOUT ATECHSOLE
Atechsole is a leading technology company dedicated to making AI more accessible and inclusive for all. We develop cutting-edge solutions in cybersecurity, AI, web development, and mobile applications that empower businesses and individuals worldwide.

JOB DESCRIPTION
As a UI/UX Developer at Atechsole, you will:
• Design and develop user interfaces for web and mobile applications
• Create wireframes, prototypes, and high-fidelity mockups
• Conduct user research and usability testing
• Collaborate with product managers and developers to implement designs
• Ensure responsive design across all devices and screen sizes
• Optimize user experience through data-driven design decisions
• Maintain design systems and component libraries
• Create comprehensive design documentation
• Participate in design reviews and provide constructive feedback

REQUIRED QUALIFICATIONS
• Bachelor's degree in Design, Computer Science, HCI, or related field
• 2+ years of professional experience in UI/UX Design
• Proficiency in design tools (Figma, Adobe XD, Sketch, or similar)
• Strong understanding of user-centered design principles
• Experience with responsive design and mobile-first approach
• Knowledge of HTML, CSS, and basic JavaScript
• Portfolio showcasing UI/UX design projects
• Excellent communication and collaboration skills
• Attention to detail and design consistency
• Experience with design systems and component libraries

PREFERRED QUALIFICATIONS
• Master's degree in Design or related field
• Experience with front-end development (React, Vue, Angular)
• Knowledge of web accessibility (WCAG) standards
• Experience with UX research methodologies
• Familiarity with A/B testing and analytics tools
• Motion design and animation experience
• Experience with design-to-development handoff tools
• Knowledge of AI/ML in UX design

WHAT WE OFFER
• Competitive salary package
• Health insurance and benefits
• Professional development opportunities
• Flexible work arrangements
• Collaborative and innovative work environment
• Opportunity to work on cutting-edge AI products
• Design mentorship and learning resources`,
    },
  ]

  const showCustomModal = (title, message) => {
    setModalContent({ title, message })
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleJobDescription = (job) => {
    showCustomModal(job.title, job.fullDescription)
  }

  const handleApplyNow = (jobTitle) => {
    showCustomModal('Apply Now', `Thank you for your interest in ${jobTitle}!\n\nPlease send your resume to: hr@atechsole.com`)
  }

  return (
    <>

      <section className="careers-hero">
        <div className="careers-hero-overlay"></div>
        <div className="careers-hero-content">
          <h1>Collaborate with Atechsole to unlock your potential and thrive in the digital landscape! </h1>
         <div className='careers-hero-email'> <p>hr@atechsole.com</p></div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="careers-container">
        <div className="careers-header">
          <h2>Open Vacancies</h2>
        </div>

        <div className="vacancies-grid">
          {vacancies.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <h3>{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>
              <p className="job-location">{job.location}</p>
              <p className="job-description">{job.description}</p>
              <div className="job-card-buttons">
                <button 
                  className="btn-job-description"
                  onClick={() => handleJobDescription(job)}
                >
                  Job Description
                </button>
                <button 
                  className="btn-apply-now"
                  onClick={() => handleApplyNow(job.title)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />

      {/* Custom Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.message}</p>
            <button className="modal-close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Careers
