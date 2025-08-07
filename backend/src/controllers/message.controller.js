import { userModel } from "../models/user.model.js";
import messageModel from "../models/message.model.js";
import { v2 as cloudinary } from "cloudinary";
import { getReceiveSocketId } from "../lib/socket.js";
import { io } from "../lib/socket.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await userModel
      .find({
        _id: { $ne: loggedInUserId },
      })
      .select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSideBar ", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const messages = await messageModel.find({
      $or: [
        { senderId: myId, recieverId: userToChatId },
        { senderId: userToChatId, recieverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error in getUsersForSideBar ", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new messageModel({
      senderId,
      recieverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();
    //
    const receiverSocketId = getReceiveSocketId(recieverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    return res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in getUsersForSideBar ", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};
