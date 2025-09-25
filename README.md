# Frontend Developer Intern Assignment – SolveEase

## Overview

This assignment evaluates practical skills in **React, Next.js, TypeScript, Tailwind CSS**, and **frontend optimizations**. The goal was to enhance an existing Next.js application by resolving layout/design issues, fixing bugs, and implementing requested features for a better user experience.

---
## Deployed Link
```bash
 https://frontend-dev-assignment-gray.vercel.app/
```

Note: External images (Random User API) may not display in deployed version due to server-side fetch restrictions. Images work correctly when running locally.

## Features Implemented

### 1. Cards Layout & Responsiveness
- Fixed the grid layout of worker cards for desktop, tablet, and mobile views.
- Enhanced card design for improved UI/UX.
- Fully responsive design across all screen sizes.

### 2. Sticky Navbar
- Implemented a clean, responsive navigation bar that remains fixed while scrolling.
- Designed for both desktop and mobile devices.

### 3. Page Load & Performance Optimizations
- **Lazy loading** for images and non-critical components.
- **Memoization** to prevent unnecessary re-renders.
- **Skeleton loading screens** for improved UX during data fetching.

### 4. Pagination
- Added pagination to the workers listing page.
- Each page loads **9–12 cards** per page for a smooth experience.

### 5. Service Filters
- Filters added for **price per day** and **type of service**.
- Fully integrated with pagination for seamless functionality.

### 6. Bug Fixes
- Fixed layout, responsiveness, and configuration issues in `page.tsx` and related components.
- Resolved console warnings and errors.
- Improved maintainability and readability of code.

### 7. API Integration
- Created `/api/workers` API route to serve the existing JSON data.
- Frontend updated to **fetch data via API** using `useEffect` and `fetch`.
- Existing JSON import logic **commented out** for reference.
- Implemented:
  - Loading state with skeleton screens.
  - Error handling for failed API requests.
  - Basic memoization to prevent redundant API calls.

---

## Technologies Used

- **Frontend:** React, Next.js, TypeScript, Tailwind CSS  
- **State & Data Fetching:** useEffect, fetch, memoization  
- **Optimizations:** Lazy loading, Skeleton screens, Performance enhancements  
- **Component Development:** Modular and reusable component-driven architecture  
- **Version Control:** Git with detailed commit history  

---

## Extra Improvements

- Enhanced UI/UX with subtle hover effects and transitions.
- Fully responsive design for all devices.
- Clean, readable, and maintainable codebase following best practices.

