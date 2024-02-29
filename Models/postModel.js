import mongoose, { Mongoose } from "mongoose";
const postSchema = new mongoose.Schema([
  {
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    totalLikes: {
      type: Number,
      default: 0,
    },
    likes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    comments: [
      { type: mongoose.Types.ObjectId, ref: "User" },
      { Caption: String },
    ],
  },
]);
export default mongoose.model("post", postSchema);
