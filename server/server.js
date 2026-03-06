const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS Configuration for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://eliteveda.in', 'https://www.eliteveda.in', 'https://eliteveda.vercel.app'] 
    : 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/eliteveda';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Import Enrollment Model
const Enrollment = require('./models/Enrollment');

// Health Check Route
app.get('/', (req, res) => {
  res.json({ 
    message: 'EliteVeda API is running!',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Enrollment Route
app.post('/api/enrollment', async (req, res) => {
  try {
    const { name, email, mobile, course } = req.body;

    // Validation
    if (!name || !email || !mobile || !course) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Mobile validation (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Mobile number must be 10 digits' 
      });
    }

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({ email, course });
    if (existingEnrollment) {
      return res.status(400).json({ 
        success: false, 
        message: 'You have already enrolled in this course' 
      });
    }

    // Create new enrollment
    const enrollment = new Enrollment({
      name,
      email,
      mobile,
      course
    });

    await enrollment.save();

    res.status(201).json({ 
      success: true, 
      message: 'Enrollment successful! We will contact you soon.',
      data: enrollment
    });

  } catch (error) {
    console.error('Enrollment Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
});

// Get all enrollments (admin route - add authentication later)
app.get('/api/enrollments', async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ enrolledAt: -1 });
    res.json({ 
      success: true, 
      count: enrollments.length,
      data: enrollments 
    });
  } catch (error) {
    console.error('Get Enrollments Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Contact Form Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, mobile, subject, message } = req.body;

    // Validation
    if (!name || !email || !mobile || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Here you can:
    // 1. Save to database (create Contact model)
    // 2. Send email notification
    // 3. Or just log for now

    console.log('Contact Form Submission:', { name, email, mobile, subject, message });

    res.status(201).json({ 
      success: true, 
      message: 'Thank you for contacting us! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error' 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});