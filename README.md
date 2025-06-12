# Real-Time Chat Application

A modern, full-stack real-time chat application built with React, Node.js, and Socket.IO. This application provides real-time messaging capabilities with features like user authentication, message persistence, and a responsive UI.

## 🚀 Features

- Real-time messaging using Socket.IO
- User authentication and authorization
- Responsive and modern UI with Tailwind CSS
- Message persistence using MongoDB
- File sharing capabilities
- Online/offline user status
- Message read receipts
- User profile management

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Socket.IO Client
- React Router DOM
- Zustand (State Management)
- Axios
- React Hot Toast (Notifications)
- DaisyUI (UI Components)

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Cloudinary for file storage
- Cookie Parser
- CORS enabled

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- MongoDB
- npm or yarn package manager

## 🚀 Getting Started


### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application should now be running at `http://localhost:5173`

## 📁 Project Structure

```
chat-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── index.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── store/
    │   ├── utils/
    │   └── App.jsx
    ├── package.json
    └── index.html
```

## 🔒 Environment Variables

### Backend (.env)
- `PORT`: Server port number
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name
- `CLOUDINARY_API_KEY`: Cloudinary API key
- `CLOUDINARY_API_SECRET`: Cloudinary API secret

## 📝 API Documentation

The backend API documentation is available in the backend README.md file. Please refer to it for detailed API endpoints and usage.






