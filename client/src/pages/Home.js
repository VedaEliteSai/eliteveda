import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const coursesData = [
    { title: 'Artificial Intelligence', slug: 'artificial-intelligence', duration: '3 Months', modules: 15, icon: '🤖', image: '/images/courses/ai.jpg' },
    { title: 'Web Development', slug: 'web-development', duration: '3 Months', modules: 15, icon: '💻', image: '/images/courses/web-dev.jpg' },
    { title: 'Data Science', slug: 'data-science', duration: '3 Months', modules: 15, icon: '📊', image: '/images/courses/data-science.jpg' },
    { title: 'Cyber Security', slug: 'cyber-security', duration: '3 Months', modules: 15, icon: '🔐', image: '/images/courses/cyber-security.jpg' },
    { title: 'Digital Marketing', slug: 'digital-marketing', duration: '3 Months', modules: 15, icon: '📱', image: '/images/courses/digital-marketing.jpg' },
    { title: 'Machine Learning', slug: 'machine-learning', duration: '3 Months', modules: 15, icon: '🧠', image: '/images/courses/machine-learning.jpg' },
    { title: 'Psychology', slug: 'psychology', duration: '3 Months', modules: 12, icon: '🧠', image: '/images/courses/psychology.jpg' },
    {title: 'SAP', slug: 'SAP', duration: '3 Months', modules: 12, icon: '🧠', image: '/images/courses/SAP.jpg'}
  ];

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">EliteVeda</div>
        <ul className="nav-links">
          <li><Link to="/courses">Courses</Link></li> 
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section 
        className="hero" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/hero/hero-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>Elevate Your <span className="highlight">Learning</span></h1>
          <p>Accelerate your career with industry-leading courses in Tech, Management, and beyond.</p>
          <div className="hero-buttons">
            <Link to="/courses">
              <button className="btn-primary large">Explore Courses</button>
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><h3>15+</h3><p>Courses</p></div>
            <div className="stat"><h3>5000+</h3><p>Students</p></div>
            <div className="stat"><h3>100+</h3><p>Companies</p></div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses" id="courses">
        <h2>Our <span className="highlight">Popular Courses</span></h2>
        <p className="section-subtitle">From fundamentals to advanced specialties</p>
        <div className="courses-grid">
          {coursesData.map((course, index) => (
            <div className="course-card" key={index}>
              <div 
                className="course-image" 
                style={{backgroundImage: `url(${process.env.PUBLIC_URL}${course.image})`}}
              >
                <div className="course-overlay"></div>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <div className="course-meta">
                  <span>⏱ {course.duration}</span>
                  <span>📚 {course.modules} Modules</span>
                </div>
                <Link to={`/course/${course.slug}`}>
                  <button className="btn-primary">Explore Course</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Companies */}
<section className="alumni-section">
  <h2>Our Alumni Works At</h2>
  <p className="alumni-subtitle">Our learners have turned their skills into success, now thriving at top companies worldwide.</p>
  
  {/* First Row - Scrolls Left */}
  <div className="logo-slider">
    <div className="logo-track logo-track-left">
      <img src={`${process.env.PUBLIC_URL}/images/companies/accenture.png`} alt="Accenture" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/meta.png`} alt="Meta" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/hcl.png`} alt="HCL Tech" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/amazon.png`} alt="Amazon" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/oracle.png`} alt="Oracle" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/microsoft.png`} alt="Microsoft" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/infosys.png`} alt="Infosys" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/tcs.png`} alt="TCS" />
      {/* Duplicate for seamless loop */}
      <img src={`${process.env.PUBLIC_URL}/images/companies/accenture.png`} alt="Accenture" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/meta.png`} alt="Meta" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/hcl.png`} alt="HCL Tech" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/amazon.png`} alt="Amazon" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/oracle.png`} alt="Oracle" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/microsoft.png`} alt="Microsoft" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/infosys.png`} alt="Infosys" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/tcs.png`} alt="TCS" />
    </div>
  </div>

  {/* Second Row - Scrolls Right */}
  <div className="logo-slider">
    <div className="logo-track logo-track-right">
      <img src={`${process.env.PUBLIC_URL}/images/companies/tcs.png`} alt="TCS" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/infosys.png`} alt="Infosys" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/microsoft.png`} alt="Microsoft" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/oracle.png`} alt="Oracle" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/amazon.png`} alt="Amazon" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/hcl.png`} alt="HCL Tech" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/meta.png`} alt="Meta" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/accenture.png`} alt="Accenture" />
      {/* Duplicate for seamless loop */}
      <img src={`${process.env.PUBLIC_URL}/images/companies/tcs.png`} alt="TCS" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/infosys.png`} alt="Infosys" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/microsoft.png`} alt="Microsoft" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/oracle.png`} alt="Oracle" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/amazon.png`} alt="Amazon" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/hcl.png`} alt="HCL Tech" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/meta.png`} alt="Meta" />
      <img src={`${process.env.PUBLIC_URL}/images/companies/accenture.png`} alt="Accenture" />
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>EliteVeda</h3>
            <p>Where Knowledge Meets Excellence 🚀</p>
          </div>
          <div className="footer-links">
            <h4>Courses</h4>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Cyber Security</li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <p className="footer-bottom">© 2025 EliteVeda Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;