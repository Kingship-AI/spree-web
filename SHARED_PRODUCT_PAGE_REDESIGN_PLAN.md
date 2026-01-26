# Shared Product Page Redesign Plan

## Overview
This plan outlines the redesign of the SharedProductPage component to improve UI/UX, add background layers, update the header, and implement QR code functionality.

---

## Phase 1: UI Element Cleanup

### Step 1.1: Remove Shipping Info
**File:** `spree-web/src/components/SharedProductPage.js`
- Remove or hide the `shipping-info` paragraph element (line 172 for mobile, line 206 for desktop)
- Remove from both mobile and desktop layouts

### Step 1.2: Hide Deal Status Badge
**File:** `spree-web/src/components/SharedProductPage.js`
- Conditionally render `deal-badge` only if needed in future
- For now, remove the conditional rendering (lines 167-169 for mobile, lines 201-203 for desktop)

### Step 1.3: Restyle "Why this pick" Badge
**File:** `spree-web/src/components/SharedProductPage.css`
- Update `.why-badge` and `.why-badge-desktop` styles
- Change background to: `rgba(255, 255, 255, 0.3)` (white with 30% opacity)
- Ensure text remains readable (may need to adjust text color or add text shadow)

---

## Phase 2: Header Redesign

### Step 2.1: Match Landing Page Header Structure
**File:** `spree-web/src/components/SharedProductPage.js`
- Replace current header structure with LandingPage header structure
- Add navigation links: "How it works" and "FAQ"
- Update header container class to match LandingPage

### Step 2.2: Update Header Styles
**File:** `spree-web/src/components/SharedProductPage.css`
- Replace `.shared-header` styles with LandingPage `.header` styles
- Make background transparent (not white)
- Match padding, spacing, and layout
- Ensure header has proper z-index for layering

### Step 2.3: Add Scroll-to-Section Functionality
**File:** `spree-web/src/components/SharedProductPage.js`
- Add `scrollToSection` function (similar to LandingPage)
- Since this is a product page, "How it works" and "FAQ" should scroll to sections on the landing page or open in new tab
- Alternatively, make them links to landing page sections

---

## Phase 3: QR Code Implementation

### Step 3.1: Install QR Code Library
**Command:** `npm install qrcode.react`
- Add `qrcode.react` package to dependencies

### Step 3.2: Generate QR Code Component
**File:** `spree-web/src/components/SharedProductPage.js`
- Import `QRCodeSVG` from `qrcode.react`
- Replace QR code placeholder with actual QR code component
- **QR Code Link Decision Needed:**
  - **Option A:** Link to app deep link (`spree://product/{product_id}` or `spree://share/{shareId}`)
  - **Option B:** Link to share URL (`https://getspree.app/share/{shareId}`)
  - **Recommendation:** Use deep link (Option A) since QR code is for opening in app

### Step 3.3: Style QR Code
**File:** `spree-web/src/components/SharedProductPage.css`
- Update `.qr-code-placeholder` to display actual QR code
- Ensure QR code is only visible on desktop (already handled by media query)
- Add proper sizing and styling

---

## Phase 4: Background Layers Implementation

### Step 4.1: Create Background Container Structure
**File:** `spree-web/src/components/SharedProductPage.js`
- Add a background layers container div
- Position it absolutely behind all content
- Ensure it covers full viewport

### Step 4.2: Layer 1 - Blurred Product Image
**Implementation:**
- Create a lower-resolution version of the product image (or use CSS to scale down for performance)
- Apply CSS `filter: blur(120px)` (uniform blur)
- Position to cover full screen
- Use `background-size: cover` and `background-position: center`
- **Performance Optimization:**
  - Option A: Use CSS `transform: scale(0.5)` before blur to reduce processing
  - Option B: Create a smaller image URL parameter if backend supports it
  - Option C: Use `will-change: filter` for GPU acceleration

