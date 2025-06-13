# Modern Chat Application

A real-time chat application built with React, featuring a modern UI and robust authentication system.

## Features

- 🔐 **Secure Authentication**
  - User registration and login
  - Protected routes
  - Persistent authentication state

- 💬 **Chat Functionality**
  - Real-time messaging
  - User profiles
  - Chat history

- 👤 **User Management**
  - Profile customization
  - User settings
  - Profile viewing

- 🎨 **Modern UI/UX**
  - Clean and intuitive interface
  - Responsive design
  - Toast notifications for better user feedback
  - Loading states and animations

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.10
- **Routing**: React Router DOM 6.28.0
- **State Management**: Zustand 5.0.1
- **HTTP Client**: Axios 1.7.7
- **Real-time Communication**: Socket.IO Client 4.8.1
- **UI Components & Styling**: 
  - TailwindCSS 3.4.15
  - DaisyUI 4.12.14
  - Lucide React 0.459.0 (Icons)
- **Notifications**: React Hot Toast 2.4.1
- **Development Tools**:
  - ESLint 9.13.0
  - PostCSS 8.4.49
  - Autoprefixer 10.4.20

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. For production build
```bash
npm run build
# or
yarn build
```

5. Preview production build
```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── store/         # Zustand state management
│   ├── assets/        # Static assets
│   └── App.jsx        # Main application component
├── public/            # Public static files
├── index.html         # Entry HTML file
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
└── package.json       # Project dependencies and scripts
```

## Routes

- `/` - Home page (protected, requires authentication)
- `/login` - Login page
- `/signup` - Registration page
- `/profile` - User profile (protected)
- `/settings` - User settings
- `/logout` - Logout functionality


