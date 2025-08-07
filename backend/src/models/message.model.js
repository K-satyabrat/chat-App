import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recieverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      reequired: true,
    },
    image: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const messageModel = mongoose.model("Message", messageSchema);
export default messageModel;
