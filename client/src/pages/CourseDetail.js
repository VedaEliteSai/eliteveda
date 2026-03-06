import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
  const { courseSlug } = useParams();
  const [openWeeks, setOpenWeeks] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const toggleWeek = (weekIndex) => {
    setOpenWeeks(prev => ({
      ...prev,
      [weekIndex]: !prev[weekIndex]
    }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage({ type: '', text: '' });

  try {
    const response = await fetch(`${API_URL}/api/enrollment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        course: course.title
      })
    });

    const data = await response.json();

    if (data.success) {
      setSubmitMessage({ 
        type: 'success', 
        text: data.message 
      });
      setFormData({ name: '', email: '', mobile: '' });
    } else {
      setSubmitMessage({ 
        type: 'error', 
        text: data.message 
      });
    }
  } catch (error) {
    setSubmitMessage({ 
      type: 'error', 
      text: 'Network error. Please try again.' 
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const scrollToEnrollment = () => {
    const enrollmentForm = document.querySelector('.enrollment-form');
    if (enrollmentForm) {
      enrollmentForm.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      enrollmentForm.style.animation = 'pulse 0.5s ease-out';
      setTimeout(() => {
        enrollmentForm.style.animation = '';
      }, 500);
    }
  };

  // All course data with EXACT content from EliteVeda.in
  const courseData = {
    'artificial-intelligence': {
      title: 'Artificial Intelligence',
      icon: '🤖',
      description: 'Dive into the world of AI with our expert-led online program. Unleash your creativity and transform the future of technology.',
      duration: '2-3 Months',
      enrolled: '1K',
      rating: '4.9/5',
      projects: 2,
      partners: '4-6',
      assignments: '100+',
      image: 'ai.jpg',
      curriculum: [
        {
          week: 'Week 1',
          title: 'Python for Data Science & AI',
          topics: [
            { 
              heading: 'Python Fundamentals', 
              items: ['Python Basics: Variables, Data Types, I/O', 'Conditional Statements', 'Loops (for, while)'] 
            },
            { 
              heading: 'Data Structures in Python', 
              items: ['Lists, Tuples, Sets, Dictionaries', 'Use cases and differences', 'Basic operations and comprehension'] 
            },
            { 
              heading: 'Libraries for AI', 
              items: ['Introduction to NumPy: Arrays and Operations', 'Pandas: DataFrames, Data Cleaning, Filtering'] 
            }
          ]
        },
        {
          week: 'Week 2',
          title: 'Data Visualization & ML Basics',
          topics: [
            { 
              heading: 'Visualization with Python', 
              items: ['Matplotlib: Plotting Line, Bar, Histogram', 'Seaborn: Distribution, Heatmaps, Pairplot'] 
            },
            { 
              heading: 'Introduction to Machine Learning', 
              items: ['Supervised Learning: Regression Concepts', 'Classification Introduction'] 
            }
          ]
        },
        {
          week: 'Week 3',
          title: 'Advanced Machine Learning',
          topics: [
            { 
              heading: 'Classification Models', 
              items: ['Decision Trees', 'Random Forest', 'Naive Bayes Classifier', 'K-Nearest Neighbors (KNN)'] 
            },
            { 
              heading: 'Clustering & Deep Learning Theory', 
              items: ['Unsupervised Learning: K-Means Clustering', 'Introduction to Deep Learning'] 
            }
          ]
        },
        {
          week: 'Week 4',
          title: 'Practical AI Applications',
          topics: [
            { 
              heading: 'Image Processing with OpenCV', 
              items: ['Basics of OpenCV', 'Image transformations', 'Filters, Blurring, Edge Detection'] 
            },
            { 
              heading: 'Natural Language Processing & Statistics', 
              items: ['NLP Basics: Tokenization, Stop Words', 'Basic Text Classification', 'Statistics for Data Science: Mean, Median, Mode, Variance, Probability'] 
            }
          ]
        }
      ],
      pricing: [
        {
          plan: 'Self Paced',
          subtitle: 'Learn at your own pace',
          price: '₹5,999',
          features: [
            { name: 'Recorded Sessions', included: true },
            { name: 'Hands-on Projects', included: true },
            { name: 'Certifications', included: true },
            { name: 'Doubt Clear Sessions', included: true },
            { name: 'Live Sessions', included: false },
            { name: 'Mentor Guidance', included: false },
            { name: 'Placement Support', included: false },
            { name: '1:1 Mentoring', included: false }
          ]
        },
        {
          plan: 'Mentor Led',
          subtitle: 'Guided learning with mentor support',
          price: '₹8,999',
          popular: true,
          features: [
            { name: 'Recorded Sessions', included: true },
            { name: 'Hands-on Projects', included: true },
            { name: 'Certifications', included: true },
            { name: 'Doubt Clear Sessions', included: true },
            { name: 'Live Sessions', included: true },
            { name: 'Mentor Guidance', included: true },
            { name: 'Placement Support', included: false },
            { name: '1:1 Mentoring', included: false }
          ]
        },
        {
          plan: 'Professional',
          subtitle: 'Be placement ready',
          price: '₹13,999',
          features: [
            { name: 'Recorded Sessions', included: true },
            { name: 'Hands-on Projects', included: true },
            { name: 'Certifications', included: true },
            { name: 'Doubt Clear Sessions', included: true },
            { name: 'Live Sessions', included: true },
            { name: 'Mentor Guidance', included: true },
            { name: 'Placement Support', included: true },
            { name: '1:1 Mentoring', included: true }
          ]
        }
      ]
    },
    
    'web-development': {
      title: 'Web Development',
      icon: '💻',
      description: 'Turn your passion for web development into expertise and build stunning, interactive websites with our program.',
      duration: '2-3 Months',
      enrolled: '1K',
      rating: '4.9/5',
      projects: 2,
      partners: '4-6',
      assignments: '100+',
      image: 'web-dev.jpg',
      curriculum: [
        {
          week: 'Week 1',
          title: 'Introduction to Web Development & HTML Fundamentals',
          topics: [
            { 
              heading: 'Getting Started with Web Development', 
              items: ['What is Web Development?', 'Frontend vs Backend Overview', 'How the Web Works'] 
            },
            { 
              heading: 'HTML – Structuring the Web', 
              items: ['Introduction to HTML & Basic Tags', 'Lists and Hyperlinks', 'Inserting Images, Audio, and Video', 'Tables: rows, columns, headers', 'Creating Forms: input, textarea, checkbox, radio, submit', 'Semantic Elements', 'Structuring a Web Page Layout with HTML'] 
            }
          ]
        },
        {
          week: 'Week 2',
          title: 'Styling with CSS',
          topics: [
            { 
              heading: 'Introduction to CSS', 
              items: ['What is CSS & How it Works with HTML', 'Inline, Internal, and External CSS'] 
            },
            { 
              heading: 'Styling Fundamentals', 
              items: ['CSS Selectors', 'Colors, Backgrounds & Gradients', 'Text Properties', 'Box Model: Margin, Border, Padding'] 
            },
            { 
              heading: 'Page Layout and Responsiveness', 
              items: ['Display Types', 'Layout with Flexbox', 'Styling Lists, Tables, and Forms', 'Media Queries for Responsive Design'] 
            }
          ]
        },
        {
          week: 'Week 3',
          title: 'JavaScript Basics & DOM Interaction',
          topics: [
            { 
              heading: 'Introduction to JavaScript', 
              items: ['Why JavaScript? Role in Frontend Development', 'How to Include JS in HTML'] 
            },
            { 
              heading: 'JavaScript Fundamentals', 
              items: ['Syntax & Variables', 'Control Structures', 'Functions and Scope', 'Arrays & Objects'] 
            },
            { 
              heading: 'Working with the DOM', 
              items: ['DOM Selection', 'Manipulating Elements', 'Event Handling'] 
            }
          ]
        },
        {
          week: 'Week 4',
          title: 'Intro to Backend Development with Node.js',
          topics: [
            { 
              heading: 'Backend for Web Development', 
              items: ['Introduction to Node.js & Express', 'Setting up a simple server', 'Routing with Express'] 
            },
            { 
              heading: 'Templates & Databases', 
              items: ['Introduction to EJS Templating', 'MongoDB & Mongoose', 'Performing basic CRUD operations'] 
            }
          ]
        }
      ],
      pricing: [
        { plan: 'Self Paced', subtitle: 'Learn at your own pace', price: '₹5,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: false }, { name: 'Mentor Guidance', included: false }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Mentor Led', subtitle: 'Guided learning with mentor support', price: '₹8,999', popular: true, features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Professional', subtitle: 'Be placement ready', price: '₹13,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: true }, { name: '1:1 Mentoring', included: true }] }
      ]
    },

    'data-science': {
      title: 'Data Science',
      icon: '📊',
      description: 'Unlock the power of data with our comprehensive data science program, empowering your website with cutting-edge analytics and insights.',
      duration: '2-3 Months',
      enrolled: '1K',
      rating: '4.9/5',
      projects: 2,
      partners: '4-6',
      assignments: '100+',
      image: 'data-science.jpg',
      curriculum: [
        {
          week: 'Week 1',
          title: 'Introduction to Data Science, Python Basics, and Libraries',
          topics: [
            { 
              heading: 'Introduction to Data Science', 
              items: ['What is Data Science?', 'Applications of Data Science', 'Data Science Workflow', 'Tools and Technologies in Data Science'] 
            },
            { 
              heading: 'Python Basics for Data Science', 
              items: ['Data Types (int, float, string, list, tuple, dictionary, set)', 'Variables and Operators', 'Conditional Statements (if, else, elif)', 'Loops (for, while)', 'Functions and Modules'] 
            },
            { 
              heading: 'Python Libraries for Data Science', 
              items: ['Introduction to Numpy: Creating Arrays, Array Manipulation, Array Operations', 'Introduction to Pandas: DataFrames, Series, Importing Data, Basic Data Operations'] 
            }
          ]
        },
        {
          week: 'Week 2',
          title: 'Data Visualization and Data Handling',
          topics: [
            { 
              heading: 'Data Visualization', 
              items: ['Introduction to Data Visualization', 'Using Matplotlib: Basic Plots (Line, Bar, Scatter, Histogram)', 'Customizing Plots (Titles, Labels, Legends, Colors)', 'Using Seaborn: Advanced Plots (Heatmap, Pairplot, Boxplot)', 'Styling and Customizing Seaborn Plots'] 
            },
            { 
              heading: 'Data Importing and Cleaning', 
              items: ['Importing Datasets (CSV, Excel, JSON, SQL)', 'Handling Missing Values', 'Data Cleaning Techniques', 'Data Manipulation with Pandas (Sorting, Filtering, Aggregation)'] 
            },
            { 
              heading: 'Exploratory Data Analysis (EDA)', 
              items: ['Understanding Data Distribution', 'Descriptive Statistics (Mean, Median, Mode, Standard Deviation)', 'Detecting Outliers', 'Correlation and Covariance'] 
            }
          ]
        },
        {
          week: 'Week 3',
          title: 'Probability and Hypothesis Testing',
          topics: [
            { 
              heading: 'Introduction to Probability', 
              items: ['Basic Probability Concepts', 'Mutually Exclusive and Independent Events', 'Conditional Probability', 'Bayes\' Theorem with Real-World Examples'] 
            },
            { 
              heading: 'Probability Distributions', 
              items: ['Discrete Probability Distributions: Binomial Distribution, Poisson Distribution', 'Continuous Probability Distributions: Normal Distribution (Bell Curve)'] 
            },
            { 
              heading: 'Hypothesis Testing and Estimation', 
              items: ['Null and Alternative Hypotheses', 'Type I and Type II Errors', 'Significance Level (Alpha)', 'P-Value Interpretation', 'Estimation Methods (Point and Interval Estimation)'] 
            }
          ]
        },
        {
          week: 'Week 4',
          title: 'Machine Learning Basics',
          topics: [
            { 
              heading: 'Introduction to Machine Learning', 
              items: ['What is Machine Learning?', 'Types of Machine Learning (Supervised, Unsupervised, Reinforcement)', 'ML Workflow: Data Collection, Preparation, Modeling, Evaluation'] 
            },
            { 
              heading: 'Linear Regression', 
              items: ['Understanding Linear Regression', 'Simple Linear Regression: Equation and Interpretation', 'Multiple Linear Regression', 'Model Evaluation Metrics (R-Squared, RMSE)'] 
            },
            { 
              heading: 'Logistic Regression', 
              items: ['Difference between Linear and Logistic Regression', 'Sigmoid Function and Logistic Regression Equation', 'Model Evaluation Metrics (Accuracy, Precision, Recall, F1-Score)'] 
            },
            { 
              heading: 'K-Nearest Neighbors (KNN) and Naive Bayes', 
              items: ['K-Nearest Neighbors: Distance Calculation, Choosing Optimal K Value', 'Naive Bayes Algorithm: Concept and Working Principle, Types (Gaussian, Multinomial, Bernoulli)'] 
            }
          ]
        }
      ],
      pricing: [
        { plan: 'Self Paced', subtitle: 'Learn at your own pace', price: '₹5,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: false }, { name: 'Mentor Guidance', included: false }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Mentor Led', subtitle: 'Guided learning with mentor support', price: '₹8,999', popular: true, features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Professional', subtitle: 'Be placement ready', price: '₹13,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: true }, { name: '1:1 Mentoring', included: true }] }
      ]
    },

    'machine-learning': {
      title: 'Machine Learning',
      icon: '🧠',
      description: 'Unlock the power of Machine Learning to drive innovation and efficiency with our comprehensive ML program.',
      duration: '2-3 Months',
      enrolled: '1K',
      rating: '4.9/5',
      projects: 2,
      partners: '4-6',
      assignments: '100+',
      image: 'machine-learning.jpg',
      curriculum: [
        {
          week: 'Week 1',
          title: 'Introduction to ML & Python Programming Basics',
          topics: [
            { 
              heading: 'Introduction to Machine Learning', 
              items: ['What is Machine Learning?', 'Difference between Machine Learning and Artificial Intelligence', 'Machine Learning workflow', 'Overview of tools'] 
            },
            { 
              heading: 'Getting Started with Python for Machine Learning', 
              items: ['Python Installation & Setup', 'Variables, Data Types, and Operators', 'Control Flow', 'Data Structures: List, Tuple, Set, Dictionary'] 
            }
          ]
        },
        {
          week: 'Week 2',
          title: 'Python for Machine Learning & Data Preprocessing',
          topics: [
            { 
              heading: 'Building Logic with Python for Machine Learning', 
              items: ['Functions and Scope', 'String operations and formatting', 'Exception handling'] 
            },
            { 
              heading: 'Data Preprocessing in Machine Learning', 
              items: ['Handling missing values', 'Encoding categorical variables', 'Feature scaling', 'Splitting data: Train-test split'] 
            }
          ]
        },
        {
          week: 'Week 3',
          title: 'Supervised Learning Algorithms',
          topics: [
            { 
              heading: 'Supervised Learning Concepts', 
              items: ['What is Supervised Learning?', 'Types: Classification vs Regression'] 
            },
            { 
              heading: 'Classification Algorithms', 
              items: ['K-Nearest Neighbors (KNN)', 'Logistic Regression / Decision Tree'] 
            },
            { 
              heading: 'Regression Algorithms', 
              items: ['Simple Linear Regression', 'Multiple Linear Regression', 'Performance metrics: Accuracy, Precision, MAE, RMSE'] 
            }
          ]
        },
        {
          week: 'Week 4',
          title: 'Unsupervised Learning & Final Practice',
          topics: [
            { 
              heading: 'Unsupervised Learning Concepts', 
              items: ['What is Unsupervised Learning?', 'Difference from Supervised Learning', 'Use cases'] 
            },
            { 
              heading: 'Clustering Algorithms', 
              items: ['K-Means Clustering', 'Visualizing clusters', 'Hierarchical clustering'] 
            }
          ]
        }
      ],
      pricing: [
        { plan: 'Self Paced', subtitle: 'Learn at your own pace', price: '₹5,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: false }, { name: 'Mentor Guidance', included: false }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Mentor Led', subtitle: 'Guided learning with mentor support', price: '₹8,999', popular: true, features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Professional', subtitle: 'Be placement ready', price: '₹13,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: true }, { name: '1:1 Mentoring', included: true }] }
      ]
    },

    'digital-marketing': {
      title: 'Digital Marketing',
      icon: '📱',
      description: 'Delve into the realm of digital marketing through our program, where you\'ll acquire skills, certifications, and hands-on experience for success.',
      duration: '2-3 Months',
      enrolled: '1K',
      rating: '4.9/5',
      projects: 2,
      partners: '4-6',
      assignments: '100+',
      image: 'digital-marketing.jpg',
      curriculum: [
        {
          week: 'Week 1',
          title: 'Introduction to Digital Marketing',
          topics: [
            { 
              heading: 'Digital Marketing Overview', 
              items: ['What is Digital Marketing?', 'Importance and Benefits of Digital Marketing', 'Types of Digital Marketing: SEO, SEM, SMM, Content Marketing, Email Marketing'] 
            },
            { 
              heading: 'Online Marketing Channels', 
              items: ['Understanding Online Marketing', 'Email Marketing Basics', 'Social Media Marketing', 'Web-Based Advertising', 'Introduction to Marketing Channels'] 
            }
          ]
        },
        {
          week: 'Week 2',
          title: 'Website Management with WordPress',
          topics: [
            { 
              heading: 'Introduction to WordPress', 
              items: ['What is WordPress?', 'Understanding Content Management System (CMS)', 'Plugin Architecture Explained', 'Customizing Websites Using WordPress'] 
            },
            { 
              heading: 'WordPress Development', 
              items: ['Setting Up WordPress: Installation and Configuration', 'Plugin Setup and Theme Customization', 'Domain Extensions and Exact Match Domains (EMD)', 'Managing Content: Pages, Posts, and Media', 'Website and Blog Marketing Strategies'] 
            }
          ]
        },
        {
          week: 'Week 3',
          title: 'Email Marketing and Reputation Management',
          topics: [
            { 
              heading: 'Email Marketing Essentials', 
              items: ['Understanding Effective Email Marketing Strategy', 'Fundamentals of Email Marketing', 'Types of Email Campaigns (Newsletters, Promotional, Transactional)', 'Launching and Managing Email Campaigns', 'Tools for Email Marketing (Mailchimp, Sendinblue)'] 
            },
            { 
              heading: 'Online Reputation Management (ORM)', 
              items: ['What is ORM?', 'Why Does It Matter?', 'Managing Organizational Online Reputation', 'Reputation Management Principles', 'Building a Strong Participatory Culture'] 
            }
          ]
        },
        {
          week: 'Week 4',
          title: 'Paid Advertising and Google Ads',
          topics: [
            { 
              heading: 'Google Ads and PPC Fundamentals', 
              items: ['Introduction to Google Ads and PPC (Pay-Per-Click)', 'Understanding PPC Terms (CPC, CPM, CPA)', 'SEM (Search Engine Marketing) – How It Works', 'Creating and Managing Google Ad Campaigns'] 
            },
            { 
              heading: 'Advanced PPC Strategies', 
              items: ['Psychology in SEM Strategy', 'Reverse Engineering Competitors\' PPC Strategies', 'Measuring and Optimizing PPC Campaigns', 'Conversion Tracking and Analytics'] 
            }
          ]
        }
      ],
      pricing: [
        { plan: 'Self Paced', subtitle: 'Learn at your own pace', price: '₹5,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: false }, { name: 'Mentor Guidance', included: false }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Mentor Led', subtitle: 'Guided learning with mentor support', price: '₹8,999', popular: true, features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Professional', subtitle: 'Be placement ready', price: '₹13,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: true }, { name: '1:1 Mentoring', included: true }] }
      ]
    },

    'cyber-security': {
      title: 'Cyber Security',
      icon: '🔐',
      description: 'Explore the dynamic world of cybersecurity with our program, gaining essential skills, certifications, and experience for a rewarding career.',
      duration: '2-3 Months',
      enrolled: '1K',
      rating: '4.9/5',
      projects: 2,
      partners: '4-6',
      assignments: '100+',
      image: 'cyber-security.jpg',
      curriculum: [
        {
          week: 'Week 1',
          title: 'Introduction to Cybersecurity & Operating Systems Security',
          topics: [
            { 
              heading: 'Introduction to Cybersecurity', 
              items: ['Definition, Importance, and Scope of Cybersecurity', 'Types of Cyber Threats (Malware, Phishing, DDoS, Ransomware, Insider Threats)', 'CIA Triad (Confidentiality, Integrity, Availability)', 'Cybersecurity Ethics, Principles, and Best Practices'] 
            },
            { 
              heading: 'Introduction to Linux', 
              items: ['Basic Linux Commands', 'Networking Commands (ping, netstat, ifconfig, traceroute)', 'Service and Log Management', 'System Administration Commands', 'Linux File System and Directories'] 
            },
            { 
              heading: 'Introduction to Windows', 
              items: ['Access Control Types, Permissions, and User Account Control (UAC)', 'Windows Firewall & Windows Defender', 'Windows Remote Management (RDP)', 'Basic CMD Commands and Batch Scripting', 'Introduction to PowerShell', 'Using CMD & PowerShell for System Administration and Security Tasks'] 
            }
          ]
        },
        {
          week: 'Week 2',
          title: 'Networking & Ethical Hacking Fundamentals',
          topics: [
            { 
              heading: 'Introduction to Networking', 
              items: ['Types of Networks (LAN, WAN, VPN, etc.)', 'Network Topologies', 'Network Protocols & Ports (TCP/IP, HTTP, HTTPS, DNS)', 'IP Addressing & Subnetting Basics', 'Firewalls and Basic Configuration'] 
            },
            { 
              heading: 'Ethical Hacking Essentials', 
              items: ['Footprinting, Reconnaissance, and Enumeration', 'Vulnerability Assessment & Reporting', 'System Hacking: Windows and Linux', 'Password Cracking & Hashing', 'Wireshark and Network Testing', 'Wireless Network Hacking', 'Digital Forensics Basics', 'Cloud Security Overview (AWS / Azure)', 'TOR, Anonymity & Proxy Services'] 
            }
          ]
        },
        {
          week: 'Week 3',
          title: 'Web Application Security & Penetration Testing',
          topics: [
            { 
              heading: 'Web Application Security Fundamentals', 
              items: ['Introduction to Web Hacking', 'Understanding HTTP/S and Web Requests', 'Introduction to Burp Suite', 'Fuzzing and Directory Enumeration', 'Subdomain Enumeration', 'Authentication Bypass Technique'] 
            },
            { 
              heading: 'Exploitation & OWASP Top 10', 
              items: ['File Inclusion Vulnerabilities (LFI/RFI)', 'File Upload Vulnerabilities', 'Cross-Site Scripting (XSS)', 'Command Injection', 'SQL Injection', 'Overview of OWASP Top 10 and Mitigation'] 
            }
          ]
        },
        {
          week: 'Week 4',
          title: 'SOC, SIEM, and Red/Blue Team Operations',
          topics: [
            { 
              heading: 'SOC and SIEM Fundamentals', 
              items: ['Introduction to Security Operations Center (SOC)', 'Understanding SIEM (Security Information and Event Management)', 'Tools Overview: Splunk, ELK Stack, Wazuh', 'IDS, Firewalls, and Honeypot Configuration', 'Monitoring and Alert Management', 'Documenting & Reporting Security Incidents'] 
            },
            { 
              heading: 'Red/Blue/Purple Team Exercises & Offensive Penetration Testing', 
              items: ['Red Team (Offensive Testing)', 'Blue Team (Defensive Response & Monitoring)', 'Purple Team (Collaboration & Continuous Improvement)', 'Offensive Penetration Testing', 'Attacking Real-World Vulnerable Services', 'Web Application Vulnerability Testing', 'Anonymity, Dark Web, and Secure Communication', 'Security Checklists for Auditing & Testing'] 
            }
          ]
        }
      ],
      pricing: [
        { plan: 'Self Paced', subtitle: 'Learn at your own pace', price: '₹5,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: false }, { name: 'Mentor Guidance', included: false }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Mentor Led', subtitle: 'Guided learning with mentor support', price: '₹8,999', popular: true, features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Professional', subtitle: 'Be placement ready', price: '₹13,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: true }, { name: '1:1 Mentoring', included: true }] }
      ]
    },

    'psychology': {
      title: 'Psychology',
      icon: '🧠',
      description: 'Turn your curiosity about the mind into expertise and confidently understand human behavior with our Psychology program.',
      duration: '2-3 Months',
      enrolled: '1K',
      rating: '4.9/5',
      projects: 2,
      partners: '4-6',
      assignments: '100+',
      image: 'psychology.jpg',
      curriculum: [
        {
          week: 'Week 1',
          title: 'Foundations of Psychology & Social Behavior',
          topics: [
            { 
              heading: 'Introduction to Psychology', 
              items: ['Definition, goals, and evolution of psychology', 'Major schools of thought: Structuralism, Functionalism, Behaviorism, Humanism', 'Relevance in daily life and careers'] 
            },
            { 
              heading: 'Social Psychology Basics', 
              items: ['Social perception, attribution theory', 'Conformity, obedience (Asch & Milgram experiments)', 'Group behavior and real-life examples'] 
            },
            { 
              heading: 'Interpersonal Awareness and Emotional Intelligence', 
              items: ['Self-awareness, empathy, and active listening', 'Tools like Johari Window, basic personality insights'] 
            }
          ]
        },
        {
          week: 'Week 2',
          title: 'Stress, Consumer Psychology & Organizational Behavior',
          topics: [
            { 
              heading: 'Stress and Its Management', 
              items: ['Types of stress and their impact (acute, chronic)', 'Cognitive-behavioral strategies for managing stress', 'Relaxation techniques: mindfulness, journaling, breathing'] 
            },
            { 
              heading: 'Basics of Consumer Psychology', 
              items: ['What drives buying behavior?', 'Influence of perception, memory, and emotion in choices', 'Brand loyalty and advertising psychology'] 
            },
            { 
              heading: 'Organizational Behavior Essentials', 
              items: ['Work motivation and leadership styles', 'Team dynamics, workplace stress', 'Communication and conflict resolution'] 
            }
          ]
        },
        {
          week: 'Week 3',
          title: 'Introduction to Therapy and Mental Health Disorders',
          topics: [
            { 
              heading: 'Introduction to Psychotherapy', 
              items: ['Overview: CBT, Humanistic, Psychodynamic, and Gestalt therapy', 'When and how therapy is used', 'Common myths about therapy'] 
            },
            { 
              heading: 'Common Mental Health Disorders', 
              items: ['Anxiety, Depression, and Stress-related disorders', 'Schizophrenia and Dissociative Identity Disorder', 'Brief look into neurodevelopmental disorders: Autism, ADHD'] 
            },
            { 
              heading: 'Therapeutic Approaches in Practice', 
              items: ['Role-playing a basic CBT interaction', 'Using active listening in peer support'] 
            }
          ]
        },
        {
          week: 'Week 4',
          title: 'Healing Through Art & Applied Psychology',
          topics: [
            { 
              heading: 'Understanding the Self', 
              items: ['Self-concept, self-esteem, and self-regulation', 'Reflection on personal growth and values'] 
            },
            { 
              heading: 'Art-Based Therapy and Self-Expression', 
              items: ['What is art therapy? (drawing, journaling, music)', 'Healing trauma and managing emotion through creativity', 'Guided expressive activity: "Visualize Your Inner World"'] 
            },
            { 
              heading: 'Basics of Research in Psychology', 
              items: ['How psychology studies behavior', 'Quantitative vs qualitative research', 'Ethics in psychological research'] 
            }
          ]
        }
      ],
      pricing: [
        { plan: 'Self Paced', subtitle: 'Learn at your own pace', price: '₹5,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: false }, { name: 'Mentor Guidance', included: false }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Mentor Led', subtitle: 'Guided learning with mentor support', price: '₹8,999', popular: true, features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: false }, { name: '1:1 Mentoring', included: false }] },
        { plan: 'Professional', subtitle: 'Be placement ready', price: '₹13,999', features: [{ name: 'Recorded Sessions', included: true }, { name: 'Hands-on Projects', included: true }, { name: 'Certifications', included: true }, { name: 'Doubt Clear Sessions', included: true }, { name: 'Live Sessions', included: true }, { name: 'Mentor Guidance', included: true }, { name: 'Placement Support', included: true }, { name: '1:1 Mentoring', included: true }] }
      ]
    },
    'SAP': {
  title: 'SAP (Systems, Applications & Products)',
  icon: '💼',
  description: 'Master enterprise resource planning and become job-ready with hands-on SAP training designed for real-world business environments.',
  duration: '4 Weeks',
  enrolled: '1.5K',
  rating: '4.8/5',
  projects: 3,
  partners: '4-6',
  assignments: '80+',
  image: 'sap.jpg',
  curriculum: [
    {
      week: 'Week 1',
      title: 'Introduction to ERP & SAP Navigation',
      topics: [
        { 
          heading: 'ERP Fundamentals', 
          items: [
            'What is ERP? Why businesses use ERP systems',
            'Overview of SAP and its role in enterprises',
            'Understanding business processes (Procure-to-Pay, Order-to-Cash)'
          ] 
        },
        { 
          heading: 'SAP System Navigation', 
          items: [
            'SAP GUI overview and navigation',
            'Understanding SAP modules (FICO, MM, SD, HCM)',
            'Basic transactions and menu paths'
          ] 
        },
        { 
          heading: 'Organizational Structure in SAP', 
          items: [
            'Company code, plant, storage location',
            'Sales organization and purchasing organization',
            'How enterprise structure is defined in SAP'
          ] 
        }
      ]
    },
    {
      week: 'Week 2',
      title: 'SAP MM (Materials Management) – Procurement Cycle',
      topics: [
        { 
          heading: 'Procurement Process in SAP', 
          items: [
            'Purchase requisition creation',
            'Request for quotation (RFQ)',
            'Creating and managing purchase orders'
          ] 
        },
        { 
          heading: 'Inventory Management', 
          items: [
            'Goods receipt and goods issue',
            'Stock transfer and stock overview',
            'Movement types and material documents'
          ] 
        },
        { 
          heading: 'Invoice Verification', 
          items: [
            'Three-way matching (PO, GR, Invoice)',
            'Logistics invoice verification process',
            'Handling blocked invoices'
          ] 
        }
      ]
    },
    {
      week: 'Week 3',
      title: 'SAP SD (Sales & Distribution) – Sales Cycle',
      topics: [
        { 
          heading: 'Sales Process Overview', 
          items: [
            'Inquiry and quotation process',
            'Sales order creation and processing',
            'Understanding pricing procedures'
          ] 
        },
        { 
          heading: 'Delivery & Billing', 
          items: [
            'Outbound delivery creation',
            'Picking, packing, and post goods issue',
            'Billing document creation'
          ] 
        },
        { 
          heading: 'Customer & Master Data', 
          items: [
            'Customer master data setup',
            'Material master overview',
            'Partner functions and account groups'
          ] 
        }
      ]
    },
    {
      week: 'Week 4',
      title: 'SAP FICO Basics & Capstone Project',
      topics: [
        { 
          heading: 'Introduction to SAP FICO', 
          items: [
            'Overview of Financial Accounting (FI)',
            'General ledger, accounts payable & receivable',
            'Cost center accounting basics (CO)'
          ] 
        },
        { 
          heading: 'End-to-End Business Process Integration', 
          items: [
            'Integration of MM, SD, and FICO',
            'Complete Procure-to-Pay cycle simulation',
            'Complete Order-to-Cash cycle simulation'
          ] 
        },
        { 
          heading: 'Capstone Project & Career Preparation', 
          items: [
            'Real-time business case implementation',
            'Resume building for SAP roles',
            'Interview preparation and certification guidance'
          ] 
        }
      ]
    }
  ],
  pricing: [
    { 
      plan: 'Self Paced', 
      subtitle: 'Learn at your own pace', 
      price: '₹6,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: false },
        { name: 'Mentor Guidance', included: false },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Mentor Led', 
      subtitle: 'Guided learning with mentor support', 
      price: '₹9,999', 
      popular: true,
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Professional', 
      subtitle: 'Be placement ready', 
      price: '₹14,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: true },
        { name: '1:1 Mentoring', included: true }
      ] 
    }
  ]
},
'cloud-computing': {
  title: 'Cloud Computing',
  icon: '☁️',
  description: 'Learn the fundamentals of cloud computing and gain hands-on experience with modern cloud platforms, deployment models, and real-world infrastructure management.',
  duration: '4 Weeks',
  enrolled: '1.5K',
  rating: '4.8/5',
  projects: 3,
  partners: '4-6',
  assignments: '80+',
  image: 'cloud-computing.jpg',
  curriculum: [
    {
      week: 'Week 1',
      title: 'Introduction to Cloud Computing & Fundamentals',
      topics: [
        {
          heading: 'Cloud Computing Basics',
          items: [
            'What is cloud computing and why organizations use it',
            'Traditional IT vs Cloud infrastructure',
            'Key benefits: scalability, flexibility, cost efficiency'
          ]
        },
        {
          heading: 'Cloud Service Models',
          items: [
            'Infrastructure as a Service (IaaS)',
            'Platform as a Service (PaaS)',
            'Software as a Service (SaaS)'
          ]
        },
        {
          heading: 'Cloud Deployment Models',
          items: [
            'Public cloud, private cloud, and hybrid cloud',
            'Community cloud overview',
            'Understanding real-world cloud use cases'
          ]
        }
      ]
    },
    {
      week: 'Week 2',
      title: 'Cloud Platforms & Core Services',
      topics: [
        {
          heading: 'Major Cloud Providers Overview',
          items: [
            'Introduction to AWS, Microsoft Azure, and Google Cloud',
            'Understanding global cloud infrastructure',
            'Regions, availability zones, and edge locations'
          ]
        },
        {
          heading: 'Compute & Storage Services',
          items: [
            'Virtual machines and cloud instances',
            'Object storage vs block storage',
            'Managing cloud storage services'
          ]
        },
        {
          heading: 'Networking in the Cloud',
          items: [
            'Virtual private cloud (VPC) basics',
            'Subnets, routing tables, and internet gateways',
            'Load balancers and DNS basics'
          ]
        }
      ]
    },
    {
      week: 'Week 3',
      title: 'Cloud Security & Deployment',
      topics: [
        {
          heading: 'Cloud Security Fundamentals',
          items: [
            'Shared responsibility model',
            'Identity and Access Management (IAM)',
            'Security groups and firewall basics'
          ]
        },
        {
          heading: 'Application Deployment',
          items: [
            'Deploying applications on cloud servers',
            'Using containers and Docker basics',
            'Introduction to serverless computing'
          ]
        },
        {
          heading: 'Monitoring & Management',
          items: [
            'Cloud monitoring tools',
            'Auto scaling and performance management',
            'Logging and alerts in cloud environments'
          ]
        }
      ]
    },
    {
      week: 'Week 4',
      title: 'DevOps Integration & Capstone Project',
      topics: [
        {
          heading: 'Cloud & DevOps Basics',
          items: [
            'Introduction to CI/CD pipelines',
            'Using Git for cloud deployments',
            'Automating deployments with cloud tools'
          ]
        },
        {
          heading: 'Cost Management & Optimization',
          items: [
            'Understanding cloud pricing models',
            'Cost monitoring and budgeting tools',
            'Best practices for cost optimization'
          ]
        },
        {
          heading: 'Capstone Project & Career Preparation',
          items: [
            'Deploy a full web application on the cloud',
            'Best practices for real-world cloud architecture',
            'Resume building and interview preparation for cloud roles'
          ]
        }
      ]
    }
  ],
  pricing: [
    { 
      plan: 'Self Paced', 
      subtitle: 'Learn at your own pace', 
      price: '₹6,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: false },
        { name: 'Mentor Guidance', included: false },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Mentor Led', 
      subtitle: 'Guided learning with mentor support', 
      price: '₹9,999', 
      popular: true,
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Professional', 
      subtitle: 'Be placement ready', 
      price: '₹14,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: true },
        { name: '1:1 Mentoring', included: true }
      ] 
    }
  ]
},
'android-development': {
  title: 'Android Development',
  icon: '📱',
  description: 'Learn how to build powerful Android applications from scratch using modern development tools, UI design principles, and real-world mobile app deployment practices.',
  duration: '4 Weeks',
  enrolled: '1.5K',
  rating: '4.8/5',
  projects: 3,
  partners: '4-6',
  assignments: '80+',
  image: 'android-development.jpg',
  curriculum: [
    {
      week: 'Week 1',
      title: 'Introduction to Android & Development Environment',
      topics: [
        {
          heading: 'Android Ecosystem Overview',
          items: [
            'Introduction to Android OS and mobile app development',
            'Understanding Android architecture',
            'Overview of Android development tools'
          ]
        },
        {
          heading: 'Setting Up the Development Environment',
          items: [
            'Installing Android Studio',
            'Understanding project structure',
            'Running your first Android application'
          ]
        },
        {
          heading: 'Basics of Kotlin/Java for Android',
          items: [
            'Introduction to Kotlin/Java syntax',
            'Variables, functions, and control structures',
            'Writing basic Android app logic'
          ]
        }
      ]
    },
    {
      week: 'Week 2',
      title: 'User Interface Design & App Components',
      topics: [
        {
          heading: 'Android UI Layouts',
          items: [
            'Understanding XML layouts',
            'Working with LinearLayout, ConstraintLayout, and RelativeLayout',
            'Designing responsive mobile interfaces'
          ]
        },
        {
          heading: 'Android UI Components',
          items: [
            'Buttons, TextViews, EditTexts, and ImageViews',
            'Handling user input and click events',
            'Using RecyclerView for lists'
          ]
        },
        {
          heading: 'Activity & Fragment Lifecycle',
          items: [
            'Understanding Android activity lifecycle',
            'Navigation between activities',
            'Introduction to fragments'
          ]
        }
      ]
    },
    {
      week: 'Week 3',
      title: 'Data Management & APIs',
      topics: [
        {
          heading: 'Local Data Storage',
          items: [
            'Using SharedPreferences',
            'Introduction to SQLite database',
            'Managing user data in apps'
          ]
        },
        {
          heading: 'Working with APIs',
          items: [
            'Understanding REST APIs',
            'Fetching data from web services',
            'Parsing JSON data in Android apps'
          ]
        },
        {
          heading: 'Permissions & Device Features',
          items: [
            'Handling Android permissions',
            'Using device features like camera and GPS',
            'Best practices for secure mobile apps'
          ]
        }
      ]
    },
    {
      week: 'Week 4',
      title: 'App Deployment & Capstone Project',
      topics: [
        {
          heading: 'Testing & Debugging',
          items: [
            'Using Android debugging tools',
            'Testing apps on emulators and real devices',
            'Improving app performance'
          ]
        },
        {
          heading: 'Publishing Android Apps',
          items: [
            'Preparing apps for release',
            'Generating signed APK / App Bundle',
            'Publishing apps on the Google Play Store'
          ]
        },
        {
          heading: 'Capstone Project & Career Preparation',
          items: [
            'Build a complete Android application',
            'Implement UI, APIs, and local data storage',
            'Resume building and interview preparation for Android developer roles'
          ]
        }
      ]
    }
  ],
  pricing: [
    { 
      plan: 'Self Paced', 
      subtitle: 'Learn at your own pace', 
      price: '₹6,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: false },
        { name: 'Mentor Guidance', included: false },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Mentor Led', 
      subtitle: 'Guided learning with mentor support', 
      price: '₹9,999', 
      popular: true,
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Professional', 
      subtitle: 'Be placement ready', 
      price: '₹14,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: true },
        { name: '1:1 Mentoring', included: true }
      ] 
    }
  ]
},
'ui-ux-design': {
  title: 'UI/UX Design',
  icon: '🎨',
  description: 'Learn how to design intuitive and visually appealing digital products by mastering user experience principles, interface design, and modern design tools used in the industry.',
  duration: '4 Weeks',
  enrolled: '1.5K',
  rating: '4.8/5',
  projects: 3,
  partners: '4-6',
  assignments: '80+',
  image: 'uiux-design.jpg',
  curriculum: [
    {
      week: 'Week 1',
      title: 'Introduction to UI/UX & Design Fundamentals',
      topics: [
        {
          heading: 'Understanding UI vs UX',
          items: [
            'Difference between User Interface (UI) and User Experience (UX)',
            'Role of a UI/UX designer in product development',
            'Overview of modern design processes'
          ]
        },
        {
          heading: 'Design Principles',
          items: [
            'Color theory and typography basics',
            'Layout design and visual hierarchy',
            'Consistency and usability principles'
          ]
        },
        {
          heading: 'User Research Basics',
          items: [
            'Understanding target users and personas',
            'User journey mapping',
            'Conducting basic user research and analysis'
          ]
        }
      ]
    },
    {
      week: 'Week 2',
      title: 'Wireframing & UX Design Process',
      topics: [
        {
          heading: 'Information Architecture',
          items: [
            'Structuring content for digital products',
            'Creating user flows',
            'Understanding navigation patterns'
          ]
        },
        {
          heading: 'Wireframing',
          items: [
            'Low-fidelity wireframes',
            'Designing layouts for web and mobile',
            'Using design tools for wireframing'
          ]
        },
        {
          heading: 'Prototyping Basics',
          items: [
            'Creating interactive prototypes',
            'Understanding usability testing',
            'Improving designs based on feedback'
          ]
        }
      ]
    },
    {
      week: 'Week 3',
      title: 'UI Design & Design Systems',
      topics: [
        {
          heading: 'High-Fidelity UI Design',
          items: [
            'Designing visually polished interfaces',
            'Creating responsive layouts',
            'Using grids and spacing systems'
          ]
        },
        {
          heading: 'Design Systems',
          items: [
            'Creating reusable components',
            'Buttons, icons, and UI elements',
            'Maintaining design consistency across products'
          ]
        },
        {
          heading: 'Design Tools & Collaboration',
          items: [
            'Using modern design tools like Figma',
            'Working with developers and product teams',
            'Design handoff and documentation'
          ]
        }
      ]
    },
    {
      week: 'Week 4',
      title: 'Portfolio Project & Career Preparation',
      topics: [
        {
          heading: 'UX Testing & Improvements',
          items: [
            'Conducting usability tests',
            'Analyzing user feedback',
            'Iterating designs for better user experience'
          ]
        },
        {
          heading: 'Product Design Case Study',
          items: [
            'Designing a complete app or website interface',
            'Applying UX research and UI principles',
            'Creating a professional design case study'
          ]
        },
        {
          heading: 'Capstone Project & Career Preparation',
          items: [
            'Building a UI/UX portfolio project',
            'Preparing design portfolios for job applications',
            'Interview preparation for UI/UX designer roles'
          ]
        }
      ]
    }
  ],
  pricing: [
    { 
      plan: 'Self Paced', 
      subtitle: 'Learn at your own pace', 
      price: '₹6,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: false },
        { name: 'Mentor Guidance', included: false },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Mentor Led', 
      subtitle: 'Guided learning with mentor support', 
      price: '₹9,999', 
      popular: true,
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Professional', 
      subtitle: 'Be placement ready', 
      price: '₹14,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: true },
        { name: '1:1 Mentoring', included: true }
      ] 
    }
  ]
},'iot-robotics': {
  title: 'IoT & Robotics',
  icon: '🤖',
  description: 'Learn the fundamentals of Internet of Things (IoT) and robotics by building smart connected systems, working with sensors, and understanding how intelligent devices interact with the real world.',
  duration: '4 Weeks',
  enrolled: '1.5K',
  rating: '4.8/5',
  projects: 3,
  partners: '4-6',
  assignments: '80+',
  image: 'iot-robotics.jpg',
  curriculum: [
    {
      week: 'Week 1',
      title: 'Introduction to IoT & Robotics',
      topics: [
        {
          heading: 'IoT Fundamentals',
          items: [
            'What is Internet of Things (IoT)',
            'Real-world IoT applications in smart homes, healthcare, and industries',
            'Basic IoT architecture and components'
          ]
        },
        {
          heading: 'Introduction to Robotics',
          items: [
            'Understanding robotics and automation',
            'Types of robots and their applications',
            'Basic components of robotic systems'
          ]
        },
        {
          heading: 'Hardware Basics',
          items: [
            'Introduction to microcontrollers (Arduino basics)',
            'Understanding sensors and actuators',
            'Basic circuit design and breadboard usage'
          ]
        }
      ]
    },
    {
      week: 'Week 2',
      title: 'Sensors, Actuators & Embedded Programming',
      topics: [
        {
          heading: 'Working with Sensors',
          items: [
            'Temperature, motion, and distance sensors',
            'Reading sensor data using microcontrollers',
            'Interfacing sensors with Arduino'
          ]
        },
        {
          heading: 'Actuators and Control Systems',
          items: [
            'Motors, LEDs, and relays',
            'Controlling hardware using microcontrollers',
            'Building simple automated systems'
          ]
        },
        {
          heading: 'Embedded Programming Basics',
          items: [
            'Introduction to embedded C / Arduino programming',
            'Writing basic programs for hardware control',
            'Debugging embedded applications'
          ]
        }
      ]
    },
    {
      week: 'Week 3',
      title: 'IoT Connectivity & Smart Systems',
      topics: [
        {
          heading: 'IoT Communication Protocols',
          items: [
            'Wi-Fi, Bluetooth, and MQTT basics',
            'Connecting devices to the internet',
            'Understanding IoT data transmission'
          ]
        },
        {
          heading: 'Cloud & IoT Platforms',
          items: [
            'Introduction to IoT cloud platforms',
            'Sending sensor data to the cloud',
            'Monitoring devices remotely'
          ]
        },
        {
          heading: 'Smart System Development',
          items: [
            'Building smart home automation systems',
            'Remote control using mobile or web apps',
            'Introduction to automation workflows'
          ]
        }
      ]
    },
    {
      week: 'Week 4',
      title: 'Robotics Integration & Capstone Project',
      topics: [
        {
          heading: 'Basic Robot Development',
          items: [
            'Building a simple robotic system',
            'Motor drivers and robot movement control',
            'Obstacle detection and autonomous behavior'
          ]
        },
        {
          heading: 'IoT + Robotics Integration',
          items: [
            'Connecting robots to IoT networks',
            'Remote robot monitoring and control',
            'Real-world robotics automation use cases'
          ]
        },
        {
          heading: 'Capstone Project & Career Preparation',
          items: [
            'Build a smart IoT robotic system',
            'Integrate sensors, connectivity, and automation',
            'Resume building and career guidance for IoT/Robotics roles'
          ]
        }
      ]
    }
  ],
  pricing: [
    { 
      plan: 'Self Paced', 
      subtitle: 'Learn at your own pace', 
      price: '₹6,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: false },
        { name: 'Mentor Guidance', included: false },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Mentor Led', 
      subtitle: 'Guided learning with mentor support', 
      price: '₹9,999', 
      popular: true,
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Professional', 
      subtitle: 'Be placement ready', 
      price: '₹14,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: true },
        { name: '1:1 Mentoring', included: true }
      ] 
    }
  ]
},'finance-management': {
  title: 'Finance Management',
  icon: '💰',
  description: 'Learn the fundamentals of financial management, budgeting, investment analysis, and business finance to make informed financial decisions in modern organizations.',
  duration: '4 Weeks',
  enrolled: '1.5K',
  rating: '4.8/5',
  projects: 3,
  partners: '4-6',
  assignments: '80+',
  image: 'finance-management.jpg',
  curriculum: [
    {
      week: 'Week 1',
      title: 'Introduction to Finance & Financial Concepts',
      topics: [
        {
          heading: 'Finance Fundamentals',
          items: [
            'Introduction to financial management',
            'Role of finance in business organizations',
            'Key financial concepts and terminology'
          ]
        },
        {
          heading: 'Financial Statements',
          items: [
            'Understanding balance sheets',
            'Profit and loss statements',
            'Cash flow statements'
          ]
        },
        {
          heading: 'Financial Analysis Basics',
          items: [
            'Reading and interpreting financial reports',
            'Key financial ratios and indicators',
            'Basic financial decision making'
          ]
        }
      ]
    },
    {
      week: 'Week 2',
      title: 'Budgeting & Financial Planning',
      topics: [
        {
          heading: 'Budgeting Principles',
          items: [
            'Importance of budgeting in organizations',
            'Types of budgets and budget preparation',
            'Managing business expenses effectively'
          ]
        },
        {
          heading: 'Financial Planning',
          items: [
            'Short-term vs long-term financial planning',
            'Forecasting revenue and expenses',
            'Financial goal setting'
          ]
        },
        {
          heading: 'Cost Management',
          items: [
            'Understanding fixed and variable costs',
            'Cost control techniques',
            'Improving financial efficiency'
          ]
        }
      ]
    },
    {
      week: 'Week 3',
      title: 'Investment & Risk Management',
      topics: [
        {
          heading: 'Investment Fundamentals',
          items: [
            'Introduction to investment options',
            'Risk vs return concept',
            'Basics of stock and bond investments'
          ]
        },
        {
          heading: 'Capital Budgeting',
          items: [
            'Evaluating investment opportunities',
            'Net Present Value (NPV) and Internal Rate of Return (IRR)',
            'Decision making for capital investments'
          ]
        },
        {
          heading: 'Risk Management',
          items: [
            'Understanding financial risks',
            'Risk mitigation strategies',
            'Importance of diversification'
          ]
        }
      ]
    },
    {
      week: 'Week 4',
      title: 'Corporate Finance & Capstone Project',
      topics: [
        {
          heading: 'Corporate Finance Basics',
          items: [
            'Sources of business funding',
            'Debt vs equity financing',
            'Working capital management'
          ]
        },
        {
          heading: 'Financial Strategy',
          items: [
            'Strategic financial decision making',
            'Managing company profitability',
            'Sustainable financial growth strategies'
          ]
        },
        {
          heading: 'Capstone Project & Career Preparation',
          items: [
            'Financial analysis of a business case',
            'Creating a basic financial plan',
            'Resume building and interview preparation for finance roles'
          ]
        }
      ]
    }
  ],
  pricing: [
    { 
      plan: 'Self Paced', 
      subtitle: 'Learn at your own pace', 
      price: '₹6,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: false },
        { name: 'Mentor Guidance', included: false },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Mentor Led', 
      subtitle: 'Guided learning with mentor support', 
      price: '₹9,999', 
      popular: true,
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Professional', 
      subtitle: 'Be placement ready', 
      price: '₹14,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: true },
        { name: '1:1 Mentoring', included: true }
      ] 
    }
  ]
},'human-resource': {
  title: 'Human Resource Management',
  icon: '👥',
  description: 'Learn the fundamentals of human resource management including recruitment, employee development, performance management, and workplace policies used in modern organizations.',
  duration: '4 Weeks',
  enrolled: '1.5K',
  rating: '4.8/5',
  projects: 3,
  partners: '4-6',
  assignments: '80+',
  image: 'human-resource.jpg',
  curriculum: [
    {
      week: 'Week 1',
      title: 'Introduction to HR & Organizational Structure',
      topics: [
        {
          heading: 'HR Fundamentals',
          items: [
            'Introduction to Human Resource Management',
            'Role of HR in modern organizations',
            'Understanding organizational structure and culture'
          ]
        },
        {
          heading: 'HR Functions',
          items: [
            'Recruitment and talent acquisition',
            'Employee onboarding process',
            'HR policies and compliance basics'
          ]
        },
        {
          heading: 'Workplace Communication',
          items: [
            'Professional communication in organizations',
            'Conflict resolution basics',
            'Building positive workplace relationships'
          ]
        }
      ]
    },
    {
      week: 'Week 2',
      title: 'Recruitment & Talent Management',
      topics: [
        {
          heading: 'Recruitment Process',
          items: [
            'Workforce planning and job analysis',
            'Creating job descriptions and job postings',
            'Screening resumes and conducting interviews'
          ]
        },
        {
          heading: 'Talent Acquisition Strategies',
          items: [
            'Modern hiring strategies and tools',
            'Employer branding and candidate experience',
            'Campus hiring and online recruitment platforms'
          ]
        },
        {
          heading: 'Employee Onboarding',
          items: [
            'Orientation programs for new employees',
            'Integrating employees into company culture',
            'Best practices for successful onboarding'
          ]
        }
      ]
    },
    {
      week: 'Week 3',
      title: 'Employee Development & Performance Management',
      topics: [
        {
          heading: 'Training & Development',
          items: [
            'Importance of employee training programs',
            'Identifying skill gaps in organizations',
            'Creating effective learning and development plans'
          ]
        },
        {
          heading: 'Performance Management',
          items: [
            'Setting employee goals and KPIs',
            'Performance evaluation methods',
            'Providing feedback and employee appraisal'
          ]
        },
        {
          heading: 'Employee Engagement',
          items: [
            'Motivation and employee satisfaction',
            'Building strong workplace culture',
            'Employee retention strategies'
          ]
        }
      ]
    },
    {
      week: 'Week 4',
      title: 'HR Operations & Capstone Project',
      topics: [
        {
          heading: 'HR Policies & Compliance',
          items: [
            'Understanding labor laws and workplace regulations',
            'HR documentation and record management',
            'Workplace ethics and compliance policies'
          ]
        },
        {
          heading: 'Compensation & Benefits',
          items: [
            'Salary structures and payroll basics',
            'Employee benefits and incentives',
            'Designing compensation strategies'
          ]
        },
        {
          heading: 'Capstone Project & Career Preparation',
          items: [
            'Developing an HR strategy for a sample organization',
            'Creating recruitment and training plans',
            'Resume building and interview preparation for HR roles'
          ]
        }
      ]
    }
  ],
  pricing: [
    { 
      plan: 'Self Paced', 
      subtitle: 'Learn at your own pace', 
      price: '₹6,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: false },
        { name: 'Mentor Guidance', included: false },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Mentor Led', 
      subtitle: 'Guided learning with mentor support', 
      price: '₹9,999', 
      popular: true,
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Professional', 
      subtitle: 'Be placement ready', 
      price: '₹14,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: true },
        { name: '1:1 Mentoring', included: true }
      ] 
    }
  ]
},'graphic-design': {
  title: 'Graphic Design',
  icon: '🖌️',
  description: 'Learn the fundamentals of graphic design and create visually compelling designs using industry-standard tools, design principles, and creative workflows used in modern digital media.',
  duration: '4 Weeks',
  enrolled: '1.5K',
  rating: '4.8/5',
  projects: 3,
  partners: '4-6',
  assignments: '80+',
  image: 'graphic-design.jpg',
  curriculum: [
    {
      week: 'Week 1',
      title: 'Introduction to Graphic Design & Design Principles',
      topics: [
        {
          heading: 'Graphic Design Fundamentals',
          items: [
            'Introduction to graphic design and its applications',
            'Understanding visual communication',
            'Role of graphic designers in media and marketing'
          ]
        },
        {
          heading: 'Design Principles',
          items: [
            'Color theory and color psychology',
            'Typography fundamentals',
            'Layout, alignment, contrast, and hierarchy'
          ]
        },
        {
          heading: 'Design Tools Introduction',
          items: [
            'Overview of design software (Photoshop, Illustrator)',
            'Understanding workspace and tools',
            'Creating your first simple design project'
          ]
        }
      ]
    },
    {
      week: 'Week 2',
      title: 'Digital Design & Branding',
      topics: [
        {
          heading: 'Logo & Brand Design',
          items: [
            'Principles of logo design',
            'Creating brand identity elements',
            'Designing logos using vector tools'
          ]
        },
        {
          heading: 'Social Media & Marketing Graphics',
          items: [
            'Designing banners and social media posts',
            'Creating visually engaging marketing graphics',
            'Understanding design for different platforms'
          ]
        },
        {
          heading: 'Typography & Layout Design',
          items: [
            'Advanced typography techniques',
            'Working with grids and spacing',
            'Creating balanced visual layouts'
          ]
        }
      ]
    },
    {
      week: 'Week 3',
      title: 'Advanced Graphic Design Techniques',
      topics: [
        {
          heading: 'Image Editing & Manipulation',
          items: [
            'Photo editing and retouching techniques',
            'Working with layers, masks, and filters',
            'Creating composite images'
          ]
        },
        {
          heading: 'Illustration & Vector Graphics',
          items: [
            'Creating vector illustrations',
            'Using shapes and paths effectively',
            'Designing icons and digital illustrations'
          ]
        },
        {
          heading: 'Design for Print & Digital Media',
          items: [
            'Understanding resolution and file formats',
            'Designing posters, brochures, and flyers',
            'Preparing files for print production'
          ]
        }
      ]
    },
    {
      week: 'Week 4',
      title: 'Portfolio Project & Career Preparation',
      topics: [
        {
          heading: 'Design Portfolio Development',
          items: [
            'Creating a professional design portfolio',
            'Selecting and presenting your best work',
            'Building a strong visual identity as a designer'
          ]
        },
        {
          heading: 'Real-world Design Project',
          items: [
            'Design a complete brand kit (logo, social media graphics, posters)',
            'Apply design principles and creative workflows',
            'Present and review design projects'
          ]
        },
        {
          heading: 'Career Preparation',
          items: [
            'Freelancing and working with clients',
            'Design industry career opportunities',
            'Interview preparation for graphic design roles'
          ]
        }
      ]
    }
  ],
  pricing: [
    { 
      plan: 'Self Paced', 
      subtitle: 'Learn at your own pace', 
      price: '₹6,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: false },
        { name: 'Mentor Guidance', included: false },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Mentor Led', 
      subtitle: 'Guided learning with mentor support', 
      price: '₹9,999', 
      popular: true,
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Professional', 
      subtitle: 'Be placement ready', 
      price: '₹14,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: true },
        { name: '1:1 Mentoring', included: true }
      ] 
    }
  ]
},'stock-market': {
  title: 'Stock Market & Trading',
  icon: '📈',
  description: 'Learn the fundamentals of the stock market, trading strategies, investment analysis, and risk management to confidently participate in financial markets.',
  duration: '4 Weeks',
  enrolled: '1.5K',
  rating: '4.8/5',
  projects: 3,
  partners: '4-6',
  assignments: '80+',
  image: 'stock-market.jpg',
  curriculum: [
    {
      week: 'Week 1',
      title: 'Introduction to Stock Markets & Investment Basics',
      topics: [
        {
          heading: 'Stock Market Fundamentals',
          items: [
            'What is the stock market and how it works',
            'Understanding stock exchanges and market participants',
            'Types of financial instruments (stocks, ETFs, bonds)'
          ]
        },
        {
          heading: 'Investment Basics',
          items: [
            'Long-term investing vs short-term trading',
            'Understanding market indices',
            'Risk and return fundamentals'
          ]
        },
        {
          heading: 'Opening and Using Trading Platforms',
          items: [
            'Introduction to trading accounts and brokers',
            'How to read stock charts and market data',
            'Understanding order types (market, limit, stop)'
          ]
        }
      ]
    },
    {
      week: 'Week 2',
      title: 'Fundamental Analysis',
      topics: [
        {
          heading: 'Company Financial Analysis',
          items: [
            'Reading balance sheets and income statements',
            'Understanding revenue, profit, and growth metrics',
            'Evaluating company financial health'
          ]
        },
        {
          heading: 'Key Financial Ratios',
          items: [
            'Price-to-Earnings (P/E) ratio',
            'Earnings Per Share (EPS)',
            'Debt-to-equity and return on equity'
          ]
        },
        {
          heading: 'Industry & Market Analysis',
          items: [
            'Understanding sectors and industry trends',
            'Macroeconomic factors affecting markets',
            'Identifying long-term investment opportunities'
          ]
        }
      ]
    },
    {
      week: 'Week 3',
      title: 'Technical Analysis & Trading Strategies',
      topics: [
        {
          heading: 'Technical Analysis Basics',
          items: [
            'Understanding candlestick charts',
            'Support and resistance levels',
            'Trend analysis'
          ]
        },
        {
          heading: 'Indicators & Trading Tools',
          items: [
            'Moving averages',
            'RSI and MACD indicators',
            'Volume analysis'
          ]
        },
        {
          heading: 'Trading Strategies',
          items: [
            'Day trading vs swing trading',
            'Momentum trading strategies',
            'Risk management techniques'
          ]
        }
      ]
    },
    {
      week: 'Week 4',
      title: 'Portfolio Management & Capstone Project',
      topics: [
        {
          heading: 'Portfolio Management',
          items: [
            'Building a diversified investment portfolio',
            'Asset allocation strategies',
            'Long-term wealth building'
          ]
        },
        {
          heading: 'Risk Management',
          items: [
            'Managing losses and protecting capital',
            'Position sizing techniques',
            'Psychology of trading'
          ]
        },
        {
          heading: 'Capstone Project & Career Preparation',
          items: [
            'Creating a simulated trading portfolio',
            'Analyzing stocks using both fundamental and technical methods',
            'Understanding career paths in financial markets'
          ]
        }
      ]
    }
  ],
  pricing: [
    { 
      plan: 'Self Paced', 
      subtitle: 'Learn at your own pace', 
      price: '₹6,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: false },
        { name: 'Mentor Guidance', included: false },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Mentor Led', 
      subtitle: 'Guided learning with mentor support', 
      price: '₹9,999', 
      popular: true,
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Professional', 
      subtitle: 'Be placement ready', 
      price: '₹14,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: true },
        { name: '1:1 Mentoring', included: true }
      ] 
    }
  ]
},'business-analytics': {
  title: 'Business Analytics',
  icon: '📊',
  description: 'Learn how to analyze business data, generate insights, and support data-driven decision making using modern analytics tools and techniques used by organizations.',
  duration: '4 Weeks',
  enrolled: '1.5K',
  rating: '4.8/5',
  projects: 3,
  partners: '4-6',
  assignments: '80+',
  image: 'business-analytics.jpg',
  curriculum: [
    {
      week: 'Week 1',
      title: 'Introduction to Business Analytics & Data Fundamentals',
      topics: [
        {
          heading: 'Business Analytics Overview',
          items: [
            'What is business analytics and why it matters',
            'Types of analytics: descriptive, diagnostic, predictive',
            'Role of analytics in modern organizations'
          ]
        },
        {
          heading: 'Data Fundamentals',
          items: [
            'Types of business data and data sources',
            'Understanding structured vs unstructured data',
            'Basic data collection and preparation'
          ]
        },
        {
          heading: 'Introduction to Data Tools',
          items: [
            'Using spreadsheets for data analysis',
            'Basic Excel functions and formulas',
            'Data cleaning and organization'
          ]
        }
      ]
    },
    {
      week: 'Week 2',
      title: 'Data Analysis & Visualization',
      topics: [
        {
          heading: 'Data Analysis Techniques',
          items: [
            'Exploratory data analysis',
            'Working with datasets and summaries',
            'Using pivot tables for business insights'
          ]
        },
        {
          heading: 'Data Visualization',
          items: [
            'Importance of visual storytelling with data',
            'Creating charts and graphs',
            'Designing effective dashboards'
          ]
        },
        {
          heading: 'Business Metrics & KPIs',
          items: [
            'Understanding key performance indicators',
            'Tracking business performance',
            'Analyzing trends and patterns'
          ]
        }
      ]
    },
    {
      week: 'Week 3',
      title: 'Advanced Analytics & Business Insights',
      topics: [
        {
          heading: 'Statistical Concepts for Analytics',
          items: [
            'Basic statistics for business analysis',
            'Correlation and trend analysis',
            'Introduction to predictive thinking'
          ]
        },
        {
          heading: 'Business Intelligence Tools',
          items: [
            'Introduction to tools like Power BI or Tableau',
            'Creating interactive dashboards',
            'Connecting and visualizing data sources'
          ]
        },
        {
          heading: 'Decision Making with Data',
          items: [
            'Data-driven decision making',
            'Interpreting analytical results',
            'Communicating insights to stakeholders'
          ]
        }
      ]
    },
    {
      week: 'Week 4',
      title: 'Business Analytics Project & Career Preparation',
      topics: [
        {
          heading: 'Business Case Analysis',
          items: [
            'Analyzing a real-world business dataset',
            'Identifying trends and opportunities',
            'Presenting actionable insights'
          ]
        },
        {
          heading: 'Dashboard Development',
          items: [
            'Building a business analytics dashboard',
            'Visualizing KPIs and performance metrics',
            'Creating reports for decision makers'
          ]
        },
        {
          heading: 'Capstone Project & Career Preparation',
          items: [
            'End-to-end business analytics project',
            'Preparing analytics reports and presentations',
            'Resume building and interview preparation for analytics roles'
          ]
        }
      ]
    }
  ],
  pricing: [
    { 
      plan: 'Self Paced', 
      subtitle: 'Learn at your own pace', 
      price: '₹6,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: false },
        { name: 'Mentor Guidance', included: false },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Mentor Led', 
      subtitle: 'Guided learning with mentor support', 
      price: '₹9,999', 
      popular: true,
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: false },
        { name: '1:1 Mentoring', included: false }
      ] 
    },
    { 
      plan: 'Professional', 
      subtitle: 'Be placement ready', 
      price: '₹14,999', 
      features: [
        { name: 'Recorded Sessions', included: true },
        { name: 'Hands-on Projects', included: true },
        { name: 'Certifications', included: true },
        { name: 'Doubt Clear Sessions', included: true },
        { name: 'Live Sessions', included: true },
        { name: 'Mentor Guidance', included: true },
        { name: 'Placement Support', included: true },
        { name: '1:1 Mentoring', included: true }
      ] 
    }
  ]
}
  };

  const course = courseData[courseSlug];

  if (!course) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Course not found</h2>
        <Link to="/courses"><button className="btn-primary">Back to Courses</button></Link>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">EliteVeda</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section 
        className="course-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), url(${process.env.PUBLIC_URL}/images/courses/${course.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-left">
          <div className="course-icon-large">{course.icon}</div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <button className="btn-primary large">Download Brochure</button>
          <div className="enrollment-info">
            <span>👥 {course.enrolled} Students already enrolled</span>
            <span className="rating">⭐ {course.rating} Course Rating</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="enrollment-form">
            <h3>Start Your Learning Journey Now!</h3>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Name *" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email *" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="tel" 
                name="mobile"
                placeholder="Your Mobile Number *" 
                value={formData.mobile}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                title="Please enter 10 digit mobile number"
                required 
              />
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              {submitMessage.text && (
                <div className={`submit-message ${submitMessage.type}`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Course Stats */}
      <section className="course-stats">
        <div className="stat-card">
          <h3>{course.duration}</h3>
          <p>Program Duration</p>
        </div>
        <div className="stat-card cert-logos">
          <div className="cert-logos-container">
            <div className="cert-logo">
              <img src={`${process.env.PUBLIC_URL}/images/certifications/msme.png`} alt="MSME" />
            </div>
            <div className="cert-logo">
              <img src={`${process.env.PUBLIC_URL}/images/certifications/skill-india.png`} alt="Skill India" />
            </div>
          </div>
          <p>Certifications</p>
        </div>
        <div className="stat-card">
          <h3>{course.projects}</h3>
          <p>Industrial Projects</p>
        </div>
        <div className="stat-card">
          <h3>{course.partners}</h3>
          <p>Internship Partners</p>
        </div>
        <div className="stat-card">
          <h3>{course.assignments}</h3>
          <p>Quiz/Assignments</p>
        </div>
        <div className="stat-card">
          <h3>Lifetime</h3>
          <p>Program Access</p>
        </div>
      </section>

      {/* Curriculum with Accordion */}
      <section className="curriculum-section">
        <h2>Program Curriculum</h2>
        <div className="curriculum-container">
          <div className="curriculum-accordion">
            {course.curriculum.map((week, index) => (
              <div className="week-accordion-item" key={index}>
                <div 
                  className="week-header" 
                  onClick={() => toggleWeek(index)}
                >
                  <h3>{week.week}: {week.title}</h3>
                  <span className={`arrow ${openWeeks[index] ? 'open' : ''}`}>▼</span>
                </div>
                {openWeeks[index] && (
                  <div className="week-content">
                    {week.topics.map((topic, i) => (
                      <div className="topic-section" key={i}>
                        <h4>{topic.heading}</h4>
                        <ul>
                          {topic.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="curriculum-image">
            <img src={`${process.env.PUBLIC_URL}/images/courses/${course.image}`} alt={course.title} />
          </div>
        </div>
      </section>

      {/* Certificates */}
      {/*<section className="certificates-section">
        <h2>Certificates</h2>
        <div className="certificates-grid">
          <div className="certificate-card">
            <div className="cert-image">🎓</div>
            <h4>Course Completion Certificate</h4>
            <p>Industry-recognized certificate upon successful completion</p>
          </div>
          <div className="certificate-card">
            <div className="cert-image">🏆</div>
            <h4>MSME Certified</h4>
            <p>Government of India MSME certification</p>
          </div>
          <div className="certificate-card">
            <div className="cert-image">✨</div>
            <h4>Skill Certification</h4>
            <p>Validates your technical expertise and skills</p>
          </div>
        </div>
        <div className="sample-certificates">
          <h3>Sample Certificates</h3>
          <div className="sample-cert-images">
            <div className="sample-cert">
              <div className="cert-placeholder-sample">
                <span>📜</span>
                <p>Completion Certificate</p>
              </div>
            </div>
            <div className="sample-cert">
              <div className="cert-placeholder-sample">
                <span>🏅</span>
                <p>Excellence Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Alumni Companies */}
      <section className="alumni-section">
        <h2>Our Alumni Works At</h2>
        <p className="alumni-subtitle">Our learners have turned their skills into success, now thriving at top companies worldwide.</p>
        
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

      {/* Pricing */}
      <section className="pricing-section">
        <h2>Select the Best Plan for Your Growth</h2>
        <p className="pricing-subtitle">Choose the plan that suits your learning needs and start your journey with EliteVeda today.</p>
        <div className="pricing-grid">
          {course.pricing.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.plan}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>
              <div className="price">{plan.price}</div>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className={feature.included ? 'included' : 'excluded'}>
                    <span className="icon">{feature.included ? '✓' : '✗'}</span>
                    {feature.name}
                  </li>
                ))}
              </ul>
              <button className="btn-primary" onClick={scrollToEnrollment}>Enroll Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>EliteVeda</h3>
            <p>Wings of your dream 🚀</p>
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

export default CourseDetail;
