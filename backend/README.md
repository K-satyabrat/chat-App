# Chat Application Backend

A robust backend server for the chat application built with Express.js, featuring real-time messaging, authentication, and database integration.

## Features

- 🔐 **Authentication System**
  - User registration and login
  - Cookie-based session management
  - Secure password handling

- 💬 **Message Management**
  - Real-time message handling
  - Message storage and retrieval
  - API endpoints for message operations

- 🛠️ **Technical Features**
  - RESTful API architecture
  - CORS enabled for frontend integration
  - Cookie parsing
  - JSON body parsing with large payload support
  - Environment variable configuration
  - Database integration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via connection in lib/db.js)
- **Authentication**: Custom auth system with cookies
- **Environment Variables**: dotenv
- **CORS**: Enabled for frontend integration
- **Body Parser**: Built-in Express with extended limits

## API Endpoints

### Authentication Routes (`/api/auth`)
- User registration
- User login
- User logout
- Authentication status

### Message Routes (`/api/messages`)
- Send messages
- Get messages
- Message history

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- MongoDB database
- npm or yarn package manager

### Environment Setup

Create a `.env` file in the root directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
# Add other environment variables as needed
```

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

The server will run at `http://localhost:5000` by default.

## Project Structure

```
backend/
├── src/
│   ├── routes/         # API route handlers
│   │   ├── auth.route.js
│   │   └── message.route.js
│   ├── lib/           # Utility functions and configurations
│   │   └── db.js      # Database connection
│   └── index.js       # Main application entry point
```

## API Configuration

- **CORS**: Configured for `http://localhost:5173` (frontend)
- **Body Parser**: 
  - JSON limit: 50MB
  - URL-encoded: Extended mode with 50MB limit
- **Cookie Parser**: Enabled for session management



