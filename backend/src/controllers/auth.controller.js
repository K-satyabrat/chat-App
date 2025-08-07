import { generateToken } from "../lib/utils.js";
import { userModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

//SignUP controller
export const signup = async (req, res) => {
  try {
    const { email, fullname, password } = req.body;

    if (!email || !fullname || !password) {
      return res.status(400).json({ message: "all fields required" });
    }
    if (password.length < 6)
      return res.status(400).json({ message: "password must be 6 characters" });

    const user = await userModel.findOne({ email });
    if (user) return res.status(400).json({ message: "email already exist" });

    const salt = await bcrypt.genSalt(10);
    const hasspassword = await bcrypt.hash(password, salt); //await bcrypt.hash(password, await bcrypt.genSalt(10));

    const newUser = new userModel({
      fullname,
      email,
      password: hasspassword,
    });
    /*newUser = new userModel(...)
This line creates a Mongoose document (a user object), but it does not save it to the database yet.*/
    if (newUser) {
      generateToken(newUser._id, res); //This _id is a MongoDB ObjectId, and it's generated immediately when the document is created in memory, even before it's saved to the database.
      await newUser.save();

      return res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        profile_pic: newUser.profile_pic,
      });
    } else {
      return res.status(400).json({ message: "invalid user data" });
    }
  } catch (error) {
    console.error("signup error", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "invalid credential" });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "invalid credential" });
    generateToken(user._id, res);
    return res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      profile_pic: user.profile_pic,
    });
  } catch (error) {
    console.error("login error", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//logout controller
export const logout = (req, res) => {
  try {
    res.cookie("jwt_token", "", { maxAge: 0 });
    return res.status(200).json({ message: "logout successfully" });
  } catch (error) {
    console.error("logout error", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Profile update
export const updateProfile = async (req, res) => {
  try {
    const { profile_pic } = req.body;
    const userId = req.user._id;

    if (!profile_pic) {
      return res.status(400).json({ message: "profile_pic is required" });
    }
    const uploadResponse = await cloudinary.uploader.upload(profile_pic);
    const upadatedUser = await userModel.findByIdAndUpdate(
      userId,
      {
        profile_pic: uploadResponse.secure_url,
      },
      { new: true }
    );
    return res.status(201).json(upadatedUser);
  } catch (error) {
    console.error("logout error", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({ message: "Internal server Error" });
  }
};
