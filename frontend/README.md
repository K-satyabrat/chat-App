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

- **Frontend Framework**: React
- **Routing**: React Router
- **State Management**: Custom store (useAuthStore)
- **UI Components**: Custom components with modern styling
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation


1. Install dependencies
```bash
npm install
# or
yarn install
```

2. Start the development server
```bash
npm run dev
# or
yarn dev
```
## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── store/         # State management
│   └── App.jsx        # Main application component
```

## Routes

- `/` - Home page (protected, requires authentication)
- `/login` - Login page
- `/signup` - Registration page
- `/profile` - User profile (protected)
- `/settings` - User settings
- `/logout` - Logout functionality


