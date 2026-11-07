import React, { useEffect, useState, useRef } from 'react'
import './About.css'
import logo from '/atechsolelogo.png'
import Footer from './Footer'
import ServiceDiagram from './ServiceDiagram'

const About = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [isBlackAgain, setIsBlackAgain] = useState(false);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      if (contentRef.current) {
        const contentRect = contentRef.current.getBoundingClientRect();

        if (contentRect.top <= window.innerHeight + 100) {
          setIsScrolledPast(true);
        } else {
          setIsScrolledPast(false);
        }
      }

      if (teamRef.current) {
        const teamRect = teamRef.current.getBoundingClientRect();
        if (teamRect.bottom <= 0) {
          setIsBlackAgain(true);
        } else {
          setIsBlackAgain(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBackgroundClass = () => {
    if (isBlackAgain) return 'black-bg';
    if (isScrolledPast) return 'white-bg';
    return 'black-bg';
  };

  return (
    <>
      <div className={`about-container ${getBackgroundClass()}`}>
        <div className="about-hero">
          <h1 className="about-title">ABOUT ATECHSOLE</h1>
          <p className="about-description">
            <b>12+ Years Experience</b><br /><br />
            ATechSole is a global platform dedicated to empowering businesses with cutting-edge technology solutions.
            Founded with the vision of bridging the gap between digital potential and market leadership,
            ATechSole serves as a transformative partner where innovation meets execution.
          </p>
          <div className="scroll-indicator">
            <span>scroll</span>
            <div className="scroll-line"></div>
          </div>
        </div>

        <div className="about-logo-section" ref={logoRef}>
          <ServiceDiagram />
        </div>

        <div className="about-content" ref={contentRef}>
          <div className='content-row1-container'>
          <div className='content-row1'>
            <div className='content-textt'>
            <h1 >OUR STORY</h1>
            </div>
            <p>Founded in 2012, ATechSole began as a small team of passionate developers with a vision to transform businesses through technology.
              Over the past 12 years, we have grown into a leading technology solutions provider, serving clients across the globe.
              Our journey has been marked by continuous learning, adaptation to emerging technologies, and an unwavering commitment to client success.
              From our first web development project to implementing complex AI solutions, we have consistently pushed boundaries and delivered exceptional results.
              Today, ATechSole stands as a trusted partner for businesses seeking digital transformation.
              Our team of 50+ experts specializes in various domains, ensuring we can tackle any technological challenge our clients face.
              We believe in a client-centric approach, where we listen to our clients' needs, understand their business objectives, and develop customized solutions that drive results.
              Our team of experts works closely with our clients, understanding their unique challenges and opportunities.
              We take a collaborative approach, working closely with our clients to ensure they are satisfied with the final product.
              Our clients are at the heart of everything we do, and we are dedicated to their success.
            </p>
          </div>
          </div>
          <div className="content-row">
            <div className='content-header-container'>
            <div className="content-header">
              <span className="section-number">01</span>
              <h2>Our Mission</h2>
            </div>
             <div className="content-text">
              <p>To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
                we focus on delivering customized solutions that align with our clients' business goals and objectives.
                Whether it's web development, mobile apps, AI-powered solutions, or cloud computing, we tailor our services to meet the unique needs of each client.
              </p>
             </div>
            </div>
             <div className="content-headerr-container">
             <div className="content-header">
              <span className="section-number">02</span>
              <h2>Our Vision</h2>
            </div>
            <div className="content-text">
              <p>To be the global leader in providing transformative technology solutions that shape the future of business and society.
                We strive to be the most trusted partner for businesses, helping them navigate the digital landscape with confidence and success.
                Our commitment to client satisfaction and continuous improvement drives us to exceed expectations and deliver outstanding results.
              </p>
              </div>
             </div>
             <div className="content-headerrr-container">
             <div className="content-header">
              <span className="section-number">03</span>
              <h2>Our Approach</h2>
            </div>
             <div className="content-text">
              <p>We believe in a collaborative approach where we work closely with our clients to understand their unique challenges and objectives. Our agile methodology ensures flexibility and rapid delivery while maintaining the highest quality standards.
                We prioritize client satisfaction and go above and beyond to exceed expectations.
                Our team of experts is dedicated to providing top-notch service and support, ensuring our clients' success.
              </p>
             </div>
             </div>

          </div>


          <section className="team-section" ref={teamRef}>
            <div className="team-header">
              <h2>Meet Our Team</h2>
              <p>ATechSole has a team of 50+ experts who are passionate about technology and dedicated to delivering exceptional results. Meet our talented team members:</p>
            </div>
            <div className="team-grid">
              {[
                {
                  name: 'Mustansar Riaz',
                  role: 'Founder & CEO',
                  image: '/ceo-mustansar-riaz.webp',
                  initials: 'MR',
                  objectPosition: '58% 14%',
                  alt: 'Mustansar Riaz - Founder & CEO of ATechSole | IT Services & AI Solutions',
                  title: 'Mustansar Riaz - Founder & CEO of ATechSole'
                },
                {
                  name: 'Muhammad Ali',
                  role: 'Software Engineer | AI/ML Engineer',
                  image: '/muhammadAli.png',
                  initials: 'MA',
                  objectPosition: '50% 20%',
                  alt: 'Muhammad Ali - Software Engineer & AI/ML Engineer at ATechSole',
                  title: 'Muhammad Ali - Software Engineer & AI/ML Engineer at ATechSole'
                },
                {
                  name: 'Fatima Chaudhary',
                  role: 'Artificial Intelligence Engineer | Machine Learning',
                  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
                  initials: 'FC'
                },
                {
                  name: 'Muhib-ur-Rahman',
                  role: 'Creative Video Editor & Graphic Designer',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
                  initials: 'MR'
                },
                {
                  name: 'Mehak Shafiq',
                  role: 'AI Engineer | Computer Vision | Agentic AI',
                  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
                  initials: 'MS'
                },
                {
                  name: 'Zain Irshad',
                  role: 'Full Stack Software Engineer',
                  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
                  initials: 'ZI'
                },
                {
                  name: 'Aiman Naseer',
                  role: 'Senior UI/UX & Graphic Designer',
                  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
                  initials: 'AN'
                },
                {
                  name: 'Allah Rakha',
                  role: 'Database Administrator | MSSQL Server & Cloud DB',
                  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
                  initials: 'AR'
                },
                {
                  name: 'Farukh Amir',
                  role: 'Senior Financial Controller & Accountant',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
                  initials: 'FA'
                },
                {
                  name: 'Hira Ahmed',
                  role: 'AI & Machine Learning Engineer',
                  image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80',
                  initials: 'HA'
                },
                {
                  name: 'Muhammad Abdullah',
                  role: 'Cyber Security Engineer & SecOps',
                  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
                  initials: 'MA'
                },
                {
                  name: 'M. Ullah',
                  role: 'Growth Marketing & Tech Communications',
                  image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
                  initials: 'MU'
                },
                {
                  name: 'Javeria Javed',
                  role: 'Full Stack Web Developer (MERN / Next.js)',
                  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
                  initials: 'JJ'
                },
                {
                  name: 'Mahzaib Nisar',
                  role: 'Full Stack Developer & Frontend Specialist',
                  image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
                  initials: 'MN'
                },
                {
                  name: 'Meshal Khan',
                  role: 'Full Stack Developer & Cloud Architecture',
                  image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
                  initials: 'MK'
                },
                {
                  name: 'Mariyam Mumtaz',
                  role: 'Business Development Manager & Global Partnerships',
                  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
                  initials: 'MM'
                }
              ].map((member) => (
                <div 
                  key={member.name} 
                  className="team-card"
                  itemScope 
                  itemType="https://schema.org/Person"
                >
                  <div className="accent-shape"></div>
                  <div className="team-photo-wrap">
                    <img 
                      src={member.image} 
                      alt={member.alt || `${member.name} - ${member.role} at ATechSole`} 
                      title={member.title || `${member.name} - ${member.role}`}
                      className="team-photo"
                      style={{ objectPosition: member.objectPosition || 'center' }}
                      loading="lazy"
                      itemProp="image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0F5C3A&color=ffffff&bold=true&size=200`;
                      }}
                    />
                  </div>
                  <div className="team-info">
                    <h3 itemProp="name">{member.name}</h3>
                    <span className="team-role" itemProp="jobTitle">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          

          {/* We Believe Section - Black Background */}
          <div className="we-believe-section">
            <div className="believe-icon">

              <img src={logo} alt="Global Unity Icon" className="believe-img" />
            </div>
            <div className="believe-content">
              <h3>WE BELIEVE</h3>
              <p>
                that businesses are not just economic entities — they are the architects of the future.
                Through immersive digital strategies, robust software engineering, and global technological integration,
                ATechSole equips enterprises with essential tools in innovation, scalability, market leadership, and digital resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
