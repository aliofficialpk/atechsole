import React, { useState } from 'react';
import './Blog.css';
import Footer from './Footer';

const blogPosts = [
  {
    id: '01',
    date: ' Jan 15, 2025',
    title: 'Top AI Trends Shaping Business in 2025',
    description: 'Explore the latest artificial intelligence trends that are revolutionizing how businesses operate and compete in the digital landscape.',
    tag: ' Tech Team',
    image: 'https://plus.unsplash.com/premium_vector-1725372199832-32fef84e123b?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '02',
    date: ' Jan 10, 2025',
    title: 'Essential Cybersecurity Practices for SMBs',
    description: 'Learn how small and medium businesses can protect themselves from cyber threats with practical security measures.',
    tag: 'Security Team',
    image: 'https://plus.unsplash.com/premium_vector-1682310920702-50669014da8f?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '03',
    date: 'Jan 5, 2025',
    title: 'Cloud Migration: A Step-by-Step Guide',
    description: 'Comprehensive guide to successfully migrating your business infrastructure to the cloud with minimal disruption.',
    tag: ' Cloud Team',
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '04',
    date: ' Dec 28, 2024',
    title: 'Modern Web Development Best Practices',
    description: 'Discover the latest web development techniques and best practices for building scalable applications',
    tag: 'Dev Team',
    image: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '05',
    date: 'Dec 20, 2024',
    title: 'Cross-Platform vs Native Mobile Development',
    description: 'Understanding the pros and cons of different mobile development approaches for your business needs.',
    tag: ' Mobile Team',
    image: 'https://plus.unsplash.com/premium_vector-1727448490518-477e95ae1ca3?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '06',
    date: ' Dec 15, 2024',
    title: 'Implementing DevOps for Faster Delivery',
    description: 'How DevOps practices can accelerate your software delivery while maintaining quality and reliability.',
    tag: 'DevOps Team',
    image: 'https://images.unsplash.com/photo-1667372335937-d03be6fb0a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2b3BzfGVufDB8fDB8fHww'
  },
  {
    id: '07',
    date: ' Dec 10, 2024',
    title: 'Microservices Architecture: Key Design Principles',
    description: 'Break down monoliths the right way with service boundaries, observability, and resilience patterns.',
    tag: ' Architecture',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '08',
    date: ' Dec 5, 2024',
    title: 'Edge Computing: Real-World Use Cases',
    description: 'From retail to manufacturing — how edge reduces latency and enables smarter experiences.',
    tag: ' Cloud Team',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '09',
    date: ' Nov 28, 2024',
    title: 'UI/UX Trends for 2025',
    description: 'Accessibility-first design, AI-assisted prototyping, and motion-driven interactions.',
    tag: ' Design',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '10',
    date: ' Nov 20, 2024',
    title: 'Kubernetes Best Practices for Production',
    description: 'Resource limits, autoscaling, secrets management, and progressive delivery strategies.',
    tag: ' DevOps',
    image: 'https://images.unsplash.com/photo-1522205408450-add114ad53fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '11',
    date: ' Nov 15, 2024',
    title: 'Building Secure APIs: A Practical Guide',
    description: 'Authentication, rate limiting, input validation, and monitoring for robust APIs.',
    tag: ' Backend',
    image: 'https://images.unsplash.com/photo-1696013910376-c56f76dd8178?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnVpbGRpbmclMjBTZWN1cmUlMjBBUElzfGVufDB8fDB8fHww'
  },
  {
    id: '12',
    date: ' Nov 12, 2024',
    title: 'Data Engineering Fundamentals',
    description: 'Pipelines, warehousing, and ELT patterns to make data usable at scale.',
    tag: ' Data',
    image: 'https://images.unsplash.com/photo-1705167067400-0cca32706d97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERhdGElMjBFbmdpbmVlcmluZyUyMEZ1bmRhbWVudGFsc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '13',
    date: ' Nov 8, 2024',
    title: 'CI/CD for React Applications',
    description: 'Automating builds, tests, and deployments with best practices on modern platforms.',
    tag: ' Frontend',
    image: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '14',
    date: ' Nov 5, 2024',
    title: 'Observability: Logs, Metrics, Traces',
    description: 'Designing systems you can trust with full-stack visibility and alerting.',
    tag: ' SRE',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '15',
    date: ' Nov 2, 2024',
    title: 'Design Systems: Scaling UI Consistency',
    description: 'Tokens, components, and documentation that keep products consistent and fast to build.',
    tag: ' Design',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '16',
    date: ' Oct 28, 2024',
    title: 'Serverless Patterns for Startups',
    description: 'Ship faster with event-driven services, practical limits, and cost control.',
    tag: ' Cloud',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '17',
    date: ' Oct 22, 2024',
    title: 'GraphQL vs REST: When to Choose What',
    description: 'Trade-offs in flexibility, caching, and tooling with real-world recommendations.',
    tag: ' API',
    image: 'https://images.unsplash.com/photo-1522205408450-add114ad53fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '18',
    date: ' Oct 18, 2024',
    title: 'Performance Tuning for React',
    description: 'Memoization, virtualization, and concurrent features to keep UIs fast.',
    tag: ' Frontend',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '19',
    date: ' Oct 12, 2024',
    title: 'Zero Trust Security Basics',
    description: 'Identity-first protection, least privilege, and continuous verification.',
    tag: ' Security',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '20',
    date: ' Oct 8, 2024',
    title: 'AI Ethics: Responsible Innovation',
    description: 'Bias mitigation, transparency, and governance practices for AI systems.',
    tag: ' AI',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  }
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const visiblePosts =
    currentPage === 1
      ? blogPosts.slice(0, 9)
      : currentPage === 2
        ? blogPosts.slice(9, 15)
        : blogPosts.slice(15, 20);

  return (
    <>
    <div className="blog-container">
      <div className='blog-intro'>
        <h1> Blog</h1>
        <p>Stay updated with technology trends and industry insights</p>
      </div>
      <div className="blog-header">
        <h1>Latest Updates</h1>
        <p>Explore our insights on technology and development</p>
      </div>
      <div className="blog-grid">
        {visiblePosts.map((post, index) => (
          <div 
            key={post.id} 
            className="blog-card-wrapper" 
            style={{ animationDelay: `${0.3 + index * 0.15}s` }}
          >
            <span className="card-number">{post.id}</span>
            <div className="blog-card">
              <div className="card-bg" style={{ backgroundImage: `url(${post.image})` }}></div>
              <div className="card-overlay"></div>
              
              <div className="card-date">{post.date}</div>
              
              <div className="card-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="card-tag">{post.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="blog-pagination">
        <button 
          className={`page-pill ${currentPage === 1 ? 'active' : ''}`} 
          onClick={() => setCurrentPage(1)}
        >1</button>
        <button 
          className={`page-pill ${currentPage === 2 ? 'active' : ''}`} 
          onClick={() => setCurrentPage(2)}
        >2</button>
        <button 
          className={`page-pill ${currentPage === 3 ? 'active' : ''}`} 
          onClick={() => setCurrentPage(3)}
        >3</button>
        <span className="dots">…</span>
        <span className="total">{totalPages}</span>
        <button 
          className="next-btn" 
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >Next</button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Blog;
