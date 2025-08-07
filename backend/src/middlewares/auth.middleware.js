import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token; // getting the jwt_token from cookies then assigning to token
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorised - no token provided" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const user = await userModel
      .findById(decodedToken.userId)
      .select("-password"); //inside decodedToken there is userId

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in auth Middleware", error.message);
  }
};
