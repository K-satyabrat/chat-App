import express from "express";
import authRoute from "./routes/auth.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDb } from "./lib/db.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
import { app, server } from "./lib/socket.js";


// Load environment variables
dotenv.config();

// Connect to database
connectDb();


const port = process.env.PORT || 5000;

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

// route check
app.get("/", (req, res) => {
  res.send("Hare Krishna");
});

// Start server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
