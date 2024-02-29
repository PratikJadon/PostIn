import mongoose, { Mongoose } from "mongoose";
const postSchema = new mongoose.Schema([
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    totalCount: {
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
