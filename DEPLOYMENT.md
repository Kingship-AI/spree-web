# Deployment Guide

## Email Functionality
✅ **Current Status**: Emails are saved to Firestore but not auto-sent. This is fine for now!
- You can manually export emails from Firebase console
- Or add backend email integration later (same as your WaitlistPage.js does)

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)
1. Install Vercel CLI: `npm i -g vercel`
2. From `spree-web` directory: `vercel`
3. Follow prompts (defaults work fine)
4. Your site will be live at `your-project.vercel.app`

**Or use Vercel Dashboard:**
1. Go to https://vercel.com
2. Import your GitHub repo: `https://github.com/Kingship-AI/spree-web`
3. Vercel auto-detects React and deploys

### Option 2: Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod --dir=build`

**Or use Netlify Dashboard:**
1. Go to https://netlify.com
2. Drag & drop the `build` folder after running `npm run build`

### Option 3: GitHub Pages
1. Build: `npm run build`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## Build for Production

```bash
cd spree-web
npm install
npm run build
```

The `build/` folder contains your production-ready site.

## Important Notes

### React Router (SPA Routing)
If deploying to a static host, you may need to configure redirects:
- **Vercel**: Auto-handles this
- **Netlify**: Create `public/_redirects` file with: `/* /index.html 200`
- **GitHub Pages**: Use `HashRouter` instead of `BrowserRouter` (we can change this if needed)

### Firebase
- Already configured and ready
- No environment variables needed (config is in code)
- Make sure Firestore rules allow writes to `waitlist` collection

## Post-Deployment Checklist
- [ ] Test all pages load correctly
- [ ] Test modal email submission
- [ ] Verify Firebase connection works
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify smooth scroll navigation
