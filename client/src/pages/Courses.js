import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Courses.css';

const categories = [
  { id: 'all', label: 'All Programs', tone: 'All' },
  { id: 'tech', label: 'Tech & Data', tone: 'Tech' },
  { id: 'non-tech', label: 'Business & Growth', tone: 'Career' }
];

const allCourses = [
  { id: 1, title: 'Artificial Intelligence', slug: 'artificial-intelligence', category: 'tech', duration: '3 Months', modules: 15, price: 'INR 14,999', badge: 'Popular', rating: '4.9', image: '/images/courses/ai.jpg', description: 'Master AI fundamentals and build intelligent systems.' },
  { id: 2, title: 'Web Development', slug: 'web-development', category: 'tech', duration: '3 Months', modules: 15, price: 'INR 12,999', badge: 'Trending', rating: '4.8', image: '/images/courses/web-dev.jpg', description: 'Build full-stack projects with modern frontend and backend skills.' },
  { id: 3, title: 'Data Science', slug: 'data-science', category: 'tech', duration: '3 Months', modules: 15, price: 'INR 15,999', badge: 'Career track', rating: '4.9', image: '/images/courses/data-science.jpg', description: 'Learn analysis, visualization, statistics, and machine learning.' },
  { id: 4, title: 'Cyber Security', slug: 'cyber-security', category: 'tech', duration: '3 Months', modules: 15, price: 'INR 13,999', badge: 'Job ready', rating: '4.8', image: '/images/courses/cyber-security.jpg', description: 'Practice security concepts used to protect systems and networks.' },
  { id: 5, title: 'Machine Learning', slug: 'machine-learning', category: 'tech', duration: '3 Months', modules: 15, price: 'INR 15,999', badge: 'Advanced', rating: '4.9', image: '/images/courses/machine-learning.jpg', description: 'Train predictive models and convert ML concepts into projects.' },
  { id: 6, title: 'Cloud Computing', slug: 'cloud-computing', category: 'tech', duration: '3 Months', modules: 15, price: 'INR 14,999', badge: 'New', rating: '4.7', image: '/images/courses/cloud.jpg', description: 'Understand cloud architecture, deployment, and platform basics.' },
  { id: 7, title: 'Android Development', slug: 'android-development', category: 'tech', duration: '3 Months', modules: 15, price: 'INR 13,999', badge: 'Project based', rating: '4.7', image: '/images/courses/android-development.png', description: 'Build native Android apps and learn mobile product foundations.' },
  { id: 8, title: 'UI/UX Design', slug: 'ui-ux-design', category: 'tech', duration: '3 Months', modules: 15, price: 'INR 11,999', badge: 'Design', rating: '4.8', image: '/images/courses/ui-ux-design.png', description: 'Create user flows, wireframes, prototypes, and polished interfaces.' },
  { id: 9, title: 'IoT & Robotics', slug: 'iot-robotics', category: 'tech', duration: '3 Months', modules: 15, price: 'INR 14,999', badge: 'Hands-on', rating: '4.7', image: '/images/courses/iot-robotics.png', description: 'Build connected devices and automation-focused systems.' },
  { id: 10, title: 'Digital Marketing', slug: 'digital-marketing', category: 'non-tech', duration: '3 Months', modules: 15, price: 'INR 11,999', badge: 'Growth', rating: '4.8', image: '/images/courses/digital-marketing.jpg', description: 'Learn SEO, content, social media, and campaign performance.' },
  { id: 11, title: 'Business Analytics', slug: 'business-analytics', category: 'non-tech', duration: '3 Months', modules: 15, price: 'INR 13,999', badge: 'Analytics', rating: '4.8', image: '/images/courses/business-analytics.png', description: 'Use data and dashboards for stronger business decisions.' },
  { id: 12, title: 'Finance Management', slug: 'finance-management', category: 'non-tech', duration: '3 Months', modules: 15, price: 'INR 12,999', badge: 'Finance', rating: '4.7', image: '/images/courses/finance-management.png', description: 'Study financial planning, analysis, and investment fundamentals.' },
  { id: 13, title: 'Human Resource', slug: 'human-resource', category: 'non-tech', duration: '3 Months', modules: 15, price: 'INR 11,999', badge: 'People ops', rating: '4.7', image: '/images/courses/human-resource.png', description: 'Learn recruitment, talent management, and modern HR operations.' },
  { id: 14, title: 'Graphic Design', slug: 'graphic-design', category: 'non-tech', duration: '3 Months', modules: 15, price: 'INR 10,999', badge: 'Creative', rating: '4.8', image: '/images/courses/graphic-design.png', description: 'Build visual design skills for brand, social, and product assets.' },
  { id: 15, title: 'Stock Market', slug: 'stock-market', category: 'non-tech', duration: '3 Months', modules: 15, price: 'INR 13,999', badge: 'Markets', rating: '4.7', image: '/images/courses/stock-market.png', description: 'Understand trading strategies, market analysis, and risk basics.' },
  { id: 16, title: 'Psychology', slug: 'psychology', category: 'non-tech', duration: '3 Months', modules: 15, price: 'INR 11,999', badge: 'Applied', rating: '4.8', image: '/images/courses/psychology.jpg', description: 'Explore human behavior, communication, and wellbeing foundations.' }
];

const Courses = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesFilter = filter === 'all' || course.category === filter;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  const activeCategory = categories.find((category) => category.id === filter) || categories[0];

  return (
    <div className="courses-page">
      <nav className="courses-nav">
        <Link to="/" className="courses-brand" aria-label="EliteVeda home">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="EliteVeda Logo" />
          <span>
            <strong>EliteVeda</strong>
            <small>Career-ready learning</small>
          </span>
        </Link>
        <ul className="courses-nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/contact" className="courses-nav-cta">Get Guidance</Link>
      </nav>

      <section className="courses-hero">
        <p className="courses-eyebrow">Programs for students and early professionals</p>
        <h1>Explore courses built around projects, mentors, and outcomes.</h1>
        <p>Choose from industry-ready programs designed to help you build practical skills and a stronger career profile.</p>
      </section>

      <section className="courses-filter-section">
        <div className="filter-container">
          <div className="filter-buttons" role="tablist" aria-label="Course categories">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={filter === category.id ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setFilter(category.id)}
              >
                <span>{category.tone}</span>
                {category.label}
              </button>
            ))}
          </div>
          <label className="search-box">
            <span>Search</span>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="all-courses-section">
        <div className="courses-section-heading">
          <h2>{activeCategory.label}</h2>
          <p>{filteredCourses.length} course{filteredCourses.length === 1 ? '' : 's'} available</p>
        </div>

        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <article className="course-card" key={course.id}>
              <div
                className={course.image ? 'course-visual has-image' : 'course-visual'}
                style={course.image ? { backgroundImage: `url(${process.env.PUBLIC_URL}${course.image})` } : undefined}
              >
                <span className="course-badge">{course.badge}</span>
                <span className="course-rating">Star {course.rating}</span>
              </div>
              <div className="course-body">
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <span>{course.duration}</span>
                  <span>{course.modules} modules</span>
                </div>
                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  <Link to={`/course/${course.slug}`} className="course-action">Explore</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-results">
            <h3>No courses found</h3>
            <p>Try adjusting your search or filter.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Courses;
