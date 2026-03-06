import React, { useState } from 'react';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
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
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in <span className="highlight">Touch</span></h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact <span className="highlight">Information</span></h2>
            <p>Reach out to us through any of these channels</p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3>Email</h3>
                <p>info@eliteveda.in</p>
                <p>support@eliteveda.in</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📱</div>
                <h3>Phone</h3>
                <p>+91 9845468773</p>
                <p>Mon-Sat, 9AM-6PM IST</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Address</h3>
                <p>123 Tech Park, Electronic City</p>
                <p>Bangalore, Karnataka 560100</p>
              </div>

              <div className="info-card">
                <div className="info-icon">🌐</div>
                <h3>Social Media</h3>
                <div className="social-links">
  <a href="https://linkedin.com/company/eliteveda" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
  <a href="https://twitter.com/eliteveda" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
  <a href="https://instagram.com/eliteveda" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send Us a <span className="highlight">Message</span></h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary large"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="message success-message">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="message error-message">
                  ❌ Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Find Us on <span className="highlight">Map</span></h2>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d77.6!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="EliteVeda Location"
          ></iframe>
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

export default Contact;