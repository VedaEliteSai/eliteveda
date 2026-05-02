import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const coursesData = [
  { title: 'Artificial Intelligence', slug: 'artificial-intelligence', duration: '3 Months', modules: 15, level: 'Popular', accent: 'AI', description: 'Build practical AI workflows, automation skills, and portfolio-ready intelligent applications.', image: '/images/courses/ai.jpg' },
  { title: 'Web Development', slug: 'web-development', duration: '3 Months', modules: 15, level: 'Trending', accent: 'WEB', description: 'Master responsive interfaces, React fundamentals, backend basics, and deployable projects.', image: '/images/courses/web-dev.jpg' },
  { title: 'Data Science', slug: 'data-science', duration: '3 Months', modules: 15, level: 'Career track', accent: 'DATA', description: 'Learn Python, analytics, dashboards, statistics, and real-world data storytelling.', image: '/images/courses/data-science.jpg' },
  { title: 'Cyber Security', slug: 'cyber-security', duration: '3 Months', modules: 15, level: 'Job ready', accent: 'SEC', description: 'Understand threats, secure systems, and practice the skills used by security teams.', image: '/images/courses/cyber-security.jpg' },
  { title: 'Digital Marketing', slug: 'digital-marketing', duration: '3 Months', modules: 15, level: 'Growth', accent: 'MKT', description: 'Plan campaigns, improve SEO, create content systems, and read marketing performance.', image: '/images/courses/digital-marketing.jpg' },
  { title: 'Machine Learning', slug: 'machine-learning', duration: '3 Months', modules: 15, level: 'Advanced', accent: 'ML', description: 'Train models, evaluate predictions, and convert machine learning concepts into projects.', image: '/images/courses/machine-learning.jpg' },
  { title: 'Psychology', slug: 'psychology', duration: '3 Months', modules: 12, level: 'Applied', accent: 'PSY', description: 'Study human behavior, communication, wellbeing, and practical psychology foundations.', image: '/images/courses/psychology.jpg' },
  { title: 'SAP', slug: 'SAP', duration: '3 Months', modules: 12, level: 'Enterprise', accent: 'SAP', description: 'Learn enterprise process flows and SAP concepts used across modern business teams.', image: '/images/courses/SAP.jpg' }
];

const testimonialsData = [
  {
    name: 'Priya Sharma',
    role: 'AI Engineer at Accenture',
    image: '/images/testimonials/student1.jpg',
    text: 'The AI course completely changed my career trajectory. The mentor sessions and projects helped me explain my work confidently in interviews.'
  },
  {
    name: 'Rahul Kumar',
    role: 'Full Stack Developer at Bosch',
    image: '/images/testimonials/student2.jpg',
    text: 'The Web Development course was practical from week one. I built real projects, cleaned up my portfolio, and became interview ready.'
  },
  {
    name: 'Anjali Patel',
    role: 'Data Scientist at Microsoft',
    image: '/images/testimonials/student3.jpg',
    text: 'The Data Science program gave me structure, feedback, and career support. It helped me move from finance into a data role.'
  },
  {
    name: 'Akash Agarwal',
    role: 'SSE in Oracle',
    initials: 'AA',
    text: 'EliteVeda gave me the structure I needed to sharpen my fundamentals and present my project work clearly during technical discussions.'
  },
  {
    name: 'Manish Chouhan',
    role: 'SDE 1 in NetApp',
    initials: 'MC',
    text: 'The practical assignments helped me connect concepts with real implementation. It made my preparation more focused and interview friendly.'
  },
  {
    name: 'Akshata B',
    role: 'SDE in Harmans',
    initials: 'AB',
    text: 'The mentor feedback and project reviews helped me improve step by step. I felt much more confident explaining my skills and decisions.'
  },
  {
    name: 'Kavya Menon',
    role: 'Frontend Developer',
    initials: 'KM',
    text: 'The course kept everything practical. By the end, I had cleaner projects, better confidence, and a stronger portfolio to show recruiters.'
  }
];

const companies = ['accenture', 'meta', 'hcl', 'amazon', 'oracle', 'microsoft', 'infosys', 'tcs'];

