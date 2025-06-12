import express from "express";
import authRoute from "./routes/auth.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDb } from "./lib/db.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
import { app, server } from "./lib/socket.js";
import path from "path"


// Load environment variables
dotenv.config();

// Connect to database
connectDb();


const port = process.env.PORT || 5000;
const __dirname = path.resolve()

// Middleware
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoutes);

// Production environment setup
if(process.env.NODE_ENV === "production") {
  // Serve static files from the frontend dist directory
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));
  
  // Handle all other routes by serving the index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
} else {
  // Development route check
  app.get("/", (req, res) => {
    res.send("Hare - Development Server");
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: process.env.NODE_ENV === "production" 
      ? "Internal server error" 
      : err.message 
  });
});

// Start server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
