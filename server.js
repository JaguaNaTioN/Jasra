// Load environment variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Initialize Express app
const app = express();

// Set port from environment variables or use default
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));

// Email configuration
const emailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.example.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'your-email@example.com',
    pass: process.env.EMAIL_PASS || 'your-email-password'
  }
};

// Business contact information
const businessEmail = process.env.BUSINESS_EMAIL || 'juliusjames329@gmail.com';
const businessPhone = process.env.BUSINESS_PHONE || '+255710093635';

// Function to send email notification
async function sendEmailNotification(formData) {
  try {
    // In development, just log the email that would be sent
    if (process.env.NODE_ENV === 'development') {
      console.log('\n--- EMAIL NOTIFICATION ---');
      console.log(`To: ${formData.email}`);
      console.log(`From: ${process.env.EMAIL_FROM || 'noreply@jasraelectrical.com'}`);
      console.log('Subject: Thank you for contacting Jasra Electrical & Plumbing');
      console.log('\nBody:');
      console.log(`Dear ${formData.name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nYour message: ${formData.message}\n\nRegards,\nJasra Electrical & Plumbing Team`);
      console.log('--- END EMAIL ---\n');
      
      // Also log notification that would be sent to business owner
      console.log('\n--- BUSINESS NOTIFICATION ---');
      console.log(`To: ${businessEmail}`);
      console.log(`From: ${process.env.EMAIL_FROM || 'noreply@jasraelectrical.com'}`);
      console.log('Subject: New Contact Form Submission');
      console.log('\nBody:');
      console.log(`New contact form submission from ${formData.name}:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`);
      console.log('--- END NOTIFICATION ---\n');
      
      return true;
    }
    
    // In production, actually send the emails
    const transporter = nodemailer.createTransport(emailConfig);
    
    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@jasraelectrical.com',
      to: formData.email,
      subject: 'Thank you for contacting Jasra Electrical & Plumbing',
      text: `Dear ${formData.name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nYour message: ${formData.message}\n\nRegards,\nJasra Electrical & Plumbing Team`
    });
    
    // Send notification to business owner
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@jasraelectrical.com',
      to: businessEmail,
      subject: 'New Contact Form Submission',
      text: `New contact form submission from ${formData.name}:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    });
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Function to send SMS notification
function sendSMSNotification(formData) {
  // This is a placeholder for SMS sending functionality
  // In a real implementation, you would use a service like Twilio
  console.log('\n--- SMS NOTIFICATION ---');
  console.log(`To: ${businessPhone}`);
  console.log(`New contact from ${formData.name} about ${formData.service}. Check email for details.`);
  console.log('--- END SMS ---\n');
  
  return true;
}

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;
    console.log('Received form data:', formData);
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }
    
    // Send email notification
    const emailSent = await sendEmailNotification(formData);
    
    // Send SMS notification
    const smsSent = sendSMSNotification(formData);
    
    // Send response
    res.status(200).json({
      success: true,
      message: 'Form submission received',
      emailSent,
      smsSent
    });
  } catch (error) {
    console.error('Error processing form data:', error);
    res.status(500).json({
      success: false,
      message: 'Server error processing your request'
    });
  }
});

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to stop the server');
});