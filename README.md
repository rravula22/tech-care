# Tech Care Dashboard

This repository contains the **Tech Care** dashboard application built with Next.js and TypeScript. The app provides a user interface for managing and viewing dashboard data.

## 🚀 Features

- Next.js app with server components and pages structure
- Dashboard layout with header, left and right navigation
- TypeScript types and utility functions
- API route for fetching dashboard data

## 🛠️ Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **ESLint**
- **PostCSS**

## 📁 Project Structure

```
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    api/dashboard/route.ts
    dashboard/
      Dashboard.tsx
      Dashboard.types.ts
      Header.tsx
      LeftNav.tsx
      RightNav.tsx
    lib/dashboard/
      fetchDashboard.ts
```

## 💡 Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/your-org/tech-care.git
   cd tech-care
   ```

2. Install dependencies:

   ```bash
   npm install
   # or yarn
   ```

3. Run development server:

   ```bash
   npm run dev
   # or yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build

```bash
npm run build
npm start
```

## 🧪 Testing

*(Add testing instructions if applicable)*

## 📄 License

MIT
