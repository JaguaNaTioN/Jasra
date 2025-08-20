# Deploying to Heroku via GitHub

This guide will walk you through deploying your Jasra Electrical & Plumbing website to Heroku using GitHub integration.

## Prerequisites

1. A [GitHub](https://github.com) account
2. A [Heroku](https://heroku.com) account
3. Your project pushed to a GitHub repository

## Step 1: Push Your Code to GitHub

If you haven't already, create a GitHub repository and push your code:

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

## Step 2: Connect Heroku to GitHub

1. Log in to your [Heroku Dashboard](https://dashboard.heroku.com)
2. Click "New" and select "Create new app"
3. Give your app a name (e.g., "jasra-electrical") and select your region
4. Click "Create app"
5. On the Deploy tab, select "GitHub" as the deployment method
6. Connect your GitHub account if not already connected
7. Search for your repository and click "Connect"

## Step 3: Configure Environment Variables

1. In your Heroku app dashboard, go to the "Settings" tab
2. Click "Reveal Config Vars"
3. Add the following environment variables (replace with your actual values):

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

## Step 4: Deploy Your Application

1. Go back to the "Deploy" tab
2. Scroll down to "Manual deploy"
3. Select the branch you want to deploy (usually "main")
4. Click "Deploy Branch"
5. Wait for the deployment to complete
6. Once complete, click "View" to see your live application

## Step 5: Enable Automatic Deployments (Optional)

1. In the "Deploy" tab, scroll to "Automatic deploys"
2. Select the branch you want to automatically deploy
3. Click "Enable Automatic Deploys"
4. Now, every time you push to this branch on GitHub, Heroku will automatically deploy your changes

## Troubleshooting

If you encounter any issues:

1. Check the Heroku logs by clicking "More" > "View logs" in your app dashboard
2. Ensure all environment variables are correctly set
3. Verify your Procfile contains: `web: node server.js`
4. Make sure your package.json has the correct start script and engine version

## Maintaining Your Application

- Monitor your application's performance in the Heroku dashboard
- Check logs regularly for any errors
- Update your environment variables as needed
- Consider upgrading to a paid plan if you need more resources or uptime