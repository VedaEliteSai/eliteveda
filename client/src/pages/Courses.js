import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Courses.css';

const Courses = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allCourses = [
    // Tech Courses
    { id: 1, title: 'Artificial Intelligence', slug: 'artificial-intelligence', category: 'tech', duration: '3 Months', modules: 15, price: '₹14,999', icon: '🤖', description: 'Master AI fundamentals and build intelligent systems' },
    { id: 2, title: 'Web Development', slug: 'web-development', category: 'tech', duration: '3 Months', modules: 15, price: '₹12,999', icon: '💻', description: 'Full-stack development with React, Node.js & MongoDB' },
    { id: 3, title: 'Data Science', slug: 'data-science', category: 'tech', duration: '3 Months', modules: 15, price: '₹15,999', icon: '📊', description: 'Learn data analysis, visualization, and machine learning' },
    { id: 4, title: 'Cyber Security', slug: 'cyber-security', category: 'tech', duration: '3 Months', modules: 15, price: '₹13,999', icon: '🔐', description: 'Protect systems and networks from cyber threats' },
    { id: 5, title: 'Machine Learning', slug: 'machine-learning', category: 'tech', duration: '3 Months', modules: 15, price: '₹15,999', icon: '🧠', description: 'Build predictive models and AI applications' },
    { id: 6, title: 'Cloud Computing', slug: 'cloud-computing', category: 'tech', duration: '3 Months', modules: 15, price: '₹14,999', icon: '☁️', description: 'AWS, Azure, and cloud architecture fundamentals' },
    { id: 7, title: 'Android Development', slug: 'android-development', category: 'tech', duration: '3 Months', modules: 15, price: '₹13,999', icon: '📱', description: 'Build native Android apps with Kotlin' },
    { id: 8, title: 'UI/UX Design', slug: 'ui-ux-design', category: 'tech', duration: '3 Months', modules: 15, price: '₹11,999', icon: '🎨', description: 'Create beautiful user experiences with Figma' },
    { id: 9, title: 'IoT & Robotics', slug: 'iot-robotics', category: 'tech', duration: '3 Months', modules: 15, price: '₹14,999', icon: '🤖', description: 'Build connected devices and automation systems' },
    
    // Non-Tech Courses
    { id: 10, title: 'Digital Marketing', slug: 'digital-marketing', category: 'non-tech', duration: '3 Months', modules: 15, price: '₹11,999', icon: '📱', description: 'SEO, social media, and content marketing strategies' },
    { id: 11, title: 'Business Analytics', slug: 'business-analytics', category: 'non-tech', duration: '3 Months', modules: 15, price: '₹13,999', icon: '📈', description: 'Data-driven business decision making' },
    { id: 12, title: 'Finance Management', slug: 'finance-management', category: 'non-tech', duration: '3 Months', modules: 15, price: '₹12,999', icon: '💰', description: 'Financial planning, analysis, and investment strategies' },
    { id: 13, title: 'Human Resource', slug: 'human-resource', category: 'non-tech', duration: '3 Months', modules: 15, price: '₹11,999', icon: '👥', description: 'Recruitment, talent management, and HR operations' },
    { id: 14, title: 'Graphic Design', slug: 'graphic-design', category: 'non-tech', duration: '3 Months', modules: 15, price: '₹10,999', icon: '🎨', description: 'Visual design with Adobe Creative Suite' },
    { id: 15, title: 'Stock Market', slug: 'stock-market', category: 'non-tech', duration: '3 Months', modules: 15, price: '₹13,999', icon: '📊', description: 'Trading strategies and market analysis' },
    { id: 16, title: 'Psychology', slug: 'psychology', category: 'non-tech', duration: '3 Months', modules: 15, price: '₹11,999', icon: '🧠', description: 'Understanding human behavior and mental processes' },
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesFilter = filter === 'all' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="courses-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">EliteVeda</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="btn-outline">Login</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="courses-hero">
        <h1>Explore Our <span className="highlight">Courses</span></h1>
        <p>Choose from 15+ industry-ready programs designed to accelerate your career</p>
      </section>

      {/* Filter & Search */}
      <section className="courses-filter-section">
        <div className="filter-container">
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('all')}
            >
              All Courses ({allCourses.length})
            </button>
            <button 
              className={filter === 'tech' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('tech')}
            >
              Tech ({allCourses.filter(c => c.category === 'tech').length})
            </button>
            <button 
              className={filter === 'non-tech' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('non-tech')}
            >
              Non-Tech ({allCourses.filter(c => c.category === 'non-tech').length})
            </button>
          </div>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="all-courses-section">
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span>⏱ {course.duration}</span>
                <span>📚 {course.modules} Modules</span>
              </div>
<div className="course-footer">
  <span className="course-price">{course.price}</span>
  <Link to={`/course/${course.slug}`}>
    <button className="btn-primary">Explore Course</button>
  </Link>
</div>
            </div>
          ))}
        </div>
        {filteredCourses.length === 0 && (
          <div className="no-results">
            <h3>No courses found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Courses;