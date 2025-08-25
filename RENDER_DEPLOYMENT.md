# Deploying to Render

This guide will help you deploy your Jasra Electrical & Plumbing website to Render.

## Prerequisites

1. A [GitHub](https://github.com) account
2. A [Render](https://render.com) account (you can sign up with GitHub)
3. Your project pushed to a GitHub repository

## Deployment Steps

### 1. Push Your Code to GitHub

```bash
# Initialize Git repository (if not already done)
git init

# Add all files to Git
git add .

# Commit changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/jasra-electrical.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Render

1. Log in to [Render](https://dashboard.render.com/)
2. Click "New" and select "Web Service"
3. Connect your GitHub account if not already connected
4. Select your repository
5. Configure your web service:
   - Name: `jasra-electrical` (or your preferred name)
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Select the free plan

### 3. Set Environment Variables

1. In your web service dashboard, go to the "Environment" tab
2. Add the following environment variables:

```
NODE_ENV=production
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_FROM=noreply@jasraelectrical.com
BUSINESS_EMAIL=juliusjames329@gmail.com
BUSINESS_PHONE=+255710093635
```

### 4. Deploy Your Application

1. Click "Create Web Service"
2. Render will automatically build and deploy your application
3. Once deployed, you can access your site at the provided URL

## Monitoring Your Application

- View logs in the "Logs" tab
- Monitor resource usage in the "Metrics" tab
- Check deployment status in the "Events" tab

## Updating Your Application

Simply push changes to your GitHub repository, and Render will automatically redeploy your application.

```bash
git add .
git commit -m "Update website"
git push
```