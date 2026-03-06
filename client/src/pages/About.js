import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">EliteVeda</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/courses">Courses</Link></li> 
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About <span className="highlight">EliteVeda</span></h1>
          <p>Empowering learners to achieve their career goals through world-class education</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our <span className="highlight">Mission</span></h2>
            <p>At EliteVeda, we believe education is the foundation of success. Our mission is to provide industry-relevant, high-quality courses that bridge the gap between learning and real-world application.</p>
            <p>We're committed to making professional education accessible, affordable, and effective for learners at every stage of their career journey.</p>
          </div>
          <div className="mission-image">
            <img src={`${process.env.PUBLIC_URL}/images/about/mission.jpg`} alt="Our Mission" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our <span className="highlight">Core Values</span></h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, from curriculum design to student support.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Integrity</h3>
            <p>We maintain the highest standards of honesty and transparency in all our interactions.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We continuously evolve our teaching methods to stay ahead of industry trends.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌟</div>
            <h3>Impact</h3>
            <p>We measure our success by the positive impact we create in our students' lives.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stat-box">
          <h3>1000+</h3>
          <p>Students Trained</p>
        </div>
        <div className="stat-box">
          <h3>15+</h3>
          <p>Expert Courses</p>
        </div>
        <div className="stat-box">
          <h3>60+</h3>
          <p>Hiring Partners</p>
        </div>
        <div className="stat-box">
          <h3>95%</h3>
          <p>Success Rate</p>
        </div>
      </section>

      {/* Team Section */}
      {/*<section className="team-section">
        <h2>Meet Our <span className="highlight">Team</span></h2>
        <p className="team-subtitle">Passionate educators and industry experts dedicated to your success</p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-image">
              <img src={`${process.env.PUBLIC_URL}/images/team/member1.jpg`} alt="Team Member" />
            </div>
            <h3>Dr. Rajesh Kumar</h3>
            <p className="team-role">Founder & CEO</p>
            <p className="team-bio">15+ years in EdTech and AI Research</p>
          </div>
          <div className="team-card">
            <div className="team-image">
              <img src={`${process.env.PUBLIC_URL}/images/team/member2.jpg`} alt="Team Member" />
            </div>
            <h3>Priya Sharma</h3>
            <p className="team-role">Head of Curriculum</p>
            <p className="team-bio">Former Google Engineer, 10+ years experience</p>
          </div>
          <div className="team-card">
            <div className="team-image">
              <img src={`${process.env.PUBLIC_URL}/images/team/member3.jpg`} alt="Team Member" />
            </div>
            <h3>Amit Patel</h3>
            <p className="team-role">Director of Student Success</p>
            <p className="team-bio">Passionate about career development</p>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Start Your Learning Journey?</h2>
        <p>Join thousands of successful students who transformed their careers with EliteVeda</p>
        <Link to="/courses">
          <button className="btn-primary large">Explore Courses</button>
        </Link>
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
              <li><Link to="/about">About Us</Link></li>
              <li>Careers</li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <p className="footer-bottom">© 2025 EliteVeda Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;