# MyEcommerce React App

A modern React-based e-commerce frontend built with Vite, React Router, and Material-UI, featuring authentication, protected routes, and clean UI design.

---

## Features

- **Project setup with Vite & React 18**
- Responsive **Navigation Bar** with routing (Home, Login, Dashboard)
- **Authentication workflow** with mock login/logout and React Context API
- Protected **Dashboard route** accessible only after login
- Clean and modern UI using **Material-UI (MUI)**
- User session persistence using `localStorage`

---

## Getting Started

### Prerequisites

- Node.js v16+ installed
- npm or yarn package manager

### Installation

```bash
git clone https://github.com/yourusername/myecommerce.git
cd myecommerce
npm install

```
## Running the app
```bash
npm run dev
```

## Project Structure
```bash
src/
 ├── assets/           # Static assets like images
 ├── components/       # Reusable UI components (NavBar, PrivateRoute)
 ├── context/          # React Context providers (AuthContext)
 ├── pages/            # Route pages (Home, Login, Dashboard)
 ├── styles/           # Optional styles and theme files
 ├── App.jsx           # Main app component with routes
 └── main.jsx          # Entry point rendering App
```

## Authentication Details
1. Login accepts credentials:
Email: user@example.com
Password: password

2. User session persists in localStorage

3. Dashboard page is protected; redirects to Login if not authenticated

## Technologies Used:
1. React 18
2. Vite (Fast dev server & bundler)

3. React Router v6 (Routing)

4. Material-UI v5 (UI components)

5. React Context API (State management for auth)

## Future Enhancements
1. Connect with real backend API for authentication & products

2. Add product listing and shopping cart

3. Implement signup and password reset

4. Add unit and integration tests

5. Deploy to Vercel or Netlify