**File:** `spree-web/src/components/SharedProductPage.css`
- Add `.background-layer-1` class
- Position: `position: absolute; top: 0; left: 0; width: 100%; height: 100%;`
- Apply blur filter
- Set `z-index: 1`

### Step 4.3: Layer 2 - Radial Gradient
**Implementation:**
- Create radial gradient from center
- Color: `#FF3366` (FF3366) to transparent
- Opacity: 50% (0.5)
- Full screen coverage

**File:** `spree-web/src/components/SharedProductPage.css`
- Add `.background-layer-2` class
- Use `background: radial-gradient(circle at center, rgba(255, 51, 102, 0.5) 0%, transparent 70%)`
- Position: `position: absolute; top: 0; left: 0; width: 100%; height: 100%;`
- Set `z-index: 2`

### Step 4.4: Layer 3 - Linear Gradient Overlay
**Implementation:**
- **Desktop:** Right half of screen - linear gradient from transparent white to 100% opacity white (left to right)
- **Mobile:** Bottom half of screen - linear gradient from transparent white to 100% opacity white (top to bottom)

**File:** `spree-web/src/components/SharedProductPage.css`
- Add `.background-layer-3` class
- Desktop: `background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)`
- Mobile: `background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)`
- Position: `position: absolute; top: 0; left: 0; width: 100%; height: 100%;`
- Set `z-index: 3`
- Use media queries for responsive behavior

### Step 4.5: Ensure Content is Above Background
**File:** `spree-web/src/components/SharedProductPage.css`
- Update `.shared-product-page` to have `position: relative`
- Ensure all content containers have `position: relative` and `z-index: 10` or higher
- Header should have `z-index: 100` (already set in LandingPage)

---

## Phase 5: Performance Optimization

### Step 5.1: Image Optimization
- Consider lazy loading for product image
- Use lower resolution for blurred background image
- Add `loading="lazy"` attribute to product images

### Step 5.2: CSS Performance
- Use `will-change` property for animated/transformed elements
- Consider using `transform: translateZ(0)` for GPU acceleration
- Test blur performance on various devices

---

## Implementation Order

1. **Phase 1:** UI Element Cleanup (Quick wins)
2. **Phase 2:** Header Redesign (User-facing improvement)
3. **Phase 3:** QR Code Implementation (Feature addition)
4. **Phase 4:** Background Layers (Visual enhancement)
5. **Phase 5:** Performance Optimization (Polish)

---

## Questions to Resolve

1. **QR Code Link:** Should QR code link to app deep link or share URL?
   - **Recommendation:** Deep link (`spree://share/{shareId}`) for direct app opening

2. **Header Navigation:** Should "How it works" and "FAQ" links:
   - Scroll to sections on the same page (if we add them)?
   - Link to landing page sections?
   - Open in new tab?
   - **Recommendation:** Link to landing page with hash anchors (`/#how-it-works`, `/#faq`)

3. **Background Image Resolution:** What's the best approach for blurred background?
   - **Recommendation:** Use CSS scaling + blur, or request smaller image from backend if possible

---

## Files to Modify

1. `spree-web/src/components/SharedProductPage.js` - Main component logic
2. `spree-web/src/components/SharedProductPage.css` - All styling
3. `spree-web/package.json` - Add qrcode.react dependency

---

## Testing Checklist

- [ ] Shipping info removed from mobile and desktop
- [ ] Deal status badge hidden
- [ ] "Why this pick" badge is white with 30% opacity
- [ ] Header matches LandingPage design and behavior
- [ ] QR code generates correctly (desktop only)
- [ ] QR code links to correct URL
- [ ] Background layers stack correctly
- [ ] Blurred image doesn't cause performance issues
- [ ] Radial gradient displays correctly
- [ ] Linear gradient works on mobile (bottom) and desktop (right)
- [ ] All content is readable above background layers
- [ ] Responsive design works on various screen sizes
