# Spree Landing Page

A modern, responsive landing page for Spree - The best deals, in one feed.

## Features

- 🎨 Modern, clean design with pink/magenta color scheme
- 📱 Fully responsive (mobile and desktop)
- ⚡ Smooth scroll navigation
- 🚀 Built with React
- 📄 Terms and Privacy Policy pages

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
spree-web/
├── public/
│   └── index.html
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── LandingPage.js
│   │   ├── LandingPage.css
│   │   ├── Terms.js
│   │   ├── Terms.css
│   │   ├── PrivacyPolicy.js
│   │   └── PrivacyPolicy.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Assets Needed

You'll need to add the following images to `src/assets/`:

1. **spree-logo.png** - Copy from `kingship-frontend/src/images/spree_logo.png`
2. **phone-mockup.png** - Phone mockup image showing the app (you mentioned you have this image)
3. **apple-logo.svg** - Already included as a placeholder (white Apple logo)

To copy the logo from your existing project:
```bash
# From the spree-web directory
copy ..\kingship-frontend\src\images\spree_logo.png src\assets\spree-logo.png
```

## Git Commands to Push to Repository

If you haven't initialized git yet, run these commands:

```bash
# Navigate to the project directory
cd spree-web

# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Spree landing page"

# Add the remote repository
git remote add origin https://github.com/Kingship-AI/spree-web.git

# Push to the repository
git branch -M main
git push -u origin main
```

If you've already initialized git or want to push updates:

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Your commit message here"

# Push to repository
git push origin main
```

## Customization

### Colors

The main brand colors are defined in the CSS:
- Primary Pink: `#FF3366`
- Secondary Pink: `#FF5A8A`
- Black: `#000000`
- White: `#FFFFFF`

### App Store Link

Update the App Store link in `LandingPage.js` by replacing:
```javascript
href="https://apps.apple.com/app/spree"
```
with your actual App Store URL when the app is live.

## License

Copyright © 2024 Kingship AI, Inc.
