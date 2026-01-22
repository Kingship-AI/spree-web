# Quick Setup Guide

## Step 1: Copy Assets

Copy the required images to `src/assets/`:

```bash
# Copy Spree logo
copy ..\kingship-frontend\src\images\spree_logo.png src\assets\spree-logo.png

# Add your phone mockup image
# (You mentioned you have this - just copy it to src\assets\phone-mockup.png)
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Start Development Server

```bash
npm start
```

Visit http://localhost:3000 to see the landing page.

## Step 4: Initialize Git and Push to Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Spree landing page"

# Add remote repository
git remote add origin https://github.com/Kingship-AI/spree-web.git

# Set main branch and push
git branch -M main
git push -u origin main
```

## Step 5: Update App Store Link (When Ready)

When your app is live, update the App Store links in:
- `src/components/LandingPage.js` (3 locations)
- Replace `https://apps.apple.com/app/spree` with your actual App Store URL

## Building for Production

```bash
npm run build
```

The optimized build will be in the `build/` folder, ready to deploy.
