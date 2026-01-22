# Pre-Publish Checklist

## ✅ Code Review
- [x] All components created and working
- [x] Firebase integration set up
- [x] No linting errors
- [x] All assets in place

## 🔍 Before Publishing - Test These:

### 1. Install Dependencies
```bash
cd spree-web
npm install
```

### 2. Test Locally
```bash
npm start
```

### 3. Functionality Tests
- [ ] Landing page loads correctly
- [ ] All navigation links work (How it works, FAQ)
- [ ] Download buttons open the "Coming Soon" modal
- [ ] Modal email submission works (check Firebase console)
- [ ] Team page loads with all team member photos
- [ ] Terms page loads PDF correctly
- [ ] Privacy Policy page loads PDF correctly
- [ ] Smooth scroll navigation works
- [ ] Mobile responsive design works on different screen sizes
- [ ] Footer links work (Terms, Privacy, Support, Team)

### 4. Visual Checks
- [ ] Pink gradient background visible across all pages
- [ ] All text is readable
- [ ] Images display correctly
- [ ] Cards look good with the new styling
- [ ] Modal matches the design aesthetic

### 5. Browser Testing
- [ ] Chrome/Edge
- [ ] Safari
- [ ] Firefox
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### 6. Production Build
```bash
npm run build
```
- [ ] Build completes without errors
- [ ] Test the production build locally

### 7. Firebase Verification
- [ ] Check Firebase console to ensure waitlist collection exists
- [ ] Test submitting an email through the modal
- [ ] Verify email appears in Firestore

### 8. SEO & Meta Tags
- [ ] Update meta description in `public/index.html` if needed
- [ ] Verify page title is correct

## 🚀 Ready to Deploy?

Once all checks pass:
1. Build for production: `npm run build`
2. Deploy the `build/` folder to your hosting service
3. Test the live site
4. Monitor Firebase for waitlist submissions

## 📝 Notes
- When the app is ready, update all download buttons to link directly to App Store
- The modal can be removed or kept as a backup option