const Home = () => {
  const coursesCarouselRef = useRef(null);
  const testimonialsCarouselRef = useRef(null);

  const scrollCarousel = (carouselRef, direction, distance = 448) => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction * distance,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const carousel = testimonialsCarouselRef.current;
    if (!carousel) return undefined;

    const interval = window.setInterval(() => {
      const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 20;

      if (atEnd) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      carousel.scrollBy({ left: 430, behavior: 'smooth' });
    }, 3800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <nav className="navbar">
        <Link to="/" className="logo" aria-label="EliteVeda home">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="EliteVeda Logo" className="logo-image" />
          <span className="brand-copy">
            <strong>EliteVeda</strong>
            <small>Career-ready learning</small>
          </span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <span className="nav-pill">Live cohorts</span>
          <Link to="/courses" className="nav-cta">Start Learning</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src={`${process.env.PUBLIC_URL}/images/hero/hero-bg.jpg`} alt="" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Live mentorship. Real projects. Career outcomes.</p>
          <h1>Build skills students can turn into careers.</h1>
          <p className="hero-copy">
            Learn industry-ready tech, business, and creative skills through structured programs,
            mentor support, portfolio projects, and placement-focused guidance.
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn-primary large">Explore Courses</Link>
            <Link to="/contact" className="btn-secondary large">Talk to an Advisor</Link>
          </div>
          <div className="hero-stats" aria-label="EliteVeda highlights">
            <div className="stat"><h3>15+</h3><p>Career courses</p></div>
            <div className="stat"><h3>1000+</h3><p>Active learners</p></div>
            <div className="stat"><h3>60+</h3><p>Hiring networks</p></div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="mentor-card">
            <span className="status-dot"></span>
            <div>
              <p className="mentor-label">Next live session</p>
              <h3>AI Projects Lab</h3>
            </div>
            <strong>7:00 PM</strong>
          </div>
          <div className="progress-card">
            <div>
              <p>Portfolio readiness</p>
              <strong>82%</strong>
            </div>
            <span><i></i></span>
          </div>
          <div className="mini-grid">
            <span>Mentors</span>
            <span>Projects</span>
            <span>Certificates</span>
            <span>Placement</span>
          </div>
        </div>
      </section>

      <section className="courses" id="courses">
        <div className="section-heading">
          <p className="eyebrow">Popular programs</p>
          <h2>Explore career tracks built for momentum.</h2>
          <p className="section-subtitle">Focused 3-month programs with mentor support, practical projects, and portfolio outcomes.</p>
        </div>
        <div className="course-controls" aria-label="Course carousel controls">
          <button type="button" onClick={() => scrollCarousel(coursesCarouselRef, -1)} aria-label="Previous courses">‹</button>
          <button type="button" onClick={() => scrollCarousel(coursesCarouselRef, 1)} aria-label="Next courses">›</button>
        </div>
        <div className="courses-carousel" ref={coursesCarouselRef} aria-label="Popular courses carousel">
          <div className="courses-track">
            {coursesData.map((course) => (
              <article className="course-card" key={course.slug}>
                <div
                  className="course-image"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${course.image})` }}
                >
                  <span className="course-badge">{course.level}</span>
                  <span className="course-accent">{course.accent}</span>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <div className="course-meta">
                    <span>{course.duration}</span>
                    <span>{course.modules} modules</span>
                  </div>
                  <Link to={`/course/${course.slug}`} className="course-link">Learn more</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Student outcomes</p>
          <h2>Learners who moved with confidence.</h2>
          <p className="section-subtitle">Stories from students who used mentorship, projects, and consistency to level up.</p>
        </div>
        <div className="testimonial-row">
          <button
            type="button"
            className="testimonial-row-button"
            onClick={() => scrollCarousel(testimonialsCarouselRef, -1, 430)}
            aria-label="Previous testimonials"
          >
            &lsaquo;
          </button>
          <div className="testimonials-carousel" ref={testimonialsCarouselRef} aria-label="Student testimonials carousel">
            <div className="testimonials-track">
              {testimonialsData.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <span className="quote-mark">"</span>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    {testimonial.image ? (
                      <img src={`${process.env.PUBLIC_URL}${testimonial.image}`} alt={testimonial.name} />
                    ) : (
                      <span className="testimonial-avatar" aria-hidden="true">{testimonial.initials}</span>
                    )}
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                      <span className="stars" aria-label="5 star rating">★★★★★</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="testimonial-row-button"
            onClick={() => scrollCarousel(testimonialsCarouselRef, 1, 430)}
            aria-label="Next testimonials"
          >
            &rsaquo;
          </button>
        </div>
      </section>

      <section className="alumni-section">
        <div className="section-heading">
          <p className="eyebrow">Alumni network</p>
          <h2>Our learners are building careers at leading companies.</h2>
          <p className="alumni-subtitle">Students have turned practical training into opportunities across technology, consulting, and product teams.</p>
        </div>

        <div className="alumni-stats" aria-label="Alumni highlights">
          <div><strong>60+</strong><span>Hiring networks</span></div>
          <div><strong>1000+</strong><span>Learners trained</span></div>
          <div><strong>15+</strong><span>Career tracks</span></div>
        </div>

        <div className="logo-wall">
          <div className="logo-slider" aria-label="Companies where alumni work">
            <div className="logo-track logo-track-left">
              {[...companies, ...companies].map((company, index) => (
                <span className="company-logo" key={`${company}-${index}`}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/companies/${company}.png`}
                    alt={company}
                  />
                </span>
              ))}
            </div>
          </div>

          <div className="logo-slider" aria-hidden="true">
            <div className="logo-track logo-track-right">
              {[...companies].reverse().concat([...companies].reverse()).map((company, index) => (
                <span className="company-logo" key={`${company}-reverse-${index}`}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/companies/${company}.png`}
                    alt=""
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>EliteVeda</h3>
            <p>Modern learning programs for students preparing for real-world careers.</p>
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
        <p className="footer-bottom">Copyright 2025 EliteVeda Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
