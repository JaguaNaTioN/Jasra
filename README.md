# JaSra Electrical and Plumbing Solutions Website

## Overview

This is a responsive web application for JaSra Electrical and Plumbing Solutions, a business specializing in electrical and plumbing services. The website showcases the company's services, expertise, and provides a contact form for potential customers.

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Modern and professional UI with animations
- Service showcase with categorized listings
- Contact form with email notifications
- Mobile-friendly navigation
- Smooth scrolling and interactive elements

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── server.js           # Node.js server for handling form submissions
├── package.json        # Node.js dependencies
├── .env.example        # Example environment variables
└── README.md           # Project documentation
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid layouts)
- JavaScript (ES6+)
- Node.js (Express)
- Nodemailer for email functionality
- Font Awesome for icons

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory based on `.env.example`:
   ```
   PORT=3001
   NODE_ENV=development
   
   # Email Configuration
   EMAIL_HOST=smtp.example.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   EMAIL_FROM=noreply@jasraelectrical.com
   
   # Business Contact Information
   BUSINESS_EMAIL=your-business-email@example.com
   BUSINESS_PHONE=+1234567890
   ```

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at http://localhost:3001

## Customization

To customize this website for your needs:

1. Update the content in `index.html` with your business information
2. Modify the color scheme in `styles.css` by changing the CSS variables in the `:root` selector
3. Add or remove services as needed in the services section
4. Update contact information in both the contact section and footer

## Deployment

### Option 1: Deploying to Heroku

1. Create a Heroku account and install the Heroku CLI
2. Login to Heroku:
   ```
   heroku login
   ```
3. Create a new Heroku app:
   ```
   heroku create jasra-electrical
   ```
4. Set environment variables:
   ```
   heroku config:set NODE_ENV=production
   heroku config:set EMAIL_HOST=smtp.example.com
   heroku config:set EMAIL_PORT=587
   heroku config:set EMAIL_USER=your-email@example.com
   heroku config:set EMAIL_PASS=your-email-password
   heroku config:set EMAIL_FROM=noreply@jasraelectrical.com
   heroku config:set BUSINESS_EMAIL=your-business-email@example.com
   heroku config:set BUSINESS_PHONE=+1234567890
   ```
5. Deploy to Heroku:
   ```
   git push heroku main
   ```

### Option 2: Deploying to Render

1. Create a Render account
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure the service:
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Add environment variables in the Render dashboard
6. Deploy

### Option 3: Deploying to Railway

1. Create a Railway account
2. Create a new project
3. Connect your GitHub repository
4. Add environment variables in the Railway dashboard
5. Deploy

## Browser Compatibility

This website is compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

## Future Enhancements

- Add a gallery section to showcase completed projects
- Add a testimonials section
- Integrate social media links
- Add a blog section for sharing industry tips and news
- Implement SMS notifications for form submissions

## Production Considerations

For production deployment:

1. Use a proper SMTP service (SendGrid, Mailgun, etc.) for reliable email delivery
2. Consider implementing rate limiting for the contact form
3. Set up proper error logging
4. Use HTTPS for secure communication

## License

This project is available for use by JaSra Electrical and Plumbing Solutions.