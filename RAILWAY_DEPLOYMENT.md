# Deploying to Railway

This guide will help you deploy your Jasra Electrical & Plumbing website to Railway.

## Prerequisites

1. A [GitHub](https://github.com) account
2. A [Railway](https://railway.app) account (sign up with GitHub)
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

### 2. Deploy to Railway

1. Go to [Railway](https://railway.app) and sign in with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will automatically detect your Node.js project and deploy it

### 3. Set Environment Variables

1. In your project dashboard, go to the "Variables" tab
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

### 4. Set Up Your Domain (Optional)

1. Go to the "Settings" tab
2. Under "Domains", click "Generate Domain" for a free Railway subdomain
3. Or click "Custom Domain" to use your own domain

## Monitoring Your Application

- View logs in the "Deployments" tab
- Monitor resource usage in the "Metrics" tab
- Check deployment status in the "Deployments" tab

## Updating Your Application

Simply push changes to your GitHub repository, and Railway will automatically redeploy your application.

```bash
git add .
git commit -m "Update website"
git push
```