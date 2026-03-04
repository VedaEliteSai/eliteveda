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
